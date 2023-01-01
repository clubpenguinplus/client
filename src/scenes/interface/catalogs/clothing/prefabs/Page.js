import BaseContainer from '@scenes/base/BaseContainer'

export default class Page extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)
    }

    get releaseDate() {
        return this.scene.releaseDate || Date.now()
    }

    buy(item) {
        this.scene.buy(item)
    }

    close() {
        this.scene.close()
    }

    nextPage() {
        this.scene.nextPage()
    }

    prevPage() {
        this.scene.prevPage()
    }
}
