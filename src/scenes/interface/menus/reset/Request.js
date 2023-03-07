import BaseScene from '@scenes/base/BaseScene'

import {Animation, Button, SimpleButton, LocalisedString, InputText} from '@components/components'

/* START OF COMPILED CODE */

export default class Request extends BaseScene {
    constructor() {
        super('Request')

        /** @type {Phaser.GameObjects.Text} */
        this.usernameInput

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
        backText.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '30px'})
        backText.setLineSpacing(25)

        // registerText2
        const registerText2 = this.add.text(760, 747, '', {})
        registerText2.setOrigin(0.5, 0.5)
        registerText2.text = 'Create a free account now'
        registerText2.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '35px'})
        registerText2.setLineSpacing(25)

        // registerText
        const registerText = this.add.text(760, 713, '', {})
        registerText.setOrigin(0.5, 0.5)
        registerText.text = "Don't have a penguin?"
        registerText.setStyle({align: 'right', color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '30px'})
        registerText.setLineSpacing(25)

        // loginButton
        const loginButton = this.add.sprite(760, 546, 'login', 'login-button')

        // loginText
        const loginText = this.add.text(760, 546, '', {})
        loginText.setOrigin(0.5, 0.5)
        loginText.text = 'Reset'
        loginText.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '38px'})
        loginText.setLineSpacing(25)

        // usernameText
        const usernameText = this.add.text(760, 208, '', {})
        usernameText.setOrigin(0.5, 0.5)
        usernameText.text = 'Email Address or Username:'
        usernameText.setStyle({align: 'center', color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '34px'})
        usernameText.setLineSpacing(25)

        // username
        this.add.image(760, 263, 'login', 'input')

        // usernameInput
        const usernameInput = this.add.text(579, 262, '', {})
        usernameInput.setOrigin(0, 0.5)
        usernameInput.setStyle({color: '#000000ff', fixedWidth: 350, fontFamily: 'Burbank Small', fontSize: '30px'})
        usernameInput.setLineSpacing(25)

        // suggested
        const suggested = this.add.text(760, 106, '', {})
        suggested.setOrigin(0.5, 0.5)
        suggested.text = 'RESET YOUR PASSWORD'
        suggested.setStyle({align: 'center', fixedWidth: 1200, fontFamily: 'CCComicrazy', fontSize: '40px', fontStyle: 'italic', stroke: '#003366', strokeThickness: 10, 'shadow.color': '#000000ff'})

        // registerText_1
        const registerText_1 = this.add.text(760, 385, '', {})
        registerText_1.setOrigin(0.5, 0.5)
        registerText_1.text = "If an account is found matching the email or username given, we'll send you (or your parent) a link to reset your password."
        registerText_1.setStyle({align: 'center', color: '#000000ff', fixedWidth: 1000, fontFamily: 'Burbank Small', fontSize: '35px'})
        registerText_1.setWordWrapWidth(1000)

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
        loginButtonButton.spriteName = 'login-button'
        loginButtonButton.callback = () => this.onResetSubmit()

        // loginText (components)
        const loginTextLocalisedString = new LocalisedString(loginText)
        loginTextLocalisedString.id = 'reset'

        // usernameText (components)
        const usernameTextLocalisedString = new LocalisedString(usernameText)
        usernameTextLocalisedString.id = 'emailOrUser'

        // usernameInput (components)
        new InputText(usernameInput)

        // suggested (components)
        const suggestedLocalisedString = new LocalisedString(suggested)
        suggestedLocalisedString.id = 'changePassword'

        // registerText_1 (components)
        const registerText_1LocalisedString = new LocalisedString(registerText_1)
        registerText_1LocalisedString.id = 'resetInfo'

        this.usernameInput = usernameInput

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.airtower.request = this

        // Input
        this.input.keyboard.on('keydown-ENTER', () => this.onResetSubmit())
    }

    onResetSubmit() {
        let user = this.usernameInput.textContent

        this.interface.showLoading()

        this.airtower.connectLogin(false, false, () => {
            this.airtower.sendXml(`<msg t='sys'><body action='requestReset' r='0'><user>${user}</user></body></msg>`)
            this.interface.hideLoading()
            this.interface.prompt.showWindow(this.crumbs.getString('sendingEmail'), 'single', () => {
                document.location.href = `/${this.shell.language}/`
            })
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
