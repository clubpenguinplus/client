import {SimpleButton, Button, Interactive, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {
    constructor() {
        super('FurnitureCatalog')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('catalogs-master-pack', 'client/media/interface/catalogs/catalogs-master-pack.json')
        this.load.pack('furniturecatalog-pack', 'client/media/interface/catalogs/furniture/furniturecatalog-pack.json')
    }

    /** @returns {void} */
    _create() {
        // blocker
        const blocker = this.add.rectangle(760, 480, 1520, 960)
        blocker.isFilled = true
        blocker.fillColor = 0
        blocker.fillAlpha = 0.3

        // lists
        const pages = []

        // blocker (components)
        new Interactive(blocker)

        this.blocker = blocker
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {Array<any>} */
    pages

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.setCoins(this.shell.client.coins)
    }

    setCoins(coins) {
        this.coinsTxt.text = `YOUR COINS: ${coins}`
        this.coinsTxt_1.text = `YOUR COINS: ${coins}`
    }

    buyIgloo(id) {
        this.interface.prompt.showIgloo(id)
    }

    buyLocation(id) {
        this.interface.prompt.showLocation(id)
    }

    buyFlooring(id) {
        this.interface.prompt.showFlooring(id)
    }

    buyFurniture(id) {
        this.interface.prompt.showFurniture(id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
