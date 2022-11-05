import ErrorPrompt from './ErrorPrompt'
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt'
import LoadingPrompt from '@scenes/interface/prompts/LoadingPrompt'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'
import CoinsPrompt from '@scenes/interface/prompts/CoinsPrompt'
import WarnPrompt from '@scenes/interface/prompts/WarnPrompt'

export default class PromptController {
    constructor(_interface) {
        this.interface = _interface

        this.error = new ErrorPrompt(_interface, 760, 480)
        this.item = new ItemPrompt(_interface, 760, 480)
        this.loading = new LoadingPrompt(_interface, 760, 480)
        this.window = new WindowPrompt(_interface, 760, 480)
        this.coins = new CoinsPrompt(_interface, 760, 480)
        this.warn = new WarnPrompt(_interface, 760, 480)

        _interface.add.existing(this.error)
        _interface.add.existing(this.item)
        _interface.add.existing(this.loading)
        _interface.add.existing(this.window)
        _interface.add.existing(this.coins)
        _interface.add.existing(this.warn)
    }

    showError(
        text,
        buttonText = 'Okay',
        callback = () => {
            this.error.visible = false
            this.error.disconnectOverwrite = false
        },
        disconnectOverwrite
    ) {
        this.error.disconnectOverwrite = disconnectOverwrite ? true : false
        this.error.show(text, buttonText, callback)
        this.setCursor()

        for (let i of ['item', 'loading', 'window', 'coins']) {
            this[i].visible = false
        }
    }

    showItem(item) {
        this.item.showItem(item)
        this.setCursor()
    }

    showFurniture(item) {
        this.item.showFurniture(item)
        this.setCursor()
    }

    showLoading(scene, progress = 0) {
        this.loading.show(scene, progress)
        this.setCursor()
    }

    showWindow(text, buttonLayout = 'single', callback = () => {}, noCallback = () => (this.window.visible = false)) {
        this.window.show(text, buttonLayout, callback, noCallback)
        this.setCursor()
    }

    showCoins(game, coins) {
        this.coins.show(game, coins)
        this.setCursor()
    }

    showWarn(type, reason) {
        switch (type) {
            case 'ban':
                this.warn.showBan(reason)
                break
            case 'warn':
                this.warn.showWarn(reason)
                break
            case 'kick':
                this.warn.showWarn('k')
                break
        }
    }

    hideAll() {
        this.loading.visible = false
    }

    setCursor() {
        this.interface.input.setDefaultCursor('default')
    }
}
