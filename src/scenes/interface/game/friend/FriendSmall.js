import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, ShowHint, InputText} from '@components/components'

import FriendItem from './friend_item/FriendItem'
import SearchItem from './friend_item/SearchItem'
import RequestItem from './friend_item/RequestItem'

/* START OF COMPILED CODE */

export default class FriendSmall extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Image} */
        this.icon
        /** @type {Phaser.GameObjects.Container} */
        this.searchContainer
        /** @type {Phaser.GameObjects.Text} */
        this.searchInput
        /** @type {Phaser.GameObjects.Text} */
        this.nameSearch_1
        /** @type {SearchItem} */
        this.searchItem
        /** @type {RequestItem} */
        this.requestItem
        /** @type {Phaser.GameObjects.Text} */
        this.searchError
        /** @type {FriendItem[]} */
        this.items

        // card_bg
        const card_bg = scene.add.ninePatchContainer(-90, -21, 286.264013444, 557.532006592, 'main', 'card-bg')
        card_bg.marginLeft = 40
        card_bg.marginTop = 0
        card_bg.marginRight = 40
        card_bg.marginBottom = 0
        this.add(card_bg)

        // text
        const text = scene.add.text(-85, -233, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'Friends'
        text.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 420, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        this.add(text)

        // x_button
        const x_button = scene.add.image(14, -237, 'main', 'blue-button')
        x_button.scaleX = 0.7
        x_button.scaleY = 0.7
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(14, -238, 'main', 'blue-x')
        blue_x.scaleX = 0.7
        blue_x.scaleY = 0.7
        this.add(blue_x)

        // icon
        const icon = scene.add.image(-157, -233, 'main', 'buddies-icon')
        this.add(icon)

        // buddy_item_5
        const buddy_item_5 = new FriendItem(scene, -33, 150)
        buddy_item_5.visible = true
        this.add(buddy_item_5)

        // buddy_item_4
        const buddy_item_4 = new FriendItem(scene, -148, 150)
        buddy_item_4.visible = true
        this.add(buddy_item_4)

        // buddy_item_3
        const buddy_item_3 = new FriendItem(scene, -33, 0)
        buddy_item_3.visible = true
        this.add(buddy_item_3)

        // buddy_item_2
        const buddy_item_2 = new FriendItem(scene, -148, 0)
        buddy_item_2.visible = true
        this.add(buddy_item_2)

        // buddy_item_1
        const buddy_item_1 = new FriendItem(scene, -33, -150)
        buddy_item_1.visible = true
        this.add(buddy_item_1)

        // buddy_item
        const buddy_item = new FriendItem(scene, -148, -150)
        buddy_item.visible = true
        this.add(buddy_item)

        // searchContainer
        const searchContainer = scene.add.container(-237, 234)
        searchContainer.visible = false
        this.add(searchContainer)

        // search_bg
        const search_bg = scene.add.ninePatchContainer(147, 24.03082275390625, 928, 340, 'prompt', 'window')
        search_bg.scaleX = 0.308474152
        search_bg.scaleY = 0.43019445
        search_bg.marginLeft = 50
        search_bg.marginTop = 50
        search_bg.marginRight = 50
        search_bg.marginBottom = 50
        search_bg.ninePatchContainerOriginY = 0.999953263437327
        searchContainer.add(search_bg)

        // bar
        const bar = scene.add.container(0, 0)
        bar.scaleX = 0.7
        bar.scaleY = 0.7
        searchContainer.add(bar)

        // search_bar_highlight
        const search_bar_highlight = scene.add.container(0, 0)
        bar.add(search_bar_highlight)

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
        bar.add(search_bar)

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

        // searchInput
        const searchInput = scene.add.text(26, 1, '', {})
        searchInput.setOrigin(0, 0.5)
        searchInput.text = 'Enter Name'
        searchInput.setStyle({color: '#4c4c4cff', fixedWidth: 200, fontFamily: 'Burbank Small', fontSize: '14px'})
        searchContainer.add(searchInput)

        // window_button_small
        const window_button_small = scene.add.image(259, 1, 'prompt', 'window-button-small')
        window_button_small.scaleX = 0.2
        window_button_small.scaleY = 0.2
        window_button_small.setOrigin(0.5, 0.49523809523809526)
        window_button_small.tintTopLeft = 7583205
        window_button_small.tintTopRight = 7583205
        window_button_small.tintBottomLeft = 7583205
        window_button_small.tintBottomRight = 7583205
        searchContainer.add(window_button_small)

        // nameSearch_1
        const nameSearch_1 = scene.add.text(259, 1, '', {})
        nameSearch_1.setOrigin(0.5, 0.5)
        nameSearch_1.text = 'Find'
        nameSearch_1.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '12px'})
        searchContainer.add(nameSearch_1)

        // searchItem
        const searchItem = new SearchItem(scene, 149, -61)
        searchItem.scaleX = 0.8
        searchItem.scaleY = 0.8
        searchItem.visible = false
        searchContainer.add(searchItem)

        // requestItem
        const requestItem = new RequestItem(scene, 149, -61)
        requestItem.scaleX = 0.8
        requestItem.scaleY = 0.8
        requestItem.visible = false
        searchContainer.add(requestItem)

        // searchError
        const searchError = scene.add.text(148, -51, '', {})
        searchError.setOrigin(0.5, 0.5)
        searchError.visible = false
        searchError.text = 'error'
        searchError.setStyle({align: 'center', color: '#a0d3e9ff', fixedWidth: 200, fontFamily: 'Burbank Small', fontSize: '14px'})
        searchError.setWordWrapWidth(200)
        searchContainer.add(searchError)

        // x_button_1
        const x_button_1 = scene.add.image(272, -104, 'main', 'blue-button')
        x_button_1.scaleX = 0.3
        x_button_1.scaleY = 0.3
        searchContainer.add(x_button_1)

        // blue_x_1
        const blue_x_1 = scene.add.image(272, -104.5, 'main', 'blue-x')
        blue_x_1.scaleX = 0.3
        blue_x_1.scaleY = 0.3
        searchContainer.add(blue_x_1)

        // lists
        const items = [buddy_item, buddy_item_1, buddy_item_2, buddy_item_3, buddy_item_4, buddy_item_5]

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = card_bg

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.spriteName = 'blue-button'
        x_buttonButton.callback = () => this.close()

        // searchInput (components)
        const searchInputInputText = new InputText(searchInput)
        searchInputInputText.charlimit = 12
        searchInputInputText.entercallback = () => this.onSearchEnter()

        // window_button_small (components)
        const window_button_smallButton = new Button(window_button_small)
        window_button_smallButton.spriteName = 'window-button-small'
        window_button_smallButton.callback = () => this.onSearchEnter()

        // nameSearch_1 (components)
        new InputText(nameSearch_1)

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1)
        x_button_1Button.spriteName = 'blue-button'
        x_button_1Button.callback = () => this.hideSearch()

        this.text = text
        this.icon = icon
        this.searchContainer = searchContainer
        this.searchInput = searchInput
        this.nameSearch_1 = nameSearch_1
        this.searchItem = searchItem
        this.requestItem = requestItem
        this.searchError = searchError
        this.items = items

        /* START-USER-CTR-CODE */

        this.listType = 'friends'
        this.page = 1
        this.pageSize = this.items.length

        this.showPage()

        const style = {
            width: '360px',
            height: '50px',
            fontFamily: 'Burbank Small',
            fontSize: '20px',
            color: '#fff',
        }
        const chatRegex = this.shell.client.isModerator ? /^[a-zA-Z0-9\s!.,'?]*$/ : /^[a-zA-Z\s!,'?]*$/

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
        if (this.visible == false) return
        if (this.penguins.length > 6) {
            this.parentContainer.buddy.visible = true
            this.parentContainer.buddy.showPage()
            this.visible = false
            return
        }

        let page = this.penguins.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let friend = page[index]

            if (friend) {
                item.visible = true
                item.setItem(friend)
            } else {
                item.setItem(null)
            }
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
            if (item.id == friend.id) return item.setPaperDoll(friend)
        }
        if (this.searchItem.id == friend.id) return this.searchItem.setPaperDoll(friend)
        if (this.requestItem.id == friend.id) return this.requestItem.setPaperDoll(friend)
    }

    onSearchEnter() {
        this.page = 1
        this.airtower.sendXt('b#sh', this.searchInput.textContent)
        this.searchInput.__InputText.clearText()
    }

    close() {
        this.visible = false
    }

    open() {
        this.visible = true
        this.page = 1
        this.listType = 'friends'
        this.showPage()

        if (this.shell.client.pending.length > 0) {
            this.searchContainer.visible = true
            this.requestItem.visible = true
            this.requestItem.setItem(this.shell.client.pending[0])
        }
    }

    showSearch() {
        this.searchContainer.visible = true
        this.searchInput.__InputText.clickZone.visible = true
    }

    hideSearch() {
        this.searchContainer.visible = false
        this.searchInput.__InputText.clickZone.visible = false
        this.searchInput.__InputText.clearText()
        this.searchItem.visible = false
        this.searchError.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
