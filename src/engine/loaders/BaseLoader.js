export default class BaseLoader extends Phaser.Loader.LoaderPlugin {
    constructor(scene) {
        super(scene)
    }

    get crumbs() {
        return this.scene.crumbs
    }

    get airtower() {
        return this.scene.airtower
    }

    get interface() {
        return this.scene.interface
    }

    get shell() {
        return this.scene.shell
    }

    getKey(...args) {
        let key = args.join('')
        let prefix = this.keyPrefix || ''

        return `${prefix}${key}`
    }

    getKeyId(key) {
        let split = key.split('/')
        let last = split[split.length - 1]

        return parseInt(last)
    }

    checkComplete(type, key, callback) {
        if (this.textureExists(key)) {
            callback()
            return true
        }

        this.once(`filecomplete-${type}-${key}`, callback)
    }

    textureExists(key) {
        return this.scene.textures.exists(key)
    }
}
