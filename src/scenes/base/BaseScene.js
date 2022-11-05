export default class BaseScene extends Phaser.Scene {
    get crumbs() {
        return this.game.crumbs
    }

    get airtower() {
        return this.game.airtower
    }

    get interface() {
        return this.scene.get('InterfaceController')
    }

    get shell() {
        return this.scene.get('Shell')
    }

    getString(...args) {
        return args.map((id) => this.crumbs.getString(id)).join(' ')
    }
}
