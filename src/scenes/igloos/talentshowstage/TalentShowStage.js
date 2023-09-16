import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class TalentShowStage extends IglooScene {
    constructor() {
        super('TalentShowStage')

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 740]
        this.wallSpawn = [760, 320]
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
