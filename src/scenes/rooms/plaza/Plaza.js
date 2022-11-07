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
        this.cover
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            pizza: () => this.triggerRoom(330, 760, 330)
        }

        this.music = '677'

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
        const parksign = this.add.sprite(-45, 358, 'plaza', 'park-hover')

        // buildings
        this.add.image(767, 325, 'plaza', 'buildings')

        // mall_sign_en
        const mall_sign_en = this.add.image(894, 65, 'plaza', 'mall_sign-en')

        // cover
        const cover = this.add.sprite(507, 673.9236627496881, 'plaza', 'cover_0001')
        cover.setOrigin(0.5, 1.6478945983850846)

        // mall_fg
        this.add.image(914, 302, 'plaza', 'mall_fg')

        // pet_door0001
        const pet_door0001 = this.add.image(385, 431, 'plaza', 'pet_door')

        // cannon
        const cannon = this.add.sprite(285, 433, 'plaza', 'cannon_0001')

        // buildings2
        this.add.image(480, 283, 'plaza', 'buildings2')

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
        this.add.image(1254, 285, 'plaza', 'pizza_sign')

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
        this.add.image(534, 147, 'plaza', 'puffle_hotel_sign')

        // rectangle_2
        const rectangle_2 = this.add.rectangle(126, 347, 128, 128)
        rectangle_2.scaleX = 1.569424637449067
        rectangle_2.scaleY = 2.2133166412822716
        rectangle_2.fillColor = 47333
        rectangle_2.fillAlpha = 100

        // lists
        const sort = [fg_2, fg_1, cover, rectangle]

        // mall_sign_en (components)
        new LocalisedSprite(mall_sign_en)

        // pet_door0001 (components)
        const pet_door0001Button = new Button(pet_door0001)
        pet_door0001Button.spriteName = 'pet_door'
        pet_door0001Button.hoverCallback = () => this.onPetOver()
        pet_door0001Button.activeFrame = false
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
        pizza_door0001Button.spriteName = 'pizza_door'
        pizza_door0001Button.hoverCallback = () => this.onPizzaOver()
        pizza_door0001Button.hoverOutCallback = () => this.onPizzaOut()
        pizza_door0001Button.activeFrame = false
        const pizza_door0001MoveTo = new MoveTo(pizza_door0001)
        pizza_door0001MoveTo.x = 1224
        pizza_door0001MoveTo.y = 480

        // mall_door0001 (components)
        const mall_door0001Button = new Button(mall_door0001)
        mall_door0001Button.spriteName = 'mall_door'
        mall_door0001Button.hoverCallback = () => this.onMallOver()
        mall_door0001Button.hoverOutCallback = () => this.onMallOut()
        mall_door0001Button.activeFrame = false
        const mall_door0001MoveTo = new MoveTo(mall_door0001)
        mall_door0001MoveTo.x = 920
        mall_door0001MoveTo.y = 460

        // hotel_door0001 (components)
        const hotel_door0001Button = new Button(hotel_door0001)
        hotel_door0001Button.spriteName = 'hotel_door'
        hotel_door0001Button.hoverCallback = () => this.onHotelOver()
        hotel_door0001Button.hoverOutCallback = () => this.onHotelOut()
        hotel_door0001Button.activeFrame = false
        const hotel_door0001MoveTo = new MoveTo(hotel_door0001)
        hotel_door0001MoveTo.x = 644
        hotel_door0001MoveTo.y = 468

        // flag1_0001 (components)
        const flag1_0001Animation = new Animation(flag1_0001)
        flag1_0001Animation.key = 'flag1_'
        flag1_0001Animation.end = 15

        // flag (components)
        const flagAnimation = new Animation(flag)
        flagAnimation.key = 'flag1_'
        flagAnimation.end = 15

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

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2)
        rectangle_2SimpleButton.hoverCallback = () => this.parksign.setFrame('park-hover')
        rectangle_2SimpleButton.hoverOutCallback = () => this.parksign.setFrame('park')

        this.parksign = parksign
        this.cover = cover
        this.cannon = cannon
        this.puffle = puffle
        this.smoke = smoke
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onPuffleOver() {
        this.shell.musicController.addSfx('PlazaCannon')
        this.smoke.__Animation.play()
        this.puffle.__Animation.play()
        this.cannon.__Animation.play()
    }

    onHoleOver() {
        this.shell.musicController.addSfx('HoleOpen')
        this.cover.play('plaza-holeopen')
    }

    onHoleOut() {
        this.shell.musicController.addSfx('HoleClose')
        this.cover.play('plaza-holeclose')
    }

    onMallOver() {
        this.shell.musicController.addSfx('StageOpen')
    }

    onMallOut() {
        this.shell.musicController.addSfx('StageClose')
    }

    onPizzaOver() {
        this.shell.musicController.addSfx('PizzaOpen')
    }

    onPizzaOut() {
        this.shell.musicController.addSfx('PizzaClose')
    }

    onHotelOver() {
        this.shell.musicController.addSfx('HotelOpen')
    }

    onHotelOut() {
        this.shell.musicController.addSfx('HotelClose')
    }

    onPetOver() {
        this.shell.musicController.addSfx('PetOpen')
    }

    onPetOut() {
        this.shell.musicController.addSfx('PetClose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
