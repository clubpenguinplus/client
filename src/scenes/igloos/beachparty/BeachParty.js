import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class BeachParty extends IglooScene {
    constructor() {
        super('BeachParty')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [670, 440]
        this.wallSpawn = [870, 70]
        this.wallBounds = [838, 904]
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
