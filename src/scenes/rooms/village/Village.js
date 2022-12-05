import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {
    constructor() {
        super('Village')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 1200, 400),
            beach: () => this.triggerRoom(400, 360, 520),
            epf: () => this.triggerRoom(212, 700, 450),
            lodge: () => this.triggerRoom(220, 330, 450),
            mountain: () => this.triggerRoom(230, 1036, 520),
            pufflewild: () => this.triggerRoom(436, 760, 730),
        }

        this.music = 591
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('village-pack', 'client/media/rooms/village/village-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(-124.80423540374727, 987.0732936798435, 'village', 'bg')
        bg.setOrigin(0.0006852446809371995, 1.0032013740410073)

        // rockstube
        this.add.image(608, 415, 'village', 'rockstube')

        // pufflewild
        this.add.image(716, 245, 'village', 'pufflewild')

        // lodge
        this.add.image(1088, 249, 'village', 'lodge')

        // buildingtree
        this.add.image(1362, 512, 'village', 'buildingtree')

        // epf
        this.add.image(1383, 303, 'village', 'epf')

        // tubelift
        const tubelift = this.add.container(122, 286)
        tubelift.scaleX = 0.5
        tubelift.scaleY = 0.5

        // tubepile
        const tubepile = this.add.sprite(499, 443, 'village', 'tubepile0001')

        // liftramp
        const liftramp = this.add.image(759, 334, 'village', 'liftramp')

        // leftside
        const leftside = this.add.image(56.80749526416906, 467.8430058465068, 'village', 'leftside')
        leftside.setOrigin(0.2363267202866612, 0.2559405019542914)

        // fg
        const fg = this.add.image(816.5228013046404, 1031.1123778211133, 'village', 'fg')
        fg.setOrigin(0.4943822177265207, 1.0066426975506708)

        // rightarrow
        const rightarrow = this.add.image(1392, 632, 'village', 'rightarrow')
        rightarrow.setOrigin(0.4609375372502956, 0.6382210220374185)

        // epf_en
        const epf_en = this.add.image(1334.8644190469176, 1147.1305145761075, 'village', 'epf-en')
        epf_en.setOrigin(0.49142336966633593, 7.249087897527539)

        // epfdoor
        const epfdoor = this.add.sprite(1322.114776864153, 526.7223596297904, 'village', 'epfdoor')
        epfdoor.setOrigin(0.32509984367671013, 0.9420866020273132)

        // lodgedoor
        const lodgedoor = this.add.sprite(1005.5370304938195, 400.73710116056884, 'village', 'lodgedoor')
        lodgedoor.setOrigin(0.4481050057420877, 0.8215963320630062)

        // leftreeandramp
        const leftreeandramp = this.add.image(72.44437072569082, 720.737628402159, 'village', 'leftreeandramp')
        leftreeandramp.setOrigin(0.4632254627084889, 0.6821614522107083)

        // tours
        const tours = this.add.sprite(231.48480710978953, 675.1643662178799, 'village', 'tours')
        tours.setOrigin(0.6270200296241231, 0.7870039146644123)

        // toursign_en
        const toursign_en = this.add.sprite(235.15781421589907, 749.1208021563593, 'village', 'toursign-en')
        toursign_en.setOrigin(0.5872172481438145, 2.461207972926635)

        // skichairfh
        const skichairfh = this.add.container(221, 122)

        // arrow
        this.add.image(608, 375, 'village', 'arrow')

        // skichairsh
        const skichairsh = this.add.container(261.99604271365615, 410.1601804653192)

        // tourszone
        const tourszone = this.add.rectangle(211, 580, 128, 128)
        tourszone.scaleX = 1.8609096049176221
        tourszone.scaleY = 2.5889621362834165

        // phone_speaker
        this.add.image(1198, 415, 'village', 'phone_speaker')

        // belt
        const belt = this.add.sprite(440, 345, 'village', 'belt0001')

        // lists
        const sort = [fg, rightarrow, toursign_en, tours, leftside, liftramp, epf_en, skichairsh, belt]

        // epf_en (components)
        new LocalisedSprite(epf_en)

        // epfdoor (components)
        const epfdoorButton = new Button(epfdoor)
        epfdoorButton.spriteName = 'epfdoor'
        epfdoorButton.hoverCallback = () => this.EpfDoorOver()
        epfdoorButton.hoverOutCallback = () => this.EpfDoorOut()
        epfdoorButton.activeFrame = false
        new MoveTo(epfdoor)

        // lodgedoor (components)
        const lodgedoorButton = new Button(lodgedoor)
        lodgedoorButton.spriteName = 'lodgedoor'
        lodgedoorButton.hoverCallback = () => this.LodgeDoorOver()
        lodgedoorButton.hoverOutCallback = () => this.LodgeDoorOut()
        lodgedoorButton.activeFrame = false
        new MoveTo(lodgedoor)

        // tourszone (components)
        const tourszoneSimpleButton = new SimpleButton(tourszone)
        tourszoneSimpleButton.hoverCallback = () => this.onToursZoneOver()
        tourszoneSimpleButton.hoverOutCallback = () => this.onToursZoneOut()

        this.tubelift = tubelift
        this.tubepile = tubepile
        this.epfdoor = epfdoor
        this.lodgedoor = lodgedoor
        this.tours = tours
        this.toursign_en = toursign_en
        this.skichairfh = skichairfh
        this.skichairsh = skichairsh
        this.tourszone = tourszone
        this.belt = belt
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Container} */
    tubelift
    /** @type {Phaser.GameObjects.Sprite} */
    tubepile
    /** @type {Phaser.GameObjects.Sprite} */
    epfdoor
    /** @type {Phaser.GameObjects.Sprite} */
    lodgedoor
    /** @type {Phaser.GameObjects.Sprite} */
    tours
    /** @type {Phaser.GameObjects.Sprite} */
    toursign_en
    /** @type {Phaser.GameObjects.Container} */
    skichairfh
    /** @type {Phaser.GameObjects.Container} */
    skichairsh
    /** @type {Phaser.GameObjects.Rectangle} */
    tourszone
    /** @type {Phaser.GameObjects.Sprite} */
    belt
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        let skichairfh = this.add.video(0, 0, 'village-skichairfh')
        this.skichairfh.add(skichairfh)

        let tubelift = this.add.video(0, 0, 'village-tubelift')
        this.tubelift.add(tubelift)

        let skichairsh = this.add.video(-61, -252, 'village-skichair')
        this.skichairsh.add(skichairsh)

        skichairfh.play(true)
        skichairsh.play(true)
        tubelift.play(true)

        this.tubepile.play('village-tubepile')
        this.belt.play('village-belt')
    }

    LodgeDoorOver() {
        this.shell.musicController.addSfx('village-LodgeDoorOpen')
    }

    LodgeDoorOut() {
        this.shell.musicController.addSfx('village-LodgeDoorClose')
    }

    EpfDoorOver() {
        this.shell.musicController.addSfx('village-EPFDoorOpen')
    }

    EpfDoorOut() {
        this.shell.musicController.addSfx('village-EPFDoorClose')
    }

    onToursZoneOver() {
        this.tours.setFrame('tours-hover')
        this.toursign_en.setFrame('toursign-en-hover')
    }

    onToursZoneOut() {
        this.tours.setFrame('tours')
        this.toursign_en.setFrame('toursign-en')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
