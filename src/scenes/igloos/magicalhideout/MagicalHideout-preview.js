import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class MagicalHideout extends IglooScene {
    constructor() {
        super(`MagicalHideout-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [860, 320]
        this.wallBounds = [520, 1200]
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
