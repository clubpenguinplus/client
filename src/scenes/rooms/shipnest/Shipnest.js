import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, LocalisedSprite, ShowHint, Button, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Shipnest extends RoomScene {
    constructor() {
        super('Shipnest')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            ship: () => this.triggerRoom(420, 900, 600),
        }
        this.music = '492'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('shipnest-pack', 'client/media/rooms/shipnest/shipnest-pack.json')
    }

    /** @returns {void} */
    _create() {
        // nestsky
        this.add.image(760, 268, 'shipnest', 'nestsky')

        // nesthold
        this.add.image(760, 650, 'shipnest', 'nesthold')

        // rope
        this.add.image(768, 698, 'shipnest', 'rope')

        // powder_en
        const powder_en = this.add.image(978, 400, 'shipnest', 'powder_en')

        // bolts
        this.add.image(749, 419, 'shipnest', 'bolts')

        // snowballs
        this.add.image(1110, 498, 'shipnest', 'snowballs')

        // cannonback
        const cannonback = this.add.sprite(277, 314, 'shipnest', 'cannonback0001')

        // leftsnowball
        this.add.image(375, 625, 'shipnest', 'leftsnowball')

        // frontnest
        const frontnest = this.add.image(762.7051818790857, 792.3350823480458, 'shipnest', 'frontnest')
        frontnest.setOrigin(0.5162977384186201, 0.9749512495034177)

        // jollyflag
        const jollyflag = this.add.sprite(606, 179, 'shipnest', 'jollyflag0001')

        // jolly
        const jolly = this.add.image(752.0739135742188, 527.0758697410583, 'shipnest', 'jolly')
        jolly.setOrigin(0.21087001853450807, 0.9642941486243463)

        // nestyarr
        const nestyarr = this.add.sprite(324, 813, 'shipnest', 'nestyarr0001')

        // lists
        const sort = [frontnest, jolly]

        // powder_en (components)
        new LocalisedSprite(powder_en)

        // cannonback (components)
        new SimpleButton(cannonback)

        // jollyflag (components)
        const jollyflagSimpleButton = new SimpleButton(jollyflag)
        jollyflagSimpleButton.hoverCallback = () => this.onJollyFlagOver()
        jollyflagSimpleButton.hoverOutCallback = () => this.onJollyFlagOut()

        this.cannonback = cannonback
        this.jollyflag = jollyflag
        this.nestyarr = nestyarr
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    cannonback
    /** @type {Phaser.GameObjects.Sprite} */
    jollyflag
    /** @type {Phaser.GameObjects.Sprite} */
    nestyarr
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.nestyarr.play('shipnest-yarr')
    }

    onJollyFlagOver() {
        this.jollyflag.play('shipnest-jollyflag')
    }

    onJollyFlagOut() {
        this.jollyflag.stop()
        this.jollyflag.setFrame('jollyflag0001')
    }

    onCannonOver() {
        this.cannonback.play('shipnest-fuse').once('animationcomplete', () => {
            this.cannonback.play('shipnest-cannonback')
            this.cannonback.play('shipnest-cannonfire')
        })
    }

    onCannonOut() {
        this.cannonback.stop()
        this.cannonback.setFrame('cannonback0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
