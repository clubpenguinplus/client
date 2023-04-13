import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, InputText, Interactive, LocalisedString} from '@scenes/components/components'

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
        /** @type {Phaser.GameObjects.Text} */
        this.mainHeader
        /** @type {Phaser.GameObjects.Container} */
        this.adoptionPage
        /** @type {Phaser.GameObjects.Text} */
        this.speciesText
        /** @type {Phaser.GameObjects.Container} */
        this.info
        /** @type {Phaser.GameObjects.Text} */
        this.personalityHeader
        /** @type {Phaser.GameObjects.Text} */
        this.snackHeader
        /** @type {Phaser.GameObjects.Text} */
        this.factHeader
        /** @type {Phaser.GameObjects.Text} */
        this.personalityText
        /** @type {Phaser.GameObjects.Text} */
        this.snackText
        /** @type {Phaser.GameObjects.Text} */
        this.factText
        /** @type {Phaser.GameObjects.Container} */
        this.adopt
        /** @type {Phaser.GameObjects.Text} */
        this.nameInputText
        /** @type {Phaser.GameObjects.Image} */
        this.speciesIcon
        /** @type {Phaser.GameObjects.Text} */
        this.coinCost

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
        this.add.image(1297, 508, 'petshop-adopt', 'clipboard')

        // yourPuffleNum
        const yourPuffleNum = this.add.text(1105, 802, '', {})
        yourPuffleNum.angle = 3.0000000000000004
        yourPuffleNum.setOrigin(0, 0.5)
        yourPuffleNum.text = 'Your puffles: 0'
        yourPuffleNum.setStyle({color: '#4b4b4bff', fixedWidth: 250, fontFamily: 'Burbank Small', fontSize: '28px'})

        // yourCoinsNum
        const yourCoinsNum = this.add.text(1201, 881, '', {})
        yourCoinsNum.angle = 3.0000000000000004
        yourCoinsNum.setOrigin(0.5, 0.5)
        yourCoinsNum.text = 'Your coins:\n0'
        yourCoinsNum.setStyle({align: 'center', color: '#354c15ff', fixedWidth: 150, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})

        // mainPage
        const mainPage = this.add.container(1191, 212)
        mainPage.visible = false

        // mainHeader
        const mainHeader = this.add.text(98, 0, '', {})
        mainHeader.angle = 2
        mainHeader.setOrigin(0.5, 0.5)
        mainHeader.text = 'Adopt a Puffle'
        mainHeader.setStyle({align: 'center', color: '#4b4b4bff', fixedWidth: 350, fontFamily: 'Burbank Small', fontSize: '32px', fontStyle: 'bold'})
        mainPage.add(mainHeader)

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

        // adoptionPage
        const adoptionPage = this.add.container(1191, 212)

        // speciesText
        const speciesText = this.add.text(16, 2, '', {})
        speciesText.angle = 2
        speciesText.setOrigin(0, 0.5)
        speciesText.tintTopLeft = 10592673
        speciesText.tintTopRight = 10592673
        speciesText.tintBottomLeft = 10592673
        speciesText.tintBottomRight = 10592673
        speciesText.text = 'Blue'
        speciesText.setStyle({color: '#33ccffff', fixedWidth: 230, fontFamily: 'Burbank Small', fontSize: '38px', fontStyle: 'bold', 'shadow.color': '#424242ff'})
        speciesText.setWordWrapWidth(230)
        adoptionPage.add(speciesText)

        // spacer_2
        const spacer_2 = this.add.image(88, 54, 'petshop-adopt', 'spacer')
        adoptionPage.add(spacer_2)

        // info
        const info = this.add.container(0, 92)
        info.angle = 2
        adoptionPage.add(info)

        // personalityHeader
        const personalityHeader = this.add.text(-63, 0, '', {})
        personalityHeader.setOrigin(0, 0.5)
        personalityHeader.text = 'Personality'
        personalityHeader.setStyle({color: '#644314ff', fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        info.add(personalityHeader)

        // snackHeader
        const snackHeader = this.add.text(-63, 116, '', {})
        snackHeader.setOrigin(0, 0.5)
        snackHeader.text = 'Favorite Snack'
        snackHeader.setStyle({color: '#644314ff', fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        info.add(snackHeader)

        // factHeader
        const factHeader = this.add.text(-63, 232, '', {})
        factHeader.setOrigin(0, 0.5)
        factHeader.text = 'Cool Fact'
        factHeader.setStyle({color: '#644314ff', fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        info.add(factHeader)

        // personalityText
        const personalityText = this.add.text(-63, 21, '', {})
        personalityText.tintTopLeft = 10592673
        personalityText.tintTopRight = 10592673
        personalityText.tintBottomLeft = 10592673
        personalityText.tintBottomRight = 10592673
        personalityText.text = 'Loyal, team player'
        personalityText.setStyle({color: '#33ccffff', fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#424242ff'})
        personalityText.setWordWrapWidth(330)
        info.add(personalityText)

        // snackText
        const snackText = this.add.text(-63, 135, '', {})
        snackText.tintTopLeft = 10592673
        snackText.tintTopRight = 10592673
        snackText.tintBottomLeft = 10592673
        snackText.tintBottomRight = 10592673
        snackText.text = 'Pretzels'
        snackText.setStyle({color: '#33ccffff', fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#424242ff'})
        snackText.setWordWrapWidth(330)
        info.add(snackText)

        // factText
        const factText = this.add.text(-63, 250, '', {})
        factText.tintTopLeft = 10592673
        factText.tintTopRight = 10592673
        factText.tintBottomLeft = 10592673
        factText.tintBottomRight = 10592673
        factText.text = 'Can bounce really high'
        factText.setStyle({color: '#33ccffff', fixedWidth: 330, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#424242ff'})
        factText.setWordWrapWidth(330)
        info.add(factText)

        // adopt
        const adopt = this.add.container(0, 92)
        adopt.angle = 2
        adopt.visible = false
        adoptionPage.add(adopt)

        // namePuffleText
        const namePuffleText = this.add.text(95, 80, '', {})
        namePuffleText.setOrigin(0.5, 0.5)
        namePuffleText.text = 'Name your puffle'
        namePuffleText.setStyle({align: 'center', color: '#644314ff', fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        adopt.add(namePuffleText)

        // puffleNameInput
        const puffleNameInput = this.add.image(98, 145, 'petshop-adopt', 'puffleNameInput')
        puffleNameInput.angle = -2
        adopt.add(puffleNameInput)

        // nameInputText
        const nameInputText = this.add.text(97, 144, '', {})
        nameInputText.setOrigin(0.5, 0.5)
        nameInputText.text = 'Enter Name'
        nameInputText.setStyle({align: 'center', color: '#38484dff', fixedWidth: 300, fontFamily: 'Burbank Small', fontSize: '28px'})
        adopt.add(nameInputText)

        // speciesIcon
        const speciesIcon = this.add.image(-37, -2, 'petshop-adopt', 'blueIcon')
        adoptionPage.add(speciesIcon)

        // adoptBtn
        const adoptBtn = this.add.image(89, 481, 'petshop-adopt', 'adoptBtn')
        adoptionPage.add(adoptBtn)

        // text_10
        const text_10 = this.add.text(92, 482, '', {})
        text_10.angle = 2
        text_10.setOrigin(0.5, 0.5)
        text_10.text = 'Adopt'
        text_10.setStyle({align: 'center', color: '#644314ff', fontFamily: 'Burbank Small', fontSize: '48px', fontStyle: 'bold'})
        adoptionPage.add(text_10)

        // coinCost
        const coinCost = this.add.text(237, 607, '', {})
        coinCost.angle = 3.0000000000000004
        coinCost.setOrigin(1, 0.5)
        coinCost.text = '400'
        coinCost.setStyle({align: 'right', color: '#644314ff', fixedWidth: 70, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold', 'shadow.offsetX': 2, 'shadow.offsetY': 2, 'shadow.color': '#f0c351ff', 'shadow.blur': 2, 'shadow.fill': true})
        adoptionPage.add(coinCost)

        // coin
        const coin = this.add.image(253, 608, 'petshop-adopt', 'coin')
        coin.angle = 2
        adoptionPage.add(coin)

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
        whitePuffleSimpleButton.pixelPerfect = true

        // blackPuffle (components)
        const blackPuffleSimpleButton = new SimpleButton(blackPuffle)
        blackPuffleSimpleButton.callback = () => this.adoptPuffle(2)
        blackPuffleSimpleButton.pixelPerfect = true

        // pinkPuffle (components)
        const pinkPuffleSimpleButton = new SimpleButton(pinkPuffle)
        pinkPuffleSimpleButton.callback = () => this.adoptPuffle(1)
        pinkPuffleSimpleButton.pixelPerfect = true

        // purplePuffle (components)
        const purplePuffleSimpleButton = new SimpleButton(purplePuffle)
        purplePuffleSimpleButton.callback = () => this.adoptPuffle(4)
        purplePuffleSimpleButton.pixelPerfect = true

        // greenPuffle (components)
        const greenPuffleSimpleButton = new SimpleButton(greenPuffle)
        greenPuffleSimpleButton.callback = () => this.adoptPuffle(3)
        greenPuffleSimpleButton.pixelPerfect = true

        // yellowPuffle (components)
        const yellowPuffleSimpleButton = new SimpleButton(yellowPuffle)
        yellowPuffleSimpleButton.callback = () => this.adoptPuffle(6)
        yellowPuffleSimpleButton.pixelPerfect = true

        // orangePuffle (components)
        const orangePuffleSimpleButton = new SimpleButton(orangePuffle)
        orangePuffleSimpleButton.callback = () => this.adoptPuffle(8)
        orangePuffleSimpleButton.pixelPerfect = true

        // brownPuffle (components)
        const brownPuffleSimpleButton = new SimpleButton(brownPuffle)
        brownPuffleSimpleButton.callback = () => this.adoptPuffle(9)
        brownPuffleSimpleButton.pixelPerfect = true

        // dogPuffle (components)
        const dogPuffleSimpleButton = new SimpleButton(dogPuffle)
        dogPuffleSimpleButton.callback = () => this.adoptPuffle(1006)
        dogPuffleSimpleButton.pixelPerfect = true

        // bluePuffle (components)
        const bluePuffleSimpleButton = new SimpleButton(bluePuffle)
        bluePuffleSimpleButton.callback = () => this.adoptPuffle(0)
        bluePuffleSimpleButton.pixelPerfect = true

        // catPuffle (components)
        const catPuffleSimpleButton = new SimpleButton(catPuffle)
        catPuffleSimpleButton.callback = () => this.adoptPuffle(1007)
        catPuffleSimpleButton.pixelPerfect = true

        // redPuffle (components)
        const redPuffleSimpleButton = new SimpleButton(redPuffle)
        redPuffleSimpleButton.callback = () => this.adoptPuffle(5)
        redPuffleSimpleButton.pixelPerfect = true

        // mainHeader (components)
        const mainHeaderLocalisedString = new LocalisedString(mainHeader)
        mainHeaderLocalisedString.id = 'interface-closeups-adopt'

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

        // personalityHeader (components)
        const personalityHeaderLocalisedString = new LocalisedString(personalityHeader)
        personalityHeaderLocalisedString.id = 'interface-closeups-adopt-personality'

        // snackHeader (components)
        const snackHeaderLocalisedString = new LocalisedString(snackHeader)
        snackHeaderLocalisedString.id = 'interface-closeups-adopt-snack'

        // factHeader (components)
        const factHeaderLocalisedString = new LocalisedString(factHeader)
        factHeaderLocalisedString.id = 'interface-closeups-adopt-fact'

        // nameInputText (components)
        const nameInputTextInputText = new InputText(nameInputText)
        nameInputTextInputText.charlimit = 12
        nameInputTextInputText.inputfilter = /^[A-Z 0-9]*$/i

        // adoptBtn (components)
        const adoptBtnButton = new Button(adoptBtn)
        adoptBtnButton.spriteName = 'adoptBtn'
        adoptBtnButton.callback = () => this.onAdoptionClick()

        // text_10 (components)
        const text_10LocalisedString = new LocalisedString(text_10)
        text_10LocalisedString.id = 'interface-closeups-adopt-adopt'

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
        this.mainHeader = mainHeader
        this.adoptionPage = adoptionPage
        this.speciesText = speciesText
        this.info = info
        this.personalityHeader = personalityHeader
        this.snackHeader = snackHeader
        this.factHeader = factHeader
        this.personalityText = personalityText
        this.snackText = snackText
        this.factText = factText
        this.adopt = adopt
        this.nameInputText = nameInputText
        this.speciesIcon = speciesIcon
        this.coinCost = coinCost

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        for (let puffle of ['white', 'black', 'pink', 'purple', 'green', 'yellow', 'orange', 'brown', 'dog', 'blue', 'cat', 'red']) {
            this[puffle + 'Puffle'].play(`petshop-adopt-${puffle}PuffleAnim`)
        }

        this.yourPuffleNum.text = `${this.crumbs.getString('interface-closeups-adopt-puffles')}: 0`
        this.yourCoinsNum.text = `${this.crumbs.getString('interface-closeups-adopt-coins')}:\n${this.shell.client.coins}`
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
        this.adoptionPage.visible = true
        this.adopt.visible = false
        this.info.visible = true
        this.nameInputText.__InputText.clickZone.visible = false

        this.speciesText.text = this.crumbs.puffles[puffleId].name
        this.personalityText.text = this.crumbs.getString(`puffle-${puffleId}-personality`)
        if (this.crumbs.getString(`puffle-${puffleId}-snack`) == `puffle-${puffleId}-snack`) {
            this.snackText.text = this.crumbs.getString(`puffle-${puffleId}-wild`)
            this.snackHeader.text = this.crumbs.getString('interface-closeups-adopt-wild')
        } else {
            this.snackText.text = this.crumbs.getString(`puffle-${puffleId}-snack`)
            this.snackHeader.text = this.crumbs.getString('interface-closeups-adopt-snack')
        }
        this.factText.text = this.crumbs.getString(`puffle-${puffleId}-fact`)

        this.speciesText.setColor(this.crumbs.puffles[puffleId].color.replace('0x', '#'))
        this.personalityText.setColor(this.crumbs.puffles[puffleId].color.replace('0x', '#'))
        this.snackText.setColor(this.crumbs.puffles[puffleId].color.replace('0x', '#'))
        this.factText.setColor(this.crumbs.puffles[puffleId].color.replace('0x', '#'))

        this.speciesIcon.setFrame(this.getIconFromId(puffleId))

        this.coinCost.text = this.crumbs.puffles[puffleId].cost

        let lightAnimPosition = this.getLightPositionFromId(puffleId)
        this.lightAnim.x = lightAnimPosition.x
        this.lightAnim.y = lightAnimPosition.y
        this.lightAnim.play('petshop-adopt-lightAnim')

        this.adoptPuffleId = puffleId
    }

    onAdoptionClick() {
        if (!this.adopt.visible) {
            this.adopt.visible = true
            this.info.visible = false
            this.nameInputText.__InputText.clickZone.visible = true
            return
        }

        if (!this.nameInputText.__InputText.isChanged || this.nameInputText.textContent.length < 1) {
            this.interface.prompt.showError(this.crumbs.getError(52))
            return
        }

        if (this.shell.client.coins < this.crumbs.puffles[this.adoptPuffleId].cost) {
            this.interface.prompt.showError(this.crumbs.getError(0))
            return
        }

        this.airtower.sendXt('p#pn', `${this.adoptPuffleId}%${this.nameInputText.textContent}`)
        this.scene.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
