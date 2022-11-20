import RoomScene from '@scenes/rooms/RoomScene'

import {Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class BoxDimension extends RoomScene {
    constructor() {
        super('BoxDimension')

        /** @type {Array<any>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            attic: () => this.triggerRoom(221, 940, 700),
        }

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

        // leftboxes0001
        const leftboxes0001 = this.add.sprite(485, 327, 'boxdimension', 'leftboxes0001')

        // portal0001
        const portal0001 = this.add.sprite(1232, 159, 'boxdimension', 'portal0001')

        // aboveportal
        this.add.image(1193, 237, 'boxdimension', 'aboveportal')

        // rightbox0001
        const rightbox0001 = this.add.sprite(1513, 424, 'boxdimension', 'rightbox0001')

        // bg_1
        this.add.image(765, 585.5, 'boxdimension', 'boxes')

        // frontboxes0001
        const frontboxes0001 = this.add.sprite(753, 811, 'boxdimension', 'frontboxes0001')

        // lists
        const sort = []

        // leftboxes0001 (components)
        const leftboxes0001Animation = new Animation(leftboxes0001)
        leftboxes0001Animation.key = 'leftboxes'
        leftboxes0001Animation.end = 110

        // portal0001 (components)
        const portal0001Animation = new Animation(portal0001)
        portal0001Animation.key = 'portal'
        portal0001Animation.end = 100

        // rightbox0001 (components)
        const rightbox0001Animation = new Animation(rightbox0001)
        rightbox0001Animation.key = 'rightbox'
        rightbox0001Animation.end = 110

        // frontboxes0001 (components)
        const frontboxes0001Animation = new Animation(frontboxes0001)
        frontboxes0001Animation.key = 'frontboxes'
        frontboxes0001Animation.end = 110

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
