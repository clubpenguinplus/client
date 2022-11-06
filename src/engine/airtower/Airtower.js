import PluginManager from './plugins/PluginManager'

import io from 'socket.io-client'
import AES from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'

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
    }

    get interface() {
        let inf = this.game.scene.getScene('InterfaceController')
        inf.bringToTop()
        return inf
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword
        if (!onConnect) onConnect = () => {}

        this.connect(
            'Login',
            () => {
                this.serverWorking = true
                onConnect()
            },
            () => {
                this.disconnect()
            }
        )
    }

    connectGame(world, username, key, mode = 'game') {
        this.creds = {world: world, username: username, key: key, mode: mode}
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = [username, key, '', createToken]

        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)

        if (token) {
            response[2] = token.split(':')[0]
        }

        if (mode == 'game') {
            this.connect(
                world,
                () => {
                    this.sendXt('auth#g', response)
                    this.worldName = world
                },
                () => {
                    this.onConnectionLost()
                }
            )
        } else if (mode == 'mod') {
            this.connect(
                world,
                () => {
                    this.sendXt('auth#m', response)
                    this.worldName = world
                },
                () => {
                    this.onConnectionLost()
                }
            )
        } else if (mode == 'unlock') {
            this.connect(
                world,
                () => {
                    this.sendXt('auth#u', response)
                    this.worldName = world
                },
                () => {
                    this.onConnectionLost()
                }
            )
        }
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()
        if (!onConnect) onConnect = () => {}
        if (!onDisconnect) onDisconnect = () => {}

        let config = window.location.hostname == 'localhost' ? this.crumbs.worlds.sandbox[world] : this.crumbs.worlds[world]

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
            console.log('[Airtower] XT packet sent:', `%xt%s%${action}%${args}%`)
        }
        let payload = AES.encrypt(`%xt%s%${action}%${args}%`, `Client${new Date().getUTCHours()}Key`).toString()
        this.client.emit('message', payload)
    }

    sendXml(xml) {
        if (window.location.hostname == 'localhost') {
            console.log('[Airtower] XML packet sent:', xml)
        }
        let payload = AES.encrypt(xml, `Client${new Date().getUTCHours()}Key`).toString()
        this.client.emit('message', payload)
    }

    // Handlers

    onMessage(message) {
        let payload = AES.decrypt(message, `Server${new Date().getUTCHours()}Key`)
        this.handle(payload.toString(enc))
    }

    onConnectionLost() {
        if (!this.serverWorking) {
            this.interface.prompt.showError('There appears to be an issue with our servers. Please try again later!', 'Reload', () => window.location.reload())
            this.interface.prompt.error.disconnectOverwrite = true
            this.doNotReconnect = true
            return
        }
        if (this.reconTimeout || this.doNotReconnect) return
        this.disconnect()

        setTimeout(() => this.checkConnection(), 1000)
        this.runs = 0
    }

    checkConnection() {
        if (!this.client.connected) {
            this.checkConnection2()
            this.allowSwitchRooms = 'no'
        }
    }

    checkConnection2() {
        if (!this.creds) this.runs = 10
        if (!this.client.connected && this.runs < 10) {
            this.runs = this.runs + 1
            this.connectGame(this.creds.world, this.creds.username, this.creds.key, this.creds.mode)
            if (!this.interface.prompt.error.disconnectOverwrite) this.interface.prompt.showError('Connection was lost.\nAttempting to recconnect you.', 'Reload', () => window.location.reload())
            this.reconTimeout = setTimeout(() => this.checkConnection2(), 3000)
        } else if (!this.client.connected) {
            if (!this.interface.prompt.error.disconnectOverwrite) this.interface.prompt.showError('Connection was lost.\nPlease click to reload.', 'Reload', () => window.location.reload())
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

            if (window.location.hostname == 'localhost') {
                console.log('[Airtower] Message received:', message)
            }

            if (type != 'xt') {
                if (this.creation) {
                    if (message == 'U#KO') {
                        this.creation.invalidUsername()
                    } else if (message == 'U#OK') {
                        this.creation.chooseColor()
                    } else if (message == 'E#KO') {
                        this.creation.invalidEmail()
                    } else if (message == 'E#OK') {
                        this.creation.submitSignup()
                    } else if (message == 'R#OK') {
                        this.creation.accountCreated()
                    }
                    return
                } else if (this.activate) {
                    if (message == 'A#OK') {
                        this.activate.accountActivated()
                    } else if (message == 'A#KO') {
                        this.activate.invalidCode()
                    }
                } else if (this.register) {
                    if (message == 'R#OK') {
                        this.register.keyRegistered()
                    } else if (message == 'R#KO') {
                        this.register.invalidKey()
                    }
                } else if (message == 'KO') {
                    if (!this.lastLoginScene) return this.scene.start('Login')

                    let scene = this.scene.getScene(this.lastLoginScene)

                    scene.events.once('create', () => this.onLoginError('error'))
                    this.scene.start(this.lastLoginScene)
                    return
                } else if (message == 'OK') {
                    if (this.password) {
                        this.sendXml(`<msg t='sys'><body action='login' r='0'><login z='w1'><nick><!${this.username}></nick><pword><!${this.password}></pword></login></body></msg>`)
                        this.password = null
                    } else {
                        this.sendXml(`<msg t='sys'><body action='token_login' r='0'><login z='w1'><nick><!${this.username}></nick><token><!${this.token}></token></login></body></msg>`)
                        this.token = null
                    }
                    return
                } else {
                    let parsed = JSON.parse(message)

                    return this.fireEvent(parsed.action, parsed.args)
                }
            }

            this.fireEvent(identifier, args)
        } catch (error) {
            console.error(error)
        }
    }

    fireEvent(event, args) {
        // Switch to a listener based system eventually
        this.handlers.getEvent(event, args)
    }
}
