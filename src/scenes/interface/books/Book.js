import BaseScene from '@scenes/base/BaseScene'

export default class Book extends BaseScene {
    constructor(key) {
        super(key)

        // Current page number
        this.page
        // Array of pages defined in derived class
        this.pages
        // Buttons container defined in derived class
        this.buttons
    }

    init() {
        this.load.on('start', this.showLoading, this)
        this.events.on('showloading', this.showLoading, this)
    }

    showLoading() {
        this.interface.prompt.showLoading(this, this.load.progress)
    }

    create() {
        super.create()

        this.interface.book = this

        // Reset page
        this.page = 0
        this.setPageVisible()
    }

    showPage(page) {
        // Hide current page
        this.setPageVisible(false)

        // Show new page
        this.page = page
        this.setPageVisible()

        // Update button visibility
        this.setButtonsVisible()

        if (this.addPageStamps) this.addPageStamps()
    }

    prevPage() {
        let page = this.page - 1
        if (page < 0) return

        this.showPage(page)
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.pages.length - 1) return

        this.showPage(page)
    }

    setPageVisible(visible = true) {
        if (this.pages[this.page]) this.pages[this.page].visible = visible
    }

    setButtonsVisible() {
        let visible
        // Not visible on first and last page
        if (this.key == 'Stampbook') {
            visible = this.page > 0
        } else {
            visible = this.page > 0 && this.page < this.pages.length - 1
        }

        this.buttons.visible = visible
        if (this.coinsContainerShowThis) {
            this.coinsContainerShowThis.visible = visible
        }
    }

    close() {
        this.scene.stop()
    }

    unimplementedPrompt() {
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError(this.crumbs.getError('54'))
    }
}
