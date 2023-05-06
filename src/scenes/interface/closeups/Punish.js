import Closeup from './Closeup'
import {Button, SimpleButton, InputText, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Punish extends Closeup {
    constructor() {
        super('Punish')

        /** @type {Phaser.GameObjects.Image} */
        this.white_x
        /** @type {Phaser.GameObjects.Text} */
        this.punishUser
        /** @type {Phaser.GameObjects.Container} */
        this.choosePunishment
        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Text} */
        this.text_2
        /** @type {Phaser.GameObjects.Text} */
        this.text_3
        /** @type {Phaser.GameObjects.Container} */
        this.chooseDuration
        /** @type {Phaser.GameObjects.Text} */
        this.text1
        /** @type {Phaser.GameObjects.Text} */
        this.text_22
        /** @type {Phaser.GameObjects.Text} */
        this.text_31
        /** @type {Phaser.GameObjects.Text} */
        this.text_41
        /** @type {Phaser.GameObjects.Text} */
        this.text_51
        /** @type {Phaser.GameObjects.Text} */
        this.text_61
        /** @type {Phaser.GameObjects.Container} */
        this.chooseReason
        /** @type {Phaser.GameObjects.Text} */
        this.text10
        /** @type {Phaser.GameObjects.Text} */
        this.text_12
        /** @type {Phaser.GameObjects.Text} */
        this.text_13
        /** @type {Phaser.GameObjects.Text} */
        this.text_7
        /** @type {Phaser.GameObjects.Container} */
        this.enterDetails
        /** @type {Phaser.GameObjects.Text} */
        this.detailsText
        /** @type {Phaser.GameObjects.Text} */
        this.text_9

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // bg
        this.add.image(760, 452, 'banning', 'bg')

        // white_x
        const white_x = this.add.image(1451, 60, 'main', 'white-x')
        white_x.scaleX = 0.8
        white_x.scaleY = 0.8

        // punishUser
        const punishUser = this.add.text(760, 180, '', {})
        punishUser.setOrigin(0.5, 0)
        punishUser.text = 'Punish Player: Username'
        punishUser.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        punishUser.setLineSpacing(5)
        punishUser.setWordWrapWidth(550)

        // choosePunishment
        const choosePunishment = this.add.container(760, 348)

        // long_button
        const long_button = this.add.image(0, 0, 'banning', 'long_button')
        choosePunishment.add(long_button)

        // text
        const text = this.add.text(0, 0, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'Warn'
        text.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text.setLineSpacing(5)
        text.setWordWrapWidth(550)
        choosePunishment.add(text)

        // long_button_1
        const long_button_1 = this.add.image(0, 150, 'banning', 'long_button')
        choosePunishment.add(long_button_1)

        // text_2
        const text_2 = this.add.text(0, 150, '', {})
        text_2.setOrigin(0.5, 0.5)
        text_2.text = 'Mute'
        text_2.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_2.setLineSpacing(5)
        text_2.setWordWrapWidth(550)
        choosePunishment.add(text_2)

        // long_button_2
        const long_button_2 = this.add.image(0, 300, 'banning', 'long_button')
        choosePunishment.add(long_button_2)

        // text_3
        const text_3 = this.add.text(0, 300, '', {})
        text_3.setOrigin(0.5, 0.5)
        text_3.text = 'Ban'
        text_3.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_3.setLineSpacing(5)
        text_3.setWordWrapWidth(550)
        choosePunishment.add(text_3)

        // progress1
        const progress1 = this.add.image(297.5, -156, 'banning', 'progress1')
        choosePunishment.add(progress1)

        // chooseDuration
        const chooseDuration = this.add.container(760, 348)
        chooseDuration.visible = false

        // long_button1
        const long_button1 = this.add.image(-160, 0, 'banning', 'button')
        chooseDuration.add(long_button1)

        // text1
        const text1 = this.add.text(-160, 0, '', {})
        text1.setOrigin(0.5, 0.5)
        text1.text = '1 Day'
        text1.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text1.setLineSpacing(5)
        text1.setWordWrapWidth(550)
        chooseDuration.add(text1)

        // long_button_22
        const long_button_22 = this.add.image(-160, 150, 'banning', 'button')
        chooseDuration.add(long_button_22)

        // text_22
        const text_22 = this.add.text(-160, 150, '', {})
        text_22.setOrigin(0.5, 0.5)
        text_22.text = '3 Days'
        text_22.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_22.setLineSpacing(5)
        text_22.setWordWrapWidth(550)
        chooseDuration.add(text_22)

        // long_button_21
        const long_button_21 = this.add.image(-160, 300, 'banning', 'button')
        chooseDuration.add(long_button_21)

        // text_31
        const text_31 = this.add.text(-160, 300, '', {})
        text_31.setOrigin(0.5, 0.5)
        text_31.text = '1 Week'
        text_31.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_31.setLineSpacing(5)
        text_31.setWordWrapWidth(550)
        chooseDuration.add(text_31)

        // long_button_31
        const long_button_31 = this.add.image(160, 0, 'banning', 'button')
        chooseDuration.add(long_button_31)

        // text_41
        const text_41 = this.add.text(160, 0, '', {})
        text_41.setOrigin(0.5, 0.5)
        text_41.text = '3 Weeks'
        text_41.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_41.setLineSpacing(5)
        text_41.setWordWrapWidth(550)
        chooseDuration.add(text_41)

        // long_button_41
        const long_button_41 = this.add.image(160, 150, 'banning', 'button')
        chooseDuration.add(long_button_41)

        // text_51
        const text_51 = this.add.text(160, 150, '', {})
        text_51.setOrigin(0.5, 0.5)
        text_51.text = '3 Months'
        text_51.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_51.setLineSpacing(5)
        text_51.setWordWrapWidth(550)
        chooseDuration.add(text_51)

        // long_button_51
        const long_button_51 = this.add.image(160, 300, 'banning', 'button')
        chooseDuration.add(long_button_51)

        // text_61
        const text_61 = this.add.text(160, 300, '', {})
        text_61.setOrigin(0.5, 0.5)
        text_61.text = 'Permanent'
        text_61.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_61.setLineSpacing(5)
        text_61.setWordWrapWidth(550)
        chooseDuration.add(text_61)

        // progress2
        const progress2 = this.add.image(297.5, -156, 'banning', 'progress2')
        chooseDuration.add(progress2)

        // chooseReason
        const chooseReason = this.add.container(760, 348)
        chooseReason.visible = false

        // long_button10
        const long_button10 = this.add.image(0, -30, 'banning', 'long_button')
        chooseReason.add(long_button10)

        // text10
        const text10 = this.add.text(0, -30, '', {})
        text10.setOrigin(0.5, 0.5)
        text10.text = 'Offensive/Swearing'
        text10.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text10.setLineSpacing(5)
        text10.setWordWrapWidth(550)
        chooseReason.add(text10)

        // long_button_11
        const long_button_11 = this.add.image(0, 90, 'banning', 'long_button')
        chooseReason.add(long_button_11)

        // text_12
        const text_12 = this.add.text(0, 90, '', {})
        text_12.setOrigin(0.5, 0.5)
        text_12.text = 'Personal Info'
        text_12.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_12.setLineSpacing(5)
        text_12.setWordWrapWidth(550)
        chooseReason.add(text_12)

        // long_button_12
        const long_button_12 = this.add.image(0, 210, 'banning', 'long_button')
        chooseReason.add(long_button_12)

        // text_13
        const text_13 = this.add.text(0, 210, '', {})
        text_13.setOrigin(0.5, 0.5)
        text_13.text = 'Inappropriate Igloo'
        text_13.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_13.setLineSpacing(5)
        text_13.setWordWrapWidth(550)
        chooseReason.add(text_13)

        // progress3
        const progress3 = this.add.image(297.5, -156, 'banning', 'progress3')
        chooseReason.add(progress3)

        // long_button_6
        const long_button_6 = this.add.image(0, 330, 'banning', 'long_button')
        chooseReason.add(long_button_6)

        // text_7
        const text_7 = this.add.text(0, 330, '', {})
        text_7.setOrigin(0.5, 0.5)
        text_7.text = 'Cheating'
        text_7.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_7.setLineSpacing(5)
        text_7.setWordWrapWidth(550)
        chooseReason.add(text_7)

        // enterDetails
        const enterDetails = this.add.container(760, 348)
        enterDetails.visible = false

        // progress4
        const progress4 = this.add.image(297.5, -156, 'banning', 'progress4')
        enterDetails.add(progress4)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(0, 58, 600, 200)
        rectangle_1.isFilled = true
        rectangle_1.isStroked = true
        rectangle_1.strokeColor = 6830345
        rectangle_1.lineWidth = 10
        enterDetails.add(rectangle_1)

        // detailsText
        const detailsText = this.add.text(0, 58, '', {})
        detailsText.setOrigin(0.5, 0.5)
        detailsText.text = 'Enter Details'
        detailsText.setStyle({align: 'center', color: '#000000ff', fixedWidth: 550, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        detailsText.setLineSpacing(5)
        detailsText.setWordWrapWidth(550)
        enterDetails.add(detailsText)

        // long_button_7
        const long_button_7 = this.add.image(0, 286, 'banning', 'button')
        enterDetails.add(long_button_7)

        // text_9
        const text_9 = this.add.text(0, 286, '', {})
        text_9.setOrigin(0.5, 0.5)
        text_9.text = 'Submit'
        text_9.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text_9.setLineSpacing(5)
        text_9.setWordWrapWidth(550)
        enterDetails.add(text_9)

        // block (components)
        new Interactive(block)

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => {
            this.stop()
        }

        // long_button (components)
        const long_buttonButton = new Button(long_button)
        long_buttonButton.callback = () => this.warn()

        // long_button_1 (components)
        const long_button_1Button = new Button(long_button_1)
        long_button_1Button.callback = () => this.mute()

        // long_button_2 (components)
        const long_button_2Button = new Button(long_button_2)
        long_button_2Button.callback = () => this.ban()

        // long_button1 (components)
        const long_button1Button = new Button(long_button1)
        long_button1Button.callback = () => this.setDuration(24)

        // long_button_22 (components)
        const long_button_22Button = new Button(long_button_22)
        long_button_22Button.callback = () => this.setDuration(72)

        // long_button_21 (components)
        const long_button_21Button = new Button(long_button_21)
        long_button_21Button.callback = () => this.setDuration(168)

        // long_button_31 (components)
        const long_button_31Button = new Button(long_button_31)
        long_button_31Button.callback = () => this.setDuration(504)

        // long_button_41 (components)
        const long_button_41Button = new Button(long_button_41)
        long_button_41Button.callback = () => this.setDuration(2190)

        // long_button_51 (components)
        const long_button_51Button = new Button(long_button_51)
        long_button_51Button.callback = () => this.setDuration('p')

        // long_button10 (components)
        const long_button10Button = new Button(long_button10)
        long_button10Button.callback = () => this.setReason('c')

        // long_button_11 (components)
        const long_button_11Button = new Button(long_button_11)
        long_button_11Button.callback = () => this.setReason('p')

        // long_button_12 (components)
        const long_button_12Button = new Button(long_button_12)
        long_button_12Button.callback = () => this.setReason('i')

        // long_button_6 (components)
        const long_button_6Button = new Button(long_button_6)
        long_button_6Button.callback = () => this.setReason('m')

        // detailsText (components)
        const detailsTextInputText = new InputText(detailsText)
        detailsTextInputText.multiline = true

        // long_button_7 (components)
        const long_button_7Button = new Button(long_button_7)
        long_button_7Button.callback = () => this.submit()

        this.white_x = white_x
        this.punishUser = punishUser
        this.choosePunishment = choosePunishment
        this.text = text
        this.text_2 = text_2
        this.text_3 = text_3
        this.chooseDuration = chooseDuration
        this.text1 = text1
        this.text_22 = text_22
        this.text_31 = text_31
        this.text_41 = text_41
        this.text_51 = text_51
        this.text_61 = text_61
        this.chooseReason = chooseReason
        this.text10 = text10
        this.text_12 = text_12
        this.text_13 = text_13
        this.text_7 = text_7
        this.enterDetails = enterDetails
        this.detailsText = detailsText
        this.text_9 = text_9

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        this._create()
        this.punishUser.text = `Punish User: ${this.interface.punishuser.username}`
        this.id = this.interface.punishuser.id
    }

    warn() {
        this.punishment = 'w'
        this.choosePunishment.visible = false
        this.detailsText.__InputText.clickZone.visible = true
        this.enterDetails.visible = true
    }

    mute() {
        this.punishment = 'm'
        this.choosePunishment.visible = false
        this.chooseDuration.visible = true
    }

    ban() {
        this.punishment = 'b'
        this.choosePunishment.visible = false
        this.chooseDuration.visible = true
    }

    setDuration(duration) {
        this.duration = duration
        this.chooseDuration.visible = false
        if (this.punishment == 'b' && this.duration != 'p') {
            this.chooseReason.visible = true
        } else if (this.punishment == 'b' && this.duration == 'p') {
            this.setReason('o')
        } else {
            this.detailsText.__InputText.clickZone.visible = true
            this.enterDetails.visible = true
        }
    }

    setReason(reason) {
        this.reason = reason
        this.chooseReason.visible = false
        this.detailsText.__InputText.clickZone.visible = true
        this.enterDetails.visible = true
    }

    submit() {
        switch (this.punishment) {
            case 'b':
                this.airtower.sendXt('o#b', `${this.id}%${this.duration}%${this.reason}%${this.detailsText.textContent}`)
                break
            case 'm':
                this.airtower.sendXt('o#m', `${this.id}%${this.duration}%${this.detailsText.textContent}`)
                break
            case 'w':
                this.airtower.sendXt('o#w', `${this.id}%${this.detailsText.textContent}`)
        }
        this.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
