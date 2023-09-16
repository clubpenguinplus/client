import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class GhostlyCavern extends IglooScene {
    constructor() {
        super(`GhostlyCavern-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

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
