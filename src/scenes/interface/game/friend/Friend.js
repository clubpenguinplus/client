import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, ShowHint} from '@components/components'

import FriendItem from './friend_item/FriendItem'

/* START OF COMPILED CODE */

export default class Friend extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Image} */
        this.icon
        /** @type {Phaser.GameObjects.Text} */
        this.total
        /** @type {Phaser.GameObjects.Container} */
        this.buddyitemcontainer
        /** @type {Array<any>} */
        this.items

        // card_bg
        const card_bg = scene.add.image(0, 5, 'main', 'card-bg')
        this.add(card_bg)

        // container_2
        const container_2 = scene.add.container(-223, 272)
        this.add(container_2)

        // search_bar_highlight
        const search_bar_highlight = scene.add.container(0, 0)
        container_2.add(search_bar_highlight)

        // rectangle
        const rectangle = scene.add.rectangle(178, 1, 280, 25)
        rectangle.isFilled = true
        rectangle.fillColor = 1918060
        search_bar_highlight.add(rectangle)

        // ellipse_2
        const ellipse_2 = scene.add.ellipse(319, 1, 25, 25)
        ellipse_2.isFilled = true
        ellipse_2.fillColor = 1918060
        search_bar_highlight.add(ellipse_2)

        // ellipse_3
        const ellipse_3 = scene.add.ellipse(38, 1, 25, 25)
        ellipse_3.isFilled = true
        ellipse_3.fillColor = 1918060
        search_bar_highlight.add(ellipse_3)

        // search_bar_highlight_1
        const search_bar_highlight_1 = scene.add.container(0, 3)
        search_bar_highlight.add(search_bar_highlight_1)

        // rectangle2
        const rectangle2 = scene.add.rectangle(178, 0, 280, 25)
        rectangle2.isFilled = true
        rectangle2.fillColor = 2730429
        search_bar_highlight_1.add(rectangle2)

        // ellipse_22
        const ellipse_22 = scene.add.ellipse(319, 0, 25, 25)
        ellipse_22.isFilled = true
        ellipse_22.fillColor = 2730429
        search_bar_highlight_1.add(ellipse_22)

        // ellipse_32
        const ellipse_32 = scene.add.ellipse(38, 0, 25, 25)
        ellipse_32.isFilled = true
        ellipse_32.fillColor = 2730429
        search_bar_highlight_1.add(ellipse_32)

        // search_bar
        const search_bar = scene.add.container(2, 3)
        container_2.add(search_bar)

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(176, -1, 280, 25)
        rectangle_1.isFilled = true
        search_bar.add(rectangle_1)

        // ellipse_2_1
        const ellipse_2_1 = scene.add.ellipse(317, -1, 25, 25)
        ellipse_2_1.isFilled = true
        search_bar.add(ellipse_2_1)

        // ellipse_3_1
        const ellipse_3_1 = scene.add.ellipse(36, -1, 25, 25)
        ellipse_3_1.isFilled = true
        search_bar.add(ellipse_3_1)

        // text
        const text = scene.add.text(0, -236, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'Friends'
        text.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 420, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        this.add(text)

        // x_button
        const x_button = scene.add.image(180, -240, 'main', 'blue-button')
        x_button.scaleX = 0.7
        x_button.scaleY = 0.7
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(180, -241, 'main', 'blue-x')
        blue_x.scaleX = 0.7
        blue_x.scaleY = 0.7
        this.add(blue_x)

        // buddy_scroll
        const buddy_scroll = scene.add.image(177, 16, 'main', 'buddy/scroll')
        this.add(buddy_scroll)

        // icon
        const icon = scene.add.image(-72, -236, 'main', 'buddies-icon')
        this.add(icon)

        // total
        const total = scene.add.text(81, -234, '', {})
        total.setOrigin(0.5, 0.5)
        total.text = '(99)'
        total.setStyle({color: '#144e90ff', fixedWidth: 50, fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(total)

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(0, 251, 425, 2)
        rectangle_2.isFilled = true
        rectangle_2.fillColor = 2645137
        this.add(rectangle_2)

        // buddy_scroller
        const buddy_scroller = scene.add.image(177, -141, 'main', 'buddy/scroller')
        this.add(buddy_scroller)

        // buddyitemcontainer
        const buddyitemcontainer = scene.add.container(0, 0)
        this.add(buddyitemcontainer)

        // lists
        const items = []

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = card_bg

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.spriteName = 'blue-button'
        x_buttonButton.callback = () => this.close()

        this.text = text
        this.icon = icon
        this.total = total
        this.buddyitemcontainer = buddyitemcontainer
        this.items = items

        /* START-USER-CTR-CODE */

        this.listType = 'friends'
        this.page = 1
        this.pageSize = this.items.length

        this.showPage()

        this.minY = -141
        this.maxY = 172

        const graphics = scene.make.graphics()
        graphics.fillStyle(0xffffff, 0)
        graphics.beginPath()
        graphics.fillRect(-192, -200, 350, 450)
        const mask = graphics.createGeometryMask()
        scene.events.on('update', () => this.updateMaskPos(mask))

        this.buddyitemcontainer.setMask(mask)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    updateMaskPos(mask) {
        mask.geometryMask.x = this.x
        mask.geometryMask.y = this.y
    }

    get penguins() {
        return this[this.listType]
    }

    /**
     * Gets the client friends array, sorted first by online status, and then alphabetically.
     *
     * @readonly
     */
    get friends() {
        return this.shell.client.friends.sort((a, b) => {
            if (!a.online) a.online = false
            if (!b.online) b.online = false
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
                // Map penguin to friend item object
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

    get pending() {
        return this.shell.client.pending.sort((a, b) => {
            if (!a.online) a.online = false
            if (!b.online) b.online = false
            return (
                -(a.online - b.online) || // Reverse: true before false
                a.username.toLowerCase().localeCompare(b.username.toLowerCase())
            )
        })
    }

    showPage() {
        if (this.visible === false) return

        for (let item of this.items) {
            item.destroy()
        }
        this.items = []

        let x = -140
        let y = -290
        for (let i = 0; i < this.penguins.length; i++) {
            if (i % 3 == 0) {
                y = y + 150
                x = -140
            } else {
                x = x + 120
            }
            let p = new FriendItem(this.scene, x, y)
            this.buddyitemcontainer.add(p)
            p.setItem(this.penguins[i])
            this.items.push(p)
        }

        // Update total text
        if (this.listType === 'friends' || this.listType === 'ignores') {
            this.total.text = `(${this.shell.client[this.listType].length})`
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

    showFriend(friend) {
        for (let item of this.items) {
            if (item.id === friend.id) item.setPaperDoll(friend)
        }
    }

    onSearchEnter() {
        this.page = 1
        this.airtower.sendXt('b#sh', this.searchInput.text)
        this.searchInput.clearText()
    }

    close() {
        this.visible = false
    }

    open() {
        this.visible = true
        this.page = 1
        this.listType = 'friends'
        this.showPage()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
