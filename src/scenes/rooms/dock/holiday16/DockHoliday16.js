import RoomScene from '../../RoomScene'
import {Button, ShowHint, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class DockHoliday16 extends RoomScene {
    constructor() {
        super('DockHoliday16')

        /** @type {Phaser.GameObjects.Sprite} */
        this.boat
        /** @type {Phaser.GameObjects.Sprite} */
        this.coins
        /** @type {Phaser.GameObjects.Sprite} */
        this.change
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 950, 430),
            village: () => this.triggerRoom(200, 1300, 760),
            town: () => this.triggerRoom(100, 368, 640),
            hydro: () => this.triggerGame('hydrohopper', 924, 'ruffle')
        }

        this.music = 585

        this.loadSfx = ['town-coinschangejingle']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dockholiday16-pack', 'client/media/rooms/dock/parties/dockholiday16-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(768, 421.5, 'dockholiday16', 'bg')

        // boat
        const boat = this.add.sprite(151, 631, 'dockholiday16', 'boat')

        // fence2
        const fence2 = this.add.image(1318.8972511860202, 615.9578049411973, 'dockholiday16', 'fence2')
        fence2.setOrigin(0.46297697016083783, 0.31990713364517703)

        // door
        const door = this.add.image(914, 658, 'dockholiday16', 'door')

        // fence1
        const fence1 = this.add.image(858, 792, 'dockholiday16', 'fence1')

        // trees
        const trees = this.add.image(1509, 480, 'dockholiday16', 'trees')

        // table
        this.add.image(202, 374, 'dockholiday16', 'table')

        // hurdle
        const hurdle = this.add.image(147.83091504340908, 506.4492159115898, 'dockholiday16', 'hurdle')
        hurdle.setOrigin(0.5070772876085227, 0.7368494657832264)

        // treewhurdle
        const treewhurdle = this.add.image(434, 447, 'dockholiday16', 'treewhurdle')

        // nest
        const nest = this.add.image(958.6851017026092, 262.2963309650179, 'dockholiday16', 'nest')
        nest.setOrigin(0.4697851142163944, 0.3353909901805804)

        // pillar
        const pillar = this.add.image(885.3737792432834, 306.40523561006484, 'dockholiday16', 'pillar')
        pillar.setOrigin(0.506133009880491, 0.8088616026503682)

        // ceiling
        const ceiling = this.add.image(1113.7073417721908, 392.9159834604551, 'dockholiday16', 'ceiling')
        ceiling.setOrigin(0.5601392565945352, 0.9290108333537528)

        // rightSIgn
        const rightSIgn = this.add.image(1139, 433, 'dockholiday16', 'rightSIgn')

        // smallhouse
        const smallhouse = this.add.image(721, 290, 'dockholiday16', 'smallhouse')

        // foreground
        const foreground = this.add.image(495, 487, 'dockholiday16', 'foreground')

        // dock
        const dock = this.add.image(379.23444661488344, 579.9129781706487, 'dockholiday16', 'dock')
        dock.setOrigin(0.7563096122936225, 0.13178925273189518)

        // pole
        const pole = this.add.image(269, 819, 'dockholiday16', 'pole')

        // pole2
        const pole2 = this.add.image(511.45756027946476, 632.8785544052123, 'dockholiday16', 'pole2')
        pole2.setOrigin(0.3698464586752434, 0.5066555788177425)

        // pot
        const pot = this.add.image(553, 690, 'dockholiday16', 'pot')
        pot.tintTopLeft = 11513775
        pot.tintTopRight = 11513775
        pot.tintBottomLeft = 11513775
        pot.tintBottomRight = 11513775

        // coins
        const coins = this.add.sprite(551.8567481760598, 635.6944012913002, 'dockholiday16', 'coins0001')
        coins.setOrigin(0.43585200359305704, 0.36638227461882017)

        // change
        const change = this.add.sprite(548.7287815763474, 701.3195022168159, 'dockholiday16', 'change')
        change.setOrigin(0.4638957642215574, 0.7290023801744827)

        // leg
        const leg = this.add.image(551.5141063913345, 715.9350999295234, 'dockholiday16', 'leg')
        leg.setOrigin(0.6098170504927651, 0.6157761152481848)

        // barrell
        const barrell = this.add.image(1033.4899077074706, 819.7945023720405, 'dockholiday16', 'barrell')
        barrell.setOrigin(0.49397870687377515, 0.24067388648596363)

        // lists
        const sort = [coins, change, pole2, door, fence2, rightSIgn, smallhouse, foreground, treewhurdle, hurdle, pole, trees, nest, pillar, dock, fence1, leg, ceiling, barrell]

        // boat (components)
        new Button(boat)
        const boatShowHint = new ShowHint(boat)
        boatShowHint.text = 'hydrohopper'
        new MoveTo(boat)

        // change (components)
        const changeButton = new Button(change)
        changeButton.hoverCallback = () => this.onHoverChange()

        this.boat = boat
        this.coins = coins
        this.change = change
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
            loop: true
        })
    }

    onHoverChange() {
        this.coins.play('dockholiday16-coins')

        setTimeout(() => {
            this.shell.musicController.addSfx('town-coinschangejingle')
        }, 500)
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
