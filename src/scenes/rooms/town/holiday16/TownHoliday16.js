import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class TownHoliday16 extends RoomScene {
    constructor() {
        super('TownHoliday16')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 1200, 400),
            forts: () => this.triggerRoom(801, 360, 520),
            coffee: () => this.triggerRoom(110, 700, 450),
            dance: () => this.triggerRoom(120, 300, 560),
            clothes: () => this.triggerRoom(130, 1036, 520),
            cfc: () => this.interface.loadExternal('Cfc')
        }

        this.music = 1084

        this.loadSfx = ['town-danceopenparty', 'town-dancecloseparty', 'town-DoorShopOpen', 'town-DoorShopClose', 'town-DoorCoffeeOpen', 'town-DoorCoffeeClose', 'town-coinschangejingle']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('townHoliday16-pack', 'client/media/rooms/town/parties/townHoliday16-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'townHoliday16', 'bg')

        // cfcanim
        const cfcanim = this.add.sprite(784.5740416266104, 683.8150515124041, 'townHoliday16', 'cfcanim0001')
        cfcanim.setOrigin(0.4753527095903339, 0.5806111380457324)

        // clothesdoor
        const clothesdoor = this.add.image(1074.4159420765213, 530.6811584695744, 'townHoliday16', 'clothesdoor')
        clothesdoor.setOrigin(0.4608476072200202, 0.846853412547479)

        // coffeedoor
        const coffeedoor = this.add.image(422.07971038260644, 563.7695639339254, 'townHoliday16', 'coffeedoor')
        coffeedoor.setOrigin(0.42939732449511714, 0.8291017166694593)

        // danceclubdoor
        const danceclubdoor = this.add.image(745.8613526411596, 489.2149744985636, 'townHoliday16', 'danceclubdoor')
        danceclubdoor.setOrigin(0.5066771522570508, 0.9384130209494826)

        // bauble
        const bauble = this.add.image(1453.1664841911156, 586.6410076114089, 'townHoliday16', 'bauble')
        bauble.setOrigin(0.9560305821774504, 0.6110843725816866)

        // fg
        const fg = this.add.image(760, 958.6734094076915, 'townHoliday16', 'fg')
        fg.setOrigin(0.5, 0.9986181347996786)

        // light1
        const light1 = this.add.image(701.1792543832117, 578.0345760279804, 'townHoliday16', 'light1')
        light1.setOrigin(0.4613021410415867, 0.6021193500291463)

        // light2
        const light2 = this.add.image(878.7948391868468, 593.0280994204951, 'townHoliday16', 'light2')
        light2.setOrigin(0.5781544994650308, 0.6177376035630158)

        // light3
        const light3 = this.add.image(1043.7235965045081, 663.3823245699868, 'townHoliday16', 'light3')
        light3.setOrigin(0.6866602608582291, 0.6910232547604029)

        // light4
        const light4 = this.add.image(1225.9525731212245, 569.9611403550879, 'townHoliday16', 'light4')
        light4.setOrigin(0.8065477454744898, 0.5937095212032165)

        // lights
        const lights = this.add.image(726.4278564453125, 217.34716767321413, 'townHoliday16', 'lights')
        lights.setOrigin(0.4779130487264483, 0.22640330456732738)

        // snow
        const snow = this.add.image(760, 480, 'townHoliday16', 'snow')

        // thingy
        const thingy = this.add.image(783.697998046875, 730.8038322892035, 'townHoliday16', 'thingy')
        thingy.setOrigin(0.5155907891342718, 0.7612539873680408)

        // lists
        const sort = [bauble, thingy, snow, lights, light4, light3, light2, light1, fg, cfcanim]

        // cfcanim (components)
        const cfcanimSimpleButton = new SimpleButton(cfcanim)
        cfcanimSimpleButton.hoverCallback = () => this.onCfcAnimOver()
        cfcanimSimpleButton.hoverOutCallback = () => this.onCfcAnimOut()
        const cfcanimMoveTo = new MoveTo(cfcanim)
        cfcanimMoveTo.x = 784
        cfcanimMoveTo.y = 736

        // clothesdoor (components)
        const clothesdoorButton = new Button(clothesdoor)
        clothesdoorButton.hoverCallback = () => this.ShopDoorOver()
        clothesdoorButton.hoverOutCallback = () => this.ShopDoorOut()
        new MoveTo(clothesdoor)

        // coffeedoor (components)
        const coffeedoorButton = new Button(coffeedoor)
        coffeedoorButton.hoverCallback = () => this.CoffeeDoorOver()
        coffeedoorButton.hoverOutCallback = () => this.CoffeeDoorOut()
        new MoveTo(coffeedoor)

        // danceclubdoor (components)
        const danceclubdoorButton = new Button(danceclubdoor)
        danceclubdoorButton.hoverCallback = () => this.DiscoDoorOver()
        danceclubdoorButton.hoverOutCallback = () => this.DiscoDoorOut()
        new MoveTo(danceclubdoor)

        this.cfcanim = cfcanim
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    cfcanim
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
    }

    DiscoDoorOver() {
        this.shell.musicController.addSfx('town-danceopenparty')
    }

    DiscoDoorOut() {
        this.shell.musicController.addSfx('town-dancecloseparty')
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

    onCfcAnimOver() {
        this.cfcanim.play('townHoliday16-cfcanim')
        this.shell.musicController.addSfx('town-coinschangejingle')
    }

    onCfcAnimOut() {
        this.cfcanim.anims.stop()
        this.cfcanim.setFrame('cfcanim0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
