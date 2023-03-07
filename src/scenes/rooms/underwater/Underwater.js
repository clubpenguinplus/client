import RoomScene from '../RoomScene'

import {Animation, Button, MoveTo, SimpleButton, Zone} from '@components/components'
/* START OF COMPILED CODE */

export default class Underwater extends RoomScene {
    constructor() {
        super('Underwater')

        /** @type {Phaser.GameObjects.Sprite} */
        this.mosskey
        /** @type {Phaser.GameObjects.Container} */
        this.fish
        /** @type {Phaser.GameObjects.Sprite} */
        this.littlefishone
        /** @type {Phaser.GameObjects.Sprite} */
        this.littlefishtwo
        /** @type {Phaser.GameObjects.Sprite} */
        this.littlefishthree
        /** @type {Phaser.GameObjects.Sprite} */
        this.littlefishfour
        /** @type {Phaser.GameObjects.Sprite} */
        this.jellyfish
        /** @type {Phaser.GameObjects.Sprite} */
        this.fluffy
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            lake: () => this.triggerRoom(814, 1288, 700),
            mosskey: () => this.interface.prompt.showItem(7016),
        }

        this.music = 671
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('underwater-pack', 'client/media/rooms/underwater/underwater-pack.json')
    }

    /** @returns {void} */
    _create() {
        // ocean
        this.add.image(760, 112, 'underwater', 'ocean')

        // underwaterbg
        this.add.image(760, 531, 'underwater', 'underwaterbg')

        // rightcoral
        const rightcoral = this.add.image(952.3865259094139, 683.1115202825994, 'underwater', 'rightcoral')
        rightcoral.setOrigin(0.30691385093641804, 0.8131191228451875)

        // leftcoralback
        const leftcoralback = this.add.image(132.7248733286268, 603.1269000705977, 'underwater', 'leftcoralback')
        leftcoralback.setOrigin(0.495259752151029, 0.5675862193307338)

        // leftcoral
        const leftcoral = this.add.image(330.43721856118515, 658.4697350358521, 'underwater', 'leftcoral')
        leftcoral.setOrigin(0.4666726716556185, 0.6950122352347599)

        // wheel
        const wheel = this.add.image(366.80198929149793, 738.8831828663967, 'underwater', 'wheel')
        wheel.setOrigin(0.545650934842268, 0.5730414957476291)

        // leftkelp
        const leftkelp = this.add.image(84, 657, 'underwater', 'leftkelp')

        // frontshell
        const frontshell = this.add.image(1330.0090214034904, 586.2091458315642, 'underwater', 'frontshell')
        frontshell.setOrigin(0.6205762029902259, 0.32158545259472027)

        // backshell
        const backshell = this.add.image(1424.7209168640634, 652.7257311224907, 'underwater', 'backshell')
        backshell.setOrigin(0.4804816480003773, 0.7160337124852396)

        // anchor
        const anchor = this.add.image(1339.8617648265122, 787.6161638493251, 'underwater', 'anchor')
        anchor.setOrigin(0.3109515286038619, 0.7521166649915462)

        // rightkelp
        const rightkelp = this.add.image(1468, 455, 'underwater', 'rightkelp')

        // underwaterfg
        const underwaterfg = this.add.image(-20, 981, 'underwater', 'underwaterfg')
        underwaterfg.setOrigin(0, 1)

        // mosskey
        const mosskey = this.add.sprite(910, 906, 'underwater', 'mosskey0001')
        mosskey.setOrigin(0.5296327841283616, 3.102879686950645)

        // fish
        const fish = this.add.container(1177, 173)

        // littlefishone
        const littlefishone = this.add.sprite(-12.215708714301627, 6.337241188179036, 'underwater', 'littlefishone0001')
        fish.add(littlefishone)

        // littlefishtwo
        const littlefishtwo = this.add.sprite(-26.215708714301627, -8.662758811820964, 'underwater', 'littlefishtwo0001')
        fish.add(littlefishtwo)

        // littlefishthree
        const littlefishthree = this.add.sprite(11.784291285698373, -9.662758811820964, 'underwater', 'littlefishthree0001')
        fish.add(littlefishthree)

        // littlefishfour
        const littlefishfour = this.add.sprite(27.784291285698373, 7.337241188179036, 'underwater', 'littlefishfour0001')
        fish.add(littlefishfour)

        // jellyfish
        const jellyfish = this.add.sprite(-77, 768, 'underwater', 'jellyfish0001')
        jellyfish.setOrigin(0.5, 5)

        // fluffy
        const fluffy = this.add.sprite(-74, 112, 'underwater', 'fluffy0001')

        // lists
        const sort = [underwaterfg, leftcoral, leftcoralback, wheel, leftkelp, rightcoral, frontshell, backshell, rightkelp, anchor, mosskey, jellyfish]

        this.mosskey = mosskey
        this.fish = fish
        this.littlefishone = littlefishone
        this.littlefishtwo = littlefishtwo
        this.littlefishthree = littlefishthree
        this.littlefishfour = littlefishfour
        this.jellyfish = jellyfish
        this.fluffy = fluffy
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.jellyfish.play('underwater-jellyfish')
        this.fluffy.play('underwater-fluffy')
        this.littlefishone.play('underwater-littlefishone')
        this.littlefishtwo.play('underwater-littlefishtwo')
        this.littlefishthree.play('underwater-littlefishthree')
        this.littlefishfour.play('underwater-littlefishfour')
        this.jellyfishTween()
        this.fluffyTween()
        this.jellyFishSideTween()
        this.fluffySideTween()
        this.fishSideTween()
    }

    jellyfishTween() {
        let tween = this.tweens.add({
            targets: this.jellyfish,
            y: 748,
            duration: 2000,
            delay: 500,
            onComplete: () => {
                this.onJellyfishTween()
            },
        })
    }

    jellyFishSideTween() {
        let tween = this.tweens.add({
            targets: this.jellyfish,
            x: 1597,
            duration: 18000,
            delay: 4000,
            onComplete: () => {
                this.onJellyfishSideTween()
            },
        })
    }

    onJellyfishSideTween() {
        this.jellyfish.x = -77
        this.jellyFishSideTween()
    }

    onJellyfishTween() {
        let tween = this.tweens.add({
            targets: this.jellyfish,
            y: 768,
            duration: 2000,
            delay: 500,
            onComplete: () => {
                this.jellyfishTween()
            },
        })
    }

    fluffyTween() {
        let tween = this.tweens.add({
            targets: this.fluffy,
            y: 150,
            duration: 3000,
            delay: 500,
            onComplete: () => {
                this.onFluffyTween()
            },
        })
    }

    fluffySideTween() {
        let tween = this.tweens.add({
            targets: this.fluffy,
            x: 1597,
            duration: 10000,
            delay: 10000,
            onComplete: () => {
                this.onFluffySideTween()
            },
        })
    }

    onFluffySideTween() {
        this.fluffy.x = -77
        this.fluffySideTween()
    }

    onFluffyTween() {
        let tween = this.tweens.add({
            targets: this.fluffy,
            y: 112,
            duration: 3000,
            delay: 500,
            onComplete: () => {
                this.fluffyTween()
            },
        })
    }

    fishSideTween() {
        let tween = this.tweens.add({
            targets: this.fish,
            x: -77,
            duration: 25000,
            delay: 0,
            onComplete: () => {
                this.onFishSideTween()
            },
        })
    }

    onFishSideTween() {
        this.fish.x = 1177
        this.fishSideTween()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
