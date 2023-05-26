import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Agentlobby extends RoomScene {
    constructor() {
        super('Agentlobby')

        /** @type {Phaser.GameObjects.Container} */
        this.waterfall
        /** @type {Phaser.GameObjects.Sprite} */
        this.droplets
        /** @type {Phaser.GameObjects.Sprite} */
        this.phonebox_reflection
        /** @type {Phaser.GameObjects.Container} */
        this.stairs
        /** @type {Phaser.GameObjects.Sprite} */
        this.phonebox
        /** @type {Phaser.GameObjects.Sprite} */
        this.phonebox_agent
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishanim
        /** @type {Phaser.GameObjects.Sprite} */
        this.channel
        /** @type {Phaser.GameObjects.Sprite} */
        this.channel4_fire
        /** @type {Phaser.GameObjects.Image} */
        this.channel4_fg
        /** @type {Phaser.GameObjects.Sprite} */
        this.changechannel
        /** @type {Phaser.GameObjects.Image} */
        this.hourhand
        /** @type {Phaser.GameObjects.Image} */
        this.minutehand
        /** @type {Phaser.GameObjects.Sprite} */
        this.shifty
        /** @type {Phaser.GameObjects.Rectangle} */
        this.waterfall_over
        /** @type {Phaser.GameObjects.Rectangle} */
        this.phone_over
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.music = 922
        this.roomTriggers = {
            door: () => this.triggerRoom(200, 1160, 610),
            waterfall: () => {
                if (this.shell.client.isEPF) this.triggerRoom(323, 1380, 460)
            },
            phone: () => {
                if (!this.shell.client.isEPF) this.onPhoneTrigger()
            },
        }
        this.loadSfx = ['agentlobby-dooropen', 'agentlobby-doorclosed', 'agentlobby-phone']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('agentlobby-pack', 'client/media/rooms/agentlobby/agentlobby-pack.json')
    }

    /** @returns {void} */
    _create() {
        // waterfall
        const waterfall = this.add.container(754, 59)

        // droplets
        const droplets = this.add.sprite(756, 202, 'agentlobby', 'droplets0029')

        // phonebox_reflection
        const phonebox_reflection = this.add.sprite(1079, 0, 'agentlobby', 'phonebox_reflection0001')

        // bg
        this.add.image(749, 479, 'agentlobby', 'bg')

        // door
        const door = this.add.image(106, 328, 'agentlobby', 'door')

        // doorext
        const doorext = this.add.image(263, 360, 'agentlobby', 'doorext')

        // stairs
        const stairs = this.add.container(756, 272)

        // backchairfaceleft
        const backchairfaceleft = this.add.image(611, 362, 'agentlobby', 'backchairfaceleft')

        // backchairfacefront
        const backchairfacefront = this.add.image(773, 374, 'agentlobby', 'backchairfacefront')

        // deskleft
        const deskleft = this.add.image(512, 381, 'agentlobby', 'deskleft')

        // deskright
        const deskright = this.add.image(732, 440, 'agentlobby', 'deskright')

        // phonebox
        const phonebox = this.add.sprite(578, -186, 'agentlobby', 'phonebox0001')

        // phonebox_agent
        const phonebox_agent = this.add.sprite(1116, 268.5, 'agentlobby', 'phonebox_epf_open0001')

        // railing
        const railing = this.add.image(143, 512, 'agentlobby', 'railing')

        // potplant
        const potplant = this.add.image(145, 567, 'agentlobby', 'potplant')

        // vending
        const vending = this.add.image(-3, 574, 'agentlobby', 'vending')

        // table
        const table = this.add.image(256, 697, 'agentlobby', 'table')

        // comfy
        const comfy = this.add.image(1368.8126305440692, 460.96737928727475, 'agentlobby', 'comfy')
        comfy.setOrigin(0.487847947467051, 0.6383577065498479)

        // comfyarm
        const comfyarm = this.add.image(1422, 484.8105418389639, 'agentlobby', 'comfyarm')
        comfyarm.setOrigin(0.5, 0.7326988782905242)

        // deskfront
        const deskfront = this.add.image(1165, 470, 'agentlobby', 'deskfront')

        // coolerbg
        const coolerbg = this.add.image(466.3441313995378, 610.2065699768882, 'agentlobby', 'coolerbg')
        coolerbg.setOrigin(0.4936323436848329, 0.32740299987835897)

        // fishanim
        const fishanim = this.add.sprite(461.6882627990755, 630.0687807113247, 'agentlobby', 'fishanim0001')
        fishanim.setOrigin(0.47085028442390037, 0.7328808798742715)

        // coolerfg
        const coolerfg = this.add.image(468.49389760739575, 660.3237141432189, 'agentlobby', 'coolerfg')
        coolerfg.setOrigin(0.6543220236381728, 1.2665464267902364)

        // otherbit
        const otherbit = this.add.image(1338, 556, 'agentlobby', 'otherbit')

        // chairfaceleft
        const chairfaceleft = this.add.image(655.5493544892322, 702.3429823274422, 'agentlobby', 'chairfaceleft')
        chairfaceleft.setOrigin(0.4572053316272327, 0.36058852714498013)

        // chairfacefront
        const chairfacefront = this.add.image(757.0797583848705, 778.2911287410268, 'agentlobby', 'chairfacefront')
        chairfacefront.setOrigin(0.5374289760079862, 0.4712490600079597)

        // chairfaceright
        const chairfaceright = this.add.image(846.5164514964107, 712.5683050828261, 'agentlobby', 'chairfaceright')
        chairfaceright.setOrigin(0.48516451496410695, 0.37368337016540654)

        // chairfaceright_1
        const chairfaceright_1 = this.add.image(1190.1455643705135, 704.9391922087234, 'agentlobby', 'chairfaceright')
        chairfaceright_1.setOrigin(0.4814556437051351, 0.37637095803422754)

        // backchairfacefront_1
        const backchairfacefront_1 = this.add.image(1115, 761, 'agentlobby', 'backchairfacefront')

        // desks
        const desks = this.add.image(436.90355385687303, 729.3585294534367, 'agentlobby', 'desks')
        desks.setOrigin(0.1829942307765526, 0.5508098205861981)

        // backinnitbutnotback
        const backinnitbutnotback = this.add.image(1161.018186062095, 570.3749143711884, 'agentlobby', 'backinnitbutnotback')
        backinnitbutnotback.setOrigin(0.5621076267463943, 0.07629736585212792)

        // backinnit
        const backinnit = this.add.image(1120, 602, 'agentlobby', 'backinnit')

        // fg
        const fg = this.add.image(760, 1005.837117522818, 'agentlobby', 'fg')
        fg.setOrigin(0.5, 1.009290664201809)

        // channel
        const channel = this.add.sprite(464, 129, 'agentlobby', 'channel1')

        // channel4_fire
        const channel4_fire = this.add.sprite(464, 123, 'agentlobby', 'channel4_fire0001')
        channel4_fire.visible = false

        // channel4_fg
        const channel4_fg = this.add.image(461, 145, 'agentlobby', 'channel4_fg')
        channel4_fg.visible = false

        // changechannel
        const changechannel = this.add.sprite(461, 128, 'agentlobby', 'changechannel0001')
        changechannel.visible = false

        // tv
        this.add.image(475, 87, 'agentlobby', 'tv')

        // hourhand
        const hourhand = this.add.image(1391, 1012.121230120244, 'agentlobby', 'hourhand0001')
        hourhand.setOrigin(0.5, 15.220058577154479)

        // minutehand
        const minutehand = this.add.image(1391, 1003.2891949739513, 'agentlobby', 'minutehand0001')
        minutehand.setOrigin(0.5, 11.224614106212547)

        // clockmid
        const clockmid = this.add.image(1391, 1048.9213765631303, 'agentlobby', 'clockmid')
        clockmid.setOrigin(0.5, 11.31004301759782)

        // shifty
        const shifty = this.add.sprite(1410, 1036.9454761442928, 'agentlobby', 'shifty0001')
        shifty.setOrigin(0.5, 14.767133697857416)

        // waterfall_over
        const waterfall_over = this.add.rectangle(754.0000000000001, 311.21145726234874, 128, 128)
        waterfall_over.scaleX = 3.2931326024095626
        waterfall_over.scaleY = 2.7613149632729104
        waterfall_over.setOrigin(0.5000000000000002, 0.8061592212374563)

        // phone_over
        const phone_over = this.add.rectangle(1063.34831316423, 411.48112083039797, 128, 128)
        phone_over.scaleX = 1.357892558842039
        phone_over.scaleY = 2.2585734641423385
        phone_over.setOrigin(0.4329631745410405, 0.8977584723401025)

        // moveto
        const moveto = this.add.ellipse(774, 388, 50, 30)
        moveto.scaleX = 1.2748184493839068
        moveto.scaleY = 1.168495107669347

        // moveto_1
        const moveto_1 = this.add.ellipse(1105, 503, 50, 30)
        moveto_1.scaleX = 1.6161841893238098
        moveto_1.scaleY = 0.9944453067672275

        // moveto_2
        const moveto_2 = this.add.ellipse(1161, 588, 50, 30)
        moveto_2.scaleX = 1.6629585330832621
        moveto_2.scaleY = 1.4258435567924344

        // moveto_3
        const moveto_3 = this.add.ellipse(1349, 478, 50, 30)
        moveto_3.scaleX = 1.9433999056849476
        moveto_3.scaleY = 1.5600724745867505

        // moveto_4
        const moveto_4 = this.add.ellipse(1199, 722, 50, 30)
        moveto_4.scaleX = 1.3577866119103739
        moveto_4.scaleY = 1.5273308478700696

        // moveto_5
        const moveto_5 = this.add.ellipse(1114, 777, 50, 30)
        moveto_5.scaleX = 1.429259511549393
        moveto_5.scaleY = 1.1637826777448343

        // moveto_6
        const moveto_6 = this.add.ellipse(603, 378, 50, 30)
        moveto_6.scaleX = 1.305312625744648
        moveto_6.scaleY = 1.0305559867169471

        // moveto_7
        const moveto_7 = this.add.ellipse(858, 733, 50, 30)
        moveto_7.scaleX = 1.4550007760905048
        moveto_7.scaleY = 1.7256463212535502

        // moveto_8
        const moveto_8 = this.add.ellipse(757, 796, 50, 30)
        moveto_8.scaleX = 1.3928610028273511
        moveto_8.scaleY = 1.360861416742287

        // moveto_9
        const moveto_9 = this.add.ellipse(651, 723, 50, 30)
        moveto_9.scaleX = 1.3133983535039406
        moveto_9.scaleY = 1.9927607801507083

        // moveto_10
        const moveto_10 = this.add.ellipse(421, 745, 50, 30)
        moveto_10.scaleX = 1.4622804778349132
        moveto_10.scaleY = 1.3638359988975575

        // moveto_11
        const moveto_11 = this.add.ellipse(393, 789, 50, 30)
        moveto_11.scaleX = 1.60920515560933
        moveto_11.scaleY = 1.2984060666169186

        // moveto_12
        const moveto_12 = this.add.ellipse(360, 838, 50, 30)
        moveto_12.scaleX = 1.5208827452033762
        moveto_12.scaleY = 1.6686390220555083

        // moveto_13
        const moveto_13 = this.add.ellipse(272, 840, 50, 30)
        moveto_13.scaleX = 1.3236782104664502
        moveto_13.scaleY = 1.9407537396495012

        // moveto_14
        const moveto_14 = this.add.ellipse(200, 825, 50, 30)
        moveto_14.scaleX = 1.1151511101054692
        moveto_14.scaleY = 1.3856282026068625

        // lists
        const sort = [fg, backinnit, backinnitbutnotback, desks, backchairfacefront_1, chairfaceright_1, chairfaceright, chairfacefront, chairfaceleft, otherbit, coolerfg, fishanim, coolerbg, deskfront, comfyarm, comfy, table, vending, potplant, railing, deskright, deskleft, backchairfacefront, backchairfaceleft, stairs, doorext, shifty, clockmid, minutehand, hourhand]

        // door (components)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('agentlobby-dooropen')
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('agentlobby-doorclosed')
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 168
        doorMoveTo.y = 444

        // channel (components)
        const channelSimpleButton = new SimpleButton(channel)
        channelSimpleButton.callback = () => this.toggleChannel()

        // waterfall_over (components)
        new MoveTo(waterfall_over)

        // phone_over (components)
        new MoveTo(phone_over)

        // moveto (components)
        new Seat(moveto)

        // moveto_1 (components)
        const moveto_1Seat = new Seat(moveto_1)
        moveto_1Seat.direction = 'southeast'

        // moveto_2 (components)
        const moveto_2Seat = new Seat(moveto_2)
        moveto_2Seat.direction = 'northeast'

        // moveto_3 (components)
        const moveto_3Seat = new Seat(moveto_3)
        moveto_3Seat.direction = 'southwest'

        // moveto_4 (components)
        const moveto_4Seat = new Seat(moveto_4)
        moveto_4Seat.direction = 'east'

        // moveto_5 (components)
        new Seat(moveto_5)

        // moveto_6 (components)
        const moveto_6Seat = new Seat(moveto_6)
        moveto_6Seat.direction = 'southwest'

        // moveto_7 (components)
        const moveto_7Seat = new Seat(moveto_7)
        moveto_7Seat.direction = 'east'

        // moveto_8 (components)
        new Seat(moveto_8)

        // moveto_9 (components)
        const moveto_9Seat = new Seat(moveto_9)
        moveto_9Seat.direction = 'west'

        // moveto_10 (components)
        const moveto_10Seat = new Seat(moveto_10)
        moveto_10Seat.direction = 'west'

        // moveto_11 (components)
        const moveto_11Seat = new Seat(moveto_11)
        moveto_11Seat.direction = 'west'

        // moveto_12 (components)
        const moveto_12Seat = new Seat(moveto_12)
        moveto_12Seat.direction = 'northwest'

        // moveto_13 (components)
        const moveto_13Seat = new Seat(moveto_13)
        moveto_13Seat.direction = 'north'

        // moveto_14 (components)
        const moveto_14Seat = new Seat(moveto_14)
        moveto_14Seat.direction = 'north'

        this.waterfall = waterfall
        this.droplets = droplets
        this.phonebox_reflection = phonebox_reflection
        this.stairs = stairs
        this.phonebox = phonebox
        this.phonebox_agent = phonebox_agent
        this.fishanim = fishanim
        this.channel = channel
        this.channel4_fire = channel4_fire
        this.channel4_fg = channel4_fg
        this.changechannel = changechannel
        this.hourhand = hourhand
        this.minutehand = minutehand
        this.shifty = shifty
        this.waterfall_over = waterfall_over
        this.phone_over = phone_over
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.fishanim.play('agentlobby-fishanim')
        this.shifty.play('agentlobby-shifty')
        this.channel4_fire.play('agentlobby-channel4_fire')
        this.curChan = 1

        this.animState = 'closed'

        this.stairs.closing = this.add.video(0, -55.5, 'agentlobby-stairs_closing')
        this.stairs.opening = this.add.video(0, 0, 'agentlobby-stairs_opening')
        this.stairs.add(this.stairs.closing)
        this.stairs.add(this.stairs.opening)
        this.stairs.closing.visible = false
        this.waterfall.opening = this.add.video(0, 0, 'agentlobby-waterfall_opening')
        this.waterfall.open = this.add.video(0, 0, 'agentlobby-waterfall_open')
        this.waterfall.closing = this.add.video(0, 0, 'agentlobby-waterfall_closing')
        this.waterfall.closed = this.add.video(0, 0, 'agentlobby-waterfall_closed')
        this.waterfall.add(this.waterfall.opening)
        this.waterfall.add(this.waterfall.open)
        this.waterfall.add(this.waterfall.closing)
        this.waterfall.add(this.waterfall.closed)
        this.waterfall.opening.visible = false
        this.waterfall.open.visible = false
        this.waterfall.closing.visible = false

        this.waterfall.closed.play(true)
        this.waterfall.open.play(true)
        this.stairs.opening.play(false, 0, 0.1)
        this.droplets.play('agentlobby-droplets')

        this.setEpfButton()

        this.setClockTime()
    }

    setClockTime() {
        var timeInHours = this.shell.getPSTHours()
        if (timeInHours > 12) {
            timeInHours = timeInHours - 12
        }
        // There is a random 5 minute offset on the frames :shrug:
        var timeInMinutes = this.shell.getPSTMinutes() + 5
        if (timeInMinutes > 60) {
            timeInMinutes = timeInMinutes - 60
        }

        // There is a random 1 hour offset on the frames :shrug:
        this.hourhand.setFrame(`hourhand${this.fourFigures(timeInHours + 1)}`)
        this.minutehand.setFrame(`minutehand${this.fourFigures(timeInMinutes)}`)

        let timeout = 60 - this.shell.getPSTSeconds()
        this.clockTimeTO = setTimeout(() => this.setClockTime(), timeout * 1000)
    }

    fourFigures(num) {
        num = num.toString()
        while (num.length < 4) {
            num = '0' + num
        }
        return num
    }

    toggleChannel() {
        switch (this.curChan) {
            case 1:
                this.curChan = 2
                this.channel.setFrame('channel2')
                break
            case 2:
                this.curChan = 3
                this.channel.setFrame('channel3')
                break
            case 3:
                this.curChan = 4
                this.channel4_fg.visible = true
                this.channel4_fire.visible = true
                this.channel.setFrame('channel4_bg')
                break
            case 4:
                this.curChan = 5
                this.channel4_fg.visible = false
                this.channel4_fire.visible = false
                this.channel.play('agentlobby-channel5')
                break
            case 5:
                this.curChan = 1
                this.channel.stop('agentlobby-channel5')
                this.channel.setFrame('channel1')
                break
        }

        this.changechannel.play('agentlobby-changechannel')
    }

    onWaterfallOver() {
        if (this.animState != 'closed' || !this.shell.client.isEPF) return
        this.animState = 'opening'

        this.waterfall.opening.play()
        this.stairs.opening.play()

        this.waterfall.closed.visible = false
        this.stairs.closing.visible = false
        this.waterfall.opening.visible = true
        this.stairs.opening.visible = true

        setTimeout(() => this.waterfallOpen(), 2620)
    }

    waterfallOpen() {
        if (this.animState != 'opening') return
        this.animState = 'open'

        this.waterfall.opening.visible = false
        this.waterfall.open.visible = true
    }

    onWaterfallOut() {
        if (this.animState == 'opening') return setTimeout(() => this.onWaterfallOut(), 100)
        if (this.animState != 'open') return
        this.animState = 'closing'

        this.waterfall.closing.play()
        this.stairs.closing.play()

        this.waterfall.open.visible = false
        this.waterfall.closing.visible = true
        this.stairs.opening.visible = false
        this.stairs.closing.visible = true

        setTimeout(() => this.waterfallClose(), 2450)
    }

    waterfallClose() {
        if (this.animState != 'closing') return
        this.animState = 'closed'

        this.waterfall.closing.visible = false
        this.waterfall.closed.visible = true
    }

    onPhoneOver() {
        if (this.shell.client.isEPF) return
        if (this.phonebox_agent.frame.name != 'phonebox_epf_open0001' && this.phonebox_agent.frame.name != 'phonebox_epf_close0020') {
            clearTimeout(this.phoneTimeout)
            return
        }
        this.phonebox_agent.play('agentlobby-epf-open')
    }

    onPhoneOut() {
        if (this.phoneClicked) return
        if (this.phonebox_agent.frame.name != 'phonebox_epf_open0033') {
            clearTimeout(this.phoneTimeout)
            this.phoneTimeout = setTimeout(() => this.onPhoneOut(), 100)
            return
        }
        this.phonebox_agent.play('agentlobby-epf-close')
    }

    onPhoneDown() {
        this.phoneClicked = true
        this.abandonTimeout = setTimeout(() => {
            this.phoneClicked = false
            this.onPhoneOut()
        }, 2500)
    }

    onPhoneTrigger() {
        clearTimeout(this.abandonTimeout)
        this.interface.loadExternal('RecruitmentDialog')
        this.shell.musicController.stopLoopingSfx('agentlobby-phone')
        this.phonebox.anims.stopAfterRepeat(0)
    }

    setEpfButton() {
        this.phone_over.removeInteractive()
        if (this.shell.client.isEPF) {
            this.epfButton = new SimpleButton(this.waterfall_over)
            this.epfButton.hoverCallback = () => this.onWaterfallOver()
            this.epfButton.hoverOutCallback = () => this.onWaterfallOut()
        } else {
            this.phonebox.play('agentlobby-phonebox')
            this.epfButton = new SimpleButton(this.phone_over)
            this.epfButton.hoverCallback = () => this.onPhoneOver()
            this.epfButton.hoverOutCallback = () => this.onPhoneOut()
            this.epfButton.callback = () => this.onPhoneDown()
            this.shell.musicController.addSfx('agentlobby-phone', true)
        }
        this.epfButton.start()
    }

    stop() {
        clearTimeout(this.clockTimeTO)
        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
