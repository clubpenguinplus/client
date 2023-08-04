import FloatingMenu from '../FloatingMenu'

import {Button, Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class PuffleTricks extends FloatingMenu {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe
        /** @type {Phaser.GameObjects.Rectangle} */
        this.close
        /** @type {Phaser.GameObjects.Image} */
        this.digBtn
        /** @type {Phaser.GameObjects.Container} */
        this.cooldown_cntr

        // safe
        const safe = scene.add.rectangle(0, -165, 200, 390)
        safe.isFilled = true
        safe.fillColor = 65535
        safe.fillAlpha = 0.5
        this.add(safe)

        // close
        const close = scene.add.rectangle(0, 61, 80, 80)
        close.isFilled = true
        close.fillColor = 65535
        close.fillAlpha = 0.5
        this.add(close)

        // bg
        const bg = scene.add.ninePatchContainer(0, -166, 140, 340, 'main', 'actions')
        this.add(bg)

        // digBtn
        const digBtn = scene.add.image(0, -70, 'main', 'large-box')
        this.add(digBtn)

        // spin
        const spin = scene.add.image(32, -167, 'main', 'small-box')
        this.add(spin)

        // roll
        const roll = scene.add.image(-32, -167, 'main', 'small-box')
        this.add(roll)

        // standOnHead
        const standOnHead = scene.add.image(32, -231, 'main', 'small-box')
        this.add(standOnHead)

        // jump
        const jump = scene.add.image(-32, -231, 'main', 'small-box')
        this.add(jump)

        // speak
        const speak = scene.add.image(32, -295, 'main', 'small-box')
        this.add(speak)

        // nuzzle
        const nuzzle = scene.add.image(-32, -295, 'main', 'small-box')
        this.add(nuzzle)

        // puffletricks_coinbag
        const puffletricks_coinbag = scene.add.image(0, -69, 'main', 'puffletricks/coinbag')
        this.add(puffletricks_coinbag)

        // puffletricks_nuzzle
        const puffletricks_nuzzle = scene.add.image(-32, -294, 'main', 'puffletricks/nuzzle')
        this.add(puffletricks_nuzzle)

        // puffletricks_speak
        const puffletricks_speak = scene.add.image(33, -295, 'main', 'puffletricks/speak')
        this.add(puffletricks_speak)

        // puffletricks_jumpforward
        const puffletricks_jumpforward = scene.add.image(-33, -229, 'main', 'puffletricks/jumpforward')
        this.add(puffletricks_jumpforward)

        // puffletricks_standonhead
        const puffletricks_standonhead = scene.add.image(33, -229, 'main', 'puffletricks/standonhead')
        this.add(puffletricks_standonhead)

        // puffletricks_roll
        const puffletricks_roll = scene.add.image(-32, -167, 'main', 'puffletricks/roll')
        this.add(puffletricks_roll)

        // puffletricks_jumpspin
        const puffletricks_jumpspin = scene.add.image(33, -168, 'main', 'puffletricks/jumpspin')
        this.add(puffletricks_jumpspin)

        // cooldown_cntr
        const cooldown_cntr = scene.add.container(0, -70)
        cooldown_cntr.alpha = 0.5
        this.add(cooldown_cntr)

        // digBtn (components)
        const digBtnButton = new Button(digBtn)
        digBtnButton.callback = () => this.dig()

        // spin (components)
        const spinButton = new Button(spin)
        spinButton.callback = () => this.playAnim('jumpspin')

        // roll (components)
        const rollButton = new Button(roll)
        rollButton.callback = () => this.playAnim('roll')

        // standOnHead (components)
        const standOnHeadButton = new Button(standOnHead)
        standOnHeadButton.callback = () => this.playAnim('standonhead')

        // jump (components)
        const jumpButton = new Button(jump)
        jumpButton.callback = () => this.playAnim('jumpforward')

        // speak (components)
        const speakButton = new Button(speak)
        speakButton.callback = () => this.playAnim('speak')

        // nuzzle (components)
        const nuzzleButton = new Button(nuzzle)
        nuzzleButton.callback = () => this.playAnim('nuzzle')

        this.safe = safe
        this.close = close
        this.digBtn = digBtn
        this.cooldown_cntr = cooldown_cntr

        /* START-USER-CTR-CODE */

        this.bagCooldownVid = scene.add.video(0, 0, 'bag_cooldown_vid')
        this.cooldown_cntr.add(this.bagCooldownVid)
        this.bagCooldownVid.visible = false
        new Interactive(this.bagCooldownVid)

        this.initMenu()

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    dig() {
        // make puffle dig
        this.bagCooldownVid.visible = true
        this.bagCooldownVid.play()
        this.bagCooldownVid.on('complete', () => {
            this.bagCooldownVid.visible = false
        })

        this.digBtn.setFrame('large-box')
        this.visible = false
    }

    playAnim(anim) {
        this.airtower.sendXt('p#playanim', `tricks/${anim}`)
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
