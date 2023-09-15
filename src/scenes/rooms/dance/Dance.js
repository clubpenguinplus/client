import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class Dance extends RoomScene {
    constructor() {
        super('Dance')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            arcade: () => this.triggerRoom(121, 1280, 576),
            boiler: () => this.triggerRoom(804, 1040, 580),
            contest: () => this.triggerGame('dancecontest', 952, 'ruffle'),
            soundstudio: () => this.triggerGame('SoundStudio', 940),
            //soundstudio: () => this.interface.prompt.showError(this.shell.crumbs.getError(54)),
            town: () => this.triggerRoom(100, 1200, 400)
        }

        this.music = 673

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dance-pack', 'client/media/rooms/dance/dance-pack.json')
    }

    /** @returns {void} */
    _create() {
        // rectangle
        const rectangle = this.add.rectangle(164, 296, 200, 500)
        rectangle.isFilled = true
        rectangle.fillColor = 4143686

        // danceFloor
        const danceFloor = this.add.sprite(704, 660, 'dance', 'danceFloor001')

        // door
        const door = this.add.sprite(139, 270, 'dance', 'door0001')

        // upstairs
        const upstairs = this.add.sprite(1355, 335, 'dance', 'upstairs')

        // bg
        const bg = this.add.sprite(751, 483, 'dance', 'bg')

        // leftRailing
        const leftRailing = this.add.sprite(407, 320, 'dance', 'leftRailing')

        // floorSpeaker
        const floorSpeaker = this.add.sprite(339, 339, 'dance', 'floorSpeaker')

        // floorSpeakerbut
        const floorSpeakerbut = this.add.sprite(352, 348, 'dance', 'floorSpeakerbut0001')

        // doorRailingLeft
        const doorRailingLeft = this.add.sprite(152, 561, 'dance', 'doorRailingLeft')

        // doorRailingRight
        const doorRailingRight = this.add.sprite(273, 430, 'dance', 'doorRailingRight')

        // backChair
        const backChair = this.add.sprite(1445, 683, 'dance', 'backChair')

        // rightChair
        const rightChair = this.add.sprite(1541, 799, 'dance', 'rightChair')

        // table
        const table = this.add.sprite(1423, 778, 'dance', 'table')

        // leftChair
        const leftChair = this.add.sprite(1340, 880, 'dance', 'leftChair')

        // leftChairBack
        const leftChairBack = this.add.sprite(1301, 886, 'dance', 'leftChairBack')

        // soundStudio
        const soundStudio = this.add.sprite(694, 365.6383835617195, 'dance', 'soundstudio-en0001')
        soundStudio.setOrigin(0.5, 0.36411552165499084)

        // sofa
        const sofa = this.add.sprite(149.36760765951857, 627.7627502053078, 'dance', 'sofa')
        sofa.setOrigin(0.6049295941144784, 0.15003229044350086)

        // rightRailing
        const rightRailing = this.add.sprite(962, 324, 'dance', 'rightRailing')

        // boilerSpeaker
        const boilerSpeaker = this.add.sprite(1002, 321, 'dance', 'boilerSpeaker0001')

        // danceContestTable
        this.add.image(1140, 429, 'dance', 'danceContestTable')

        // danceContest
        const danceContest = this.add.rectangle(1146, 314, 128, 128)
        danceContest.scaleX = 1.2072727597353405
        danceContest.scaleY = 2.543735967809845

        // danceContestBanner
        const danceContestBanner = this.add.sprite(1181, 269, 'dance', 'danceContestBanner-en')
        danceContestBanner.angle = -5

        // danceContestClip
        const danceContestClip = this.add.sprite(1127, 402, 'dance', 'danceContestClipAnim0001')

        // rightSpeaker
        const rightSpeaker = this.add.sprite(1081, 55, 'dance', 'rightSpeaker0001')

        // corner
        const corner = this.add.sprite(1301, 240, 'dance', 'corner')

        // upstairsRailing
        const upstairsRailing = this.add.sprite(1176, 500, 'dance', 'upstairsRailing')

        // neonSign
        const neonSign = this.add.sprite(1135, 109, 'dance', 'neonSign0001')

        // leftSpeaker
        const leftSpeaker = this.add.sprite(290, 73, 'dance', 'leftSpeaker0001')

        // ellipse
        const ellipse = this.add.ellipse(229, 844, 50, 50)
        ellipse.isFilled = true
        ellipse.fillColor = 4253910

        // ellipse_1
        const ellipse_1 = this.add.ellipse(229, 827, 50, 50)
        ellipse_1.isFilled = true
        ellipse_1.fillColor = 4253910

        // ellipse_1_1
        const ellipse_1_1 = this.add.ellipse(210, 822, 20, 13)
        ellipse_1_1.isFilled = true
        ellipse_1_1.fillColor = 4253910

        // ellipse_1_1_1
        const ellipse_1_1_1 = this.add.ellipse(249, 795, 20, 13)
        ellipse_1_1_1.angle = -51
        ellipse_1_1_1.isFilled = true
        ellipse_1_1_1.fillColor = 4253910

        // ellipse_1_1_1_1
        const ellipse_1_1_1_1 = this.add.ellipse(235, 798, 25, 13)
        ellipse_1_1_1_1.angle = -120
        ellipse_1_1_1_1.isFilled = true
        ellipse_1_1_1_1.fillColor = 4253910

        // fg
        const fg = this.add.sprite(717, 1007.5, 'dance', 'fgg')
        fg.setOrigin(0.5, 1)

        // keeper
        const keeper = this.add.sprite(1044, 191, 'dance', 'keeper0001')

        // boiler_btn
        const boiler_btn = this.add.rectangle(1030, 306, 128, 200)
        boiler_btn.fillColor = 55770
        boiler_btn.fillAlpha = 0.5

        // keeper_btn
        const keeper_btn = this.add.ellipse(1039, 226, 128, 200)
        keeper_btn.scaleX = 0.3869603294123536
        keeper_btn.scaleY = 0.2549735670919765
        keeper_btn.fillColor = 55770
        keeper_btn.fillAlpha = 0.5

        // lists
        const sort = [fg, doorRailingLeft, doorRailingRight, boiler_btn, leftChair, leftChairBack, table, rightChair, backChair, upstairsRailing, sofa, soundStudio]

        // door (components)
        const doorSimpleButton = new SimpleButton(door)
        doorSimpleButton.hoverCallback = () => this.onDoorOver()
        doorSimpleButton.hoverOutCallback = () => this.onDoorOut()
        const doorMoveTo = new MoveTo(door)
        doorMoveTo.x = 200
        doorMoveTo.y = 500

        // upstairs (components)
        const upstairsSimpleButton = new SimpleButton(upstairs)
        upstairsSimpleButton.hoverCallback = () => this.onStairsOver()
        upstairsSimpleButton.hoverOutCallback = () => this.onStairsOut()
        const upstairsMoveTo = new MoveTo(upstairs)
        upstairsMoveTo.x = 1340
        upstairsMoveTo.y = 470

        // soundStudio (components)
        const soundStudioSimpleButton = new SimpleButton(soundStudio)
        soundStudioSimpleButton.hoverCallback = () => this.onSoundStudioOver()
        soundStudioSimpleButton.hoverOutCallback = () => this.onSoundStudioOut()
        const soundStudioMoveTo = new MoveTo(soundStudio)
        soundStudioMoveTo.x = 694
        soundStudioMoveTo.y = 350
        const soundStudioShowHint = new ShowHint(soundStudio)
        soundStudioShowHint.text = 'mixmusic'
        new LocalisedSprite(soundStudio)

        // danceContest (components)
        const danceContestSimpleButton = new SimpleButton(danceContest)
        danceContestSimpleButton.hoverCallback = () => this.onContestOver()
        danceContestSimpleButton.hoverOutCallback = () => this.onContestOut()
        const danceContestMoveTo = new MoveTo(danceContest)
        danceContestMoveTo.x = 1100
        danceContestMoveTo.y = 480
        const danceContestShowHint = new ShowHint(danceContest)
        danceContestShowHint.text = 'dancecontest'

        // danceContestBanner (components)
        new LocalisedSprite(danceContestBanner)

        // boiler_btn (components)
        const boiler_btnSimpleButton = new SimpleButton(boiler_btn)
        boiler_btnSimpleButton.hoverCallback = () => this.onSpeakerOver()
        boiler_btnSimpleButton.hoverOutCallback = () => this.onSpeakerOut()
        const boiler_btnMoveTo = new MoveTo(boiler_btn)
        boiler_btnMoveTo.x = 1000
        boiler_btnMoveTo.y = 360

        // keeper_btn (components)
        const keeper_btnSimpleButton = new SimpleButton(keeper_btn)
        keeper_btnSimpleButton.hoverCallback = () => this.onKeeperOver()
        keeper_btnSimpleButton.hoverOutCallback

        this.danceFloor = danceFloor
        this.door = door
        this.upstairs = upstairs
        this.bg = bg
        this.leftRailing = leftRailing
        this.floorSpeaker = floorSpeaker
        this.floorSpeakerbut = floorSpeakerbut
        this.doorRailingLeft = doorRailingLeft
        this.doorRailingRight = doorRailingRight
        this.backChair = backChair
        this.rightChair = rightChair
        this.table = table
        this.leftChair = leftChair
        this.leftChairBack = leftChairBack
        this.soundStudio = soundStudio
        this.sofa = sofa
        this.rightRailing = rightRailing
        this.boilerSpeaker = boilerSpeaker
        this.danceContest = danceContest
        this.danceContestBanner = danceContestBanner
        this.danceContestClip = danceContestClip
        this.rightSpeaker = rightSpeaker
        this.corner = corner
        this.upstairsRailing = upstairsRailing
        this.neonSign = neonSign
        this.leftSpeaker = leftSpeaker
        this.fg = fg
        this.keeper = keeper
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    danceFloor
    /** @type {Phaser.GameObjects.Sprite} */
    door
    /** @type {Phaser.GameObjects.Sprite} */
    upstairs
    /** @type {Phaser.GameObjects.Sprite} */
    bg
    /** @type {Phaser.GameObjects.Sprite} */
    leftRailing
    /** @type {Phaser.GameObjects.Sprite} */
    floorSpeaker
    /** @type {Phaser.GameObjects.Sprite} */
    floorSpeakerbut
    /** @type {Phaser.GameObjects.Sprite} */
    doorRailingLeft
    /** @type {Phaser.GameObjects.Sprite} */
    doorRailingRight
    /** @type {Phaser.GameObjects.Sprite} */
    backChair
    /** @type {Phaser.GameObjects.Sprite} */
    rightChair
    /** @type {Phaser.GameObjects.Sprite} */
    table
    /** @type {Phaser.GameObjects.Sprite} */
    leftChair
    /** @type {Phaser.GameObjects.Sprite} */
    leftChairBack
    /** @type {Phaser.GameObjects.Sprite} */
    soundStudio
    /** @type {Phaser.GameObjects.Sprite} */
    sofa
    /** @type {Phaser.GameObjects.Sprite} */
    rightRailing
    /** @type {Phaser.GameObjects.Sprite} */
    boilerSpeaker
    /** @type {Phaser.GameObjects.Rectangle} */
    danceContest
    /** @type {Phaser.GameObjects.Sprite} */
    danceContestBanner
    /** @type {Phaser.GameObjects.Sprite} */
    danceContestClip
    /** @type {Phaser.GameObjects.Sprite} */
    rightSpeaker
    /** @type {Phaser.GameObjects.Sprite} */
    corner
    /** @type {Phaser.GameObjects.Sprite} */
    upstairsRailing
    /** @type {Phaser.GameObjects.Sprite} */
    neonSign
    /** @type {Phaser.GameObjects.Sprite} */
    leftSpeaker
    /** @type {Phaser.GameObjects.Sprite} */
    fg
    /** @type {Phaser.GameObjects.Sprite} */
    keeper
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
        this.keeper.play('dance-keeperBaseAnim')
        this.leftSpeaker.play('dance-leftSpeaker')
        this.rightSpeaker.play('dance-rightSpeaker')
        this.danceFloor.play('dance-danceFloor')
        this.floorSpeakerbut.play('dance-floorSpeaker')
        this.neonSign.play('dance-neonSign')

        this.loadSfx = ['dance-Door', 'dance-SpeakerOpen', 'dance-SpeakerClose', 'dance-LightOn', 'dance-LightOff']

        if (!this.shell.client.stamps.includes(16) && !this.shell.client.stamps.includes(22)) {
            this.dancingStampInterval = setInterval(() => {
                let dancing = 0
                for (let i = 0; i < this.penguins.length; i++) {
                    if (this.penguins[i].frame == 26) {
                        dancing++
                    }
                }
                if (dancing >= 10) {
                    this.shell.client.stampEarned(16)
                }
                if (dancing >= 25) {
                    this.shell.client.stampEarned(22)
                    clearInterval(this.dancingStampInterval)
                }
            }, 2000)
        }
    }

    onSoundStudioOver() {
        this.soundStudio.setFrame(`soundstudio-${this.shell.language}0002`)
    }

    onSoundStudioOut() {
        this.soundStudio.setFrame(`soundstudio-${this.shell.language}0001`)
    }

    onDoorOver() {
        this.door.play('dance-doorAnim')
        this.shell.musicController.addSfx('dance-Door')
    }

    onDoorOut() {
        if (this.door.anims.isPlaying) {
            this.door.anims.reverse()
        } else {
            this.door.playReverse('dance-doorAnim')
        }
    }

    onSpeakerOver() {
        this.boilerSpeaker.setFrame('boilerSpeaker0002')
        this.shell.musicController.addSfx('dance-SpeakerOpen')
    }

    onSpeakerOut() {
        this.boilerSpeaker.setFrame('boilerSpeaker0001')
        this.shell.musicController.addSfx('dance-SpeakerClose')
    }

    onContestOver() {
        this.danceContestBanner.setFrame(`danceContestBanner-${this.shell.language}-hover`)
        this.danceContestClip.play('dance-danceClip')
    }

    onContestOut() {
        this.danceContestBanner.setFrame(`danceContestBanner-${this.shell.language}`)
    }

    onStairsOver() {
        this.upstairs.setFrame('upstairs-hover')
        this.shell.musicController.addSfx('dance-LightOn')
    }

    onStairsOut() {
        this.upstairs.setFrame('upstairs')
        this.shell.musicController.addSfx('dance-LightOff')
    }

    onKeeperOver() {
        this.keeper.play('dance-keeperJump')
    }

    stop() {
        clearInterval(this.dancingStampInterval)
        super.stop()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
