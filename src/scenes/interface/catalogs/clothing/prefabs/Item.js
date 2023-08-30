import BaseContainer from '@scenes/base/BaseContainer'
import CatalogItemLoader from '@engine/loaders/CatalogItemLoader'
import {Button, Pricetag, Name} from '@components/components'

/* START OF COMPILED CODE */

export default class Item extends BaseContainer {
    constructor(scene, x, y, itemId, itemType) {
        super(scene, x ?? 0, y ?? 0)

        this.itemId = itemId
        this.itemType = itemType

        const item = scene.add.image(0, -45, '_MISSING')
        item.visible = false
        this.add(item)

        const text = scene.add.text(0, 35, '', {})
        text.setStyle({fontFamily: 'cpBurbankSmall', fontSize: '22px', fontStyle: 'bold', wordWrap: {width: 180}, align: 'center'})
        text.setOrigin(0.5, 0.5)
        this.add(text)

        const btn = scene.add.image(0, 80, 'catalogs-master', 'buybtn')
        this.add(btn)

        const price = scene.add.text(-2, 80, '', {})
        price.setStyle({fontFamily: 'cpBurbankSmall', fontSize: '25px', fontStyle: 'bold', color: '#4b2500ff', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        price.setOrigin(0.5, 0.5)
        this.add(price)

        const btnButton = new Button(btn)
        btnButton.callback = () => this.buy()

        const pricetag = new Pricetag(price)
        pricetag.id = itemId

        const name = new Name(text)
        name.id = itemId

        this.item = item

        this.loader = new CatalogItemLoader(scene, this)
        this.loader.loadItem(this.itemId, this.itemType)
    }

    setItem() {
        this.item.visible = true
        let path = this.itemType == 'icon' ? 'icon' : 'paper/140'
        this.item.setTexture(`catalogitem/${path}/${this.itemId}`)
    }

    buy() {
        this.interface.prompt.showItem(this.itemId)
    }
}
