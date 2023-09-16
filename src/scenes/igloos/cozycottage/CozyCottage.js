import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class CozyCottage extends IglooScene {
    constructor() {
        super('CozyCottage')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [656, 614]
        this.wallSpawn = [672, 266]
        this.wallBounds = [510, 874]
        this.floorFrame = 13

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
