import RoomScene from '../RoomScene'
import Main from '@scenes/interface/game/main/Main'

import {Animation, Button, MoveTo, Pin, SimpleButton, ShowHint, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {
    constructor() {
        super('Beacon')

        /** @type {Phaser.GameObjects.Image} */
        this.launch
        /** @type {Phaser.GameObjects.Sprite} */
        this.launchActive
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            light: () => this.triggerRoom(410, 454, 185, 5),
            jetpack: () => this.triggerGame('jetpackadventure', 906),
        }

        this.music = 583

        this.loadSfx = ['beacon-jetpackopen', 'beacon-jetpackclose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('lightroof-pack', 'client/media/rooms/beacon/lightroof-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'lightroof', 'bg')
        bg.setOrigin(0, 0)

        // light
        const light = this.add.image(688.6894422954724, 555.9710578661634, 'lightroof', 'light')
        light.setOrigin(0.6309839947998837, 0.8038810334259991)

        // launch
        const launch = this.add.image(1321, 570, 'lightroof', 'launch')

        // launchActive
        const launchActive = this.add.sprite(1321, 570, 'lightroof', 'launch/launch0001')
        launchActive.visible = false

        // railing
        const railing = this.add.image(680, 846, 'lightroof', 'railing')
        railing.setOrigin(0.5, 0.7486553607307954)

        // railing_2
        const railing_2 = this.add.image(230.2762147789686, 563.4632225414601, 'lightroof', 'railing_2')
        railing_2.setOrigin(0.8421959359650598, 0.3415237313641213)

        // telescopeZone
        const telescopeZone = this.add.rectangle(320, 373, 50, 50)
        telescopeZone.alpha = 0.5
        telescopeZone.isFilled = true
        telescopeZone.fillColor = 65280

        // jetpackZone
        const jetpackZone = this.add.rectangle(1323, 587, 245, 150)
        jetpackZone.angle = -5
        jetpackZone.alpha = 0.5
        jetpackZone.fillColor = 65280

        // snow
        const snow = this.add.container(5, 1722)

        // lists
        const sort = [railing_2, railing, light, snow]

        // telescopeZone (components)
        const telescopeZoneZone = new Zone(telescopeZone)
        telescopeZoneZone.hoverCallback = () => {}
        telescopeZoneZone.hoverOutCallback = () => {}
        telescopeZoneZone.callback = () => this.interface.loadExternal('Telescope')

        // jetpackZone (components)
        const jetpackZoneSimpleButton = new SimpleButton(jetpackZone)
        jetpackZoneSimpleButton.hoverCallback = () => {
            this.onJetpackOver()
            this.shell.musicController.addSfx('beacon-jetpackopen')
        }
        jetpackZoneSimpleButton.hoverOutCallback = () => {
            this.onJetpackOut()
            this.shell.musicController.addSfx('beacon-jetpackclose')
        }
        jetpackZoneSimpleButton.callback = () => this.shell.client.penguin.move(1342, 565)
        const jetpackZoneShowHint = new ShowHint(jetpackZone)
        jetpackZoneShowHint.text = 'jetpackadventure'

        this.launch = launch
        this.launchActive = launchActive
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onJetpackOver() {
        this.launch.setVisible(false)
        this.launchActive.setVisible(true)
        this.launchActive.play('launch-active')
    }

    onJetpackOut() {
        this.launchActive.stop()
        this.launch.setVisible(true)
        this.launchActive.setVisible(false)
    }

    onTelescopeClick() {
        this.interface.main.toggleTelescope()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
