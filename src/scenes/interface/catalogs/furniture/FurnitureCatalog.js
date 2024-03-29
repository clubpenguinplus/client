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

import IglooCatalogBackgroundLoader from '@engine/loaders/IglooCatalogBackgroundLoader'
import IglooCatalogFlooringIconLodaer from '@engine/loaders/IglooCatalogFlooringIconLoader'
import IglooCatalogFrontLoader from '@engine/loaders/IglooCatalogFrontLoader'
import IglooCatalogFurnitureIconLoader from '@engine/loaders/IglooCatalogFurnitureIconLoader'
import IglooCatalogIglooFullPageLoader from '@engine/loaders/IglooCatalogIglooFullPageLoader'
import IglooCatalogIglooHalfPageLoader from '@engine/loaders/IglooCatalogIglooHalfPageLoader'
import IglooCatalogIglooIconLoader from '@engine/loaders/IglooCatalogIglooIconLoader'
import IglooCatalogLocationLoader from '@engine/loaders/IglooCatalogLocationLoader'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {
    constructor() {
        super('FurnitureCatalog')

        /* START-USER-CTR-CODE */
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
            front: 'walrus',
            singleIgloos: [43, 56],
            doubleIgloos: [
                {
                    background: 8,
                    left: 15,
                    right: 16
                },
                {
                    background: 8,
                    left: 55,
                    right: 67
                }
            ],
            furniturePages: [
                {
                    background: 8,
                    left: [
                        {
                            id: 591, // Santa Chair
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 927, // Candy Cane Arch
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 661, // Giant snow tree
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 804, // Cozy FirePlace
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 131, // Christmas Wreath
                            size: 'half',
                            btnPos: 'bottom'
                        },
                        {
                            id: 470, // Christmas Ribbon Red
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 472, // Wall Snowflake.
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                },
                {
                    background: 8,
                    left: [
                        {
                            id: 585, // Coins for change StandPlace
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 794, // Gingerbread Couch
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 795, // Gingerbread Chair
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 934, // Holly Jolly Tree
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 426, // Coins for change banner
                            size: 'half',
                            btnPos: 'bottom'
                        },
                        {
                            id: 590, // Holiday Bells
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 935, // Holiday Fireplace
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                },
                {
                    background: 8,
                    left: [
                        {
                            id: 653, // Iron Chandelier
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2320, // The Merry Walrus Snow Sculpture
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 138, // NutCracker
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 55, // Ice Sculture
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 140, // Present
                            size: 'half',
                            btnPos: 'bottom'
                        },
                        {
                            id: 656, // Blue Present
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 585, // Santa Desk
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                },
                {
                    background: 8,
                    left: [
                        {
                            id: 586, // Santa SnowMan
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 483, // Snow Arch
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 480, // SnowWall
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 482, // Snow Fortress Wall
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 486, // Snowy Tree
                            size: 'half',
                            btnPos: 'bottom'
                        },
                        {
                            id: 133, // Small Christmas Tree
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 474, // Stocking
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                },
                {
                    background: 3,
                    left: [
                        {
                            id: 2046,
                            size: 'twothirds',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2058,
                            size: 'third',
                            btnPos: 'right'
                        }
                    ],
                    right: [
                        {
                            id: 2054,
                            size: 'half',
                            btnPos: 'left'
                        },
                        {
                            id: 2059,
                            size: 'half',
                            btnPos: 'right'
                        }
                    ]
                }
            ],
            commonIglooPage: {
                background: 4,
                left: 30,
                right: 9
            },
            commonItemsPages: [
                {
                    background: 5,
                    left: [
                        {
                            id: 2255,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2257,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2258,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2260,
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 2262,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2248,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2261,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2249,
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                },
                {
                    background: 5,
                    left: [
                        {
                            id: 2256,
                            size: 'half',
                            btnPos: 'right'
                        },
                        {
                            id: 2254,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2259,
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ],
                    right: [
                        {
                            id: 2252,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2253,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2251,
                            size: 'quarter',
                            btnPos: 'bottom'
                        },
                        {
                            id: 2250,
                            size: 'quarter',
                            btnPos: 'bottom'
                        }
                    ]
                }
            ],
            flooring: [17, 21, 22, 14, 15, 11, 19, 7],
            locationPages: [2, 3]
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

        this.iglooCatalogBackgroundLoader = new IglooCatalogBackgroundLoader(this)
        this.iglooCatalogFlooringIconLodaer = new IglooCatalogFlooringIconLodaer(this)
        this.iglooCatalogFrontLoader = new IglooCatalogFrontLoader(this)
        this.iglooCatalogFurnitureIconLoader = new IglooCatalogFurnitureIconLoader(this)
        this.iglooCatalogIglooFullPageLoader = new IglooCatalogIglooFullPageLoader(this)
        this.iglooCatalogIglooHalfPageLoader = new IglooCatalogIglooHalfPageLoader(this)
        this.iglooCatalogIglooIconLoader = new IglooCatalogIglooIconLoader(this)
        this.iglooCatalogLocationLoader = new IglooCatalogLocationLoader(this)

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

        json.singleIgloos.forEach((id) => {
            let singleIgloo = new SingleIglooPage(this, 0, 0)
            singleIgloo.loadIgloo(id)
            this.pages.push(singleIgloo)
        })

        json.doubleIgloos.forEach((igloo) => {
            let doubleIgloo = new DoubleIglooPage(this, 0, 0)
            doubleIgloo.loadIgloos(igloo.background, igloo.left, igloo.right)
            this.pages.push(doubleIgloo)
        })

        json.furniturePages.forEach((page) => {
            let furniturePage = new FurniturePage(this, 0, 0)
            furniturePage.loadPage(page.background, page.left, page.right)
            this.pages.push(furniturePage)
        })

        let commonIglooPage = new DoubleIglooPage(this, 0, 0)
        commonIglooPage.loadIgloos(json.commonIglooPage.background, json.commonIglooPage.left, json.commonIglooPage.right)
        this.pages.push(commonIglooPage)

        json.commonItemsPages.forEach((page) => {
            let furniturePage = new FurniturePage(this, 0, 0)
            furniturePage.loadPage(page.background, page.left, page.right)
            this.pages.push(furniturePage)
        })

        let flooringPage = new FlooringPage(this, 0, 0)
        flooringPage.loadFlooring(json.flooring)
        this.pages.push(flooringPage)

        json.locationPages.forEach((id) => {
            let page = new LocationPage(this, 0, 0)
            page.loadLocation(id)
            this.pages.push(page)
        })

        this.pages.push(new BackPage(this, 0, 0))

        for (let page of this.pages) {
            this.pageContainer.add(page)
            if (!(page instanceof FrontPage)) {
                page.visible = false
            }
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
