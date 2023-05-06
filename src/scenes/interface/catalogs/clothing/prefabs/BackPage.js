import Page from './Page'
import {Button, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class BackPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page1Bg
        const page1Bg = scene.add.image(760, 454, 'constant', 'back')
        this.add(page1Bg)

        // closebtn
        const closebtn = scene.add.image(1134, 52, 'constant', 'closebtn')
        this.add(closebtn)

        // prevPage
        const prevPage = scene.add.image(519, 731, 'constant', 'prevPage')
        this.add(prevPage)

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        this.page1Bg = page1Bg

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page1Bg

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
