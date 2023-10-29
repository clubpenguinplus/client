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
            catalog: () => {},
            halfpipe_1l: () => {},
            halfpipe_1r: () => {},
            halfpipe_2l: () => {},
            halfpipe_2r: () => {},
            halfpipe_3l: () => {},
            halfpipe_3r: () => {},
            halfpipe_4l: () => {},
            halfpipe_4r: () => {},
            lowerskate: () => {},
            railbench: () => {},
            railskate: () => {},
            sample: () => {}
        }
        this.music = 251
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('skate-pack', 'client/media/rooms/skate/skate-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'skate', 'bg')
        bg.setOrigin(0, 0)
        bg.tintTopLeft = 11579069
        bg.tintTopRight = 11579069
        bg.tintBottomLeft = 11579069
        bg.tintBottomRight = 11579069

        // bench
        const bench = this.add.image(1204, 207, 'skate', 'bench')
        bench.tintTopLeft = 11579069
        bench.tintTopRight = 11579069
        bench.tintBottomLeft = 11579069
        bench.tintBottomRight = 11579069

        // railing2
        const railing2 = this.add.image(1206.5251210883862, 350.9968016178712, 'skate', 'railing2')
        railing2.setOrigin(0.18418614466094257, 0.3356914401276514)
        railing2.tintTopLeft = 11579069
        railing2.tintTopRight = 11579069
        railing2.tintBottomLeft = 11579069
        railing2.tintBottomRight = 11579069

        // railing3
        const railing3 = this.add.image(1240.6163209413069, 462.9056017649504, 'skate', 'railing3')
        railing3.setOrigin(0.21524087109163548, 0.3127283713802269)
        railing3.tintTopLeft = 11579069
        railing3.tintTopRight = 11579069
        railing3.tintBottomLeft = 11579069
        railing3.tintBottomRight = 11579069

        // pillar
        const pillar = this.add.image(5, 429, 'skate', 'pillar')
        pillar.tintTopLeft = 11579069
        pillar.tintTopRight = 11579069
        pillar.tintBottomLeft = 11579069
        pillar.tintBottomRight = 11579069

        // pillar2
        const pillar2 = this.add.image(196, 209, 'skate', 'pillar2')
        pillar2.tintTopLeft = 11579069
        pillar2.tintTopRight = 11579069
        pillar2.tintBottomLeft = 11579069
        pillar2.tintBottomRight = 11579069

        // puffle
        const puffle = this.add.image(32, 489.00000000000006, 'skate', 'puffle')
        puffle.scaleX = 0.8
        puffle.scaleY = 0.8
        puffle.setOrigin(0.5488281242724042, 3.04921256043897)
        puffle.tintTopLeft = 11579069
        puffle.tintTopRight = 11579069
        puffle.tintBottomLeft = 11579069
        puffle.tintBottomRight = 11579069

        // puffle_1
        const puffle_1 = this.add.image(180, 149, 'skate', 'puffle')
        puffle_1.scaleX = 0.5
        puffle_1.scaleY = 0.5
        puffle_1.tintTopLeft = 11579069
        puffle_1.tintTopRight = 11579069
        puffle_1.tintBottomLeft = 11579069
        puffle_1.tintBottomRight = 11579069

        // skate
        const skate = this.add.image(324, 178, 'skate', 'skate')
        skate.tintTopLeft = 11579069
        skate.tintTopRight = 11579069
        skate.tintBottomLeft = 11579069
        skate.tintBottomRight = 11579069

        // fg2
        const fg2 = this.add.image(646.6369855269844, 699.2437501579271, 'skate', 'fg2')
        fg2.setOrigin(0.49747597996282805, 0.16730633525779298)
        fg2.tintTopLeft = 11579069
        fg2.tintTopRight = 11579069
        fg2.tintBottomLeft = 11579069
        fg2.tintBottomRight = 11579069

        // fg1
        const fg1 = this.add.image(770, 826, 'skate', 'fg1')
        fg1.tintTopLeft = 11579069
        fg1.tintTopRight = 11579069
        fg1.tintBottomLeft = 11579069
        fg1.tintBottomRight = 11579069

        // catalog
        const catalog = this.add.image(1420, 885, 'skate', 'catalog')

        // bar
        const bar = this.add.image(1261, 228, 'skate', 'bar')
        bar.tintTopLeft = 11579069
        bar.tintTopRight = 11579069
        bar.tintBottomLeft = 11579069
        bar.tintBottomRight = 11579069

        // railing1
        const railing1 = this.add.image(1172.866631309672, 691.3702917992708, 'skate', 'railing1')
        railing1.setOrigin(0.4582764034671558, 0.41586599876093105)
        railing1.tintTopLeft = 11579069
        railing1.tintTopRight = 11579069
        railing1.tintBottomLeft = 11579069
        railing1.tintBottomRight = 11579069

        // lists
        const sort = [bar, railing2, railing3, railing1, fg2, pillar, puffle]

        // skate (components)
        new Button(skate)
        const skateMoveTo = new MoveTo(skate)
        skateMoveTo.x = 300
        skateMoveTo.y = 270

        // catalog (components)
        const catalogButton = new Button(catalog)
        catalogButton.callback = () => this.loadSnowSports()

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
    }

    loadSnowSports() {
        let currentMonth = new Date().getMonth() + 1

        if (currentMonth >= 6 && currentMonth < 12) {
            this.interface.loadExternal('SummerSports')
        } else if (currentMonth >= 12 || currentMonth < 6) {
            this.interface.loadExternal('WinterSports')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
