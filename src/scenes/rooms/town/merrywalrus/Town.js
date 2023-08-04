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

        this.music = 820

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('town-pack', 'client/media/rooms/town/town-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'town-merrywalrus', 'bg')

        // clothes_door
        const clothes_door = this.add.image(1072, 480, 'town-merrywalrus', 'clothes_door')

        // coffee_door
        const coffee_door = this.add.image(439, 497, 'town-merrywalrus', 'coffee_door')

        // dance_door
        const dance_door = this.add.image(744, 424, 'town-merrywalrus', 'dance_door')

        // light_leftest
        const light_leftest = this.add.image(698.0361256853585, 585.8939267819319, 'town-merrywalrus', 'light_leftest')
        light_leftest.setOrigin(0.5370259229921763, 0.5907347905969184)

        // light_left
        const light_left = this.add.image(877.5710994517133, 604.7517278785053, 'town-merrywalrus', 'light_left')
        light_left.setOrigin(0.47037926160625954, 0.6482759055640155)

        // light_right
        const light_right = this.add.image(1042.6433508224302, 673.537277604362, 'town-merrywalrus', 'light_right')
        light_right.setOrigin(0.5444311075906121, 0.6341543907483951)

        // light_rightest
        const light_rightest = this.add.image(1223.5502268363282, 585.0764744361331, 'town-merrywalrus', 'light_rightest')
        light_rightest.setOrigin(0.5189052053210755, 0.617168307396897)

        // snow_top
        const snow_top = this.add.image(729, 293, 'town-merrywalrus', 'snow-top')

        // bridge
        const bridge = this.add.image(92, 626, 'town-merrywalrus', 'bridge')

        // trees_bottomleft
        const trees_bottomleft = this.add.image(26, 941, 'town-merrywalrus', 'trees_bottomleft')

        // snowman
        const snowman = this.add.image(258, 779.3568975380433, 'town-merrywalrus', 'snowman')
        snowman.setOrigin(0.5, 0.5247550996479734)

        // tree_middle
        const tree_middle = this.add.image(511, 974, 'town-merrywalrus', 'tree_middle')

        // trees_right
        const trees_right = this.add.image(1575, 818, 'town-merrywalrus', 'trees_right')

        // trees_bottomright
        const trees_bottomright = this.add.image(1434, 951, 'town-merrywalrus', 'trees_bottomright')

        // bauble
        const bauble = this.add.image(1449, 514, 'town-merrywalrus', 'bauble')

        // lists
        const sort = [light_leftest, bauble, trees_bottomright, trees_right, tree_middle, snowman, trees_bottomleft, bridge, snow_top, light_right, light_left]

        // clothes_door (components)
        const clothes_doorButton = new Button(clothes_door)
        clothes_doorButton.hoverCallback = () => this.ShopDoorOver()
        clothes_doorButton.hoverOutCallback = () => this.ShopDoorOut()
        new MoveTo(clothes_door)

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door)
        coffee_doorButton.hoverCallback = () => this.CoffeeDoorOver()
        new MoveTo(coffee_door)

        // dance_door (components)
        const dance_doorButton = new Button(dance_door)
        dance_doorButton.hoverCallback = () => this.DiscoDoorOver()
        dance_doorButton.hoverOutCallback = () => this.DiscoDoorOut()
        new MoveTo(dance_door)

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
    }

    DiscoDoorOver() {
        this.shell.musicController.addSfx('town-DoorCoffeeOpen')
    }

    DiscoDoorOut() {
        this.shell.musicController.addSfx('town-DoorCoffeeClose')
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
