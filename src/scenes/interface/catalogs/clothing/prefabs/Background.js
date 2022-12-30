import BaseContainer from '@scenes/base/BaseContainer'
import PaperItemLoader from '@engine/loaders/PaperItemLoader'
import {SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class Background extends BaseContainer {
    constructor(scene, x, y, itemId) {
        super(scene, x ?? 0, y ?? 0)

        this.itemId = itemId

        const bg = scene.add.rectangle(0, 0, 225, 225)
        bg.isFilled = true
        bg.fillColor = 8959958
        bg.lineWidth = 10
        this.add(bg)

        const background = scene.add.image(0, 0, '_MISSING')
        background.visible = false
        background.scaleX = 0.35
        background.scaleY = 0.35
        this.add(background)

        const hover = scene.add.rectangle(0, 0, 210, 210)
        hover.isFilled = true
        hover.fillAlpha = 0.1
        hover.lineWidth = 10
        this.add(hover)

        const hoverSimpleButton = new SimpleButton(hover)
        hoverSimpleButton.hoverCallback = () => this.onBgOver()
        hoverSimpleButton.hoverOutCallback = () => this.onBgOut()
        hoverSimpleButton.callback = () => this.buy()

        this.background = background
        this.hover = hover

        this.loader = new PaperItemLoader(scene, this)
        this.loader.loadItem(this.itemId, 600)
    }

    setItem() {
        this.background.visible = true
        this.background.setTexture(`paper/600/${this.itemId}`)
    }

    buy() {
        this.interface.prompt.showItem(this.itemId)
    }

    onBgOver() {
        this.hover.isFilled = true
    }

    onBgOut() {
        this.hover.isFilled = false
    }
}
