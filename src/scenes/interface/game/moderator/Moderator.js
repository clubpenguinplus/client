import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, InputText, SimpleButton, DraggableContainer} from '@components/components'

/* START OF COMPILED CODE */

export default class Moderator extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0.009142477235795976, y ?? 0.00500335556049103)

        /** @type {Phaser.GameObjects.Container} */
        this.player8
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn8
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt8
        /** @type {Phaser.GameObjects.Container} */
        this.player7
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn7
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt7
        /** @type {Phaser.GameObjects.Container} */
        this.player6
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn6
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt6
        /** @type {Phaser.GameObjects.Container} */
        this.player5
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn5
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt5
        /** @type {Phaser.GameObjects.Container} */
        this.player4
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn4
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt4
        /** @type {Phaser.GameObjects.Container} */
        this.player3
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn3
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt3
        /** @type {Phaser.GameObjects.Container} */
        this.player2
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn2
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt2
        /** @type {Phaser.GameObjects.Container} */
        this.player1
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn1
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt1
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt
        /** @type {Phaser.GameObjects.Text} */
        this.search

        // rectangle
        const rectangle = scene.add.ninePatchContainer(1.990857475952732, -0.005003358824894888, 700, 850, 'prompt', 'window')
        rectangle.marginLeft = 50
        rectangle.marginTop = 50
        rectangle.marginRight = 50
        rectangle.marginBottom = 50
        this.add(rectangle)

        // player8
        const player8 = scene.add.container(1.990857475952732, 269.9949966411751)
        player8.visible = false
        this.add(player8)

        // name_btn8
        const name_btn8 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player8.add(name_btn8)

        // name_txt8
        const name_txt8 = scene.add.text(0, 0, '', {})
        name_txt8.setOrigin(0.5, 0.5)
        name_txt8.text = 'Username08'
        name_txt8.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt8.setPadding({left: 20})
        player8.add(name_txt8)

        // usernameControls8
        const usernameControls8 = scene.add.container(189, -1)
        player8.add(usernameControls8)

        // cross8_left
        const cross8_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross8_left.angle = -45.00000000000006
        cross8_left.isFilled = true
        cross8_left.fillColor = 11735827
        usernameControls8.add(cross8_left)

        // cross8_right
        const cross8_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross8_right.angle = 45
        cross8_right.isFilled = true
        cross8_right.fillColor = 11735827
        usernameControls8.add(cross8_right)

        // tick8_left
        const tick8_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick8_left.angle = -45.00000000000006
        tick8_left.isFilled = true
        tick8_left.fillColor = 1153580
        usernameControls8.add(tick8_left)

        // tick8_right
        const tick8_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick8_right.angle = 45
        tick8_right.isFilled = true
        tick8_right.fillColor = 1153580
        usernameControls8.add(tick8_right)

        // reject_btn_7
        const reject_btn_7 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls8.add(reject_btn_7)

        // accept_btn_7
        const accept_btn_7 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls8.add(accept_btn_7)

        // player7
        const player7 = scene.add.container(1.990857475952732, 188.9949966411751)
        player7.visible = false
        this.add(player7)

        // name_btn7
        const name_btn7 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player7.add(name_btn7)

        // name_txt7
        const name_txt7 = scene.add.text(0, 1, '', {})
        name_txt7.setOrigin(0.5, 0.5)
        name_txt7.text = 'Username07'
        name_txt7.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt7.setPadding({left: 20})
        player7.add(name_txt7)

        // usernameControls7
        const usernameControls7 = scene.add.container(189, -2)
        player7.add(usernameControls7)

        // cross7_left
        const cross7_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross7_left.angle = -45.00000000000006
        cross7_left.isFilled = true
        cross7_left.fillColor = 11735827
        usernameControls7.add(cross7_left)

        // cross7_right
        const cross7_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross7_right.angle = 45
        cross7_right.isFilled = true
        cross7_right.fillColor = 11735827
        usernameControls7.add(cross7_right)

        // tick7_left
        const tick7_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick7_left.angle = -45.00000000000006
        tick7_left.isFilled = true
        tick7_left.fillColor = 1153580
        usernameControls7.add(tick7_left)

        // tick7_right
        const tick7_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick7_right.angle = 45
        tick7_right.isFilled = true
        tick7_right.fillColor = 1153580
        usernameControls7.add(tick7_right)

        // reject_btn_6
        const reject_btn_6 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls7.add(reject_btn_6)

        // accept_btn_6
        const accept_btn_6 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls7.add(accept_btn_6)

        // player6
        const player6 = scene.add.container(1.990857475952732, 109.9949966411751)
        player6.visible = false
        this.add(player6)

        // name_btn6
        const name_btn6 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player6.add(name_btn6)

        // name_txt6
        const name_txt6 = scene.add.text(0, 0, '', {})
        name_txt6.setOrigin(0.5, 0.5)
        name_txt6.text = 'Username06'
        name_txt6.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt6.setPadding({left: 20})
        player6.add(name_txt6)

        // usernameControls6
        const usernameControls6 = scene.add.container(189, 0)
        player6.add(usernameControls6)

        // cross6_left
        const cross6_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross6_left.angle = -45.00000000000006
        cross6_left.isFilled = true
        cross6_left.fillColor = 11735827
        usernameControls6.add(cross6_left)

        // cross6_right
        const cross6_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross6_right.angle = 45
        cross6_right.isFilled = true
        cross6_right.fillColor = 11735827
        usernameControls6.add(cross6_right)

        // tick6_left
        const tick6_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick6_left.angle = -45.00000000000006
        tick6_left.isFilled = true
        tick6_left.fillColor = 1153580
        usernameControls6.add(tick6_left)

        // tick6_right
        const tick6_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick6_right.angle = 45
        tick6_right.isFilled = true
        tick6_right.fillColor = 1153580
        usernameControls6.add(tick6_right)

        // reject_btn_5
        const reject_btn_5 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls6.add(reject_btn_5)

        // accept_btn_5
        const accept_btn_5 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls6.add(accept_btn_5)

        // player5
        const player5 = scene.add.container(1.990857475952732, 29.994996641175106)
        player5.visible = false
        this.add(player5)

        // name_btn5
        const name_btn5 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player5.add(name_btn5)

        // name_txt5
        const name_txt5 = scene.add.text(0, 0, '', {})
        name_txt5.setOrigin(0.5, 0.5)
        name_txt5.text = 'Username05'
        name_txt5.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt5.setPadding({left: 20})
        player5.add(name_txt5)

        // usernameControls5
        const usernameControls5 = scene.add.container(189, 0)
        player5.add(usernameControls5)

        // cross5_left
        const cross5_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross5_left.angle = -45.00000000000006
        cross5_left.isFilled = true
        cross5_left.fillColor = 11735827
        usernameControls5.add(cross5_left)

        // cross5_right
        const cross5_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross5_right.angle = 45
        cross5_right.isFilled = true
        cross5_right.fillColor = 11735827
        usernameControls5.add(cross5_right)

        // tick5_left
        const tick5_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick5_left.angle = -45.00000000000006
        tick5_left.isFilled = true
        tick5_left.fillColor = 1153580
        usernameControls5.add(tick5_left)

        // tick5_right
        const tick5_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick5_right.angle = 45
        tick5_right.isFilled = true
        tick5_right.fillColor = 1153580
        usernameControls5.add(tick5_right)

        // reject_btn_4
        const reject_btn_4 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls5.add(reject_btn_4)

        // accept_btn_4
        const accept_btn_4 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls5.add(accept_btn_4)

        // player4
        const player4 = scene.add.container(1.990857475952732, -50.005003358824894)
        player4.visible = false
        this.add(player4)

        // name_btn4
        const name_btn4 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player4.add(name_btn4)

        // name_txt4
        const name_txt4 = scene.add.text(0, 0, '', {})
        name_txt4.setOrigin(0.5, 0.5)
        name_txt4.text = 'Username04'
        name_txt4.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt4.setPadding({left: 20})
        player4.add(name_txt4)

        // usernameControls4
        const usernameControls4 = scene.add.container(189, 0)
        player4.add(usernameControls4)

        // cross4_left
        const cross4_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross4_left.angle = -45.00000000000006
        cross4_left.isFilled = true
        cross4_left.fillColor = 11735827
        usernameControls4.add(cross4_left)

        // cross4_right
        const cross4_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross4_right.angle = 45
        cross4_right.isFilled = true
        cross4_right.fillColor = 11735827
        usernameControls4.add(cross4_right)

        // tick4_left
        const tick4_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick4_left.angle = -45.00000000000006
        tick4_left.isFilled = true
        tick4_left.fillColor = 1153580
        usernameControls4.add(tick4_left)

        // tick4_right
        const tick4_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick4_right.angle = 45
        tick4_right.isFilled = true
        tick4_right.fillColor = 1153580
        usernameControls4.add(tick4_right)

        // reject_btn_3
        const reject_btn_3 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls4.add(reject_btn_3)

        // accept_btn_3
        const accept_btn_3 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls4.add(accept_btn_3)

        // player3
        const player3 = scene.add.container(1.990857475952732, -130.0050033588249)
        player3.visible = false
        this.add(player3)

        // name_btn3
        const name_btn3 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player3.add(name_btn3)

        // name_txt3
        const name_txt3 = scene.add.text(0, 0, '', {})
        name_txt3.setOrigin(0.5, 0.5)
        name_txt3.text = 'Username03'
        name_txt3.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt3.setPadding({left: 20})
        player3.add(name_txt3)

        // usernameControls3
        const usernameControls3 = scene.add.container(189, -1)
        player3.add(usernameControls3)

        // cross3_left
        const cross3_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross3_left.angle = -45.00000000000006
        cross3_left.isFilled = true
        cross3_left.fillColor = 11735827
        usernameControls3.add(cross3_left)

        // cross3_right
        const cross3_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross3_right.angle = 45
        cross3_right.isFilled = true
        cross3_right.fillColor = 11735827
        usernameControls3.add(cross3_right)

        // tick3_left
        const tick3_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick3_left.angle = -45.00000000000006
        tick3_left.isFilled = true
        tick3_left.fillColor = 1153580
        usernameControls3.add(tick3_left)

        // tick3_right
        const tick3_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick3_right.angle = 45
        tick3_right.isFilled = true
        tick3_right.fillColor = 1153580
        usernameControls3.add(tick3_right)

        // reject_btn_2
        const reject_btn_2 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls3.add(reject_btn_2)

        // accept_btn_2
        const accept_btn_2 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls3.add(accept_btn_2)

        // player2
        const player2 = scene.add.container(1.990857475952732, -210.0050033588249)
        player2.visible = false
        this.add(player2)

        // name_btn2
        const name_btn2 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player2.add(name_btn2)

        // name_txt2
        const name_txt2 = scene.add.text(0, 0, '', {})
        name_txt2.setOrigin(0.5, 0.5)
        name_txt2.text = 'Username02'
        name_txt2.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt2.setPadding({left: 20})
        player2.add(name_txt2)

        // usernameControls2
        const usernameControls2 = scene.add.container(189, -1)
        player2.add(usernameControls2)

        // cross2_left
        const cross2_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross2_left.angle = -45.00000000000006
        cross2_left.isFilled = true
        cross2_left.fillColor = 11735827
        usernameControls2.add(cross2_left)

        // cross2_right
        const cross2_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross2_right.angle = 45
        cross2_right.isFilled = true
        cross2_right.fillColor = 11735827
        usernameControls2.add(cross2_right)

        // tick2_left
        const tick2_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick2_left.angle = -45.00000000000006
        tick2_left.isFilled = true
        tick2_left.fillColor = 1153580
        usernameControls2.add(tick2_left)

        // tick2_right
        const tick2_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick2_right.angle = 45
        tick2_right.isFilled = true
        tick2_right.fillColor = 1153580
        usernameControls2.add(tick2_right)

        // reject_btn_1
        const reject_btn_1 = scene.add.ellipse(80, 0, 60, 60)
        usernameControls2.add(reject_btn_1)

        // accept_btn_1
        const accept_btn_1 = scene.add.ellipse(13, 0, 60, 60)
        usernameControls2.add(accept_btn_1)

        // player1
        const player1 = scene.add.container(1.990857475952732, -290.0050033588249)
        player1.visible = false
        this.add(player1)

        // name_btn1
        const name_btn1 = scene.add.image(0, 0, 'login', 'larger-button0001')
        player1.add(name_btn1)

        // name_txt1
        const name_txt1 = scene.add.text(0, 0, '', {})
        name_txt1.setOrigin(0.5, 0.5)
        name_txt1.text = 'Username01'
        name_txt1.setStyle({fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt1.setPadding({left: 20})
        player1.add(name_txt1)

        // usernameControls1
        const usernameControls1 = scene.add.container(188.5, 0)
        player1.add(usernameControls1)

        // cross1_left
        const cross1_left = scene.add.rectangle(80.5, 0, 8, 50)
        cross1_left.angle = -45.00000000000006
        cross1_left.isFilled = true
        cross1_left.fillColor = 11735827
        usernameControls1.add(cross1_left)

        // cross1_right
        const cross1_right = scene.add.rectangle(80.5, 0, 8, 50)
        cross1_right.angle = 45
        cross1_right.isFilled = true
        cross1_right.fillColor = 11735827
        usernameControls1.add(cross1_right)

        // tick1_left
        const tick1_left = scene.add.rectangle(0, 7.5, 8, 25)
        tick1_left.angle = -45.00000000000006
        tick1_left.isFilled = true
        tick1_left.fillColor = 1153580
        usernameControls1.add(tick1_left)

        // tick1_right
        const tick1_right = scene.add.rectangle(19.5, 0, 8, 45)
        tick1_right.angle = 45
        tick1_right.isFilled = true
        tick1_right.fillColor = 1153580
        usernameControls1.add(tick1_right)

        // reject_btn
        const reject_btn = scene.add.ellipse(80, 0, 60, 60)
        usernameControls1.add(reject_btn)

        // accept_btn
        const accept_btn = scene.add.ellipse(13, 0, 60, 60)
        usernameControls1.add(accept_btn)

        // x_button
        const x_button = scene.add.image(291.99085747595274, -369.0050033588249, 'main', 'blue-button')
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(291.99085747595274, -370.0050033588249, 'main', 'blue-x')
        this.add(blue_x)

        // verify_btn
        const verify_btn = scene.add.image(-217.00914252404726, 351.9949966411751, 'login', 'save-button')
        verify_btn.scaleX = 0.5
        verify_btn.scaleY = 0.5
        this.add(verify_btn)

        // text
        const text = scene.add.text(-260.00914252404726, 332.9949966411751, '', {})
        text.text = 'Verify'
        text.setStyle({fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold'})
        this.add(text)

        // small_button
        const small_button = scene.add.image(76.99085747595274, 351.9949966411751, 'login', 'small-button0001')
        small_button.scaleX = 0.9
        small_button.scaleY = 0.9
        this.add(small_button)

        // magnifying_handle
        const magnifying_handle = scene.add.rectangle(243.99085747595274, 363.9949966411751, 4, 15)
        magnifying_handle.angle = -45.00000000000006
        magnifying_handle.isFilled = true
        this.add(magnifying_handle)

        // magnifying_body
        const magnifying_body = scene.add.ellipse(227.99085747595274, 347.9949966411751, 30, 30)
        magnifying_body.isStroked = true
        magnifying_body.lineWidth = 3
        this.add(magnifying_body)

        // name_txt
        const name_txt = scene.add.text(5.9908574759527315, -369.0050033588249, '', {})
        name_txt.setOrigin(0.5, 0.5)
        name_txt.text = 'User List'
        name_txt.setStyle({align: 'center', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px'})
        name_txt.setPadding({left: 20})
        this.add(name_txt)

        // search
        const search = scene.add.text(-92.00914252404726, 333.9949966411751, '', {})
        search.text = 'Search'
        search.setStyle({fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        this.add(search)

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = rectangle

        // name_btn8 (components)
        const name_btn8SimpleButton = new SimpleButton(name_btn8)
        name_btn8SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn8)
        name_btn8SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn8)
        name_btn8SimpleButton.callback = () => this.onNameDown(this.name_txt8)

        // reject_btn_7 (components)
        const reject_btn_7SimpleButton = new SimpleButton(reject_btn_7)
        reject_btn_7SimpleButton.callback = () => this.rejectUsername(this.name_txt8)

        // accept_btn_7 (components)
        const accept_btn_7SimpleButton = new SimpleButton(accept_btn_7)
        accept_btn_7SimpleButton.callback = () => this.acceptUsername(this.name_txt8)

        // name_btn7 (components)
        const name_btn7SimpleButton = new SimpleButton(name_btn7)
        name_btn7SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn7)
        name_btn7SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn7)
        name_btn7SimpleButton.callback = () => this.onNameDown(this.name_txt7)

        // reject_btn_6 (components)
        const reject_btn_6SimpleButton = new SimpleButton(reject_btn_6)
        reject_btn_6SimpleButton.callback = () => this.rejectUsername(this.name_txt7)

        // accept_btn_6 (components)
        const accept_btn_6SimpleButton = new SimpleButton(accept_btn_6)
        accept_btn_6SimpleButton.callback = () => this.acceptUsername(this.name_txt7)

        // name_btn6 (components)
        const name_btn6SimpleButton = new SimpleButton(name_btn6)
        name_btn6SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn6)
        name_btn6SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn6)
        name_btn6SimpleButton.callback = () => this.onNameDown(this.name_txt6)

        // reject_btn_5 (components)
        const reject_btn_5SimpleButton = new SimpleButton(reject_btn_5)
        reject_btn_5SimpleButton.callback = () => this.rejectUsername(this.name_txt6)

        // accept_btn_5 (components)
        const accept_btn_5SimpleButton = new SimpleButton(accept_btn_5)
        accept_btn_5SimpleButton.callback = () => this.acceptUsername(this.name_txt6)

        // name_btn5 (components)
        const name_btn5SimpleButton = new SimpleButton(name_btn5)
        name_btn5SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn5)
        name_btn5SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn5)
        name_btn5SimpleButton.callback = () => this.onNameDown(this.name_txt5)

        // reject_btn_4 (components)
        const reject_btn_4SimpleButton = new SimpleButton(reject_btn_4)
        reject_btn_4SimpleButton.callback = () => this.rejectUsername(this.name_txt5)

        // accept_btn_4 (components)
        const accept_btn_4SimpleButton = new SimpleButton(accept_btn_4)
        accept_btn_4SimpleButton.callback = () => this.acceptUsername(this.name_txt5)

        // name_btn4 (components)
        const name_btn4SimpleButton = new SimpleButton(name_btn4)
        name_btn4SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn4)
        name_btn4SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn4)
        name_btn4SimpleButton.callback = () => this.onNameDown(this.name_txt4)

        // reject_btn_3 (components)
        const reject_btn_3SimpleButton = new SimpleButton(reject_btn_3)
        reject_btn_3SimpleButton.callback = () => this.rejectUsername(this.name_txt4)

        // accept_btn_3 (components)
        const accept_btn_3SimpleButton = new SimpleButton(accept_btn_3)
        accept_btn_3SimpleButton.callback = () => this.acceptUsername(this.name_txt4)

        // name_btn3 (components)
        const name_btn3SimpleButton = new SimpleButton(name_btn3)
        name_btn3SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn3)
        name_btn3SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn3)
        name_btn3SimpleButton.callback = () => this.onNameDown(this.name_txt3)

        // reject_btn_2 (components)
        const reject_btn_2SimpleButton = new SimpleButton(reject_btn_2)
        reject_btn_2SimpleButton.callback = () => this.rejectUsername(this.name_txt3)

        // accept_btn_2 (components)
        const accept_btn_2SimpleButton = new SimpleButton(accept_btn_2)
        accept_btn_2SimpleButton.callback = () => this.acceptUsername(this.name_txt3)

        // name_btn2 (components)
        const name_btn2SimpleButton = new SimpleButton(name_btn2)
        name_btn2SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn2)
        name_btn2SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn2)
        name_btn2SimpleButton.callback = () => this.onNameDown(this.name_txt2)

        // reject_btn_1 (components)
        const reject_btn_1SimpleButton = new SimpleButton(reject_btn_1)
        reject_btn_1SimpleButton.callback = () => this.rejectUsername(this.name_txt2)

        // accept_btn_1 (components)
        const accept_btn_1SimpleButton = new SimpleButton(accept_btn_1)
        accept_btn_1SimpleButton.callback = () => this.acceptUsername(this.name_txt2)

        // name_btn1 (components)
        const name_btn1SimpleButton = new SimpleButton(name_btn1)
        name_btn1SimpleButton.hoverCallback = () => this.onNameOver(this.name_btn1)
        name_btn1SimpleButton.hoverOutCallback = () => this.onNameOut(this.name_btn1)
        name_btn1SimpleButton.callback = () => this.onNameDown(this.name_txt1)

        // reject_btn (components)
        const reject_btnSimpleButton = new SimpleButton(reject_btn)
        reject_btnSimpleButton.callback = () => this.rejectUsername(this.name_txt1)

        // accept_btn (components)
        const accept_btnSimpleButton = new SimpleButton(accept_btn)
        accept_btnSimpleButton.callback = () => this.acceptUsername(this.name_txt1)

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.callback = () => this.close()

        // verify_btn (components)
        const verify_btnButton = new Button(verify_btn)
        verify_btnButton.callback = () => this.airtower.sendXt('o#gu')

        // search (components)
        const searchInputText = new InputText(search)
        searchInputText.entercallback = () => this.airtower.sendXt('o#se', this.search.textContent)

        this.player8 = player8
        this.name_btn8 = name_btn8
        this.name_txt8 = name_txt8
        this.player7 = player7
        this.name_btn7 = name_btn7
        this.name_txt7 = name_txt7
        this.player6 = player6
        this.name_btn6 = name_btn6
        this.name_txt6 = name_txt6
        this.player5 = player5
        this.name_btn5 = name_btn5
        this.name_txt5 = name_txt5
        this.player4 = player4
        this.name_btn4 = name_btn4
        this.name_txt4 = name_txt4
        this.player3 = player3
        this.name_btn3 = name_btn3
        this.name_txt3 = name_txt3
        this.player2 = player2
        this.name_btn2 = name_btn2
        this.name_txt2 = name_txt2
        this.player1 = player1
        this.name_btn1 = name_btn1
        this.name_txt1 = name_txt1
        this.name_txt = name_txt
        this.search = search

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    load() {
        this.airtower.sendXt('o#gu')
    }

    showUsers(users) {
        this.currentlyHandling = 0
        if (users[0] == undefined) {
            this.player1.visible = false
        } else {
            this.player1.visible = true
            this.handleUser(users, this.name_txt1, this.currentlyHandling)
        }
        if (users[1] == undefined) {
            this.player2.visible = false
        } else {
            this.player2.visible = true
            this.handleUser(users, this.name_txt2, this.currentlyHandling)
        }
        if (users[2] == undefined) {
            this.player3.visible = false
        } else {
            this.player3.visible = true
            this.handleUser(users, this.name_txt3, this.currentlyHandling)
        }
        if (users[3] == undefined) {
            this.player4.visible = false
        } else {
            this.player4.visible = true
            this.handleUser(users, this.name_txt4, this.currentlyHandling)
        }
        if (users[4] == undefined) {
            this.player5.visible = false
        } else {
            this.player5.visible = true
            this.handleUser(users, this.name_txt5, this.currentlyHandling)
        }
        if (users[5] == undefined) {
            this.player6.visible = false
        } else {
            this.player6.visible = true
            this.handleUser(users, this.name_txt6, this.currentlyHandling)
        }
        if (users[6] == undefined) {
            this.player7.visible = false
        } else {
            this.player7.visible = true
            this.handleUser(users, this.name_txt7, this.currentlyHandling)
        }
        if (users[7] == undefined) {
            this.player8.visible = false
        } else {
            this.player8.visible = true
            this.handleUser(users, this.name_txt8, this.currentlyHandling)
        }
    }

    showSearchedUser(user) {
        this.handleUser(user, this.name_txt1)
    }

    handleUser(users, gameObject) {
        gameObject.text = users[this.currentlyHandling].username
        gameObject.userID = users[this.currentlyHandling].id
        this.currentlyHandling = this.currentlyHandling + 1
    }

    onNameOver(gameObject) {
        gameObject.alpha = 0.8
    }

    onNameOut(gameObject) {
        gameObject.alpha = 1
    }

    onNameDown(gameObject) {
        this.airtower.sendXt('o#gp', gameObject.userID)
    }

    acceptUsername(gameObject) {
        this.airtower.sendXt('o#vp', gameObject.userID)
    }

    rejectUsername(gameObject) {
        this.airtower.sendXt('o#vj', gameObject.userID)
    }

    close() {
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
