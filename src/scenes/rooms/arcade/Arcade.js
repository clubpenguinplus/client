import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Arcade extends RoomScene {
    constructor() {
        super('Arcade')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            dance: () => this.triggerRoom(120, 1360, 544),
            thinice: () => this.triggerGame('thinice', 909),
            bitsbolts: () => null,
            astro: () => this.triggerGame('astrobarrier', 900),
        }

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
        penguin_anim0001.tintTopLeft = 657977
        penguin_anim0001.tintTopRight = 657977
        penguin_anim0001.tintBottomLeft = 657977
        penguin_anim0001.tintBottomRight = 657977

        // penguin_anim
        const penguin_anim = this.add.sprite(837, 783, 'arcade', 'penguin-anim0001')
        penguin_anim.tintFill = true
        penguin_anim.tintTopLeft = 657977
        penguin_anim.tintTopRight = 657977
        penguin_anim.tintBottomLeft = 657977
        penguin_anim.tintBottomRight = 657977

        // penguin_anim_1
        const penguin_anim_1 = this.add.sprite(662, 794, 'arcade', 'penguin-anim0001')
        penguin_anim_1.tintFill = true
        penguin_anim_1.tintTopLeft = 657977
        penguin_anim_1.tintTopRight = 657977
        penguin_anim_1.tintBottomLeft = 657977
        penguin_anim_1.tintBottomRight = 657977

        // penguin_anim_2
        const penguin_anim_2 = this.add.sprite(706, 840, 'arcade', 'penguin-anim0001')
        penguin_anim_2.tintFill = true
        penguin_anim_2.tintTopLeft = 657977
        penguin_anim_2.tintTopRight = 657977
        penguin_anim_2.tintBottomLeft = 657977
        penguin_anim_2.tintBottomRight = 657977

        // penguin_anim_3
        const penguin_anim_3 = this.add.sprite(811, 857, 'arcade', 'penguin-anim0001')
        penguin_anim_3.tintFill = true
        penguin_anim_3.tintTopLeft = 657977
        penguin_anim_3.tintTopRight = 657977
        penguin_anim_3.tintBottomLeft = 657977
        penguin_anim_3.tintBottomRight = 657977

        // penguin_anim_4
        const penguin_anim_4 = this.add.sprite(791, 811, 'arcade', 'penguin-anim0001')
        penguin_anim_4.tintFill = true
        penguin_anim_4.tintTopLeft = 657977
        penguin_anim_4.tintTopRight = 657977
        penguin_anim_4.tintBottomLeft = 657977
        penguin_anim_4.tintBottomRight = 657977

        // bg
        this.add.image(753, 487, 'arcade', 'bg')

        // railing
        const railing = this.add.image(1310.1473388671875, 627.9924928940286, 'arcade', 'railing')
        railing.setOrigin(0.08861541638675746, 0.22607861681280061)

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

        // chair_top_1
        const chair_top_1 = this.add.tileSprite(1176.1959228515625, 715.5877075195312, 90, 130, 'arcade', 'chair-top')
        chair_top_1.scaleX = -1
        chair_top_1.setOrigin(0.5422677533961885, 0.4122131275617606)

        // chair_right_1
        const chair_right_1 = this.add.tileSprite(1121.8040771484375, 839.3223266601562, 79, 76, 'arcade', 'chair-right')
        chair_right_1.scaleX = -1
        chair_right_1.setOrigin(0.4518468632195321, 0.1621360501554594)

        // chair_right_back_1
        const chair_right_back_1 = this.add.tileSprite(1085, 864.8040771484375, 48, 127, 'arcade', 'chair-right-back')
        chair_right_back_1.scaleX = -1
        chair_right_back_1.setOrigin(0.5, 0.5299535260287959)

        // chair_left_1
        const chair_left_1 = this.add.tileSprite(1349.0489501953125, 761.5877075195312, 99, 127, 'arcade', 'chair-left')
        chair_left_1.scaleX = -1
        chair_left_1.setOrigin(0.5096063075900429, 0.4101394219136132)

        // chair_bottom_1
        const chair_bottom_1 = this.add.tileSprite(1307.48974609375, 860.0774536132812, 81, 72, 'arcade', 'chair-bottom')
        chair_bottom_1.scaleX = -1
        chair_bottom_1.setOrigin(0.6174104261005264, 0.2094091954011977)

        // chair_bottom_back_1
        const chair_bottom_back_1 = this.add.tileSprite(1345, 892.4122924804688, 76, 108, 'arcade', 'chair-bottom-back')
        chair_bottom_back_1.scaleX = -1
        chair_bottom_back_1.setOrigin(0.5, 0.6056693834904734)

        // table_right
        const table_right = this.add.image(1241, 799, 'arcade', 'table-right')

        // container_1
        const container_1 = this.add.container(1235, 69)
        container_1.scaleX = -1

        // speaker_1
        const speaker_1 = this.add.image(0, 45, 'arcade', 'speaker')
        container_1.add(speaker_1)

        // speaker_bottom_anim
        const speaker_bottom_anim = this.add.sprite(18, 44, 'arcade', 'speaker-bottom-anim0001')
        container_1.add(speaker_bottom_anim)

        // speaker_top_anim
        const speaker_top_anim = this.add.sprite(21, 0, 'arcade', 'speaker-top-anim0001')
        container_1.add(speaker_top_anim)

        // container_2
        const container_2 = this.add.container(285, 79)

        // speaker
        const speaker = this.add.image(0, 45, 'arcade', 'speaker')
        container_2.add(speaker)

        // speaker_bottom_anim0001
        const speaker_bottom_anim0001 = this.add.sprite(18, 44, 'arcade', 'speaker-bottom-anim0001')
        container_2.add(speaker_bottom_anim0001)

        // speaker_top_anim0001
        const speaker_top_anim0001 = this.add.sprite(21, 0, 'arcade', 'speaker-top-anim0001')
        container_2.add(speaker_top_anim0001)

        // machinefour
        this.add.image(357, 306, 'arcade', 'machinefour')

        // thinice_anim
        const thinice_anim = this.add.sprite(1168, 276, 'arcade', 'thinice-anim0001')

        // thinice_button
        const thinice_button = this.add.image(1194.5, 270.5, 'arcade', 'thinice-button')

        // thinice_machine
        this.add.image(1169, 302, 'arcade', 'thinice-machine')

        // thinice_text_en
        const thinice_text_en = this.add.image(1140, 218, 'arcade', 'thinice-text-en')

        // stool_ti
        const stool_ti = this.add.image(1093, 375.7677923814067, 'arcade', 'stool-ti')
        stool_ti.setOrigin(0.5, 0.07986585034512865)

        // vending
        this.add.image(79, 566, 'arcade', 'vending')

        // bin
        this.add.image(28, 719, 'arcade', 'bin')

        // vending_text_en
        const vending_text_en = this.add.image(121, 496, 'arcade', 'vending-text-en')

        // bitsandbolt_anim
        const bitsandbolt_anim = this.add.sprite(231, 397, 'arcade', 'bitsandbolt-anim0001')

        // bitsandbolts_button_hover
        const bitsandbolts_button_hover = this.add.image(210, 397, 'arcade', 'bitsandbolts-button')

        // bitsandbolt_machine
        this.add.image(228, 410, 'arcade', 'bitsandbolt-machine')

        // bitsandbolt_text_en
        const bitsandbolt_text_en = this.add.image(215, 332, 'arcade', 'bitsandbolt-text-en')

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
        const target_text_en = this.add.image(792, 365, 'arcade', 'target-text-en')

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

        // astro_button
        const astro_button = this.add.image(1269, 384, 'arcade', 'astro-button')

        // astro_machine
        this.add.image(1260, 410, 'arcade', 'astro-machine')

        // astro_text_en
        const astro_text_en = this.add.image(1256, 357, 'arcade', 'astro-text-en')

        // stool_ab
        const stool_ab = this.add.image(1180.4779025952323, 461.33408459570944, 'arcade', 'stool-ab')
        stool_ab.setOrigin(0.5079650432538718, 0.06411081973307078)

        // moveto_2
        const moveto_2 = this.add.ellipse(1185, 730, 50, 30)

        // moveto
        const moveto = this.add.ellipse(1343, 773, 50, 30)

        // moveto_1
        const moveto_1 = this.add.ellipse(1324, 869, 50, 30)

        // moveto_3
        const moveto_3 = this.add.ellipse(1118, 853, 50, 30)

        // moveto_4
        const moveto_4 = this.add.ellipse(1181, 473, 50, 30)

        // moveto_5
        const moveto_5 = this.add.ellipse(1093, 386, 50, 30)

        // moveto_6
        const moveto_6 = this.add.ellipse(306, 495, 50, 30)

        // moveto_7
        const moveto_7 = this.add.ellipse(189, 876, 50, 30)

        // moveto_8
        const moveto_8 = this.add.ellipse(398, 849, 50, 30)

        // moveto_9
        const moveto_9 = this.add.ellipse(304, 728, 50, 30)

        // moveto_10
        const moveto_10 = this.add.ellipse(159, 776, 50, 30)

        // polygon_1
        const polygon_1 = this.add.rectangle(1386.998579623233, 621.9587424556883, 300, 150)
        polygon_1.angle = 51
        polygon_1.setOrigin(0.10299631838812275, 0.569044961756756)

        // text_1
        const text_1 = this.add.text(576, 358, '', {})
        text_1.setOrigin(0.5, 0.5)
        text_1.text = '000'
        text_1.setStyle({fontFamily: 'cplcd', fontSize: '36px'})

        // text
        const text = this.add.text(944, 358, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = '000'
        text.setStyle({fontFamily: 'cplcd', fontSize: '36px'})

        // lists
        const sort = [chair_top_1, chair_right_1, chair_right_back_1, chair_left_1, chair_bottom_1, chair_bottom_back_1, chair_bottom, chair_bottom_back, chair_left, chair_right, chair_right_back, chair_top, table_left, table_right, stool_bandb, stool_ti, stool_ab, railing_two, railing]
        const animpenguins = [penguin_anim_4, penguin_anim_3, penguin_anim_2, penguin_anim_1, penguin_anim, penguin_anim0001]

        // thinice_button (components)
        const thinice_buttonButton = new Button(thinice_button)
        thinice_buttonButton.spriteName = 'thinice-button'
        thinice_buttonButton.activeFrame = false
        const thinice_buttonMoveTo = new MoveTo(thinice_button)
        thinice_buttonMoveTo.x = 1093
        thinice_buttonMoveTo.y = 386
        const thinice_buttonShowHint = new ShowHint(thinice_button)
        thinice_buttonShowHint.text = 'thinice'

        // thinice_text_en (components)
        new LocalisedSprite(thinice_text_en)

        // vending_text_en (components)
        new LocalisedSprite(vending_text_en)

        // bitsandbolts_button_hover (components)
        const bitsandbolts_button_hoverButton = new Button(bitsandbolts_button_hover)
        bitsandbolts_button_hoverButton.spriteName = 'bitsandbolts-button'
        bitsandbolts_button_hoverButton.activeFrame = false
        const bitsandbolts_button_hoverMoveTo = new MoveTo(bitsandbolts_button_hover)
        bitsandbolts_button_hoverMoveTo.x = 306
        bitsandbolts_button_hoverMoveTo.y = 495
        const bitsandbolts_button_hoverShowHint = new ShowHint(bitsandbolts_button_hover)
        bitsandbolts_button_hoverShowHint.text = 'bitsandbolts'

        // bitsandbolt_text_en (components)
        new LocalisedSprite(bitsandbolt_text_en)

        // target_text_en (components)
        new LocalisedSprite(target_text_en)

        // astro_button (components)
        const astro_buttonButton = new Button(astro_button)
        astro_buttonButton.spriteName = 'astro-button'
        astro_buttonButton.activeFrame = false
        const astro_buttonMoveTo = new MoveTo(astro_button)
        astro_buttonMoveTo.x = 1181
        astro_buttonMoveTo.y = 473
        const astro_buttonShowHint = new ShowHint(astro_button)
        astro_buttonShowHint.text = 'astrobarrier'

        // astro_text_en (components)
        new LocalisedSprite(astro_text_en)

        // moveto_2 (components)
        const moveto_2Seat = new Seat(moveto_2)
        moveto_2Seat.direction = 'southeast'

        // moveto (components)
        const movetoSeat = new Seat(moveto)
        movetoSeat.direction = 'southwest'

        // moveto_1 (components)
        const moveto_1Seat = new Seat(moveto_1)
        moveto_1Seat.direction = 'northwest'

        // moveto_3 (components)
        const moveto_3Seat = new Seat(moveto_3)
        moveto_3Seat.direction = 'northeast'

        // moveto_4 (components)
        const moveto_4Seat = new Seat(moveto_4)
        moveto_4Seat.direction = 'northeast'

        // moveto_5 (components)
        const moveto_5Seat = new Seat(moveto_5)
        moveto_5Seat.direction = 'northeast'

        // moveto_6 (components)
        const moveto_6Seat = new Seat(moveto_6)
        moveto_6Seat.direction = 'northwest'

        // moveto_7 (components)
        const moveto_7Seat = new Seat(moveto_7)
        moveto_7Seat.direction = 'northeast'

        // moveto_8 (components)
        const moveto_8Seat = new Seat(moveto_8)
        moveto_8Seat.direction = 'northwest'

        // moveto_9 (components)
        const moveto_9Seat = new Seat(moveto_9)
        moveto_9Seat.direction = 'southwest'

        // moveto_10 (components)
        const moveto_10Seat = new Seat(moveto_10)
        moveto_10Seat.direction = 'southeast'

        // polygon_1 (components)
        new SimpleButton(polygon_1)
        new MoveTo(polygon_1)

        this.dancefloor = dancefloor
        this.speaker_bottom_anim = speaker_bottom_anim
        this.speaker_top_anim = speaker_top_anim
        this.speaker_bottom_anim0001 = speaker_bottom_anim0001
        this.speaker_top_anim0001 = speaker_top_anim0001
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
    speaker_bottom_anim
    /** @type {Phaser.GameObjects.Sprite} */
    speaker_top_anim
    /** @type {Phaser.GameObjects.Sprite} */
    speaker_bottom_anim0001
    /** @type {Phaser.GameObjects.Sprite} */
    speaker_top_anim0001
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
            let startFrame = Phaser.Math.Between(0, 150)
            p.play({key: 'arcade-penguin-anim', startFrame: startFrame})
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

        this.speaker_top_anim.play('arcade-speaker-top-anim')
        this.speaker_bottom_anim.play('arcade-speaker-bottom-anim')
        this.speaker_bottom_anim0001.play('arcade-speaker-bottom-anim')
        this.speaker_top_anim0001.play('arcade-speaker-top-anim')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
