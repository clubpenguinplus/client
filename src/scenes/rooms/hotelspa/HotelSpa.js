import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class HotelSpa extends RoomScene {
    constructor() {
        super('HotelSpa')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            elevator: () => this.interface.loadExternal('Elevator'),
            treadmill1: {
                callback: () => this.startTreadmill1(),
                offCallback: () => this.stopTreadmill1(),
            },
            treadmill2: {
                callback: () => this.startTreadmill2(),
                offCallback: () => this.stopTreadmill2(),
            },
            mat1: {
                callback: () => this.startMat1(),
                offCallback: () => this.stopMat1(),
            },
            mat2: {
                callback: () => this.startMat2(),
                offCallback: () => this.stopMat2(),
            },
            mat3: {
                callback: () => this.startMat3(),
                offCallback: () => this.stopMat3(),
            },
            mat4: {
                callback: () => this.startMat4(),
                offCallback: () => this.stopMat4(),
            },
            chair1: () => this.startGrooming1(),
            chair2: () => this.startGrooming2(),
            washchair1: () => this.startWashChair1(),
            washchair2: () => this.startWashChair2(),
        }

        this.music = 361

        this.loadSfx = []

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('hotelspa-pack', 'client/media/rooms/hotelspa/hotelspa-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_bg
        this.add.image(780, 502, 'hotelspa', 'bg_bg')

        // elevatorAnim
        const elevatorAnim = this.add.sprite(85.35979609018158, 433.25580454045144, 'hotelspa', 'elevator_anim0001')
        elevatorAnim.setOrigin(0.6997355005932998, 0.834068403851872)

        // elevator_body0001
        this.add.image(45, 329, 'hotelspa', 'elevator_body0001')

        // bg_fg
        this.add.image(664, 258, 'hotelspa', 'bg_fg')

        // leftsupport
        this.add.image(679, 256, 'hotelspa', 'leftsupport')

        // lowwall
        const lowwall = this.add.image(903, 615, 'hotelspa', 'lowwall')

        // mat4
        const mat4 = this.add.image(422.07954716397467, 361.3863647759831, 'hotelspa', 'mat')
        mat4.setOrigin(0.3732921801385819, 0.2998132161093577)

        // mat3
        const mat3 = this.add.image(260.9554213775118, 497.94842766921454, 'hotelspa', 'mat')
        mat3.setOrigin(0.3667943432226116, 0.30751270779745943)

        // mat1
        const mat1 = this.add.image(357.33479244519765, 579.8243018827517, 'hotelspa', 'mat')
        mat1.setOrigin(0.334305158642761, 0.29211372442125594)

        // mat2
        const mat2 = this.add.image(537.0209811248919, 504.07255345567734, 'hotelspa', 'mat')
        mat2.setOrigin(0.34405191401671636, 0.32291169117366214)

        // dumbell2
        const dumbell2 = this.add.sprite(588, 484, 'hotelspa', 'dumbell0001')

        // dumbell1
        const dumbell1 = this.add.sprite(413, 560, 'hotelspa', 'dumbell0001')

        // railing
        const railing = this.add.image(287, 662, 'hotelspa', 'railing')

        // stuff
        this.add.image(283, 364, 'hotelspa', 'stuff')

        // treadmill2Container
        const treadmill2Container = this.add.container(511.3021313660537, 668.6457833793041)

        // treadmill2
        const treadmill2 = this.add.image(-86.56244437247108, 62.62293184326427, 'hotelspa', 'treadmill')
        treadmill2.setOrigin(0.2170877337106148, 0.6250703545637872)
        treadmill2Container.add(treadmill2)

        // treadmillAnim2
        const treadmillAnim2 = this.add.sprite(-13.302131366053686, 88.35421662069587, 'hotelspa', 'treadmill-anim0001')
        treadmill2Container.add(treadmillAnim2)

        // treadmillArm2
        const treadmillArm2 = this.add.image(46.697868633946314, 27.354216620695865, 'hotelspa', 'treadmill-arm')
        treadmill2Container.add(treadmillArm2)

        // treadmill1Container
        const treadmill1Container = this.add.container(231, 694)

        // treadmill1
        const treadmill1 = this.add.image(-60.33976564954716, 35.48172281205552, 'hotelspa', 'treadmill')
        treadmill1.setOrigin(0.21671471371734244, 0.6221117384779349)
        treadmill1Container.add(treadmill1)

        // treadmillAnim1
        const treadmillAnim1 = this.add.sprite(13, 62, 'hotelspa', 'treadmill-anim0001')
        treadmill1Container.add(treadmillAnim1)

        // treadmillArm1
        const treadmillArm1 = this.add.image(72, 0, 'hotelspa', 'treadmill-arm')
        treadmill1Container.add(treadmillArm1)

        // punching_bag
        const punching_bag = this.add.image(-3, 701, 'hotelspa', 'punching-bag')

        // speakerLeftAnim
        const speakerLeftAnim = this.add.sprite(216, 187, 'hotelspa', 'speaker_left0001')

        // speakerRightAnim
        const speakerRightAnim = this.add.sprite(587, 188, 'hotelspa', 'speaker_right0001')

        // dunmbells
        const dunmbells = this.add.image(741, 887, 'hotelspa', 'dunmbells')

        // bottle
        const bottle = this.add.image(375, 501, 'hotelspa', 'bottle')

        // chair_left
        const chair_left = this.add.image(1039.7666620413545, 389.37671115102614, 'hotelspa', 'chair-left')
        chair_left.setOrigin(0.21849814308436535, 0.6226374123482667)

        // chair_right
        const chair_right = this.add.image(1222.5572863233251, 388.65928113602314, 'hotelspa', 'chair-right')
        chair_right.setOrigin(0.21342779411653068, 0.6117676021267288)

        // divider
        const divider = this.add.image(1390, 294, 'hotelspa', 'divider')

        // products
        const products = this.add.image(1545, 722, 'hotelspa', 'products')

        // bubbles
        const bubbles = this.add.image(1241, 659, 'hotelspa', 'bubbles')

        // washchair_left
        const washchair_left = this.add.image(990.917266870359, 712.0340295067676, 'hotelspa', 'washchair-left')
        washchair_left.setOrigin(0.2463636107875937, 0.6637104182559236)

        // washchair_right
        const washchair_right = this.add.image(1299.2148001745934, 700.2194814491494, 'hotelspa', 'washchair-right')
        washchair_right.setOrigin(0.2673588793205299, 0.5447547643162591)

        // washchair_arm
        const washchair_arm = this.add.image(1427, 722, 'hotelspa', 'washchair-arm')

        // cloth
        const cloth = this.add.image(1433, 831, 'hotelspa', 'cloth')

        // otherbottle
        const otherbottle = this.add.image(311, 799, 'hotelspa', 'otherbottle')

        // fg
        const fg = this.add.image(847, 1209.67275803794, 'hotelspa', 'fg')
        fg.setOrigin(0.5, 2.1360856567311566)

        // interfaceBtn
        const interfaceBtn = this.add.image(1429, 1463.1743877493623, 'hotelspa', 'interface')
        interfaceBtn.setOrigin(0.5, 4.776625998183785)

        // groomAnim1
        const groomAnim1 = this.add.sprite(1094, 1016.2585891146189, 'hotelspa', 'groom-anim0001')
        groomAnim1.setOrigin(0.5, 2.0161833982000315)

        // groomAnim2
        const groomAnim2 = this.add.sprite(1302, 1023.0814144065191, 'hotelspa', 'groom-anim0001')
        groomAnim2.scaleX = -1
        groomAnim2.setOrigin(0.5, 2.0274981996791364)

        // washAnim1
        const washAnim1 = this.add.sprite(1085, 1117.970074905756, 'hotelspa', 'wash-anim0001')
        washAnim1.setOrigin(0.5, 1.2454243570842058)

        // washAnim2
        const washAnim2 = this.add.sprite(1344, 1172.552677240957, 'hotelspa', 'wash-anim0001')
        washAnim2.scaleX = -1
        washAnim2.setOrigin(0.5, 1.385739530182409)

        // rightsupport
        this.add.image(872, 256, 'hotelspa', 'rightsupport')

        // stool
        this.add.image(774, 401, 'hotelspa', 'stool')

        // lists
        const sort = [washAnim2, washAnim1, groomAnim2, groomAnim1, interfaceBtn, fg, otherbottle, cloth, washchair_arm, washchair_right, washchair_left, bubbles, products, divider, chair_right, chair_left, bottle, dunmbells, speakerRightAnim, speakerLeftAnim, punching_bag, railing, lowwall, treadmill2Container, treadmill1Container]

        // elevatorAnim (components)
        const elevatorAnimSimpleButton = new SimpleButton(elevatorAnim)
        elevatorAnimSimpleButton.hoverCallback = () => this.onElevatorOver()
        elevatorAnimSimpleButton.hoverOutCallback = () => this.onElevatorOut()
        new MoveTo(elevatorAnim)

        // mat4 (components)
        new MoveTo(mat4)
        new SimpleButton(mat4)

        // mat3 (components)
        new MoveTo(mat3)
        new SimpleButton(mat3)

        // mat1 (components)
        new MoveTo(mat1)
        new SimpleButton(mat1)

        // mat2 (components)
        new MoveTo(mat2)
        new SimpleButton(mat2)

        // treadmill2 (components)
        const treadmill2SimpleButton = new SimpleButton(treadmill2)
        treadmill2SimpleButton.hoverCallback = () => this.onTreadmill2Over()
        treadmill2SimpleButton.hoverOutCallback = () => this.onTreadmill2Out()
        treadmill2SimpleButton.pixelPerfect = true
        new MoveTo(treadmill2)

        // treadmill1 (components)
        const treadmill1SimpleButton = new SimpleButton(treadmill1)
        treadmill1SimpleButton.hoverCallback = () => this.onTreadmill1Over()
        treadmill1SimpleButton.hoverOutCallback = () => this.onTreadmill1Out()
        treadmill1SimpleButton.pixelPerfect = true
        new MoveTo(treadmill1)

        // chair_left (components)
        const chair_leftButton = new Button(chair_left)
        chair_leftButton.spriteName = 'chair-left'
        chair_leftButton.activeFrame = false
        new MoveTo(chair_left)

        // chair_right (components)
        const chair_rightButton = new Button(chair_right)
        chair_rightButton.spriteName = 'chair-right'
        chair_rightButton.activeFrame = false
        new MoveTo(chair_right)

        // washchair_left (components)
        const washchair_leftButton = new Button(washchair_left)
        washchair_leftButton.spriteName = 'washchair-left'
        washchair_leftButton.activeFrame = false
        new MoveTo(washchair_left)

        // washchair_right (components)
        const washchair_rightSimpleButton = new SimpleButton(washchair_right)
        washchair_rightSimpleButton.hoverCallback = () => this.onWashchair2Over()
        washchair_rightSimpleButton.hoverOutCallback = () => this.onWashchair2Out()
        new MoveTo(washchair_right)

        // interfaceBtn (components)
        const interfaceBtnButton = new Button(interfaceBtn)
        interfaceBtnButton.spriteName = 'interface'
        interfaceBtnButton.callback = () => this.interface.loadExternal('RainbowQuest')

        this.elevatorAnim = elevatorAnim
        this.dumbell2 = dumbell2
        this.dumbell1 = dumbell1
        this.treadmill2 = treadmill2
        this.treadmillAnim2 = treadmillAnim2
        this.treadmillArm2 = treadmillArm2
        this.treadmill1 = treadmill1
        this.treadmillAnim1 = treadmillAnim1
        this.treadmillArm1 = treadmillArm1
        this.speakerLeftAnim = speakerLeftAnim
        this.speakerRightAnim = speakerRightAnim
        this.washchair_right = washchair_right
        this.washchair_arm = washchair_arm
        this.groomAnim1 = groomAnim1
        this.groomAnim2 = groomAnim2
        this.washAnim1 = washAnim1
        this.washAnim2 = washAnim2
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    elevatorAnim
    /** @type {Phaser.GameObjects.Sprite} */
    dumbell2
    /** @type {Phaser.GameObjects.Sprite} */
    dumbell1
    /** @type {Phaser.GameObjects.Image} */
    treadmill2
    /** @type {Phaser.GameObjects.Sprite} */
    treadmillAnim2
    /** @type {Phaser.GameObjects.Image} */
    treadmillArm2
    /** @type {Phaser.GameObjects.Image} */
    treadmill1
    /** @type {Phaser.GameObjects.Sprite} */
    treadmillAnim1
    /** @type {Phaser.GameObjects.Image} */
    treadmillArm1
    /** @type {Phaser.GameObjects.Sprite} */
    speakerLeftAnim
    /** @type {Phaser.GameObjects.Sprite} */
    speakerRightAnim
    /** @type {Phaser.GameObjects.Image} */
    washchair_right
    /** @type {Phaser.GameObjects.Image} */
    washchair_arm
    /** @type {Phaser.GameObjects.Sprite} */
    groomAnim1
    /** @type {Phaser.GameObjects.Sprite} */
    groomAnim2
    /** @type {Phaser.GameObjects.Sprite} */
    washAnim1
    /** @type {Phaser.GameObjects.Sprite} */
    washAnim2
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()

        this.speakerLeftAnim.play('hotelspa-speaker_left')
        this.speakerRightAnim.play('hotelspa-speaker_right')
    }

    onTreadmill1Over() {
        this.treadmill1.setFrame('treadmill-hover')
        this.treadmillArm1.setFrame('treadmill-arm-hover')
    }

    onTreadmill1Out() {
        this.treadmill1.setFrame('treadmill')
        this.treadmillArm1.setFrame('treadmill-arm')
    }

    onTreadmill2Over() {
        this.treadmill2.setFrame('treadmill-hover')
        this.treadmillArm2.setFrame('treadmill-arm-hover')
    }

    onTreadmill2Out() {
        this.treadmill2.setFrame('treadmill')
        this.treadmillArm2.setFrame('treadmill-arm')
    }

    onWashchair2Over() {
        this.washchair_right.setFrame('washchair-right-hover')
        this.washchair_arm.setFrame('washchair-arm-hover')
    }

    onWashchair2Out() {
        this.washchair_right.setFrame('washchair-right')
        this.washchair_arm.setFrame('washchair-arm')
    }

    onElevatorOver() {
        if (this.elevatorAnim.anims.isPlaying) {
            if (this.elevatorAnim.anims.inReverse) this.elevatorAnim.anims.reverse()
        } else {
            this.elevatorAnim.anims.play('hotelspa-elevator_anim')
        }
    }

    onElevatorOut() {
        if (this.elevatorAnim.anims.isPlaying) {
            if (!this.elevatorAnim.anims.inReverse) this.elevatorAnim.anims.reverse()
        } else {
            this.elevatorAnim.anims.playReverse('hotelspa-elevator_anim')
        }
    }

    startTreadmill1() {
        this.treadmillAnim1.play('hotelspa-treadmill-anim')
    }

    stopTreadmill1() {
        this.treadmillAnim1.anims.stopAfterRepeat(0)
    }

    startTreadmill2() {
        this.treadmillAnim2.play('hotelspa-treadmill-anim')
    }

    stopTreadmill2() {
        this.treadmillAnim2.anims.stopAfterRepeat(0)
    }

    startMat1() {
        this.dumbell1.play('hotelspa-dumbell')
    }

    stopMat1() {
        this.dumbell1.anims.stopAfterRepeat(0)
    }

    startMat2() {
        this.dumbell2.play('hotelspa-dumbell')
    }

    stopMat2() {
        this.dumbell2.anims.stopAfterRepeat(0)
    }

    startMat3() {}

    stopMat3() {}

    startMat4() {}

    stopMat4() {}

    startGrooming1() {
        this.groomAnim1.play('hotelspa-groom-anim')
    }

    startGrooming2() {
        this.groomAnim2.play('hotelspa-groom-anim')
    }

    startWashChair1() {
        this.washAnim1.play('hotelspa-wash-anim')
    }

    startWashChair2() {
        this.washAnim2.play('hotelspa-wash-anim')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
