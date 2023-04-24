import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, LocalisedString} from '@components/components'

import MusicItem from './music_item/MusicItem'

/* START OF COMPILED CODE */

export default class IglooMusic extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // igloo_music_selected
        const igloo_music_selected = scene.add.image(-126, -370, 'iglooedit-new', 'igloo-music-selected')
        this.add(igloo_music_selected)

        // music_bg
        const music_bg = scene.add.ninePatchContainer(0, 16, 1000, 700, 'iglooedit-new', 'music-bg')
        this.add(music_bg)

        // blueButton
        const blueButton = scene.add.image(456, -290, 'iglooedit-new', 'close-btn')
        this.add(blueButton)

        // blueX
        const blueX = scene.add.image(456, -292, 'iglooedit-new', 'x')
        this.add(blueX)

        // title
        const title = scene.add.text(-161, -297, '', {})
        title.setOrigin(0.5, 0)
        title.text = 'Igloo Music'
        title.setStyle({color: '#3e83c5ff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(title)

        // title_1
        const title_1 = scene.add.text(-300, -384, '', {})
        title_1.setOrigin(0.5, 0)
        title_1.text = 'Igloo Music'
        title_1.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 330, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(title_1)

        // title_2
        const title_2 = scene.add.text(49, -384, '', {})
        title_2.setOrigin(0.5, 0)
        title_2.text = 'SoundStudio'
        title_2.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 330, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(title_2)

        // block (components)
        new Interactive(block)

        // blueButton (components)
        const blueButtonButton = new Button(blueButton)
        blueButtonButton.spriteName = 'close-btn'
        blueButtonButton.callback = () => (this.visible = false)

        // title (components)
        const titleLocalisedString = new LocalisedString(title)
        titleLocalisedString.id = 'iglooMusic'

        // title_1 (components)
        const title_1LocalisedString = new LocalisedString(title_1)
        title_1LocalisedString.id = 'iglooMusic'

        // title_2 (components)
        const title_2LocalisedString = new LocalisedString(title_2)
        title_2LocalisedString.id = 'soundstudio'

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
