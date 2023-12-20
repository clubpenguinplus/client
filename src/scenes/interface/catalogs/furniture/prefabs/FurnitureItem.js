import BaseContainer from '@scenes/base/BaseContainer'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class FurnitureItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // ninepatchcontainer
        const ninepatchcontainer = scene.add.ninePatchContainer(0, 0, 275, 350, 'furniturecatalog', 'nineslice')
        this.add(ninepatchcontainer)

        // header
        const header = scene.add.text(0, 68, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'Granite Top Double Cabinet'
        header.setStyle({align: 'center', color: '#000000ff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '22px', fontStyle: 'bold'})
        header.setLineSpacing(-2)
        header.setWordWrapWidth(200)
        this.add(header)

        // buyBtn
        const buyBtn = scene.add.sprite(0, 121, 'catalogs-master', 'buybtn')
        this.add(buyBtn)

        // cost
        const cost = scene.add.text(-2, 121, '', {})
        cost.setOrigin(0.5, 0.5)
        cost.text = '125'
        cost.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '23px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(cost)

        // icon
        const icon = scene.add.image(0, -42, '2')
        this.add(icon)

        // buyBtn (components)
        const buyBtnButton = new Button(buyBtn)
        buyBtnButton.callback = () => this.buy(this.id)

        this.ninepatchcontainer = ninepatchcontainer
        this.header = header
        this.buyBtn = buyBtn
        this.cost = cost
        this.icon = icon

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {NinePatchContainer} */
    ninepatchcontainer
    /** @type {Phaser.GameObjects.Text} */
    header
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn
    /** @type {Phaser.GameObjects.Text} */
    cost
    /** @type {Phaser.GameObjects.Image} */
    icon

    /* START-USER-CODE */

    init(data) {
        this.id = data.id
        this.size = data.size
        this.btnPos = data.btnPos

        this.header.text = this.crumbs.furniture[data.id].name
        this.cost.text = this.crumbs.furniture[data.id].cost

        this.loadIcon(data.id, this.size != 'quarter' ? '@5x' : '@2.5x')

        switch (this.size) {
            case 'quarter':
                this.ninepatchcontainer.resize(275, 350)
                this.icon.scale = 1
                if (this.btnPos == 'bottom') {
                    this.icon.x = 0
                    this.icon.y = -42
                    this.header.x = 0
                    this.header.y = 68
                    this.buyBtn.x = 0
                    this.buyBtn.y = 121
                    this.cost.x = 0
                    this.cost.y = 121
                } else if (this.btnPos == 'top') {
                    this.icon.x = 0
                    this.icon.y = 42
                    this.header.x = 0
                    this.header.y = -121
                    this.buyBtn.x = 0
                    this.buyBtn.y = -68
                    this.cost.x = 0
                    this.cost.y = -68
                } else {
                    console.warn('Invalid btnPos for quarter furniture item')
                }
                break
            case 'half':
                this.ninepatchcontainer.resize(600, 350)
                this.icon.scale = 0.75
                if (this.btnPos == 'bottom') {
                    this.icon.x = 0
                    this.icon.y = -42
                    this.header.x = 0
                    this.header.y = 88
                    this.buyBtn.x = 0
                    this.buyBtn.y = 131
                    this.cost.x = 0
                    this.cost.y = 131
                } else if (this.btnPos == 'top') {
                    this.icon.x = 0
                    this.icon.y = 42
                    this.header.x = 0
                    this.header.y = -131
                    this.buyBtn.x = 0
                    this.buyBtn.y = -88
                    this.cost.x = 0
                    this.cost.y = -88
                } else if (this.btnPos == 'right') {
                    this.icon.x = -120
                    this.icon.y = 0
                    this.header.x = 150
                    this.header.y = -25
                    this.buyBtn.x = 150
                    this.buyBtn.y = 25
                    this.cost.x = 150
                    this.cost.y = 25
                } else if (this.btnPos == 'left') {
                    this.icon.x = 120
                    this.icon.y = 0
                    this.header.x = -150
                    this.header.y = -25
                    this.buyBtn.x = -150
                    this.buyBtn.y = 25
                    this.cost.x = -150
                    this.cost.y = 25
                }
                break

            case 'twothirds':
                this.ninepatchcontainer.resize(600, 425)
                this.icon.scale = 1
                if (this.btnPos == 'bottom') {
                    this.icon.x = 0
                    this.icon.y = -60
                    this.header.x = 0
                    this.header.y = 100
                    this.buyBtn.x = 0
                    this.buyBtn.y = 150
                    this.cost.x = 0
                    this.cost.y = 150
                } else if (this.btnPos == 'top') {
                    this.icon.x = 0
                    this.icon.y = 60
                    this.header.x = 0
                    this.header.y = -150
                    this.buyBtn.x = 0
                    this.buyBtn.y = -100
                    this.cost.x = 0
                    this.cost.y = -100
                } else if (this.btnPos == 'right') {
                    this.icon.x = -120
                    this.icon.y = 0
                    this.header.x = 150
                    this.header.y = -25
                    this.buyBtn.x = 150
                    this.buyBtn.y = 25
                    this.cost.x = 150
                    this.cost.y = 25
                } else if (this.btnPos == 'left') {
                    this.icon.x = 120
                    this.icon.y = 0
                    this.header.x = -150
                    this.header.y = -25
                    this.buyBtn.x = -150
                    this.buyBtn.y = 25
                    this.cost.x = -150
                    this.cost.y = 25
                }
                break

            case 'third':
                this.ninepatchcontainer.resize(600, 275)
                this.icon.scale = 0.75
                if (this.btnPos == 'bottom') {
                    this.icon.x = 0
                    this.icon.y = -42
                    this.header.x = 0
                    this.header.y = 68
                    this.buyBtn.x = 0
                    this.buyBtn.y = 111
                    this.cost.x = 0
                    this.cost.y = 111
                } else if (this.btnPos == 'top') {
                    this.icon.x = 0
                    this.icon.y = 42
                    this.header.x = 0
                    this.header.y = -111
                    this.buyBtn.x = 0
                    this.buyBtn.y = -68
                    this.cost.x = 0
                    this.cost.y = -68
                } else if (this.btnPos == 'right') {
                    this.icon.x = -120
                    this.icon.y = 0
                    this.header.x = 150
                    this.header.y = -25
                    this.buyBtn.x = 150
                    this.buyBtn.y = 25
                    this.cost.x = 150
                    this.cost.y = 25
                } else if (this.btnPos == 'left') {
                    this.icon.x = 120
                    this.icon.y = 0
                    this.header.x = -150
                    this.header.y = -25
                    this.buyBtn.x = -150
                    this.buyBtn.y = 25
                    this.cost.x = -150
                    this.cost.y = 25
                }
                break
        }
    }

    loadIcon(icon, size) {
        this.shell.events.once(`textureLoaded:catalog/furniture/icon/${icon}${size}`, () => {
            this.icon.setTexture(`catalog/furniture/icon/${icon}${size}`)
        })
        this.scene.iglooCatalogFurnitureIconLoader.loadIcon(icon, size)
    }

    buy() {
        this.scene.buyFurniture(this.id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
