export default class IglooFactory {
    constructor(shell) {
        this.shell = shell

        this.scene = shell.scene
        this.igloos = shell.crumbs.scenes.igloos
    }

    createIgloo(args) {
        let config = this.igloos[args[2]]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, {args: args})

            return this.scene.get(config.key)
        } else {
            return this.scene.add(config.key, config.scene, true, {args: args})
        }
    }

    createIglooPreview(args) {
        let config = this.igloos[args[2]]
        console.log(config)
        config.key = config.key.includes('preview') ? config.key : `${config.key}-preview`

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, {args: args})

            this.shell.scene.bringToTop(config.key)
            return this.scene.get(config.key)
        } else {
            this.shell.scene.bringToTop(config.key)
            return this.scene.add(config.key, config.preview, true, {args: args})
        }
    }
}
