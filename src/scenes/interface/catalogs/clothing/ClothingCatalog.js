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
            releaseDate: '2023-09-01',
            frontPenguin: 'pink-starlight-springtime',
            backgrounds: [901, 985, 9275, 904, 905, 926, 907, 908],
            new: [
                {
                    background: 1,
                    leftItems: [
                        {id: 1690, type: 'icon'},
                        {id: 1689, type: 'icon'},
                        {id: 1655, type: 'icon'},
                        {id: 4945, type: 'paper'},
                        {id: 4944, type: 'paper'},
                        {id: 4908, type: 'paper'},
                        {id: 5349, type: 'paper'},
                        {id: 3215, type: 'icon'},
                        {id: 6155, type: 'paper'}
                    ],
                    rightItems: [
                        {id: 1657, type: 'icon'},
                        {id: 4909, type: 'paper'},
                        {id: 6181, type: 'icon'},
                        {id: 1227, type: 'icon'},
                        {id: 24194, type: 'paper'},
                        {id: 6109, type: 'paper'},
                        {id: 417, type: 'paper'},
                        {id: 243, type: 'icon'}
                    ],
                    comments: 'the cool page'
                },
                {
                    background: 16,
                    leftItems: [
                        {id: 1007, type: 'icon'},
                        {id: 3004, type: 'icon'},
                        {id: 1911, type: 'icon'},
                        {id: 4311, type: 'paper'},
                        {id: 24196, type: 'paper'},
                        {id: 352, type: 'icon'},
                        {id: 6233, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 24199, type: 'icon'},
                        {id: 21075, type: 'icon'},
                        {id: 175, type: 'icon'},
                        {id: 106, type: 'icon'}
                    ],
                    comments: 'requested items'
                },
                {
                    background: 4,
                    leftItems: [
                        {id: 3227, type: 'icon'},
                        {id: 3225, type: 'icon'},
                        {id: 3226, type: 'icon'},
                        {id: 3221, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 3222, type: 'icon'},
                        {id: 5489, type: 'icon'},
                        {id: 5506, type: 'icon'},
                        {id: 5491, type: 'icon'}
                    ],
                    comments: 'nov2014 assorted items'
                },
                {
                    background: 10,
                    leftItems: [
                        {id: 1125, type: 'icon'},
                        {id: 101, type: 'icon'},
                        {id: 214, type: 'icon'},
                        {id: 294, type: 'icon'},
                        {id: 334, type: 'icon'},
                        {id: 358, type: 'icon'},
                        {id: 423, type: 'icon'},
                        {id: 261, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1040, type: 'icon'},
                        {id: 119, type: 'icon'},
                        {id: 3015, type: 'icon'},
                        {id: 4065, type: 'icon'},
                        {id: 323, type: 'icon'},
                        {id: 6015, type: 'icon'}
                    ],
                    comments: 'fancy schmancy'
                },
                {
                    background: 20,
                    leftItems: [
                        {id: 446, type: 'icon'},
                        {id: 103, type: 'icon'},
                        {id: 172, type: 'icon'},
                        {id: 265, type: 'icon'},
                        {id: 346, type: 'icon'},
                        {id: 5196, type: 'icon'},
                        {id: 351, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 24280, type: 'paper'},
                        {id: 201, type: 'icon'},
                        {id: 202, type: 'icon'},
                        {id: 4808, type: 'paper'},
                        {id: 366, type: 'icon'}
                    ],
                    comments: 'my page (the jeff the rock page :trol:)'
                },
                {
                    background: 2,
                    leftItems: [
                        {id: 221, type: 'icon'},
                        {id: 4046, type: 'icon'},
                        {id: 222, type: 'icon'},
                        {id: 223, type: 'icon'},
                        {id: 4108, type: 'icon'},
                        {id: 4009, type: 'icon'},
                        {id: 4259, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 3109, type: 'icon'},
                        {id: 3111, type: 'icon'},
                        {id: 3115, type: 'icon'},
                        {id: 3112, type: 'icon'},
                        {id: 3078, type: 'icon'},
                        {id: 3110, type: 'icon'},
                        {id: 3114, type: 'icon'},
                        {id: 3108, type: 'icon'},
                        {id: 3113, type: 'icon'}
                    ],
                    comments: 'hoodies n boas'
                },
                {
                    background: 18,
                    leftItems: [
                        {id: 176, type: 'icon'},
                        {id: 187, type: 'icon'},
                        {id: 167, type: 'icon'},
                        {id: 188, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 3238, type: 'icon'},
                        {id: 3005, type: 'icon'},
                        {id: 189, type: 'icon'},
                        {id: 177, type: 'icon'}
                    ],
                    comments: 'ties'
                },
                {
                    background: 16,
                    leftItems: [
                        {id: 131, type: 'icon'},
                        {id: 139, type: 'icon'},
                        {id: 135, type: 'icon'},
                        {id: 132, type: 'icon'},
                        {id: 382, type: 'icon'},
                        {id: 367, type: 'icon'}
                    ],
                    rightItems: [
                        {id: 1663, type: 'icon'},
                        {id: 4199, type: 'icon'},
                        {id: 21090, type: 'paper'},
                        {id: 763, type: 'icon'},
                        {id: 239, type: 'icon'},
                        {id: 364, type: 'icon'},
                        {id: 362, type: 'icon'}
                    ],
                    comments: 'snorkels and tourdude'
                }
            ],
            party: [],
            returning: [],
            lastChance: []
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
