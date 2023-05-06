import BaseScene from '@scenes/base/BaseScene'

import {Animation, Button, SimpleButton, LocalisedString, InputText} from '@components/components'

import Checks from './checks/Checks'
import WaitPrompt from './prompts/WaitPrompt'
import SavePrompt from './prompts/SavePrompt'

/* START OF COMPILED CODE */

export default class Login extends BaseScene {
    constructor() {
        super('Login')

        /** @type {Checks} */
        this.checks
        /** @type {Phaser.GameObjects.Container} */
        this.inputTextContainer
        /** @type {Phaser.GameObjects.Text} */
        this.usernameInput
        /** @type {Phaser.GameObjects.Text} */
        this.passwordInput
        /** @type {WaitPrompt} */
        this.waitPrompt
        /** @type {SavePrompt} */
        this.savePrompt

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 1, 'main', 'backgroun')
        bg.setOrigin(0, 0)

        // backButton
        const backButton = this.add.sprite(760, 876, 'login', 'small-button')

        // createButton
        const createButton = this.add.sprite(760, 728, 'login', 'large-button')

        // forgotButton
        const forgotButton = this.add.sprite(760, 604, 'login', 'small-button')

        // note
        this.add.image(1182, 556, 'login', 'note')

        // backText
        const backText = this.add.text(760, 876, '', {})
        backText.setOrigin(0.5, 0.5)
        backText.text = 'Home'
        backText.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        backText.setLineSpacing(25)

        // registerText2
        const registerText2 = this.add.text(760, 747, '', {})
        registerText2.setOrigin(0.5, 0.5)
        registerText2.text = 'Create a free account now'
        registerText2.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '35px'})
        registerText2.setLineSpacing(25)

        // registerText
        const registerText = this.add.text(760, 713, '', {})
        registerText.setOrigin(0.5, 0.5)
        registerText.text = "Don't have a penguin?"
        registerText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        registerText.setLineSpacing(25)

        // forgotText
        const forgotText = this.add.text(760, 604, '', {})
        forgotText.setOrigin(0.5, 0.5)
        forgotText.text = 'Forgot your password?'
        forgotText.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        forgotText.setLineSpacing(25)

        // loginButton
        const loginButton = this.add.sprite(760, 483, 'login', 'login-button')

        // loginText
        const loginText = this.add.text(760, 483, '', {})
        loginText.setOrigin(0.5, 0.5)
        loginText.text = 'Login'
        loginText.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '38px'})
        loginText.setLineSpacing(25)

        // passwordText
        const passwordText = this.add.text(620, 258, '', {})
        passwordText.setOrigin(1, 0.5)
        passwordText.text = 'Password:'
        passwordText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        passwordText.setLineSpacing(25)

        // usernameText
        const usernameText = this.add.text(620, 200, '', {})
        usernameText.setOrigin(1, 0.5)
        usernameText.text = 'Penguin Name:'
        usernameText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        usernameText.setLineSpacing(25)

        // password
        this.add.image(815, 258, 'login', 'input')

        // username
        this.add.image(815, 200, 'login', 'input')

        // checks
        const checks = new Checks(this, 568, 328)
        this.add.existing(checks)

        // inputTextContainer
        const inputTextContainer = this.add.container(635, 200)

        // usernameInput
        const usernameInput = this.add.text(0, 0, '', {})
        usernameInput.setOrigin(0, 0.5)
        usernameInput.setStyle({color: '#000000ff', fixedWidth: 350, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        usernameInput.setLineSpacing(25)
        inputTextContainer.add(usernameInput)

        // passwordInput
        const passwordInput = this.add.text(0, 58, '', {})
        passwordInput.setOrigin(0, 0.5)
        passwordInput.setStyle({color: '#000000ff', fixedWidth: 350, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        passwordInput.setLineSpacing(25)
        inputTextContainer.add(passwordInput)

        // waitPrompt
        const waitPrompt = new WaitPrompt(this, 760, 480)
        this.add.existing(waitPrompt)
        waitPrompt.visible = false

        // savePrompt
        const savePrompt = new SavePrompt(this, 760, 480)
        this.add.existing(savePrompt)
        savePrompt.visible = false

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton)
        backButtonSimpleButton.callback = () => this.onBackClick()
        const backButtonAnimation = new Animation(backButton)
        backButtonAnimation.key = 'small-button'
        backButtonAnimation.end = 3
        backButtonAnimation.repeat = 0
        backButtonAnimation.onHover = true

        // createButton (components)
        const createButtonSimpleButton = new SimpleButton(createButton)
        createButtonSimpleButton.callback = () => this.onCreateClick()
        const createButtonAnimation = new Animation(createButton)
        createButtonAnimation.key = 'large-button'
        createButtonAnimation.end = 3
        createButtonAnimation.repeat = 0
        createButtonAnimation.onHover = true

        // forgotButton (components)
        const forgotButtonSimpleButton = new SimpleButton(forgotButton)
        forgotButtonSimpleButton.callback = () => this.onForgotClick()
        const forgotButtonAnimation = new Animation(forgotButton)
        forgotButtonAnimation.key = 'small-button'
        forgotButtonAnimation.end = 3
        forgotButtonAnimation.repeat = 0
        forgotButtonAnimation.onHover = true

        // backText (components)
        const backTextLocalisedString = new LocalisedString(backText)
        backTextLocalisedString.id = 'home'

        // registerText2 (components)
        const registerText2LocalisedString = new LocalisedString(registerText2)
        registerText2LocalisedString.id = 'createAccount'

        // registerText (components)
        const registerTextLocalisedString = new LocalisedString(registerText)
        registerTextLocalisedString.id = 'noAccount'

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

        // usernameText (components)
        const usernameTextLocalisedString = new LocalisedString(usernameText)
        usernameTextLocalisedString.id = 'pengName'

        // usernameInput (components)
        const usernameInputInputText = new InputText(usernameInput)
        usernameInputInputText.charlimit = 12
        usernameInputInputText.inputfilter = /^[A-Z0-9 ]*$/i

        // passwordInput (components)
        const passwordInputInputText = new InputText(passwordInput)
        passwordInputInputText.ispassword = true

        this.checks = checks
        this.inputTextContainer = inputTextContainer
        this.usernameInput = usernameInput
        this.passwordInput = passwordInput
        this.waitPrompt = waitPrompt
        this.savePrompt = savePrompt

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.airtower.lastLoginScene = 'Login'

        // Todo: change to depth component
        this.waitPrompt.depth = 1
        this.savePrompt.depth = 1

        // Input
        this.input.keyboard.on('keydown-ENTER', () => this.onLoginSubmit())
    }

    onLoginSubmit() {
        let username = this.usernameInput.textContent
        let password = this.passwordInput.textContent

        this.interface.showLoading(`Logging in ${username}`)
        this.scene.stop()

        this.airtower.connectLogin(this.checks.username.checked, this.checks.password.checked, () => {
            let status = document.location.host.includes('play') ? 'release' : 'beta'
            this.airtower.sendXml(`<msg t='sys'><body action='verChk' r='0'><ver v='${VERSION}-${status}' /></body></msg>`)
            this.airtower.username = username
            this.airtower.password = password
        })
    }

    onForgotClick() {
        window.location.href = `/${this.shell.language}/?forgot`
    }

    onCreateClick() {
        window.location.href = `/${this.shell.language}/?create`
    }

    onBackClick() {
        this.airtower.disconnect()
        document.location.href = 'https://cpplus.pw/'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
