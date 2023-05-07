import BaseContainer from '@scenes/base/BaseContainer'

export default class ButtonsJS extends BaseContainer {
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
                if (this.shell.client.isModerator) {
                    this.enableButton('report', 'mute-icon', 'punishPlayer')
                    this.enableButton('ignore', 'ignore-icon', 'kickPlayer')
                    this.enableButton('profile', 'find-icon', 'findPlayer')
                }
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
            this.airtower.sendXt('g#on', this.parentContainer.id)
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
        } else if (this.friend_icon.frame.name == 'buddies-remove-icon') {
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
            this.interface.reportUser = this.parentContainer.username.text
            this.interface.loadExternal('Report')
        }
    }

    showRequestFriend() {
        let text = this.crumbs.getString(`add-friend-prompt,${this.username}`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('b#br', this.parentContainer.id)

            this.interface.prompt.showWindow('Request Sent', 'single')
        })
    }

    showRemoveFriend() {
        let text = this.crumbs.getString(`remove-friend-prompt,${this.username}`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('b#rb', this.parentContainer.id)

            this.interface.prompt.window.visible = false
        })
    }

    showAddIgnore() {
        let text = this.crumbs.getString(`add-ignore,${this.username}`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('n#an', `${this.parentContainer.id}%${this.username}`)

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    showRemoveIgnore() {
        let text = this.crumbs.getString(`remove-ignore,${this.username}`)

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
        this.interface.punishuser = {id: this.parentContainer.id, username: this.username}
        this.interface.loadExternal('Punish')
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

    isOnline(user) {
        if (this.shell.client.isModerator && user == this.parentContainer.id) {
            this.enableButton('report', 'mute-icon', 'punishPlayer')
            this.enableButton('ignore', 'ignore-icon', 'kickPlayer')
            this.enableButton('profile', 'find-icon', 'findPlayer')
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
