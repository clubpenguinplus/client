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

        let interval = setInterval(() => {
            if (this.textureExists(key)) {
                this.onFileComplete(key)
                clearInterval(interval)
            }
        }, 100)

        this.multiatlas(key, `${animation}/${puffle}.json`, animation)
        this.start()
    }

    onFileComplete(key) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
