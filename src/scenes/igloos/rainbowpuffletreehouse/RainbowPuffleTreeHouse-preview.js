import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class RainbowPuffleTreeHouse extends IglooScene {
    constructor() {
        super(`RainbowPuffleTreeHouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [580, 634]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [460, 1060]
        this.floorFrame = 15

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
