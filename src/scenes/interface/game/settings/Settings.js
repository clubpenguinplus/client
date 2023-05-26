import BaseContainer from '@scenes/base/BaseContainer'

import {LocalisedString, Interactive, InputText, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class Settings extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block
        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Text} */
        this.age
        /** @type {Phaser.GameObjects.Text} */
        this.server
        /** @type {Phaser.GameObjects.Text} */
        this.settings
        /** @type {Phaser.GameObjects.Image} */
        this.white_x
        /** @type {Phaser.GameObjects.Text} */
        this.vq_header
        /** @type {Phaser.GameObjects.Image} */
        this.vq_switch1
        /** @type {Phaser.GameObjects.Image} */
        this.vq_switch2
        /** @type {Phaser.GameObjects.Image} */
        this.vq_switch3
        /** @type {Phaser.GameObjects.Container} */
        this.vq_switcher
        /** @type {Phaser.GameObjects.Image} */
        this.vq_div1
        /** @type {Phaser.GameObjects.Image} */
        this.vq_div2
        /** @type {Phaser.GameObjects.Text} */
        this.vq_text1
        /** @type {Phaser.GameObjects.Text} */
        this.vq_text2
        /** @type {Phaser.GameObjects.Text} */
        this.vq_text3
        /** @type {Phaser.GameObjects.Text} */
        this.mv_header
        /** @type {Phaser.GameObjects.Image} */
        this.mv_slilder
        /** @type {Phaser.GameObjects.Image} */
        this.mv_mute
        /** @type {Phaser.GameObjects.Image} */
        this.mv_loud
        /** @type {Phaser.GameObjects.Image} */
        this.mv_ball
        /** @type {Phaser.GameObjects.Text} */
        this.sv_header
        /** @type {Phaser.GameObjects.Image} */
        this.sv_slilder
        /** @type {Phaser.GameObjects.Image} */
        this.sv_mute
        /** @type {Phaser.GameObjects.Image} */
        this.sv_loud
        /** @type {Phaser.GameObjects.Image} */
        this.sv_ball
        /** @type {Phaser.GameObjects.Image} */
        this.cf_switch1
        /** @type {Phaser.GameObjects.Image} */
        this.cf_switch2
        /** @type {Phaser.GameObjects.Image} */
        this.cf_switch3
        /** @type {Phaser.GameObjects.Container} */
        this.cf_switcher
        /** @type {Phaser.GameObjects.Image} */
        this.cf_div1
        /** @type {Phaser.GameObjects.Image} */
        this.cf_div2
        /** @type {Phaser.GameObjects.Text} */
        this.cf_header
        /** @type {Phaser.GameObjects.Text} */
        this.cf_text1
        /** @type {Phaser.GameObjects.Text} */
        this.cf_text2
        /** @type {Phaser.GameObjects.Text} */
        this.cf_text3
        /** @type {Phaser.GameObjects.Image} */
        this.h_switch1
        /** @type {Phaser.GameObjects.Image} */
        this.h_switch3
        /** @type {Phaser.GameObjects.Image} */
        this.h_switch2
        /** @type {Phaser.GameObjects.Text} */
        this.h_text3
        /** @type {Phaser.GameObjects.Text} */
        this.h_text2
        /** @type {Phaser.GameObjects.Text} */
        this.h_text1
        /** @type {Phaser.GameObjects.Text} */
        this.h_header
        /** @type {NinePatchContainer} */
        this.aid_bg
        /** @type {Phaser.GameObjects.Text} */
        this.aid_header
        /** @type {NinePatchContainer} */
        this.uname_bg
        /** @type {Phaser.GameObjects.Text} */
        this.uname_header
        /** @type {NinePatchContainer} */
        this.em_bg
        /** @type {Phaser.GameObjects.Text} */
        this.em_header
        /** @type {Phaser.GameObjects.Text} */
        this.cp_text
        /** @type {Phaser.GameObjects.Rectangle} */
        this.cp_button
        /** @type {Phaser.GameObjects.Text} */
        this.aid_text
        /** @type {Phaser.GameObjects.Text} */
        this.uname_text
        /** @type {Phaser.GameObjects.Text} */
        this.em_text
        /** @type {Phaser.GameObjects.Text} */
        this.mfa_header
        /** @type {Phaser.GameObjects.Image} */
        this.mfa_switch2
        /** @type {Phaser.GameObjects.Image} */
        this.mfa_switch1
        /** @type {Phaser.GameObjects.Container} */
        this.mfa_switcher
        /** @type {Phaser.GameObjects.Text} */
        this.mfa_text
        /** @type {Phaser.GameObjects.Text} */
        this.mfa_text1
        /** @type {Phaser.GameObjects.Text} */
        this.uage_header
        /** @type {NinePatchContainer} */
        this.uage_bg
        /** @type {Phaser.GameObjects.Text} */
        this.uage_text
        /** @type {Phaser.GameObjects.Text} */
        this.pc_header
        /** @type {Phaser.GameObjects.Text} */
        this.in_header
        /** @type {Phaser.GameObjects.Image} */
        this.in_switch1
        /** @type {Phaser.GameObjects.Image} */
        this.in_switch2
        /** @type {Phaser.GameObjects.Container} */
        this.in_switcher
        /** @type {Phaser.GameObjects.Text} */
        this.in_text1
        /** @type {Phaser.GameObjects.Text} */
        this.in_text2
        /** @type {Phaser.GameObjects.Text} */
        this.plimit_header
        /** @type {NinePatchContainer} */
        this.plimit_bg
        /** @type {Phaser.GameObjects.Text} */
        this.plimit_text
        /** @type {Phaser.GameObjects.Rectangle} */
        this.pchange_block
        /** @type {NinePatchContainer} */
        this.pchange_bg
        /** @type {NinePatchContainer} */
        this.pchange_cur_bg
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_cur_text
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_cur_header
        /** @type {NinePatchContainer} */
        this.pchange_new_bg
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_new_text
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_new_header
        /** @type {NinePatchContainer} */
        this.pchange_confirm_bg
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_confirm_text
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_confirm_header
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_header
        /** @type {Phaser.GameObjects.Image} */
        this.pchange_submit
        /** @type {Phaser.GameObjects.Text} */
        this.pchange_submit_text
        /** @type {Phaser.GameObjects.Image} */
        this.pchange_quit
        /** @type {Phaser.GameObjects.Container} */
        this.pchange

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3
        this.add(block)

        // bg
        const bg = scene.add.ninePatchContainer(0, 0, 1200, 840, 'banning', 'banned_bg')
        bg.marginLeft = 50
        bg.marginTop = 50
        bg.marginRight = 50
        bg.marginBottom = 50
        this.add(bg)

        // age
        const age = scene.add.text(-320, -260, '', {})
        age.setOrigin(0.5, 0.5)
        age.text = 'Your penguin is 365 days old'
        age.setStyle({align: 'center', color: '#642602ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        this.add(age)

        // server
        const server = scene.add.text(-320, -295, '', {})
        server.setOrigin(0.5, 0.5)
        server.text = "You're on Blizzard"
        server.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(server)

        // settings
        const settings = scene.add.text(0, -352, '', {})
        settings.setOrigin(0.5, 0.5)
        settings.text = 'SETTINGS'
        settings.setStyle({align: 'center', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold', stroke: '#642602ff', strokeThickness: 8})
        this.add(settings)

        // white_x
        const white_x = scene.add.image(571, -395, 'main', 'white-x')
        this.add(white_x)

        // vq_header
        const vq_header = scene.add.text(-320, -197, '', {})
        vq_header.setOrigin(0.5, 0.5)
        vq_header.text = 'Visual Quality'
        vq_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(vq_header)

        // vq_switcher
        const vq_switcher = scene.add.container(-449, -142)
        this.add(vq_switcher)

        // vq_switch1
        const vq_switch1 = scene.add.image(0, 0, 'main', 'switcher-unselected')
        vq_switcher.add(vq_switch1)

        // vq_switch2
        const vq_switch2 = scene.add.image(130, 0, 'main', 'switcher-borderless')
        vq_switcher.add(vq_switch2)

        // vq_switch3
        const vq_switch3 = scene.add.image(260, 0, 'main', 'switcher-selected')
        vq_switcher.add(vq_switch3)

        // vq_div1
        const vq_div1 = scene.add.image(-384, -142, 'main', 'switcher-divider')
        this.add(vq_div1)

        // vq_div2
        const vq_div2 = scene.add.image(-254, -141, 'main', 'switcher-divider')
        vq_div2.visible = false
        this.add(vq_div2)

        // vq_text1
        const vq_text1 = scene.add.text(-449, -142, '', {})
        vq_text1.setOrigin(0.5, 0.5)
        vq_text1.text = 'Low'
        vq_text1.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '26px', stroke: '#ffffffff'})
        this.add(vq_text1)

        // vq_text2
        const vq_text2 = scene.add.text(-319, -142, '', {})
        vq_text2.setOrigin(0.5, 0.5)
        vq_text2.text = 'Medium'
        vq_text2.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '26px', stroke: '#ffffffff'})
        this.add(vq_text2)

        // vq_text3
        const vq_text3 = scene.add.text(-189, -142, '', {})
        vq_text3.setOrigin(0.5, 0.5)
        vq_text3.text = 'High'
        vq_text3.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '26px', stroke: '#ffffffff'})
        this.add(vq_text3)

        // mv_header
        const mv_header = scene.add.text(-320, -74, '', {})
        mv_header.setOrigin(0.5, 0.5)
        mv_header.text = 'Music Volume'
        mv_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(mv_header)

        // mv_slilder
        const mv_slilder = scene.add.image(-320, -31, 'main', 'slider')
        this.add(mv_slilder)

        // mv_mute
        const mv_mute = scene.add.image(-480, -31, 'main', 'volume-down')
        this.add(mv_mute)

        // mv_loud
        const mv_loud = scene.add.image(-160, -31, 'main', 'volume-up')
        this.add(mv_loud)

        // mv_ball
        const mv_ball = scene.add.image(-246, -31.5, 'main', 'snowball-icon')
        this.add(mv_ball)

        // sv_header
        const sv_header = scene.add.text(-320, 36, '', {})
        sv_header.setOrigin(0.5, 0.5)
        sv_header.text = 'SFX Volume'
        sv_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(sv_header)

        // sv_slilder
        const sv_slilder = scene.add.image(-320, 79, 'main', 'slider')
        this.add(sv_slilder)

        // sv_mute
        const sv_mute = scene.add.image(-480, 79, 'main', 'volume-down')
        this.add(sv_mute)

        // sv_loud
        const sv_loud = scene.add.image(-160, 79, 'main', 'volume-up')
        this.add(sv_loud)

        // sv_ball
        const sv_ball = scene.add.image(-246, 79.5, 'main', 'snowball-icon')
        this.add(sv_ball)

        // cf_switcher
        const cf_switcher = scene.add.container(-449, 202)
        this.add(cf_switcher)

        // cf_switch1
        const cf_switch1 = scene.add.image(0, 0, 'main', 'switcher-unselected')
        cf_switcher.add(cf_switch1)

        // cf_switch2
        const cf_switch2 = scene.add.image(130, 0, 'main', 'switcher-borderless')
        cf_switcher.add(cf_switch2)

        // cf_switch3
        const cf_switch3 = scene.add.image(260, 0, 'main', 'switcher-selected')
        cf_switcher.add(cf_switch3)

        // cf_div1
        const cf_div1 = scene.add.image(-254, 203, 'main', 'switcher-divider')
        cf_div1.visible = false
        this.add(cf_div1)

        // cf_div2
        const cf_div2 = scene.add.image(-384, 202, 'main', 'switcher-divider')
        this.add(cf_div2)

        // cf_header
        const cf_header = scene.add.text(-320, 147, '', {})
        cf_header.setOrigin(0.5, 0.5)
        cf_header.text = 'Chat Filter Tier'
        cf_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(cf_header)

        // cf_text1
        const cf_text1 = scene.add.text(-449, 203, '', {})
        cf_text1.setOrigin(0.5, 0.5)
        cf_text1.text = 'Lenient'
        cf_text1.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(cf_text1)

        // cf_text2
        const cf_text2 = scene.add.text(-319, 203, '', {})
        cf_text2.setOrigin(0.5, 0.5)
        cf_text2.text = 'Standard'
        cf_text2.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(cf_text2)

        // cf_text3
        const cf_text3 = scene.add.text(-189, 203, '', {})
        cf_text3.setOrigin(0.5, 0.5)
        cf_text3.text = 'Ultimate'
        cf_text3.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(cf_text3)

        // h_switch1
        const h_switch1 = scene.add.image(-465, 328, 'main', 'switcher-unselected')
        this.add(h_switch1)

        // h_switch3
        const h_switch3 = scene.add.image(-175, 328, 'main', 'switcher-unselected')
        this.add(h_switch3)

        // h_switch2
        const h_switch2 = scene.add.image(-320, 328, 'main', 'switcher-unselected')
        this.add(h_switch2)

        // h_text3
        const h_text3 = scene.add.text(-175, 329, '', {})
        h_text3.setOrigin(0.5, 0.5)
        h_text3.text = 'Names'
        h_text3.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(h_text3)

        // h_text2
        const h_text2 = scene.add.text(-320, 329, '', {})
        h_text2.setOrigin(0.5, 0.5)
        h_text2.text = 'Others'
        h_text2.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(h_text2)

        // h_text1
        const h_text1 = scene.add.text(-465, 329, '', {})
        h_text1.setOrigin(0.5, 0.5)
        h_text1.text = 'Interface'
        h_text1.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(h_text1)

        // h_header
        const h_header = scene.add.text(-320, 273, '', {})
        h_header.setOrigin(0.5, 0.5)
        h_header.text = 'Hide'
        h_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(h_header)

        // aid_bg
        const aid_bg = scene.add.ninePatchContainer(405, -280, 300, 60, 'banning', 'text_bg')
        this.add(aid_bg)

        // aid_header
        const aid_header = scene.add.text(95, -280, '', {})
        aid_header.setOrigin(0.5, 0.5)
        aid_header.text = 'Account ID:'
        aid_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(aid_header)

        // uname_bg
        const uname_bg = scene.add.ninePatchContainer(405, -215, 300, 60, 'banning', 'text_bg')
        this.add(uname_bg)

        // uname_header
        const uname_header = scene.add.text(95, -215, '', {})
        uname_header.setOrigin(0.5, 0.5)
        uname_header.text = 'Username:'
        uname_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(uname_header)

        // em_bg
        const em_bg = scene.add.ninePatchContainer(405, -150, 300, 60, 'banning', 'text_bg')
        this.add(em_bg)

        // em_header
        const em_header = scene.add.text(95, -150, '', {})
        em_header.setOrigin(0.5, 0.5)
        em_header.text = 'Email:'
        em_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(em_header)

        // cp_text
        const cp_text = scene.add.text(291, -92, '', {})
        cp_text.setOrigin(0.5, 0.5)
        cp_text.text = 'Change Password'
        cp_text.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(cp_text)

        // cp_button
        const cp_button = scene.add.rectangle(291.7286376953125, -90.0626220703125, 500, 50)
        this.add(cp_button)

        // aid_text
        const aid_text = scene.add.text(405, -280, '', {})
        aid_text.setOrigin(0.5, 0.5)
        aid_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '34px'})
        this.add(aid_text)

        // uname_text
        const uname_text = scene.add.text(405, -215, '', {})
        uname_text.setOrigin(0.5, 0.5)
        uname_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '34px'})
        this.add(uname_text)

        // em_text
        const em_text = scene.add.text(405, -150, '', {})
        em_text.setOrigin(0.5, 0.5)
        em_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        this.add(em_text)

        // mfa_header
        const mfa_header = scene.add.text(95, 23, '', {})
        mfa_header.setOrigin(0.5, 0.5)
        mfa_header.text = '2FA:'
        mfa_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(mfa_header)

        // mfa_switcher
        const mfa_switcher = scene.add.container(406, 21)
        this.add(mfa_switcher)

        // mfa_switch2
        const mfa_switch2 = scene.add.image(65, 0, 'main', 'switcher-unselected')
        mfa_switcher.add(mfa_switch2)

        // mfa_switch1
        const mfa_switch1 = scene.add.image(-65, 0, 'main', 'switcher-selected')
        mfa_switcher.add(mfa_switch1)

        // mfa_text
        const mfa_text = scene.add.text(471, 21, '', {})
        mfa_text.setOrigin(0.5, 0.5)
        mfa_text.text = 'Enabled'
        mfa_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(mfa_text)

        // mfa_text1
        const mfa_text1 = scene.add.text(341, 21, '', {})
        mfa_text1.setOrigin(0.5, 0.5)
        mfa_text1.text = 'Disabled'
        mfa_text1.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(mfa_text1)

        // uage_header
        const uage_header = scene.add.text(95, 94, '', {})
        uage_header.setOrigin(0.5, 0.5)
        uage_header.text = 'Age:'
        uage_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(uage_header)

        // uage_bg
        const uage_bg = scene.add.ninePatchContainer(405, 94, 300, 60, 'banning', 'text_bg')
        this.add(uage_bg)

        // uage_text
        const uage_text = scene.add.text(405, 94, '', {})
        uage_text.setOrigin(0.5, 0.5)
        uage_text.text = 'Under 16'
        uage_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        this.add(uage_text)

        // pc_header
        const pc_header = scene.add.text(291, 193, '', {})
        pc_header.setOrigin(0.5, 0.5)
        pc_header.text = 'Parental Controls'
        pc_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        this.add(pc_header)

        // in_header
        const in_header = scene.add.text(95, 334, '', {})
        in_header.setOrigin(0.5, 0.5)
        in_header.text = 'Infraction Notifications:'
        in_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#642602ff', strokeThickness: 6})
        in_header.setWordWrapWidth(250)
        this.add(in_header)

        // in_switcher
        const in_switcher = scene.add.container(341, 332)
        this.add(in_switcher)

        // in_switch1
        const in_switch1 = scene.add.image(0, 0, 'main', 'switcher-unselected')
        in_switcher.add(in_switch1)

        // in_switch2
        const in_switch2 = scene.add.image(130, 0, 'main', 'switcher-selected')
        in_switcher.add(in_switch2)

        // in_text1
        const in_text1 = scene.add.text(341, 332, '', {})
        in_text1.setOrigin(0.5, 0.5)
        in_text1.text = 'Disabled'
        in_text1.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(in_text1)

        // in_text2
        const in_text2 = scene.add.text(471, 332, '', {})
        in_text2.setOrigin(0.5, 0.5)
        in_text2.text = 'Enabled'
        in_text2.setStyle({align: 'center', color: '#642602ff', fixedWidth: 120, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#ffffffff'})
        this.add(in_text2)

        // plimit_header
        const plimit_header = scene.add.text(95, 254, '', {})
        plimit_header.setOrigin(0.5, 0.5)
        plimit_header.text = 'Playtime Limit:'
        plimit_header.setStyle({align: 'right', color: '#ffffffff', fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '24px', stroke: '#642602ff', strokeThickness: 6})
        plimit_header.setWordWrapWidth(250)
        this.add(plimit_header)

        // plimit_bg
        const plimit_bg = scene.add.ninePatchContainer(405, 254, 300, 60, 'banning', 'text_bg')
        this.add(plimit_bg)

        // plimit_text
        const plimit_text = scene.add.text(405, 254, '', {})
        plimit_text.setOrigin(0.5, 0.5)
        plimit_text.text = '2 hours'
        plimit_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        this.add(plimit_text)

        // pchange
        const pchange = scene.add.container(0, 0)
        pchange.visible = false
        this.add(pchange)

        // pchange_block
        const pchange_block = scene.add.rectangle(0, 0, 1520, 960)
        pchange_block.isFilled = true
        pchange_block.fillColor = 0
        pchange_block.fillAlpha = 0.5
        pchange.add(pchange_block)

        // pchange_bg
        const pchange_bg = scene.add.ninePatchContainer(0, -20, 500, 650, 'banning', 'banned_bg')
        pchange_bg.marginLeft = 50
        pchange_bg.marginTop = 50
        pchange_bg.marginRight = 50
        pchange_bg.marginBottom = 50
        pchange.add(pchange_bg)

        // pchange_cur_bg
        const pchange_cur_bg = scene.add.ninePatchContainer(0, -135, 370, 60, 'banning', 'text_bg')
        pchange.add(pchange_cur_bg)

        // pchange_cur_text
        const pchange_cur_text = scene.add.text(0, -135, '', {})
        pchange_cur_text.setOrigin(0.5, 0.5)
        pchange_cur_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 350, fixedHeight: 34, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        pchange.add(pchange_cur_text)

        // pchange_cur_header
        const pchange_cur_header = scene.add.text(0, -196, '', {})
        pchange_cur_header.setOrigin(0.5, 0.5)
        pchange_cur_header.text = 'Current Password:'
        pchange_cur_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        pchange.add(pchange_cur_header)

        // pchange_new_bg
        const pchange_new_bg = scene.add.ninePatchContainer(0, -5, 370, 60, 'banning', 'text_bg')
        pchange.add(pchange_new_bg)

        // pchange_new_text
        const pchange_new_text = scene.add.text(0, -5, '', {})
        pchange_new_text.setOrigin(0.5, 0.5)
        pchange_new_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 350, fixedHeight: 34, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        pchange.add(pchange_new_text)

        // pchange_new_header
        const pchange_new_header = scene.add.text(0, -66, '', {})
        pchange_new_header.setOrigin(0.5, 0.5)
        pchange_new_header.text = 'New Password:'
        pchange_new_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        pchange.add(pchange_new_header)

        // pchange_confirm_bg
        const pchange_confirm_bg = scene.add.ninePatchContainer(0, 135, 370, 60, 'banning', 'text_bg')
        pchange.add(pchange_confirm_bg)

        // pchange_confirm_text
        const pchange_confirm_text = scene.add.text(0, 135, '', {})
        pchange_confirm_text.setOrigin(0.5, 0.5)
        pchange_confirm_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 350, fixedHeight: 34, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        pchange.add(pchange_confirm_text)

        // pchange_confirm_header
        const pchange_confirm_header = scene.add.text(0, 74, '', {})
        pchange_confirm_header.setOrigin(0.5, 0.5)
        pchange_confirm_header.text = 'Confirm New Password:'
        pchange_confirm_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '36px', stroke: '#642602ff', strokeThickness: 6})
        pchange.add(pchange_confirm_header)

        // pchange_header
        const pchange_header = scene.add.text(0, -261, '', {})
        pchange_header.setOrigin(0.5, 0.5)
        pchange_header.text = 'CHANGE PASSWORD'
        pchange_header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold', stroke: '#642602ff', strokeThickness: 8})
        pchange.add(pchange_header)

        // pchange_submit
        const pchange_submit = scene.add.image(0, 220, 'main', 'switcher-unselected')
        pchange.add(pchange_submit)

        // pchange_submit_text
        const pchange_submit_text = scene.add.text(0, 220, '', {})
        pchange_submit_text.setOrigin(0.5, 0.5)
        pchange_submit_text.text = 'Change'
        pchange_submit_text.setStyle({align: 'center', color: '#642602ff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '26px'})
        pchange.add(pchange_submit_text)

        // pchange_quit
        const pchange_quit = scene.add.image(218, -320, 'main', 'white-x')
        pchange.add(pchange_quit)

        // block (components)
        new Interactive(block)

        // settings (components)
        const settingsLocalisedString = new LocalisedString(settings)
        settingsLocalisedString.id = 'settings-title'

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => {
            this.visible = false
        }

        // vq_header (components)
        const vq_headerLocalisedString = new LocalisedString(vq_header)
        vq_headerLocalisedString.id = 'settings-quality'

        // vq_switch1 (components)
        const vq_switch1SimpleButton = new SimpleButton(vq_switch1)
        vq_switch1SimpleButton.callback = () => this.setLowQuality()

        // vq_switch2 (components)
        const vq_switch2SimpleButton = new SimpleButton(vq_switch2)
        vq_switch2SimpleButton.callback = () => this.setMedQuality()

        // vq_switch3 (components)
        const vq_switch3SimpleButton = new SimpleButton(vq_switch3)
        vq_switch3SimpleButton.callback = () => this.setHighQuality()

        // vq_text1 (components)
        const vq_text1LocalisedString = new LocalisedString(vq_text1)
        vq_text1LocalisedString.id = 'settings-qlow'

        // vq_text2 (components)
        const vq_text2LocalisedString = new LocalisedString(vq_text2)
        vq_text2LocalisedString.id = 'settings-qmed'

        // vq_text3 (components)
        const vq_text3LocalisedString = new LocalisedString(vq_text3)
        vq_text3LocalisedString.id = 'settings-qhigh'

        // mv_header (components)
        const mv_headerLocalisedString = new LocalisedString(mv_header)
        mv_headerLocalisedString.id = 'settings-mvolume'

        // sv_header (components)
        const sv_headerLocalisedString = new LocalisedString(sv_header)
        sv_headerLocalisedString.id = 'settings-svolume'

        // cf_switch1 (components)
        const cf_switch1SimpleButton = new SimpleButton(cf_switch1)
        cf_switch1SimpleButton.callback = () => this.setFilterLenient()

        // cf_switch2 (components)
        const cf_switch2SimpleButton = new SimpleButton(cf_switch2)
        cf_switch2SimpleButton.callback = () => this.setFilterStandard()

        // cf_switch3 (components)
        const cf_switch3SimpleButton = new SimpleButton(cf_switch3)
        cf_switch3SimpleButton.callback = () => this.setFilterUltimate()

        // cf_header (components)
        const cf_headerLocalisedString = new LocalisedString(cf_header)
        cf_headerLocalisedString.id = 'settings-filtertier'

        // cf_text1 (components)
        const cf_text1LocalisedString = new LocalisedString(cf_text1)
        cf_text1LocalisedString.id = 'settings-ft-low'

        // cf_text2 (components)
        const cf_text2LocalisedString = new LocalisedString(cf_text2)
        cf_text2LocalisedString.id = 'settings-ft-med'

        // cf_text3 (components)
        const cf_text3LocalisedString = new LocalisedString(cf_text3)
        cf_text3LocalisedString.id = 'settings-ft-high'

        // h_switch1 (components)
        const h_switch1SimpleButton = new SimpleButton(h_switch1)
        h_switch1SimpleButton.callback = () => this.hideInterface()

        // h_switch3 (components)
        const h_switch3SimpleButton = new SimpleButton(h_switch3)
        h_switch3SimpleButton.callback = () => this.hideNames()

        // h_switch2 (components)
        const h_switch2SimpleButton = new SimpleButton(h_switch2)
        h_switch2SimpleButton.callback = () => this.hideOthers()

        // h_text3 (components)
        const h_text3LocalisedString = new LocalisedString(h_text3)
        h_text3LocalisedString.id = 'settings-hnametags'

        // h_text2 (components)
        const h_text2LocalisedString = new LocalisedString(h_text2)
        h_text2LocalisedString.id = 'settings-hpenguins'

        // h_text1 (components)
        const h_text1LocalisedString = new LocalisedString(h_text1)
        h_text1LocalisedString.id = 'settings-hinterface'

        // h_header (components)
        const h_headerLocalisedString = new LocalisedString(h_header)
        h_headerLocalisedString.id = 'settings-hide'

        // aid_header (components)
        const aid_headerLocalisedString = new LocalisedString(aid_header)
        aid_headerLocalisedString.id = 'settings-accountid'

        // uname_header (components)
        const uname_headerLocalisedString = new LocalisedString(uname_header)
        uname_headerLocalisedString.id = 'settings-username'

        // em_header (components)
        const em_headerLocalisedString = new LocalisedString(em_header)
        em_headerLocalisedString.id = 'settings-email'

        // cp_text (components)
        const cp_textLocalisedString = new LocalisedString(cp_text)
        cp_textLocalisedString.id = 'settings-cpassword'

        // cp_button (components)
        const cp_buttonSimpleButton = new SimpleButton(cp_button)
        cp_buttonSimpleButton.callback = () => this.showPChange()

        // mfa_header (components)
        const mfa_headerLocalisedString = new LocalisedString(mfa_header)
        mfa_headerLocalisedString.id = 'settings-2fa'

        // mfa_switch2 (components)
        const mfa_switch2SimpleButton = new SimpleButton(mfa_switch2)
        mfa_switch2SimpleButton.callback = () => this.enable2FA()

        // mfa_switch1 (components)
        const mfa_switch1SimpleButton = new SimpleButton(mfa_switch1)
        mfa_switch1SimpleButton.callback = () => this.disable2FA()

        // mfa_text (components)
        const mfa_textLocalisedString = new LocalisedString(mfa_text)
        mfa_textLocalisedString.id = 'settings-enabled'

        // mfa_text1 (components)
        const mfa_text1LocalisedString = new LocalisedString(mfa_text1)
        mfa_text1LocalisedString.id = 'settings-disabled'

        // uage_header (components)
        const uage_headerLocalisedString = new LocalisedString(uage_header)
        uage_headerLocalisedString.id = 'settings-age'

        // pc_header (components)
        const pc_headerLocalisedString = new LocalisedString(pc_header)
        pc_headerLocalisedString.id = 'settings-pcontrol'

        // in_header (components)
        const in_headerLocalisedString = new LocalisedString(in_header)
        in_headerLocalisedString.id = 'settings-ifnotifs'

        // in_switch1 (components)
        const in_switch1SimpleButton = new SimpleButton(in_switch1)
        in_switch1SimpleButton.callback = () => this.disableInfractionNotifs()

        // in_switch2 (components)
        const in_switch2SimpleButton = new SimpleButton(in_switch2)
        in_switch2SimpleButton.callback = () => this.enableInfractionNotifs()

        // in_text1 (components)
        const in_text1LocalisedString = new LocalisedString(in_text1)
        in_text1LocalisedString.id = 'settings-disabled'

        // in_text2 (components)
        const in_text2LocalisedString = new LocalisedString(in_text2)
        in_text2LocalisedString.id = 'settings-enabled'

        // plimit_header (components)
        const plimit_headerLocalisedString = new LocalisedString(plimit_header)
        plimit_headerLocalisedString.id = 'settings-playtimelimit'

        // pchange_block (components)
        new Interactive(pchange_block)

        // pchange_cur_text (components)
        const pchange_cur_textInputText = new InputText(pchange_cur_text)
        pchange_cur_textInputText.ispassword = true
        pchange_cur_textInputText.charlimit = 48
        pchange_cur_textInputText.extends = false

        // pchange_cur_header (components)
        const pchange_cur_headerLocalisedString = new LocalisedString(pchange_cur_header)
        pchange_cur_headerLocalisedString.id = 'settings-pchange-oldpass'

        // pchange_new_text (components)
        const pchange_new_textInputText = new InputText(pchange_new_text)
        pchange_new_textInputText.ispassword = true
        pchange_new_textInputText.charlimit = 48
        pchange_new_textInputText.extends = false

        // pchange_new_header (components)
        const pchange_new_headerLocalisedString = new LocalisedString(pchange_new_header)
        pchange_new_headerLocalisedString.id = 'settings-pchange-newpass'

        // pchange_confirm_text (components)
        const pchange_confirm_textInputText = new InputText(pchange_confirm_text)
        pchange_confirm_textInputText.ispassword = true
        pchange_confirm_textInputText.charlimit = 48
        pchange_confirm_textInputText.extends = false

        // pchange_confirm_header (components)
        const pchange_confirm_headerLocalisedString = new LocalisedString(pchange_confirm_header)
        pchange_confirm_headerLocalisedString.id = 'settings-pchange-confirm'

        // pchange_header (components)
        const pchange_headerLocalisedString = new LocalisedString(pchange_header)
        pchange_headerLocalisedString.id = 'settings-pchange-title'

        // pchange_submit (components)
        const pchange_submitSimpleButton = new SimpleButton(pchange_submit)
        pchange_submitSimpleButton.callback = () => this.changePasswordSubmit()

        // pchange_submit_text (components)
        const pchange_submit_textLocalisedString = new LocalisedString(pchange_submit_text)
        pchange_submit_textLocalisedString.id = 'settings-pchange-submit'

        // pchange_quit (components)
        const pchange_quitSimpleButton = new SimpleButton(pchange_quit)
        pchange_quitSimpleButton.callback = () => this.cancelPChange()

        this.block = block
        this.bg = bg
        this.age = age
        this.server = server
        this.settings = settings
        this.white_x = white_x
        this.vq_header = vq_header
        this.vq_switch1 = vq_switch1
        this.vq_switch2 = vq_switch2
        this.vq_switch3 = vq_switch3
        this.vq_switcher = vq_switcher
        this.vq_div1 = vq_div1
        this.vq_div2 = vq_div2
        this.vq_text1 = vq_text1
        this.vq_text2 = vq_text2
        this.vq_text3 = vq_text3
        this.mv_header = mv_header
        this.mv_slilder = mv_slilder
        this.mv_mute = mv_mute
        this.mv_loud = mv_loud
        this.mv_ball = mv_ball
        this.sv_header = sv_header
        this.sv_slilder = sv_slilder
        this.sv_mute = sv_mute
        this.sv_loud = sv_loud
        this.sv_ball = sv_ball
        this.cf_switch1 = cf_switch1
        this.cf_switch2 = cf_switch2
        this.cf_switch3 = cf_switch3
        this.cf_switcher = cf_switcher
        this.cf_div1 = cf_div1
        this.cf_div2 = cf_div2
        this.cf_header = cf_header
        this.cf_text1 = cf_text1
        this.cf_text2 = cf_text2
        this.cf_text3 = cf_text3
        this.h_switch1 = h_switch1
        this.h_switch3 = h_switch3
        this.h_switch2 = h_switch2
        this.h_text3 = h_text3
        this.h_text2 = h_text2
        this.h_text1 = h_text1
        this.h_header = h_header
        this.aid_bg = aid_bg
        this.aid_header = aid_header
        this.uname_bg = uname_bg
        this.uname_header = uname_header
        this.em_bg = em_bg
        this.em_header = em_header
        this.cp_text = cp_text
        this.cp_button = cp_button
        this.aid_text = aid_text
        this.uname_text = uname_text
        this.em_text = em_text
        this.mfa_header = mfa_header
        this.mfa_switch2 = mfa_switch2
        this.mfa_switch1 = mfa_switch1
        this.mfa_switcher = mfa_switcher
        this.mfa_text = mfa_text
        this.mfa_text1 = mfa_text1
        this.uage_header = uage_header
        this.uage_bg = uage_bg
        this.uage_text = uage_text
        this.pc_header = pc_header
        this.in_header = in_header
        this.in_switch1 = in_switch1
        this.in_switch2 = in_switch2
        this.in_switcher = in_switcher
        this.in_text1 = in_text1
        this.in_text2 = in_text2
        this.plimit_header = plimit_header
        this.plimit_bg = plimit_bg
        this.plimit_text = plimit_text
        this.pchange_block = pchange_block
        this.pchange_bg = pchange_bg
        this.pchange_cur_bg = pchange_cur_bg
        this.pchange_cur_text = pchange_cur_text
        this.pchange_cur_header = pchange_cur_header
        this.pchange_new_bg = pchange_new_bg
        this.pchange_new_text = pchange_new_text
        this.pchange_new_header = pchange_new_header
        this.pchange_confirm_bg = pchange_confirm_bg
        this.pchange_confirm_text = pchange_confirm_text
        this.pchange_confirm_header = pchange_confirm_header
        this.pchange_header = pchange_header
        this.pchange_submit = pchange_submit
        this.pchange_submit_text = pchange_submit_text
        this.pchange_quit = pchange_quit
        this.pchange = pchange

        /* START-USER-CTR-CODE */
        this.maxSliderX = -200
        this.minSliderX = -440
        this.mv_ball_y = mv_ball.y
        this.sv_ball_y = sv_ball.y
        this.mv_ball.setInteractive({draggable: true, cursor: 'pointer'})
        this.sv_ball.setInteractive({draggable: true, cursor: 'pointer'})
        this.mv_ball.on('drag', (pointer, dragX, dragY) => this.onMvMove(dragX))
        this.sv_ball.on('drag', (pointer, dragX, dragY) => this.onSvMove(dragX))

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    show() {
        this.data = {}
        this.airtower.events.once('gsi', (args) => {
            this.data.penguinId = args[0]
            this.aid_text.text = this.data.penguinId

            this.data.username = args[1]
            this.uname_text.text = this.data.username

            this.data.email = args[2]
            this.em_text.text = this.data.email

            this.data.over13 = args[3] == '1'
            this.uage_text.text = this.data.over13 ? this.crumbs.getString('settings-13over') : this.crumbs.getString('settings-13under')

            this.data.forceChatTier = parseInt(args[4])
            if (this.shell.settings.cf < this.data.forceChatTier) this.shell.settings.cf = this.data.forceChatTier

            this.data.playtimeLimit = parseInt(args[5])
            this.plimit_text.text = this.data.playtimeLimit > 0 ? `${this.data.playtimeLimit} ${this.crumbs.getString('minutes')}` : this.crumbs.getString('settings-unlimited')

            this.data.infractionNotifications = args[6] == '1'
            if (this.data.infractionNotifications) {
                this.enableInfractionNotifs()
            } else {
                this.disableInfractionNotifs()
            }

            this.data.mfa = args[7] == '1'
            if (this.data.mfa) {
                this.enable2FA()
            } else {
                this.disable2FA()
            }
        })
        this.airtower.sendXt('sett#getsettings')

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.shell.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        this.server.text = this.crumbs.getString(`settings-onserver,${this.airtower.worldName}`)
        this.age.text = this.crumbs.getString(`settings-daysold,${daysDiff}`)

        switch (this.shell.settings.vq) {
            case 1:
                this.setLowQuality()
                break
            case 2:
                this.setMedQuality()
                break
            default:
                this.setHighQuality()
                break
        }

        switch (this.shell.settings.cf) {
            case 1:
                this.setFilterLenient()
                break
            case 2:
                this.setFilterStandard()
                break
            default:
                this.setFilterUltimate()
                break
        }

        this.h_switch1.setFrame(this.shell.settings.hi ? 'switcher-selected' : 'switcher-unselected')
        this.h_switch2.setFrame(this.shell.settings.ho ? 'switcher-selected' : 'switcher-unselected')
        this.h_switch3.setFrame(this.shell.settings.hn ? 'switcher-selected' : 'switcher-unselected')
        this.visible = true

        let siderWidth = this.maxSliderX - this.minSliderX
        this.mv_ball.x = this.minSliderX + siderWidth * this.shell.settings.mv
        this.sv_ball.x = this.minSliderX + siderWidth * this.shell.settings.sv
    }

    setLowQuality() {
        if (this.shell.settings.vq != 1) {
            this.shell.settings.vq = 1
            window.currentScale = 0.4
            window.updateScaling()
        }
        this.vq_switch1.setFrame('switcher-selected')
        this.vq_switch2.setFrame('switcher-borderless')
        this.vq_switch3.setFrame('switcher-unselected')
        this.vq_div1.visible = false
        this.vq_div2.visible = true
        this.vq_switcher.bringToTop(this.vq_switch2)
        this.vq_switcher.bringToTop(this.vq_switch1)
    }

    setMedQuality() {
        if (this.shell.settings.vq != 2) {
            this.shell.settings.vq = 2
            window.currentScale = 0.7
            window.updateScaling()
        }
        this.vq_switch1.setFrame('switcher-unselected')
        this.vq_switch2.setFrame('switcher-selected')
        this.vq_switch3.setFrame('switcher-unselected')
        this.vq_div1.visible = false
        this.vq_div2.visible = false
        this.vq_switcher.bringToTop(this.vq_switch2)
    }

    setHighQuality() {
        if (this.shell.settings.vq != 3) {
            this.shell.settings.vq = 3
            window.currentScale = 1
            window.updateScaling()
        }
        this.vq_switch1.setFrame('switcher-unselected')
        this.vq_switch2.setFrame('switcher-borderless')
        this.vq_switch3.setFrame('switcher-selected')
        this.vq_div1.visible = true
        this.vq_div2.visible = false
        this.vq_switcher.bringToTop(this.vq_switch2)
        this.vq_switcher.bringToTop(this.vq_switch3)
    }

    setFilterLenient() {
        if (!this.data.over13) {
            let text = this.crumbs.getString('settings-safeguarding')
            this.interface.prompt.showError(text)
            return
        }
        if (this.data.forceChatTier > 1) {
            let text = this.crumbs.getString('settings-pcontrolblocks')
            this.interface.prompt.showError(text)
            return
        }
        if (this.shell.settings.cf == 1) {
            this.cf_switch1.setFrame('switcher-selected')
            this.cf_switch2.setFrame('switcher-borderless')
            this.cf_switch3.setFrame('switcher-unselected')
            this.cf_div2.visible = false
            this.cf_div1.visible = true
            this.cf_switcher.bringToTop(this.cf_switch2)
            this.cf_switcher.bringToTop(this.cf_switch1)
            return
        }
        let text = this.crumbs.getString('settings-filterdisclaimer')
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.shell.settings.cf = 1
            this.cf_switch1.setFrame('switcher-selected')
            this.cf_switch2.setFrame('switcher-borderless')
            this.cf_switch3.setFrame('switcher-unselected')
            this.cf_div2.visible = false
            this.cf_div1.visible = true
            this.cf_switcher.bringToTop(this.cf_switch2)
            this.cf_switcher.bringToTop(this.cf_switch1)
        })
    }

    setFilterStandard() {
        if (this.data.forceChatTier > 2) {
            let text = this.crumbs.getString('settings-pcontrolblocks')
            this.interface.prompt.showError(text)
            return
        }
        this.shell.settings.cf = 2
        this.cf_switch1.setFrame('switcher-unselected')
        this.cf_switch2.setFrame('switcher-selected')
        this.cf_switch3.setFrame('switcher-unselected')
        this.cf_div2.visible = false
        this.cf_div1.visible = false
        this.cf_switcher.bringToTop(this.cf_switch2)
    }

    setFilterUltimate() {
        this.shell.settings.cf = 3
        this.cf_switch1.setFrame('switcher-unselected')
        this.cf_switch2.setFrame('switcher-borderless')
        this.cf_switch3.setFrame('switcher-selected')
        this.cf_div2.visible = true
        this.cf_div1.visible = false
        this.cf_switcher.bringToTop(this.cf_switch2)
        this.cf_switcher.bringToTop(this.cf_switch3)
    }

    hideInterface() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            let text = this.crumbs.getString('settings-mobile')
            this.interface.prompt.showWindow(text, 'single', () => {})
            return
        }

        if (!this.shell.settings.hi) {
            let text = this.crumbs.getString('settings-hideinterface')
            this.interface.prompt.showWindow(text, 'single', () => {})
            this.interface.main.hide()
        } else {
            this.interface.main.show()
        }

        this.shell.settings.hi = !this.shell.settings.hi
        this.h_switch1.setFrame(this.shell.settings.hi ? 'switcher-selected' : 'switcher-unselected')
    }

    hideNames() {
        this.shell.settings.hn = !this.shell.settings.hn
        this.h_switch3.setFrame(this.shell.settings.hn ? 'switcher-selected' : 'switcher-unselected')
        for (let p in this.shell.room.penguins) {
            this.shell.room.penguins[p].nameTag.visible = !this.shell.settings.hn
        }
    }

    hideOthers() {
        this.shell.settings.ho = !this.shell.settings.ho
        this.h_switch2.setFrame(this.shell.settings.ho ? 'switcher-selected' : 'switcher-unselected')
        for (let p in this.shell.room.penguins) {
            this.shell.room.penguins[p].visible = !this.shell.settings.ho || this.shell.room.penguins[p].isClient
        }
    }

    onSvMove(dragX) {
        this.sv_ball.x = dragX > this.maxSliderX ? this.maxSliderX : dragX < this.minSliderX ? this.minSliderX : dragX
        let sliderWidth = this.maxSliderX - this.minSliderX
        let percent = Math.round(((this.sv_ball.x - this.minSliderX) / sliderWidth) * 100) / 100
        this.shell.musicController.setSfxVolume(percent)
    }

    onMvMove(dragX) {
        this.mv_ball_y = this.mv_ball_y
        this.mv_ball.x = dragX > this.maxSliderX ? this.maxSliderX : dragX < this.minSliderX ? this.minSliderX : dragX
        let sliderWidth = this.maxSliderX - this.minSliderX
        let percent = Math.round(((this.mv_ball.x - this.minSliderX) / sliderWidth) * 100) / 100
        this.shell.musicController.setMusicVolume(percent)
    }

    enable2FA() {
        this.mfa_switch2.setFrame('switcher-selected')
        this.mfa_switch1.setFrame('switcher-unselected')
        this.mfa_switcher.bringToTop(this.mfa_switch2)
        if (!this.data.twoFactorEnabled) {
            this.airtower.sendXt('sett#enable2fa')
        }
    }

    disable2FA() {
        this.mfa_switch1.setFrame('switcher-selected')
        this.mfa_switch2.setFrame('switcher-unselected')
        this.mfa_switcher.bringToTop(this.mfa_switch1)
        if (this.data.twoFactorEnabled) {
            this.airtower.sendXt('sett#disable2fa')
        }
    }

    enableInfractionNotifs() {
        if (this.data.infractionNotifications) {
            this.in_switch2.setFrame('switcher-selected')
            this.in_switch1.setFrame('switcher-unselected')
            this.in_switcher.bringToTop(this.in_switch2)
            return
        }
        let text = this.crumbs.getString('settings-parentonly')
        this.interface.prompt.showError(text)
    }

    disableInfractionNotifs() {
        if (!this.data.infractionNotifications) {
            this.in_switch1.setFrame('switcher-selected')
            this.in_switch2.setFrame('switcher-unselected')
            this.in_switcher.bringToTop(this.in_switch1)
            return
        }
        let text = this.crumbs.getString('settings-parentonly')
        this.interface.prompt.showError(text)
    }

    showPChange() {
        this.pchange.visible = true
        this.pchange_cur_text.__InputText.clickZone.visible = true
        this.pchange_new_text.__InputText.clickZone.visible = true
        this.pchange_confirm_text.__InputText.clickZone.visible = true
    }

    cancelPChange() {
        this.pchange.visible = false
        this.pchange_cur_text.__InputText.clearText()
        this.pchange_cur_text.__InputText.clickZone.visible = false
        this.pchange_new_text.__InputText.clearText()
        this.pchange_new_text.__InputText.clickZone.visible = false
        this.pchange_confirm_text.__InputText.clearText()
        this.pchange_confirm_text.__InputText.clickZone.visible = false
    }

    changePasswordSubmit() {
        let current = this.pchange_cur_text.textContent
        let newPass = this.pchange_new_text.textContent
        let confirm = this.pchange_confirm_text.textContent

        if (newPass != confirm) {
            let text = this.crumbs.getString('settings-newpassnomatch')
            this.interface.prompt.showError(text)
            return
        }

        if (newPass.length < 4) {
            let text = this.crumbs.getString('settings-newpasstooshort')
            this.interface.prompt.showError(text)
            return
        }

        this.airtower.sendXt('sett#changepass', `${current}%${newPass}`)
        this.airtower.events.once('passchng', () => {
            let text = this.crumbs.getString('settings-passchanged')
            this.interface.prompt.showWindow(text, 'single', () => {})
            let penguins = this.airtower.savedPenguins
            for (let p in penguins) {
                let penguin = penguins[p]
                if (penguin.username == this.data.username) {
                    delete penguin.token
                    localStorage.setItem('saved_penguins', JSON.stringify(penguins))
                }
            }
        })
        this.cancelPChange()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
