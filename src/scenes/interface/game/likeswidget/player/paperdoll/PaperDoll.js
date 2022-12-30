import BaseContainer from '@scenes/base/BaseContainer'

import PaperDollLoader from './PaperDollLoader'
import TintedImage from '@engine/utils/tint/TintedImage'

/* START OF COMPILED CODE */

export default class PaperDoll extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {boolean} */
        this.fadeIn = true

        /* START-USER-CTR-CODE */

        // Slots ordered by depth
        // '' representing paperdoll
        this.slots = ['photo', 'color', '', 'feet', 'body', 'neck', 'hand', 'face', 'head', 'flag']
        this.items = this.setItems()

        this.paperDollLoader = new PaperDollLoader(this)
        this.isInputEnabled = false

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItems() {
        let items = {}

        for (let slot of this.slots) {
            if (!slot) continue
            items[slot] = {
                depth: this.slots.indexOf(slot),
            }
        }

        return items
    }

    removeItems() {
        for (let item in this.items) {
            let sprite = this.items[item].sprite

            if (this.items[item].sprite) {
                sprite.destroy()
                sprite = null
            }
        }
    }

    loadDoll(penguin, isInputEnabled = false) {
        // Clear items for next penguin
        this.removeItems()

        this.isInputEnabled = isInputEnabled

        this.paperDollLoader.loadItems(penguin)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
