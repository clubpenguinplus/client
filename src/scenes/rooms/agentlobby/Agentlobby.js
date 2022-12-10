import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class Agentlobby extends RoomScene {
    constructor() {
        super('Agentlobby')

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
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('agentlobby-pack', 'client/media/rooms/agentlobby/agentlobby-pack.json')
    }

    /** @returns {void} */
    _create() {
        // waterfallanim0001
        this.add.image(754, 59, 'agentlobby', 'waterfallanim0001')

        // phonebox_reflection0001
        this.add.image(1079, 0, 'agentlobby', 'phonebox_reflection0001')

        // bg
        this.add.image(749, 479, 'agentlobby', 'bg')

        // door
        const door = this.add.image(106, 328, 'agentlobby', 'door')

        // doorext
        const doorext = this.add.image(263, 360, 'agentlobby', 'doorext')

        // stairsanim0001
        const stairsanim0001 = this.add.image(756, 272, 'agentlobby', 'stairsanim0001')

        // backchairfaceleft
        const backchairfaceleft = this.add.image(611, 362, 'agentlobby', 'backchairfaceleft')

        // backchairfacefront
        const backchairfacefront = this.add.image(773, 374, 'agentlobby', 'backchairfacefront')

        // deskleft
        const deskleft = this.add.image(512, 381, 'agentlobby', 'deskleft')

        // deskright
        const deskright = this.add.image(732, 440, 'agentlobby', 'deskright')

        // phonebox0001
        this.add.image(578, -186, 'agentlobby', 'phonebox0001')

        // railing
        const railing = this.add.image(143, 512, 'agentlobby', 'railing')

        // potplant
        const potplant = this.add.image(145, 567, 'agentlobby', 'potplant')

        // vending
        const vending = this.add.image(-3, 574, 'agentlobby', 'vending')

        // table
        const table = this.add.image(256, 697, 'agentlobby', 'table')

        // comfy
        const comfy = this.add.image(1371, 438, 'agentlobby', 'comfy')

        // comfyarm
        const comfyarm = this.add.image(1422, 452, 'agentlobby', 'comfyarm')

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
        const chairfaceleft = this.add.image(660, 722, 'agentlobby', 'chairfaceleft')

        // chairfacefront
        const chairfacefront = this.add.image(753, 782, 'agentlobby', 'chairfacefront')

        // chairfaceright
        const chairfaceright = this.add.image(848, 730, 'agentlobby', 'chairfaceright')

        // chairfaceright_1
        const chairfaceright_1 = this.add.image(1192, 722, 'agentlobby', 'chairfaceright')

        // backchairfacefront_1
        const backchairfacefront_1 = this.add.image(1115, 761, 'agentlobby', 'backchairfacefront')

        // desks
        const desks = this.add.image(436.90355385687303, 729.3585294534367, 'agentlobby', 'desks')
        desks.setOrigin(0.1829942307765526, 0.5508098205861981)

        // backinnitbutnotback
        const backinnitbutnotback = this.add.image(1158.06406267431, 590.0688914908317, 'agentlobby', 'backinnitbutnotback')
        backinnitbutnotback.setOrigin(0.5359651564098228, 0.3320635258549568)

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

        // lists
        const sort = [fg, backinnit, backinnitbutnotback, desks, backchairfacefront_1, chairfaceright_1, chairfaceright, chairfacefront, chairfaceleft, otherbit, coolerfg, fishanim, coolerbg, deskfront, comfyarm, comfy, table, vending, potplant, railing, deskright, deskleft, backchairfacefront, backchairfaceleft, stairsanim0001, doorext, shifty, clockmid, minutehand, hourhand]

        // door (components)
        const doorButton = new Button(door)
        doorButton.spriteName = 'door'
        doorButton.activeFrame = false
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 168
        doorMoveTo.y = 444

        // channel (components)
        const channelSimpleButton = new SimpleButton(channel)
        channelSimpleButton.callback = () => this.toggleChannel()

        this.fishanim = fishanim
        this.channel = channel
        this.channel4_fire = channel4_fire
        this.channel4_fg = channel4_fg
        this.changechannel = changechannel
        this.hourhand = hourhand
        this.minutehand = minutehand
        this.shifty = shifty
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
        setTimeout(() => this.setClockTime(), timeout * 1000)
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
