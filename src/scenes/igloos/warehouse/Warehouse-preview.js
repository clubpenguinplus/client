import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Warehouse extends IglooScene {
    constructor() {
        super(`Warehouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [510, 1110]
        this.floorFrame = 6

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
