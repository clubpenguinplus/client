import BaseLoader from './BaseLoader'

export default class PuffleLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/puffles/'
        this.baseURL = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`
        this.keyPrefix = 'puffles/'
    }

    loadPuffle(animation, puffle) {
        let key = this.getKey(`${animation}/${puffle}`)

        if (
            this.checkComplete('multiatlas', key, () => {
                this.onFileComplete(key)
            })
        ) {
            return
        }

        this.multiatlas({
            key: key,
            atlasURL: `${animation}/${puffle}.json`,
            path: animation
        })
        this.start()
    }

    onFileComplete(key) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
