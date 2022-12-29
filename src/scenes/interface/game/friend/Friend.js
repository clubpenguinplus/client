import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, InputText} from '@components/components'

import FriendItem from './friend_item/FriendItem'
import SearchItem from './friend_item/SearchItem'
import RequestItem from './friend_item/RequestItem'

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
        /** @type {NinePatchContainer} */
        this.buddy_scroller
        /** @type {Phaser.GameObjects.Container} */
        this.buddyitemcontainer
        /** @type {Phaser.GameObjects.Container} */
        this.searchContainer
        /** @type {SearchItem} */
        this.searchItem
        /** @type {RequestItem} */
        this.requestItem
        /** @type {Phaser.GameObjects.Text} */
        this.searchError
        /** @type {Phaser.GameObjects.Text} */
        this.nameSearch_1
        /** @type {Phaser.GameObjects.Text} */
        this.searchInput
        /** @type {Array<any>} */
        this.items

        // card_bg
        const card_bg = scene.add.image(0, 5, 'main', 'card-bg')
        this.add(card_bg)

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

        // buddy_scroller
        const buddy_scroller = scene.add.ninePatchContainer(177, -141, 32, 60, 'main', 'buddy/scroller')
        buddy_scroller.marginLeft = 8
        buddy_scroller.marginTop = 40
        buddy_scroller.marginRight = 8
        buddy_scroller.marginBottom = 15
        this.add(buddy_scroller)

        // buddyitemcontainer
        const buddyitemcontainer = scene.add.container(0, 0)
        this.add(buddyitemcontainer)

        // searchContainer
        const searchContainer = scene.add.container(-207, 227)
        searchContainer.visible = false
        this.add(searchContainer)

        // search_bg
        const search_bg = scene.add.ninePatchContainer(207, 102, 464, 250, 'prompt', 'window')
        search_bg.marginLeft = 50
        search_bg.marginTop = 50
        search_bg.marginRight = 50
        search_bg.marginBottom = 50
        search_bg.ninePatchContainerOriginY = 0.999953263437327
        searchContainer.add(search_bg)

        // searchItem
        const searchItem = new SearchItem(scene, 207, -53)
        searchItem.scaleX = 1
        searchItem.scaleY = 1
        searchItem.visible = false
        searchContainer.add(searchItem)

        // requestItem
        const requestItem = new RequestItem(scene, 207, -50)
        requestItem.scaleX = 1
        requestItem.scaleY = 1
        requestItem.visible = false
        searchContainer.add(requestItem)

        // searchError
        const searchError = scene.add.text(207, -46, '', {})
        searchError.setOrigin(0.5, 0.5)
        searchError.visible = false
        searchError.text = 'error'
        searchError.setStyle({align: 'center', color: '#a0d3e9ff', fixedWidth: 200, fontFamily: 'Burbank Small', fontSize: '18px'})
        searchError.setWordWrapWidth(200)
        searchContainer.add(searchError)

        // x_button_1
        const x_button_1 = scene.add.image(403, -114, 'main', 'blue-button')
        x_button_1.scaleX = 0.5
        x_button_1.scaleY = 0.5
        searchContainer.add(x_button_1)

        // blue_x_1
        const blue_x_1 = scene.add.image(403, -114, 'main', 'blue-x')
        blue_x_1.scaleX = 0.5
        blue_x_1.scaleY = 0.5
        searchContainer.add(blue_x_1)

        // container_2
        const container_2 = scene.add.container(-223, 280)
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

        // window_button_small
        const window_button_small = scene.add.image(158, 281, 'prompt', 'window-button-small')
        window_button_small.scaleX = 0.3
        window_button_small.scaleY = 0.3
        window_button_small.setOrigin(0.5, 0.49523809523809526)
        window_button_small.tintTopLeft = 7583205
        window_button_small.tintTopRight = 7583205
        window_button_small.tintBottomLeft = 7583205
        window_button_small.tintBottomRight = 7583205
        this.add(window_button_small)

        // nameSearch_1
        const nameSearch_1 = scene.add.text(158, 281, '', {})
        nameSearch_1.setOrigin(0.5, 0.5)
        nameSearch_1.text = 'Find'
        nameSearch_1.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '18px'})
        this.add(nameSearch_1)

        // searchInput
        const searchInput = scene.add.text(-183, 282, '', {})
        searchInput.setOrigin(0, 0.5)
        searchInput.text = 'Enter Name'
        searchInput.setStyle({color: '#696969ff', fixedWidth: 200, fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(searchInput)

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(0, 251, 425, 2)
        rectangle_2.isFilled = true
        rectangle_2.fillColor = 2645137
        this.add(rectangle_2)

        // lists
        const items = []

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = card_bg

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.spriteName = 'blue-button'
        x_buttonButton.callback = () => this.close()

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1)
        x_button_1Button.spriteName = 'blue-button'
        x_button_1Button.callback = () => this.hideSearch()

        // window_button_small (components)
        const window_button_smallButton = new Button(window_button_small)
        window_button_smallButton.spriteName = 'window-button-small'
        window_button_smallButton.callback = () => this.onSearchEnter()

        // nameSearch_1 (components)
        new InputText(nameSearch_1)

        // searchInput (components)
        const searchInputInputText = new InputText(searchInput)
        searchInputInputText.charlimit = 12
        searchInputInputText.entercallback = () => this.onSearchEnter()
        searchInputInputText.userdefinedonclickfunction = () => this.showSearch()

        this.text = text
        this.icon = icon
        this.total = total
        this.buddy_scroller = buddy_scroller
        this.buddyitemcontainer = buddyitemcontainer
        this.searchContainer = searchContainer
        this.searchItem = searchItem
        this.requestItem = requestItem
        this.searchError = searchError
        this.nameSearch_1 = nameSearch_1
        this.searchInput = searchInput
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
        graphics.fillRect(-192 * window.currentScale, -200 * window.currentScale, 350 * window.currentScale, 450 * window.currentScale)
        const mask = graphics.createGeometryMask()
        scene.events.on('update', () => this.updateMaskPos(mask))

        this.buddyitemcontainer.setMask(mask)

        this.buddy_scroller.setInteractive()
        this.buddy_scroller.on('pointerdown', (pointer) => this.onScrollerDown(pointer))
        this.buddy_scroller.on('pointerup', (pointer) => this.onScrollerUp(pointer))

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
            if (!a.isBff) a.isBff = false
            if (!b.isBff) b.isBff = false
            return (
                -(a.isBff - b.isBff) ||
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
        if (this.visible == false) return

        for (let item of this.items) {
            item.destroy()
        }
        this.items = []

        let temp = []

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
            p.over.__SimpleButton.start()
            p.bff.__SimpleButton.start()
            this.buddyitemcontainer.add(p)
            p.setItem(this.penguins[i])
            this.items.push(p)

            temp.push(this.penguins[i].id)
        }

        if (this.shell.client.pending.length > 0) {
            this.searchContainer.visible = true
            this.requestItem.visible = true
            this.requestItem.setItem(this.shell.client.pending[0])
        } else {
            this.searchContainer.visible = false
            this.requestItem.visible = false
        }

        this.airtower.sendXt('u#gbs', temp.join('%'))

        // Update total text
        if (this.listType == 'friends' || this.listType == 'ignores') {
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
            if (item.id != friend.id) continue
            item.setPaperDoll(friend)
            break
        }
        if (this.searchItem.id == friend.id) this.searchItem.setPaperDoll(friend)
        if (this.requestItem.id == friend.id) this.requestItem.setPaperDoll(friend)
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

    onScrollerDown(pointer) {
        let y = pointer.y - this.y
        if (y < this.minY) y = this.minY
        if (y > this.maxY) y = this.maxY
        this.buddy_scroller.y = y
        this.scene.input.on('pointermove', this.onScrollerMove, this)
        this.scene.input.on('pointerup', this.onScrollerUp, this)
    }

    onScrollerMove(pointer) {
        let y = pointer.y - this.y
        if (y < this.minY) y = this.minY
        if (y > this.maxY) y = this.maxY
        this.buddy_scroller.y = y

        let distance = Phaser.Math.Difference(this.minY, y)
        let height = Math.ceil(this.penguins.length / 3) > 3 ? Math.ceil(this.penguins.length / 3) * 150 - 450 : 0
        let yoffset = height / (this.maxY - this.minY)
        this.buddyitemcontainer.y = -(distance * yoffset)

        for (let i of this.items) {
            if (i.y + this.buddyitemcontainer.y < -280 || i.y + this.buddyitemcontainer.y > 300) {
                i.visible = false
            } else {
                i.visible = true
            }
        }
    }

    onScrollerUp(pointer) {
        this.scene.input.removeListener('pointermove', this.onScrollerMove)
        this.scene.input.removeListener('pointerup', this.onScrollerUp)
        this.scrollerDown = false
    }

    onSearchEnter() {
        this.page = 1
        this.airtower.sendXt('b#sh', this.searchInput.textContent)
        this.searchInput.__InputText.clearText()
    }

    close() {
        this.visible = false
        this.searchInput.__InputText.clickZone.visible = false
    }

    open() {
        this.visible = true
        this.page = 1
        this.listType = 'friends'
        this.showPage()

        this.searchInput.__InputText.clickZone.visible = true
    }

    showSearch() {
        this.searchContainer.visible = true
    }

    hideSearch() {
        this.searchInput.__InputText.clearText()
        this.searchContainer.visible = false
        this.searchItem.visible = false
        this.searchError.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
