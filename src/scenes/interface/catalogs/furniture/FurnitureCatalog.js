import {SimpleButton, Button, Interactive, Pricetag, Name} from '@components/components'
import FrontPage from './prefabs/FrontPage'
import LocationPage from './prefabs/LocationPage'
import BackPage from './prefabs/BackPage'
import InstructionsPage from './prefabs/InstructionsPage'
import SingleIglooPage from './prefabs/SingleIglooPage'
import DoubleIglooPage from './prefabs/DoubleIglooPage'
import FlooringPage from './prefabs/FlooringPage'
import FurniturePage from './prefabs/FurniturePage'
import PhysicsMaskGraphics from '@engine/utils/mask/PhysicsMaskGraphics'

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

        // pageContainer
        const pageContainer = this.add.container(0, 0)

        // buttons
        const buttons = this.add.rectangle(0, 0, 1, 1)
        buttons.setOrigin(1, 1)
        buttons.isFilled = true
        buttons.fillColor = 0
        buttons.fillAlpha = 0.3

        // lists
        const pages = []

        // blocker (components)
        new Interactive(blocker)

        this.blocker = blocker
        this.pageContainer = pageContainer
        this.buttons = buttons
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {Phaser.GameObjects.Container} */
    pageContainer
    /** @type {Phaser.GameObjects.Rectangle} */
    buttons
    /** @type {Array<any>} */
    pages

    /* START-USER-CODE */

    // Write your code here
    get catJson() {
        return {
            releaseDate: '2023-12-01',
            front: 'june15',
            singleIgloo: 98,
            doubleIgloo: [21, 8],
            furniturePages: [
                {
                    background: 2,
                    left: [
                        {
                            id: 2361,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2360,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2359,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2208,
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 2210,
                            size: 'half',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2209,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2211,
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                }
            ],
            locationPages: [4, 2, 3]
        }
    }

    get physicsFile() {
        return this.cache.json.get('furniturecatalog-physics')
    }

    createMask() {
        let fixtures = this.physicsFile.mask.fixtures
        let graphics = new PhysicsMaskGraphics(this, fixtures)

        return graphics.createGeometryMask()
    }

    create() {
        super.create()

        this.mask = this.createMask()

        this.pages = []
        this.loadFromJson(this.catJson)

        this.setCoins(this.shell.client.coins)
    }

    loadFromJson(json) {
        this.releaseDate = new Date(json.releaseDate)
        let front = new FrontPage(this, 0, 0)
        front.loadFront(json.front)
        this.pages.push(front)

        this.pages.push(new InstructionsPage(this, 0, 0))

        let singleIgloo = new SingleIglooPage(this, 0, 0)
        singleIgloo.loadIgloo(json.singleIgloo)
        this.pages.push(singleIgloo)

        json.locationPages.forEach((id) => {
            let page = new LocationPage(this, 0, 0)
            page.loadLocation(id)
            this.pages.push(page)
        })

        this.pages.push(new BackPage(this, 0, 0))

        for (let page of this.pages) {
            this.pageContainer.add(page)
            page.visible = false
        }
    }

    setCoins(coins) {
        this.pages.forEach((page) => {
            if (!page.coins) return
            page.coins.text = `Your Coins: ${coins}`
        })
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
