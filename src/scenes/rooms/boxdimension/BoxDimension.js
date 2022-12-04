import RoomScene from '@scenes/rooms/RoomScene'

import {Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class BoxDimension extends RoomScene {
    constructor() {
        super('BoxDimension')

        /** @type {Phaser.GameObjects.Container} */
        this.leftboxes
        /** @type {Phaser.GameObjects.Container} */
        this.portal
        /** @type {Phaser.GameObjects.Container} */
        this.frontboxes
        /** @type {Array<any>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            attic: () => this.triggerRoom(221, 940, 700),
        }

        this.music = 372

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('boxdimension-pack', 'client/media/rooms/boxdimension/boxdimension-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'boxdimension', 'bg')

        // leftboxes
        const leftboxes = this.add.container(485, 327)

        // portal
        const portal = this.add.container(1232, 159)

        // aboveportal
        this.add.image(1193, 237, 'boxdimension', 'aboveportal')

        // rightbox0001
        const rightbox0001 = this.add.sprite(1513, 424, 'boxdimension', 'rightbox0001')

        // bg_1
        this.add.image(765, 585.5, 'boxdimension', 'boxes')

        // frontboxes
        const frontboxes = this.add.container(753, 811)

        // lists
        const sort = []

        // rightbox0001 (components)
        const rightbox0001Animation = new Animation(rightbox0001)
        rightbox0001Animation.key = 'rightbox'
        rightbox0001Animation.end = 110

        this.leftboxes = leftboxes
        this.portal = portal
        this.frontboxes = frontboxes
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()

        let frontboxes = this.add.video(0, 0, 'boxdimension-frontboxes')
        this.frontboxes.add(frontboxes)
        frontboxes.play(true)

        let leftboxes = this.add.video(0, 0, 'boxdimension-leftboxes')
        this.leftboxes.add(leftboxes)
        leftboxes.play(true)

        let portal = this.add.video(0, 0, 'boxdimension-portal')
        this.portal.add(portal)
        portal.play(true)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
