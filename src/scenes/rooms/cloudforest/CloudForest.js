import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class CloudForest extends RoomScene {
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

        this.music = 1160

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('town-pack', 'client/media/rooms/town/town-pack.json')
    }

    /** @returns {void} */
    _create() {
        // dc_door
        const dc_door = this.add.sprite(852.6224744531738, 191.5476374205231, 'town', 'danceclubdoor0001')
        dc_door.setOrigin(0.5579637817944546, -0.002307969050704048)

        // bg
        const bg = this.add.image(-97.80423540374727, 986.0732936798435, 'town', 'bg')
        bg.setOrigin(0.0006852446809371995, 1.0032013740410073)

        // image
        this.add.image(1511, 613, 'town', 'sidetrees')

        // noticeboard
        const noticeboard = this.add.image(227, 532.0810695829088, 'town', 'bottom_left')
        noticeboard.setOrigin(0.5, -0.0009630584300948194)

        // front_trees
        const front_trees = this.add.image(-140.0645866423041, 732.6692749019403, 'town', 'bottom_trees')
        front_trees.setOrigin(-0.000037033625174373305, 0.012728011654378707)

        // coffee_door
        const coffee_door = this.add.sprite(425.0580922656529, 330.6070121767309, 'town', 'coffeedoor')
        coffee_door.setOrigin(0.5507261533206609, -0.0027676246941171125)

        // clothes_door
        const clothes_door = this.add.sprite(1113.9854670312639, 270.80911446172684, 'town', 'clothesdoor')
        clothes_door.setOrigin(0.4877768305251397, -0.01994307153677468)

        // bench_arm
        const bench_arm = this.add.image(262.5309753417969, 528.4562288520525, 'town', 'bench_side')
        bench_arm.setOrigin(0.47839655086139365, 0.7665475678359499)

        // clothes_rack
        const clothes_rack = this.add.image(1198.8140929688152, 391.8275851517446, 'town', 'clothesrack')
        clothes_rack.setOrigin(0.5072043625558867, 0.011544218710822484)

        // left_chair
        const left_chair = this.add.image(552.0159298652105, 429.7304992897617, 'town', 'leftchari')
        left_chair.setOrigin(0.43846826392076804, 0.2992761373118083)

        // right_chair
        const right_chair = this.add.image(702.9279176653323, 415.18392931025767, 'town', 'rightchair')
        right_chair.setOrigin(0.5418277481710252, 0.27855253873250896)

        // coloured_lights
        const coloured_lights = this.add.sprite(837.7591937679998, -86.67256088001315, 'town', 'disco_lights0001')
        coloured_lights.setOrigin(0.49671744383068733, 0.00587362442472057)

        // dance_cover
        const dance_cover = this.add.image(854.2408062320002, 332.31435637599895, 'town', 'roof')
        dance_cover.setOrigin(0.5079538861025653, 0.4574233155686223)

        // main_lights
        const main_lights = this.add.sprite(587.1898850479691, -34.59901073601432, 'town', 'lights0001')
        main_lights.setOrigin(0.00036237604574263714, 0.009681408322522898)

        // shopfronts
        const shopfronts = this.add.image(337, 194, 'town', 'shopfronts')
        shopfronts.setOrigin(-0.002646461293556528, 0.007956149379252361)

        // stars_anim
        const stars_anim = this.add.sprite(791.2004946319928, 275.1838753599971, 'town', 'starsanim0001')
        stars_anim.setOrigin(0.01746424311105394, 0.02276683384609813)
        stars_anim.visible = false

        // stars
        const stars = this.add.image(795.9229133279932, 278.66548782399735, 'town', 'stars')
        stars.setOrigin(0.016295875660959563, 0.014467126608638104)

        // table
        const table = this.add.image(628.362414669051, 476.3085517350086, 'town', 'table')
        table.setOrigin(0.5222867233277427, 0.7080516274288713)

        // lights_front
        this.add.image(849, 214, 'town', 'lights_front')

        // localisation
        const localisation = this.add.image(770, 266, 'town', 'localised-en')

        // ellipse_1
        const ellipse_1 = this.add.ellipse(567, 456, 40, 40)

        // ellipse
        const ellipse = this.add.ellipse(695, 449, 40, 40)

        // ellipse_2
        const ellipse_2 = this.add.ellipse(294, 501, 40, 40)

        // ellipse_3
        const ellipse_3 = this.add.ellipse(321, 477, 40, 40)

        // lists
        const sort = [bench_arm, left_chair, right_chair, table]

        // dc_door (components)
        const dc_doorSimpleButton = new SimpleButton(dc_door)
        dc_doorSimpleButton.hoverCallback = () => this.DiscoDoorOver()
        dc_doorSimpleButton.hoverOutCallback = () => this.DiscoDoorOut()
        const dc_doorMoveTo = new MoveTo(dc_door)
        dc_doorMoveTo.x = 890
        dc_doorMoveTo.y = 400

        // coffee_door (components)
        const coffee_doorMoveTo = new MoveTo(coffee_door)
        coffee_doorMoveTo.x = 460
        coffee_doorMoveTo.y = 450
        const coffee_doorButton = new Button(coffee_door)
        coffee_doorButton.spriteName = 'coffeedoor'
        coffee_doorButton.hoverCallback = () => this.CoffeeDoorOver()
        coffee_doorButton.hoverOutCallback = () => this.CoffeeDoorOut()
        coffee_doorButton.activeFrame = false

        // clothes_door (components)
        const clothes_doorMoveTo = new MoveTo(clothes_door)
        clothes_doorMoveTo.x = 1130
        clothes_doorMoveTo.y = 400
        const clothes_doorButton = new Button(clothes_door)
        clothes_doorButton.spriteName = 'clothesdoor'
        clothes_doorButton.hoverCallback = () => this.ShopDoorOver()
        clothes_doorButton.hoverOutCallback = () => this.ShopDoorOut()
        clothes_doorButton.activeFrame = false

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
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()

        this.main_lights.play('town_lights')
        this.coloured_lights.play('town_disco_lights')
    }

    DiscoDoorOver() {
        this.dc_door.play('town_danceclubdoor')
        this.shell.musicController.addSfx('town-DoorDiscoOpen')
        this.stars_anim.visible = true
        this.stars_anim.play('town_starsanim')
    }

    DiscoDoorOut() {
        if (this.dc_door.anims.isPlaying) {
            this.dc_door.anims.reverse()
        } else {
            this.dc_door.playReverse('town_danceclubdoor')
        }
        this.stars_anim.stop('town_starsanim')
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
