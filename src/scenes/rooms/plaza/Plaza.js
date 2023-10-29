import RoomScene from '../RoomScene'
import Main from '@scenes/interface/game/main/Main'

import {Animation, Button, MoveTo, SimpleButton, Zone, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {
    constructor() {
        super('Plaza')

        /** @type {Phaser.GameObjects.Sprite} */
        this.manhole
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            pizza: () => this.triggerRoom(330, 760, 330),
            mall: () => this.triggerRoom(340, 250, 700),
            pet: () => this.triggerRoom(310, 828, 520),
            cave: () => {
                this.shell.client.stampEarned(10)
                this.triggerRoom(806, 1242, 685)
            },
            forts: () => this.triggerRoom(801, 1320, 460),
            forest: () => this.triggerRoom(809, 150, 320),
            hotel: () => this.triggerRoom(430, 800, 350),
            park: () => this.interface.prompt.showError(this.shell.crumbs.getError(54))
        }

        this.music = 19

        this.loadSfx = ['plaza-Cannon', 'plaza-HoleOpen', 'plaza-HoleClose', 'plaza-StageOpen', 'plaza-StageClose', 'plaza-PizzaOpen', 'plaza-PizzaClose', 'plaza-HotelOpen', 'plaza-HotelClose', 'plaza-PetOpen', 'plaza-PetClose']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('plaza-pack', 'client/media/rooms/plaza/plaza-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'plaza', 'bg')

        // hoteldoor
        const hoteldoor = this.add.image(583.468744605747, 462.38205446003013, 'plaza', 'hoteldoor')
        hoteldoor.setOrigin(0.5378335522633343, 0.9060614097279936)

        // malldoorleft
        const malldoorleft = this.add.image(769.4488626555903, 434.690310995506, 'plaza', 'malldoorleft')
        malldoorleft.setOrigin(0.5382634789935992, 0.9015608118037959)

        // malldoorright
        const malldoorright = this.add.image(982.7144903527169, 437.13917365109637, 'plaza', 'malldoorright')
        malldoorright.setOrigin(0.43303891176120146, 0.9147267400596579)

        // manhole
        const manhole = this.add.sprite(1242, 507, 'plaza', 'manhole-open0001')

        // petdoor
        const petdoor = this.add.image(343.6122156638976, 508.4261157673976, 'plaza', 'petdoor')
        petdoor.setOrigin(0.506582964127931, 0.8647242253006924)

        // pizzadoor
        const pizzadoor = this.add.image(1113.5083519224247, 472.0024121923148, 'plaza', 'pizzadoor')
        pizzadoor.setOrigin(0.47714084332499734, 0.89839359505947)

        // signs
        this.add.image(760, 480, 'plaza', 'signs')

        // puffles
        const puffles = this.add.image(862.5576366884968, 961.3371521150619, 'plaza', 'puffles')
        puffles.setOrigin(0.5674721287268194, 1.0013928854721865)

        // arrow
        const arrow = this.add.image(1335.8445432559274, 495.8307778214688, 'plaza', 'arrow')
        arrow.setOrigin(0.8788450942473207, 0.51649039356403)

        // railingback
        const railingback = this.add.image(585.3966474747571, 497.08883875778974, 'plaza', 'railingback')
        railingback.setOrigin(0.38512937333865593, 0.517800873706031)

        // railingfrontleft
        const railingfrontleft = this.add.image(458.34484627553763, 583.2760255362075, 'plaza', 'railingfrontleft')
        railingfrontleft.setOrigin(0.30154266202338004, 0.6075791932668828)

        // railingfrontright
        const railingfrontright = this.add.image(742.9111612422103, 541.6684181259369, 'plaza', 'railingfrontright')
        railingfrontright.setOrigin(0.4887573429225067, 0.564237935547851)

        // ticketbooth
        const ticketbooth = this.add.image(875.7698954012483, 436.85339837047974, 'plaza', 'ticketbooth')
        ticketbooth.setOrigin(0.5761644174658046, 0.45505562125919385)

        // tree
        const tree = this.add.image(780.6820720379931, 1026.308976747584, 'plaza', 'tree')
        tree.setOrigin(0.5136066263407849, 1.069071858658325)

        // lists
        const sort = [tree, ticketbooth, railingfrontright, railingfrontleft, railingback]

        // hoteldoor (components)
        const hoteldoorButton = new Button(hoteldoor)
        hoteldoorButton.hoverCallback = () => this.onHotelOver()
        hoteldoorButton.hoverOutCallback = () => this.onHotelOut()
        new MoveTo(hoteldoor)

        // malldoorleft (components)
        const malldoorleftButton = new Button(malldoorleft)
        malldoorleftButton.hoverCallback = () => this.onMallOver()
        malldoorleftButton.hoverOutCallback = () => this.onMallOut()
        new MoveTo(malldoorleft)

        // malldoorright (components)
        const malldoorrightButton = new Button(malldoorright)
        malldoorrightButton.hoverCallback = () => this.onMallOver()
        malldoorrightButton.hoverOutCallback = () => this.onMallOut()
        new MoveTo(malldoorright)

        // manhole (components)
        const manholeMoveTo = new MoveTo(manhole)
        manholeMoveTo.x = 1235
        manholeMoveTo.y = 545
        const manholeSimpleButton = new SimpleButton(manhole)
        manholeSimpleButton.hoverCallback = () => this.onHoleOver()
        manholeSimpleButton.hoverOutCallback = () => this.onHoleOut()

        // petdoor (components)
        const petdoorButton = new Button(petdoor)
        petdoorButton.hoverCallback = () => this.onPetOver()
        petdoorButton.hoverOutCallback = () => this.onPetOut()
        new MoveTo(petdoor)

        // pizzadoor (components)
        const pizzadoorButton = new Button(pizzadoor)
        pizzadoorButton.hoverCallback = () => this.onPizzaOver()
        pizzadoorButton.hoverOutCallback = () => this.onPizzaOut()
        new MoveTo(pizzadoor)

        this.manhole = manhole
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onPuffleOver() {
        this.shell.musicController.addSfx('plaza-Cannon')
        this.smoke.__Animation.play()
        this.puffle.__Animation.play()
        this.cannon.__Animation.play()
    }

    onHoleOver() {
        this.shell.musicController.addSfx('plaza-HoleOpen')
        this.manhole.play('plaza-manhole-open')
    }

    onHoleOut() {
        this.shell.musicController.addSfx('plaza-HoleClose')
        this.manhole.play('plaza-manhole-close')
    }

    onMallOver() {
        this.shell.musicController.addSfx('plaza-StageOpen')
    }

    onMallOut() {
        this.shell.musicController.addSfx('plaza-StageClose')
    }

    onPizzaOver() {
        this.shell.musicController.addSfx('plaza-PizzaOpen')
    }

    onPizzaOut() {
        this.shell.musicController.addSfx('plaza-PizzaClose')
    }

    onHotelOver() {
        this.shell.musicController.addSfx('plaza-HotelOpen')
    }

    onHotelOut() {
        this.shell.musicController.addSfx('plaza-HotelClose')
    }

    onPetOver() {
        this.shell.musicController.addSfx('plaza-PetOpen')
    }

    onPetOut() {
        this.shell.musicController.addSfx('plaza-PetClose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
