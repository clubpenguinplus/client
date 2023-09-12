import BaseScene from '@scenes/base/BaseScene'

import {Animation, Button, SimpleButton, LocalisedString, InputText, LocalisedSprite} from '@components/components'

import Checks from '../checks/Checks'
import PenguinLarge from '../card/PenguinLarge'
import WaitPrompt from '../prompts/WaitPrompt'
import SavePrompt from '../prompts/SavePrompt'

/* START OF COMPILED CODE */

export default class PenguinLogin extends BaseScene {
    constructor() {
        super('PenguinLogin')

        /** @type {PenguinLarge} */
        this.container
        /** @type {Phaser.GameObjects.Text} */
        this.passwordInput
        /** @type {Phaser.GameObjects.Container} */
        this.inputTextContainer
        /** @type {Checks} */
        this.checks
        /** @type {SavePrompt} */
        this.savePrompt
        /** @type {WaitPrompt} */
        this.waitPrompt

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'main', 'backgroun')
        bg.setOrigin(0, 0)

        // container
        const container = new PenguinLarge(this, 470, 430)
        this.add.existing(container)

        // backButton
        const backButton = this.add.sprite(760, 876, 'login', 'larger-button')

        // forgetButton
        const forgetButton = this.add.sprite(955, 661, 'login', 'small-button')

        // forgotButton
        const forgotButton = this.add.sprite(955, 604, 'login', 'small-button')

        // backText
        const backText = this.add.text(760, 876, '', {})
        backText.setOrigin(0.5, 0.5)
        backText.text = 'Login as a different penguin'
        backText.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        backText.setLineSpacing(25)

        // forgotText_1
        const forgotText_1 = this.add.text(929, 661, '', {})
        forgotText_1.setOrigin(0.5, 0.5)
        forgotText_1.text = 'Forget my penguin'
        forgotText_1.setStyle({color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        forgotText_1.setLineSpacing(25)

        // forgotText
        const forgotText = this.add.text(929, 604, '', {})
        forgotText.setOrigin(0.5, 0.5)
        forgotText.text = 'Forgot your password?'
        forgotText.setStyle({color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        forgotText.setLineSpacing(25)

        // loginButton
        const loginButton = this.add.sprite(921, 487, 'login', 'login-button')

        // loginText
        const loginText = this.add.text(921, 487, '', {})
        loginText.setOrigin(0.5, 0.5)
        loginText.text = 'Login'
        loginText.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '38px'})
        loginText.setLineSpacing(25)

        // passwordText
        const passwordText = this.add.text(783, 194, '', {})
        passwordText.setOrigin(0, 0.5)
        passwordText.text = 'Password:'
        passwordText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        passwordText.setLineSpacing(25)

        // input
        this.add.image(973, 249, 'login', 'input')

        // inputTextContainer
        const inputTextContainer = this.add.container(791, 249)

        // passwordInput
        const passwordInput = this.add.text(0, 0, '', {})
        passwordInput.setOrigin(0, 0.5)
        passwordInput.setStyle({color: '#000000ff', fixedWidth: 350, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        passwordInput.setLineSpacing(25)
        inputTextContainer.add(passwordInput)

        // note
        const note = this.add.image(1258, 760, 'login', 'note-en')

        // checks
        const checks = new Checks(this, 806, 330)
        this.add.existing(checks)

        // savePrompt
        const savePrompt = new SavePrompt(this, 760, 480)
        this.add.existing(savePrompt)
        savePrompt.visible = false

        // waitPrompt
        const waitPrompt = new WaitPrompt(this, 760, 480)
        this.add.existing(waitPrompt)
        waitPrompt.visible = false

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton)
        backButtonSimpleButton.callback = () => this.onBackClick()
        const backButtonAnimation = new Animation(backButton)
        backButtonAnimation.key = 'small-button'
        backButtonAnimation.end = 3
        backButtonAnimation.repeat = 0
        backButtonAnimation.onHover = true

        // forgetButton (components)
        const forgetButtonSimpleButton = new SimpleButton(forgetButton)
        forgetButtonSimpleButton.callback = () => this.onForgetClick()
        const forgetButtonAnimation = new Animation(forgetButton)
        forgetButtonAnimation.key = 'small-button'
        forgetButtonAnimation.end = 3
        forgetButtonAnimation.repeat = 0
        forgetButtonAnimation.onHover = true

        // forgotButton (components)
        new SimpleButton(forgotButton)
        const forgotButtonAnimation = new Animation(forgotButton)
        forgotButtonAnimation.key = 'small-button'
        forgotButtonAnimation.end = 3
        forgotButtonAnimation.repeat = 0
        forgotButtonAnimation.onHover = true

        // backText (components)
        const backTextLocalisedString = new LocalisedString(backText)
        backTextLocalisedString.id = 'differentPeng'

        // forgotText_1 (components)
        const forgotText_1LocalisedString = new LocalisedString(forgotText_1)
        forgotText_1LocalisedString.id = 'forgetMe'

        // forgotText (components)
        const forgotTextLocalisedString = new LocalisedString(forgotText)
        forgotTextLocalisedString.id = 'forgotPass'

        // loginButton (components)
        const loginButtonButton = new Button(loginButton)
        loginButtonButton.callback = () => this.onLoginSubmit()

        // loginText (components)
        const loginTextLocalisedString = new LocalisedString(loginText)
        loginTextLocalisedString.id = 'login'

        // passwordText (components)
        const passwordTextLocalisedString = new LocalisedString(passwordText)
        passwordTextLocalisedString.id = 'password'

        // passwordInput (components)
        const passwordInputInputText = new InputText(passwordInput)
        passwordInputInputText.ispassword = true
        passwordInputInputText.entercallback = () => this.onLoginSubmit()

        // note (components)
        new LocalisedSprite(note)

        this.container = container
        this.passwordInput = passwordInput
        this.inputTextContainer = inputTextContainer
        this.checks = checks
        this.savePrompt = savePrompt
        this.waitPrompt = waitPrompt

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create(data) {
        this._create()

        this.airtower.lastLoginScene = 'PenguinLogin'

        // Todo: change to depth component
        this.waitPrompt.depth = 1
        this.savePrompt.depth = 1

        this.checks.enable(this.checks.username)

        // Penguin
        this.penguin = data.penguin
        this.container.paperDoll.loadDoll(this.penguin)
        this.container.username.text = this.penguin.username.toUpperCase()
        this.container.button.callback = () => this.onBackClick(this.penguin)

        // Token
        let token = this.airtower.getToken(this.penguin.username)

        if (token) {
            this.passwordInput.__InputText.setDefaultText('********')

            this.checks.enable(this.checks.password)
        }

        // Input
        this.input.keyboard.on('keydown-ENTER', () => this.onLoginSubmit())
    }

    onLoginSubmit() {
        let username = this.penguin.username
        let password = this.passwordInput.textContent
        let token = this.airtower.getToken(username)
        let onConnect

        this.interface.showLoading(`Logging in ${username}`)
        this.scene.stop()

        if (token && !this.passwordInput.__InputText.isChanged) {
            this.airtower.connectLogin(this.checks.username.checked, this.checks.password.checked, () => {
                let status = document.location.host.includes('play') ? 'release' : 'beta'
                this.airtower.sendXml(`<msg t='sys'><body action='verChk' r='0'><ver v='${VERSION}-${status}' /></body></msg>`)
                this.airtower.username = username
                this.airtower.token = token
            })
        } else {
            this.airtower.connectLogin(this.checks.username.checked, this.checks.password.checked, () => {
                let status = document.location.host.includes('play') ? 'release' : 'beta'
                this.airtower.sendXml(`<msg t='sys'><body action='verChk' r='0'><ver v='${VERSION}-${status}' /></body></msg>`)
                this.airtower.username = username
                this.airtower.password = password
            })
        }
    }

    onForgetClick() {
        let savedPenguins = this.airtower.savedPenguins

        delete savedPenguins[this.penguin.username.toLowerCase()]
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))

        this.scene.start('PenguinSelect')
    }

    onBackClick() {
        this.airtower.disconnect()
        this.scene.start('PenguinSelect')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
