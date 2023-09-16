import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class SpaceDome extends IglooScene {
    constructor() {
        super('SpaceDome')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [700, 620]
        this.wallSpawn = [380, 210]
        this.wallBounds = [490, 1030]
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
