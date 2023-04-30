import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {
    constructor() {
        super('Coffee')

        /** @type {Phaser.GameObjects.Sprite} */
        this.coffeebagbarrel
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoothiemachine
        /** @type {Phaser.GameObjects.Ellipse} */
        this.smoothiezone
        /** @type {Phaser.GameObjects.Sprite} */
        this.cashregister_coffee
        /** @type {Phaser.GameObjects.Sprite} */
        this.cashregister_smoothie
        /** @type {Phaser.GameObjects.Sprite} */
        this.bookroomdoor
        /** @type {Phaser.GameObjects.Image} */
        this.bookroomlight
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            town: () => this.triggerRoom(100, 510, 475),
            book: () => this.triggerRoom(111, 1000, 500),
            beans: () => this.triggerGame('beancounters', 908, 'ruffle'),
            smoothie: () => this.triggerGame('smoothie', 959, 'waflash'),
        }

        this.music = 429

        this.loadSfx = ['coffee-TownDoorOpen', 'coffee-BookLightOn', 'coffee-BookLightOff', 'coffee-beans', 'coffee-cashregister', 'coffee-smoothie']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('coffee-pack', 'client/media/rooms/coffee/coffee-pack.json')
    }

    /** @returns {void} */
    _create() {
        // coffeebg
        this.add.image(733, 479, 'coffee', 'coffeebg')

        // coffeebagbarrel
        const coffeebagbarrel = this.add.sprite(1373.0699002825866, 719.4016707422898, 'coffee', 'coffeebagbarrel0001')
        coffeebagbarrel.setOrigin(0.5455926569637659, 0.435953172360424)

        // coffeecouch_left_arm
        const coffeecouch_left_arm = this.add.image(222.2928295466819, 409, 'coffee', 'coffeecouch-left-arm')
        coffeecouch_left_arm.setOrigin(0.6411603693335237, 0.5)

        // coffee_footrest
        const coffee_footrest = this.add.image(257.9376525878906, 454.59780737302873, 'coffee', 'coffee-footrest')
        coffee_footrest.setOrigin(0.5071577140209638, 0.24860383632442326)

        // rail
        const rail = this.add.image(648, 552.9822587504649, 'coffee', 'rail')
        rail.setOrigin(0.5, 0.989433852050304)

        // smoothiebartop
        const smoothiebartop = this.add.image(118.84710397097516, 578.0281436656322, 'coffee', 'smoothiebartop')
        smoothiebartop.setOrigin(0.5354892273471202, 0.40035490072287755)

        // smoothiebarbottom
        const smoothiebarbottom = this.add.image(203.22774160113786, 837.6658863027025, 'coffee', 'smoothiebarbottom')
        smoothiebarbottom.setOrigin(0.57017459175551, 0.708599633234524)

        // smoothiemachine
        const smoothiemachine = this.add.sprite(122.09897232395858, 859.8341953019369, 'coffee', 'smoothiemachine0001')
        smoothiemachine.setOrigin(0.540398201501314, 0.9605976562090578)

        // smoothiezone
        const smoothiezone = this.add.ellipse(67, 537, 128, 128)
        smoothiezone.scaleX = 1.5080773725778969
        smoothiezone.scaleY = 3.4162829021161816

        // tikihut
        const tikihut = this.add.image(34.994408991738254, 594.9078945884169, 'coffee', 'tikihut')
        tikihut.setOrigin(0.4268917298408774, 1.0357469607928678)

        // coffeefg
        const coffeefg = this.add.image(-136.9999928497151, 975.4999925176061, 'coffee', 'coffeefg')
        coffeefg.setOrigin(0, 1)

        // towndoor
        const towndoor = this.add.image(708.9425085197669, 344.64460809072193, 'coffee', 'towndoor')
        towndoor.setOrigin(0.4862833901317792, 0.8531515227265744)

        // coffeecouch_top
        const coffeecouch_top = this.add.image(467, 282, 'coffee', 'coffeecouch-top')
        coffeecouch_top.scaleX = 0.8886626093085153
        coffeecouch_top.scaleY = 0.8886626093085153

        // coffeetable
        const coffeetable = this.add.image(466.2494491551358, 426.87343927288464, 'coffee', 'coffeetable')
        coffeetable.setOrigin(0.5312467211615225, 0.6144110713298818)

        // coffeebar
        const coffeebar = this.add.image(937.8995394631188, 494.45095548108185, 'coffee', 'coffeebar')
        coffeebar.setOrigin(0.6170021840612098, 0.7839712872415296)

        // cashregister_coffee
        const cashregister_coffee = this.add.sprite(907.0018186991018, 489.0160204745877, 'coffee', 'cashregister-coffee0001')
        cashregister_coffee.setOrigin(0.5438756335900801, 0.8668002968130717)

        // smoothiesmashsign
        const smoothiesmashsign = this.add.image(31.704099655151367, 598.9030695379387, 'coffee', 'smoothiesmashsign')
        smoothiesmashsign.scaleX = 0.85
        smoothiesmashsign.scaleY = 0.85
        smoothiesmashsign.setOrigin(0.2556756505989983, 1.3167318550863913)

        // smoothiesmashtext_en
        const smoothiesmashtext_en = this.add.image(36.63584766109379, 631.3118499324878, 'coffee', 'smoothiesmashtext_en')
        smoothiesmashtext_en.scaleX = 0.4068530157718546
        smoothiesmashtext_en.scaleY = 0.4068530157718546
        smoothiesmashtext_en.setOrigin(0.0034519961301153947, 2.623818522325409)

        // fruitbox
        const fruitbox = this.add.image(326, 860, 'coffee', 'fruitbox')
        fruitbox.scaleX = 0.45605346343625297
        fruitbox.scaleY = 0.45605346343625297

        // fgfruit
        const fgfruit = this.add.image(181, 909, 'coffee', 'fgfruit')
        fgfruit.scaleX = 0.45605346343625297
        fgfruit.scaleY = 0.45605346343625297

        // cashregister_smoothie
        const cashregister_smoothie = this.add.sprite(269.32581369127956, 895.7496854178951, 'coffee', 'cashregister-smoothie0001')
        cashregister_smoothie.setOrigin(0.23505190795785325, 2.2127957465350896)

        // smoothiechair
        const smoothiechair = this.add.image(439.03927633231285, 672.3715786829943, 'coffee', 'smoothiechair')
        smoothiechair.setOrigin(0.5234399578426765, 0.20337798802722049)

        // smoothiechair_1
        const smoothiechair_1 = this.add.image(421.03927633231285, 780.2537496860556, 'coffee', 'smoothiechair')
        smoothiechair_1.setOrigin(0.5234399578426765, 0.1477613607823235)

        // fruittable
        const fruittable = this.add.image(906.7459495345938, 805.9189906918772, 'coffee', 'fruittable')
        fruittable.setOrigin(0.5125607880186606, 0.7042046239291063)

        // bottomcoffee
        const bottomcoffee = this.add.container(711.3267781138305, 737.2605668992305)

        // bottomcoffeechaircush_1
        const bottomcoffeechaircush_1 = this.add.image(2.673221886169472, 45.739433100769475, 'coffee', 'bottomcoffeechaircush')
        bottomcoffee.add(bottomcoffeechaircush_1)

        // bottomcoffeechairback_1
        const bottomcoffeechairback_1 = this.add.image(-2.326778113830528, -1.2605668992305255, 'coffee', 'bottomcoffeechairback')
        bottomcoffee.add(bottomcoffeechairback_1)

        // bottomcoffeechairarm
        const bottomcoffeechairarm = this.add.image(688, 792.8197180357201, 'coffee', 'bottomcoffeechairarm')
        bottomcoffeechairarm.setOrigin(0.5, 0.6738193828782374)

        // bottomcoffeecouchback
        this.add.image(1110, 802, 'coffee', 'bottomcoffeecouchback')

        // coffeebeanleft
        this.add.image(1212, 735, 'coffee', 'coffeebeanleft')

        // bottomcoffeecouchfront
        const bottomcoffeecouchfront = this.add.image(1189.7731595664625, 923.708886494362, 'coffee', 'bottomcoffeecouchfront')
        bottomcoffeecouchfront.setOrigin(0.3994734650704348, 0.9526785001239316)

        // bookroomdoor
        const bookroomdoor = this.add.sprite(1286.2793453780246, 550.7275742206418, 'coffee', 'bookroomdoor')
        bookroomdoor.setOrigin(0.4171931012060349, 0.9294082932237467)

        // bookroomlight
        const bookroomlight = this.add.image(1313, 395, 'coffee', 'bookroomlight')
        bookroomlight.scaleX = 0.44484805539980127
        bookroomlight.scaleY = 0.44484805539980127
        bookroomlight.visible = false

        // clubpenguintimes_en
        const clubpenguintimes_en = this.add.image(1315, 219, 'coffee', 'clubpenguintimes_en')
        clubpenguintimes_en.scaleX = 0.4368656034442943
        clubpenguintimes_en.scaleY = 0.4368656034442943

        // ellipse_1
        const ellipse_1 = this.add.ellipse(438, 678, 40, 40)

        // ellipse
        const ellipse = this.add.ellipse(419, 788, 40, 40)

        // lists
        const sort = [coffeefg, coffeetable, coffeecouch_left_arm, coffee_footrest, cashregister_coffee, rail, tikihut, smoothiesmashsign, smoothiesmashtext_en, smoothiebartop, smoothiebarbottom, fgfruit, fruitbox, smoothiemachine, cashregister_smoothie, smoothiechair, fruittable, bottomcoffeechairarm, bottomcoffee, coffeebagbarrel]

        // coffeebagbarrel (components)
        const coffeebagbarrelSimpleButton = new SimpleButton(coffeebagbarrel)
        coffeebagbarrelSimpleButton.hoverCallback = () => this.onBeanBarrelOver()
        new MoveTo(coffeebagbarrel)
        const coffeebagbarrelShowHint = new ShowHint(coffeebagbarrel)
        coffeebagbarrelShowHint.text = 'beancounters'

        // smoothiezone (components)
        const smoothiezoneSimpleButton = new SimpleButton(smoothiezone)
        smoothiezoneSimpleButton.hoverCallback = () => this.onSmoothieMachineOver()
        const smoothiezoneShowHint = new ShowHint(smoothiezone)
        smoothiezoneShowHint.text = 'smoothie'
        const smoothiezoneMoveTo = new MoveTo(smoothiezone)
        smoothiezoneMoveTo.x = 60
        smoothiezoneMoveTo.y = 730

        // towndoor (components)
        const towndoorButton = new Button(towndoor)
        towndoorButton.spriteName = 'towndoor'
        towndoorButton.hoverCallback = () => this.onTownDoorOver()
        towndoorButton.hoverOutCallback = () => this.onTownDoorOut()
        towndoorButton.activeFrame = false
        new MoveTo(towndoor)

        // cashregister_coffee (components)
        const cashregister_coffeeSimpleButton = new SimpleButton(cashregister_coffee)
        cashregister_coffeeSimpleButton.hoverCallback = () => this.onCoffeeCashRegisterOver()

        // cashregister_smoothie (components)
        const cashregister_smoothieSimpleButton = new SimpleButton(cashregister_smoothie)
        cashregister_smoothieSimpleButton.hoverCallback = () => this.onSmoothieCashRegisterOver()

        // bookroomdoor (components)
        const bookroomdoorSimpleButton = new SimpleButton(bookroomdoor)
        bookroomdoorSimpleButton.hoverCallback = () => this.onBookRoomOver()
        bookroomdoorSimpleButton.hoverOutCallback = () => this.onBookRoomOut()
        new MoveTo(bookroomdoor)

        // ellipse_1 (components)
        const ellipse_1Seat = new Seat(ellipse_1)
        ellipse_1Seat.direction = 'west'

        // ellipse (components)
        const ellipseSeat = new Seat(ellipse)
        ellipseSeat.direction = 'west'

        this.coffeebagbarrel = coffeebagbarrel
        this.smoothiemachine = smoothiemachine
        this.smoothiezone = smoothiezone
        this.cashregister_coffee = cashregister_coffee
        this.cashregister_smoothie = cashregister_smoothie
        this.bookroomdoor = bookroomdoor
        this.bookroomlight = bookroomlight
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.coffeeServerIterations = 0
    }

    onTownDoorOver() {
        this.shell.musicController.addSfx('coffee-TownDoorOpen')
    }

    onTownDoorOut() {
        this.shell.musicController.addSfx('coffee-TownDoorClose')
    }

    onBookRoomOver() {
        this.bookroomlight.visible = true
        this.shell.musicController.addSfx('coffee-BookLightOn')
    }

    onBookRoomOut() {
        this.bookroomlight.visible = false
        this.shell.musicController.addSfx('coffee-BookLightOff')
    }

    onBeanBarrelOver() {
        this.coffeebagbarrel.play('coffee-beans')
        this.shell.musicController.addSfx('coffee-beans')
    }

    onCoffeeCashRegisterOver() {
        this.cashregister_coffee.play('coffee-cashregister')
        this.shell.musicController.addSfx('coffee-cashregister')
    }

    onSmoothieCashRegisterOver() {
        this.cashregister_smoothie.play('coffee-smoothieregister')
        this.shell.musicController.addSfx('coffee-cashregister')
    }

    onSmoothieMachineOver() {
        this.smoothiemachine.play('coffee-smoothiesmash')
        this.shell.musicController.addSfx('coffee-smoothie')
    }

    triggerEmote(emote) {
        if (emote == 13 && (this.shell.client.penguin.wearingItem(262) || this.shell.client.penguin.wearingItem(10262))) {
            this.coffeeServerIterations++
            if (this.coffeeServerIterations == 5) {
                this.shell.client.stampEarned(18)
            }
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
