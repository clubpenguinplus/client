import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, LocalisedString, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Report extends BaseScene {
    constructor() {
        super('Report')

        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Text} */
        this.key1
        /** @type {Phaser.GameObjects.Text} */
        this.resolution1
        /** @type {Phaser.GameObjects.Text} */
        this.title1
        /** @type {Phaser.GameObjects.Text} */
        this.key
        /** @type {Phaser.GameObjects.Text} */
        this.resolution
        /** @type {Phaser.GameObjects.Text} */
        this.title_1
        /** @type {Phaser.GameObjects.Text} */
        this.key_1
        /** @type {Phaser.GameObjects.Text} */
        this.resolution_1
        /** @type {Phaser.GameObjects.Text} */
        this.title_2
        /** @type {Phaser.GameObjects.Text} */
        this.key_2
        /** @type {Phaser.GameObjects.Text} */
        this.resolution_2
        /** @type {Phaser.GameObjects.Text} */
        this.title_3
        /** @type {Phaser.GameObjects.Text} */
        this.key_3
        /** @type {Phaser.GameObjects.Text} */
        this.resolution_3
        /** @type {Phaser.GameObjects.Text} */
        this.title_4
        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {Phaser.GameObjects.Text} */
        this.yours
        /** @type {Phaser.GameObjects.Text} */
        this.newIssue
        /** @type {Phaser.GameObjects.Text} */
        this.selections
        /** @type {Phaser.GameObjects.Text} */
        this.all
        /** @type {Phaser.GameObjects.Text} */
        this.nextprevpage
        /** @type {NinePatchContainer} */
        this.bg_1
        /** @type {Phaser.GameObjects.Text[]} */
        this.keys
        /** @type {Phaser.GameObjects.Text[]} */
        this.resolutions
        /** @type {Phaser.GameObjects.Text[]} */
        this.titles

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
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

        // key1
        const key1 = this.add.text(90, 220, '', {})
        key1.setOrigin(0, 0.5)
        key1.text = 'BUG-15'
        key1.setStyle({color: '#642602ff', fixedWidth: 110, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key1.setLineSpacing(5)
        key1.setWordWrapWidth(225)

        // resolution1
        const resolution1 = this.add.text(378, 220, '', {})
        resolution1.setOrigin(1, 0.5)
        resolution1.text = 'Unresolved'
        resolution1.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 170, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution1.setLineSpacing(5)
        resolution1.setWordWrapWidth(225)

        // title1
        const title1 = this.add.text(233, 280, '', {})
        title1.setOrigin(0.5, 0.5)
        title1.text = 'This is a title '
        title1.setStyle({color: '#642602ff', fixedWidth: 285, fixedHeight: 75, fontFamily: 'Burbank Small', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title1.setLineSpacing(-5)
        title1.setWordWrapWidth(285)

        // key
        const key = this.add.text(90, 348, '', {})
        key.setOrigin(0, 0.5)
        key.text = 'BUG-15'
        key.setStyle({color: '#642602ff', fixedWidth: 110, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key.setLineSpacing(5)
        key.setWordWrapWidth(225)

        // resolution
        const resolution = this.add.text(378, 348, '', {})
        resolution.setOrigin(1, 0.5)
        resolution.text = 'Unresolved'
        resolution.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 170, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution.setLineSpacing(5)
        resolution.setWordWrapWidth(225)

        // title_1
        const title_1 = this.add.text(233, 408, '', {})
        title_1.setOrigin(0.5, 0.5)
        title_1.text = 'This is a title '
        title_1.setStyle({color: '#642602ff', fixedWidth: 285, fixedHeight: 75, fontFamily: 'Burbank Small', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_1.setLineSpacing(-5)
        title_1.setWordWrapWidth(285)

        // key_1
        const key_1 = this.add.text(90, 476, '', {})
        key_1.setOrigin(0, 0.5)
        key_1.text = 'BUG-15'
        key_1.setStyle({color: '#642602ff', fixedWidth: 110, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key_1.setLineSpacing(5)
        key_1.setWordWrapWidth(225)

        // resolution_1
        const resolution_1 = this.add.text(378, 476, '', {})
        resolution_1.setOrigin(1, 0.5)
        resolution_1.text = 'Unresolved'
        resolution_1.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 170, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution_1.setLineSpacing(5)
        resolution_1.setWordWrapWidth(225)

        // title_2
        const title_2 = this.add.text(233, 536, '', {})
        title_2.setOrigin(0.5, 0.5)
        title_2.text = 'This is a title '
        title_2.setStyle({color: '#642602ff', fixedWidth: 285, fixedHeight: 75, fontFamily: 'Burbank Small', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_2.setLineSpacing(-5)
        title_2.setWordWrapWidth(285)

        // key_2
        const key_2 = this.add.text(90, 604, '', {})
        key_2.setOrigin(0, 0.5)
        key_2.text = 'BUG-15'
        key_2.setStyle({color: '#642602ff', fixedWidth: 110, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key_2.setLineSpacing(5)
        key_2.setWordWrapWidth(225)

        // resolution_2
        const resolution_2 = this.add.text(378, 604, '', {})
        resolution_2.setOrigin(1, 0.5)
        resolution_2.text = 'Unresolved'
        resolution_2.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 170, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution_2.setLineSpacing(5)
        resolution_2.setWordWrapWidth(225)

        // title_3
        const title_3 = this.add.text(233, 664, '', {})
        title_3.setOrigin(0.5, 0.5)
        title_3.text = 'This is a title '
        title_3.setStyle({color: '#642602ff', fixedWidth: 285, fixedHeight: 75, fontFamily: 'Burbank Small', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_3.setLineSpacing(-5)
        title_3.setWordWrapWidth(285)

        // key_3
        const key_3 = this.add.text(90, 732, '', {})
        key_3.setOrigin(0, 0.5)
        key_3.text = 'BUG-15'
        key_3.setStyle({color: '#642602ff', fixedWidth: 110, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key_3.setLineSpacing(5)
        key_3.setWordWrapWidth(225)

        // resolution_3
        const resolution_3 = this.add.text(378, 732, '', {})
        resolution_3.setOrigin(1, 0.5)
        resolution_3.text = 'Unresolved'
        resolution_3.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 170, fixedHeight: 34, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution_3.setLineSpacing(5)
        resolution_3.setWordWrapWidth(225)

        // title_4
        const title_4 = this.add.text(233, 792, '', {})
        title_4.setOrigin(0.5, 0.5)
        title_4.text = 'This is a title '
        title_4.setStyle({color: '#642602ff', fixedWidth: 285, fixedHeight: 75, fontFamily: 'Burbank Small', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_4.setLineSpacing(-5)
        title_4.setWordWrapWidth(285)

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
        title.setStyle({align: 'center', color: '#642602ff', fixedWidth: 265, fixedHeight: 58, fontFamily: 'Burbank Small', fontSize: '48px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title.setLineSpacing(5)
        title.setWordWrapWidth(265)

        // yours
        const yours = this.add.text(216.8, 141, '', {})
        yours.setOrigin(0.5, 0.5)
        yours.text = 'Your reports'
        yours.setStyle({align: 'center', color: '#642602ff', fixedWidth: 225, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        yours.setLineSpacing(5)
        yours.setWordWrapWidth(225)

        // newIssue
        const newIssue = this.add.text(488.4, 141, '', {})
        newIssue.setOrigin(0.5, 0.5)
        newIssue.text = 'Report a bug'
        newIssue.setStyle({align: 'center', color: '#642602ff', fixedWidth: 225, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        newIssue.setLineSpacing(5)
        newIssue.setWordWrapWidth(225)

        // selections
        const selections = this.add.text(1303.2, 141, '', {})
        selections.setOrigin(0.5, 0.5)
        selections.text = 'Bugs\nSuggestions\nPlayer reports'
        selections.setStyle({align: 'right', color: '#642602ff', fontFamily: 'Burbank Small', fontSize: '24px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        selections.setPadding({right: 35})
        selections.setLineSpacing(5)
        selections.setWordWrapWidth(550)

        // all
        const all = this.add.text(1031.6, 141, '', {})
        all.setOrigin(0.5, 0.5)
        all.text = 'All reports'
        all.setStyle({align: 'center', color: '#642602ff', fixedWidth: 225, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        all.setLineSpacing(5)
        all.setWordWrapWidth(225)

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

        // white_x
        const white_x = this.add.image(1421, 94, 'main', 'white-x')
        white_x.scaleX = 0.7
        white_x.scaleY = 0.7

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1297, 107, 200, 30)

        // rectangle_8
        const rectangle_8 = this.add.rectangle(1297, 142, 200, 30)

        // rectangle_9
        const rectangle_9 = this.add.rectangle(1297, 176, 200, 30)

        // rectangle_10
        const rectangle_10 = this.add.rectangle(1033, 141, 250, 100)

        // rectangle_11
        const rectangle_11 = this.add.rectangle(497, 139, 250, 100)

        // rectangle_12
        const rectangle_12 = this.add.rectangle(222, 140, 250, 100)

        // nextprevpage
        const nextprevpage = this.add.text(235, 857, '', {})
        nextprevpage.setOrigin(0.5, 0.5)
        nextprevpage.text = 'PREVIOUS        NEXT'
        nextprevpage.setStyle({align: 'center', color: '#642602ff', fixedWidth: 270, fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        nextprevpage.setLineSpacing(5)

        // rectangle_13
        const rectangle_13 = this.add.rectangle(171, 857, 180, 30)

        // rectangle_14
        const rectangle_14 = this.add.rectangle(327, 856, 100, 30)

        // createNew
        const createNew = this.add.container(760, 480)
        createNew.visible = false

        // block_1
        const block_1 = this.add.rectangle(0, 0, 1520, 960)
        block_1.isFilled = true
        block_1.fillColor = 0
        block_1.fillAlpha = 0.3
        createNew.add(block_1)

        // bg_1
        const bg_1 = this.add.ninePatchContainer(0, 0, 840, 840, 'banning', 'banned_bg')
        bg_1.marginLeft = 50
        bg_1.marginTop = 50
        bg_1.marginRight = 50
        bg_1.marginBottom = 50
        createNew.add(bg_1)

        // rectangle_15
        const rectangle_15 = this.add.rectangle(0, 0, 700, 500)
        rectangle_15.isFilled = true
        rectangle_15.isStroked = true
        rectangle_15.strokeColor = 10304001
        rectangle_15.lineWidth = 7
        createNew.add(rectangle_15)

        // lists
        const keys = [key1, key, key_1, key_2, key_3]
        const resolutions = [resolution1, resolution, resolution_1, resolution_2, resolution_3]
        const titles = [title1, title_1, title_2, title_3, title_4]

        // block (components)
        new Interactive(block)

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => this.scene.stop()

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2)
        rectangle_2SimpleButton.callback = () => this.onBugsSelect()

        // rectangle_8 (components)
        const rectangle_8SimpleButton = new SimpleButton(rectangle_8)
        rectangle_8SimpleButton.callback = () => this.onSuggestionsSelect()

        // rectangle_9 (components)
        const rectangle_9SimpleButton = new SimpleButton(rectangle_9)
        rectangle_9SimpleButton.callback = () => this.onReportsSelect()

        // rectangle_10 (components)
        const rectangle_10SimpleButton = new SimpleButton(rectangle_10)
        rectangle_10SimpleButton.callback = () => this.showAll()

        // rectangle_11 (components)
        const rectangle_11SimpleButton = new SimpleButton(rectangle_11)
        rectangle_11SimpleButton.callback = () => this.createNew()

        // rectangle_12 (components)
        const rectangle_12SimpleButton = new SimpleButton(rectangle_12)
        rectangle_12SimpleButton.callback = () => this.showYours()

        // rectangle_13 (components)
        const rectangle_13SimpleButton = new SimpleButton(rectangle_13)
        rectangle_13SimpleButton.callback = () => this.prevPage()

        // rectangle_14 (components)
        const rectangle_14SimpleButton = new SimpleButton(rectangle_14)
        rectangle_14SimpleButton.callback = () => this.nextPage()

        // block_1 (components)
        new Interactive(block_1)

        this.bg = bg
        this.key1 = key1
        this.resolution1 = resolution1
        this.title1 = title1
        this.key = key
        this.resolution = resolution
        this.title_1 = title_1
        this.key_1 = key_1
        this.resolution_1 = resolution_1
        this.title_2 = title_2
        this.key_2 = key_2
        this.resolution_2 = resolution_2
        this.title_3 = title_3
        this.key_3 = key_3
        this.resolution_3 = resolution_3
        this.title_4 = title_4
        this.title = title
        this.yours = yours
        this.newIssue = newIssue
        this.selections = selections
        this.all = all
        this.nextprevpage = nextprevpage
        this.bg_1 = bg_1
        this.keys = keys
        this.resolutions = resolutions
        this.titles = titles

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    get io() {
        return this.airtower.client.io
    }

    get dataurl() {
        const protocol = this.io.uri.includes('https') ? 'https://' : 'http://'
        const hostname = this.io.engine.hostname
        const port = this.io.engine.port
        const path = this.io.engine.opts.path.replace('socket/', '')
        return `${protocol}${hostname}:${port}${path}`
    }

    create() {
        super.create()

        this.onBugsSelect()
        this.resetIssueList()
    }

    onBugsSelect() {
        if (this.mode == 'BUG') return

        this.mode = 'BUG'
        this.yours.text = 'Your reports'
        this.newIssue.text = 'Report a bug'
        this.all.text = 'All reports'
        this.title.text = 'BUGS'

        this.interface.scaleToFixedSize(this.title)
        this.showAll()
    }

    onSuggestionsSelect() {
        if (this.mode == 'SGN') return

        this.mode = 'SGN'
        this.yours.text = 'Your suggestions'
        this.newIssue.text = 'Suggest a feature'
        this.all.text = 'All suggestions'
        this.title.text = 'SUGGESTIONS'

        this.interface.scaleToFixedSize(this.title)
        this.showAll()
    }

    onReportsSelect() {
        if (this.mode == 'RPT') return

        this.mode = 'RPT'
        this.yours.text = 'Your reports'
        this.newIssue.text = 'Report a player'
        this.all.text = ''
        this.title.text = 'PLAYER REPORTS'

        this.interface.scaleToFixedSize(this.title)
        this.showYours()
    }

    resetIssueList() {
        this.keys.forEach((key) => (key.text = ''))
        this.resolutions.forEach((resolution) => (resolution.text = ''))
        this.titles.forEach((title) => (title.text = ''))

        this.issueList = []
    }

    showAll() {
        this.resetIssueList()
        fetch(this.dataurl + 'getissues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                type: 'BUG',
                reporter: 'all',
                limit: 5,
                from: 0,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.issueList = data
                if (this.issueList.length == 0) {
                    this.clearIssue()
                } else {
                    this.issueList.forEach((issue, index) => {
                        this.keys[index].text = issue.key
                        this.interface.scaleToFixedSize(this.keys[index])

                        this.resolutions[index].text = issue.resolution
                        switch (issue.resolution) {
                            case 'Fixed':
                                this.resolutions[index].setStyle({color: '#0f7410ff'})
                                break
                            case "Won't fix":
                                this.resolutions[index].setStyle({color: '#97033bff'})
                                break
                            case 'Duplicate':
                                this.resolutions[index].setStyle({color: '#d6d10fff'})
                                break
                            case 'Cannot Reproduce':
                                this.resolutions[index].setStyle({color: '#92068fff'})
                                break
                            case 'Not a bug':
                                this.resolutions[index].setStyle({color: '#0b384bff'})
                                break
                            case 'Unresolved':
                                this.resolutions[index].setStyle({color: '#c60f0fff'})
                                break
                        }
                        this.interface.scaleToFixedSize(this.resolutions[index])

                        this.titles[index].text = issue.title
                        this.interface.verticallyCenterText(this.titles[index])
                    })

                    this.showIssue(this.issueList[0])
                }
            })
    }

    createNew() {}

    showYours() {
        this.resetIssueList()
    }

    showIssue(issue) {}

    clearIssue() {}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
