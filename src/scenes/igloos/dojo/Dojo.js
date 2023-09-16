import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Dojo extends IglooScene {
    constructor() {
        super('Dojo')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [758, 724]
        this.wallSpawn = [756, 506]
        this.wallBounds = [416, 1100]
        this.floorFrame = 5

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
