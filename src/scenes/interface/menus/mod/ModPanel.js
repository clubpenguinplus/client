import BaseScene from '@scenes/base/BaseScene'

import Moderator from '@scenes/interface/game/moderator/Moderator'
import ModActions from '@scenes/interface/game/modactions/ModActions'
import WireTap from '@scenes/interface/game/wiretap/WireTap'
import ModChatLog from '@scenes/interface/game/modchatlog/ModChatLog'

import {Interactive} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class ModPanel extends BaseScene {
    constructor() {
        super('ModPanel')

        /** @type {Moderator} */
        this.moderator
        /** @type {ModActions} */
        this.modActions
        /** @type {WireTap} */
        this.wiretap

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(760, 480, 'load', 'bg')

        // moderator
        const moderator = new Moderator(this, 359, 480)
        this.add.existing(moderator)

        // modActions
        const modActions = new ModActions(this, 1121, 314)
        this.add.existing(modActions)
        modActions.visible = false

        // wiretap
        const wiretap = new WireTap(this, 1113, 655)
        this.add.existing(wiretap)

        // bg (components)
        new Interactive(bg)

        this.moderator = moderator
        this.modActions = modActions
        this.wiretap = wiretap

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        this._create()
        this.moderator.load()

        this.interface.ModPanel = this
        this.currentDepth = 0
    }

    onSearch() {
        let text = this.search.text

        this.search.clearText()

        this.airtower.sendXt('o#se', text)
    }

    show(widget) {
        this.currentDepth++
        this[widget].depth = this.currentDepth
        this[widget].visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
