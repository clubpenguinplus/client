import BaseContainer from '@scenes/base/BaseContainer'
import PaperItemLoader from '@engine/loaders/PaperItemLoader'
import {Button, Pricetag, Name} from '@components/components'

/* START OF COMPILED CODE */

export default class Item extends BaseContainer {
    constructor(scene, x, y, itemId) {
        super(scene, x ?? 0, y ?? 0)

        this.itemId = itemId

        const item = scene.add.image(0, -45, '_MISSING')
        item.visible = false
        item.scaleX = 0.5
        item.scaleY = 0.5
        this.add(item)

        const text = scene.add.text(0, 20, '', {})
        text.setStyle({fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'bold'})
        text.setOrigin(0.5, 0.5)
        this.add(text)

        const btn = scene.add.image(0, 65, 'catalogs-master', 'buybtn')
        this.add(btn)

        const price = scene.add.text(0, 65, '', {})
        price.setStyle({fontFamily: 'Burbank Small', fontSize: '25px'})
        price.setOrigin(0.5, 0.5)
        this.add(price)

        const btnButton = new Button(btn)
        btnButton.spriteName = 'buybtn'
        btnButton.callback = () => this.buy()
        btnButton.activeFrame = false

        const pricetag = new Pricetag(price)
        pricetag.id = itemId

        const name = new Name(text)
        name.id = itemId

        this.item = item

        this.loader = new PaperItemLoader(scene, this)
        this.loader.loadItem(this.itemId)
    }

    setItem() {
        this.item.visible = true
        this.item.setTexture(`clothing/${this.itemId}`)
    }

    buy() {
        this.interface.prompt.showItem(this.itemId)
    }
}
