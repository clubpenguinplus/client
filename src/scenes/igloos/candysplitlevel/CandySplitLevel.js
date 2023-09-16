import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class CandySplitLevel extends IglooScene {
    constructor() {
        super('CandySplitLevel')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [1080, 290]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

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
