import RoomScene from '@scenes/rooms/RoomScene'

import {Animation, MoveTo, SimpleButton, ShowHint, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Beach extends RoomScene {
    constructor() {
        super('Beach')

        /** @type {Phaser.GameObjects.Sprite} */
        this.bucket
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 400, 320),
            village: () => this.triggerRoom(200, 1300, 760),
            light: () => this.triggerRoom(410, 456, 492),
            migrator: () => this.triggerRoom(420, 900, 600),
        }

        this.music = 582
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('beach-pack', 'client/media/rooms/beach/beach-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'beach', 'bg')
        bg.setOrigin(0, 0)

        // island
        const island = this.add.image(13, -25, 'beach', 'island')
        island.setOrigin(0, 0)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(952, 508, 128, 128)
        rectangle_1.scaleX = 0.3153064952199348
        rectangle_1.scaleY = 0.49736770406718167
        rectangle_1.isFilled = true
        rectangle_1.fillColor = 12083009

        // fg
        const fg = this.add.image(236, 637, 'beach', 'fg')

        // fences
        const fences = this.add.image(151, 509, 'beach', 'fences')

        // rock2
        this.add.image(1380, 430, 'beach', 'rock2')

        // rock1
        this.add.image(1339, 601, 'beach', 'rock1')

        // chair
        const chair = this.add.image(831, 529, 'beach', 'chair')

        // chair2
        const chair2 = this.add.image(993, 450, 'beach', 'chair2')

        // chair_fg
        const chair_fg = this.add.image(935.9337137988933, 535.0100528101502, 'beach', 'chair_fg')
        chair_fg.setOrigin(0.5538864903957992, 0.8501005281015023)

        // bucket
        const bucket = this.add.sprite(494, 343, 'beach', 'bucket/bucket0001')

        // igloo
        const igloo = this.add.image(776.3707931098814, 689.5405977240229, 'beach', 'igloo')
        igloo.setOrigin(0.5240153467575903, 0.6253274010001844)

        // door
        const door = this.add.image(385, 296, 'beach', 'door')

        // railing
        const railing = this.add.image(376, 393, 'beach', 'railing')

        // rectangle_2
        const rectangle_2 = this.add.rectangle(998, 603, 128, 128)
        rectangle_2.scaleX = 0.6523506886562531
        rectangle_2.scaleY = 0.628880537687591
        rectangle_2.fillColor = 61021
        rectangle_2.fillAlpha = 100

        // lists
        const sort = [igloo, chair, chair_fg, chair2, fg, fences, railing]

        // door (components)
        const doorButton = new Button(door)
        doorButton.spriteName = 'door'
        doorButton.activeFrame = false
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 408
        doorMoveTo.y = 376

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2)
        rectangle_2SimpleButton.hoverCallback = () => this.onBucketOver()

        this.bucket = bucket
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onBucketOver() {
        let frame = this.bucket.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0346':
                this.bucket.play('beach-bucket1')
                break
            case '0070':
                this.bucket.play('beach-bucket2')
                break
            case '0137':
                this.bucket.play('beach-bucket3')
                break
            case '0210':
                this.bucket.play('beach-bucket4')
                break
            case '0269':
                this.bucket.play('beach-bucket5')
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
