import Plugin from '../Plugin'
import Unlock from '@scenes/interface/menus/unlock/Unlock'

export default class Login extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            l: this.login,
            ga: this.gameAuth,
            ma: this.modAuth,
            ua: this.unlockAuth,
            at: this.authToken,
        }
    }

    get loginScene() {
        return this.scene.getScene('Login')
    }

    login(args) {
        this.interface.hideLoading()

        if (args[0] == 't') return this.scene.start('Servers', args)
        if (!this.airtower.lastLoginScene) return this.scene.start('Login')

        let scene = this.scene.getScene(this.airtower.lastLoginScene)

        scene.events.once('create', () => this.onLoginError(args[1]))
        this.scene.start(this.airtower.lastLoginScene)
    }

    onLoginError(message) {
        this.loginScene.events.emit('hideinput')

        this.interface.prompt.showError(this.crumbs.getError(message), 'Okay', () => {
            this.loginScene.events.emit('showinput')

            this.interface.prompt.error.visible = false
        })
    }

    gameAuth(args) {
        this.airtower.sendXt('l#lp')
    }

    modAuth(args) {
        this.interface.loadExternal('ModPanel')
    }

    unlockAuth(args) {
        this.interface.showLoading()
        this.scene.add('Unlock', Unlock)
        this.scene.start('Unlock')
    }

    authToken(args) {
        if (args[0]) this.airtower.token = args[0]
    }
}
