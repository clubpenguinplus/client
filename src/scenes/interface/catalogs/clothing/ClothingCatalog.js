import {SimpleButton, Button, Interactive, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

import FrontPage from './prefabs/FrontPage'
import ColorsPage from './prefabs/ColorsPage'
import BackgroundsPage from './prefabs/BackgroundsPage'
import BasicItemsPage from './prefabs/BasicItemsPage'
import CustomHoodiePage from './prefabs/CustomHoodiePage'
import FlagPage from './prefabs/FlagPage'
import BackPage from './prefabs/BackPage'
import ItemsPage from './prefabs/ItemsPage'

/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {
    constructor() {
        super('ClothingCatalog')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('catalogs-master-pack', 'client/media/interface/catalogs/catalogs-master-pack.json')
        this.load.pack('clothingpack', 'client/media/interface/catalogs/clothing/clothingpack.json')
    }

    /** @returns {void} */
    _create() {
        // blocker
        const blocker = this.add.rectangle(760, 480, 1520, 960)

        // pageContainer
        const pageContainer = this.add.container(0, 0)

        // buttons
        const buttons = this.add.container(0, 0)
        buttons.visible = false

        // coinholder
        const coinholder = this.add.image(883.5193256172128, 884.2068469602601, 'constant', 'coinholder')
        buttons.add(coinholder)

        // coins
        const coins = this.add.text(808.5193256172128, 854.2068469602601, '', {})
        coins.angle = -7
        coins.text = 'Your Coins:\n100000'
        coins.setStyle({align: 'center', color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold italic'})
        buttons.add(coins)

        // prevPage
        const prevPage = this.add.image(138, 729, 'constant', 'prevPage')
        buttons.add(prevPage)

        // nextPage
        const nextPage = this.add.image(1382, 729, 'constant', 'nextPage')
        buttons.add(nextPage)

        // lists
        const pages = []

        // blocker (components)
        new Interactive(blocker)

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()
        prevPageButton.pixelPerfect = true

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()
        nextPageButton.pixelPerfect = true

        this.blocker = blocker
        this.pageContainer = pageContainer
        this.coins = coins
        this.buttons = buttons
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {Phaser.GameObjects.Container} */
    pageContainer
    /** @type {Phaser.GameObjects.Text} */
    coins
    /** @type {Phaser.GameObjects.Container} */
    buttons
    /** @type {Array<any>} */
    pages

    /* START-USER-CODE */

    get catJson() {
        return {
            releaseDate: '2023-12-19',
            frontPenguin: 'december',
            backgrounds: [9081, 9287, 9122, 9119, 9283, 9157, 9284, 9061],
            new: [
                {
                    background: 20,
                    leftItems: [
                        {id: 652, type: 'icon'},
                        {id: 1112, type: 'icon'},
                        {id: 1324, type: 'icon'},
                        {id: 3091, type: 'icon'},
                        {id: 3040, type: 'icon'},
                        {id: 3092, type: 'icon'},
                        {id: 4459, type: 'icon'},
                        {id: 4460, type: 'icon'},
                        {id: 4461, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 5129, type: 'icon'},
                        {id: 365, type: 'icon'},
                        {id: 456, type: 'icon'},
                        {id: 452, type: 'icon'}
                    ]
                },
                {
                    background: 13,
                    leftItems: [
                        {id: 1193, type: 'icon'},
                        {id: 1194, type: 'icon'},
                        {id: 1110, type: 'icon'},
                        {id: 3004, type: 'icon'},
                        {id: 3030, type: 'icon'},
                        {id: 6031, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1505, type: 'icon'},
                        {id: 3145, type: 'icon'},
                        {id: 1504, type: 'icon'},
                        {id: 4755, type: 'icon'},
                        {id: 3141, type: 'icon'},
                        {id: 4754, type: 'icon'},
                        {id: 6141, type: 'icon'},
                        {id: 5053, type: 'icon'},
                        {id: 6140, type: 'icon'}
                    ]
                }
            ],
            party: [
                {
                    background: 1,
                    leftItems: [
                        {id: 1325, type: 'icon'},
                        {id: 1326, type: 'icon'},
                        {id: 3037, type: 'icon'},
                        {id: 5130, type: 'icon'},
                        {id: 4288, type: 'icon'},
                        {id: 4462, type: 'icon'},
                        {id: 3093, type: 'icon'},
                        {id: 5087, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1328, type: 'icon'},
                        {id: 1327, type: 'icon'},
                        {id: 4463, type: 'icon'},
                        {id: 4287, type: 'icon'},
                        {id: 5387, type: 'icon'}
                    ]
                },
                {
                    background: 4,
                    leftItems: [
                        {id: 482, type: 'icon'},
                        {id: 289, type: 'icon'},
                        {id: 3035, type: 'icon'},
                        {id: 483, type: 'icon'},
                        {id: 5011, type: 'icon'},
                        {id: 342, type: 'icon'},
                        {id: 4149, type: 'icon'},
                        {id: 241, type: 'icon'},
                        {id: 467, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1106, type: 'icon'},
                        {id: 2014, type: 'icon'},
                        {id: 4146, type: 'icon'},
                        {id: 3038, type: 'icon'},
                        {id: 4147, type: 'icon'},
                        {id: 4465, type: 'icon'},
                        {id: 1091, type: 'icon'},
                        {id: 3033, type: 'icon'},
                        {id: 4123, type: 'icon'}
                    ]
                },
                {
                    background: 2,
                    leftItems: [
                        {id: 4286, type: 'icon'},
                        {id: 471, type: 'icon'},
                        {id: 1105, type: 'icon'},
                        {id: 4145, type: 'icon'},
                        {id: 6010, type: 'icon'},
                        {id: 1026, type: 'icon'},
                        {id: 4041, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1203, type: 'icon'},
                        {id: 4283, type: 'icon'},
                        {id: 1204, type: 'icon'},
                        {id: 4284, type: 'icon'},
                        {id: 4285, type: 'icon'},
                        {id: 6144, type: 'icon'}
                    ]
                }
            ],
            returning: [
                {
                    background: 2,
                    leftItems: [
                        {id: 1726, type: 'icon'},
                        {id: 24234, type: 'icon'},
                        {id: 6245, type: 'icon'},
                        {id: 1955, type: 'icon'},
                        {id: 4996, type: 'icon'},
                        {id: 6146, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1205, type: 'icon'},
                        {id: 4283, type: 'icon'},
                        {id: 21065, type: 'icon'},
                        {id: 6013, type: 'icon'}
                    ]
                },
                {
                    background: 17,
                    leftItems: [
                        {id: 24001, type: 'icon'},
                        {id: 24233, type: 'icon'},
                        {id: 24334, type: 'icon'},
                        {id: 6210, type: 'icon'},
                        {id: 6244, type: 'icon'},
                        {id: 6277, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1958, type: 'icon'},
                        {id: 1324, type: 'icon'},
                        {id: 1957, type: 'icon'},
                        {id: 24237, type: 'icon'},
                        {id: 3092, type: 'icon'},
                        {id: 24236, type: 'icon'},
                        {id: 6247, type: 'icon'},
                        {id: 4461, type: 'icon'},
                        {id: 6246, type: 'icon'}
                    ]
                },
                {
                    background: 8,
                    leftItems: [
                        {id: 1936, type: 'icon'},
                        {id: 1937, type: 'icon'},
                        {id: 1939, type: 'icon'},
                        {id: 24215, type: 'icon'},
                        {id: 24216, type: 'icon'},
                        {id: 24217, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 3227, type: 'icon'},
                        {id: 3226, type: 'icon'},
                        {id: 3221, type: 'icon'},
                        {id: 3222, type: 'icon'},
                        {id: 5489, type: 'icon'},
                        {id: 5491, type: 'icon'}
                    ]
                }
            ],
            lastChance: [
                {
                    background: 1,
                    leftItems: [
                        {id: 21040, type: 'icon'},
                        {id: 24326, type: 'paper'},
                        {id: 6274, type: 'paper'}
                    ],
                    rightItems: [
                        {id: 1706, type: 'icon'},
                        {id: 4960, type: 'icon'},
                        {id: 3179, type: 'icon'},
                        {id: 6200, type: 'icon'}
                    ]
                },
                {
                    background: 10,
                    leftItems: [
                        {id: 21041, type: 'icon'},
                        {id: 21042, type: 'icon'},
                        {id: 4721, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 4723, type: 'icon'},
                        {id: 24236, type: 'paper'},
                        {id: 1957, type: 'icon'},
                        {id: 6246, type: 'icon'}
                    ]
                },
                {
                    background: 16,
                    leftItems: [
                        {id: 656, type: 'icon'},
                        {id: 136, type: 'icon'},
                        {id: 3004, type: 'icon'},
                        {id: 4964, type: 'icon'},
                        {id: 730, type: 'icon'},
                        {id: 6029, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 651, type: 'icon'},
                        {id: 2045, type: 'icon'},
                        {id: 3098, type: 'icon'},
                        {id: 4048, type: 'icon'},
                        {id: 731, type: 'icon'},
                        {id: 6081, type: 'icon'}
                    ]
                }
            ]
        }
    }

    create() {
        super.create()
        this.setCoins(this.shell.client.coins)
        this.loadFromJSON(this.catJson)
    }

    loadFromJSON(json) {
        this.releaseDate = new Date(json.releaseDate)
        this.pages = []

        this[`page${this.pages.length}`] = new FrontPage(this, 0, 0)
        this[`page${this.pages.length}`].loadPenguin(json.frontPenguin)
        this.pages.push(this[`page${this.pages.length}`])

        this[`page${this.pages.length}`] = new ColorsPage(this, 0, 0)
        this.pages.push(this[`page${this.pages.length}`])

        this[`page${this.pages.length}`] = new BackgroundsPage(this, 0, 0)
        this[`page${this.pages.length}`].setBackgrounds(json.backgrounds)
        this.pages.push(this[`page${this.pages.length}`])

        this[`page${this.pages.length}`] = new BasicItemsPage(this, 0, 0)
        this.pages.push(this[`page${this.pages.length}`])

        json.new.forEach((item) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(item, 'new')
            this.pages.push(this[`page${this.pages.length}`])
        })

        json.party.forEach((item) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(item, 'party')
            this.pages.push(this[`page${this.pages.length}`])
        })

        json.returning.forEach((item) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(item, 'returning')
            this.pages.push(this[`page${this.pages.length}`])
        })

        this[`page${this.pages.length}`] = new CustomHoodiePage(this, 0, 0)
        this.pages.push(this[`page${this.pages.length}`])

        json.lastChance.forEach((page) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(page, 'lastChance')
            this.pages.push(this[`page${this.pages.length}`])
        })

        this[`page${this.pages.length}`] = new FlagPage(this, 0, 0)
        this.pages.push(this[`page${this.pages.length}`])

        this[`page${this.pages.length}`] = new BackPage(this, 0, 0)
        this.pages.push(this[`page${this.pages.length}`])

        for (let page of this.pages) {
            this.pageContainer.add(page)
            page.visible = false
        }

        this.setPageVisible()
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS:\n${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

//export default ClothingCatalog
