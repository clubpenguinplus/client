import BaseLoader from './BaseLoader'

export default class PinLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/clothing/icon/'
        this.baseURL = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`
        this.keyPrefix = 'clothing/icon/'
    }

    loadPin(pin, xpos, ypos, visible) {
        let key = this.getKey(pin)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, pin, xpos, ypos, visible)
            })
        ) {
            return
        }

        this.image(key, `${pin}.webp`)
        this.start()
    }

    onFileComplete(key, pin, xpos, ypos, visible) {
        if (!this.textureExists(key)) {
            return
        }

        this.scene.addPin(pin, xpos, ypos, visible)
    }
}
