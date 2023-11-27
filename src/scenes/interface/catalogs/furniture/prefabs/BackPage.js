import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class BackPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // background
        const background = scene.add.image(760, 480, 'furniturecatalog', 'back')
        this.add(background)

        // prevPage
        const prevPage = scene.add.image(502, 808, 'furniturecatalog', 'prevPage-btn')
        this.add(prevPage)

        // closebtn
        const closebtn = scene.add.image(1162, 40, 'main', 'white-x')
        closebtn.scaleX = 0.666667
        closebtn.scaleY = 0.666667
        this.add(closebtn)

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.background = background

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
