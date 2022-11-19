import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Mall extends RoomScene {
    constructor() {
        super('Mall')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {}

        this.music = '1160'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('mall-pack', 'client/media/rooms/mall/mall-pack.json')
    }

    /** @returns {void} */
    _create() {
        // background
        this.add.image(760, 480, 'mall', 'background')

        // container_1
        const container_1 = this.add.container(640, 394)
        container_1.scaleX = -1

        // leftescalator_bg
        const leftescalator_bg = this.add.image(100, 124, 'mall', 'leftescalator/bg')
        container_1.add(leftescalator_bg)

        // le_one
        const le_one = this.add.sprite(83, 237, 'mall', 'leftescalator/bottom0001')
        container_1.add(le_one)

        // le_two
        const le_two = this.add.sprite(69, 176, 'mall', 'leftescalator/second0001')
        container_1.add(le_two)

        // le_three
        const le_three = this.add.sprite(54, 109, 'mall', 'leftescalator/third0001')
        container_1.add(le_three)

        // le_four
        const le_four = this.add.sprite(39, 40, 'mall', 'leftescalator/fourth0001')
        container_1.add(le_four)

        // le_five
        const le_five = this.add.sprite(40, 0, 'mall', 'leftescalator/top0001')
        container_1.add(le_five)

        // leftescalator_fg
        const leftescalator_fg = this.add.image(0, 122, 'mall', 'leftescalator/fg')
        container_1.add(leftescalator_fg)

        // container_2
        const container_2 = this.add.container(894, 393)

        // rightescalator_bg
        const rightescalator_bg = this.add.image(102, 125, 'mall', 'rightescalator/bg')
        container_2.add(rightescalator_bg)

        // re_one
        const re_one = this.add.sprite(87, 239, 'mall', 'rightescalator/bottom0001')
        container_2.add(re_one)

        // re_two
        const re_two = this.add.sprite(73, 178, 'mall', 'rightescalator/second0001')
        container_2.add(re_two)

        // re_three
        const re_three = this.add.sprite(59, 110, 'mall', 'rightescalator/third0001')
        container_2.add(re_three)

        // re_four
        const re_four = this.add.sprite(44, 41, 'mall', 'rightescalator/forth0001')
        container_2.add(re_four)

        // re_five
        const re_five = this.add.sprite(44.5, 1, 'mall', 'rightescalator/fifth0001')
        container_2.add(re_five)

        // rightescalator_fg
        const rightescalator_fg = this.add.image(0, 124, 'mall', 'rightescalator/fg')
        container_2.add(rightescalator_fg)

        // door
        const door = this.add.image(227, 583, 'mall', 'door')

        // fountain
        this.add.image(765, 555, 'mall', 'fountain')

        // fountain
        const fountain = this.add.sprite(761, 559, 'mall', 'fountain-anim0001')

        // another_one
        const another_one = this.add.image(452.158058020904, 262.0946730880953, 'mall', 'another-one')
        another_one.setOrigin(0.557914186454853, 0.7910028764448518)

        // antiques
        const antiques = this.add.image(1087.0656982007833, 263.32601538026483, 'mall', 'antiques')
        antiques.setOrigin(0.4407891545481935, 0.783444510172072)

        // big_pillar_top_right
        const big_pillar_top_right = this.add.image(1569.344105010378, 403.41742641421, 'mall', 'big-pillar-top-right')
        big_pillar_top_right.setOrigin(0.4673580804498028, 0.879246221096979)

        // bottom_right_table
        const bottom_right_table = this.add.image(14, 711, 'mall', 'bottom-right-table')

        // bottom_right
        const bottom_right = this.add.image(-68, 768, 'mall', 'bottom-right')

        // cashreg_br
        const cashreg_br = this.add.image(1228, 632, 'mall', 'cashreg-br')

        // cashreg_tr
        const cashreg_tr = this.add.image(1378, 288.11678772490205, 'mall', 'cashreg-tr')
        cashreg_tr.setOrigin(0.5, 0.526794781327874)

        // right_middle_stuff
        const right_middle_stuff = this.add.image(1452, 570, 'mall', 'right-middle-stuff')

        // chair_pointing_bottom
        const chair_pointing_bottom = this.add.image(1436.4160613754896, 664.3552327335944, 'mall', 'chair-pointing-bottom')
        chair_pointing_bottom.setOrigin(0.38369298214823694, 0.44724516573452755)

        // chair_pointing_br
        const chair_pointing_br = this.add.image(1166.9304295983175, 763.4344985135499, 'mall', 'chair-pointing-br')
        chair_pointing_br.setOrigin(0.5196980539568238, 0.40334206190559074)

        // chair_pointing_br_1
        const chair_pointing_br_1 = this.add.image(914.0609780405067, 762.5061003254889, 'mall', 'chair-pointing-br')
        chair_pointing_br_1.setOrigin(0.38837718186859815, 0.4423546104747428)

        // chair_pointing_right
        const chair_pointing_right = this.add.image(1418.6447672664056, 747.0656982007835, 'mall', 'chair-pointing-right')
        chair_pointing_right.setOrigin(0.5795037643155712, 0.2394722800120532)

        // chair_pointing_right_back
        const chair_pointing_right_back = this.add.image(1390, 766.2335754498041, 'mall', 'chair-pointing-right-back')
        chair_pointing_right_back.setOrigin(0.5, 0.5391997726833714)

        // left_table
        const left_table = this.add.image(1002.9909619323308, 788.6993504841565, 'mall', 'left-table')
        left_table.setOrigin(0.48767462135937734, 0.4366363991738102)

        // chair_pointing_tl
        const chair_pointing_tl = this.add.image(1048.060816455566, 843.6545074514646, 'mall', 'chair-pointing-tl')
        chair_pointing_tl.setOrigin(0.4358549174272122, 0.23412328093017576)

        // middle_table
        const middle_table = this.add.image(1278, 805, 'mall', 'middle-table')

        // chair_pointing_tl_1
        const chair_pointing_tl_1 = this.add.image(1329.710414587307, 859.6545165394564, 'mall', 'chair-pointing-tl')
        chair_pointing_tl_1.setOrigin(0.35338266840505067, 0.23412328093017412)

        // chair_pointing_tl_back
        const chair_pointing_tl_back = this.add.image(1064, 871.0559590830069, 'mall', 'chair-pointing-tl-back')
        chair_pointing_tl_back.setOrigin(0.5, 0.5712723139697665)

        // chair_pointing_tl_back_1
        const chair_pointing_tl_back_1 = this.add.image(1355.0000335641605, 883.8783519077117, 'mall', 'chair-pointing-tl-back')
        chair_pointing_tl_back_1.setOrigin(0.5, 0.5997812395576745)

        // chair_pointing_tr
        const chair_pointing_tr = this.add.image(1222.9391886738263, 849.6545145084016, 'mall', 'chair-pointing-tr')
        chair_pointing_tr.setOrigin(0.5641450825727907, 0.23412328093017576)

        // chair_pointing_tr_back
        const chair_pointing_tr_back = this.add.image(1205.1168172269527, 880.1727204041956, 'mall', 'chair-pointing-tr-back')
        chair_pointing_tr_back.setOrigin(0.5289970921219451, 0.5926540081606958)

        // costumes
        const costumes = this.add.image(1315.7712941090842, 312.46715089960827, 'mall', 'costumes-en')
        costumes.setOrigin(0.3865125462173723, 0.5699764537157709)

        // fish_stand
        const fish_stand = this.add.image(770.4835205078125, 314.21016114597984, 'mall', 'fish-stand')
        fish_stand.setOrigin(0.5065352897072228, 0.90245602461396)

        // food_display_br
        const food_display_br = this.add.image(1332, 620, 'mall', 'food-display-br')

        // hats_costumes
        const hats_costumes = this.add.image(1478.290349838561, 394.096494065852, 'mall', 'hats-costumes')
        hats_costumes.setOrigin(0.3797402963940114, 0.7378835780918466)

        // left_middle_pillar
        const left_middle_pillar = this.add.image(399.71068252653583, 651.1453978771322, 'mall', 'left-middle-pillar')
        left_middle_pillar.setOrigin(0.4807564556199378, 0.8863123515997459)

        // pedestal
        const pedestal = this.add.image(17, 272, 'mall', 'pedestal')

        // pillar_bl
        const pillar_bl = this.add.image(156.02522231424908, 754.1453978771322, 'mall', 'pillar-bl')
        pillar_bl.setOrigin(0.6172106794058322, 0.8863123515997459)

        // pillar_cashreg_tl
        const pillar_cashreg_tl = this.add.image(260.6126708984375, 309.07347429143545, 'mall', 'pillar-cashreg-tl')
        pillar_cashreg_tl.setOrigin(0.4346709244437844, 0.8641565732902946)

        // pillar_clothes_tl
        const pillar_clothes_tl = this.add.image(61.44522801198937, 362.8970156624377, 'mall', 'pillar-clothes-tl')
        pillar_clothes_tl.setOrigin(0.6452001116015513, 0.7581154905331462)

        // pillar_top_right
        const pillar_top_right = this.add.image(1229.3764200415117, 311.02852496720584, 'mall', 'pillar-top-right')
        pillar_top_right.setOrigin(0.333822955017178, 0.9082602834041926)

        // right_middle_pillar
        const right_middle_pillar = this.add.image(1131.5534126326793, 646.5667629302038, 'mall', 'right-middle-pillar')
        right_middle_pillar.setOrigin(0.4037822780996908, 0.8766545428097522)

        // right_table
        const right_table = this.add.image(1493.0393841975344, 697.3067494463579, 'mall', 'right-table')
        right_table.setOrigin(0.49410628953026453, 0.3023597353175905)

        // tree_pillar_br
        const tree_pillar_br = this.add.image(1520.8738884287548, 831.3338260936, 'mall', 'tree-pillar-br')
        tree_pillar_br.setOrigin(0.1822104818926391, 0.7115598331071208)

        // foreground
        const foreground = this.add.image(769, 1001.0205630882047, 'mall', 'foreground')
        foreground.setOrigin(0.5, 1.0344132942732325)

        // fragile_sign_en
        const fragile_sign_en = this.add.image(1034, 1218.972127711237, 'mall', 'fragile-sign-en')
        fragile_sign_en.setOrigin(0.5, 16.857792818092847)

        // anvils_sign_en
        const anvils_sign_en = this.add.image(528, 1101.9751714970141, 'mall', 'anvils-sign-en')
        anvils_sign_en.setOrigin(0.5, 15.749612054640846)

        // costume_trunk_en
        const costume_trunk_en = this.add.image(1430, 1196.9759297031899, 'mall', 'costume-trunk-en')
        costume_trunk_en.setOrigin(0.5, 3.2650079138484642)

        // ellipse_1
        const ellipse_1 = this.add.ellipse(933, 778, 40, 40)

        // ellipse
        const ellipse = this.add.ellipse(1056, 856, 40, 40)

        // ellipse_2
        const ellipse_2 = this.add.ellipse(1176, 788, 40, 40)

        // ellipse_3
        const ellipse_3 = this.add.ellipse(1217, 860, 40, 40)

        // ellipse_4
        const ellipse_4 = this.add.ellipse(1342, 871, 40, 40)

        // ellipse_5
        const ellipse_5 = this.add.ellipse(1415, 760, 40, 40)

        // ellipse_6
        const ellipse_6 = this.add.ellipse(1446, 681, 40, 40)

        // lists
        const sort = [another_one, antiques, big_pillar_top_right, bottom_right_table, bottom_right, cashreg_br, cashreg_tr, right_middle_stuff, chair_pointing_bottom, chair_pointing_br, chair_pointing_br_1, chair_pointing_right, chair_pointing_right_back, left_table, chair_pointing_tl, middle_table, chair_pointing_tl_1, chair_pointing_tl_back, chair_pointing_tl_back_1, chair_pointing_tr, chair_pointing_tr_back, costumes, fish_stand, food_display_br, hats_costumes, left_middle_pillar, pedestal, pillar_bl, pillar_cashreg_tl, pillar_clothes_tl, pillar_top_right, right_middle_pillar, right_table, tree_pillar_br, foreground, fragile_sign_en, anvils_sign_en, costume_trunk_en]

        // door (components)
        const doorButton = new Button(door)
        doorButton.spriteName = 'door'
        doorButton.activeFrame = false

        // costumes (components)
        const costumesButton = new Button(costumes)
        costumesButton.spriteName = 'costumes'
        costumesButton.activeFrame = false
        costumesButton.isLocalised = true
        new LocalisedSprite(costumes)

        // fragile_sign_en (components)
        new LocalisedSprite(fragile_sign_en)

        // anvils_sign_en (components)
        new LocalisedSprite(anvils_sign_en)

        // costume_trunk_en (components)
        const costume_trunk_enButton = new Button(costume_trunk_en)
        costume_trunk_enButton.spriteName = 'costume-trunk'
        costume_trunk_enButton.activeFrame = false
        costume_trunk_enButton.isLocalised = true
        new LocalisedSprite(costume_trunk_en)

        // ellipse_1 (components)
        const ellipse_1Seat = new Seat(ellipse_1)
        ellipse_1Seat.direction = 'southeast'

        // ellipse (components)
        const ellipseSeat = new Seat(ellipse)
        ellipseSeat.direction = 'northwest'

        // ellipse_2 (components)
        const ellipse_2Seat = new Seat(ellipse_2)
        ellipse_2Seat.direction = 'southeast'

        // ellipse_3 (components)
        const ellipse_3Seat = new Seat(ellipse_3)
        ellipse_3Seat.direction = 'northeast'

        // ellipse_4 (components)
        const ellipse_4Seat = new Seat(ellipse_4)
        ellipse_4Seat.direction = 'northwest'

        // ellipse_5 (components)
        const ellipse_5Seat = new Seat(ellipse_5)
        ellipse_5Seat.direction = 'northeast'

        // ellipse_6 (components)
        const ellipse_6Seat = new Seat(ellipse_6)
        ellipse_6Seat.direction = 'southeast'

        this.le_one = le_one
        this.le_two = le_two
        this.le_three = le_three
        this.le_four = le_four
        this.le_five = le_five
        this.re_one = re_one
        this.re_two = re_two
        this.re_three = re_three
        this.re_four = re_four
        this.re_five = re_five
        this.fountain = fountain
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    le_one
    /** @type {Phaser.GameObjects.Sprite} */
    le_two
    /** @type {Phaser.GameObjects.Sprite} */
    le_three
    /** @type {Phaser.GameObjects.Sprite} */
    le_four
    /** @type {Phaser.GameObjects.Sprite} */
    le_five
    /** @type {Phaser.GameObjects.Sprite} */
    re_one
    /** @type {Phaser.GameObjects.Sprite} */
    re_two
    /** @type {Phaser.GameObjects.Sprite} */
    re_three
    /** @type {Phaser.GameObjects.Sprite} */
    re_four
    /** @type {Phaser.GameObjects.Sprite} */
    re_five
    /** @type {Phaser.GameObjects.Sprite} */
    fountain
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()

        this.fountain.play('mall-fountain-anim')
        this.le_one.play('mall-le-one')
        this.le_two.play('mall-le-two')
        this.le_three.play('mall-le-three')
        this.le_four.play('mall-le-four')
        this.le_five.play('mall-le-five')
        this.re_one.play('mall-re-one')
        this.re_two.play('mall-re-two')
        this.re_three.play('mall-re-three')
        this.re_four.play('mall-re-four')
        this.re_five.play('mall-re-five')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
