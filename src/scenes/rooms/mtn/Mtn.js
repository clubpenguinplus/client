/* START OF COMPILED CODE */

import RoomScene from '../RoomScene'
import Waddle103 from './waddle/Waddle103'
import Waddle102 from './waddle/Waddle102'
import Waddle101 from './waddle/Waddle101'
import Waddle100 from './waddle/Waddle100'
import SimpleButton from '../../components/SimpleButton'
import Button from '../../components/Button'
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mtn extends RoomScene {
    constructor() {
        super('Mtn')

        /** @type {Phaser.GameObjects.Sprite} */
        this.skichairback
        /** @type {Phaser.GameObjects.Sprite} */
        this.skichairtopback
        /** @type {Phaser.GameObjects.Sprite} */
        this.skichairfront
        /** @type {Waddle103} */
        this.waddle103
        /** @type {Waddle102} */
        this.waddle102
        /** @type {Waddle101} */
        this.waddle101
        /** @type {Waddle100} */
        this.waddle100
        /** @type {Phaser.GameObjects.Sprite} */
        this.skichairtopfront
        /** @type {Phaser.GameObjects.Sprite} */
        this.ski_cat
        /** @type {Array<Waddle100|Waddle101|Waddle102|Waddle103|Phaser.GameObjects.Image>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            village: () => this.triggerRoom(200, 480, 560),
            waddle100: () => this.triggerWaddle(100),
            waddle101: () => this.triggerWaddle(101),
            waddle102: () => this.triggerWaddle(102),
            waddle103: () => this.triggerWaddle(103)
        }

        this.waddles = {}

        // Don't show waddle seat for sled hand items
        this.sleds = [5021, 5046, 5047]

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('mtn-pack', 'client/media/rooms/mtn/mtn-pack.json')
    }

    /** @returns {void} */
    _create() {
        // mtnbg
        this.add.image(760, 480, 'mtn', 'mtnbg')

        // skichairback
        const skichairback = this.add.sprite(1293, 422, 'mtn', 'skichair0160')

        // skichairtopback
        const skichairtopback = this.add.sprite(470, 142, 'mtn', 'skichairtopback0001')

        // skichairfront
        const skichairfront = this.add.sprite(1285, 414, 'mtn', 'skichair0001')

        // mountain
        this.add.image(760, 480, 'mtn', 'mountain')

        // concrete
        this.add.image(952, 337, 'mtn', 'concrete')

        // waddle103
        const waddle103 = new Waddle103(this, 1040, 586)
        this.add.existing(waddle103)

        // waddle102
        const waddle102 = new Waddle102(this, 858, 637)
        this.add.existing(waddle102)

        // waddle101
        const waddle101 = new Waddle101(this, 557, 620)
        this.add.existing(waddle101)

        // waddle100
        const waddle100 = new Waddle100(this, 202, 512)
        this.add.existing(waddle100)

        // liftwheel
        this.add.image(666, 143, 'mtn', 'liftwheel')

        // blue_circles
        this.add.image(478, 586, 'mtn', 'blue_circles')

        // green_circles
        this.add.image(1210, 550, 'mtn', 'green_circles')

        // skichairtopfront
        const skichairtopfront = this.add.sprite(505, 151, 'mtn', 'skichairtopfront0001')

        // hut_back
        this.add.image(1044, 262, 'mtn', 'hut_back')

        // hut
        const hut = this.add.image(1073.817548829116, 321.96074095961126, 'mtn', 'hut')
        hut.setOrigin(0.4186582388937918, 0.8898691418112477)

        // green_squares
        this.add.image(1019, 662, 'mtn', 'green_squares')

        // tubestuckleftest
        this.add.image(355, 358, 'mtn', 'tubestuckleftest')

        // tubetop
        this.add.image(551, 206, 'mtn', 'tubetop')

        // tubeundercat
        this.add.image(515, 255, 'mtn', 'tubeundercat')

        // bench
        this.add.image(559, 299, 'mtn', 'bench')

        // ski_cat
        const ski_cat = this.add.sprite(486, 172, 'mtn', 'ski_cat0001')

        // skicatbottom
        const skicatbottom = this.add.image(1451, 896, 'mtn', 'skicatbottom')

        // lists
        const sort = [waddle100, waddle101, waddle102, waddle103, hut]

        // ski_cat (components)
        const ski_catSimpleButton = new SimpleButton(ski_cat)
        ski_catSimpleButton.hoverCallback = () => this.onSkiCatHover()
        ski_catSimpleButton.hoverOutCallback = () => this.onSkiCatOut()
        ski_catSimpleButton.callback = () => this.interface.loadExternal('SledCatalog')

        // skicatbottom (components)
        const skicatbottomButton = new Button(skicatbottom)
        skicatbottomButton.callback = () => this.interface.loadExternal('SledCatalog')

        this.skichairback = skichairback
        this.skichairtopback = skichairtopback
        this.skichairfront = skichairfront
        this.waddle103 = waddle103
        this.waddle102 = waddle102
        this.waddle101 = waddle101
        this.waddle100 = waddle100
        this.skichairtopfront = skichairtopfront
        this.ski_cat = ski_cat
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    setWaddles(waddles) {
        super.setWaddles(waddles)

        for (let w of Object.keys(this.waddles)) {
            const waddle = this.waddles[w]
            // Update waddles to show seats
            for (let i = 0; i < waddle.seatCount; i++) {
                this.updateWaddle(w, i, waddle.seats[i])
            }
        }
    }

    updateWaddle(waddle, seat, username) {
        const show = this.checkShowSeat(username)

        this.getSeat(waddle, seat).visible = show

        super.updateWaddle(waddle, seat, username)
    }

    checkShowSeat(username) {
        if (username === null) {
            return false
        }

        const penguin = this.getPenguinByUsername(username)
        if (!penguin) {
            return false
        }

        const hand = penguin.items.all.hand.id
        return !this.sleds.includes(hand)
    }

    triggerWaddle(id) {
        if (this.interface.main.waddle.visible) return

        let sled = this.crumbs.getString('sled')
        let text = this.crumbs.getString(`join-multiplayer,${sled}`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.shell.client.lastSledId = id
            this.airtower.sendXt('a#jt', id)

            this.interface.prompt.window.visible = false
        })
    }

    getSeat(waddle, seat) {
        return this[`waddle${waddle}`][`seat${seat}`]
    }

    create() {
        super.create()
        this.skichairback.play('mtn-skichairback')
        this.skichairfront.play('mtn-skichairfront')
        this.skichairtopfront.play('mtn-skichairtopfront')
        this.skichairtopback.play('mtn-skichairtopback')
    }

    onSkiCatHover() {
        this.ski_cat.play('mtn-skicat')
    }

    onSkiCatOut() {
        this.ski_cat.anims.stop()
        this.ski_cat.setFrame('ski_cat0001')
    }

    triggerAction(frame) {
        if (frame == 48) {
            this.shell.client.stampEarned(11)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
