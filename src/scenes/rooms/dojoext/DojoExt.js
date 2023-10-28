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

        this.music = 1166

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
        this.add.image(760, 480, 'dojoext', 'bg')

        // fireanim0001
        const fireanim0001 = this.add.sprite(60, 138, 'dojoext', 'fireanim0001')
        fireanim0001.setOrigin(0.5, 0.5004580154109345)
        fireanim0001.tintTopLeft = 11579069
        fireanim0001.tintTopRight = 11579069
        fireanim0001.tintBottomLeft = 11579069
        fireanim0001.tintBottomRight = 11579069

        // waterfall0001
        const waterfall0001 = this.add.sprite(317, 349, 'dojoext', 'waterfall0001')
        waterfall0001.tintTopLeft = 11579069
        waterfall0001.tintTopRight = 11579069
        waterfall0001.tintBottomLeft = 11579069
        waterfall0001.tintBottomRight = 11579069

        // abovewaterfall
        const abovewaterfall = this.add.image(853, 533, 'dojoext', 'abovewaterfall')
        abovewaterfall.tintTopLeft = 11579069
        abovewaterfall.tintTopRight = 11579069
        abovewaterfall.tintBottomLeft = 11579069
        abovewaterfall.tintBottomRight = 11579069

        // door0001
        const door0001 = this.add.image(776, 493, 'dojoext', 'door')
        door0001.tintTopLeft = 11579069
        door0001.tintTopRight = 11579069
        door0001.tintBottomLeft = 11579069
        door0001.tintBottomRight = 11579069

        // dojo
        const dojo = this.add.image(664, 479, 'dojoext', 'dojo')
        dojo.tintTopLeft = 11579069
        dojo.tintTopRight = 11579069
        dojo.tintBottomLeft = 11579069
        dojo.tintBottomRight = 11579069

        // tree_bottom_lefter
        const tree_bottom_lefter = this.add.image(1371, 683, 'dojoext', 'tree-bottom-lefter')
        tree_bottom_lefter.tintTopLeft = 11579069
        tree_bottom_lefter.tintTopRight = 11579069
        tree_bottom_lefter.tintBottomLeft = 11579069
        tree_bottom_lefter.tintBottomRight = 11579069

        // tree_bottomleft
        const tree_bottomleft = this.add.image(1300, 778, 'dojoext', 'tree-bottomleft')
        tree_bottomleft.tintTopLeft = 11579069
        tree_bottomleft.tintTopRight = 11579069
        tree_bottomleft.tintBottomLeft = 11579069
        tree_bottomleft.tintBottomRight = 11579069

        // stoneleft
        const stoneleft = this.add.image(468.7999267578125, 853.9704922274007, 'dojoext', 'stoneleft')
        stoneleft.setOrigin(0.52893583911881, 0.5612652611477137)
        stoneleft.tintTopLeft = 11579069
        stoneleft.tintTopRight = 11579069
        stoneleft.tintBottomLeft = 11579069
        stoneleft.tintBottomRight = 11579069

        // stoneright
        const stoneright = this.add.image(1070.200439453125, 849.0861117100638, 'dojoext', 'stoneright')
        stoneright.setOrigin(0.3412469526944675, 0.5597417256679151)
        stoneright.tintTopLeft = 11579069
        stoneright.tintTopRight = 11579069
        stoneright.tintBottomLeft = 11579069
        stoneright.tintBottomRight = 11579069

        // foreground
        const foreground = this.add.image(1495, 879, 'dojoext', 'foreground')
        foreground.tintTopLeft = 11579069
        foreground.tintTopRight = 11579069
        foreground.tintBottomLeft = 11579069
        foreground.tintBottomRight = 11579069

        // front
        const front = this.add.image(65.5, 298, 'dojoext', 'front')
        front.tintTopLeft = 11579069
        front.tintTopRight = 11579069
        front.tintBottomLeft = 11579069
        front.tintBottomRight = 11579069

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
        new Button(card)

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
