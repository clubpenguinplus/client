import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Penthouse extends IglooScene {
    constructor() {
        super(`Penthouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [490, 600]
        this.wallSpawn = [680, 150]
        this.wallBounds = [490, 1330]
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
