import BaseScene from '@scenes/base/BaseScene'
import PathEngine from '@engine/world/penguin/pathfinding/PathEngine'
import {Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class Load extends BaseScene {
    constructor() {
        super('Load')

        /** @type {Phaser.GameObjects.Sprite} */
        this.cart
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizza
        /** @type {Phaser.GameObjects.Sprite} */
        this.shovel
        /** @type {Phaser.GameObjects.Sprite} */
        this.bar
        /** @type {Phaser.GameObjects.Sprite} */
        this.spinner

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('load-pack', 'client/media/interface/menus/load/load-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'load', 'bg')
        bg.setOrigin(0, 0)

        // cart
        const cart = this.add.sprite(760, 363, 'load', 'penguin3_0001')
        cart.visible = false

        // pizza
        const pizza = this.add.sprite(760, 262, 'load', 'penguin2_0001')
        pizza.visible = false

        // shovel
        const shovel = this.add.sprite(760, 384, 'load', 'penguin1_0001')
        shovel.visible = false

        // bar
        const bar = this.add.sprite(760, 611, 'load', 'beam_0001')

        // spinner
        const spinner = this.add.sprite(674, 611, 'load', 'load_0001')
        spinner.scaleX = 0.35
        spinner.scaleY = 0.35

        // bg (components)
        new Interactive(bg)

        this.cart = cart
        this.pizza = pizza
        this.shovel = shovel
        this.bar = bar
        this.spinner = spinner

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create(data) {
        this._create()

        this.events.on('sleep', this.onSleep, this)
        this.events.on('wake', this.onWake, this)

        this.shovel.play('shovel')
        this.cart.play('cart')
        this.pizza.play('pizza')
        this.spinner.play('spinner')

        var sprite = Phaser.Math.RND.between(0, 2)
        if (sprite == 0) {
            this.shovel.visible = true
        } else if (sprite == 1) {
            this.cart.visible = true
        } else {
            this.pizza.visible = true
        }
    }

    onSleep() {}

    onWake(sys, data) {
        this.bar.play('bar')

        var sprite = Phaser.Math.RND.between(0, 2)
        if (sprite == 0) {
            this.shovel.visible = true
            this.cart.visible = false
            this.pizza.visible = false
        } else if (sprite == 1) {
            this.shovel.visible = false
            this.cart.visible = true
            this.pizza.visible = false
        } else {
            this.shovel.visible = false
            this.cart.visible = false
            this.pizza.visible = true
        }
    }

    setContent(text, showBar) {
        if (showBar) {
            this.bar.anims.stop('bar')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */