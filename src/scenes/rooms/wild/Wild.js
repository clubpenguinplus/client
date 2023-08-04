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
        this.add.image(760, 364, 'wild', 'wildbg')

        // staircover
        this.add.image(1206, 99.5, 'wild', 'staircover')

        // treehouse
        this.add.image(977, 150, 'wild', 'treehouse')

        // backleftbush
        const backleftbush = this.add.sprite(519, 214, 'wild', 'backleftbush0001')

        // backleftbushother
        const backleftbushother = this.add.sprite(598, 212, 'wild', 'backleftbushother0001')

        // mainbush
        const mainbush = this.add.sprite(774, 243, 'wild', 'mainbush0001')

        // rightbush
        const rightbush = this.add.sprite(975, 261, 'wild', 'rightbush0001')

        // frontrightbush
        const frontrightbush = this.add.sprite(971, 287, 'wild', 'frontrightbush0001')

        // backbush
        const backbush = this.add.sprite(735, 144, 'wild', 'backbush0001')

        // abovesambush
        const abovesambush = this.add.sprite(852, 192, 'wild', 'abovesambush0001')

        // samface
        const samface = this.add.sprite(857, 234, 'wild', 'samface0001')

        // smallbush
        this.add.image(849, 270, 'wild', 'smallbush')

        // treehouserock
        this.add.image(1046, 311, 'wild', 'treehouserock')

        // leftbigtree
        this.add.image(-82, 104, 'wild', 'leftbigtree')

        // purpletint
        this.add.image(760, 480, 'wild', 'purpletint')

        // farleftbush
        this.add.image(135, 307, 'wild', 'farleftbush')

        // midlefttree
        this.add.image(420, 118, 'wild', 'midlefttree')

        // woodstoop
        this.add.image(758, 359, 'wild', 'woodstoop')

        // rightree
        this.add.image(1357, 530, 'wild', 'rightree')

        // fronthut
        this.add.image(1212, 632, 'wild', 'fronthut')

        // backhut
        const backhut = this.add.image(1245.3745147425054, 623.7442109946197, 'wild', 'backhut')
        backhut.setOrigin(0.3305158321734479, 0.7234013187163733)

        // righfgmidtree
        const righfgmidtree = this.add.image(1379, 771, 'wild', 'righfgmidtree')

        // rightfgrighttree
        const rightfgrighttree = this.add.image(1504, 867, 'wild', 'rightfgrighttree')

        // rightfglefttree
        const rightfglefttree = this.add.image(1124, 829, 'wild', 'rightfglefttree')

        // frontleftrock
        this.add.image(328, 817, 'wild', 'frontleftrock')

        // frontlefttree
        const frontlefttree = this.add.image(488, 855, 'wild', 'frontlefttree')

        // leftcliff
        const leftcliff = this.add.image(175.22021312192322, 599.7756531115893, 'wild', 'leftcliff')
        leftcliff.setOrigin(0.7708654256246983, 0.8625455759776944)

        // arrowsign
        const arrowsign = this.add.image(527.2026039954341, 670.1013019977171, 'wild', 'arrowsign')
        arrowsign.setOrigin(0.5440520799086812, 0.5101972407196027)

        // redcreature
        const redcreature = this.add.sprite(546, 66, 'wild', 'redcreature0001')

        // greencreature
        const greencreature = this.add.sprite(642, 37, 'wild', 'greencreature0001')

        // whitecreature
        const whitecreature = this.add.sprite(873, 39, 'wild', 'whitecreature0001')

        // yellowcreature
        const yellowcreature = this.add.sprite(980, 70, 'wild', 'yellowcreature0001')

        // sam
        const sam = this.add.sprite(761, 208, 'wild', 'sam0001')
        sam.visible = false

        // backlights
        this.add.image(982, 175, 'wild', 'backlights')

        // leftbacklights
        this.add.image(419, 251, 'wild', 'leftbacklights')

        // stooputensils
        this.add.image(762, 338, 'wild', 'stooputensils')

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
