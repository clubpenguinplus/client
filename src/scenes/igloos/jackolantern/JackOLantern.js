import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class JackOLantern extends IglooScene {
    constructor() {
        super('JackOLantern')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [760, 330]
        this.wallBounds = [380, 1160]
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
