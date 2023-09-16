import IglooScene from '../IglooScene'
/* START OF COMPILED CODE */

export default class Snowglobe extends IglooScene {
    constructor() {
        super(`Snowglobe-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /* START-USER-CTR-CODE */
        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1
        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('snow-pack', 'client/media/igloos/buildings/sprites/snow/snow-pack.json')
    }

    /** @returns {void} */
    _create() {
        // snowglobe
        this.add.image(765, 453, 'snowglobe')

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
