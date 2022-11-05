import BaseContainer from '@scenes/base/BaseContainer'
import PaperDoll from './paperdoll/PaperDoll'

import {SimpleButton, NineSlice} from '@components/components'

/* START OF COMPILED CODE */

export default class SearchItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.username
        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {NinePatchContainer} */
        this.outline
        /** @type {Phaser.GameObjects.Text} */
        this.addFriend

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 0, 94, 122)
        rectangle_1.isFilled = true
        rectangle_1.fillColor = 3309008
        this.add(rectangle_1)

        // username
        const username = scene.add.text(0, 48, '', {})
        username.setOrigin(0.5, 0.5)
        username.text = 'Username'
        username.setStyle({align: 'center', fixedWidth: 185, fontFamily: 'Burbank Small', fontSize: '13px'})
        this.add(username)

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -3)
        paperDoll.scaleX = 1
        paperDoll.scaleY = 1
        paperDoll.visible = false
        this.add(paperDoll)

        // outline
        const outline = scene.add.ninePatchContainer(0, 0, 94, 122, 'main', 'buddy/outline')
        this.add(outline)

        // addFriend
        const addFriend = scene.add.text(0, -47, '', {})
        addFriend.setOrigin(0.5, 0.5)
        addFriend.text = '+ Add Friend'
        addFriend.setStyle({align: 'center', fixedWidth: 185, fontFamily: 'Burbank Small', fontSize: '13px', fontStyle: 'bold'})
        this.add(addFriend)

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.callback = () => this.onClick()

        this.username = username
        this.paperDoll = paperDoll
        this.outline = outline
        this.addFriend = addFriend

        /* START-USER-CTR-CODE */

        this.id = null
        this.containerName = 'FriendItem'

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItem(friend) {
        if (!friend) return this.clearItem()

        friend = friend.split('|')

        this.paperDoll.removeItems()

        this.id = friend[0]
        this.username.text = friend[1]
        this.airtower.sendXt('u#gb', friend[0])
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

    onClick() {
        if (this.id) {
            let text = `Would you like to add ${this.username.text}\nto your friend list?`

            this.interface.prompt.showWindow(text, 'dual', () => {
                this.airtower.sendXt('b#br', this.id)

                this.interface.prompt.showWindow('Request Sent', 'single')
                if (this.interface.main.friendSmall.visible) {
                    this.interface.main.friendSmall.hideSearch()
                } else {
                    this.interface.main.friend.hideSearch()
                }
            })
        }
    }

    addFriend() {
        this.parentContainer.showSearch()
    }

    toggleBff() {}
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
