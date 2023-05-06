import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Town extends RoomScene {
    constructor() {
        super('Town')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 1200, 400),
            snowForts: () => this.triggerRoom(801, 360, 520),
            coffeeShop: () => this.triggerRoom(110, 700, 450),
            danceClub: () => this.triggerRoom(120, 300, 560),
            clothesShop: () => this.triggerRoom(130, 1036, 520),
        }

        this.music = 581

        this.loadSfx = ['town-DoorDiscoOpen', 'town-DoorDiscoClose', 'town-DoorShopOpen', 'town-DoorShopClose', 'town-DoorCoffeeOpen', 'town-DoorCoffeeClose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('town-pack', 'client/media/rooms/town/town-pack.json')
    }

    /** @returns {void} */
    _create() {
        // dc_door
        const dc_door = this.add.sprite(846, 211, 'town', 'danceclubdoor0001')
        dc_door.setOrigin(0.5579637817944546, -0.002307969050704048)

        // bg
        this.add.image(760, 480, 'town', 'bg')

        // image
        this.add.image(1511, 613, 'town', 'sidetrees')

        // noticeboard
        const noticeboard = this.add.image(93.21640776789215, 675.1955159398718, 'town', 'bottom_left')
        noticeboard.setOrigin(0.3045572976426323, 0.3075324463521485)

        // front_trees
        const front_trees = this.add.image(-103, 752, 'town', 'bottom_trees')
        front_trees.setOrigin(-0.000037033625174373305, 0.012728011654378707)

        // coffee_door
        const coffee_door = this.add.sprite(419, 348, 'town', 'coffeedoor')
        coffee_door.setOrigin(0.5507261533206609, -0.0027676246941171125)

        // clothes_door
        const clothes_door = this.add.sprite(1108, 291, 'town', 'clothesdoor')
        clothes_door.setOrigin(0.4877768305251397, -0.01994307153677468)

        // bench_arm
        const bench_arm = this.add.image(256, 548, 'town', 'bench_side')
        bench_arm.setOrigin(0.47839655086139365, 0.7665475678359499)

        // clothes_rack
        const clothes_rack = this.add.image(1192, 411, 'town', 'clothesrack')
        clothes_rack.setOrigin(0.5072043625558867, 0.011544218710822484)

        // left_chair
        const left_chair = this.add.image(545, 452, 'town', 'leftchari')
        left_chair.setOrigin(0.43846826392076804, 0.2992761373118083)

        // right_chair
        const right_chair = this.add.image(696, 437, 'town', 'rightchair')
        right_chair.setOrigin(0.5418277481710252, 0.27855253873250896)

        // coloured_lights
        const coloured_lights = this.add.sprite(833, -69, 'town', 'disco_lights0001')
        coloured_lights.setOrigin(0.49671744383068733, 0.00587362442472057)

        // dance_cover
        const dance_cover = this.add.image(847, 350, 'town', 'roof')
        dance_cover.setOrigin(0.5079538861025653, 0.4574233155686223)

        // shopfronts
        const shopfronts = this.add.image(329, 212, 'town', 'shopfronts')
        shopfronts.setOrigin(-0.002646461293556528, 0.007956149379252361)

        // giftshopsign
        this.add.image(1067, 170, 'town', 'giftshopsign')

        // main_lights
        const main_lights = this.add.sprite(578, -17, 'town', 'lights0001')
        main_lights.setOrigin(0.00036237604574263714, 0.009681408322522898)

        // stars_anim
        const stars_anim = this.add.sprite(784, 294, 'town', 'starsanim0001')
        stars_anim.setOrigin(0.01746424311105394, 0.02276683384609813)
        stars_anim.visible = false

        // stars
        const stars = this.add.image(789, 296, 'town', 'stars')
        stars.setOrigin(0.016295875660959563, 0.014467126608638104)

        // table
        const table = this.add.image(621, 498, 'town', 'table')
        table.setOrigin(0.5222867233277427, 0.7080516274288713)

        // lights_front
        this.add.image(843, 227, 'town', 'lights_front')

        // localisation
        const localisation = this.add.image(661, 208, 'town', 'localised-en')

        // ellipse_1
        const ellipse_1 = this.add.ellipse(560, 478, 40, 40)

        // ellipse
        const ellipse = this.add.ellipse(688, 471, 40, 40)

        // ellipse_2
        const ellipse_2 = this.add.ellipse(288, 520, 40, 40)

        // ellipse_3
        const ellipse_3 = this.add.ellipse(315, 496, 40, 40)

        // speakers
        const speakers = this.add.sprite(841, 321, 'town', 'speakers0001')

        // barrier
        const barrier = this.add.image(949.9629279361815, 438.4383708474857, 'town', 'barrier')
        barrier.setOrigin(0.5280418276597353, 0.37359933744285717)

        // lists
        const sort = [bench_arm, left_chair, right_chair, table, barrier]

        // dc_door (components)
        const dc_doorSimpleButton = new SimpleButton(dc_door)
        dc_doorSimpleButton.hoverCallback = () => this.DiscoDoorOver()
        dc_doorSimpleButton.hoverOutCallback = () => this.DiscoDoorOut()
        const dc_doorMoveTo = new MoveTo(dc_door)
        dc_doorMoveTo.x = 850
        dc_doorMoveTo.y = 400

        // coffee_door (components)
        const coffee_doorMoveTo = new MoveTo(coffee_door)
        coffee_doorMoveTo.x = 430
        coffee_doorMoveTo.y = 430
        const coffee_doorButton = new Button(coffee_door)
        coffee_doorButton.hoverCallback = () => this.CoffeeDoorOver()
        coffee_doorButton.hoverOutCallback = () => this.CoffeeDoorOut()

        // clothes_door (components)
        const clothes_doorMoveTo = new MoveTo(clothes_door)
        clothes_doorMoveTo.x = 1100
        clothes_doorMoveTo.y = 400
        const clothes_doorButton = new Button(clothes_door)
        clothes_doorButton.hoverCallback = () => this.ShopDoorOver()
        clothes_doorButton.hoverOutCallback = () => this.ShopDoorOut()

        // localisation (components)
        new LocalisedSprite(localisation)

        // ellipse_1 (components)
        const ellipse_1Seat = new Seat(ellipse_1)
        ellipse_1Seat.direction = 'southeast'

        // ellipse (components)
        const ellipseSeat = new Seat(ellipse)
        ellipseSeat.direction = 'southwest'

        // ellipse_2 (components)
        const ellipse_2Seat = new Seat(ellipse_2)
        ellipse_2Seat.direction = 'southeast'

        // ellipse_3 (components)
        const ellipse_3Seat = new Seat(ellipse_3)
        ellipse_3Seat.direction = 'southeast'

        this.dc_door = dc_door
        this.coffee_door = coffee_door
        this.clothes_door = clothes_door
        this.coloured_lights = coloured_lights
        this.main_lights = main_lights
        this.stars_anim = stars_anim
        this.speakers = speakers
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    dc_door
    /** @type {Phaser.GameObjects.Sprite} */
    coffee_door
    /** @type {Phaser.GameObjects.Sprite} */
    clothes_door
    /** @type {Phaser.GameObjects.Sprite} */
    coloured_lights
    /** @type {Phaser.GameObjects.Sprite} */
    main_lights
    /** @type {Phaser.GameObjects.Sprite} */
    stars_anim
    /** @type {Phaser.GameObjects.Sprite} */
    speakers
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()

        this.main_lights.play('town-lights')
        this.coloured_lights.play('town-disco_lights')
        this.speakers.play('town-speakers')
    }

    DiscoDoorOver() {
        this.dc_door.play('town-danceclubdoor')
        this.shell.musicController.addSfx('town-DoorDiscoOpen')
        this.stars_anim.visible = true
        this.stars_anim.play('town-starsanim')
    }

    DiscoDoorOut() {
        if (this.dc_door.anims.isPlaying) {
            this.dc_door.anims.reverse()
        } else {
            this.dc_door.playReverse('town-danceclubdoor')
        }
        this.stars_anim.stop('town-starsanim')
        this.shell.musicController.addSfx('town-DoorDiscoClose')
        this.stars_anim.visible = false
    }

    CoffeeDoorOver() {
        this.shell.musicController.addSfx('town-DoorCoffeeOpen')
    }

    CoffeeDoorOut() {
        this.shell.musicController.addSfx('town-DoorCoffeeClose')
    }

    ShopDoorOver() {
        this.shell.musicController.addSfx('town-DoorShopOpen')
    }

    ShopDoorOut() {
        this.shell.musicController.addSfx('town-DoorShopClose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
