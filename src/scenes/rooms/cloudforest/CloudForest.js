import RoomScene from '@scenes/rooms/RoomScene'
import Map from '../../interface/game/map/Map'

import {Button, Animation, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class CloudForest extends RoomScene {
    constructor() {
        super('CloudForest')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            pufflezone: null,
            exit: () => this.exitTrigger()
        }

        this.music = 363

        this.loadSfx = []

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cloudforest-pack', 'client/media/rooms/cloudforest/cloudforest-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(733, 536, 'cloudforest', 'bg')

        // island_hover
        const island_hover = this.add.image(800.49995, 476, 'cloudforest', 'island_hover')
        island_hover.visible = false

        // big_tree
        const big_tree = this.add.image(397, 62, 'cloudforest', 'big_tree0001')
        big_tree.tintTopLeft = 3684408
        big_tree.tintBottomLeft = 3684408

        // puffle6
        const puffle6 = this.add.sprite(626, 187, 'cloudforest', 'puffle_jumping0011')
        puffle6.tintTopLeft = 3684408
        puffle6.tintTopRight = 3684408
        puffle6.tintBottomLeft = 3684408

        // puffle7
        const puffle7 = this.add.sprite(604, 192, 'cloudforest', 'puffle_jumping0014')
        puffle7.tintTopLeft = 3684408
        puffle7.tintTopRight = 3684408
        puffle7.tintBottomLeft = 3684408

        // puffle3
        const puffle3 = this.add.sprite(589, 227, 'cloudforest', 'puffle_jumping0005')
        puffle3.tintTopLeft = 3684408
        puffle3.tintTopRight = 3684408
        puffle3.tintBottomLeft = 3684408

        // puffle5
        const puffle5 = this.add.sprite(634, 243, 'cloudforest', 'puffle_jumping0009')

        // puffle8
        const puffle8 = this.add.sprite(689, 212, 'cloudforest', 'puffle_jumping0001')

        // puffle2
        const puffle2 = this.add.sprite(652, 226, 'cloudforest', 'puffle_jumping0003')

        // puffle1
        const puffle1 = this.add.sprite(610, 239, 'cloudforest', 'puffle_jumping0001')

        // puffle4
        const puffle4 = this.add.sprite(719, 237, 'cloudforest', 'puffle_jumping0007')

        // cave
        const cave = this.add.image(655, 216, 'cloudforest', 'cave')
        cave.visible = false

        // mound
        this.add.image(602, 210, 'cloudforest', 'mound')

        // moundtop
        this.add.image(535, 211, 'cloudforest', 'moundtop')

        // big_tree0001
        const big_tree0001 = this.add.sprite(230, 230, 'cloudforest', 'big_tree0001')
        big_tree0001.flipX = true

        // smaller_tree0001
        const smaller_tree0001 = this.add.sprite(353.3033026097205, 624.7970652557142, 'cloudforest', 'smaller_tree0001')
        smaller_tree0001.setOrigin(0.44580667423107395, 0.8700192513779678)

        // fruittree_left
        const fruittree_left = this.add.image(952.9430091376721, 337.4585868078849, 'cloudforest', 'fruittree_left')
        fruittree_left.setOrigin(0.5433012706138886, 0.8629002378298216)

        // fruittree_righttop
        const fruittree_righttop = this.add.image(1291.971504568836, 321.7150456883605, 'cloudforest', 'fruittree_righttop')
        fruittree_righttop.setOrigin(0.5380956533816178, 0.8367876603302439)

        // fruittree_rightbottom
        const fruittree_rightbottom = this.add.image(1317.514247715582, 654.7150456883604, 'cloudforest', 'fruittree_rightbottom')
        fruittree_rightbottom.setOrigin(0.4809521733091917, 0.8367876603302435)

        // stump
        const stump = this.add.sprite(852.9201887275359, 399.6385289895749, 'cloudforest', 'stump0001')
        stump.setOrigin(0.5170839705686032, 0.20625770007416333)

        // waterfall0001
        const waterfall0001 = this.add.sprite(859, 626, 'cloudforest', 'waterfall0001')

        // puffleZone
        const puffleZone = this.add.ellipse(658, 230, 128, 128)
        puffleZone.scaleX = 1.869130351872199
        puffleZone.scaleY = 1.467606439736543
        puffleZone.isFilled = true
        puffleZone.fillAlpha = 0.5

        // arrow
        const arrow = this.add.image(849, 681, 'cloudforest', 'arrow')
        arrow.visible = false

        // exitZone
        const exitZone = this.add.rectangle(830, 685, 128, 128)
        exitZone.scaleX = 1.946306945873399
        exitZone.scaleY = 1.0588731653743269
        exitZone.isFilled = true
        exitZone.fillAlpha = 0.5

        // map
        const map = new Map(this, 760, 480)
        this.add.existing(map)
        map.visible = false

        // lists
        const sort = [smaller_tree0001, stump, fruittree_left, fruittree_righttop, fruittree_rightbottom, map]

        // big_tree0001 (components)
        const big_tree0001Animation = new Animation(big_tree0001)
        big_tree0001Animation.key = 'big_tree'
        big_tree0001Animation.end = 155

        // smaller_tree0001 (components)
        const smaller_tree0001Animation = new Animation(smaller_tree0001)
        smaller_tree0001Animation.key = 'smaller_tree'
        smaller_tree0001Animation.end = 90

        // stump (components)
        new Button(stump)

        // waterfall0001 (components)
        const waterfall0001Animation = new Animation(waterfall0001)
        waterfall0001Animation.key = 'waterfall'
        waterfall0001Animation.end = 10

        // puffleZone (components)
        const puffleZoneZone = new Zone(puffleZone)
        puffleZoneZone.hoverCallback = () => this.puffleZoneHover()
        puffleZoneZone.hoverOutCallback = () => this.puffleZoneHoverOut()

        // exitZone (components)
        const exitZoneZone = new Zone(exitZone)
        exitZoneZone.hoverCallback = () => this.exitHover()
        exitZoneZone.hoverOutCallback = () => this.exitHoverOut()
        exitZoneZone.callback = () => this.shell.client.penguin.move(850, 625)

        this.island_hover = island_hover
        this.puffle6 = puffle6
        this.puffle7 = puffle7
        this.puffle3 = puffle3
        this.puffle5 = puffle5
        this.puffle8 = puffle8
        this.puffle2 = puffle2
        this.puffle1 = puffle1
        this.puffle4 = puffle4
        this.cave = cave
        this.stump = stump
        this.arrow = arrow
        this.map = map
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image} */
    island_hover
    /** @type {Phaser.GameObjects.Sprite} */
    puffle6
    /** @type {Phaser.GameObjects.Sprite} */
    puffle7
    /** @type {Phaser.GameObjects.Sprite} */
    puffle3
    /** @type {Phaser.GameObjects.Sprite} */
    puffle5
    /** @type {Phaser.GameObjects.Sprite} */
    puffle8
    /** @type {Phaser.GameObjects.Sprite} */
    puffle2
    /** @type {Phaser.GameObjects.Sprite} */
    puffle1
    /** @type {Phaser.GameObjects.Sprite} */
    puffle4
    /** @type {Phaser.GameObjects.Image} */
    cave
    /** @type {Phaser.GameObjects.Sprite} */
    stump
    /** @type {Phaser.GameObjects.Image} */
    arrow
    /** @type {Map} */
    map
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image|Map>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
        this.puffle1.play('cloudforest-puffle1')
        this.puffle2.play('cloudforest-puffle2')
        this.puffle3.play('cloudforest-puffle3')
        this.puffle4.play('cloudforest-puffle4')
        this.puffle5.play('cloudforest-puffle5')
        this.puffle6.play('cloudforest-puffle6')
        this.puffle7.play('cloudforest-puffle7')
        this.puffle8.play('cloudforest-puffle1')
    }

    puffleZoneHover() {
        this.cave.visible = true
    }

    puffleZoneHoverOut() {
        this.cave.visible = false
    }

    exitHover() {
        this.arrow.visible = true
        this.island_hover.visible = true
    }

    exitHoverOut() {
        this.arrow.visible = false
        this.island_hover.visible = false
    }

    exitTrigger() {
        this.interface.main.onMapClick()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
