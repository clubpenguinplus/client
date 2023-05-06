import Closeup from './Closeup.js'
import {LocalisedSprite, Button, Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class Elevator extends Closeup {
    constructor() {
        super('Elevator')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('elevator-pack', 'client/media/interface/closeups/elevator/elevator-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(760, 480, 'elevator', 'bg')

        // closeBtn
        const closeBtn = this.add.image(1481, 47, 'elevator', 'closeBtn')

        // text
        const text = this.add.image(704, 457, 'elevator', 'text-en')

        // roofBtn
        const roofBtn = this.add.image(755, 320, 'elevator', 'roofBtn')

        // lobbyBtn
        const lobbyBtn = this.add.image(755, 760, 'elevator', 'lobbyBtn')

        // gymBtn
        const gymBtn = this.add.image(755, 540, 'elevator', 'gymBtn')

        // bg (components)
        new Interactive(bg)

        // closeBtn (components)
        const closeBtnButton = new Button(closeBtn)
        closeBtnButton.callback = () => this.stop()

        // text (components)
        new LocalisedSprite(text)

        // roofBtn (components)
        const roofBtnButton = new Button(roofBtn)
        roofBtnButton.callback = () => this.joinRoom(432)

        // lobbyBtn (components)
        const lobbyBtnButton = new Button(lobbyBtn)
        lobbyBtnButton.callback = () => this.joinRoom(430)

        // gymBtn (components)
        const gymBtnButton = new Button(gymBtn)
        gymBtnButton.callback = () => this.joinRoom(431)

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    joinRoom(id) {
        this.shell.musicController.addSfx('elevator-down')
        this.stop()
        if (this.shell.room.id == id) return
        this.shell.room.triggerRoom(id, 270, 550)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
