import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, NineSlice} from '@components/components'

import WaddleItem from './waddle_item/WaddleItem'

/* START OF COMPILED CODE */

export default class Waddle extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {WaddleItem[]} */
        this.items

        // bg
        const bg = scene.add.image(0, -16, 'main', 'waddle')
        this.add(bg)

        // tab
        const tab = scene.add.image(0, -190, 'main', 'tab-2')
        this.add(tab)

        // waddle_item_3
        const waddle_item_3 = new WaddleItem(scene, 0, 100)
        this.add(waddle_item_3)

        // waddle_item_2
        const waddle_item_2 = new WaddleItem(scene, 0, 48)
        this.add(waddle_item_2)

        // waddle_item_1
        const waddle_item_1 = new WaddleItem(scene, 0, -4)
        this.add(waddle_item_1)

        // waddle_item
        const waddle_item = new WaddleItem(scene, 0, -56)
        this.add(waddle_item)

        // text
        const text = scene.add.text(0, -122, '', {})
        text.setOrigin(0.5, 0.5)
        text.setStyle({align: 'center', color: '#000000', fixedWidth: 420, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(text)

        // x_button
        const x_button = scene.add.image(178, -126, 'main', 'blue-button')
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(178, -128, 'main', 'blue-x')
        this.add(blue_x)

        // lists
        const items = [waddle_item, waddle_item_1, waddle_item_2, waddle_item_3]

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = bg

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.callback = () => this.onClose()

        this.text = text
        this.items = items

        /* START-USER-CTR-CODE */

        this.activeWaddleId = null

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get activeWaddle() {
        return this.shell.room.waddles[this.activeWaddleId]
    }

    getSeat(waddle, seat) {
        if (waddle < 200) {
            return this.shell.room[`waddle${waddle}`][`seat${seat}`]
        }
        return this.shell.room[`seats${waddle}`][seat]
    }

    onClose() {
        this.airtower.sendXt('a#lt')

        this.leaveSeat()

        this.activeWaddleId = null
        this.visible = false
    }

    showWaddle(waddle, seat, game) {
        this.activeWaddleId = waddle

        this.enterSeat(waddle, seat)

        this.items.map((item) => item.hideItem())

        for (let [index, username] of Object.entries(this.activeWaddle.seats)) {
            this.items[index].setItem(username)
        }

        this.text.setText(this.getString(`waddle_${game}`))

        this.visible = true
    }

    updateWaddle(waddle, seat, username) {
        this.shell.room.waddles[waddle].seats[seat] = username

        if (waddle == this.activeWaddleId) {
            this.items[seat].setItem(username)
        }
    }

    enterSeat(waddle, seat) {
        this.activeSeat = this.getSeat(waddle, seat)
        let parentContainer = this.activeSeat.parentContainer
        let x = this.activeSeat.x
        let y = this.activeSeat.y
        while (parentContainer) {
            x += parentContainer.x
            y += parentContainer.y
            parentContainer = parentContainer.parentContainer
        }

        this.shell.client.penguin.move(x, y, this.activeSeat.sitFrame)
    }

    leaveSeat() {
        let x = this.activeSeat.x + this.activeSeat.offsetX
        let y = this.activeSeat.y + this.activeSeat.offsetY

        this.activeSeat = null

        this.shell.client.penguin.move(x, y)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
