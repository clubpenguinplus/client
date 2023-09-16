import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class WhalesMouth extends IglooScene {
    constructor() {
        super('WhalesMouth')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [880, 700]
        this.wallSpawn = [568, 246]
        this.wallBounds = [360, 1140]
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
