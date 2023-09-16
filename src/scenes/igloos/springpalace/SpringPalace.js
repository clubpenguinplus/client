import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class SpringPalace extends IglooScene {
    constructor() {
        super('SpringPalace')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 540]
        this.wallSpawn = [740, 140]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

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
