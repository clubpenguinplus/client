import Closeup from './Closeup'
import {Button, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Intro extends Closeup {
    constructor() {
        super('Intro')

        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {Phaser.GameObjects.Text} */
        this.content
        /** @type {Phaser.GameObjects.Text} */
        this.okay

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // bg
        const bg = this.add.ninePatchContainer(760, 480, 900, 800, 'banning', 'banned_bg')
        bg.marginLeft = 40
        bg.marginTop = 40
        bg.marginRight = 40
        bg.marginBottom = 40

        // button
        const button = this.add.image(760, 766, 'banning', 'button')

        // title
        const title = this.add.text(760, 153, '', {})
        title.setOrigin(0.5, 0)
        title.text = 'Welcome to Club Penguin Plus!'
        title.setStyle({align: 'center', fixedWidth: 800, fontFamily: 'cpBurbankSmall', fontSize: '48px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title.setLineSpacing(5)
        title.setWordWrapWidth(800)

        // content
        const content = this.add.text(760, 250, '', {})
        content.setOrigin(0.5, 0)
        content.text = 'Club Penguin Plus is in closed beta. This means you are one of few lucky penguins with access to the game right now!\n\nWe encourage you to test whatever you can, and actively try to break things and find bugs we can fix. \n\nYou can use the !ai command to add any item to your inventory, so you can test anything you want.\n\nThis feature will be disabled on public release and your account data will be reset to default.'
        content.setStyle({align: 'center', fixedWidth: 800, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        content.setLineSpacing(5)
        content.setWordWrapWidth(800)

        // okay
        const okay = this.add.text(760, 734, '', {})
        okay.setOrigin(0.5, 0)
        okay.text = 'Okay'
        okay.setStyle({align: 'center', fixedWidth: 800, fontFamily: 'cpBurbankSmall', fontSize: '48px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        okay.setLineSpacing(5)
        okay.setWordWrapWidth(800)

        // block (components)
        new Interactive(block)

        // button (components)
        const buttonButton = new Button(button)
        buttonButton.callback = () => this.stop()

        this.title = title
        this.content = content
        this.okay = okay

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
