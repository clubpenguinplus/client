import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class DojoExt extends RoomScene {
    constructor() {
        super('DojoExt')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            shack: () => this.triggerRoom(807, 750, 400),
            dojo: () => this.triggerRoom(320, 760, 800)
        }

        this.music = 507

        this.loadSfx = ['dojoext-dooropen', 'dojoext-doorclose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dojoext-pack', 'client/media/rooms/dojoext/dojoext-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(762, 459, 'dojoext', 'bg')

        // fireanim0001
        const fireanim0001 = this.add.sprite(63, 147, 'dojoext', 'fireanim0001')
        fireanim0001.setOrigin(0.5, 0.5004580154109345)

        // waterfall0001
        const waterfall0001 = this.add.sprite(320, 358, 'dojoext', 'waterfall0001')

        // abovewaterfall
        this.add.image(856, 542, 'dojoext', 'abovewaterfall')

        // door0001
        const door0001 = this.add.image(779, 502, 'dojoext', 'door')

        // dojo
        this.add.image(667, 488, 'dojoext', 'dojo')

        // tree_bottom_lefter
        this.add.image(1374, 692, 'dojoext', 'tree-bottom-lefter')

        // tree_bottomleft
        this.add.image(1303, 787, 'dojoext', 'tree-bottomleft')

        // stoneleft
        const stoneleft = this.add.image(471.7999267578125, 862.9704922274007, 'dojoext', 'stoneleft')
        stoneleft.setOrigin(0.52893583911881, 0.5612652611477137)

        // stoneright
        const stoneright = this.add.image(1073.200439453125, 858.0861117100638, 'dojoext', 'stoneright')
        stoneright.setOrigin(0.3412469526944675, 0.5597417256679151)

        // foreground
        this.add.image(1498, 888, 'dojoext', 'foreground')

        // front
        this.add.image(68.5, 307, 'dojoext', 'front')

        // card
        const card = this.add.image(1434, 895, 'dojoext', 'card')
        card.visible = false

        // lists
        const sort = [stoneleft, stoneright]

        // fireanim0001 (components)
        const fireanim0001Animation = new Animation(fireanim0001)
        fireanim0001Animation.key = 'fireanim'
        fireanim0001Animation.end = 96

        // waterfall0001 (components)
        const waterfall0001Animation = new Animation(waterfall0001)
        waterfall0001Animation.key = 'waterfall'
        waterfall0001Animation.end = 24

        // door0001 (components)
        const door0001Button = new Button(door0001)
        door0001Button.hoverCallback = () => this.shell.musicController.addSfx('dojoext-dooropen')
        door0001Button.hoverOutCallback = () => this.shell.musicController.addSfx('dojoext-doorclose')
        new MoveTo(door0001)

        // card (components)
        const cardButton = new Button(card)

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
