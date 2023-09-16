import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class FreshBakedGingerbreadHouse extends IglooScene {
    constructor() {
        super('FreshBakedGingerbreadHouse')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [1000, 686]
        this.wallSpawn = [654, 440]
        this.wallBounds = [440, 1054]
        this.floorFrame = 4

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
