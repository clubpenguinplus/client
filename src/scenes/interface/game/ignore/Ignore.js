import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, ShowHint} from '@components/components'

import IgnoreItem from './ignore_item/IgnoreItem'

/* START OF COMPILED CODE */

export default class Ignore extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Text} */
        this.total
        /** @type {IgnoreItem[]} */
        this.items

        // card_bg
        const card_bg = scene.add.image(0, 0, 'main', 'card-bg')
        this.add(card_bg)

        // text
        const text = scene.add.text(0, -236, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'Ignore List'
        text.setStyle({align: 'center', color: '#000000', fixedWidth: 420, fontFamily: 'Arial Narrow', fontSize: '32px'})
        this.add(text)

        // x_button
        const x_button = scene.add.image(177, -237, 'main', 'blue-button')
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(177, -239, 'main', 'blue-x')
        this.add(blue_x)

        // buddy_scroll
        const buddy_scroll = scene.add.image(177, 14, 'main', 'buddy/scroll')
        this.add(buddy_scroll)

        // down_button
        const down_button = scene.add.image(177, 195, 'main', 'blue-button')
        this.add(down_button)

        // up_button
        const up_button = scene.add.image(177, -173, 'main', 'blue-button')
        this.add(up_button)

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(177, 193, 'main', 'blue-arrow')
        blue_arrow_1.flipY = true
        this.add(blue_arrow_1)

        // blue_arrow
        const blue_arrow = scene.add.image(177, -175, 'main', 'blue-arrow')
        this.add(blue_arrow)

        // buddy_item_7
        const buddy_item_7 = new IgnoreItem(scene, -26, 194)
        this.add(buddy_item_7)

        // buddy_item_6
        const buddy_item_6 = new IgnoreItem(scene, -26, 142)
        this.add(buddy_item_6)

        // buddy_item_5
        const buddy_item_5 = new IgnoreItem(scene, -26, 90)
        this.add(buddy_item_5)

        // buddy_item_4
        const buddy_item_4 = new IgnoreItem(scene, -26, 38)
        this.add(buddy_item_4)

        // buddy_item_3
        const buddy_item_3 = new IgnoreItem(scene, -26, -14)
        this.add(buddy_item_3)

        // buddy_item_2
        const buddy_item_2 = new IgnoreItem(scene, -26, -66)
        this.add(buddy_item_2)

        // buddy_item_1
        const buddy_item_1 = new IgnoreItem(scene, -26, -118)
        this.add(buddy_item_1)

        // buddy_item
        const buddy_item = new IgnoreItem(scene, -26, -170)
        this.add(buddy_item)

        // total
        const total = scene.add.text(-132, 273, '', {})
        total.setOrigin(0.5, 0.5)
        total.setStyle({color: '#003366', fixedWidth: 100, fontFamily: 'Arial Narrow', fontSize: '24px'})
        this.add(total)

        // lists
        const items = [buddy_item, buddy_item_1, buddy_item_2, buddy_item_3, buddy_item_4, buddy_item_5, buddy_item_6, buddy_item_7]

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = card_bg

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.spriteName = 'blue-button'
        x_buttonButton.callback = () => {
            this.visible = false
        }

        // down_button (components)
        const down_buttonButton = new Button(down_button)
        down_buttonButton.spriteName = 'blue-button'
        down_buttonButton.callback = () => this.nextPage()

        // up_button (components)
        const up_buttonButton = new Button(up_button)
        up_buttonButton.spriteName = 'blue-button'
        up_buttonButton.callback = () => this.prevPage()

        this.text = text
        this.total = total
        this.items = items

        /* START-USER-CTR-CODE */

        this.listType = 'ignores'
        this.page = 1
        this.pageSize = 8

        this.showPage()

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get penguins() {
        return this[this.listType]
    }

    get maxPage() {
        return Math.ceil(this.penguins.length / this.pageSize)
    }

    /**
     * Gets the client buddies array, sorted first by online status, and then alphabetically.
     *
     * @readonly
     */
    get buddies() {
        return this.shell.client.buddies.sort((a, b) => {
            return (
                -(a.online - b.online) || // Reverse: true before false
                a.username.toLowerCase().localeCompare(b.username.toLowerCase())
            )
        })
    }

    /**
     * Gets the users in current room, sorted alphabetically.
     *
     * @readonly
     */
    get room() {
        let penguins = Object.values(this.shell.room.penguins)

        return penguins
            .map((penguin) => {
                // Map penguin to buddy item object
                return {id: penguin.id, username: penguin.username}
            })
            .sort((a, b) => {
                // Then sort by username
                return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
            })
    }

    /**
     * Gets the client ignores array, sorted alphabetically.
     *
     * @readonly
     */
    get ignores() {
        return this.shell.client.ignores.sort((a, b) => {
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    show() {
        super.show()

        this.showPage()
    }

    showPage() {
        if (this.visible == false) return

        let page = this.ignores.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let buddy = page[index]

            if (buddy) {
                item.setItem(buddy)
            } else {
                item.setItem(null)
            }
        }

        // Update total text
        if (this.listType == 'buddies' || this.listType == 'ignores') {
            this.total.text = `${this.shell.client[this.listType].length}/100`
            this.total.visible = true
        } else {
            this.total.visible = false
        }
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    switchList(type, text) {
        this.page = 1
        this.text.text = text
        this.listType = type
        this.showPage()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
