import BaseLoader from './BaseLoader'

export default class IglooCatalogFrontLoader extends BaseLoader {
    constructor(scene, initiator) {
        super(scene)
        this.scene = scene
        this.initiator = initiator

        let suffix = '/client/media/interface/catalogs/furniture/fronts/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/fronts/'
    }

    loadFront(front) {
        let key = this.getKey(front)

        if (this.textureExists(key)) {
            this.onFileComplete(key, front)
            return
        }

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, front)
            })
        ) {
            return
        }

        this.image(key, `${front}.webp`)
        this.start()
    }

    onFileComplete(key, front) {
        if (!this.textureExists(key)) {
            return
        }

        this.initiator.showFront()
    }
}
