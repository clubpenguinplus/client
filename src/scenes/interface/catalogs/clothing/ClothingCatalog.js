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
                {background: 1, leftItems: [1690, 1689, 1655, 4945, 4944, 4908, 5349, 3215, 6155], rightItems: [1657, 4909, 6181, 1227, 24194, 6109, 417, 243], comments: 'the cool page'},
                {background: 16, leftItems: [1007, 3004, 1911, 4311, 24196, 352, 6233], rightItems: [24199], comments: 'agentg'},
                {background: 4, leftItems: [3227, 3225, 3226, 3221], rightItems: [3222, 5489, 5506, 5491], comments: 'nov2014 assorted items'},
                {background: 10, leftItems: [1125, 101, 214, 294, 334, 358, 423, 261], rightItems: [1040, 119, 3015, 4065, 323, 6015], comments: 'fancy schmancy'},
                {background: 20, leftItems: [446, 103, 172, 265, 346, 5196, 351], rightItems: [24280, 201, 202, 4808, 366], comments: 'my page (the jeff the rock page :trol:)'},
                {background: 2, leftItems: [221, 4046, 222, 223, 4108, 4009, 4259], rightItems: [3109, 3111, 3115, 3112, 3078, 3110, 3114, 3108, 3113], comments: 'hoodies n boas'},
                {background: 18, leftItems: [176, 187, 167, 188], rightItems: [3238, 3005, 189, 177], comments: 'ties'},
                {background: 16, leftItems: [131, 139, 135, 132, 382, 367], rightItems: [1663, 4199, 21090, 763, 239, 364, 362], comments: 'snorkels and tourdude'}
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
