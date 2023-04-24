import BaseContainer from '@scenes/base/BaseContainer'

import {SimpleButton, Button, DraggableContainer, Interactive} from '@components/components'

import Inventory from '../inventory/Inventory'
import InventorySort from '../inventory_sort/InventorySort'
import Buttons from '../buttons/Buttons'
import PaperDoll from '../paperdoll/PaperDoll'

/* START OF COMPILED CODE */

export default class PlayerCard extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460)

        /** @type {Phaser.GameObjects.Container} */
        this.photo
        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {Buttons} */
        this.buttons
        /** @type {Phaser.GameObjects.Container} */
        this.stats
        /** @type {Phaser.GameObjects.Text} */
        this.coins
        /** @type {Phaser.GameObjects.Text} */
        this.stamps
        /** @type {Phaser.GameObjects.Text} */
        this.username
        /** @type {InventorySort} */
        this.inventorySort
        /** @type {Inventory} */
        this.inventory
        /** @type {Phaser.GameObjects.Image} */
        this.edit_player_button
        /** @type {Phaser.GameObjects.Sprite} */
        this.member_main_anim
        /** @type {Phaser.GameObjects.Image} */
        this.member_chevrons

        // photo
        const photo = scene.add.container(0, -2)
        this.add(photo)

        // card_photo
        const card_photo = scene.add.image(0, 0, 'main', 'card-photo')
        photo.add(card_photo)

        // card_bg
        const card_bg = scene.add.image(0, 37, 'main', 'mobile/card-bg')
        this.add(card_bg)

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -7)
        this.add(paperDoll)

        // buttons
        const buttons = new Buttons(scene, 0, 261)
        buttons.visible = false
        this.add(buttons)

        // stats
        const stats = scene.add.container(-13, 255)
        this.add(stats)

        // stamps_btn
        const stamps_btn = scene.add.image(-150, 78, 'main', 'mobile/blue-button')
        stats.add(stamps_btn)

        // card_coin
        const card_coin = scene.add.image(-151, -1, 'main', 'card-coin')
        card_coin.scaleX = 1.5
        card_coin.scaleY = 1.5
        stats.add(card_coin)

        // coins
        const coins = scene.add.text(60, 2, '', {})
        coins.setOrigin(0.5, 0.5)
        coins.text = 'Your Coins: 000000'
        coins.setStyle({color: '#000000ff', fixedWidth: 330, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        stats.add(coins)

        // stamps
        const stamps = scene.add.text(60, 78, '', {})
        stamps.setOrigin(0.5, 0.5)
        stamps.text = 'Your Stamps: 690/420'
        stamps.setStyle({color: '#000000ff', fixedWidth: 330, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        stats.add(stamps)

        // card_stamp
        const card_stamp = scene.add.image(-150, 75, 'main', 'mobile/stamp-icon')
        stats.add(card_stamp)

        // username
        const username = scene.add.text(0, -238, '', {})
        username.setOrigin(0.5, 0.5)
        username.text = 'Username'
        username.setStyle({align: 'center', color: '#000000ff', fixedWidth: 360, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(username)

        // blue_x
        const blue_x = scene.add.image(179, -245, 'main', 'white-x')
        blue_x.scaleX = 0.8
        blue_x.scaleY = 0.8
        this.add(blue_x)

        // inventorySort
        const inventorySort = new InventorySort(scene, 434, 315)
        inventorySort.visible = false
        this.add(inventorySort)

        // inventory
        const inventory = new Inventory(scene, -135, 33)
        this.add(inventory)

        // edit_player_button
        const edit_player_button = scene.add.image(2992, 284, 'main', 'edit_player_button')
        edit_player_button.visible = false
        this.add(edit_player_button)

        // container_2
        const container_2 = scene.add.container(-145, -246)
        this.add(container_2)

        // member_ribbon_back
        const member_ribbon_back = scene.add.image(0, 42, 'main', 'member/ribbon-back0001')
        container_2.add(member_ribbon_back)

        // member_bg
        const member_bg = scene.add.image(0, 15, 'main', 'member/bg')
        container_2.add(member_bg)

        // member_main_anim
        const member_main_anim = scene.add.sprite(0, 15, 'main', 'member/main_anim0001')
        container_2.add(member_main_anim)

        // member_badge
        const member_badge = scene.add.image(0, 0, 'main', 'member/badge')
        container_2.add(member_badge)

        // member_chevrons
        const member_chevrons = scene.add.image(0, 55, 'main', 'member/chevrons1y')
        member_chevrons.visible = false
        container_2.add(member_chevrons)

        // member_ribbon_en
        const member_ribbon_en = scene.add.image(0, 33, 'main', 'member/ribbon-en')
        container_2.add(member_ribbon_en)

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = card_bg

        // card_photo (components)
        new Interactive(card_photo)

        // stamps_btn (components)
        const stamps_btnButton = new Button(stamps_btn)
        stamps_btnButton.spriteName = 'mobile/blue-button'
        stamps_btnButton.callback = () => {
            this.interface.loadExternal('Stampbook')
            this.interface.stampbookId = this.id
        }

        // blue_x (components)
        const blue_xSimpleButton = new SimpleButton(blue_x)
        blue_xSimpleButton.callback = () => {
            this.visible = false
        }

        // edit_player_button (components)
        const edit_player_buttonButton = new Button(edit_player_button)
        edit_player_buttonButton.spriteName = 'edit_player_button'
        edit_player_buttonButton.callback = () => this.editPlayer()

        this.photo = photo
        this.paperDoll = paperDoll
        this.buttons = buttons
        this.stats = stats
        this.coins = coins
        this.stamps = stamps
        this.username = username
        this.inventorySort = inventorySort
        this.inventory = inventory
        this.edit_player_button = edit_player_button
        this.member_main_anim = member_main_anim
        this.member_chevrons = member_chevrons

        /* START-USER-CTR-CODE */

        // Active penguin id
        this.id = null
        this.member_main_anim.play('member/main_anim')
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    /**
     * Shows a player card by id, if the user is found in the current room the penguin object can
     * be taken from there. Otherwise the penguin object must be fetched from the server.
     *
     * @param {number} id - Penguin ID
     * @param {boolean} refresh - Whether or not a card should pass the already open check
     */
    showCard(id, refresh = false) {
        // Don't open player's card if it's already open
        if (id == this.id && this.visible && !refresh) {
            this.interface.main.showWidget(this)
            return
        }

        if (id in this.shell.room.penguins) {
            let penguin = this.shell.room.penguins[id]
            this._showCard(penguin, penguin.items.flat)
        } else {
            // Fetch penguin object from server
            this.airtower.sendXt('u#gp', id)
        }
    }

    /**
     * Primary showCard function, which accepts a penguin object, and optionally an items object to
     * fill the player card with the correct data. The items object is not required if the penguin is fetched
     * from the server due to all necessary data being available from the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} items - Penguin items object
     */
    _showCard(penguin, items = penguin) {
        // Text
        this.username.text = penguin.username

        for (var x in this.shell.mascots) {
            if (this.shell.mascots[x].id == penguin.id) this.username.text = this.shell.mascots[x].name
        }

        if (penguin.puffle && !items.puffle) {
            items.puffle = penguin.puffle
        }
        if (penguin.id && !items.id) {
            items.id = penguin.id
        }

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        if (penguin.isClient) {
            this.coins.text = `Your Coins: ${this.shell.client.coins}`
            this.stats.visible = true
            this.buttons.visible = false
            this.inventory.visible = true
            this.inventory.showPage()
            this.stamps.text = `Your Stamps: ${this.getTotalStamps()[1]}/${this.getTotalStamps()[0]}`
        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
        }

        if (this.shell.client.rank >= 3) this.edit_player_button.visible = true

        this.inventorySort.closeMenu()

        this.id = penguin.id

        this.updateButtons()

        this.interface.main.showWidget(this)
    }

    updateButtons() {
        if (this.buttons.visible) {
            let relationship = this.shell.getRelationship(this.id)
            this.buttons.updateButtons(relationship)
        }
    }

    editPlayer() {
        this.airtower.sendXt('o#gp', this.id)
        this.visible = false
    }

    getCategoryStamps(category) {
        let categoryStamps = []
        let ownedCategoryStamps = []
        for (var stamp in this.crumbs.stamps) {
            if (this.crumbs.stamps[stamp].groupid == category && !this.crumbs.stamps[stamp].disabled) {
                categoryStamps.push(this.crumbs.stamps[stamp])
                if (this.shell.client.stamps.includes(stamp)) {
                    ownedCategoryStamps.push(this.crumbs.stamps[stamp])
                }
            }
        }
        return [categoryStamps.length, ownedCategoryStamps.length]
    }

    getTotalStamps() {
        let groups = []
        let totalStamps = 0
        let ownedStamps = 0
        for (let page of this.crumbs.stampbook.enabledPages) {
            if (this.crumbs.stampbook[page].group) groups.push(this.crumbs.stampbook[page].group)
        }
        for (let group of groups) {
            let cgs = this.getCategoryStamps(group)
            totalStamps += cgs[0]
            ownedStamps += cgs[1]
        }
        return [totalStamps, ownedStamps]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
