import RoomScene from '@scenes/rooms/RoomScene'

import {LocalisedSprite, Seat, Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class School extends RoomScene {
    constructor() {
        super('School')

        /** @type {Array<any>} */
        this.lockers
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            shack: () => this.triggerRoom(807, 620, 560),
            rink: () => this.triggerRoom(802, 1220, 290),
            locker1: null,
            locker2: null,
            locker3: null,
            locker4: null,
            locker5: null,
            locker6: null,
            locker7: null,
            locker8: null,
            locker9: null,
            locker10: null,
            cafe: null
        }
        this.music = 436
        this.loadSfx = ['school-dooropen', 'school-doorclose', 'school-lockeropen', 'school-lockerclose']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('school-pack', 'client/media/rooms/school/school-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'school', 'bg')

        // support
        const support = this.add.image(1096.4095134138174, 319.2379316429545, 'school', 'support')
        support.setOrigin(0.7213220482985641, 0.3325395121280776)

        // table1
        const table1 = this.add.image(1181.2561606022582, 395.15335281155933, 'school', 'table1')
        table1.setOrigin(0.7771422109225383, 0.4116180758453743)

        // table2
        const table2 = this.add.image(938.6245203967172, 396.64189048153196, 'school', 'table2')
        table2.setOrigin(0.6175161318399456, 0.4131686359182625)

        // benches
        const benches = this.add.image(1059.753586271564, 407.9164011999352, 'school', 'benches')
        benches.setOrigin(0.6972062707685049, 0.42491292984032525)

        // idkwhatthisis
        const idkwhatthisis = this.add.image(254.52712416977687, 312.1698861319424, 'school', 'idkwhatthisis')
        idkwhatthisis.setOrigin(0.167452058412824, 0.32517696555786274)

        // bookshelf
        const bookshelf = this.add.image(181.78334526133634, 342.00589524271754, 'school', 'bookshelf')
        bookshelf.setOrigin(0.1195943034572738, 0.3562561329682252)

        // supports
        const supports = this.add.image(599.0396617477228, 239.29785733019156, 'school', 'supports')
        supports.setOrigin(0.3941050337680276, 0.24926863267225105)

        // woodthingback
        const woodthingback = this.add.image(589.5145181651745, 249.15411376953125, 'school', 'woodthingback')
        woodthingback.setOrigin(0.3878384980985989, 0.25953554167091075)

        // woodthing
        const woodthing = this.add.image(648.3378163525731, 266.5811489964501, 'school', 'woodthing')
        woodthing.setOrigin(0.42653803707406124, 0.2776886968713022)

        // tablesrow2
        const tablesrow2 = this.add.image(518.3879093002599, 424.77437926863087, 'school', 'tablesrow2')
        tablesrow2.setOrigin(0.34104467717122366, 0.4424733117381571)

        // stoolsrow2
        const stoolsrow2 = this.add.image(574.7640380859375, 467.3195713613009, 'school', 'stoolsrow2')
        stoolsrow2.setOrigin(0.3781342524979381, 0.48679120579626406)

        // tables
        const tables = this.add.image(603.5274079277874, 514.5160129571058, 'school', 'tables')
        tables.setOrigin(0.3970575052156496, 0.5359541801636518)

        // stools
        const stools = this.add.image(549.4523315429688, 596.2742024976302, 'school', 'stools')
        stools.setOrigin(0.36148179010635206, 0.621118985700552)

        // railings
        const railings = this.add.image(532.1943144831023, 661.7843349074235, 'school', 'railings')
        railings.setOrigin(0.3501278384757252, 0.6893586821952328)

        // skelebob
        const skelebob = this.add.image(453.5276018898494, 238.5285987493972, 'school', 'skelebob')
        skelebob.setOrigin(0.29837342929233246, 0.24846728469059892)

        // arrows
        const arrows = this.add.image(235.85169254915695, 670.3908512841136, 'school', 'arrows')
        arrows.setOrigin(0.15516558720339274, 0.6983238034209517)

        // cage
        const cage = this.add.image(1346.082680760133, 235.70330528002282, 'school', 'cage')
        cage.setOrigin(0.8855807110264032, 0.2455242763333571)

        // pillar
        const pillar = this.add.image(764.3961791992188, 668.2539880139652, 'school', 'pillar')
        pillar.setOrigin(0.5028922151162738, 0.6960979001792665)

        // doorframe
        const doorframe = this.add.image(90.25516627876812, 783.8760093095649, 'school', 'doorframe')
        doorframe.setOrigin(0.4308064722263145, 1.007419203673693)

        // door
        const door = this.add.image(25.234501163695626, 805.20997603704, 'school', 'door')
        door.scaleX = -1
        door.setOrigin(0.31732908667747045, 0.8850852713837973)

        // doorframe_1
        const doorframe_1 = this.add.image(1409, 764.7390564853001, 'school', 'doorframe')
        doorframe_1.scaleX = -1
        doorframe_1.setOrigin(0.5, 0.9832563844511365)

        // door_1
        const door_1 = this.add.image(1487.589141527205, 802.81788619329, 'school', 'door')
        door_1.setOrigin(0.29123324191710875, 0.8825350377984742)

        // fg
        const fg = this.add.image(760, 990.6285669693547, 'school', 'fg')
        fg.setOrigin(0.5, 1.0319047572597444)

        // lists
        const lockers = []
        const sort = [support, fg, door_1, doorframe_1, door, doorframe, pillar, cage, arrows, skelebob, railings, stools, tables, stoolsrow2, tablesrow2, woodthing, woodthingback, supports, bookshelf, idkwhatthisis, benches, table2, table1]

        // door (components)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('school-dooropen')
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('school-doorclose')
        new MoveTo(door)

        // door_1 (components)
        const door_1Button = new Button(door_1)
        door_1Button.hoverCallback = () => this.shell.musicController.addSfx('school-dooropen')
        door_1Button.hoverOutCallback = () => this.shell.musicController.addSfx('school-doorclose')
        new MoveTo(door_1)

        this.lockers = lockers
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
    }

    switchDays(day) {
        this.chalk.setFrame(`chalk000${day}`)
        this.overhang.setFrame(`overhang_000${day}`)
    }

    switchTeams(team) {
        this.photo.setFrame(`photo_000${team}`)
        this.rosette.setFrame(`rosette_000${team}`)
        this.banner.setFrame(`banner000${team}`)
        this.banner2.setFrame(`banner2000${team}`)
        this.floor.setFrame(`floor000${team}`)
    }

    playLockerOpen(index) {
        if (this.lockers[index].frame.name != 'locker_0001' && this.lockers[index].frame.name != 'locker_0021') return
        this.lockers[index].isOpen = true
        this.lockers[index].play('school-locker-open', true)
        this.shell.musicController.addSfx('school-lockeropen')
    }

    playLockerClose(index) {
        if (this.lockers[index].frame.name != 'locker_0011') return
        this.lockers[index].isOpen = false
        this.lockers[index].play('school-locker-close', true)
        this.shell.musicController.addSfx('school-lockerclose')
    }

    update(time, delta) {
        this.triggers.forEach((trigger) => {
            if (trigger.label.includes('locker')) {
                const index = parseInt(trigger.label.substring(6)) - 1
                if (this.matter.containsPoint(trigger, this.client.penguin.x, this.client.penguin.y)) {
                    this.playLockerOpen(index)
                } else if (this.lockers[index].isOpen) {
                    this.playLockerClose(index)
                }
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
