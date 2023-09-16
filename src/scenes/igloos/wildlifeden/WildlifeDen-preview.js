import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class WildlifeDen extends IglooScene {
    constructor() {
        super(`WildlifeDen-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [608, 728]
        this.wallSpawn = [496, 182]
        this.wallBounds = [308, 1072]
        this.floorFrame = 15

        this.isPreview = true

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
