import BaseScene from '@scenes/base/BaseScene'

import MetricsManager from './metrics/MetricsManager'
import PromptController from './prompt/PromptController'
import {SimpleButton} from '@components/components'

export default class InterfaceController extends BaseScene {
    metricsManager = new MetricsManager()

    create() {
        super.create()
        this.prompt = new PromptController(this)

        // External interface scenes
        this.interfaces = this.crumbs.scenes.interfaces
        this.loadedScenes = []
    }

    get loading() {
        return this.scene.get('Load')
    }

    get main() {
        return this.scene.get('Main')
    }

    get iglooEdit() {
        return this.scene.get('IglooEdit')
    }

    showLoading(text = '', showBar = false, isLogo = false) {
        this.hideInterface()

        if (!this.scene.isActive('Load')) {
            if (this.scene.isSleeping('Load')) {
                this.scene.wake('Load', {text: text, showBar: showBar, isLogo: isLogo})
            } else {
                this.scene.launch('Load', {text: text, showBar: showBar, isLogo: isLogo})
            }
        }

        this.bringToTop('Load')
    }

    hideLoading() {
        if (this.loading && this.loading.scene.isActive()) {
            this.scene.sleep('Load')
        }
    }

    showInterface() {
        if (this.scene.isSleeping('Main')) {
            this.scene.wake('Main')
        } else if (!this.scene.isActive('Main')) {
            this.scene.launch('Main')
        }

        this.bringToTop('Main')
        this.bringToTop('Load')
    }

    hideInterface(clearChat = true) {
        if (this.main && this.main.scene.isActive()) {
            this.scene.sleep('Main', {clearChat: clearChat})

            // Stop external scenes
            this.stopExternals()
        }
    }

    showIglooEdit() {
        if (this.scene.isSleeping('IglooEdit')) {
            this.scene.wake('IglooEdit')
        } else if (!this.scene.isActive('IglooEdit')) {
            this.scene.launch('IglooEdit')
        }

        this.bringToTop('IglooEdit')
    }

    bringToTop(key) {
        this.scene.bringToTop(key)

        // Keeps InterfaceController scene always on top, for prompts
        this.scene.bringToTop()

        this.input.setDefaultCursor('default')
    }

    hideIglooEdit() {
        if (this.iglooEdit && this.iglooEdit.scene.isActive()) {
            this.iglooEdit.closeChooseIgloo()
            this.scene.sleep('IglooEdit')
        }
    }

    showEmoteBalloon(id, emote) {
        this.main.balloonFactory.showEmoteBalloon(id, emote)
    }

    showTextBalloon(id, text, filtered = false) {
        this.main.balloonFactory.showTextBalloon(id, text, filtered)
    }

    showCard(id, refresh = false) {
        this.main.playerCard.showCard(id, refresh)
    }

    addPin() {
        if (this.pin) return (this.pin.visible = true)

        let pin = this.add.sprite(this.crumbs.pin.x ? this.crumbs.pin.x : 960, this.crumbs.pin.y ? this.crumbs.pin.y : 480, 'pin')
        this.main.pinContainer.add(pin)
        this.pin = pin

        this.pin.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true,
        })

        this.pin.on('pointerup', () => this.interface.prompt.showItem(this.crumbs.pin.id))
    }

    destroyPin() {
        if (this.pin) this.pin.visible = false
    }

    /**
     * Loads an external interface scene, e.g catalog, newspaper, telescope.
     *
     * @param {string} key - Scene key
     */
    loadExternal(key) {
        if (!(key in this.interfaces) || this.prompt.loading.visible) {
            return
        }

        if (!(key in this.scene.manager.keys)) {
            // Create scene
            this.scene.add(key, this.interfaces[key], true)
            return this.loadedScenes.push(key)
        }

        if (!this.scene.isVisible(key)) {
            // Scene stopped
            this.scene.launch(key)
        } else {
            // Scene still preloading
            this.scene.get(key).events.emit('showloading')
        }

        this.bringToTop(key)
    }

    /**
     * Stop external interface scenes, called when hiding interface on room change.
     */
    stopExternals() {
        for (let key of this.loadedScenes) {
            let scene = this.scene.get(key)

            if (scene.scene.isActive()) {
                scene.scene.stop()
            } else if (scene.scene.isVisible()) {
                // Scene still preloading
                scene.events.once('create', () => scene.scene.stop())
            }
        }
    }

    /**
     * Refreshes friend list and player card to reflect changes from the server.
     */
    updateFriends() {
        if (this.main.scene.isActive()) {
            this.main.playerCard.updateButtons()
            this.main.friend.showPage()
            this.main.friendSmall.showPage()
        }
    }

    updateIgnoreList() {
        if (this.main.scene.isActive()) {
            this.main.ignore.showPage()
        }
    }

    refreshPlayerCard() {
        if (this.main.playerCard.visible && this.main.playerCard.id == this.shell.client.id) {
            this.showCard(this.shell.client.id, true)
        }
    }

    updateCatalogCoins(coins) {
        if (!this.book) return
        this.book.setCoins(coins)
    }

    setStatistics(args) {
        if (!this.book) return
        this.book.setStatistics(args)
    }

    showPuffle(color) {
        if (color == 0) {
            this.main.puffle_icon.setFrame('puffle-icon-disabled')
            this.main.puffle_button_disabled.visible = true
            this.main.puffle_button.visible = false
        } else {
            this.main.puffle_icon.setFrame(`puffle-icon-${color}`)
            this.main.puffle_button_disabled.visible = false
            this.main.puffle_button.visible = true
        }
    }

    scaleToFixedSize(text, verticallyCenter = true, maxFontSize = 0) {
        const maxWidth = text.style.fixedWidth
        const maxHeight = text.style.fixedHeight

        if (maxWidth == 0 && maxHeight == 0) {
            return console.error('[InterfaceController] Text has no fixed width or height', text)
        } else if (maxWidth == 0) {
            console.warn('[InterfaceController] Text has no fixed width. May cause incorrect scaling', text)
        } else if (maxHeight == 0) {
            console.warn('[InterfaceController] Text has no fixed height. May cause incorrect scaling', text)
        } else if (text.originX != 0.5 || text.originY != 0.5) {
            console.warn('[InterfaceController] Text is not centered. May cause incorrect alignment', text)
        }

        text.setStyle({fixedWidth: 0, fixedHeight: 0})
        text.setPadding({top: 0, bottom: 0})

        // Maximise font size
        while ((maxWidth == 0 || text.width < maxWidth) && (maxHeight == 0 || text.height < maxHeight) && (maxFontSize == 0 || parseInt(text.style.fontSize) < maxFontSize)) {
            text.setStyle({fontSize: parseInt(text.style.fontSize) + 1 + 'px'})
        }

        // Decrease font size until it fits
        while ((maxWidth != 0 && text.width > maxWidth) || (maxHeight != 0 && text.height > maxHeight)) {
            text.setStyle({fontSize: parseInt(text.style.fontSize) - 1 + 'px'})
        }

        if (text.height < maxHeight && verticallyCenter) {
            text.setPadding({top: (maxHeight - text.height) / 2, bottom: (maxHeight - text.height) / 2})
        }

        text.setStyle({fixedWidth: maxWidth, fixedHeight: maxHeight})
    }

    verticallyCenterText(text) {
        const maxHeight = text.style.fixedHeight
        text.setStyle({fixedHeight: 0})
        text.setPadding({top: 0, bottom: 0})

        if (maxHeight == 0) {
            console.error('[InterfaceController] Text has no fixed height. Cannot vertically center', text)
        }

        if (text.height < maxHeight) {
            text.setPadding({top: (maxHeight - text.height) / 2, bottom: (maxHeight - text.height) / 2})
        }

        text.setStyle({fixedHeight: maxHeight})
    }
}
