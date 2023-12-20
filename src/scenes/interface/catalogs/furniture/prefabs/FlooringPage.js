import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

import FlooringItem from './FlooringItem'

/* START OF COMPILED CODE */

export default class FlooringPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // pages
        const pages = scene.add.image(760, 480, 'furniturecatalog', 'pages')
        this.add(pages)

        // background
        const background = scene.add.image(760, 480, 'catalog/backgrounds/6')
        this.add(background)

        // middle
        const middle = scene.add.image(755, 474, 'furniturecatalog', 'middle')
        this.add(middle)

        // nextPage
        const nextPage = scene.add.image(1425, 809, 'furniturecatalog', 'nextPage-btn')
        this.add(nextPage)

        // coins
        const coins = scene.add.text(967, 937, '', {})
        coins.setOrigin(0.5, 0.5)
        coins.text = 'Your Coins: 99999999'
        coins.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold italic', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(coins)

        // prevPage
        const prevPage = scene.add.image(86, 809, 'furniturecatalog', 'prevPage-btn')
        this.add(prevPage)

        // closebtn
        const closebtn = scene.add.image(1489, 25, 'main', 'white-x')
        closebtn.scaleX = 0.666667
        closebtn.scaleY = 0.666667
        this.add(closebtn)

        // flooringItem
        const flooringItem = new FlooringItem(scene, 222, 290)
        this.add(flooringItem)

        // flooringItem_1
        const flooringItem_1 = new FlooringItem(scene, 222, 621)
        this.add(flooringItem_1)

        // flooringItem_2
        const flooringItem_2 = new FlooringItem(scene, 540, 621)
        this.add(flooringItem_2)

        // flooringItem_3
        const flooringItem_3 = new FlooringItem(scene, 540, 290)
        this.add(flooringItem_3)

        // flooringItem_4
        const flooringItem_4 = new FlooringItem(scene, 1291, 621)
        this.add(flooringItem_4)

        // flooringItem_5
        const flooringItem_5 = new FlooringItem(scene, 1291, 290)
        this.add(flooringItem_5)

        // flooringItem_6
        const flooringItem_6 = new FlooringItem(scene, 973, 290)
        this.add(flooringItem_6)

        // flooringItem_7
        const flooringItem_7 = new FlooringItem(scene, 973, 621)
        this.add(flooringItem_7)

        // lists
        const flooringItems = [flooringItem, flooringItem_3, flooringItem_1, flooringItem_2, flooringItem_6, flooringItem_5, flooringItem_7, flooringItem_4]

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.pages = pages
        this.background = background
        this.middle = middle
        this.coins = coins
        this.flooringItems = flooringItems

        /* START-USER-CTR-CODE */
        this.background.setMask(this.scene.mask)
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    pages
    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Image} */
    middle
    /** @type {Phaser.GameObjects.Text} */
    coins
    /** @type {FlooringItem[]} */
    flooringItems

    /* START-USER-CODE */

    loadFlooring(flooringList) {
        this.flooringItems.forEach((item, index) => {
            item.loadIcon(flooringList[index])
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
