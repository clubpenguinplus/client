import Closeup from './Closeup'
import {Button, SimpleButton, LocalisedString, Interactive, InputText} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Report extends Closeup {
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
        /** @type {Phaser.GameObjects.Rectangle} */
        this.issue4Button
        /** @type {Phaser.GameObjects.Rectangle} */
        this.issue3Button
        /** @type {Phaser.GameObjects.Rectangle} */
        this.issue2Button
        /** @type {Phaser.GameObjects.Rectangle} */
        this.issue1Button
        /** @type {Phaser.GameObjects.Rectangle} */
        this.issue0Button
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
        /** @type {Phaser.GameObjects.Rectangle} */
        this.allButton
        /** @type {Phaser.GameObjects.Text} */
        this.nextprevpage
        /** @type {Phaser.GameObjects.Container} */
        this.main
        /** @type {Phaser.GameObjects.Text} */
        this.issueKeyMain
        /** @type {Phaser.GameObjects.Text} */
        this.issueTitleMain
        /** @type {Phaser.GameObjects.Text} */
        this.descriptionHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.descriptionBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.resolutionTextMain
        /** @type {Phaser.GameObjects.Text} */
        this.commentsHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.commentsBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.detailsHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.reportVerHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.fixVerHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.assigneeHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.reporterHeaderMain
        /** @type {Phaser.GameObjects.Text} */
        this.reportVerBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.fixVerBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.assigneeBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.reporterBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.priorityMain
        /** @type {Phaser.GameObjects.Text} */
        this.createdBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.updatedBodyMain
        /** @type {Phaser.GameObjects.Text} */
        this.noIssue
        /** @type {Phaser.GameObjects.Container} */
        this.createNew
        /** @type {NinePatchContainer} */
        this.bg_1
        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Text} */
        this.newTitle
        /** @type {Phaser.GameObjects.Text} */
        this.newBody
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
        key1.setStyle({color: '#642602ff', fixedWidth: 110, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key1.setLineSpacing(5)
        key1.setWordWrapWidth(225)

        // resolution1
        const resolution1 = this.add.text(378, 220, '', {})
        resolution1.setOrigin(1, 0.5)
        resolution1.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 162, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution1.setLineSpacing(5)
        resolution1.setWordWrapWidth(225)

        // title1
        const title1 = this.add.text(233, 280, '', {})
        title1.setOrigin(0.5, 0.5)
        title1.setStyle({color: '#642602ff', fixedWidth: 285, fontFamily: 'cpBurbankSmall', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title1.setLineSpacing(-5)
        title1.setWordWrapWidth(285)

        // key
        const key = this.add.text(90, 348, '', {})
        key.setOrigin(0, 0.5)
        key.setStyle({color: '#642602ff', fixedWidth: 110, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key.setLineSpacing(5)
        key.setWordWrapWidth(225)

        // resolution
        const resolution = this.add.text(378, 348, '', {})
        resolution.setOrigin(1, 0.5)
        resolution.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 162, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution.setLineSpacing(5)
        resolution.setWordWrapWidth(225)

        // title_1
        const title_1 = this.add.text(233, 408, '', {})
        title_1.setOrigin(0.5, 0.5)
        title_1.setStyle({color: '#642602ff', fixedWidth: 285, fontFamily: 'cpBurbankSmall', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_1.setLineSpacing(-5)
        title_1.setWordWrapWidth(285)

        // key_1
        const key_1 = this.add.text(90, 476, '', {})
        key_1.setOrigin(0, 0.5)
        key_1.setStyle({color: '#642602ff', fixedWidth: 110, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key_1.setLineSpacing(5)
        key_1.setWordWrapWidth(225)

        // resolution_1
        const resolution_1 = this.add.text(378, 476, '', {})
        resolution_1.setOrigin(1, 0.5)
        resolution_1.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 162, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution_1.setLineSpacing(5)
        resolution_1.setWordWrapWidth(225)

        // title_2
        const title_2 = this.add.text(233, 536, '', {})
        title_2.setOrigin(0.5, 0.5)
        title_2.setStyle({color: '#642602ff', fixedWidth: 285, fontFamily: 'cpBurbankSmall', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_2.setLineSpacing(-5)
        title_2.setWordWrapWidth(285)

        // key_2
        const key_2 = this.add.text(90, 604, '', {})
        key_2.setOrigin(0, 0.5)
        key_2.setStyle({color: '#642602ff', fixedWidth: 110, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key_2.setLineSpacing(5)
        key_2.setWordWrapWidth(225)

        // resolution_2
        const resolution_2 = this.add.text(378, 604, '', {})
        resolution_2.setOrigin(1, 0.5)
        resolution_2.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 162, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution_2.setLineSpacing(5)
        resolution_2.setWordWrapWidth(225)

        // title_3
        const title_3 = this.add.text(233, 664, '', {})
        title_3.setOrigin(0.5, 0.5)
        title_3.setStyle({color: '#642602ff', fixedWidth: 285, fontFamily: 'cpBurbankSmall', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title_3.setLineSpacing(-5)
        title_3.setWordWrapWidth(285)

        // key_3
        const key_3 = this.add.text(90, 732, '', {})
        key_3.setOrigin(0, 0.5)
        key_3.setStyle({color: '#642602ff', fixedWidth: 110, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        key_3.setLineSpacing(5)
        key_3.setWordWrapWidth(225)

        // resolution_3
        const resolution_3 = this.add.text(378, 732, '', {})
        resolution_3.setOrigin(1, 0.5)
        resolution_3.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 162, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolution_3.setLineSpacing(5)
        resolution_3.setWordWrapWidth(225)

        // title_4
        const title_4 = this.add.text(233, 792, '', {})
        title_4.setOrigin(0.5, 0.5)
        title_4.setStyle({color: '#642602ff', fixedWidth: 285, fontFamily: 'cpBurbankSmall', fontSize: '24px', maxLines: 3, 'shadow.color': '#ffffffff', 'shadow.fill': true})
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

        // issue4Button
        const issue4Button = this.add.rectangle(230, 772, 304, 128)
        issue4Button.isStroked = true
        issue4Button.strokeColor = 10304001
        issue4Button.lineWidth = 5

        // issue3Button
        const issue3Button = this.add.rectangle(230, 644, 304, 128)
        issue3Button.isStroked = true
        issue3Button.strokeColor = 10304001
        issue3Button.lineWidth = 5

        // issue2Button
        const issue2Button = this.add.rectangle(230, 516, 304, 128)
        issue2Button.isStroked = true
        issue2Button.strokeColor = 10304001
        issue2Button.lineWidth = 5

        // issue1Button
        const issue1Button = this.add.rectangle(230, 388, 304, 128)
        issue1Button.isStroked = true
        issue1Button.strokeColor = 10304001
        issue1Button.lineWidth = 5

        // issue0Button
        const issue0Button = this.add.rectangle(230, 260, 304, 128)
        issue0Button.isStroked = true
        issue0Button.strokeColor = 10304001
        issue0Button.lineWidth = 5

        // title
        const title = this.add.text(760, 141, '', {})
        title.setOrigin(0.5, 0.5)
        title.text = 'BUGS'
        title.setStyle({align: 'center', color: '#642602ff', fixedWidth: 265, fontFamily: 'cpBurbankSmall', fontSize: '48px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title.setLineSpacing(5)
        title.setWordWrapWidth(265)

        // yours
        const yours = this.add.text(216.8, 141, '', {})
        yours.setOrigin(0.5, 0.5)
        yours.text = 'Your reports'
        yours.setStyle({align: 'center', color: '#642602ff', fixedWidth: 225, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        yours.setLineSpacing(5)
        yours.setWordWrapWidth(225)

        // newIssue
        const newIssue = this.add.text(488.4, 141, '', {})
        newIssue.setOrigin(0.5, 0.5)
        newIssue.text = 'Report a bug'
        newIssue.setStyle({align: 'center', color: '#642602ff', fixedWidth: 225, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        newIssue.setLineSpacing(5)
        newIssue.setWordWrapWidth(225)

        // selections
        const selections = this.add.text(1303.2, 141, '', {})
        selections.setOrigin(0.5, 0.5)
        selections.text = 'Bugs\nSuggestions\nPlayer reports'
        selections.setStyle({align: 'right', color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        selections.setPadding({right: 35})
        selections.setLineSpacing(5)
        selections.setWordWrapWidth(550)

        // all
        const all = this.add.text(1031.6, 141, '', {})
        all.setOrigin(0.5, 0.5)
        all.text = 'All reports'
        all.setStyle({align: 'center', color: '#642602ff', fixedWidth: 225, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
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
        const white_x = this.add.image(1425, 93, 'main', 'white-x')
        white_x.scaleX = 0.7
        white_x.scaleY = 0.7

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1297, 107, 200, 30)

        // rectangle_8
        const rectangle_8 = this.add.rectangle(1297, 142, 200, 30)

        // rectangle_9
        const rectangle_9 = this.add.rectangle(1297, 176, 200, 30)

        // allButton
        const allButton = this.add.rectangle(1033, 141, 250, 100)

        // rectangle_11
        const rectangle_11 = this.add.rectangle(497, 139, 250, 100)

        // rectangle_12
        const rectangle_12 = this.add.rectangle(222, 140, 250, 100)

        // nextprevpage
        const nextprevpage = this.add.text(238, 857, '', {})
        nextprevpage.setOrigin(0.5, 0.5)
        nextprevpage.text = 'PREVIOUS       NEXT'
        nextprevpage.setStyle({align: 'center', color: '#642602ff', fixedWidth: 270, fontFamily: 'cpBurbankSmall', fontSize: '28px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        nextprevpage.setLineSpacing(5)

        // rectangle_3
        const rectangle_3 = this.add.rectangle(269, 859, 5, 50)
        rectangle_3.isFilled = true
        rectangle_3.fillColor = 10304001

        // rectangle_13
        const rectangle_13 = this.add.rectangle(181, 857, 160, 30)

        // rectangle_14
        const rectangle_14 = this.add.rectangle(327, 856, 100, 30)

        // main
        const main = this.add.container(400, 226)
        main.visible = false

        // issueKeyMain
        const issueKeyMain = this.add.text(0, 0, '', {})
        issueKeyMain.setOrigin(0, 0.5)
        issueKeyMain.text = 'BUG-110'
        issueKeyMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '32px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        issueKeyMain.setLineSpacing(5)
        issueKeyMain.setWordWrapWidth(225)
        main.add(issueKeyMain)

        // issueTitleMain
        const issueTitleMain = this.add.text(0, 62, '', {})
        issueTitleMain.setOrigin(0, 0.5)
        issueTitleMain.text = 'Issue Title'
        issueTitleMain.setStyle({color: '#642602ff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        issueTitleMain.setLineSpacing(5)
        issueTitleMain.setWordWrapWidth(600)
        main.add(issueTitleMain)

        // descriptionHeaderMain
        const descriptionHeaderMain = this.add.text(0, 119, '', {})
        descriptionHeaderMain.setOrigin(0, 0.5)
        descriptionHeaderMain.text = 'Description'
        descriptionHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        descriptionHeaderMain.setLineSpacing(5)
        descriptionHeaderMain.setWordWrapWidth(225)
        main.add(descriptionHeaderMain)

        // descriptionBodyMain
        const descriptionBodyMain = this.add.text(0, 152, '', {})
        descriptionBodyMain.text = 'This is a more detailed description of the bug. The user will provide as much detail as possible, including where they found it, and what is meant to happen.'
        descriptionBodyMain.setStyle({color: '#ffffffff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '24px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        descriptionBodyMain.setLineSpacing(5)
        descriptionBodyMain.setWordWrapWidth(600)
        main.add(descriptionBodyMain)

        // resolutionTextMain
        const resolutionTextMain = this.add.text(1025, 3, '', {})
        resolutionTextMain.setOrigin(1, 0.5)
        resolutionTextMain.text = 'Unresolved'
        resolutionTextMain.setStyle({align: 'right', color: '#c60f0fff', fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '36px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        resolutionTextMain.setLineSpacing(5)
        resolutionTextMain.setWordWrapWidth(resolutionTextMain.style.wordWrapWidth, true)
        main.add(resolutionTextMain)

        // commentsHeaderMain
        const commentsHeaderMain = this.add.text(0, 379, '', {})
        commentsHeaderMain.setOrigin(0, 0.5)
        commentsHeaderMain.text = 'Comments'
        commentsHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        commentsHeaderMain.setLineSpacing(5)
        commentsHeaderMain.setWordWrapWidth(225)
        main.add(commentsHeaderMain)

        // commentsBodyMain
        const commentsBodyMain = this.add.text(0, 417, '', {})
        commentsBodyMain.text = 'Octo says:\nThis is a comment. I will make notes on each report to let the user know we are working on it.\n\nJohn Says:\nOther developers can also make notes on the issue'
        commentsBodyMain.setStyle({color: '#ffffffff', fixedWidth: 1000, fontFamily: 'cpBurbankSmall', fontSize: '24px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        commentsBodyMain.setLineSpacing(5)
        commentsBodyMain.setWordWrapWidth(1000)
        main.add(commentsBodyMain)

        // detailsHeaderMain
        const detailsHeaderMain = this.add.text(680, 81, '', {})
        detailsHeaderMain.setOrigin(0, 0.5)
        detailsHeaderMain.text = 'Details'
        detailsHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        detailsHeaderMain.setLineSpacing(5)
        detailsHeaderMain.setWordWrapWidth(225)
        main.add(detailsHeaderMain)

        // reportVerHeaderMain
        const reportVerHeaderMain = this.add.text(680, 136, '', {})
        reportVerHeaderMain.setOrigin(0, 0.5)
        reportVerHeaderMain.text = 'Found in version:'
        reportVerHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        reportVerHeaderMain.setLineSpacing(5)
        reportVerHeaderMain.setWordWrapWidth(225)
        main.add(reportVerHeaderMain)

        // fixVerHeaderMain
        const fixVerHeaderMain = this.add.text(680, 176, '', {})
        fixVerHeaderMain.setOrigin(0, 0.5)
        fixVerHeaderMain.text = 'Fixed in version:'
        fixVerHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        fixVerHeaderMain.setLineSpacing(5)
        fixVerHeaderMain.setWordWrapWidth(225)
        main.add(fixVerHeaderMain)

        // assigneeHeaderMain
        const assigneeHeaderMain = this.add.text(680, 216, '', {})
        assigneeHeaderMain.setOrigin(0, 0.5)
        assigneeHeaderMain.text = 'Assignee:'
        assigneeHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        assigneeHeaderMain.setLineSpacing(5)
        assigneeHeaderMain.setWordWrapWidth(225)
        main.add(assigneeHeaderMain)

        // reporterHeaderMain
        const reporterHeaderMain = this.add.text(680, 256, '', {})
        reporterHeaderMain.setOrigin(0, 0.5)
        reporterHeaderMain.text = 'Reported by:'
        reporterHeaderMain.setStyle({color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        reporterHeaderMain.setLineSpacing(5)
        reporterHeaderMain.setWordWrapWidth(225)
        main.add(reporterHeaderMain)

        // reportVerBodyMain
        const reportVerBodyMain = this.add.text(1027, 136, '', {})
        reportVerBodyMain.setOrigin(1, 0.5)
        reportVerBodyMain.text = 'v0.1.0'
        reportVerBodyMain.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        reportVerBodyMain.setLineSpacing(5)
        reportVerBodyMain.setWordWrapWidth(225)
        main.add(reportVerBodyMain)

        // fixVerBodyMain
        const fixVerBodyMain = this.add.text(1027, 176, '', {})
        fixVerBodyMain.setOrigin(1, 0.5)
        fixVerBodyMain.text = 'v0.1.1'
        fixVerBodyMain.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        fixVerBodyMain.setLineSpacing(5)
        fixVerBodyMain.setWordWrapWidth(225)
        main.add(fixVerBodyMain)

        // assigneeBodyMain
        const assigneeBodyMain = this.add.text(1027, 216, '', {})
        assigneeBodyMain.setOrigin(1, 0.5)
        assigneeBodyMain.text = 'Octo'
        assigneeBodyMain.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        assigneeBodyMain.setLineSpacing(5)
        assigneeBodyMain.setWordWrapWidth(225)
        main.add(assigneeBodyMain)

        // reporterBodyMain
        const reporterBodyMain = this.add.text(1027, 256, '', {})
        reporterBodyMain.setOrigin(1, 0.5)
        reporterBodyMain.text = 'Testpenguin'
        reporterBodyMain.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        reporterBodyMain.setLineSpacing(5)
        reporterBodyMain.setWordWrapWidth(225)
        main.add(reporterBodyMain)

        // priorityMain
        const priorityMain = this.add.text(600, 119, '', {})
        priorityMain.setOrigin(1, 0.5)
        priorityMain.text = 'High Priority'
        priorityMain.setStyle({align: 'right', color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        priorityMain.setLineSpacing(5)
        priorityMain.setWordWrapWidth(225)
        main.add(priorityMain)

        // createdBodyMain
        const createdBodyMain = this.add.text(1027, 307, '', {})
        createdBodyMain.setOrigin(1, 0.5)
        createdBodyMain.text = 'Created 3 hours ago'
        createdBodyMain.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '18px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        createdBodyMain.setLineSpacing(5)
        createdBodyMain.setWordWrapWidth(225)
        main.add(createdBodyMain)

        // updatedBodyMain
        const updatedBodyMain = this.add.text(1027, 333, '', {})
        updatedBodyMain.setOrigin(1, 0.5)
        updatedBodyMain.text = 'Updated 1 hour ago'
        updatedBodyMain.setStyle({align: 'right', color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '18px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        updatedBodyMain.setLineSpacing(5)
        updatedBodyMain.setWordWrapWidth(225)
        main.add(updatedBodyMain)

        // noIssue
        const noIssue = this.add.text(906, 523, '', {})
        noIssue.setOrigin(0.5, 0.5)
        noIssue.text = 'No issue selected'
        noIssue.setStyle({align: 'center', color: '#642602ff', fontFamily: 'cpBurbankSmall', fontSize: '50px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        noIssue.setLineSpacing(5)

        // createNew
        const createNew = this.add.container(-0.0018489741966214533, -0.00029572421983315323)
        createNew.visible = false

        // block_1
        const block_1 = this.add.rectangle(760.0018599281885, 480.0002907075048, 1520, 960)
        block_1.isFilled = true
        block_1.fillColor = 0
        block_1.fillAlpha = 0.3
        createNew.add(block_1)

        // bg_1
        const bg_1 = this.add.ninePatchContainer(760.0018599281885, 480.0002907075048, 840, 840, 'banning', 'banned_bg')
        bg_1.marginLeft = 50
        bg_1.marginTop = 50
        bg_1.marginRight = 50
        bg_1.marginBottom = 50
        createNew.add(bg_1)

        // rectangle_15
        const rectangle_15 = this.add.rectangle(760.0018599281885, 499.0002907075048, 700, 500)
        rectangle_15.isFilled = true
        rectangle_15.isStroked = true
        rectangle_15.strokeColor = 10304001
        rectangle_15.lineWidth = 7
        createNew.add(rectangle_15)

        // long_button
        const long_button = this.add.image(760.0018599281885, 811.000290707505, 'banning', 'long_button')
        createNew.add(long_button)

        // text
        const text = this.add.text(760.0018599281885, 811.000290707505, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'Submit'
        text.setStyle({align: 'center', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        text.setLineSpacing(5)
        text.setWordWrapWidth(550)
        createNew.add(text)

        // rectangle_4
        const rectangle_4 = this.add.rectangle(760.0018599281885, 177.0002907075049, 700, 100)
        rectangle_4.isFilled = true
        rectangle_4.isStroked = true
        rectangle_4.strokeColor = 10304001
        rectangle_4.lineWidth = 7
        createNew.add(rectangle_4)

        // newTitle
        const newTitle = this.add.text(433.0018599281886, 178.0002907075049, '', {})
        newTitle.setOrigin(0, 0.5)
        newTitle.text = 'Enter a title'
        newTitle.setStyle({color: '#642602ff', fixedWidth: 650, fontFamily: 'cpBurbankSmall', fontSize: '32px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        newTitle.setLineSpacing(5)
        createNew.add(newTitle)

        // newBody
        const newBody = this.add.text(433.0018599281886, 272.0002907075048, '', {})
        newBody.text = 'Please give a detailed description of what occurred, what you\nexpected to happen, and how we can reproduce this. If you need to,\nyou can upload images/video to another site and link them.'
        newBody.setStyle({color: '#642602ff', fixedWidth: 650, fontFamily: 'cpBurbankSmall', fontSize: '20px', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        createNew.add(newBody)

        // white_x_1
        const white_x_1 = this.add.image(1143, 92, 'main', 'white-x')
        white_x_1.scaleX = 0.7
        white_x_1.scaleY = 0.7
        createNew.add(white_x_1)

        // lists
        const keys = [key1, key, key_1, key_2, key_3]
        const resolutions = [resolution1, resolution, resolution_1, resolution_2, resolution_3]
        const titles = [title1, title_1, title_2, title_3, title_4]

        // block (components)
        new Interactive(block)

        // issue4Button (components)
        const issue4ButtonSimpleButton = new SimpleButton(issue4Button)
        issue4ButtonSimpleButton.callback = () => this.showIssue(this.issueList[4])

        // issue3Button (components)
        const issue3ButtonSimpleButton = new SimpleButton(issue3Button)
        issue3ButtonSimpleButton.callback = () => this.showIssue(this.issueList[3])

        // issue2Button (components)
        const issue2ButtonSimpleButton = new SimpleButton(issue2Button)
        issue2ButtonSimpleButton.callback = () => this.showIssue(this.issueList[2])

        // issue1Button (components)
        const issue1ButtonSimpleButton = new SimpleButton(issue1Button)
        issue1ButtonSimpleButton.callback = () => this.showIssue(this.issueList[1])

        // issue0Button (components)
        const issue0ButtonSimpleButton = new SimpleButton(issue0Button)
        issue0ButtonSimpleButton.callback = () => this.showIssue(this.issueList[0])

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => this.stop()

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2)
        rectangle_2SimpleButton.callback = () => this.onBugsSelect()

        // rectangle_8 (components)
        const rectangle_8SimpleButton = new SimpleButton(rectangle_8)
        rectangle_8SimpleButton.callback = () => this.onSuggestionsSelect()

        // rectangle_9 (components)
        const rectangle_9SimpleButton = new SimpleButton(rectangle_9)
        rectangle_9SimpleButton.callback = () => this.onReportsSelect()

        // allButton (components)
        const allButtonSimpleButton = new SimpleButton(allButton)
        allButtonSimpleButton.callback = () => this.showAll()

        // rectangle_11 (components)
        const rectangle_11SimpleButton = new SimpleButton(rectangle_11)
        rectangle_11SimpleButton.callback = () => this.createIssue()

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

        // long_button (components)
        const long_buttonButton = new Button(long_button)
        long_buttonButton.callback = () => this.submitIssue()

        // newTitle (components)
        const newTitleInputText = new InputText(newTitle)
        newTitleInputText.multiline = true
        newTitleInputText.charlimit = 80

        // newBody (components)
        const newBodyInputText = new InputText(newBody)
        newBodyInputText.multiline = true

        // white_x_1 (components)
        const white_x_1SimpleButton = new SimpleButton(white_x_1)
        white_x_1SimpleButton.callback = () => {
            this.createNew.visible = false
        }

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
        this.issue4Button = issue4Button
        this.issue3Button = issue3Button
        this.issue2Button = issue2Button
        this.issue1Button = issue1Button
        this.issue0Button = issue0Button
        this.title = title
        this.yours = yours
        this.newIssue = newIssue
        this.selections = selections
        this.all = all
        this.allButton = allButton
        this.nextprevpage = nextprevpage
        this.main = main
        this.issueKeyMain = issueKeyMain
        this.issueTitleMain = issueTitleMain
        this.descriptionHeaderMain = descriptionHeaderMain
        this.descriptionBodyMain = descriptionBodyMain
        this.resolutionTextMain = resolutionTextMain
        this.commentsHeaderMain = commentsHeaderMain
        this.commentsBodyMain = commentsBodyMain
        this.detailsHeaderMain = detailsHeaderMain
        this.reportVerHeaderMain = reportVerHeaderMain
        this.fixVerHeaderMain = fixVerHeaderMain
        this.assigneeHeaderMain = assigneeHeaderMain
        this.reporterHeaderMain = reporterHeaderMain
        this.reportVerBodyMain = reportVerBodyMain
        this.fixVerBodyMain = fixVerBodyMain
        this.assigneeBodyMain = assigneeBodyMain
        this.reporterBodyMain = reporterBodyMain
        this.priorityMain = priorityMain
        this.createdBodyMain = createdBodyMain
        this.updatedBodyMain = updatedBodyMain
        this.noIssue = noIssue
        this.createNew = createNew
        this.bg_1 = bg_1
        this.text = text
        this.newTitle = newTitle
        this.newBody = newBody
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

    get resolutionColors() {
        return {
            Fixed: '#0f7410ff',
            'Action Taken': '#0f7410ff',
            Implemented: '#0f7410ff',
            "Won't Fix": '#c60f0fff',
            "Won't Take Action": '#c60f0fff',
            "Won't Do": '#c60f0fff',
            Duplicate: '#d6d10fff',
            'Cannot Reproduce': '#92068fff',
            'Not a bug': '#97033bff',
            Open: '#0b384bff',
            Unreviewed: '#0b384bff',
            'In Consideration': '#0b384bff',
            'In Progress': '#0b384bff',
            Reopened: '#0b384bff',
            'Looking Into': '#0b384bff'
        }
    }

    create() {
        super.create()

        this.resetIssueList()
        this.clearIssue()

        if (this.interface.reportUser) {
            this.onReportsSelect()
            this.createIssue(this.interface.reportUser)
            this.interface.reportUser = null
        } else {
            this.onBugsSelect()
        }
    }

    onBugsSelect() {
        if (this.mode == 'BUG') return

        this.mode = 'BUG'
        this.yours.text = 'Your reports'
        this.newIssue.text = 'Report a bug'
        this.all.text = 'All reports'
        this.allButton.visible = true
        this.title.text = 'BUGS'

        this.page = 0
        this.main.visible = false

        this.showAll()
    }

    onSuggestionsSelect() {
        if (this.mode == 'SGN') return

        this.mode = 'SGN'
        this.yours.text = 'Your suggestions'
        this.newIssue.text = 'Suggest a feature'
        this.all.text = 'All suggestions'
        this.allButton.visible = true
        this.title.text = 'SUGGESTIONS'

        this.page = 0
        this.main.visible = false

        this.showAll()
    }

    onReportsSelect() {
        if (this.mode == 'RPT') return

        this.mode = 'RPT'
        this.yours.text = 'Your reports'
        this.newIssue.text = 'Report a player'
        this.all.text = ''
        this.allButton.visible = false
        this.title.text = 'PLAYER REPORTS'

        this.page = 0
        this.main.visible = false

        this.showYours()
    }

    resetIssueList() {
        for (let i = 0; i < 5; i++) {
            this.keys[i].text = ''
            this.resolutions[i].text = ''
            this.titles[i].text = ''
            this['issue' + i + 'Button'].removeInteractive()
        }

        this.issueList = []
    }

    showAll() {
        this.resetIssueList()
        if (this.reporter != 'all') {
            this.reporter = 'all'
            this.page = 0
            this.clearIssue()
        }

        if (!this.main.visible) {
            this.noIssue.text = 'Loading issues...'
            this.noIssue.visible = true
        }

        fetch(this.dataurl + 'getissues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                type: this.mode,
                reporter: 'all',
                limit: 5,
                from: this.page * 5,
                sessionId: this.shell.client.sessionId
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    this.main.visible = false
                    this.noIssue.text = data.error
                    this.noIssue.visible = true
                    return
                }

                this.issueList = data
                if (this.issueList.length == 0) {
                    if (this.page > 0) {
                        this.page--
                        this.showAll()
                    }

                    this.clearIssue()
                } else {
                    this.manageIssueList()
                }
            })
    }

    manageIssueList() {
        this.issueList.forEach((issue, index) => {
            this.keys[index].text = issue.key

            this.resolutions[index].text = issue.resolution
            this.resolutions[index].setStyle({color: this.resolutionColors[issue.resolution]})

            this.titles[index].text = issue.title

            this['issue' + index + 'Button'].setInteractive({
                useHandCursor: true
            })
        })

        if (!this.main.visible) {
            this.showIssue(this.issueList[0])
        }
    }

    createIssue(username) {
        this.username = username
        this.createNew.visible = true
        if (this.newBody.__InputText.clickZone) this.newBody.__InputText.clickZone.visible = true
        if (this.newTitle.__InputText.clickZone) this.newTitle.__InputText.clickZone.visible = true
        if (this.mode == 'BUG') {
            this.newTitle.__InputText.setDefaultText('Enter a title for your bug report')
            this.newBody.__InputText.setDefaultText('Please give a detailed description of the bug you found, including what occured and the expected behavior. If possible, please include steps to reproduce the bug. If you have a screenshot or video of the bug, please upload it to a file hosting site (eg Imgur or YouTube) and include the link in your report.')
        } else if (this.mode == 'SGN') {
            this.newTitle.__InputText.setDefaultText('Enter a title for your suggestion')
            this.newBody.__InputText.setDefaultText('Please give a detailed description of the feature you would like to see added to the game. If possible, please include any ideas you have for how the feature should work.\n\nIf this is a feature from the original Club Penguin, please first check to see if it has already been suggested, and if not, disclose that it is from the original game.')
        } else if (this.mode == 'RPT') {
            this.newTitle.__InputText.setDefaultText(username ? username : "Enter the player's username")
            this.newBody.__InputText.setDefaultText('Please detail the actions of the player you are reporting. If possible, please include any evidence you have of the player breaking the rules, such as screenshots or videos. If you have a screenshot or video of the player breaking the rules, please upload it to a file hosting site (eg Imgur or YouTube) and include the link in your report.')
        }
    }

    submitIssue() {
        this.createNew.visible = false
        this.newBody.__InputText.clickZone.visible = false
        this.newTitle.__InputText.clickZone.visible = false

        if (this.newTitle.text == '' || this.newBody.text == '' || !this.newBody.__InputText.userClicked || (!this.newTitle.__InputText.userClicked && this.newTitle.text != this.username)) {
            return this.interface.prompt.showError(this.crumbs.getError('62'))
        }

        let title = this.mode == 'RPT' ? `${this.newTitle.text} Player Report` : this.newTitle.text

        fetch(this.dataurl + 'createissue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                type: this.mode,
                title: title,
                body: this.newBody.text,
                sessionId: this.shell.client.sessionId,
                version: `v${VERSION}`
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    return this.interface.prompt.showError(data.error)
                }
                if ((this.mode = 'RPT')) {
                    this.showYours()
                } else {
                    this.showAll()
                }
            })
    }

    showYours() {
        this.resetIssueList()

        if (this.reporter != 'you') {
            this.reporter = 'you'
            this.page = 0
            this.clearIssue()
        }

        if (!this.main.visible) {
            this.noIssue.text = 'Loading issues...'
            this.noIssue.visible = true
        }

        fetch(this.dataurl + 'getissues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                type: this.mode,
                reporter: this.shell.client.id,
                limit: 5,
                from: this.page * 5,
                sessionId: this.shell.client.sessionId
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    this.main.visible = false
                    this.noIssue.text = data.error
                    this.noIssue.visible = true
                    return
                }

                this.issueList = data
                if (this.issueList.length == 0) {
                    if (this.page > 0) {
                        this.page--
                        this.showAll()
                    }

                    this.clearIssue()
                } else {
                    this.manageIssueList()
                }
            })
    }

    showIssue(issue) {
        this.clearIssue()
        this.issueKeyMain.text = issue.key
        this.issueTitleMain.text = issue.title
        this.descriptionBodyMain.text = issue.description

        this.resolutionTextMain.text = issue.resolution
        this.resolutionTextMain.setStyle({color: this.resolutionColors[issue.resolution]})

        if (issue.duplicates != 'None') {
            this.resolutionTextMain.text += ` of ${issue.duplicates}`

            this.resolutionTextMain.setInteractive({
                useHandCursor: true
            })
            this.resolutionTextMain.on('pointerdown', () => {
                this.getIssue(issue.duplicates)
            })
        } else {
            this.resolutionTextMain.removeInteractive()
        }

        if (issue.key.includes('BUG')) {
            this.reportVerHeaderMain.text = 'Found in version:'
            this.reportVerBodyMain.text = issue.affectsVersion
            this.fixVerHeaderMain.text = 'Fixed in version:'
            this.fixVerBodyMain.text = issue.fixVersion
            this.assigneeBodyMain.text = issue.assignee
            this.reporterBodyMain.text = issue.reporter
            this.priorityMain.text = issue.priority + ' Priority'

            this.assigneeHeaderMain.visible = true
            this.assigneeBodyMain.visible = true
            this.reporterHeaderMain.visible = true
            this.reporterBodyMain.visible = true
            this.priorityMain.visible = true
        } else {
            this.reportVerHeaderMain.text = 'Assignee:'
            this.reportVerBodyMain.text = issue.assignee
            this.fixVerHeaderMain.text = 'Reported by:'
            this.fixVerBodyMain.text = issue.reporter

            this.assigneeHeaderMain.visible = false
            this.assigneeBodyMain.visible = false
            this.reporterHeaderMain.visible = false
            this.reporterBodyMain.visible = false
            this.priorityMain.visible = false
        }

        let createdDate = new Date(issue.created)
        this.createdBodyMain.text = `Created: ${this.shell.getTimeAgo(createdDate)}`

        let updatedDate = new Date(issue.updated)
        this.updatedBodyMain.text = `Updated: ${this.shell.getTimeAgo(updatedDate)}`

        this.noIssue.visible = false
        this.main.visible = true

        this.getIssueComments(issue.key, issue.id)
    }

    getIssue(key) {
        this.main.visible = false
        this.noIssue.text = 'Loading issue...'
        this.noIssue.visible = true

        fetch(this.dataurl + 'getissue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                key: key,
                sessionId: this.shell.client.sessionId
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    this.main.visible = false
                    this.noIssue.text = data.error
                    this.noIssue.visible = true
                    return
                }
                this.showIssue(data)
            })
    }

    clearIssue() {
        this.issueKeyMain.text = ''
        this.issueTitleMain.text = ''
        this.descriptionBodyMain.text = ''
        this.resolutionTextMain.text = ''
        this.commentsBodyMain.text = ''
        this.reportVerBodyMain.text = ''
        this.fixVerBodyMain.text = ''
        this.assigneeBodyMain.text = ''
        this.reporterBodyMain.text = ''
        this.priorityMain.text = ''
        this.createdBodyMain.text = ''
        this.updatedBodyMain.text = ''
        this.main.visible = false
        this.noIssue.text = 'No issue selected'
        this.noIssue.visible = true
    }

    getIssueComments(key, id) {
        if (this.issueKeyMain.text != key || !this.main.visible) return

        this.commentsBodyMain.text = 'Loading comments...'

        fetch(this.dataurl + 'getissuecomments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                id: id,
                sessionId: this.shell.client.sessionId
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    this.main.visible = false
                    this.noIssue.text = data.error
                    this.noIssue.visible = true
                    return
                }
                this.commentsBodyMain.text = ''
                data.reverse().forEach((comment) => {
                    let commentDate = new Date(comment.created)
                    if (comment.created != comment.updated) {
                        let updatedDate = new Date(comment.updated)
                        this.commentsBodyMain.text += `${comment.author} - ${this.shell.getTimeAgo(commentDate)} (edited ${this.shell.getTimeAgo(updatedDate)})\n${comment.body}\n\n`
                    } else {
                        this.commentsBodyMain.text += `${comment.author} - ${this.shell.getTimeAgo(commentDate)}\n${comment.body}\n\n`
                    }
                })
                this.commentsBodyMain.text = this.commentsBodyMain.text.trimEnd('\n')
            })
    }

    nextPage() {
        if (this.issueList.length < 5) return
        this.page++
        this.showAll()
    }

    prevPage() {
        if (this.page == 0) return
        this.page--
        this.showAll()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
