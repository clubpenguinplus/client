import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Dock extends RoomScene {
    constructor() {
        super('Dock')

        /** @type {Phaser.GameObjects.Image} */
        this.brownwolf
        /** @type {Phaser.GameObjects.Sprite} */
        this.animation
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort
        /** @type {Array<any>} */
        this.waterZones

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 950, 430),
            village: () => this.triggerRoom(200, 1300, 760),
            town: () => this.triggerRoom(100, 368, 640),
            hydro: () => this.triggerGame('hydrohopper', 924, 'ruffle')
        }

        this.music = 251

        this.loadSfx = ['dock-tubes']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dock-pack', 'client/media/rooms/dock/dock-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'dock', 'bg')

        // tombseat
        const tombseat = this.add.image(137.09763136004005, 289.54423980432875, 'dock', 'tombseat')
        tombseat.setOrigin(0.09019581010528951, 0.3016085831295091)

        // interior
        const interior = this.add.image(1389.2140497301386, 617.1233513753853, 'dock', 'interior')
        interior.setOrigin(0.9139566791452437, 0.6428368112246403)

        // anotherthing
        const anotherthing = this.add.image(759.4562798345298, 752.184898110161, 'dock', 'anotherthing')
        anotherthing.setOrigin(0.4996422930613958, 0.7835259091319838)

        // body
        const body = this.add.image(1045.024377691143, 316.30356686657336, 'dock', 'body')
        body.setOrigin(0.6875160379546993, 0.32948288215268057)

        // body2
        const body2 = this.add.image(1141.3163971813938, 312.4518860869633, 'dock', 'body2')
        body2.setOrigin(0.7508660507772328, 0.32547071467392014)

        // cloud
        const cloud = this.add.image(854.366179100446, 553.1819348125907, 'dock', 'cloud')
        cloud.setOrigin(0.5620830125660828, 0.5762311820964486)

        // cloud2
        const cloud2 = this.add.image(501.9373877661274, 618.6605080659614, 'dock', 'cloud2')
        cloud2.setOrigin(0.3302219656356101, 0.6444380292353764)

        // cloud3
        const cloud3 = this.add.image(835.1077752023957, 832.4287913343185, 'dock', 'cloud3')
        cloud3.setOrigin(0.5494130100015762, 0.8671133243065817)

        // brownwolf
        const brownwolf = this.add.image(645, 655, 'candyhunt', 'brownwolf')
        brownwolf.scaleX = 0.25
        brownwolf.scaleY = 0.25

        // fg
        const fg = this.add.image(196.5301144653589, 863.8484809755633, 'dock', 'fg')
        fg.setOrigin(0.12929612793773612, 0.8998421676828785)

        // gariwald
        const gariwald = this.add.image(951.9242404877815, 300.37859544092225, 'dock', 'gariwald')
        gariwald.setOrigin(0.62626594768933, 0.3128943702509607)

        // house
        const house = this.add.image(1359.3753068642714, 743.5556143965102, 'dock', 'house')
        house.setOrigin(0.8943258840634255, 0.774537151989924)

        // idkwhatthisis
        const idkwhatthisis = this.add.image(469.42059864141436, 654.3476408151514, 'dock', 'idkwhatthisis')
        idkwhatthisis.setOrigin(0.30882934121145683, 0.681612125849116)

        // grave2
        const grave2 = this.add.image(753.3581851118038, 596.2317605434342, 'dock', 'grave2')
        grave2.setOrigin(0.49563038494197614, 0.6210747505660773)

        // isitawrapper
        const isitawrapper = this.add.image(1015.7098731955552, 782.202577412929, 'dock', 'isitawrapper')
        isitawrapper.setOrigin(0.668230179733918, 0.8147943514718011)

        // pile
        const pile = this.add.image(617.2009799037808, 677.5939929238382, 'dock', 'pile')
        pile.setOrigin(0.4060532762524873, 0.7058270759623314)

        // railing
        const railing = this.add.image(333.26339343339134, 428.5259346164791, 'dock', 'railing')
        railing.setOrigin(0.219252232521968, 0.44638118189216575)

        // shovel
        const shovel = this.add.image(975.8589838663779, 737.3703269176044, 'dock', 'shovel')
        shovel.setOrigin(0.6420124893857749, 0.7680940905391712)

        // snowrail
        const snowrail = this.add.image(104.12077979062099, 458.4141016133622, 'dock', 'snowrail')
        snowrail.setOrigin(0.06850051302014538, 0.47751468918058565)

        // thingy
        const thingy = this.add.image(105.78123351267004, 330.55916501558454, 'dock', 'thingy')
        thingy.setOrigin(0.06959291678465135, 0.34433246355790054)

        // wood
        const wood = this.add.image(1390.4505615234375, 718.5516364175835, 'dock', 'wood')
        wood.setOrigin(0.9147700885431397, 0.748491326270781)

        // grave1
        const grave1 = this.add.image(866.2690382111399, 554.7204174922077, 'dock', 'grave1')
        grave1.setOrigin(0.5699138409283815, 0.5778337682210497)

        // grave3
        const grave3 = this.add.image(461.118330031169, 536.4554265496681, 'dock', 'grave3')
        grave3.setOrigin(0.303367322388927, 0.5588077359892376)

        // grave4
        const grave4 = this.add.image(361.4911067082254, 601.2131217095814, 'dock', 'grave4')
        grave4.setOrigin(0.23782309651856934, 0.6262636684474806)

        // grave5
        const grave5 = this.add.image(852.9854084347475, 757.2957715821932, 'dock', 'grave5')
        grave5.setOrigin(0.5611746108123339, 0.7888497620647846)

        // grave6
        const grave6 = this.add.image(579.0105442966524, 498.2649909425397, 'dock', 'grave6')
        grave6.setOrigin(0.3809279896688502, 0.5190260322318122)

        // grave7
        const grave7 = this.add.image(562.0657355923214, 680.7701931591972, 'dock', 'grave7')
        grave7.setOrigin(0.36978011224967694, 0.7091357135257241)

        // catalog
        const catalog = this.add.image(1448, 980.0269005474264, 'dock', 'catalog')
        catalog.setOrigin(0.5, 1.2780268569206148)

        // container_1
        const container_1 = this.add.container(422.8442108823466, 348.3755027807417)

        // fountain
        const fountain = this.add.image(337.1557891176534, 131.62449721925827, 'dock', 'fountain')
        container_1.add(fountain)

        // animation
        const animation = this.add.sprite(27.1557891176534, 29.624497219258274, 'dock', 'animation0001')
        container_1.add(animation)

        // lists
        const sort = [container_1, animation, fountain, catalog, grave7, grave6, grave5, grave4, grave3, grave1, wood, thingy, snowrail, shovel, railing, pile, isitawrapper, grave2, idkwhatthisis, house, gariwald, fg, cloud3, cloud2, cloud, body2, body, anotherthing, interior, tombseat]
        const waterZones = []

        // brownwolf (components)
        const brownwolfSimpleButton = new SimpleButton(brownwolf)
        brownwolfSimpleButton.callback = () => this.shell.party.findCandy('brownwolf')

        // catalog (components)
        const catalogButton = new Button(catalog)
        catalogButton.callback = () => this.interface.loadExternal('Hydro')

        this.brownwolf = brownwolf
        this.animation = animation
        this.sort = sort
        this.waterZones = waterZones

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()

        this.animation.play('dock-animation')
    }

    floatBoat() {
        let value = this.up ? -2 : 2
        this.boat.y += value
        this.up = !this.up
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
