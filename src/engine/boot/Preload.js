import BaseScene from '@scenes/base/BaseScene'

import Login from '@scenes/interface/menus/login/Login'
import Create from '@scenes/interface/menus/create/Create'
import PenguinSelect from '@scenes/interface/menus/login/penguin_select/PenguinSelect'
import PenguinLogin from '@scenes/interface/menus/login/penguin_login/PenguinLogin'
import Servers from '@scenes/interface/menus/servers/Servers'
import Main from '@scenes/interface/game/main/Main'
import IglooEdit from '@scenes/interface/game/iglooedit/IglooEdit'
import Activate from '@scenes/interface/menus/activate/Activate'
import Register from '@scenes/interface/menus/register/Register'

export default class Preload extends BaseScene {
    preload() {
        this.load.cacheBuster = VERSION

        this.load.on('progress', this.onProgress, this)

        this.load.pack('preload', 'client/media/preload/preload-pack.json')
        this.load.pack('secretframes', 'client/media/preload/secret-frames.json')

        this.scene.add('Create', Create)
        this.scene.add('Login', Login)
        this.scene.add('Activate', Activate)
        this.scene.add('Register', Register)
        this.scene.add('PenguinSelect', PenguinSelect)
        this.scene.add('PenguinLogin', PenguinLogin)
        this.scene.add('Servers', Servers)
        this.scene.add('Main', Main)
        this.scene.add('IglooEdit', IglooEdit)

        document.getElementsByTagName('canvas')[0].id = 'game_canvas'
        document.getElementsByTagName('canvas')[0].style.borderRadius = '10px'

        window.lowerQuality = this.lowerQuality.bind(this)
        window.raiseQuality = this.raiseQuality.bind(this)

        window.updateScaling = this.updateScaling.bind(this)
        // By default Phaser doesn't update the zoom on window resize. This checks every second, and also will be called on room loads, and window resize.
        window.updateScaling()
        //setInterval(window.updateScaling, 1000)
        window.addEventListener('resize', () => window.updateScaling())
    }

    updateScaling() {
        let heightMultiplier = document.getElementById('game').clientHeight / (window.currentScale * 960)
        let widthMultiplier = document.getElementById('game').clientWidth / (window.currentScale * 1520)

        if (heightMultiplier < widthMultiplier) {
            this.scale.setZoom(heightMultiplier)
        } else {
            this.scale.setZoom(widthMultiplier)
        }

        // Control game quality
        for (let scene of this.game.scene.scenes) {
            if (!scene.cameras.main) continue
            scene.cameras.main.setZoom(window.currentScale)
            scene.cameras.main.setOrigin(0, 0)
        }
    }

    lowerQuality() {
        if (localStorage.quality == 'high') {
            localStorage.quality = 'medium'
            window.currentScale = 0.7
        } else if (localStorage.quality == 'medium') {
            localStorage.quality = 'low'
            window.currentScale = 0.4
        } else {
            return
        }
        this.scale.setGameSize(1520 * window.currentScale, 960 * window.currentScale)
        window.updateScaling()
    }

    raiseQuality() {
        if (localStorage.quality == 'low') {
            localStorage.quality = 'medium'
            window.currentScale = 0.7
        } else if (localStorage.quality == 'medium') {
            localStorage.quality = 'high'
            window.currentScale = 1
        } else {
            return
        }
        this.scale.setGameSize(1520 * window.currentScale, 960 * window.currentScale)
        window.updateScaling()
    }

    async create() {
        this.fontsLoaded = 0
        for (let font of this.crumbs.fonts) {
            this.loadFont(font.name, font.url, font.style ? font.style : 'normal', font.weight ? font.weight : 'normal').then(() => {
                this.fontsLoaded++
                if (this.fontsLoaded == this.crumbs.fonts.length) {
                    this._create()
                }
            })
        }
    }

    _create() {
        let parent = this.game.config.parent

        document.querySelector(`#${parent} canvas`).onclick = () => {
            // Removes input focus from active element
            document.activeElement.blur()
        }

        let lang = 'pt'

        if (window.location.pathname.includes('en')) {
            lang = 'en'
        } else if (window.location.pathname.includes('es')) {
            lang = 'es'
        } else if (window.location.pathname.includes('de')) {
            lang = 'de'
        } else if (window.location.pathname.includes('fr')) {
            lang = 'fr'
        } else if (window.location.pathname.includes('ru')) {
            lang = 'ru'
        }

        // Set crumbs
        let crumbs = this.cache.json.get(`crumbs-${lang}`)

        for (let c in crumbs) {
            this.crumbs[c] = crumbs[c]
        }

        this.crumbs.getString = (key) => {
            key = key.toString()
            let result = this.crumbs.strings[key]
            if (key.includes(',')) {
                result = this.crumbs.strings[key.split(',')[0]]
                let args = key.split(',').slice(1)
                for (let i = 0; i < args.length; i++) {
                    result = result.replace(`{args[${i}]}`, args[i])
                }
            }
            if (!result) result = `localisedString.${key}`
            return result
        }

        this.crumbs.getError = (key) => {
            key = key.toString()
            let result = this.crumbs.strings.errors[key]
            if (key.includes(',')) {
                result = this.crumbs.strings.errors[key.split(',')[0]]
                let args = key.split(',').slice(1)
                for (let i = 0; i < args.length; i++) {
                    result = result.replace(`{args[${i}]}`, args[i])
                }
            }
            return result
        }

        // Start
        this.interface.hideLoading()
        this.scene.start('InterfaceController')
        let queryString = window.location.href.substring(window.location.href.indexOf('?') + 1, window.location.href.length)
        if (queryString == 'create') return this.scene.start('Create')
        if (queryString.includes('activate')) {
            this.scene.start('Activate')
            let details = queryString.split('=')[1]
            window.email = details.substring(0, details.indexOf('&'))
            window.activationCode = details.substring(details.indexOf('&') + 1, details.length)
            return
        }
        if (queryString.includes('register')) {
            this.scene.start('Register')
            let details = queryString.split('=')[1]
            window.username = details.substring(0, details.indexOf('&'))
            window.betaKey = details.substring(details.indexOf('&') + 1, details.length)
            return
        }
        if (queryString.includes('twofa')) {
            let details = queryString.split('=')[1]
            let id = details.substring(0, details.indexOf('&'))
            let code = details.substring(details.indexOf('&') + 1, details.length)

            this.send2FA(id, code)
        }
        if (this.airtower.isSavedPenguins) return this.scene.start('PenguinSelect')
        this.scene.start('Login')
    }

    send2FA(id, code) {
        this.airtower.connectLogin(false, false, () => {
            this.airtower.sendXml(`<msg t='sys'><body action='2fa' r='0'><id>${id}</id><code>${code}</code></body></msg>`)
        })
    }

    onProgress(progress) {
        let frame = Math.round(progress * 58) + 1
        let prog = frame.toString().length == 1 ? `0${frame}` : frame
        this.interface.loading.bar.setFrame(`beam_00${prog}`)
    }

    async loadFont(name, url, style = 'normal', weight = 'normal') {
        var newFont = new FontFace(name, `url('${url}')`, {
            style: style,
            weight: weight,
        })
        let loaded = await newFont.load()
        document.fonts.add(loaded)
        return true
    }
}
