import BaseContainer from '@scenes/base/BaseContainer'
import PaperDoll from './paperdoll/PaperDoll'

import {SimpleButton, NineSlice, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class RequestItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {NinePatchContainer} */
        this.outline
        /** @type {Phaser.GameObjects.Text} */
        this.username
        /** @type {Phaser.GameObjects.Text} */
        this.addFriend
        /** @type {Phaser.GameObjects.Text} */
        this.nameSearch_1
        /** @type {Phaser.GameObjects.Text} */
        this.nameSearch

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 0, 300, 90)
        rectangle_1.isFilled = true
        rectangle_1.fillColor = 3309008
        this.add(rectangle_1)

        // paperDoll
        const paperDoll = new PaperDoll(scene, -96, -3)
        paperDoll.scaleX = 1
        paperDoll.scaleY = 1
        paperDoll.visible = false
        this.add(paperDoll)

        // outline
        const outline = scene.add.ninePatchContainer(0, 0, 300, 90, 'main', 'buddy/outline')
        this.add(outline)

        // username
        const username = scene.add.text(55, -20, '', {})
        username.setOrigin(0.5, 0.5)
        username.text = 'Username'
        username.setStyle({fixedWidth: 185, fontFamily: 'Burbank Small', fontSize: '13px', fontStyle: 'bold'})
        this.add(username)

        // addFriend
        const addFriend = scene.add.text(55, -2, '', {})
        addFriend.setOrigin(0.5, 0.5)
        addFriend.text = 'Wants to be your friend!'
        addFriend.setStyle({fixedWidth: 185, fontFamily: 'Burbank Small', fontSize: '13px'})
        this.add(addFriend)

        // window_button_small
        const window_button_small = scene.add.ninePatchContainer(3, 23, 400, 105, 'prompt', 'window-button-small')
        window_button_small.scaleX = 0.2
        window_button_small.scaleY = 0.2
        window_button_small.marginLeft = 50
        window_button_small.marginTop = 50
        window_button_small.marginRight = 50
        window_button_small.marginBottom = 50
        window_button_small.ninePatchContainerTint = 7583205
        this.add(window_button_small)

        // nameSearch_1
        const nameSearch_1 = scene.add.text(3, 23, '', {})
        nameSearch_1.setOrigin(0.5, 0.5)
        nameSearch_1.text = '+ Add Friend'
        nameSearch_1.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '12px'})
        this.add(nameSearch_1)

        // window_button_small_1
        const window_button_small_1 = scene.add.ninePatchContainer(93, 23, 330, 105, 'prompt', 'window-button-small')
        window_button_small_1.scaleX = 0.2
        window_button_small_1.scaleY = 0.2
        window_button_small_1.marginLeft = 50
        window_button_small_1.marginTop = 50
        window_button_small_1.marginRight = 50
        window_button_small_1.marginBottom = 50
        window_button_small_1.ninePatchContainerTint = 7583205
        this.add(window_button_small_1)

        // nameSearch
        const nameSearch = scene.add.text(93, 23, '', {})
        nameSearch.setOrigin(0.5, 0.5)
        nameSearch.text = 'No Thanks'
        nameSearch.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '12px'})
        this.add(nameSearch)

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.callback = () => this.onClick()

        // window_button_small (components)
        const window_button_smallButton = new Button(window_button_small)
        window_button_smallButton.spriteName = 'window-button-small'
        window_button_smallButton.callback = () => this.onYesClick()

        // window_button_small_1 (components)
        const window_button_small_1Button = new Button(window_button_small_1)
        window_button_small_1Button.spriteName = 'window-button-small'
        window_button_small_1Button.callback = () => this.onNoClick()

        this.paperDoll = paperDoll
        this.outline = outline
        this.username = username
        this.addFriend = addFriend
        this.nameSearch_1 = nameSearch_1
        this.nameSearch = nameSearch

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

    onYesClick() {
        if (this.id) {
            this.airtower.sendXt('b#ba', this.id)
            this.shell.client.pending.filter((f) => f != `${this.id}|${this.username.text}`)
            this.clearItem()

            if (this.shell.client.pending.length == 0) {
                return (this.visible = false)
            }

            this.setItem(this.shell.client.pending[0])
        }
    }

    onNoClick() {
        if (this.id) {
            this.airtower.sendXt('b#be', this.id)
            this.shell.client.pending.filter((f) => f != `${this.id}|${this.username.text}`)
            this.clearItem()

            if (this.shell.client.pending.length == 0) {
                return (this.visible = false)
            }

            this.setItem(this.shell.client.pending[0])
        }
    }

    addFriend() {
        this.parentContainer.showSearch()
    }

    toggleBff() {}
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
