import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            // plaza: () => this.triggerRoom(300, 384, 619),
            // hotel: () => null,
            // park: () => null,
            // adopt: () => null,
            // scape: () => null,
            // launch: () => null,
        }
        this.music = '675'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pet-pack", "client/media/rooms/pet/pet-pack.json");
    }

    /** @returns {void} */
    _create() {

        // minebg
        this.add.image(760, 480, "mine", "minebg");

        // backstairsbox_hover
        const backstairsbox_hover = this.add.image(825, 39, "mine", "backstairsbox-hover");
        backstairsbox_hover.visible = false;

        // backstairholder
        this.add.image(782, 191, "mine", "backstairholder");

        // backstairsbox
        const backstairsbox = this.add.image(825, 39, "mine", "backstairsbox");
        backstairsbox.alphaTopLeft = 0;
        backstairsbox.alphaTopRight = 0;
        backstairsbox.alphaBottomLeft = 0;
        backstairsbox.alphaBottomRight = 0;

        // cavehit
        const cavehit = this.add.image(-7, 369, "mine", "cavehit");
        cavehit.alphaTopLeft = 0;
        cavehit.alphaTopRight = 0;
        cavehit.alphaBottomLeft = 0;
        cavehit.alphaBottomRight = 0;

        // cavehit_hover
        const cavehit_hover = this.add.image(4, 340, "mine", "cavehit-hover");
        cavehit_hover.visible = false;

        // pufflerescueholder
        this.add.image(490, 90, "mine", "pufflerescueholder");

        // leftfg
        this.add.image(304, 327, "mine", "leftfg");

        // puffleboard
        this.add.image(444, 233, "mine", "puffleboard");

        // pufflerescue_en
        const pufflerescue_en = this.add.image(448, 90, "mine", "pufflerescue_en");

        // lists
        const sort = [];

        // pufflerescue_en (components)
        new LocalisedSprite(pufflerescue_en);

        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {

        this.editorCreate();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
