import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class HotelLobby extends RoomScene {
    constructor() {
        super('HotelLobby')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 680, 500),
            pet: () => this.triggerRoom(310, 160, 760),
            lift: () => this.interface.loadExternal('Elevator')
        }

        this.music = 362

        this.loadSfx = ['hotellobby-smoothie-slurp', 'hotellobby-snoring', 'hotellobby-smoothie-appear', 'hotellobby-smoothie-disappear', 'hotellobby-board', 'hotellobby-elevator-close', 'hotellobby-elevator-open', 'hotellobby-petdoor-close', 'hotellobby-petdoor-open', 'hotellobby-plazadoor-close', 'hotellobby-plazadoor-open']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('hotellobby-pack', 'client/media/rooms/hotellobby/hotellobby-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_bg
        this.add.image(772, 519, 'hotellobby', 'bg-bg')

        // door
        const door = this.add.image(789, 174, 'hotellobby', 'door')

        // bg_fg
        this.add.image(798, 459, 'hotellobby', 'bg-fg')

        // railings5
        const railings5 = this.add.image(799, 539.74728832789, 'hotellobby', 'railings5')
        railings5.setOrigin(0.5, -0.5610780913065169)

        // railings4
        const railings4 = this.add.image(814, 563.8914200978062, 'hotellobby', 'railings4')
        railings4.setOrigin(0.5, -1.1798064444743408)

        // railings3
        const railings3 = this.add.image(798, 589.810935645996, 'hotellobby', 'railings3')
        railings3.setOrigin(0.5, -1.5790384728122395)

        // railings2
        const railings2 = this.add.image(797, 594.9104668028282, 'hotellobby', 'railings2')
        railings2.setOrigin(0.5, -0.4174128041371167)

        // railings1
        const railings1 = this.add.image(796, 713.7919490240682, 'hotellobby', 'railings1')
        railings1.setOrigin(0.5, -0.7540017727215338)

        // reception_wall
        const reception_wall = this.add.image(234, 220, 'hotellobby', 'reception-wall')

        // backchairs
        const backchairs = this.add.image(301.7914269305945, 642.9198523576362, 'hotellobby', 'backchairs')
        backchairs.setOrigin(0.3151356134847755, 0.2609082520320236)

        // backleftpanel
        const backleftpanel = this.add.image(560.4936632299391, 136.15208248146274, 'hotellobby', 'backleftpanel')
        backleftpanel.setOrigin(0.5426056491455988, 0.21284959753925597)

        // backpod
        const backpod = this.add.image(1391.9109415599655, 657.9312987195858, 'hotellobby', 'backpod')
        backpod.setOrigin(0.48382691916212317, 0.22336790089243141)

        // toprightwall
        const toprightwall = this.add.image(1288, 223, 'hotellobby', 'toprightwall')

        // backrightwall
        const backrightwall = this.add.image(1191, 125, 'hotellobby', 'backrightwall')

        // backtable
        const backtable = this.add.image(336.7696190896114, 734.4240477240285, 'hotellobby', 'backtable')
        backtable.setOrigin(0.5231264974822786, 0.5753923817922277)

        // coatcheck_wall
        const coatcheck_wall = this.add.image(1199.5455915257305, 334.3964408143606, 'hotellobby', 'coatcheck-wall')
        coatcheck_wall.setOrigin(0.3371555428314272, 0.5946947668286745)

        // midrailings_legs
        const midrailings_legs = this.add.image(798, 486, 'hotellobby', 'midrailings_legs')

        // midrailings
        const midrailings = this.add.image(798, 567, 'hotellobby', 'midrailings')

        // fountain
        const fountain = this.add.sprite(790.1263806898631, 580.0473169932136, 'hotellobby', 'fountain0001')
        fountain.setOrigin(0.38576385528632434, 0.8349260125239063)

        // smoothieAnimBack
        const smoothieAnimBack = this.add.sprite(344.92781053712554, 743.1704145970912, 'hotellobby', 'smoothieAnim0001')
        smoothieAnimBack.setOrigin(0.5070599004829879, 0.8010352111035999)

        // frontchairs
        const frontchairs = this.add.image(357, 753, 'hotellobby', 'frontchairs')
        frontchairs.setOrigin(0.34296466091717487, 0.25888242131166106)

        // fronttable
        const fronttable = this.add.image(381, 847, 'hotellobby', 'fronttable')

        // smoothieAnimFront
        const smoothieAnimFront = this.add.sprite(390, 884, 'hotellobby', 'smoothieAnim0001')
        smoothieAnimFront.setOrigin(0.4825300981231506, 0.8727461889099736)

        // lamp
        const lamp = this.add.image(1509, 841, 'hotellobby', 'lamp')

        // leftplant
        const leftplant = this.add.image(669, 225, 'hotellobby', 'leftplant')

        // leftpillar
        const leftpillar = this.add.image(620.1473180805147, 337.11163218148175, 'hotellobby', 'leftpillar')
        leftpillar.setOrigin(0.5514197633838284, 0.8551838128600535)

        // petshop_pillar
        const petshop_pillar = this.add.image(1447, 347, 'hotellobby', 'petshop-pillar')

        // coatcheck_sign_en
        const coatcheck_sign_en = this.add.image(1200, 1082.1970870940486, 'hotellobby', 'coatcheck-sign-en')
        coatcheck_sign_en.setOrigin(0.5, 7.031106537046679)

        // petshop_door
        const petshop_door = this.add.image(1476, 351, 'hotellobby', 'petshop-door')

        // petshop_sign_en
        const petshop_sign_en = this.add.image(1459, 1599.585423691147, 'hotellobby', 'petshop-sign-en')
        petshop_sign_en.setOrigin(0.5, 2.9520987498912143)

        // plant
        const plant = this.add.image(1523, 497, 'hotellobby', 'plant')

        // reception_chair
        const reception_chair = this.add.image(400, 295, 'hotellobby', 'reception-chair')

        // reception_desk
        const reception_desk = this.add.image(431, 398.78204014661566, 'hotellobby', 'reception-desk')
        reception_desk.setOrigin(0.5, 0.8495355911284082)

        // reception_sign_en
        const reception_sign_en = this.add.image(367.658203125, 1066.0933081246603, 'hotellobby', 'reception-sign-en')
        reception_sign_en.setOrigin(0.5117929560504272, 6.133688178542591)

        // elevator
        const elevator = this.add.sprite(50, 345, 'hotellobby', 'elevator0001')

        // lanterns_left
        const lanterns_left = this.add.image(330, 1290.3056120067045, 'hotellobby', 'lanterns-left')
        lanterns_left.setOrigin(0.5, 6.471669976184832)

        // lanterns_right
        const lanterns_right = this.add.image(1225, 1356.18703772305, 'hotellobby', 'lanterns-right')
        lanterns_right.setOrigin(0.5, 6.922269302141981)

        // rightplant
        const rightplant = this.add.image(901, 225, 'hotellobby', 'rightplant')

        // rightpillar
        const rightpillar = this.add.image(950.5989990234375, 337.27168959200407, 'hotellobby', 'rightpillar')
        rightpillar.setOrigin(0.4251728103267614, 0.8555675554271374)

        // sofa
        const sofa = this.add.image(797, 801.1760570599619, 'hotellobby', 'sofa')
        sofa.setOrigin(0.5, 0.19895846268875514)

        // tasks
        const tasks = this.add.sprite(791.567626953125, 694.322409353064, 'hotellobby', 'tasks')
        tasks.setOrigin(0.47789562306888445, 0.760719951828501)

        // frontpod
        const frontpod = this.add.image(1252.8812554132874, 757.6344372528041, 'hotellobby', 'frontpod')
        frontpod.setOrigin(0.4802930881018534, 0.1924314107324942)

        // bar_sign
        const bar_sign = this.add.image(197, 579, 'hotellobby', 'bar-sign')

        // bar_front
        const bar_front = this.add.image(175, 673, 'hotellobby', 'bar-front')

        // bar
        const bar = this.add.image(36.9940853758483, 678.5883274975763, 'hotellobby', 'bar')
        bar.setOrigin(0.46873151679952596, 0.5985804396468148)

        // fruitbox
        const fruitbox = this.add.image(69, 814, 'hotellobby', 'fruitbox')

        // fruits
        const fruits = this.add.image(38, 894, 'hotellobby', 'fruits')

        // fg
        const fg = this.add.image(782, 885, 'hotellobby', 'fg')

        // taskinterface
        const taskinterface = this.add.image(1424, 1148.9899654279216, 'hotellobby', 'interface')
        taskinterface.setOrigin(0.5, 2.521666416144359)

        // elevator_hover
        const elevator_hover = this.add.polygon(55, 392, '7.722707253016722 343.961481110895 -0.6112598538895355 48.88754820478039 155.5508869925773 8.204166623943507 164.5029594644402 260.6414520828263')
        elevator_hover.angle = -3.0000000000000004

        // lists
        const sort = [railings5, railings4, railings3, railings2, railings1, reception_wall, backchairs, backleftpanel, backpod, toprightwall, backrightwall, backtable, coatcheck_wall, midrailings_legs, midrailings, fountain, frontchairs, fronttable, lamp, leftplant, leftpillar, petshop_pillar, coatcheck_sign_en, petshop_door, petshop_sign_en, plant, reception_chair, reception_desk, reception_sign_en, elevator, lanterns_left, lanterns_right, rightplant, rightpillar, sofa, tasks, frontpod, bar_sign, bar_front, bar, fruitbox, fruits, fg, taskinterface, smoothieAnimFront, smoothieAnimBack]

        // door (components)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.onPlazaDoorOver()
        doorButton.hoverOutCallback = () => this.onPlazaDoorOut()
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 780
        doorMoveTo.y = 300

        // backpod (components)
        const backpodButton = new Button(backpod)
        backpodButton.callback = () => this.puffleSleep(this.backpod)
        const backpodMoveTo = new MoveTo(backpod)
        backpodMoveTo.x = 1372
        backpodMoveTo.y = 684

        // backtable (components)
        const backtableSimpleButton = new SimpleButton(backtable)
        backtableSimpleButton.hoverCallback = () => this.onBackTableOver()
        backtableSimpleButton.hoverOutCallback = () => this.onBackTableOut()
        backtableSimpleButton.callback = () => this.puffleEat(this.backtable, this.smoothieAnimBack)
        const backtableMoveTo = new MoveTo(backtable)
        backtableMoveTo.x = 300
        backtableMoveTo.y = 654

        // fronttable (components)
        const fronttableSimpleButton = new SimpleButton(fronttable)
        fronttableSimpleButton.hoverCallback = () => this.onFrontTableOver()
        fronttableSimpleButton.hoverOutCallback = () => this.onFrontTableOut()
        fronttableSimpleButton.callback = () => this.puffleEat(this.fronttable, this.smoothieAnimFront)
        const fronttableMoveTo = new MoveTo(fronttable)
        fronttableMoveTo.x = 356
        fronttableMoveTo.y = 768

        // coatcheck_sign_en (components)
        new LocalisedSprite(coatcheck_sign_en)

        // petshop_door (components)
        const petshop_doorButton = new Button(petshop_door)
        petshop_doorButton.hoverCallback = () => this.onPetDoorOver()
        petshop_doorButton.hoverOutCallback = () => this.onPetDoorOut()
        const petshop_doorMoveTo = new MoveTo(petshop_door)
        petshop_doorMoveTo.x = 1440
        petshop_doorMoveTo.y = 460

        // petshop_sign_en (components)
        new LocalisedSprite(petshop_sign_en)

        // reception_sign_en (components)
        new LocalisedSprite(reception_sign_en)

        // lanterns_left (components)
        new LocalisedSprite(lanterns_left)

        // lanterns_right (components)
        new LocalisedSprite(lanterns_right)

        // tasks (components)
        const tasksSimpleButton = new SimpleButton(tasks)
        tasksSimpleButton.hoverCallback = () => this.onTasksOver()
        tasksSimpleButton.hoverOutCallback = () => this.onTasksOut()
        tasksSimpleButton.callback = () => this.interface.loadExternal('RainbowQuest')

        // frontpod (components)
        const frontpodButton = new Button(frontpod)
        frontpodButton.callback = () => this.puffleSleep(this.frontpod)
        const frontpodMoveTo = new MoveTo(frontpod)
        frontpodMoveTo.x = 1232
        frontpodMoveTo.y = 792

        // taskinterface (components)
        const taskinterfaceButton = new Button(taskinterface)
        taskinterfaceButton.callback = () => this.interface.loadExternal('RainbowQuest')

        // elevator_hover (components)
        const elevator_hoverSimpleButton = new SimpleButton(elevator_hover)
        elevator_hoverSimpleButton.hoverCallback = () => this.onElevatorOver()
        elevator_hoverSimpleButton.hoverOutCallback = () => this.onElevatorOut()
        const elevator_hoverMoveTo = new MoveTo(elevator_hover)
        elevator_hoverMoveTo.x = 72
        elevator_hoverMoveTo.y = 520

        this.backchairs = backchairs
        this.backpod = backpod
        this.backtable = backtable
        this.fountain = fountain
        this.smoothieAnimBack = smoothieAnimBack
        this.frontchairs = frontchairs
        this.fronttable = fronttable
        this.smoothieAnimFront = smoothieAnimFront
        this.elevator = elevator
        this.tasks = tasks
        this.frontpod = frontpod
        this.elevator_hover = elevator_hover
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image} */
    backchairs
    /** @type {Phaser.GameObjects.Image} */
    backpod
    /** @type {Phaser.GameObjects.Image} */
    backtable
    /** @type {Phaser.GameObjects.Sprite} */
    fountain
    /** @type {Phaser.GameObjects.Sprite} */
    smoothieAnimBack
    /** @type {Phaser.GameObjects.Image} */
    frontchairs
    /** @type {Phaser.GameObjects.Image} */
    fronttable
    /** @type {Phaser.GameObjects.Sprite} */
    smoothieAnimFront
    /** @type {Phaser.GameObjects.Sprite} */
    elevator
    /** @type {Phaser.GameObjects.Sprite} */
    tasks
    /** @type {Phaser.GameObjects.Image} */
    frontpod
    /** @type {Phaser.GameObjects.Polygon} */
    elevator_hover
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
        this.fountain.play('hotellobby-fountain')
    }

    onElevatorOver() {
        if (this.elevator.anims.isPlaying) {
            this.elevator.anims.reverse()
        } else {
            this.elevator.play('hotellobby-elevator')
        }
        this.shell.musicController.addSfx('hotellobby-elevator-open')
    }

    onElevatorOut() {
        if (this.elevator.anims.isPlaying) {
            this.elevator.anims.reverse()
        } else {
            this.elevator.playReverse('hotellobby-elevator')
        }
        this.shell.musicController.addSfx('hotellobby-elevator-close')
    }

    onTasksOver() {
        this.tasks.play('hotellobby-tasks')
        this.shell.musicController.addSfx('hotellobby-board')
    }

    onTasksOut() {
        this.tasks.anims.stop()
        this.tasks.setFrame('tasks')
    }

    onFrontTableOver() {
        this.fronttable.setFrame('fronttable-hover')
        this.frontchairs.setFrame('frontchairs-hover')
    }

    onFrontTableOut() {
        this.fronttable.setFrame('fronttable')
        this.frontchairs.setFrame('frontchairs')
    }

    onBackTableOver() {
        this.backtable.setFrame('backtable-hover')
        this.backchairs.setFrame('backchairs-hover')
    }

    onBackTableOut() {
        this.backtable.setFrame('backtable')
        this.backchairs.setFrame('backchairs')
    }

    onPetDoorOver() {
        this.shell.musicController.addSfx('hotellobby-petdoor-open')
    }

    onPetDoorOut() {
        this.shell.musicController.addSfx('hotellobby-petdoor-close')
    }

    onPlazaDoorOver() {
        this.shell.musicController.addSfx('hotellobby-plazadoor-open')
    }

    onPlazaDoorOut() {
        this.shell.musicController.addSfx('hotellobby-plazadoor-close')
    }

    puffleEat(gameObject, animation) {
        let x = gameObject.__MoveTo.x
        let y = gameObject.__MoveTo.y
        this.shell.client.penguin.afterMove = () => {
            if (!this.shell.isNearPos(x, y)) return

            this.shell.client.penguin.playFrame(1)
            this.shell.client.lockRotation = true
            this.shell.musicController.addSfx('hotellobby-smoothie-appear')
            this.airtower.events.once('phg', (args) => {
                if (args[0] == this.shell.client.penguin.walking) {
                    this.puffleHealth = {
                        clean: args[1],
                        food: args[2],
                        play: args[3],
                        rest: args[4]
                    }
                }
            })

            this.airtower.sendXt('p#phg', this.shell.client.penguin.walking)

            animation.play('hotellobby-smoothieAnim')

            setTimeout(() => {
                this.shell.musicController.addSfx('hotellobby-smoothie-slurp')
            }, 1000)

            setTimeout(() => {
                this.shell.musicController.addSfx('hotellobby-smoothie-disappear')
                this.increasePuffleFood(x, y)
            }, 2000)

            animation.on('animationcomplete', () => {
                this.shell.client.lockRotation = false
                animation.anims.stop()
                animation.setFrame('smoothieAnim0001')
            })
        }
    }

    puffleSleep(gameObject) {
        let x = gameObject.__MoveTo.x
        let y = gameObject.__MoveTo.y
        this.shell.client.penguin.afterMove = () => {
            if (!this.shell.isNearPos(x, y)) return
            this.shell.client.penguin.playPuffleFrame(79)
            this.shell.musicController.addSfx('hotellobby-snoring', true)
            this.shell.client.lockRotation = true
            this.airtower.events.once('phg', (args) => {
                if (args[0] == this.shell.client.penguin.walking) {
                    this.puffleHealth = {
                        clean: args[1],
                        food: args[2],
                        play: args[3],
                        rest: args[4]
                    }
                }
            })

            this.airtower.sendXt('p#phg', this.shell.client.penguin.walking)
            setTimeout(() => {
                this.increasePuffleRest(x, y)
                this.shell.client.lockRotation = false
                this.shell.musicController.stopLoopingSfx()
            }, 8750)
        }
    }

    increasePuffleRest(x, y) {
        if (!this.shell.isNearPos(x, y)) return

        this.carePopup.x = this.shell.client.penguin.x
        this.carePopup.y = this.shell.client.penguin.y

        const oldRest = this.puffleHealth.rest
        this.puffleHealth.rest += 20
        if (this.puffleHealth.rest > 100) this.puffleHealth.rest = 100

        this.carePopup.showPopup('rest', oldRest, this.puffleHealth.rest)
        this.airtower.sendXt('p#phs', `${this.shell.client.penguin.walking}%${this.puffleHealth.food}%${this.puffleHealth.play}%${this.puffleHealth.rest}%${this.puffleHealth.rest}`)
    }

    increasePuffleFood(x, y) {
        if (!this.shell.isNearPos(x, y)) return

        this.carePopup.x = this.shell.client.penguin.x
        this.carePopup.y = this.shell.client.penguin.y

        const oldFood = this.puffleHealth.food
        this.puffleHealth.food += 20
        if (this.puffleHealth.food > 100) this.puffleHealth.food = 100

        this.carePopup.showPopup('food', oldFood, this.puffleHealth.food)
        this.airtower.sendXt('p#phs', `${this.shell.client.penguin.walking}%${this.puffleHealth.food}%${this.puffleHealth.play}%${this.puffleHealth.rest}%${this.puffleHealth.rest}`)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
