import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class TrainStation extends IglooScene {
    constructor() {
        super(`TrainStation-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [500, 700]
        this.wallSpawn = [854, 190]
        this.wallBounds = [420, 1260]
        this.floorFrame = 16

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
