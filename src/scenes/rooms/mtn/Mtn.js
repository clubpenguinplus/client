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
        const mtnbg = this.add.image(760, 480, 'mtn', 'mtnbg')
        mtnbg.tintTopLeft = 4206962
        mtnbg.tintTopRight = 4206962

        // skichairback
        const skichairback = this.add.sprite(1293, 422, 'mtn', 'skichair0160')
        skichairback.tintTopLeft = 10396607
        skichairback.tintTopRight = 10396607
        skichairback.tintBottomLeft = 10396607
        skichairback.tintBottomRight = 10396607

        // skichairtopback
        const skichairtopback = this.add.sprite(470, 142, 'mtn', 'skichairtopback0001')
        skichairtopback.tintTopLeft = 10396607
        skichairtopback.tintTopRight = 10396607
        skichairtopback.tintBottomLeft = 10396607
        skichairtopback.tintBottomRight = 10396607

        // skichairfront
        const skichairfront = this.add.sprite(1285, 414, 'mtn', 'skichair0001')
        skichairfront.tintTopLeft = 10396607
        skichairfront.tintTopRight = 10396607
        skichairfront.tintBottomLeft = 10396607
        skichairfront.tintBottomRight = 10396607

        // mountain
        const mountain = this.add.image(760, 480, 'mtn', 'mountain')
        mountain.tintTopLeft = 10396607
        mountain.tintTopRight = 10396607
        mountain.tintBottomLeft = 10396607
        mountain.tintBottomRight = 10396607

        // concrete
        const concrete = this.add.image(952, 337, 'mtn', 'concrete')
        concrete.tintTopLeft = 10396607
        concrete.tintTopRight = 10396607
        concrete.tintBottomLeft = 10396607
        concrete.tintBottomRight = 10396607

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
        const liftwheel = this.add.image(666, 143, 'mtn', 'liftwheel')
        liftwheel.tintTopLeft = 10396607
        liftwheel.tintTopRight = 10396607
        liftwheel.tintBottomLeft = 10396607
        liftwheel.tintBottomRight = 10396607

        // blue_circles
        const blue_circles = this.add.image(478, 586, 'mtn', 'blue_circles')
        blue_circles.tintTopLeft = 10396607
        blue_circles.tintTopRight = 10396607
        blue_circles.tintBottomLeft = 10396607
        blue_circles.tintBottomRight = 10396607

        // green_circles
        const green_circles = this.add.image(1210, 550, 'mtn', 'green_circles')
        green_circles.tintTopLeft = 10396607
        green_circles.tintTopRight = 10396607
        green_circles.tintBottomLeft = 10396607
        green_circles.tintBottomRight = 10396607

        // skichairtopfront
        const skichairtopfront = this.add.sprite(505, 151, 'mtn', 'skichairtopfront0001')
        skichairtopfront.tintTopLeft = 10396607
        skichairtopfront.tintTopRight = 10396607
        skichairtopfront.tintBottomLeft = 10396607
        skichairtopfront.tintBottomRight = 10396607

        // hut_back
        const hut_back = this.add.image(1044, 262, 'mtn', 'hut_back')
        hut_back.tintTopLeft = 10396607
        hut_back.tintTopRight = 10396607
        hut_back.tintBottomLeft = 10396607
        hut_back.tintBottomRight = 10396607

        // hut
        const hut = this.add.image(1073.817548829116, 321.96074095961126, 'mtn', 'hut')
        hut.setOrigin(0.4186582388937918, 0.8898691418112477)
        hut.tintTopLeft = 10396607
        hut.tintTopRight = 10396607
        hut.tintBottomLeft = 10396607
        hut.tintBottomRight = 10396607

        // green_squares
        const green_squares = this.add.image(1019, 662, 'mtn', 'green_squares')
        green_squares.tintTopLeft = 10396607
        green_squares.tintTopRight = 10396607
        green_squares.tintBottomLeft = 10396607
        green_squares.tintBottomRight = 10396607

        // tubestuckleftest
        const tubestuckleftest = this.add.image(355, 358, 'mtn', 'tubestuckleftest')
        tubestuckleftest.tintTopLeft = 10396607
        tubestuckleftest.tintTopRight = 10396607
        tubestuckleftest.tintBottomLeft = 10396607
        tubestuckleftest.tintBottomRight = 10396607

        // tubetop
        const tubetop = this.add.image(551, 206, 'mtn', 'tubetop')
        tubetop.tintTopLeft = 10396607
        tubetop.tintTopRight = 10396607
        tubetop.tintBottomLeft = 10396607
        tubetop.tintBottomRight = 10396607

        // tubeundercat
        const tubeundercat = this.add.image(515, 255, 'mtn', 'tubeundercat')
        tubeundercat.tintTopLeft = 10396607
        tubeundercat.tintTopRight = 10396607
        tubeundercat.tintBottomLeft = 10396607
        tubeundercat.tintBottomRight = 10396607

        // bench
        const bench = this.add.image(559, 299, 'mtn', 'bench')
        bench.tintTopLeft = 10396607
        bench.tintTopRight = 10396607
        bench.tintBottomLeft = 10396607
        bench.tintBottomRight = 10396607

        // ski_cat
        const ski_cat = this.add.sprite(486, 172, 'mtn', 'ski_cat0001')
        ski_cat.tintTopLeft = 10396607
        ski_cat.tintTopRight = 10396607
        ski_cat.tintBottomLeft = 10396607
        ski_cat.tintBottomRight = 10396607

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
