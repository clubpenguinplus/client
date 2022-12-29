import BaseLoader from './BaseLoader'

export default class PaperItemLoader extends BaseLoader {
    constructor(scene, initiator) {
        super(scene)
        this.scene = scene
        this.initiator = initiator

        let suffix = '/client/media/clothing/'
        this.baseURL = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`
        this.keyPrefix = 'clothing/'
    }

    loadItem(item) {
        let key = this.getKey(stamp)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.image(key, `${stamp}.webp`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.textureExists(key)) {
            return
        }

        this.initiator.setItem()
    }
}
