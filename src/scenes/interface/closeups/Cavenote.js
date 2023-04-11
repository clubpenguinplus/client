import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, LocalisedSprite, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Cavenote extends BaseScene {
    constructor() {
        super('Cavenote')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('cavenote-pack', 'client/media/interface/closeups/cavenote/cavenote-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // note_en
        const note_en = this.add.image(760, 480, 'cavenote', 'note_en')

        // exit
        const exit = this.add.image(1142, 79, 'cavenote', 'exit')

        // block (components)
        new Interactive(block)

        // note_en (components)
        new LocalisedSprite(note_en)

        // exit (components)
        const exitButton = new Button(exit)
        exitButton.spriteName = 'exit'
        exitButton.callback = () => this.scene.stop()

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
