import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, NineSlice, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class WaitPrompt extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // rectangle
        const rectangle = scene.add.rectangle(0, 0, 724, 410)
        rectangle.isFilled = true
        rectangle.fillColor = 164045
        this.add(rectangle)

        // yes_button
        const yes_button = scene.add.image(-140, 95, 'login', 'wait-button')
        this.add(yes_button)

        // no_button
        const no_button = scene.add.image(140, 95, 'login', 'wait-button')
        this.add(no_button)

        // text
        const text = scene.add.text(0, -70, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'WAIT!\nDo other people use this\ncomputer?'
        text.setStyle({align: 'center', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '36px', fontStyle: 'bold'})
        this.add(text)

        // text_1
        const text_1 = scene.add.text(-140, 95, '', {})
        text_1.setOrigin(0.5, 0.5)
        text_1.text = 'Yes'
        text_1.setStyle({align: 'center', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '36px', fontStyle: 'bold'})
        this.add(text_1)

        // text_2
        const text_2 = scene.add.text(140, 95, '', {})
        text_2.setOrigin(0.5, 0.5)
        text_2.text = 'No'
        text_2.setStyle({align: 'center', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '36px', fontStyle: 'bold'})
        this.add(text_2)

        // block (components)
        new Interactive(block)

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle)
        rectangleNineSlice.corner = 50

        // yes_button (components)
        const yes_buttonButton = new Button(yes_button)
        yes_buttonButton.callback = () => this.onYesClick()

        // no_button (components)
        const no_buttonButton = new Button(no_button)
        no_buttonButton.callback = () => this.onYesClick()

        // text (components)
        const textLocalisedString = new LocalisedString(text)
        textLocalisedString.id = 'waitOther'

        // text_1 (components)
        const text_1LocalisedString = new LocalisedString(text_1)
        text_1LocalisedString.id = 'yes'

        // text_2 (components)
        const text_2LocalisedString = new LocalisedString(text_2)
        text_2LocalisedString.id = 'no'

        /* START-USER-CTR-CODE */

        this.scene = scene

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onYesClick() {
        this.visible = false
        this.scene.savePrompt.visible = true

        this.scene.savePrompt.startTimer()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
