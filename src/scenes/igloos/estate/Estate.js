import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Estate extends IglooScene {
    constructor() {
        super('Estate')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [420, 1100]
        this.floorFrame = 11

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
