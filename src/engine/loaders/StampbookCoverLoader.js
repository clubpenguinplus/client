import BaseLoader from './BaseLoader'

export default class StampbookCoverLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/interface/game/stampbook/pattern/'
        this.baseURL = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`
        this.keyPrefix = 'stampbook-'
    }

    loadTexture(color, pattern) {
        let texture = `color${color}-pattern${pattern}`
        let key = this.getKey(texture)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key)
            })
        ) {
            return
        }

        this.image(key, `${color}/${pattern}.webp`)
        this.start()
    }

    onFileComplete(key) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
