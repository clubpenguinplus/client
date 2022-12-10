import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Forts extends RoomScene {
    constructor() {
        super('Forts')

        /** @type {Phaser.GameObjects.Sprite} */
        this.tower
        /** @type {Phaser.GameObjects.Sprite} */
        this.target
        /** @type {Phaser.GameObjects.Text} */
        this.day
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime
        /** @type {Phaser.GameObjects.Ellipse} */
        this.hitbox
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            town: () => this.triggerRoom(100, 1240, 660),
            rink: () => this.triggerRoom(802, 780, 340),
            plaza: () => this.triggerRoom(300, 340, 660),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('forts-pack', 'client/media/rooms/forts/forts-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'forts', 'bg')
        bg.setOrigin(0, 0)

        // container_1
        const container_1 = this.add.container(490.56270613136127, 674.5237209306217)

        // flag1_0001
        const flag1_0001 = this.add.sprite(-45.56270613136127, -216.52372093062172, 'forts', 'flag1_0001')
        container_1.add(flag1_0001)

        // fort1
        const fort1 = this.add.image(-2.562706131361267, -14.274148176715471, 'forts', 'fort1')
        fort1.setOrigin(0.5, 0.5552506587546583)
        container_1.add(fort1)

        // fort9
        this.add.image(871, 399, 'forts', 'fort9')

        // fort4
        this.add.image(872, 676, 'forts', 'fort4')

        // fort3
        const fort3 = this.add.image(775.6070787215541, 714.8389329685477, 'forts', 'fort3')
        fort3.setOrigin(0.511865390531428, 0.5830080877345094)

        // fort2
        const fort2 = this.add.image(558, 750, 'forts', 'fort2')

        // fort10
        const fort10 = this.add.image(1057, 441, 'forts', 'fort10')

        // fort7
        const fort7 = this.add.image(1200, 539, 'forts', 'fort7')

        // fort6
        const fort6 = this.add.image(1073.4639997667232, 564.0800320527403, 'forts', 'fort6')
        fort6.setOrigin(0.49254368818797667, 0.7269951083660202)

        // snowman
        const snowman = this.add.image(1373.196460639223, 738.0884840194266, 'forts', 'snowman')
        snowman.setOrigin(0.4903035518237796, 0.7012878750867257)

        // tower
        const tower = this.add.sprite(1193, 199, 'forts', 'tower_0001')

        // target
        const target = this.add.sprite(1300, 181, 'forts', 'target_0001')

        // text
        this.add.image(1105, 76, 'forts', 'text')

        // container_2
        const container_2 = this.add.container(865.0335578701404, 468.2888433582715)

        // flag2_0004
        const flag2_0004 = this.add.sprite(-73.03355787014038, -134.2888433582715, 'forts', 'flag2_0004')
        container_2.add(flag2_0004)

        // fort8
        const fort8 = this.add.image(-99.03355787014038, -20.288843358271492, 'forts', 'fort8')
        container_2.add(fort8)

        // fort5
        const fort5 = this.add.image(-16.033557870140385, -35.28884335827149, 'forts', 'fort5')
        container_2.add(fort5)

        // day
        const day = this.add.text(1113, 233, '', {})
        day.scaleX = 0.8
        day.angle = 4
        day.setOrigin(0.5, 0.5)
        day.text = 'WEDNESDAY'
        day.setStyle({color: '#ffffffff', fontFamily: 'CCFaceFront', fontSize: '18px', fontStyle: 'italic'})
        day.setPadding({left: 5, right: 5})

        // am_pm
        const am_pm = this.add.text(1177, 149, '', {})
        am_pm.setOrigin(0.5, 0.5)
        am_pm.text = 'AM'
        am_pm.setStyle({align: 'right', color: '#DCE8FD', fontFamily: 'CPLCD', fontSize: '35px'})

        // clockTime
        const clockTime = this.add.text(1097, 170, '', {})
        clockTime.scaleX = 0.6363895309486298
        clockTime.setOrigin(0.5, 0.5)
        clockTime.text = '12:59'
        clockTime.setStyle({align: 'right', color: '#DCE8FD', fontFamily: 'cplcd', fontSize: '90px'})
        clockTime.setPadding({left: 5, right: 5})

        // hitbox
        const hitbox = this.add.ellipse(1304, 147, 60, 70)

        // lists
        const sort = [snowman, fort2, fort3, container_1, fort6, fort7, fort10]

        // flag1_0001 (components)
        const flag1_0001Animation = new Animation(flag1_0001)
        flag1_0001Animation.key = 'flag1_'
        flag1_0001Animation.end = 16

        // tower (components)
        const towerAnimation = new Animation(tower)
        towerAnimation.key = 'tower_'
        towerAnimation.end = 12
        towerAnimation.repeat = 0
        towerAnimation.autoPlay = false

        // target (components)
        const targetAnimation = new Animation(target)
        targetAnimation.key = 'target_'
        targetAnimation.end = 12
        targetAnimation.repeat = 0
        targetAnimation.autoPlay = false

        // flag2_0004 (components)
        const flag2_0004Animation = new Animation(flag2_0004)
        flag2_0004Animation.key = 'flag2_'
        flag2_0004Animation.start = 4
        flag2_0004Animation.end = 16

        this.tower = tower
        this.target = target
        this.day = day
        this.am_pm = am_pm
        this.clockTime = clockTime
        this.hitbox = hitbox
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()

        this.bounds = this.hitbox.getBounds()

        this.tower.on('animationcomplete', () => this.onTowerAnimComplete())
        this.target.on('animationcomplete', () => this.onTargetAnimComplete())
    }

    update() {
        if (this.lastTime && this.lastTime == this.shell.getPSTMinutes()) return
        this.lastTime = this.shell.getPSTMinutes()

        var timeInHours = this.shell.getPSTHours()
        if (timeInHours == 12) {
            this.am_pm.text = 'PM'
        } else if (timeInHours > 12) {
            timeInHours = timeInHours - 12
            this.am_pm.text = 'PM'
        }
        var timeInMinutes = this.shell.getPSTMinutes()
        if (timeInMinutes < 10) {
            this.clockTime.text = timeInHours + ':0' + timeInMinutes
        } else {
            this.clockTime.text = timeInHours + ':' + timeInMinutes
        }
        var day = this.shell.getPSTDay()

        if (day == 1) {
            this.day.text = 'MONDAY'
        } else if (day == 2) {
            this.day.text = 'TUESDAY'
        } else if (day == 3) {
            this.day.text = 'WEDNESDAY'
        } else if (day == 4) {
            this.day.text = 'THURSDAY'
        } else if (day == 5) {
            this.day.text = 'FRIDAY'
        } else if (day == 6) {
            this.day.text = 'SATURDAY'
        } else {
            this.day.text = 'SUNDAY'
        }
    }

    onSnowballComplete(x, y) {
        if (this.bounds.contains(x, y)) {
            this.tower.__Animation.play()
            this.target.__Animation.play()
        }
    }

    onTowerAnimComplete() {
        this.tower.setFrame('tower_0001')
    }

    onTargetAnimComplete() {
        this.target.setFrame('target_0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
