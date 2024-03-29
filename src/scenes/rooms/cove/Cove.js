import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Cove extends RoomScene {
    constructor() {
        super('Cove')

        /** @type {Phaser.GameObjects.Sprite} */
        this.smallcatalog
        /** @type {Phaser.GameObjects.Image} */
        this.catalog
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.waterZones

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            forest: () => this.triggerRoom(809, 1152, 720),
            waves: () => this.triggerGame('catchinwaves', 912, 'ruffle')
        }

        this.music = 579

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cove-pack', 'client/media/rooms/cove/cove-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, -1, 'cove', 'bg')
        bg.setOrigin(0, 0)

        // water11
        const water11 = this.add.image(1085, 872, 'cove', 'water11')
        water11.setOrigin(0.5, 1)

        // water12
        const water12 = this.add.image(1029, 894, 'cove', 'water12')
        water12.setOrigin(0.5, 1)

        // water13
        const water13 = this.add.image(1085, 916, 'cove', 'water13')
        water13.setOrigin(0.5, 1)

        // water14
        const water14 = this.add.image(1087, 938, 'cove', 'water14')
        water14.setOrigin(0.5, 1)

        // water15
        const water15 = this.add.image(1088, 960, 'cove', 'water15')
        water15.setOrigin(0.5, 1)

        // water1
        const water1 = this.add.image(1157, 652, 'cove', 'water1')
        water1.setOrigin(0.5, 1)

        // water2
        const water2 = this.add.image(1034, 674, 'cove', 'water2')
        water2.setOrigin(0.5, 1)

        // water3
        const water3 = this.add.image(980, 696, 'cove', 'water3')
        water3.setOrigin(0.5, 1)

        // water4
        const water4 = this.add.image(960, 718, 'cove', 'water4')
        water4.setOrigin(0.5, 1)

        // water5
        const water5 = this.add.image(1009, 740, 'cove', 'water5')
        water5.setOrigin(0.5, 1)

        // water6
        const water6 = this.add.image(998, 762, 'cove', 'water6')
        water6.setOrigin(0.5, 1)

        // water7
        const water7 = this.add.image(997, 784, 'cove', 'water7')
        water7.setOrigin(0.5, 1)

        // water8
        const water8 = this.add.image(998, 806, 'cove', 'water8')
        water8.setOrigin(0.5, 1)

        // water9
        const water9 = this.add.image(1053, 828, 'cove', 'water9')
        water9.setOrigin(0.5, 1)

        // water10
        const water10 = this.add.image(1076, 850, 'cove', 'water10')
        water10.setOrigin(0.5, 1)

        // log
        const log = this.add.image(197.14425237497088, 532.3036819502214, 'cove', 'log')
        log.setOrigin(0.46429134022165675, 0.7027219335850042)

        // box
        this.add.image(117, 525, 'cove', 'box')

        // lap
        const lap = this.add.image(477.99160537035334, 257.65021035228415, 'cove', 'lap')
        lap.setOrigin(0.5703043707615596, 0.858657915896931)

        // bino
        const bino = this.add.image(437.6596057857626, 268.5127992176207, 'cove', 'bino')
        bino.setOrigin(0.5101477813194247, 1.2585466536270113)

        // fg2
        const fg2 = this.add.image(539, 971.7018093054124, 'cove', 'fg2')
        fg2.setOrigin(0.5, 0.9957769736473352)

        // fg3
        this.add.image(43, 669, 'cove', 'fg3')

        // fg1
        const fg1 = this.add.image(0.9978909476573108, 968.5227658004196, 'cove', 'fg1')
        fg1.setOrigin(0.06049252527633167, 0.9961975322973526)

        // campfire
        this.add.image(371, 650, 'cove', 'campfire')

        // flame_0001
        const flame_0001 = this.add.sprite(369.3232151998135, 637.0987207741317, 'cove', 'flame_0001')
        flame_0001.setOrigin(0.2990184936163599, 0.20079220042418564)

        // bottle
        this.add.image(901, 501, 'cove', 'bottle')

        // medical
        const medical = this.add.image(842.441970334034, 238.7095944427764, 'cove', 'medical')
        medical.setOrigin(0.3710969733373369, 0.779737471056127)

        // chair2
        const chair2 = this.add.image(1102.628503676841, 436.5324103573108, 'cove', 'chair2')
        chair2.setOrigin(0.33303518497532103, 0.276933398473653)

        // table
        const table = this.add.image(1217.9981604350053, 484.0091978249731, 'cove', 'table')
        table.setOrigin(0.47499080217502637, 0.6506578182227296)

        // chair3
        this.add.image(1312, 544, 'cove', 'chair3')

        // chair4
        const chair4 = this.add.image(1344, 518, 'cove', 'chair4')

        // fence
        const fence = this.add.image(1268, 559, 'cove', 'fence')

        // fence3
        const fence3 = this.add.image(1031, 491, 'cove', 'fence3')

        // fence2
        const fence2 = this.add.image(1084, 530, 'cove', 'fence2')

        // fg4
        const fg4 = this.add.image(1590.353569600373, 675.5824200753672, 'cove', 'fg4')
        fg4.setOrigin(0.9664755950632634, 0.8116827376406904)

        // smallcatalog
        const smallcatalog = this.add.sprite(1012, 272, 'cove', 'smallcatalog_0001')
        smallcatalog.flipX = true

        // tape
        const tape = this.add.image(1014, 252, 'cove', 'tape')
        tape.flipX = true

        // waves
        const waves = this.add.image(1195, 662, 'cove', 'waves')

        // container_1
        const container_1 = this.add.container(1303.983026175927, 363.54483440190614)

        // shack
        const shack = this.add.image(-22.12389531655208, 2.8430745336407313, 'cove', 'shack')
        shack.setOrigin(0.5056062092262276, 0.8365685748752861)
        container_1.add(shack)

        // surfshack_en
        const surfshack_en = this.add.image(-47.98302617592708, -220.54483440190614, 'cove', 'surfshack-en')
        container_1.add(surfshack_en)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1013, 268, 128, 128)
        rectangle_1.scaleX = 0.3906535211270825
        rectangle_1.scaleY = 0.3633822275761278
        rectangle_1.fillColor = 1741055
        rectangle_1.fillAlpha = 100

        // catalog
        const catalog = this.add.image(1446.011322422891, 884.01953125, 'cove', 'catalog')
        catalog.setOrigin(0.5000905915025777, 0.5001820467068046)

        // ellipse_2
        const ellipse_2 = this.add.ellipse(1042, 818, 800, 300)

        // ellipse
        const ellipse = this.add.ellipse(776, 913, 200, 100)

        // ellipse_1
        const ellipse_1 = this.add.ellipse(1413, 913, 200, 100)

        // ellipse_3
        const ellipse_3 = this.add.ellipse(1424, 824, 200, 100)

        // ellipse_4
        const ellipse_4 = this.add.ellipse(1431, 778, 200, 100)

        // ellipse_5
        const ellipse_5 = this.add.ellipse(591, 758, 200, 100)

        // ellipse_6
        const ellipse_6 = this.add.ellipse(679, 723, 200, 100)

        // ellipse_7
        const ellipse_7 = this.add.ellipse(811, 705, 200, 100)

        // ellipse_8
        const ellipse_8 = this.add.ellipse(1159, 685, 200, 100)

        // lists
        const sort = [log, flame_0001, fg1, fg4, chair4, chair2, table, fence, fence3, lap, medical, container_1, fence2, waves, bino, water10, water9, water8, water7, water6, water5, water4, water3, water2, water1, water15, water14, water13, water12, water11, fg2]
        const waterZones = [ellipse_8, ellipse_7, ellipse_6, ellipse_5, ellipse_4, ellipse_3, ellipse_1, ellipse, ellipse_2]

        // flame_0001 (components)
        const flame_0001Animation = new Animation(flame_0001)
        flame_0001Animation.key = 'flame_'
        flame_0001Animation.end = 20

        // smallcatalog (components)
        const smallcatalogAnimation = new Animation(smallcatalog)
        smallcatalogAnimation.key = 'smallcatalog_'
        smallcatalogAnimation.end = 7
        smallcatalogAnimation.repeat = 0
        smallcatalogAnimation.autoPlay = false

        // waves (components)
        const wavesButton = new Button(waves)
        const wavesShowHint = new ShowHint(waves)
        wavesShowHint.text = 'catchinwaves'
        const wavesMoveTo = new MoveTo(waves)
        wavesMoveTo.x = 1216
        wavesMoveTo.y = 704

        // surfshack_en (components)
        new LocalisedSprite(surfshack_en)

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.hoverCallback = () => {
            this.smallcatalog.__Animation.play()
        }
        rectangle_1SimpleButton.hoverOutCallback = () => {
            this.smallcatalog.setFrame('smallcatalog_0001')
        }
        rectangle_1SimpleButton.callback = () => this.interface.loadExternal('Waves')

        // catalog (components)
        const catalogSimpleButton = new SimpleButton(catalog)
        catalogSimpleButton.hoverCallback = () => {
            this.catalog.scale = 1.1
        }
        catalogSimpleButton.hoverOutCallback = () => {
            this.catalog.scale = 1
        }
        catalogSimpleButton.callback = () => this.interface.loadExternal('Waves')

        this.smallcatalog = smallcatalog
        this.catalog = catalog
        this.sort = sort
        this.waterZones = waterZones

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.catalog.depth = 1000
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
