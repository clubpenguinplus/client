export default class PaperDollLoader {
    constructor(paperDoll) {
        this.paperDoll = paperDoll
        this.scene = paperDoll.scene

        this.scale = 0.6
        this.photoScale = 0
        this.flagScale = 0

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        let suffix = '/client/media/clothing'
        this.url = window.location.hostname == 'localhost' ? `${window.location.origin}${suffix}` : `https://media.cpplus.pw${suffix}`
        this.prefix = 'friendlist'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
        this.load.on('complete', this.onComplete, this)
    }

    setColor(id) {
        this.paperDoll.body.tint = this.scene.shell.getColor(id)
    }

    loadItems(penguin) {
        for (let slot of this.paperDoll.slots) {
            let item = penguin[slot]

            if (item > 0) this.loadItem(item, slot)
        }

        this.load.start()
    }

    loadItem(item, slot) {
        if (item == 0) return this.removeItem(slot)

        let key = `${this.prefix}/${slot}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        let url = slot == 'flag' ? `${this.url}/icon` : `${this.url}/friendlist`

        this.load.image({
            key: key,
            url: `${url}/${item}.webp`,
        })
    }

    onFileComplete(key) {
        if (!this.paperDoll.visible) return
        if (!this.scene.textures.exists(key)) return

        let slot = key.split('/')[1]
        let item = this.paperDoll.items[slot]

        // Remove item if one is already equipped
        if (item.sprite) this.removeItem(slot)

        switch (slot) {
            case 'photo':
            case 'flag':
                break

            default:
                item.sprite = this.loadPaper(key, slot, item.depth)
                break
        }

        this.paperDoll.parentContainer.player.visible = false
    }

    onLoadError(file) {
        if (!this.paperDoll.visible) return

        let slot = file.key.split('/')[1]
        let item = this.paperDoll.items[slot]

        if (item.sprite) this.removeItem(slot)
    }

    onComplete() {
        if (!this.paperDoll.visible) return
        this.paperDoll.sort('depth')
    }

    loadPaper(key, slot, depth, scale = this.scale) {
        let paper = this.scene.add.image(0, 0, key)

        paper.scale = scale
        paper.depth = depth

        if (this.paperDoll.fadeIn) this.fadeIn(paper)

        this.paperDoll.add(paper)

        return paper
    }

    fadeIn(paper) {
        paper.alpha = 0

        this.scene.tweens.add({
            targets: paper,
            alpha: {from: 0, to: 1},
            duration: 200,
        })
    }

    removeItem(slot) {
        let item = this.paperDoll.items[slot]
        if (!item || !item.sprite) return

        item.sprite.destroy()
        item.sprite = null
    }
}
