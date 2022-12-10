import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Skate extends RoomScene {
    constructor() {
        super('Skate')

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            shack: () => this.triggerRoom(807, 1320, 520),
            catalog: () => console.log('triggered catalog'),
            halfpipe_1l: () => console.log('triggered halfpipe_1l'),
            halfpipe_1r: () => console.log('triggered halfpipe_1r'),
            halfpipe_2l: () => console.log('triggered halfpipe_2l'),
            halfpipe_2r: () => console.log('triggered halfpipe_2r'),
            halfpipe_3l: () => console.log('triggered halfpipe_3l'),
            halfpipe_3r: () => console.log('triggered halfpipe_3r'),
            halfpipe_4l: () => console.log('triggered halfpipe_4l'),
            halfpipe_4r: () => console.log('triggered halfpipe_4r'),
            lowerskate: () => console.log('triggered lowerskate'),
            railbench: () => console.log('triggered railbench'),
            railskate: () => console.log('triggered railskate'),
            sample: () => console.log('triggered sample'),
        }
        this.music = 754
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('skate-pack', 'client/media/rooms/skate/skate-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(-144, -39, 'skate', 'bg')
        bg.setOrigin(0, 0)

        // bench
        this.add.image(1204, 207, 'skate', 'bench')

        // railing2
        const railing2 = this.add.image(1206.5251210883862, 350.9968016178712, 'skate', 'railing2')
        railing2.setOrigin(0.18418614466094257, 0.3356914401276514)

        // railing3
        const railing3 = this.add.image(1240.6163209413069, 462.9056017649504, 'skate', 'railing3')
        railing3.setOrigin(0.21524087109163548, 0.3127283713802269)

        // pillar
        const pillar = this.add.image(5, 429, 'skate', 'pillar')

        // pillar2
        this.add.image(196, 209, 'skate', 'pillar2')

        // puffle
        const puffle = this.add.image(27, 230, 'skate', 'puffle')
        puffle.scaleX = 0.8
        puffle.scaleY = 0.8

        // puffle_1
        const puffle_1 = this.add.image(180, 149, 'skate', 'puffle')
        puffle_1.scaleX = 0.5
        puffle_1.scaleY = 0.5

        // skate
        const skate = this.add.image(324, 178, 'skate', 'skate')

        // fg2
        const fg2 = this.add.image(646.6369855269844, 699.2437501579271, 'skate', 'fg2')
        fg2.setOrigin(0.49747597996282805, 0.16730633525779298)

        // fg1
        this.add.image(770, 826, 'skate', 'fg1')

        // catalog
        this.add.image(1420, 885, 'skate', 'catalog')

        // bar
        const bar = this.add.image(1261, 228, 'skate', 'bar')

        // railing1
        const railing1 = this.add.image(1172.866631309672, 691.3702917992708, 'skate', 'railing1')
        railing1.setOrigin(0.4582764034671558, 0.41586599876093105)

        // lists
        const sort = [bar, railing2, railing3, railing1, fg2, pillar]

        // skate (components)
        const skateButton = new Button(skate)
        skateButton.spriteName = 'skate'
        skateButton.activeFrame = false
        const skateMoveTo = new MoveTo(skate)
        skateMoveTo.x = 300
        skateMoveTo.y = 270

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
