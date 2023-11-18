/* START OF COMPILED CODE */

export default class MtnSeat extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || 'mtn', frame ?? 'seat')

        /** @type {number} */
        this.sitFrame = 17
        /** @type {Phaser.GameObjects.GameObject} */
        this.donePoint
        /** @type {string} */
        this.direction = 'sw'

        this.setOrigin(0.504950495049505, 0.37662337662337664)

        /* START-USER-CTR-CODE */
        setTimeout(() => this.setDirFrame, 10)
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    setDirFrame() {
        this.setFrame(`seat_${this.direction}`)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
