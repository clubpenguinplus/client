import RoomScene from '../RoomScene'
import {LocalisedSprite, Button} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class Rink extends RoomScene {
    constructor() {
        super('Rink')

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgwinter
        /** @type {Phaser.GameObjects.Sprite} */
        this.signs_en
        /** @type {Phaser.GameObjects.Sprite} */
        this.toprink
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg
        /** @type {Phaser.GameObjects.Sprite} */
        this.fgwinter
        /** @type {Phaser.GameObjects.Sprite} */
        this.gate
        /** @type {Phaser.GameObjects.Sprite} */
        this.ball
        /** @type {Phaser.GameObjects.Sprite} */
        this.puck
        /** @type {Phaser.GameObjects.Sprite} */
        this.net2
        /** @type {Phaser.GameObjects.Sprite} */
        this.net1
        /** @type {Phaser.GameObjects.Sprite} */
        this.net
        /** @type {Phaser.GameObjects.Sprite} */
        this.net_1
        /** @type {Phaser.GameObjects.Sprite} */
        this.netwinter
        /** @type {Phaser.GameObjects.Sprite} */
        this.net2winter
        /** @type {Phaser.GameObjects.Sprite} */
        this.net3winter
        /** @type {Phaser.GameObjects.Sprite} */
        this.net4winter
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forts: () => this.triggerRoom(801, 560, 400),
            school: () => this.triggerRoom(122, 220, 760),
        }
        this.music = 592
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('rink-pack', 'client/media/rooms/rink/rink-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.sprite(0, 0, 'rink', 'bg')
        bg.setOrigin(0, 0)

        // bgwinter
        const bgwinter = this.add.sprite(721, 504, 'winter', 'bgwinter')

        // door
        this.add.image(1207, 185, 'rink', 'door')

        // signs_en
        const signs_en = this.add.sprite(762, 593, 'rink', 'signs-en')
        signs_en.visible = false

        // toprink
        const toprink = this.add.sprite(759.0849835973836, 338.97318070858137, 'winter', 'toprink')
        toprink.setOrigin(0.5024522922077771, 0.16308731765416148)

        // fg
        const fg = this.add.sprite(-194, 978, 'rink', 'fg')
        fg.setOrigin(0, 1)
        fg.visible = false

        // fgwinter
        const fgwinter = this.add.sprite(5.486295832113228, 959.7108443166364, 'winter', 'fgwinter')
        fgwinter.setOrigin(0.11156951668462708, 0.9583392138562914)

        // gate
        const gate = this.add.sprite(756, 332, 'rink', 'gate')
        gate.visible = false

        // lightsoff
        this.add.image(1033, 34, 'rink', 'lightsoff')

        // stand
        this.add.image(1092, 140, 'rink', 'stand')

        // light
        this.add.image(1238, 143, 'rink', 'light')

        // stadium_en
        const stadium_en = this.add.image(520, 136, 'rink', 'stadium-en')

        // bleachers4
        this.add.image(1420, 380, 'rink', 'bleachers4')

        // fishdogs_en
        const fishdogs_en = this.add.image(187, 199, 'rink', 'fishdogs-en')

        // bleachers3_png
        const bleachers3_png = this.add.image(1569, 484, 'rink', 'bleachers3')

        // bleachers2
        this.add.image(103, 374, 'rink', 'bleachers2')

        // bleachers1
        const bleachers1 = this.add.image(-52, 484, 'rink', 'bleachers1')

        // food1
        this.add.image(74, 386, 'rink', 'food1')

        // food2
        this.add.image(1459, 377, 'rink', 'food2')

        // ball
        const ball = this.add.sprite(768, 539, 'rink', 'ball')
        ball.scaleX = 0.7
        ball.scaleY = 0.7
        ball.visible = false

        // puck
        const puck = this.add.sprite(757, 539, 'winter', 'puck.webp')
        puck.scaleX = 0.23
        puck.scaleY = 0.23

        // net2
        const net2 = this.add.sprite(254, 498, 'rink', 'net2')
        net2.visible = false

        // net1
        const net1 = this.add.sprite(253, 506, 'rink', 'net1')
        net1.visible = false

        // net
        const net = this.add.sprite(1270, 501, 'rink', 'net2')
        net.flipX = true
        net.visible = false

        // net_1
        const net_1 = this.add.sprite(1269, 509, 'rink', 'net1')
        net_1.flipX = true
        net_1.visible = false

        // netwinter
        const netwinter = this.add.sprite(1268, 508, 'winter', 'netwinter')

        // net2winter
        const net2winter = this.add.sprite(1269, 515, 'winter', 'net2winter')

        // net3winter
        const net3winter = this.add.sprite(253, 505, 'winter', 'net3winter')

        // net4winter
        const net4winter = this.add.sprite(253, 513, 'winter', 'net4winter')

        // catalog
        const catalog = this.add.image(1420.889239584529, 1151.8100417766711, 'rink', 'catalog')
        catalog.setOrigin(0.5188839188531302, 2.8113916676232273)

        // lists
        const sort = [fg, bleachers1, bleachers3_png, toprink, fgwinter, catalog]

        // signs_en (components)
        new LocalisedSprite(signs_en)

        // stadium_en (components)
        new LocalisedSprite(stadium_en)

        // fishdogs_en (components)
        new LocalisedSprite(fishdogs_en)

        // catalog (components)
        const catalogButton = new Button(catalog)
        catalogButton.callback = () => this.loadSnowSports()

        this.bg = bg
        this.bgwinter = bgwinter
        this.signs_en = signs_en
        this.toprink = toprink
        this.fg = fg
        this.fgwinter = fgwinter
        this.gate = gate
        this.ball = ball
        this.puck = puck
        this.net2 = net2
        this.net1 = net1
        this.net = net
        this.net_1 = net_1
        this.netwinter = netwinter
        this.net2winter = net2winter
        this.net3winter = net3winter
        this.net4winter = net4winter
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.loadSeason()
    }

    loadSeason() {
        let currentMonth = new Date().getMonth() + 1
        if (currentMonth >= 6 && currentMonth < 12) {
            this.bg.visible = true
            this.fg.visible = true
            this.gate.visible = true
            this.ball.visible = true
            this.net.visible = true
            this.net_1.visible = true
            this.net2.visible = true
            this.net1.visible = true
            this.signs_en.visible = true
            this.puck.visible = false
            this.netwinter.visible = false
            this.net2winter.visible = false
            this.net3winter.visible = false
            this.net4winter.visible = false
            this.bgwinter.visible = false
            this.fgwinter.visible = false
            this.toprink.visible = false
        } else if (currentMonth >= 12 || currentMonth < 6) {
            this.bg.visible = false
            this.fg.visible = false
            this.gate.visible = false
            this.ball.visible = false
            this.net.visible = false
            this.net_1.visible = false
            this.net2.visible = false
            this.net1.visible = false
            this.signs_en.visible = false
            this.puck.visible = true
            this.netwinter.visible = true
            this.net2winter.visible = true
            this.net3winter.visible = true
            this.net4winter.visible = true
            this.bgwinter.visible = true
            this.fgwinter.visible = true
            this.toprink.visible = true
        }
    }

    loadSnowSports() {
        let currentMonth = new Date().getMonth() + 1

        if (currentMonth >= 6 && currentMonth < 12) {
            this.interface.loadExternal('SummerSports')
        } else if (currentMonth >= 12 || currentMonth < 6) {
            this.interface.loadExternal('WinterSports')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
