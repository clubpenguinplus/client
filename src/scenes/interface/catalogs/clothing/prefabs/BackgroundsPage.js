import Page from './Page'
import Background from './Background'
import {SimpleButton, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class BackgroundsPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page2Bg
        const page2Bg = scene.add.image(760, 453, 'constant', 'backgroundsPage')
        this.add(page2Bg)

        // page2_header
        const page2_header = scene.add.text(260, 79, '', {})
        page2_header.setOrigin(0.5, 0.5)
        page2_header.text = 'Player card backgrounds for everyone'
        page2_header.setStyle({fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'bold italic'})
        page2_header.setWordWrapWidth(330)
        this.add(page2_header)

        // bgsPrice
        const bgsPrice = scene.add.text(171, 141, '', {})
        bgsPrice.setOrigin(0.5, 0.5)
        bgsPrice.text = '60     each!'
        bgsPrice.setStyle({color: '#9dc3fcff', fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'italic'})
        this.add(bgsPrice)

        // coinPng
        const coinPng = scene.add.image(157, 140, 'constant', 'coin')
        this.add(coinPng)

        // page2_header_1
        const page2_header_1 = scene.add.text(952, 84, '', {})
        page2_header_1.setOrigin(0.5, 0.5)
        page2_header_1.text = 'Player card backgrounds for everyone'
        page2_header_1.setStyle({fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'bold italic'})
        page2_header_1.setWordWrapWidth(330)
        this.add(page2_header_1)

        // bgsPrice_1
        const bgsPrice_1 = scene.add.text(863, 146, '', {})
        bgsPrice_1.setOrigin(0.5, 0.5)
        bgsPrice_1.text = '60     each!'
        bgsPrice_1.setStyle({color: '#9dc3fcff', fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'italic'})
        this.add(bgsPrice_1)

        // coinPng_1
        const coinPng_1 = scene.add.image(849, 145, 'constant', 'coin')
        this.add(coinPng_1)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.page2Bg = page2Bg
        this.page2_header = page2_header
        this.bgsPrice = bgsPrice
        this.coinPng = coinPng
        this.page2_header_1 = page2_header_1
        this.bgsPrice_1 = bgsPrice_1
        this.coinPng_1 = coinPng_1

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page2Bg
    /** @type {Phaser.GameObjects.Text} */
    page2_header
    /** @type {Phaser.GameObjects.Text} */
    bgsPrice
    /** @type {Phaser.GameObjects.Image} */
    coinPng
    /** @type {Phaser.GameObjects.Text} */
    page2_header_1
    /** @type {Phaser.GameObjects.Text} */
    bgsPrice_1
    /** @type {Phaser.GameObjects.Image} */
    coinPng_1

    /* START-USER-CODE */

    posArray = [
        {x: 295, y: 350},
        {x: 555, y: 350},
        {x: 295, y: 610},
        {x: 555, y: 610},
        {x: 975, y: 350},
        {x: 1235, y: 350},
        {x: 975, y: 610},
        {x: 1235, y: 610},
    ]

    setBackgrounds(bgArray) {
        for (let i = 0; i < bgArray.length; i++) {
            let bg = new Background(this.scene, this.posArray[i].x, this.posArray[i].y, bgArray[i])
            this.add(bg)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
