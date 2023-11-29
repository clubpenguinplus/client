// You can write more code here
/* START OF COMPILED CODE */
import RoomScene from '../RoomScene'
import Button from '../../components/Button'
import ShowHint from '../../components/ShowHint'
import MoveTo from '../../components/MoveTo'
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Dock extends RoomScene {
    constructor() {
        super('Dock')

        /** @type {Phaser.GameObjects.Sprite} */
        this.boat
        /** @type {Phaser.GameObjects.Sprite} */
        this.coins
        /** @type {Phaser.GameObjects.Sprite} */
        this.change

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 950, 430),
            village: () => this.triggerRoom(200, 1300, 760),
            town: () => this.triggerRoom(100, 368, 640),
            hydro: () => this.triggerGame('hydrohopper', 924, 'ruffle')
        }

        this.music = 585

        this.loadSfx = ['dock-coins']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dock-pack', 'client/media/rooms/dock/dock-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(768, 421.5, 'dock', 'bg')

        // boat
        const boat = this.add.sprite(151, 631, 'dock', 'boat')

        // fence2
        this.add.image(1341, 659, 'dock', 'fence2')

        // door
        this.add.image(914, 658, 'dock', 'door')

        // fence1
        this.add.image(858, 792, 'dock', 'fence1')

        // trees
        this.add.image(1509, 480, 'dock', 'trees')

        // table
        this.add.image(202, 374, 'dock', 'table')

        // hurdle
        this.add.image(145, 447, 'dock', 'hurdle')

        // treewhurdle
        this.add.image(434, 447, 'dock', 'treewhurdle')

        // nest
        this.add.image(965, 286, 'dock', 'nest')

        // pillar
        this.add.image(884, 240, 'dock', 'pillar')

        // ceiling
        this.add.image(1076, 196, 'dock', 'ceiling')

        // rightSIgn
        this.add.image(1139, 433, 'dock', 'rightSIgn')

        // smallhouse
        this.add.image(721, 290, 'dock', 'smallhouse')

        // foreground
        this.add.image(495, 487, 'dock', 'foreground')

        // dock
        this.add.image(258, 704, 'dock', 'dock')

        // pole
        this.add.image(269, 819, 'dock', 'pole')

        // pole2
        this.add.image(522, 632, 'dock', 'pole2')

        // pot
        const pot = this.add.image(553, 690, 'dock', 'pot')
        pot.tintTopLeft = 11513775
        pot.tintTopRight = 11513775
        pot.tintBottomLeft = 11513775
        pot.tintBottomRight = 11513775

        // coins
        const coins = this.add.sprite(555, 654, 'dock', 'coins0001')

        // change
        const change = this.add.sprite(554, 653, 'dock', 'change')

        // leg
        this.add.image(548, 701, 'dock', 'leg')

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
        this.coins.play('dock-coins')

        setTimeout(() => {
            this.shell.musicController.addSfx('dock-coins')
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
