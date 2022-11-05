import BaseContainer from '@scenes/base/BaseContainer'
import PaperDoll from './paperdoll/PaperDoll'

import {SimpleButton, NineSlice} from '@components/components'

/* START OF COMPILED CODE */

export default class FriendItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.username
        /** @type {Phaser.GameObjects.Image} */
        this.add
        /** @type {Phaser.GameObjects.Image} */
        this.bg
        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {Phaser.GameObjects.Text} */
        this.offlineonline
        /** @type {Phaser.GameObjects.Image} */
        this.offline
        /** @type {Phaser.GameObjects.Image} */
        this.over
        /** @type {Phaser.GameObjects.Image} */
        this.outline
        /** @type {Phaser.GameObjects.Image} */
        this.bff

        // username
        const username = scene.add.text(0, 60, '', {})
        username.setOrigin(0.5, 0.5)
        username.text = 'Username'
        username.setStyle({align: 'center', fixedWidth: 185, fontFamily: 'Burbank Small', fontSize: '13px', fontStyle: 'bold'})
        this.add(username)

        // add
        const add = scene.add.image(0, 0, 'main', 'buddy/add')
        add.visible = false
        this.add(add)

        // bg
        const bg = scene.add.image(0, 0, 'main', 'card-photo')
        bg.scaleX = 0.218
        bg.scaleY = 0.218
        this.add(bg)

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, 0)
        paperDoll.scaleX = 1
        paperDoll.scaleY = 1
        paperDoll.visible = false
        this.add(paperDoll)

        // offlineonline
        const offlineonline = scene.add.text(-0.061767578125, 75.26654052734375, '', {})
        offlineonline.setOrigin(0.5, 0.5)
        offlineonline.visible = false
        offlineonline.text = 'Offline'
        offlineonline.setStyle({align: 'center', color: '#a7c9d5ff', fixedWidth: 185, fontFamily: 'Burbank Small', fontSize: '13px'})
        this.add(offlineonline)

        // offline
        const offline = scene.add.image(0, 0, 'main', 'card-photo')
        offline.scaleX = 0.21
        offline.scaleY = 0.21
        offline.visible = false
        offline.alpha = 0.5
        offline.alphaTopLeft = 0.5
        offline.alphaTopRight = 0.5
        offline.alphaBottomLeft = 0.5
        offline.alphaBottomRight = 0.5
        offline.tintFill = true
        offline.tintTopLeft = 0
        offline.tintTopRight = 0
        offline.tintBottomLeft = 0
        offline.tintBottomRight = 0
        this.add(offline)

        // over
        const over = scene.add.image(0, 0, 'main', 'card-photo')
        over.scaleX = 0.21
        over.scaleY = 0.21
        over.visible = false
        over.alpha = 0.01
        over.alphaTopLeft = 0.01
        over.alphaTopRight = 0.01
        over.alphaBottomLeft = 0.01
        over.alphaBottomRight = 0.01
        over.tintFill = true
        this.add(over)

        // outline
        const outline = scene.add.image(0, 0, 'main', 'buddy/outline')
        this.add(outline)

        // bff
        const bff = scene.add.image(-40, -39, 'main', 'buddy/default')
        this.add(bff)

        // add (components)
        const addSimpleButton = new SimpleButton(add)
        addSimpleButton.callback = () => this.addFriend()

        // over (components)
        const overSimpleButton = new SimpleButton(over)
        overSimpleButton.hoverCallback = () => {
            this.over.alpha = 0.1
        }
        overSimpleButton.hoverOutCallback = () => {
            this.over.alpha = 0.01
        }
        overSimpleButton.callback = () => this.onClick()

        // bff (components)
        const bffSimpleButton = new SimpleButton(bff)
        bffSimpleButton.callback = () => this.toggleBff()

        this.username = username
        this.add = add
        this.bg = bg
        this.paperDoll = paperDoll
        this.offlineonline = offlineonline
        this.offline = offline
        this.over = over
        this.outline = outline
        this.bff = bff

        /* START-USER-CTR-CODE */

        this.id = null
        this.containerName = 'FriendItem'

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItem(friend) {
        if (!friend) return this.clearItem()

        this.paperDoll.removeItems()

        this.id = friend.id
        this.username.text = friend.username
        this.airtower.sendXt('u#gb', friend.id)
        this.outline.visible = true
        this.over.visible = true
        this.bg.visible = true
        this.add.visible = false
        this.outline.visible = true
        this.offlineonline.visible = true
        this.bff.visible = true

        if (('online' in friend && friend.online === undefined) || friend.online === false) {
            this.offline.visible = true
            this.offlineonline.text = 'Offline'
        } else {
            this.offline.visible = false
            this.offlineonline.text = 'Online'
        }
    }

    setPaperDoll(friend) {
        this.paperDoll.visible = true
        this.paperDoll.loadDoll(friend)
    }

    clearItem() {
        this.id = null
        this.username.text = ''
        this.paperDoll.visible = false
        this.over.visible = false
        this.offline.visible = false
        this.bg.visible = false
        this.add.visible = true
        this.offlineonline.visible = false
        this.bff.visible = false
        this.outline.visible = false
    }

    onClick() {
        if (this.id) {
            if (this.parentContainer.listType == 'pending') {
                return this.interface.main.showRequest({id: this.id, username: this.username.text})
            }
            this.interface.showCard(this.id)
        }
    }

    addFriend() {
        this.parentContainer.showSearch()
    }

    toggleBff() {}
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
