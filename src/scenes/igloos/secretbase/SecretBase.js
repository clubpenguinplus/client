import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class SecretBase extends IglooScene {
    constructor() {
        super('SecretBase')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [690, 800]
        this.wallSpawn = [680, 150]
        this.wallBounds = [700, 980]
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
