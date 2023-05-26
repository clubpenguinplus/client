import BaseContainer from '@scenes/base/BaseContainer'

export default class BookStamp extends BaseContainer {
    constructor(scene, x, y, id) {
        super(scene, x ?? 100, y ?? 100)
        this.id = id
        this.scene = scene

        if (!this.scene.textures.exists(`stamps/${id}`)) {
            this.shell.events.once(`textureLoaded:stamps/${id}`, () => {
                this.addStamp()
            })
            this.scene.stampLoader.loadStamp(id)
        } else {
            this.addStamp()
        }
    }

    addStamp() {
        // shadow
        const shadow = this.scene.add.image(4, 5, `stamps/${this.id}`)
        shadow.alpha = this.scene.stampsEarned.includes(this.id) ? 0.2 : 0.1
        shadow.tintFill = true
        shadow.tintTopLeft = 0
        shadow.tintTopRight = 0
        shadow.tintBottomLeft = 0
        shadow.tintBottomRight = 0
        this.add(shadow)

        // stamp
        const stamp = this.scene.add.image(0, 0, `stamps/${this.id}`)
        this.add(stamp)

        if (!this.scene.stampsEarned.includes(this.id)) {
            // locked
            const locked = this.scene.add.image(0, 0, `stamps/${this.id}`)
            locked.alpha = 0.7
            locked.tintFill = true
            this.add(locked)

            this.locked = locked
        }

        this.shadow = shadow
        this.stamp = stamp
    }
}
