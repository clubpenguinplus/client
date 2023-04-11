import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, LocalisedSprite, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Adopt extends BaseScene {
    constructor() {
        super('Adopt')

        /** @type {Phaser.GameObjects.Sprite} */
        this.whitePuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.blackPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.pinkPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.purplePuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.greenPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellowPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.orangePuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.brownPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.dogPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.bluePuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.catPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.redPuffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.lightAnim
        /** @type {Phaser.GameObjects.Text} */
        this.yourPuffleNum
        /** @type {Phaser.GameObjects.Text} */
        this.yourCoinsNum
        /** @type {Phaser.GameObjects.Container} */
        this.mainPage
        /** @type {Phaser.GameObjects.Container} */
        this.puffleInfoPage
        /** @type {Phaser.GameObjects.Text} */
        this.speciesText
        /** @type {Phaser.GameObjects.Text} */
        this.personalityText
        /** @type {Phaser.GameObjects.Text} */
        this.snackText
        /** @type {Phaser.GameObjects.Text} */
        this.factText
        /** @type {Phaser.GameObjects.Image} */
        this.speciesIcon

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('petshop-adopt-pack', 'client/media/interface/closeups/adopt/petshop-adopt-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.5

        // bg
        this.add.image(618, 467, 'petshop-adopt', 'bg')

        // goldPufflePoster
        const goldPufflePoster = this.add.image(704, -4, 'petshop-adopt', 'goldPufflePoster')

        // rainbowPufflePoster
        const rainbowPufflePoster = this.add.image(473, 22, 'petshop-adopt', 'rainbowPufflePoster')

        // memberpufflerug
        this.add.image(583, 743, 'petshop-adopt', 'memberpufflerug')

        // foodbowl
        this.add.image(795, 151, 'petshop-adopt', 'foodbowl')

        // tree
        this.add.image(115, 124, 'petshop-adopt', 'tree')

        // whitePuffle
        const whitePuffle = this.add.sprite(130, 155, 'petshop-adopt', 'whitePuffleAnim0001')

        // blackPuffle
        const blackPuffle = this.add.sprite(392, 184, 'petshop-adopt', 'blackPuffleAnim0001')

        // pinkPuffle
        const pinkPuffle = this.add.sprite(644, 211, 'petshop-adopt', 'pinkPuffleAnim0001')

        // purplePuffle
        const purplePuffle = this.add.sprite(918, 178, 'petshop-adopt', 'purplePuffleAnim0001')

        // greenPuffle
        const greenPuffle = this.add.sprite(123, 395, 'petshop-adopt', 'greenPuffleAnim0001')

        // yellowPuffle
        const yellowPuffle = this.add.sprite(968, 391, 'petshop-adopt', 'yellowPuffleAnim0001')

        // orangePuffle
        const orangePuffle = this.add.sprite(326, 453, 'petshop-adopt', 'orangePuffleAnim0001')

        // brownPuffle
        const brownPuffle = this.add.sprite(713, 473, 'petshop-adopt', 'brownPuffleAnim0001')

        // dogPuffle
        const dogPuffle = this.add.sprite(487, 637, 'petshop-adopt', 'dogPuffleAnim0001')

        // bluePuffle
        const bluePuffle = this.add.sprite(155, 672, 'petshop-adopt', 'bluePuffleAnim0001')

        // catPuffle
        const catPuffle = this.add.sprite(684, 680, 'petshop-adopt', 'catPuffleAnim0001')

        // redPuffle
        const redPuffle = this.add.sprite(934, 743, 'petshop-adopt', 'redPuffleAnim0001')

        // lightAnim
        const lightAnim = this.add.sprite(-213, -362, 'petshop-adopt', 'lightAnim0001')

        // wood_bg
        this.add.image(815, 488, 'petshop-adopt', 'wood_bg')

        // woodHorizontalLg
        this.add.image(926, 916, 'petshop-adopt', 'woodHorizontalLg')

        // fg
        this.add.image(103, 484, 'petshop-adopt', 'fg')

        // clipboard
        this.add.image(1308, 552, 'petshop-adopt', 'clipboard')

        // yourPuffleNum
        const yourPuffleNum = this.add.text(1116, 846, '', {})
        yourPuffleNum.angle = 3
        yourPuffleNum.setOrigin(0, 0.5)
        yourPuffleNum.text = 'Your puffles: 0'
        yourPuffleNum.setStyle({color: '#4b4b4bff', fontFamily: 'Burbank Small', fontSize: '28px'})

        // yourCoinsNum
        const yourCoinsNum = this.add.text(1212, 925, '', {})
        yourCoinsNum.angle = 3
        yourCoinsNum.setOrigin(0.5, 0.5)
        yourCoinsNum.text = 'Your coins:\n0'
        yourCoinsNum.setStyle({align: 'center', color: '#354c15ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})

        // mainPage
        const mainPage = this.add.container(1202, 256)

        // text_1
        const text_1 = this.add.text(95, 0, '', {})
        text_1.angle = 2
        text_1.setOrigin(0.5, 0.5)
        text_1.text = 'Adopt a Puffle'
        text_1.setStyle({align: 'center', color: '#4b4b4bff', fontFamily: 'Burbank Small', fontSize: '32px', fontStyle: 'bold'})
        mainPage.add(text_1)

        // spacer
        const spacer = this.add.image(91, 48, 'petshop-adopt', 'spacer')
        mainPage.add(spacer)

        // spacer_1
        const spacer_1 = this.add.image(83, 433, 'petshop-adopt', 'spacer')
        mainPage.add(spacer_1)

        // container_1
        const container_1 = this.add.container(-7, 101)
        container_1.angle = 2
        mainPage.add(container_1)

        // whiteIcon
        const whiteIcon = this.add.image(150, 255, 'petshop-adopt', 'whiteIcon')
        container_1.add(whiteIcon)

        // blackIcon
        const blackIcon = this.add.image(50, 255, 'petshop-adopt', 'blackIcon')
        container_1.add(blackIcon)

        // brownIcon
        const brownIcon = this.add.image(199, 170, 'petshop-adopt', 'brownIcon')
        container_1.add(brownIcon)

        // pinkIcon
        const pinkIcon = this.add.image(100, 170, 'petshop-adopt', 'pinkIcon')
        container_1.add(pinkIcon)

        // purpleIcon
        const purpleIcon = this.add.image(0, 170, 'petshop-adopt', 'purpleIcon')
        container_1.add(purpleIcon)

        // greenIcon
        const greenIcon = this.add.image(200, 85, 'petshop-adopt', 'greenIcon')
        container_1.add(greenIcon)

        // yellowIcon
        const yellowIcon = this.add.image(100, 85, 'petshop-adopt', 'yellowIcon')
        container_1.add(yellowIcon)

        // orangeIcon
        const orangeIcon = this.add.image(0, 85, 'petshop-adopt', 'orangeIcon')
        container_1.add(orangeIcon)

        // redIcon
        const redIcon = this.add.image(150, 0, 'petshop-adopt', 'redIcon')
        container_1.add(redIcon)

        // blueIcon
        const blueIcon = this.add.image(50, 0, 'petshop-adopt', 'blueIcon')
        container_1.add(blueIcon)

        // catIcon
        const catIcon = this.add.image(180, 395, 'petshop-adopt', 'catIcon')
        container_1.add(catIcon)

        // dogIcon
        const dogIcon = this.add.image(40, 395, 'petshop-adopt', 'dogIcon')
        container_1.add(dogIcon)

        // puffleInfoPage
        const puffleInfoPage = this.add.container(1202, 256)
        puffleInfoPage.visible = false

        // speciesText
        const speciesText = this.add.text(16, 3, '', {})
        speciesText.angle = 2
        speciesText.setOrigin(0, 0.5)
        speciesText.tintTopLeft = 10592673
        speciesText.tintTopRight = 10592673
        speciesText.tintBottomLeft = 10592673
        speciesText.tintBottomRight = 10592673
        speciesText.text = 'Blue'
        speciesText.setStyle({color: '#33ccffff', fontFamily: 'Burbank Small', fontSize: '38px', fontStyle: 'bold', 'shadow.color': '#424242ff'})
        puffleInfoPage.add(speciesText)

        // spacer_2
        const spacer_2 = this.add.image(88, 54, 'petshop-adopt', 'spacer')
        puffleInfoPage.add(spacer_2)

        // container_2
        const container_2 = this.add.container(0, 92)
        container_2.angle = 2
        puffleInfoPage.add(container_2)

        // text_4
        const text_4 = this.add.text(-63, 0, '', {})
        text_4.setOrigin(0, 0.5)
        text_4.text = 'Personality'
        text_4.setStyle({color: '#644314ff', fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        container_2.add(text_4)

        // text_5
        const text_5 = this.add.text(-63, 116, '', {})
        text_5.setOrigin(0, 0.5)
        text_5.text = 'Favorite Snack'
        text_5.setStyle({color: '#644314ff', fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        container_2.add(text_5)

        // text_6
        const text_6 = this.add.text(-63, 232, '', {})
        text_6.setOrigin(0, 0.5)
        text_6.text = 'Cool Fact'
        text_6.setStyle({color: '#644314ff', fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        container_2.add(text_6)

        // personalityText
        const personalityText = this.add.text(-63, 39, '', {})
        personalityText.setOrigin(0, 0.5)
        personalityText.tintTopLeft = 10592673
        personalityText.tintTopRight = 10592673
        personalityText.tintBottomLeft = 10592673
        personalityText.tintBottomRight = 10592673
        personalityText.text = 'Loyal, team player'
        personalityText.setStyle({color: '#33ccffff', fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#424242ff'})
        container_2.add(personalityText)

        // snackText
        const snackText = this.add.text(-63, 155, '', {})
        snackText.setOrigin(0, 0.5)
        snackText.tintTopLeft = 10592673
        snackText.tintTopRight = 10592673
        snackText.tintBottomLeft = 10592673
        snackText.tintBottomRight = 10592673
        snackText.text = 'Pretzels'
        snackText.setStyle({color: '#33ccffff', fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#424242ff'})
        container_2.add(snackText)

        // factText
        const factText = this.add.text(-63, 271, '', {})
        factText.setOrigin(0, 0.5)
        factText.tintTopLeft = 10592673
        factText.tintTopRight = 10592673
        factText.tintBottomLeft = 10592673
        factText.tintBottomRight = 10592673
        factText.text = 'Can bounce really high'
        factText.setStyle({color: '#33ccffff', fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#424242ff'})
        container_2.add(factText)

        // speciesIcon
        const speciesIcon = this.add.image(-26, -1, 'petshop-adopt', 'blueIcon')
        puffleInfoPage.add(speciesIcon)

        // adoptBtn
        const adoptBtn = this.add.image(89, 481, 'petshop-adopt', 'adoptBtn')
        puffleInfoPage.add(adoptBtn)

        // text_10
        const text_10 = this.add.text(92, 482, '', {})
        text_10.angle = 2
        text_10.setOrigin(0.5, 0.5)
        text_10.text = 'Adopt'
        text_10.setStyle({align: 'center', color: '#644314ff', fontFamily: 'Burbank Small', fontSize: '48px', fontStyle: 'bold'})
        puffleInfoPage.add(text_10)

        // closeBtn
        const closeBtn = this.add.image(1479, 39, 'petshop-adopt', 'closeBtn')

        // block (components)
        new Interactive(block)

        // goldPufflePoster (components)
        const goldPufflePosterButton = new Button(goldPufflePoster)
        goldPufflePosterButton.spriteName = 'goldPufflePoster'
        goldPufflePosterButton.activeFrame = false

        // rainbowPufflePoster (components)
        const rainbowPufflePosterButton = new Button(rainbowPufflePoster)
        rainbowPufflePosterButton.spriteName = 'rainbowPufflePoster'
        rainbowPufflePosterButton.activeFrame = false

        // whitePuffle (components)
        const whitePuffleSimpleButton = new SimpleButton(whitePuffle)
        whitePuffleSimpleButton.callback = () => this.adoptPuffle(7)

        // blackPuffle (components)
        const blackPuffleSimpleButton = new SimpleButton(blackPuffle)
        blackPuffleSimpleButton.callback = () => this.adoptPuffle(2)

        // pinkPuffle (components)
        const pinkPuffleSimpleButton = new SimpleButton(pinkPuffle)
        pinkPuffleSimpleButton.callback = () => this.adoptPuffle(1)

        // purplePuffle (components)
        const purplePuffleSimpleButton = new SimpleButton(purplePuffle)
        purplePuffleSimpleButton.callback = () => this.adoptPuffle(4)

        // greenPuffle (components)
        const greenPuffleSimpleButton = new SimpleButton(greenPuffle)
        greenPuffleSimpleButton.callback = () => this.adoptPuffle(3)

        // yellowPuffle (components)
        const yellowPuffleSimpleButton = new SimpleButton(yellowPuffle)
        yellowPuffleSimpleButton.callback = () => this.adoptPuffle(6)

        // orangePuffle (components)
        const orangePuffleSimpleButton = new SimpleButton(orangePuffle)
        orangePuffleSimpleButton.callback = () => this.adoptPuffle(8)

        // brownPuffle (components)
        const brownPuffleSimpleButton = new SimpleButton(brownPuffle)
        brownPuffleSimpleButton.callback = () => this.adoptPuffle(9)

        // dogPuffle (components)
        const dogPuffleSimpleButton = new SimpleButton(dogPuffle)
        dogPuffleSimpleButton.callback = () => this.adoptPuffle(1006)

        // bluePuffle (components)
        const bluePuffleSimpleButton = new SimpleButton(bluePuffle)
        bluePuffleSimpleButton.callback = () => this.adoptPuffle(0)

        // catPuffle (components)
        const catPuffleSimpleButton = new SimpleButton(catPuffle)
        catPuffleSimpleButton.callback = () => this.adoptPuffle(1007)

        // redPuffle (components)
        const redPuffleSimpleButton = new SimpleButton(redPuffle)
        redPuffleSimpleButton.callback = () => this.adoptPuffle(5)

        // whiteIcon (components)
        const whiteIconButton = new Button(whiteIcon)
        whiteIconButton.spriteName = 'whiteIcon'
        whiteIconButton.callback = () => this.adoptPuffle(7)

        // blackIcon (components)
        const blackIconButton = new Button(blackIcon)
        blackIconButton.spriteName = 'blackIcon'
        blackIconButton.callback = () => this.adoptPuffle(2)

        // brownIcon (components)
        const brownIconButton = new Button(brownIcon)
        brownIconButton.spriteName = 'brownIcon'
        brownIconButton.callback = () => this.adoptPuffle(9)

        // pinkIcon (components)
        const pinkIconButton = new Button(pinkIcon)
        pinkIconButton.spriteName = 'pinkIcon'
        pinkIconButton.callback = () => this.adoptPuffle(1)

        // purpleIcon (components)
        const purpleIconButton = new Button(purpleIcon)
        purpleIconButton.spriteName = 'purpleIcon'
        purpleIconButton.callback = () => this.adoptPuffle(4)

        // greenIcon (components)
        const greenIconButton = new Button(greenIcon)
        greenIconButton.spriteName = 'greenIcon'
        greenIconButton.callback = () => this.adoptPuffle(3)

        // yellowIcon (components)
        const yellowIconButton = new Button(yellowIcon)
        yellowIconButton.spriteName = 'yellowIcon'
        yellowIconButton.callback = () => this.adoptPuffle(6)

        // orangeIcon (components)
        const orangeIconButton = new Button(orangeIcon)
        orangeIconButton.spriteName = 'orangeIcon'
        orangeIconButton.callback = () => this.adoptPuffle(8)

        // redIcon (components)
        const redIconButton = new Button(redIcon)
        redIconButton.spriteName = 'redIcon'
        redIconButton.callback = () => this.adoptPuffle(5)

        // blueIcon (components)
        const blueIconButton = new Button(blueIcon)
        blueIconButton.spriteName = 'blueIcon'
        blueIconButton.callback = () => this.adoptPuffle(0)

        // catIcon (components)
        const catIconButton = new Button(catIcon)
        catIconButton.spriteName = 'catIcon'
        catIconButton.callback = () => this.adoptPuffle(1007)

        // dogIcon (components)
        const dogIconButton = new Button(dogIcon)
        dogIconButton.spriteName = 'dogIcon'
        dogIconButton.callback = () => this.adoptPuffle(1006)

        // closeBtn (components)
        const closeBtnButton = new Button(closeBtn)
        closeBtnButton.spriteName = 'closeBtn'
        closeBtnButton.callback = () => this.scene.stop()

        this.whitePuffle = whitePuffle
        this.blackPuffle = blackPuffle
        this.pinkPuffle = pinkPuffle
        this.purplePuffle = purplePuffle
        this.greenPuffle = greenPuffle
        this.yellowPuffle = yellowPuffle
        this.orangePuffle = orangePuffle
        this.brownPuffle = brownPuffle
        this.dogPuffle = dogPuffle
        this.bluePuffle = bluePuffle
        this.catPuffle = catPuffle
        this.redPuffle = redPuffle
        this.lightAnim = lightAnim
        this.yourPuffleNum = yourPuffleNum
        this.yourCoinsNum = yourCoinsNum
        this.mainPage = mainPage
        this.puffleInfoPage = puffleInfoPage
        this.speciesText = speciesText
        this.personalityText = personalityText
        this.snackText = snackText
        this.factText = factText
        this.speciesIcon = speciesIcon

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        for (let puffle of ['white', 'black', 'pink', 'purple', 'green', 'yellow', 'orange', 'brown', 'dog', 'blue', 'cat', 'red']) {
            this[puffle + 'Puffle'].play(`petshop-adopt-${puffle}PuffleAnim`)
        }

        this.yourPuffleNum.text = `Your Puffles: 0`
        this.yourCoinsNum.text = `Your Coins:\n${this.shell.client.coins}`
    }

    getIconFromId(id) {
        switch (id) {
            case 1006:
                return 'dogIcon'
            case 1007:
                return 'catIcon'
            default:
                return this.crumbs.puffles[id].name.toLowerCase() + 'Icon'
        }
    }

    getLightPositionFromId(id) {
        switch (id) {
            case 0:
                return {x: 162, y: 306}
            case 1:
                return {x: 649, y: -154}
            case 2:
                return {x: 394, y: -189}
            case 3:
                return {x: 125, y: 26}
            case 4:
                return {x: 924, y: -195}
            case 5:
                return {x: 935, y: 372}
            case 6:
                return {x: 973, y: 22}
            case 7:
                return {x: 132, y: -234}
            case 8:
                return {x: 333, y: 89}
            case 9:
                return {x: 716, y: 106}
            case 1006:
                return {x: 469, y: 272}
            case 1007:
                return {x: 684, y: 337}
        }
    }

    adoptPuffle(puffleId) {
        this.mainPage.visible = false
        this.puffleInfoPage.visible = true

        this.speciesText.text = this.crumbs.puffles[puffleId].name
        this.personalityText.text = this.crumbs.getString(`puffle-${puffleId}-personality`)
        this.snackText.text = this.crumbs.getString(`puffle-${puffleId}-snack`)
        this.factText.text = this.crumbs.getString(`puffle-${puffleId}-fact`)

        this.speciesText.setStyle({color: this.crumbs.puffles[puffleId].color.replace('0x', '#')})
        this.personalityText.setStyle({color: this.crumbs.puffles[puffleId].color.replace('0x', '#')})
        this.snackText.setStyle({color: this.crumbs.puffles[puffleId].color.replace('0x', '#')})
        this.factText.setStyle({color: this.crumbs.puffles[puffleId].color.replace('0x', '#')})

        this.speciesIcon.setFrame(this.getIconFromId(puffleId))

        let lightAnimPosition = this.getLightPositionFromId(puffleId)
        this.lightAnim.x = lightAnimPosition.x
        this.lightAnim.y = lightAnimPosition.y
        this.lightAnim.play('petshop-adopt-lightAnim')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
