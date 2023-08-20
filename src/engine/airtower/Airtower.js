import PluginManager from './plugins/PluginManager'

import io from 'socket.io-client'
import AES from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'

const EventEmitter = require('events')

export default class Airtower {
    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs

        this.handlers = new PluginManager(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
        this.token = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.worldName

        this.encryptionKeys = {}

        this.events = new EventEmitter()
    }

    get interface() {
        let inf = this.game.scene.getScene('InterfaceController')
        inf.bringToTop()
        return inf
    }

    get language() {
        for (let lang of ['en', 'es', 'pt']) {
            if (window.location.pathname.includes(lang)) {
                return lang
            }
        }
        return 'en'
    }

    // Generate primary encryption keys

    caesarCipherEncryptHex(text, key) {
        let result = ''
        for (let i = 0; i < text.length; i++) {
            let char = text[i]
            if (char.match(/[0-9a-f]/i)) {
                let code = parseInt(char, 16)
                code = (code + key) % 16
                char = code.toString(16)
            }
            result += char
        }
        return result
    }

    generatePrimaryKey(caeserOffset) {
        const now = new Date()

        const hours = now.getUTCHours()
        const date = now.getUTCDate()
        const day = now.getUTCDay()

        const keyNum = hours * date * day
        const keyHex = keyNum.toString(16)

        const key = this.caesarCipherEncryptHex(keyHex, caeserOffset)

        return key
    }

    generatePrimaryServerKey() {
        const key = this.generatePrimaryKey(3) + this.generatePrimaryKey(7) + '9yXruyv2L7PQzmAWHYQmcmNS'
        return key
    }

    generatePrimaryClientKey() {
        const key = this.generatePrimaryKey(5) + this.generatePrimaryKey(11) + 'KSd7zZ9bCKgxBvPcPJXUBgHV'
        return key
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword
        if (!onConnect) onConnect = () => {}

        this.connect(
            'Login',
            () => {
                this.serverWorking = true
                this.worldName = 'Login'
                this.encryptionKeys['Login'] = {
                    client: this.generatePrimaryClientKey(),
                    server: this.generatePrimaryServerKey()
                }
                onConnect()
            },
            () => {
                this.disconnect()
            }
        )

        this.loginReconnect = () => this.connectLogin(saveUsername, savePassword, onConnect)
    }

    connectGame(world, username, key, mode = 'game') {
        this.creds = {world: world, username: username, key: key, mode: mode}
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = [username, key, '', createToken, this.language]

        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)

        if (token) {
            response[2] = token.split(':')[0]
        }

        const messageTypes = {
            game: 'g',
            mod: 'm',
            unlock: 'u'
        }

        this.connect(
            world,
            () => {
                this.worldName = world
                this.encryptionKeys[world] = {
                    client: this.generatePrimaryClientKey(),
                    server: this.generatePrimaryServerKey()
                }
                const messageType = messageTypes[mode]
                this.sendXt(`auth#${messageType}`, response)
            },
            () => {
                this.onConnectionLost()
            }
        )
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()
        this.reconTimeout = null
        if (!onConnect) onConnect = () => {}
        if (!onDisconnect) onDisconnect = () => {}

        let environment
        switch (true) {
            case window.location.hostname.includes('beta') || localStorage.joinProd == 'true':
                environment = 'dev'
                break
            case window.location.hostname.includes('play'):
                environment = 'live'
                break
            default:
                environment = 'local'
        }

        let config = this.crumbs.worlds[environment][world]

        this.client = io.connect(config.host, {path: config.path})

        this.client.once('connect', onConnect)
        this.client.once('disconnect', onDisconnect)
        this.client.on('connect_error', () => this.onConnectionLost())
        this.client.on('message', (message) => this.onMessage(message))
    }

    disconnect() {
        if (this.client) {
            this.client.disconnect()
        }
    }

    sendXt(action, args = '') {
        if (typeof args == 'object') args = args.join('%')
        if (window.location.hostname == 'localhost') {
            console.info('[Airtower] XT packet sent:', `%xt%s%${action}%${args}%`)
        }
        let payload = AES.encrypt(`%xt%s%${action}%${args}%`, this.encryptionKeys[this.worldName].client).toString()
        this.client.emit('message', payload)
    }

    sendXml(xml) {
        if (window.location.hostname == 'localhost') {
            console.info('[Airtower] XML packet sent:', xml)
        }
        let payload = AES.encrypt(xml, this.encryptionKeys[this.worldName].client).toString()
        this.client.emit('message', payload)
    }

    // Handlers

    onMessage(message) {
        let payload = AES.decrypt(message, this.encryptionKeys[this.worldName].server)
        this.handle(payload.toString(enc))
    }

    onConnectionLost() {
        if (!this.serverWorking) {
            this.interface.prompt.showError(this.crumbs.getError('55'), this.crumbs.getString(this.crumbs.getString('reload')), () => window.location.reload())
            this.interface.prompt.error.disconnectOverwrite = true
            this.doNotReconnect = true
            return
        }
        if (this.reconTimeout || this.doNotReconnect) return
        this.disconnect()

        this.reconTimeout = setTimeout(() => this.checkConnection(), 1000)
        this.runs = 0
    }

    checkConnection() {
        if (!this.creds) this.runs = 10
        if (!this.client.connected && this.runs < 10) {
            this.runs = this.runs + 1
            this.connectGame(this.creds.world, this.creds.username, this.creds.key, this.creds.mode)
            if (!this.interface.prompt.error.disconnectOverwrite) this.interface.prompt.showError(this.crumbs.getError('56'), this.crumbs.getString('reload'), () => window.location.reload())
            this.reconTimeout = setTimeout(() => this.checkConnection(), 3000)
        } else if (!this.client.connected) {
            if (!this.interface.prompt.error.disconnectOverwrite) this.interface.prompt.showError(this.crumbs.getError('57'), this.crumbs.getString('reload'), () => window.location.reload())
            if (!document.getElementsByTagName('ruffle-player')[0]) return
            document.getElementsByTagName('ruffle-player')[0].onDisconnect()
        } else {
            this.reconTimeout = null
            this.interface.prompt.error.visible = false
        }
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')

        if (!savedPenguins) {
            return {}
        }

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    // Saves a player to local storage
    savePlayer(args) {
        let savedPenguins = this.savedPenguins

        if (Object.keys(savedPenguins).length > 6 && !(args[0].split('|')[1] in savedPenguins)) return

        let penguin = {}
        let arr = args[5].split('|')

        penguin.username = arr[1]
        penguin.color = arr[2]
        penguin.head = arr[3]
        penguin.face = arr[4]
        penguin.neck = arr[5]
        penguin.body = arr[6]
        penguin.hand = arr[7]
        penguin.feet = arr[8]

        savedPenguins[penguin.username.toLowerCase()] = penguin
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
    }

    // Deletes a player from local storage
    unsavePlayer(args) {
        let savedPenguins = this.savedPenguins

        if (args[4].split('|')[1] && args[4].split('|')[1].toLowerCase() in savedPenguins) {
            delete savedPenguins[args[0].split('|')[1].toLowerCase()]
            localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]

        if (save && save.token) {
            return save.token
        } else {
            return null
        }
    }

    // Data Handler

    handle(message) {
        try {
            let msgAsArray = message.split('%')
            let type = msgAsArray[1]
            let identifier = msgAsArray[2]
            let args = msgAsArray.slice(3)

            args = args.map((arg) => {
                switch (arg) {
                    case 'true':
                        return true
                    case 'false':
                        return false
                    case 'undefined':
                        return undefined
                    case 'null':
                        return null
                    default:
                        return arg
                }
            })

            while (args[args.length - 1] == '') {
                args.pop()
            }

            if (window.location.hostname == 'localhost') {
                console.info('[Airtower] Message received:', message)
            }

            if (type == 'xt') {
                return this.fireEvent(identifier, args)
            }

            switch (message) {
                case 'A#OK':
                    this.interface.prompt.showError(this.crumbs.getError('58'), this.crumbs.getString('okay'), () => (this.interface.prompt.error.visible = false))
                    return
                case 'A#KO':
                    this.interface.prompt.showError(this.crumbs.getError('59'), this.crumbs.getString('okay'), () => (this.interface.prompt.error.visible = false))
                    return
                case 'U#KO':
                    this.creation.invalidUsername()
                    return
                case 'U#OK':
                    this.creation.chooseColor()
                    return
                case 'E#KO':
                    this.creation.invalidEmail()
                    return
                case 'E#OK':
                    this.creation.submitSignup()
                    return
                case 'R#OK':
                    this.creation.accountCreated()
                    return
                case 'I#KO':
                    this.creation.unhandledError()
                    return
                case 'A#OK':
                    this.activate.accountActivated()
                    return
                case 'A#KO':
                    this.activate.invalidCode()
                    return
                case 'B#OK':
                    this.register.keyRegistered()
                    return
                case 'B#KO':
                    this.register.invalidKey()
                    return
                case 'PR#OK':
                    this.reset.passwordReset()
                    return
                case 'PR#KO':
                    this.reset.invalidCode()
                    return
                case 'KO':
                    if (!this.lastLoginScene) return this.game.scene.start('Login')

                    let scene = this.game.scene.getScene(this.lastLoginScene)

                    scene.events.once('create', () => this.interface.prompt.showError(this.crumbs.getError('60'), this.crumbs.getString('reload'), () => window.location.reload()))
                    this.game.scene.start(this.lastLoginScene)
                    return
                case 'OK':
                    if (this.password) {
                        this.sendXml(`<msg t='sys'><body action='login' r='0'><login z='w1'><nick><!${this.username}></nick><pword><!${this.password}></pword><saveToken><!${this.savePassword ? 'true' : 'false'}></saveToken></login></body></msg>`)
                        this.password = null
                    } else {
                        this.sendXml(`<msg t='sys'><body action='token_login' r='0'><login z='w1'><nick><!${this.username}></nick><token><!${this.token}></token><saveToken><!${this.savePassword ? 'true' : 'false'}></saveToken></login></body></msg>`)
                        this.token = null
                    }
                    return
            }
        } catch (error) {
            console.error(`[Airtower] ${error.stack}`)
        }
    }

    fireEvent(event, args) {
        this.events.emit(event, args)
        this.handlers.getEvent(event, args)
    }
}
