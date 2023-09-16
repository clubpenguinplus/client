import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class TreeHouse extends IglooScene {
    constructor() {
        super('TreeHouse')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [670, 570]
        this.wallSpawn = [650, 310]
        this.wallBounds = [280, 1250]
        this.floorFrame = 7

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
