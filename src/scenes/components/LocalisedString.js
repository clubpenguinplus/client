import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LocalisedString extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject
        /** @type {string} */
        this.id = ''

        this.gameObject = gameObject
        gameObject['__LocalisedString'] = this

        /* START-USER-CTR-CODE */

        /* END-USER-CTR-CODE */
    }

    /** @returns {LocalisedString} */
    static getComponent(gameObject) {
        return gameObject['__LocalisedString']
    }

    /* START-USER-CODE */
    start() {
        let text = this.gameObject.scene.crumbs.getString(this.id) ? this.gameObject.scene.crumbs.getString(this.id) : `localisedString.${this.id}`
        this.gameObject.text = text
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
