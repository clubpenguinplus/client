import SimpleButton from './SimpleButton'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends SimpleButton {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject
        /** @type {string} */
        this.spriteName = ''
        /** @type {any} */
        this.hoverCallback = null
        /** @type {any} */
        this.hoverOutCallback = null
        /** @type {any} */
        this.callback = () => {}
        /** @type {boolean} */
        this.activeFrame = true
        /** @type {boolean} */
        this.pixelPerfect = false
        /** @type {boolean} */
        this.isLocalised = false

        this.gameObject = gameObject
        gameObject['__Button'] = this

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject['__Button']
    }

    /* START-USER-CODE */

    get textureKey() {
        if (this.gameObject.textureKey && this.gameObject.textureKey != '__DEFAULT') return this.gameObject.textureKey
        return this.gameObject.texture.key
    }

    start() {
        super.start()
        this.gameObject.on('pointerdown', (pointer) => this.onDown(pointer))
    }

    onOver() {
        this.gameObject.setTexture(this.textureKey, `${this.spriteName}-hover`, false, false)
        super.onOver()
    }

    onOut() {
        this.gameObject.setTexture(this.textureKey, this.spriteName, false, false)
        super.onOut()
    }

    onDown(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (this.activeFrame) {
            this.gameObject.setTexture(this.textureKey, `${this.spriteName}-active`, false, false)
        } else {
            this.gameObject.setTexture(this.textureKey, `${this.spriteName}-hover`, false, false)
        }
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (this.activeFrame) {
            this.gameObject.setTexture(this.textureKey, this.spriteName, false, false)
        } else {
            this.gameObject.setTexture(this.textureKey, `${this.spriteName}-hover`, false, false)
        }

        super.onUp(pointer)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
