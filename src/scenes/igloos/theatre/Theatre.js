import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Theatre extends IglooScene {
    constructor() {
        super('Theatre')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [754, 698]
        this.wallSpawn = [804, 472]
        this.wallBounds = [510, 1044]
        this.floorFrame = 12

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
