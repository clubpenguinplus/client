import Closeup from './Closeup'
import TeleportItem from './TeleportItem'
import {Button, LocalisedString, Interactive, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class EPFPhone extends Closeup {
    constructor() {
        super('EPFPhone')

        /** @type {Phaser.GameObjects.Sprite} */
        this.tp_anim
        /** @type {Phaser.GameObjects.Text} */
        this.tp_text
        /** @type {Phaser.GameObjects.Container} */
        this.tpitem_container
        /** @type {Phaser.GameObjects.Image} */
        this.bar
        /** @type {Phaser.GameObjects.Container} */
        this.teleport_page
        /** @type {Phaser.GameObjects.Container} */
        this.select_page
        /** @type {Phaser.GameObjects.Container} */
        this.phone_container

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('phone-pack', 'client/media/interface/closeups/phone/phone-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // phone_container
        const phone_container = this.add.container(760, 460)

        // bg
        const bg = this.add.image(-0.01738439992061558, -0.026804403675726007, 'epfphone', 'bg')
        phone_container.add(bg)

        // home_btn
        const home_btn = this.add.image(0.4826156000793844, 363.9731955963243, 'epfphone', 'home-btn')
        phone_container.add(home_btn)

        // teleport_page
        const teleport_page = this.add.container(-149, -246)
        teleport_page.visible = false
        phone_container.add(teleport_page)

        // teleport
        const teleport = this.add.image(-174, 246, 'epfphone', 'teleport')
        teleport_page.add(teleport)

        // tp_anim
        const tp_anim = this.add.sprite(140, 256, 'epfphone', 'anim0001')
        tp_anim.visible = false
        teleport_page.add(tp_anim)

        // tp_text
        const tp_text = this.add.text(140, 364, '', {})
        tp_text.setOrigin(0.5, 0)
        tp_text.visible = false
        tp_text.text = 'TELEPORTING TO\nPLACE'
        tp_text.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '30px', fontStyle: 'bold'})
        teleport_page.add(tp_text)

        // tpitem_container
        const tpitem_container = this.add.container(0, 0)
        teleport_page.add(tpitem_container)

        // bar
        const bar = this.add.image(316.5, 126, 'epfphone', 'bar')
        teleport_page.add(bar)

        // select_page
        const select_page = this.add.container(-90.01738439992062, -205.02680440367573)
        phone_container.add(select_page)

        // gear_txt
        const gear_txt = this.add.text(0, 80, '', {})
        gear_txt.setOrigin(0.5, 0.5)
        gear_txt.text = 'GEAR'
        gear_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(gear_txt)

        // gear_btn
        const gear_btn = this.add.image(0, 0, 'epfphone', 'gear-btn')
        gear_btn.scaleX = 0.7
        gear_btn.scaleY = 0.7
        select_page.add(gear_btn)

        // missions_txt
        const missions_txt = this.add.text(180, 80, '', {})
        missions_txt.setOrigin(0.5, 0.5)
        missions_txt.text = 'MISSIONS'
        missions_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(missions_txt)

        // missions_btn
        const missions_btn = this.add.image(180, 0, 'epfphone', 'missions-btn')
        missions_btn.scaleX = 0.7
        missions_btn.scaleY = 0.7
        select_page.add(missions_btn)

        // teleport_txt
        const teleport_txt = this.add.text(0, 260, '', {})
        teleport_txt.setOrigin(0.5, 0.5)
        teleport_txt.text = 'TELEPORT'
        teleport_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(teleport_txt)

        // teleport_btn
        const teleport_btn = this.add.image(0, 180, 'epfphone', 'teleport-btn')
        teleport_btn.scaleX = 0.7
        teleport_btn.scaleY = 0.7
        select_page.add(teleport_btn)

        // messages_txt
        const messages_txt = this.add.text(180, 260, '', {})
        messages_txt.setOrigin(0.5, 0.5)
        messages_txt.text = 'MESSAGES'
        messages_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(messages_txt)

        // messages_btn
        const messages_btn = this.add.image(180, 180, 'epfphone', 'messages-btn')
        messages_btn.scaleX = 0.7
        messages_btn.scaleY = 0.7
        select_page.add(messages_btn)

        // gadgets_txt
        const gadgets_txt = this.add.text(0, 440, '', {})
        gadgets_txt.setOrigin(0.5, 0.5)
        gadgets_txt.text = 'GADGETS'
        gadgets_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(gadgets_txt)

        // gadgets_button
        const gadgets_button = this.add.image(0, 360, 'epfphone', 'gadgets-button')
        gadgets_button.scaleX = 0.7
        gadgets_button.scaleY = 0.7
        select_page.add(gadgets_button)

        // puffle_txt
        const puffle_txt = this.add.text(180, 440, '', {})
        puffle_txt.setOrigin(0.5, 0.5)
        puffle_txt.visible = false
        puffle_txt.text = 'ELITE PUFFLE'
        puffle_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(puffle_txt)

        // puffle_btn
        const puffle_btn = this.add.image(180, 360, 'epfphone', 'puffle-btn')
        puffle_btn.scaleX = 0.7
        puffle_btn.scaleY = 0.7
        puffle_btn.visible = false
        select_page.add(puffle_btn)

        // white_x
        const white_x = this.add.image(238, -387, 'main', 'white-x')
        white_x.scaleX = 0.6
        white_x.scaleY = 0.6
        phone_container.add(white_x)

        // block (components)
        new Interactive(block)

        // home_btn (components)
        const home_btnButton = new Button(home_btn)
        home_btnButton.callback = () => this.goToHQ()

        // gear_txt (components)
        const gear_txtLocalisedString = new LocalisedString(gear_txt)
        gear_txtLocalisedString.id = 'epfphone-gear'

        // gear_btn (components)
        const gear_btnButton = new Button(gear_btn)
        gear_btnButton.callback = () => this.showGearPage()

        // missions_txt (components)
        const missions_txtLocalisedString = new LocalisedString(missions_txt)
        missions_txtLocalisedString.id = 'epfphone-missions'

        // missions_btn (components)
        const missions_btnButton = new Button(missions_btn)
        missions_btnButton.callback = () => this.showMissionsPage()

        // teleport_txt (components)
        const teleport_txtLocalisedString = new LocalisedString(teleport_txt)
        teleport_txtLocalisedString.id = 'epfphone-teleport'

        // teleport_btn (components)
        const teleport_btnButton = new Button(teleport_btn)
        teleport_btnButton.callback = () => this.showTeleportPage()

        // messages_txt (components)
        const messages_txtLocalisedString = new LocalisedString(messages_txt)
        messages_txtLocalisedString.id = 'epfphone-messages'

        // messages_btn (components)
        const messages_btnButton = new Button(messages_btn)
        messages_btnButton.callback = () => this.showMessagesPage()

        // gadgets_txt (components)
        const gadgets_txtLocalisedString = new LocalisedString(gadgets_txt)
        gadgets_txtLocalisedString.id = 'epfphone-gadgets'

        // gadgets_button (components)
        const gadgets_buttonButton = new Button(gadgets_button)
        gadgets_buttonButton.callback = () => this.showGadgetsPage()

        // puffle_txt (components)
        const puffle_txtLocalisedString = new LocalisedString(puffle_txt)
        puffle_txtLocalisedString.id = 'epfphone-elitepuffle'

        // puffle_btn (components)
        const puffle_btnButton = new Button(puffle_btn)
        puffle_btnButton.callback = () => this.showElitePufflePage()

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => this.stop()

        this.tp_anim = tp_anim
        this.tp_text = tp_text
        this.tpitem_container = tpitem_container
        this.bar = bar
        this.teleport_page = teleport_page
        this.select_page = select_page
        this.phone_container = phone_container

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.interface.main.phone_button.visible = false
        this.phone_container.x = 86
        this.phone_container.y = 758
        this.phone_container.scaleX = 0.13
        this.phone_container.scaleY = 0.12
        this.tweens.add({
            targets: this.phone_container,
            x: 760,
            y: 460,
            scaleX: 1,
            scaleY: 1,
            duration: 500,
            ease: 'Power2',
        })
        this.generateTeleportItems()
        this.createMask()
        this.bar.setInteractive({cursor: 'pointer', draggable: true})
        this.bar.on('drag', (pointer, dragX, dragY) => {
            this.scrollTeleportItems(dragY)
        })
    }

    stop() {
        this.tweens.add({
            targets: this.phone_container,
            x: 86,
            y: 758,
            scaleX: 0.13,
            scaleY: 0.12,
            duration: 200,
            ease: 'Power2',
            onComplete: () => {
                this.interface.main.phone_button.visible = true
                setTimeout(() => {
                    super.stop()
                }, 50)
            },
        })
    }

    goToHQ() {
        this.interface.main.phone_button.visible = true
        super.stop()
        let id = 323
        let room = this.crumbs.scenes.rooms[id]
        if (this.shell.room.key == room.key) return

        this.shell.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    showSelectPage() {}

    showGearPage() {}

    showMissionsPage() {}

    showTeleportPage() {
        this.teleport_page.visible = true
        this.select_page.visible = false
    }

    createMask() {
        this.mask = this.add.graphics()
        this.mask.fillStyle(0xffffff, 0)
        this.mask.beginPath()
        this.maskRect = this.mask.fillRect(569, 247, 342, 521)
        this.mask = this.mask.createGeometryMask()
        this.tpitem_container.setMask(this.mask)
    }

    generateTeleportItems() {
        const xPos = -25
        let yPos = 65
        this.tpItems = []
        for (let item of this.crumbs.roomList.sort((a, b) => a.name.localeCompare(b.name))) {
            let room = this.crumbs.scenes.rooms[item.id]
            if (room.preventTeleport) continue
            let teleportItem = new TeleportItem(this, xPos, yPos)
            teleportItem.roomId = item.id
            if (teleportItem.createItem()) {
                this.tpitem_container.add(teleportItem)
                this.tpItems.push(teleportItem)
                yPos += 50
            }
        }
    }

    teleport(roomId) {
        this.tpitem_container.visible = false
        let room = this.crumbs.scenes.rooms[roomId]
        if (!room) return super.stop()
        if (this.shell.room.key == room.key) return super.stop()
        this.tp_text.visible = true
        this.tp_text.text = `${this.crumbs.getString('epfphone-teleportingto')}\n${this.crumbs.getString(room.key).toUpperCase()}`
        this.tp_anim.visible = true
        this.tp_anim.play('epfphone-anim')
        this.tp_anim.on('animationcomplete', () => {
            this.shell.client.sendJoinRoom(roomId, room.key, room.x, room.y, 80)
            this.interface.main.phone_button.visible = true
            this.stop()
        })
    }

    scrollTeleportItems(dragY) {
        const minBarY = 126
        const maxBarY = 472
        const highestItemY = this.tpItems[this.tpItems.length - 1].y
        const highestVisibleY = 521
        const yDiff = highestVisibleY - highestItemY

        if (dragY < minBarY) dragY = minBarY
        if (dragY > maxBarY) dragY = maxBarY

        let percent = (dragY - minBarY) / (maxBarY - minBarY)
        let itemY = yDiff * percent
        this.tpitem_container.y = itemY

        this.tpitem_container.y = itemY
        this.bar.y = dragY
    }

    showMessagesPage() {}

    showGadgetsPage() {}

    showElitePufflePage() {}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
