import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class ImperialBase extends IglooScene {
    constructor() {
        super(`ImperialBase-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [748, 444]
        this.wallSpawn = [760, 170]
        this.wallBounds = [300, 1230]
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
