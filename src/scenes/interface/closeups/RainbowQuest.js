import Closeup from './Closeup.js'
import {Button, SimpleButton, LocalisedString, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class RainbowQuest extends Closeup {
    constructor() {
        super('RainbowQuest')

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block
        /** @type {Phaser.GameObjects.Image} */
        this.bg
        /** @type {Phaser.GameObjects.Image} */
        this.closeBtn
        /** @type {Phaser.GameObjects.Image} */
        this.rainbowPuffle
        /** @type {Phaser.GameObjects.Image} */
        this.rainbowPuffleBtn
        /** @type {Phaser.GameObjects.Text} */
        this.rainbowPuffleGoThereText
        /** @type {Phaser.GameObjects.Image} */
        this.rainbowPuffleLights
        /** @type {Phaser.GameObjects.Text} */
        this.rainbowPuffleHeader
        /** @type {Phaser.GameObjects.Image} */
        this.bonus
        /** @type {Phaser.GameObjects.Image} */
        this.bonusBtn
        /** @type {Phaser.GameObjects.Text} */
        this.bonusHeader
        /** @type {Phaser.GameObjects.Image} */
        this.bonusLights
        /** @type {Phaser.GameObjects.Text} */
        this.bonusCollectText
        /** @type {Phaser.GameObjects.Image} */
        this.header
        /** @type {Phaser.GameObjects.Text} */
        this.headerText
        /** @type {Phaser.GameObjects.Container} */
        this.task4
        /** @type {Phaser.GameObjects.Image} */
        this.task4Card
        /** @type {Phaser.GameObjects.Image} */
        this.task4Checkbox
        /** @type {Phaser.GameObjects.Image} */
        this.task4Coins
        /** @type {Phaser.GameObjects.Image} */
        this.task4Item
        /** @type {Phaser.GameObjects.Image} */
        this.task4CoinsCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task4CoinsCollectText
        /** @type {Phaser.GameObjects.Image} */
        this.task4ItemCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task4ItemCollectText
        /** @type {Phaser.GameObjects.Text} */
        this.task4Criteria
        /** @type {Phaser.GameObjects.Text} */
        this.task4TaskNum
        /** @type {Phaser.GameObjects.Image} */
        this.task4Preview
        /** @type {Phaser.GameObjects.Image} */
        this.task4GoThereBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task4GoThereText
        /** @type {Phaser.GameObjects.Text} */
        this.task4CompleteHeader
        /** @type {Phaser.GameObjects.Text} */
        this.task4CompleteLine1
        /** @type {Phaser.GameObjects.Image} */
        this.task4Icon
        /** @type {Phaser.GameObjects.Text} */
        this.task4LockedLine1
        /** @type {Phaser.GameObjects.Text} */
        this.task4LockedLine2
        /** @type {Phaser.GameObjects.Image} */
        this.task4ClickBlocker
        /** @type {Phaser.GameObjects.Container} */
        this.task3
        /** @type {Phaser.GameObjects.Image} */
        this.task3Card
        /** @type {Phaser.GameObjects.Image} */
        this.task3Checkbox
        /** @type {Phaser.GameObjects.Image} */
        this.task3Coins
        /** @type {Phaser.GameObjects.Image} */
        this.task3Item
        /** @type {Phaser.GameObjects.Image} */
        this.task3CoinsCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task3CoinsCollectText
        /** @type {Phaser.GameObjects.Image} */
        this.task3ItemCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task3ItemCollectText
        /** @type {Phaser.GameObjects.Text} */
        this.task3Criteria
        /** @type {Phaser.GameObjects.Text} */
        this.task3TaskNum
        /** @type {Phaser.GameObjects.Image} */
        this.task3Preview
        /** @type {Phaser.GameObjects.Image} */
        this.task3GoThereBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task3GoThereText
        /** @type {Phaser.GameObjects.Text} */
        this.task3CompleteHeader
        /** @type {Phaser.GameObjects.Text} */
        this.task3CompleteLine1
        /** @type {Phaser.GameObjects.Text} */
        this.task3CompleteLine2
        /** @type {Phaser.GameObjects.Text} */
        this.task3CompleteCountdown
        /** @type {Phaser.GameObjects.Image} */
        this.task3Icon
        /** @type {Phaser.GameObjects.Text} */
        this.task3LockedLine1
        /** @type {Phaser.GameObjects.Text} */
        this.task3LockedLine2
        /** @type {Phaser.GameObjects.Image} */
        this.task3ClickBlocker
        /** @type {Phaser.GameObjects.Container} */
        this.task2
        /** @type {Phaser.GameObjects.Image} */
        this.task2Card
        /** @type {Phaser.GameObjects.Image} */
        this.task2Checkbox
        /** @type {Phaser.GameObjects.Image} */
        this.task2Coins
        /** @type {Phaser.GameObjects.Image} */
        this.task2Item
        /** @type {Phaser.GameObjects.Image} */
        this.task2CoinsCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task2CoinsCollectText
        /** @type {Phaser.GameObjects.Image} */
        this.task2ItemCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task2ItemCollectText
        /** @type {Phaser.GameObjects.Text} */
        this.task2Criteria
        /** @type {Phaser.GameObjects.Text} */
        this.task2TaskNum
        /** @type {Phaser.GameObjects.Image} */
        this.task2Preview
        /** @type {Phaser.GameObjects.Image} */
        this.task2GoThereBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task2GoThereText
        /** @type {Phaser.GameObjects.Text} */
        this.task2CompleteHeader
        /** @type {Phaser.GameObjects.Text} */
        this.task2CompleteLine1
        /** @type {Phaser.GameObjects.Text} */
        this.task2CompleteLine2
        /** @type {Phaser.GameObjects.Text} */
        this.task2CompleteCountdown
        /** @type {Phaser.GameObjects.Image} */
        this.task2Icon
        /** @type {Phaser.GameObjects.Text} */
        this.task2LockedLine1
        /** @type {Phaser.GameObjects.Text} */
        this.task2LockedLine2
        /** @type {Phaser.GameObjects.Image} */
        this.task2ClickBlocker
        /** @type {Phaser.GameObjects.Container} */
        this.task1
        /** @type {Phaser.GameObjects.Image} */
        this.task1Card
        /** @type {Phaser.GameObjects.Image} */
        this.task1Checkbox
        /** @type {Phaser.GameObjects.Image} */
        this.task1Coins
        /** @type {Phaser.GameObjects.Image} */
        this.task1Item
        /** @type {Phaser.GameObjects.Image} */
        this.task1CoinsCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task1CoinsCollectText
        /** @type {Phaser.GameObjects.Image} */
        this.task1ItemCollectBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task1ItemCollectText
        /** @type {Phaser.GameObjects.Text} */
        this.task1Criteria
        /** @type {Phaser.GameObjects.Text} */
        this.task1TaskNum
        /** @type {Phaser.GameObjects.Image} */
        this.task1Preview
        /** @type {Phaser.GameObjects.Image} */
        this.task1GoThereBtn
        /** @type {Phaser.GameObjects.Text} */
        this.task1GoThereText
        /** @type {Phaser.GameObjects.Text} */
        this.task1CompleteHeader
        /** @type {Phaser.GameObjects.Text} */
        this.task1CompleteLine1
        /** @type {Phaser.GameObjects.Text} */
        this.task1CompleteLine2
        /** @type {Phaser.GameObjects.Text} */
        this.task1CompleteCountdown
        /** @type {Phaser.GameObjects.Image} */
        this.task1Icon
        /** @type {Phaser.GameObjects.Image} */
        this.task1ClickBlocker

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('rainbowquest-pack', 'client/media/interface/closeups/rainbowquest/rainbowquest-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 3351316

        // bg
        const bg = this.add.image(759, 480, 'rainbowquest', 'bg')

        // closeBtn
        const closeBtn = this.add.image(1478, 54, 'rainbowquest', 'closeBtn')

        // rainbowPuffle
        const rainbowPuffle = this.add.image(1200, 748, 'rainbowquest', 'puffle-locked')

        // rainbowPuffleBtn
        const rainbowPuffleBtn = this.add.image(1308, 800, 'rainbowquest', 'brown-btn')
        rainbowPuffleBtn.visible = false

        // rainbowPuffleGoThereText
        const rainbowPuffleGoThereText = this.add.text(1308, 800, '', {})
        rainbowPuffleGoThereText.setOrigin(0.5, 0.5)
        rainbowPuffleGoThereText.text = 'Go there!'
        rainbowPuffleGoThereText.setStyle({align: 'center', color: '#896E35', fontFamily: 'CatseyeW00', fontSize: '30px', 'shadow.color': '#fff'})

        // rainbowPuffleLights
        const rainbowPuffleLights = this.add.image(1308, 740, 'rainbowquest', 'lights0001')

        // rainbowPuffleHeader
        const rainbowPuffleHeader = this.add.text(991, 688, '', {})
        rainbowPuffleHeader.setOrigin(0, 0.5)
        rainbowPuffleHeader.text = 'Adopt a Rainbow Puffle!\nLaunch from the Rooftop cannon.'
        rainbowPuffleHeader.setStyle({color: '#c9a04cff', fontFamily: 'CatseyeW00', fontSize: '25px', 'shadow.offsetX': -1, 'shadow.offsetY': 1, 'shadow.color': '#543510ff', 'shadow.fill': true})

        // bonus
        const bonus = this.add.image(1200, 480, 'rainbowquest', 'bonus-item-locked')

        // bonusBtn
        const bonusBtn = this.add.image(1308, 521, 'rainbowquest', 'brown-btn')
        bonusBtn.visible = false

        // bonusHeader
        const bonusHeader = this.add.text(991, 422, '', {})
        bonusHeader.setOrigin(0, 0.5)
        bonusHeader.text = 'BONUS ITEM'
        bonusHeader.setStyle({color: '#c9a04cff', fontFamily: 'CatseyeW00', fontSize: '30px', fontStyle: 'bold', 'shadow.offsetX': -1, 'shadow.offsetY': 1, 'shadow.color': '#543510ff', 'shadow.fill': true})

        // bonusLights
        const bonusLights = this.add.image(1308, 461, 'rainbowquest', 'lights0001')

        // bonusCollectText
        const bonusCollectText = this.add.text(1308, 521, '', {})
        bonusCollectText.setOrigin(0.5, 0.5)
        bonusCollectText.text = 'Collect'
        bonusCollectText.setStyle({align: 'center', color: '#896E35', fontFamily: 'CatseyeW00', fontSize: '30px', 'shadow.color': '#fff'})

        // header
        const header = this.add.image(1200, 210, 'rainbowquest', 'header')

        // headerText
        const headerText = this.add.text(1003, 236, '', {})
        headerText.text = 'Complete all four puffle tasks to earn your bonus!'
        headerText.setStyle({color: '#3d2615ff', fixedWidth: 395, fontFamily: 'CatseyeW00', fontSize: '30px', 'shadow.offsetX': -1, 'shadow.offsetY': 1, 'shadow.color': '#ffde80ff', 'shadow.fill': true})
        headerText.setWordWrapWidth(395)

        // task4
        const task4 = this.add.container(674.3492258621212, 497.88931482348454)
        task4.angle = 4

        // task4Card
        const task4Card = this.add.image(1.4417125934268142, 0.17734637706678313, 'rainbowquest', 'task4/card-locked')
        task4Card.angle = -4
        task4.add(task4Card)

        // task4Checkbox
        const task4Checkbox = this.add.image(-161.55828740657319, -292.8226536229332, 'rainbowquest', 'task2/checkbox')
        task4Checkbox.angle = -4
        task4Checkbox.visible = false
        task4.add(task4Checkbox)

        // task4Coins
        const task4Coins = this.add.image(-101.55828740657319, -19.822653622933217, 'rainbowquest', 'task4/coins-locked')
        task4Coins.angle = -4
        task4Coins.setOrigin(0.5, 1)
        task4.add(task4Coins)

        // task4Item
        const task4Item = this.add.image(79.44171259342681, -19.822653622933217, 'rainbowquest', 'task4/item-locked')
        task4Item.angle = -4
        task4Item.setOrigin(0.5, 1)
        task4.add(task4Item)

        // task4CoinsCollectBtn
        const task4CoinsCollectBtn = this.add.image(-101.55828740657319, -47.82265362293322, 'rainbowquest', 'task4/green-btn')
        task4CoinsCollectBtn.angle = -4
        task4CoinsCollectBtn.visible = false
        task4.add(task4CoinsCollectBtn)

        // task4CoinsCollectText
        const task4CoinsCollectText = this.add.text(-101.55828740657319, -47.82265362293322, '', {})
        task4CoinsCollectText.setOrigin(0.5, 0.5)
        task4CoinsCollectText.text = 'Collect'
        task4CoinsCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task4.add(task4CoinsCollectText)

        // task4ItemCollectBtn
        const task4ItemCollectBtn = this.add.image(95.44171259342681, -47.82265362293322, 'rainbowquest', 'task4/green-btn')
        task4ItemCollectBtn.angle = -4
        task4ItemCollectBtn.visible = false
        task4.add(task4ItemCollectBtn)

        // task4ItemCollectText
        const task4ItemCollectText = this.add.text(91.44171259342681, -47.82265362293322, '', {})
        task4ItemCollectText.setOrigin(0.5, 0.5)
        task4ItemCollectText.text = 'Collect'
        task4ItemCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task4.add(task4ItemCollectText)

        // task4Criteria
        const task4Criteria = this.add.text(-200.55828740657319, -218.82265362293322, '', {})
        task4Criteria.setOrigin(0, 0.5)
        task4Criteria.visible = false
        task4Criteria.text = 'Groom your puffle'
        task4Criteria.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task4.add(task4Criteria)

        // task4TaskNum
        const task4TaskNum = this.add.text(138.44171259342681, -282.8226536229332, '', {})
        task4TaskNum.setOrigin(1, 0.5)
        task4TaskNum.text = 'TASK 4'
        task4TaskNum.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task4.add(task4TaskNum)

        // task4Preview
        const task4Preview = this.add.image(1.4417125934268142, 117.17734637706678, 'rainbowquest', 'task4/preview')
        task4Preview.angle = -4
        task4Preview.visible = false
        task4.add(task4Preview)

        // task4GoThereBtn
        const task4GoThereBtn = this.add.image(1.4417125934268142, 287.1773463770668, 'rainbowquest', 'task4/green-btn')
        task4GoThereBtn.angle = -4
        task4GoThereBtn.visible = false
        task4.add(task4GoThereBtn)

        // task4GoThereText
        const task4GoThereText = this.add.text(0.44171259342681424, 287.1773463770668, '', {})
        task4GoThereText.setOrigin(0.5, 0.5)
        task4GoThereText.visible = false
        task4GoThereText.text = 'Go there!'
        task4GoThereText.setStyle({align: 'center', color: '#f3fcc5ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task4.add(task4GoThereText)

        // task4CompleteHeader
        const task4CompleteHeader = this.add.text(2.4417125934268142, 48.17734637706678, '', {})
        task4CompleteHeader.setOrigin(0.5, 0.5)
        task4CompleteHeader.visible = false
        task4CompleteHeader.text = 'Zzzzzzz!'
        task4CompleteHeader.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task4.add(task4CompleteHeader)

        // task4CompleteLine1
        const task4CompleteLine1 = this.add.text(1.4417125934268142, 91.17734637706678, '', {})
        task4CompleteLine1.setOrigin(0.5, 0.5)
        task4CompleteLine1.visible = false
        task4CompleteLine1.text = 'Your puffle looks so relaxed.'
        task4CompleteLine1.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task4.add(task4CompleteLine1)

        // task4Icon
        const task4Icon = this.add.image(1.4417125934268142, 212.17734637706678, 'rainbowquest', 'task4/icon')
        task4Icon.angle = -4
        task4Icon.visible = false
        task4.add(task4Icon)

        // task4LockedLine1
        const task4LockedLine1 = this.add.text(1.4417125934268142, 46.17734637706678, '', {})
        task4LockedLine1.setOrigin(0.5, 0.5)
        task4LockedLine1.text = "This puffle task isn't ready yet."
        task4LockedLine1.setStyle({align: 'center', color: '#fefad4ff', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.offsetX': 2, 'shadow.offsetY': 1, 'shadow.color': '#9b8b53ff', 'shadow.fill': true})
        task4.add(task4LockedLine1)

        // task4LockedLine2
        const task4LockedLine2 = this.add.text(1.4417125934268142, 85.17734637706678, '', {})
        task4LockedLine2.setOrigin(0.5, 0.5)
        task4LockedLine2.text = 'Complete the previous task.'
        task4LockedLine2.setStyle({align: 'center', color: '#fefad4ff', fontFamily: 'CatseyeW00', fontSize: '27px', 'shadow.offsetX': 2, 'shadow.offsetY': 1, 'shadow.color': '#9b8b53ff', 'shadow.fill': true})
        task4.add(task4LockedLine2)

        // task4ClickBlocker
        const task4ClickBlocker = this.add.image(1.4405147883195468, 0.1775351249421533, 'rainbowquest', 'task4/card-locked')
        task4ClickBlocker.angle = -4
        task4ClickBlocker.alpha = 0.2
        task4ClickBlocker.alphaTopLeft = 0.2
        task4ClickBlocker.alphaTopRight = 0.2
        task4ClickBlocker.alphaBottomLeft = 0.2
        task4ClickBlocker.alphaBottomRight = 0.2
        task4ClickBlocker.tintFill = true
        task4ClickBlocker.tintTopLeft = 4465164
        task4ClickBlocker.tintTopRight = 4465164
        task4ClickBlocker.tintBottomLeft = 4465164
        task4ClickBlocker.tintBottomRight = 4465164
        task4.add(task4ClickBlocker)

        // task3
        const task3 = this.add.container(569.6771424727272, 489.8436303196966)
        task3.angle = -1

        // task3Card
        const task3Card = this.add.image(1.3379708652490194, -4.831174550688274, 'rainbowquest', 'task3/card-locked')
        task3Card.angle = 1
        task3.add(task3Card)

        // task3Checkbox
        const task3Checkbox = this.add.image(-159.66202913475098, -288.8311745506883, 'rainbowquest', 'task3/checkbox')
        task3Checkbox.angle = 1
        task3Checkbox.visible = false
        task3.add(task3Checkbox)

        // task3Coins
        const task3Coins = this.add.image(-101.66202913475098, -24.831174550688274, 'rainbowquest', 'task3/coins-locked')
        task3Coins.angle = 1
        task3Coins.setOrigin(0.5, 1)
        task3.add(task3Coins)

        // task3Item
        const task3Item = this.add.image(79.33797086524902, -24.831174550688274, 'rainbowquest', 'task3/item-locked')
        task3Item.angle = 1
        task3Item.setOrigin(0.5, 1)
        task3.add(task3Item)

        // task3CoinsCollectBtn
        const task3CoinsCollectBtn = this.add.image(-101.66202913475098, -52.831174550688274, 'rainbowquest', 'task3/green-btn')
        task3CoinsCollectBtn.angle = 1
        task3CoinsCollectBtn.visible = false
        task3.add(task3CoinsCollectBtn)

        // task3CoinsCollectText
        const task3CoinsCollectText = this.add.text(-101.66202913475098, -51.831174550688274, '', {})
        task3CoinsCollectText.setOrigin(0.5, 0.5)
        task3CoinsCollectText.text = 'Collect'
        task3CoinsCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task3.add(task3CoinsCollectText)

        // task3ItemCollectBtn
        const task3ItemCollectBtn = this.add.image(95.33797086524902, -52.831174550688274, 'rainbowquest', 'task3/green-btn')
        task3ItemCollectBtn.angle = 1
        task3ItemCollectBtn.visible = false
        task3.add(task3ItemCollectBtn)

        // task3ItemCollectText
        const task3ItemCollectText = this.add.text(96.33797086524902, -50.831174550688274, '', {})
        task3ItemCollectText.setOrigin(0.5, 0.5)
        task3ItemCollectText.text = 'Collect'
        task3ItemCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task3.add(task3ItemCollectText)

        // task3Criteria
        const task3Criteria = this.add.text(-200.66202913475098, -224.83117455068827, '', {})
        task3Criteria.setOrigin(0, 0.5)
        task3Criteria.visible = false
        task3Criteria.text = 'Feed your puffle'
        task3Criteria.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task3.add(task3Criteria)

        // task3TaskNum
        const task3TaskNum = this.add.text(138.33797086524902, -287.8311745506883, '', {})
        task3TaskNum.setOrigin(1, 0.5)
        task3TaskNum.text = 'TASK 3'
        task3TaskNum.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task3.add(task3TaskNum)

        // task3Preview
        const task3Preview = this.add.image(1.3379708652490194, 112.16882544931173, 'rainbowquest', 'task3/preview')
        task3Preview.angle = 1
        task3Preview.visible = false
        task3.add(task3Preview)

        // task3GoThereBtn
        const task3GoThereBtn = this.add.image(1.3379708652490194, 282.1688254493117, 'rainbowquest', 'task3/green-btn')
        task3GoThereBtn.angle = 1
        task3GoThereBtn.visible = false
        task3.add(task3GoThereBtn)

        // task3GoThereText
        const task3GoThereText = this.add.text(0.3379708652490194, 282.1688254493117, '', {})
        task3GoThereText.setOrigin(0.5, 0.5)
        task3GoThereText.visible = false
        task3GoThereText.text = 'Go there!'
        task3GoThereText.setStyle({align: 'center', color: '#f3fcc5ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task3.add(task3GoThereText)

        // task3CompleteHeader
        const task3CompleteHeader = this.add.text(2.3379708652490194, 43.168825449311726, '', {})
        task3CompleteHeader.setOrigin(0.5, 0.5)
        task3CompleteHeader.visible = false
        task3CompleteHeader.text = 'Delicious'
        task3CompleteHeader.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task3.add(task3CompleteHeader)

        // task3CompleteLine1
        const task3CompleteLine1 = this.add.text(1.3379708652490194, 86.16882544931173, '', {})
        task3CompleteLine1.setOrigin(0.5, 0.5)
        task3CompleteLine1.visible = false
        task3CompleteLine1.text = 'Your puffle loved that snack!'
        task3CompleteLine1.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task3.add(task3CompleteLine1)

        // task3CompleteLine2
        const task3CompleteLine2 = this.add.text(1.3379708652490194, 125.16882544931173, '', {})
        task3CompleteLine2.setOrigin(0.5, 0.5)
        task3CompleteLine2.visible = false
        task3CompleteLine2.text = 'Come back to relax with your pet in:'
        task3CompleteLine2.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task3.add(task3CompleteLine2)

        // task3CompleteCountdown
        const task3CompleteCountdown = this.add.text(1.3379708652490194, 199.16882544931173, '', {})
        task3CompleteCountdown.setOrigin(0.5, 0.5)
        task3CompleteCountdown.visible = false
        task3CompleteCountdown.text = '20 min'
        task3CompleteCountdown.setStyle({align: 'center', color: '#2c2a1dff', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task3.add(task3CompleteCountdown)

        // task3Icon
        const task3Icon = this.add.image(1.3379708652490194, 207.16882544931173, 'rainbowquest', 'task3/icon')
        task3Icon.angle = 1
        task3Icon.visible = false
        task3.add(task3Icon)

        // task3LockedLine1
        const task3LockedLine1 = this.add.text(1.3379708652490194, 41.168825449311726, '', {})
        task3LockedLine1.setOrigin(0.5, 0.5)
        task3LockedLine1.text = "This puffle task isn't ready yet."
        task3LockedLine1.setStyle({align: 'center', color: '#fefad4ff', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.offsetX': 2, 'shadow.offsetY': 1, 'shadow.color': '#9b8b53ff', 'shadow.fill': true})
        task3.add(task3LockedLine1)

        // task3LockedLine2
        const task3LockedLine2 = this.add.text(1.3379708652490194, 80.16882544931173, '', {})
        task3LockedLine2.setOrigin(0.5, 0.5)
        task3LockedLine2.text = 'Complete the previous task.'
        task3LockedLine2.setStyle({align: 'center', color: '#fefad4ff', fontFamily: 'CatseyeW00', fontSize: '27px', 'shadow.offsetX': 2, 'shadow.offsetY': 1, 'shadow.color': '#9b8b53ff', 'shadow.fill': true})
        task3.add(task3LockedLine2)

        // task3ClickBlocker
        const task3ClickBlocker = this.add.image(1.3363597453238754, -4.831722211841907, 'rainbowquest', 'task3/card-locked')
        task3ClickBlocker.angle = 1
        task3ClickBlocker.alpha = 0.2
        task3ClickBlocker.alphaTopLeft = 0.2
        task3ClickBlocker.alphaTopRight = 0.2
        task3ClickBlocker.alphaBottomLeft = 0.2
        task3ClickBlocker.alphaBottomRight = 0.2
        task3ClickBlocker.tintFill = true
        task3ClickBlocker.tintTopLeft = 4465164
        task3ClickBlocker.tintTopRight = 4465164
        task3ClickBlocker.tintBottomLeft = 4465164
        task3ClickBlocker.tintBottomRight = 4465164
        task3.add(task3ClickBlocker)

        // task2
        const task2 = this.add.container(462.1502376787877, 500.60708271666635)
        task2.angle = 2

        // task2Card
        const task2Card = this.add.image(-27.758865496365843, 12.128989127340787, 'rainbowquest', 'task2/card-locked')
        task2Card.angle = -2
        task2.add(task2Card)

        // task2Checkbox
        const task2Checkbox = this.add.image(-190.75886549636584, -280.8710108726592, 'rainbowquest', 'task2/checkbox')
        task2Checkbox.angle = -2
        task2Checkbox.visible = false
        task2.add(task2Checkbox)

        // task2Coins
        const task2Coins = this.add.image(-130.75886549636584, -7.8710108726592125, 'rainbowquest', 'task2/coins-locked')
        task2Coins.angle = -2
        task2Coins.setOrigin(0.5, 1)
        task2.add(task2Coins)

        // task2Item
        const task2Item = this.add.image(50.24113450363416, -7.8710108726592125, 'rainbowquest', 'task2/item-locked')
        task2Item.angle = -2
        task2Item.setOrigin(0.5, 1)
        task2.add(task2Item)

        // task2CoinsCollectBtn
        const task2CoinsCollectBtn = this.add.image(-130.75886549636584, -35.87101087265921, 'rainbowquest', 'task2/green-btn')
        task2CoinsCollectBtn.angle = -2
        task2CoinsCollectBtn.visible = false
        task2.add(task2CoinsCollectBtn)

        // task2CoinsCollectText
        const task2CoinsCollectText = this.add.text(-130.75886549636584, -35.87101087265921, '', {})
        task2CoinsCollectText.setOrigin(0.5, 0.5)
        task2CoinsCollectText.text = 'Collect'
        task2CoinsCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task2.add(task2CoinsCollectText)

        // task2ItemCollectBtn
        const task2ItemCollectBtn = this.add.image(66.24113450363416, -35.87101087265921, 'rainbowquest', 'task2/green-btn')
        task2ItemCollectBtn.angle = -2
        task2ItemCollectBtn.visible = false
        task2.add(task2ItemCollectBtn)

        // task2ItemCollectText
        const task2ItemCollectText = this.add.text(62.24113450363416, -35.87101087265921, '', {})
        task2ItemCollectText.setOrigin(0.5, 0.5)
        task2ItemCollectText.text = 'Collect'
        task2ItemCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task2.add(task2ItemCollectText)

        // task2Criteria
        const task2Criteria = this.add.text(-229.75886549636584, -207.8710108726592, '', {})
        task2Criteria.setOrigin(0, 0.5)
        task2Criteria.visible = false
        task2Criteria.text = 'Groom your puffle'
        task2Criteria.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task2.add(task2Criteria)

        // task2TaskNum
        const task2TaskNum = this.add.text(109.24113450363416, -270.8710108726592, '', {})
        task2TaskNum.setOrigin(1, 0.5)
        task2TaskNum.text = 'TASK 2'
        task2TaskNum.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task2.add(task2TaskNum)

        // task2Preview
        const task2Preview = this.add.image(-27.758865496365843, 129.1289891273408, 'rainbowquest', 'task2/preview')
        task2Preview.angle = -2
        task2Preview.visible = false
        task2.add(task2Preview)

        // task2GoThereBtn
        const task2GoThereBtn = this.add.image(-27.758865496365843, 299.1289891273408, 'rainbowquest', 'task2/green-btn')
        task2GoThereBtn.angle = -2
        task2GoThereBtn.visible = false
        task2.add(task2GoThereBtn)

        // task2GoThereText
        const task2GoThereText = this.add.text(-28.758865496365843, 299.1289891273408, '', {})
        task2GoThereText.setOrigin(0.5, 0.5)
        task2GoThereText.visible = false
        task2GoThereText.text = 'Go there!'
        task2GoThereText.setStyle({align: 'center', color: '#f3fcc5ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task2.add(task2GoThereText)

        // task2CompleteHeader
        const task2CompleteHeader = this.add.text(-26.758865496365843, 60.12898912734079, '', {})
        task2CompleteHeader.setOrigin(0.5, 0.5)
        task2CompleteHeader.visible = false
        task2CompleteHeader.text = 'Oh so shiny!'
        task2CompleteHeader.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task2.add(task2CompleteHeader)

        // task2CompleteLine1
        const task2CompleteLine1 = this.add.text(-27.758865496365843, 103.12898912734079, '', {})
        task2CompleteLine1.setOrigin(0.5, 0.5)
        task2CompleteLine1.visible = false
        task2CompleteLine1.text = 'Your puffle looks terrific'
        task2CompleteLine1.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task2.add(task2CompleteLine1)

        // task2CompleteLine2
        const task2CompleteLine2 = this.add.text(-27.758865496365843, 142.1289891273408, '', {})
        task2CompleteLine2.setOrigin(0.5, 0.5)
        task2CompleteLine2.visible = false
        task2CompleteLine2.text = 'Come back to feed your pet in:'
        task2CompleteLine2.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task2.add(task2CompleteLine2)

        // task2CompleteCountdown
        const task2CompleteCountdown = this.add.text(-27.758865496365843, 216.1289891273408, '', {})
        task2CompleteCountdown.setOrigin(0.5, 0.5)
        task2CompleteCountdown.visible = false
        task2CompleteCountdown.text = '20 min'
        task2CompleteCountdown.setStyle({align: 'center', color: '#2c2a1dff', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task2.add(task2CompleteCountdown)

        // task2Icon
        const task2Icon = this.add.image(-27.758865496365843, 224.1289891273408, 'rainbowquest', 'task2/icon')
        task2Icon.angle = -2
        task2Icon.visible = false
        task2.add(task2Icon)

        // task2LockedLine1
        const task2LockedLine1 = this.add.text(-27.758865496365843, 58.12898912734079, '', {})
        task2LockedLine1.setOrigin(0.5, 0.5)
        task2LockedLine1.text = "This puffle task isn't ready yet."
        task2LockedLine1.setStyle({align: 'center', color: '#fefad4ff', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.offsetX': 2, 'shadow.offsetY': 1, 'shadow.color': '#9b8b53ff', 'shadow.fill': true})
        task2.add(task2LockedLine1)

        // task2LockedLine2
        const task2LockedLine2 = this.add.text(-27.758865496365843, 97.12898912734079, '', {})
        task2LockedLine2.setOrigin(0.5, 0.5)
        task2LockedLine2.text = 'Complete the previous task.'
        task2LockedLine2.setStyle({align: 'center', color: '#fefad4ff', fontFamily: 'CatseyeW00', fontSize: '27px', 'shadow.offsetX': 2, 'shadow.offsetY': 1, 'shadow.color': '#9b8b53ff', 'shadow.fill': true})
        task2.add(task2LockedLine2)

        // task2ClickBlocker
        const task2ClickBlocker = this.add.image(-27.752161659464548, 12.132115800186455, 'rainbowquest', 'task2/card-locked')
        task2ClickBlocker.angle = -2
        task2ClickBlocker.alpha = 0.2
        task2ClickBlocker.alphaTopLeft = 0.2
        task2ClickBlocker.alphaTopRight = 0.2
        task2ClickBlocker.alphaBottomLeft = 0.2
        task2ClickBlocker.alphaBottomRight = 0.2
        task2ClickBlocker.tintFill = true
        task2ClickBlocker.tintTopLeft = 4465164
        task2ClickBlocker.tintTopRight = 4465164
        task2ClickBlocker.tintBottomLeft = 4465164
        task2ClickBlocker.tintBottomRight = 4465164
        task2.add(task2ClickBlocker)

        // task1
        const task1 = this.add.container(336.29541627424226, 462.1796720143937)
        task1.angle = -3.7000000000000455

        // task1Card
        const task1Card = this.add.image(10.7030513271622, -0.05154182160691789, 'rainbowquest', 'task1/card')
        task1Card.angle = 3.7000000000000455
        task1.add(task1Card)

        // task1Checkbox
        const task1Checkbox = this.add.image(-155.2969486728378, -284.0515418216069, 'rainbowquest', 'task1/checkbox')
        task1Checkbox.angle = 3.7000000000000455
        task1.add(task1Checkbox)

        // task1Coins
        const task1Coins = this.add.image(-92.2969486728378, -20.051541821606918, 'rainbowquest', 'task1/coins-locked')
        task1Coins.angle = 3.7000000000000455
        task1Coins.setOrigin(0.5, 1)
        task1.add(task1Coins)

        // task1Item
        const task1Item = this.add.image(88.7030513271622, -20.051541821606918, 'rainbowquest', 'task1/item-locked')
        task1Item.angle = 3.7000000000000455
        task1Item.setOrigin(0.5, 1)
        task1.add(task1Item)

        // task1CoinsCollectBtn
        const task1CoinsCollectBtn = this.add.image(-92.2969486728378, -48.05154182160692, 'rainbowquest', 'task1/green-btn')
        task1CoinsCollectBtn.angle = 3.7000000000000455
        task1CoinsCollectBtn.visible = false
        task1.add(task1CoinsCollectBtn)

        // task1CoinsCollectText
        const task1CoinsCollectText = this.add.text(-92.2969486728378, -48.05154182160692, '', {})
        task1CoinsCollectText.setOrigin(0.5, 0.5)
        task1CoinsCollectText.text = 'Collect'
        task1CoinsCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task1.add(task1CoinsCollectText)

        // task1ItemCollectBtn
        const task1ItemCollectBtn = this.add.image(104.7030513271622, -48.05154182160692, 'rainbowquest', 'task1/green-btn')
        task1ItemCollectBtn.angle = 3.7000000000000455
        task1ItemCollectBtn.visible = false
        task1.add(task1ItemCollectBtn)

        // task1ItemCollectText
        const task1ItemCollectText = this.add.text(107.7030513271622, -48.05154182160692, '', {})
        task1ItemCollectText.setOrigin(0.5, 0.5)
        task1ItemCollectText.text = 'Collect'
        task1ItemCollectText.setStyle({align: 'center', color: '#948863ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task1.add(task1ItemCollectText)

        // task1Criteria
        const task1Criteria = this.add.text(-191.2969486728378, -220.05154182160692, '', {})
        task1Criteria.setOrigin(0, 0.5)
        task1Criteria.text = 'Exercise your puffle'
        task1Criteria.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task1.add(task1Criteria)

        // task1TaskNum
        const task1TaskNum = this.add.text(147.7030513271622, -283.0515418216069, '', {})
        task1TaskNum.setOrigin(1, 0.5)
        task1TaskNum.text = 'TASK 1'
        task1TaskNum.setStyle({align: 'right', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task1.add(task1TaskNum)

        // task1Preview
        const task1Preview = this.add.image(10.7030513271622, 116.94845817839308, 'rainbowquest', 'task1/preview')
        task1Preview.angle = 3.7000000000000455
        task1.add(task1Preview)

        // task1GoThereBtn
        const task1GoThereBtn = this.add.image(10.7030513271622, 286.9484581783931, 'rainbowquest', 'task1/green-btn')
        task1GoThereBtn.angle = 3.7000000000000455
        task1.add(task1GoThereBtn)

        // task1GoThereText
        const task1GoThereText = this.add.text(9.7030513271622, 286.9484581783931, '', {})
        task1GoThereText.setOrigin(0.5, 0.5)
        task1GoThereText.text = 'Go there!'
        task1GoThereText.setStyle({align: 'center', color: '#f3fcc5ff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#fff'})
        task1.add(task1GoThereText)

        // task1CompleteHeader
        const task1CompleteHeader = this.add.text(11.7030513271622, 47.94845817839308, '', {})
        task1CompleteHeader.setOrigin(0.5, 0.5)
        task1CompleteHeader.visible = false
        task1CompleteHeader.text = 'Feeling the burn!'
        task1CompleteHeader.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task1.add(task1CompleteHeader)

        // task1CompleteLine1
        const task1CompleteLine1 = this.add.text(10.7030513271622, 90.94845817839308, '', {})
        task1CompleteLine1.setOrigin(0.5, 0.5)
        task1CompleteLine1.visible = false
        task1CompleteLine1.text = 'Your puffle got a work out!'
        task1CompleteLine1.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task1.add(task1CompleteLine1)

        // task1CompleteLine2
        const task1CompleteLine2 = this.add.text(10.7030513271622, 129.94845817839308, '', {})
        task1CompleteLine2.setOrigin(0.5, 0.5)
        task1CompleteLine2.visible = false
        task1CompleteLine2.text = 'Come back to groom your pet in:'
        task1CompleteLine2.setStyle({align: 'center', color: '#938C61', fontFamily: 'CatseyeW00', fontSize: '24px', 'shadow.color': '#fff'})
        task1.add(task1CompleteLine2)

        // task1CompleteCountdown
        const task1CompleteCountdown = this.add.text(10.7030513271622, 203.94845817839308, '', {})
        task1CompleteCountdown.setOrigin(0.5, 0.5)
        task1CompleteCountdown.visible = false
        task1CompleteCountdown.text = '20 min'
        task1CompleteCountdown.setStyle({align: 'center', color: '#2c2a1dff', fontFamily: 'CatseyeW00', fontSize: '36px', 'shadow.color': '#fff'})
        task1.add(task1CompleteCountdown)

        // task1Icon
        const task1Icon = this.add.image(10.7030513271622, 211.94845817839308, 'rainbowquest', 'task1/icon')
        task1Icon.visible = false
        task1.add(task1Icon)

        // task1ClickBlocker
        const task1ClickBlocker = this.add.image(10.698554488253421, -0.05320822939864911, 'rainbowquest', 'task1/card')
        task1ClickBlocker.angle = 3.7000000000000455
        task1ClickBlocker.alpha = 0.2
        task1ClickBlocker.alphaTopLeft = 0.2
        task1ClickBlocker.alphaTopRight = 0.2
        task1ClickBlocker.alphaBottomLeft = 0.2
        task1ClickBlocker.alphaBottomRight = 0.2
        task1ClickBlocker.tintFill = true
        task1ClickBlocker.tintTopLeft = 4465164
        task1ClickBlocker.tintTopRight = 4465164
        task1ClickBlocker.tintBottomLeft = 4465164
        task1ClickBlocker.tintBottomRight = 4465164
        task1.add(task1ClickBlocker)

        // block (components)
        new Interactive(block)

        // bg (components)
        new Interactive(bg)

        // closeBtn (components)
        const closeBtnButton = new Button(closeBtn)
        closeBtnButton.spriteName = 'closeBtn'
        closeBtnButton.callback = () => this.stop()

        // rainbowPuffleBtn (components)
        const rainbowPuffleBtnButton = new Button(rainbowPuffleBtn)
        rainbowPuffleBtnButton.spriteName = 'brown-btn'
        rainbowPuffleBtnButton.callback = () => this.joinRoom(432)
        rainbowPuffleBtnButton.activeFrame = false

        // bonusBtn (components)
        const bonusBtnButton = new Button(bonusBtn)
        bonusBtnButton.spriteName = 'brown-btn'
        bonusBtnButton.callback = () => this.onBonusCollect()
        bonusBtnButton.activeFrame = false

        // task4CoinsCollectBtn (components)
        const task4CoinsCollectBtnButton = new Button(task4CoinsCollectBtn)
        task4CoinsCollectBtnButton.spriteName = 'task4/green-btn'

        // task4ItemCollectBtn (components)
        const task4ItemCollectBtnButton = new Button(task4ItemCollectBtn)
        task4ItemCollectBtnButton.spriteName = 'task4/green-btn'
        task4ItemCollectBtnButton.callback = () => this.collectItem4()

        // task4GoThereBtn (components)
        const task4GoThereBtnButton = new Button(task4GoThereBtn)
        task4GoThereBtnButton.spriteName = 'task4/green-btn'
        task4GoThereBtnButton.callback = () => this.joinRoom(432)

        // task4ClickBlocker (components)
        const task4ClickBlockerSimpleButton = new SimpleButton(task4ClickBlocker)
        task4ClickBlockerSimpleButton.callback = () => this.selectCard(4)
        task4ClickBlockerSimpleButton.pixelPerfect = true

        // task3CoinsCollectBtn (components)
        const task3CoinsCollectBtnButton = new Button(task3CoinsCollectBtn)
        task3CoinsCollectBtnButton.spriteName = 'task3/green-btn'

        // task3ItemCollectBtn (components)
        const task3ItemCollectBtnButton = new Button(task3ItemCollectBtn)
        task3ItemCollectBtnButton.spriteName = 'task3/green-btn'
        task3ItemCollectBtnButton.callback = () => this.collectItem3()

        // task3GoThereBtn (components)
        const task3GoThereBtnButton = new Button(task3GoThereBtn)
        task3GoThereBtnButton.spriteName = 'task3/green-btn'
        task3GoThereBtnButton.callback = () => this.joinRoom(430)

        // task3ClickBlocker (components)
        const task3ClickBlockerSimpleButton = new SimpleButton(task3ClickBlocker)
        task3ClickBlockerSimpleButton.callback = () => this.selectCard(3)
        task3ClickBlockerSimpleButton.pixelPerfect = true

        // task2CoinsCollectBtn (components)
        const task2CoinsCollectBtnButton = new Button(task2CoinsCollectBtn)
        task2CoinsCollectBtnButton.spriteName = 'task2/green-btn'

        // task2ItemCollectBtn (components)
        const task2ItemCollectBtnButton = new Button(task2ItemCollectBtn)
        task2ItemCollectBtnButton.spriteName = 'task2/green-btn'
        task2ItemCollectBtnButton.callback = () => this.collectItem2()

        // task2GoThereBtn (components)
        const task2GoThereBtnButton = new Button(task2GoThereBtn)
        task2GoThereBtnButton.spriteName = 'task2/green-btn'
        task2GoThereBtnButton.callback = () => this.joinRoom(431)

        // task2ClickBlocker (components)
        const task2ClickBlockerSimpleButton = new SimpleButton(task2ClickBlocker)
        task2ClickBlockerSimpleButton.callback = () => this.selectCard(2)
        task2ClickBlockerSimpleButton.pixelPerfect = true

        // task1CoinsCollectBtn (components)
        const task1CoinsCollectBtnButton = new Button(task1CoinsCollectBtn)
        task1CoinsCollectBtnButton.spriteName = 'task1/green-btn'

        // task1ItemCollectBtn (components)
        const task1ItemCollectBtnButton = new Button(task1ItemCollectBtn)
        task1ItemCollectBtnButton.spriteName = 'task1/green-btn'
        task1ItemCollectBtnButton.callback = () => this.collectItem1()

        // task1GoThereBtn (components)
        const task1GoThereBtnButton = new Button(task1GoThereBtn)
        task1GoThereBtnButton.spriteName = 'task1/green-btn'
        task1GoThereBtnButton.callback = () => this.joinRoom(431)

        // task1ClickBlocker (components)
        const task1ClickBlockerSimpleButton = new SimpleButton(task1ClickBlocker)
        task1ClickBlockerSimpleButton.callback = () => this.selectCard(1)
        task1ClickBlockerSimpleButton.pixelPerfect = true

        this.block = block
        this.bg = bg
        this.closeBtn = closeBtn
        this.rainbowPuffle = rainbowPuffle
        this.rainbowPuffleBtn = rainbowPuffleBtn
        this.rainbowPuffleGoThereText = rainbowPuffleGoThereText
        this.rainbowPuffleLights = rainbowPuffleLights
        this.rainbowPuffleHeader = rainbowPuffleHeader
        this.bonus = bonus
        this.bonusBtn = bonusBtn
        this.bonusHeader = bonusHeader
        this.bonusLights = bonusLights
        this.bonusCollectText = bonusCollectText
        this.header = header
        this.headerText = headerText
        this.task4 = task4
        this.task4Card = task4Card
        this.task4Checkbox = task4Checkbox
        this.task4Coins = task4Coins
        this.task4Item = task4Item
        this.task4CoinsCollectBtn = task4CoinsCollectBtn
        this.task4CoinsCollectText = task4CoinsCollectText
        this.task4ItemCollectBtn = task4ItemCollectBtn
        this.task4ItemCollectText = task4ItemCollectText
        this.task4Criteria = task4Criteria
        this.task4TaskNum = task4TaskNum
        this.task4Preview = task4Preview
        this.task4GoThereBtn = task4GoThereBtn
        this.task4GoThereText = task4GoThereText
        this.task4CompleteHeader = task4CompleteHeader
        this.task4CompleteLine1 = task4CompleteLine1
        this.task4Icon = task4Icon
        this.task4LockedLine1 = task4LockedLine1
        this.task4LockedLine2 = task4LockedLine2
        this.task4ClickBlocker = task4ClickBlocker
        this.task3 = task3
        this.task3Card = task3Card
        this.task3Checkbox = task3Checkbox
        this.task3Coins = task3Coins
        this.task3Item = task3Item
        this.task3CoinsCollectBtn = task3CoinsCollectBtn
        this.task3CoinsCollectText = task3CoinsCollectText
        this.task3ItemCollectBtn = task3ItemCollectBtn
        this.task3ItemCollectText = task3ItemCollectText
        this.task3Criteria = task3Criteria
        this.task3TaskNum = task3TaskNum
        this.task3Preview = task3Preview
        this.task3GoThereBtn = task3GoThereBtn
        this.task3GoThereText = task3GoThereText
        this.task3CompleteHeader = task3CompleteHeader
        this.task3CompleteLine1 = task3CompleteLine1
        this.task3CompleteLine2 = task3CompleteLine2
        this.task3CompleteCountdown = task3CompleteCountdown
        this.task3Icon = task3Icon
        this.task3LockedLine1 = task3LockedLine1
        this.task3LockedLine2 = task3LockedLine2
        this.task3ClickBlocker = task3ClickBlocker
        this.task2 = task2
        this.task2Card = task2Card
        this.task2Checkbox = task2Checkbox
        this.task2Coins = task2Coins
        this.task2Item = task2Item
        this.task2CoinsCollectBtn = task2CoinsCollectBtn
        this.task2CoinsCollectText = task2CoinsCollectText
        this.task2ItemCollectBtn = task2ItemCollectBtn
        this.task2ItemCollectText = task2ItemCollectText
        this.task2Criteria = task2Criteria
        this.task2TaskNum = task2TaskNum
        this.task2Preview = task2Preview
        this.task2GoThereBtn = task2GoThereBtn
        this.task2GoThereText = task2GoThereText
        this.task2CompleteHeader = task2CompleteHeader
        this.task2CompleteLine1 = task2CompleteLine1
        this.task2CompleteLine2 = task2CompleteLine2
        this.task2CompleteCountdown = task2CompleteCountdown
        this.task2Icon = task2Icon
        this.task2LockedLine1 = task2LockedLine1
        this.task2LockedLine2 = task2LockedLine2
        this.task2ClickBlocker = task2ClickBlocker
        this.task1 = task1
        this.task1Card = task1Card
        this.task1Checkbox = task1Checkbox
        this.task1Coins = task1Coins
        this.task1Item = task1Item
        this.task1CoinsCollectBtn = task1CoinsCollectBtn
        this.task1CoinsCollectText = task1CoinsCollectText
        this.task1ItemCollectBtn = task1ItemCollectBtn
        this.task1ItemCollectText = task1ItemCollectText
        this.task1Criteria = task1Criteria
        this.task1TaskNum = task1TaskNum
        this.task1Preview = task1Preview
        this.task1GoThereBtn = task1GoThereBtn
        this.task1GoThereText = task1GoThereText
        this.task1CompleteHeader = task1CompleteHeader
        this.task1CompleteLine1 = task1CompleteLine1
        this.task1CompleteLine2 = task1CompleteLine2
        this.task1CompleteCountdown = task1CompleteCountdown
        this.task1Icon = task1Icon
        this.task1ClickBlocker = task1ClickBlocker

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this.airtower.events.once('qgc', (args) => this.onQuestGetCompletion(args))
        this.airtower.sendXt('q#gc', 4)
    }

    selectCard(cardNum) {
        for (let i = 1; i <= 4; i++) {
            this['task' + i].scale = 1
            this['task' + i].depth = 4 - i
            this['task' + i + 'ClickBlocker'].visible = true
        }

        this['task' + cardNum].scale = 1.1
        let depth = 5
        for (let i = cardNum; i > 0; i--) {
            this['task' + i].depth = depth
            depth--
        }
        this['task' + cardNum + 'ClickBlocker'].visible = false
    }

    setCompletion(progress) {
        this.selectCard(1)

        if (progress > 0) {
            this.task1Preview.visible = false
            this.task1GoThereBtn.visible = false
            this.task1GoThereText.visible = false
            this.task1Checkbox.setFrame('task1/checkbox-checked')
            this.task1Coins.setFrame('task1/coins-collect')
            this.task1Item.setFrame(!this.checkCollected(6158) ? 'task1/item-collect' : 'task1/item-collected')
            this.task1CoinsCollectBtn.visible = true
            this.task1CoinsCollectText.setColor('#f3fcc5ff')
            this.task1ItemCollectBtn.visible = !this.checkCollected(6158)
            this.task1ItemCollectText.setColor('#f3fcc5ff')
            this.task1ItemCollectText.visible = !this.checkCollected(6158)
            this.task1CompleteHeader.visible = true
            this.task1CompleteLine1.visible = true
            this.task1CompleteLine2.visible = true
            this.task1CompleteCountdown.visible = true
            this.bonusLights.setFrame('lights0002')
            this.rainbowPuffleLights.setFrame('lights0002')
        }

        if (progress > 1) {
            this.task1CompleteLine2.visible = false
            this.task1CompleteCountdown.visible = false
            this.task1Icon.visible = true

            this.selectCard(2)

            this.task2Card.setFrame('task2/card')
            this.task2Checkbox.visible = true
            this.task2LockedLine1.visible = false
            this.task2LockedLine2.visible = false
            this.task2Preview.visible = true
            this.task2GoThereBtn.visible = true
            this.task2GoThereText.visible = true
        }

        if (progress > 2) {
            this.task2Preview.visible = false
            this.task2GoThereBtn.visible = false
            this.task2GoThereText.visible = false
            this.task2Checkbox.setFrame('task2/checkbox-checked')
            this.task2Coins.setFrame('task2/coins-collect')
            this.task2Item.setFrame(!this.checkCollected(4809) ? 'task2/item-collect' : 'task2/item-collected')
            this.task2CoinsCollectBtn.visible = true
            this.task2CoinsCollectText.setColor('#f3fcc5ff')
            this.task2ItemCollectBtn.visible = !this.checkCollected(4809)
            this.task2ItemCollectText.setColor('#f3fcc5ff')
            this.task2ItemCollectText.visible = !this.checkCollected(4809)
            this.task2CompleteHeader.visible = true
            this.task2CompleteLine1.visible = true
            this.task2CompleteLine2.visible = true
            this.task2CompleteCountdown.visible = true
            this.bonusLights.setFrame('lights0003')
            this.rainbowPuffleLights.setFrame('lights0003')
        }

        if (progress > 3) {
            this.task2CompleteLine2.visible = false
            this.task2CompleteCountdown.visible = false
            this.task2Icon.visible = true

            this.selectCard(3)

            this.task3Card.setFrame('task3/card')
            this.task3Checkbox.visible = true
            this.task3LockedLine1.visible = false
            this.task3LockedLine2.visible = false
            this.task3Preview.visible = true
            this.task3GoThereBtn.visible = true
            this.task3GoThereText.visible = true
        }

        if (progress > 4) {
            this.task3Preview.visible = false
            this.task3GoThereBtn.visible = false
            this.task3GoThereText.visible = false
            this.task3Checkbox.setFrame('task3/checkbox-checked')
            this.task3Coins.setFrame('task3/coins-collect')
            this.task3Item.setFrame(!this.checkCollected(1560) ? 'task3/item-collect' : 'task3/item-collected')
            this.task3CoinsCollectBtn.visible = true
            this.task3CoinsCollectText.setColor('#f3fcc5ff')
            this.task3ItemCollectBtn.visible = !this.checkCollected(1560)
            this.task3ItemCollectText.setColor('#f3fcc5ff')
            this.task3ItemCollectText.visible = !this.checkCollected(1560)
            this.task3CompleteHeader.visible = true
            this.task3CompleteLine1.visible = true
            this.task3CompleteLine2.visible = true
            this.task3CompleteCountdown.visible = true
            this.bonusLights.setFrame('lights0004')
            this.rainbowPuffleLights.setFrame('lights0004')
        }

        if (progress > 5) {
            this.task3CompleteLine2.visible = false
            this.task3CompleteCountdown.visible = false
            this.task3Icon.visible = true

            this.selectCard(4)

            this.task4Card.setFrame('task4/card')
            this.task4Checkbox.visible = true
            this.task4LockedLine1.visible = false
            this.task4LockedLine2.visible = false
            this.task4Preview.visible = true
            this.task4GoThereBtn.visible = true
            this.task4GoThereText.visible = true
        }

        if (progress > 6) {
            this.task4Preview.visible = false
            this.task4GoThereBtn.visible = false
            this.task4GoThereText.visible = false
            this.task4Checkbox.setFrame('task4/checkbox-checked')
            this.task4Coins.setFrame('task4/coins-collect')
            this.task4Item.setFrame(!this.checkCollected(3159) ? 'task4/item-collect' : 'task4/item-collected')
            this.task4CoinsCollectBtn.visible = true
            this.task4CoinsCollectText.setColor('#f3fcc5ff')
            this.task4ItemCollectBtn.visible = !this.checkCollected(3159)
            this.task4ItemCollectText.setColor('#f3fcc5ff')
            this.task4ItemCollectText.visible = !this.checkCollected(3159)
            this.task4CompleteHeader.visible = true
            this.task4CompleteLine1.visible = true
            this.task4Icon.visible = true
            this.bonusLights.setFrame('lights0005')
            this.rainbowPuffleLights.setFrame('lights0005')

            this.bonus.setFrame('bonus-item')
            this.bonusBtn.visible = true
            this.bonusHeader.setColor('#70470eff')
            this.bonusCollectText.setColor('#fffdd9ff')
            this.rainbowPuffle.setFrame('puffle')
            this.rainbowPuffleBtn.visible = true
            this.rainbowPuffleHeader.setColor('#70470eff')
            this.rainbowPuffleGoThereText.setColor('#fffdd9ff')
        }
    }

    checkCollected(item) {
        return this.shell.client.hasItem(item)
    }

    collectItem1() {
        this.airtower.sendXt('i#ai', 6158)
        this.task1Item.setFrame('task1/item-collected')
        this.task1ItemCollectBtn.visible = false
        this.task1ItemCollectText.visible = false
    }

    collectItem2() {
        this.airtower.sendXt('i#ai', 4809)
        this.task2Item.setFrame('task2/item-collected')
        this.task2ItemCollectBtn.visible = false
        this.task2ItemCollectText.visible = false
    }

    collectItem3() {
        this.airtower.sendXt('i#ai', 1560)
        this.task3Item.setFrame('task3/item-collected')
        this.task3ItemCollectBtn.visible = false
        this.task3ItemCollectText.visible = false
    }

    collectItem4() {
        this.airtower.sendXt('i#ai', 3159)
        this.task4Item.setFrame('task4/item-collected')
        this.task4ItemCollectBtn.visible = false
        this.task4ItemCollectText.visible = false
    }

    onBonusCollect() {
        this.airtower.sendXt('i#ai', 5220)
        this.bonus.setFrame('bonus-item-locked')
        this.bonusBtn.visible = false
        this.bonusHeader.setColor('#f3fcc5ff')
        this.bonusCollectText.setColor('#70470eff')
    }

    onQuestGetCompletion(args) {
        if (args[0] != 4) {
            return this.airtower.events.once('qgc', (args) => this.onQuestGetCompletion(args))
        }

        if (args[1] % 2 != 0) {
            this.airtower.events.once('qgp', (args) => this.onQuestGetProgress(args))
            this.airtower.sendXt('q#gp', 4)
        }

        super.create()
        this.setCompletion(parseInt(args[1]))
        this.enableButtons(this.add.displayList)
    }

    onQuestGetProgress(args) {
        if (args[0] != 4) {
            return this.airtower.events.once('qgp', (args) => this.onQuestGetProgress(args))
        }

        this.setProgress(parseInt(args[1]))
    }

    setProgress(progress) {
        let timeLeft = 20 - parseInt(progress)
        for (let i = 1; i <= 3; i++) {
            this['task' + i + 'CompleteCountdown'].setText(timeLeft + ' min')
        }
    }

    enableButtons(element) {
        element.list.forEach((child) => {
            if (child.__Button) child.__Button.start()
            if (child.__SimpleButton) child.__SimpleButton.start()
            if (child.list) this.enableButtons(child)
        })
    }

    joinRoom(id) {
        this.stop()
        if (this.shell.room.id == id) return
        this.shell.room.triggerRoom(id, 270, 550)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
