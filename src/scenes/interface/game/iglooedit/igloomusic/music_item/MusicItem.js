import BaseContainer from '@scenes/base/BaseContainer'

import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class MusicItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {string} */
        this.name = ''
        /** @type {number} */
        this.musicId = 0
        /** @type {boolean} */
        this.bold = false

        // item
        const item = scene.add.image(0, 0, 'iglooedit-new', 'play')
        this.add(item)

        // title
        const title = scene.add.text(18, 0, '', {})
        title.setOrigin(0.5, 0.5)
        title.setStyle({color: '#3e83c5ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '18px'})
        this.add(title)

        // item (components)
        const itemButton = new Button(item)
        itemButton.spriteName = 'play'
        itemButton.callback = () => this.onClick()

        this.title = title

        /* START-USER-CTR-CODE */

        scene.events.once('scene-awake', this.onAwake, this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onAwake() {
        this.title.text = this.name

        if (this.bold) {
            this.title.setFontStyle('bold')
        }
    }

    onClick() {
        this.airtower.sendXt('g#um', this.musicId)
        this.parentContainer.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
