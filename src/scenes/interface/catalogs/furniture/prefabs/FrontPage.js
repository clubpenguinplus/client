import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class FrontPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page1Bg
        const page1Bg = scene.add.image(760, 480, 'furniturecatalog', 'front')
        this.add(page1Bg)

        // titleText
        const titleText = scene.add.text(785, 153, '', {})
        titleText.setOrigin(0.5, 0.5)
        titleText.text = 'Furniture & Igloo Catalog'
        titleText.setStyle({align: 'center', color: '#d4fefdff', fixedWidth: 650, fontFamily: 'cpBurbankSmall', fontSize: '70px', fontStyle: 'bold italic'})
        titleText.setWordWrapWidth(450)
        this.add(titleText)

        // monthText
        const monthText = scene.add.text(785, 247, '', {})
        monthText.setOrigin(0.5, 0.5)
        monthText.text = 'December 2022'
        monthText.setStyle({align: 'center', color: '#d4fefdff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'italic'})
        this.add(monthText)

        // closebtn
        const closebtn = scene.add.image(1152, 32, 'constant', 'closebtn')
        this.add(closebtn)

        // june15
        const june15 = scene.add.image(760, 480, 'june15')
        this.add(june15)

        // nextPage
        const nextPage = scene.add.image(1094, 810, 'furniturecatalog', 'nextPage-btn')
        this.add(nextPage)

        // coins
        const coins = scene.add.text(635, 936, '', {})
        coins.setOrigin(0.5, 0.5)
        coins.text = 'Your Coins: 99999999'
        coins.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold italic', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(coins)

        // titleText (components)
        const titleTextLocalisedString = new LocalisedString(titleText)
        titleTextLocalisedString.id = 'furnitureCatalog'

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()

        this.page1Bg = page1Bg
        this.titleText = titleText
        this.monthText = monthText
        this.coins = coins

        /* START-USER-CTR-CODE */
        let r = new Date(this.releaseDate)
        let m = this.crumbs.getString(`month${r.getUTCMonth()}`)
        this.monthText.text = `${m} ${r.getUTCFullYear()}`
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page1Bg
    /** @type {Phaser.GameObjects.Text} */
    titleText
    /** @type {Phaser.GameObjects.Text} */
    monthText
    /** @type {Phaser.GameObjects.Text} */
    coins

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
