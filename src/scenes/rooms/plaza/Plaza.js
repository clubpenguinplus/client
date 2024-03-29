import RoomScene from '../RoomScene'
import Main from '@scenes/interface/game/main/Main'

import {Animation, Button, MoveTo, SimpleButton, Zone, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {
    constructor() {
        super('Plaza')

        /** @type {Phaser.GameObjects.Sprite} */
        this.parksign
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon
        /** @type {Phaser.GameObjects.Sprite} */
        this.cover
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            pizza: () => this.triggerRoom(330, 760, 330),
            mall: () => this.triggerRoom(340, 250, 700),
            pet: () => this.triggerRoom(310, 828, 520),
            cave: () => {
                this.shell.client.stampEarned(10)
                this.triggerRoom(806, 1242, 685)
            },
            forts: () => this.triggerRoom(801, 1320, 460),
            forest: () => this.triggerRoom(809, 150, 320),
            hotel: () => this.triggerRoom(430, 800, 350),
            park: () => this.interface.prompt.showError(this.shell.crumbs.getError(54))
        }

        this.music = 677

        this.loadSfx = ['plaza-Cannon', 'plaza-HoleOpen', 'plaza-HoleClose', 'plaza-StageOpen', 'plaza-StageClose', 'plaza-PizzaOpen', 'plaza-PizzaClose', 'plaza-HotelOpen', 'plaza-HotelClose', 'plaza-PetOpen', 'plaza-PetClose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('plaza-pack', 'client/media/rooms/plaza/plaza-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'plaza', 'bg')
        bg.setOrigin(0, 0)

        // parksign
        const parksign = this.add.sprite(-45, 358, 'plaza', 'park')

        // signText_en
        const signText_en = this.add.image(147, 261, 'plaza', 'signText-en')

        // buildings
        this.add.image(767, 325, 'plaza', 'buildings')

        // pole
        this.add.image(1082, 77, 'plaza', 'pole')

        // pole_1
        const pole_1 = this.add.image(753, 81, 'plaza', 'pole')
        pole_1.angle = -22

        // flag1_0001
        const flag1_0001 = this.add.sprite(1107, 79, 'plaza', 'flag1_0001')

        // flag
        const flag = this.add.sprite(778, 71, 'plaza', 'flag1_0001')
        flag.angle = -27

        // mall_sign_en
        const mall_sign_en = this.add.image(894, 65, 'plaza', 'mall_sign-en')

        // mall_fg
        this.add.image(914, 302, 'plaza', 'mall_fg')

        // pet_door0001
        const pet_door0001 = this.add.image(385, 431, 'plaza', 'pet_door')

        // cannon
        const cannon = this.add.sprite(285, 433, 'plaza', 'cannon_0001')

        // buildings2
        this.add.image(480, 283, 'plaza', 'buildings2')

        // cover
        const cover = this.add.sprite(507, 673.9236627496881, 'plaza', 'cover_0001')
        cover.setOrigin(0.5, 1.6478945983850846)

        // pet_sign_en
        const pet_sign_en = this.add.image(362, 292, 'plaza', 'pet_sign-en')

        // pizza_door0001
        const pizza_door0001 = this.add.image(1222, 417, 'plaza', 'pizza_door')

        // mall_door0001
        const mall_door0001 = this.add.image(918, 404, 'plaza', 'mall_door')

        // hotel_door0001
        const hotel_door0001 = this.add.image(643, 409, 'plaza', 'hotel_door')

        // fg_2
        const fg_2 = this.add.image(203.14926228192448, 755.2392501923956, 'plaza', 'fg_2')
        fg_2.setOrigin(0.616515661435073, 0.4097499303023767)

        // fg_3
        this.add.image(1567, 692, 'plaza', 'fg_3')

        // fg_1
        const fg_1 = this.add.image(1421.4777668477834, 754.5607223603644, 'plaza', 'fg_1')
        fg_1.setOrigin(0.42192926018256904, 0.20276760019732185)

        // pizza_sign
        const pizza_sign = this.add.image(1254, 285, 'plaza', 'pizza_sign')

        // puffle
        const puffle = this.add.sprite(-8, 231, 'plaza', 'puffle_0001')

        // smoke
        const smoke = this.add.sprite(183, 251, 'plaza', 'smoke_0001')

        // rectangle_1
        const rectangle_1 = this.add.rectangle(253, 439, 128, 128)
        rectangle_1.scaleX = 1.084041731335266
        rectangle_1.scaleY = 1.0910348521771707
        rectangle_1.isFilled = true
        rectangle_1.fillColor = 47333
        rectangle_1.fillAlpha = 100

        // rectangle
        const rectangle = this.add.rectangle(502.45727104401004, 571.0704385968158, 128, 128)
        rectangle.scaleX = 1.0752579888181788
        rectangle.scaleY = 0.5000892234118466
        rectangle.setOrigin(0.4379311114735458, 0.8916559230325944)
        rectangle.fillColor = 47333
        rectangle.fillAlpha = 100

        // puffle_hotel_sign
        const puffle_hotel_sign = this.add.image(534, 147, 'plaza', 'puffle_hotel_sign-en')

        // rectangle_2
        const rectangle_2 = this.add.rectangle(144.52093192533204, 498.8023298133302, 128, 128)
        rectangle_2.scaleX = 1.569424637449067
        rectangle_2.scaleY = 2.2133166412822716
        rectangle_2.setOrigin(0.5921960685294967, 1.0358273910455558)
        rectangle_2.fillColor = 47333
        rectangle_2.fillAlpha = 100

        // lists
        const sort = [fg_2, fg_1]

        // parksign (components)
        new LocalisedSprite(parksign)

        // signText_en (components)
        new LocalisedSprite(signText_en)

        // flag1_0001 (components)
        const flag1_0001Animation = new Animation(flag1_0001)
        flag1_0001Animation.key = 'flag1_'
        flag1_0001Animation.end = 15

        // flag (components)
        const flagAnimation = new Animation(flag)
        flagAnimation.key = 'flag1_'
        flagAnimation.end = 15

        // mall_sign_en (components)
        new LocalisedSprite(mall_sign_en)

        // pet_door0001 (components)
        const pet_door0001Button = new Button(pet_door0001)
        pet_door0001Button.hoverCallback = () => this.onPetOver()
        const pet_door0001MoveTo = new MoveTo(pet_door0001)
        pet_door0001MoveTo.x = 396
        pet_door0001MoveTo.y = 492

        // cannon (components)
        const cannonAnimation = new Animation(cannon)
        cannonAnimation.key = 'cannon_'
        cannonAnimation.end = 13
        cannonAnimation.repeat = 0
        cannonAnimation.autoPlay = false

        // pet_sign_en (components)
        new LocalisedSprite(pet_sign_en)

        // pizza_door0001 (components)
        const pizza_door0001Button = new Button(pizza_door0001)
        pizza_door0001Button.hoverCallback = () => this.onPizzaOver()
        pizza_door0001Button.hoverOutCallback = () => this.onPizzaOut()
        const pizza_door0001MoveTo = new MoveTo(pizza_door0001)
        pizza_door0001MoveTo.x = 1224
        pizza_door0001MoveTo.y = 480

        // mall_door0001 (components)
        const mall_door0001Button = new Button(mall_door0001)
        mall_door0001Button.hoverCallback = () => this.onMallOver()
        mall_door0001Button.hoverOutCallback = () => this.onMallOut()
        const mall_door0001MoveTo = new MoveTo(mall_door0001)
        mall_door0001MoveTo.x = 920
        mall_door0001MoveTo.y = 460

        // hotel_door0001 (components)
        const hotel_door0001Button = new Button(hotel_door0001)
        hotel_door0001Button.hoverCallback = () => this.onHotelOver()
        hotel_door0001Button.hoverOutCallback = () => this.onHotelOut()
        const hotel_door0001MoveTo = new MoveTo(hotel_door0001)
        hotel_door0001MoveTo.x = 644
        hotel_door0001MoveTo.y = 468

        // pizza_sign (components)
        new LocalisedSprite(pizza_sign)

        // puffle (components)
        const puffleAnimation = new Animation(puffle)
        puffleAnimation.key = 'puffle_'
        puffleAnimation.end = 12
        puffleAnimation.repeat = 0
        puffleAnimation.autoPlay = false

        // smoke (components)
        const smokeAnimation = new Animation(smoke)
        smokeAnimation.key = 'smoke_'
        smokeAnimation.end = 12
        smokeAnimation.repeat = 0
        smokeAnimation.autoPlay = false

        // rectangle_1 (components)
        const rectangle_1Zone = new Zone(rectangle_1)
        rectangle_1Zone.hoverCallback = () => this.onPuffleOver()

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle)
        rectangleSimpleButton.hoverCallback = () => this.onHoleOver()
        rectangleSimpleButton.hoverOutCallback = () => this.onHoleOut()
        rectangleSimpleButton.callback = () => this.shell.client.penguin.move(512, 560)

        // puffle_hotel_sign (components)
        new LocalisedSprite(puffle_hotel_sign)

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2)
        rectangle_2SimpleButton.hoverCallback = () => this.parksign.setFrame('park-hover')
        rectangle_2SimpleButton.hoverOutCallback = () => this.parksign.setFrame('park')
        new MoveTo(rectangle_2)

        this.parksign = parksign
        this.cannon = cannon
        this.cover = cover
        this.puffle = puffle
        this.smoke = smoke
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onPuffleOver() {
        this.shell.musicController.addSfx('plaza-Cannon')
        this.smoke.__Animation.play()
        this.puffle.__Animation.play()
        this.cannon.__Animation.play()
    }

    onHoleOver() {
        this.shell.musicController.addSfx('plaza-HoleOpen')
        this.cover.play('plaza-holeopen')
    }

    onHoleOut() {
        this.shell.musicController.addSfx('plaza-HoleClose')
        this.cover.play('plaza-holeclose')
    }

    onMallOver() {
        this.shell.musicController.addSfx('plaza-StageOpen')
    }

    onMallOut() {
        this.shell.musicController.addSfx('plaza-StageClose')
    }

    onPizzaOver() {
        this.shell.musicController.addSfx('plaza-PizzaOpen')
    }

    onPizzaOut() {
        this.shell.musicController.addSfx('plaza-PizzaClose')
    }

    onHotelOver() {
        this.shell.musicController.addSfx('plaza-HotelOpen')
    }

    onHotelOut() {
        this.shell.musicController.addSfx('plaza-HotelClose')
    }

    onPetOver() {
        this.shell.musicController.addSfx('plaza-PetOpen')
    }

    onPetOut() {
        this.shell.musicController.addSfx('plaza-PetClose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
