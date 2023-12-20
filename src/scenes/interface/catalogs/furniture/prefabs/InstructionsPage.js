import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class InstructionsPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // pages
        const pages = scene.add.image(760, 480, 'furniturecatalog', 'pages')
        this.add(pages)

        // background
        const background = scene.add.image(760, 480, 'furniturecatalog', 'instructions')
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

        // text1
        const text1 = scene.add.text(364, 119, '', {})
        text1.setOrigin(0.5, 0.5)
        text1.text = 'Make the most\nof your furniture!'
        text1.setStyle({align: 'center', color: '#9cd1f3ff', fontFamily: 'cpBurbankSmall', fontSize: '45px', fontStyle: 'bold', 'shadow.offsetX': 3, 'shadow.offsetY': 3, 'shadow.color': '#040227b0', 'shadow.fill': true})
        text1.setLineSpacing(-10)
        this.add(text1)

        // text2
        const text2 = scene.add.text(192, 403, '', {})
        text2.setOrigin(0.5, 0.5)
        text2.text = 'Go to edit mode\nand select an item.'
        text2.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '25px', fontStyle: 'bold', 'shadow.color': '#ffffff00'})
        text2.setLineSpacing(-3)
        this.add(text2)

        // text3
        const text3 = scene.add.text(563, 372, '', {})
        text3.setOrigin(0.5, 0.5)
        text3.text = 'Rotate!'
        text3.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '35px', fontStyle: 'bold', 'shadow.color': '#ffffff00'})
        text3.setLineSpacing(-3)
        this.add(text3)

        // text4
        const text4 = scene.add.text(323, 766, '', {})
        text4.setOrigin(0.5, 0.5)
        text4.text = 'Discover\ndifferent looks!'
        text4.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '35px', fontStyle: 'bold', 'shadow.color': '#ffffff00'})
        text4.setLineSpacing(-3)
        this.add(text4)

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        // text1 (components)
        const text1LocalisedString = new LocalisedString(text1)
        text1LocalisedString.id = 'igloocat-text1'

        // text2 (components)
        const text2LocalisedString = new LocalisedString(text2)
        text2LocalisedString.id = 'igloocat-text2'

        // text3 (components)
        const text3LocalisedString = new LocalisedString(text3)
        text3LocalisedString.id = 'igloocat-text3'

        // text4 (components)
        const text4LocalisedString = new LocalisedString(text4)
        text4LocalisedString.id = 'igloocat-text4'

        this.pages = pages
        this.background = background
        this.middle = middle
        this.coins = coins
        this.text1 = text1
        this.text2 = text2
        this.text3 = text3
        this.text4 = text4

        /* START-USER-CTR-CODE */
        this.background.setMask(scene.mask)
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
    /** @type {Phaser.GameObjects.Text} */
    text1
    /** @type {Phaser.GameObjects.Text} */
    text2
    /** @type {Phaser.GameObjects.Text} */
    text3
    /** @type {Phaser.GameObjects.Text} */
    text4

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
