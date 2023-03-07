import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {
    constructor() {
        super('Pizza')

        /** @type {Phaser.GameObjects.Sprite} */
        this.pizzacashreg
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1200, 500),
            pizzatron: () => this.triggerGame('pizzatron', 910),
        }

        this.music = 676

        this.loadSfx = ['pizza-PlazaOpen', 'pizza-PlazaClose', 'pizza-KitchenOpen', 'pizza-KitchenClose', 'pizza-CashUp', 'pizza-CashDown']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('pizza-pack', 'client/media/rooms/pizza/pizza-pack.json')
    }

    /** @returns {void} */
    _create() {
        // pizzabg
        const pizzabg = this.add.image(-168, 980, 'pizza', 'pizzabg')
        pizzabg.setOrigin(0, 1)

        // pizzatrondoor
        const pizzatrondoor = this.add.image(335.69646888903833, 306.4688458388692, 'pizza', 'pizzatrondoor')
        pizzatrondoor.setOrigin(0.48021837658106786, 0.9003115834408637)

        // plazadoor
        const plazadoor = this.add.image(767.637229710969, 309.62969070159545, 'pizza', 'plazadoor')
        plazadoor.setOrigin(0.5199195396147315, 1.0148757815639158)

        // plazadoorframe
        this.add.image(767, 180, 'pizza', 'plazadoorframe')

        // hostdesk
        const hostdesk = this.add.image(519.8212446701093, 322.68225372699186, 'pizza', 'hostdesk')
        hostdesk.setOrigin(0.2761225664178129, 0.6751629609045678)

        // topbar
        const topbar = this.add.image(377.6732452000135, 435.27757670394556, 'pizza', 'topbar')
        topbar.setOrigin(0.5572380151438793, 0.3421656070478353)

        // pizzacashreg
        const pizzacashreg = this.add.sprite(335.78355549617237, 518.4012921022943, 'pizza', 'pizzacashregover0001')
        pizzacashreg.setOrigin(0.35783558110761077, 1.768191599791271)

        // bottombar
        const bottombar = this.add.image(316.7829284667969, 564.2176000073492, 'pizza', 'bottombar')
        bottombar.setOrigin(0.4992715088832618, 0.6284675334523625)

        // leftleftchair
        const leftleftchair = this.add.image(669.5590209960938, 452.38304520720015, 'pizza', 'leftleftchair')
        leftleftchair.setOrigin(0.46559009562668846, 0.4257825591948193)

        // leftrightchair
        const leftrightchair = this.add.image(827.7349840622186, 424.67702868800666, 'pizza', 'leftrightchair')
        leftrightchair.setOrigin(0.5573498406221858, 0.43927663934121564)

        // lefttable
        const lefttable = this.add.image(763.3035278320312, 507.20474142443624, 'pizza', 'lefttable')
        lefttable.setOrigin(0.5009572282338591, 0.44251752300446573)

        // rightrightchair
        const rightrightchair = this.add.image(1035.8530031875564, 485, 'pizza', 'rightrightchair')
        rightrightchair.setOrigin(0.4873956394236967, 0.5)

        // righttable
        const righttable = this.add.image(1040, 522.4729522212508, 'pizza', 'righttable')
        righttable.setOrigin(0.46089783593941874, 0.1447045449145579)

        // rightleftchair
        const rightleftchair = this.add.image(916.0289916992188, 590.6770133865499, 'pizza', 'rightleftchair')
        rightleftchair.setOrigin(0.5750371746458496, 0.43666888765648254)

        // piano
        this.add.image(1382, 250, 'pizza', 'piano')

        // mic
        const mic = this.add.image(1331.0865289062997, 615.4975412112229, 'pizza', 'mic')
        mic.setOrigin(0.5434767226845313, 1.079146176760191)

        // stagespeaker
        const stagespeaker = this.add.image(1465, 617.607061909084, 'pizza', 'stagespeaker')
        stagespeaker.setOrigin(0.5, 0.6102783507760194)

        // pianocurtain
        const pianocurtain = this.add.image(1533.7802426792723, 663.5693675987734, 'pizza', 'pianocurtain')
        pianocurtain.setOrigin(0.9905857051568245, 1.0050070729677631)

        // pianostool
        this.add.image(1282, 472, 'pizza', 'pianostool')

        // topbarstool
        const topbarstool = this.add.image(502, 408, 'pizza', 'topbarstool')
        topbarstool.setOrigin(0.5, 0.08360821123994976)

        // midbarstool
        const midbarstool = this.add.image(504, 491.1116457577148, 'pizza', 'midbarstool')
        midbarstool.setOrigin(0.5, 0.08360821123994976)

        // bottombarstool
        const bottombarstool = this.add.image(448, 567.1090493447447, 'pizza', 'bottombarstool')
        bottombarstool.setOrigin(0.5, 0.09329174121111336)

        // pizzafg
        const pizzafg = this.add.image(770.2605318729187, 787.662558047776, 'pizza', 'pizzafg')
        pizzafg.setOrigin(0.5394800555795032, 0.724312198188327)

        // lowrighttablefront
        const lowrighttablefront = this.add.image(1476, 949.01268975639, 'pizza', 'lowrighttablefront')
        lowrighttablefront.setOrigin(0.5, 0.8973471901122606)

        // frontlights
        const frontlights = this.add.image(826.8154477478352, 974.5506960988384, 'pizza', 'frontlights')
        frontlights.setOrigin(0.502471144914401, 1.008726366378036)

        // stringlights
        this.add.image(779, 32, 'pizza', 'stringlights')

        // tables
        const tables = this.add.image(856.7607061291246, 972.6145793515118, 'pizza', 'tables')
        tables.setOrigin(0.49690907073389756, 1.013720613883312)

        // kitchen_en
        this.add.image(319, 92, 'pizza', 'kitchen_en')

        // pizzarail
        const pizzarail = this.add.image(916.4400733146049, 294.9069843632877, 'pizza', 'pizzarail')
        pizzarail.setOrigin(0.43436085422063814, 0.3912449447381145)

        // barmoveto_3
        const barmoveto_3 = this.add.image(486.3199735277102, 307.4988098144531, 'pizza', 'barmoveto')
        barmoveto_3.setOrigin(-0.2733335618083406, 0.07029392289432579)
        barmoveto_3.alphaTopLeft = 0
        barmoveto_3.alphaTopRight = 0
        barmoveto_3.alphaBottomLeft = 0
        barmoveto_3.alphaBottomRight = 0

        // moveto
        const moveto = this.add.ellipse(502, 426, 70, 50)

        // moveto_1
        const moveto_1 = this.add.ellipse(504, 509, 70, 50)

        // moveto_2
        const moveto_2 = this.add.ellipse(449, 584, 70, 50)

        // moveto_3
        const moveto_3 = this.add.ellipse(676, 476, 70, 50)

        // moveto_4
        const moveto_4 = this.add.ellipse(817, 447, 70, 50)

        // moveto_5
        const moveto_5 = this.add.ellipse(916, 612, 70, 50)

        // moveto_6
        const moveto_6 = this.add.ellipse(1036, 502, 70, 50)

        // lists
        const sort = [topbar, bottombar, lefttable, leftleftchair, leftrightchair, righttable, rightleftchair, rightrightchair, pianocurtain, mic, topbarstool, midbarstool, bottombarstool, pizzafg, frontlights, stagespeaker, tables, lowrighttablefront, pizzarail, barmoveto_3, pizzacashreg, hostdesk]

        // pizzatrondoor (components)
        const pizzatrondoorButton = new Button(pizzatrondoor)
        pizzatrondoorButton.spriteName = 'pizzatrondoor'
        pizzatrondoorButton.hoverCallback = () => this.onKitchenDoorOver()
        pizzatrondoorButton.hoverOutCallback = () => this.onKitchenDoorOut()
        pizzatrondoorButton.activeFrame = false
        new MoveTo(pizzatrondoor)
        const pizzatrondoorShowHint = new ShowHint(pizzatrondoor)
        pizzatrondoorShowHint.text = 'pizzatron'

        // plazadoor (components)
        const plazadoorButton = new Button(plazadoor)
        plazadoorButton.spriteName = 'plazadoor'
        plazadoorButton.hoverCallback = () => this.onPlazaDoorOver()
        plazadoorButton.hoverOutCallback = () => this.onPlazaDoorOut()
        plazadoorButton.activeFrame = false
        new MoveTo(plazadoor)

        // pizzacashreg (components)
        const pizzacashregSimpleButton = new SimpleButton(pizzacashreg)
        pizzacashregSimpleButton.hoverCallback = () => this.onCashRegOver()
        pizzacashregSimpleButton.hoverOutCallback = () => this.onCashRegOut()

        // barmoveto_3 (components)
        new MoveTo(barmoveto_3)
        new SimpleButton(barmoveto_3)

        // moveto (components)
        const movetoSeat = new Seat(moveto)
        movetoSeat.direction = 'west'

        // moveto_1 (components)
        const moveto_1Seat = new Seat(moveto_1)
        moveto_1Seat.direction = 'west'

        // moveto_2 (components)
        const moveto_2Seat = new Seat(moveto_2)
        moveto_2Seat.direction = 'west'

        // moveto_3 (components)
        const moveto_3Seat = new Seat(moveto_3)
        moveto_3Seat.direction = 'southeast'

        // moveto_4 (components)
        const moveto_4Seat = new Seat(moveto_4)
        moveto_4Seat.direction = 'southwest'

        // moveto_5 (components)
        const moveto_5Seat = new Seat(moveto_5)
        moveto_5Seat.direction = 'east'

        // moveto_6 (components)
        new Seat(moveto_6)

        this.pizzacashreg = pizzacashreg
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    onPlazaDoorOver() {
        this.shell.musicController.addSfx('pizza-PlazaOpen')
    }

    onPlazaDoorOut() {
        this.shell.musicController.addSfx('pizza-PlazaClose')
    }

    onKitchenDoorOver() {
        this.shell.musicController.addSfx('pizza-KitchenOpen')
    }

    onKitchenDoorOut() {
        this.shell.musicController.addSfx('pizza-KitchenClose')
    }

    onCashRegOver() {
        this.pizzacashreg.play('pizza-cashregover')
        this.shell.musicController.addSfx('pizza-CashUp')
    }

    onCashRegOut() {
        this.pizzacashreg.play('pizza-cashregdown')
        this.shell.musicController.addSfx('pizza-CashDown')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
