// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LocalisedSprite {
    constructor(gameObject) {
        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject

        this.gameObject = gameObject
        gameObject['__LocalisedSprite'] = this

        /* START-USER-CTR-CODE */
        gameObject.setFrame(this.getFrame())
        /* END-USER-CTR-CODE */
    }

    /** @returns {LocalisedSprite} */
    static getComponent(gameObject) {
        return gameObject['__LocalisedSprite']
    }

    /* START-USER-CODE */

    get language() {
        for (let lang of ['en', 'es', 'pt']) {
            if (window.location.pathname.includes(lang)) {
                return lang
            }
        }
        return 'en'
    }

    getFrame() {
        let currentFrame = this.gameObject.frame.name
        for (let lang of ['-en', '-es', '-pt']) {
            if (currentFrame.includes(lang)) {
                return currentFrame.replace(lang, `-${this.language}`)
            }
        }
        return currentFrame
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
