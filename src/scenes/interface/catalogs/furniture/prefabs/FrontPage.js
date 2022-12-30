import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class FrontPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page1Bg
        const page1Bg = scene.add.image(760, 454, 'constant', 'front')
        this.add(page1Bg)

        // titleText
        const titleText = scene.add.text(785, 98, '', {})
        titleText.setOrigin(0.5, 0.5)
        titleText.text = 'Penguin Style'
        titleText.setStyle({align: 'center', fixedWidth: 650, fontFamily: 'Burbank Small', fontSize: '80px', fontStyle: 'bold italic'})
        this.add(titleText)

        // monthText
        const monthText = scene.add.text(833, 158, '', {})
        monthText.setOrigin(0.5, 0.5)
        monthText.text = 'December 2022'
        monthText.setStyle({align: 'center', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'italic'})
        this.add(monthText)

        // closeBtn_1
        const closeBtn_1 = scene.add.ellipse(1124, 39, 50, 50)
        closeBtn_1.fillColor = 2551787
        closeBtn_1.fillAlpha = 0.5
        this.add(closeBtn_1)

        // nextPage
        const nextPage = scene.add.image(1063, 729, 'constant', 'nextPage')
        this.add(nextPage)

        // closebtn
        const closebtn = scene.add.image(1118, 39, 'constant', 'closebtn')
        this.add(closebtn)

        // titleText (components)
        const titleTextLocalisedString = new LocalisedString(titleText)
        titleTextLocalisedString.id = 'penguinStyle'

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.spriteName = 'nextPage'
        nextPageButton.callback = () => this.nextPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.page1Bg = page1Bg
        this.titleText = titleText
        this.monthText = monthText
        this.closeBtn_1 = closeBtn_1

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
    /** @type {Phaser.GameObjects.Ellipse} */
    closeBtn_1

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
