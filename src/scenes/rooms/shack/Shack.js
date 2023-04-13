import RoomScene from '@scenes/rooms/RoomScene'

import {Button, LocalisedSprite, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Shack extends RoomScene {
    constructor() {
        super('Shack')

        /** @type {Phaser.GameObjects.Sprite} */
        this.shackflag
        /** @type {Phaser.GameObjects.Sprite} */
        this.minutehand
        /** @type {Phaser.GameObjects.Sprite} */
        this.hourhand
        /** @type {Phaser.GameObjects.Sprite} */
        this.volleyball
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forest: () => this.triggerRoom(809, 1200, 400),
            skate: () => this.triggerRoom(435, 277, 344),
            mine: () => this.triggerRoom(808, 760, 480),
            school: () => this.triggerRoom(122, 1320, 760),
            dojo: () => this.triggerRoom(321, 760, 700),
            volleyone: null,
            volleytwo: null,
        }

        this.music = 580

        this.loadSfx = ['shack-SchoolDoorOpen', 'shack-SchoolDoorClose', 'shack-MineLightOn', 'shack-MineLightOff']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('shack-pack', 'client/media/rooms/shack/shack-pack.json')
    }

    /** @returns {void} */
    _create() {
        // shackbg
        this.add.image(782, 467, 'shack', 'shackbg')

        // arch
        this.add.image(157, 344, 'shack', 'arch')

        // bigtree
        const bigtree = this.add.image(34.060648209326246, 495.3883923884107, 'shack', 'bigtree')
        bigtree.setOrigin(0.40065216445209817, 0.8192540254452281)

        // cpu_fence_l
        const cpu_fence_l = this.add.image(70.95500585386105, 668.5693099492144, 'shack', 'cpu_fence_l')
        cpu_fence_l.setOrigin(0.6837960062002042, 0.7840051982111681)

        // cpu_fence_r
        const cpu_fence_r = this.add.image(421.5637446991831, 883.4631488536763, 'shack', 'cpu_fence_r')
        cpu_fence_r.setOrigin(0.4492963624180372, 0.7730948819569041)

        // cpu_fence_en
        const cpu_fence_en = this.add.image(155.05726423595928, 957.6629615636905, 'shack', 'cpu_fence_en')
        cpu_fence_en.setOrigin(0.11648585069152463, 7.950227395854219)

        // flagpole
        this.add.image(328, 239, 'shack', 'flagpole')

        // shackflag
        const shackflag = this.add.sprite(276.83275151038407, 655.3306895217695, 'shack', 'flag0001')
        shackflag.setOrigin(0.5192921211619376, 7.517509072654862)

        // minutehand
        const minutehand = this.add.sprite(475.17512186012317, 125.93228149414062, 'shack', 'minutehand')
        minutehand.setOrigin(0.5350267713930179, 0.9138450108891423)

        // hourhand
        const hourhand = this.add.sprite(475.30143411598254, 125.94285036201337, 'shack', 'hourhand')
        hourhand.setOrigin(0.5169051965889025, 0.87242241458853)

        // schooldoor
        const schooldoor = this.add.image(488.2573646340227, 398.83101097424947, 'shack', 'schooldoor')
        schooldoor.setOrigin(0.5262800286050783, 0.8143020870754998)

        // rail
        const rail = this.add.image(595.1654328509248, 497.3306599532049, 'shack', 'rail')
        rail.setOrigin(0.9215582111297244, 0.7559704490208276)

        // book
        const book = this.add.image(711.7532603454578, 777.4856544799858, 'shack', 'book')
        book.setOrigin(0.5543950774704023, 0.23363958838686746)

        // guitar
        const guitar = this.add.image(888, 825.5, 'shack', 'guitar')
        guitar.setOrigin(0.5, 0.5562989051818661)

        // coffee
        const coffee = this.add.image(818.7506520690915, 839.4960875854507, 'shack', 'coffee')
        coffee.setOrigin(0.5187663017272882, 0.38147598909080815)

        // bottom_bush
        const bottom_bush = this.add.image(1242.5147001165951, 997.5295962689582, 'shack', 'bottom_bush')
        bottom_bush.setOrigin(0.49303837567673703, 0.993972647633281)

        // volley_polll
        const volley_polll = this.add.image(1030, 705, 'shack', 'volley_polll')

        // volley_net
        const volley_net = this.add.image(1138, 733, 'shack', 'volley_net')
        volley_net.setOrigin(0.4381549193905814, 0.7410944289986862)

        // volley_pollr
        const volley_pollr = this.add.image(1266.323513821303, 810.5736463402268, 'shack', 'volley_pollr')
        volley_pollr.setOrigin(0.3378146806086599, 0.7580220990316775)

        // bucket
        const bucket = this.add.image(1346, 731.0961775186978, 'shack', 'bucket')
        bucket.setOrigin(0.5, 0.3013739645528257)

        // volleyball
        const volleyball = this.add.sprite(1063.1454009985412, 819.7181014978116, 'shack', 'volleyball0001')
        volleyball.setOrigin(0.4516169660769689, 0.42487897364581806)

        // minedoor
        const minedoor = this.add.image(988.5808784553258, 421.2501325189237, 'shack', 'minedoor')
        minedoor.setOrigin(0.48387361881052016, 0.9159494182665836)

        // mine_overhang
        this.add.image(978, 294, 'shack', 'mine_overhang')

        // mine_en
        this.add.image(980, 334, 'shack', 'mine_en')

        // lantern
        const lantern = this.add.image(1058, 436.14779945138315, 'shack', 'lantern')
        lantern.setOrigin(0.5, 0.33538610349143266)

        // righttree
        this.add.image(1489, 591, 'shack', 'righttree')

        // gardenrock
        this.add.image(1480, 702, 'shack', 'gardenrock')

        // carrot
        this.add.image(1474, 740, 'shack', 'carrot')

        // squash
        this.add.image(1492, 867, 'shack', 'squash')

        // pizzaplant_2
        this.add.image(1577, 821, 'shack', 'pizzaplant')

        // pizzaplant_1
        const pizzaplant_1 = this.add.image(1536, 870, 'shack', 'pizzaplant')
        pizzaplant_1.flipX = true

        // pizzaplant
        this.add.image(1488, 921, 'shack', 'pizzaplant')

        // lists
        const sort = [cpu_fence_l, cpu_fence_r, cpu_fence_en, rail, book, guitar, bottom_bush, volley_polll, volley_net, volley_pollr, bucket, volleyball, lantern, bigtree, shackflag]

        // schooldoor (components)
        const schooldoorButton = new Button(schooldoor)
        schooldoorButton.spriteName = 'schooldoor'
        schooldoorButton.hoverCallback = () => this.SchoolDoorOver()
        schooldoorButton.hoverOutCallback = () => this.SchoolDoorOut()
        schooldoorButton.activeFrame = false
        new MoveTo(schooldoor)

        // minedoor (components)
        const minedoorButton = new Button(minedoor)
        minedoorButton.spriteName = 'minedoor'
        minedoorButton.hoverCallback = () => this.MineDoorOver()
        minedoorButton.hoverOutCallback = () => this.MineDoorOut()
        minedoorButton.activeFrame = false
        new MoveTo(minedoor)

        this.shackflag = shackflag
        this.minutehand = minutehand
        this.hourhand = hourhand
        this.volleyball = volleyball
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.shackflag.play('shack-flag')

        this.setClockTime()
    }

    setClockTime() {
        var timeInHours = this.shell.getPSTHours()
        var timeInMinutes = this.shell.getPSTMinutes()
        let minuteDegrees = 0
        let hourDegrees = 0

        if (timeInHours > 12) {
            timeInHours -= 12
            hourDegrees = 30 * timeInHours + 0.5 * timeInMinutes
        } else {
            hourDegrees = 30 * timeInHours + 0.5 * timeInMinutes
        }

        minuteDegrees = 6 * timeInMinutes

        this.minutehand.rotation = Phaser.Math.DegToRad(minuteDegrees)
        this.hourhand.rotation = Phaser.Math.DegToRad(hourDegrees)

        let timeout = 60 - this.shell.getPSTSeconds()
        this.clockTimeTO = setTimeout(() => this.setClockTime(), timeout * 1000)
    }

    SchoolDoorOver() {
        this.shell.musicController.addSfx('shack-SchoolDoorOpen')
    }

    SchoolDoorOut() {
        this.shell.musicController.addSfx('shack-SchoolDoorClose')
    }

    MineDoorOver() {
        this.shell.musicController.addSfx('shack-MineLightOn')
    }

    MineDoorOut() {
        this.shell.musicController.addSfx('shack-MineLightOff')
    }

    stop() {
        clearTimeout(this.clockTimeTO)
        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
