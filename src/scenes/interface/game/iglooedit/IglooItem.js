// You can write more code here

/* START OF COMPILED CODE */

export default class IglooItem extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // bg
        const bg = scene.add.image(0, 0, 'iglooedit-new', 'item-bg')
        this.add(bg)

        // quantity
        const quantity = scene.add.image(38, -38, 'iglooedit-new', 'item-amount')
        this.add(quantity)

        this.quantity = quantity

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    quantity

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
