import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Mine extends RoomScene {
    constructor() {
        super('Mine')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            cave: () => this.triggerRoom(806, 1242, 685),
            cart: () => this.triggerGame('cartsurfer', 905),
            gold: () => this.triggerRoom(813, 350, 680),
            rescue: () => this.triggerGame('pufflerescue', 927, 'as3'),
            shack: () => this.triggerRoom(807, 925, 538),
        }
        this.music = 675
        this.loadSfx = ['mine-cart', 'mine-lighton', 'mine-lightoff', 'mine-phonering']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('mine-pack', 'client/media/rooms/mine/mine-pack.json')
    }

    /** @returns {void} */
    _create() {
        // minebg
        this.add.image(760, 480, 'mine', 'minebg')

        // backstairsbox_hover
        const backstairsbox_hover = this.add.image(825, 39, 'mine', 'backstairsbox-hover')
        backstairsbox_hover.visible = false

        // backstairholder
        this.add.image(782, 191, 'mine', 'backstairholder')

        // backstairsbox
        const backstairsbox = this.add.image(831.2240162904187, 317.0060609720342, 'mine', 'backstairsbox')
        backstairsbox.setOrigin(0.5232239413821594, 1.0110405532574158)
        backstairsbox.alphaTopLeft = 0
        backstairsbox.alphaTopRight = 0
        backstairsbox.alphaBottomLeft = 0
        backstairsbox.alphaBottomRight = 0

        // cavehit
        const cavehit = this.add.image(184.32799413673246, 519.6919599837981, 'mine', 'cavehit')
        cavehit.setOrigin(0.8953057730097778, 0.847216497658521)
        cavehit.alphaTopLeft = 0
        cavehit.alphaTopRight = 0
        cavehit.alphaBottomLeft = 0
        cavehit.alphaBottomRight = 0

        // cavehit_hover
        const cavehit_hover = this.add.image(4, 340, 'mine', 'cavehit-hover')
        cavehit_hover.visible = false

        // pufflerescueholder
        this.add.image(490, 90, 'mine', 'pufflerescueholder')

        // leftfg
        this.add.image(304, 327, 'mine', 'leftfg')

        // puffleboard
        const puffleboard = this.add.image(444, 233, 'mine', 'puffleboard')

        // pufflerescue_en
        const pufflerescue_en = this.add.image(456, 89, 'mine', 'pufflerescue_en')
        pufflerescue_en.scaleX = 0.4660050366312686
        pufflerescue_en.scaleY = 0.4660050366312686

        // backcart
        const backcart = this.add.image(1144, 297, 'mine', 'backcart')

        // cartanim
        const cartanim = this.add.sprite(1369, 319, 'mine', 'cartanim0001')
        cartanim.visible = false

        // rightfg
        const rightfg = this.add.image(1204, 330.2543712215852, 'mine', 'rightfg')
        rightfg.setOrigin(0.5, 0.5614034851068783)

        // rightstairs
        const rightstairs = this.add.image(1264.0160137233863, 573.364811801202, 'mine', 'rightstairs')
        rightstairs.setOrigin(0.5606315725119171, 0.3703330370187003)

        // stairhit_hover
        const stairhit_hover = this.add.image(1272, 946, 'mine', 'stairhit-hover')
        stairhit_hover.visible = false

        // midrock
        const midrock = this.add.image(963, 841, 'mine', 'midrock')

        // cartsurfer_en
        const cartsurfer_en = this.add.image(1197.3766063706792, 412.91135269968174, 'mine', 'cartsurfer_en')
        cartsurfer_en.setOrigin(0.49458868790226385, 2.7258902340173377)

        // leftrock
        this.add.image(79, 620, 'mine', 'leftrock')

        // midleftrock
        this.add.image(326, 840, 'mine', 'midleftrock')

        // frontcart
        const frontcart = this.add.image(1151, 423, 'mine', 'frontcart')

        // minefg
        const minefg = this.add.image(-22.5, 989, 'mine', 'minefg')
        minefg.setOrigin(0, 1)

        // carthitbox
        const carthitbox = this.add.image(1187.4185437709134, 398.08184909005047, 'mine', 'carthitbox')
        carthitbox.setOrigin(0.29428822939122695, 0.953551597573468)
        carthitbox.alphaTopLeft = 0
        carthitbox.alphaTopRight = 0
        carthitbox.alphaBottomLeft = 0
        carthitbox.alphaBottomRight = 0

        // midleftrocktwo
        const midleftrocktwo = this.add.image(416, 800, 'mine', 'midleftrocktwo')

        // rescuetable
        const rescuetable = this.add.image(556.9122117754428, 413.4218003253354, 'mine', 'rescuetable')
        rescuetable.setOrigin(0.7752116046783767, 0.9258276857406573)

        // pufflebed
        this.add.image(362, 419, 'mine', 'pufflebed')

        // pufflebedfront
        const pufflebedfront = this.add.image(362, 433, 'mine', 'pufflebedfront')

        // midleftrockthree
        const midleftrockthree = this.add.image(484, 848, 'mine', 'midleftrockthree')

        // finalrescuerock
        this.add.image(431, 579, 'mine', 'finalrescuerock')

        // rescuerockleft
        this.add.image(273, 480, 'mine', 'rescuerockleft')

        // firstaide
        this.add.image(344, 511, 'mine', 'firstaide')

        // rescurerockright
        this.add.image(395, 551, 'mine', 'rescurerockright')

        // blackpuffle
        const blackpuffle = this.add.sprite(361, 393, 'mine', 'blackpuffle0001')

        // boardhit
        const boardhit = this.add.image(490, 90, 'mine', 'boardhit')
        boardhit.visible = false

        // stairhit
        const stairhit = this.add.image(1258.1652753871256, 744.4768656246559, 'mine', 'stairhit')
        stairhit.setOrigin(0.4515295973492037, 0.2363803610931175)
        stairhit.alphaTopLeft = 0
        stairhit.alphaTopRight = 0
        stairhit.alphaBottomLeft = 0
        stairhit.alphaBottomRight = 0

        // candleflame
        const candleflame = this.add.sprite(295, 198, 'mine', 'candleflame0001')

        // lists
        const sort = [rightfg, cartsurfer_en, backcart, frontcart, minefg, rightstairs, midrock, midleftrocktwo, midleftrockthree, pufflebedfront, stairhit_hover]

        // backstairsbox (components)
        const backstairsboxSimpleButton = new SimpleButton(backstairsbox)
        backstairsboxSimpleButton.hoverCallback = () => this.onShackOver()
        backstairsboxSimpleButton.hoverOutCallback = () => this.onShackOut()
        new MoveTo(backstairsbox)

        // cavehit (components)
        const cavehitSimpleButton = new SimpleButton(cavehit)
        cavehitSimpleButton.hoverCallback = () => this.onCaveDoorOver()
        cavehitSimpleButton.hoverOutCallback = () => this.onCaveDoorOut()
        new MoveTo(cavehit)

        // pufflerescue_en (components)
        new LocalisedSprite(pufflerescue_en)

        // cartsurfer_en (components)
        new LocalisedSprite(cartsurfer_en)

        // carthitbox (components)
        const carthitboxSimpleButton = new SimpleButton(carthitbox)
        carthitboxSimpleButton.hoverCallback = () => this.cartOver()
        carthitboxSimpleButton.hoverOutCallback = () => this.cartOut()
        new MoveTo(carthitbox)

        // rescuetable (components)
        const rescuetableButton = new Button(rescuetable)
        rescuetableButton.spriteName = 'rescuetable'
        rescuetableButton.hoverCallback = () => this.onRescueOver()
        rescuetableButton.hoverOutCallback = () => this.onRescueOut()
        rescuetableButton.activeFrame = false
        new MoveTo(rescuetable)

        // stairhit (components)
        const stairhitSimpleButton = new SimpleButton(stairhit)
        stairhitSimpleButton.hoverCallback = () => this.onGoldOver()
        stairhitSimpleButton.hoverOutCallback = () => this.onGoldOut()
        new MoveTo(stairhit)

        this.backstairsbox_hover = backstairsbox_hover
        this.cavehit_hover = cavehit_hover
        this.puffleboard = puffleboard
        this.cartanim = cartanim
        this.stairhit_hover = stairhit_hover
        this.carthitbox = carthitbox
        this.blackpuffle = blackpuffle
        this.boardhit = boardhit
        this.candleflame = candleflame
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image} */
    backstairsbox_hover
    /** @type {Phaser.GameObjects.Image} */
    cavehit_hover
    /** @type {Phaser.GameObjects.Image} */
    puffleboard
    /** @type {Phaser.GameObjects.Sprite} */
    cartanim
    /** @type {Phaser.GameObjects.Image} */
    stairhit_hover
    /** @type {Phaser.GameObjects.Image} */
    carthitbox
    /** @type {Phaser.GameObjects.Sprite} */
    blackpuffle
    /** @type {Phaser.GameObjects.Image} */
    boardhit
    /** @type {Phaser.GameObjects.Sprite} */
    candleflame
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.blackpuffle.play('mine-blackpuffle')
        this.candleflame.play('mine-candle')
    }

    cartOver() {
        this.cartanim.visible = true
        this.cartanim.play('mine-cart')
        this.shell.musicController.addSfx('mine-cart')
    }

    cartOut() {
        this.cartanim.stop()
        this.cartanim.setFrame('cartanim0001')
        this.cartanim.visible = false
    }

    onDoorOver() {
        this.shell.musicController.addSfx('mine-lighton')
    }

    onDoorOut() {
        this.shell.musicController.addSfx('mine-lightoff')
    }

    onRescueOver() {
        this.shell.musicController.addSfx('mine-phonering')
        this.puffleboard.setFrame('puffleboard-hover')
        this.boardhit.visible = true
    }

    onRescueOut() {
        this.puffleboard.setFrame('puffleboard')
        this.boardhit.visible = false
    }

    onCaveDoorOver() {
        this.shell.musicController.addSfx('mine-lighton')
        this.cavehit_hover.visible = true
    }

    onCaveDoorOut() {
        this.shell.musicController.addSfx('mine-lightoff')
        this.cavehit_hover.visible = false
    }

    onGoldOver() {
        this.shell.musicController.addSfx('mine-lighton')
        this.stairhit_hover.visible = true
    }

    onGoldOut() {
        this.shell.musicController.addSfx('mine-lightoff')
        this.stairhit_hover.visible = false
    }

    onShackOver() {
        this.shell.musicController.addSfx('mine-lighton')
        this.backstairsbox_hover.visible = true
    }

    onShackOut() {
        this.shell.musicController.addSfx('mine-lightoff')
        this.backstairsbox_hover.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
