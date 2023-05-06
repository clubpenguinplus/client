import BaseContainer from '@scenes/base/BaseContainer'

import {Button, NineSlice} from '@components/components'

import PaperDoll from '@scenes/interface/game/playercard/paperdoll/PaperDoll'

/* START OF COMPILED CODE */

export default class PenguinSmall extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Image} */
        this.penguinSmall
        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {Phaser.GameObjects.Text} */
        this.username

        // bg
        const bg = scene.add.ninePatchContainer(0, 0, 688, 288, 'prompt', 'window')
        bg.marginLeft = 50
        bg.marginTop = 50
        bg.marginRight = 50
        bg.marginBottom = 50
        this.add(bg)

        // penguinSmall
        const penguinSmall = scene.add.image(0, 0, 'login', 'player_small')
        this.add(penguinSmall)

        // paperDoll
        const paperDoll = new PaperDoll(scene, -212, 60)
        paperDoll.visible = true
        this.add(paperDoll)

        // username
        const username = scene.add.text(90, 0, '', {})
        username.setOrigin(0.5, 0.5)
        username.setStyle({align: 'center', fixedWidth: 420, fontFamily: 'cpCCComicrazy', fontSize: '48px', fontStyle: 'bold italic', stroke: '#003366', strokeThickness: 10, 'shadow.color': '#000000ff'})
        this.add(username)

        // penguinSmall (components)
        const penguinSmallButton = new Button(penguinSmall)

        // paperDoll (prefab fields)
        paperDoll.fadeIn = false

        this.bg = bg
        this.penguinSmall = penguinSmall
        this.paperDoll = paperDoll
        this.username = username

        /* START-USER-CTR-CODE */

        this.button = penguinSmallButton

        let shape = scene.make.graphics()
        shape.fillRoundedRect(0, 0, 600 * window.currentScale, 196 * window.currentScale, 20 * window.currentScale)

        let mask = shape.createGeometryMask()
        paperDoll.mask = mask

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
