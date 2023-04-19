// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class WaddleSeat {
    constructor(gameObject) {
        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject
        /** @type {string} */
        this.sitdirection = 'north'

        this.gameObject = gameObject
        gameObject['__WaddleSeat'] = this

        /* START-USER-CTR-CODE */
        setTimeout(() => {
            gameObject.sitFrame = this.frame
        }, 100)
        /* END-USER-CTR-CODE */
    }

    get frame() {
        switch (this.sitdirection) {
            case 'south':
                return 17
            case 'southwest':
                return 18
            case 'west':
                return 19
            case 'northwest':
                return 20
            case 'north':
                return 21
            case 'northeast':
                return 22
            case 'east':
                return 23
            case 'southeast':
                return 24
            default:
                return 17
        }
    }

    /** @returns {WaddleSeat} */
    static getComponent(gameObject) {
        return gameObject['__WaddleSeat']
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
