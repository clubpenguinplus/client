import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class HotelSpa extends RoomScene {
    constructor() {
        super('HotelSpa')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {}

        this.music = 361

        this.loadSfx = []

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('hotelspa-pack', 'client/media/rooms/hotelspa/hotelspa-pack.json')
    }

    /** @returns {void} */
    _create() {
        // lists
        const sort = []

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Array<any>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
