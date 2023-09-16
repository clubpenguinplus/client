import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class FishBowl extends IglooScene {
    constructor() {
        super(`FishBowl-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 720]
        this.wallSpawn = [760, 330]
        this.wallBounds = [436, 1124]
        this.floorFrame = 9

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
