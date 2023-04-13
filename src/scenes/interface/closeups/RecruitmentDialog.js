import Closeup from './Closeup'
import {Button, LocalisedString, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class RecruitmentDialog extends Closeup {
    constructor() {
        super('RecruitmentDialog')

        /** @type {Phaser.GameObjects.Image} */
        this.no_btn
        /** @type {Phaser.GameObjects.Text} */
        this.no_txt
        /** @type {Phaser.GameObjects.Image} */
        this.yes_btn
        /** @type {Phaser.GameObjects.Text} */
        this.yes_txt
        /** @type {Phaser.GameObjects.Image} */
        this.ok_btn
        /** @type {Phaser.GameObjects.Text} */
        this.ok_txt
        /** @type {Phaser.GameObjects.Image} */
        this.addphone_btn
        /** @type {Phaser.GameObjects.Text} */
        this.addphone_txt
        /** @type {Phaser.GameObjects.Sprite} */
        this.phone
        /** @type {Phaser.GameObjects.Text} */
        this.nametitle
        /** @type {Phaser.GameObjects.Text} */
        this.bodytext

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('recruitment-pack', 'client/media/interface/closeups/recruitment/recruitment-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // bg
        this.add.image(772, 793, 'recruitment', 'bg')

        // no_btn
        const no_btn = this.add.image(1142, 886, 'recruitment', 'genericbtn')

        // no_txt
        const no_txt = this.add.text(1142, 886, '', {})
        no_txt.setOrigin(0.5, 0.5)
        no_txt.text = 'No'
        no_txt.setStyle({align: 'center', color: '#314a42ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        no_txt.setLineSpacing(5)
        no_txt.setWordWrapWidth(100)

        // yes_btn
        const yes_btn = this.add.image(1315, 886, 'recruitment', 'genericbtn')

        // yes_txt
        const yes_txt = this.add.text(1315, 886, '', {})
        yes_txt.setOrigin(0.5, 0.5)
        yes_txt.text = 'Yes'
        yes_txt.setStyle({align: 'center', color: '#314a42ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        yes_txt.setLineSpacing(5)
        yes_txt.setWordWrapWidth(100)

        // ok_btn
        const ok_btn = this.add.image(1315, 886, 'recruitment', 'genericbtn')
        ok_btn.visible = false

        // ok_txt
        const ok_txt = this.add.text(1315, 886, '', {})
        ok_txt.setOrigin(0.5, 0.5)
        ok_txt.visible = false
        ok_txt.text = 'OK'
        ok_txt.setStyle({align: 'center', color: '#314a42ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        ok_txt.setLineSpacing(5)
        ok_txt.setWordWrapWidth(100)

        // addphone_btn
        const addphone_btn = this.add.image(1268, 869, 'recruitment', 'addphonebtn')
        addphone_btn.visible = false

        // addphone_txt
        const addphone_txt = this.add.text(1298, 886, '', {})
        addphone_txt.setOrigin(0.5, 0.5)
        addphone_txt.visible = false
        addphone_txt.text = 'Add phone'
        addphone_txt.setStyle({align: 'center', color: '#314a42ff', fixedWidth: 180, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        addphone_txt.setLineSpacing(5)
        addphone_txt.setWordWrapWidth(180)

        // phone
        const phone = this.add.sprite(639, 741, 'recruitment', 'phone0050')
        phone.visible = false

        // nametitle
        const nametitle = this.add.text(506, 617, '', {})
        nametitle.setOrigin(0, 0.5)
        nametitle.text = 'The Director'
        nametitle.setStyle({fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        nametitle.setLineSpacing(5)
        nametitle.setWordWrapWidth(550)

        // bodytext
        const bodytext = this.add.text(514, 677, '', {})
        bodytext.text = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        bodytext.setStyle({color: '#373737ff', fixedWidth: 865, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        bodytext.setLineSpacing(5)
        bodytext.setWordWrapWidth(865)

        // block (components)
        new Interactive(block)

        // no_btn (components)
        const no_btnButton = new Button(no_btn)
        no_btnButton.spriteName = 'genericbtn'
        no_btnButton.callback = () => this.onNo()

        // no_txt (components)
        const no_txtLocalisedString = new LocalisedString(no_txt)
        no_txtLocalisedString.id = 'recruitment-no'

        // yes_btn (components)
        const yes_btnButton = new Button(yes_btn)
        yes_btnButton.spriteName = 'genericbtn'
        yes_btnButton.callback = () => this.onYes()

        // yes_txt (components)
        const yes_txtLocalisedString = new LocalisedString(yes_txt)
        yes_txtLocalisedString.id = 'recruitment-yes'

        // ok_btn (components)
        const ok_btnButton = new Button(ok_btn)
        ok_btnButton.spriteName = 'genericbtn'
        ok_btnButton.callback = () => this.stop()

        // ok_txt (components)
        const ok_txtLocalisedString = new LocalisedString(ok_txt)
        ok_txtLocalisedString.id = 'recruitment-okay'

        // addphone_btn (components)
        const addphone_btnButton = new Button(addphone_btn)
        addphone_btnButton.spriteName = 'addphonebtn'
        addphone_btnButton.callback = () => this.addPhone()

        // addphone_txt (components)
        const addphone_txtLocalisedString = new LocalisedString(addphone_txt)
        addphone_txtLocalisedString.id = 'recruitment-addphone'

        // nametitle (components)
        const nametitleLocalisedString = new LocalisedString(nametitle)
        nametitleLocalisedString.id = 'recruitment-director'

        // bodytext (components)
        const bodytextLocalisedString = new LocalisedString(bodytext)
        bodytextLocalisedString.id = 'recruitment-intro'

        this.no_btn = no_btn
        this.no_txt = no_txt
        this.yes_btn = yes_btn
        this.yes_txt = yes_txt
        this.ok_btn = ok_btn
        this.ok_txt = ok_txt
        this.addphone_btn = addphone_btn
        this.addphone_txt = addphone_txt
        this.phone = phone
        this.nametitle = nametitle
        this.bodytext = bodytext

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.bodytext.setString(`recruitment-intro,${this.shell.client.penguin.username}`)
    }

    onNo() {
        this.no_btn.visible = false
        this.no_txt.visible = false
        this.yes_btn.visible = false
        this.yes_txt.visible = false
        this.ok_btn.visible = true
        this.ok_txt.visible = true
        this.bodytext.setString('recruitment-reject')
    }

    onYes() {
        this.no_btn.visible = false
        this.no_txt.visible = false
        this.yes_btn.visible = false
        this.yes_txt.visible = false
        this.addphone_btn.visible = true
        this.addphone_txt.visible = true
        this.bodytext.setString(`recruitment-accepted,${this.shell.client.penguin.username}`)
    }

    addPhone() {
        this.addphone_btn.visible = false
        this.addphone_txt.visible = false
        this.ok_btn.visible = true
        this.ok_txt.visible = true
        this.bodytext.setString('recruitment-accept')
        this.phone.play('recruitment-phone')
        this.pendingChanges = true
        this.phone.once('animationcomplete', () => {
            this.interface.main.phone_button.visible = true
            this.shell.client.penguin.epfStatus = 1
            this.airtower.sendXt('epf#j')
            this.shell.room.setEpfButton()
        })
    }

    stop() {
        if (this.pendingChanges) {
            this.interface.main.phone_button.visible = true
            this.shell.client.penguin.epfStatus = 1
            this.airtower.sendXt('epf#j')
            this.shell.room.setEpfButton()
        }
        this.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
