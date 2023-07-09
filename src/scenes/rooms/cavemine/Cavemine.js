import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Cavemine extends RoomScene {
    constructor() {
        super('Cavemine')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            gold: () => null,
            hardhat: () => this.interface.prompt.showItem(429),
            mine: () => this.triggerRoom(808, 1000, 650),
            underground: () => this.triggerRoom(814, 257, 601)
        }
        this.music = 532
        this.loadSfx = ['cavemine-lighton', 'cavemine-lightoff']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cavemine-pack', 'client/media/rooms/cavemine/cavemine-pack.json')
    }

    /** @returns {void} */
    _create() {
        // goldminebg
        this.add.image(760, 480, 'cavemine', 'goldminebg')

        // sign_hover
        const sign_hover = this.add.image(725, 337, 'cavemine', 'sign-hover')
        sign_hover.visible = false

        // sign_en
        const sign_en = this.add.image(724, 336, 'cavemine', 'sign_en')

        // waterground
        this.add.image(923, 445, 'cavemine', 'waterground')

        // waterdoor_hover
        const waterdoor_hover = this.add.image(964, 365, 'cavemine', 'waterdoor-hover')
        waterdoor_hover.visible = false

        // waterdoorhit
        const waterdoorhit = this.add.image(995.3532259509559, 418.38286316212924, 'cavemine', 'waterdoor-hover')
        waterdoorhit.setOrigin(0.6072552153744025, 0.6977558660441063)
        waterdoorhit.alphaTopLeft = 0
        waterdoorhit.alphaTopRight = 0
        waterdoorhit.alphaBottomLeft = 0
        waterdoorhit.alphaBottomRight = 0

        // signzone
        const signzone = this.add.image(721, 300, 'cavemine', 'signzone')
        signzone.alphaTopLeft = 0
        signzone.alphaTopRight = 0
        signzone.alphaBottomLeft = 0
        signzone.alphaBottomRight = 0

        // hats
        const hats = this.add.image(721.487437353811, 474.5879385233235, 'cavemine', 'hats')
        hats.setOrigin(0.48370916012206117, 0.713432017049483)

        // fg
        const fg = this.add.image(956.868776488496, 539.7416433379842, 'cavemine', 'fg')
        fg.setOrigin(0.459258158693247, 0.557443886827661)

        // chairone
        const chairone = this.add.image(395.2425462682757, 777.3360179020655, 'cavemine', 'chairone')
        chairone.setOrigin(0.48277006145368334, 0.06557323485466814)

        // chairtwo
        const chairtwo = this.add.image(278.6361805975864, 724.0934716337898, 'cavemine', 'chairtwo')
        chairtwo.setOrigin(0.5271771195627466, 0.05534303173240745)

        // backrope
        this.add.image(420, 314, 'cavemine', 'backrope')

        // table
        const table = this.add.image(229, 852, 'cavemine', 'table')

        // backleftrope
        this.add.image(272, 327, 'cavemine', 'backleftrope')

        // leftrope
        this.add.image(327, 404, 'cavemine', 'leftrope')

        // roick
        this.add.image(274, 480, 'cavemine', 'roick')

        // minestairs
        this.add.image(133, 527, 'cavemine', 'minestairs')

        // minehover
        const minehover = this.add.image(100, 533, 'cavemine', 'minehoverhit0002')
        minehover.visible = false

        // mineholder
        const mineholder = this.add.image(33.450672541159435, 659.2399118826083, 'cavemine', 'mineholder')
        mineholder.setOrigin(0.44592282247673537, 0.8956866648043753)

        // otherfg
        const otherfg = this.add.image(-137.5, 1002.5, 'cavemine', 'otherfg')
        otherfg.setOrigin(0, 1)

        // minehoverhit
        const minehoverhit = this.add.image(166.74848780590233, 649.9777560992591, 'cavemine', 'minehoverhit0004')
        minehoverhit.setOrigin(0.7395417693585447, 0.7733279522764006)
        minehoverhit.alphaTopLeft = 0
        minehoverhit.alphaTopRight = 0
        minehoverhit.alphaBottomLeft = 0
        minehoverhit.alphaBottomRight = 0

        // otherock
        const otherock = this.add.image(383.2437352880262, 541.8992021990294, 'cavemine', 'otherock')
        otherock.setOrigin(0.38434123965619554, 0.340778976303019)

        // pufflezone_hover
        const pufflezone_hover = this.add.image(342, 21, 'cavemine', 'pufflezone-hover')
        pufflezone_hover.visible = false

        // puffhit
        const puffhit = this.add.ellipse(406.7590265080627, 374.53705619099435, 128, 128)
        puffhit.scaleX = 3.7698710378503946
        puffhit.scaleY = 2.819358984993884
        puffhit.setOrigin(0.5886117575128106, 0.9864166714177861)

        // lantern
        this.add.image(809, 342, 'cavemine', 'lantern')

        // seatzone
        const seatzone = this.add.ellipse(275, 745, 128, 128)
        seatzone.scaleX = 0.6447951148833675
        seatzone.scaleY = 0.467361763151831
        seatzone.setOrigin(0.4785032034255048, 0.5296580297611317)

        // seatzone_1
        const seatzone_1 = this.add.ellipse(392, 800, 128, 128)
        seatzone_1.scaleX = 0.6447951148833675
        seatzone_1.scaleY = 0.467361763151831
        seatzone_1.setOrigin(0.4570064068510131, 0.5296580297611335)

        // mining_zone
        const mining_zone = this.add.ellipse(621, 734, 700, 450)

        // rightrope
        this.add.image(540, 376, 'cavemine', 'rightrope')

        // lists
        const sort = [fg, otherfg, mineholder, otherock, chairone, chairtwo, table]

        // sign_en (components)
        new LocalisedSprite(sign_en)

        // waterdoorhit (components)
        const waterdoorhitSimpleButton = new SimpleButton(waterdoorhit)
        waterdoorhitSimpleButton.hoverCallback = () => this.onWaterDoorOver()
        waterdoorhitSimpleButton.hoverOutCallback = () => this.onWaterDoorOut()
        new MoveTo(waterdoorhit)

        // signzone (components)
        const signzoneSimpleButton = new SimpleButton(signzone)
        signzoneSimpleButton.hoverCallback = () => this.onSignOver()
        signzoneSimpleButton.hoverOutCallback = () => this.onSignOut()
        signzoneSimpleButton.callback = () => this.onSignClick()

        // hats (components)
        const hatsButton = new Button(hats)
        new MoveTo(hats)

        // minehoverhit (components)
        const minehoverhitSimpleButton = new SimpleButton(minehoverhit)
        minehoverhitSimpleButton.hoverCallback = () => this.onStairOver()
        minehoverhitSimpleButton.hoverOutCallback = () => this.onStairOut()
        new MoveTo(minehoverhit)

        // puffhit (components)
        const puffhitSimpleButton = new SimpleButton(puffhit)
        puffhitSimpleButton.hoverCallback = () => this.onPuffleZoneOver()
        puffhitSimpleButton.hoverOutCallback = () => this.onPuffleZoneOut()
        new MoveTo(puffhit)

        // seatzone (components)
        const seatzoneSeat = new Seat(seatzone)
        seatzoneSeat.direction = 'southwest'

        // seatzone_1 (components)
        const seatzone_1Seat = new Seat(seatzone_1)
        seatzone_1Seat.direction = 'southwest'

        this.sign_hover = sign_hover
        this.waterdoor_hover = waterdoor_hover
        this.waterdoorhit = waterdoorhit
        this.minehover = minehover
        this.minehoverhit = minehoverhit
        this.pufflezone_hover = pufflezone_hover
        this.seatzone = seatzone
        this.seatzone_1 = seatzone_1
        this.mining_zone = mining_zone
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image} */
    sign_hover
    /** @type {Phaser.GameObjects.Image} */
    waterdoor_hover
    /** @type {Phaser.GameObjects.Image} */
    waterdoorhit
    /** @type {Phaser.GameObjects.Image} */
    minehover
    /** @type {Phaser.GameObjects.Image} */
    minehoverhit
    /** @type {Phaser.GameObjects.Image} */
    pufflezone_hover
    /** @type {Phaser.GameObjects.Ellipse} */
    seatzone
    /** @type {Phaser.GameObjects.Ellipse} */
    seatzone_1
    /** @type {Phaser.GameObjects.Ellipse} */
    mining_zone
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    onStairOver() {
        this.shell.musicController.addSfx('cavemine-lighton')
        this.minehover.visible = true
    }

    onStairOut() {
        this.shell.musicController.addSfx('cavemine-lightoff')
        this.minehover.visible = false
    }

    onWaterDoorOver() {
        this.shell.musicController.addSfx('cavemine-lighton')
        this.waterdoor_hover.visible = true
    }

    onWaterDoorOut() {
        this.shell.musicController.addSfx('cavemine-lightoff')
        this.waterdoor_hover.visible = false
    }

    onPuffleZoneOver() {
        this.pufflezone_hover.visible = true
    }

    onPuffleZoneOut() {
        this.pufflezone_hover.visible = false
    }

    onSignOver() {
        this.sign_hover.visible = true
    }

    onSignOut() {
        this.sign_hover.visible = false
    }

    onSignClick() {
        this.interface.loadExternal('Cavenote')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
