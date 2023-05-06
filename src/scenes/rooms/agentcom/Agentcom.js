import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Agentcom extends RoomScene {
    constructor() {
        super('Agentcom')

        /** @type {Phaser.GameObjects.Container} */
        this.epfanims
        /** @type {Phaser.GameObjects.Sprite} */
        this.systemscreen
        /** @type {Phaser.GameObjects.Sprite} */
        this.drillsscreen
        /** @type {Phaser.GameObjects.Sprite} */
        this.lobbydoor
        /** @type {Phaser.GameObjects.Sprite} */
        this.computeranim
        /** @type {Phaser.GameObjects.Image} */
        this.missionscreen_hover
        /** @type {Phaser.GameObjects.Sprite} */
        this.defenderlights
        /** @type {Phaser.GameObjects.Sprite} */
        this.defender
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            lobby: () => this.triggerRoom(212, 760, 480),
            missions: () => null,
            spy: () => null,
            system: () => null,
        }
        this.music = 642
        this.loadSfx = ['agentcom-doorclose', 'agentcom-dooropen', 'agentcom-psa', 'agentcom-spyout', 'agentcom-spyover', 'agentcom-systemout', 'agentcom-systemover']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('agentcom-pack', 'client/media/rooms/agentcom/agentcom-pack.json')
    }

    /** @returns {void} */
    _create() {
        // agentcombg
        this.add.image(747, 476, 'agentcom', 'agentcombg')

        // leftscreens
        this.add.image(184, 249, 'agentcom', 'leftscreens')

        // epfanims
        const epfanims = this.add.container(0, 1)

        // spytext_en
        const spytext_en = this.add.image(120, 272, 'agentcom', 'spytext_en')

        // systemtext_en
        const systemtext_en = this.add.image(353, 203, 'agentcom', 'systemtext_en')

        // systemscreen
        const systemscreen = this.add.sprite(349, -60, 'agentcom', 'systemscreen0001')

        // drillsscreen
        const drillsscreen = this.add.sprite(98, 15, 'agentcom', 'drillsscreen0001')

        // leftstairs
        this.add.image(401, 358, 'agentcom', 'leftstairs')

        // greentubeback
        this.add.image(1314, 147, 'agentcom', 'greentubeback')

        // frontthings
        this.add.image(1027, 353, 'agentcom', 'frontthings')

        // rightstairs
        this.add.image(1131, 408, 'agentcom', 'rightstairs')

        // middlescreen
        this.add.image(760, 186, 'agentcom', 'middlescreen')

        // epftext_en
        const epftext_en = this.add.image(778, 213, 'agentcom', 'epftext_en')

        // leftaudio
        this.add.image(521, 240, 'agentcom', 'leftaudio')

        // deskthing
        this.add.image(474, 345, 'agentcom', 'deskthing')

        // rightaudio
        this.add.image(1000, 240, 'agentcom', 'rightaudio')

        // rightdeskthing
        this.add.image(1049, 349, 'agentcom', 'rightdeskthing')

        // topscreens
        const topscreens = this.add.image(-123.84555746710066, 243.6059999309091, 'agentcom', 'topscreens')
        topscreens.setOrigin(0.002326115639921242, 1.005654929334187)

        // seat4
        const seat4 = this.add.image(922, 336, 'agentcom', 'seat4')

        // seat5
        const seat5 = this.add.image(946, 404, 'agentcom', 'seat5')

        // seat3
        const seat3 = this.add.image(604, 335, 'agentcom', 'seat3')

        // seat2
        const seat2 = this.add.image(580, 404, 'agentcom', 'seat2')

        // seat1
        const seat1 = this.add.image(554, 478, 'agentcom', 'seat1')

        // table
        const table = this.add.image(763, 311.6815343090492, 'agentcom', 'table')
        table.setOrigin(0.5, 0.029075037688458292)

        // seat6
        const seat6 = this.add.image(973, 478, 'agentcom', 'seat6')

        // greentube
        this.add.image(1317, 113, 'agentcom', 'greentube')

        // greentubetop
        this.add.image(1333, -24, 'agentcom', 'greentubetop')

        // lobbydoor
        const lobbydoor = this.add.sprite(1310, 203, 'agentcom', 'lobbydoor0001')

        // lobbydoorholder
        this.add.image(1296, 186, 'agentcom', 'lobbydoorholder')

        // rightspeaker
        this.add.image(1020, 163, 'agentcom', 'rightspeaker')

        // leftspeaker
        this.add.image(501, 164, 'agentcom', 'leftspeaker')

        // wheelchair
        const wheelchair = this.add.image(176.6555568268647, 834.1379630689054, 'agentcom', 'wheelchair')
        wheelchair.setOrigin(0.40680681826004245, 0.49425308712603583)

        // computeranim
        const computeranim = this.add.sprite(242.20718702062268, 807.1515326940679, 'agentcom', 'computeranim0001')
        computeranim.setOrigin(0.3286856048062333, 1.1932288039627124)

        // computer
        const computer = this.add.image(275.29894214460785, 825.9518722192223, 'agentcom', 'computer')
        computer.setOrigin(0.4384997022482866, 0.7923896161339404)

        // mugthing
        const mugthing = this.add.image(279, 891, 'agentcom', 'mugthing')

        // jailcell
        this.add.image(237, 629, 'agentcom', 'jailcell')

        // jailchain1
        const jailchain1 = this.add.image(32.33643183889809, 646.3550228722867, 'agentcom', 'jailchain1')
        jailchain1.setOrigin(0.5186906577165608, 0.5812076852512644)

        // jailchain2
        const jailchain2 = this.add.image(175.08821497385463, 581.04893155337, 'agentcom', 'jailchain2')
        jailchain2.setOrigin(0.6496533815839598, 0.8242489934319124)

        // laser1
        const laser1 = this.add.image(53.32345071809535, 722.3222452737594, 'agentcom', 'laser1')
        laser1.setOrigin(0.8329377551119913, 0.9778448468132294)

        // laser2
        const laser2 = this.add.image(98.55551146532662, 699.9258524422111, 'agentcom', 'laser2')
        laser2.setOrigin(0.8413006530109993, 0.9647068804407405)

        // laser3
        const laser3 = this.add.image(140.03063963915474, 681.3982035164298, 'agentcom', 'laser3')
        laser3.setOrigin(0.7794804109074092, 0.9698118560460727)

        // laser4
        const laser4 = this.add.image(187.69352213851093, 655.2943624201044, 'agentcom', 'laser4')
        laser4.setOrigin(0.7841170420336229, 0.9408192036248804)

        // laser5
        const laser5 = this.add.image(230.6035614013672, 635.6815897840296, 'agentcom', 'laser5')
        laser5.setOrigin(0.5754454699522213, 0.932804752176334)

        // laser6
        const laser6 = this.add.image(280.37278239241715, 659.4729817770218, 'agentcom', 'laser6')
        laser6.setOrigin(0.5338893936406893, 0.9384843908081227)

        // laser7
        const laser7 = this.add.image(322, 677, 'agentcom', 'laser7')
        laser7.setOrigin(0.33688887177871557, 0.9072805305281427)

        // laser8
        const laser8 = this.add.image(365, 698, 'agentcom', 'laser8')
        laser8.setOrigin(0.27797177189548467, 0.9171439437115169)

        // laser9
        const laser9 = this.add.image(409.3565673828125, 721.8126220703125, 'agentcom', 'laser9')
        laser9.setOrigin(0.2788834312117144, 0.9265818141834239)

        // laser10
        const laser10 = this.add.image(451.6152648925781, 735.6865844726562, 'agentcom', 'laser10')
        laser10.setOrigin(0.23396912817659418, 0.8869539953794989)

        // jailthing
        const jailthing = this.add.image(580.4896240234375, 637.4884847067093, 'agentcom', 'jailthing')
        jailthing.setOrigin(0.6324124445422442, 0.5989938522425016)

        // leftjailholder
        const leftjailholder = this.add.image(13.276924207562814, 735.055592758896, 'agentcom', 'leftjailholder')
        leftjailholder.setOrigin(0.3564689343169031, 0.9055932009968676)

        // jailholder
        const jailholder = this.add.image(230.46079087783306, 790.9413248674911, 'agentcom', 'jailholder')
        jailholder.setOrigin(0.007195294964424159, 0.9934016822675995)

        // missionscreenholder
        const missionscreenholder = this.add.image(1321.4333830264432, 518.4402427095982, 'agentcom', 'missionscreenholder')
        missionscreenholder.setOrigin(0.3483560027388626, 0.4620493724624347)

        // labdivider
        const labdivider = this.add.image(1152, 695, 'agentcom', 'labdivider')

        // lab
        const lab = this.add.image(1042, 690, 'agentcom', 'lab')

        // missionscreen_en
        const missionscreen_en = this.add.image(1240.0497588200838, 624.8887447676514, 'agentcom', 'missionscreen_en')
        missionscreen_en.setOrigin(0.31185760102709964, 0.9896978303564614)

        // mission_hit
        const mission_hit = this.add.image(1382, 700.5662128760457, 'agentcom', 'mission-hit')
        mission_hit.setOrigin(0.5, 0.9988463108405471)
        mission_hit.alpha = 0.01
        mission_hit.alphaTopLeft = 0.01
        mission_hit.alphaTopRight = 0.01
        mission_hit.alphaBottomLeft = 0.01
        mission_hit.alphaBottomRight = 0.01

        // missionscreen_hover
        const missionscreen_hover = this.add.image(1301.3925828511567, 640.6815886372754, 'agentcom', 'missionscreen-hover')
        missionscreen_hover.setOrigin(0.46428504364585993, 1.0391999618700516)
        missionscreen_hover.visible = false

        // penguinthing
        const penguinthing = this.add.image(1555, 697, 'agentcom', 'penguinthing')

        // shoe
        const shoe = this.add.image(1460, 734, 'agentcom', 'shoe')

        // suits
        const suits = this.add.image(1317.5859948584148, 824.5287568242318, 'agentcom', 'suits')
        suits.setOrigin(0.3413148410103978, 0.32571528300803004)

        // agentcomfg
        const agentcomfg = this.add.image(-117, 976, 'agentcom', 'agentcomfg')
        agentcomfg.setOrigin(0, 1)

        // agentbook
        const agentbook = this.add.image(1412.0142260705, 1001.1032421168442, 'agentcom', 'agentbook')
        agentbook.setOrigin(0.5262368354816179, 1.5704628876500177)

        // defenderlights
        const defenderlights = this.add.sprite(1413.6971606864008, 986.0504836207638, 'agentcom', 'defenderlights0001')
        defenderlights.scaleX = 0.4
        defenderlights.scaleY = 0.4
        defenderlights.setOrigin(0.4691773692730517, 2.1335994285282727)
        defenderlights.visible = false

        // defender
        const defender = this.add.sprite(1420.6761572191251, 1005.5303069403791, 'agentcom', 'defender')
        defender.setOrigin(0.5259821089235448, 2.9599020903068594)

        // doorhit
        const doorhit = this.add.image(1292, 221, 'agentcom', 'doorhit')
        doorhit.alpha = 0.01
        doorhit.alphaTopLeft = 0.01
        doorhit.alphaTopRight = 0.01
        doorhit.alphaBottomLeft = 0.01
        doorhit.alphaBottomRight = 0.01

        // systemhit
        const systemhit = this.add.rectangle(349, 139, 128, 128)
        systemhit.scaleX = 1.9852271759034843
        systemhit.scaleY = 1.1746703859507754

        // spyhit
        const spyhit = this.add.image(101, 215, 'agentcom', 'spyhit')
        spyhit.scaleX = 1.0312288684044242
        spyhit.scaleY = 1.0312288684044242
        spyhit.alpha = 0.01
        spyhit.alphaTopLeft = 0.01
        spyhit.alphaTopRight = 0.01
        spyhit.alphaBottomLeft = 0.01
        spyhit.alphaBottomRight = 0.01

        // moveto
        const moveto = this.add.ellipse(595, 412, 70, 50)

        // moveto_1
        const moveto_1 = this.add.ellipse(572, 486, 70, 50)

        // moveto_2
        const moveto_2 = this.add.ellipse(614, 340, 70, 50)

        // moveto_3
        const moveto_3 = this.add.ellipse(910, 342, 70, 50)

        // moveto_4
        const moveto_4 = this.add.ellipse(931, 414, 70, 50)

        // moveto_5
        const moveto_5 = this.add.ellipse(953, 486, 70, 50)

        // moveto_6
        const moveto_6 = this.add.ellipse(66, 623, 70, 50)

        // moveto_7
        const moveto_7 = this.add.ellipse(202, 569, 70, 50)

        // moveto_8
        const moveto_8 = this.add.ellipse(201, 845, 70, 50)

        // lists
        const sort = [table, seat1, seat2, seat3, seat4, seat5, seat6, computer, mugthing, wheelchair, agentcomfg, topscreens, jailthing, leftjailholder, jailholder, laser1, laser3, laser4, laser5, laser6, laser7, laser8, laser9, laser10, lab, labdivider, missionscreenholder, missionscreen_en, mission_hit, missionscreen_hover, penguinthing, shoe, suits, defender, agentbook, computeranim, laser2, jailchain2, jailchain1, defenderlights]

        // spytext_en (components)
        new LocalisedSprite(spytext_en)

        // systemtext_en (components)
        new LocalisedSprite(systemtext_en)

        // epftext_en (components)
        new LocalisedSprite(epftext_en)

        // missionscreen_en (components)
        new LocalisedSprite(missionscreen_en)

        // mission_hit (components)
        const mission_hitSimpleButton = new SimpleButton(mission_hit)
        mission_hitSimpleButton.hoverCallback = () => this.onMissionOver()
        mission_hitSimpleButton.hoverOutCallback = () => this.onMissionOut()
        new MoveTo(mission_hit)

        // agentbook (components)
        const agentbookButton = new Button(agentbook)

        // defender (components)
        const defenderButton = new Button(defender)
        defenderButton.hoverCallback = () => this.onSymbolsOver()
        defenderButton.hoverOutCallback = () => this.onSymbolsOut()

        // doorhit (components)
        const doorhitSimpleButton = new SimpleButton(doorhit)
        doorhitSimpleButton.hoverCallback = () => this.onDoorOver()
        doorhitSimpleButton.hoverOutCallback = () => this.onDoorOut()
        const doorhitMoveTo = new MoveTo(doorhit)
        doorhitMoveTo.x = 1300
        doorhitMoveTo.y = 300

        // systemhit (components)
        const systemhitSimpleButton = new SimpleButton(systemhit)
        systemhitSimpleButton.hoverCallback = () => this.onDefenderOver()
        systemhitSimpleButton.hoverOutCallback = () => this.onDefenderOut()
        const systemhitMoveTo = new MoveTo(systemhit)
        systemhitMoveTo.x = 350
        systemhitMoveTo.y = 380

        // spyhit (components)
        const spyhitSimpleButton = new SimpleButton(spyhit)
        spyhitSimpleButton.hoverCallback = () => this.onDrillOver()
        spyhitSimpleButton.hoverOutCallback = () => this.onDrillOut()
        const spyhitMoveTo = new MoveTo(spyhit)
        spyhitMoveTo.x = 180
        spyhitMoveTo.y = 350

        // moveto (components)
        const movetoSeat = new Seat(moveto)
        movetoSeat.direction = 'east'

        // moveto_1 (components)
        const moveto_1Seat = new Seat(moveto_1)
        moveto_1Seat.direction = 'east'

        // moveto_2 (components)
        const moveto_2Seat = new Seat(moveto_2)
        moveto_2Seat.direction = 'east'

        // moveto_3 (components)
        const moveto_3Seat = new Seat(moveto_3)
        moveto_3Seat.direction = 'west'

        // moveto_4 (components)
        const moveto_4Seat = new Seat(moveto_4)
        moveto_4Seat.direction = 'west'

        // moveto_5 (components)
        const moveto_5Seat = new Seat(moveto_5)
        moveto_5Seat.direction = 'west'

        // moveto_6 (components)
        const moveto_6Seat = new Seat(moveto_6)
        moveto_6Seat.direction = 'southeast'

        // moveto_7 (components)
        const moveto_7Seat = new Seat(moveto_7)
        moveto_7Seat.direction = 'southeast'

        // moveto_8 (components)
        const moveto_8Seat = new Seat(moveto_8)
        moveto_8Seat.direction = 'southeast'

        this.epfanims = epfanims
        this.systemscreen = systemscreen
        this.drillsscreen = drillsscreen
        this.lobbydoor = lobbydoor
        this.computeranim = computeranim
        this.missionscreen_hover = missionscreen_hover
        this.defenderlights = defenderlights
        this.defender = defender
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        let animvid = this.add.video(760, 479, 'agentcom-video')
        this.epfanims.add(animvid)
        animvid.play(true)

        this.computeranim.play('agentcom-computer')
    }

    onMissionOver() {
        this.missionscreen_hover.visible = true
        this.shell.musicController.addSfx('agentcom-psa')
    }

    onMissionOut() {
        this.missionscreen_hover.visible = false
    }

    onDoorOver() {
        this.lobbydoor.play('agentcom-dooropen')
        this.shell.musicController.addSfx('agentcom-dooropen')
    }

    onDoorOut() {
        this.shell.musicController.stopSfx('agentcom-dooropen')
        this.lobbydoor.play('agentcom-doorclose')
        this.shell.musicController.addSfx('agentcom-doorclose')
    }

    onDrillOver() {
        this.shell.musicController.addSfx('agentcom-spyover')
        this.drillsscreen.play('agentcom-drillsopen')
    }

    onDrillOut() {
        this.shell.musicController.addSfx('agentcom-spyout')
        this.drillsscreen.play('agentcom-drillsout')
    }

    onDefenderOver() {
        this.shell.musicController.addSfx('agentcom-systemover')
        this.systemscreen.play('agentcom-systemopen')
    }

    onDefenderOut() {
        this.shell.musicController.addSfx('agentcom-systemout')
        this.systemscreen.play('agentcom-systemout')
    }

    onSymbolsOver() {
        this.defenderlights.visible = true
        this.defenderlights.play('agentcom-defenderlights')
    }

    onSymbolsOut() {
        this.defenderlights.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
