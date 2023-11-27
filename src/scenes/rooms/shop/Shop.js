import RoomScene from '@scenes/rooms/RoomScene'

import {Animation, Button, MoveTo, SimpleButton, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Shop extends RoomScene {
    constructor() {
        super('Shop')

        /** @type {Phaser.GameObjects.Sprite} */
        this.cash
        /** @type {Phaser.GameObjects.Sprite} */
        this.train
        /** @type {Phaser.GameObjects.Sprite} */
        this.chest
        /** @type {Phaser.GameObjects.Sprite} */
        this.catalog_old
        /** @type {Phaser.GameObjects.Sprite} */
        this.unlock
        /** @type {Phaser.GameObjects.Sprite} */
        this.catalog
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            town: () => this.triggerRoom(100, 932, 560)
        }
        this.music = 345
        this.loadSfx = ['coffee-cashregister', 'shop-curtainopen', 'shop-curtainclose', 'shop-spinner', 'shop-dooropen', 'shop-doorclose', 'shop-bookopen', 'shop-bookclose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('shop-pack', 'client/media/rooms/shop/shop-pack.json')
    }

    /** @returns {void} */
    _create() {
        // shopdoor
        const shopdoor = this.add.image(1112, 255, 'shop', 'shopdoor')

        // bg
        this.add.image(760, 452, 'shop', 'bg')

        // dinosaur
        this.add.image(1501, 392, 'shop', 'dinosaur')

        // container_1
        const container_1 = this.add.container(1332.7455296300423, 430.4237691679065)

        // table
        const table = this.add.image(20.88157135767574, -3.8984094567359193, 'shop', 'table')
        table.setOrigin(0.44011293667673024, 0.09712339218891278)
        container_1.add(table)

        // cash
        const cash = this.add.sprite(49.37309729222375, 1.694866337428266, 'shop', 'cashJump0001')
        cash.setOrigin(0.4085058754783383, 0.4203115689650038)
        container_1.add(cash)

        // cabinet
        this.add.image(258, 404, 'shop', 'cabinet')

        // pillar
        this.add.sprite(989, 251, 'pillar')

        // train
        const train = this.add.sprite(572, 121, 'shop', 'train0001')

        // carts
        this.add.image(749, 243, 'shop', 'carts')

        // chest
        const chest = this.add.sprite(566, 329, 'shop', 'chest')

        // bears
        const bears = this.add.image(609, 468, 'shop', 'bears')

        // bucket_1
        this.add.image(1399, 563, 'shop', 'bucket_1')

        // bucket_2
        this.add.image(1477, 594, 'shop', 'bucket_2')

        // plushes
        const plushes = this.add.image(703, 852, 'shop', 'plushes')

        // puffles
        const puffles = this.add.image(565, 599, 'shop', 'puffles')

        // pucks
        this.add.image(1243, 833, 'shop', 'pucks')

        // race_3
        const race_3 = this.add.image(1077.2456340817034, 489.42103277154115, 'shop', 'race_3')
        race_3.setOrigin(0.9431532210870683, 0.9325425101596304)

        // race_1
        this.add.image(1083, 662, 'shop', 'race_1')

        // race_2
        const race_2 = this.add.image(857.787292618592, 427.0395074111094, 'shop', 'race_2')
        race_2.setOrigin(0.20254797775389477, 0.10987654698508967)

        // trafficlights
        const trafficlights = this.add.image(860.8574576920828, 438.9671098800855, 'shop', 'traffic0001')
        trafficlights.setOrigin(0.6369607718841335, 0.39941970014847006)

        // toy
        const toy = this.add.image(1106, 796, 'shop', 'toy')

        // toy_1
        const toy_1 = this.add.image(915, 815, 'shop', 'toy')

        // tribune_front
        this.add.image(220, 743, 'shop', 'tribune_front')

        // tribune_back
        const tribune_back = this.add.image(123, 705, 'shop', 'tribune_back')

        // small_overlay
        const small_overlay = this.add.image(624, 114, 'shop', 'small_overlay')

        // overlay
        const overlay = this.add.image(752, 490, 'shop', 'overlay')

        // catalog_old
        const catalog_old = this.add.sprite(1644, 1057, 'shop', 'catalog')
        catalog_old.setOrigin(0, 2)

        // unlock
        const unlock = this.add.sprite(1415, 756, 'shop', 'unlock')
        unlock.visible = false

        // catalog
        const catalog = this.add.sprite(1335, 1087, 'shop', 'catalog')
        catalog.setOrigin(-0.02426799776994842, 2.2833918797658597)

        // lists
        const sort = [catalog_old, plushes, puffles, bears, toy_1, toy, tribune_back, race_2, trafficlights, race_3, overlay, small_overlay, table, cash, catalog]

        // shopdoor (components)
        const shopdoorButton = new Button(shopdoor)
        shopdoorButton.hoverCallback = () => this.shell.musicController.addSfx('shop-dooropen')
        shopdoorButton.hoverOutCallback = () => this.shell.musicController.addSfx('shop-doorclose')
        const shopdoorMoveTo = new MoveTo(shopdoor)
        shopdoorMoveTo.x = 1125
        shopdoorMoveTo.y = 325

        // cash (components)
        const cashSimpleButton = new SimpleButton(cash)
        cashSimpleButton.hoverCallback = () => this.onCashHover()
        cashSimpleButton.hoverOutCallback = () => this.onCashOut()

        // chest (components)
        new Button(chest)

        // catalog_old (components)
        const catalog_oldButton = new Button(catalog_old)
        catalog_oldButton.hoverCallback = () => this.shell.musicController.addSfx('book-bookopen')
        catalog_oldButton.hoverOutCallback = () => this.shell.musicController.addSfx('book-bookclose')
        catalog_oldButton.callback = () => this.showClothingCat()
        catalog_oldButton.isLocalised = true

        // catalog (components)
        const catalogButton = new Button(catalog)
        catalogButton.hoverCallback = () => this.onCatalogHover()
        catalogButton.hoverOutCallback = () => this.onCatalogOut()
        catalogButton.callback = () => this.showClothingCat()
        catalogButton.isLocalised = true

        this.cash = cash
        this.train = train
        this.chest = chest
        this.catalog_old = catalog_old
        this.unlock = unlock
        this.catalog = catalog
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.train.play('shop-train')
    }

    onCashHover() {
        this.cash.play('shop-registerHover')
        this.shell.musicController.addSfx('coffee-cashregister')
    }

    onCashOut() {
        this.cash.stop()
        this.cash.setFrame('cashJump0001')
    }

    showClothingCat() {
        this.interface.loadExternal('ClothingCatalog')
    }

    onCatalogHover() {
        this.catalog.setFrame('catalog-hover')
        this.shell.musicController.addSfx('book-bookopen')
    }

    onCatalogOut() {
        this.catalog.setFrame('catalog')
        this.shell.musicController.addSfx('book-bookclose')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
