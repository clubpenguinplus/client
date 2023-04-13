import Closeup from './Closeup'
import {Button, SimpleButton, LocalisedSprite, Interactive} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class TourQuiz extends Closeup {
    constructor() {
        super('TourQuiz')

        /** @type {Phaser.GameObjects.Container} */
        this.already
        /** @type {Phaser.GameObjects.Container} */
        this.age
        /** @type {Phaser.GameObjects.Container} */
        this.home
        /** @type {Phaser.GameObjects.Container} */
        this.question1
        /** @type {Phaser.GameObjects.Container} */
        this.question2
        /** @type {Phaser.GameObjects.Container} */
        this.question3
        /** @type {Phaser.GameObjects.Container} */
        this.question4
        /** @type {Phaser.GameObjects.Container} */
        this.question5
        /** @type {Phaser.GameObjects.Container} */
        this.question6
        /** @type {Phaser.GameObjects.Container} */
        this.question7
        /** @type {Phaser.GameObjects.Container} */
        this.question8
        /** @type {Phaser.GameObjects.Container} */
        this.question9
        /** @type {Phaser.GameObjects.Container} */
        this.question10
        /** @type {Phaser.GameObjects.Container} */
        this.fail
        /** @type {Phaser.GameObjects.Container} */
        this.success
        /** @type {Phaser.GameObjects.Container[]} */
        this.questions

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('tourquiz-pack', 'client/media/interface/closeups/tourquiz/tourquiz-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // container
        this.add.image(760, 440, 'tourquiz', 'container')

        // exit
        const exit = this.add.image(1044, 171, 'tourquiz', 'exit')

        // already
        const already = this.add.container(604, 233)
        already.visible = false

        // psst_en
        const psst_en = this.add.image(153, -43, 'tourquiz', 'psst_en')
        already.add(psst_en)

        // already_en
        const already_en = this.add.image(153, 99, 'tourquiz', 'already_en')
        already.add(already_en)

        // button_already
        const button_already = this.add.image(153, 360, 'tourquiz', 'button')
        already.add(button_already)

        // ok_already
        const ok_already = this.add.image(153, 356, 'tourquiz', 'ok_en')
        already.add(ok_already)

        // age
        const age = this.add.container(604, 233)
        age.visible = false

        // sorry_en
        const sorry_en = this.add.image(153, -43, 'tourquiz', 'sorry_en')
        age.add(sorry_en)

        // age_en
        const age_en = this.add.image(153, 99, 'tourquiz', 'age_en')
        age.add(age_en)

        // button_age
        const button_age = this.add.image(153, 360, 'tourquiz', 'button')
        age.add(button_age)

        // ok_age
        const ok_age = this.add.image(153, 356, 'tourquiz', 'ok_en')
        age.add(ok_age)

        // home
        const home = this.add.container(604, 233)
        home.visible = false

        // guidestitle_en
        const guidestitle_en = this.add.image(153, -43, 'tourquiz', 'guidestitle_en')
        home.add(guidestitle_en)

        // hometext_en
        const hometext_en = this.add.image(153, 149, 'tourquiz', 'hometext_en')
        home.add(hometext_en)

        // button_home
        const button_home = this.add.image(153, 360, 'tourquiz', 'button')
        home.add(button_home)

        // takequiz_en
        const takequiz_en = this.add.image(153, 356, 'tourquiz', 'takequiz_en')
        home.add(takequiz_en)

        // question1
        const question1 = this.add.container(604, 233)
        question1.visible = false

        // button_q1_wrong1
        const button_q1_wrong1 = this.add.image(153, 216, 'tourquiz', 'button')
        question1.add(button_q1_wrong1)

        // button_q1_wrong2
        const button_q1_wrong2 = this.add.image(153, 328, 'tourquiz', 'button')
        question1.add(button_q1_wrong2)

        // button_q1_wrong3
        const button_q1_wrong3 = this.add.image(153, 440, 'tourquiz', 'button')
        question1.add(button_q1_wrong3)

        // button_q1_right
        const button_q1_right = this.add.image(153, 104, 'tourquiz', 'button')
        question1.add(button_q1_right)

        // questions1_en
        const questions1_en = this.add.image(153, 187, 'tourquiz', 'questions1_en')
        question1.add(questions1_en)

        // question2
        const question2 = this.add.container(604, 233)
        question2.visible = false

        // button_q2_wrong2
        const button_q2_wrong2 = this.add.image(153, 216, 'tourquiz', 'button')
        question2.add(button_q2_wrong2)

        // button_q2_right
        const button_q2_right = this.add.image(153, 328, 'tourquiz', 'button')
        question2.add(button_q2_right)

        // button_q2_wrong3
        const button_q2_wrong3 = this.add.image(153, 440, 'tourquiz', 'button')
        question2.add(button_q2_wrong3)

        // button_q2_wrong
        const button_q2_wrong = this.add.image(153, 104, 'tourquiz', 'button')
        question2.add(button_q2_wrong)

        // questions2_en
        const questions2_en = this.add.image(153, 187, 'tourquiz', 'questions2_en')
        question2.add(questions2_en)

        // question3
        const question3 = this.add.container(604, 233)
        question3.visible = false

        // button_q3_wrong1
        const button_q3_wrong1 = this.add.image(153, 216, 'tourquiz', 'button')
        question3.add(button_q3_wrong1)

        // button_q3_wrong2
        const button_q3_wrong2 = this.add.image(153, 328, 'tourquiz', 'button')
        question3.add(button_q3_wrong2)

        // button_q3_right
        const button_q3_right = this.add.image(153, 440, 'tourquiz', 'button')
        question3.add(button_q3_right)

        // button_q3_wrong
        const button_q3_wrong = this.add.image(153, 104, 'tourquiz', 'button')
        question3.add(button_q3_wrong)

        // questions3_en
        const questions3_en = this.add.image(153, 187, 'tourquiz', 'questions3_en')
        question3.add(questions3_en)

        // question4
        const question4 = this.add.container(604, 233)
        question4.visible = false

        // button_q4_right
        const button_q4_right = this.add.image(153, 216, 'tourquiz', 'button')
        question4.add(button_q4_right)

        // button_q4_wrong2
        const button_q4_wrong2 = this.add.image(153, 328, 'tourquiz', 'button')
        question4.add(button_q4_wrong2)

        // button_q4_wrong1
        const button_q4_wrong1 = this.add.image(153, 440, 'tourquiz', 'button')
        question4.add(button_q4_wrong1)

        // button_q4_wrong
        const button_q4_wrong = this.add.image(153, 104, 'tourquiz', 'button')
        question4.add(button_q4_wrong)

        // questions4_en
        const questions4_en = this.add.image(153, 187, 'tourquiz', 'questions4_en')
        question4.add(questions4_en)

        // question5
        const question5 = this.add.container(604, 233)
        question5.visible = false

        // button_q5_right
        const button_q5_right = this.add.image(153, 216, 'tourquiz', 'button')
        question5.add(button_q5_right)

        // button_q5_wrong2
        const button_q5_wrong2 = this.add.image(153, 328, 'tourquiz', 'button')
        question5.add(button_q5_wrong2)

        // button_q5_wrong1
        const button_q5_wrong1 = this.add.image(153, 440, 'tourquiz', 'button')
        question5.add(button_q5_wrong1)

        // button_q5_wrong
        const button_q5_wrong = this.add.image(153, 104, 'tourquiz', 'button')
        question5.add(button_q5_wrong)

        // questions5_en
        const questions5_en = this.add.image(153, 187, 'tourquiz', 'questions5_en')
        question5.add(questions5_en)

        // question6
        const question6 = this.add.container(604, 233)
        question6.visible = false

        // button_q6_wrong
        const button_q6_wrong = this.add.image(153, 216, 'tourquiz', 'button')
        question6.add(button_q6_wrong)

        // button_q6_wrong2
        const button_q6_wrong2 = this.add.image(153, 328, 'tourquiz', 'button')
        question6.add(button_q6_wrong2)

        // button_q6_wrong1
        const button_q6_wrong1 = this.add.image(153, 440, 'tourquiz', 'button')
        question6.add(button_q6_wrong1)

        // button_q6_right
        const button_q6_right = this.add.image(153, 104, 'tourquiz', 'button')
        question6.add(button_q6_right)

        // questions6_en
        const questions6_en = this.add.image(153, 187, 'tourquiz', 'questions6_en')
        question6.add(questions6_en)

        // question7
        const question7 = this.add.container(604, 233)
        question7.visible = false

        // button_q7_wrong
        const button_q7_wrong = this.add.image(153, 216, 'tourquiz', 'button')
        question7.add(button_q7_wrong)

        // button_q7_right
        const button_q7_right = this.add.image(153, 328, 'tourquiz', 'button')
        question7.add(button_q7_right)

        // button_q7_wrong1
        const button_q7_wrong1 = this.add.image(153, 440, 'tourquiz', 'button')
        question7.add(button_q7_wrong1)

        // button_q7_wrong3
        const button_q7_wrong3 = this.add.image(153, 104, 'tourquiz', 'button')
        question7.add(button_q7_wrong3)

        // questions7_en
        const questions7_en = this.add.image(153, 187, 'tourquiz', 'questions7_en')
        question7.add(questions7_en)

        // question8
        const question8 = this.add.container(604, 233)
        question8.visible = false

        // button_q8_wrong
        const button_q8_wrong = this.add.image(153, 216, 'tourquiz', 'button')
        question8.add(button_q8_wrong)

        // button_q8_wrong2
        const button_q8_wrong2 = this.add.image(153, 328, 'tourquiz', 'button')
        question8.add(button_q8_wrong2)

        // button_q8_right
        const button_q8_right = this.add.image(153, 440, 'tourquiz', 'button')
        question8.add(button_q8_right)

        // button_q8_wrong3
        const button_q8_wrong3 = this.add.image(153, 104, 'tourquiz', 'button')
        question8.add(button_q8_wrong3)

        // questions8_en
        const questions8_en = this.add.image(153, 187, 'tourquiz', 'questions8_en')
        question8.add(questions8_en)

        // question9
        const question9 = this.add.container(604, 233)
        question9.visible = false

        // button_q9_wrong
        const button_q9_wrong = this.add.image(153, 216, 'tourquiz', 'button')
        question9.add(button_q9_wrong)

        // button_q9_right
        const button_q9_right = this.add.image(153, 328, 'tourquiz', 'button')
        question9.add(button_q9_right)

        // button_q9_wrong2
        const button_q9_wrong2 = this.add.image(153, 440, 'tourquiz', 'button')
        question9.add(button_q9_wrong2)

        // button_q9_wrong3
        const button_q9_wrong3 = this.add.image(153, 104, 'tourquiz', 'button')
        question9.add(button_q9_wrong3)

        // questions9_en
        const questions9_en = this.add.image(153, 187, 'tourquiz', 'questions9_en')
        question9.add(questions9_en)

        // question10
        const question10 = this.add.container(604, 233)
        question10.visible = false

        // button_q10_right
        const button_q10_right = this.add.image(153, 216, 'tourquiz', 'button')
        question10.add(button_q10_right)

        // button_q10_wrong
        const button_q10_wrong = this.add.image(153, 328, 'tourquiz', 'button')
        question10.add(button_q10_wrong)

        // button_q10_wrong2
        const button_q10_wrong2 = this.add.image(153, 440, 'tourquiz', 'button')
        question10.add(button_q10_wrong2)

        // button_q10_wrong3
        const button_q10_wrong3 = this.add.image(153, 104, 'tourquiz', 'button')
        question10.add(button_q10_wrong3)

        // questions10_en
        const questions10_en = this.add.image(153, 187, 'tourquiz', 'questions10_en')
        question10.add(questions10_en)

        // fail
        const fail = this.add.container(604, 233)
        fail.visible = false

        // failtitle_en
        const failtitle_en = this.add.image(153, -43, 'tourquiz', 'failtitle_en')
        fail.add(failtitle_en)

        // fail_en
        const fail_en = this.add.image(153, 99, 'tourquiz', 'fail_en')
        fail.add(fail_en)

        // button_fail
        const button_fail = this.add.image(153, 360, 'tourquiz', 'button')
        fail.add(button_fail)

        // ok_fail
        const ok_fail = this.add.image(153, 356, 'tourquiz', 'ok_en')
        fail.add(ok_fail)

        // success
        const success = this.add.container(604, 233)
        success.visible = false

        // wintitle_en
        const wintitle_en = this.add.image(153, -43, 'tourquiz', 'congratstitle_en')
        success.add(wintitle_en)

        // win_en
        const win_en = this.add.image(153, 99, 'tourquiz', 'congrats_en')
        success.add(win_en)

        // button_win
        const button_win = this.add.image(153, 360, 'tourquiz', 'button')
        success.add(button_win)

        // ok_win
        const ok_win = this.add.image(153, 356, 'tourquiz', 'ok_en')
        success.add(ok_win)

        // lists
        const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

        // block (components)
        new Interactive(block)

        // exit (components)
        const exitButton = new Button(exit)
        exitButton.spriteName = 'exit'
        exitButton.callback = () => this.stop()

        // psst_en (components)
        new LocalisedSprite(psst_en)

        // already_en (components)
        new LocalisedSprite(already_en)

        // button_already (components)
        const button_alreadyButton = new Button(button_already)
        button_alreadyButton.spriteName = 'button'
        button_alreadyButton.callback = () => this.stop()

        // sorry_en (components)
        new LocalisedSprite(sorry_en)

        // age_en (components)
        new LocalisedSprite(age_en)

        // button_age (components)
        const button_ageButton = new Button(button_age)
        button_ageButton.spriteName = 'button'
        button_ageButton.callback = () => this.stop()

        // guidestitle_en (components)
        new LocalisedSprite(guidestitle_en)

        // hometext_en (components)
        new LocalisedSprite(hometext_en)

        // button_home (components)
        const button_homeButton = new Button(button_home)
        button_homeButton.spriteName = 'button'
        button_homeButton.callback = () => this.startQuiz()

        // takequiz_en (components)
        new LocalisedSprite(takequiz_en)

        // button_q1_wrong1 (components)
        const button_q1_wrong1Button = new Button(button_q1_wrong1)
        button_q1_wrong1Button.spriteName = 'button'
        button_q1_wrong1Button.callback = () => this.onQ1()

        // button_q1_wrong2 (components)
        const button_q1_wrong2Button = new Button(button_q1_wrong2)
        button_q1_wrong2Button.spriteName = 'button'
        button_q1_wrong2Button.callback = () => this.onQ1()

        // button_q1_wrong3 (components)
        const button_q1_wrong3Button = new Button(button_q1_wrong3)
        button_q1_wrong3Button.spriteName = 'button'
        button_q1_wrong3Button.callback = () => this.onQ1()

        // button_q1_right (components)
        const button_q1_rightButton = new Button(button_q1_right)
        button_q1_rightButton.spriteName = 'button'
        button_q1_rightButton.callback = () => {
            this.onQ1()
            this.correctAnswer()
        }

        // questions1_en (components)
        new LocalisedSprite(questions1_en)

        // button_q2_wrong2 (components)
        const button_q2_wrong2Button = new Button(button_q2_wrong2)
        button_q2_wrong2Button.spriteName = 'button'
        button_q2_wrong2Button.callback = () => this.nextQuestion()

        // button_q2_right (components)
        const button_q2_rightButton = new Button(button_q2_right)
        button_q2_rightButton.spriteName = 'button'
        button_q2_rightButton.callback = () => {
            this.nextQuestion()
            this.correctAnswer()
        }

        // button_q2_wrong3 (components)
        const button_q2_wrong3Button = new Button(button_q2_wrong3)
        button_q2_wrong3Button.spriteName = 'button'
        button_q2_wrong3Button.callback = () => this.nextQuestion()

        // button_q2_wrong (components)
        const button_q2_wrongButton = new Button(button_q2_wrong)
        button_q2_wrongButton.spriteName = 'button'
        button_q2_wrongButton.callback = () => this.nextQuestion()

        // questions2_en (components)
        new LocalisedSprite(questions2_en)

        // button_q3_wrong1 (components)
        const button_q3_wrong1Button = new Button(button_q3_wrong1)
        button_q3_wrong1Button.spriteName = 'button'
        button_q3_wrong1Button.callback = () => this.nextQuestion()

        // button_q3_wrong2 (components)
        const button_q3_wrong2Button = new Button(button_q3_wrong2)
        button_q3_wrong2Button.spriteName = 'button'
        button_q3_wrong2Button.callback = () => this.nextQuestion()

        // button_q3_right (components)
        const button_q3_rightButton = new Button(button_q3_right)
        button_q3_rightButton.spriteName = 'button'
        button_q3_rightButton.callback = () => {
            this.nextQuestion()
            this.correctAnswer()
        }

        // button_q3_wrong (components)
        const button_q3_wrongButton = new Button(button_q3_wrong)
        button_q3_wrongButton.spriteName = 'button'
        button_q3_wrongButton.callback = () => this.nextQuestion()

        // questions3_en (components)
        new LocalisedSprite(questions3_en)

        // button_q4_right (components)
        const button_q4_rightButton = new Button(button_q4_right)
        button_q4_rightButton.spriteName = 'button'
        button_q4_rightButton.callback = () => {
            this.onQ4()
            this.correctAnswer()
        }

        // button_q4_wrong2 (components)
        const button_q4_wrong2Button = new Button(button_q4_wrong2)
        button_q4_wrong2Button.spriteName = 'button'
        button_q4_wrong2Button.callback = () => this.onQ4()

        // button_q4_wrong1 (components)
        const button_q4_wrong1Button = new Button(button_q4_wrong1)
        button_q4_wrong1Button.spriteName = 'button'
        button_q4_wrong1Button.callback = () => this.onQ4()

        // button_q4_wrong (components)
        const button_q4_wrongButton = new Button(button_q4_wrong)
        button_q4_wrongButton.spriteName = 'button'
        button_q4_wrongButton.callback = () => this.onQ4()

        // questions4_en (components)
        new LocalisedSprite(questions4_en)

        // button_q5_right (components)
        const button_q5_rightButton = new Button(button_q5_right)
        button_q5_rightButton.spriteName = 'button'
        button_q5_rightButton.callback = () => {
            this.onQ5()
            this.correctAnswer()
        }

        // button_q5_wrong2 (components)
        const button_q5_wrong2Button = new Button(button_q5_wrong2)
        button_q5_wrong2Button.spriteName = 'button'
        button_q5_wrong2Button.callback = () => this.onQ5()

        // button_q5_wrong1 (components)
        const button_q5_wrong1Button = new Button(button_q5_wrong1)
        button_q5_wrong1Button.spriteName = 'button'
        button_q5_wrong1Button.callback = () => this.onQ5()

        // button_q5_wrong (components)
        const button_q5_wrongButton = new Button(button_q5_wrong)
        button_q5_wrongButton.spriteName = 'button'
        button_q5_wrongButton.callback = () => this.onQ5()

        // questions5_en (components)
        new LocalisedSprite(questions5_en)

        // button_q6_wrong (components)
        const button_q6_wrongButton = new Button(button_q6_wrong)
        button_q6_wrongButton.spriteName = 'button'
        button_q6_wrongButton.callback = () => this.onQ6()

        // button_q6_wrong2 (components)
        const button_q6_wrong2Button = new Button(button_q6_wrong2)
        button_q6_wrong2Button.spriteName = 'button'
        button_q6_wrong2Button.callback = () => this.onQ6()

        // button_q6_wrong1 (components)
        const button_q6_wrong1Button = new Button(button_q6_wrong1)
        button_q6_wrong1Button.spriteName = 'button'
        button_q6_wrong1Button.callback = () => this.onQ6()

        // button_q6_right (components)
        const button_q6_rightButton = new Button(button_q6_right)
        button_q6_rightButton.spriteName = 'button'
        button_q6_rightButton.callback = () => {
            this.onQ6()
            this.correctAnswer()
        }

        // questions6_en (components)
        new LocalisedSprite(questions6_en)

        // button_q7_wrong (components)
        const button_q7_wrongButton = new Button(button_q7_wrong)
        button_q7_wrongButton.spriteName = 'button'
        button_q7_wrongButton.callback = () => this.onQ7()

        // button_q7_right (components)
        const button_q7_rightButton = new Button(button_q7_right)
        button_q7_rightButton.spriteName = 'button'
        button_q7_rightButton.callback = () => {
            this.onQ7()
            this.correctAnswer()
        }

        // button_q7_wrong1 (components)
        const button_q7_wrong1Button = new Button(button_q7_wrong1)
        button_q7_wrong1Button.spriteName = 'button'
        button_q7_wrong1Button.callback = () => this.onQ7()

        // button_q7_wrong3 (components)
        const button_q7_wrong3Button = new Button(button_q7_wrong3)
        button_q7_wrong3Button.spriteName = 'button'
        button_q7_wrong3Button.callback = () => this.onQ7()

        // questions7_en (components)
        new LocalisedSprite(questions7_en)

        // button_q8_wrong (components)
        const button_q8_wrongButton = new Button(button_q8_wrong)
        button_q8_wrongButton.spriteName = 'button'
        button_q8_wrongButton.callback = () => this.onQ8()

        // button_q8_wrong2 (components)
        const button_q8_wrong2Button = new Button(button_q8_wrong2)
        button_q8_wrong2Button.spriteName = 'button'
        button_q8_wrong2Button.callback = () => this.onQ8()

        // button_q8_right (components)
        const button_q8_rightButton = new Button(button_q8_right)
        button_q8_rightButton.spriteName = 'button'
        button_q8_rightButton.callback = () => {
            this.onQ8()
            this.correctAnswer()
        }

        // button_q8_wrong3 (components)
        const button_q8_wrong3Button = new Button(button_q8_wrong3)
        button_q8_wrong3Button.spriteName = 'button'
        button_q8_wrong3Button.callback = () => this.onQ8()

        // questions8_en (components)
        new LocalisedSprite(questions8_en)

        // button_q9_wrong (components)
        const button_q9_wrongButton = new Button(button_q9_wrong)
        button_q9_wrongButton.spriteName = 'button'
        button_q9_wrongButton.callback = () => this.onQ9()

        // button_q9_right (components)
        const button_q9_rightButton = new Button(button_q9_right)
        button_q9_rightButton.spriteName = 'button'
        button_q9_rightButton.callback = () => {
            this.onQ9()
            this.correctAnswer()
        }

        // button_q9_wrong2 (components)
        const button_q9_wrong2Button = new Button(button_q9_wrong2)
        button_q9_wrong2Button.spriteName = 'button'
        button_q9_wrong2Button.callback = () => this.onQ9()

        // button_q9_wrong3 (components)
        const button_q9_wrong3Button = new Button(button_q9_wrong3)
        button_q9_wrong3Button.spriteName = 'button'
        button_q9_wrong3Button.callback = () => this.onQ9()

        // questions9_en (components)
        new LocalisedSprite(questions9_en)

        // button_q10_right (components)
        const button_q10_rightButton = new Button(button_q10_right)
        button_q10_rightButton.spriteName = 'button'
        button_q10_rightButton.callback = () => {
            this.onQ10()
            this.correctAnswer()
        }

        // button_q10_wrong (components)
        const button_q10_wrongButton = new Button(button_q10_wrong)
        button_q10_wrongButton.spriteName = 'button'
        button_q10_wrongButton.callback = () => this.onQ10()

        // button_q10_wrong2 (components)
        const button_q10_wrong2Button = new Button(button_q10_wrong2)
        button_q10_wrong2Button.spriteName = 'button'
        button_q10_wrong2Button.callback = () => this.onQ10()

        // button_q10_wrong3 (components)
        const button_q10_wrong3Button = new Button(button_q10_wrong3)
        button_q10_wrong3Button.spriteName = 'button'
        button_q10_wrong3Button.callback = () => this.onQ10()

        // questions10_en (components)
        new LocalisedSprite(questions10_en)

        // failtitle_en (components)
        new LocalisedSprite(failtitle_en)

        // fail_en (components)
        new LocalisedSprite(fail_en)

        // button_fail (components)
        const button_failButton = new Button(button_fail)
        button_failButton.spriteName = 'button'
        button_failButton.callback = () => this.stop()

        // wintitle_en (components)
        new LocalisedSprite(wintitle_en)

        // win_en (components)
        new LocalisedSprite(win_en)

        // button_win (components)
        const button_winButton = new Button(button_win)
        button_winButton.spriteName = 'button'
        button_winButton.callback = () => {
            this.onWin()
            this.stop()
        }

        this.already = already
        this.age = age
        this.home = home
        this.question1 = question1
        this.question2 = question2
        this.question3 = question3
        this.question4 = question4
        this.question5 = question5
        this.question6 = question6
        this.question7 = question7
        this.question8 = question8
        this.question9 = question9
        this.question10 = question10
        this.fail = fail
        this.success = success
        this.questions = questions

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        if (this.isTourGuide()) {
            this.already.visible = true
        } else if (this.getPenguinAge() < 45) {
            this.age.visible = true
        } else {
            this.home.visible = true
        }
        this.correctAnswers = 0
    }

    getPenguinAge() {
        let joined = new Date(this.shell.client.joinTime).getTime()
        let now = new Date().getTime()
        let age = Math.floor((now - joined) / 1000 / 60 / 60 / 24)
        return age
    }

    isTourGuide() {
        return this.shell.client.inventory.head.includes(428)
    }

    onWin() {
        this.interface.prompt.showItem(428)
    }

    shuffleQuestions(questions) {
        // Shuffle the questions array
        questions = this.shuffle(questions)

        // Pick the first 8 questions from the shuffled array
        let quizQuestions = questions.slice(0, 8)

        return quizQuestions
    }

    nextQuestion() {
        let questionIndex = this.quizQuestions.indexOf(this.currentQuestion)
        if (questionIndex === this.quizQuestions.length - 1) {
            this.checkAnswers()
        }

        this.questions[questionIndex].visible = false
        this.currentQuestion = this.quizQuestions[questionIndex + 1]
        this.currentQuestion.visible = true
    }

    startQuiz() {
        this.question1.visible = true
        this.home.visible = false
    }

    shuffle(array) {
        // Create a copy of the original array
        let shuffledArray = array.slice()

        // Shuffle the elements of the array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
        }

        return shuffledArray
    }

    correctAnswer() {
        this.correctAnswers++
    }

    checkAnswers() {
        if (this.correctAnswers >= 7) {
            this.success.visible = true
        } else {
            this.fail.visible = true
        }
    }

    onQ1() {
        this.question1.visible = false
        this.question4.visible = true
    }

    onQ4() {
        this.question4.visible = false
        this.question5.visible = true
    }

    onQ5() {
        this.question5.visible = false
        this.question6.visible = true
    }

    onQ6() {
        this.question6.visible = false
        this.question7.visible = true
    }

    onQ7() {
        this.question7.visible = false
        this.question8.visible = true
    }

    onQ8() {
        this.question8.visible = false
        this.question9.visible = true
    }

    onQ9() {
        this.question9.visible = false
        this.question10.visible = true
    }

    onQ10() {
        this.question10.visible = false
        this.checkAnswers()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
