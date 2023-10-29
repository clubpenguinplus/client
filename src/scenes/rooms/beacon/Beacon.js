import RoomScene from '../RoomScene'

import {SimpleButton, ShowHint, Zone, Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {
    constructor() {
        super('Beacon')

        /** @type {Phaser.GameObjects.Image} */
        this.launch
        /** @type {Phaser.GameObjects.Sprite} */
        this.launchActive
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            light: () => this.triggerRoom(410, 454, 185, 5),
            jetpack: () => this.triggerGame('jetpackadventure', 906, 'ruffle')
        }

        this.music = 340

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

        // launch
        const launch = this.add.image(1321, 570, 'lightroof', 'launch')
        launch.tintTopLeft = 11579069
        launch.tintTopRight = 11579069
        launch.tintBottomLeft = 11579069
        launch.tintBottomRight = 11579069

        // launchActive
        const launchActive = this.add.sprite(1321, 570, 'lightroof', 'launch/launch0001')
        launchActive.visible = false
        launchActive.tintTopLeft = 11579069
        launchActive.tintTopRight = 11579069
        launchActive.tintBottomLeft = 11579069
        launchActive.tintBottomRight = 11579069

        // telescopeZone
        const telescopeZone = this.add.rectangle(255, 300, 235, 110)
        telescopeZone.angle = 46
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

        // stairs
        const stairs = this.add.image(138.86516189156674, 675.7588356232907, 'lightroof', 'stairs')
        stairs.setOrigin(0.45806784480189044, 0.8093247083206717)
        stairs.tintTopLeft = 11579069
        stairs.tintTopRight = 11579069
        stairs.tintBottomLeft = 11579069
        stairs.tintBottomRight = 11579069

        // railing
        const railing = this.add.image(158.9663836968491, 564.611528508696, 'lightroof', 'railing')
        railing.setOrigin(0.10458314716897968, 0.588137008863225)

        // light
        const light = this.add.image(723.5295135738379, 536.8939588248128, 'lightroof', 'light')
        light.setOrigin(0.4760062589301565, 0.5592645404425133)

        // beegrailing
        const beegrailing = this.add.image(46.63728477610907, 879.7165481341377, 'lightroof', 'beegrailing')
        beegrailing.setOrigin(0.03068242467386182, 0.9163713866986836)

        // lists
        const sort = [snow, railing, beegrailing, light]

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

        // stairs (components)
        new Button(stairs)
        new MoveTo(stairs)

        this.launch = launch
        this.launchActive = launchActive
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onJetpackOver() {
        this.launch.setVisible(false)
        this.launchActive.setVisible(true)
        this.launchActive.play('beacon-launch-active')
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
