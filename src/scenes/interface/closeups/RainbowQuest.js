import Closeup from './Closeup.js'
// You can write more code here

/* START OF COMPILED CODE */

export default class RainbowQuest extends Closeup {
    constructor() {
        super('RainbowQuest')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('rainbowquest-pack', 'client/media/interface/closeups/rainbowquest/rainbowquest-pack.json')
    }

    /** @returns {void} */
    _create() {
        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        this.editorCreate()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
