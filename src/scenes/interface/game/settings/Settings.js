import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, NineSlice, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class Settings extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.checkbox
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_1

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // rectangle
        const rectangle = scene.add.rectangle(0, -22, 708, 600)
        rectangle.isFilled = true
        rectangle.fillColor = 164045
        this.add(rectangle)

        // buddies
        const buddies = scene.add.text(-55, 202, '', {})
        buddies.setOrigin(0.5, 0.5)
        buddies.text = '88/100 Friends'
        buddies.setStyle({color: '#000000ff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(buddies)

        // icon
        const icon = scene.add.image(-231, 203, 'main', 'buddies-icon')
        this.add(icon)

        // button
        const button = scene.add.image(0, 96, 'main', 'help-button')
        this.add(button)

        // account
        const account = scene.add.text(0, 95, '', {})
        account.setOrigin(0.5, 0.5)
        account.text = 'Manage Account'
        account.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 562, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        this.add(account)

        // music
        const music = scene.add.text(106, -50, '', {})
        music.setOrigin(0.5, 0.5)
        music.text = 'Mute Music'
        music.setStyle({color: '#000000ff', fixedWidth: 348, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(music)

        // age
        const age = scene.add.text(0, -108, '', {})
        age.setOrigin(0.5, 0.5)
        age.text = 'Your penguin is 0 days old'
        age.setStyle({align: 'center', color: '#000000ff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(age)

        // server
        const server = scene.add.text(0, -156, '', {})
        server.setOrigin(0.5, 0.5)
        server.text = "You're on Server Name"
        server.setStyle({align: 'center', color: '#000000ff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        this.add(server)

        // settings
        const settings = scene.add.text(0, -238, '', {})
        settings.setOrigin(0.5, 0.5)
        settings.text = 'SETTINGS'
        settings.setStyle({align: 'center', fixedWidth: 600, fontFamily: 'cpCCComicrazy', fontSize: '40px', fontStyle: 'bold italic', stroke: '#003366', strokeThickness: 10})
        this.add(settings)

        // checkbox
        const checkbox = scene.add.image(-101, -52, 'login', 'checkbox')
        checkbox.setOrigin(0.41509, 0.5849)
        this.add(checkbox)

        // ignore_button
        const ignore_button = scene.add.image(159, 202, 'main', 'blue-button')
        this.add(ignore_button)

        // ignore_icon
        const ignore_icon = scene.add.image(159, 202, 'main', 'ignore-icon')
        this.add(ignore_icon)

        // x_button
        const x_button = scene.add.image(300, -268, 'main', 'blue-button')
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(300, -270, 'main', 'blue-x')
        this.add(blue_x)

        // checkbox_1
        const checkbox_1 = scene.add.image(-101, 5, 'login', 'checkbox')
        checkbox_1.setOrigin(0.41509, 0.5849)
        this.add(checkbox_1)

        // music_1
        const music_1 = scene.add.text(106, 7, '', {})
        music_1.setOrigin(0.5, 0.5)
        music_1.text = 'Mute All Sounds'
        music_1.setStyle({color: '#000000ff', fixedWidth: 348, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(music_1)

        // volume_down_button
        const volume_down_button = scene.add.image(-162, 8, 'main', 'blue-button')
        this.add(volume_down_button)

        // volume_down_icon
        const volume_down_icon = scene.add.image(-159, 6, 'main', 'volume-down')
        this.add(volume_down_icon)

        // volume_up_button
        const volume_up_button = scene.add.image(-162, -58, 'main', 'blue-button')
        this.add(volume_up_button)

        // volume_up_icon
        const volume_up_icon = scene.add.image(-162, -60, 'main', 'volume-up')
        this.add(volume_up_icon)

        // block (components)
        new Interactive(block)

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle)
        rectangleNineSlice.corner = 50

        // button (components)
        const buttonButton = new Button(button)
        buttonButton.callback = () => this.onManagePress()

        // checkbox (components)
        const checkboxSimpleButton = new SimpleButton(checkbox)
        checkboxSimpleButton.callback = () => this.onMuteClick()

        // ignore_button (components)
        const ignore_buttonButton = new Button(ignore_button)
        ignore_buttonButton.callback = () => {
            this.onSettingsPress()
        }

        // x_button (components)
        const x_buttonButton = new Button(x_button)
        x_buttonButton.callback = () => {
            this.visible = false
        }

        // checkbox_1 (components)
        const checkbox_1SimpleButton = new SimpleButton(checkbox_1)
        checkbox_1SimpleButton.callback = () => this.onMuteAllClick()

        // volume_down_button (components)
        const volume_down_buttonButton = new Button(volume_down_button)
        volume_down_buttonButton.callback = () => this.shell.musicController.volumeDown()

        // volume_up_button (components)
        const volume_up_buttonButton = new Button(volume_up_button)
        volume_up_buttonButton.callback = () => this.shell.musicController.volumeUp()

        this.checkbox = checkbox
        this.checkbox_1 = checkbox_1

        /* START-USER-CTR-CODE */

        this.checkbox.checked = this.shell.muteMusic
        this.checkbox_1.checked = this.shell.muteAll

        if (this.checkbox.checked) {
            this.checkbox.setTexture('login', 'checkbox-active')
        }
        if (this.checkbox_1.checked) {
            this.checkbox_1.setTexture('login', 'checkbox-active')
        }

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.shell.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        server.text = `You're on ${this.airtower.worldName}`
        age.text = `Your penguin is ${daysDiff} days old`
        buddies.text = `${this.shell.client.friends.length}/100 Friends`

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onMuteClick() {
        if (this.checkbox_1.frame.name == 'checkbox-active') return
        this.toggle(this.checkbox)

        if (this.checkbox.frame.name == 'checkbox-active') {
            localStorage.muteMusic = 'true'
        } else {
            localStorage.muteMusic = 'false'
        }

        this.shell.muteMusic = localStorage.muteMusic == 'true' ? true : false

        if (!this.shell.room.music) {
            return
        }

        if (this.shell.muteMusic) {
            this.shell.musicController.addMusic(0)
        } else {
            this.shell.room.addMusic()
        }
    }

    onMuteAllClick() {
        this.toggle(this.checkbox_1)
        this.checkbox.setFrame(this.checkbox_1.frame.name)

        if (this.checkbox_1.frame.name == 'checkbox-active') {
            localStorage.muteAll = 'true'
            localStorage.muteMusic = 'true'
        } else {
            localStorage.muteAll = 'false'
            localStorage.muteMusic = 'false'
        }

        this.shell.muteMusic = localStorage.muteMusic == 'true' ? true : false
        this.shell.muteAll = localStorage.muteAll == 'true' ? true : false

        if (!this.shell.room.music) {
            return
        }

        if (this.shell.muteMusic) {
            this.shell.musicController.addMusic(0)
        } else {
            this.shell.room.addMusic()
        }
    }

    toggle(checkbox) {
        let texture = checkbox.frame.name == 'checkbox' ? 'checkbox-active' : 'checkbox'
        checkbox.setTexture('login', texture)
    }

    onManagePress() {
        this.interface.main.manage.show()
        this.visible = false
    }

    onSettingsPress() {
        this.interface.main.showWidget(this.interface.main.ignore)
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
