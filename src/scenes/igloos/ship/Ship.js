import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Ship extends IglooScene {
    constructor() {
        super('Ship')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [768, 720]
        this.wallSpawn = [756, 436]
        this.wallBounds = [390, 1100]
        this.floorFrame = 7

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
