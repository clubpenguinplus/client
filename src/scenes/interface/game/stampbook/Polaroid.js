import BaseContainer from '@scenes/base/BaseContainer'

export default class Polaroid extends BaseContainer {
    constructor(scene, x, y, id, penguinColor) {
        super(scene, x ?? 100, y ?? 100)
        this.id = id
        this.scene = scene

        if (!this.scene.textures.exists(`polaroid/${id}`)) {
            this.shell.events.once(`textureLoaded:polaroid/${id}`, () => {
                this.addPolaroid(penguinColor)
            })
            this.scene.polaroidLoader.loadPolaroid(id)
        } else {
            this.addPolaroid(penguinColor)
        }
    }

    addPolaroid(penguinColor) {
        let frames = this.scene.textures.get(`polaroid/${this.id}`).getFrameNames()
        if (frames.includes('background')) {
            this.background = this.scene.add.image(0, 0, `polaroid/${this.id}`, 'background')
            this.add(this.background)
        }
        if (frames.includes('bodyBG')) {
            this.bodyBG = this.scene.add.image(0, 0, `polaroid/${this.id}`, 'bodyBG')
            this.add(this.bodyBG)
        }
        if (frames.includes('body')) {
            this.body = this.scene.add.image(0, 0, `polaroid/${this.id}`, 'body')
            this.body.tintFill = true
            this.body.tintTopLeft = this.crumbs.colors[penguinColor]
            this.body.tintTopRight = this.crumbs.colors[penguinColor]
            this.body.tintBottomLeft = this.crumbs.colors[penguinColor]
            this.body.tintBottomRight = this.crumbs.colors[penguinColor]
            this.add(this.body)
        }
        if (frames.includes('bodyFG')) {
            this.bodyFG = this.scene.add.image(0, 0, `polaroid/${this.id}`, 'bodyFG')
            this.add(this.bodyFG)
        }
        if (frames.includes('foreground')) {
            this.foreground = this.scene.add.image(0, 0, `polaroid/${this.id}`, 'foreground')
            this.add(this.foreground)
        }
    }
}
