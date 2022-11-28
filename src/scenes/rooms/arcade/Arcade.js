import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Arcade extends RoomScene {
    constructor() {
        super('Arcade')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {}

        this.music = '674'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('arcade-pack', 'client/media/rooms/arcade/arcade-pack.json')
    }

    /** @returns {void} */
    _create() {
        // dancefloor
        const dancefloor = this.add.sprite(757, 934, 'arcade', 'dancefloor0001')

        // penguin_anim0001
        const penguin_anim0001 = this.add.sprite(744, 776, 'arcade', 'penguin-anim0001')
        penguin_anim0001.tintFill = true
        penguin_anim0001.tintTopLeft = 263207
        penguin_anim0001.tintTopRight = 263207
        penguin_anim0001.tintBottomLeft = 263207
        penguin_anim0001.tintBottomRight = 263207

        // penguin_anim
        const penguin_anim = this.add.sprite(837, 783, 'arcade', 'penguin-anim0001')
        penguin_anim.tintFill = true
        penguin_anim.tintTopLeft = 263207
        penguin_anim.tintTopRight = 263207
        penguin_anim.tintBottomLeft = 263207
        penguin_anim.tintBottomRight = 263207

        // penguin_anim_1
        const penguin_anim_1 = this.add.sprite(662, 794, 'arcade', 'penguin-anim0001')
        penguin_anim_1.tintFill = true
        penguin_anim_1.tintTopLeft = 263207
        penguin_anim_1.tintTopRight = 263207
        penguin_anim_1.tintBottomLeft = 263207
        penguin_anim_1.tintBottomRight = 263207

        // penguin_anim_2
        const penguin_anim_2 = this.add.sprite(706, 840, 'arcade', 'penguin-anim0001')
        penguin_anim_2.tintFill = true
        penguin_anim_2.tintTopLeft = 263207
        penguin_anim_2.tintTopRight = 263207
        penguin_anim_2.tintBottomLeft = 263207
        penguin_anim_2.tintBottomRight = 263207

        // penguin_anim_3
        const penguin_anim_3 = this.add.sprite(811, 857, 'arcade', 'penguin-anim0001')
        penguin_anim_3.tintFill = true
        penguin_anim_3.tintTopLeft = 263207
        penguin_anim_3.tintTopRight = 263207
        penguin_anim_3.tintBottomLeft = 263207
        penguin_anim_3.tintBottomRight = 263207

        // penguin_anim_4
        const penguin_anim_4 = this.add.sprite(791, 811, 'arcade', 'penguin-anim0001')
        penguin_anim_4.tintFill = true
        penguin_anim_4.tintTopLeft = 263207
        penguin_anim_4.tintTopRight = 263207
        penguin_anim_4.tintBottomLeft = 263207
        penguin_anim_4.tintBottomRight = 263207

        // bg
        this.add.image(753, 487, 'arcade', 'bg')

        // railing
        const railing = this.add.image(1305.1633248423018, 615.7046329612486, 'arcade', 'railing')
        railing.setOrigin(0.06722470714435018, 0.19432724118815067)

        // container_3
        const container_3 = this.add.container(1364, 721)
        container_3.scaleX = -1

        // chair_top_1
        const chair_top_1 = this.add.tileSprite(187.8040926413521, -5.412293434143066, 90, 130, 'arcade', 'chair-top')
        chair_top_1.setOrigin(0.5422677533961885, 0.4122131275617606)
        container_3.add(chair_top_1)

        // chair_right_1
        const chair_right_1 = this.add.tileSprite(242.19590219434303, 118.32233981181491, 79, 76, 'arcade', 'chair-right')
        chair_right_1.setOrigin(0.4518468632195321, 0.1621360501554594)
        container_3.add(chair_right_1)

        // chair_right_back_1
        const chair_right_back_1 = this.add.tileSprite(279, 143.80409780565708, 48, 127, 'arcade', 'chair-right-back')
        chair_right_back_1.setOrigin(0.5, 0.5299535260287959)
        container_3.add(chair_right_back_1)

        // chair_left_1
        const chair_left_1 = this.add.tileSprite(14.95102451514618, 40.58770570167246, 99, 127, 'arcade', 'chair-left')
        chair_left_1.setOrigin(0.5096063075900429, 0.4101394219136132)
        container_3.add(chair_left_1)

        // chair_bottom_1
        const chair_bottom_1 = this.add.tileSprite(56.51024480341425, 139.0774613665094, 81, 72, 'arcade', 'chair-bottom')
        chair_bottom_1.setOrigin(0.6174104261005264, 0.2094091954011977)
        container_3.add(chair_bottom_1)

        // chair_bottom_back_1
        const chair_bottom_back_1 = this.add.tileSprite(19, 171.41229341697112, 76, 108, 'arcade', 'chair-bottom-back')
        chair_bottom_back_1.setOrigin(0.5, 0.6056693834904734)
        container_3.add(chair_bottom_back_1)

        // chair_bottom
        const chair_bottom = this.add.image(186.29385329151444, 863.126437617472, 'arcade', 'chair-bottom')
        chair_bottom.setOrigin(0.4295537443396844, 0.19620052246488878)

        // chair_bottom_back
        const chair_bottom_back = this.add.image(165.90204373852364, 898.3143423197997, 'arcade', 'chair-bottom-back')
        chair_bottom_back.setOrigin(0.5250269592477439, 0.623280947405553)

        // chair_left
        const chair_left = this.add.image(155.55922006272837, 760.734633228786, 'arcade', 'chair-left')
        chair_left.setOrigin(0.5864567683103876, 0.38767427739201604)

        // chair_right
        const chair_right = this.add.image(390.195902194343, 834.2733642632292, 'arcade', 'chair-right')
        chair_right.setOrigin(0.4518468632195314, 0.174649529779331)

        // chair_right_back
        const chair_right_back = this.add.image(425.09795109717146, 862.608195611314, 'arcade', 'chair-right-back')
        chair_right_back.setOrigin(0.4603739811910721, 0.559907052057591)

        // chair_top
        const chair_top = this.add.image(309.90204890282854, 713.4407799372716, 'arcade', 'chair-top')
        chair_top.setOrigin(0.5211338766980949, 0.43415984567132)

        // table_left
        const table_left = this.add.image(264, 793, 'arcade', 'table-left')

        // table_right
        const table_right = this.add.image(1241, 799, 'arcade', 'table-right')

        // container_1
        const container_1 = this.add.container(1235, 69)
        container_1.scaleX = -1

        // speaker_1
        const speaker_1 = this.add.image(0, 45, 'arcade', 'speaker')
        container_1.add(speaker_1)

        // speaker_bottom_anim
        const speaker_bottom_anim = this.add.image(19, 44, 'arcade', 'speaker-bottom-anim0001')
        container_1.add(speaker_bottom_anim)

        // speaker_top_anim
        const speaker_top_anim = this.add.image(22, 0, 'arcade', 'speaker-top-anim0001')
        container_1.add(speaker_top_anim)

        // container_2
        const container_2 = this.add.container(285, 79)

        // speaker
        const speaker = this.add.image(0, 45, 'arcade', 'speaker')
        container_2.add(speaker)

        // speaker_bottom_anim0001
        const speaker_bottom_anim0001 = this.add.image(19, 44, 'arcade', 'speaker-bottom-anim0001')
        container_2.add(speaker_bottom_anim0001)

        // speaker_top_anim0001
        const speaker_top_anim0001 = this.add.image(22, 0, 'arcade', 'speaker-top-anim0001')
        container_2.add(speaker_top_anim0001)

        // machinefour
        this.add.image(357, 306, 'arcade', 'machinefour')

        // thinice_anim
        const thinice_anim = this.add.sprite(1168, 276, 'arcade', 'thinice-anim0001')

        // thinice_button
        this.add.image(1191, 271, 'arcade', 'thinice-button')

        // thinice_machine
        this.add.image(1169, 302, 'arcade', 'thinice-machine')

        // thinice_text_en
        this.add.image(1140, 218, 'arcade', 'thinice-text-en')

        // stool_ti
        const stool_ti = this.add.image(1093, 375.7677923814067, 'arcade', 'stool-ti')
        stool_ti.setOrigin(0.5, 0.07986585034512865)

        // vending
        this.add.image(79, 566, 'arcade', 'vending')

        // bin
        this.add.image(28, 719, 'arcade', 'bin')

        // vending_text_en
        this.add.image(121, 496, 'arcade', 'vending-text-en')

        // bitsandbolt_anim
        const bitsandbolt_anim = this.add.sprite(231, 397, 'arcade', 'bitsandbolt-anim0001')

        // bitsandbolts_button_hover
        this.add.image(210, 397, 'arcade', 'bitsandbolts-button')

        // bitsandbolt_machine
        this.add.image(228, 410, 'arcade', 'bitsandbolt-machine')

        // bitsandbolt_text_en
        this.add.image(215, 332, 'arcade', 'bitsandbolt-text-en')

        // stool_bandb
        const stool_bandb = this.add.image(306, 488.0045339491966, 'arcade', 'stool-bandb')
        stool_bandb.setOrigin(0.5, 0.10444538773042321)

        // game_bg
        const game_bg = this.add.image(760, 242, 'arcade', 'game/bg')
        game_bg.scaleX = -1

        // game_buildings_one
        const game_buildings_one = this.add.image(760, 249, 'arcade', 'game/buildings-one')
        game_buildings_one.scaleX = -1

        // game_buildings_two
        const game_buildings_two = this.add.image(760, 280, 'arcade', 'game/buildings-two')
        game_buildings_two.scaleX = -1

        // game_fg
        this.add.image(760, 314, 'arcade', 'game/fg')

        // target_text_en
        this.add.image(792, 365, 'arcade', 'target-text-en')

        // cameras
        this.add.image(460, 58, 'arcade', 'cameras')

        // cameras_1
        const cameras_1 = this.add.image(1060, 58, 'arcade', 'cameras')
        cameras_1.scaleX = -1

        // game_grey_light0001
        const game_grey_light0001 = this.add.sprite(584, 131, 'arcade', 'game/grey-light0001')

        // game_white_light0001
        const game_white_light0001 = this.add.sprite(595, 129, 'arcade', 'game/white-light0001')

        // game_grey_light
        const game_grey_light = this.add.sprite(607, 131, 'arcade', 'game/grey-light0001')

        // game_white_light
        const game_white_light = this.add.sprite(926, 129, 'arcade', 'game/white-light0001')

        // game_grey_light_1
        const game_grey_light_1 = this.add.sprite(938, 131, 'arcade', 'game/grey-light0001')

        // game_grey_light_2
        const game_grey_light_2 = this.add.sprite(915, 131, 'arcade', 'game/grey-light0001')

        // railing_two
        const railing_two = this.add.image(760, 491.984442789772, 'arcade', 'railing-two')
        railing_two.setOrigin(0.5, 0.988066478659622)

        // scoreboard_bg
        this.add.image(760, 81, 'arcade', 'scoreboard/bg')

        // scoreboard_gameLogo_en0001
        this.add.image(760, 88, 'arcade', 'scoreboard/gameLogo-en0001')

        // scoreboard_fg
        this.add.image(760, 64, 'arcade', 'scoreboard/fg')

        // astro_anim
        const astro_anim = this.add.sprite(1250, 384, 'arcade', 'astro-anim0001')

        // astro_button_hover
        this.add.image(1269, 384, 'arcade', 'astro-button')

        // astro_machine
        this.add.image(1260, 410, 'arcade', 'astro-machine')

        // astro_text_en
        this.add.image(1256, 357, 'arcade', 'astro-text-en')

        // stool_ab
        const stool_ab = this.add.image(1180.4779025952323, 461.33408459570944, 'arcade', 'stool-ab')
        stool_ab.setOrigin(0.5079650432538718, 0.06411081973307078)

        // lists
        const sort = [chair_top_1, chair_right_1, chair_right_back_1, chair_left_1, chair_bottom_1, chair_bottom_back_1, chair_bottom, chair_bottom_back, chair_left, chair_right, chair_right_back, chair_top, table_left, table_right, stool_bandb, stool_ti, stool_ab, railing_two, railing]
        const animpenguins = [penguin_anim_4, penguin_anim_3, penguin_anim_2, penguin_anim_1, penguin_anim, penguin_anim0001]

        this.dancefloor = dancefloor
        this.thinice_anim = thinice_anim
        this.bitsandbolt_anim = bitsandbolt_anim
        this.game_grey_light0001 = game_grey_light0001
        this.game_white_light0001 = game_white_light0001
        this.game_grey_light = game_grey_light
        this.game_white_light = game_white_light
        this.game_grey_light_1 = game_grey_light_1
        this.game_grey_light_2 = game_grey_light_2
        this.astro_anim = astro_anim
        this.sort = sort
        this.animpenguins = animpenguins

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    dancefloor
    /** @type {Phaser.GameObjects.Sprite} */
    thinice_anim
    /** @type {Phaser.GameObjects.Sprite} */
    bitsandbolt_anim
    /** @type {Phaser.GameObjects.Sprite} */
    game_grey_light0001
    /** @type {Phaser.GameObjects.Sprite} */
    game_white_light0001
    /** @type {Phaser.GameObjects.Sprite} */
    game_grey_light
    /** @type {Phaser.GameObjects.Sprite} */
    game_white_light
    /** @type {Phaser.GameObjects.Sprite} */
    game_grey_light_1
    /** @type {Phaser.GameObjects.Sprite} */
    game_grey_light_2
    /** @type {Phaser.GameObjects.Sprite} */
    astro_anim
    /** @type {Array<Phaser.GameObjects.TileSprite|Phaser.GameObjects.Image>} */
    sort
    /** @type {Phaser.GameObjects.Sprite[]} */
    animpenguins

    /* START-USER-CODE */

    create() {
        super.create()

        for (let p of this.animpenguins) {
            p.play('arcade-penguin-anim')
        }

        this.dancefloor.play('arcade-dancefloor')
        this.bitsandbolt_anim.play('arcade-bitsandbolt-anim')
        this.thinice_anim.play('arcade-thinice-anim')
        this.astro_anim.play('arcade-astro-anim')

        this.game_grey_light.play('arcade-game-grey-light')
        this.game_grey_light_1.play('arcade-game-grey-light')
        this.game_grey_light_2.play('arcade-game-grey-light')
        this.game_grey_light0001.play('arcade-game-grey-light')

        this.game_white_light.play('arcade-game-white-light')
        this.game_white_light0001.play('arcade-game-white-light')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
