import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class MedievalManor extends IglooScene {
    constructor() {
        super('MedievalManor')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [108, 472]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [610, 960]
        this.floorFrame = 15

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
