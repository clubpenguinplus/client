import RoomScene from '@scenes/rooms/RoomScene'

/* START OF COMPILED CODE */

export default class RoomBuffer extends RoomScene {
    constructor() {
        super('RoomBuffer')
    }

    /** @returns {void} */
    _preload() {}

    /** @returns {void} */
    _create() {
        this.events.emit('scene-awake')
    }

    /** @type {Array<any>} */
    sort
}

/* END OF COMPILED CODE */
