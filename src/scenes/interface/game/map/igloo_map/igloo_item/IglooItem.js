import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, ShowHint} from '@components/components'

/* START OF COMPILED CODE */

export default class IglooItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.icon
        /** @type {Phaser.GameObjects.Text} */
        this.username

        // friend_item
        const friend_item = scene.add.image(0, 0, 'map-for-igloo', 'igloo/item_small')
        this.add(friend_item)

        // icon
        const icon = scene.add.image(-137, 0, 'map-for-igloo', 'igloo/icon_none')
        this.add(icon)

        // username
        const username = scene.add.text(25, 0, '', {})
        username.setOrigin(0.5, 0.5)
        username.setStyle({
            color: '#000',
            fixedWidth: 270,
            fontFamily: 'cpBurbankSmall',
            fontSize: '24px',
        })
        this.add(username)

        // friend_item (components)
        const friend_itemButton = new Button(friend_item)
        friend_itemButton.callback = () => this.onClick()

        this.icon = icon
        this.username = username

        /* START-USER-CTR-CODE */

        this.id

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItem(igloo) {
        if (!igloo) {
            return this.clearItem()
        }

        this.id = igloo.id
        this.username.text = igloo.username

        let relationship = this.shell.getRelationship(igloo.id)

        if (relationship != 'online') {
            relationship = 'none'
        }

        let texture = `igloo/icon_${relationship}`

        this.icon.setFrame(texture)
    }

    clearItem() {
        this.id = null
        this.username.text = ''
        this.icon.setFrame('igloo/icon_none')
    }

    onClick() {
        if (this.id) {
            this.shell.client.sendJoinIgloo(this.id)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
