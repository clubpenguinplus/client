import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Cave extends IglooScene {
    constructor() {
        super(`Cave-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [760, 260]
        this.wallBounds = [250, 1200]
        this.floorFrame = 2

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
