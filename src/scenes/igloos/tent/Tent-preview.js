import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Tent extends IglooScene {
    constructor() {
        super(`Tent-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 440]
        this.wallBounds = [300, 1230]
        this.floorFrame = 10

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
