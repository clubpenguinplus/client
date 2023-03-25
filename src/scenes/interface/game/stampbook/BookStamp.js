import BaseContainer from '@scenes/base/BaseContainer'
import StampLoader from '@engine/loaders/StampLoader'

export default class BookStamp extends BaseContainer {
    constructor(scene, x, y, id) {
        super(scene, x ?? 100, y ?? 100)
        this.id = id
        this.scene = scene
        this.scene2 = scene
        // something was making this.scene undefined and i don't know what, so i'm just doing this :)

        this.loader = new StampLoader(this.scene, this)

        if (!this.scene2.textures.exists(`stamps/${id}`)) {
            this.loader.loadStamp(id)
        } else {
            this.addStamp()
        }
    }

    addStamp() {
        // shadow
        const shadow = this.scene2.add.image(4, 5, `stamps/${this.id}`)
        shadow.alpha = this.scene2.stampsEarned.includes(this.id) ? 0.2 : 0.1
        shadow.tintFill = true
        shadow.tintTopLeft = 0
        shadow.tintTopRight = 0
        shadow.tintBottomLeft = 0
        shadow.tintBottomRight = 0
        this.add(shadow)

        // stamp
        const stamp = this.scene2.add.image(0, 0, `stamps/${this.id}`)
        this.add(stamp)

        if (!this.scene2.stampsEarned.includes(this.id)) {
            // locked
            const locked = this.scene2.add.image(0, 0, `stamps/${this.id}`)
            locked.alpha = 0.7
            locked.tintFill = true
            this.add(locked)

            this.locked = locked
        }

        this.shadow = shadow
        this.stamp = stamp
    }
}
