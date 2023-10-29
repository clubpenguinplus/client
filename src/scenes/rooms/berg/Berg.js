import RoomScene from '../RoomScene'

import {MoveTo, SimpleButton, ShowHint} from '@components/components'

/* START OF COMPILED CODE */

export default class Berg extends RoomScene {
    constructor() {
        super('Berg')

        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            aqua: () => this.triggerGame('aquagrabber', 916, 'ruffle')
        }
        this.music = 340
        this.loadSfx = ['berg-aquagrabber']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('berg-pack', 'client/media/rooms/berg/berg-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(-18, -18, 'berg', 'bg')
        bg.setOrigin(0, 0)

        // aqua
        const aqua = this.add.sprite(1255, 325, 'berg', 'aqua0001')
        aqua.setOrigin(0.5, 0.4014336917562724)

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua)
        aquaSimpleButton.hoverCallback = () => this.onAquaOver()
        aquaSimpleButton.callback = () => this.onAquaClick()
        aquaSimpleButton.pixelPerfect = true
        new MoveTo(aqua)
        const aquaShowHint = new ShowHint(aqua)
        aquaShowHint.text = 'aquagrabber'

        this.aqua = aqua

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    get aquaFrame() {
        let frame = this.aqua.frame.name
        return parseInt(frame.substr(frame.length - 4))
    }

    create() {
        super.create()

        this.aqua.on('animationcomplete', (animation) => this.onAquaAnimComplete(animation))
        this.aqua.play('berg-aqua_float')
        if (!this.shell.client.stamps.includes(26)) {
            this.bergDrillInterval = setInterval(() => {
                let drilling = 0
                for (let penguin in this.penguins) {
                    if (penguin.specificFrame && penguin.specificFrame == 36) drilling++
                }
                if (drilling >= 30) {
                    this.shell.client.stampEarned(26)
                    clearInterval(this.bergDrillInterval)
                }
            }, 2000)
        }
    }

    onAquaAnimComplete(animation) {
        switch (animation.key) {
            case 'berg-aqua_lights_on':
                this.aqua.play('berg-aqua_lights_float')
                break
            case 'berg-aqua_open':
                this.aqua.play('berg-aqua_float')
                break
            default:
                break
        }
    }

    onAquaOver() {
        let frame = this.aquaFrame
        if (frame <= 81 || frame >= 400) {
            this.aqua.play('berg-aqua_lights_on')
        }
    }

    onAquaClick() {
        let frame = this.aquaFrame
        if (frame <= 180 || frame >= 348) {
            this.aqua.play('berg-aqua_open')
        }
        this.shell.musicController.addSfx('berg-aquagrabber')
    }

    stop() {
        clearInterval(this.bergDrillInterval)
        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
