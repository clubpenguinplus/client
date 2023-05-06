import BaseContainer from '@scenes/base/BaseContainer'

import {Button, ShowHint} from '@components/components'

/* START OF COMPILED CODE */

export default class Buttons extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 790.6731008322703, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.report_button
        /** @type {Phaser.GameObjects.Image} */
        this.ignore_button
        /** @type {Phaser.GameObjects.Image} */
        this.stamps_button
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button
        /** @type {Phaser.GameObjects.Image} */
        this.mail_button
        /** @type {Phaser.GameObjects.Image} */
        this.profile_button
        /** @type {Phaser.GameObjects.Image} */
        this.buddy_button
        /** @type {Phaser.GameObjects.Image} */
        this.report_icon
        /** @type {Phaser.GameObjects.Image} */
        this.ignore_icon
        /** @type {Phaser.GameObjects.Image} */
        this.stamps_icon
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_icon
        /** @type {Phaser.GameObjects.Image} */
        this.mail_icon
        /** @type {Phaser.GameObjects.Image} */
        this.profile_icon
        /** @type {Phaser.GameObjects.Image} */
        this.buddy_icon

        // report_button
        const report_button = scene.add.image(155.32691352599045, 0, 'main', 'mobile/blue-button-disabled')
        this.add(report_button)

        // ignore_button
        const ignore_button = scene.add.image(103, 76, 'main', 'mobile/blue-button-disabled')
        this.add(ignore_button)

        // stamps_button
        const stamps_button = scene.add.image(-1, 76, 'main', 'mobile/blue-button-disabled')
        this.add(stamps_button)

        // igloo_button
        const igloo_button = scene.add.image(-52.67308647400955, 0, 'main', 'mobile/blue-button-disabled')
        this.add(igloo_button)

        // mail_button
        const mail_button = scene.add.image(51.32691192626953, 0.6971156016820146, 'main', 'mobile/blue-button-disabled')
        mail_button.setOrigin(0.5, 0.5124484928871789)
        this.add(mail_button)

        // profile_button
        const profile_button = scene.add.image(-105, 76, 'main', 'mobile/blue-button-disabled')
        this.add(profile_button)

        // buddy_button
        const buddy_button = scene.add.image(-156.67308647400955, 0, 'main', 'mobile/blue-button-disabled')
        this.add(buddy_button)

        // report_icon
        const report_icon = scene.add.image(155.32691352599045, -1, 'main', 'mobile/mod-icon-disabled')
        this.add(report_icon)

        // ignore_icon
        const ignore_icon = scene.add.image(103, 74, 'main', 'mobile/ignore-icon-disabled')
        this.add(ignore_icon)

        // stamps_icon
        const stamps_icon = scene.add.image(-1, 74, 'main', 'mobile/stamp-icon-disabled')
        this.add(stamps_icon)

        // igloo_icon
        const igloo_icon = scene.add.image(-52.67308647400955, -2, 'main', 'mobile/igloo-icon-disabled')
        this.add(igloo_icon)

        // mail_icon
        const mail_icon = scene.add.image(51.32691352599045, 0, 'main', 'mobile/mail-icon-disabled')
        this.add(mail_icon)

        // profile_icon
        const profile_icon = scene.add.image(-105, 74, 'main', 'mobile/find-icon-disabled')
        this.add(profile_icon)

        // buddy_icon
        const buddy_icon = scene.add.image(-156.67308647400955, -2, 'main', 'mobile/buddies-icon-disabled')
        this.add(buddy_icon)

        // report_button (components)
        const report_buttonButton = new Button(report_button)
        report_buttonButton.callback = () => this.onReportClick()
        const report_buttonShowHint = new ShowHint(report_button)
        report_buttonShowHint.text = 'reportPlayer'

        // ignore_button (components)
        const ignore_buttonButton = new Button(ignore_button)
        ignore_buttonButton.callback = () => this.onIgnoreClick()
        const ignore_buttonShowHint = new ShowHint(ignore_button)
        ignore_buttonShowHint.text = 'ignorePlayer'

        // stamps_button (components)
        const stamps_buttonButton = new Button(stamps_button)
        stamps_buttonButton.callback = () => this.onStampClick()
        const stamps_buttonShowHint = new ShowHint(stamps_button)
        stamps_buttonShowHint.text = 'viewStampbook'

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button)
        igloo_buttonButton.callback = () => this.onIglooClick()
        const igloo_buttonShowHint = new ShowHint(igloo_button)
        igloo_buttonShowHint.text = 'visitIgloo'

        // mail_button (components)
        const mail_buttonButton = new Button(mail_button)
        mail_buttonButton.callback = () => this.onMailClick()
        const mail_buttonShowHint = new ShowHint(mail_button)
        mail_buttonShowHint.text = 'sendPostcard'

        // profile_button (components)
        const profile_buttonButton = new Button(profile_button)
        profile_buttonButton.callback = () => this.onFindClick()
        const profile_buttonShowHint = new ShowHint(profile_button)
        profile_buttonShowHint.text = 'findPlayer'

        // buddy_button (components)
        const buddy_buttonButton = new Button(buddy_button)
        buddy_buttonButton.callback = () => this.onFriendClick()
        const buddy_buttonShowHint = new ShowHint(buddy_button)
        buddy_buttonShowHint.text = 'addFriend'

        this.report_button = report_button
        this.ignore_button = ignore_button
        this.stamps_button = stamps_button
        this.igloo_button = igloo_button
        this.mail_button = mail_button
        this.profile_button = profile_button
        this.buddy_button = buddy_button
        this.report_icon = report_icon
        this.ignore_icon = ignore_icon
        this.stamps_icon = stamps_icon
        this.igloo_icon = igloo_icon
        this.mail_icon = mail_icon
        this.profile_icon = profile_icon
        this.buddy_icon = buddy_icon

        /* START-USER-CTR-CODE */

        this.buttonNames = ['friend', 'profile', 'igloo', 'stamps', 'ignore', 'report', 'mail']
        this.buttons = this.initButtons()

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get username() {
        return this.parentContainer.username.text
    }

    initButtons() {
        let buttons = {}

        for (let name of this.buttonNames) {
            let button = this[`${name}_button`]
            let icon = this[`${name}_icon`]
            let iconTexture = icon.frame.name.replace('-disabled', '')
            let hint = button.__ShowHint.text.slice()

            buttons[name] = {
                button: button,
                icon: icon,
                buttonTexture: 'blue-button',
                iconTexture: iconTexture,
                hint: hint,
            }
        }

        return buttons
    }

    updateButtons(relationship) {
        this.resetButtons()

        switch (relationship) {
            case 'online':
                this.enableButton('friend', 'buddies-remove-icon', 'removeFriend')
                this.enableButtons(['profile', 'igloo', 'stamps', 'report', 'mail'])
                break

            case 'offline':
                this.enableButton('friend', 'buddies-remove-icon', 'removeFriend')
                this.enableButtons(['igloo', 'stamps', 'report', 'mail'])
                break

            case 'ignore':
                this.enableButton('ignore', 'ignore-remove-icon', 'unignorePlayer')
                this.enableButton('report')
                break

            case 'mascot':
                this.enableButton('friend', 'gift-icon', 'claimGiveaway')
                break

            default:
                this.enableButtons(['friend', 'stamps', 'ignore', 'report', 'mail'])
                break
        }

        if (this.shell.client.isModerator) {
            this.enableButton('report', 'mute-icon', 'warnPlayer')
            this.enableButton('ignore', 'ignore-icon', 'kickPlayer')
            this.enableButton('profile', 'help-icon', 'findPlayer')
        }

        if (!['online', 'offline'].includes(relationship)) {
            this.airtower.sendXt('g#io', this.parentContainer.id)
        }
    }

    resetButtons() {
        for (let name of this.buttonNames) {
            this.disableButton(name)
        }
    }

    enableButtons(names) {
        for (let name of names) {
            this.enableButton(name)
        }
    }

    enableButton(name, icon = this.buttons[name].iconTexture, hint = this.buttons[name].hint) {
        let button = this.buttons[name]

        button.button.setInteractive()
        button.button.setTexture('main', button.buttonTexture)
        button.icon.setTexture('main', icon)
        button.button.__ShowHint.text = hint
    }

    disableButton(name) {
        let button = this.buttons[name]

        button.button.disableInteractive()
        button.button.setTexture('main', `${button.buttonTexture}-disabled`)
        button.icon.setTexture('main', `${button.iconTexture}-disabled`)
    }

    onFriendClick() {
        if (this.friend_icon.frame.name == 'gift-icon') {
            for (var x in this.shell.mascots) {
                if (this.shell.mascots[x].id == this.parentContainer.id) this.interface.prompt.showItem(this.shell.mascots[x].giveaway)
            }
        } else if (this.friend_icon.frame.name == 'buddy-remove-icon') {
            this.showRemoveFriend()
        } else {
            this.showRequestFriend()
        }
    }

    onFindClick() {
        this.airtower.sendXt('b#bf', this.parentContainer.id)
    }

    onIglooClick() {
        this.shell.client.sendJoinIgloo(this.parentContainer.id)
    }

    onIgnoreClick() {
        if (this.shell.client.isModerator) {
            this.showKick()
        } else if (this.ignore_icon.frame.name == 'ignore-remove-icon') {
            this.showRemoveIgnore()
        } else {
            this.showAddIgnore()
        }
    }

    onStampClick() {
        this.interface.loadExternal('Stampbook')
        this.interface.stampbookId = this.parentContainer.id
    }

    onMailClick() {
        // this.shell.RuffleManager.handleLoadOtherSwf('mail.swf', {
        //     username: this.parentContainer.username.text,
        // })
    }

    onReportClick() {
        if (this.shell.client.isModerator) {
            this.showWarn()
        } else {
            this.interface.main.snitch.visible = true
            this.interface.main.snitch.returnToStep1(this.parentContainer.id)
        }
    }

    showRequestFriend() {
        let text = `Would you like to add ${this.username}\nto your friend list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('b#br', this.parentContainer.id)

            this.interface.prompt.showWindow('Request Sent', 'single')
        })
    }

    showRemoveFriend() {
        let text = `Would you like to remove ${this.username}\nfrom your friend list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('b#rb', this.parentContainer.id)

            this.interface.prompt.window.visible = false
        })
    }

    showAddIgnore() {
        let text = `Would you like to add ${this.username}\nto your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('n#an', `${this.parentContainer.id}%${this.username}`)

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    showRemoveIgnore() {
        let text = `Would you like to remove ${this.username}\nfrom your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('n#rn', this.parentContainer.id)

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    showMute() {
        let text = `Mute Player: ${this.username}`

        // Change to input text prompt for reason
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('o#m', this.parentContainer.id)

            this.interface.prompt.window.visible = false
        })
    }

    showWarn() {
        let text = `Warn Player: ${this.username}`

        // Change to input text prompt for reason
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('o#w', this.parentContainer.id)

            this.interface.prompt.window.visible = false
        })
    }

    showKick() {
        let text = `Kick Player: ${this.username}`

        // Change to input text prompt for reason
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('o#k', this.parentContainer.id)

            this.interface.prompt.window.visible = false
        })
    }

    showBan() {
        let text = `Ban Player: ${this.username}`

        // Change to input text prompt for reason
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('o#b', this.parentContainer.id)

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
