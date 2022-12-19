import {Button, Interactive, SimpleButton} from '@components/components'
import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class Fishing extends Book {

    constructor() {
        super("Fishing");

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("uplodge-pack", "client/media/interface/catalogs/upgrades/lodge/uplodge-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.1;

        // page1
        const page1 = this.add.container(0, 0);

        // bg
        const bg = this.add.image(760, 480, "uplodge", "bg");
        page1.add(bg);

        // exit
        const exit = this.add.image(1041, 94, "uplodge", "exit");
        page1.add(exit);

        // tag
        const tag = this.add.image(830, 407, "uplodge", "tag");
        tag.scaleX = 0.3;
        tag.scaleY = 0.3;
        tag.angle = -27;
        tag.flipX = true;
        page1.add(tag);

        // hook
        const hook = this.add.image(870, 379, "uplodge", "hook");
        hook.scaleX = 0.3;
        hook.scaleY = 0.3;
        hook.angle = -23;
        hook.flipX = true;
        page1.add(hook);

        // twohundred
        const twohundred = this.add.image(828, 417, "uplodge", "200");
        page1.add(twohundred);

        // coin
        const coin = this.add.image(848, 398, "uplodge", "coin");
        coin.scaleX = 0.5;
        coin.scaleY = 0.5;
        coin.angle = -24;
        coin.flipX = true;
        page1.add(coin);

        // text
        const text = this.add.text(637, 900, "", {});
        text.text = "Your Coins: 1000000";
        text.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "32px" });

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // exit (components)
        const exitButton = new Button(exit);
        exitButton.spriteName = "exit";
        exitButton.callback = () => this.scene.stop();

        // tag (components)
        const tagButton = new Button(tag);
        tagButton.spriteName = "tag";
        tagButton.callback = () => this.interface.prompt.showItem(321);

        this.text = text;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.setCoins(this.shell.client.coins)
    }

    setCoins(coins) {
        this.text.text = `YOUR COINS: ${coins}`
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
