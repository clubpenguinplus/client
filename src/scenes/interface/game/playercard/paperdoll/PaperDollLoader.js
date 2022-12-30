export default class PaperDollLoader {
    constructor(paperDoll) {
        this.paperDoll = paperDoll
        this.scene = paperDoll.scene

        this.scale = 0.7325
        this.photoScale = 0.7
        this.flagX = -153
        this.flagY = -120
        this.flagScale = 0.66

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        let suffix = '/client/media/clothing'
        this.url = window.location.hostname == 'localhost' ? `${window.location.origin}${suffix}` : `https://media.cpplus.pw${suffix}`
        this.keyPrefix = 'paper'

        this.load.on('filecomplete', this.onFileComplete, this)
    }

    getUrl(slot) {
        switch (slot) {
            case 'flag':
                return 'icon/'

            default:
                return 'paper/'
        }
    }

    getKey(...args) {
        let key = args.join('')
        let prefix = this.keyPrefix || ''

        return `${prefix}${key}`
    }

    setColor(id) {
        this.paperDoll.body.tint = this.scene.world.getColor(id)
    }

    loadItems(penguin) {
        for (let slot of this.paperDoll.slots) {
            let item = penguin[slot]

            if (item > 0) {
                this.loadItem(item, slot)
            }
        }

        this.load.start()
    }

    loadItem(item, slot) {
        if (slot == 'color') {
            return this.setColor(item)
        }

        if (item == 0) {
            return this.removeItem(slot)
        }

        if (this.paperDoll.items[slot].sprite) {
            this.removeItem(slot)
        }

        this.paperDoll.items[slot].id = item

        if (this.scene.crumbs.items[item].back) {
            this.loadBack(item, slot)
        }

        let url = (slot == 'flag') ? `${this.url}/icon` : `${this.url}/paper`
        let key = `${this.keyPrefix}/${slot}/${item}`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(item, key, slot)
        })) {
            return
        }

        this.load.image({
            key: key,
            url: `${url}/${item}.webp`,
        })
    }

    loadBack(item, parentSlot) {
        let key = `${this.keyPrefix}/${parentSlot}/${item}_back`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(item, key, parentSlot, true)
        })) {
            return
        }

        this.load.image(key, `${this.url}/${this.keyPrefix}/${item}_back.webp`)
    }

    onFileComplete(itemId, key, slot, isBack = false) {
        if (!this.paperDoll.visible || !this.textureExists(key)) {
            return
        }

        if (itemId != this.paperDoll.items[slot].id) {
            return
        }

        let item = this.paperDoll.items[slot]

        if (isBack) {
            this.addBack(key, slot, item)
            return
        }

        if (item.sprite) {
            this.removeItem(slot)
        }

        if (slot == 'flag') {
            this.addFlag(key, slot, item)
            return
        }

        item.sprite = this.addPaper(key, slot, item.depth)
    }

    addBack(key, slot, parentItem) {
        if (parentItem.back) {
            this.paperDoll.destroyBack(item)
        }

        parentItem.back = this.addPaper(key, slot, parentItem.depth, 1, true)
        parentItem.back.setPosition(0, 6)
    }

    addFlag(key, slot, item) {
        item.sprite = this.addPaper(key, slot, item.depth, this.flagScale)
        item.sprite.setPosition(this.flagX, this.flagY)
    }

    addPaper(key, slot, depth, scale = this.scale, isBack = false) {
        let paper = this.scene.add.image(0, 0, key)
        
        paper.scale = scale
        paper.isBack = isBack

         // Back sprites always on bottom
        paper.depth = (isBack) ? depth : depth + 100

        this.fadeIn(paper)

        if (slot == 'photo') {
            this.scene.playerCard.photo.add(paper)
            paper.scale = this.photoScale
        } else {
            this.paperDoll.add(paper)
        }

        if (this.paperDoll.isInputEnabled) {
            this.addInput(slot, paper)
        }

        this.paperDoll.sort('depth')

        this.updateBackSprites()

        return paper
    }

    fadeIn(paper) {
        if (!this.paperDoll.fadeIn) {
            return
        }

        paper.alpha = 0

        this.scene.tweens.add({
            targets: paper,
            alpha: { from: 0, to: 1 },
            duration: 200
        })
    }

    addInput(slot, paper) {
        paper.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true
        })

        paper.on('pointerdown', () => this.onPaperClick(slot))
    }

    onPaperClick(slot) {
        this.scene.network.send('remove_item', { type: slot })
    }

    removeItem(slot) {
        let item = this.paperDoll.items[slot]

        if (!item) {
            return
        }

        this.paperDoll.removeItem(item)

        this.updateBackSprites()
    }

    updateBackSprites() {
        let backs = this.getBackSprites()

        if (!backs.length) {
            return
        }

        let last = backs.pop()

        if (!last.visible) {
            last.visible = true

            this.fadeIn(last)
        }

        for (let back of backs) {
            back.visible = false
        }
    }

    getBackSprites() {
        return this.paperDoll.list.filter(item => item.isBack)
    }

    checkComplete(type, key, callback = () => {}) {
        if (this.textureExists(key)) {
            callback()
            return true
        }

        this.load.once(`filecomplete-${type}-${key}`, callback)
    }

    textureExists(key) {
        return this.scene.textures.exists(key)
    }

}
