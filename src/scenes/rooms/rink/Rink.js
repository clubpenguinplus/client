import RoomScene from '../RoomScene'
import {LocalisedSprite, Button} from '@scenes/components/components'
/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forts: () => this.triggerRoom(801, 560, 400),
            school: () => this.triggerRoom(122, 220, 760),
        }
        this.music = 592
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "client/media/rooms/rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "rink", "bg");
        bg.setOrigin(0, 0);

        // door
        this.add.image(1207, 185, "rink", "door");

        // signs_en
        const signs_en = this.add.image(762, 593, "rink", "signs-en");

        // fg
        this.add.image(715, 809, "rink", "fg");

        // gate
        this.add.image(756, 332, "rink", "gate");

        // lightsoff
        this.add.image(1033, 34, "rink", "lightsoff");

        // stand
        this.add.image(1092, 140, "rink", "stand");

        // light
        this.add.image(1238, 143, "rink", "light");

        // stadium_en
        const stadium_en = this.add.image(520, 136, "rink", "stadium-en");

        // bleachers4
        this.add.image(1420, 380, "rink", "bleachers4");

        // fishdogs_en
        const fishdogs_en = this.add.image(187, 199, "rink", "fishdogs-en");

        // bleachers3_png
        this.add.image(1569, 484, "rink", "bleachers3.png");

        // bleachers2
        this.add.image(103, 374, "rink", "bleachers2");

        // bleachers1
        this.add.image(-52, 484, "rink", "bleachers1");

        // food1
        this.add.image(74, 386, "rink", "food1");

        // food2
        this.add.image(1459, 377, "rink", "food2");

        // ball
        const ball = this.add.image(768, 539, "rink", "ball");
        ball.scaleX = 0.7;
        ball.scaleY = 0.7;

        // net2
        this.add.image(254, 498, "rink", "net2");

        // net1
        this.add.image(253, 506, "rink", "net1");

        // net
        const net = this.add.image(1270, 501, "rink", "net2");
        net.flipX = true;

        // net_1
        const net_1 = this.add.image(1269, 509, "rink", "net1");
        net_1.flipX = true;

        // catalog
        const catalog = this.add.image(1418, 886, "rink", "catalog");

        // signs_en (components)
        new LocalisedSprite(signs_en);

        // stadium_en (components)
        new LocalisedSprite(stadium_en);

        // fishdogs_en (components)
        new LocalisedSprite(fishdogs_en);

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => this.loadSnowSports();
        catalogButton.activeFrame = false;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    loadSnowSports() {
        let currentMonth = new Date().getMonth() + 1

        if (currentMonth >= 6 && currentMonth < 12) {
          this.interface.loadExternal('SummerSports')
        } else if (currentMonth >= 12 || currentMonth < 6) {
          this.interface.loadExternal('WinterSports')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
