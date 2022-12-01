import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Skate extends RoomScene {
    constructor() {
        super('Skate')

        /* START-USER-CTR-CODE */
        // Write your code here.
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
        this.add.image(1222, 374, 'skate', 'railing2')

        // railing3
        this.add.image(1254, 488, 'skate', 'railing3')

        // pillar
        this.add.image(5, 429, 'skate', 'pillar')

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
        this.add.image(324, 178, 'skate', 'skate')

        // fg2
        this.add.image(648, 826, 'skate', 'fg2')

        // fg1
        this.add.image(770, 826, 'skate', 'fg1')

        // catalog
        this.add.image(1420, 885, 'skate', 'catalog')

        // bar
        this.add.image(1261, 228, 'skate', 'bar')

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
