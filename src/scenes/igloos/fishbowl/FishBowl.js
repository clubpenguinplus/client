import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class FishBowl extends IglooScene {
    constructor() {
        super('FishBowl')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 720]
        this.wallSpawn = [760, 330]
        this.wallBounds = [436, 1124]
        this.floorFrame = 9

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
