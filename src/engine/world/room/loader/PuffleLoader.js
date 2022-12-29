import BaseLoader from '@engine/loaders/BaseLoader'

export default class PuffleLoader extends BaseLoader {
    constructor(puffle, room) {
        super(room)
        this.puffle = puffle
        let suffix = '/client/media/puffles/'
        this.baseURL = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`
        this.keyPrefix = 'puffle_'
    }

    loadPuffle(puffle) {
        let mainKey = this.getKey(puffle)

        let interval = setInterval(() => {
            if (this.textureExists(mainKey)) {
                this.onFileComplete(mainKey)
                clearInterval(interval)
            }
        }, 100)

        this.multiatlas(mainKey, `sprites/${puffle}.json`)
        this.start()
    }

    onFileComplete(key) {
        if (!this.textureExists(key)) {
            return
        }

        this.puffle.loadPuffle()
    }
}
