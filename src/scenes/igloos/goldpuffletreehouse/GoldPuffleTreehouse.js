import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class GoldPuffleTreeHouse extends IglooScene {
    constructor() {
        super('GoldPuffleTreeHouse')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [580, 634]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [460, 1060]
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
