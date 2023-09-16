import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class ShadowyKeep extends IglooScene {
    constructor() {
        super('ShadowyKeep')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [4420, 1100]
        this.floorFrame = 8

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
