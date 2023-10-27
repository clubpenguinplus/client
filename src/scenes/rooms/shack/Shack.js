import RoomScene from '@scenes/rooms/RoomScene'

import {Button, SimpleButton, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Shack extends RoomScene {
    constructor() {
        super('Shack')

        /** @type {Phaser.GameObjects.Sprite} */
        this.fireparticles_1
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireback_1
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireparticles
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireback
        /** @type {Phaser.GameObjects.Sprite} */
        this.mine
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forest: () => this.triggerRoom(809, 1200, 400),
            skate: () => this.triggerRoom(435, 277, 344),
            mine: () => this.triggerRoom(808, 760, 480),
            school: () => this.triggerRoom(122, 1320, 760),
            dojo: () => this.triggerRoom(321, 760, 700),
            volleyone: null,
            volleytwo: null
        }

        this.music = 580

        this.loadSfx = ['shack-SchoolDoorOpen', 'shack-SchoolDoorClose', 'shack-MineLightOn', 'shack-MineLightOff', 'mine-cart']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('shack-pack', 'client/media/rooms/shack/shack-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'shack', 'bg')

        // castle
        const castle = this.add.image(884.0079432436852, 247.24662960416003, 'shack', 'castle')
        castle.setOrigin(0.581584173186635, 0.2575485725043334)

        // fireparticles_1
        const fireparticles_1 = this.add.sprite(661, 203, 'shack', 'fireparticles0001')

        // firefront_1
        this.add.image(664, 258, 'shack', 'firefront')

        // fireback_1
        const fireback_1 = this.add.sprite(661, 196, 'shack', 'fireback0001')

        // entrance
        const entrance = this.add.image(519.1631840861114, 341.13773981487867, 'shack', 'entrance')
        entrance.setOrigin(0.5238962359255627, 0.2485593877997145)

        // door
        const door = this.add.image(622.2452312209512, 345.01081101061163, 'shack', 'door')
        door.setOrigin(0.4506949067918149, -0.007770328051593056)

        // railing
        const railing = this.add.image(760, 480, 'shack', 'railing')

        // rock
        const rock = this.add.image(1267.8036581923884, 355.80034366192353, 'shack', 'rock')
        rock.setOrigin(0.8340813540739398, 0.37062535798117036)

        // stairs
        const stairs = this.add.image(676.6761799250879, 720.5385749332366, 'shack', 'stairs')
        stairs.setOrigin(0.4451816973191368, 0.7505610155554548)

        // rockkkkk
        const rockkkkk = this.add.image(870.0503284008273, 632.4983122125749, 'shack', 'rockkkkk')
        rockkkkk.setOrigin(0.5724015318426495, 0.6588524085547655)

        // rockkkk
        const rockkkk = this.add.image(1087.006690105315, 623.0654269210754, 'shack', 'rockkkk')
        rockkkk.setOrigin(0.7151359803324442, 0.6490264863761203)

        // rockk
        const rockk = this.add.image(1409.2969375648806, 384.098999536422, 'shack', 'rockk')
        rockk.setOrigin(0.927169037871632, 0.4001031245171063)

        // rockkk
        const rockkk = this.add.image(991.1056896417372, 574.3288529149947, 'shack', 'rockkk')
        rockkk.setOrigin(0.6520432168695639, 0.5982592217864529)

        // table
        const table = this.add.image(980.1006568016544, 605.7718038866597, 'shack', 'table')
        table.setOrigin(0.6448030636852989, 0.6310122957152705)

        // thingy
        const thingy = this.add.image(245.9077516132786, 583.7617382064942, 'shack', 'thingy')
        thingy.setOrigin(0.1617814155350517, 0.6080851439650982)

        // treeandrock
        const treeandrock = this.add.image(1382.5704292389655, 972.0821827065562, 'shack', 'treeandrock')
        treeandrock.setOrigin(0.9095858087098457, 1.012585606985996)

        // chair
        const chair = this.add.image(918.7869024069079, 802.2902474595654, 'shack', 'chair')
        chair.setOrigin(0.6044650673729657, 0.8357190077703807)

        // arm
        const arm = this.add.image(931.3640827955738, 860.4597067571456, 'shack', 'arm')
        arm.setOrigin(0.6127395281549828, 0.8963121945386933)

        // arrow
        const arrow = this.add.image(1481.6157247997098, 413.9698029595037, 'shack', 'arrow')
        arrow.setOrigin(0.9747471873682302, 0.431218544749483)

        // fireparticles
        const fireparticles = this.add.sprite(427, 203, 'shack', 'fireparticles0001')

        // fireback
        const fireback = this.add.sprite(427, 196, 'shack', 'fireback0001')

        // firefront
        this.add.image(430, 258, 'shack', 'firefront')

        // mine
        const mine = this.add.sprite(1089, 153, 'shack', 'mine0001')

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1054.9273731547107, 443.1911824767119, 180, 140)
        rectangle_1.angle = 16
        rectangle_1.setOrigin(0.6229255187473137, 0.7161762061615676)

        // rectangle
        const rectangle = this.add.rectangle(860, 443, 180, 250)
        rectangle.setOrigin(0.6229255187473137, 0.7161762061615676)

        // lists
        const sort = [railing, arm, chair, treeandrock, thingy, table, rockkk, rockk, rockkkk, rockkkkk, stairs, rock, arrow, castle, entrance, door]

        // door (components)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.SchoolDoorOver()
        doorButton.hoverOutCallback = () => this.SchoolDoorOut()
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 626
        doorMoveTo.y = 575

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.hoverCallback = () => this.onMineOver()
        rectangle_1SimpleButton.hoverOutCallback = () => this.onMineOut()
        new MoveTo(rectangle_1)

        // rectangle (components)
        new SimpleButton(rectangle)
        new MoveTo(rectangle)

        this.fireparticles_1 = fireparticles_1
        this.fireback_1 = fireback_1
        this.fireparticles = fireparticles
        this.fireback = fireback
        this.mine = mine
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.fireback.play('shack-fireback')
        this.fireparticles.play('shack-fireparticles')
        this.fireback_1.play('shack-fireback')
        this.fireparticles_1.play('shack-fireparticles')
    }

    setClockTime() {
        var timeInHours = this.shell.getPSTHours()
        var timeInMinutes = this.shell.getPSTMinutes()
        let minuteDegrees = 0
        let hourDegrees = 0

        if (timeInHours > 12) {
            timeInHours -= 12
            hourDegrees = 30 * timeInHours + 0.5 * timeInMinutes
        } else {
            hourDegrees = 30 * timeInHours + 0.5 * timeInMinutes
        }

        minuteDegrees = 6 * timeInMinutes

        this.minutehand.rotation = Phaser.Math.DegToRad(minuteDegrees)
        this.hourhand.rotation = Phaser.Math.DegToRad(hourDegrees)

        let timeout = 60 - this.shell.getPSTSeconds()
        this.clockTimeTO = setTimeout(() => this.setClockTime(), timeout * 1000)
    }

    SchoolDoorOver() {
        this.shell.musicController.addSfx('shack-SchoolDoorOpen')
    }

    SchoolDoorOut() {
        this.shell.musicController.addSfx('shack-SchoolDoorClose')
    }

    onMineOver() {
        this.shell.musicController.addSfx('mine-cart')
        if (this.mine.anims.isPlaying && this.mine.anims.inReverse) {
            this.mine.anims.reverse()
        } else {
            this.mine.anims.play('shack-mine')
        }
    }

    onMineOut() {
        if (this.mine.anims.isPlaying && !this.mine.anims.inReverse) {
            this.mine.anims.reverse()
        } else {
            this.mine.anims.playReverse('shack-mine')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
