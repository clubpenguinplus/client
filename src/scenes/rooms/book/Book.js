import RoomScene from '../RoomScene'

import {SimpleButton, Button, MoveTo, ShowHint, Seat} from '@components/components'
/* START OF COMPILED CODE */

export default class Book extends RoomScene {
    constructor() {
        super('Book')

        /** @type {Phaser.GameObjects.Container} */
        this.mancala_board
        /** @type {Phaser.GameObjects.Container} */
        this.mancala_board_1
        /** @type {Phaser.GameObjects.Container} */
        this.mancala_board_2
        /** @type {Phaser.GameObjects.Container} */
        this.mancala_board_3
        /** @type {Phaser.GameObjects.Sprite} */
        this.part_frames
        /** @type {Phaser.GameObjects.Sprite} */
        this.newspaper
        /** @type {Phaser.GameObjects.Sprite} */
        this.newssquiggle
        /** @type {Phaser.GameObjects.Ellipse} */
        this.seatzone
        /** @type {Phaser.GameObjects.Ellipse} */
        this.seatzone_1
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            coffee: () => this.triggerRoom(110, 760, 480),
            printerone: {
                callback: () => this.playPrintingPress(),
                offCallback: () => this.stopPrintingPress(),
            },
            printertwo: {
                callback: () => this.playPrintingPress(),
                offCallback: () => this.stopPrintingPress(),
            },
        }

        this.loadSfx = ['book-printingpress', 'book-doorlighton', 'book-doorlightoff', 'book-bookopen', 'book-bookclose']

        this.music = 669
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('book-pack', 'client/media/rooms/book/book-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bookbg
        this.add.image(760, 480, 'book', 'bookbg')

        // righttable
        const righttable = this.add.image(1423, 687, 'book', 'righttable')

        // frontrightcouch
        const frontrightcouch = this.add.image(1379, 821, 'book', 'frontrightcouch')

        // backrightcouch
        this.add.image(1403, 490, 'book', 'backrightcouch')

        // backrightcouchfrontarm
        const backrightcouchfrontarm = this.add.image(1418.4565576986101, 537.4565576986101, 'book', 'backrightcouchfrontarm')
        backrightcouchfrontarm.setOrigin(0.47826137603676255, 0.4559016485317183)

        // cptholder
        this.add.image(1014, 191, 'book', 'cptholder')

        // tree
        const tree = this.add.image(1456, 599, 'book', 'tree')

        // mancala_en
        const mancala_en = this.add.image(1452, 293, 'book', 'mancala_en')

        // bookfg
        const bookfg = this.add.image(-109.99999585527848, 980.9999871678945, 'book', 'bookfg')
        bookfg.setOrigin(0, 1)

        // mancala_board
        const mancala_board = this.add.container(1283, 670)

        // mancala_table
        const mancala_table = this.add.image(4.4261127391096124, 8.486639824939743, 'book', 'mancala_table')
        mancala_table.flipX = true
        mancala_board.add(mancala_table)

        // mancala_board4
        const mancala_board4 = this.add.image(3.4261127391096124, -19.513360175060257, 'book', 'mancala_board')
        mancala_board4.flipX = true
        mancala_board.add(mancala_board4)

        // mancala_board_1
        const mancala_board_1 = this.add.container(1245, 550)

        // mancala_table1
        const mancala_table1 = this.add.image(1.4104978049983856, 11.502254759051198, 'book', 'mancala_table')
        mancala_table1.flipX = true
        mancala_board_1.add(mancala_table1)

        // mancala_board1
        const mancala_board1 = this.add.image(0.4104978049983856, -16.497745240948802, 'book', 'mancala_board')
        mancala_board1.flipX = true
        mancala_board_1.add(mancala_board1)

        // mancala_board_2
        const mancala_board_2 = this.add.container(1127, 626)

        // mancala_table2
        const mancala_table2 = this.add.image(7.441727673221067, 14.517869693162538, 'book', 'mancala_table')
        mancala_table2.flipX = true
        mancala_board_2.add(mancala_table2)

        // mancala_board2
        const mancala_board2 = this.add.image(6.441727673221067, -13.482130306837462, 'book', 'mancala_board')
        mancala_board2.flipX = true
        mancala_board_2.add(mancala_board2)

        // mancala_board_3
        const mancala_board_3 = this.add.container(1168, 757)

        // mancala_table3
        const mancala_table3 = this.add.image(7.441727673221067, 11.502254759051198, 'book', 'mancala_table')
        mancala_table3.flipX = true
        mancala_board_3.add(mancala_table3)

        // mancala_board3
        const mancala_board3 = this.add.image(6.441727673221067, -16.497745240948802, 'book', 'mancala_board')
        mancala_board3.flipX = true
        mancala_board_3.add(mancala_board3)

        // computerdesk
        this.add.image(993, 326, 'book', 'computerdesk')

        // circlechair
        const circlechair = this.add.image(1054.177933158297, 392.8531764312228, 'book', 'circlechair')
        circlechair.setOrigin(0.4201453781036627, 0.5224659747871799)

        // circledesk
        const circledesk = this.add.image(1098.9010855124363, 462.1758141343272, 'book', 'circledesk')
        circledesk.setOrigin(0.5598960742441557, 0.5579844974065759)

        // cpt_en
        this.add.image(1036, 226, 'book', 'cpt_en')

        // part_frames
        const part_frames = this.add.sprite(622, 188, 'book', 'part_frames')

        // coatrack
        this.add.image(791, 296, 'book', 'coatrack')

        // plant
        this.add.image(800, 407, 'book', 'plant')

        // walldivider
        const walldivider = this.add.image(829.6883568088317, 449.43941899898664, 'book', 'walldivider')
        walldivider.setOrigin(0.3833653299925587, 0.9172099980059495)

        // railing
        const railing = this.add.image(868, 475, 'book', 'railing')

        // deskchair
        this.add.image(646, 295, 'book', 'deskchair')

        // bigdesk
        const bigdesk = this.add.image(632.9891245411674, 376.46381297149935, 'book', 'bigdesk')
        bigdesk.setOrigin(0.5479873725331512, 0.347373495693172)

        // partholder
        this.add.image(627, 73, 'book', 'partholder')

        // part_en
        this.add.image(627, 72, 'book', 'part_en')

        // bookcase
        const bookcase = this.add.image(423, 317, 'book', 'bookcase')

        // filecabinet
        this.add.image(319, 439, 'book', 'filecabinet')

        // wanted_board
        const wanted_board = this.add.image(328.52157439663756, 635.6346705897136, 'book', 'wanted_board')
        wanted_board.setOrigin(0.7049408563728526, 0.6255344071020379)

        // chair
        const chair = this.add.image(479.2257882212149, 711.2899762030828, 'book', 'chair')
        chair.setOrigin(0.4772536951437806, 0.16139161898349222)

        // chair_1
        const chair_1 = this.add.image(604, 711.2899762030828, 'book', 'chair')
        chair_1.setOrigin(0.5, 0.1855547757052954)

        // newsline
        const newsline = this.add.image(384, 921, 'book', 'newsline')
        newsline.setOrigin(0.5051464385745139, 0.8699670054085217)

        // lobbydesk
        this.add.image(1007, 768, 'book', 'lobbydesk')

        // newsdivider
        const newsdivider = this.add.image(896.9989556361367, 661.9903396342643, 'book', 'newsdivider')
        newsdivider.setOrigin(0.5246849113341769, 0.7283354298411375)

        // wheelchair
        const wheelchair = this.add.image(785, 721, 'book', 'wheelchair')
        wheelchair.setOrigin(0.4020959712771272, 0.4668610351637075)

        // newsdesk
        const newsdesk = this.add.image(896, 746, 'book', 'newsdesk')

        // newslobbydivider
        const newslobbydivider = this.add.image(959, 760, 'book', 'newslobbydivider')

        // newspaper
        const newspaper = this.add.sprite(315.13132051048785, 943.2560939533366, 'book', 'newspaper0001')
        newspaper.setOrigin(0.5096001422792065, 0.9508237199864841)

        // newslineholder
        const newslineholder = this.add.image(485.27131892073226, 957.8293295400185, 'book', 'newslineholder')
        newslineholder.setOrigin(0.4780772528953547, 0.8514208150107924)

        // newssquiggle
        const newssquiggle = this.add.sprite(314, 993, 'book', 'newssquiggle0001')
        newssquiggle.setOrigin(0.30479885219683506, 4.12356153680589)

        // tales_en
        const tales_en = this.add.image(1438, 1018.2595776391645, 'book', 'tales_en')
        tales_en.setOrigin(0.5, 1.5908116862160333)

        // bookdoor
        const bookdoor = this.add.image(1263.4515764424298, 444.033224275611, 'book', 'bookdoor')
        bookdoor.setOrigin(0.4711510279872339, 0.9456550913536067)

        // seatzone
        const seatzone = this.add.ellipse(480.2257995605468, 727.7742222800385, 128, 128)
        seatzone.scaleX = 0.6447951148833675
        seatzone.scaleY = 0.467361763151831
        seatzone.setOrigin(0.4785032034255048, 0.5296580297611317)

        // seatzone_1
        const seatzone_1 = this.add.ellipse(601.4515572641836, 724.7742031017925, 128, 128)
        seatzone_1.scaleX = 0.6447951148833675
        seatzone_1.scaleY = 0.467361763151831
        seatzone_1.setOrigin(0.4570064068510131, 0.5296580297611335)

        // wanted_en
        const wanted_en = this.add.image(315.4850493101891, 652.551479305673, 'book', 'wanted_en')
        wanted_en.setOrigin(0.549085201551959, 2.6781558188681864)

        // lists
        const sort = [bookfg, backrightcouchfrontarm, tree, righttable, frontrightcouch, mancala_board_3, mancala_board_2, mancala_board_1, mancala_board, circledesk, circlechair, walldivider, railing, bigdesk, wanted_board, newslobbydivider, newsdivider, newsdesk, wheelchair, chair_1, chair, newsline, newspaper, newslineholder, tales_en, wanted_en]

        // mancala_en (components)
        const mancala_enButton = new Button(mancala_en)
        mancala_enButton.spriteName = 'mancala_en'
        mancala_enButton.activeFrame = false

        // mancala_board (components)
        const mancala_boardShowHint = new ShowHint(mancala_board)
        mancala_boardShowHint.text = 'Play Mancala'

        // mancala_board4 (components)
        const mancala_board4Button = new Button(mancala_board4)
        mancala_board4Button.spriteName = 'mancala_board'
        mancala_board4Button.activeFrame = false

        // mancala_board_1 (components)
        const mancala_board_1ShowHint = new ShowHint(mancala_board_1)
        mancala_board_1ShowHint.text = 'Play Mancala'

        // mancala_board1 (components)
        const mancala_board1Button = new Button(mancala_board1)
        mancala_board1Button.spriteName = 'mancala_board'
        mancala_board1Button.activeFrame = false

        // mancala_board_2 (components)
        const mancala_board_2ShowHint = new ShowHint(mancala_board_2)
        mancala_board_2ShowHint.text = 'Play Mancala'

        // mancala_board2 (components)
        const mancala_board2Button = new Button(mancala_board2)
        mancala_board2Button.spriteName = 'mancala_board'
        mancala_board2Button.activeFrame = false

        // mancala_board_3 (components)
        const mancala_board_3ShowHint = new ShowHint(mancala_board_3)
        mancala_board_3ShowHint.text = 'Play Mancala'

        // mancala_board3 (components)
        const mancala_board3Button = new Button(mancala_board3)
        mancala_board3Button.spriteName = 'mancala_board'
        mancala_board3Button.activeFrame = false

        // part_frames (components)
        const part_framesSimpleButton = new SimpleButton(part_frames)
        part_framesSimpleButton.hoverCallback = () => this.ArtOver()
        part_framesSimpleButton.hoverOutCallback = () => this.ArtOut()

        // bookcase (components)
        const bookcaseButton = new Button(bookcase)
        bookcaseButton.spriteName = 'bookcase'
        bookcaseButton.activeFrame = false

        // tales_en (components)
        const tales_enButton = new Button(tales_en)
        tales_enButton.spriteName = 'tales_en'
        tales_enButton.hoverCallback = () => this.BookOver()
        tales_enButton.hoverOutCallback = () => this.BookClose()
        tales_enButton.activeFrame = false

        // bookdoor (components)
        const bookdoorButton = new Button(bookdoor)
        bookdoorButton.spriteName = 'bookdoor'
        bookdoorButton.hoverCallback = () => this.CoffeeDoorOver()
        bookdoorButton.hoverOutCallback = () => this.CoffeeDoorOut()
        bookdoorButton.activeFrame = false
        new MoveTo(bookdoor)

        // seatzone (components)
        new Seat(seatzone)

        // seatzone_1 (components)
        new Seat(seatzone_1)

        this.mancala_board = mancala_board
        this.mancala_board_1 = mancala_board_1
        this.mancala_board_2 = mancala_board_2
        this.mancala_board_3 = mancala_board_3
        this.part_frames = part_frames
        this.newspaper = newspaper
        this.newssquiggle = newssquiggle
        this.seatzone = seatzone
        this.seatzone_1 = seatzone_1
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here\

    create() {
        super.create()
    }

    playPrintingPress() {
        this.newspaper.play('printingpress')
        this.newssquiggle.play('newssquiggle')
        this.shell.musicController.addSfx('book-printingpress', true)
    }

    stopPrintingPress() {
        this.newspaper.anims.stopAfterRepeat(0)
        this.newssquiggle.stopAfterRepeat(0)
        this.shell.musicController.stopLoopingSfx('book-printingpress')
    }

    CoffeeDoorOver() {
        this.shell.musicController.addSfx('book-doorlighton')
    }

    CoffeeDoorOut() {
        this.shell.musicController.addSfx('book-doorlightoff')
    }

    BookOver() {
        this.shell.musicController.addSfx('book-bookopen')
    }

    BookClose() {
        this.shell.musicController.addSfx('book-bookclose')
    }

    ArtOver() {
        this.part_frames.setScale(1.1, 1.1)
    }

    ArtOut() {
        this.part_frames.setScale(1, 1)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
