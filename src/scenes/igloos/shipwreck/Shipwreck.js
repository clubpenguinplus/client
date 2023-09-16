import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Shipwreck extends IglooScene {
    constructor() {
        super('Shipwreck')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 580]
        this.wallSpawn = [840, 260]
        this.wallBounds = [580, 1000]
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
