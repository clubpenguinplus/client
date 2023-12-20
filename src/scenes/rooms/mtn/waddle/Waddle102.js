/* START OF COMPILED CODE */

import BaseContainer from '../../../base/BaseContainer'
import SeatPoint from '../../../shared_prefabs/seat/SeatPoint'
import MtnSeat from '../MtnSeat'
import ShowHint from '../../../components/ShowHint'
import MoveTo from '../../../components/MoveTo'
import SimpleButton from '../../../components/SimpleButton'
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle102 extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        /** @type {SeatPoint} */
        this.done1
        /** @type {SeatPoint} */
        this.done0
        /** @type {MtnSeat} */
        this.seat1
        /** @type {MtnSeat} */
        this.seat0

        // barrier
        const barrier = scene.add.image(44, 13, 'mtn', 'barrier_6')
        barrier.setOrigin(0.48, 0.47761194029850745)
        barrier.tintTopLeft = 10396607
        barrier.tintTopRight = 10396607
        barrier.tintBottomLeft = 10396607
        barrier.tintBottomRight = 10396607
        this.add(barrier)

        // done1
        const done1 = new SeatPoint(scene, 105, -113)
        done1.visible = false
        this.add(done1)

        // done0
        const done0 = new SeatPoint(scene, -2, -113)
        done0.visible = false
        this.add(done0)

        // seat1
        const seat1 = new MtnSeat(scene, 101, 3)
        seat1.visible = false
        this.add(seat1)

        // seat0
        const seat0 = new MtnSeat(scene, 0, 0)
        seat0.visible = false
        this.add(seat0)

        // zone
        const zone = scene.add.rectangle(51, 14, 188, 88)
        zone.alpha = 0.5
        zone.fillColor = 65280
        this.add(zone)

        // seat1 (prefab fields)
        seat1.donePoint = done1
        seat1.direction = 'sw'

        // seat0 (prefab fields)
        seat0.donePoint = done0
        seat0.direction = 'sw'

        // zone (components)
        const zoneShowHint = new ShowHint(zone)
        zoneShowHint.text = 'sled_hint'
        const zoneMoveTo = new MoveTo(zone)
        zoneMoveTo.x = 892
        zoneMoveTo.y = 672
        new SimpleButton(zone)

        this.done1 = done1
        this.done0 = done0
        this.seat1 = seat1
        this.seat0 = seat0

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
