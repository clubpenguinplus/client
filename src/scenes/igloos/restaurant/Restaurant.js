import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Restaurant extends IglooScene {
    constructor() {
        super('Restaurant')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [410, 1110]
        this.floorFrame = 12

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
