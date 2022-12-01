import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Ship extends RoomScene {

    constructor() {
        super("Ship");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            hold: () => null,
            beach: () => this.triggerRoom(400, 700, 411),
        }
        this.music = '380'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("ship-pack", "client/media/rooms/ship/ship-pack.json");
    }

    /** @returns {void} */
    _create() {

        // shipbg
        this.add.image(760, 480, "ship", "shipbg");

        // mop
        this.add.image(259, 255, "ship", "mop");

        // stackdabox
        const stackdabox = this.add.image(192.96954927322463, 341.5245632750483, "ship", "stackdabox");
        stackdabox.setOrigin(0.531756394185797, 0.598534911037491);

        // farleftbarrel
        const farleftbarrel = this.add.image(156.30487230738947, 429.7829233844337, "ship", "farleftbarrel");
        farleftbarrel.setOrigin(0.5618124736018576, 0.5334771980923334);

        // scrolls
        this.add.image(1089, 283, "ship", "scrolls");

        // farleftbarrelfront
        const farleftbarrelfront = this.add.image(117, 547.0926276338932, "ship", "farleftbarrelfront");
        farleftbarrelfront.setOrigin(0.5, 1.102589565662003);

        // frontboxesleft
        const frontboxesleft = this.add.image(134, 605.2467062418659, "ship", "frontboxesleft");
        frontboxesleft.setOrigin(0.5, 0.8003766632408542);

        // stackedcheesebox
        this.add.image(1203, 275, "ship", "stackedcheesebox");

        // stackedboxes
        this.add.image(1289, 283, "ship", "stackedboxes");

        // treasure
        this.add.image(1369, 367, "ship", "treasure");

        // pointy
        this.add.image(1434, 382, "ship", "pointy");

        // farrightbarrel
        const farrightbarrel = this.add.image(1385.5802413613715, 463.60742073270853, "ship", "farrightbarrel");
        farrightbarrel.setOrigin(0.4566690329546222, 0.5938709799354738);

        // greencheese
        const greencheese = this.add.image(1347, 513, "ship", "greencheese");

        // frontship
        const frontship = this.add.image(749.2787977801404, 725.0718347494346, "ship", "frontship");
        frontship.setOrigin(0.5082797296435227, 0.68041164880849);

        // barrelrightmidupper
        const barrelrightmidupper = this.add.image(990, 412, "ship", "barrelrightmidupper");

        // barrelrightmidtwo
        const barrelrightmidtwo = this.add.image(1003, 453, "ship", "barrelrightmidtwo");

        // barrelrightmid
        const barrelrightmid = this.add.image(1021, 492, "ship", "barrelrightmid");

        // boxrope
        const boxrope = this.add.image(594, 541, "ship", "boxrope");

        // rightdivider
        const rightdivider = this.add.image(1097.4359383027313, 525.4990127372481, "ship", "rightdivider");
        rightdivider.setOrigin(0.673926844229979, 0.9781366590765451);

        // greencheese_1
        const greencheese_1 = this.add.image(1005, 488, "ship", "greencheese");
        greencheese_1.setOrigin(0.48384115968675534, 1.6287249196585445);

        // stackedmiddlelowerbarrel
        const stackedmiddlelowerbarrel = this.add.image(831, 435, "ship", "stackedmiddlelowerbarrel");

        // stackedmiddleuppperbarrel
        const stackedmiddleuppperbarrel = this.add.image(833, 378, "ship", "stackedmiddleuppperbarrel");

        // leftmidbarrel
        const leftmidbarrel = this.add.image(720, 422, "ship", "leftmidbarrel");

        // middlepole
        const middlepole = this.add.image(768, 451.3280135880202, "ship", "middlepole");
        middlepole.setOrigin(0.5, 0.8900924904818011);

        // shipholddoor
        const shipholddoor = this.add.image(568.6925978266287, 487.05018858730864, "ship", "shipholddoor");
        shipholddoor.setOrigin(0.6097448792294609, 0.5779135368315953);

        // net
        const net = this.add.image(699.4155658779765, 1113.2537108831857, "ship", "net");
        net.setOrigin(0.4151268575635654, 1.5204747243533672);

        // uparrow
        const uparrow = this.add.image(796.5908931155651, 631.5327562162049, "ship", "uparrow0001");
        uparrow.setOrigin(0.6968531885821571, 2.1724619522830326);

        // ladder
        const ladder = this.add.sprite(825.2467080333363, 1189.0527734015163, "ship", "ladder0001");
        ladder.setOrigin(0.38005436270060733, 2.1453594317162135);

        // storesignholder
        const storesignholder = this.add.image(399.27245071235075, 412.09777317450215, "ship", "storesignholder");
        storesignholder.setOrigin(0.21922522754292695, 0.30164515566023287);

        // storetext_en
        const storetext_en = this.add.image(457, 457, "ship", "storetext_en");

        // onestinkywheel
        const onestinkywheel = this.add.image(152, 465.40874961342365, "ship", "onestinkywheel");
        onestinkywheel.setOrigin(0.5, 1.981504230735994);

        // leftscrolls
        this.add.image(377, 262, "ship", "leftscrolls");

        // midscrolls
        this.add.image(596, 304, "ship", "midscrolls");

        // yarr
        const yarr = this.add.sprite(532.326122192504, 1223.5742650190525, "ship", "yarr0001");
        yarr.setOrigin(0.42344793344715465, 11.397787082162672);

        // wheel
        const wheel = this.add.image(361.69372137491496, 404.2434923742345, "ship", "wheel");
        wheel.setOrigin(0.523201662670068, 0.6373287601282388);

        // rightsnowglob
        const rightsnowglob = this.add.image(1197.2246248336712, 776.7251896407297, "ship", "rightsnowglob");
        rightsnowglob.setOrigin(0.44257564178759423, 0.21166115537585709);

        // rightrope
        const rightrope = this.add.image(1048.6497802734375, 870.3842775036557, "ship", "rightrope");
        rightrope.setOrigin(0.46792813909306835, 0.8643861816977328);

        // onboard
        const onboard = this.add.image(1041.5281837429502, 880.5165714127049, "ship", "onboard");
        onboard.setOrigin(0.29482120123919786, 0.7333742674028686);

        // leftsnowglob
        const leftsnowglob = this.add.image(805, 913, "ship", "leftsnowglob");

        // leftrope
        const leftrope = this.add.image(903.7753753582157, 894.2565764021662, "ship", "leftrope");
        leftrope.setOrigin(0.7981281263860741, 1.1829844349935512);

        // lists
        const sort = [farrightbarrel, frontship, greencheese, boxrope, rightdivider, barrelrightmid, barrelrightmidtwo, greencheese_1, barrelrightmidupper, middlepole, net, storesignholder, storetext_en, frontboxesleft, farleftbarrelfront, farleftbarrel, stackdabox, yarr, wheel, stackedmiddlelowerbarrel, stackedmiddleuppperbarrel, leftmidbarrel, leftsnowglob, rightsnowglob, onboard, rightrope, onestinkywheel, uparrow, ladder, leftrope];

        // shipholddoor (components)
        const shipholddoorButton = new Button(shipholddoor);
        shipholddoorButton.spriteName = "shipholddoor";
        shipholddoorButton.hoverCallback = () => this.onHoldOver();
        shipholddoorButton.hoverOutCallback = () => this.onHoldOut();
        shipholddoorButton.activeFrame = false;
        new MoveTo(shipholddoor);

        // uparrow (components)
        const uparrowSimpleButton = new SimpleButton(uparrow);
        uparrowSimpleButton.hoverCallback = () => this.onArrowOver();
        uparrowSimpleButton.hoverOutCallback = () => this.onArrowOut();
        uparrowSimpleButton.callback = () => this.triggerRoom(423, 860, 580);

        this.uparrow = uparrow;
        this.ladder = ladder;
        this.yarr = yarr;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Image} */
    uparrow;
    /** @type {Phaser.GameObjects.Sprite} */
    ladder;
    /** @type {Phaser.GameObjects.Sprite} */
    yarr;
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create();
        this.yarr.play('ship-yarr');
    }

    onArrowOver() {
        this.shell.musicController.addSfx('ship-ladder')
        this.ladder.play('ship-ladder');
    }

    onArrowOut() {
        this.ladder.play('ship-ladderup')
    }

    onHoldOver() {
        this.shell.musicController.addSfx('ship-holdopen')
    }

    onHoldOut() {
        this.shell.musicController.addSfx('ship-holdclose')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
