import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class HotelRoof extends RoomScene {
    constructor() {
        super('HotelRoof')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {}

        this.music = 360

        this.loadSfx = []

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('hotelroof-pack', 'client/media/rooms/hotelroof/hotelroof-pack.json')
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
