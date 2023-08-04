import BaseContainer from '@scenes/base/BaseContainer'
import {SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class TeleportItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        this.visible = false

        // txt
        const txt = scene.add.text(0, 0, '', {})
        txt.setOrigin(0, 0.5)
        txt.alpha = 0.8
        txt.alphaTopLeft = 0.8
        txt.alphaTopRight = 0.8
        txt.alphaBottomLeft = 0.8
        txt.alphaBottomRight = 0.8
        txt.text = 'Town Center'
        txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '36px', fontStyle: 'bold'})
        this.add(txt)

        // btn
        const btn = scene.add.rectangle(0, 0, 130, 50)
        btn.setOrigin(0, 0.5)
        this.add(btn)

        // btn (components)
        const btnSimpleButton = new SimpleButton(btn)
        btnSimpleButton.hoverCallback = () => this.onOver()
        btnSimpleButton.hoverOutCallback = () => this.onOut()
        btnSimpleButton.callback = () => this.teleport()

        this.txt = txt
        this.btn = btn

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Text} */
    txt
    /** @type {Phaser.GameObjects.Rectangle} */
    btn
    /** @type {number} */
    roomId = 0

    /* START-USER-CODE */

    createItem() {
        let room = this.crumbs.scenes.rooms[this.roomId]
        if (!room) return false
        let name = this.crumbs.getString(room.key)
        if (!name) return false
        this.txt.text = name
        this.btn.width = this.txt.width
        this.visible = true
        return true
    }

    teleport() {
        this.scene.teleport(this.roomId, this.txt.text)
    }

    onOver() {
        this.txt.setAlpha(1)
    }

    onOut() {
        this.txt.setAlpha(0.8)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
