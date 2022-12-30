import Page from './Page'
import Item from './Item'
import {SimpleButton, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class ItemsPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // background
        const background = scene.add.image(760, 453, 'constant', 'clothingPage0001')
        this.add(background)

        // header
        const header = scene.add.text(227, 79, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'New items this month'
        header.setStyle({fixedWidth: 270, fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'bold italic'})
        header.setWordWrapWidth(270)
        this.add(header)

        // prevPage
        const prevPage = scene.add.image(139, 729, 'constant', 'prevPage')
        this.add(prevPage)

        // nextPage
        const nextPage = scene.add.image(1383, 729, 'constant', 'nextPage')
        this.add(nextPage)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.spriteName = 'prevPage'
        prevPageButton.callback = () => this.prevPage()

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.spriteName = 'nextPage'
        nextPageButton.callback = () => this.nextPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.background = background
        this.header = header

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Text} */
    header

    /* START-USER-CODE */

    loadFromJSON(json) {
        this.background.setFrame(`clothingPage${this.fourDigits(json.background)}`)
        json.leftItems.forEach((item, index) => {
            const itemObject = new Item(this.scene, 0, 0, item)
            itemObject.x = 190 + 300 * index
            itemObject.y = 200
            this.add(itemObject)
        })
        json.rightItems.forEach((item, index) => {
            const itemObject = new Item(this.scene, 0, 0, item)
            itemObject.x = 190 + 300 * index
            itemObject.y = 500
            this.add(itemObject)
        })
    }

    fourDigits(number) {
        number = number.toString()
        while (number.length < 4) {
            number = '0' + number
        }
        return number
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
