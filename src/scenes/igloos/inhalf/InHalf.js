import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class InHalf extends IglooScene {
    constructor() {
        super('InHalf')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [940, 620]
        this.wallSpawn = [680, 376]
        this.wallBounds = [646, 920]
        this.floorFrame = 2

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
