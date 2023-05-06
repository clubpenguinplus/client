import SpriteLoader from './SpriteLoader'

export default class ItemLoader extends SpriteLoader {
    constructor(penguin) {
        super(penguin.room.shell)

        this.penguin = penguin
        this.equipped = this.penguin.items.equipped

        this.load = new Phaser.Loader.LoaderPlugin(penguin.room)
        let suffix = '/client/media/clothing/sprites'
        this.url = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`

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

        let slot = key.split('/')[0]
        let id = key.split('/')[1]
        let item = this.equipped[slot]

        // Remove item if one is already equipped
        if (item.sprite) this.removeItem(slot)

        // item.depth + 1 to ensure items are loaded on top of penguin body
        item.sprite = this.loadSprite(this.penguin, key, this.penguin.crumbs.items[id].depth || item.depth)
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

        const id = item.id

        item.sprite.destroy()
        item.sprite = null

        setTimeout(() => this.unloadItem(id, slot), 1000)
    }

    unloadItem(item, slot) {
        let key = `${slot}/${item}`

        if (!this.shell.textures.exists(key)) return

        let othersWearingItem = false
        for (let penguin of Object.values(this.penguin.room.penguins)) {
            if (penguin.wearingItem(item)) {
                othersWearingItem = true
                break
            }
        }

        if (othersWearingItem) return

        this.shell.textures.remove(key)

        let anims = 0

        for (let anim in this.shell.anims.anims.entries) {
            if (this.shell.anims.anims.entries[anim].key.split('_')[0] == key) {
                anims++
                delete this.shell.anims.anims.entries[anim]
            }
        }

        if (anims > 0) {
            console.info(`[MemoryManager] Unloaded 1 texture and ${anims} animation${anims > 1 ? 's' : ''}`)
        } else {
            console.info(`[MemoryManager] Unloaded 1 texture`)
        }
    }
}
