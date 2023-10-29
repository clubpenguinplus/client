import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Forest extends RoomScene {
    constructor() {
        super('Forest')

        /** @type {Phaser.GameObjects.Sprite} */
        this.anim
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1240, 660),
            shack: () => this.triggerRoom(807, 500, 800),
            cove: () => this.triggerRoom(810, 520, 416),
            lake: () => this.triggerRoom(814, 480, 300)
        }
        this.music = 500

        this.loadSfx = ['forest-boulderopen', 'forest-boulderclose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('forest-pack', 'client/media/rooms/forest/forest-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'forest', 'bg')

        // anim
        const anim = this.add.sprite(1161, 481, 'forest', 'anim0001')

        // arrow
        const arrow = this.add.image(1393.878173828125, 699.4274950794646, 'forest', 'arrow')
        arrow.setOrigin(0.9170251442164361, 0.7285703265912912)

        // bone
        const bone = this.add.image(234.39290519006704, 322.51472814683655, 'forest', 'bone')
        bone.setOrigin(0.1542058586776757, 0.33595284181962143)

        // bowl
        const bowl = this.add.image(730.4715115275319, 604.0196515843662, 'forest', 'bowl')
        bowl.setOrigin(0.4805733628470605, 0.6291871370670481)

        // chain
        const chain = this.add.image(659.6031391936083, 548.899806435759, 'forest', 'chain')
        chain.setOrigin(0.43394943368000544, 0.5717706317039156)

        // grass
        const grass = this.add.image(1506.0864754043619, 383.54027098993737, 'forest', 'grass')
        grass.setOrigin(0.9908463653976065, 0.3995211156145181)

        // grass10
        const grass10 = this.add.image(1193.0844975961995, 363.85461200829195, 'forest', 'grass10')
        grass10.setOrigin(0.7849240115764471, 0.37901522084197076)

        // grass11
        const grass11 = this.add.image(1242.298645050313, 391.4145345825956, 'forest', 'grass11')
        grass11.setOrigin(0.8173017401646797, 0.40772347352353705)

        // grass12
        const grass12 = this.add.image(1283.638533893602, 440.62868203670917, 'forest', 'grass12')
        grass12.setOrigin(0.844499032178795, 0.4589882104549054)

        // grass13
        const grass13 = this.add.image(1354.506901245692, 468.18860461101275, 'forest', 'grass13')
        grass13.setOrigin(0.89112296134585, 0.48769646313647164)

        // grass14
        const grass14 = this.add.image(1287.5756607080975, 515.4341861669618, 'forest', 'grass14')
        grass14.setOrigin(0.8470892504658536, 0.5369106105905852)

        // grass15
        const grass15 = this.add.image(1425.3752735796156, 533.1512792504427, 'forest', 'grass15')
        grass15.setOrigin(0.937746890512905, 0.5553659158858778)

        // grass16
        const grass16 = this.add.image(1346.6326376530337, 548.899806435759, 'forest', 'grass16')
        grass16.setOrigin(0.8859425247717327, 0.5717706317039156)

        // grass17
        const grass17 = this.add.image(1275.7642653191103, 586.3025585008853, 'forest', 'grass17')
        grass17.setOrigin(0.8393185956046778, 0.6107318317717555)

        // grass18
        const grass18 = this.add.image(1332.852676365882, 637.4852718531635, 'forest', 'grass18')
        grass18.setOrigin(0.8768767607670276, 0.6640471581803786)

        // grass19
        const grass19 = this.add.image(1405.6896145979701, 600.0825197880372, 'forest', 'grass19')
        grass19.setOrigin(0.9247957990776119, 0.6250859581125388)

        // grass2
        const grass2 = this.add.image(1480.4951187282227, 436.69155024038, 'forest', 'grass2')
        grass2.setOrigin(0.9740099465317255, 0.45488703150039583)

        // grass20
        const grass20 = this.add.image(1069.0648460118332, 720.1650395760743, 'forest', 'grass20')
        grass20.setOrigin(0.7033321355341008, 0.7501719162250774)

        // grass21
        const grass21 = this.add.image(1161.5874432255669, 861.9017842439214, 'forest', 'grass21')
        grass21.setOrigin(0.7642022652799781, 0.8978143585874181)

        // grass22
        const grass22 = this.add.image(905.6738764641761, 842.2161252622759, 'forest', 'grass22')
        grass22.setOrigin(0.5958380766211685, 0.8773084638148707)

        // grass23
        const grass23 = this.add.image(1250.1729086429712, 665.0451944274671, 'forest', 'grass23')
        grass23.setOrigin(0.8224821767387968, 0.6927554108619449)

        // grass24
        const grass24 = this.add.image(15.882090493802707, 763.4734893356942, 'forest', 'grass24')
        grass24.setOrigin(0.010448743745922834, 0.7952848847246815)

        // grass25
        const grass25 = this.add.image(112.34181950386528, 720.1650395760743, 'forest', 'grass25')
        grass25.setOrigin(0.07390909177885874, 0.7501719162250774)

        // grass26
        const grass26 = this.add.image(419.4380996175341, 798.907675502656, 'forest', 'grass26')
        grass26.setOrigin(0.2759461181694303, 0.8321954953152667)

        // grass3
        const grass3 = this.add.image(1513.9607389970201, 491.81139538898725, 'forest', 'grass3')
        grass3.setOrigin(0.9960268019717238, 0.5123035368635284)

        // grass4
        const grass4 = this.add.image(1193.0844975961995, 281.17484428538114, 'forest', 'grass4')
        grass4.setOrigin(0.7849240115764471, 0.29289046279727204)

        // grass5
        const grass5 = this.add.image(1244.2672109484777, 310.7033327578493, 'forest', 'grass5')
        grass5.setOrigin(0.818596849308209, 0.323649304956093)

        // grass6
        const grass6 = this.add.image(874.1768220935435, 932.7701565778449, 'forest', 'grass6')
        grass6.setOrigin(0.5751163303246997, 0.9716355797685884)

        // grass7
        const grass7 = this.add.image(807.2455815559489, 930.8015906796804, 'forest', 'grass7')
        grass7.setOrigin(0.5310826194447033, 0.9695849902913338)

        // grass8
        const grass8 = this.add.image(61.15910615158725, 844.1846911604405, 'forest', 'grass8')
        grass8.setOrigin(0.040236254047096874, 0.8793590532921255)

        // ham
        const ham = this.add.image(864.3339926027207, 552.8369382320881, 'forest', 'ham')
        ham.setOrigin(0.5686407846070531, 0.5758718106584251)

        // logback
        const logback = this.add.image(742.2829069165191, 712.2907759834161, 'forest', 'logback')
        logback.setOrigin(0.48834401770823627, 0.7419695583160585)

        // logfront
        const logfront = this.add.image(761.9685658981647, 804.8133731971495, 'forest', 'logfront')
        logfront.setOrigin(0.5012951091435294, 0.8383472637470307)

        // nail
        const nail = this.add.image(651.7288756009501, 617.799612871518, 'forest', 'nail')
        nail.setOrigin(0.4287689971058882, 0.6435412634078312)

        // tooth1
        const tooth1 = this.add.image(1448.99806435759, 791.0334119099978, 'forest', 'tooth1')
        tooth1.setOrigin(0.9532882002352566, 0.8239931374062477)

        // tooth2
        const tooth2 = this.add.image(1285.607094809933, 875.6817455310731, 'forest', 'tooth2')
        tooth2.setOrigin(0.8457941413223243, 0.9121684849282012)

        // tooth3
        const tooth3 = this.add.image(1326.9469786713885, 918.9901952906931, 'forest', 'tooth3')
        tooth3.setOrigin(0.8729914333364398, 0.9572814534278054)

        // tooth4
        const tooth4 = this.add.image(1500.1807777098682, 824.499032178795, 'forest', 'tooth4')
        tooth4.setOrigin(0.9869610379670185, 0.8588531585195781)

        // tooth5
        const tooth5 = this.add.image(1246.2357768466422, 810.7190708916432, 'forest', 'tooth5')
        tooth5.setOrigin(0.8198919584517383, 0.8444990321787951)

        // tree
        const tree = this.add.image(506.054999136774, 422.91158895322826, 'forest', 'tree')
        tree.setOrigin(0.33293092048471973, 0.4405329051596128)

        // tree2
        const tree2 = this.add.image(1480.4951171875, 698.2202596238218, 'forest', 'tree2')
        tree2.setOrigin(0.9740099465317255, 0.7273127782416281)

        // lists
        const sort = [arrow, tree2, tree, tooth5, tooth4, tooth3, tooth2, tooth1, nail, logfront, logback, ham, grass8, grass7, grass6, grass5, grass4, grass3, grass26, grass25, grass24, grass23, grass22, grass21, grass20, grass2, grass19, grass18, grass17, grass16, grass15, grass14, grass13, grass12, grass11, grass10, grass, chain, bowl, bone]

        this.anim = anim
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.anim.play('forest-anim')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
