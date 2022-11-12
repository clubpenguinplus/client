import RoomScene from '@scenes/rooms/RoomScene'

import {Animation, Button, MoveTo, ShowHint, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class Attic extends RoomScene {
    constructor() {
        super('Attic')

        /** @type {Phaser.GameObjects.Sprite} */
        this.horse
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxdimension
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxdimension_anim
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxdimension_flaps
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            lodge: () => this.triggerRoom(220, 1180, 360),
        }
        this.music = '884'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('attic-pack', 'client/media/rooms/attic/attic-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(-105, -12, 'attic', 'bg')
        bg.setOrigin(0, 0)

        // pizzabox
        this.add.image(212, 538, 'attic', 'pizzabox')

        // leftbluechair
        const leftbluechair = this.add.image(71, 581, 'attic', 'leftbluechair')

        // bluechair
        const bluechair = this.add.image(148.60520449114657, 502.39479550885346, 'attic', 'bluechair')
        bluechair.setOrigin(0.6229437733913884, 0.38541162868375467)

        // rug
        const rug = this.add.image(195.41565813862397, 738.5843418613761, 'attic', 'rug')
        rug.setOrigin(0.5604710352035555, 0.4314344167770711)

        // lamp
        const lamp = this.add.image(25.779589508140994, 597.693842622115, 'attic', 'lamp')
        lamp.setOrigin(0.5243823641065, 0.7229617252519517)

        // pirate_fixed
        this.add.image(1410, 287, 'attic', 'pirate_fixed')

        // paintings
        this.add.image(1429, 449, 'attic', 'paintings')

        // pufflebag
        this.add.image(1331, 503, 'attic', 'pufflebag')

        // yellowpuffbag
        this.add.image(1386, 560, 'attic', 'yellowpuffbag')

        // horse
        const horse = this.add.sprite(1469, 573, 'attic', 'horse0001')
        horse.setOrigin(0.544, 0.503185)

        // chairback
        this.add.image(1134, 656, 'attic', 'chairback')

        // circlestool
        this.add.image(1052, 745, 'attic', 'circlestool')

        // plantable
        const plantable = this.add.image(1349, 751, 'attic', 'plantable')
        plantable.setOrigin(0.7433049295987494, 0.6417962170875826)

        // squarestool
        this.add.image(1161, 821, 'attic', 'squarestool')

        // fg_left
        const fg_left = this.add.image(-161, 972, 'attic', 'fg_left')
        fg_left.setOrigin(0.004053513024603988, 0.9838982835484917)

        // brownchairfront
        this.add.image(766, 761, 'attic', 'brownchairfront')

        // brownchair
        const brownchair = this.add.image(764, 900, 'attic', 'brownchair')
        brownchair.setOrigin(0.503982979899936, 0.6854659688099547)

        // boxdimension
        const boxdimension = this.add.sprite(966, 974, 'attic', 'boxdimension')
        boxdimension.setOrigin(0.47834338839237844, 1.011384788761301)

        // boxdimension-anim
        const boxdimension_anim = this.add.sprite(964, 994, 'attic', 'boxdimension-hover-anim0001')
        boxdimension_anim.setOrigin(0.49999999999999933, 1.8995033355331223)
        boxdimension_anim.visible = false

        // boxdimension-flaps
        const boxdimension_flaps = this.add.sprite(981, 1017.9631945186845, 'attic', 'boxdimension-hover-flaps')
        boxdimension_flaps.setOrigin(0.47834338839237844, 1.6725657121405844)
        boxdimension_flaps.visible = false

        // fg_right
        const fg_right = this.add.image(1679, 1153, 'attic', 'fg_right')
        fg_right.setOrigin(0.9977534832559671, 1.0049481046883484)

        // frontpizzabox
        const frontpizzabox = this.add.image(537, 930.0003486965516, 'attic', 'frontpizzabox')
        frontpizzabox.setOrigin(0.5, 0.6917832102503532)

        // leftpencil
        this.add.image(1160, 696, 'attic', 'leftpencil')

        // circlestoolmirror
        const circlestoolmirror = this.add.image(309, 469, 'attic', 'circlestoolmirror')

        // leftstairhandle
        const leftstairhandle = this.add.image(753.2325890753189, 474.0308788528382, 'attic', 'leftstairhandle')
        leftstairhandle.setOrigin(0.6133198013694338, 0.23500896788610423)

        // rightstairhandle
        const rightstairhandle = this.add.image(869.883720505676, 578.5735707900989, 'attic', 'rightstairhandle')
        rightstairhandle.setOrigin(0.46612723328631056, 0.3797219652131449)

        // findfourtable
        const findfourtable = this.add.image(254, 596, 'attic', 'findfourtable')

        // findfourtable_1
        const findfourtable_1 = this.add.image(369, 691, 'attic', 'findfourtable')

        // findfourtable_2
        const findfourtable_2 = this.add.image(560, 685, 'attic', 'findfourtable')
        findfourtable_2.flipX = true

        // findfourtable_3
        const findfourtable_3 = this.add.image(683, 626, 'attic', 'findfourtable')
        findfourtable_3.flipX = true

        // leftsoda
        const leftsoda = this.add.image(1127.0949891243745, 679.4124909369787, 'attic', 'leftsoda')
        leftsoda.setOrigin(0.31616253777615067, 0.40589272767112367)

        // rightpencil
        this.add.image(1199, 726, 'attic', 'rightpencil')

        // apple
        const apple = this.add.image(1234, 618, 'attic', 'apple')

        // book
        const book = this.add.image(1190, 649, 'attic', 'book')

        // rightsoda
        const rightsoda = this.add.image(1270, 575, 'attic', 'rightsoda')

        // lists
        const sort = [horse, fg_left, fg_right, plantable, brownchair, frontpizzabox, boxdimension, circlestoolmirror, leftstairhandle, rightstairhandle, rug, lamp, leftbluechair, findfourtable, leftsoda, book, apple, rightsoda, boxdimension_anim, boxdimension_flaps]

        // horse (components)
        const horseSimpleButton = new SimpleButton(horse)
        horseSimpleButton.hoverCallback = () => this.onHorseOver()

        // boxdimension (components)
        const boxdimensionSimpleButton = new SimpleButton(boxdimension)
        boxdimensionSimpleButton.hoverCallback = () => this.onBoxDimOver()
        boxdimensionSimpleButton.hoverOutCallback = () => this.onBoxDimOut()

        // findfourtable (components)
        const findfourtableButton = new Button(findfourtable)
        findfourtableButton.spriteName = 'findfourtable'
        findfourtableButton.activeFrame = false

        // findfourtable_1 (components)
        const findfourtable_1Button = new Button(findfourtable_1)
        findfourtable_1Button.spriteName = 'findfourtable'
        findfourtable_1Button.activeFrame = false

        // findfourtable_2 (components)
        const findfourtable_2Button = new Button(findfourtable_2)
        findfourtable_2Button.spriteName = 'findfourtable'
        findfourtable_2Button.activeFrame = false

        // findfourtable_3 (components)
        const findfourtable_3Button = new Button(findfourtable_3)
        findfourtable_3Button.spriteName = 'findfourtable'
        findfourtable_3Button.activeFrame = false

        this.horse = horse
        this.boxdimension = boxdimension
        this.boxdimension_anim = boxdimension_anim
        this.boxdimension_flaps = boxdimension_flaps
        this.sort = sort

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
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
