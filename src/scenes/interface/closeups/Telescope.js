import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Telescope extends BaseScene {

    constructor() {
        super("Telescope");

        /** @type {Phaser.GameObjects.Sprite} */
        this.waves1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_6;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_7;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_8;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_9;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_10;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_11;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_12;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_13;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_14;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_15;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_16;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_17;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_18;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_19;
        /** @type {Phaser.GameObjects.Container} */
        this.empty;
        /** @type {Phaser.GameObjects.Sprite} */
        this.light;
        /** @type {Phaser.GameObjects.Container} */
        this.comingfar;
        /** @type {Phaser.GameObjects.Sprite} */
        this.migrator_comingfar;
        /** @type {Phaser.GameObjects.Container} */
        this.comingclose;
        /** @type {Phaser.GameObjects.Sprite} */
        this.migrator_comingclose;
        /** @type {Phaser.GameObjects.Container} */
        this.leavingclose;
        /** @type {Phaser.GameObjects.Sprite} */
        this.migrator_leavingclose;
        /** @type {Phaser.GameObjects.Container} */
        this.leavingfar;
        /** @type {Phaser.GameObjects.Sprite} */
        this.migrator_leavingfar;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.start;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.middle;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.last;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("telescope-pack", "client/media/interface/game/telescope/telescope-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.3;

        // bg
        this.add.image(760, 457, "telescope", "bg");

        // fg
        this.add.image(760, 480, "telescope", "fg");

        // waves
        const waves = this.add.container(0, -23);

        // waves1
        const waves1 = this.add.sprite(546, 396, "telescope", "waves0001");
        waves.add(waves1);

        // waves_1
        const waves_1 = this.add.sprite(572, 391, "telescope", "waves0001");
        waves.add(waves_1);

        // waves_2
        const waves_2 = this.add.sprite(584, 384, "telescope", "waves0001");
        waves.add(waves_2);

        // waves_3
        const waves_3 = this.add.sprite(604, 393, "telescope", "waves0001");
        waves.add(waves_3);

        // waves_4
        const waves_4 = this.add.sprite(645, 393, "telescope", "waves0001");
        waves.add(waves_4);

        // waves_5
        const waves_5 = this.add.sprite(681, 382, "telescope", "waves0001");
        waves.add(waves_5);

        // waves_6
        const waves_6 = this.add.sprite(696, 393, "telescope", "waves0001");
        waves.add(waves_6);

        // waves_7
        const waves_7 = this.add.sprite(741, 392, "telescope", "waves0001");
        waves.add(waves_7);

        // waves_8
        const waves_8 = this.add.sprite(740, 379, "telescope", "waves0001");
        waves.add(waves_8);

        // waves_9
        const waves_9 = this.add.sprite(784, 395, "telescope", "waves0001");
        waves.add(waves_9);

        // waves_10
        const waves_10 = this.add.sprite(856, 408, "telescope", "waves0001");
        waves.add(waves_10);

        // waves_11
        const waves_11 = this.add.sprite(867, 381, "telescope", "waves0001");
        waves.add(waves_11);

        // waves_12
        const waves_12 = this.add.sprite(839, 374, "telescope", "waves0001");
        waves.add(waves_12);

        // waves_13
        const waves_13 = this.add.sprite(923, 396, "telescope", "waves0001");
        waves.add(waves_13);

        // waves_14
        const waves_14 = this.add.sprite(943, 389, "telescope", "waves0001");
        waves.add(waves_14);

        // waves_15
        const waves_15 = this.add.sprite(977, 397, "telescope", "waves0001");
        waves.add(waves_15);

        // waves_16
        const waves_16 = this.add.sprite(832, 404, "telescope", "waves0001");
        waves.add(waves_16);

        // waves_17
        const waves_17 = this.add.sprite(775, 382, "telescope", "waves0001");
        waves.add(waves_17);

        // waves_18
        const waves_18 = this.add.sprite(744, 397, "telescope", "waves0001");
        waves.add(waves_18);

        // waves_19
        const waves_19 = this.add.sprite(714, 398, "telescope", "waves0001");
        waves.add(waves_19);

        // blue_button
        const blue_button = this.add.image(1376, 95, "main", "blue-button");

        // blue_x
        this.add.image(1376, 94, "main", "blue-x");

        // empty
        const empty = this.add.container(0, -23);

        // light
        const light = this.add.sprite(899, 357, "telescope", "light0001");
        empty.add(light);

        // comingfar
        const comingfar = this.add.container(0, -23);
        comingfar.visible = false;

        // migrator_comingfar
        const migrator_comingfar = this.add.sprite(760, 344, "telescope", "migrator_comingfar0001");
        comingfar.add(migrator_comingfar);

        // comingclose
        const comingclose = this.add.container(0, 0);
        comingclose.visible = false;

        // migrator_comingclose
        const migrator_comingclose = this.add.sprite(760, 242, "telescope", "migrator_comingclose0001");
        comingclose.add(migrator_comingclose);

        // leavingclose
        const leavingclose = this.add.container(0, 0);
        leavingclose.visible = false;

        // migrator_leavingclose
        const migrator_leavingclose = this.add.sprite(760, 248, "telescope", "migrator_leavingclose0001");
        leavingclose.add(migrator_leavingclose);

        // leavingfar
        const leavingfar = this.add.container(0, -23);
        leavingfar.visible = false;

        // migrator_leavingfar
        const migrator_leavingfar = this.add.sprite(760, 344, "telescope", "migrator_leavingfar0001");
        leavingfar.add(migrator_leavingfar);

        // lists
        const start = [waves1, waves_1, waves_2, waves_3, waves_4, waves_5, waves_6, waves_15, waves_14, waves_13];
        const middle = [waves_7, waves_8, waves_9, waves_10, waves_11, waves_12];
        const last = [waves_19, waves_18, waves_17, waves_16];

        // block (components)
        new Interactive(block);

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => this.scene.stop();

        this.waves1 = waves1;
        this.waves_1 = waves_1;
        this.waves_2 = waves_2;
        this.waves_3 = waves_3;
        this.waves_4 = waves_4;
        this.waves_5 = waves_5;
        this.waves_6 = waves_6;
        this.waves_7 = waves_7;
        this.waves_8 = waves_8;
        this.waves_9 = waves_9;
        this.waves_10 = waves_10;
        this.waves_11 = waves_11;
        this.waves_12 = waves_12;
        this.waves_13 = waves_13;
        this.waves_14 = waves_14;
        this.waves_15 = waves_15;
        this.waves_16 = waves_16;
        this.waves_17 = waves_17;
        this.waves_18 = waves_18;
        this.waves_19 = waves_19;
        this.empty = empty;
        this.light = light;
        this.comingfar = comingfar;
        this.migrator_comingfar = migrator_comingfar;
        this.comingclose = comingclose;
        this.migrator_comingclose = migrator_comingclose;
        this.leavingclose = leavingclose;
        this.migrator_leavingclose = migrator_leavingclose;
        this.leavingfar = leavingfar;
        this.migrator_leavingfar = migrator_leavingfar;
        this.start = start;
        this.middle = middle;
        this.last = last;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        for (let i of this.start) {
            i.play("telescope-waves")
        }
        for (let i of this.middle) {
            i.playAfterDelay("telescope-waves", Math.random() * 1000)
        }
        for (let i of this.last) {
            i.playAfterDelay("telescope-waves", Math.random() * 2000)
        }
        if (this.getTelescopeState() == "empty") {
            this.light.play("telescope-light")
        } else if (this.getTelescopeState() == "comingfar") {
            this.comingfar.visible = true
            this.empty.visible = false
            this.migrator_comingfar.play("telescope-migrator_comingfar")
        } else if (this.getTelescopeState() == "comingclose") {
            this.comingclose.visible = true
            this.comingfar.visible = false
            this.empty.visible = false
            this.migrator_comingclose.play("telescope-migrator_comingclose")
        } else if (this.getTelescopeState() == "leavingclose") {
            this.leavingclose.visible = true
            this.comingclose.visible = false
            this.comingfar.visible = false
            this.empty.visible = false
            this.migrator_leavingclose.play("telescope-migrator_leavingclose")
        } else if (this.getTelescopeState() == "leavingfar") {
            this.leavingfar.visible = true
            this.leavingclose.visible = false
            this.comingclose.visible = false
            this.comingfar.visible = false
            this.empty.visible = false
            this.migrator_leavingfar.play("telescope-migrator_leavingfar")
        } else {
            this.light.play("telescope-light")
        }
    }

    getTelescopeState() {
        let now = new Date()
        let arrival_difference = ((this.shell.rockhopper_visit.getTime() - now.getTime()) / 86400000)
        let departure_difference = ((now.getTime() - this.shell.rockhopper_leave.getTime()) / 86400000)
        if (arrival_difference > 7) {
            this.state = "empty"
        } else if (arrival_difference > 3 && arrival_difference <= 7) {
            this.state = "comingfar"
        } else if (arrival_difference > 1 && arrival_difference <= 3) {
            this.state = "comingclose"
        } else if (departure_difference > 1 && departure_difference <= 3) {
            this.state = "leavingclose"
        } else if (departure_difference > 3 && departure_difference <= 7) {
            this.state = "leavingfar"
        } else {
            this.state = "empty"
        }
        return this.state
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here