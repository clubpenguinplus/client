import Page from './Page'
import {Button, SimpleButton} from '@components/components'
/* START OF COMPILED CODE */

export default class ColorsPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page2Bg
        const page2Bg = scene.add.image(760, 453, 'constant', 'colorsPage')
        this.add(page2Bg)

        // page2_header
        const page2_header = scene.add.text(189, 79, '', {})
        page2_header.setOrigin(0.5, 0.5)
        page2_header.text = 'Colors for\neveryone!'
        page2_header.setStyle({fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold italic'})
        this.add(page2_header)

        // colorsPrice
        const colorsPrice = scene.add.text(215, 141, '', {})
        colorsPrice.setOrigin(0.5, 0.5)
        colorsPrice.text = 'Only 20     each!'
        colorsPrice.setStyle({color: '#9dc3fcff', fontFamily: 'cpBurbankSmall', fontSize: '25px', fontStyle: 'italic'})
        this.add(colorsPrice)

        // coinPng
        const coinPng = scene.add.image(229, 140, 'jan22clothing', 'coin')
        this.add(coinPng)

        // blueHover
        const blueHover = scene.add.ellipse(299, 253, 93, 93)
        blueHover.lineWidth = 5
        this.add(blueHover)

        // greenHover
        const greenHover = scene.add.ellipse(425, 253, 93, 93)
        greenHover.lineWidth = 5
        this.add(greenHover)

        // pinkHover
        const pinkHover = scene.add.ellipse(551, 253, 93, 93)
        pinkHover.lineWidth = 5
        this.add(pinkHover)

        // peachHover
        const peachHover = scene.add.ellipse(552, 368, 93, 93)
        peachHover.lineWidth = 5
        this.add(peachHover)

        // brownHover
        const brownHover = scene.add.ellipse(425, 368, 93, 93)
        brownHover.lineWidth = 5
        this.add(brownHover)

        // purpleHover
        const purpleHover = scene.add.ellipse(298, 368, 93, 93)
        purpleHover.lineWidth = 5
        this.add(purpleHover)

        // lightBlueHover
        const lightBlueHover = scene.add.ellipse(299, 484, 93, 93)
        lightBlueHover.lineWidth = 5
        this.add(lightBlueHover)

        // redHover
        const redHover = scene.add.ellipse(299, 599, 93, 93)
        redHover.lineWidth = 5
        this.add(redHover)

        // orangeHover
        const orangeHover = scene.add.ellipse(425, 599, 93, 93)
        orangeHover.lineWidth = 5
        this.add(orangeHover)

        // limeHover
        const limeHover = scene.add.ellipse(425, 484, 93, 93)
        limeHover.lineWidth = 5
        this.add(limeHover)

        // cyanHover
        const cyanHover = scene.add.ellipse(553, 484, 93, 93)
        cyanHover.lineWidth = 5
        this.add(cyanHover)

        // yellowHover
        const yellowHover = scene.add.ellipse(552, 599, 93, 93)
        yellowHover.lineWidth = 5
        this.add(yellowHover)

        // whiteHover
        const whiteHover = scene.add.ellipse(552, 714, 93, 93)
        whiteHover.lineWidth = 5
        this.add(whiteHover)

        // blackHover
        const blackHover = scene.add.ellipse(299, 714, 93, 93)
        blackHover.lineWidth = 5
        this.add(blackHover)

        // darkGreenHover
        const darkGreenHover = scene.add.ellipse(425, 714, 93, 93)
        darkGreenHover.lineWidth = 5
        this.add(darkGreenHover)

        // prevPage
        const prevPage = scene.add.image(139, 729, 'constant', 'prevPage')
        this.add(prevPage)

        // nextPage
        const nextPage = scene.add.image(1383, 729, 'constant', 'nextPage')
        this.add(nextPage)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // blueHover (components)
        const blueHoverSimpleButton = new SimpleButton(blueHover)
        blueHoverSimpleButton.hoverCallback = () => this.onColorOver(this.blueHover)
        blueHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.blueHover)
        blueHoverSimpleButton.callback = () => this.buy(1)

        // greenHover (components)
        const greenHoverSimpleButton = new SimpleButton(greenHover)
        greenHoverSimpleButton.hoverCallback = () => this.onColorOver(this.greenHover)
        greenHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.greenHover)
        greenHoverSimpleButton.callback = () => this.buy(2)

        // pinkHover (components)
        const pinkHoverSimpleButton = new SimpleButton(pinkHover)
        pinkHoverSimpleButton.hoverCallback = () => this.onColorOver(this.pinkHover)
        pinkHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.pinkHover)
        pinkHoverSimpleButton.callback = () => this.buy(3)

        // peachHover (components)
        const peachHoverSimpleButton = new SimpleButton(peachHover)
        peachHoverSimpleButton.hoverCallback = () => this.onColorOver(this.peachHover)
        peachHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.peachHover)
        peachHoverSimpleButton.callback = () => this.buy(10)

        // brownHover (components)
        const brownHoverSimpleButton = new SimpleButton(brownHover)
        brownHoverSimpleButton.hoverCallback = () => this.onColorOver(this.brownHover)
        brownHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.brownHover)
        brownHoverSimpleButton.callback = () => this.buy(9)

        // purpleHover (components)
        const purpleHoverSimpleButton = new SimpleButton(purpleHover)
        purpleHoverSimpleButton.hoverCallback = () => this.onColorOver(this.purpleHover)
        purpleHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.purpleHover)
        purpleHoverSimpleButton.callback = () => this.buy(8)

        // lightBlueHover (components)
        const lightBlueHoverSimpleButton = new SimpleButton(lightBlueHover)
        lightBlueHoverSimpleButton.hoverCallback = () => this.onColorOver(this.lightBlueHover)
        lightBlueHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.lightBlueHover)
        lightBlueHoverSimpleButton.callback = () => this.buy(12)

        // redHover (components)
        const redHoverSimpleButton = new SimpleButton(redHover)
        redHoverSimpleButton.hoverCallback = () => this.onColorOver(this.redHover)
        redHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.redHover)
        redHoverSimpleButton.callback = () => this.buy(5)

        // orangeHover (components)
        const orangeHoverSimpleButton = new SimpleButton(orangeHover)
        orangeHoverSimpleButton.hoverCallback = () => this.onColorOver(this.orangeHover)
        orangeHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.orangeHover)
        orangeHoverSimpleButton.callback = () => this.buy(6)

        // limeHover (components)
        const limeHoverSimpleButton = new SimpleButton(limeHover)
        limeHoverSimpleButton.hoverCallback = () => this.onColorOver(this.limeHover)
        limeHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.limeHover)
        limeHoverSimpleButton.callback = () => this.buy(13)

        // cyanHover (components)
        const cyanHoverSimpleButton = new SimpleButton(cyanHover)
        cyanHoverSimpleButton.hoverCallback = () => this.onColorOver(this.cyanHover)
        cyanHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.cyanHover)
        cyanHoverSimpleButton.callback = () => this.buy(15)

        // yellowHover (components)
        const yellowHoverSimpleButton = new SimpleButton(yellowHover)
        yellowHoverSimpleButton.hoverCallback = () => this.onColorOver(this.yellowHover)
        yellowHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.yellowHover)
        yellowHoverSimpleButton.callback = () => this.buy(7)

        // whiteHover (components)
        const whiteHoverSimpleButton = new SimpleButton(whiteHover)
        whiteHoverSimpleButton.hoverCallback = () => this.onColorOver(this.whiteHover)
        whiteHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.whiteHover)
        whiteHoverSimpleButton.callback = () => this.buy(16)

        // blackHover (components)
        const blackHoverSimpleButton = new SimpleButton(blackHover)
        blackHoverSimpleButton.hoverCallback = () => this.onColorOver(this.blackHover)
        blackHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.blackHover)
        blackHoverSimpleButton.callback = () => this.buy(4)

        // darkGreenHover (components)
        const darkGreenHoverSimpleButton = new SimpleButton(darkGreenHover)
        darkGreenHoverSimpleButton.hoverCallback = () => this.onColorOver(this.darkGreenHover)
        darkGreenHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.darkGreenHover)
        darkGreenHoverSimpleButton.callback = () => this.buy(11)

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

        this.page2Bg = page2Bg
        this.page2_header = page2_header
        this.colorsPrice = colorsPrice
        this.coinPng = coinPng
        this.blueHover = blueHover
        this.greenHover = greenHover
        this.pinkHover = pinkHover
        this.peachHover = peachHover
        this.brownHover = brownHover
        this.purpleHover = purpleHover
        this.lightBlueHover = lightBlueHover
        this.redHover = redHover
        this.orangeHover = orangeHover
        this.limeHover = limeHover
        this.cyanHover = cyanHover
        this.yellowHover = yellowHover
        this.whiteHover = whiteHover
        this.blackHover = blackHover
        this.darkGreenHover = darkGreenHover

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page2Bg
    /** @type {Phaser.GameObjects.Text} */
    page2_header
    /** @type {Phaser.GameObjects.Text} */
    colorsPrice
    /** @type {Phaser.GameObjects.Image} */
    coinPng
    /** @type {Phaser.GameObjects.Ellipse} */
    blueHover
    /** @type {Phaser.GameObjects.Ellipse} */
    greenHover
    /** @type {Phaser.GameObjects.Ellipse} */
    pinkHover
    /** @type {Phaser.GameObjects.Ellipse} */
    peachHover
    /** @type {Phaser.GameObjects.Ellipse} */
    brownHover
    /** @type {Phaser.GameObjects.Ellipse} */
    purpleHover
    /** @type {Phaser.GameObjects.Ellipse} */
    lightBlueHover
    /** @type {Phaser.GameObjects.Ellipse} */
    redHover
    /** @type {Phaser.GameObjects.Ellipse} */
    orangeHover
    /** @type {Phaser.GameObjects.Ellipse} */
    limeHover
    /** @type {Phaser.GameObjects.Ellipse} */
    cyanHover
    /** @type {Phaser.GameObjects.Ellipse} */
    yellowHover
    /** @type {Phaser.GameObjects.Ellipse} */
    whiteHover
    /** @type {Phaser.GameObjects.Ellipse} */
    blackHover
    /** @type {Phaser.GameObjects.Ellipse} */
    darkGreenHover

    /* START-USER-CODE */

    onColorOver(color) {
        color.isStroked = true
    }

    onColorOut(color) {
        color.isStroked = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
