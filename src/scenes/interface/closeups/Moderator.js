import Closeup from './Closeup'
import {Button, SimpleButton, LocalisedString, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Moderator extends Closeup {
    constructor() {
        super('Moderator')

        /** @type {Phaser.GameObjects.Image} */
        this.bg
        /** @type {Phaser.GameObjects.Image} */
        this.penguins
        /** @type {Phaser.GameObjects.Image} */
        this.white_x
        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Image} */
        this.modbutton
        /** @type {Phaser.GameObjects.Text} */
        this.text_1

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('safetyquiz-pack', 'client/media/interface/closeups/safetyquiz/safetyquiz-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // bg
        const bg = this.add.image(760, 480, 'safetyquiz', 'bg')

        // penguins
        const penguins = this.add.image(381, 527, 'safetyquiz', 'penguins')

        // white_x
        const white_x = this.add.image(1439, 77, 'main', 'white-x')
        white_x.scaleX = 0.8
        white_x.scaleY = 0.8

        // mod
        this.add.image(1031, 272, 'safetyquiz', 'mod')

        // text
        const text = this.add.text(1031, 429, '', {})
        text.setOrigin(0.5, 0)
        text.text = "If someone is breaking the rules, click on their penguin, then click the 'M' to report them to a moderator. You can also click on the skull to ignore them"
        text.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.offsetX': 2, 'shadow.offsetY': 2, 'shadow.color': '#26417dff', 'shadow.blur': 3, 'shadow.fill': true})
        text.setLineSpacing(15)
        text.setWordWrapWidth(530)

        // modbutton
        const modbutton = this.add.image(1016, 725, 'safetyquiz', 'modbutton')

        // text_1
        const text_1 = this.add.text(1038, 707, '', {})
        text_1.setOrigin(0.5, 0)
        text_1.text = 'Safety Quiz'
        text_1.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.blur': 10, 'shadow.fill': true})
        text_1.setLineSpacing(5)
        text_1.setWordWrapWidth(550)

        // block (components)
        new Interactive(block)

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => {
            this.stop()
        }

        // text (components)
        const textLocalisedString = new LocalisedString(text)
        textLocalisedString.id = 'moderator-body'

        // modbutton (components)
        const modbuttonButton = new Button(modbutton)
        modbuttonButton.callback = () => {
            this.interface.loadExternal('SafetyQuiz')
            this.stop(false)
        }

        // text_1 (components)
        const text_1LocalisedString = new LocalisedString(text_1)
        text_1LocalisedString.id = 'safetyquiz'

        this.bg = bg
        this.penguins = penguins
        this.white_x = white_x
        this.text = text
        this.modbutton = modbutton
        this.text_1 = text_1

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
