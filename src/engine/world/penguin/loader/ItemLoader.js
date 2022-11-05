import SpriteLoader from './SpriteLoader'

export default class ItemLoader extends SpriteLoader {
    constructor(penguin) {
        super(penguin.room.world)

        this.penguin = penguin
        this.equipped = this.penguin.items.equipped

        this.load = new Phaser.Loader.LoaderPlugin(penguin.room)
        let suffix = '/client/media/clothing/sprites'
        this.url = window.location.hostname == 'localhost' ? `${window.location.origin}${suffix}` : `https://media.cpplus.pw${suffix}`

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
        this.load.on('complete', this.onComplete, this)
    }

    loadItems() {
        for (let slot in this.equipped) {
            let item = this.equipped[slot]

            if (item.id > 0) this.loadItem(item.id, slot)
        }

        this.load.start()
    }

    loadItem(item, slot) {
        if (item == 0) return this.removeItem(slot)

        let key = `${slot}/${item}`

        if (this.shell.textures.exists(key)) return this.onFileComplete(key)

        this.load.multiatlas({
            key: key,
            atlasURL: `${this.url}/${item}.json`,
            path: `${this.url}`,
        })
    }

    onFileComplete(key) {
        if (!this.shell.textures.exists(key)) return

        this.penguin.room.shell.itemsLoaded.push[key]
        // Keeps track of the loaded items so they can be unloaded later

        let slot = key.split('/')[0]
        let item = this.equipped[slot]

        // Remove item if one is already equipped
        if (item.sprite) this.removeItem(slot)

        // item.depth + 1 to ensure items are loaded on top of penguin body
        item.sprite = this.loadSprite(this.penguin, key, item.depth + 1)
    }

    onLoadError(file) {
        let slot = file.key.split('/')[0]
        let item = this.equipped[slot]

        if (item.sprite) this.removeItem(slot)
    }

    onComplete() {
        this.penguin.sort('depth')
        this.penguin.playFrame(this.penguin.frame)
    }

    removeItem(slot) {
        let item = this.equipped[slot]
        if (!item || !item.sprite) return

        item.sprite.destroy()
        item.sprite = null
    }
}
