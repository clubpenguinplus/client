import BaseContainer from '@scenes/base/BaseContainer'
import PaperDoll from './paperdoll/PaperDoll'

import {SimpleButton, NineSlice, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class OnlineItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {NinePatchContainer} */
        this.outline
        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {Phaser.GameObjects.Text} */
        this.username
        /** @type {Phaser.GameObjects.Text} */
        this.addFriend

        // outline
        const outline = scene.add.ninePatchContainer(-25, 0, 200, 70, 'main', 'buddy-online')
        this.add(outline)

        // paperDoll
        const paperDoll = new PaperDoll(scene, -76, -3)
        paperDoll.scaleX = 0.8
        paperDoll.scaleY = 0.8
        paperDoll.visible = false
        this.add(paperDoll)

        // username
        const username = scene.add.text(24, -10, '', {})
        username.setOrigin(0.5, 0.5)
        username.text = 'Username'
        username.setStyle({align: 'center', color: '#000000ff', fixedWidth: 185, fontFamily: 'cpBurbankSmall', fontSize: '13px', fontStyle: 'bold'})
        this.add(username)

        // addFriend
        const addFriend = scene.add.text(24, 8, '', {})
        addFriend.setOrigin(0.5, 0.5)
        addFriend.text = 'is online'
        addFriend.setStyle({align: 'center', color: '#000000ff', fixedWidth: 185, fontFamily: 'cpBurbankSmall', fontSize: '13px'})
        this.add(addFriend)

        this.outline = outline
        this.paperDoll = paperDoll
        this.username = username
        this.addFriend = addFriend

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
        this.setPaperDoll(friend)
        this.outline.visible = true
    }

    setPaperDoll(friend) {
        this.paperDoll.visible = true
        this.paperDoll.loadDoll(friend)
    }

    clearItem() {
        this.id = null
        this.username.text = ''
        this.paperDoll.visible = false
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
