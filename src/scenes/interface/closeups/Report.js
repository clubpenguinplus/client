import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, LocalisedString, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Report extends BaseScene {
    constructor() {
        super('Moderator')

        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {Phaser.GameObjects.Text} */
        this.title_1
        /** @type {Phaser.GameObjects.Text} */
        this.title_2
        /** @type {Phaser.GameObjects.Text} */
        this.title_3
        /** @type {Phaser.GameObjects.Text} */
        this.title_4

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('safetyquiz-pack', 'client/media/interface/game/safetyquiz/safetyquiz-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // bg
        const bg = this.add.ninePatchContainer(760, 480, 1400, 840, 'banning', 'banned_bg')
        bg.marginLeft = 50
        bg.marginTop = 50
        bg.marginRight = 50
        bg.marginBottom = 50

        // rectangle_1
        const rectangle_1 = this.add.rectangle(382, 539, 5, 690)
        rectangle_1.isFilled = true
        rectangle_1.fillColor = 10304001

        // rectangle
        const rectangle = this.add.rectangle(834, 196, 1210, 5)
        rectangle.isFilled = true
        rectangle.fillColor = 10304001

        // rectangle_3
        const rectangle_3 = this.add.rectangle(230, 772, 304, 128)
        rectangle_3.isStroked = true
        rectangle_3.strokeColor = 10304001
        rectangle_3.lineWidth = 5

        // rectangle_4
        const rectangle_4 = this.add.rectangle(230, 644, 304, 128)
        rectangle_4.isStroked = true
        rectangle_4.strokeColor = 10304001
        rectangle_4.lineWidth = 5

        // rectangle_5
        const rectangle_5 = this.add.rectangle(230, 516, 304, 128)
        rectangle_5.isStroked = true
        rectangle_5.strokeColor = 10304001
        rectangle_5.lineWidth = 5

        // rectangle_6
        const rectangle_6 = this.add.rectangle(230, 388, 304, 128)
        rectangle_6.isStroked = true
        rectangle_6.strokeColor = 10304001
        rectangle_6.lineWidth = 5

        // rectangle_7
        const rectangle_7 = this.add.rectangle(230, 260, 304, 128)
        rectangle_7.isStroked = true
        rectangle_7.strokeColor = 10304001
        rectangle_7.lineWidth = 5

        // title
        const title = this.add.text(760, 141, '', {})
        title.setOrigin(0.5, 0.5)
        title.text = 'BUGS'
        title.setStyle({align: 'center', color: '#9d3a01', fontFamily: 'Burbank Small', fontSize: '48px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title.setLineSpacing(5)
        title.setWordWrapWidth(550)

        // title_1
        const title_1 = this.add.text(216.8, 141, '', {})
        title_1.setOrigin(0.5, 0.5)
        title_1.text = 'Your reports'
        title_1.setStyle({align: 'center', color: '#9d3a01', fontFamily: 'Burbank Small', fontSize: '32px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_1.setLineSpacing(5)
        title_1.setWordWrapWidth(550)

        // title_2
        const title_2 = this.add.text(488.4, 141, '', {})
        title_2.setOrigin(0.5, 0.5)
        title_2.text = 'Report a bug'
        title_2.setStyle({align: 'center', color: '#9d3a01', fontFamily: 'Burbank Small', fontSize: '32px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_2.setLineSpacing(5)
        title_2.setWordWrapWidth(550)

        // title_3
        const title_3 = this.add.text(1303.2, 141, '', {})
        title_3.setOrigin(0.5, 0.5)
        title_3.text = 'Bugs\nSuggestions\nPlayer reports'
        title_3.setStyle({align: 'right', color: '#9d3a01', fontFamily: 'Burbank Small', fontSize: '24px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_3.setPadding({right: 35})
        title_3.setLineSpacing(5)
        title_3.setWordWrapWidth(550)

        // title_4
        const title_4 = this.add.text(1031.6, 141, '', {})
        title_4.setOrigin(0.5, 0.5)
        title_4.text = 'All reports'
        title_4.setStyle({align: 'center', color: '#9d3a01', fontFamily: 'Burbank Small', fontSize: '32px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_4.setLineSpacing(5)
        title_4.setWordWrapWidth(550)

        // rude_warn
        const rude_warn = this.add.image(1383, 176, 'main', 'buddy/icon-ignore')
        rude_warn.scaleX = 0.6311570353313376
        rude_warn.scaleY = 0.6311570353313376

        // rude_warn_1
        const rude_warn_1 = this.add.image(1383, 140, 'main', 'buddy/icon-player')
        rude_warn_1.scaleX = 0.7967596335940542
        rude_warn_1.scaleY = 0.7967596335940542

        // rude_warn_2
        const rude_warn_2 = this.add.image(1383, 106, 'main', 'mute-icon')
        rude_warn_2.scaleX = 0.7859536017780612
        rude_warn_2.scaleY = 0.7859536017780612

        // block (components)
        new Interactive(block)

        this.bg = bg
        this.title = title
        this.title_1 = title_1
        this.title_2 = title_2
        this.title_3 = title_3
        this.title_4 = title_4

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
