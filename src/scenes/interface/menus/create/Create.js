import BaseScene from '@scenes/base/BaseScene'
import {SimpleButton, Button, InputText, LocalisedString} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class Create extends BaseScene {
    constructor() {
        super('Create')

        /** @type {Phaser.GameObjects.Image} */
        this.rookie_talk
        /** @type {Phaser.GameObjects.Image} */
        this.rookie_stand
        /** @type {Phaser.GameObjects.Image} */
        this.rookie_happy
        /** @type {Phaser.GameObjects.Container} */
        this.rookie_speech
        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Container} */
        this.ok
        /** @type {Phaser.GameObjects.Container} */
        this.colorselect
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_body
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_body_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_1_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_2_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_3_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_4_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_5_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_6_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_7_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_15_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_12_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_11_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_10_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_9_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_8_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_14_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_13_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_1
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_2
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_2
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_3
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_3
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_4
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_4
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_5
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_5
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_6
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_6
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_7
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_7
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_13
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_13
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_12
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_12
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_11
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_11
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_10
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_10
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_9
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_9
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_8
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_8
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_16
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_16
        /** @type {Phaser.GameObjects.Image} */
        this.color_body_15
        /** @type {Phaser.GameObjects.Image} */
        this.color_highlight_15
        /** @type {Phaser.GameObjects.Container} */
        this.age
        /** @type {Phaser.GameObjects.Container} */
        this.username
        /** @type {Phaser.GameObjects.Text} */
        this.username_text
        /** @type {Phaser.GameObjects.Container} */
        this.password
        /** @type {Phaser.GameObjects.Text} */
        this.confirm_password_text
        /** @type {Phaser.GameObjects.Text} */
        this.password_text
        /** @type {Phaser.GameObjects.Container} */
        this.email
        /** @type {Phaser.GameObjects.Text} */
        this.email_text
        /** @type {Phaser.GameObjects.Container} */
        this.tos
        /** @type {Phaser.GameObjects.Image} */
        this.privacyButton
        /** @type {Phaser.GameObjects.Image} */
        this.tosButton
        /** @type {Phaser.GameObjects.Text} */
        this.tosText
        /** @type {Phaser.GameObjects.Text} */
        this.privacyText
        /** @type {Phaser.GameObjects.Image} */
        this.logo
        /** @type {Phaser.GameObjects.Container} */
        this.inputTextContainer

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('create-pack', 'client/media/interface/menus/create/create-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'main', 'backgroun')

        // rookie_talk
        const rookie_talk = this.add.image(351, 605, 'create', 'rookie-talk')
        rookie_talk.visible = false

        // rookie_stand
        const rookie_stand = this.add.image(220, 750, 'create', 'rookie-stand')
        rookie_stand.visible = false

        // rookie_happy
        const rookie_happy = this.add.image(233, 698, 'create', 'rookie-happy')
        rookie_happy.visible = false

        // rookie_speech
        const rookie_speech = this.add.container(565, 739)
        rookie_speech.visible = false

        // text_bg
        const text_bg = this.add.image(414, 67, 'create', 'text-bg')
        rookie_speech.add(text_bg)

        // text
        const text = this.add.text(0, -6, '', {})
        text.text = 'rookie'
        text.setStyle({color: '#474747ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        text.setWordWrapWidth(860)
        rookie_speech.add(text)

        // ok
        const ok = this.add.container(814, 120)
        ok.visible = false
        rookie_speech.add(ok)

        // ok_btn
        const ok_btn = this.add.image(0, 0, 'create', 'ok-btn')
        ok.add(ok_btn)

        // ok_text
        const ok_text = this.add.text(0, 3, '', {})
        ok_text.setOrigin(0.5, 0.6)
        ok_text.text = 'OK'
        ok_text.setStyle({align: 'center', color: '#353535ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        ok.add(ok_text)

        // colorselect
        const colorselect = this.add.container(641, 201)
        colorselect.visible = false

        // box
        const box = this.add.image(359, 160, 'create', 'box')
        colorselect.add(box)

        // penguin_body
        const penguin_body = this.add.image(616, 117, 'create', 'penguin-body')
        penguin_body.tintTopLeft = 13158
        penguin_body.tintTopRight = 13158
        penguin_body.tintBottomLeft = 13158
        penguin_body.tintBottomRight = 13158
        colorselect.add(penguin_body)

        // penguin_body_1
        const penguin_body_1 = this.add.image(616, 117, 'create', 'penguin-body')
        penguin_body_1.tintTopLeft = 13158
        penguin_body_1.tintTopRight = 13158
        penguin_body_1.tintBottomLeft = 13158
        penguin_body_1.tintBottomRight = 13158
        colorselect.add(penguin_body_1)

        // body_highlight
        const body_highlight = this.add.image(616, 164, 'create', 'body-highlight')
        colorselect.add(body_highlight)

        // bgs
        const bgs = this.add.container(15, -9)
        colorselect.add(bgs)

        // color_body_1_1
        const color_body_1_1 = this.add.image(0, 0, 'create', 'color-body')
        color_body_1_1.scaleX = 0.66
        color_body_1_1.scaleY = 0.66
        bgs.add(color_body_1_1)

        // color_body_2_1
        const color_body_2_1 = this.add.image(115, 0, 'create', 'color-body')
        color_body_2_1.scaleX = 0.66
        color_body_2_1.scaleY = 0.66
        bgs.add(color_body_2_1)

        // color_body_3_1
        const color_body_3_1 = this.add.image(231, 0, 'create', 'color-body')
        color_body_3_1.scaleX = 0.66
        color_body_3_1.scaleY = 0.66
        bgs.add(color_body_3_1)

        // color_body_4_1
        const color_body_4_1 = this.add.image(346, 0, 'create', 'color-body')
        color_body_4_1.scaleX = 0.66
        color_body_4_1.scaleY = 0.66
        bgs.add(color_body_4_1)

        // color_body_5_1
        const color_body_5_1 = this.add.image(0, 117, 'create', 'color-body')
        color_body_5_1.scaleX = 0.66
        color_body_5_1.scaleY = 0.66
        bgs.add(color_body_5_1)

        // color_body_6_1
        const color_body_6_1 = this.add.image(115, 117, 'create', 'color-body')
        color_body_6_1.scaleX = 0.66
        color_body_6_1.scaleY = 0.66
        bgs.add(color_body_6_1)

        // color_body_7_1
        const color_body_7_1 = this.add.image(231, 117, 'create', 'color-body')
        color_body_7_1.scaleX = 0.66
        color_body_7_1.scaleY = 0.66
        bgs.add(color_body_7_1)

        // color_body_15_1
        const color_body_15_1 = this.add.image(292, 347, 'create', 'color-body')
        color_body_15_1.scaleX = 0.66
        color_body_15_1.scaleY = 0.66
        bgs.add(color_body_15_1)

        // color_body_12_1
        const color_body_12_1 = this.add.image(346, 232, 'create', 'color-body')
        color_body_12_1.scaleX = 0.66
        color_body_12_1.scaleY = 0.66
        bgs.add(color_body_12_1)

        // color_body_11_1
        const color_body_11_1 = this.add.image(231, 232, 'create', 'color-body')
        color_body_11_1.scaleX = 0.66
        color_body_11_1.scaleY = 0.66
        bgs.add(color_body_11_1)

        // color_body_10_1
        const color_body_10_1 = this.add.image(115, 232, 'create', 'color-body')
        color_body_10_1.scaleX = 0.66
        color_body_10_1.scaleY = 0.66
        bgs.add(color_body_10_1)

        // color_body_9_1
        const color_body_9_1 = this.add.image(0, 232, 'create', 'color-body')
        color_body_9_1.scaleX = 0.66
        color_body_9_1.scaleY = 0.66
        bgs.add(color_body_9_1)

        // color_body_8_1
        const color_body_8_1 = this.add.image(346, 117, 'create', 'color-body')
        color_body_8_1.scaleX = 0.66
        color_body_8_1.scaleY = 0.66
        bgs.add(color_body_8_1)

        // color_body_14_1
        const color_body_14_1 = this.add.image(173, 347, 'create', 'color-body')
        color_body_14_1.scaleX = 0.66
        color_body_14_1.scaleY = 0.66
        bgs.add(color_body_14_1)

        // color_body_13_1
        const color_body_13_1 = this.add.image(59, 347, 'create', 'color-body')
        color_body_13_1.scaleX = 0.66
        color_body_13_1.scaleY = 0.66
        bgs.add(color_body_13_1)

        // color_body_1
        const color_body_1 = this.add.image(15, -9, 'create', 'color-body')
        color_body_1.scaleX = 0.7
        color_body_1.scaleY = 0.7
        color_body_1.tintTopLeft = 13158
        color_body_1.tintTopRight = 13158
        color_body_1.tintBottomLeft = 13158
        color_body_1.tintBottomRight = 13158
        colorselect.add(color_body_1)

        // color_highlight_1
        const color_highlight_1 = this.add.image(15, -9, 'create', 'color-highlight-hover')
        color_highlight_1.scaleX = 0.7
        color_highlight_1.scaleY = 0.7
        colorselect.add(color_highlight_1)

        // color_body_2
        const color_body_2 = this.add.image(130, -9, 'create', 'color-body')
        color_body_2.scaleX = 0.7
        color_body_2.scaleY = 0.7
        color_body_2.tintTopLeft = 39168
        color_body_2.tintTopRight = 39168
        color_body_2.tintBottomLeft = 39168
        color_body_2.tintBottomRight = 39168
        colorselect.add(color_body_2)

        // color_highlight_2
        const color_highlight_2 = this.add.image(130, -9, 'create', 'color-highlight')
        color_highlight_2.scaleX = 0.7
        color_highlight_2.scaleY = 0.7
        colorselect.add(color_highlight_2)

        // color_body_3
        const color_body_3 = this.add.image(246, -9, 'create', 'color-body')
        color_body_3.scaleX = 0.7
        color_body_3.scaleY = 0.7
        color_body_3.tintTopLeft = 16724889
        color_body_3.tintTopRight = 16724889
        color_body_3.tintBottomLeft = 16724889
        color_body_3.tintBottomRight = 16724889
        colorselect.add(color_body_3)

        // color_highlight_3
        const color_highlight_3 = this.add.image(246, -9, 'create', 'color-highlight')
        color_highlight_3.scaleX = 0.7
        color_highlight_3.scaleY = 0.7
        colorselect.add(color_highlight_3)

        // color_body_4
        const color_body_4 = this.add.image(361, -9, 'create', 'color-body')
        color_body_4.scaleX = 0.7
        color_body_4.scaleY = 0.7
        color_body_4.tintTopLeft = 3355443
        color_body_4.tintTopRight = 3355443
        color_body_4.tintBottomLeft = 3355443
        color_body_4.tintBottomRight = 3355443
        colorselect.add(color_body_4)

        // color_highlight_4
        const color_highlight_4 = this.add.image(361, -9, 'create', 'color-highlight')
        color_highlight_4.scaleX = 0.7
        color_highlight_4.scaleY = 0.7
        colorselect.add(color_highlight_4)

        // color_body_5
        const color_body_5 = this.add.image(15, 108, 'create', 'color-body')
        color_body_5.scaleX = 0.7
        color_body_5.scaleY = 0.7
        color_body_5.tintTopLeft = 13369344
        color_body_5.tintTopRight = 13369344
        color_body_5.tintBottomLeft = 13369344
        color_body_5.tintBottomRight = 13369344
        colorselect.add(color_body_5)

        // color_highlight_5
        const color_highlight_5 = this.add.image(15, 108, 'create', 'color-highlight')
        color_highlight_5.scaleX = 0.7
        color_highlight_5.scaleY = 0.7
        colorselect.add(color_highlight_5)

        // color_body_6
        const color_body_6 = this.add.image(130, 108, 'create', 'color-body')
        color_body_6.scaleX = 0.7
        color_body_6.scaleY = 0.7
        color_body_6.tintTopLeft = 16737792
        color_body_6.tintTopRight = 16737792
        color_body_6.tintBottomLeft = 16737792
        color_body_6.tintBottomRight = 16737792
        colorselect.add(color_body_6)

        // color_highlight_6
        const color_highlight_6 = this.add.image(130, 108, 'create', 'color-highlight')
        color_highlight_6.scaleX = 0.7
        color_highlight_6.scaleY = 0.7
        colorselect.add(color_highlight_6)

        // color_body_7
        const color_body_7 = this.add.image(246, 108, 'create', 'color-body')
        color_body_7.scaleX = 0.7
        color_body_7.scaleY = 0.7
        color_body_7.tintTopLeft = 16763904
        color_body_7.tintTopRight = 16763904
        color_body_7.tintBottomLeft = 16763904
        color_body_7.tintBottomRight = 16763904
        colorselect.add(color_body_7)

        // color_highlight_7
        const color_highlight_7 = this.add.image(246, 108, 'create', 'color-highlight')
        color_highlight_7.scaleX = 0.7
        color_highlight_7.scaleY = 0.7
        colorselect.add(color_highlight_7)

        // color_body_13
        const color_body_13 = this.add.image(307, 338, 'create', 'color-body')
        color_body_13.scaleX = 0.7
        color_body_13.scaleY = 0.7
        color_body_13.tintTopLeft = 9102082
        color_body_13.tintTopRight = 9102082
        color_body_13.tintBottomLeft = 9102082
        color_body_13.tintBottomRight = 9102082
        colorselect.add(color_body_13)

        // color_highlight_13
        const color_highlight_13 = this.add.image(307, 338, 'create', 'color-highlight')
        color_highlight_13.scaleX = 0.7
        color_highlight_13.scaleY = 0.7
        colorselect.add(color_highlight_13)

        // color_body_12
        const color_body_12 = this.add.image(361, 223, 'create', 'color-body')
        color_body_12.scaleX = 0.7
        color_body_12.scaleY = 0.7
        color_body_12.tintTopLeft = 39372
        color_body_12.tintTopRight = 39372
        color_body_12.tintBottomLeft = 39372
        color_body_12.tintBottomRight = 39372
        colorselect.add(color_body_12)

        // color_highlight_12
        const color_highlight_12 = this.add.image(361, 223, 'create', 'color-highlight')
        color_highlight_12.scaleX = 0.7
        color_highlight_12.scaleY = 0.7
        colorselect.add(color_highlight_12)

        // color_body_11
        const color_body_11 = this.add.image(246, 223, 'create', 'color-body')
        color_body_11.scaleX = 0.7
        color_body_11.scaleY = 0.7
        color_body_11.tintTopLeft = 26112
        color_body_11.tintTopRight = 26112
        color_body_11.tintBottomLeft = 26112
        color_body_11.tintBottomRight = 26112
        colorselect.add(color_body_11)

        // color_highlight_11
        const color_highlight_11 = this.add.image(246, 223, 'create', 'color-highlight')
        color_highlight_11.scaleX = 0.7
        color_highlight_11.scaleY = 0.7
        colorselect.add(color_highlight_11)

        // color_body_10
        const color_body_10 = this.add.image(130, 223, 'create', 'color-body')
        color_body_10.scaleX = 0.7
        color_body_10.scaleY = 0.7
        color_body_10.tintTopLeft = 16737894
        color_body_10.tintTopRight = 16737894
        color_body_10.tintBottomLeft = 16737894
        color_body_10.tintBottomRight = 16737894
        colorselect.add(color_body_10)

        // color_highlight_10
        const color_highlight_10 = this.add.image(130, 223, 'create', 'color-highlight')
        color_highlight_10.scaleX = 0.7
        color_highlight_10.scaleY = 0.7
        colorselect.add(color_highlight_10)

        // color_body_9
        const color_body_9 = this.add.image(15, 223, 'create', 'color-body')
        color_body_9.scaleX = 0.7
        color_body_9.scaleY = 0.7
        color_body_9.tintTopLeft = 10053120
        color_body_9.tintTopRight = 10053120
        color_body_9.tintBottomLeft = 10053120
        color_body_9.tintBottomRight = 10053120
        colorselect.add(color_body_9)

        // color_highlight_9
        const color_highlight_9 = this.add.image(15, 223, 'create', 'color-highlight')
        color_highlight_9.scaleX = 0.7
        color_highlight_9.scaleY = 0.7
        colorselect.add(color_highlight_9)

        // color_body_8
        const color_body_8 = this.add.image(361, 108, 'create', 'color-body')
        color_body_8.scaleX = 0.7
        color_body_8.scaleY = 0.7
        color_body_8.tintTopLeft = 6684825
        color_body_8.tintTopRight = 6684825
        color_body_8.tintBottomLeft = 6684825
        color_body_8.tintBottomRight = 6684825
        colorselect.add(color_body_8)

        // color_highlight_8
        const color_highlight_8 = this.add.image(361, 108, 'create', 'color-highlight')
        color_highlight_8.scaleX = 0.7
        color_highlight_8.scaleY = 0.7
        colorselect.add(color_highlight_8)

        // color_body_16
        const color_body_16 = this.add.image(188, 338, 'create', 'color-body')
        color_body_16.scaleX = 0.7
        color_body_16.scaleY = 0.7
        color_body_16.tintTopLeft = 15790296
        color_body_16.tintTopRight = 15790296
        color_body_16.tintBottomLeft = 15790296
        color_body_16.tintBottomRight = 15790296
        colorselect.add(color_body_16)

        // color_highlight_16
        const color_highlight_16 = this.add.image(188, 338, 'create', 'color-highlight')
        color_highlight_16.scaleX = 0.7
        color_highlight_16.scaleY = 0.7
        colorselect.add(color_highlight_16)

        // color_body_15
        const color_body_15 = this.add.image(74, 338, 'create', 'color-body')
        color_body_15.scaleX = 0.7
        color_body_15.scaleY = 0.7
        color_body_15.tintTopLeft = 173975
        color_body_15.tintTopRight = 173975
        color_body_15.tintBottomLeft = 173975
        color_body_15.tintBottomRight = 173975
        colorselect.add(color_body_15)

        // color_highlight_15
        const color_highlight_15 = this.add.image(74, 338, 'create', 'color-highlight')
        color_highlight_15.scaleX = 0.7
        color_highlight_15.scaleY = 0.7
        colorselect.add(color_highlight_15)

        // age
        const age = this.add.container(780, 578)

        // login_button
        const login_button = this.add.image(0, 0, 'login', 'login-button')
        login_button.setOrigin(0.5, 0.5047619047619047)
        age.add(login_button)

        // login_button_1
        const login_button_1 = this.add.image(430, 0, 'login', 'login-button')
        login_button_1.setOrigin(0.5, 0.5047619047619047)
        age.add(login_button_1)

        // text_1
        const text_1 = this.add.text(0, 0, '', {})
        text_1.setOrigin(0.5, 0.5)
        text_1.text = 'Under 13'
        text_1.setStyle({align: 'center', color: '#b9daf4ff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '36px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#ffffffff', 'shadow.blur': 5})
        age.add(text_1)

        // text_1_1
        const text_1_1 = this.add.text(430, 0, '', {})
        text_1_1.setOrigin(0.5, 0.5)
        text_1_1.text = '13 or Over'
        text_1_1.setStyle({align: 'center', color: '#b9daf4ff', fixedWidth: 200, fontFamily: 'cpBurbankSmall', fontSize: '36px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#ffffffff', 'shadow.blur': 5})
        age.add(text_1_1)

        // username
        const username = this.add.container(1.0142778268555555, -0.9692134942528665)
        username.visible = false

        // mobile_chat_box0001
        const mobile_chat_box0001 = this.add.image(979.9857233195612, 593.9692119847492, 'main', 'mobile/chat-box0001')
        username.add(mobile_chat_box0001)

        // mobile_blue_button
        const mobile_blue_button = this.add.image(1393.9857233195614, 593.9692119847492, 'main', 'mobile/blue-button')
        username.add(mobile_blue_button)

        // mobile_chat_send0001
        const mobile_chat_send0001 = this.add.image(1395.9857233195614, 590.9692119847492, 'main', 'mobile/chat_send0001')
        username.add(mobile_chat_send0001)

        // username_text
        const username_text = this.add.text(970.9857233195612, 599.9692119847492, '', {})
        username_text.setOrigin(0.5, 0.6)
        username_text.text = 'Penguin Name'
        username_text.setStyle({align: 'center', color: '#89bedaff', fixedWidth: 750, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        username.add(username_text)

        // password
        const password = this.add.container(0, 0)
        password.visible = false

        // mobile_chat_box0002_1
        const mobile_chat_box0002_1 = this.add.image(980, 639, 'main', 'mobile/chat-box0001')
        password.add(mobile_chat_box0002_1)

        // mobile_blue_button2_1
        const mobile_blue_button2_1 = this.add.image(1394, 640, 'main', 'mobile/blue-button')
        password.add(mobile_blue_button2_1)

        // confirm_password_text
        const confirm_password_text = this.add.text(971, 646, '', {})
        confirm_password_text.setOrigin(0.5, 0.6)
        confirm_password_text.text = 'Confirm Password'
        confirm_password_text.setStyle({align: 'center', color: '#89bedaff', fixedWidth: 750, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        password.add(confirm_password_text)

        // mobile_chat_send0002_1
        const mobile_chat_send0002_1 = this.add.image(1396, 637, 'main', 'mobile/find-icon')
        password.add(mobile_chat_send0002_1)

        // mobile_chat_box0002
        const mobile_chat_box0002 = this.add.image(980, 537, 'main', 'mobile/chat-box0001')
        password.add(mobile_chat_box0002)

        // mobile_blue_button2
        const mobile_blue_button2 = this.add.image(1394, 537, 'main', 'mobile/blue-button')
        password.add(mobile_blue_button2)

        // mobile_chat_send0002
        const mobile_chat_send0002 = this.add.image(1396, 534, 'main', 'mobile/find-icon')
        password.add(mobile_chat_send0002)

        // password_text
        const password_text = this.add.text(971, 543, '', {})
        password_text.setOrigin(0.5, 0.6)
        password_text.text = 'Password'
        password_text.setStyle({align: 'center', color: '#89bedaff', fixedWidth: 750, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        password.add(password_text)

        // email
        const email = this.add.container(0, 0)
        email.visible = false

        // mobile_chat_box0004
        const mobile_chat_box0004 = this.add.image(979.9857233195612, 593.9692119847492, 'main', 'mobile/chat-box0001')
        email.add(mobile_chat_box0004)

        // mobile_blue_button4
        const mobile_blue_button4 = this.add.image(1393.9857233195614, 593.9692119847492, 'main', 'mobile/blue-button')
        email.add(mobile_blue_button4)

        // mobile_chat_send0004
        const mobile_chat_send0004 = this.add.image(1395.9857233195614, 590.9692119847492, 'main', 'mobile/chat_send0001')
        email.add(mobile_chat_send0004)

        // email_text
        const email_text = this.add.text(970.9857233195612, 599.9692119847492, '', {})
        email_text.setOrigin(0.5, 0.6)
        email_text.text = 'Email Address'
        email_text.setStyle({align: 'center', color: '#89bedaff', fixedWidth: 750, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        email.add(email_text)

        // tos
        const tos = this.add.container(0, 0)
        tos.visible = false

        // privacyButton
        const privacyButton = this.add.image(794, 634, 'login', 'checkbox')
        privacyButton.scaleX = 1.5
        privacyButton.scaleY = 1.5
        tos.add(privacyButton)

        // tosButton
        const tosButton = this.add.image(794, 537, 'login', 'checkbox')
        tosButton.scaleX = 1.5
        tosButton.scaleY = 1.5
        tos.add(tosButton)

        // tosText
        const tosText = this.add.text(1140, 548, '', {})
        tosText.setOrigin(0.5, 0.6)
        tosText.text = 'Terms of Service'
        tosText.setStyle({color: '#89bedaff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        tos.add(tosText)

        // privacyText
        const privacyText = this.add.text(1140, 648, '', {})
        privacyText.setOrigin(0.5, 0.6)
        privacyText.text = 'Privacy Policy'
        privacyText.setStyle({color: '#89bedaff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        tos.add(privacyText)

        // logo
        const logo = this.add.image(992, 258, 'create', 'logo2')
        logo.visible = false
        logo.alpha = 0.5
        logo.alphaTopLeft = 0.5
        logo.alphaTopRight = 0.5
        logo.alphaBottomLeft = 0.5
        logo.alphaBottomRight = 0.5

        // inputTextContainer
        const inputTextContainer = this.add.container(0, 0)

        // ok_btn (components)
        const ok_btnButton = new Button(ok_btn)
        ok_btnButton.spriteName = 'ok-btn'
        ok_btnButton.callback = () => this.next()

        // color_highlight_1 (components)
        const color_highlight_1SimpleButton = new SimpleButton(color_highlight_1)
        color_highlight_1SimpleButton.hoverCallback = () => this.overColor(1)
        color_highlight_1SimpleButton.hoverOutCallback = () => this.outColor(1)
        color_highlight_1SimpleButton.callback = () => this.switchColor(1)

        // color_highlight_2 (components)
        const color_highlight_2SimpleButton = new SimpleButton(color_highlight_2)
        color_highlight_2SimpleButton.hoverCallback = () => this.overColor(2)
        color_highlight_2SimpleButton.hoverOutCallback = () => this.outColor(2)
        color_highlight_2SimpleButton.callback = () => this.switchColor(2)

        // color_highlight_3 (components)
        const color_highlight_3SimpleButton = new SimpleButton(color_highlight_3)
        color_highlight_3SimpleButton.hoverCallback = () => this.overColor(3)
        color_highlight_3SimpleButton.hoverOutCallback = () => this.outColor(3)
        color_highlight_3SimpleButton.callback = () => this.switchColor(3)

        // color_highlight_4 (components)
        const color_highlight_4SimpleButton = new SimpleButton(color_highlight_4)
        color_highlight_4SimpleButton.hoverCallback = () => this.overColor(4)
        color_highlight_4SimpleButton.hoverOutCallback = () => this.outColor(4)
        color_highlight_4SimpleButton.callback = () => this.switchColor(4)

        // color_highlight_5 (components)
        const color_highlight_5SimpleButton = new SimpleButton(color_highlight_5)
        color_highlight_5SimpleButton.hoverCallback = () => this.overColor(5)
        color_highlight_5SimpleButton.hoverOutCallback = () => this.outColor(5)
        color_highlight_5SimpleButton.callback = () => this.switchColor(5)

        // color_highlight_6 (components)
        const color_highlight_6SimpleButton = new SimpleButton(color_highlight_6)
        color_highlight_6SimpleButton.hoverCallback = () => this.overColor(6)
        color_highlight_6SimpleButton.hoverOutCallback = () => this.outColor(6)
        color_highlight_6SimpleButton.callback = () => this.switchColor(6)

        // color_highlight_7 (components)
        const color_highlight_7SimpleButton = new SimpleButton(color_highlight_7)
        color_highlight_7SimpleButton.hoverCallback = () => this.overColor(7)
        color_highlight_7SimpleButton.hoverOutCallback = () => this.outColor(7)
        color_highlight_7SimpleButton.callback = () => this.switchColor(7)

        // color_highlight_13 (components)
        const color_highlight_13SimpleButton = new SimpleButton(color_highlight_13)
        color_highlight_13SimpleButton.hoverCallback = () => this.overColor(13)
        color_highlight_13SimpleButton.hoverOutCallback = () => this.outColor(13)
        color_highlight_13SimpleButton.callback = () => this.switchColor(13)

        // color_highlight_12 (components)
        const color_highlight_12SimpleButton = new SimpleButton(color_highlight_12)
        color_highlight_12SimpleButton.hoverCallback = () => this.overColor(12)
        color_highlight_12SimpleButton.hoverOutCallback = () => this.outColor(12)
        color_highlight_12SimpleButton.callback = () => this.switchColor(12)

        // color_highlight_11 (components)
        const color_highlight_11SimpleButton = new SimpleButton(color_highlight_11)
        color_highlight_11SimpleButton.hoverCallback = () => this.overColor(11)
        color_highlight_11SimpleButton.hoverOutCallback = () => this.outColor(11)
        color_highlight_11SimpleButton.callback = () => this.switchColor(11)

        // color_highlight_10 (components)
        const color_highlight_10SimpleButton = new SimpleButton(color_highlight_10)
        color_highlight_10SimpleButton.hoverCallback = () => this.overColor(10)
        color_highlight_10SimpleButton.hoverOutCallback = () => this.outColor(10)
        color_highlight_10SimpleButton.callback = () => this.switchColor(10)

        // color_highlight_9 (components)
        const color_highlight_9SimpleButton = new SimpleButton(color_highlight_9)
        color_highlight_9SimpleButton.hoverCallback = () => this.overColor(9)
        color_highlight_9SimpleButton.hoverOutCallback = () => this.outColor(9)
        color_highlight_9SimpleButton.callback = () => this.switchColor(9)

        // color_highlight_8 (components)
        const color_highlight_8SimpleButton = new SimpleButton(color_highlight_8)
        color_highlight_8SimpleButton.hoverCallback = () => this.overColor(8)
        color_highlight_8SimpleButton.hoverOutCallback = () => this.outColor(8)
        color_highlight_8SimpleButton.callback = () => this.switchColor(8)

        // color_highlight_16 (components)
        const color_highlight_16SimpleButton = new SimpleButton(color_highlight_16)
        color_highlight_16SimpleButton.hoverCallback = () => this.overColor(16)
        color_highlight_16SimpleButton.hoverOutCallback = () => this.outColor(16)
        color_highlight_16SimpleButton.callback = () => this.switchColor(16)

        // color_highlight_15 (components)
        const color_highlight_15SimpleButton = new SimpleButton(color_highlight_15)
        color_highlight_15SimpleButton.hoverCallback = () => this.overColor(15)
        color_highlight_15SimpleButton.hoverOutCallback = () => this.outColor(15)
        color_highlight_15SimpleButton.callback = () => this.switchColor(15)

        // login_button (components)
        const login_buttonButton = new Button(login_button)
        login_buttonButton.spriteName = 'login-button'
        login_buttonButton.callback = () => this.under13()

        // login_button_1 (components)
        const login_button_1Button = new Button(login_button_1)
        login_button_1Button.spriteName = 'login-button'
        login_button_1Button.callback = () => this.over13()

        // text_1 (components)
        const text_1LocalisedString = new LocalisedString(text_1)
        text_1LocalisedString.id = 'under13'

        // text_1_1 (components)
        const text_1_1LocalisedString = new LocalisedString(text_1_1)
        text_1_1LocalisedString.id = 'over13'

        // mobile_blue_button (components)
        const mobile_blue_buttonButton = new Button(mobile_blue_button)
        mobile_blue_buttonButton.spriteName = 'mobile/blue-button'
        mobile_blue_buttonButton.callback = () => this.submitUsername()

        // username_text (components)
        const username_textInputText = new InputText(username_text)
        username_textInputText.charlimit = 12
        username_textInputText.inputfilter = /^[A-Z0-9 ]*$/i

        // mobile_blue_button2_1 (components)
        const mobile_blue_button2_1Button = new Button(mobile_blue_button2_1)
        mobile_blue_button2_1Button.spriteName = 'mobile/blue-button'
        mobile_blue_button2_1Button.hoverOutCallback = () => this.showConfirmPassword(false)
        mobile_blue_button2_1Button.callback = () => this.showConfirmPassword(true)

        // confirm_password_text (components)
        const confirm_password_textInputText = new InputText(confirm_password_text)
        confirm_password_textInputText.ispassword = true
        confirm_password_textInputText.charlimit = 24
        const confirm_password_textLocalisedString = new LocalisedString(confirm_password_text)
        confirm_password_textLocalisedString.id = 'pword2'

        // mobile_blue_button2 (components)
        const mobile_blue_button2Button = new Button(mobile_blue_button2)
        mobile_blue_button2Button.spriteName = 'mobile/blue-button'
        mobile_blue_button2Button.hoverOutCallback = () => this.showPassword(false)
        mobile_blue_button2Button.callback = () => this.showPassword(true)

        // password_text (components)
        const password_textInputText = new InputText(password_text)
        password_textInputText.ispassword = true
        password_textInputText.charlimit = 24
        const password_textLocalisedString = new LocalisedString(password_text)
        password_textLocalisedString.id = 'pword'

        // mobile_blue_button4 (components)
        const mobile_blue_button4Button = new Button(mobile_blue_button4)
        mobile_blue_button4Button.spriteName = 'mobile/blue-button'
        mobile_blue_button4Button.callback = () => this.submitEmail()

        // email_text (components)
        const email_textInputText = new InputText(email_text)
        email_textInputText.charlimit = 50
        const email_textLocalisedString = new LocalisedString(email_text)
        email_textLocalisedString.id = 'emilAdr'

        // privacyButton (components)
        const privacyButtonSimpleButton = new SimpleButton(privacyButton)
        privacyButtonSimpleButton.callback = () => this.onPrivacyClick()

        // tosButton (components)
        const tosButtonSimpleButton = new SimpleButton(tosButton)
        tosButtonSimpleButton.callback = () => this.onTosClick()

        // tosText (components)
        const tosTextLocalisedString = new LocalisedString(tosText)
        tosTextLocalisedString.id = 'tos'

        // privacyText (components)
        const privacyTextLocalisedString = new LocalisedString(privacyText)
        privacyTextLocalisedString.id = 'privacy'

        this.rookie_talk = rookie_talk
        this.rookie_stand = rookie_stand
        this.rookie_happy = rookie_happy
        this.rookie_speech = rookie_speech
        this.text = text
        this.ok = ok
        this.colorselect = colorselect
        this.penguin_body = penguin_body
        this.penguin_body_1 = penguin_body_1
        this.color_body_1_1 = color_body_1_1
        this.color_body_2_1 = color_body_2_1
        this.color_body_3_1 = color_body_3_1
        this.color_body_4_1 = color_body_4_1
        this.color_body_5_1 = color_body_5_1
        this.color_body_6_1 = color_body_6_1
        this.color_body_7_1 = color_body_7_1
        this.color_body_15_1 = color_body_15_1
        this.color_body_12_1 = color_body_12_1
        this.color_body_11_1 = color_body_11_1
        this.color_body_10_1 = color_body_10_1
        this.color_body_9_1 = color_body_9_1
        this.color_body_8_1 = color_body_8_1
        this.color_body_14_1 = color_body_14_1
        this.color_body_13_1 = color_body_13_1
        this.color_body_1 = color_body_1
        this.color_highlight_1 = color_highlight_1
        this.color_body_2 = color_body_2
        this.color_highlight_2 = color_highlight_2
        this.color_body_3 = color_body_3
        this.color_highlight_3 = color_highlight_3
        this.color_body_4 = color_body_4
        this.color_highlight_4 = color_highlight_4
        this.color_body_5 = color_body_5
        this.color_highlight_5 = color_highlight_5
        this.color_body_6 = color_body_6
        this.color_highlight_6 = color_highlight_6
        this.color_body_7 = color_body_7
        this.color_highlight_7 = color_highlight_7
        this.color_body_13 = color_body_13
        this.color_highlight_13 = color_highlight_13
        this.color_body_12 = color_body_12
        this.color_highlight_12 = color_highlight_12
        this.color_body_11 = color_body_11
        this.color_highlight_11 = color_highlight_11
        this.color_body_10 = color_body_10
        this.color_highlight_10 = color_highlight_10
        this.color_body_9 = color_body_9
        this.color_highlight_9 = color_highlight_9
        this.color_body_8 = color_body_8
        this.color_highlight_8 = color_highlight_8
        this.color_body_16 = color_body_16
        this.color_highlight_16 = color_highlight_16
        this.color_body_15 = color_body_15
        this.color_highlight_15 = color_highlight_15
        this.age = age
        this.username = username
        this.username_text = username_text
        this.password = password
        this.confirm_password_text = confirm_password_text
        this.password_text = password_text
        this.email = email
        this.email_text = email_text
        this.tos = tos
        this.privacyButton = privacyButton
        this.tosButton = tosButton
        this.tosText = tosText
        this.privacyText = privacyText
        this.logo = logo
        this.inputTextContainer = inputTextContainer

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    get language() {
        for (let lang of ['en', 'es', 'pt']) {
            if (window.location.pathname.includes(lang)) {
                return lang
            }
        }
        return 'en'
    }

    invalidUsername(username) {
        if (username.length < 3) {
            return 34
        } else if (username.length > 15) {
            return 35
        } else if (!username.match(/^[a-zA-Z0-9 ]+$/)) {
            return 48
        }
        return false
    }

    invalidEmail(email) {
        if (!email.includes('@')) {
            return 45
        } else if (!email.includes('.')) {
            return 45
        } else if (email.length > 50) {
            return 46
        } else if (email.includes('+')) {
            return 47
        }
        return false
    }

    invalidPassword(password, username) {
        if (password.length < 6) {
            return 36
        } else if (password.length > 50) {
            return 37
        } else if (password.includes(username)) {
            return 44
        }
        return false
    }

    create() {
        this.airtower.creation = this
        this._create()
        this.color = this.crumbs.colors['1']
        this.chosenColor = 1
        this.chooseAge()

        this.tosText.setInteractive({cursor: 'pointer'})
        this.tosText.on('pointerdown', () => window.open(`https://cpplus.pw/${this.language}/terms`, '_blank').focus())
        this.privacyText.setInteractive({cursor: 'pointer'})
        this.privacyText.on('pointerdown', () => window.open(`https://cpplus.pw/${this.language}/privacy`, '_blank').focus())
    }

    overColor(color) {
        this['color_body_' + color].alpha = 0.9
    }

    outColor(color) {
        this['color_body_' + color].alpha = 1
    }

    switchColor(color) {
        this.color = this.crumbs.colors[color.toString()]
        this.penguin_body_1.tintTopLeft = this.color
        this.penguin_body_1.tintTopRight = this.color
        this.penguin_body_1.tintBottomLeft = this.color
        this.penguin_body_1.tintBottomRight = this.color
        this.penguin_body_1.alpha = 0
        this.chosenColor = color
        this.tweens.add({
            targets: this.penguin_body_1,
            alpha: 1,
            duration: 200,
            onComplete: () => {
                this.penguin_body.tintTopLeft = this.color
                this.penguin_body.tintTopRight = this.color
                this.penguin_body.tintBottomLeft = this.color
                this.penguin_body.tintBottomRight = this.color
                this.penguin_body_1.alpha = 0
            },
        })

        for (let i = 1; i <= 16; i++) {
            if (!this['color_highlight_' + i]) continue
            if (this['color_highlight_' + i].frame == 'color-highlight') continue
            this['color_highlight_' + i].setFrame('color-highlight')
        }
        this['color_highlight_' + color].setFrame('color-highlight-hover')
    }

    chooseAge() {
        this.rookie_speech.visible = true
        this.rookie_talk.visible = true
        this.age.visible = true
        this.logo.visible = true
        this.text.text = this.crumbs.getString('create-choose-age')
    }

    over13() {
        this.airtower.connectLogin(false, false)
        this.parentSignup = true
        this.rookie_talk.visible = false
        this.rookie_stand.visible = true
        this.age.visible = false
        this.tos.visible = true
        this.ok.visible = false
        this.text.text = this.crumbs.getString('create-tos')
        this.next = () => this.submitTos()
    }

    under13() {
        this.airtower.connectLogin(false, false)
        this.parentSignup = true
        this.rookie_talk.visible = false
        this.rookie_stand.visible = true
        this.age.visible = false
        this.ok.visible = false
        this.text.text = this.crumbs.getString('create-under-13')
        this.next = () => {
            this.rookie_talk.visible = false
            this.rookie_stand.visible = true
            this.age.visible = false
            this.tos.visible = true
            this.text.text = this.crumbs.getString('create-tos-parent')
            this.next = () => this.submitTos()
        }
    }

    onTosClick() {
        if (this.isTosClicked) {
            this.isTosClicked = false
            this.tosButton.setFrame('checkbox')
            this.ok.visible = false
            return
        }
        this.isTosClicked = true
        this.tosButton.setFrame('checkbox-active')
        if (this.isPrivacyClicked) {
            this.ok.visible = true
        }
    }

    onPrivacyClick() {
        if (this.isPrivacyClicked) {
            this.isPrivacyClicked = false
            this.privacyButton.setFrame('checkbox')
            this.ok.visible = false
            return
        }
        this.isPrivacyClicked = true
        this.privacyButton.setFrame('checkbox-active')
        if (this.isTosClicked) {
            this.ok.visible = true
        }
    }

    submitTos() {
        this.airtower.connectLogin(false, false)
        this.rookie_stand.visible = false
        this.rookie_happy.visible = true
        this.tos.visible = false
        this.username.visible = true
        this.username_text.__InputText.clickZone.visible = true
        this.text.text = this.crumbs.getString('create-choose-username')
        this.ok.visible = false
    }

    submitUsername() {
        this.username_text.__InputText.clickZone.visible = false
        this.chosenUsername = this.username_text.textContent
        let invalid = this.invalidUsername(this.chosenUsername)
        if (invalid) {
            this.text.text = this.crumbs.getError(invalid)
            this.username_text.__InputText.clickZone.visible = true
            this.username_text.__InputText.clearText()
            return
        }
        this.airtower.sendXml(`<msg t='sys'><body action='check_username' r='0'><user n='${this.chosenUsername}' /></body></msg>`)
    }

    invalidUsername() {
        this.text.text = this.crumbs.getString('create-username-taken')
        this.username_text.__InputText.clearText()
        this.username_text.__InputText.clickZone.visible = true
    }

    chooseColor() {
        this.rookie_stand.visible = false
        this.rookie_happy.visible = true
        this.username.visible = false
        this.logo.visible = false
        this.text.text = this.crumbs.getString(`create-choose-color,${this.chosenUsername}`)
        this.colorselect.visible = true
        this.ok.visible = true
        this.next = () => this.choosePassword()
    }

    choosePassword() {
        this.rookie_happy.visible = false
        this.rookie_talk.visible = true
        this.colorselect.visible = false
        this.logo.visible = true
        this.ok.visible = false
        this.password.visible = true
        this.password_text.__InputText.clickZone.visible = true
        this.confirm_password_text.__InputText.clickZone.visible = true
        this.text.text = this.crumbs.getString('create-choose-password')
        this.ok.visible = true
        this.next = () => this.submitPassword()
    }

    submitPassword() {
        let invalid = this.invalidPassword(this.password_text.textContent)
        if (invalid) {
            this.text.text = this.crumbs.getError(invalid)
            this.password_text.__InputText.clearText()
            this.confirm_password_text.__InputText.clearText()
            return
        }
        if (this.password_text.textContent !== this.confirm_password_text.textContent) {
            this.text.text = this.crumbs.getString('create-passwords-dont-match')
            this.password_text.__InputText.clearText()
            this.confirm_password_text.__InputText.clearText()
            return
        }
        this.password_text.__InputText.clickZone.visible = false
        this.confirm_password_text.__InputText.clickZone.visible = false
        this.chosenPassword = this.password_text.textContent
        this.chooseEmail()
    }

    showPassword(show) {
        if (show) {
            this.password_text.text = this.password_text.textContent
        } else {
            this.password_text.text = '*'.repeat(this.password_text.textContent.length)
        }
    }

    showConfirmPassword(show) {
        if (show) {
            this.confirm_password_text.text = this.confirm_password_text.textContent
        } else {
            this.confirm_password_text.text = '*'.repeat(this.confirm_password_text.textContent.length)
        }
    }

    chooseEmail() {
        this.rookie_talk.visible = false
        this.rookie_stand.visible = true
        this.password.visible = false
        this.email_text.__InputText.clickZone.visible = true
        this.text.text = this.parentSignup ? this.crumbs.getString('create-choose-email-parent') : this.crumbs.getString('create-choose-email')
        this.email.visible = true
        this.ok.visible = false
    }

    submitEmail() {
        this.email_text.__InputText.clickZone.visible = false
        this.chosenEmail = this.email_text.textContent
        let invalid = this.invalidEmail(this.chosenEmail)
        if (invalid) {
            this.text.text = this.crumbs.getError(invalid)
            this.email_text.__InputText.clickZone.visible = true
            this.email_text.__InputText.clearText()
            return
        }
        this.airtower.sendXml(`<msg t='sys'><body action='check_email' r='0'><email e='${this.chosenEmail}' /></body></msg>`)
    }

    invalidEmail() {
        this.text.text = this.crumbs.getString('create-email-taken')
        this.email_text.__InputText.clearText()
        this.email_text.__InputText.clickZone.visible = true
    }

    unhandledError() {
        this.text.text = this.crumbs.getString('create-unhandled-error')
        this.ok.visible = true
        this.next = () => {
            document.location.href = document.location.href.substring(0, document.location.href.indexOf('?'))
        }
    }

    submitSignup() {
        this.airtower.sendXml(`<msg t='sys'><body action='signup' r='0'><login z='w1'><nick>${this.chosenUsername}</nick><pword>${this.chosenPassword}</pword></login><email>${this.chosenEmail}</email><over13>${!this.parentSignup}</over13><color>${this.chosenColor}</color><lang>en</lang></body></msg>`)
        this.accountCreated()
    }

    accountCreated() {
        this.rookie_stand.visible = false
        this.rookie_happy.visible = true
        this.email.visible = false
        this.text.text = this.parentSignup ? this.crumbs.getString('create-account-created-parent') : this.crumbs.getString('create-account-created')
        this.ok.visible = true
        this.next = () => {
            document.location.href = document.location.href.substring(0, document.location.href.indexOf('?'))
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
