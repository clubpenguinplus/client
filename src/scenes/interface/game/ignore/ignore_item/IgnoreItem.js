import BaseContainer from '@scenes/base/BaseContainer'

import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class IgnoreItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.icon
        /** @type {Phaser.GameObjects.Text} */
        this.username

        // ignore_item
        const ignore_item = scene.add.image(0, 0, 'main', 'buddy/item')
        this.add(ignore_item)

        // icon
        const icon = scene.add.image(-137, 0, 'main', 'buddy/icon-ignore')
        icon.alpha = 0.75
        icon.alphaTopLeft = 0.75
        icon.alphaTopRight = 0.75
        icon.alphaBottomLeft = 0.75
        icon.alphaBottomRight = 0.75
        this.add(icon)

        // username
        const username = scene.add.text(25, 0, '', {})
        username.setOrigin(0.5, 0.5)
        username.setStyle({fixedWidth: 270, fontFamily: 'Arial', fontSize: '24px'})
        this.add(username)

        // ignore_item (components)
        const ignore_itemButton = new Button(ignore_item)
        ignore_itemButton.callback = () => this.onClick()

        this.icon = icon
        this.username = username

        /* START-USER-CTR-CODE */

        this.id

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItem(buddy) {
        if (!buddy) {
            return this.clearItem()
        }

        this.id = buddy.id
        this.username.text = buddy.username

        let texture = `buddy/icon-ignore`

        this.icon.setTexture('main', texture)
    }

    clearItem() {
        this.id = null
        this.username.text = ''

        this.icon.setTexture('main', 'buddy/icon-ignore')
    }

    onClick() {
        if (!this.id) {
            return
        }

        if (this.parentContainer.listType == 'ignores') {
            this.showRemoveIgnore()
            return
        }

        this.interface.showCard(this.id)
    }

    showRemoveIgnore() {
        let text = `Would you like to remove ${this.username.text}\nfrom your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('n#rn', this.id)

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
