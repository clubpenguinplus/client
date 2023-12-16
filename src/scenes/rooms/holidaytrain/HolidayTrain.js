import RoomScene from '../RoomScene'
/* START OF COMPILED CODE */

export default class HolidayTrain extends RoomScene {
    constructor() {
        super('HolidayTrain')

        /** @type {Phaser.GameObjects.Container} */
        this.bg_cntr
        /** @type {Phaser.GameObjects.Container} */
        this.fg_cntr
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            exit: () => this.interface.main.onMapClick()
        }

        this.music = 254
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('holidaytrain-pack', 'client/media/rooms/holidaytrain/holidaytrain-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_cntr
        const bg_cntr = this.add.container(0, 0)

        // bag
        const bag = this.add.image(1143.4130149529456, 459.88653036312417, 'holidaytrain', 'bag')
        bag.setOrigin(0.7522454045743063, 0.47904846912825433)

        // hay1
        const hay1 = this.add.image(378.25362834433935, 303.77408439404553, 'holidaytrain', 'hay1')
        hay1.setOrigin(0.24885106617337013, 0.3164313252509251)

        // hay2
        const hay2 = this.add.image(430.5559003194862, 330.5278491872512, 'holidaytrain', 'hay2')
        hay2.setOrigin(0.2832604563676702, 0.34429986264848594)

        // hay3
        const hay3 = this.add.image(389.4183484105325, 365.36836942481193, 'holidaytrain', 'hay3')
        hay3.setOrigin(0.2561962965483345, 0.3805920441523527)

        // hay4
        const hay4 = this.add.image(498.13510441786167, 398.3823904427662, 'holidaytrain', 'hay4')
        hay4.setOrigin(0.32772045955830253, 0.41498165304504414)

        // hay5
        const hay5 = this.add.image(430.5729287371702, 430.40770658301506, 'holidaytrain', 'hay5')
        hay5.setOrigin(0.28327165475556415, 0.4483413728625356)

        // hay6
        const hay6 = this.add.image(458.23477534690386, 476.6539844762558, 'holidaytrain', 'hay6')
        hay6.setOrigin(0.30147025635081326, 0.4965145533002743)

        // fg_cntr
        const fg_cntr = this.add.container(0, 960)

        // lists
        const sort = [hay1, hay2, hay3, hay4, hay5, hay6, bag, fg_cntr]

        this.bg_cntr = bg_cntr
        this.fg_cntr = fg_cntr
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here
    preload() {
        super.preload()
        this.load.video({
            key: 'holidaytrain-fg',
            url: 'client/media/rooms/holidaytrain/trainfg.webm',
            asBlob: true
        })

        this.load.video({
            key: 'holidaytrain-bg',
            url: 'client/media/rooms/holidaytrain/trainbg.webm',
            asBlob: true
        })
    }

    create() {
        if (!this.checkVideoLoaded()) {
            this.events.once('videos-loaded', () => {
                super.create()
            })
            return
        }
        super.create()
        let fg = this.add.video(0, -960, 'holidaytrain-fg')
        fg.setOrigin(0, 0)
        this.fg_cntr.add(fg)
        let bg = this.add.video(0, 0, 'holidaytrain-bg')
        bg.setOrigin(0, 0)
        this.bg_cntr.add(bg)

        fg.play({loop: true})
        bg.play({loop: true})
    }

    checkVideoLoaded() {
        if (!shell.cache.video.exists('holidaytrain-fg') || !shell.cache.video.exists('holidaytrain-bg')) {
            this.load.once('filecomplete', () => this.checkVideoLoaded())
            return false
        }

        this.events.emit('videos-loaded')
        return true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
