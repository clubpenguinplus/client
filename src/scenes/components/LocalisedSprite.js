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

    get language() {
        if (window.location.pathname.includes('en')) {
            return 'en'
        } else if (window.location.pathname.includes('es')) {
            return 'es'
        }
        return 'pt'
    }

    getFrame() {
        let currentFrame = this.gameObject.frame.name
        if (currentFrame.includes('-en')) {
            return currentFrame.replace('-en', `-${this.language}`)
        } else if (currentFrame.includes('-es')) {
            return currentFrame.replace('-es', `-${this.language}`)
        } else if (currentFrame.includes('-pt')) {
            return currentFrame.replace('-pt', `-${this.language}`)
        }
        return currentFrame
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
