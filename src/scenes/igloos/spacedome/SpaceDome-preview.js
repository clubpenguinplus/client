import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class SpaceDome extends IglooScene {
    constructor() {
        super(`SpaceDome-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [700, 620]
        this.wallSpawn = [380, 210]
        this.wallBounds = [490, 1030]
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
