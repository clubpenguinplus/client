import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Dock extends RoomScene {
    constructor() {
        super('Dock')

        /** @type {Phaser.GameObjects.Image} */
        this.boat
        /** @type {Phaser.GameObjects.Sprite} */
        this.ring
        /** @type {Phaser.GameObjects.Sprite} */
        this.smallcatalog
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_1
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 950, 430),
            village: () => this.triggerRoom(200, 1300, 760),
            town: () => this.triggerRoom(100, 368, 640),
            hydro: () => null,
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dock-pack', 'client/media/rooms/dock/dock-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'dock', 'bg')
        bg.setOrigin(0, 0)

        // bench2
        const bench2 = this.add.image(180, 315, 'dock', 'bench2')

        // bench1
        const bench1 = this.add.image(119.98440274657416, 371.2733011067446, 'dock', 'bench1')
        bench1.setOrigin(0.5233459473113757, 0.6715589112930161)

        // table2
        const table2 = this.add.image(828.00002760472, 311.34824674331423, 'dock', 'table2')
        table2.setOrigin(0.4097222222222222, 0.1971391980227298)

        // tabale
        const tabale = this.add.image(966, 336, 'dock', 'tabale')
        tabale.setOrigin(0.5883534136546185, 0.3974358974358974)

        // tree_fg
        this.add.image(365, 486, 'dock', 'tree_fg')

        // boat
        const boat = this.add.image(173, 641, 'dock', 'boat')

        // fg2
        const fg2 = this.add.image(114.83660557045329, 475.7219760867117, 'dock', 'fg2')
        fg2.setOrigin(0.3014677290709707, 0.2295572351198286)

        // pillar2
        const pillar2 = this.add.image(537, 632, 'dock', 'pillar2')

        // pillar1
        const pillar1 = this.add.image(290, 828, 'dock', 'pillar1')

        // ring
        const ring = this.add.sprite(524.5138040019274, 716.6663020350195, 'dock', 'ring_0001')
        ring.setOrigin(0.7958926666696138, 0.9202893887915851)

        // torch1
        this.add.image(474, 497, 'dock', 'torch1')

        // forest
        const forest = this.add.image(1645.8761446555077, 637.5082886271437, 'dock', 'forest')
        forest.setOrigin(0.9865161701460728, 0.950398119952734)

        // snow_fg
        const snow_fg = this.add.image(1251.2844576597856, 645.4935482871178, 'dock', 'snow_fg')
        snow_fg.setOrigin(0.5421769883029249, 0.4248847922605049)

        // container_1
        const container_1 = this.add.container(775.3025600933964, 699.3791158270643)

        // catalogfg
        const catalogfg = this.add.image(6.8331972372499195, -0.045120605207898734, 'dock', 'catalogfg')
        catalogfg.setOrigin(0.49072525928861027, 0.7352056908444423)
        container_1.add(catalogfg)

        // smallcatalog
        const smallcatalog = this.add.sprite(-25.30257975094662, -44.37913859754099, 'dock', 'catalog0001')
        container_1.add(smallcatalog)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(749, 639, 128, 128)
        rectangle_1.scaleX = 0.6479719067963792
        rectangle_1.scaleY = 0.632333043277452
        rectangle_1.fillColor = 1741055
        rectangle_1.fillAlpha = 100

        // rectangle
        const rectangle = this.add.rectangle(526, 699, 128, 128)
        rectangle.scaleX = 1.4952694746750035
        rectangle.scaleY = 1.3247912439284337
        rectangle.fillColor = 1741055
        rectangle.fillAlpha = 100

        // lists
        const sort = [snow_fg, ring, pillar1, fg2, pillar2, table2, forest, bench2, bench1, container_1, tabale]

        // boat (components)
        const boatButton = new Button(boat)
        boatButton.spriteName = 'boat'
        boatButton.activeFrame = false
        const boatShowHint = new ShowHint(boat)
        boatShowHint.text = 'hydrohopper'
        new MoveTo(boat)

        // ring (components)
        const ringAnimation = new Animation(ring)
        ringAnimation.key = 'ring_'
        ringAnimation.end = 34
        ringAnimation.repeat = 0
        ringAnimation.autoPlay = false

        // smallcatalog (components)
        const smallcatalogAnimation = new Animation(smallcatalog)
        smallcatalogAnimation.key = 'catalog'
        smallcatalogAnimation.end = 4
        smallcatalogAnimation.repeat = 0
        smallcatalogAnimation.autoPlay = false

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.hoverCallback = () => {
            this.smallcatalog.__Animation.play()
        }
        rectangle_1SimpleButton.hoverOutCallback = () => {
            this.smallcatalog.setFrame('catalog0001')
        }

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle)
        rectangleSimpleButton.hoverCallback = () => {
            this.ring.__Animation.play()
        }
        rectangleSimpleButton.hoverOutCallback = () => {}

        this.boat = boat
        this.ring = ring
        this.smallcatalog = smallcatalog
        this.rectangle_1 = rectangle_1
        this.rectangle = rectangle
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()

        this.up = false

        this.time.addEvent({
            delay: 1500,
            callback: () => this.floatBoat(),
            loop: true,
        })
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
