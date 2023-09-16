import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class EerieCastle extends IglooScene {
    constructor() {
        super(`EerieCastle-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [600, 200]
        this.wallSpawn = [880, 350]
        this.wallBounds = [230, 1130]
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
