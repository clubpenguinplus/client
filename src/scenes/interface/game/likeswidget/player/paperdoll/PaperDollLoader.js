export default class PaperDollLoader {
    constructor(paperDoll) {
        this.paperDoll = paperDoll
        this.scene = paperDoll.scene

        this.scale = 1
        this.photoScale = 1
        this.flagScale = 0.18

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
                if (!this.paperDoll.parentContainer.bg) break
                this.paperDoll.parentContainer.bg.setTexture(key)
                this.paperDoll.parentContainer.bg.setScale(this.photoScale)
                this.paperDoll.parentContainer.bg.visible = true
                break

            case 'flag':
                if (!this.paperDoll.parentContainer.bg) break
                item.sprite = this.loadPaper(key, slot, item.depth, this.flagScale)
                item.sprite.x = -28
                item.sprite.y = -25
                break

            default:
                item.sprite = this.loadPaper(key, slot, item.depth)
                break
        }
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

        if (slot == 'photo') {
            this.scene.playerCard.photo.add(paper)
        } else {
            this.paperDoll.add(paper)
        }

        if (this.paperDoll.isInputEnabled) this.addInput(slot, paper)

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

    addInput(slot, paper) {
        paper.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true,
        })

        paper.on('pointerdown', () => this.onPaperClick(slot))
    }

    onPaperClick(slot) {
        this.scene.airtower.sendXt('s#upr', slot)
    }

    removeItem(slot) {
        if (slot == 'photo') {
            if (this.paperDoll.parentContainer.containerName == 'FriendItem') {
                this.paperDoll.parentContainer.bg.setScale(0.2)
                this.paperDoll.parentContainer.bg.setTexture('main', 'card-photo')
                return
            } else if (this.paperDoll.parentContainer.containerName == 'PlayerCard') {
                this.paperDoll.parentContainer.card_photo.visible = false
                return
            }
        }
        let item = this.paperDoll.items[slot]
        if (!item || !item.sprite) return

        item.sprite.destroy()
        item.sprite = null
    }
}
