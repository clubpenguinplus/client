import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'
import IglooCatalogIglooFullPageLoader from '@engine/loaders/IglooCatalogIglooFullPageLoader'
import IglooCatalogIglooIconLoader from '@engine/loaders/IglooCatalogIglooIconLoader'

/* START OF COMPILED CODE */

export default class SingleIglooPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // background
        const background = scene.add.image(760, 480, 'furniturecatalog', 'pages')
        this.add(background)

        // igl
        const igl = scene.add.image(760, 480, '2')
        this.add(igl)

        // middle
        const middle = scene.add.image(755, 474, 'furniturecatalog', 'middle')
        this.add(middle)

        // nextPage
        const nextPage = scene.add.image(1425, 809, 'furniturecatalog', 'nextPage-btn')
        this.add(nextPage)

        // ninepatchcontainer
        const ninepatchcontainer = scene.add.ninePatchContainer(1171, 723, 450, 200, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer)

        // ninepatchcontainer_1
        const ninepatchcontainer_1 = scene.add.ninePatchContainer(1171, 722, 450, 200, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer_1)

        // header
        const header = scene.add.text(1099, 678, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'Stage Igloo'
        header.setStyle({align: 'center', color: '#000000ff', fixedWidth: 220, fontFamily: 'cpBurbankSmall', fontSize: '25px', fontStyle: 'bold'})
        header.setWordWrapWidth(220)
        this.add(header)

        // description
        const description = scene.add.text(1099, 742, '', {})
        description.setOrigin(0.5, 0.5)
        description.text = 'Act out classic plays or make up your own on this lavish stage!'
        description.setStyle({align: 'center', color: '#000000ff', fixedWidth: 220, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        description.setLineSpacing(3)
        description.setWordWrapWidth(220)
        this.add(description)

        // icon
        const icon = scene.add.image(1295, 688, '2')
        icon.scaleX = 0.4
        icon.scaleY = 0.4
        this.add(icon)

        // buyBtn
        const buyBtn = scene.add.sprite(1294, 767, 'catalogs-master', 'buybtn')
        this.add(buyBtn)

        // cost
        const cost = scene.add.text(1292, 767, '', {})
        cost.setOrigin(0.5, 0.5)
        cost.text = '1500'
        cost.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '23px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(cost)

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

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()

        // buyBtn (components)
        const buyBtnButton = new Button(buyBtn)
        buyBtnButton.callback = () => this.buy(this.id)

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.background = background
        this.igl = igl
        this.middle = middle
        this.header = header
        this.description = description
        this.icon = icon
        this.buyBtn = buyBtn
        this.cost = cost
        this.coins = coins

        /* START-USER-CTR-CODE */
        this.igl.setMask(scene.mask)
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Image} */
    igl
    /** @type {Phaser.GameObjects.Image} */
    middle
    /** @type {Phaser.GameObjects.Text} */
    header
    /** @type {Phaser.GameObjects.Text} */
    description
    /** @type {Phaser.GameObjects.Image} */
    icon
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn
    /** @type {Phaser.GameObjects.Text} */
    cost
    /** @type {Phaser.GameObjects.Text} */
    coins

    /* START-USER-CODE */

    loadIgloo(igloo) {
        this.iglooLoaded = false
        this.iconLoaded = false
        this.igloo = igloo
        let loader = new IglooCatalogIglooFullPageLoader(this.scene, this)
        loader.loadIgloo(igloo)
        loader = new IglooCatalogIglooIconLoader(this.scene, this)
        loader.loadIcon(igloo)
    }

    onIglooLoaded() {
        this.iglooLoaded = true
        this.checkLoaded()
    }

    onIconLoaded() {
        this.iconLoaded = true
        this.checkLoaded()
    }

    checkLoaded() {
        if (this.iglooLoaded && this.iconLoaded) {
            this.showIgloo()
        }
    }

    showIgloo() {
        this.igl.setTexture(`catalog/igloos/full/${this.igloo}`)
        this.icon.setTexture(`catalog/igloos/icon/${this.igloo}`)
        this.header.text = this.crumbs.igloos[this.igloo].name
        this.description.text = this.crumbs.igloos[this.igloo].description
        this.cost.text = this.crumbs.igloos[this.igloo].cost
    }

    buy() {
        this.buyIgloo(this.igloo)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
