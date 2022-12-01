import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, LocalisedSprite, ShowHint, Button, Animation, Seat} from '@components/components'
/* START OF COMPILED CODE */

export default class Shiphold extends RoomScene {

    constructor() {
        super("Shiphold");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            quarters: () => null,
            ship: () => this.triggerRoom(420, 900, 600),
        }
        this.music = '491'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shiphold-pack", "client/media/rooms/shiphold/shiphold-pack.json");
    }

    /** @returns {void} */
    _create() {

        // shipholdbg
        this.add.image(760, 480, "shiphold", "shipholdbg");

        // quartersdoornokey
        const quartersdoornokey = this.add.image(1259.426013191893, 529.2899780135118, "shiphold", "quartersdoornokey");
        quartersdoornokey.setOrigin(0.03161437994209239, 0.8321883830197927);

        // cqkeysign
        const cqkeysign = this.add.image(1336, 421, "shiphold", "cqkeysign");
        cqkeysign.visible = false;

        // pirate_en
        const pirate_en = this.add.image(254, 211, "shiphold", "pirate_en");

        // ptholder
        this.add.image(264, 111, "shiphold", "ptholder");

        // table
        const table = this.add.image(439, 549.8866569889494, "shiphold", "table");
        table.setOrigin(0.5, 0.35928344387359545);

        // map
        const map = this.add.image(444.48845039290177, 576.5980200673546, "shiphold", "map");
        map.setOrigin(0.251822576092917, 0.4329295298079681);

        // clock
        const clock = this.add.image(508.49835005612886, 643.7772240738743, "shiphold", "clock");
        clock.setOrigin(0.40204484593947276, 4.14598195520638);

        // abacus
        const abacus = this.add.image(343.391789354084, 602.1343148326719, "shiphold", "abacus");
        abacus.setOrigin(0.5201708602041157, 0.6294687771240914);

        // shipbox
        const shipbox = this.add.image(172.238731579695, 559.5560022724044, "shiphold", "shipbox");
        shipbox.setOrigin(0.7639600499124785, 0.4115585360281083);

        // unicycle
        const unicycle = this.add.image(137, 761.5286079654029, "shiphold", "unicycle");
        unicycle.setOrigin(0.5, 1.0329432129256988);

        // staircase
        const staircase = this.add.image(1361.5668814561182, 589.1655927194098, "shiphold", "staircase");
        staircase.setOrigin(0.48640147685925816, 0.5372530970074114);

        // crew_en
        const crew_en = this.add.image(260, 640, "shiphold", "crew_en");

        // shipholdfg
        const shipholdfg = this.add.image(663.241865152077, 1020.6410589948367, "shiphold", "shipholdfg");
        shipholdfg.setOrigin(0.4989748484851761, 1.0078396266804674);

        // boxmiddle
        this.add.image(825, 488, "shiphold", "boxmiddle");

        // cq_en
        const cq_en = this.add.image(1363, 193, "shiphold", "cq_en");

        // lists
        const sort = [table, map, clock, abacus, shipbox, shipholdfg, unicycle, staircase];

        // quartersdoornokey (components)
        const quartersdoornokeyButton = new Button(quartersdoornokey);
        quartersdoornokeyButton.spriteName = "quartersdoornokey";
        quartersdoornokeyButton.hoverCallback = () => this.onQuartersOver();
        quartersdoornokeyButton.hoverOutCallback = () => this.onQuartersOut();
        quartersdoornokeyButton.activeFrame = false;
        new MoveTo(quartersdoornokey);

        // cqkeysign (components)
        const cqkeysignButton = new Button(cqkeysign);
        cqkeysignButton.spriteName = "cqkeysign";
        cqkeysignButton.activeFrame = false;

        // pirate_en (components)
        new LocalisedSprite(pirate_en);

        // crew_en (components)
        new LocalisedSprite(crew_en);

        // cq_en (components)
        new LocalisedSprite(cq_en);

        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Image[]} */
    sort;

    /* START-USER-CODE */

    onQuartersOver() {
        this.shell.musicController.addSfx('shiphold-quartersopen')
    }

    onQuartersOut() {
        this.shell.musicController.addSfx('shiphold-quartersclosed')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
