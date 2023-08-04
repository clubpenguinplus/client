import RoomScene from '../RoomScene'

import {Animation, Button, MoveTo, SimpleButton, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Lake extends RoomScene {
    constructor() {
        super('Lake')

        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfalltwo
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfallone
        /** @type {Phaser.GameObjects.Sprite} */
        this.door
        /** @type {Phaser.GameObjects.Sprite} */
        this.rockanimone
        /** @type {Phaser.GameObjects.Sprite} */
        this.rockanimtwo
        /** @type {Phaser.GameObjects.Sprite} */
        this.rockanimthree
        /** @type {Phaser.GameObjects.Sprite} */
        this.rockanimfour
        /** @type {Phaser.GameObjects.Sprite} */
        this.squigglyone
        /** @type {Phaser.GameObjects.Sprite} */
        this.squigglytwo
        /** @type {Phaser.GameObjects.Sprite} */
        this.note
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            cavemine: () => this.triggerRoom(813, 874, 525),
            forest: () => this.triggerRoom(809, 332, 674),
            underwater: () => {
                if (this.hasMossKey()) this.triggerRoom(815, 504, 508)
            }
        }
        this.music = '666'
        this.loadSfx = ['lake-door']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('lake-pack', 'client/media/rooms/lake/lake-pack.json')
    }

    /** @returns {void} */
    _create() {
        // lakebg
        this.add.image(760, 480, 'lake', 'lakebg')

        // waterfalltwo
        const waterfalltwo = this.add.sprite(1077, 412, 'lake', 'waterfalltwo0001')

        // waterfallone
        const waterfallone = this.add.sprite(725, 410, 'lake', 'waterfallone0001')

        // walkrocks
        this.add.image(760, 690, 'lake', 'walkrocks')

        // door
        const door = this.add.sprite(1399.3474591632723, 639.6482953191972, 'lake', 'door0011')
        door.setOrigin(0.3866359118495934, 0.8603358516209352)

        // walkpath
        this.add.image(811, 701, 'lake', 'walkpath')

        // rockanimone
        const rockanimone = this.add.sprite(691, 134, 'lake', 'rockanimone0001')

        // rockanimtwo
        const rockanimtwo = this.add.sprite(747, 130, 'lake', 'rockanimtwo0001')

        // rockanimthree
        const rockanimthree = this.add.sprite(1060, 142, 'lake', 'rockanimthree0001')

        // rockanimfour
        const rockanimfour = this.add.sprite(1117, 145, 'lake', 'rockanimfour0001')

        // overstairs
        this.add.image(686, 287, 'lake', 'overstairs')

        // doorholdertwo
        this.add.image(1479, 593, 'lake', 'doorholdertwo')

        // rightgold
        this.add.image(1249, 439, 'lake', 'rightgold')

        // doorholder
        const doorholder = this.add.image(1404, 311, 'lake', 'doorholder')

        // rockbox
        this.add.image(756, 409, 'lake', 'rockbox')

        // upperrock
        const upperrock = this.add.image(604, 306, 'lake', 'upperrock')

        // midrocks
        const midrocks = this.add.image(578, 368, 'lake', 'midrocks')

        // lowerrock
        const lowerrock = this.add.image(522, 468, 'lake', 'lowerrock')

        // overwater
        this.add.image(753, 423, 'lake', 'overwater')

        // randomcoins
        this.add.image(331, 500, 'lake', 'randomcoins')

        // moregold
        this.add.image(426, 784, 'lake', 'moregold')

        // squigglyone
        const squigglyone = this.add.sprite(720, 154, 'lake', 'squigglyone0001')
        squigglyone.scaleX = 1.5
        squigglyone.scaleY = 1.5
        squigglyone.flipX = true

        // squigglytwo
        const squigglytwo = this.add.sprite(1073, 167, 'lake', 'squigglytwo0001')
        squigglytwo.scaleX = 1.5
        squigglytwo.scaleY = 1.5

        // note
        const note = this.add.sprite(1363, 508, 'lake', 'note')

        // leftrock
        this.add.image(38, 454, 'lake', 'leftrock')

        // leftgold
        this.add.image(79, 642, 'lake', 'leftgold')

        // leftspiky
        this.add.image(45, 633, 'lake', 'leftspiky')

        // astrobarrierback
        const astrobarrierback = this.add.image(209.1204378170316, 725.6382449408443, 'lake', 'astrobarrierback')
        astrobarrierback.setOrigin(0.4547897162903879, 0.3911987251043284)

        // waterblanket
        const waterblanket = this.add.image(948.7233611540541, 923.8134672837704, 'lake', 'waterblanket')
        waterblanket.setOrigin(0.49802203401742323, 1.1765205872965643)

        // astrobarrier
        const astrobarrier = this.add.image(188.44822692871094, 835.0333561418055, 'lake', 'astrobarrier')
        astrobarrier.setOrigin(0.45903027358364146, 0.734952947383642)

        // water
        const water = this.add.container(0, 0)
        water.visible = false

        // water_0001
        const water_0001 = this.add.image(707, 492, 'lake', 'water_0001')
        water.add(water_0001)

        // water_001
        const water_001 = this.add.image(839, 500, 'lake', 'water_001')
        water.add(water_001)

        // water_002
        const water_002 = this.add.image(814, 522, 'lake', 'water_002')
        water.add(water_002)

        // water_003
        const water_003 = this.add.image(805, 546, 'lake', 'water_003')
        water.add(water_003)

        // water_004
        const water_004 = this.add.image(837, 563, 'lake', 'water_004')
        water.add(water_004)

        // water_005
        const water_005 = this.add.image(886, 579, 'lake', 'water_005')
        water.add(water_005)

        // water_006
        const water_006 = this.add.image(921, 597, 'lake', 'water_006')
        water.add(water_006)

        // water_007
        const water_007 = this.add.image(967, 613, 'lake', 'water_007')
        water.add(water_007)

        // water_008
        const water_008 = this.add.image(1017, 630, 'lake', 'water_008')
        water.add(water_008)

        // water_009
        const water_009 = this.add.image(1033, 647, 'lake', 'water_009')
        water.add(water_009)

        // water_010
        const water_010 = this.add.image(1062, 665, 'lake', 'water_010')
        water.add(water_010)

        // water_011
        const water_011 = this.add.image(1054, 686, 'lake', 'water_011')
        water.add(water_011)

        // water_012
        const water_012 = this.add.image(1032, 708, 'lake', 'water_012')
        water.add(water_012)

        // water_013
        const water_013 = this.add.image(1020, 728, 'lake', 'water_013')
        water.add(water_013)

        // water_014
        const water_014 = this.add.image(1027, 746, 'lake', 'water_014')
        water.add(water_014)

        // water_015
        const water_015 = this.add.image(1069, 765, 'lake', 'water_015')
        water.add(water_015)

        // water_016
        const water_016 = this.add.image(1086, 784, 'lake', 'water_016')
        water.add(water_016)

        // water_017
        const water_017 = this.add.image(1109, 802, 'lake', 'water_017')
        water.add(water_017)

        // water_018
        const water_018 = this.add.image(1122, 819, 'lake', 'water_018')
        water.add(water_018)

        // water_019
        const water_019 = this.add.image(1188, 826, 'lake', 'water_019')
        water.add(water_019)

        // water_020
        const water_020 = this.add.image(1291, 837, 'lake', 'water_020')
        water.add(water_020)

        // barrel
        this.add.image(286, 251, 'lake', 'barrel')

        // goldrope
        this.add.image(328, 321, 'lake', 'goldrope')

        // topleftrock
        this.add.image(229, 297, 'lake', 'topleftrock')

        // rightgolrock
        this.add.image(325, 357, 'lake', 'rightgolrock')

        // lakefg
        const lakefg = this.add.image(-22, 982, 'lake', 'lakefg')
        lakefg.setOrigin(0, 1)

        // lists
        const sort = [doorholder, astrobarrier, astrobarrierback, midrocks, lowerrock, upperrock, water_0001, lakefg, water_001, water_020, water_019, water_018, water_017, water_016, water_015, water_014, water_013, water_012, water_011, water_010, water_009, water_008, water_007, water_006, water_005, water_004, water_003, water_002, waterblanket]

        // door (components)
        const doorSimpleButton = new SimpleButton(door)
        doorSimpleButton.callback = () => this.onDoorClick()
        new MoveTo(door)

        // note (components)
        const noteButton = new Button(note)
        noteButton.callback = () => this.onNoteClick()

        this.waterfalltwo = waterfalltwo
        this.waterfallone = waterfallone
        this.door = door
        this.rockanimone = rockanimone
        this.rockanimtwo = rockanimtwo
        this.rockanimthree = rockanimthree
        this.rockanimfour = rockanimfour
        this.squigglyone = squigglyone
        this.squigglytwo = squigglytwo
        this.note = note
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.squigglyone.play('lake-squigglyone')
        this.squigglytwo.play('lake-squigglytwo')
        this.rockanimone.play('lake-rockanimone')
        this.rockanimtwo.play('lake-rockanimtwo')
        this.rockanimthree.play('lake-rockanimthree')
        this.rockanimfour.play('lake-rockanimfour')
        this.waterfallone.play('lake-waterfallone')
        this.waterfalltwo.play('lake-waterfalltwo')
        if (this.hasMossKey()) {
            this.note.visible = false
        }
    }

    hasMossKey() {
        return this.shell.client.inventory.flag.includes(7016)
    }

    onDoorClick() {
        if (this.hasMossKey()) {
            this.door.play('lake-door')
            this.door.setFrame('door0027')
            this.shell.musicController.addSfx('lake-door')
        }
        return
    }

    onDoorOut() {
        if (this.hasMossKey()) {
            this.door.stop()
            this.door.setFrame('door0011')
            this.shell.musicController.stopSfx('lake-door')
        }
    }

    onNoteClick() {
        if (!this.hasMossKey()) {
            this.interface.loadExternal('Lakenote')
        }
        return
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
