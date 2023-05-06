import BaseContainer from '@scenes/base/BaseContainer'

import {Button, SimpleButton, Interactive, InputText, DraggableContainer} from '@components/components'

import Inventory from '../playercard/inventory/Inventory'
import InventorySort from '../playercard/inventory_sort/InventorySort'
import Buttons from '../playercard/buttons/Buttons'
import PaperDoll from '../playercard/paperdoll/PaperDoll'

/* START OF COMPILED CODE */

export default class WireTap extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        /** @type {NinePatchContainer} */
        this.rectangle
        /** @type {Phaser.GameObjects.Text} */
        this.header
        /** @type {Phaser.GameObjects.Text} */
        this.header_1
        /** @type {Phaser.GameObjects.Text} */
        this.tap_a_room
        /** @type {Phaser.GameObjects.Text} */
        this.header_3
        /** @type {Phaser.GameObjects.Text} */
        this.header_4
        /** @type {Phaser.GameObjects.Text} */
        this.tapped_rooms
        /** @type {Phaser.GameObjects.Text} */
        this.messages

        // rectangle
        const rectangle = scene.add.ninePatchContainer(0, 0, 780, 600, 'prompt', 'window')
        rectangle.marginLeft = 50
        rectangle.marginTop = 50
        rectangle.marginRight = 50
        rectangle.marginBottom = 50
        this.add(rectangle)

        // header
        const header = scene.add.text(0, -253, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'Wiretap'
        header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 360, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(header)

        // header_1
        const header_1 = scene.add.text(-262, -179, '', {})
        header_1.setOrigin(0.5, 0.5)
        header_1.text = 'Tap a room'
        header_1.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(header_1)

        // ninepatchcontainer_1
        const ninepatchcontainer_1 = scene.add.ninePatchContainer(-262, -129, 200, 50, 'main', 'buddy/item')
        ninepatchcontainer_1.marginTop = 23
        ninepatchcontainer_1.marginBottom = 23
        this.add(ninepatchcontainer_1)

        // tap_a_room
        const tap_a_room = scene.add.text(-262, -129, '', {})
        tap_a_room.setOrigin(0.5, 0.5)
        tap_a_room.text = 'Room ID'
        tap_a_room.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(tap_a_room)

        // header_3
        const header_3 = scene.add.text(-259, -52, '', {})
        header_3.setOrigin(0.5, 0.5)
        header_3.text = 'Tap all rooms'
        header_3.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(header_3)

        // blue_button
        const blue_button = scene.add.image(-259, 2, 'main', 'blue-button')
        this.add(blue_button)

        // blue_arrow
        const blue_arrow = scene.add.image(-259, 0, 'main', 'blue-arrow')
        this.add(blue_arrow)

        // header_4
        const header_4 = scene.add.text(-261, 90, '', {})
        header_4.setOrigin(0.5, 0.5)
        header_4.text = 'Your tapped rooms:'
        header_4.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        header_4.setWordWrapWidth(200)
        this.add(header_4)

        // tapped_rooms
        const tapped_rooms = scene.add.text(-261, 139, '', {})
        tapped_rooms.setOrigin(0.5, 0)
        tapped_rooms.setStyle({align: 'center', color: '#ace3f6ff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '25px'})
        tapped_rooms.setWordWrapWidth(200)
        this.add(tapped_rooms)

        // ninepatchcontainer
        const ninepatchcontainer = scene.add.ninePatchContainer(109, 26, 500, 450, 'main', 'buddy/item')
        ninepatchcontainer.marginTop = 23
        ninepatchcontainer.marginBottom = 23
        this.add(ninepatchcontainer)

        // messages
        const messages = scene.add.text(109, -177, '', {})
        messages.setOrigin(0.5, 0)
        messages.setStyle({color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall'})
        messages.setPadding({left: 10, right: 10})
        this.add(messages)

        // x_button
        const x_button = scene.add.image(337, -249, 'main', 'blue-button')
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(337, -251, 'main', 'blue-x')
        this.add(blue_x)

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = rectangle

        // tap_a_room (components)
        const tap_a_roomInputText = new InputText(tap_a_room)
        tap_a_roomInputText.inputfilter = /^[0-9]*$/
        tap_a_roomInputText.entercallback = () => this.tapRoom()

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button)
        blue_buttonButton.callback = () => this.tapAllRooms()

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.callback = () => {
            this.hide()
        }

        this.rectangle = rectangle
        this.header = header
        this.header_1 = header_1
        this.tap_a_room = tap_a_room
        this.header_3 = header_3
        this.header_4 = header_4
        this.tapped_rooms = tapped_rooms
        this.messages = messages

        /* START-USER-CTR-CODE */

        // max lines = 20
        this.messages.setInteractive()
        this.messages.on('pointerdown', (pointer) => {
            let lineClicked = Math.floor((pointer.y - this.y + 177) / 20)
            let user = this.loggedMessages[lineClicked].user
            this.airtower.sendXt('o#gp', user)
        })

        this.loggedMessages = []
        this.tappedRooms = []
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    hide() {
        this.visible = false
    }

    show() {
        this.visible = true
    }

    addMessage(args) {
        args = {
            user: args[0],
            message: args[1],
            room: args[2],
            username: args[3],
        }
        let lines = this.loggedMessages.length
        if (lines > 20) {
            this.messages.text = this.messages.text.substring(this.messages.text.indexOf('\n') + 1)
            this.loggedMessages.shift()
        }
        let string = `${args.username} said in ${args.room}: ${args.message}\n`
        this.messages.text += string
        this.loggedMessages.push(args)
    }

    addFilteredMessage(args) {
        args = {
            user: args[0],
            message: args[1],
            room: args[2],
            username: args[3],
        }
        let lines = this.loggedMessages.length
        if (lines > 20) {
            this.messages.text = this.messages.text.substring(this.messages.text.indexOf('\n') + 1)
            this.loggedMessages.shift()
        }
        let string = `${args.username} filtered in ${args.room}: ${args.message}\n`
        this.messages.text += string
        this.loggedMessages.push(args)
    }

    tapRoom() {
        let room = this.tap_a_room.textContent
        if (room.length > 0 && !this.allRoomsTapped) {
            if (this.tappedRooms.includes(room)) {
                this.tappedRooms.splice(this.tappedRooms.indexOf(room), 1)
                this.tapped_rooms.text = this.tappedRooms.join(', ')
                this.airtower.sendXt('o#tw', room)
                return
            }
            this.tappedRooms.push(room)
            this.tapped_rooms.text = this.tappedRooms.join(', ')
            this.tap_a_room.__InputText.clearText()
            this.airtower.sendXt('o#wt', room)
        }
    }

    tapAllRooms() {
        if (this.allRoomsTapped) {
            this.allRoomsTapped = false
            this.tapped_rooms.text = this.tappedRooms.join(', ')
            this.airtower.sendXt('o#tw', 'all')
            return
        }
        this.allRoomsTapped = true
        this.airtower.sendXt('o#wt', 'all')
        this.tapped_rooms.text = 'all'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
