import RoomScene from '@scenes/rooms/RoomScene'

import {Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class BeanCounters extends RoomScene {
    constructor() {
        super('BeanCounters')

        /* START-USER-CTR-CODE */
        this.music = 'beancounters'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('load-pack', 'client/media/interface/menus/load/load-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'load', 'bg')
        bg.setOrigin(0, 0)

        // bg (components)
        new Interactive(bg)

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.interface.hideInterface(false)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
