import RoomScene from '../RoomScene'

import {Animation, Button, MoveTo, SimpleButton, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Lighthouse extends RoomScene {
    constructor() {
        super('Lighthouse')

        /** @type {Phaser.GameObjects.Image} */
        this.instruments
        /** @type {Phaser.GameObjects.Sprite} */
        this.sign
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 510, 450),
            beacon: () => this.triggerRoom(411, 273, 717),
            drums: null,
        }

        this.music = 588

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('lighthouse-pack', 'client/media/rooms/lighthouse/lighthouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'lighthouse', 'bg')
        bg.setOrigin(0, 0)

        // railing
        const railing = this.add.image(717.702414598927, 643.22225871604, 'lighthouse', 'railing')
        railing.setOrigin(0.5445922646817206, 0.9989061217506493)

        // door
        const door = this.add.image(391, 287, 'lighthouse', 'door')
        door.setOrigin(0, 0)

        // speakers3
        const speakers3 = this.add.sprite(16, 871.5, 'lighthouse', 'speakers3_0001')

        // speakers1
        const speakers1 = this.add.sprite(122, 300.5, 'lighthouse', 'speakers1_0001')

        // speakers2
        const speakers2 = this.add.sprite(347.5, 334.5, 'lighthouse', 'speakers2_0001')

        // pole
        const pole = this.add.image(604, 275, 'lighthouse', 'pole')
        pole.setOrigin(0, 0)

        // speakers4
        const speakers4 = this.add.sprite(628, 304.5, 'lighthouse', 'speakers4_0001')

        // instruments
        const instruments = this.add.image(1068, 423, 'lighthouse', 'instruments')
        instruments.angle = -5
        instruments.setOrigin(0, 0)
        instruments.flipX = true

        // zone
        const zone = this.add.rectangle(1183, 565, 165, 235)
        zone.alpha = 0.5
        zone.isFilled = true
        zone.fillColor = 65280

        // sign
        const sign = this.add.sprite(234, -11, 'lighthouse', 'totop_0001')
        sign.setOrigin(0, 0)

        // totopZone
        const totopZone = this.add.rectangle(321, 54, 165, 235)
        totopZone.scaleX = 0.8414379726690489
        totopZone.scaleY = 0.3861454935584283
        totopZone.alpha = 0.5
        totopZone.isFilled = true
        totopZone.fillColor = 65280

        // piano
        const piano = this.add.image(418, 684, 'lighthouse', 'piano')

        // microphone
        const microphone = this.add.image(320, 611, 'lighthouse', 'microphone')

        // drums_0001
        this.add.image(-48, 416, 'lighthouse', 'drums_0001')

        // book
        const book = this.add.image(1421, 1024.2580729932183, 'lighthouse', 'book')
        book.setOrigin(0.5, 1.7196354173323332)

        // chair1
        this.add.image(757, 656, 'lighthouse', 'chair1')

        // chair_1
        this.add.image(942, 667, 'lighthouse', 'chair1')

        // chair_2
        this.add.image(972, 756, 'lighthouse', 'chair1')

        // chair3_bottom_2
        this.add.image(646, 843, 'lighthouse', 'chair3-bottom')

        // chair2_bottom
        this.add.image(720, 763, 'lighthouse', 'chair2-bottom')

        // chair2
        const chair2 = this.add.image(738, 764, 'lighthouse', 'chair2')

        // chair_3
        const chair_3 = this.add.image(661, 843, 'lighthouse', 'chair3')

        // chair2_bottom_1
        this.add.image(932, 851, 'lighthouse', 'chair2-bottom')

        // chair
        const chair = this.add.image(950, 852, 'lighthouse', 'chair2')

        // lists
        const sort = [railing, speakers4, speakers2, speakers1, speakers3, piano, microphone, chair_3, chair2, chair]

        // door (components)
        const doorButton = new Button(door)
        doorButton.spriteName = 'door'
        doorButton.activeFrame = false
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 482
        doorMoveTo.y = 496

        // speakers3 (components)
        const speakers3Animation = new Animation(speakers3)
        speakers3Animation.key = 'speakers3_'
        speakers3Animation.end = 10

        // speakers1 (components)
        const speakers1Animation = new Animation(speakers1)
        speakers1Animation.key = 'speakers1_'
        speakers1Animation.end = 10

        // speakers2 (components)
        const speakers2Animation = new Animation(speakers2)
        speakers2Animation.key = 'speakers2_'
        speakers2Animation.end = 10

        // speakers4 (components)
        const speakers4Animation = new Animation(speakers4)
        speakers4Animation.key = 'speakers4_'
        speakers4Animation.end = 10

        // zone (components)
        const zoneZone = new Zone(zone)
        zoneZone.hoverCallback = () => this.onInstrumentsOver()
        zoneZone.hoverOutCallback = () => this.onInstrumentsOut()
        zoneZone.callback = () => this.interface.loadExternal('Music')

        // sign (components)
        const signAnimation = new Animation(sign)
        signAnimation.key = 'totop_'
        signAnimation.end = 26
        signAnimation.repeat = 0
        signAnimation.autoPlay = false

        // totopZone (components)
        const totopZoneZone = new Zone(totopZone)
        totopZoneZone.hoverCallback = () => this.onToTopOver()
        totopZoneZone.callback = () => this.onToTopClick()

        // book (components)
        const bookButton = new Button(book)
        bookButton.spriteName = 'book'
        bookButton.callback = () => this.interface.loadExternal('Music')
        bookButton.activeFrame = false

        this.instruments = instruments
        this.sign = sign
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onInstrumentsOver() {
        this.instruments.setFrame('instruments-hover')
    }

    onInstrumentsOut() {
        this.instruments.setFrame('instruments')
    }

    onToTopOver() {
        this.sign.__Animation.play()
    }

    onToTopClick() {
        this.triggerRoom(411, 224, 700)
    }

    onDrumsClick() {
        this.drumkit.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
