import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class MermaidCove extends IglooScene {
    constructor() {
        super(`MermaidCove-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [616, 512]
        this.wallSpawn = [850, 216]
        this.wallBounds = [260, 1140]
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
