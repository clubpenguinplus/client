import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Penthouse extends IglooScene {
    constructor() {
        super('Penthouse')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [490, 600]
        this.wallSpawn = [680, 150]
        this.wallBounds = [490, 1330]
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
