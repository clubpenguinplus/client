import Page from './Page'
import {Button, SimpleButton} from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class CustomHoodiePage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page15_bg
        const page15_bg = scene.add.image(760, 453, 'constant', 'customHoodiePage')
        this.add(page15_bg)

        // page15_header
        const page15_header = scene.add.text(204, 82, '', {})
        page15_header.setOrigin(0.5, 0.5)
        page15_header.text = 'Create your\nown hoodie!'
        page15_header.setStyle({fontFamily: 'Burbank Small', fontSize: '27px', fontStyle: 'bold italic'})
        this.add(page15_header)

        // customHoodie
        const customHoodie = scene.add.sprite(1046, 337, 'constant', 'customHoodie0001')
        this.add(customHoodie)

        // hoodie_black
        const hoodie_black = scene.add.sprite(257, 309, 'constant', 'customHoodieSelection')
        hoodie_black.alpha = 0.01
        hoodie_black.alphaTopLeft = 0.01
        hoodie_black.alphaTopRight = 0.01
        hoodie_black.alphaBottomLeft = 0.01
        hoodie_black.alphaBottomRight = 0.01
        this.add(hoodie_black)

        // hoodie_white
        const hoodie_white = scene.add.sprite(345, 313, 'constant', 'customHoodieSelection')
        hoodie_white.alpha = 0.01
        hoodie_white.alphaTopLeft = 0.01
        hoodie_white.alphaTopRight = 0.01
        hoodie_white.alphaBottomLeft = 0.01
        hoodie_white.alphaBottomRight = 0.01
        this.add(hoodie_white)

        // hoodie_yellow
        const hoodie_yellow = scene.add.sprite(434, 316, 'constant', 'customHoodieSelection')
        hoodie_yellow.alpha = 0.01
        hoodie_yellow.alphaTopLeft = 0.01
        hoodie_yellow.alphaTopRight = 0.01
        hoodie_yellow.alphaBottomLeft = 0.01
        hoodie_yellow.alphaBottomRight = 0.01
        this.add(hoodie_yellow)

        // hoodie_orange
        const hoodie_orange = scene.add.sprite(523, 319, 'constant', 'customHoodieSelection')
        hoodie_orange.alpha = 0.01
        hoodie_orange.alphaTopLeft = 0.01
        hoodie_orange.alphaTopRight = 0.01
        hoodie_orange.alphaBottomLeft = 0.01
        hoodie_orange.alphaBottomRight = 0.01
        this.add(hoodie_orange)

        // hoodie_red
        const hoodie_red = scene.add.sprite(615, 323, 'constant', 'customHoodieSelection')
        hoodie_red.alpha = 0.01
        hoodie_red.alphaTopLeft = 0.01
        hoodie_red.alphaTopRight = 0.01
        hoodie_red.alphaBottomLeft = 0.01
        hoodie_red.alphaBottomRight = 0.01
        this.add(hoodie_red)

        // hoodie_puffle
        const hoodie_puffle = scene.add.sprite(605, 544, 'constant', 'customHoodieSelection')
        hoodie_puffle.alpha = 0.01
        hoodie_puffle.alphaTopLeft = 0.01
        hoodie_puffle.alphaTopRight = 0.01
        hoodie_puffle.alphaBottomLeft = 0.01
        hoodie_puffle.alphaBottomRight = 0.01
        this.add(hoodie_puffle)

        // hoodie_stripes
        const hoodie_stripes = scene.add.sprite(516, 540, 'constant', 'customHoodieSelection')
        hoodie_stripes.alpha = 0.01
        hoodie_stripes.alphaTopLeft = 0.01
        hoodie_stripes.alphaTopRight = 0.01
        hoodie_stripes.alphaBottomLeft = 0.01
        hoodie_stripes.alphaBottomRight = 0.01
        this.add(hoodie_stripes)

        // hoodie_stars
        const hoodie_stars = scene.add.sprite(427, 537, 'constant', 'customHoodieSelection')
        hoodie_stars.alpha = 0.01
        hoodie_stars.alphaTopLeft = 0.01
        hoodie_stars.alphaTopRight = 0.01
        hoodie_stars.alphaBottomLeft = 0.01
        hoodie_stars.alphaBottomRight = 0.01
        this.add(hoodie_stars)

        // hoodie_splatters
        const hoodie_splatters = scene.add.sprite(339, 534, 'constant', 'customHoodieSelection')
        hoodie_splatters.alpha = 0.01
        hoodie_splatters.alphaTopLeft = 0.01
        hoodie_splatters.alphaTopRight = 0.01
        hoodie_splatters.alphaBottomLeft = 0.01
        hoodie_splatters.alphaBottomRight = 0.01
        this.add(hoodie_splatters)

        // hoodie_fade
        const hoodie_fade = scene.add.sprite(250, 530, 'constant', 'customHoodieSelection')
        hoodie_fade.alpha = 0.01
        hoodie_fade.alphaTopLeft = 0.01
        hoodie_fade.alphaTopRight = 0.01
        hoodie_fade.alphaBottomLeft = 0.01
        hoodie_fade.alphaBottomRight = 0.01
        this.add(hoodie_fade)

        // page15_step_1
        const page15_step_1 = scene.add.text(220.57279455661774, 241.8295102827251, '', {})
        page15_step_1.angle = 2
        page15_step_1.setOrigin(0, 0.5)
        page15_step_1.text = '1. Pick your color'
        page15_step_1.setStyle({color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '30px', fontStyle: 'bold'})
        this.add(page15_step_1)

        // page15_step_2
        const page15_step_2 = scene.add.text(206.5947242975235, 464.5731284432113, '', {})
        page15_step_2.angle = 2
        page15_step_2.setOrigin(0, 0.5)
        page15_step_2.text = '2. Choose your design'
        page15_step_2.setStyle({color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '30px', fontStyle: 'bold'})
        this.add(page15_step_2)

        // page15_step_3
        const page15_step_3 = scene.add.text(1191.9579845666885, 137.37470987439156, '', {})
        page15_step_3.angle = -10
        page15_step_3.setOrigin(0.5, 0.5)
        page15_step_3.text = '3. Click on your hoodie to buy!'
        page15_step_3.setStyle({color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        page15_step_3.setWordWrapWidth(210)
        this.add(page15_step_3)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // customHoodie (components)
        const customHoodieSimpleButton = new SimpleButton(customHoodie)
        customHoodieSimpleButton.callback = () => this.buyHoodie()

        // hoodie_black (components)
        const hoodie_blackSimpleButton = new SimpleButton(hoodie_black)
        hoodie_blackSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_black)
        hoodie_blackSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_black)
        hoodie_blackSimpleButton.callback = () => this.changeColor('black')

        // hoodie_white (components)
        const hoodie_whiteSimpleButton = new SimpleButton(hoodie_white)
        hoodie_whiteSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_white)
        hoodie_whiteSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_white)
        hoodie_whiteSimpleButton.callback = () => this.changeColor('white')

        // hoodie_yellow (components)
        const hoodie_yellowSimpleButton = new SimpleButton(hoodie_yellow)
        hoodie_yellowSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_yellow)
        hoodie_yellowSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_yellow)
        hoodie_yellowSimpleButton.callback = () => this.changeColor('yellow')

        // hoodie_orange (components)
        const hoodie_orangeSimpleButton = new SimpleButton(hoodie_orange)
        hoodie_orangeSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_orange)
        hoodie_orangeSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_orange)
        hoodie_orangeSimpleButton.callback = () => this.changeColor('orange')

        // hoodie_red (components)
        const hoodie_redSimpleButton = new SimpleButton(hoodie_red)
        hoodie_redSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_red)
        hoodie_redSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_red)
        hoodie_redSimpleButton.callback = () => this.changeColor('red')

        // hoodie_puffle (components)
        const hoodie_puffleSimpleButton = new SimpleButton(hoodie_puffle)
        hoodie_puffleSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_puffle)
        hoodie_puffleSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_puffle)
        hoodie_puffleSimpleButton.callback = () => this.changePattern('puffle')

        // hoodie_stripes (components)
        const hoodie_stripesSimpleButton = new SimpleButton(hoodie_stripes)
        hoodie_stripesSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_stripes)
        hoodie_stripesSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_stripes)
        hoodie_stripesSimpleButton.callback = () => this.changePattern('stripes')

        // hoodie_stars (components)
        const hoodie_starsSimpleButton = new SimpleButton(hoodie_stars)
        hoodie_starsSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_stars)
        hoodie_starsSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_stars)
        hoodie_starsSimpleButton.callback = () => this.changePattern('stars')

        // hoodie_splatters (components)
        const hoodie_splattersSimpleButton = new SimpleButton(hoodie_splatters)
        hoodie_splattersSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_splatters)
        hoodie_splattersSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_splatters)
        hoodie_splattersSimpleButton.callback = () => this.changePattern('splatters')

        // hoodie_fade (components)
        const hoodie_fadeSimpleButton = new SimpleButton(hoodie_fade)
        hoodie_fadeSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_fade)
        hoodie_fadeSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_fade)
        hoodie_fadeSimpleButton.callback = () => this.changePattern('fade')

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.page15_bg = page15_bg
        this.page15_header = page15_header
        this.customHoodie = customHoodie
        this.hoodie_black = hoodie_black
        this.hoodie_white = hoodie_white
        this.hoodie_yellow = hoodie_yellow
        this.hoodie_orange = hoodie_orange
        this.hoodie_red = hoodie_red
        this.hoodie_puffle = hoodie_puffle
        this.hoodie_stripes = hoodie_stripes
        this.hoodie_stars = hoodie_stars
        this.hoodie_splatters = hoodie_splatters
        this.hoodie_fade = hoodie_fade
        this.page15_step_1 = page15_step_1
        this.page15_step_2 = page15_step_2
        this.page15_step_3 = page15_step_3

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page15_bg
    /** @type {Phaser.GameObjects.Text} */
    page15_header
    /** @type {Phaser.GameObjects.Sprite} */
    customHoodie
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_black
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_white
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_yellow
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_orange
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_red
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_puffle
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_stripes
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_stars
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_splatters
    /** @type {Phaser.GameObjects.Sprite} */
    hoodie_fade
    /** @type {Phaser.GameObjects.Text} */
    page15_step_1
    /** @type {Phaser.GameObjects.Text} */
    page15_step_2
    /** @type {Phaser.GameObjects.Text} */
    page15_step_3

    /* START-USER-CODE */

    onCustomHoodieOver(button) {
        button.alpha = 1
    }

    onCustomHoodieOut(button) {
        button.alpha = 0.01
    }

    color = 'black'
    pattern = 'fade'
    hoodie = 4495

    changeColor(newColor) {
        this.color = newColor
        this.changeHoodie()
    }

    changePattern(newPattern) {
        this.pattern = newPattern
        this.changeHoodie()
    }

    changeHoodie() {
        if (this.color == 'black') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0001')
                this.hoodie = 4495
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0002')
                this.hoodie = 4582
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0003')
                this.hoodie = 4583
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0004')
                this.hoodie = 4584
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0005')
                this.hoodie = 4585
            }
        } else if (this.color == 'white') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0006')
                this.hoodie = 4500
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0007')
                this.hoodie = 4586
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0008')
                this.hoodie = 4587
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0009')
                this.hoodie = 4588
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0010')
                this.hoodie = 4589
            }
        } else if (this.color == 'yellow') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0011')
                this.hoodie = 4591
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0012')
                this.hoodie = 4590
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0013')
                this.hoodie = 4592
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0014')
                this.hoodie = 4593
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0015')
                this.hoodie = 4594
            }
        } else if (this.color == 'orange') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0016')
                this.hoodie = 4596
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0017')
                this.hoodie = 4595
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0018')
                this.hoodie = 4597
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0019')
                this.hoodie = 4598
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0020')
                this.hoodie = 4599
            }
        } else if (this.color == 'red') {
            if (this.pattern == 'fade') {
                this.customHoodie.setFrame('customHoodie0021')
                this.hoodie = 4601
            } else if (this.pattern == 'splatters') {
                this.customHoodie.setFrame('customHoodie0022')
                this.hoodie = 4600
            } else if (this.pattern == 'stars') {
                this.customHoodie.setFrame('customHoodie0023')
                this.hoodie = 4602
            } else if (this.pattern == 'stripes') {
                this.customHoodie.setFrame('customHoodie0024')
                this.hoodie = 4603
            } else if (this.pattern == 'puffle') {
                this.customHoodie.setFrame('customHoodie0025')
                this.hoodie = 4604
            }
        }
    }

    buyHoodie() {
        this.buy(this.hoodie)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
