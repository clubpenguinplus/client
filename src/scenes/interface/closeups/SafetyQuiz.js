import Closeup from './Closeup'
import {Button, SimpleButton, LocalisedString, Interactive} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class SafetyQuiz extends Closeup {
    constructor() {
        super('SafetyQuiz')

        /** @type {Phaser.GameObjects.Image} */
        this.bg
        /** @type {Phaser.GameObjects.Image} */
        this.white_x
        /** @type {Phaser.GameObjects.Container} */
        this.page1
        /** @type {Phaser.GameObjects.Image} */
        this.penguins
        /** @type {Phaser.GameObjects.Image} */
        this.modbutton
        /** @type {Phaser.GameObjects.Image} */
        this.item_locked
        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Text} */
        this.text_1
        /** @type {Phaser.GameObjects.Container} */
        this.page2
        /** @type {Phaser.GameObjects.Image} */
        this.locked
        /** @type {Phaser.GameObjects.Image} */
        this.clipboard
        /** @type {Phaser.GameObjects.Image} */
        this.module_bg
        /** @type {Phaser.GameObjects.Image} */
        this.progress_rotated
        /** @type {Phaser.GameObjects.Image} */
        this.safetyquiz
        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {Phaser.GameObjects.Image} */
        this.answer_btn1
        /** @type {Phaser.GameObjects.Image} */
        this.answer_btn2
        /** @type {Phaser.GameObjects.Image} */
        this.answer_btn3
        /** @type {Phaser.GameObjects.Image} */
        this.answer_btn4
        /** @type {Phaser.GameObjects.Text} */
        this.item
        /** @type {Phaser.GameObjects.Text} */
        this.answer1
        /** @type {Phaser.GameObjects.Text} */
        this.answer2
        /** @type {Phaser.GameObjects.Text} */
        this.answer3
        /** @type {Phaser.GameObjects.Text} */
        this.answer4
        /** @type {Phaser.GameObjects.Text} */
        this.question
        /** @type {Phaser.GameObjects.Text} */
        this.instruction
        /** @type {Phaser.GameObjects.Sprite} */
        this.brownpuffle
        /** @type {Phaser.GameObjects.Image} */
        this.cross1
        /** @type {Phaser.GameObjects.Image} */
        this.tick1
        /** @type {Phaser.GameObjects.Image} */
        this.cross2
        /** @type {Phaser.GameObjects.Image} */
        this.tick2
        /** @type {Phaser.GameObjects.Image} */
        this.cross3
        /** @type {Phaser.GameObjects.Image} */
        this.tick3
        /** @type {Phaser.GameObjects.Image} */
        this.cross4
        /** @type {Phaser.GameObjects.Image} */
        this.tick4
        /** @type {Phaser.GameObjects.Text} */
        this.num1
        /** @type {Phaser.GameObjects.Text} */
        this.num1_1
        /** @type {Phaser.GameObjects.Text} */
        this.num1_1_1
        /** @type {Phaser.GameObjects.Text} */
        this.num1_2
        /** @type {Phaser.GameObjects.Text} */
        this.num1_1_2
        /** @type {Phaser.GameObjects.Text} */
        this.num1_3
        /** @type {Phaser.GameObjects.Container} */
        this.page3
        /** @type {Phaser.GameObjects.Sprite} */
        this.reward_anim
        /** @type {Phaser.GameObjects.Image} */
        this.greenbutton
        /** @type {Phaser.GameObjects.Sprite} */
        this.item_anim
        /** @type {Phaser.GameObjects.Text} */
        this.congrats_sub
        /** @type {Phaser.GameObjects.Text} */
        this.congrats_head
        /** @type {Phaser.GameObjects.Text} */
        this.collect_txt
        /** @type {Phaser.GameObjects.Container} */
        this.page4
        /** @type {Phaser.GameObjects.Image} */
        this.penguins2
        /** @type {Phaser.GameObjects.Image} */
        this.modbutton2
        /** @type {Phaser.GameObjects.Text} */
        this.goodtry
        /** @type {Phaser.GameObjects.Text} */
        this.modbtn2text
        /** @type {Phaser.GameObjects.Text} */
        this.wrongbody
        /** @type {Phaser.GameObjects.Sprite} */
        this.brownpuffleanimwrong

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('safetyquiz-pack', 'client/media/interface/closeups/safetyquiz/safetyquiz-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // bg
        const bg = this.add.image(760, 480, 'safetyquiz', 'bg')

        // white_x
        const white_x = this.add.image(1439, 77, 'main', 'white-x')
        white_x.scaleX = 0.8
        white_x.scaleY = 0.8

        // page1
        const page1 = this.add.container(381, 338)

        // penguins
        const penguins = this.add.image(0, 189, 'safetyquiz', 'penguins')
        page1.add(penguins)

        // modbutton
        const modbutton = this.add.image(634, 387, 'safetyquiz', 'modbutton')
        page1.add(modbutton)

        // item_locked
        const item_locked = this.add.image(650, -65, 'safetyquiz', 'item_locked')
        page1.add(item_locked)

        // text
        const text = this.add.text(650, 122, '', {})
        text.setOrigin(0.5, 0)
        text.text = 'Test your online safety knowledge in this quiz and earn a FREE online safety sweater for your penguin.'
        text.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.offsetX': 2, 'shadow.offsetY': 2, 'shadow.color': '#26417dff', 'shadow.blur': 3, 'shadow.fill': true})
        text.setLineSpacing(5)
        text.setWordWrapWidth(550)
        page1.add(text)

        // text_1
        const text_1 = this.add.text(658, 369, '', {})
        text_1.setOrigin(0.5, 0)
        text_1.text = 'Safety Quiz'
        text_1.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.blur': 10, 'shadow.fill': true})
        text_1.setLineSpacing(5)
        text_1.setWordWrapWidth(550)
        page1.add(text_1)

        // page2
        const page2 = this.add.container(147, 114)
        page2.visible = false

        // locked
        const locked = this.add.image(407, 534, 'safetyquiz', 'locked')
        page2.add(locked)

        // clipboard
        const clipboard = this.add.image(926, 375, 'safetyquiz', 'clipboard')
        page2.add(clipboard)

        // module_bg
        const module_bg = this.add.image(955, 440, 'safetyquiz', 'module_bg1')
        module_bg.angle = 5
        page2.add(module_bg)

        // progress_rotated
        const progress_rotated = this.add.image(978, 162, 'safetyquiz', 'progress-rotated0001')
        page2.add(progress_rotated)

        // safetyquiz
        const safetyquiz = this.add.image(0, 31, 'main', 'safetyquiz')
        safetyquiz.setOrigin(0.5, 0.5047169811320755)
        page2.add(safetyquiz)

        // title
        const title = this.add.text(54, 0, '', {})
        title.text = 'Take the Be Cool, Be Heard, Be Safe Quiz!'
        title.setStyle({fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.blur': 10, 'shadow.fill': true})
        title.setLineSpacing(5)
        title.setWordWrapWidth(300)
        page2.add(title)

        // answer_btn1
        const answer_btn1 = this.add.image(963, 404, 'safetyquiz', 'module_button')
        answer_btn1.angle = 5
        page2.add(answer_btn1)

        // answer_btn2
        const answer_btn2 = this.add.image(951, 479, 'safetyquiz', 'module_button')
        answer_btn2.angle = 5
        page2.add(answer_btn2)

        // answer_btn3
        const answer_btn3 = this.add.image(939, 554, 'safetyquiz', 'module_button')
        answer_btn3.angle = 5
        page2.add(answer_btn3)

        // answer_btn4
        const answer_btn4 = this.add.image(927, 629, 'safetyquiz', 'module_button')
        answer_btn4.angle = 5
        page2.add(answer_btn4)

        // item
        const item = this.add.text(311, 621, '', {})
        item.setOrigin(0.5, 0)
        item.text = 'Safety Sweater'
        item.setStyle({align: 'center', color: '#454545ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.blur': 10, 'shadow.fill': true})
        item.setLineSpacing(5)
        item.setWordWrapWidth(300)
        page2.add(item)

        // answer1
        const answer1 = this.add.text(963, 404, '', {})
        answer1.angle = 5
        answer1.setOrigin(0.5, 0.5)
        answer1.text = 'Answer'
        answer1.setStyle({align: 'center', color: '#454545ff', fixedWidth: 450, fontFamily: 'cpBurbankSmall', fontSize: '26px', 'shadow.color': '#000000ff', 'shadow.fill': true})
        answer1.setLineSpacing(5)
        page2.add(answer1)

        // answer2
        const answer2 = this.add.text(951, 479, '', {})
        answer2.angle = 5
        answer2.setOrigin(0.5, 0.5)
        answer2.text = 'Answer'
        answer2.setStyle({align: 'center', color: '#454545ff', fixedWidth: 450, fontFamily: 'cpBurbankSmall', fontSize: '26px', 'shadow.color': '#000000ff', 'shadow.fill': true})
        answer2.setLineSpacing(5)
        page2.add(answer2)

        // answer3
        const answer3 = this.add.text(939, 554, '', {})
        answer3.angle = 5
        answer3.setOrigin(0.5, 0.5)
        answer3.text = 'Answer'
        answer3.setStyle({align: 'center', color: '#454545ff', fixedWidth: 450, fontFamily: 'cpBurbankSmall', fontSize: '26px', 'shadow.color': '#000000ff', 'shadow.fill': true})
        answer3.setLineSpacing(5)
        page2.add(answer3)

        // answer4
        const answer4 = this.add.text(927, 629, '', {})
        answer4.angle = 5
        answer4.setOrigin(0.5, 0.5)
        answer4.text = 'Answer'
        answer4.setStyle({align: 'center', color: '#454545ff', fixedWidth: 450, fontFamily: 'cpBurbankSmall', fontSize: '26px', 'shadow.color': '#000000ff', 'shadow.fill': true})
        answer4.setLineSpacing(5)
        page2.add(answer4)

        // question
        const question = this.add.text(978, 315, '', {})
        question.angle = 5
        question.setOrigin(0.5, 0.5)
        question.text = 'Question?'
        question.setStyle({align: 'center', color: '#454545ff', fontFamily: 'cpBurbankSmall', fontSize: '26px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.fill': true})
        question.setLineSpacing(5)
        question.setWordWrapWidth(500)
        page2.add(question)

        // instruction
        const instruction = this.add.text(999, 237, '', {})
        instruction.angle = 5
        instruction.setOrigin(0.5, 0.5)
        instruction.text = '(Choose the correct answer)'
        instruction.setStyle({align: 'center', color: '#898989ff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.fill': true})
        instruction.setLineSpacing(5)
        instruction.setWordWrapWidth(600)
        page2.add(instruction)

        // brownpuffle
        const brownpuffle = this.add.sprite(227, 291, 'safetyquiz', 'brownpuffleanim0002')
        page2.add(brownpuffle)

        // cross1
        const cross1 = this.add.image(1175, 425, 'safetyquiz', 'cross')
        cross1.visible = false
        page2.add(cross1)

        // tick1
        const tick1 = this.add.image(1176, 425, 'safetyquiz', 'tick')
        tick1.visible = false
        page2.add(tick1)

        // cross2
        const cross2 = this.add.image(1165, 499, 'safetyquiz', 'cross')
        cross2.visible = false
        page2.add(cross2)

        // tick2
        const tick2 = this.add.image(1166, 499, 'safetyquiz', 'tick')
        tick2.visible = false
        page2.add(tick2)

        // cross3
        const cross3 = this.add.image(1155, 575, 'safetyquiz', 'cross')
        cross3.visible = false
        page2.add(cross3)

        // tick3
        const tick3 = this.add.image(1156, 575, 'safetyquiz', 'tick')
        tick3.visible = false
        page2.add(tick3)

        // cross4
        const cross4 = this.add.image(1147, 650, 'safetyquiz', 'cross')
        cross4.visible = false
        page2.add(cross4)

        // tick4
        const tick4 = this.add.image(1148, 650, 'safetyquiz', 'tick')
        tick4.visible = false
        page2.add(tick4)

        // container_1
        const container_1 = this.add.container(801, 142)
        page2.add(container_1)

        // num1
        const num1 = this.add.text(0, 0, '', {})
        num1.angle = 5
        num1.setOrigin(0.5, 0.5)
        num1.text = '1'
        num1.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#2e7b3aff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        num1.setLineSpacing(5)
        num1.setWordWrapWidth(600)
        container_1.add(num1)

        // num1_1
        const num1_1 = this.add.text(70, 7, '', {})
        num1_1.angle = 5
        num1_1.setOrigin(0.5, 0.5)
        num1_1.text = '2'
        num1_1.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#2e7b3aff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        num1_1.setLineSpacing(5)
        num1_1.setWordWrapWidth(600)
        container_1.add(num1_1)

        // num1_1_1
        const num1_1_1 = this.add.text(209, 21, '', {})
        num1_1_1.angle = 5
        num1_1_1.setOrigin(0.5, 0.5)
        num1_1_1.text = '4'
        num1_1_1.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#2e7b3aff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        num1_1_1.setLineSpacing(5)
        num1_1_1.setWordWrapWidth(600)
        container_1.add(num1_1_1)

        // num1_2
        const num1_2 = this.add.text(140, 14, '', {})
        num1_2.angle = 5
        num1_2.setOrigin(0.5, 0.5)
        num1_2.text = '3'
        num1_2.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#2e7b3aff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        num1_2.setLineSpacing(5)
        num1_2.setWordWrapWidth(600)
        container_1.add(num1_2)

        // num1_1_2
        const num1_1_2 = this.add.text(349, 36, '', {})
        num1_1_2.angle = 5
        num1_1_2.setOrigin(0.5, 0.5)
        num1_1_2.text = '6'
        num1_1_2.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#2e7b3aff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        num1_1_2.setLineSpacing(5)
        num1_1_2.setWordWrapWidth(600)
        container_1.add(num1_1_2)

        // num1_3
        const num1_3 = this.add.text(279, 29, '', {})
        num1_3.angle = 5
        num1_3.setOrigin(0.5, 0.5)
        num1_3.text = '5'
        num1_3.setStyle({align: 'center', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#2e7b3aff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        num1_3.setLineSpacing(5)
        num1_3.setWordWrapWidth(600)
        container_1.add(num1_3)

        // page3
        const page3 = this.add.container(508, 177)
        page3.visible = false

        // reward_anim
        const reward_anim = this.add.sprite(252, 415, 'safetyquiz', 'reward_anim0001')
        reward_anim.alpha = 0.3
        reward_anim.alphaTopLeft = 0.3
        reward_anim.alphaTopRight = 0.3
        reward_anim.alphaBottomLeft = 0.3
        reward_anim.alphaBottomRight = 0.3
        page3.add(reward_anim)

        // greenbutton
        const greenbutton = this.add.image(252, 584, 'safetyquiz', 'greenbutton')
        page3.add(greenbutton)

        // item_anim
        const item_anim = this.add.sprite(0, 470, 'safetyquiz', 'item_anim0009')
        page3.add(item_anim)

        // congrats_sub
        const congrats_sub = this.add.text(252, 158, '', {})
        congrats_sub.setOrigin(0.5, 0)
        congrats_sub.text = 'You really know your stuff about online safety and how to be cool, be heard, and be safe!'
        congrats_sub.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.blur': 10, 'shadow.fill': true})
        congrats_sub.setLineSpacing(5)
        congrats_sub.setWordWrapWidth(1100)
        page3.add(congrats_sub)

        // congrats_head
        const congrats_head = this.add.text(252, 33, '', {})
        congrats_head.setOrigin(0.5, 0)
        congrats_head.text = 'Congratulations!'
        congrats_head.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '60px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.blur': 10, 'shadow.fill': true})
        congrats_head.setLineSpacing(5)
        congrats_head.setWordWrapWidth(300)
        page3.add(congrats_head)

        // collect_txt
        const collect_txt = this.add.text(252, 564, '', {})
        collect_txt.setOrigin(0.5, 0)
        collect_txt.text = 'Collect Reward'
        collect_txt.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', stroke: '#498124ff', strokeThickness: 6, 'shadow.color': '#000000ff', 'shadow.fill': true})
        collect_txt.setLineSpacing(5)
        collect_txt.setWordWrapWidth(1100)
        page3.add(collect_txt)

        // page4
        const page4 = this.add.container(381, 338)
        page4.visible = false

        // penguins2
        const penguins2 = this.add.image(0, 189, 'safetyquiz', 'penguins')
        page4.add(penguins2)

        // modbutton2
        const modbutton2 = this.add.image(659, 385, 'safetyquiz', 'modbutton')
        page4.add(modbutton2)

        // goodtry
        const goodtry = this.add.text(668, -83, '', {})
        goodtry.setOrigin(0.5, 0)
        goodtry.text = 'Good Try!'
        goodtry.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '56px', fontStyle: 'bold', 'shadow.offsetX': 2, 'shadow.offsetY': 2, 'shadow.color': '#26417dff', 'shadow.blur': 3, 'shadow.fill': true})
        goodtry.setLineSpacing(5)
        goodtry.setWordWrapWidth(550)
        page4.add(goodtry)

        // modbtn2text
        const modbtn2text = this.add.text(683, 367, '', {})
        modbtn2text.setOrigin(0.5, 0)
        modbtn2text.text = 'Safety Quiz'
        modbtn2text.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#000000ff', 'shadow.blur': 10, 'shadow.fill': true})
        modbtn2text.setLineSpacing(5)
        modbtn2text.setWordWrapWidth(550)
        page4.add(modbtn2text)

        // wrongbody
        const wrongbody = this.add.text(668, 15, '', {})
        wrongbody.setOrigin(0.5, 0)
        wrongbody.text = "That wasn't quite right. Do you want to try the safety quiz again?"
        wrongbody.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.offsetX': 2, 'shadow.offsetY': 2, 'shadow.color': '#26417dff', 'shadow.blur': 3, 'shadow.fill': true})
        wrongbody.setLineSpacing(5)
        wrongbody.setWordWrapWidth(550)
        page4.add(wrongbody)

        // brownpuffleanimwrong
        const brownpuffleanimwrong = this.add.sprite(648, 123, 'safetyquiz', 'brownpuffleanim0002')
        page4.add(brownpuffleanimwrong)

        // block (components)
        new Interactive(block)

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => {
            this.stop()
        }

        // modbutton (components)
        const modbuttonButton = new Button(modbutton)
        modbuttonButton.spriteName = 'modbutton'
        modbuttonButton.callback = () => this.startQuiz()

        // text (components)
        const textLocalisedString = new LocalisedString(text)
        textLocalisedString.id = 'safetyquiz-intro'

        // text_1 (components)
        const text_1LocalisedString = new LocalisedString(text_1)
        text_1LocalisedString.id = 'safetyquiz'

        // title (components)
        const titleLocalisedString = new LocalisedString(title)
        titleLocalisedString.id = 'safetyquiz-title'

        // answer_btn1 (components)
        const answer_btn1SimpleButton = new SimpleButton(answer_btn1)
        answer_btn1SimpleButton.callback = () => this.chooseAnswer(1)

        // answer_btn2 (components)
        const answer_btn2SimpleButton = new SimpleButton(answer_btn2)
        answer_btn2SimpleButton.callback = () => this.chooseAnswer(2)

        // answer_btn3 (components)
        const answer_btn3SimpleButton = new SimpleButton(answer_btn3)
        answer_btn3SimpleButton.callback = () => this.chooseAnswer(3)

        // answer_btn4 (components)
        const answer_btn4SimpleButton = new SimpleButton(answer_btn4)
        answer_btn4SimpleButton.callback = () => this.chooseAnswer(4)

        // item (components)
        const itemLocalisedString = new LocalisedString(item)
        itemLocalisedString.id = 'safetyquiz-item'

        // instruction (components)
        const instructionLocalisedString = new LocalisedString(instruction)
        instructionLocalisedString.id = 'safetyquiz-instruction'

        // greenbutton (components)
        const greenbuttonButton = new Button(greenbutton)
        greenbuttonButton.spriteName = 'greenbutton'
        greenbuttonButton.callback = () => this.collectReward()

        // congrats_sub (components)
        const congrats_subLocalisedString = new LocalisedString(congrats_sub)
        congrats_subLocalisedString.id = 'safetyquiz-welldone'

        // congrats_head (components)
        const congrats_headLocalisedString = new LocalisedString(congrats_head)
        congrats_headLocalisedString.id = 'safetyquiz-congrats'

        // collect_txt (components)
        const collect_txtLocalisedString = new LocalisedString(collect_txt)
        collect_txtLocalisedString.id = 'safetyquiz-collect'

        // modbutton2 (components)
        const modbutton2Button = new Button(modbutton2)
        modbutton2Button.spriteName = 'modbutton'
        modbutton2Button.callback = () => this.startQuiz()

        // goodtry (components)
        const goodtryLocalisedString = new LocalisedString(goodtry)
        goodtryLocalisedString.id = 'safetyquiz-goodtry'

        // modbtn2text (components)
        const modbtn2textLocalisedString = new LocalisedString(modbtn2text)
        modbtn2textLocalisedString.id = 'safetyquiz'

        // wrongbody (components)
        const wrongbodyLocalisedString = new LocalisedString(wrongbody)
        wrongbodyLocalisedString.id = 'safetyquiz-wrongbody'

        this.bg = bg
        this.white_x = white_x
        this.page1 = page1
        this.penguins = penguins
        this.modbutton = modbutton
        this.item_locked = item_locked
        this.text = text
        this.text_1 = text_1
        this.page2 = page2
        this.locked = locked
        this.clipboard = clipboard
        this.module_bg = module_bg
        this.progress_rotated = progress_rotated
        this.safetyquiz = safetyquiz
        this.title = title
        this.answer_btn1 = answer_btn1
        this.answer_btn2 = answer_btn2
        this.answer_btn3 = answer_btn3
        this.answer_btn4 = answer_btn4
        this.item = item
        this.answer1 = answer1
        this.answer2 = answer2
        this.answer3 = answer3
        this.answer4 = answer4
        this.question = question
        this.instruction = instruction
        this.brownpuffle = brownpuffle
        this.cross1 = cross1
        this.tick1 = tick1
        this.cross2 = cross2
        this.tick2 = tick2
        this.cross3 = cross3
        this.tick3 = tick3
        this.cross4 = cross4
        this.tick4 = tick4
        this.num1 = num1
        this.num1_1 = num1_1
        this.num1_1_1 = num1_1_1
        this.num1_2 = num1_2
        this.num1_1_2 = num1_1_2
        this.num1_3 = num1_3
        this.page3 = page3
        this.reward_anim = reward_anim
        this.greenbutton = greenbutton
        this.item_anim = item_anim
        this.congrats_sub = congrats_sub
        this.congrats_head = congrats_head
        this.collect_txt = collect_txt
        this.page4 = page4
        this.penguins2 = penguins2
        this.modbutton2 = modbutton2
        this.goodtry = goodtry
        this.modbtn2text = modbtn2text
        this.wrongbody = wrongbody
        this.brownpuffleanimwrong = brownpuffleanimwrong

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.answers = [3, 3, 1, 4, 1, 2]
    }

    startQuiz() {
        this.page1.visible = false
        this.page4.visible = false
        this.page2.visible = true

        this.question.text = this.shell.crumbs.getString('safetyquiz-q0-question')
        this.answer1.text = this.shell.crumbs.getString('safetyquiz-q0-answer1')
        this.answer2.text = this.shell.crumbs.getString('safetyquiz-q0-answer2')
        this.answer3.text = this.shell.crumbs.getString('safetyquiz-q0-answer3')
        this.answer4.text = this.shell.crumbs.getString('safetyquiz-q0-answer4')

        this.brownpuffle.play('sq-thinking')

        this.questionNum = 0
    }

    chooseAnswer(index) {
        if (index !== this.answers[this.questionNum]) {
            let button = `answer_btn${index}`
            this[button].setFrame('module_button-hover')
            let cross = `cross${index}`
            this[cross].visible = true
            this.brownpuffle.play('sq-incorrect')
            setTimeout(() => {
                this.page2.visible = false
                this.page4.visible = true
                this.brownpuffleanimwrong.play('sq-tryagain')
                this[cross].visible = false
                this[button].setFrame('module_button')
                this.module_bg.setFrame('module_bg1')
                this.progress_rotated.setTexture('safetyquiz', 'progress-rotated0001')
            }, 1000)
            return
        }

        if (this.questionNum == 5) {
            this.page2.visible = false
            this.page3.visible = true
            this.item_anim.play('sq-item_anim')
            this.reward_anim.play('sq-reward_anim')
            return
        }

        this.questionNum++

        let button = `answer_btn${index}`
        this[button].setFrame('module_button-hover')

        let checkmark = `tick${index}`
        this[checkmark].visible = true

        this.brownpuffle.play('sq-correct')

        setTimeout(() => {
            this.question.text = this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-question`)
            this.answer1.text = this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-answer1`)
            this.answer2.text = this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-answer2`)
            if (!this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-answer3`).includes('localisedString')) {
                this.answer3.text = this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-answer3`)
                this.answer3.visible = true
                this.answer_btn3.visible = true
            } else {
                this.answer3.visible = false
                this.answer_btn3.visible = false
            }
            if (!this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-answer4`).includes('localisedString')) {
                this.answer4.text = this.shell.crumbs.getString(`safetyquiz-q${this.questionNum}-answer4`)
                this.answer4.visible = true
                this.answer_btn4.visible = true
            } else {
                this.answer4.visible = false
                this.answer_btn4.visible = false
            }
            this[button].setFrame('module_button')
            this[checkmark].visible = false
            this.brownpuffle.play('sq-thinking')
            this.module_bg.setFrame(`module_bg${this.questionNum + 1}`)
            this.progress_rotated.setTexture('safetyquiz', `progress-rotated000${this.questionNum + 1}`)
        }, 1000)
    }

    collectReward() {
        this.interface.prompt.showItem(24042)
        this.interface.main.safetyquiz.visible = false
        this.interface.main.moderatoricon.visible = true
        this.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
