import BaseContainer from '@scenes/base/BaseContainer'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class FlooringItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // header
        const header = scene.add.text(0, 68, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'Pink Carpet'
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
        cost.text = '530'
        cost.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '23px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(cost)

        // icon
        const icon = scene.add.image(0, -42, '2')
        this.add(icon)

        // buyBtn (components)
        const buyBtnButton = new Button(buyBtn)
        buyBtnButton.callback = () => this.buy(this.id)

        this.header = header
        this.buyBtn = buyBtn
        this.cost = cost
        this.icon = icon

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Text} */
    header
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn
    /** @type {Phaser.GameObjects.Text} */
    cost
    /** @type {Phaser.GameObjects.Image} */
    icon

    /* START-USER-CODE */

    loadIcon(id) {
        this.id = id
        this.header.text = this.crumbs.flooring[id].name
        this.cost.text = this.crumbs.flooring[id].cost
        this.shell.events.once(`textureLoaded:catalog/flooring/icon/${id}`, () => {
            this.icon.setTexture(`catalog/flooring/icon/${id}`)
        })
        this.scene.iglooCatalogFlooringIconLodaer.loadIcon(id)
    }

    buy() {
        this.scene.buyFlooring(this.id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
