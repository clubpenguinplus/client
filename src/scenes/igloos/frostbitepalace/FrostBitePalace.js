import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class FrostbitePalace extends IglooScene {
    constructor() {
        super('FrostbitePalace')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [400, 340]
        this.wallBounds = [480, 940]
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
