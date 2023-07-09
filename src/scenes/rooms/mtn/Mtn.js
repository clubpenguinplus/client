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
        this.add.image(1203, 365, 'mtn', 'skiwires')

        // skichairback
        const skichairback = this.add.sprite(1293, 422, 'mtn', 'skichair0160')

        // skichairfront
        const skichairfront = this.add.sprite(1285, 414, 'mtn', 'skichair0001')

        // mountain
        this.add.image(767, 559, 'mtn', 'mountain')

        // skichairtopback
        const skichairtopback = this.add.sprite(470, 142, 'mtn', 'skichairtopback0001')

        // concrete
        this.add.image(948, 343, 'mtn', 'concrete')

        // mid_right_divider
        this.add.image(896, 648, 'mtn', 'mid_right_divider')

        // mid_left_divider
        this.add.image(625, 659, 'mtn', 'mid_left_divider')

        // left_divider
        this.add.image(278, 581, 'mtn', 'left_divider')

        // right_divider
        this.add.image(1100, 626, 'mtn', 'right_divider')

        // backwire
        this.add.image(911, 101, 'mtn', 'backwire')

        // frontwire
        this.add.image(995, 94, 'mtn', 'frontwire')

        // liftwheel
        this.add.image(661, 148, 'mtn', 'liftwheel')

        // tubetop
        this.add.image(543, 217, 'mtn', 'tubetop')

        // tubestuckleft
        this.add.image(403, 268, 'mtn', 'tubestuckleft')

        // tubeundercat
        this.add.image(510, 266, 'mtn', 'tubeundercat')

        // bench
        this.add.image(549, 306, 'mtn', 'bench')

        // tubestuckleftest
        this.add.image(352, 370, 'mtn', 'tubestuckleftest')

        // blue_circles
        const blue_circles = this.add.image(496.42198696339847, 606.5279768238196, 'mtn', 'blue_circles')
        blue_circles.setOrigin(0.6157998551488718, 0.7232286364315613)

        // green_squares
        const green_squares = this.add.image(999.3680057940451, 659.5799855148872, 'mtn', 'green_squares')
        green_squares.setOrigin(0.44485721183386995, 0.6484613527549641)

        // green_circles
        const green_circles = this.add.image(1197.5780130366015, 572.2119797208421, 'mtn', 'green_circles')
        green_circles.setOrigin(0.40350012070927344, 0.7001478977881743)

        // skichairtopfront
        const skichairtopfront = this.add.sprite(505, 151, 'mtn', 'skichairtopfront0001')

        // hut_back
        const hut_back = this.add.image(1036.348023866409, 261.43616706486296, 'mtn', 'hut_back')
        hut_back.setOrigin(0.4816447096267666, 0.380785227472814)

        // hut
        const hut = this.add.image(1053.0045489274069, 328.63832935137054, 'mtn', 'hut')
        hut.setOrigin(0.3666826278154627, 0.8854610978379018)

        // ski_cat
        const ski_cat = this.add.sprite(479, 180, 'mtn', 'ski_cat0001')

        // skicatbottom
        const skicatbottom = this.add.image(1434, 898, 'mtn', 'skicatbottom')

        // lists
        const sort = [hut, hut_back, green_circles, green_squares, blue_circles]

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
