import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Forts extends RoomScene {
    constructor() {
        super('Forts')

        /** @type {Phaser.GameObjects.Sprite} */
        this.fountain
        /** @type {Phaser.GameObjects.Text} */
        this.day
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            town: () => this.triggerRoom(100, 1240, 660),
            rink: () => this.triggerRoom(802, 720, 900),
            plaza: () => this.triggerRoom(300, 340, 660)
        }

        this.music = 500

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('forts-pack', 'client/media/rooms/forts/forts-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'forts', 'bg')

        // bush
        const bush = this.add.image(760, 480, 'forts', 'bush')

        // house2
        const house2 = this.add.image(1143.3888680374912, 215.8542046954331, 'forts', 'house2')
        house2.setOrigin(0.7522295415240575, 0.2248481208161378)

        // house3
        const house3 = this.add.image(756.1775152028055, 335.573588259977, 'forts', 'house3')
        house3.setOrigin(0.4974851982928671, 0.3495558002759934)

        // house4
        const house4 = this.add.image(187.91675976494508, 629.2614250393092, 'forts', 'house4')
        house4.setOrigin(0.12362944252015566, 0.6554806497426083)

        // grave
        const grave = this.add.image(812.8843428222448, 482.0340131854709, 'forts', 'grave')
        grave.setOrigin(0.5347923308041084, 0.5021187637348655)

        // grave2
        const grave2 = this.add.image(1087.24755859375, 683.3276172990688, 'forts', 'grave2')
        grave2.setOrigin(0.7152944391044711, 0.7117995527692026)

        // gremlin
        const gremlin = this.add.image(855.5190681728106, 427.4645125049541, 'forts', 'gremlin')
        gremlin.setOrigin(0.5628414922189544, 0.44527553385932717)

        // gremlin2
        const gremlin2 = this.add.image(990.8377480842926, 394.0328386444703, 'forts', 'gremlin2')
        gremlin2.setOrigin(0.6518669395291399, 0.4104508735879899)

        // pool
        const pool = this.add.image(760, 480, 'forts', 'pool')

        // what
        const what = this.add.image(59.52683339938767, 675.8140897542621, 'forts', 'what')
        what.setOrigin(0.039162390394333994, 0.7039730101606897)

        // what2
        const what2 = this.add.image(190.069559902229, 772.9251423966198, 'forts', 'what2')
        what2.setOrigin(0.1250457630935717, 0.8051303566631456)

        // fg
        const fg = this.add.image(760, 977.8574164314624, 'forts', 'fg')
        fg.setOrigin(0.5, 1.0186014636763052)

        // container_1
        const container_1 = this.add.container(755.0503792350843, 645.2723353093012)

        // pumpkman
        const pumpkman = this.add.image(4.949620764915721, -165.27233530930118, 'forts', 'pumpkman')
        container_1.add(pumpkman)

        // fountain
        const fountain = this.add.sprite(-53.05037923508428, 62.727664690698816, 'forts', 'fountain0001')
        container_1.add(fountain)

        // container_2
        const container_2 = this.add.container(1381.6363087071127, 679.0765047695506)

        // house1
        const house1 = this.add.image(3.5948924647623244, 1.9237393710743618, 'forts', 'house1')
        house1.setOrigin(0.9113363073307206, 0.7093752586573532)
        container_2.add(house1)

        // day
        const day = this.add.text(-41.636308707112676, -198.07650476955064, '', {})
        day.scaleX = 0.8
        day.angle = 12.000000000000002
        day.setOrigin(0.5, 0.5)
        day.text = 'WEDNESDAY'
        day.setStyle({color: '#1dd63fff', fontFamily: 'CCFaceFront', fontSize: '18px', fontStyle: 'italic'})
        day.setPadding({left: 5, right: 5})
        container_2.add(day)

        // am_pm
        const am_pm = this.add.text(46.363691292887324, -306.07650476955064, '', {})
        am_pm.angle = 16
        am_pm.setOrigin(0.5, 0.5)
        am_pm.text = 'AM'
        am_pm.setStyle({align: 'right', color: '#1dd63fff', fontFamily: 'cplcd', fontSize: '35px'})
        container_2.add(am_pm)

        // clockTime
        const clockTime = this.add.text(-29.636308707112676, -317.07650476955064, '', {})
        clockTime.scaleX = 0.6363895309486298
        clockTime.angle = 16
        clockTime.setOrigin(0.5, 0.5)
        clockTime.text = '12:59'
        clockTime.setStyle({align: 'right', color: '#1dd63fff', fontFamily: 'cplcd', fontSize: '90px'})
        clockTime.setPadding({left: 5, right: 5})
        container_2.add(clockTime)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(113, 142, 220, 280)

        // rectangle
        const rectangle = this.add.rectangle(445, 136, 220, 280)

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1412, 140, 220, 280)

        // lists
        const sort = [fg, container_1, what2, what, pool, gremlin2, gremlin, grave2, grave, house4, house3, house2, bush, container_2]

        // rectangle_1 (components)
        new SimpleButton(rectangle_1)
        const rectangle_1MoveTo = new MoveTo(rectangle_1)
        rectangle_1MoveTo.x = 148
        rectangle_1MoveTo.y = 287

        // rectangle (components)
        new SimpleButton(rectangle)
        const rectangleMoveTo = new MoveTo(rectangle)
        rectangleMoveTo.x = 430
        rectangleMoveTo.y = 260

        // rectangle_2 (components)
        new SimpleButton(rectangle_2)
        const rectangle_2MoveTo = new MoveTo(rectangle_2)
        rectangle_2MoveTo.x = 1390
        rectangle_2MoveTo.y = 240

        this.fountain = fountain
        this.day = day
        this.am_pm = am_pm
        this.clockTime = clockTime
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        super.create()

        this.fountain.play('forts-fountain')
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

    stop() {
        this.lastTime = null
        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
