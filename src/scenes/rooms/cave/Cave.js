import RoomScene from '../RoomScene'

import {Animation, Button, MoveTo, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Cave extends RoomScene {
    constructor() {
        super('Cave')

        /** @type {Phaser.GameObjects.Sprite} */
        this.animdummy
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.waterZones

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            boiler: () => this.triggerRoom(804, 610, 620),
            plaza: () => this.triggerRoom(300, 582, 588),
            mine: () => this.triggerRoom(808, 360, 565)
        }

        this.music = 252

        this.loadSfx = ['cave-dooropen', 'cave-doorclose', 'cave-crab']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cave-pack', 'client/media/rooms/cave/cave-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'cave', 'bg')

        // chair
        const chair = this.add.image(386.66524261141893, 430.3902110876788, 'cave', 'chair')
        chair.setOrigin(0.25438503754995867, 0.44832312820824016)

        // chairarm
        const chairarm = this.add.image(381.62019298236874, 495.13519228070527, 'cave', 'chairarm')
        chairarm.setOrigin(0.2510659164357689, 0.5157658252924013)

        // door
        const door = this.add.image(160.21337711275305, 587.2903157849864, 'cave', 'door')
        door.setOrigin(0.4525410986905808, 0.8563303924421574)

        // icewalls
        const icewalls = this.add.image(1442.9234312463204, 738.1783703492187, 'cave', 'icewalls')
        icewalls.setOrigin(0.9492917310831055, 0.7689358024471028)

        // icewall_bottomright
        const icewall_bottomright = this.add.image(1462.9114341120662, 888.0883918423134, 'cave', 'icewall-bottomright')
        icewall_bottomright.setOrigin(0.9624417329684646, 0.9250920748357431)

        // leftwall
        const leftwall = this.add.image(145.36891187831168, 784.8170437026258, 'cave', 'leftwall')
        leftwall.setOrigin(0.09563744202520505, 0.817517753856902)

        // pool
        this.add.image(760, 480, 'cave', 'pool')

        // poolfront
        const poolfront = this.add.image(735.0149964178175, 863.1033882601309, 'cave', 'poolfront')
        poolfront.setOrigin(0.483562497643301, 0.8990660294376364)

        // poolladder
        const poolladder = this.add.image(335.92969121528165, 721.9836225268732, 'cave', 'poolladder')
        poolladder.setOrigin(0.2210063757995274, 0.7520662734654929)

        // poolladder_front
        const poolladder_front = this.add.image(339.92281320527127, 793.0613073721329, 'cave', 'poolladder-front')
        poolladder_front.setOrigin(0.22363343440781808, 0.8261055419091525)

        // pumpkin
        const pumpkin = this.add.image(353.87234046774245, 550.6308973099578, 'cave', 'pumpkin')
        pumpkin.setOrigin(0.2328107503077253, 0.5735738513645394)

        // windows
        this.add.image(816, 349, 'cave', 'windows')

        // zone
        const zone = this.add.rectangle(1319, 295, 115, 400)
        zone.alpha = 0.5
        zone.isFilled = true
        zone.fillColor = 65280

        // ellipse_1
        const ellipse_1 = this.add.ellipse(807, 719, 800, 260)

        // ellipse
        const ellipse = this.add.ellipse(570, 697, 300, 200)

        // ellipse_2
        const ellipse_2 = this.add.ellipse(1041, 689, 300, 200)

        // ellipse_3
        const ellipse_3 = this.add.ellipse(1139, 761, 300, 200)

        // ellipse_4
        const ellipse_4 = this.add.ellipse(495, 762, 300, 200)

        // animdummy
        const animdummy = this.add.sprite(816, 349, 'cave', 'fish1/1698576527527')

        // lists
        const sort = [pumpkin, poolladder_front, poolladder, poolfront, leftwall, icewall_bottomright, icewalls, chairarm, chair]
        const waterZones = [ellipse_1, ellipse_4, ellipse_3, ellipse_2, ellipse]

        // door (components)
        new MoveTo(door)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('cave-dooropen')
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('cave-doorclose')

        // zone (components)
        const zoneZone = new Zone(zone)
        zoneZone.callback = () => this.onZoneClick()

        this.animdummy = animdummy
        this.sort = sort
        this.waterZones = waterZones

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()
        setTimeout(
            () => {
                this.randomiseAnimations()
            },
            Phaser.Math.Between(3000, 4500)
        )
    }

    randomiseAnimations() {
        if (this.animdummy.anims.isPlaying) return
        let choice = Phaser.Math.Between(0, 3)
        let anim
        switch (choice) {
            case 0:
                anim = 'cave-fish1'
                break
            case 1:
                anim = 'cave-fish2'
                break
            case 2:
                anim = 'cave-crab1'
                break
            case 3:
                anim = 'cave-crab2'
                break
        }
        this.animdummy.play(anim)
        this.animdummy.once('animationcomplete', () => {
            this.animdummy.anims.stop()
            this.animdummy.setFrame(`${anim}/1698576473150`)
        })
        setTimeout(
            () => {
                this.randomiseAnimations()
            },
            Phaser.Math.Between(3000, 6000)
        )
    }

    onZoneClick() {
        this.shell.client.penguin.move(1266, 572)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
