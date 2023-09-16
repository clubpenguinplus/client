import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class GingerbreadHouse extends IglooScene {
    constructor() {
        super('GingerbreadHouse')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [754, 696]
        this.wallSpawn = [804, 472]
        this.wallBounds = [510, 1044]
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
