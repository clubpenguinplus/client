import RoomScene from '../RoomScene'

import {Animation, Button, MoveTo, Zone} from '@components/components'

/* START OF COMPILED CODE */

export default class Boiler extends RoomScene {

    constructor() {
        super("Boiler");

        /** @type {Phaser.GameObjects.Sprite} */
        this.drawer;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            dance: () => this.triggerRoom(120, 935, 520),
            cave: () => this.triggerRoom(806, 285, 630),
        }
        this.music = 667

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boiler-pack", "client/media/rooms/boiler/boiler-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, -4, "boiler", "bg");
        bg.setOrigin(0, 0);

        // door
        const door = this.add.image(590, 365, "boiler", "door");

        // filingCabinet
        this.add.image(871, 465, "boiler", "cabinet");

        // smoke
        const smoke = this.add.sprite(264, 194, "boiler", "smoke0001");

        // drawer
        const drawer = this.add.sprite(830, 396, "boiler", "drawer0001");
        drawer.scaleX = 1.2;
        drawer.scaleY = 1.2;

        // drawerZone
        const drawerZone = this.add.rectangle(825, 386, 105, 80);
        drawerZone.alpha = 0.5;
        drawerZone.isFilled = true;
        drawerZone.fillColor = 65280;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('boiler-dooropen');
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('boiler-doorclosed');
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 600;
        doorMoveTo.y = 525;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // drawerZone (components)
        const drawerZoneZone = new Zone(drawerZone);
        drawerZoneZone.hoverCallback = () => this.onDrawerOver();
        drawerZoneZone.hoverOutCallback = () => this.onDrawerOut();

        this.drawer = drawer;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onDrawerOver() {
        this.drawer.play('boiler-drawer_open')
		this.shell.musicController.addSfx('boiler-newsopen')
    }

    onDrawerOut() {
        this.drawer.play('boiler-drawer_close')
		this.shell.musicController.addSfx('boiler-newsclose')
    }

    onNewspaperClick() {
        this.interface.main.toggleNewspaper()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
