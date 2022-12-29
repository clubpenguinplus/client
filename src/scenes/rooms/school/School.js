import RoomScene from '@scenes/rooms/RoomScene'

import {LocalisedSprite, Seat, Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class School extends RoomScene {

    constructor() {
        super("School");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.chalk;
        /** @type {Phaser.GameObjects.Image} */
        this.banner;
        /** @type {Phaser.GameObjects.Image} */
        this.banner2;
        /** @type {Phaser.GameObjects.Image} */
        this.overhang;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rosette;
        /** @type {Phaser.GameObjects.Image} */
        this.photo;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.lockers;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            shack: () => this.triggerRoom(807, 620, 560),
            rink: () => this.triggerRoom(802, 1220, 290),
            locker1: null,
            locker2: null,
            locker3: null,
            locker4: null,
            locker5: null,
            locker6: null,
            locker7: null,
            locker8: null,
            locker9: null,
            locker10: null,
            cafe: null,
        }
        this.music = 436
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("school-pack", "client/media/rooms/school/school-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-47, -69, "school", "bg");
        bg.setOrigin(0, 0);

        // floor
        const floor = this.add.image(861, 284, "school", "floor0001");
        floor.setOrigin(0, 0);

        // chalk
        const chalk = this.add.image(512, 194, "school", "chalk0001");

        // banner
        const banner = this.add.image(1154, 185, "school", "banner0001");

        // banner2
        const banner2 = this.add.image(1153, 109, "school", "banner20001");

        // text_en
        const text_en = this.add.image(1149, 110, "school", "text-en");

        // table3
        const table3 = this.add.image(373, 364, "school", "table3");

        // chair_4
        const chair_4 = this.add.image(304, 399.47688205906013, "school", "chair8");
        chair_4.setOrigin(0.5, 0.04966974370085901);

        // chair_5
        const chair_5 = this.add.image(402, 401.0203840925246, "school", "chair8");
        chair_5.setOrigin(0.5, 0.05743405846463686);

        // chair_7
        const chair_7 = this.add.image(381, 442, "school", "chair2");
        chair_7.setOrigin(0.5, 0.8232406830604544);

        // chair_6
        const chair_6 = this.add.image(281, 441, "school", "chair2");
        chair_6.setOrigin(0.5, 0.8404039051698586);

        // chair8
        const chair8 = this.add.image(367, 536.1943922263825, "school", "chair8");
        chair8.setOrigin(0.5, 0.08849131751975067);

        // table4
        const table4 = this.add.image(314, 486, "school", "table4");

        // table6
        const table6 = this.add.image(707, 271, "school", "table6");

        // table5
        const table5 = this.add.image(651, 310, "school", "table5");

        // table2
        const table2 = this.add.image(661, 377, "school", "table2");

        // chair9
        const chair9 = this.add.image(240, 530.6758001850613, "school", "chair9");
        chair9.setOrigin(0.5, 0.023995922144109148);

        // chair2
        const chair2 = this.add.image(343, 581, "school", "chair2");
        chair2.setOrigin(0.5, 0.8690092753521999);

        // chair7
        const chair7 = this.add.image(710, 405.8694276601772, "school", "chair7");
        chair7.setOrigin(0.5, 0.13825903546902965);

        // chair3
        const chair3 = this.add.image(716, 447, "school", "chair3");
        chair3.setOrigin(0.5, 0.8043493691967302);

        // chair_3
        const chair_3 = this.add.image(605, 414, "school", "chair4");
        chair_3.setOrigin(0.5, 0.06146704192096798);

        // chair_2
        const chair_2 = this.add.image(605, 463, "school", "chair1");
        chair_2.setOrigin(0.5, 0.9777096820450962);

        // chair5
        const chair5 = this.add.image(709, 525.3576615442951, "school", "chair5");
        chair5.setOrigin(0.5, 0.09928239905584864);

        // table1
        const table1 = this.add.image(658, 475, "school", "table1");

        // chair_1
        const chair_1 = this.add.image(709, 581, "school", "chair1");
        chair_1.setOrigin(0.5, 0.8518460532427956);

        // chair4
        const chair4 = this.add.image(598, 527.2599130180868, "school", "chair4");
        chair4.setOrigin(0.5, 0.12517101140380663);

        // chair1
        const chair1 = this.add.image(598, 584, "school", "chair1");
        chair1.setOrigin(0.5, 0.8947541085163074);

        // counter
        const counter = this.add.image(1243, 277, "school", "counter");

        // cafeteria
        const cafeteria = this.add.image(1319, 323, "school", "cafeteria");

        // overhang
        const overhang = this.add.image(1347, 129, "school", "overhang_0001");

        // fg2_png_png
        const fg2_png_png = this.add.image(743, 600.3200871275012, "school", "fg2.png.png");
        fg2_png_png.setOrigin(0.5, 0.8530579712500017);

        // fg3
        const fg3 = this.add.image(764, 617.2398802829914, "school", "fg3");
        fg3.setOrigin(0.5, 0.7290372248364891);

        // chair
        const chair = this.add.image(1325, 506, "school", "chair13");

        // locker_5
        const locker_5 = this.add.sprite(915, 1012.699043405277, "school", "locker_0001");
        locker_5.setOrigin(0.5, 0.8570859828555114);

        // locker_6
        const locker_6 = this.add.sprite(1033, 1008.5017169401333, "school", "locker_0001");
        locker_6.setOrigin(0.5, 0.8414243169407959);

        // locker_7
        const locker_7 = this.add.sprite(1151, 1011.8595781122483, "school", "locker_0001");
        locker_7.setOrigin(0.5, 0.8539536496725683);

        // locker_8
        const locker_8 = this.add.sprite(1269, 1013.5385086983058, "school", "locker_0001");
        locker_8.setOrigin(0.5, 0.8602183160384544);

        // locker_9
        const locker_9 = this.add.sprite(1387, 1016.0569045773921, "school", "locker_0001");
        locker_9.setOrigin(0.5, 0.8696153155872838);

        // locker
        const locker = this.add.sprite(304, 1011.0201128192195, "school", "locker_0001");
        locker.setOrigin(0.5, 0.8508213164896252);

        // locker_2
        const locker_2 = this.add.sprite(422, 1007.6622516471047, "school", "locker_0001");
        locker_2.setOrigin(0.5, 0.8382919837578532);

        // locker_3
        const locker_3 = this.add.sprite(540, 1013.5385086983058, "school", "locker_0001");
        locker_3.setOrigin(0.5, 0.8602183160384544);

        // locker_4
        const locker_4 = this.add.sprite(658, 1010.1806475261908, "school", "locker_0001");
        locker_4.setOrigin(0.5, 0.8476889833066821);

        // locker_1
        const locker_1 = this.add.sprite(186, 1010.518047764558, "school", "locker_0001");
        locker_1.setOrigin(0.5, 0.8489481587718389);

        // fg
        const fg = this.add.sprite(753, 1227.1024961248506, "school", "fg");
        fg.setOrigin(0.5, 1.2350172946082631);

        // door
        const door = this.add.sprite(1480, 2438, "school", "door");
        door.setOrigin(0.5, 3.925414825717541);

        // door_1
        const door_1 = this.add.sprite(46, 2228, "school", "door");
        door_1.setOrigin(0.5, 3.532624319662934);
        door_1.flipX = true;

        // mic
        const mic = this.add.sprite(1094, 302, "school", "mic");
        mic.setOrigin(0.7046615371015782, 0.831551690104559);

        // chair10
        const chair10 = this.add.sprite(1005, 373, "school", "chair10");

        // chair13
        const chair13 = this.add.sprite(1209, 369, "school", "chair13");

        // table7
        const table7 = this.add.sprite(1103, 402, "school", "table7");

        // table8
        const table8 = this.add.sprite(1216, 545, "school", "table8");

        // chair12
        const chair12 = this.add.sprite(1083.0517230034852, 553.3979925708444, "school", "chair12");
        chair12.setOrigin(0.6072982815872352, 0.12283802448423232);

        // chair11
        const chair11 = this.add.sprite(1048, 596.8390766782843, "school", "chair11");
        chair11.setOrigin(0.5, 0.8231497954235465);

        // rosette
        const rosette = this.add.sprite(859, 1001.828228926573, "school", "rosette_0001");
        rosette.setOrigin(0.5, 6.955506942157839);

        // photo
        const photo = this.add.image(858, 1023.8313427344806, "school", "photo_0001");
        photo.setOrigin(0.5, 9.018751306119444);

        // hanginglights
        const hanginglights = this.add.image(1132, 7, "school", "hanginglights");

        // ellipse_1
        const ellipse_1 = this.add.ellipse(231, 551, 70, 40);

        // ellipse
        const ellipse = this.add.ellipse(360, 547, 70, 40);

        // ellipse_2
        const ellipse_2 = this.add.ellipse(599, 542, 70, 40);

        // ellipse_3
        const ellipse_3 = this.add.ellipse(711, 541, 70, 40);

        // ellipse_4
        const ellipse_4 = this.add.ellipse(708, 421, 70, 30);

        // ellipse_5
        const ellipse_5 = this.add.ellipse(606, 415, 70, 40);

        // ellipse_6
        const ellipse_6 = this.add.ellipse(394, 411, 70, 40);

        // ellipse_7
        const ellipse_7 = this.add.ellipse(299, 408, 70, 40);

        // ellipse_8
        const ellipse_8 = this.add.ellipse(702, 288, 70, 40);
        ellipse_8.angle = 26;

        // ellipse_9
        const ellipse_9 = this.add.ellipse(1009, 388, 70, 40);
        ellipse_9.angle = -33;

        // ellipse_10
        const ellipse_10 = this.add.ellipse(1210, 384, 70, 40);
        ellipse_10.angle = 37;

        // ellipse_11
        const ellipse_11 = this.add.ellipse(1324, 520, 70, 40);
        ellipse_11.angle = 37;

        // ellipse_12
        const ellipse_12 = this.add.ellipse(1079, 574, 70, 40);
        ellipse_12.angle = 56;

        // lists
        const lockers = [locker_1, locker, locker_2, locker_3, locker_4, locker_5, locker_6, locker_7, locker_8, locker_9];
        const sort = [table3, chair_4, chair_5, chair_7, chair_6, chair8, table4, table6, table5, table2, chair9, chair2, chair7, chair3, chair_3, chair_2, chair5, table1, chair_1, chair4, chair1, counter, cafeteria, overhang, fg3, chair, locker_5, locker_6, locker_7, locker_8, locker_9, locker, locker_2, locker_3, locker_4, locker_1, fg, door, door_1, mic, chair10, chair13, table7, table8, chair12, chair11, hanginglights, fg2_png_png, photo, rosette];

        // text_en (components)
        new LocalisedSprite(text_en);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('school-dooropen');
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('school-doorclose');
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1440;
        doorMoveTo.y = 724;

        // door_1 (components)
        const door_1Button = new Button(door_1);
        door_1Button.spriteName = "door";
        door_1Button.hoverCallback = () => this.shell.musicController.addSfx('school-dooropen');
        door_1Button.hoverOutCallback = () => this.shell.musicController.addSfx('school-doorclose');
        door_1Button.activeFrame = false;
        const door_1MoveTo = new MoveTo(door_1);
        door_1MoveTo.x = 80;
        door_1MoveTo.y = 724;

        // ellipse_1 (components)
        const ellipse_1Seat = new Seat(ellipse_1);
        ellipse_1Seat.direction = "north";

        // ellipse (components)
        const ellipseSeat = new Seat(ellipse);
        ellipseSeat.direction = "north";

        // ellipse_2 (components)
        const ellipse_2Seat = new Seat(ellipse_2);
        ellipse_2Seat.direction = "north";

        // ellipse_3 (components)
        const ellipse_3Seat = new Seat(ellipse_3);
        ellipse_3Seat.direction = "north";

        // ellipse_4 (components)
        const ellipse_4Seat = new Seat(ellipse_4);
        ellipse_4Seat.direction = "northwest";

        // ellipse_5 (components)
        const ellipse_5Seat = new Seat(ellipse_5);
        ellipse_5Seat.direction = "north";

        // ellipse_6 (components)
        const ellipse_6Seat = new Seat(ellipse_6);
        ellipse_6Seat.direction = "north";

        // ellipse_7 (components)
        const ellipse_7Seat = new Seat(ellipse_7);
        ellipse_7Seat.direction = "north";

        // ellipse_8 (components)
        const ellipse_8Seat = new Seat(ellipse_8);
        ellipse_8Seat.direction = "southwest";

        // ellipse_9 (components)
        const ellipse_9Seat = new Seat(ellipse_9);
        ellipse_9Seat.direction = "southeast";

        // ellipse_10 (components)
        const ellipse_10Seat = new Seat(ellipse_10);
        ellipse_10Seat.direction = "southwest";

        // ellipse_11 (components)
        const ellipse_11Seat = new Seat(ellipse_11);
        ellipse_11Seat.direction = "southwest";

        // ellipse_12 (components)
        const ellipse_12Seat = new Seat(ellipse_12);
        ellipse_12Seat.direction = "northeast";

        this.floor = floor;
        this.chalk = chalk;
        this.banner = banner;
        this.banner2 = banner2;
        this.overhang = overhang;
        this.rosette = rosette;
        this.photo = photo;
        this.lockers = lockers;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.switchDays(this.shell.getPSTDay() + 1)
    }

    switchDays(day) {
        this.chalk.setFrame(`chalk000${day}`)
        this.overhang.setFrame(`overhang_000${day}`)
    }

    switchTeams(team) {
        this.photo.setFrame(`photo_000${team}`)
        this.rosette.setFrame(`rosette_000${team}`)
        this.banner.setFrame(`banner000${team}`)
        this.banner2.setFrame(`banner2000${team}`)
        this.floor.setFrame(`floor000${team}`)
    }

    playLockerOpen(index) {
        if (this.lockers[index].frame.name != 'locker_0001' && this.lockers[index].frame.name != 'locker_0021') return
        this.lockers[index].isOpen = true
        this.lockers[index].play('school-locker-open', true)
		this.shell.musicController.addSfx('school-lockeropen')
    }

    playLockerClose(index) {
        if (this.lockers[index].frame.name != 'locker_0011') return
        this.lockers[index].isOpen = false
        this.lockers[index].play('school-locker-close', true)
		this.shell.musicController.addSfx('school-lockerclose')
    }

    update(time, delta) {
        this.triggers.forEach((trigger) => {
            if (trigger.label.includes('locker')) {
                const index = parseInt(trigger.label.substring(6)) - 1
                if (this.matter.containsPoint(trigger, this.client.penguin.x, this.client.penguin.y)) {
                    this.playLockerOpen(index)
                } else if (this.lockers[index].isOpen) {
                    this.playLockerClose(index)
                }
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
