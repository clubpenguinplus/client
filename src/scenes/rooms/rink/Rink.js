import RoomScene from '../RoomScene'
import {LocalisedSprite, Button} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class Rink extends RoomScene {
    constructor() {
        super('Rink')

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forts: () => this.triggerRoom(801, 560, 400),
            school: () => this.triggerRoom(122, 220, 760)
        }
        this.music = 592
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('rink-pack', 'client/media/rooms/rink/rink-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'rink', 'bg')

        // arrow
        const arrow = this.add.image(1131.90617275435, 388.8230028086109, 'rink', 'arrow')
        arrow.setOrigin(0.7446751136541777, 0.4050239612589697)

        // arrow2
        const arrow2 = this.add.image(954.3509676974346, 775.1255435405487, 'rink', 'arrow2')
        arrow2.setOrigin(0.6278624787483122, 0.8074224411880716)

        // bush
        const bush = this.add.image(373.6974592680621, 578.375181180183, 'rink', 'bush')
        bush.setOrigin(0.24585359162372508, 0.6024741470626905)

        // bush2
        const bush2 = this.add.image(1458.2238469130057, 784.723122192274, 'rink', 'bush2')
        bush2.setOrigin(0.9593577940217143, 0.8174199189502854)

        // bush4
        const bush4 = this.add.image(1177.4946713500447, 304.8441896060158, 'rink', 'bush4')
        bush4.setOrigin(0.7746675469408189, 0.31754603083959976)

        // house1
        const house1 = this.add.image(795.9909199439694, 271.2526643249777, 'rink', 'house1')
        house1.setOrigin(0.5236782368052431, 0.28255485867185176)

        // house1_front
        const house1_front = this.add.image(563.2496376396341, 302.4447949430845, 'rink', 'house1_front')
        house1_front.setOrigin(0.3705589721313382, 0.31504666139904636)

        // house1_porch
        const house1_porch = this.add.image(841.579418539664, 336.0363202241225, 'rink', 'house1_porch')
        house1_porch.setOrigin(0.5536706700918842, 0.3500378335667943)

        // house2
        const house2 = this.add.image(1386.2420070250669, 746.3328075853733, 'rink', 'house2')
        house2.setOrigin(0.9120013204112282, 0.7774300079014306)

        // house3
        const house3 = this.add.image(167.34951825597113, 717.5400716301979, 'rink', 'house3')
        house3.setOrigin(0.11009836727366522, 0.7474375746147894)

        // lamp2
        const lamp2 = this.add.image(855.9757865172517, 453.6066587077558, 'rink', 'lamp2')
        lamp2.setOrigin(0.5631419648139814, 0.4725069361539123)

        // lampere
        const lampere = this.add.image(1023.9334129224419, 374.4266348310232, 'rink', 'lampere')
        lampere.setOrigin(0.6736404032384486, 0.39002774461564915)

        // picket
        const picket = this.add.image(1064.7231221922739, 379.22542415688577, 'rink', 'picket')
        picket.setOrigin(0.7004757382843907, 0.395026483496756)

        // picket2
        const picket2 = this.add.image(440.8805098301383, 398.4205814603361, 'rink', 'picket2')
        picket2.setOrigin(0.290052966993512, 0.41502143902118344)

        // picket3
        const picket3 = this.add.image(481.67021909997015, 446.40847471896194, 'rink', 'picket3')
        picket3.setOrigin(0.31688830203945406, 0.465008827832252)

        // picket4
        const picket4 = this.add.image(608.8381362353286, 465.6036320224122, 'rink', 'picket4')
        picket4.setOrigin(0.4005514054179794, 0.48500378335667943)

        // picket5
        const picket5 = this.add.image(760, 463.20423735948094, 'rink', 'picket5')
        picket5.setOrigin(0.5, 0.482504413916126)

        // pole
        const pole = this.add.image(548.8532696620464, 705.5430983155413, 'rink', 'pole')
        pole.setOrigin(0.361087677409241, 0.7349407274120222)

        // pole2
        const pole2 = this.add.image(620.8351095499851, 686.347941012091, 'rink', 'pole2')
        pole2.setOrigin(0.40844415101972703, 0.7149457718875948)

        // pole3
        const pole3 = this.add.image(702.414528089649, 650.3570210681216, 'rink', 'pole3')
        pole3.setOrigin(0.4621148211116112, 0.6774552302792933)

        // pole4
        const pole4 = this.add.image(776.7957626405189, 626.3630744388088, 'rink', 'pole4')
        pole4.setOrigin(0.5110498438424467, 0.6524615358737591)

        // bush3
        const bush3 = this.add.image(476.87142977410764, 722.3388609560604, 'rink', 'bush3')
        bush3.setOrigin(0.313731203798755, 0.7524363134958963)

        // scarytree
        const scarytree = this.add.image(1455.8244522500745, 288.0484269654967, 'rink', 'scarytree')
        scarytree.setOrigin(0.9577792449013648, 0.3000504447557257)

        // swingback
        const swingback = this.add.image(596.8411629206722, 494.39636797758783, 'rink', 'swingback')
        swingback.setOrigin(0.3926586598162317, 0.5149962166433206)

        // swingseatleft
        const swingseatleft = this.add.image(628.0332935387789, 520.789709269832, 'rink', 'swingseatleft')
        swingseatleft.setOrigin(0.4131797983807756, 0.5424892804894083)

        // swingfrontleft
        const swingfrontleft = this.add.image(673.6217921344735, 563.9788132025952, 'rink', 'swingfrontleft')
        swingfrontleft.setOrigin(0.44317223166741676, 0.58747793041937)

        // swingseatright
        const swingseatright = this.add.image(714.4115014043055, 549.5824452250074, 'rink', 'swingseatright')
        swingseatright.setOrigin(0.47000756671335886, 0.5724817137760494)

        // swingfrontright
        const swingfrontright = this.add.image(771.9969733146564, 587.9727598319081, 'rink', 'swingfrontright')
        swingfrontright.setOrigin(0.5078927456017477, 0.6124716248249042)

        // fg
        const fg = this.add.image(757.6006053370687, 976.6746952267772, 'rink', 'fg')
        fg.setOrigin(0.49842145087965045, 1.0173694741945596)

        // lists
        const sort = [fg, swingfrontright, swingseatright, swingfrontleft, swingseatleft, swingback, scarytree, bush3, pole4, pole3, pole2, pole, picket5, picket4, picket3, picket2, picket, lampere, lamp2, house3, house2, house1_porch, house1_front, house1, bush4, bush2, bush, arrow2, arrow]

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    loadSeason() {
        let currentMonth = new Date().getMonth() + 1
        if (currentMonth >= 5 && currentMonth < 11) {
            this.bg.visible = true
            this.fg.visible = true
            this.gate.visible = true
            this.ball.visible = true
            this.net.visible = true
            this.net_1.visible = true
            this.net2.visible = true
            this.net1.visible = true
            this.signs_en.visible = true
            this.puck.visible = false
            this.netwinter.visible = false
            this.net2winter.visible = false
            this.net3winter.visible = false
            this.net4winter.visible = false
            this.bgwinter.visible = false
            this.fgwinter.visible = false
            this.toprink.visible = false
        } else if (currentMonth >= 11 || currentMonth < 5) {
            this.bg.visible = false
            this.fg.visible = false
            this.gate.visible = false
            this.ball.visible = false
            this.net.visible = false
            this.net_1.visible = false
            this.net2.visible = false
            this.net1.visible = false
            this.signs_en.visible = false
            this.puck.visible = true
            this.netwinter.visible = true
            this.net2winter.visible = true
            this.net3winter.visible = true
            this.net4winter.visible = true
            this.bgwinter.visible = true
            this.fgwinter.visible = true
            this.toprink.visible = true
        }
    }

    loadSnowSports() {
        let currentMonth = new Date().getMonth() + 1

        if (currentMonth >= 5 && currentMonth < 11) {
            this.interface.loadExternal('SummerSports')
        } else if (currentMonth >= 5 || currentMonth < 11) {
            this.interface.loadExternal('WinterSports')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
