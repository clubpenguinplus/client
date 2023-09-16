import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class SecretBase extends IglooScene {
    constructor() {
        super(`SecretBase-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [690, 800]
        this.wallSpawn = [680, 150]
        this.wallBounds = [700, 980]
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
