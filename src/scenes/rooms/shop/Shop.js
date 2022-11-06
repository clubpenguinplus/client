import RoomScene from '@scenes/rooms/RoomScene'

import {Animation, Button, MoveTo, SimpleButton, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Shop extends RoomScene {
    constructor() {
        super('Shop')

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg
        /** @type {Phaser.GameObjects.Sprite} */
        this.rail
        /** @type {Phaser.GameObjects.Sprite} */
        this.speakers
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairBody
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairArm
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairBody_1
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairArm_1
        /** @type {Phaser.GameObjects.Sprite} */
        this.deskChair
        /** @type {Phaser.GameObjects.Sprite} */
        this.desk
        /** @type {Phaser.GameObjects.Sprite} */
        this.chest
        /** @type {Phaser.GameObjects.Sprite} */
        this.register
        /** @type {Phaser.GameObjects.Sprite} */
        this.clothesroom
        /** @type {Phaser.GameObjects.Sprite} */
        this.spinner
        /** @type {Phaser.GameObjects.Sprite} */
        this.door
        /** @type {Phaser.GameObjects.Sprite} */
        this.circularStool
        /** @type {Phaser.GameObjects.Sprite} */
        this.squareStool
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg
        /** @type {Phaser.GameObjects.Sprite} */
        this.catalog_en
        /** @type {Phaser.GameObjects.Sprite} */
        this.unlock
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            town: () => this.triggerRoom(100, 932, 560),
        }
        this.music = '1173'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('shop-pack', 'client/media/rooms/shop/shop-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.sprite(765, 468, 'shop', 'bg')

        // rail
        const rail = this.add.sprite(363, 472, 'shop', 'rail')

        // speakers
        const speakers = this.add.sprite(762, 224, 'shop', 'speakers0001')

        // chairBody
        const chairBody = this.add.sprite(282, 640, 'shop', 'chairBody')

        // chairArm
        const chairArm = this.add.sprite(301, 686, 'shop', 'chairArm')

        // chairBody_1
        const chairBody_1 = this.add.sprite(336, 767, 'shop', 'chairBody')

        // chairArm_1
        const chairArm_1 = this.add.sprite(355, 814, 'shop', 'chairArm')

        // deskChair
        const deskChair = this.add.sprite(1370, 380, 'shop', 'chair')

        // desk_container
        const desk_container = this.add.container(1337.3141623444612, 415.3218257529371)

        // desk
        const desk = this.add.sprite(13.685837655538762, 45.678174247062884, 'shop', 'desk')
        desk_container.add(desk)

        // chest
        const chest = this.add.sprite(15.685837655538762, 123.67817424706288, 'shop', 'chest')
        desk_container.add(chest)

        // register
        const register = this.add.sprite(-48.31416234446124, -46.321825752937116, 'shop', 'register0001')
        desk_container.add(register)

        // clothesroom
        const clothesroom = this.add.sprite(459, 284, 'shop', 'clothesroom')

        // spinner
        const spinner = this.add.sprite(1403, 436, 'shop', 'spinner0001')

        // door
        const door = this.add.sprite(1103, 248, 'shop', 'door')

        // circularStool
        const circularStool = this.add.sprite(1105.0536438593308, 585.1647632822302, 'shop', 'circularStool')
        circularStool.setOrigin(0.3927203373794677, 0.1307307179502602)

        // squareStool
        const squareStool = this.add.sprite(1032.9632984323307, 645.1017420341761, 'shop', 'squareStool')
        squareStool.setOrigin(0.3475601335676138, 0.1008847133406621)

        // fg
        const fg = this.add.sprite(782, 980.5, 'shop', 'fg')
        fg.setOrigin(0.5, 1)

        // catalog-en
        const catalog_en = this.add.sprite(1340, 1055, 'shop', 'catalog-en')
        catalog_en.setOrigin(0, 2)

        // unlock
        const unlock = this.add.sprite(1415, 756, 'shop', 'unlock')
        unlock.visible = false

        // lists
        const sort = [catalog_en, fg, squareStool, circularStool, door, spinner, deskChair, chairArm_1, chairBody_1, chairArm, chairBody, speakers, rail, desk_container]

        // register (components)
        const registerButton = new Button(register)
        registerButton.spriteName = 'register'
        registerButton.activeFrame = false

        // clothesroom (components)
        const clothesroomButton = new Button(clothesroom)
        clothesroomButton.spriteName = 'clothesroom'
        clothesroomButton.activeFrame = false
        new MoveTo(clothesroom)

        // spinner (components)
        const spinnerSimpleButton = new SimpleButton(spinner)
        spinnerSimpleButton.hoverCallback = () => this.onSpinnerOver()
        spinnerSimpleButton.hoverOutCallback = () => this.onSpinnerOut()

        // door (components)
        const doorButton = new Button(door)
        doorButton.spriteName = 'door'
        doorButton.activeFrame = false
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 1100
        doorMoveTo.y = 350

        // catalog_en (components)
        const catalog_enButton = new Button(catalog_en)
        catalog_enButton.spriteName = 'catalog-en'
        catalog_enButton.callback = () => this.interface.loadExternal('ClothingCatalog')
        catalog_enButton.activeFrame = false
        catalog_enButton.pixelPerfect = true

        this.bg = bg
        this.rail = rail
        this.speakers = speakers
        this.chairBody = chairBody
        this.chairArm = chairArm
        this.chairBody_1 = chairBody_1
        this.chairArm_1 = chairArm_1
        this.deskChair = deskChair
        this.desk = desk
        this.chest = chest
        this.register = register
        this.clothesroom = clothesroom
        this.spinner = spinner
        this.door = door
        this.circularStool = circularStool
        this.squareStool = squareStool
        this.fg = fg
        this.catalog_en = catalog_en
        this.unlock = unlock
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        this.speakers.play('clothesspeakers')
        this.spinner.on('animationcomplete', () => this.spinner.setFrame('spinner0001'))
    }

    onSpinnerOver() {
        this.spinner.play('spinner')
    }

    onSpinnerOut() {
        this.spinner.stop('spinner')
        this.spinner.setFrame('spinner0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */