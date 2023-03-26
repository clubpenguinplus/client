import {SimpleButton, Button, Interactive, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

import FrontPage from './prefabs/FrontPage'
import ColorsPage from './prefabs/ColorsPage'
import BackgroundsPage from './prefabs/BackgroundsPage'
import BasicItemsPage from './prefabs/BasicItemsPage'
import CustomHoodiePage from './prefabs/CustomHoodiePage'
import FlagPage from './prefabs/FlagPage'
import BackPage from './prefabs/BackPage'

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
        this.load.pack('clothingpack', 'client/media/interface/catalogs/clothing/clothingpack.json')
    }

    /** @returns {void} */
    _create() {
        // blocker
        const blocker = this.add.rectangle(760, 480, 1520, 960)

        // container
        const container = this.add.container(0, 0)

        // page20
        const page20 = new BackPage(this, 0, 0)
        page20.visible = false
        container.add(page20)

        // page19
        const page19 = new FlagPage(this, 0, 0)
        page19.visible = false
        container.add(page19)

        // page14
        const page14 = new CustomHoodiePage(this, 0, 1)
        page14.visible = false
        container.add(page14)

        // page4
        const page4 = new BasicItemsPage(this, 0, 1)
        page4.visible = false
        container.add(page4)

        // page3
        const page3 = new BackgroundsPage(this, 0, 0)
        page3.visible = false
        container.add(page3)

        // page2
        const page2 = new ColorsPage(this, 0, 0)
        page2.visible = false
        container.add(page2)

        // page1
        const page1 = new FrontPage(this, 0, 0)
        page1.visible = true
        container.add(page1)

        // buttons
        const buttons = this.add.container(999, 798)
        buttons.visible = false
        container.add(buttons)

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
        const pages = [page1, page2, page3, page4, page14, page19, page20]

        // blocker (components)
        new Interactive(blocker)

        this.blocker = blocker
        this.page20 = page20
        this.page19 = page19
        this.page14 = page14
        this.page4 = page4
        this.page3 = page3
        this.page2 = page2
        this.page1 = page1
        this.buttons = buttons
        this.coins = coins
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {BackPage} */
    page20
    /** @type {FlagPage} */
    page19
    /** @type {CustomHoodiePage} */
    page14
    /** @type {BasicItemsPage} */
    page4
    /** @type {BackgroundsPage} */
    page3
    /** @type {ColorsPage} */
    page2
    /** @type {FrontPage} */
    page1
    /** @type {Phaser.GameObjects.Container} */
    buttons
    /** @type {Phaser.GameObjects.Text} */
    coins
    /** @type {Array<FrontPage|ColorsPage|BackgroundsPage|BasicItemsPage|CustomHoodiePage|FlagPage|BackPage>} */
    pages

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.setCoins(this.shell.client.coins)
    }

    // Hoodie

    onCustomHoodieOver(button) {
        button.alpha = 1
    }

    onCustomHoodieOut(button) {
        button.alpha = 0.01
    }

    color = 'black'
    pattern = 'fade'
    hoodie = 4495

    changeColor(newColor) {
        this.color = newColor
        this.changeHoodie()
    }

    changePattern(newPattern) {
        this.pattern = newPattern
        this.changeHoodie()
    }

    changeHoodie() {
        if (this.color == 'black') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0001')
                this.hoodie = 4495
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0002')
                this.hoodie = 4582
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0003')
                this.hoodie = 4583
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0004')
                this.hoodie = 4584
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0005')
                this.hoodie = 4585
            }
        } else if (this.color == 'white') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0006')
                this.hoodie = 4500
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0007')
                this.hoodie = 4586
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0008')
                this.hoodie = 4587
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0009')
                this.hoodie = 4588
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0010')
                this.hoodie = 4589
            }
        } else if (this.color == 'yellow') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0011')
                this.hoodie = 4591
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0012')
                this.hoodie = 4590
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0013')
                this.hoodie = 4592
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0014')
                this.hoodie = 4593
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0015')
                this.hoodie = 4594
            }
        } else if (this.color == 'orange') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0016')
                this.hoodie = 4596
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0017')
                this.hoodie = 4595
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0018')
                this.hoodie = 4597
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0019')
                this.hoodie = 4598
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0020')
                this.hoodie = 4599
            }
        } else if (this.color == 'red') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0021')
                this.hoodie = 4601
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0022')
                this.hoodie = 4600
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0023')
                this.hoodie = 4602
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0024')
                this.hoodie = 4603
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0025')
                this.hoodie = 4604
            }
        }
    }

    buyHoodie() {
        this.buy(this.hoodie)
    }

    onColorOver(color) {
        color.isStroked = true
    }

    onColorOut(color) {
        color.isStroked = false
    }

    rollover(frame) {
        this.rollOver.setFrame(frame)
    }

    onBgOver(button) {
        button.fillAlpha = 0.2
    }

    onBgOut(button) {
        button.fillAlpha = 0.01
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

// You can write more code here
