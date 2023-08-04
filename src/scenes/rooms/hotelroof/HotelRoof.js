import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class HotelRoof extends RoomScene {
    constructor() {
        super('HotelRoof')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            elevator: () => this.interface.loadExternal('Elevator'),
            canon: () => this.launch(),
            diving: () => this.dive(),
            dj: {
                callback: () => {
                    this.dj_anim.play('hotelroof-dj-anim')
                    this.dj_anim_hover.play('hotelroof-dj-anim-hover')
                },
                offCallback: () => {
                    this.dj_anim.anims.stopAfterRepeat(0)
                    this.dj_anim_hover.anims.stopAfterRepeat(0)
                }
            },
            leftchair: () => this.eat(1),
            rightchair: () => this.eat(2),
            leftsleeper: () => this.sleep(),
            rightsleeper: () => this.sleep()
        }

        this.music = 360

        this.loadSfx = []

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('hotelroof-pack', 'client/media/rooms/hotelroof/hotelroof-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(712, 450, 'hotelroof', 'bg')

        // sleepchair_right
        const sleepchair_right = this.add.image(1070.4922243102844, 313.0867004394531, 'hotelroof', 'sleepchair-right')
        sleepchair_right.setOrigin(0.4014761232717728, 0.6983246586816024)

        // drinkstable
        this.add.image(978, 322, 'hotelroof', 'drinkstable')

        // sleepchair_left
        const sleepchair_left = this.add.image(829.3671875, 314.1775027508942, 'hotelroof', 'sleepchair-left')
        sleepchair_left.setOrigin(0.3493676997156399, 0.7041577368781204)

        // toweldesk
        this.add.image(1230, 395, 'hotelroof', 'toweldesk')

        // ladder_back
        const ladder_back = this.add.image(770.7037166476752, 546.6346901368398, 'hotelroof', 'ladder-back')
        ladder_back.setOrigin(0.2940918648532756, 0.2734693243532173)

        // ladder_front
        const ladder_front = this.add.image(813.5378761402483, 588.2272568414896, 'hotelroof', 'ladder-front')
        ladder_front.setOrigin(0.569370120397025, 0.9614621052497746)

        // feedchair
        const feedchair = this.add.image(231.55581070251378, 382.20545493927045, 'hotelroof', 'feedchair')
        feedchair.setOrigin(0.31868562393329686, 0.774425371187432)

        // feedchair_1
        const feedchair_1 = this.add.image(399.0962904586799, 383.5417679611202, 'hotelroof', 'feedchair')
        feedchair_1.setOrigin(0.2964990004571579, 0.7937337242331308)

        // divider
        const divider = this.add.image(367.33696995295435, 425.96751755777086, 'hotelroof', 'divider')
        divider.setOrigin(0.49409527705754847, 0.28420273756699016)

        // foodbowl_right
        const foodbowl_right = this.add.sprite(300, 415, 'hotelroof', 'foodbowl0001')
        foodbowl_right.setOrigin(0.8353862218532409, 0.8559030514062657)

        // foodbowl_left
        const foodbowl_left = this.add.sprite(473, 416, 'hotelroof', 'foodbowl0001')
        foodbowl_left.setOrigin(0.8353862218532409, 0.8559030514062657)

        // dividerwindow
        const dividerwindow = this.add.image(357.33696995295435, 434.4455742728648, 'hotelroof', 'dividerwindow')
        dividerwindow.setOrigin(0.493906109732161, 0.7970302744781693)

        // elevator_back
        const elevator_back = this.add.sprite(-4.934295093738896, 57.35900137998897, 'hotelroof', 'elevator-back0001')
        elevator_back.setOrigin(-0.026390764930602016, -0.7237233263511926)

        // elevator_anim
        const elevator_anim = this.add.sprite(21.804430978085364, 143.29889137288512, 'hotelroof', 'elevator-anim0001')
        elevator_anim.setOrigin(0.17451333030640434, -0.4498582959374953)

        // elevator_front
        const elevator_front = this.add.image(8.204388428424352, 218.93074619995332, 'hotelroof', 'elevator-front')
        elevator_front.setOrigin(0.36353813984765443, 0.05129783256679304)

        // stools
        const stools = this.add.image(308.5250810531606, 447.9836994720519, 'hotelroof', 'stools')
        stools.setOrigin(0.5440153696875796, -0.3613373450922989)

        // divingboard
        const divingboard = this.add.sprite(740.8805808094054, 425.0357895648505, 'hotelroof', 'divingboard')
        divingboard.setOrigin(0.3875328282906199, 0.14795990061762399)

        // towelwall
        const towelwall = this.add.image(611, 564, 'hotelroof', 'towelwall')

        // tilldesk
        const tilldesk = this.add.image(196.1980995164423, 621.3704733930954, 'hotelroof', 'tilldesk')
        tilldesk.setOrigin(0.6053712352592535, 0.33026803571586344)

        // cannon
        const cannon = this.add.sprite(1422, 449, 'hotelroof', 'cannon0001')
        cannon.setOrigin(0.8161942895956682, 0.7892841372896537)

        // railing
        const railing = this.add.image(1549, 649, 'hotelroof', 'railing')

        // bush
        const bush = this.add.image(-57, 751, 'hotelroof', 'bush')

        // jug
        const jug = this.add.image(267, 798, 'hotelroof', 'jug')

        // backspeaker
        const backspeaker = this.add.image(1245, 636, 'hotelroof', 'backspeaker')
        backspeaker.setOrigin(0.5744723937513586, 0.6115979781059379)

        // dj_anim
        const dj_anim = this.add.sprite(1282, 716, 'hotelroof', 'dj-anim0001')
        dj_anim.setOrigin(0.569577834838778, 0.32820287694128913)

        // frontspeaker
        const frontspeaker = this.add.image(1377, 833, 'hotelroof', 'frontspeaker')
        frontspeaker.setOrigin(0.46433295389567075, 0.7494921685278011)

        // backspeaker_hover
        const backspeaker_hover = this.add.image(1245, 636, 'hotelroof', 'backspeaker-hover')
        backspeaker_hover.setOrigin(0.5744723937513586, 0.6115979781059379)
        backspeaker_hover.visible = false

        // dj_anim_hover
        const dj_anim_hover = this.add.sprite(1282, 716, 'hotelroof', 'dj-anim-hover0001')
        dj_anim_hover.setOrigin(0.569577834838778, 0.32820287694128913)
        dj_anim_hover.visible = false

        // frontspeaker_hover
        const frontspeaker_hover = this.add.image(1377, 833, 'hotelroof', 'frontspeaker-hover')
        frontspeaker_hover.setOrigin(0.46433295389567075, 0.7494921685278011)
        frontspeaker_hover.visible = false

        // pods
        const pods = this.add.image(767, 767.1837773379076, 'hotelroof', 'pods')
        pods.setOrigin(0.5, 0.20189538096723247)

        // fg
        const fg = this.add.image(739, 1217.4565266156692, 'hotelroof', 'fg')
        fg.setOrigin(0.5, 1.7443254654987839)

        // leftTable
        const leftTable = this.add.container(532.7559359065733, 830.1118683992743)

        // table_left
        const table_left = this.add.image(0.9864370905071524, -3.5082981475068493, 'hotelroof', 'table-left')
        table_left.setOrigin(0.5075427402471016, 0.6747023774641356)
        leftTable.add(table_left)

        // plate1
        const plate1 = this.add.image(-55.75593590657331, -41.11186839927427, 'hotelroof', 'plate0001')
        leftTable.add(plate1)

        // plate2
        const plate2 = this.add.image(51.24406409342669, -20.11186839927427, 'hotelroof', 'plate0001')
        leftTable.add(plate2)

        // glass
        const glass = this.add.image(-25.755935906573313, -11.111868399274272, 'hotelroof', 'glass')
        leftTable.add(glass)

        // rightTable
        const rightTable = this.add.container(997.5985107421875, 830.2070634876986)

        // table_right
        const table_right = this.add.image(-3.598514027768374, -59.20703603397203, 'hotelroof', 'table-right')
        rightTable.add(table_right)

        // plate3
        const plate3 = this.add.image(-51.598514027768374, -16.20703603397203, 'hotelroof', 'plate0001')
        rightTable.add(plate3)

        // plate4
        const plate4 = this.add.image(53.401485972231626, -45.20703603397203, 'hotelroof', 'plate0001')
        rightTable.add(plate4)

        // glass_1
        const glass_1 = this.add.image(20.401485972231626, -5.207036033972031, 'hotelroof', 'glass')
        rightTable.add(glass_1)

        // interfaceBtn
        const interfaceBtn = this.add.image(1426, 1541.9130682216623, 'hotelroof', 'interface')
        interfaceBtn.setOrigin(0.5, 5.405167052401001)

        // eleBtn
        const eleBtn = this.add.rectangle(119.42841286592164, 574.4329263558656, 128, 128)
        eleBtn.scaleX = 1.1902533898394643
        eleBtn.scaleY = 2.403456683271527
        eleBtn.setOrigin(0.8309984102048913, 0.9207251756332915)

        // djBtn
        const djBtn = this.add.rectangle(1344.8417687190517, 707.3125609624908, 128, 128)
        djBtn.scaleX = 1.1902533898394643
        djBtn.scaleY = 2.403456683271527
        djBtn.angle = -29.000000000000004
        djBtn.setOrigin(0.8202034721941791, 0.581627056849916)

        // cannonBtn
        const cannonBtn = this.add.rectangle(1420.5037652447522, 524.4359908392105, 128, 128)
        cannonBtn.scaleX = 1.4938766717667982
        cannonBtn.scaleY = 1.6560023371223849
        cannonBtn.setOrigin(0.4817158041856988, 0.7804003854168151)

        // lists
        const sort = [ladder_back, interfaceBtn, fg, glass_1, glass, pods, frontspeaker, dj_anim, backspeaker, jug, bush, railing, cannon, tilldesk, towelwall, divingboard, dividerwindow, foodbowl_left, foodbowl_right, divider, feedchair_1, feedchair, ladder_front, rightTable, leftTable, stools, elevator_front, elevator_anim, elevator_back]

        // sleepchair_right (components)
        const sleepchair_rightButton = new Button(sleepchair_right)
        new MoveTo(sleepchair_right)

        // sleepchair_left (components)
        const sleepchair_leftButton = new Button(sleepchair_left)
        new MoveTo(sleepchair_left)

        // feedchair (components)
        const feedchairButton = new Button(feedchair)
        new MoveTo(feedchair)

        // feedchair_1 (components)
        const feedchair_1Button = new Button(feedchair_1)
        new MoveTo(feedchair_1)

        // plate1 (components)
        const plate1SimpleButton = new SimpleButton(plate1)
        plate1SimpleButton.callback = () => this.onPlateClick(1)

        // plate2 (components)
        const plate2SimpleButton = new SimpleButton(plate2)
        plate2SimpleButton.callback = () => this.onPlateClick(2)

        // plate3 (components)
        const plate3SimpleButton = new SimpleButton(plate3)
        plate3SimpleButton.callback = () => this.onPlateClick(3)

        // plate4 (components)
        const plate4SimpleButton = new SimpleButton(plate4)
        plate4SimpleButton.callback = () => this.onPlateClick(4)

        // interfaceBtn (components)
        const interfaceBtnButton = new Button(interfaceBtn)
        interfaceBtnButton.callback = () => this.interface.loadExternal('RainbowQuest')

        // eleBtn (components)
        const eleBtnSimpleButton = new SimpleButton(eleBtn)
        eleBtnSimpleButton.hoverCallback = () => this.onElevatorOver()
        eleBtnSimpleButton.hoverOutCallback = () => this.onElevatorOut()
        new MoveTo(eleBtn)

        // djBtn (components)
        const djBtnSimpleButton = new SimpleButton(djBtn)
        djBtnSimpleButton.hoverCallback = () => this.onDjOver()
        djBtnSimpleButton.hoverOutCallback = () => this.onDjOut()
        new MoveTo(djBtn)

        // cannonBtn (components)
        const cannonBtnSimpleButton = new SimpleButton(cannonBtn)
        cannonBtnSimpleButton.hoverCallback = () => this.onCannonOver()
        cannonBtnSimpleButton.hoverOutCallback = () => this.onCannonOut()
        new MoveTo(cannonBtn)

        this.foodbowl_right = foodbowl_right
        this.foodbowl_left = foodbowl_left
        this.elevator_back = elevator_back
        this.elevator_anim = elevator_anim
        this.divingboard = divingboard
        this.cannon = cannon
        this.backspeaker = backspeaker
        this.dj_anim = dj_anim
        this.frontspeaker = frontspeaker
        this.backspeaker_hover = backspeaker_hover
        this.dj_anim_hover = dj_anim_hover
        this.frontspeaker_hover = frontspeaker_hover
        this.plate1 = plate1
        this.plate2 = plate2
        this.plate3 = plate3
        this.plate4 = plate4
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    foodbowl_right
    /** @type {Phaser.GameObjects.Sprite} */
    foodbowl_left
    /** @type {Phaser.GameObjects.Sprite} */
    elevator_back
    /** @type {Phaser.GameObjects.Sprite} */
    elevator_anim
    /** @type {Phaser.GameObjects.Sprite} */
    divingboard
    /** @type {Phaser.GameObjects.Sprite} */
    cannon
    /** @type {Phaser.GameObjects.Image} */
    backspeaker
    /** @type {Phaser.GameObjects.Sprite} */
    dj_anim
    /** @type {Phaser.GameObjects.Image} */
    frontspeaker
    /** @type {Phaser.GameObjects.Image} */
    backspeaker_hover
    /** @type {Phaser.GameObjects.Sprite} */
    dj_anim_hover
    /** @type {Phaser.GameObjects.Image} */
    frontspeaker_hover
    /** @type {Phaser.GameObjects.Image} */
    plate1
    /** @type {Phaser.GameObjects.Image} */
    plate2
    /** @type {Phaser.GameObjects.Image} */
    plate3
    /** @type {Phaser.GameObjects.Image} */
    plate4
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort

    /* START-USER-CODE */

    onPlateClick(plate) {
        let plateFrame = this[`plate${plate}`].frame.name
        let frameNum = parseInt(plateFrame.substr(plateFrame.length - 1))
        frameNum = frameNum == 5 ? 1 : frameNum + 1
        this[`plate${plate}`].setFrame(`plate000${frameNum}`)
    }

    onElevatorOver() {
        if (this.elevator_anim.anims.isPlaying) {
            if (this.elevator_anim.anims.inReverse) this.elevator_anim.anims.reverse()
        } else {
            this.elevator_anim.anims.play('hotelroof-elevator-anim')
        }

        if (this.elevator_back.anims.isPlaying) {
            if (this.elevator_back.anims.inReverse) this.elevator_back.anims.reverse()
        } else {
            this.elevator_back.anims.play('hotelroof-elevator-back')
        }
    }

    onElevatorOut() {
        if (this.elevator_anim.anims.isPlaying) {
            if (!this.elevator_anim.anims.inReverse) this.elevator_anim.anims.reverse()
        } else {
            this.elevator_anim.anims.playReverse('hotelroof-elevator-anim')
        }

        if (this.elevator_back.anims.isPlaying) {
            if (!this.elevator_back.anims.inReverse) this.elevator_back.anims.reverse()
        } else {
            this.elevator_back.anims.playReverse('hotelroof-elevator-back')
        }
    }

    onDjOver() {
        this.backspeaker_hover.visible = true
        this.frontspeaker_hover.visible = true
        this.dj_anim_hover.visible = true
        this.backspeaker.visible = false
        this.frontspeaker.visible = false
        this.dj_anim.visible = false
    }

    onDjOut() {
        this.backspeaker_hover.visible = false
        this.frontspeaker_hover.visible = false
        this.dj_anim_hover.visible = false
        this.backspeaker.visible = true
        this.frontspeaker.visible = true
        this.dj_anim.visible = true
    }

    onCannonOver() {
        if (!this.cannon.anims.isPlaying) {
            this.cannon.setFrame('cannon0150')
        }
    }

    onCannonOut() {
        if (!this.cannon.anims.isPlaying) {
            this.cannon.setFrame('cannon0001')
        }
    }

    launch() {}

    dive() {}

    eat(bowl) {}

    sleep() {}
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
