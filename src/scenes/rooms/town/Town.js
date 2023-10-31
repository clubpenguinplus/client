import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Town extends RoomScene {
    constructor() {
        super('Town')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 1200, 400),
            snowForts: () => this.triggerRoom(801, 360, 520),
            coffeeShop: () => this.triggerRoom(110, 700, 450),
            danceClub: () => this.triggerRoom(120, 300, 560),
            clothesShop: () => this.triggerRoom(130, 1036, 520)
        }

        this.music = 512

        this.loadSfx = ['shack-MineLightOn', 'shack-MineLightOff', 'town-DoorShopOpen', 'town-DoorShopClose', 'town-DoorCoffeeOpen', 'town-DoorCoffeeClose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('town-pack', 'client/media/rooms/town/town-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_lower
        this.add.image(760, 480, 'town', 'bg-lower')

        // greenbat
        const greenbat = this.add.image(950, 179, 'candyhunt', 'greenbat')
        greenbat.scaleX = 0.25
        greenbat.scaleY = 0.25

        // clothesdoor
        const clothesdoor = this.add.image(1224.5614271559207, 584.4819920650543, 'town', 'clothesdoor')
        clothesdoor.setOrigin(0.47204412321886735, 0.9139999513193517)

        // dcdoor
        const dcdoor = this.add.image(813.0092402431831, 486.10711825839496, 'town', 'dcdoor')
        dcdoor.setOrigin(0.5067282682878871, 0.8486023062202533)

        // bg_upper
        this.add.image(760, 480, 'town', 'bg-upper')

        // coffeedoor
        const coffeedoor = this.add.image(363.40952227654265, 535.9996780739574, 'town', 'coffeedoor')
        coffeedoor.setOrigin(0.5023671807892639, 0.9387738677242724)

        // arrow
        const arrow = this.add.image(170.95878766724206, 587.5000212507283, 'town', 'arrow')
        arrow.setOrigin(0.11247288662318557, 0.611979188802842)

        // bigspook
        const bigspook = this.add.image(985.5255882317963, 513.3777870583059, 'town', 'bigspook')
        bigspook.setOrigin(0.6483720975209186, 0.5347685281857353)

        // cage_upper
        const cage_upper = this.add.image(1245.2358152147403, 864.9614305979176, 'town', 'cage_upper')
        cage_upper.setOrigin(0.8192340889570661, 0.9010014902061642)

        // cage2_upper
        const cage2_upper = this.add.image(1307.475088425182, 951.4048656124199, 'town', 'cage2_upper')
        cage2_upper.setOrigin(0.8601809792270935, 0.9910467350129374)

        // grave
        const grave = this.add.image(58.079307682240255, 679.3961901001189, 'town', 'grave')
        grave.setOrigin(0.038210070843579115, 0.7077043646876239)

        // plumpkin
        const plumpkin = this.add.image(918.7700141151845, 536.8324482344127, 'town', 'plumpkin')
        plumpkin.setOrigin(0.6044539566547267, 0.5592004669108466)

        // pumpspook
        const pumpspook = this.add.image(698.6570400009514, 554.8744952929563, 'town', 'pumpspook')
        pumpspook.setOrigin(0.45964278947431014, 0.5779942659301629)

        // railing
        const railing = this.add.image(760, 480, 'town', 'railing')

        // sign
        const sign = this.add.image(1452.8146070480784, 571.1123376456458, 'town', 'sign')
        sign.setOrigin(0.9557990835842621, 0.5949086850475477)

        // spookin
        const spookin = this.add.image(642.726694119466, 518.790401175869, 'town', 'spookin')
        spookin.setOrigin(0.4228465092891223, 0.5404066678915301)

        // tree
        const tree = this.add.image(105.33505215683488, 967.5409734817938, 'town', 'tree')
        tree.setOrigin(0.06929937641897031, 1.0078551807102019)

        // lists
        const sort = [arrow, tree, spookin, sign, railing, pumpspook, plumpkin, grave, cage2_upper, cage_upper, bigspook]

        // greenbat (components)
        const greenbatSimpleButton = new SimpleButton(greenbat)
        greenbatSimpleButton.callback = () => this.shell.party.findCandy('greenbat')

        // clothesdoor (components)
        const clothesdoorButton = new Button(clothesdoor)
        clothesdoorButton.hoverCallback = () => this.ShopDoorOver()
        clothesdoorButton.hoverOutCallback = () => this.ShopDoorOut()
        new MoveTo(clothesdoor)

        // dcdoor (components)
        const dcdoorButton = new Button(dcdoor)
        dcdoorButton.hoverCallback = () => this.DiscoDoorOver()
        dcdoorButton.hoverOutCallback = () => this.DiscoDoorOut()
        new MoveTo(dcdoor)

        // coffeedoor (components)
        const coffeedoorButton = new Button(coffeedoor)
        coffeedoorButton.hoverCallback = () => this.CoffeeDoorOver()
        coffeedoorButton.hoverOutCallback = () => this.CoffeeDoorOut()
        new MoveTo(coffeedoor)

        this.greenbat = greenbat
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image} */
    greenbat
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
    }

    DiscoDoorOver() {
        this.shell.musicController.addSfx('shack-MineLightOn')
    }

    DiscoDoorOut() {
        this.shell.musicController.addSfx('shack-MineLightOff')
    }

    CoffeeDoorOver() {
        this.shell.musicController.addSfx('town-DoorCoffeeOpen')
    }

    CoffeeDoorOut() {
        this.shell.musicController.addSfx('town-DoorCoffeeClose')
    }

    ShopDoorOver() {
        this.shell.musicController.addSfx('town-DoorShopOpen')
    }

    ShopDoorOut() {
        this.shell.musicController.addSfx('town-DoorShopClose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
