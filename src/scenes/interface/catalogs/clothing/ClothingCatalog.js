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
        const buttons = this.add.container(999, 798)
        buttons.visible = false

        // coinholder
        const coinholder = this.add.image(-115.478515625, 86.20628356933594, 'constant', 'coinholder')
        buttons.add(coinholder)

        // coins
        const coins = this.add.text(-190.478515625, 56.20628356933594, '', {})
        coins.angle = -7
        coins.text = 'Your Coins:\n100000'
        coins.setStyle({align: 'center', color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold italic'})
        buttons.add(coins)

        // lists
        const pages = []

        // blocker (components)
        new Interactive(blocker)

        this.blocker = blocker
        this.pageContainer = pageContainer
        this.buttons = buttons
        this.coins = coins
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {Phaser.GameObjects.Container} */
    pageContainer
    /** @type {Phaser.GameObjects.Container} */
    buttons
    /** @type {Phaser.GameObjects.Text} */
    coins
    /** @type {Array<any>} */
    pages

    /* START-USER-CODE */

    create() {
        super.create()
        this.setCoins(this.shell.client.coins)
        this.loadFromJSON({})
    }

    loadFromJSON(json) {
        json = {
            releaseDate: Date.now(),
            frontPenguin: 'penguin1',
            backgrounds: [901, 902, 903, 904, 905, 906, 907, 908],
            new: [
                {background: 1, leftItems: [101], rightItems: [102, 103]},
                {background: 2, leftItems: [104, 105, 106], rightItems: [107, 108, 109, 110]},
            ],
            party: [
                {background: 3, leftItems: [1806, 1807, 1808, 1809, 1810], rightItems: [1811, 1812, 1813, 1814, 1815, 1816]},
                {background: 4, leftItems: [1817, 1818, 1819, 1820, 1821, 1822, 1823], rightItems: [4503, 4504, 4505, 4506, 4507, 4508, 4509, 4510, 4511, 4512, 4513]},
            ],
            returning: [
                {background: 5, leftItems: [4321, 4322, 4323, 4324, 4325, 4326, 4327, 4328, 4329], rightItems: [4493, 4494, 4495, 4496, 4497, 4498, 4499, 4500, 4501, 4502]},
                {background: 6, leftItems: [1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831], rightItems: [5300, 5301, 5302, 5303, 5304, 5305, 5306, 5307, 5308, 5309, 5310, 5311]},
            ],
            lastChance: [
                {background: 7, leftItems: [1, 2, 3], rightItems: [4, 5, 6]},
                {background: 8, leftItems: [7, 8, 9], rightItems: [10, 11, 12]},
            ],
        }

        this.releaseDate = new Date(json.releaseDate)
        this.pages = []

        this[`page${this.pages.length}`] = new FrontPage(this, 0, 0)
        //this[`page${this.pages.length}`].loadPenguin(json.frontPenguin)
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
            this[`page${this.pages.length}`].loadFromJSON(item)
            this.pages.push(this[`page${this.pages.length}`])
        })

        json.party.forEach((item) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(item)
            this.pages.push(this[`page${this.pages.length}`])
        })

        json.returning.forEach((item) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(item)
            this.pages.push(this[`page${this.pages.length}`])
        })

        this[`page${this.pages.length}`] = new CustomHoodiePage(this, 0, 0)
        this.pages.push(this[`page${this.pages.length}`])

        json.lastChance.forEach((page) => {
            this[`page${this.pages.length}`] = new ItemsPage(this, 0, 0)
            this[`page${this.pages.length}`].loadFromJSON(page)
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
