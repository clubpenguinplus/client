import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Dojo extends RoomScene {
    constructor() {
        super('Dojo')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            dojoext: () => this.triggerRoom(321, 760, 480),
            firedojo: null,
            waterdojo: null,
            snowdojo: null
        }
        this.music = 403
        this.loadSfx = ['dojo-wateropen', 'dojo-waterclose', 'dojo-snowopen', 'dojo-snowclose', 'dojo-fireopen', 'dojo-fireclose']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dojo-pack', 'client/media/rooms/dojo/dojo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // dojobg
        this.add.image(760, 480, 'dojo', 'dojobg')

        // dojowindows
        this.add.image(760, 40, 'dojo', 'dojowindows')

        // firedoor
        const firedoor = this.add.image(194.28181728931185, 484.6726523021942, 'dojo', 'firedoor')
        firedoor.setOrigin(0.5057480595933267, 0.7315540909724606)

        // firedoorholder
        this.add.image(155, 350, 'dojo', 'firedoorholder')

        // firestatue
        this.add.image(52, 464, 'dojo', 'firestatue')

        // waterdoor
        const waterdoor = this.add.image(762, 352, 'dojo', 'waterdoor')
        waterdoor.setOrigin(0.5124979327439129, 0.9302077247307126)

        // snowdoor
        const snowdoor = this.add.image(1302.8251563367128, 496.23231053123124, 'dojo', 'snowdoor')
        snowdoor.setOrigin(0.37332738715241254, 0.7591213589035156)

        // snowdoorholder
        this.add.image(1364, 353, 'dojo', 'snowdoorholder')

        // snowstatue
        this.add.image(1504, 466, 'dojo', 'snowstatue')

        // dojofg
        const dojofg = this.add.image(-135, 1003, 'dojo', 'dojofg')
        dojofg.setOrigin(0, 1)

        // waterdoorholder
        this.add.image(764, 220, 'dojo', 'waterdoorholder')

        // waterstatues
        this.add.image(759, 266, 'dojo', 'waterstatues')

        // leftcolumn
        this.add.image(446, 264, 'dojo', 'leftcolumn')

        // rightcolumn
        this.add.image(1083, 264, 'dojo', 'rightcolumn')

        // belttut
        const belttut = this.add.image(469, 235, 'dojo', 'belttut')

        // bonsai
        const bonsai = this.add.image(929, 513, 'dojo', 'bonsai')
        bonsai.setOrigin(0.5205752314512851, 0.42023141037347894)

        // jitsutut
        const jitsutut = this.add.image(1064, 235, 'dojo', 'jitsutut')
        jitsutut.flipX = true

        // senseihit
        const senseihit = this.add.image(766.0932706356324, 612.3270635632375, 'dojo', 'senseihit')
        senseihit.setOrigin(0.5043212278088237, 0.940834933722732)

        // senseiholder_en
        const senseiholder_en = this.add.image(765, 492.7822963098243, 'dojo', 'senseiholder_en')
        senseiholder_en.setOrigin(0.5, 0.46191031532985244)

        // backpot
        this.add.image(613, 558, 'dojo', 'backpot')

        // potdots
        const potdots = this.add.sprite(613, 544, 'dojo', 'potdots0001')

        // potmagic
        const potmagic = this.add.sprite(613, 533.8306782058418, 'dojo', 'potmagic0001')
        potmagic.setOrigin(0.5, 0.7766019319850123)

        // frontpot
        const frontpot = this.add.image(613, 561, 'dojo', 'frontpot')

        // light
        const light = this.add.image(609.6882264321175, 883.9883770861188, 'dojo', 'light')
        light.setOrigin(0.471247223537298, 1.0949980725488346)

        // mat
        const mat = this.add.image(455, 664, 'dojo', 'mat')

        // mat_1
        const mat_1 = this.add.image(423, 755, 'dojo', 'mat')

        // mat_2
        const mat_2 = this.add.image(1068, 664, 'dojo', 'mat')
        mat_2.flipX = true

        // mat_3
        const mat_3 = this.add.image(1100, 755, 'dojo', 'mat')
        mat_3.flipX = true

        // dojocat_en
        const dojocat_en = this.add.image(1417.4467709810208, 1057.4425197968365, 'dojo', 'dojocat_en')
        dojocat_en.setOrigin(0.5605562242373128, 3.0358267725551324)

        // jitsucards
        const jitsucards = this.add.image(1418.6018451537025, 1083.479422870884, 'dojo', 'jitsucards')
        jitsucards.setOrigin(0.46604934058932374, 2.2954732423555133)

        // dojoext
        const dojoext = this.add.image(762, 896, 'dojo', 'dojoext')
        dojoext.setOrigin(0.5032167308626421, 0.5516157441767048)

        // lists
        const sort = [dojofg, light, bonsai, senseiholder_en, frontpot, potmagic, dojocat_en, jitsucards]

        // firedoor (components)
        const firedoorButton = new Button(firedoor)
        firedoorButton.hoverCallback = () => this.fireDoorOver()
        firedoorButton.hoverOutCallback = () => this.fireDoorOut()
        new MoveTo(firedoor)

        // waterdoor (components)
        const waterdoorButton = new Button(waterdoor)
        waterdoorButton.hoverCallback = () => this.waterDoorOver()
        waterdoorButton.hoverOutCallback = () => this.waterDoorOut()
        new MoveTo(waterdoor)

        // snowdoor (components)
        const snowdoorButton = new Button(snowdoor)
        snowdoorButton.hoverCallback = () => this.snowDoorOver()
        snowdoorButton.hoverOutCallback = () => this.snowDoorOut()
        new MoveTo(snowdoor)

        // belttut (components)
        const belttutButton = new Button(belttut)

        // jitsutut (components)
        const jitsututButton = new Button(jitsutut)

        // senseihit (components)
        const senseihitButton = new Button(senseihit)
        new MoveTo(senseihit)

        // mat (components)
        const matButton = new Button(mat)
        new MoveTo(mat)

        // mat_1 (components)
        const mat_1Button = new Button(mat_1)
        new MoveTo(mat_1)

        // mat_2 (components)
        const mat_2Button = new Button(mat_2)
        new MoveTo(mat_2)

        // mat_3 (components)
        const mat_3Button = new Button(mat_3)
        new MoveTo(mat_3)

        // dojocat_en (components)
        const dojocat_enButton = new Button(dojocat_en)

        // jitsucards (components)
        const jitsucardsButton = new Button(jitsucards)

        // dojoext (components)
        const dojoextButton = new Button(dojoext)
        new MoveTo(dojoext)

        this.potdots = potdots
        this.potmagic = potmagic
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    potdots
    /** @type {Phaser.GameObjects.Sprite} */
    potmagic
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
    sort

    /* START-USER-CODE */
    create() {
        super.create()

        this.potdots.play('dojo-potdots')
        this.potmagic.play('dojo-potmagic')

        if (!this.shell.client.stamps.includes(30)) {
            this.ninjaMeetingInterval = setInterval(() => {
                let ninjas = 0
                for (let p in this.penguins) {
                    let penguin = this.penguins[p]
                    if (penguin.wearingItem(4033) || penguin.wearingItem(4034) || penguin.wearingItem(4075)) ninjas++
                }
                let p = this.shell.client.penguin
                if (ninjas >= 10 && (p.wearingItem(4033) || p.wearingItem(4034) || p.wearingItem(4075))) {
                    this.shell.client.stampEarned(30)
                    clearInterval(this.ninjaMeetingInterval)
                }
            }, 2000)
        }
    }

    waterDoorOver() {
        this.shell.musicController.addSfx('dojo-wateropen')
    }

    waterDoorOut() {
        this.shell.musicController.addSfx('dojo-waterclose')
    }

    fireDoorOver() {
        this.shell.musicController.addSfx('dojo-fireopen')
    }

    fireDoorOut() {
        this.shell.musicController.addSfx('dojo-fireclose')
    }

    snowDoorOver() {
        this.shell.musicController.addSfx('dojo-snowopen')
    }

    snowDoorOut() {
        this.shell.musicController.addSfx('dojo-snowclose')
    }

    stop() {
        clearInterval(this.ninjaMeetingInterval)
        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
