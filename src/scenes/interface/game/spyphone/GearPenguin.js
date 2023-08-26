import BaseContainer from '@scenes/base/BaseContainer'

import PaperDollLoader from '@engine/loaders/PaperDollLoader'

/* START OF COMPILED CODE */

export default class GearPenguin extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || 'epfphone', frame ?? 'agentpenguin')

        /* START-USER-CTR-CODE */

        // Slots ordered by depth
        // '' representing paperdoll
        this.slots = ['photo', 'color', '', 'feet', 'body', 'neck', 'hand', 'face', 'head', 'flag']
        this.items = this.setItems()

        this.paperDollLoader = new PaperDollLoader(scene, this)
        this.isInputEnabled = false

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItems() {
        let items = {}

        for (let slot of this.slots) {
            if (!slot) {
                continue
            }

            items[slot] = {
                id: 0,
                depth: this.slots.indexOf(slot) + 100
            }
        }

        return items
    }

    removeItems() {
        for (let item of Object.values(this.items)) {
            this.removeItem(item)
        }
    }

    removeItem(item) {
        item.id = 0

        if (item.sprite) {
            this.destroySprite(item)
        }

        if (item.back) {
            this.destroyBack(item)
        }
    }

    destroySprite(item) {
        item.sprite.destroy()
        item.sprite = null
    }

    destroyBack(item) {
        item.back.destroy()
        item.back = null
    }

    loadDoll(penguin, isInputEnabled = false) {
        // Clear items for next penguin
        this.removeItems()

        this.isInputEnabled = isInputEnabled

        if (isInputEnabled) {
            this.enableInput()
        } else {
            this.disableInput()
        }

        this.paperDollLoader.loadItems(penguin)
    }

    /**
     * Enables input on body and paperdoll sprites,
     * does not include clothing items.
     */
    enableInput() {
        this.body.setInteractive({pixelPerfect: true})
        this.paperdoll.setInteractive({pixelPerfect: true})
    }

    /**
     * Disables input on body and paperdoll sprites,
     * does not include clothing items.
     */
    disableInput() {
        this.body.removeInteractive()
        this.paperdoll.removeInteractive()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
