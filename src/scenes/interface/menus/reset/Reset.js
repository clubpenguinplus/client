import BaseScene from '@scenes/base/BaseScene'

import {Animation, Button, SimpleButton, LocalisedString, InputText} from '@components/components'

/* START OF COMPILED CODE */

export default class Reset extends BaseScene {
    constructor() {
        super('Reset')

        /** @type {Phaser.GameObjects.Container} */
        this.inputTextContainer
        /** @type {Phaser.GameObjects.Text} */
        this.usernameInput
        /** @type {Phaser.GameObjects.Text} */
        this.passwordInput

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

        // loginButton
        const loginButton = this.add.sprite(760, 546, 'login', 'login-button')

        // loginText
        const loginText = this.add.text(760, 546, '', {})
        loginText.setOrigin(0.5, 0.5)
        loginText.text = 'Reset'
        loginText.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '38px'})
        loginText.setLineSpacing(25)

        // passwordText
        const passwordText = this.add.text(620, 385, '', {})
        passwordText.setOrigin(1, 0.5)
        passwordText.text = 'New Password:'
        passwordText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        passwordText.setLineSpacing(25)

        // usernameText
        const usernameText = this.add.text(620, 309, '', {})
        usernameText.setOrigin(1, 0.5)
        usernameText.text = 'New Password:'
        usernameText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        usernameText.setLineSpacing(25)

        // password
        this.add.image(815, 385, 'login', 'input')

        // username
        this.add.image(815, 309, 'login', 'input')

        // inputTextContainer
        const inputTextContainer = this.add.container(635, 356.1357590398048)

        // usernameInput
        const usernameInput = this.add.text(0, -48, '', {})
        usernameInput.setOrigin(0, 0.5)
        usernameInput.setStyle({color: '#000000ff', fixedWidth: 350, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        usernameInput.setLineSpacing(25)
        inputTextContainer.add(usernameInput)

        // passwordInput
        const passwordInput = this.add.text(0, 28.86422789629154, '', {})
        passwordInput.setOrigin(0, 0.5)
        passwordInput.setStyle({color: '#000000ff', fixedWidth: 350, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        passwordInput.setLineSpacing(25)
        inputTextContainer.add(passwordInput)

        // suggested
        const suggested = this.add.text(760, 106, '', {})
        suggested.setOrigin(0.5, 0.5)
        suggested.text = 'RESET YOUR PASSWORD'
        suggested.setStyle({align: 'center', fixedWidth: 1200, fontFamily: 'cpCCComicrazy', fontSize: '40px', fontStyle: 'italic', stroke: '#003366', strokeThickness: 10, 'shadow.color': '#000000ff'})

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

        // backText (components)
        const backTextLocalisedString = new LocalisedString(backText)
        backTextLocalisedString.id = 'home'

        // registerText2 (components)
        const registerText2LocalisedString = new LocalisedString(registerText2)
        registerText2LocalisedString.id = 'createAccount'

        // registerText (components)
        const registerTextLocalisedString = new LocalisedString(registerText)
        registerTextLocalisedString.id = 'noAccount'

        // loginButton (components)
        const loginButtonButton = new Button(loginButton)
        loginButtonButton.callback = () => this.onResetSubmit()

        // loginText (components)
        const loginTextLocalisedString = new LocalisedString(loginText)
        loginTextLocalisedString.id = 'reset'

        // passwordText (components)
        const passwordTextLocalisedString = new LocalisedString(passwordText)
        passwordTextLocalisedString.id = 'confirmNewPassword'

        // usernameText (components)
        const usernameTextLocalisedString = new LocalisedString(usernameText)
        usernameTextLocalisedString.id = 'newPassword'

        // usernameInput (components)
        const usernameInputInputText = new InputText(usernameInput)
        usernameInputInputText.ispassword = true

        // passwordInput (components)
        const passwordInputInputText = new InputText(passwordInput)
        passwordInputInputText.ispassword = true

        // suggested (components)
        const suggestedLocalisedString = new LocalisedString(suggested)
        suggestedLocalisedString.id = 'changePassword'

        this.inputTextContainer = inputTextContainer
        this.usernameInput = usernameInput
        this.passwordInput = passwordInput

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.airtower.reset = this

        // Input
        this.input.keyboard.on('keydown-ENTER', () => this.onResetSubmit())
    }

    onResetSubmit() {
        let password = this.usernameInput.textContent
        let confirm = this.passwordInput.textContent

        if (password.length < 6) {
            return this.interface.prompt.showError(this.crumbs.getString('passwordTooShort'))
        }

        if (password != confirm) {
            return this.interface.prompt.showError(this.crumbs.getString('passwordsDontMatch'))
        }

        this.interface.showLoading(this.crumbs.getString('resettingPassword'))

        this.airtower.connectLogin(false, false, () => {
            this.airtower.sendXml(`<msg t='sys'><body action='reset' r='0'><newPassword>${password}</newPassword><key>${window.passwordResetKey}</key></body></msg>`)
        })
    }

    passwordReset() {
        this.interface.hideLoading()
        this.interface.prompt.showWindow(this.crumbs.getString('passwordReset'), 'single', () => {
            document.location.href = `/${this.shell.language}/`
        })
    }

    invalidCode() {
        this.interface.hideLoading()
        this.interface.prompt.showError(this.crumbs.getString('passwordWrongKey'), 'Ok', () => {
            window.location.href = `/${this.shell.language}/?forgot`
        })
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
