import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation} from '@components/components'

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.pizzacashreg;
        /** @type {Phaser.GameObjects.Image} */
        this.tablechairmoveto;
        /** @type {Phaser.GameObjects.Image} */
        this.tablechairmoveto_1;
        /** @type {Phaser.GameObjects.Image} */
        this.tablechairmoveto_2;
        /** @type {Phaser.GameObjects.Image} */
        this.tablechairmoveto_3;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1200, 500),
            pizzatron: () => this.triggerGame('pizzatron', 910)
        }

        this.music = '676'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "client/media/rooms/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // pizzabg
        const pizzabg = this.add.image(-168, 980, "pizza", "pizzabg");
        pizzabg.setOrigin(0, 1);

        // pizzatrondoor
        const pizzatrondoor = this.add.image(335.69646888903833, 306.4688458388692, "pizza", "pizzatrondoor");
        pizzatrondoor.setOrigin(0.48021837658106786, 0.9003115834408637);

        // plazadoor
        const plazadoor = this.add.image(767.637229710969, 309.62969070159545, "pizza", "plazadoor");
        plazadoor.setOrigin(0.5199195396147315, 1.0148757815639158);

        // plazadoorframe
        this.add.image(767, 180, "pizza", "plazadoorframe");

        // hostdesk
        const hostdesk = this.add.image(519.8212446701093, 322.68225372699186, "pizza", "hostdesk");
        hostdesk.setOrigin(0.2761225664178129, 0.6751629609045678);

        // topbar
        const topbar = this.add.image(377.6732452000135, 435.27757670394556, "pizza", "topbar");
        topbar.setOrigin(0.5572380151438793, 0.3421656070478353);

        // pizzacashreg
        const pizzacashreg = this.add.sprite(335.78355549617237, 518.4012921022943, "pizza", "pizzacashregover0001");
        pizzacashreg.setOrigin(0.35783558110761077, 1.768191599791271);

        // bottombar
        const bottombar = this.add.image(316.7829284667969, 564.2176000073492, "pizza", "bottombar");
        bottombar.setOrigin(0.4992715088832618, 0.6284675334523625);

        // leftleftchair
        const leftleftchair = this.add.image(669.5590209960938, 452.38304520720015, "pizza", "leftleftchair");
        leftleftchair.setOrigin(0.46559009562668846, 0.4257825591948193);

        // leftrightchair
        const leftrightchair = this.add.image(827.7349840622186, 424.67702868800666, "pizza", "leftrightchair");
        leftrightchair.setOrigin(0.5573498406221858, 0.43927663934121564);

        // lefttable
        const lefttable = this.add.image(763.3035278320312, 507.20474142443624, "pizza", "lefttable");
        lefttable.setOrigin(0.5009572282338591, 0.44251752300446573);

        // rightrightchair
        const rightrightchair = this.add.image(1035.8530031875564, 485, "pizza", "rightrightchair");
        rightrightchair.setOrigin(0.4873956394236967, 0.5);

        // righttable
        const righttable = this.add.image(1040, 522.4729522212508, "pizza", "righttable");
        righttable.setOrigin(0.46089783593941874, 0.1447045449145579);

        // rightleftchair
        const rightleftchair = this.add.image(916.0289916992188, 590.6770133865499, "pizza", "rightleftchair");
        rightleftchair.setOrigin(0.5750371746458496, 0.43666888765648254);

        // tablechairmoveto
        const tablechairmoveto = this.add.image(921, 617, "pizza", "tablechairmoveto");
        tablechairmoveto.alphaTopLeft = 0;
        tablechairmoveto.alphaTopRight = 0;
        tablechairmoveto.alphaBottomLeft = 0;
        tablechairmoveto.alphaBottomRight = 0;

        // tablechairmoveto_1
        const tablechairmoveto_1 = this.add.image(1038, 503, "pizza", "tablechairmoveto");
        tablechairmoveto_1.alphaTopLeft = 0;
        tablechairmoveto_1.alphaTopRight = 0;
        tablechairmoveto_1.alphaBottomLeft = 0;
        tablechairmoveto_1.alphaBottomRight = 0;

        // tablechairmoveto_2
        const tablechairmoveto_2 = this.add.image(817, 447, "pizza", "tablechairmoveto");
        tablechairmoveto_2.alphaTopLeft = 0;
        tablechairmoveto_2.alphaTopRight = 0;
        tablechairmoveto_2.alphaBottomLeft = 0;
        tablechairmoveto_2.alphaBottomRight = 0;

        // tablechairmoveto_3
        const tablechairmoveto_3 = this.add.image(678, 479, "pizza", "tablechairmoveto");
        tablechairmoveto_3.alphaTopLeft = 0;
        tablechairmoveto_3.alphaTopRight = 0;
        tablechairmoveto_3.alphaBottomLeft = 0;
        tablechairmoveto_3.alphaBottomRight = 0;

        // piano
        this.add.image(1382, 250, "pizza", "piano");

        // mic
        const mic = this.add.image(1331.0865289062997, 615.4975412112229, "pizza", "mic");
        mic.setOrigin(0.5434767226845313, 1.079146176760191);

        // stagespeaker
        const stagespeaker = this.add.image(1465, 617.607061909084, "pizza", "stagespeaker");
        stagespeaker.setOrigin(0.5, 0.6102783507760194);

        // pianocurtain
        const pianocurtain = this.add.image(1533.7802426792723, 663.5693675987734, "pizza", "pianocurtain");
        pianocurtain.setOrigin(0.9905857051568245, 1.0050070729677631);

        // pianostool
        this.add.image(1282, 472, "pizza", "pianostool");

        // topbarstool
        const topbarstool = this.add.image(502, 408, "pizza", "topbarstool");
        topbarstool.setOrigin(0.5, 0.08360821123994976);

        // midbarstool
        const midbarstool = this.add.image(504, 491.1116457577148, "pizza", "midbarstool");
        midbarstool.setOrigin(0.5, 0.08360821123994976);

        // bottombarstool
        const bottombarstool = this.add.image(448, 567.1090493447447, "pizza", "bottombarstool");
        bottombarstool.setOrigin(0.5, 0.09329174121111336);

        // pizzafg
        const pizzafg = this.add.image(770.2605318729187, 787.662558047776, "pizza", "pizzafg");
        pizzafg.setOrigin(0.5394800555795032, 0.724312198188327);

        // lowrighttablefront
        const lowrighttablefront = this.add.image(1476, 949.01268975639, "pizza", "lowrighttablefront");
        lowrighttablefront.setOrigin(0.5, 0.8973471901122606);

        // frontlights
        const frontlights = this.add.image(826.8154477478352, 974.5506960988384, "pizza", "frontlights");
        frontlights.setOrigin(0.502471144914401, 1.008726366378036);

        // stringlights
        this.add.image(779, 32, "pizza", "stringlights");

        // tables
        const tables = this.add.image(856.7607061291246, 972.6145793515118, "pizza", "tables");
        tables.setOrigin(0.49690907073389756, 1.013720613883312);

        // barmoveto
        const barmoveto = this.add.image(446, 586, "pizza", "barmoveto");
        barmoveto.alphaTopLeft = 0;
        barmoveto.alphaTopRight = 0;
        barmoveto.alphaBottomLeft = 0;
        barmoveto.alphaBottomRight = 0;

        // barmoveto_1
        const barmoveto_1 = this.add.image(504, 512, "pizza", "barmoveto");
        barmoveto_1.alphaTopLeft = 0;
        barmoveto_1.alphaTopRight = 0;
        barmoveto_1.alphaBottomLeft = 0;
        barmoveto_1.alphaBottomRight = 0;

        // barmoveto_2
        const barmoveto_2 = this.add.image(502, 425, "pizza", "barmoveto");
        barmoveto_2.alphaTopLeft = 0;
        barmoveto_2.alphaTopRight = 0;
        barmoveto_2.alphaBottomLeft = 0;
        barmoveto_2.alphaBottomRight = 0;

        // kitchen_en
        this.add.image(319, 92, "pizza", "kitchen_en");

        // pizzarail
        const pizzarail = this.add.image(916.4400733146049, 294.9069843632877, "pizza", "pizzarail");
        pizzarail.setOrigin(0.43436085422063814, 0.3912449447381145);

        // barmoveto_3
        const barmoveto_3 = this.add.image(486.3199735277102, 307.4988098144531, "pizza", "barmoveto");
        barmoveto_3.setOrigin(-0.2733335618083406, 0.07029392289432579);
        barmoveto_3.alphaTopLeft = 0;
        barmoveto_3.alphaTopRight = 0;
        barmoveto_3.alphaBottomLeft = 0;
        barmoveto_3.alphaBottomRight = 0;

        // lists
        const sort = [topbar, bottombar, lefttable, leftleftchair, leftrightchair, righttable, rightleftchair, rightrightchair, pianocurtain, mic, topbarstool, midbarstool, bottombarstool, pizzafg, frontlights, stagespeaker, tables, lowrighttablefront, pizzarail, barmoveto_3, barmoveto_2, barmoveto_1, barmoveto, tablechairmoveto_3, tablechairmoveto_2, tablechairmoveto_1, tablechairmoveto, pizzacashreg, hostdesk];

        // pizzatrondoor (components)
        const pizzatrondoorButton = new Button(pizzatrondoor);
        pizzatrondoorButton.spriteName = "pizzatrondoor";
        pizzatrondoorButton.hoverCallback = () => this.onKitchenDoorOver();;
        pizzatrondoorButton.hoverOutCallback = () => this.onKitchenDoorOut();;
        pizzatrondoorButton.activeFrame = false;
        new MoveTo(pizzatrondoor);
        const pizzatrondoorShowHint = new ShowHint(pizzatrondoor);
        pizzatrondoorShowHint.text = "Play Pizzatron";

        // plazadoor (components)
        const plazadoorButton = new Button(plazadoor);
        plazadoorButton.spriteName = "plazadoor";
        plazadoorButton.hoverCallback = () => this.onPlazaDoorOver();;
        plazadoorButton.hoverOutCallback = () => this.onPlazaDoorOut();;
        plazadoorButton.activeFrame = false;
        new MoveTo(plazadoor);

        // tablechairmoveto (components)
        new MoveTo(tablechairmoveto);
        new SimpleButton(tablechairmoveto);

        // tablechairmoveto_1 (components)
        new MoveTo(tablechairmoveto_1);
        new SimpleButton(tablechairmoveto_1);

        // tablechairmoveto_2 (components)
        new MoveTo(tablechairmoveto_2);
        new SimpleButton(tablechairmoveto_2);

        // tablechairmoveto_3 (components)
        new MoveTo(tablechairmoveto_3);
        new SimpleButton(tablechairmoveto_3);

        // barmoveto (components)
        new MoveTo(barmoveto);
        new SimpleButton(barmoveto);

        // barmoveto_1 (components)
        new MoveTo(barmoveto_1);
        new SimpleButton(barmoveto_1);

        // barmoveto_2 (components)
        new MoveTo(barmoveto_2);
        new SimpleButton(barmoveto_2);

        // barmoveto_3 (components)
        new MoveTo(barmoveto_3);
        new SimpleButton(barmoveto_3);

        this.pizzacashreg = pizzacashreg;
        this.tablechairmoveto = tablechairmoveto;
        this.tablechairmoveto_1 = tablechairmoveto_1;
        this.tablechairmoveto_2 = tablechairmoveto_2;
        this.tablechairmoveto_3 = tablechairmoveto_3;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    onPlazaDoorOver() {
        this.shell.musicController.addSfx('Pizza-PlazaOpen')
    }

    onPlazaDoorOut() {
        this.shell.musicController.addSfx('Pizza-PlazaClose')
    }

    onKitchenDoorOver() {
        this.shell.musicController.addSfx('Pizza-KitchenOpen')
    }

    onKitchenDoorOut() {
        this.shell.musicController.addSfx('Pizza-KitchenClose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
