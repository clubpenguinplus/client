import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class CreepyCavern extends IglooScene {
    constructor() {
        super('CreepyCavern')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 720]
        this.wallBounds = [400, 340]
        this.floorFrame = 16

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
