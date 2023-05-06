import BaseContainer from '@scenes/base/BaseContainer'

export default class Card extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        const glow = scene.add.sprite(34, 30, 'card', 'glow0001')
        glow.scaleX = 0.5
        glow.scaleY = 0.5
        glow.tintTopLeft = 14380911
        glow.tintTopRight = 14380911
        glow.tintBottomLeft = 14380911
        glow.tintBottomRight = 14380911
        this.add(glow)

        const over = scene.add.image(34, 30, 'card', 'over')
        over.scaleX = 0.5
        over.scaleY = 0.5
        over.visible = false
        this.add(over)

        const card = scene.add.image(34, 30, 'card/1')
        this.add(card)

        const color = scene.add.image(34, 30, 'card', 'color')
        color.scaleX = 0.5
        color.scaleY = 0.5
        color.tintFill = true
        color.tintTopLeft = 15478832
        color.tintTopRight = 15478832
        color.tintBottomLeft = 15478832
        color.tintBottomRight = 15478832
        this.add(color)

        const element = scene.add.image(-47, -66, 'card', 'element_fire')
        element.scaleX = 0.5
        element.scaleY = 0.5
        this.add(element)

        const power = scene.add.text(-49, -11, '', {})
        power.setOrigin(0.5, 0.5)
        power.text = '9'
        power.setStyle({color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '48px', fontStyle: 'bold'})
        this.add(power)

        const disabled = scene.add.image(34, 30, 'card', 'disabled')
        disabled.scaleX = 0.5
        disabled.scaleY = 0.5
        disabled.visible = false
        this.add(disabled)

        this.glow = glow
        this.over = over
        this.card = card
        this.color = color
        this.element = element
        this.power = power
        this.disabled = disabled
    }

    showCard(card) {
        if (this.scene.textures.exists('card/' + card.id)) {
            this.setCard(card)
        } else {
        }
    }

    setCard(card) {
        this.card.setTexture('card/' + card.id)
        this.color.tintTopLeft = card.color
        this.color.tintTopRight = card.color
        this.color.tintBottomLeft = card.color
        this.color.tintBottomRight = card.color
        this.element.setTexture('card/element_' + card.element)
        this.power.text = card.power
    }
}
