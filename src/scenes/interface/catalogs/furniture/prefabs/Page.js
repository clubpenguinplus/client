import BaseContainer from '@scenes/base/BaseContainer'

export default class Page extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)
    }

    get releaseDate() {
        return this.scene.releaseDate || Date.now()
    }

    buyIgloo(id) {
        this.scene.buyIgloo(id)
    }

    buyLocation(id) {
        this.scene.buyLocation(id)
    }

    buyFlooring(id) {
        this.scene.buyFlooring(id)
    }

    buyFurniture(id) {
        this.scene.buyFurniture(id)
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
