import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class TrickOrTreat extends IglooScene {
    constructor() {
        super(`TrickOrTreat-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [714, 624]
        this.wallSpawn = [722, 326]
        this.wallBounds = [488, 958]
        this.floorFrame = 14

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
