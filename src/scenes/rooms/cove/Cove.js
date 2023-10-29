import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Cove extends RoomScene {
    constructor() {
        super('Cove')

        /** @type {Phaser.GameObjects.Sprite} */
        this.splash
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall
        /** @type {Phaser.GameObjects.Sprite} */
        this.campfire
        /** @type {Phaser.GameObjects.Image} */
        this.catalog
        /** @type {Phaser.GameObjects.Sprite} */
        this.tentacle1
        /** @type {Phaser.GameObjects.Sprite} */
        this.tentacle2
        /** @type {Phaser.GameObjects.Sprite} */
        this.tentacle3
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort
        /** @type {Array<any>} */
        this.waterZones

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            forest: () => this.triggerRoom(809, 1152, 720),
            waves: () => this.triggerGame('catchinwaves', 912, 'ruffle')
        }

        this.music = 252

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cove-pack', 'client/media/rooms/cove/cove-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'cove', 'bg')

        // splash
        const splash = this.add.sprite(93, 311, 'cove', 'splash0001')

        // waterfall
        const waterfall = this.add.sprite(82, 227, 'cove', 'waterfall0001')

        // bench
        const bench = this.add.image(416.5791945665368, 766.5110831500018, 'cove', 'bench')
        bench.setOrigin(0.2740652477497643, 0.7984490489248351)

        // bloof
        const bloof = this.add.image(96.70720962239386, 515.3232846946654, 'cove', 'bloof')
        bloof.setOrigin(0.06362316422525911, 0.5367950882236098)

        // board
        const board = this.add.image(942.5036375891048, 321.0452188740056, 'cove', 'board')
        board.setOrigin(0.620068182624411, 0.33442210299375585)

        // boat
        const boat = this.add.image(271.36122839046175, 678.2028752311782, 'cove', 'boat')
        boat.setOrigin(0.17852712394109324, 0.7064613283658105)

        // bucket
        const bucket = this.add.image(314.5341319061639, 748.8494446205091, 'cove', 'bucket')
        bucket.setOrigin(0.20693034993826573, 0.7800515048130303)

        // boatfront
        const boatfront = this.add.image(379.29348717971715, 864.6313222308013, 'cove', 'boatfront')
        boatfront.setOrigin(0.24953518893402443, 0.9006576273237513)

        // duck
        const duck = this.add.image(847.0713388427569, 807.5686625104984, 'cove', 'duck')
        duck.setOrigin(0.5572837604972568, 0.8412173348374846)

        // grass1
        const grass1 = this.add.image(446.01524715852963, 222.92498361104612, 'cove', 'grass1')
        grass1.setOrigin(0.2934310836569274, 0.2322135245948397)

        // grass10
        const grass10 = this.add.image(610.8572424003016, 499.62404705259195, 'cove', 'grass10')
        grass10.setOrigin(0.40187976473704057, 0.5204417156797833)

        // grass11
        const grass11 = this.add.image(418.541581284901, 562.4209976208859, 'cove', 'grass11')
        grass11.setOrigin(0.27535630347690854, 0.5858552058550895)

        // grass12
        const grass12 = this.add.image(573.571553000377, 562.4209976208859, 'cove', 'grass12')
        grass12.setOrigin(0.3773497059213006, 0.5858552058550895)

        // grass13
        const grass13 = this.add.image(459.75208009534396, 585.9698540839962, 'cove', 'grass13')
        grass13.setOrigin(0.3024684737469368, 0.6103852646708294)

        // grass14
        const grass14 = this.add.image(520.5866259583788, 591.8570681997738, 'cove', 'grass14')
        grass14.setOrigin(0.3424912012884071, 0.6165177793747644)

        // grass2
        const grass2 = this.add.image(1038.661468146805, 399.5414070843732, 'cove', 'grass2')
        grass2.setOrigin(0.6833299132544769, 0.4161889657128887)

        // grass3
        const grass3 = this.add.image(1019.0374210942131, 446.6391200105938, 'cove', 'grass3')
        grass3.setOrigin(0.6704193559830349, 0.46524908334436854)

        // grass4
        const grass4 = this.add.image(832.6089740945902, 413.27824002118757, 'cove', 'grass4')
        grass4.setOrigin(0.5477690619043356, 0.430498166688737)

        // grass5
        const grass5 = this.add.image(765.8872141157775, 383.8421694422997, 'cove', 'grass5')
        grass5.setOrigin(0.5038731671814326, 0.39983559316906214)

        // grass6
        const grass6 = this.add.image(359.66944012712526, 454.48873883163054, 'cove', 'grass6')
        grass6.setOrigin(0.2366246316625824, 0.4734257696162818)

        // grass7
        const grass7 = this.add.image(520.5866259583788, 525.1353082209614, 'cove', 'grass7')
        grass7.setOrigin(0.3424912012884071, 0.5470159460635015)

        // grass8
        const grass8 = this.add.image(404.80474834808666, 493.73683293681427, 'cove', 'grass8')
        grass8.setOrigin(0.2663189133868991, 0.5143092009758482)

        // grass9
        const grass9 = this.add.image(465.6392942111215, 536.9097364525165, 'cove', 'grass9')
        grass9.setOrigin(0.3063416409283694, 0.5592809754713713)

        // house
        const house = this.add.image(1036.6990634415458, 354.40609886341184, 'cove', 'house')
        house.setOrigin(0.6820388575273327, 0.3691730196493873)

        // ladder
        const ladder = this.add.image(1280.0372468936853, 301.42117182141374, 'cove', 'ladder')
        ladder.setOrigin(0.842129767693214, 0.31398038731397265)

        // lefttree
        const lefttree = this.add.image(63.34632963298759, 466.2631670631857, 'cove', 'lefttree')
        lefttree.setOrigin(0.041675216863807624, 0.48569079902415174)

        // pole
        const pole = this.add.image(675.6165976738548, 260.2106730109707, 'cove', 'pole')
        pole.setOrigin(0.44448460373279924, 0.2710527843864278)

        // potback
        const potback = this.add.image(1285.924461009463, 503.54885646311027, 'cove', 'potback')
        potback.setOrigin(0.8460029348746466, 0.5245300588157399)

        // potfront
        const potfront = this.add.image(1287.886865714722, 595.7818776102922, 'cove', 'potfront')
        potfront.setOrigin(0.8472939906017908, 0.620606122510721)

        // rock
        const rock = this.add.image(110.44404255920813, 399.5414070843732, 'cove', 'rock')
        rock.setOrigin(0.07266055431526851, 0.4161889657128887)

        // rod
        const rod = this.add.image(369.85325636894896, 754.172690593439, 'cove', 'rod')
        rod.setOrigin(0.2433245047907675, 0.7855965812774696)

        // roof
        const roof = this.add.image(785.5112611683695, 167.97765186378882, 'cove', 'roof')
        roof.setOrigin(0.5167837244528747, 0.17497672069144668)

        // root
        const root = this.add.image(612.8196471055608, 379.9173600317813, 'cove', 'root')
        root.setOrigin(0.40317082046418473, 0.3957472500331055)

        // seat
        const seat = this.add.image(1144.6313222308013, 446.6391200105938, 'cove', 'seat')
        seat.setOrigin(0.753046922520264, 0.46524908334436854)

        // seat2
        const seat2 = this.add.image(1125.0072751782093, 521.210498810443, 'cove', 'seat2')
        seat2.setOrigin(0.7401363652488219, 0.5429276029275448)

        // stickkin
        const stickkin = this.add.image(196.78984959061256, 440.7519058948162, 'cove', 'stickkin')
        stickkin.setOrigin(0.12946700630961352, 0.45911656864043354)

        // stikkkin
        const stikkkin = this.add.image(228.1883248747596, 511.398475284147, 'cove', 'stikkkin')
        stikkkin.setOrigin(0.15012389794392078, 0.5327067450876531)

        // table
        const table = this.add.image(1287.886865714722, 470.18797647370405, 'cove', 'table')
        table.setOrigin(0.8472939906017908, 0.48977914216010837)

        // campfire
        const campfire = this.add.sprite(934.1503811789634, 568.0751905894816, 'cove', 'campfire0001')
        campfire.scaleX = 0.8
        campfire.scaleY = 0.8
        campfire.setOrigin(0.46616543662039556, 0.48189663583010095)

        // tooth
        const tooth = this.add.image(216.41389664320445, 246.47384007415644, 'cove', 'tooth')
        tooth.setOrigin(0.14237756358105555, 0.2567435834105796)

        // treelefg
        const treelefg = this.add.image(245.84996722209223, 888.1801786939116, 'cove', 'treelefg')
        treelefg.setOrigin(0.1617433994882186, 0.9251876861394912)

        // treeleg
        const treeleg = this.add.image(1152.480941051838, 313.19560005296887, 'cove', 'treeleg')
        treeleg.setOrigin(0.7582111454288408, 0.3262454167218426)

        // treerra
        const treerra = this.add.image(689.3534306106692, 370.10533650548535, 'cove', 'treerra')
        treerra.setOrigin(0.45352199382280867, 0.3855263921932139)

        // waves
        const waves = this.add.image(1168.1801786939116, 793.9847528414704, 'cove', 'waves')
        waves.setOrigin(0.7685395912459945, 0.8270674508765317)

        // web
        const web = this.add.image(1495.9017644721962, 658.5788281785863, 'cove', 'web')
        web.setOrigin(0.9841458976790765, 0.6860196126860274)

        // web2
        const web2 = this.add.image(587.3083859371914, 444.6767153053346, 'cove', 'web2')
        web2.setOrigin(0.3863870960113101, 0.4632049117763902)

        // treelef
        const treelef = this.add.image(412.6543671691234, 354.40609886341184, 'cove', 'treelef')
        treelef.setOrigin(0.27148313629547594, 0.3691730196493873)

        // treebody
        const treebody = this.add.image(1353.7572644139102, 611.413379719405, 'cove', 'treebody')
        treebody.setOrigin(0.8906297789867658, 0.636888959726115)

        // tree2
        const tree2 = this.add.image(1507.6761927037514, 291.60914829511773, 'cove', 'tree2')
        tree2.setOrigin(0.9918922320419418, 0.30375952947408097)

        // tree
        const tree = this.add.image(524.5114353688972, 421.1278588422243, 'cove', 'tree')
        tree.setOrigin(0.34507331274269554, 0.43867485296065034)

        // catalog
        const catalog = this.add.image(1446.0113525390625, 1048.8615264917719, 'cove', 'catalog')
        catalog.setOrigin(0.5000905915025777, 2.0264968174639515)

        // tentacle1
        const tentacle1 = this.add.sprite(542, 785, 'cove', 'tentacle10260')
        tentacle1.visible = false

        // tentacle2
        const tentacle2 = this.add.sprite(651, 730, 'cove', 'tentacle20279')
        tentacle2.visible = false

        // tentacle3
        const tentacle3 = this.add.sprite(696, 786, 'cove', 'tentacle30281')
        tentacle3.visible = false

        // lists
        const sort = [bench, tentacle3, tentacle2, tentacle1, catalog, tree, tree2, treebody, treelef, web2, web, waves, treerra, treeleg, treelefg, tooth, campfire, table, stikkkin, stickkin, seat2, seat, root, roof, rod, rock, potfront, potback, pole, lefttree, ladder, house, grass9, grass8, grass7, grass6, grass5, grass4, grass3, grass2, grass14, grass13, grass12, grass11, grass10, grass1, duck, boatfront, bucket, boat, board, bloof]
        const waterZones = []

        // waves (components)
        const wavesMoveTo = new MoveTo(waves)
        wavesMoveTo.x = 1128
        wavesMoveTo.y = 816
        const wavesSimpleButton = new SimpleButton(waves)
        wavesSimpleButton.pixelPerfect = true

        // catalog (components)
        const catalogSimpleButton = new SimpleButton(catalog)
        catalogSimpleButton.hoverCallback = () => {
            this.catalog.scale = 1.1
        }
        catalogSimpleButton.hoverOutCallback = () => {
            this.catalog.scale = 1
        }
        catalogSimpleButton.callback = () => this.interface.loadExternal('Waves')

        this.splash = splash
        this.waterfall = waterfall
        this.campfire = campfire
        this.catalog = catalog
        this.tentacle1 = tentacle1
        this.tentacle2 = tentacle2
        this.tentacle3 = tentacle3
        this.sort = sort
        this.waterZones = waterZones

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.campfire.play('cove-campfire')
        this.waterfall.play('cove-waterfall')
        this.splash.play('cove-splash')
        this.tentacle1.play('cove-tentacle1')
        this.tentacle2.play('cove-tentacle2')
        this.tentacle3.play('cove-tentacle3')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
