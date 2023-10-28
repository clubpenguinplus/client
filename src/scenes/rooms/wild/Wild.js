import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Wild extends RoomScene {
    constructor() {
        super('Wild')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            village: () => this.triggerRoom(200, 700, 514)
        }
        this.music = 897
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('wild-pack', 'client/media/rooms/wild/wild-pack.json')
    }

    /** @returns {void} */
    _create() {
        // wildbg
        const wildbg = this.add.image(760, 364, 'wild', 'wildbg')
        wildbg.tintTopLeft = 11579069
        wildbg.tintTopRight = 11579069
        wildbg.tintBottomLeft = 11579069
        wildbg.tintBottomRight = 11579069

        // staircover
        const staircover = this.add.image(1206, 99.5, 'wild', 'staircover')
        staircover.tintTopLeft = 11579069
        staircover.tintTopRight = 11579069
        staircover.tintBottomLeft = 11579069
        staircover.tintBottomRight = 11579069

        // treehouse
        const treehouse = this.add.image(977, 150, 'wild', 'treehouse')
        treehouse.tintTopLeft = 11579069
        treehouse.tintTopRight = 11579069
        treehouse.tintBottomLeft = 11579069
        treehouse.tintBottomRight = 11579069

        // backleftbush
        const backleftbush = this.add.sprite(519, 214, 'wild', 'backleftbush0001')
        backleftbush.tintTopLeft = 11579069
        backleftbush.tintTopRight = 11579069
        backleftbush.tintBottomLeft = 11579069
        backleftbush.tintBottomRight = 11579069

        // backleftbushother
        const backleftbushother = this.add.sprite(598, 212, 'wild', 'backleftbushother0001')
        backleftbushother.tintTopLeft = 11579069
        backleftbushother.tintTopRight = 11579069
        backleftbushother.tintBottomLeft = 11579069
        backleftbushother.tintBottomRight = 11579069

        // mainbush
        const mainbush = this.add.sprite(774, 243, 'wild', 'mainbush0001')
        mainbush.tintTopLeft = 11579069
        mainbush.tintTopRight = 11579069
        mainbush.tintBottomLeft = 11579069
        mainbush.tintBottomRight = 11579069

        // rightbush
        const rightbush = this.add.sprite(975, 261, 'wild', 'rightbush0001')
        rightbush.tintTopLeft = 11579069
        rightbush.tintTopRight = 11579069
        rightbush.tintBottomLeft = 11579069
        rightbush.tintBottomRight = 11579069

        // frontrightbush
        const frontrightbush = this.add.sprite(971, 287, 'wild', 'frontrightbush0001')
        frontrightbush.tintTopLeft = 11579069
        frontrightbush.tintTopRight = 11579069
        frontrightbush.tintBottomLeft = 11579069
        frontrightbush.tintBottomRight = 11579069

        // backbush
        const backbush = this.add.sprite(735, 144, 'wild', 'backbush0001')
        backbush.tintTopLeft = 11579069
        backbush.tintTopRight = 11579069
        backbush.tintBottomLeft = 11579069
        backbush.tintBottomRight = 11579069

        // abovesambush
        const abovesambush = this.add.sprite(852, 192, 'wild', 'abovesambush0001')
        abovesambush.tintTopLeft = 11579069
        abovesambush.tintTopRight = 11579069
        abovesambush.tintBottomLeft = 11579069
        abovesambush.tintBottomRight = 11579069

        // samface
        const samface = this.add.sprite(857, 234, 'wild', 'samface0001')
        samface.tintTopLeft = 11579069
        samface.tintTopRight = 11579069
        samface.tintBottomLeft = 11579069
        samface.tintBottomRight = 11579069

        // smallbush
        const smallbush = this.add.image(849, 270, 'wild', 'smallbush')
        smallbush.tintTopLeft = 11579069
        smallbush.tintTopRight = 11579069
        smallbush.tintBottomLeft = 11579069
        smallbush.tintBottomRight = 11579069

        // treehouserock
        const treehouserock = this.add.image(1046, 311, 'wild', 'treehouserock')
        treehouserock.tintTopLeft = 11579069
        treehouserock.tintTopRight = 11579069
        treehouserock.tintBottomLeft = 11579069
        treehouserock.tintBottomRight = 11579069

        // leftbigtree
        const leftbigtree = this.add.image(-82, 104, 'wild', 'leftbigtree')
        leftbigtree.tintTopLeft = 11579069
        leftbigtree.tintTopRight = 11579069
        leftbigtree.tintBottomLeft = 11579069
        leftbigtree.tintBottomRight = 11579069

        // purpletint
        const purpletint = this.add.image(760, 480, 'wild', 'purpletint')
        purpletint.tintTopLeft = 11579069
        purpletint.tintTopRight = 11579069
        purpletint.tintBottomLeft = 11579069
        purpletint.tintBottomRight = 11579069

        // farleftbush
        const farleftbush = this.add.image(135, 307, 'wild', 'farleftbush')
        farleftbush.tintTopLeft = 11579069
        farleftbush.tintTopRight = 11579069
        farleftbush.tintBottomLeft = 11579069
        farleftbush.tintBottomRight = 11579069

        // midlefttree
        const midlefttree = this.add.image(420, 118, 'wild', 'midlefttree')
        midlefttree.tintTopLeft = 11579069
        midlefttree.tintTopRight = 11579069
        midlefttree.tintBottomLeft = 11579069
        midlefttree.tintBottomRight = 11579069

        // woodstoop
        const woodstoop = this.add.image(758, 359, 'wild', 'woodstoop')
        woodstoop.tintTopLeft = 11579069
        woodstoop.tintTopRight = 11579069
        woodstoop.tintBottomLeft = 11579069
        woodstoop.tintBottomRight = 11579069

        // rightree
        const rightree = this.add.image(1357, 530, 'wild', 'rightree')
        rightree.tintTopLeft = 11579069
        rightree.tintTopRight = 11579069
        rightree.tintBottomLeft = 11579069
        rightree.tintBottomRight = 11579069

        // fronthut
        const fronthut = this.add.image(1212, 632, 'wild', 'fronthut')
        fronthut.tintTopLeft = 11579069
        fronthut.tintTopRight = 11579069
        fronthut.tintBottomLeft = 11579069
        fronthut.tintBottomRight = 11579069

        // backhut
        const backhut = this.add.image(1245.3745147425054, 623.7442109946197, 'wild', 'backhut')
        backhut.setOrigin(0.3305158321734479, 0.7234013187163733)
        backhut.tintTopLeft = 11579069
        backhut.tintTopRight = 11579069
        backhut.tintBottomLeft = 11579069
        backhut.tintBottomRight = 11579069

        // righfgmidtree
        const righfgmidtree = this.add.image(1379, 771, 'wild', 'righfgmidtree')
        righfgmidtree.tintTopLeft = 11579069
        righfgmidtree.tintTopRight = 11579069
        righfgmidtree.tintBottomLeft = 11579069
        righfgmidtree.tintBottomRight = 11579069

        // rightfgrighttree
        const rightfgrighttree = this.add.image(1504, 867, 'wild', 'rightfgrighttree')
        rightfgrighttree.tintTopLeft = 11579069
        rightfgrighttree.tintTopRight = 11579069
        rightfgrighttree.tintBottomLeft = 11579069
        rightfgrighttree.tintBottomRight = 11579069

        // rightfglefttree
        const rightfglefttree = this.add.image(1124, 829, 'wild', 'rightfglefttree')
        rightfglefttree.tintTopLeft = 11579069
        rightfglefttree.tintTopRight = 11579069
        rightfglefttree.tintBottomLeft = 11579069
        rightfglefttree.tintBottomRight = 11579069

        // frontleftrock
        const frontleftrock = this.add.image(328, 817, 'wild', 'frontleftrock')
        frontleftrock.tintTopLeft = 11579069
        frontleftrock.tintTopRight = 11579069
        frontleftrock.tintBottomLeft = 11579069
        frontleftrock.tintBottomRight = 11579069

        // frontlefttree
        const frontlefttree = this.add.image(488, 855, 'wild', 'frontlefttree')
        frontlefttree.tintTopLeft = 11579069
        frontlefttree.tintTopRight = 11579069
        frontlefttree.tintBottomLeft = 11579069
        frontlefttree.tintBottomRight = 11579069

        // leftcliff
        const leftcliff = this.add.image(175.22021312192322, 599.7756531115893, 'wild', 'leftcliff')
        leftcliff.setOrigin(0.7708654256246983, 0.8625455759776944)
        leftcliff.tintTopLeft = 11579069
        leftcliff.tintTopRight = 11579069
        leftcliff.tintBottomLeft = 11579069
        leftcliff.tintBottomRight = 11579069

        // arrowsign
        const arrowsign = this.add.image(527.2026039954341, 670.1013019977171, 'wild', 'arrowsign')
        arrowsign.setOrigin(0.5440520799086812, 0.5101972407196027)
        arrowsign.tintTopLeft = 11579069
        arrowsign.tintTopRight = 11579069
        arrowsign.tintBottomLeft = 11579069
        arrowsign.tintBottomRight = 11579069

        // redcreature
        const redcreature = this.add.sprite(546, 66, 'wild', 'redcreature0001')
        redcreature.tintTopLeft = 11579069
        redcreature.tintTopRight = 11579069
        redcreature.tintBottomLeft = 11579069
        redcreature.tintBottomRight = 11579069

        // greencreature
        const greencreature = this.add.sprite(642, 37, 'wild', 'greencreature0001')
        greencreature.tintTopLeft = 11579069
        greencreature.tintTopRight = 11579069
        greencreature.tintBottomLeft = 11579069
        greencreature.tintBottomRight = 11579069

        // whitecreature
        const whitecreature = this.add.sprite(873, 39, 'wild', 'whitecreature0001')
        whitecreature.tintTopLeft = 11579069
        whitecreature.tintTopRight = 11579069
        whitecreature.tintBottomLeft = 11579069
        whitecreature.tintBottomRight = 11579069

        // yellowcreature
        const yellowcreature = this.add.sprite(980, 70, 'wild', 'yellowcreature0001')
        yellowcreature.tintTopLeft = 11579069
        yellowcreature.tintTopRight = 11579069
        yellowcreature.tintBottomLeft = 11579069
        yellowcreature.tintBottomRight = 11579069

        // sam
        const sam = this.add.sprite(761, 208, 'wild', 'sam0001')
        sam.visible = false
        sam.tintTopLeft = 11579069
        sam.tintTopRight = 11579069
        sam.tintBottomLeft = 11579069
        sam.tintBottomRight = 11579069

        // backlights
        const backlights = this.add.image(982, 175, 'wild', 'backlights')
        backlights.tintTopLeft = 11579069
        backlights.tintTopRight = 11579069
        backlights.tintBottomLeft = 11579069
        backlights.tintBottomRight = 11579069

        // leftbacklights
        const leftbacklights = this.add.image(419, 251, 'wild', 'leftbacklights')
        leftbacklights.tintTopLeft = 11579069
        leftbacklights.tintTopRight = 11579069
        leftbacklights.tintBottomLeft = 11579069
        leftbacklights.tintBottomRight = 11579069

        // stooputensils
        const stooputensils = this.add.image(762, 338, 'wild', 'stooputensils')
        stooputensils.tintTopLeft = 11579069
        stooputensils.tintTopRight = 11579069
        stooputensils.tintBottomLeft = 11579069
        stooputensils.tintBottomRight = 11579069

        // rectangle_1
        const rectangle_1 = this.add.rectangle(243.5, 387, 1, 1)
        rectangle_1.isFilled = true
        rectangle_1.fillColor = 4670561

        // lists
        const sort = [backhut, righfgmidtree, rightfgrighttree, rightfglefttree, frontlefttree, leftcliff, arrowsign]

        this.backleftbush = backleftbush
        this.backleftbushother = backleftbushother
        this.mainbush = mainbush
        this.rightbush = rightbush
        this.frontrightbush = frontrightbush
        this.backbush = backbush
        this.abovesambush = abovesambush
        this.samface = samface
        this.redcreature = redcreature
        this.greencreature = greencreature
        this.whitecreature = whitecreature
        this.yellowcreature = yellowcreature
        this.sam = sam
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    backleftbush
    /** @type {Phaser.GameObjects.Sprite} */
    backleftbushother
    /** @type {Phaser.GameObjects.Sprite} */
    mainbush
    /** @type {Phaser.GameObjects.Sprite} */
    rightbush
    /** @type {Phaser.GameObjects.Sprite} */
    frontrightbush
    /** @type {Phaser.GameObjects.Sprite} */
    backbush
    /** @type {Phaser.GameObjects.Sprite} */
    abovesambush
    /** @type {Phaser.GameObjects.Sprite} */
    samface
    /** @type {Phaser.GameObjects.Sprite} */
    redcreature
    /** @type {Phaser.GameObjects.Sprite} */
    greencreature
    /** @type {Phaser.GameObjects.Sprite} */
    whitecreature
    /** @type {Phaser.GameObjects.Sprite} */
    yellowcreature
    /** @type {Phaser.GameObjects.Sprite} */
    sam
    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.redcreature.play('wild-redcreature')
        this.greencreature.play('wild-greencreature')
        this.whitecreature.play('wild-whitecreature')
        this.yellowcreature.play('wild-yellowcreature')
        this.backleftbush.play('wild-backleftbush')
        this.backleftbushother.play('wild-backleftbushother')
        this.mainbush.play('wild-mainbush')
        this.rightbush.play('wild-rightbush')
        this.frontrightbush.play('wild-frontrightbush')
        this.backbush.play('wild-backbush')
        this.abovesambush.play('wild-abovebush')
        this.bushFunction()
        this.samAppears()
    }

    bushFunction() {
        this.shell.musicController.addSfx('wild-bush')
        this.bushTO = setTimeout(this.bushFunction, 5000)
    }

    bushGrowls() {
        const rndKey = Math.floor(Math.random() * 4) + 1
        this.shell.musicController.addSfx(`wild-bushsam${rndKey}`)
        this.growlTO = setTimeout(this.bushGrowls, 15000)
    }

    samAppears() {
        if (Math.random() <= 0.2) {
            this.sam.visible = true
            this.sam.play('wild-sam')
            this.samface.visible = false
        } else {
            this.samface.play('wild-samface')
            this.bushGrowls()
        }
    }

    stop() {
        clearTimeout(this.bushTO)
        clearTimeout(this.growlTO)
        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
