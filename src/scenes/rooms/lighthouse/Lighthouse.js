import RoomScene from '../RoomScene'

import {Animation, Button, MoveTo, SimpleButton, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Lighthouse extends RoomScene {
    constructor() {
        super('Lighthouse')

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 510, 450),
            beacon: () => this.triggerRoom(411, 273, 717),
            drums: null
        }

        this.music = '588'

        this.loadSfx = ['lighthouse-LightDoorOpen', 'lighthouse-LightDoorClose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('lighthouse-pack', 'client/media/rooms/lighthouse/lighthouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'lighthouse', 'bg')

        // actuallyidkwhatthisis
        const actuallyidkwhatthisis = this.add.image(180.08974094299833, 602.0863703277898, 'lighthouse', 'actuallyidkwhatthisis')
        actuallyidkwhatthisis.setOrigin(0.1184800927256568, 0.6271733024247811)

        // banner
        const banner = this.add.image(962.2055508554018, 346.46803245397984, 'lighthouse', 'banner')
        banner.setOrigin(0.6330299676680275, 0.3609042004728957)

        // chair1_back
        const chair1_back = this.add.image(741.4736421815203, 630.7812602180342, 'lighthouse', 'chair1-back')
        chair1_back.setOrigin(0.4878115932394536, 0.6570638118482215)

        // chair1_front
        const chair1_front = this.add.image(742.5262059828314, 676.8714125934339, 'lighthouse', 'chair1-front')
        chair1_front.setOrigin(0.48850408288344166, 0.7050743881181603)

        // chair10
        const chair10 = this.add.image(1069.868613904458, 744.4367494598193, 'lighthouse', 'chair10')
        chair10.setOrigin(0.7038609302003013, 0.7754549473539785)

        // chair10_front
        const chair10_front = this.add.image(1069.868613904458, 785.2089354998797, 'lighthouse', 'chair10-front')
        chair10_front.setOrigin(0.7038609302003013, 0.8179259744790414)

        // chair11
        const chair11 = this.add.image(1046.5702218815663, 828.3109607422291, 'lighthouse', 'chair11')
        chair11.setOrigin(0.6885330407115569, 0.862823917439822)

        // chair11_front
        const chair11_front = this.add.image(1031.426267066687, 870.248066383434, 'lighthouse', 'chair11-front')
        chair11_front.setOrigin(0.678569912543873, 0.9065084024827438)

        // chair12
        const chair12 = this.add.image(959.2012517957229, 685.0258498014459, 'lighthouse', 'chair12')
        chair12.setOrigin(0.6310534551287651, 0.7135685935431728)

        // chair12_front
        const chair12_front = this.add.image(955.7064929922892, 732.7875534483736, 'lighthouse', 'chair12-front')
        chair12_front.setOrigin(0.6287542717054534, 0.7633203681753892)

        // chair13
        const chair13 = this.add.image(930.0782617671085, 764.2403826792772, 'lighthouse', 'chair13')
        chair13.setOrigin(0.6118935932678345, 0.7960837319575804)

        // chair13_front
        const chair13_front = this.add.image(912.6044677499399, 807.3424079216267, 'lighthouse', 'chair13-front')
        chair13_front.setOrigin(0.6003976761512763, 0.8409816749183611)

        // chair14
        const chair14 = this.add.image(784.4633116240361, 761.9105434769881, 'lighthouse', 'chair14')
        chair14.setOrigin(0.5160942839631817, 0.7936568161218626)

        // chair14_front
        const chair14_front = this.add.image(777.4737940171686, 793.3633727078917, 'lighthouse', 'chair14-front')
        chair14_front.setOrigin(0.5114959171165583, 0.8264201799040538)

        // chair15
        const chair15 = this.add.image(872.9972013110241, 828.3109607422291, 'lighthouse', 'chair15')
        chair15.setOrigin(0.5743402640204106, 0.862823917439822)

        // chair15_front
        const chair15_front = this.add.image(870.667362108735, 862.0936291754219, 'lighthouse', 'chair15-front')
        chair15_front.setOrigin(0.5728074750715362, 0.8980141970577312)

        // chair16
        const chair16 = this.add.image(713.4032159542169, 837.6303175513857, 'lighthouse', 'chair16')
        chair16.setOrigin(0.4693442210225111, 0.8725315807826934)

        // chair16_front
        const chair16_front = this.add.image(714.5681355553614, 872.5779055857231, 'lighthouse', 'chair16-front')
        chair16_front.setOrigin(0.4701106154969483, 0.9089353183184615)

        // chair2
        const chair2 = this.add.image(743.6911255839759, 633.7693873510844, 'lighthouse', 'chair2')
        chair2.setOrigin(0.4892704773578789, 0.6601764451573796)

        // chair2_front
        const chair2_front = this.add.image(737.866527578253, 679.201251795723, 'lighthouse', 'chair2-front')
        chair2_front.setOrigin(0.48543850498569274, 0.7075013039538781)

        // chair3
        const chair3 = this.add.image(705.2487787462048, 703.6645634197591, 'lighthouse', 'chair3')
        chair3.setOrigin(0.46397945970145055, 0.7329839202289158)

        // chair3_front
        const chair3_front = this.add.image(699.4241807404819, 744.4367494598193, 'lighthouse', 'chair3-front')
        chair3_front.setOrigin(0.4601474873292644, 0.7754549473539785)

        // chair4
        const chair4 = this.add.image(645.8378790878313, 772.3948198872893, 'lighthouse', 'chair4')
        chair4.setOrigin(0.4248933415051522, 0.804577937382593)

        // chair4_front
        const chair4_front = this.add.image(638.8483614809638, 818.9916039330724, 'lighthouse', 'chair4-front')
        chair4_front.setOrigin(0.42029497465852883, 0.8531162540969504)

        // chair5
        const chair5 = this.add.image(558.4689090019879, 830.6407999445182, 'lighthouse', 'chair5')
        chair5.setOrigin(0.3674137559223604, 0.8652508332755399)

        // chair5_front
        const chair5_front = this.add.image(546.819712990542, 870.248066383434, 'lighthouse', 'chair5-front')
        chair5_front.setOrigin(0.35974981117798815, 0.9065084024827438)

        // chair6
        const chair6 = this.add.image(848.533889686988, 622.1201913396386, 'lighthouse', 'chair6')
        chair6.setOrigin(0.5582459800572289, 0.6480418659787902)

        // chair6_front
        const chair6_front = this.add.image(847.3689700858434, 659.3976185762651, 'lighthouse', 'chair6-front')
        chair6_front.setOrigin(0.5574795855827918, 0.6868725193502762)

        // chair7
        const chair7 = this.add.image(831.0600956698192, 683.8609302003013, 'lighthouse', 'chair7')
        chair7.setOrigin(0.5467500629406705, 0.7123551356253138)

        // chair7_front
        const chair7_front = this.add.image(822.9056584618071, 719.9734378357832, 'lighthouse', 'chair7-front')
        chair7_front.setOrigin(0.54138530161961, 0.7499723310789409)

        // chair8
        const chair8 = this.add.image(966.1907694025905, 630.2746285476507, 'lighthouse', 'chair8')
        chair8.setOrigin(0.6356518219753885, 0.6565360714038028)

        // chair8_front
        const chair8_front = this.add.image(959.2012517957229, 675.7064929922892, 'lighthouse', 'chair8-front')
        chair8_front.setOrigin(0.6310534551287651, 0.7038609302003013)

        // chair9
        const chair9 = this.add.image(1078.02305111247, 680.3661713968676, 'lighthouse', 'chair9')
        chair9.setOrigin(0.7092256915213618, 0.7087147618717371)

        // chair9_front
        const chair9_front = this.add.image(1076.8581315113254, 733.9524730495182, 'lighthouse', 'chair9-front')
        chair9_front.setOrigin(0.7084592970469246, 0.764533826093248)

        // door
        const door = this.add.image(452, 459, 'lighthouse', 'door')
        door.setOrigin(0.3872658450505245, 0.8045890700240413)

        // nikpmup
        const nikpmup = this.add.image(582.932220626024, 417.09434153819274, 'lighthouse', 'nikpmup')
        nikpmup.setOrigin(0.3835080398855421, 0.43447327243561745)

        // popcorn
        const popcorn = this.add.image(736.7016079771084, 377.48707509927704, 'lighthouse', 'popcorn')
        popcorn.setOrigin(0.4846721105112555, 0.3932157032284136)

        // projector
        const projector = this.add.image(1180.326592990545, 394.96282800769325, 'lighthouse', 'projector')
        projector.setOrigin(0.7765306532832532, 0.4114196125080138)

        // pumpkin
        const pumpkin = this.add.image(1493.7493126193328, 608.7705747312074, 'lighthouse', 'pumpkin')
        pumpkin.setOrigin(0.9827298109337717, 0.6341360153450076)

        // railin
        const railin = this.add.image(201.18429833626976, 594.1927738182405, 'lighthouse', 'railin')
        railin.setOrigin(0.13235809101070378, 0.6189508060606672)

        // railin2
        const railin2 = this.add.image(157.45089559736903, 601.481674274724, 'lighthouse', 'railin2')
        railin2.setOrigin(0.10358611552458488, 0.6265434107028375)

        // railing
        const railing = this.add.image(1294.5193668087854, 574.7557059342847, 'lighthouse', 'railing')
        railing.setOrigin(0.8516574781636747, 0.5987038603482132)

        // screen
        const screen = this.add.image(1187.6154934470283, 462.9925656015387, 'lighthouse', 'screen')
        screen.setOrigin(0.7813259825309397, 0.4822839225016028)

        // speaker
        const speaker = this.add.image(628.7997917832981, 433.8369637756049, 'lighthouse', 'speaker')
        speaker.setOrigin(0.4136840735416435, 0.45191350393292173)

        // speaker2
        const speaker2 = this.add.image(43.25812177912849, 849.3042897951609, 'lighthouse', 'speaker2')
        speaker2.setOrigin(0.028459290644163478, 0.8846919685366259)

        // stand
        const stand = this.add.image(983.5262806654921, 506.7259683404393, 'lighthouse', 'stand')
        stand.setOrigin(0.6470567635957185, 0.5278395503546243)

        // catalog
        const catalog = this.add.image(1426, 1173.774654156404, 'lighthouse', 'catalog')
        catalog.setOrigin(0.5, 2.967605688316557)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(168, 422, 350, 250)
        rectangle_1.scaleX = 0.5289812898672783
        rectangle_1.scaleY = 0.9368037044783979
        rectangle_1.angle = -32

        // rectangle
        const rectangle = this.add.rectangle(78, 475, 350, 250)
        rectangle.scaleX = 0.3555604665465204
        rectangle.scaleY = 0.8622623334968647
        rectangle.angle = -10

        // rectangle_2
        const rectangle_2 = this.add.rectangle(238, 377, 350, 250)
        rectangle_2.scaleX = 0.3555604665465204
        rectangle_2.scaleY = 0.8622623334968647
        rectangle_2.angle = -10

        // rectangle_3
        const rectangle_3 = this.add.rectangle(261, 294, 350, 250)
        rectangle_3.scaleX = 0.21895216380032803
        rectangle_3.scaleY = 0.4659933914915612
        rectangle_3.angle = -2

        // rectangle_4
        const rectangle_4 = this.add.rectangle(84, 575, 350, 250)
        rectangle_4.scaleX = 0.21895216380032803
        rectangle_4.scaleY = 0.4659933914915612
        rectangle_4.angle = 55

        // lists
        const sort = [actuallyidkwhatthisis, catalog, stand, speaker2, speaker, screen, railing, railin2, railin, pumpkin, projector, popcorn, nikpmup, chair9_front, chair9, chair8_front, chair8, chair7_front, chair7, chair6_front, chair6, chair5_front, chair5, chair4_front, chair4, chair3_front, chair3, chair2_front, chair2, chair16_front, chair16, chair15_front, chair15, chair14_front, chair14, chair13_front, chair13, chair12_front, chair12, chair11_front, chair11, chair10_front, chair10, chair1_front, chair1_back, banner]

        // door (components)
        new MoveTo(door)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('lighthouse-LightDoorOpen')
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('lighthouse-LightDoorClose')

        // catalog (components)
        const catalogButton = new Button(catalog)
        catalogButton.callback = () => this.interface.loadExternal('MusicCatalog')

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.callback = () => this.playRuffle()

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle)
        rectangleSimpleButton.callback = () => this.playRuffle()

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2)
        rectangle_2SimpleButton.callback = () => this.playRuffle()

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3)
        rectangle_3SimpleButton.callback = () => this.playRuffle()

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4)
        rectangle_4SimpleButton.callback = () => this.playRuffle()

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.shell.RuffleManager.handleLoadOtherSwf('notls-loader.swf')
        var ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        ruffleplayer.style.pointerEvents = 'none'
    }

    onInstrumentsOver() {
        this.instruments.setFrame('instruments-hover')
    }

    onInstrumentsOut() {
        this.instruments.setFrame('instruments')
    }

    onToTopOver() {
        this.sign.__Animation.play()
    }

    onToTopClick() {
        this.triggerRoom(411, 224, 700)
    }

    onDrumsClick() {
        this.drumkit.__Animation.play()
    }

    stop() {
        this.shell.RuffleManager.killSwf()
        super.stop()
    }

    playRuffle() {
        let ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        if (!ruffleplayer.isPlaying) {
            ruffleplayer.play()
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
