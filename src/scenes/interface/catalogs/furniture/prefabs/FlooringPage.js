import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'
import IglooCatalogLocationLoader from '@engine/loaders/IglooCatalogLocationLoader'

/* START OF COMPILED CODE */

export default class LocationPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // background
        const background = scene.add.image(760, 480, 'furniturecatalog', 'pages')
        this.add(background)

        // loc
        const loc = scene.add.image(760, 480, '2')
        this.add(loc)

        // middle
        const middle = scene.add.image(755, 474, 'furniturecatalog', 'middle')
        this.add(middle)

        // nextPage
        const nextPage = scene.add.image(1425, 809, 'furniturecatalog', 'nextPage-btn')
        this.add(nextPage)

        // ninepatchcontainer
        const ninepatchcontainer = scene.add.ninePatchContainer(365, 751, 450, 250, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer)

        // ninepatchcontainer_1
        const ninepatchcontainer_1 = scene.add.ninePatchContainer(365, 750, 450, 250, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer_1)

        // header
        const header = scene.add.text(365, 698, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'Beach'
        header.setStyle({align: 'center', color: '#000000ff', fixedWidth: 450, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        header.setWordWrapWidth(400)
        this.add(header)

        // description
        const description = scene.add.text(365, 762, '', {})
        description.setOrigin(0.5, 0.5)
        description.text = 'Soak up the sun on\nyour beach property!'
        description.setStyle({align: 'center', color: '#000000ff', fixedWidth: 450, fontFamily: 'cpBurbankSmall', fontSize: '25px', maxLines: 2})
        description.setLineSpacing(5)
        description.setWordWrapWidth(350)
        this.add(description)

        // buyBtn
        const buyBtn = scene.add.sprite(365, 834, 'catalogs-master', 'buybtn')
        this.add(buyBtn)

        // cost
        const cost = scene.add.text(363, 834, '', {})
        cost.setOrigin(0.5, 0.5)
        cost.text = '3500'
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
        this.loc = loc
        this.middle = middle
        this.header = header
        this.description = description
        this.buyBtn = buyBtn
        this.cost = cost
        this.coins = coins

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Image} */
    loc
    /** @type {Phaser.GameObjects.Image} */
    middle
    /** @type {Phaser.GameObjects.Text} */
    header
    /** @type {Phaser.GameObjects.Text} */
    description
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn
    /** @type {Phaser.GameObjects.Text} */
    cost
    /** @type {Phaser.GameObjects.Text} */
    coins

    /* START-USER-CODE */

    loadLocation(location) {
        this.visible = false
        this.location = location
        let loader = new IglooCatalogLocationLoader(this.scene, this)
        loader.loadLocation(location)
    }

    showLocation() {
        this.loc.setTexture(`catalog/locations/${this.location}`)
        this.header.text = this.crumbs.locations[this.location].name
        this.description.text = this.crumbs.locations[this.location].description
        this.cost.text = this.crumbs.locations[this.location].cost
    }

    buy() {
        this.buyLocation(this.location)
    }

    setButtonsVisible() {}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
