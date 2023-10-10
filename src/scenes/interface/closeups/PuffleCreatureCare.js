import Closeup from './Closeup'
import {Button, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class PuffleCreatureCare extends Closeup {
    constructor() {
        super('PuffleCreatureCare')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('pufflecreaturecare-pack', 'client/media/interface/closeups/pufflecreaturecare/pufflecreaturecare-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // window
        this.add.ninePatchContainer(760, 480, 850, 650, 'prompt', 'window')

        // window_button
        const window_button = this.add.ninePatchContainer(964, 690, 350, 92, 'prompt', 'window-button')

        // pufflecreaturecare
        this.add.image(760, 459, 'pufflecreaturecare')

        // window_button_1
        const window_button_1 = this.add.image(545, 690, 'prompt', 'window-button')

        // text_1
        const text_1 = this.add.text(760, 521, '', {})
        text_1.setOrigin(0.5, 0.5)
        text_1.text = 'Walk your puffles to the hotel to care for them.'
        text_1.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        text_1.setWordWrapWidth(450)

        // text
        const text = this.add.text(545, 690, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'No Thanks'
        text.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        text.setWordWrapWidth(450)

        // text_2
        const text_2 = this.add.text(1001, 690, '', {})
        text_2.setOrigin(0.5, 0.5)
        text_2.text = 'Go there!'
        text_2.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        text_2.setWordWrapWidth(450)

        // block (components)
        new Interactive(block)

        // window_button (components)
        const window_buttonButton = new Button(window_button)
        window_buttonButton.callback = () => {
            this.stop()
            this.shell.room.triggerRoom(430, 800, 350)
        }

        // window_button_1 (components)
        const window_button_1Button = new Button(window_button_1)
        window_button_1Button.callback = () => this.stop()

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
