import RoomScene from '@scenes/rooms/RoomScene'

import {Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class Card extends RoomScene {
    constructor() {
        super('Card')

        /* START-USER-CTR-CODE */
        this.music = 1
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'load', 'bg')
        bg.setOrigin(0, 0)

        // lists
        const sort = []

        // bg (components)
        new Interactive(bg)

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Array<any>} */
    sort

    /* START-USER-CODE */

    preload() {}

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
