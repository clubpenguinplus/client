import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {
    constructor() {
        super('Mtn')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            village: () => this.triggerRoom(200, 760, 480),
            unknown: () => this.triggerRoom(200, 760, 480)
        }

        this.music = 590
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('mtn-pack', 'client/media/rooms/mtn/mtn-pack.json')
    }

    /** @returns {void} */
    _create() {
        // mtnbg
        this.add.image(740, 480, 'mtn', 'mtnbg')

        // skiwires
        const skiwires = this.add.image(1203, 365, 'mtn', 'skiwires')
        skiwires.tintTopLeft = 11579069
        skiwires.tintTopRight = 11579069
        skiwires.tintBottomLeft = 11579069
        skiwires.tintBottomRight = 11579069

        // skichairback
        const skichairback = this.add.sprite(1293, 422, 'mtn', 'skichair0160')
        skichairback.tintTopLeft = 11579069
        skichairback.tintTopRight = 11579069
        skichairback.tintBottomLeft = 11579069
        skichairback.tintBottomRight = 11579069

        // skichairfront
        const skichairfront = this.add.sprite(1285, 414, 'mtn', 'skichair0001')
        skichairfront.tintTopLeft = 11579069
        skichairfront.tintTopRight = 11579069
        skichairfront.tintBottomLeft = 11579069
        skichairfront.tintBottomRight = 11579069

        // mountain
        this.add.image(767, 559, 'mtn', 'mountain')

        // skichairtopback
        const skichairtopback = this.add.sprite(470, 142, 'mtn', 'skichairtopback0001')
        skichairtopback.tintTopLeft = 11579069
        skichairtopback.tintTopRight = 11579069
        skichairtopback.tintBottomLeft = 11579069
        skichairtopback.tintBottomRight = 11579069

        // concrete
        const concrete = this.add.image(948, 343, 'mtn', 'concrete')
        concrete.tintTopLeft = 11579069
        concrete.tintTopRight = 11579069
        concrete.tintBottomLeft = 11579069
        concrete.tintBottomRight = 11579069

        // mid_right_divider
        const mid_right_divider = this.add.image(896, 648, 'mtn', 'mid_right_divider')
        mid_right_divider.tintTopLeft = 11579069
        mid_right_divider.tintTopRight = 11579069
        mid_right_divider.tintBottomLeft = 11579069
        mid_right_divider.tintBottomRight = 11579069

        // mid_left_divider
        const mid_left_divider = this.add.image(625, 659, 'mtn', 'mid_left_divider')
        mid_left_divider.tintTopLeft = 11579069
        mid_left_divider.tintTopRight = 11579069
        mid_left_divider.tintBottomLeft = 11579069
        mid_left_divider.tintBottomRight = 11579069

        // left_divider
        const left_divider = this.add.image(278, 581, 'mtn', 'left_divider')
        left_divider.tintTopLeft = 11579069
        left_divider.tintTopRight = 11579069
        left_divider.tintBottomLeft = 11579069
        left_divider.tintBottomRight = 11579069

        // right_divider
        const right_divider = this.add.image(1100, 626, 'mtn', 'right_divider')
        right_divider.tintTopLeft = 11579069
        right_divider.tintTopRight = 11579069
        right_divider.tintBottomLeft = 11579069
        right_divider.tintBottomRight = 11579069

        // backwire
        const backwire = this.add.image(911, 101, 'mtn', 'backwire')
        backwire.tintTopLeft = 11579069
        backwire.tintTopRight = 11579069
        backwire.tintBottomLeft = 11579069
        backwire.tintBottomRight = 11579069

        // frontwire
        const frontwire = this.add.image(995, 94, 'mtn', 'frontwire')
        frontwire.tintTopLeft = 11579069
        frontwire.tintTopRight = 11579069
        frontwire.tintBottomLeft = 11579069
        frontwire.tintBottomRight = 11579069

        // liftwheel
        const liftwheel = this.add.image(661, 148, 'mtn', 'liftwheel')
        liftwheel.tintTopLeft = 11579069
        liftwheel.tintTopRight = 11579069
        liftwheel.tintBottomLeft = 11579069
        liftwheel.tintBottomRight = 11579069

        // tubetop
        const tubetop = this.add.image(543, 217, 'mtn', 'tubetop')
        tubetop.tintTopLeft = 11579069
        tubetop.tintTopRight = 11579069
        tubetop.tintBottomLeft = 11579069
        tubetop.tintBottomRight = 11579069

        // tubestuckleft
        const tubestuckleft = this.add.image(403, 268, 'mtn', 'tubestuckleft')
        tubestuckleft.tintTopLeft = 11579069
        tubestuckleft.tintTopRight = 11579069
        tubestuckleft.tintBottomLeft = 11579069
        tubestuckleft.tintBottomRight = 11579069

        // tubeundercat
        const tubeundercat = this.add.image(510, 266, 'mtn', 'tubeundercat')
        tubeundercat.tintTopLeft = 11579069
        tubeundercat.tintTopRight = 11579069
        tubeundercat.tintBottomLeft = 11579069
        tubeundercat.tintBottomRight = 11579069

        // bench
        const bench = this.add.image(549, 306, 'mtn', 'bench')
        bench.tintTopLeft = 11579069
        bench.tintTopRight = 11579069
        bench.tintBottomLeft = 11579069
        bench.tintBottomRight = 11579069

        // tubestuckleftest
        const tubestuckleftest = this.add.image(352, 370, 'mtn', 'tubestuckleftest')
        tubestuckleftest.tintTopLeft = 11579069
        tubestuckleftest.tintTopRight = 11579069
        tubestuckleftest.tintBottomLeft = 11579069
        tubestuckleftest.tintBottomRight = 11579069

        // blue_circles
        const blue_circles = this.add.image(496.42198696339847, 606.5279768238196, 'mtn', 'blue_circles')
        blue_circles.setOrigin(0.6157998551488718, 0.7232286364315613)
        blue_circles.tintTopLeft = 11579069
        blue_circles.tintTopRight = 11579069
        blue_circles.tintBottomLeft = 11579069
        blue_circles.tintBottomRight = 11579069

        // green_squares
        const green_squares = this.add.image(999.3680057940451, 659.5799855148872, 'mtn', 'green_squares')
        green_squares.setOrigin(0.44485721183386995, 0.6484613527549641)
        green_squares.tintTopLeft = 11579069
        green_squares.tintTopRight = 11579069
        green_squares.tintBottomLeft = 11579069
        green_squares.tintBottomRight = 11579069

        // green_circles
        const green_circles = this.add.image(1197.5780130366015, 572.2119797208421, 'mtn', 'green_circles')
        green_circles.setOrigin(0.40350012070927344, 0.7001478977881743)
        green_circles.tintTopLeft = 11579069
        green_circles.tintTopRight = 11579069
        green_circles.tintBottomLeft = 11579069
        green_circles.tintBottomRight = 11579069

        // skichairtopfront
        const skichairtopfront = this.add.sprite(505, 151, 'mtn', 'skichairtopfront0001')
        skichairtopfront.tintTopLeft = 11579069
        skichairtopfront.tintTopRight = 11579069
        skichairtopfront.tintBottomLeft = 11579069
        skichairtopfront.tintBottomRight = 11579069

        // hut_back
        const hut_back = this.add.image(1036.348023866409, 261.43616706486296, 'mtn', 'hut_back')
        hut_back.setOrigin(0.4816447096267666, 0.380785227472814)
        hut_back.tintTopLeft = 11579069
        hut_back.tintTopRight = 11579069
        hut_back.tintBottomLeft = 11579069
        hut_back.tintBottomRight = 11579069

        // hut
        const hut = this.add.image(1053.0045489274069, 328.63832935137054, 'mtn', 'hut')
        hut.setOrigin(0.3666826278154627, 0.8854610978379018)
        hut.tintTopLeft = 11579069
        hut.tintTopRight = 11579069
        hut.tintBottomLeft = 11579069
        hut.tintBottomRight = 11579069

        // ski_cat
        const ski_cat = this.add.sprite(479, 180, 'mtn', 'ski_cat0001')
        ski_cat.tintTopLeft = 11579069
        ski_cat.tintTopRight = 11579069
        ski_cat.tintBottomLeft = 11579069
        ski_cat.tintBottomRight = 11579069

        // skicatbottom
        const skicatbottom = this.add.image(1434, 898, 'mtn', 'skicatbottom')
        skicatbottom.tintTopLeft = 11579069
        skicatbottom.tintTopRight = 11579069
        skicatbottom.tintBottomLeft = 11579069
        skicatbottom.tintBottomRight = 11579069

        // scarecrow
        const scarecrow = this.add.image(696.4721693301371, 375.96835077597666, 'mtn', 'scarecrow')
        scarecrow.setOrigin(0.5603376864086358, 0.7341392143460644)

        // lists
        const sort = [hut, hut_back, green_circles, green_squares, blue_circles, scarecrow]

        // ski_cat (components)
        const ski_catSimpleButton = new SimpleButton(ski_cat)
        ski_catSimpleButton.hoverCallback = () => this.onSkiCatHover()
        ski_catSimpleButton.hoverOutCallback = () => this.onSkiCatOut()
        ski_catSimpleButton.callback = () => this.interface.loadExternal('Sled')

        // skicatbottom (components)
        const skicatbottomButton = new Button(skicatbottom)
        skicatbottomButton.callback = () => this.interface.loadExternal('Sled')

        this.skichairback = skichairback
        this.skichairfront = skichairfront
        this.skichairtopback = skichairtopback
        this.skichairtopfront = skichairtopfront
        this.ski_cat = ski_cat
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    skichairback
    /** @type {Phaser.GameObjects.Sprite} */
    skichairfront
    /** @type {Phaser.GameObjects.Sprite} */
    skichairtopback
    /** @type {Phaser.GameObjects.Sprite} */
    skichairtopfront
    /** @type {Phaser.GameObjects.Sprite} */
    ski_cat
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.skichairback.play('mtn-skichairback')
        this.skichairfront.play('mtn-skichairfront')
        this.skichairtopback.play('mtn-skichairtopback')
        this.skichairtopfront.play('mtn-skichairtopfront')
    }

    onSkiCatHover() {
        this.ski_cat.play('mtn-skicat')
    }

    onSkiCatOut() {
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

// You can write more code here
