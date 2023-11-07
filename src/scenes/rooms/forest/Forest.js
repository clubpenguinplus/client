import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Forest extends RoomScene {
    constructor() {
        super('Forest')

        /** @type {Phaser.GameObjects.Sprite} */
        this.boulder
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1240, 660),
            shack: () => this.triggerRoom(807, 500, 800),
            cove: () => this.triggerRoom(810, 520, 416),
            lake: () => this.triggerRoom(814, 480, 300)
        }
        this.music = 586

        this.loadSfx = ['forest-boulderopen', 'forest-boulderclose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('forest-pack', 'client/media/rooms/forest/forest-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'forest', 'bg')
        bg.setOrigin(0, 0)

        // bush3
        this.add.image(1514, 444, 'forest', 'bush3')

        // trees5
        this.add.image(1506, 331, 'forest', 'trees5')

        // trees1
        const trees1 = this.add.image(47, 593, 'forest', 'trees1')

        // bush
        const bush = this.add.image(208, 588, 'forest', 'bush')

        // wave4_0001
        const wave4_0001 = this.add.sprite(841, 299, 'forest', 'wave4_0001')

        // wave3_0001
        const wave3_0001 = this.add.sprite(835, 245, 'forest', 'wave3_0001')

        // wave1_0001
        const wave1_0001 = this.add.sprite(836, 238, 'forest', 'wave1_0001')

        // boulder
        const boulder = this.add.sprite(80, 688, 'forest', 'boulder_0001')

        // sign
        this.add.image(1494, 691, 'forest', 'sign')

        // stairs
        const stairs = this.add.image(1495.797799326391, 797.8005501684023, 'forest', 'stairs')
        stairs.setOrigin(0.6897705507697157, 0.4530375509481828)

        // rock
        const rock = this.add.image(652, 800, 'forest', 'rock')

        // fg1
        const fg1 = this.add.image(24, 998, 'forest', 'fg1')
        fg1.setOrigin(0.1011899210002752, 0.9226389186455517)

        // caveshadow
        this.add.image(1094, 266, 'forest', 'caveshadow')

        // cave
        this.add.image(1091, 228, 'forest', 'cave')

        // trees6
        this.add.image(613, 167, 'forest', 'trees6')

        // trees4
        this.add.image(733, 258, 'forest', 'trees4')

        // trees2
        this.add.image(727, 363, 'forest', 'trees2')

        // trees3
        this.add.image(383, 141, 'forest', 'trees3')

        // trunk
        this.add.image(484, 324, 'forest', 'trunk')

        // bush2
        const bush2 = this.add.image(785, 562, 'forest', 'bush2')

        // waves2_0001
        const waves2_0001 = this.add.sprite(822, 168, 'forest', 'waves2_0001')

        // rectangle_1
        const rectangle_1 = this.add.rectangle(170, 690, 128, 128)
        rectangle_1.scaleX = 1.508403064644881
        rectangle_1.scaleY = 1.4406462297458782
        rectangle_1.fillColor = 55330
        rectangle_1.fillAlpha = 100

        // lists
        const sort = [fg1, rock, bush2, bush, trees1, stairs, rectangle_1, boulder]

        // wave4_0001 (components)
        const wave4_0001Animation = new Animation(wave4_0001)
        wave4_0001Animation.key = 'wave4_'
        wave4_0001Animation.end = 16

        // wave3_0001 (components)
        const wave3_0001Animation = new Animation(wave3_0001)
        wave3_0001Animation.key = 'wave3_'
        wave3_0001Animation.end = 30

        // wave1_0001 (components)
        const wave1_0001Animation = new Animation(wave1_0001)
        wave1_0001Animation.key = 'wave1_'
        wave1_0001Animation.end = 6

        // waves2_0001 (components)
        const waves2_0001Animation = new Animation(waves2_0001)
        waves2_0001Animation.key = 'waves_'
        waves2_0001Animation.end = 6

        // rectangle_1 (components)
        const rectangle_1Zone = new Zone(rectangle_1)
        rectangle_1Zone.hoverCallback = () => {
            this.boulder.play('forest-boulder')
            this.shell.musicController.addSfx('forest-boulderopen')
        }
        rectangle_1Zone.hoverOutCallback = () => {
            if (this.boulder.anims.isPlaying) {
                this.boulder.anims.reverse()
            } else {
                this.boulder.playReverse('forest-boulder')
            }
            this.shell.musicController.addSfx('forest-boulderclose')
        }
        rectangle_1Zone.callback = () => this.shell.client.penguin.move(168, 700)

        this.boulder = boulder
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
