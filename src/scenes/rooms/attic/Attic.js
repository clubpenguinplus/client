import RoomScene from '@scenes/rooms/RoomScene'

import {Animation, Button, MoveTo, ShowHint, SimpleButton, Seat, WaddleSeat} from '@components/components'

/* START OF COMPILED CODE */

export default class Attic extends RoomScene {
    constructor() {
        super('Attic')

        /** @type {Phaser.GameObjects.Sprite} */
        this.horse
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxdimension
        /** @type {Phaser.GameObjects.Rectangle} */
        this.boxdimension_btn
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxdimension_anim
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxdimension_flaps
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats203
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats202
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats201
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats200

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            lodge: () => this.triggerRoom(220, 1180, 360),
            boxdimension: () => this.triggerRoom(811, 1180, 260)
        }
        this.music = 884
        this.tables = {}
        this.loadSfx = ['attic-HorseNeigh', 'attic-BoxOpen', 'attic-BoxClose', 'attic-BoxLoop']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('attic-pack', 'client/media/rooms/attic/attic-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(-105, -15, 'attic', 'bg')
        bg.setOrigin(0, 0)

        // pizzabox
        this.add.image(212, 535, 'attic', 'pizzabox')

        // leftbluechair
        const leftbluechair = this.add.image(71, 578, 'attic', 'leftbluechair')

        // bluechair
        const bluechair = this.add.image(148.60520449114657, 499.39479550885346, 'attic', 'bluechair')
        bluechair.setOrigin(0.6229437733913884, 0.38541162868375467)

        // rug
        const rug = this.add.image(195.41565813862397, 735.5843418613761, 'attic', 'rug')
        rug.setOrigin(0.5604710352035555, 0.4314344167770711)

        // lamp
        const lamp = this.add.image(25.779589508140994, 594.693842622115, 'attic', 'lamp')
        lamp.setOrigin(0.5243823641065, 0.7229617252519517)

        // pirate_fixed
        this.add.image(1410, 284, 'attic', 'pirate_fixed')

        // paintings
        this.add.image(1429, 446, 'attic', 'paintings')

        // pufflebag
        this.add.image(1331, 500, 'attic', 'pufflebag')

        // yellowpuffbag
        this.add.image(1386, 557, 'attic', 'yellowpuffbag')

        // horse
        const horse = this.add.sprite(1469, 570, 'attic', 'horse0001')
        horse.setOrigin(0.544, 0.503185)

        // chairback
        const chairback = this.add.image(1166.1846078201497, 596.6769363147381, 'attic', 'chairback')
        chairback.setOrigin(0.7049975020391702, 0.09186185735317463)

        // circlestool
        const circlestool = this.add.image(1052, 715.4476985483765, 'attic', 'circlestool')
        circlestool.setOrigin(0.5, 0.22341352654558833)

        // plantable
        const plantable = this.add.image(1246.0092549755211, 666.7338652541221, 'attic', 'plantable')
        plantable.setOrigin(0.4564226314804238, 0.3339699491107722)

        // squarestool
        const squarestool = this.add.image(1160.1953848044964, 783.4015465933392, 'attic', 'squarestool')
        squarestool.setOrigin(0.49399540898877886, 0.2209802144624126)

        // fg_left
        const fg_left = this.add.image(-161, 969, 'attic', 'fg_left')
        fg_left.setOrigin(0.004053513024603988, 0.9838982835484917)

        // brownchairfront
        this.add.image(766, 758, 'attic', 'brownchairfront')

        // brownchair
        const brownchair = this.add.image(764, 897, 'attic', 'brownchair')
        brownchair.setOrigin(0.503982979899936, 0.6854659688099547)

        // boxdimension
        const boxdimension = this.add.sprite(966, 971, 'attic', 'boxdimension')
        boxdimension.setOrigin(0.47834338839237844, 1.011384788761301)

        // boxdimension_btn
        const boxdimension_btn = this.add.rectangle(967, 864, 200, 200)

        // boxdimension-anim
        const boxdimension_anim = this.add.sprite(964, 991, 'attic', 'boxdimension-hover-anim0001')
        boxdimension_anim.setOrigin(0.49999999999999933, 1.8995033355331223)
        boxdimension_anim.visible = false

        // boxdimension-flaps
        const boxdimension_flaps = this.add.sprite(981, 1014.9631945186845, 'attic', 'boxdimension-hover-flaps')
        boxdimension_flaps.setOrigin(0.47834338839237844, 1.6725657121405844)
        boxdimension_flaps.visible = false

        // fg_right
        const fg_right = this.add.image(1679, 1150, 'attic', 'fg_right')
        fg_right.setOrigin(0.9977534832559671, 1.0049481046883484)

        // frontpizzabox
        const frontpizzabox = this.add.image(537, 927.0003486965516, 'attic', 'frontpizzabox')
        frontpizzabox.setOrigin(0.5, 0.6917832102503532)

        // leftpencil
        this.add.image(1160, 693, 'attic', 'leftpencil')

        // circlestoolmirror
        const circlestoolmirror = this.add.image(309, 446.4979269430127, 'attic', 'circlestoolmirror')
        circlestoolmirror.setOrigin(0.5, 0.23284831428784541)

        // leftstairhandle
        const leftstairhandle = this.add.image(753.2325890753189, 471.0308788528382, 'attic', 'leftstairhandle')
        leftstairhandle.setOrigin(0.6133198013694338, 0.23500896788610423)

        // rightstairhandle
        const rightstairhandle = this.add.image(869.883720505676, 575.5735707900989, 'attic', 'rightstairhandle')
        rightstairhandle.setOrigin(0.46612723328631056, 0.3797219652131449)

        // findfourtable
        const findfourtable = this.add.image(248, 626, 'attic', 'findfourtable')

        // findfourtable_1
        const findfourtable_1 = this.add.image(360, 698, 'attic', 'findfourtable')

        // findfourtable_3
        const findfourtable_3 = this.add.image(679, 633, 'attic', 'findfourtable')
        findfourtable_3.flipX = true

        // findfourtable_2
        const findfourtable_2 = this.add.image(577, 704, 'attic', 'findfourtable')
        findfourtable_2.flipX = true

        // leftsoda
        const leftsoda = this.add.image(1127.0949891243745, 676.4124909369787, 'attic', 'leftsoda')
        leftsoda.setOrigin(0.31616253777615067, 0.40589272767112367)

        // rightpencil
        this.add.image(1199, 723, 'attic', 'rightpencil')

        // apple
        const apple = this.add.image(1234, 615, 'attic', 'apple')

        // book
        const book = this.add.image(1190, 646, 'attic', 'book')

        // rightsoda
        const rightsoda = this.add.image(1270, 572, 'attic', 'rightsoda')

        // ellipse_1
        const ellipse_1 = this.add.ellipse(309, 453, 70, 40)

        // ellipse
        const ellipse = this.add.ellipse(129, 549, 60, 60)

        // ellipse_2
        const ellipse_2 = this.add.ellipse(713, 805, 70, 70)

        // ellipse_3
        const ellipse_3 = this.add.ellipse(807, 754, 70, 70)

        // ellipse_4
        const ellipse_4 = this.add.ellipse(1052, 724, 70, 40)

        // ellipse_5
        const ellipse_5 = this.add.ellipse(1160, 797, 70, 40)

        // ellipse_6
        const ellipse_6 = this.add.ellipse(1115, 646, 50, 40)

        // ellipse_7
        const ellipse_7 = this.add.ellipse(1168, 609, 50, 40)

        // ellipse_8
        const ellipse_8 = this.add.ellipse(580, 605, 50, 50)
        ellipse_8.visible = false

        // ellipse_9
        const ellipse_9 = this.add.ellipse(796, 744, 50, 50)
        ellipse_9.visible = false

        // ellipse_10
        const ellipse_10 = this.add.ellipse(697, 806, 50, 50)
        ellipse_10.visible = false

        // ellipse_11
        const ellipse_11 = this.add.ellipse(505, 673, 50, 50)
        ellipse_11.visible = false

        // ellipse_12
        const ellipse_12 = this.add.ellipse(404, 665, 50, 50)
        ellipse_12.visible = false

        // ellipse_13
        const ellipse_13 = this.add.ellipse(220, 758, 50, 50)
        ellipse_13.visible = false

        // ellipse_14
        const ellipse_14 = this.add.ellipse(309, 613, 50, 50)
        ellipse_14.visible = false

        // ellipse_15
        const ellipse_15 = this.add.ellipse(131, 679, 50, 50)
        ellipse_15.visible = false

        // lists
        const sort = [horse, fg_left, fg_right, plantable, brownchair, frontpizzabox, boxdimension, circlestoolmirror, leftstairhandle, rightstairhandle, rug, lamp, leftbluechair, findfourtable, leftsoda, book, apple, rightsoda, boxdimension_anim, boxdimension_flaps, squarestool, circlestool, chairback]
        const seats203 = [ellipse_8, ellipse_9]
        const seats202 = [ellipse_11, ellipse_10]
        const seats201 = [ellipse_12, ellipse_13]
        const seats200 = [ellipse_14, ellipse_15]

        // horse (components)
        const horseSimpleButton = new SimpleButton(horse)
        horseSimpleButton.hoverCallback = () => this.onHorseOver()

        // boxdimension_btn (components)
        const boxdimension_btnSimpleButton = new SimpleButton(boxdimension_btn)
        boxdimension_btnSimpleButton.hoverCallback = () => this.onBoxDimOver()
        boxdimension_btnSimpleButton.hoverOutCallback = () => this.onBoxDimOut()
        const boxdimension_btnMoveTo = new MoveTo(boxdimension_btn)
        boxdimension_btnMoveTo.x = 968
        boxdimension_btnMoveTo.y = 816

        // findfourtable (components)
        const findfourtableButton = new Button(findfourtable)
        findfourtableButton.callback = () => this.triggerWaddle(200)
        const findfourtableShowHint = new ShowHint(findfourtable)
        findfourtableShowHint.text = 'four'

        // findfourtable_1 (components)
        const findfourtable_1Button = new Button(findfourtable_1)
        findfourtable_1Button.callback = () => this.triggerWaddle(201)
        const findfourtable_1ShowHint = new ShowHint(findfourtable_1)
        findfourtable_1ShowHint.text = 'four'

        // findfourtable_3 (components)
        const findfourtable_3Button = new Button(findfourtable_3)
        findfourtable_3Button.callback = () => this.triggerWaddle(203)
        const findfourtable_3ShowHint = new ShowHint(findfourtable_3)
        findfourtable_3ShowHint.text = 'four'

        // findfourtable_2 (components)
        const findfourtable_2Button = new Button(findfourtable_2)
        findfourtable_2Button.callback = () => this.triggerWaddle(202)
        const findfourtable_2ShowHint = new ShowHint(findfourtable_2)
        findfourtable_2ShowHint.text = 'four'

        // ellipse_1 (components)
        const ellipse_1Seat = new Seat(ellipse_1)
        ellipse_1Seat.direction = 'west'

        // ellipse (components)
        const ellipseSeat = new Seat(ellipse)
        ellipseSeat.direction = 'southeast'

        // ellipse_2 (components)
        const ellipse_2Seat = new Seat(ellipse_2)
        ellipse_2Seat.direction = 'northwest'

        // ellipse_3 (components)
        const ellipse_3Seat = new Seat(ellipse_3)
        ellipse_3Seat.direction = 'northwest'

        // ellipse_4 (components)
        const ellipse_4Seat = new Seat(ellipse_4)
        ellipse_4Seat.direction = 'east'

        // ellipse_5 (components)
        const ellipse_5Seat = new Seat(ellipse_5)
        ellipse_5Seat.direction = 'northeast'

        // ellipse_6 (components)
        const ellipse_6Seat = new Seat(ellipse_6)
        ellipse_6Seat.direction = 'southeast'

        // ellipse_7 (components)
        const ellipse_7Seat = new Seat(ellipse_7)
        ellipse_7Seat.direction = 'southeast'

        // ellipse_8 (components)
        const ellipse_8WaddleSeat = new WaddleSeat(ellipse_8)
        ellipse_8WaddleSeat.sitdirection = 'southeast'

        // ellipse_9 (components)
        const ellipse_9WaddleSeat = new WaddleSeat(ellipse_9)
        ellipse_9WaddleSeat.sitdirection = 'northwest'

        // ellipse_10 (components)
        const ellipse_10WaddleSeat = new WaddleSeat(ellipse_10)
        ellipse_10WaddleSeat.sitdirection = 'northwest'

        // ellipse_11 (components)
        const ellipse_11WaddleSeat = new WaddleSeat(ellipse_11)
        ellipse_11WaddleSeat.sitdirection = 'southeast'

        // ellipse_12 (components)
        const ellipse_12WaddleSeat = new WaddleSeat(ellipse_12)
        ellipse_12WaddleSeat.sitdirection = 'southwest'

        // ellipse_13 (components)
        const ellipse_13WaddleSeat = new WaddleSeat(ellipse_13)
        ellipse_13WaddleSeat.sitdirection = 'northeast'

        // ellipse_14 (components)
        const ellipse_14WaddleSeat = new WaddleSeat(ellipse_14)
        ellipse_14WaddleSeat.sitdirection = 'southwest'

        // ellipse_15 (components)
        const ellipse_15WaddleSeat = new WaddleSeat(ellipse_15)
        ellipse_15WaddleSeat.sitdirection = 'northeast'

        this.horse = horse
        this.boxdimension = boxdimension
        this.boxdimension_btn = boxdimension_btn
        this.boxdimension_anim = boxdimension_anim
        this.boxdimension_flaps = boxdimension_flaps
        this.sort = sort
        this.seats203 = seats203
        this.seats202 = seats202
        this.seats201 = seats201
        this.seats200 = seats200

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.boxdimension_anim.play('attic-boxdimension')
    }

    onHorseOver() {
        this.horse.play('attic-horse')
        this.shell.musicController.addSfx('attic-HorseNeigh')
    }

    onBoxDimOver() {
        this.boxdimension.setFrame('boxdimension-hover')
        this.boxdimension_anim.visible = true
        this.boxdimension_flaps.visible = true
        this.shell.musicController.addSfx('attic-BoxOpen')
        this.shell.musicController.addSfx('attic-BoxLoop', true)
    }

    onBoxDimOut() {
        this.boxdimension.setFrame('boxdimension')
        this.boxdimension_anim.visible = false
        this.boxdimension_flaps.visible = false
        this.shell.musicController.stopSfx('attic-BoxLoop')
        this.shell.musicController.addSfx('attic-BoxClose')
    }

    triggerWaddle(id) {
        if (this.shell.client.activeSeat) {
            return
        }
        let four = this.crumbs.getString('four')
        let game = this.crumbs.getString('game')
        let text = this.crumbs.getString(`join-multiplayer,${four + ' ' + game}`)
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.airtower.sendXt('join_table', id)
            this.interface.prompt.window.visible = false
        })
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
