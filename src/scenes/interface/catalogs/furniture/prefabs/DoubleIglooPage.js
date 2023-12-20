import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class DoubleIglooPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // background
        const background = scene.add.image(760, 480, 'furniturecatalog', 'pages')
        this.add(background)

        // bgImage
        const bgImage = scene.add.image(760, 480, '2')
        this.add(bgImage)

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

        // leftImage
        const leftImage = scene.add.image(395, 480, '2')
        this.add(leftImage)

        // rightImage
        const rightImage = scene.add.image(1125, 480, '2')
        this.add(rightImage)

        // ninepatchcontainer
        const ninepatchcontainer = scene.add.ninePatchContainer(386, 714, 450, 200, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer)

        // leftHeader
        const leftHeader = scene.add.text(314, 665, '', {})
        leftHeader.setOrigin(0.5, 0.5)
        leftHeader.text = 'Stage Igloo'
        leftHeader.setStyle({align: 'center', color: '#000000ff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold'})
        leftHeader.setWordWrapWidth(300)
        this.add(leftHeader)

        // leftDesc
        const leftDesc = scene.add.text(314, 735, '', {})
        leftDesc.setOrigin(0.5, 0.5)
        leftDesc.text = 'Act out classic plays or make up your own on this lavish stage!'
        leftDesc.setStyle({align: 'center', color: '#000000ff', fixedWidth: 250, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        leftDesc.setLineSpacing(3)
        leftDesc.setWordWrapWidth(250)
        this.add(leftDesc)

        // leftIcon
        const leftIcon = scene.add.image(510, 679, '2')
        leftIcon.scaleX = 0.4
        leftIcon.scaleY = 0.4
        this.add(leftIcon)

        // leftBuyBtn
        const leftBuyBtn = scene.add.sprite(509, 758, 'catalogs-master', 'buybtn')
        this.add(leftBuyBtn)

        // leftCost
        const leftCost = scene.add.text(507, 758, '', {})
        leftCost.setOrigin(0.5, 0.5)
        leftCost.text = '1500'
        leftCost.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '23px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(leftCost)

        // ninepatchcontainer_2
        const ninepatchcontainer_2 = scene.add.ninePatchContainer(1099, 714, 450, 200, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer_2)

        // rightHeader
        const rightHeader = scene.add.text(1027, 665, '', {})
        rightHeader.setOrigin(0.5, 0.5)
        rightHeader.text = 'Stage Igloo'
        rightHeader.setStyle({align: 'center', color: '#000000ff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold'})
        rightHeader.setWordWrapWidth(300)
        this.add(rightHeader)

        // rightDesc
        const rightDesc = scene.add.text(1027, 735, '', {})
        rightDesc.setOrigin(0.5, 0.5)
        rightDesc.text = 'Act out classic plays or make up your own on this lavish stage!'
        rightDesc.setStyle({align: 'center', color: '#000000ff', fixedWidth: 250, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        rightDesc.setLineSpacing(3)
        rightDesc.setWordWrapWidth(250)
        this.add(rightDesc)

        // rightIcon
        const rightIcon = scene.add.image(1223, 679, '2')
        rightIcon.scaleX = 0.4
        rightIcon.scaleY = 0.4
        this.add(rightIcon)

        // rightBuyBtn
        const rightBuyBtn = scene.add.sprite(1222, 758, 'catalogs-master', 'buybtn')
        this.add(rightBuyBtn)

        // rightCost
        const rightCost = scene.add.text(1220, 758, '', {})
        rightCost.setOrigin(0.5, 0.5)
        rightCost.text = '1500'
        rightCost.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '23px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(rightCost)

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        // leftBuyBtn (components)
        const leftBuyBtnButton = new Button(leftBuyBtn)
        leftBuyBtnButton.callback = () => this.buyLeft()

        // rightBuyBtn (components)
        const rightBuyBtnButton = new Button(rightBuyBtn)
        rightBuyBtnButton.callback = () => this.buyRight()

        this.background = background
        this.bgImage = bgImage
        this.middle = middle
        this.coins = coins
        this.leftImage = leftImage
        this.rightImage = rightImage
        this.leftHeader = leftHeader
        this.leftDesc = leftDesc
        this.leftIcon = leftIcon
        this.leftBuyBtn = leftBuyBtn
        this.leftCost = leftCost
        this.rightHeader = rightHeader
        this.rightDesc = rightDesc
        this.rightIcon = rightIcon
        this.rightBuyBtn = rightBuyBtn
        this.rightCost = rightCost

        /* START-USER-CTR-CODE */
        this.bgImage.setMask(this.scene.mask)
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Image} */
    bgImage
    /** @type {Phaser.GameObjects.Image} */
    middle
    /** @type {Phaser.GameObjects.Text} */
    coins
    /** @type {Phaser.GameObjects.Image} */
    leftImage
    /** @type {Phaser.GameObjects.Image} */
    rightImage
    /** @type {Phaser.GameObjects.Text} */
    leftHeader
    /** @type {Phaser.GameObjects.Text} */
    leftDesc
    /** @type {Phaser.GameObjects.Image} */
    leftIcon
    /** @type {Phaser.GameObjects.Sprite} */
    leftBuyBtn
    /** @type {Phaser.GameObjects.Text} */
    leftCost
    /** @type {Phaser.GameObjects.Text} */
    rightHeader
    /** @type {Phaser.GameObjects.Text} */
    rightDesc
    /** @type {Phaser.GameObjects.Image} */
    rightIcon
    /** @type {Phaser.GameObjects.Sprite} */
    rightBuyBtn
    /** @type {Phaser.GameObjects.Text} */
    rightCost

    /* START-USER-CODE */

    loadIgloos(background, leftIgloo, rightIgloo) {
        this.bgId = background
        this.leftIgloo = leftIgloo
        this.rightIgloo = rightIgloo

        this.shell.events.once(`textureLoaded:catalog/backgrounds/${background}`, () => this.showBackground())
        this.scene.iglooCatalogBackgroundLoader.loadBackground(background)

        this.shell.events.once(`textureLoaded:catalog/igloos/half/${leftIgloo}`, () => this.showLeftIgloo())
        this.scene.iglooCatalogIglooHalfPageLoader.loadIgloo(leftIgloo)

        this.shell.events.once(`textureLoaded:catalog/igloos/icon/${leftIgloo}`, () => this.onLeftIconLoaded())
        this.scene.iglooCatalogIglooIconLoader.loadIcon(leftIgloo)

        this.shell.events.once(`textureLoaded:catalog/igloos/half/${rightIgloo}`, () => this.showRightIgloo())
        this.scene.iglooCatalogIglooHalfPageLoader.loadIgloo(rightIgloo)

        this.shell.events.once(`textureLoaded:catalog/igloos/icon/${rightIgloo}`, () => this.onRightIconLoaded())
        this.scene.iglooCatalogIglooIconLoader.loadIcon(rightIgloo)
    }

    showBackground() {
        this.bgImage.setTexture(`catalog/backgrounds/${this.bgId}`)
    }

    showLeftIgloo() {
        this.leftImage.setTexture(`catalog/igloos/half/${this.leftIgloo}`)
        this.leftHeader.text = this.crumbs.igloos[this.leftIgloo].name
        this.leftDesc.text = this.crumbs.igloos[this.leftIgloo].description
        this.leftCost.text = this.crumbs.igloos[this.leftIgloo].cost
    }

    showRightIgloo() {
        this.rightImage.setTexture(`catalog/igloos/half/${this.rightIgloo}`)
        this.rightHeader.text = this.crumbs.igloos[this.rightIgloo].name
        this.rightDesc.text = this.crumbs.igloos[this.rightIgloo].description
        this.rightCost.text = this.crumbs.igloos[this.rightIgloo].cost
    }

    onLeftIconLoaded() {
        this.leftIcon.setTexture(`catalog/igloos/icon/${this.leftIgloo}`)
    }

    onRightIconLoaded() {
        this.rightIcon.setTexture(`catalog/igloos/icon/${this.rightIgloo}`)
    }

    buyLeft() {
        this.buyIgloo(this.leftIgloo)
    }

    buyRight() {
        this.buyIgloo(this.rightIgloo)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
