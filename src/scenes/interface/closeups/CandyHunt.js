import Closeup from './Closeup'
import {Button, SimpleButton, LocalisedSprite, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class CandyHunt extends Closeup {
    constructor() {
        super('CandyHunt')

        /** @type {Phaser.GameObjects.Image} */
        this.bluewolf
        /** @type {Phaser.GameObjects.Image} */
        this.bluezombie
        /** @type {Phaser.GameObjects.Image} */
        this.brownwolf
        /** @type {Phaser.GameObjects.Image} */
        this.orangewolf
        /** @type {Phaser.GameObjects.Image} */
        this.purplebat
        /** @type {Phaser.GameObjects.Image} */
        this.purplezombie
        /** @type {Phaser.GameObjects.Image} */
        this.greenbat
        /** @type {Phaser.GameObjects.Image} */
        this.orangebat
        /** @type {Phaser.GameObjects.Image} */
        this.greenzombie
        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {Phaser.GameObjects.Text} */
        this.title_1

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // grave
        this.add.image(760, 436, 'candyhunt', 'grave')

        // exit
        const exit = this.add.image(1103, 66, 'main', 'white-x')
        exit.scaleX = 0.75
        exit.scaleY = 0.75

        // bluewolf_1
        const bluewolf_1 = this.add.image(946, 710, 'candyhunt', 'bluewolf')
        bluewolf_1.alpha = 0.5
        bluewolf_1.alphaTopLeft = 0.5
        bluewolf_1.alphaTopRight = 0.5
        bluewolf_1.alphaBottomLeft = 0.5
        bluewolf_1.alphaBottomRight = 0.5
        bluewolf_1.tintFill = true
        bluewolf_1.tintTopLeft = 0
        bluewolf_1.tintTopRight = 0
        bluewolf_1.tintBottomLeft = 0
        bluewolf_1.tintBottomRight = 0

        // greenzombie_1
        const greenzombie_1 = this.add.image(565, 531, 'candyhunt', 'greenzombie')
        greenzombie_1.alpha = 0.5
        greenzombie_1.alphaTopLeft = 0.5
        greenzombie_1.alphaTopRight = 0.5
        greenzombie_1.alphaBottomLeft = 0.5
        greenzombie_1.alphaBottomRight = 0.5
        greenzombie_1.tintFill = true
        greenzombie_1.tintTopLeft = 0
        greenzombie_1.tintTopRight = 0
        greenzombie_1.tintBottomLeft = 0
        greenzombie_1.tintBottomRight = 0

        // orangebat_1
        const orangebat_1 = this.add.image(566, 350, 'candyhunt', 'orangebat')
        orangebat_1.alpha = 0.5
        orangebat_1.alphaTopLeft = 0.5
        orangebat_1.alphaTopRight = 0.5
        orangebat_1.alphaBottomLeft = 0.5
        orangebat_1.alphaBottomRight = 0.5
        orangebat_1.tintFill = true
        orangebat_1.tintTopLeft = 0
        orangebat_1.tintTopRight = 0
        orangebat_1.tintBottomLeft = 0
        orangebat_1.tintBottomRight = 0

        // greenbat_1
        const greenbat_1 = this.add.image(756, 350, 'candyhunt', 'greenbat')
        greenbat_1.alpha = 0.5
        greenbat_1.alphaTopLeft = 0.5
        greenbat_1.alphaTopRight = 0.5
        greenbat_1.alphaBottomLeft = 0.5
        greenbat_1.alphaBottomRight = 0.5
        greenbat_1.tintFill = true
        greenbat_1.tintTopLeft = 0
        greenbat_1.tintTopRight = 0
        greenbat_1.tintBottomLeft = 0
        greenbat_1.tintBottomRight = 0

        // purplezombie_1
        const purplezombie_1 = this.add.image(755, 530, 'candyhunt', 'purplezombie')
        purplezombie_1.alpha = 0.5
        purplezombie_1.alphaTopLeft = 0.5
        purplezombie_1.alphaTopRight = 0.5
        purplezombie_1.alphaBottomLeft = 0.5
        purplezombie_1.alphaBottomRight = 0.5
        purplezombie_1.tintFill = true
        purplezombie_1.tintTopLeft = 0
        purplezombie_1.tintTopRight = 0
        purplezombie_1.tintBottomLeft = 0
        purplezombie_1.tintBottomRight = 0

        // purplebat_1
        const purplebat_1 = this.add.image(946, 350, 'candyhunt', 'purplebat')
        purplebat_1.alpha = 0.5
        purplebat_1.alphaTopLeft = 0.5
        purplebat_1.alphaTopRight = 0.5
        purplebat_1.alphaBottomLeft = 0.5
        purplebat_1.alphaBottomRight = 0.5
        purplebat_1.tintFill = true
        purplebat_1.tintTopLeft = 0
        purplebat_1.tintTopRight = 0
        purplebat_1.tintBottomLeft = 0
        purplebat_1.tintBottomRight = 0

        // orangewolf_1
        const orangewolf_1 = this.add.image(756, 710, 'candyhunt', 'orangewolf')
        orangewolf_1.alpha = 0.5
        orangewolf_1.alphaTopLeft = 0.5
        orangewolf_1.alphaTopRight = 0.5
        orangewolf_1.alphaBottomLeft = 0.5
        orangewolf_1.alphaBottomRight = 0.5
        orangewolf_1.tintFill = true
        orangewolf_1.tintTopLeft = 0
        orangewolf_1.tintTopRight = 0
        orangewolf_1.tintBottomLeft = 0
        orangewolf_1.tintBottomRight = 0

        // brownwolf_1
        const brownwolf_1 = this.add.image(566, 710, 'candyhunt', 'brownwolf')
        brownwolf_1.alpha = 0.5
        brownwolf_1.alphaTopLeft = 0.5
        brownwolf_1.alphaTopRight = 0.5
        brownwolf_1.alphaBottomLeft = 0.5
        brownwolf_1.alphaBottomRight = 0.5
        brownwolf_1.tintFill = true
        brownwolf_1.tintTopLeft = 0
        brownwolf_1.tintTopRight = 0
        brownwolf_1.tintBottomLeft = 0
        brownwolf_1.tintBottomRight = 0

        // bluezombie_1
        const bluezombie_1 = this.add.image(945, 530, 'candyhunt', 'bluezombie')
        bluezombie_1.alpha = 0.5
        bluezombie_1.alphaTopLeft = 0.5
        bluezombie_1.alphaTopRight = 0.5
        bluezombie_1.alphaBottomLeft = 0.5
        bluezombie_1.alphaBottomRight = 0.5
        bluezombie_1.tintFill = true
        bluezombie_1.tintTopLeft = 0
        bluezombie_1.tintTopRight = 0
        bluezombie_1.tintBottomLeft = 0
        bluezombie_1.tintBottomRight = 0

        // bluewolf
        const bluewolf = this.add.image(950, 706, 'candyhunt', 'bluewolf')

        // bluezombie
        const bluezombie = this.add.image(949, 526, 'candyhunt', 'bluezombie')

        // brownwolf
        const brownwolf = this.add.image(570, 706, 'candyhunt', 'brownwolf')

        // orangewolf
        const orangewolf = this.add.image(760, 706, 'candyhunt', 'orangewolf')

        // purplebat
        const purplebat = this.add.image(950, 346, 'candyhunt', 'purplebat')

        // purplezombie
        const purplezombie = this.add.image(759, 526, 'candyhunt', 'purplezombie')

        // greenbat
        const greenbat = this.add.image(760, 346, 'candyhunt', 'greenbat')

        // orangebat
        const orangebat = this.add.image(570, 346, 'candyhunt', 'orangebat')

        // greenzombie
        const greenzombie = this.add.image(569, 527, 'candyhunt', 'greenzombie')

        // title
        const title = this.add.text(760, 166, '', {})
        title.setOrigin(0.5, 0)
        title.text = 'Candy Hunt'
        title.setStyle({align: 'center', color: '#25b110ff', fixedWidth: 800, fontFamily: 'CCFaceFront', fontSize: '48px', fontStyle: 'bold italic', stroke: '#172b14ff', strokeThickness: 10, 'shadow.color': '#ffffffff', 'shadow.fill': true})
        title.setLineSpacing(5)
        title.setWordWrapWidth(800)

        // title_1
        const title_1 = this.add.text(760, 227, '', {})
        title_1.setOrigin(0.5, 0)
        title_1.text = 'Find all nine for an exclusive reward!'
        title_1.setStyle({align: 'center', color: '#461755ff', fixedWidth: 800, fontFamily: 'cpChantal', fontSize: '28px', fontStyle: 'italic', stroke: '#b788c7ff', strokeThickness: 5, 'shadow.offsetX': 1, 'shadow.offsetY': 2, 'shadow.color': '#000000ff', 'shadow.blur': 2, 'shadow.stroke': true})
        title_1.setLineSpacing(5)
        title_1.setWordWrapWidth(800)

        // block (components)
        new Interactive(block)

        // exit (components)
        const exitButton = new Button(exit)
        exitButton.callback = () => this.stop()

        this.bluewolf = bluewolf
        this.bluezombie = bluezombie
        this.brownwolf = brownwolf
        this.orangewolf = orangewolf
        this.purplebat = purplebat
        this.purplezombie = purplezombie
        this.greenbat = greenbat
        this.orangebat = orangebat
        this.greenzombie = greenzombie
        this.title = title
        this.title_1 = title_1

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        let candies = ['greenzombie', 'purplezombie', 'bluezombie', 'orangewolf', 'brownwolf', 'bluewolf', 'greenbat', 'orangebat', 'purplebat']
        for (let i of candies) {
            if (!this.shell.party.candiesFound.includes(i)) {
                this[i].tintTopLeft = 3153695
                this[i].tintTopRight = 3153695
                this[i].tintBottomRight = 3153695
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
