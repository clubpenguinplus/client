import BaseScene from '@scenes/base/BaseScene'

import Login from '@scenes/interface/menus/login/Login'
import Create from '@scenes/interface/menus/create/Create'
import PenguinSelect from '@scenes/interface/menus/login/penguin_select/PenguinSelect'
import PenguinLogin from '@scenes/interface/menus/login/penguin_login/PenguinLogin'
import Servers from '@scenes/interface/menus/servers/Servers'
import Main from '@scenes/interface/game/main/Main'
import IglooEdit from '@scenes/interface/game/iglooedit/IglooEdit'
import Activate from '@scenes/interface/menus/activate/Activate'

export default class Preload extends BaseScene {
    preload() {
        this.load.cacheBuster = VERSION

        this.load.on('progress', this.onProgress, this)

        this.load.pack('preload', 'client/media/preload/preload-pack.json')

        this.scene.add('Create', Create)
        this.scene.add('Login', Login)
        this.scene.add('Activate', Activate)
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
        this.currentFont = 0
        let fonts = await this.loadFonts()

        console.log(fonts)

        if (!fonts) return

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

        this.crumbs.colors = crumbs.colors
        this.crumbs.flooring = crumbs.flooring
        this.crumbs.furniture = crumbs.furniture
        this.crumbs.igloos = crumbs.igloos
        this.crumbs.items = crumbs.items
        this.crumbs.penguin = crumbs.penguin
        this.crumbs.quickKeys = crumbs.quick_keys
        this.crumbs.safeMessages = crumbs.safe_messages
        this.crumbs.secretFrames = crumbs.secret_frames
        this.crumbs.strings = crumbs.strings
        this.crumbs.worlds = crumbs.worlds
        this.crumbs.stamps = crumbs.stamps
        this.crumbs.puffles = crumbs.puffles

        this.crumbs.getString = (key) => {
            let result = this.crumbs.strings[key]
            if (key.includes(',')) {
                result = this.crumbs.strings[key.split(',')[0]]
                let args = key.split(',').slice(1)
                for (let i = 0; i < args.length; i++) {
                    result = result.replace(`{args[${i}]}`, args[i])
                }
            }
            return result
        }

        this.crumbs.getError = (key) => {
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
        if (queryString === 'create') return this.scene.start('Create')
        if (queryString.includes('activate')) {
            this.scene.start('Activate')
            let accDeets = queryString.split('=')[1]
            window.email = accDeets.substring(0, accDeets.indexOf('&'))
            window.activationCode = accDeets.substring(accDeets.indexOf('&') + 1, accDeets.length)
            return
        }
        if (this.airtower.isSavedPenguins) return this.scene.start('PenguinSelect')
        this.scene.start('Login')
    }

    onProgress(progress) {
        let frame = Math.round(progress * 58) + 1
        let prog = frame.toString().length == 1 ? `0${frame}` : frame
        this.interface.loading.bar.setFrame(`beam_00${prog}`)
    }

    async loadFonts() {
        var font = this.crumbs.fonts[this.currentFont]
        let f = await this.loadFont(font.name, font.url, font.style ? font.style : 'normal', font.weight ? font.weight : 'normal')
        console.log(f, this.currentFont, this.crumbs.fonts.length)
        if (f) {
            this.currentFont++
            if (this.currentFont < this.crumbs.fonts.length) {
                return await this.loadFonts()
            } else {
                return true
            }
        }
    }

    async loadFont(name, url, style = 'normal', weight = 'normal') {
        var newFont = new FontFace(name, `url('${url}')`, {
            style: style,
            weight: weight,
        })
        let loaded = await newFont.load()
        document.fonts.add(loaded)
        console.log(`Loaded font ${name}`)
        return true
    }
}
