export default class Plugin {
    constructor(airtower) {
        this.airtower = airtower
        this.game = airtower.game
        this.crumbs = this.game.crumbs
        this.scene = this.game.scene
    }

    get interface() {
        return this.scene.getScene('InterfaceController')
    }

    get shell() {
        return this.scene.getScene('Shell')
    }

    getString(...args) {
        return this.shell.getString(...args)
    }
}
