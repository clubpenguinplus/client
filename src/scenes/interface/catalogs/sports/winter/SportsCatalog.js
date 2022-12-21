import {Button, Interactive, SimpleButton, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class SportsCatalog extends Book {

    constructor() {
        super("WinterSports");

        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5472;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5472;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5473;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5473;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1906;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1906;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1907;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1907;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5471;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5471;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5474;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5474;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_24191;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_24191;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_24204;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_24204;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1509;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1509;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5189;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5580;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4758;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4758;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6143;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6143;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1508;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1508;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5188;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5188;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6142;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6142;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4757;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4757;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1510;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1510;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4759;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4759;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1511;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1511;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4760;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4760;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4474;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4474;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4476;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4476;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4480;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4480;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4478;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4478;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_277;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_277;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_278;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_278;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4143;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4143;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4204;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4204;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4144;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4144;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4475;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4475;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4477;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_315;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4297;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4297;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4481;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4481;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4479;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4479;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4054;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4054;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4053;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4053;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4299;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4299;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_461;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_461;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1215;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1215;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_560;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_560;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3002;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3002;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6013;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6013;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_1036;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1036;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1036;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_1036;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_goaliehelmet;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_5018;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5018;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5018;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_5018;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_goaliestick;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1337;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1337;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4483;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4483;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_4484;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4484;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4484;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_4484;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_snowsky;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6011;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6011;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4482;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4482;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1336;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1336;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_1338;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1338;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1338;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_1338;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_frees;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("wintersports-pack", "client/media/interface/catalogs/sports/wintersports-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // page1body
        const page1body = this.add.image(760, 480, "winter-sports", "page1body");
        page1.add(page1body);

        // nextpage
        const nextpage = this.add.image(1060, 737, "winter-sports", "nextpage");
        page1.add(nextpage);

        // exit_1
        const exit_1 = this.add.image(1124, 50, "winter-sports", "exit");
        page1.add(exit_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page2body
        const page2body = this.add.image(760, 480, "winter-sports", "page2body");
        page2.add(page2body);

        // buyBtn_5472
        const buyBtn_5472 = this.add.sprite(976, 719, "winter-sports", "tag");
        page2.add(buyBtn_5472);

        // priceNum_5472
        const priceNum_5472 = this.add.text(981, 719, "", {});
        priceNum_5472.setOrigin(0.5, 0.5);
        priceNum_5472.text = "145";
        priceNum_5472.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page2.add(priceNum_5472);

        // buyBtn_5473
        const buyBtn_5473 = this.add.sprite(979, 390, "winter-sports", "tag");
        page2.add(buyBtn_5473);

        // priceNum_5473
        const priceNum_5473 = this.add.text(984, 390, "", {});
        priceNum_5473.setOrigin(0.5, 0.5);
        priceNum_5473.text = "250";
        priceNum_5473.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page2.add(priceNum_5473);

        // buyBtn_1906
        const buyBtn_1906 = this.add.sprite(515, 712, "winter-sports", "tag");
        page2.add(buyBtn_1906);

        // priceNum_1906
        const priceNum_1906 = this.add.text(520, 712, "", {});
        priceNum_1906.setOrigin(0.5, 0.5);
        priceNum_1906.text = "250";
        priceNum_1906.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page2.add(priceNum_1906);

        // buyBtn_1907
        const buyBtn_1907 = this.add.sprite(246, 711, "winter-sports", "tag");
        page2.add(buyBtn_1907);

        // priceNum_1907
        const priceNum_1907 = this.add.text(251, 711, "", {});
        priceNum_1907.setOrigin(0.5, 0.5);
        priceNum_1907.text = "145";
        priceNum_1907.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page2.add(priceNum_1907);

        // buyBtn_5471
        const buyBtn_5471 = this.add.sprite(1245, 718, "winter-sports", "tag");
        page2.add(buyBtn_5471);

        // priceNum_5471
        const priceNum_5471 = this.add.text(1250, 718, "", {});
        priceNum_5471.setOrigin(0.5, 0.5);
        priceNum_5471.text = "145";
        priceNum_5471.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page2.add(priceNum_5471);

        // buyBtn_5474
        const buyBtn_5474 = this.add.sprite(1240, 389, "winter-sports", "tag");
        page2.add(buyBtn_5474);

        // priceNum_5474
        const priceNum_5474 = this.add.text(1245, 389, "", {});
        priceNum_5474.setOrigin(0.5, 0.5);
        priceNum_5474.text = "250";
        priceNum_5474.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page2.add(priceNum_5474);

        // nextpage2
        const nextpage2 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page2.add(nextpage2);

        // backpage2
        const backpage2 = this.add.image(138, 737, "winter-sports", "backpage");
        page2.add(backpage2);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // page3body
        const page3body = this.add.image(760, 480, "winter-sports", "page3body");
        page3.add(page3body);

        // buyBtn_24191
        const buyBtn_24191 = this.add.sprite(336, 435, "winter-sports", "tag");
        page3.add(buyBtn_24191);

        // priceNum_24191
        const priceNum_24191 = this.add.text(341, 435, "", {});
        priceNum_24191.setOrigin(0.5, 0.5);
        priceNum_24191.text = "250";
        priceNum_24191.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page3.add(priceNum_24191);

        // buyBtn_24204
        const buyBtn_24204 = this.add.sprite(333, 715, "winter-sports", "tag");
        page3.add(buyBtn_24204);

        // priceNum_24204
        const priceNum_24204 = this.add.text(338, 715, "", {});
        priceNum_24204.setOrigin(0.5, 0.5);
        priceNum_24204.text = "145";
        priceNum_24204.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page3.add(priceNum_24204);

        // nextpage3
        const nextpage3 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page3.add(nextpage3);

        // backpage3
        const backpage3 = this.add.image(138, 737, "winter-sports", "backpage");
        page3.add(backpage3);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page4body
        const page4body = this.add.image(760, 480, "winter-sports", "page4body");
        page4.add(page4body);

        // buyBtn_1509
        const buyBtn_1509 = this.add.sprite(920, 362, "winter-sports", "tag");
        page4.add(buyBtn_1509);

        // priceNum_1509
        const priceNum_1509 = this.add.text(925, 362, "", {});
        priceNum_1509.setOrigin(0.5, 0.5);
        priceNum_1509.text = "250";
        priceNum_1509.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page4.add(priceNum_1509);

        // buyBtn_5189
        const buyBtn_5189 = this.add.sprite(921, 617, "winter-sports", "tag");
        page4.add(buyBtn_5189);

        // priceNum_5580
        const priceNum_5580 = this.add.text(926, 617, "", {});
        priceNum_5580.setOrigin(0.5, 0.5);
        priceNum_5580.text = "145";
        priceNum_5580.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page4.add(priceNum_5580);

        // buyBtn_4758
        const buyBtn_4758 = this.add.sprite(1201, 421, "winter-sports", "tag");
        page4.add(buyBtn_4758);

        // priceNum_4758
        const priceNum_4758 = this.add.text(1206, 421, "", {});
        priceNum_4758.setOrigin(0.5, 0.5);
        priceNum_4758.text = "250";
        priceNum_4758.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page4.add(priceNum_4758);

        // buyBtn_6143
        const buyBtn_6143 = this.add.sprite(1211, 667, "winter-sports", "tag");
        page4.add(buyBtn_6143);

        // priceNum_6143
        const priceNum_6143 = this.add.text(1216, 667, "", {});
        priceNum_6143.setOrigin(0.5, 0.5);
        priceNum_6143.text = "145";
        priceNum_6143.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page4.add(priceNum_6143);

        // nextpage4
        const nextpage4 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page4.add(nextpage4);

        // backpage4
        const backpage4 = this.add.image(138, 737, "winter-sports", "backpage");
        page4.add(backpage4);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page5body
        const page5body = this.add.image(760, 480, "winter-sports", "page5body");
        page5.add(page5body);

        // buyBtn_1508
        const buyBtn_1508 = this.add.sprite(250, 402, "winter-sports", "tag");
        page5.add(buyBtn_1508);

        // priceNum_1508
        const priceNum_1508 = this.add.text(255, 402, "", {});
        priceNum_1508.setOrigin(0.5, 0.5);
        priceNum_1508.text = "450";
        priceNum_1508.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_1508);

        // buyBtn_5188
        const buyBtn_5188 = this.add.sprite(255, 656, "winter-sports", "tag");
        page5.add(buyBtn_5188);

        // priceNum_5188
        const priceNum_5188 = this.add.text(260, 656, "", {});
        priceNum_5188.setOrigin(0.5, 0.5);
        priceNum_5188.text = "350";
        priceNum_5188.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_5188);

        // buyBtn_6142
        const buyBtn_6142 = this.add.sprite(547, 657, "winter-sports", "tag");
        page5.add(buyBtn_6142);

        // priceNum_6142
        const priceNum_6142 = this.add.text(552, 657, "", {});
        priceNum_6142.setOrigin(0.5, 0.5);
        priceNum_6142.text = "350";
        priceNum_6142.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_6142);

        // buyBtn_4757
        const buyBtn_4757 = this.add.sprite(559, 421, "winter-sports", "tag");
        page5.add(buyBtn_4757);

        // priceNum_4757
        const priceNum_4757 = this.add.text(564, 421, "", {});
        priceNum_4757.setOrigin(0.5, 0.5);
        priceNum_4757.text = "350";
        priceNum_4757.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_4757);

        // nextpage5
        const nextpage5 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page5.add(nextpage5);

        // backpage5
        const backpage5 = this.add.image(138, 737, "winter-sports", "backpage");
        page5.add(backpage5);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // page6body
        const page6body = this.add.image(760, 480, "winter-sports", "page6body");
        page6.add(page6body);

        // buyBtn_1510
        const buyBtn_1510 = this.add.sprite(1111, 331, "winter-sports", "tag");
        page6.add(buyBtn_1510);

        // priceNum_1510
        const priceNum_1510 = this.add.text(1116, 331, "", {});
        priceNum_1510.setOrigin(0.5, 0.5);
        priceNum_1510.text = "450";
        priceNum_1510.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page6.add(priceNum_1510);

        // buyBtn_4759
        const buyBtn_4759 = this.add.sprite(1119, 649, "winter-sports", "tag");
        page6.add(buyBtn_4759);

        // priceNum_4759
        const priceNum_4759 = this.add.text(1124, 649, "", {});
        priceNum_4759.setOrigin(0.5, 0.5);
        priceNum_4759.text = "350";
        priceNum_4759.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page6.add(priceNum_4759);

        // nextpage6
        const nextpage6 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page6.add(nextpage6);

        // backpage6
        const backpage6 = this.add.image(138, 737, "winter-sports", "backpage");
        page6.add(backpage6);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page7body
        const page7body = this.add.image(760, 480, "winter-sports", "page7body");
        page7.add(page7body);

        // buyBtn_1511
        const buyBtn_1511 = this.add.sprite(368, 331, "winter-sports", "tag");
        page7.add(buyBtn_1511);

        // priceNum_1511
        const priceNum_1511 = this.add.text(373, 331, "", {});
        priceNum_1511.setOrigin(0.5, 0.5);
        priceNum_1511.text = "450";
        priceNum_1511.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_1511);

        // buyBtn_4760
        const buyBtn_4760 = this.add.sprite(369, 646, "winter-sports", "tag");
        page7.add(buyBtn_4760);

        // priceNum_4760
        const priceNum_4760 = this.add.text(374, 646, "", {});
        priceNum_4760.setOrigin(0.5, 0.5);
        priceNum_4760.text = "350";
        priceNum_4760.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_4760);

        // nextpage7
        const nextpage7 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page7.add(nextpage7);

        // backpage7
        const backpage7 = this.add.image(138, 737, "winter-sports", "backpage");
        page7.add(backpage7);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // page8body
        const page8body = this.add.image(760, 480, "winter-sports", "page8body");
        page8.add(page8body);

        // buyBtn_4474
        const buyBtn_4474 = this.add.sprite(1217, 364, "winter-sports", "tag");
        page8.add(buyBtn_4474);

        // priceNum_4474
        const priceNum_4474 = this.add.text(1222, 364, "", {});
        priceNum_4474.setOrigin(0.5, 0.5);
        priceNum_4474.text = "450";
        priceNum_4474.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_4474);

        // buyBtn_4476
        const buyBtn_4476 = this.add.sprite(960, 364, "winter-sports", "tag");
        page8.add(buyBtn_4476);

        // priceNum_4476
        const priceNum_4476 = this.add.text(965, 364, "", {});
        priceNum_4476.setOrigin(0.5, 0.5);
        priceNum_4476.text = "350";
        priceNum_4476.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_4476);

        // buyBtn_4480
        const buyBtn_4480 = this.add.sprite(959, 613, "winter-sports", "tag");
        page8.add(buyBtn_4480);

        // priceNum_4480
        const priceNum_4480 = this.add.text(964, 613, "", {});
        priceNum_4480.setOrigin(0.5, 0.5);
        priceNum_4480.text = "350";
        priceNum_4480.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_4480);

        // buyBtn_4478
        const buyBtn_4478 = this.add.sprite(1219, 613, "winter-sports", "tag");
        page8.add(buyBtn_4478);

        // priceNum_4478
        const priceNum_4478 = this.add.text(1224, 613, "", {});
        priceNum_4478.setOrigin(0.5, 0.5);
        priceNum_4478.text = "450";
        priceNum_4478.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_4478);

        // buyBtn_277
        const buyBtn_277 = this.add.sprite(267, 350, "winter-sports", "tag");
        page8.add(buyBtn_277);

        // priceNum_277
        const priceNum_277 = this.add.text(272, 350, "", {});
        priceNum_277.setOrigin(0.5, 0.5);
        priceNum_277.text = "450";
        priceNum_277.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_277);

        // buyBtn_278
        const buyBtn_278 = this.add.sprite(564, 350, "winter-sports", "tag");
        page8.add(buyBtn_278);

        // priceNum_278
        const priceNum_278 = this.add.text(569, 350, "", {});
        priceNum_278.setOrigin(0.5, 0.5);
        priceNum_278.text = "450";
        priceNum_278.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_278);

        // buyBtn_4143
        const buyBtn_4143 = this.add.sprite(567, 611, "winter-sports", "tag");
        page8.add(buyBtn_4143);

        // priceNum_4143
        const priceNum_4143 = this.add.text(572, 611, "", {});
        priceNum_4143.setOrigin(0.5, 0.5);
        priceNum_4143.text = "350";
        priceNum_4143.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_4143);

        // buyBtn_4204
        const buyBtn_4204 = this.add.sprite(273, 614, "winter-sports", "tag");
        page8.add(buyBtn_4204);

        // priceNum_4204
        const priceNum_4204 = this.add.text(278, 614, "", {});
        priceNum_4204.setOrigin(0.5, 0.5);
        priceNum_4204.text = "350";
        priceNum_4204.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_4204);

        // nextpage8
        const nextpage8 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page8.add(nextpage8);

        // backpage8
        const backpage8 = this.add.image(138, 737, "winter-sports", "backpage");
        page8.add(backpage8);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // page9body
        const page9body = this.add.image(760, 480, "winter-sports", "page9body");
        page9.add(page9body);

        // buyBtn_4144
        const buyBtn_4144 = this.add.sprite(277, 398, "winter-sports", "tag");
        page9.add(buyBtn_4144);

        // priceNum_4144
        const priceNum_4144 = this.add.text(282, 398, "", {});
        priceNum_4144.setOrigin(0.5, 0.5);
        priceNum_4144.text = "450";
        priceNum_4144.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4144);

        // buyBtn_4475
        const buyBtn_4475 = this.add.sprite(973, 405, "winter-sports", "tag");
        page9.add(buyBtn_4475);

        // priceNum_4475
        const priceNum_4475 = this.add.text(978, 405, "", {});
        priceNum_4475.setOrigin(0.5, 0.5);
        priceNum_4475.text = "350";
        priceNum_4475.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4475);

        // buyBtn_4477
        const buyBtn_4477 = this.add.sprite(1222, 405, "winter-sports", "tag");
        page9.add(buyBtn_4477);

        // priceNum_315
        const priceNum_315 = this.add.text(1227, 405, "", {});
        priceNum_315.setOrigin(0.5, 0.5);
        priceNum_315.text = "350";
        priceNum_315.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_315);

        // buyBtn_4297
        const buyBtn_4297 = this.add.sprite(563, 398, "winter-sports", "tag");
        page9.add(buyBtn_4297);

        // priceNum_4297
        const priceNum_4297 = this.add.text(568, 398, "", {});
        priceNum_4297.setOrigin(0.5, 0.5);
        priceNum_4297.text = "450";
        priceNum_4297.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4297);

        // buyBtn_4481
        const buyBtn_4481 = this.add.sprite(970, 725, "winter-sports", "tag");
        page9.add(buyBtn_4481);

        // priceNum_4481
        const priceNum_4481 = this.add.text(975, 725, "", {});
        priceNum_4481.setOrigin(0.5, 0.5);
        priceNum_4481.text = "450";
        priceNum_4481.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4481);

        // buyBtn_4479
        const buyBtn_4479 = this.add.sprite(1223, 725, "winter-sports", "tag");
        page9.add(buyBtn_4479);

        // priceNum_4479
        const priceNum_4479 = this.add.text(1228, 725, "", {});
        priceNum_4479.setOrigin(0.5, 0.5);
        priceNum_4479.text = "450";
        priceNum_4479.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4479);

        // buyBtn_4054
        const buyBtn_4054 = this.add.sprite(564, 681, "winter-sports", "tag");
        page9.add(buyBtn_4054);

        // priceNum_4054
        const priceNum_4054 = this.add.text(569, 681, "", {});
        priceNum_4054.setOrigin(0.5, 0.5);
        priceNum_4054.text = "450";
        priceNum_4054.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4054);

        // buyBtn_4053
        const buyBtn_4053 = this.add.sprite(278, 681, "winter-sports", "tag");
        page9.add(buyBtn_4053);

        // priceNum_4053
        const priceNum_4053 = this.add.text(283, 681, "", {});
        priceNum_4053.setOrigin(0.5, 0.5);
        priceNum_4053.text = "450";
        priceNum_4053.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_4053);

        // nextpage9
        const nextpage9 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page9.add(nextpage9);

        // backpage9
        const backpage9 = this.add.image(138, 737, "winter-sports", "backpage");
        page9.add(backpage9);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // page10body
        const page10body = this.add.image(760, 480, "winter-sports", "page10body");
        page10.add(page10body);

        // buyBtn_4299
        const buyBtn_4299 = this.add.sprite(286, 547, "winter-sports", "tag");
        page10.add(buyBtn_4299);

        // priceNum_4299
        const priceNum_4299 = this.add.text(291, 547, "", {});
        priceNum_4299.setOrigin(0.5, 0.5);
        priceNum_4299.text = "350";
        priceNum_4299.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_4299);

        // buyBtn_461
        const buyBtn_461 = this.add.sprite(574, 376, "winter-sports", "tag");
        page10.add(buyBtn_461);

        // priceNum_461
        const priceNum_461 = this.add.text(579, 376, "", {});
        priceNum_461.setOrigin(0.5, 0.5);
        priceNum_461.text = "350";
        priceNum_461.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_461);

        // buyBtn_1215
        const buyBtn_1215 = this.add.sprite(975, 335, "winter-sports", "tag");
        page10.add(buyBtn_1215);

        // priceNum_1215
        const priceNum_1215 = this.add.text(980, 335, "", {});
        priceNum_1215.setOrigin(0.5, 0.5);
        priceNum_1215.text = "450";
        priceNum_1215.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_1215);

        // buyBtn_560
        const buyBtn_560 = this.add.sprite(1267, 552, "winter-sports", "tag");
        page10.add(buyBtn_560);

        // priceNum_560
        const priceNum_560 = this.add.text(1272, 552, "", {});
        priceNum_560.setOrigin(0.5, 0.5);
        priceNum_560.text = "450";
        priceNum_560.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_560);

        // buyBtn_3002
        const buyBtn_3002 = this.add.sprite(572, 649, "winter-sports", "tag");
        page10.add(buyBtn_3002);

        // priceNum_3002
        const priceNum_3002 = this.add.text(577, 649, "", {});
        priceNum_3002.setOrigin(0.5, 0.5);
        priceNum_3002.text = "450";
        priceNum_3002.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_3002);

        // buyBtn_6013
        const buyBtn_6013 = this.add.sprite(985, 628, "winter-sports", "tag");
        page10.add(buyBtn_6013);

        // priceNum_6013
        const priceNum_6013 = this.add.text(990, 628, "", {});
        priceNum_6013.setOrigin(0.5, 0.5);
        priceNum_6013.text = "450";
        priceNum_6013.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_6013);

        // sec_1036
        const sec_1036 = this.add.container(0, 0);
        sec_1036.visible = false;
        page10.add(sec_1036);

        // block_goalhel
        const block_goalhel = this.add.rectangle(760, 480, 1520, 960);
        block_goalhel.isFilled = true;
        block_goalhel.fillColor = 0;
        block_goalhel.fillAlpha = 0.2;
        sec_1036.add(block_goalhel);

        // secretholder_goalhel
        const secretholder_goalhel = this.add.image(769, 431, "winter-sports", "secretholder");
        secretholder_goalhel.scaleX = 0.8503262048913669;
        secretholder_goalhel.scaleY = 0.8503262048913669;
        sec_1036.add(secretholder_goalhel);

        // secretwrap_goalhel
        const secretwrap_goalhel = this.add.image(768, 436, "winter-sports", "secretwrap");
        sec_1036.add(secretwrap_goalhel);

        // secrettext_goalhel
        const secrettext_goalhel = this.add.image(654, 232, "winter-sports", "secrettext");
        secrettext_goalhel.scaleX = 0.42972712117801115;
        secrettext_goalhel.scaleY = 0.42972712117801115;
        sec_1036.add(secrettext_goalhel);

        // exit_goalhel
        const exit_goalhel = this.add.image(1024, 192, "winter-sports", "exit");
        sec_1036.add(exit_goalhel);

        // sec_goalhel
        const sec_goalhel = this.add.image(768, 404, "winter-sports", "sec_goalhel.webp");
        sec_goalhel.scaleX = 0.45;
        sec_goalhel.scaleY = 0.45;
        sec_goalhel.angle = -19;
        sec_1036.add(sec_goalhel);

        // buyBtn_1036
        const buyBtn_1036 = this.add.sprite(759, 524, "winter-sports", "tag");
        sec_1036.add(buyBtn_1036);

        // priceNum_1036
        const priceNum_1036 = this.add.text(764, 524, "", {});
        priceNum_1036.setOrigin(0.5, 0.5);
        priceNum_1036.text = "350";
        priceNum_1036.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_1036.add(priceNum_1036);

        // nameTag_1036
        const nameTag_1036 = this.add.text(770, 487, "", {});
        nameTag_1036.setOrigin(0.5, 0.5);
        nameTag_1036.text = "Goalie Helmet";
        nameTag_1036.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_1036.add(nameTag_1036);

        // sec_goaliehelmet
        const sec_goaliehelmet = this.add.ellipse(580, 544, 128, 128);
        sec_goaliehelmet.scaleX = 0.6258735394714823;
        sec_goaliehelmet.scaleY = 0.6258735394714823;
        page10.add(sec_goaliehelmet);

        // sec_5018
        const sec_5018 = this.add.container(0, 0);
        sec_5018.visible = false;
        page10.add(sec_5018);

        // block_goalstick
        const block_goalstick = this.add.rectangle(760, 480, 1520, 960);
        block_goalstick.isFilled = true;
        block_goalstick.fillColor = 0;
        block_goalstick.fillAlpha = 0.2;
        sec_5018.add(block_goalstick);

        // secretholder_goalstick
        const secretholder_goalstick = this.add.image(769, 431, "winter-sports", "secretholder");
        secretholder_goalstick.scaleX = 0.8503262048913669;
        secretholder_goalstick.scaleY = 0.8503262048913669;
        sec_5018.add(secretholder_goalstick);

        // secretwrap_goalstick
        const secretwrap_goalstick = this.add.image(768, 436, "winter-sports", "secretwrap");
        sec_5018.add(secretwrap_goalstick);

        // secrettext_goalstick
        const secrettext_goalstick = this.add.image(654, 232, "winter-sports", "secrettext");
        secrettext_goalstick.scaleX = 0.42972712117801115;
        secrettext_goalstick.scaleY = 0.42972712117801115;
        sec_5018.add(secrettext_goalstick);

        // exit_goalstick
        const exit_goalstick = this.add.image(1024, 192, "winter-sports", "exit");
        sec_5018.add(exit_goalstick);

        // sec_goalstick
        const sec_goalstick = this.add.image(742, 378, "winter-sports", "sec_goal.webp");
        sec_goalstick.scaleX = 0.70931765837958;
        sec_goalstick.scaleY = 0.70931765837958;
        sec_goalstick.angle = 10;
        sec_5018.add(sec_goalstick);

        // buyBtn_5018
        const buyBtn_5018 = this.add.sprite(759, 524, "winter-sports", "tag");
        sec_5018.add(buyBtn_5018);

        // priceNum_5018
        const priceNum_5018 = this.add.text(764, 524, "", {});
        priceNum_5018.setOrigin(0.5, 0.5);
        priceNum_5018.text = "350";
        priceNum_5018.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_5018.add(priceNum_5018);

        // nameTag_5018
        const nameTag_5018 = this.add.text(770, 487, "", {});
        nameTag_5018.setOrigin(0.5, 0.5);
        nameTag_5018.text = "Goalie Hockey Stick";
        nameTag_5018.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_5018.add(nameTag_5018);

        // sec_goaliestick
        const sec_goaliestick = this.add.ellipse(1329, 464, 128, 128);
        sec_goaliestick.scaleX = 0.6258735394714823;
        sec_goaliestick.scaleY = 0.6258735394714823;
        page10.add(sec_goaliestick);

        // nextpage10
        const nextpage10 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page10.add(nextpage10);

        // backpage10
        const backpage10 = this.add.image(138, 737, "winter-sports", "backpage");
        page10.add(backpage10);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // page11body
        const page11body = this.add.image(760, 480, "winter-sports", "page11body");
        page11.add(page11body);

        // buyBtn_1337
        const buyBtn_1337 = this.add.sprite(405, 389, "winter-sports", "tag");
        page11.add(buyBtn_1337);

        // priceNum_1337
        const priceNum_1337 = this.add.text(410, 389, "", {});
        priceNum_1337.setOrigin(0.5, 0.5);
        priceNum_1337.text = "450";
        priceNum_1337.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_1337);

        // buyBtn_4483
        const buyBtn_4483 = this.add.sprite(406, 737, "winter-sports", "tag");
        page11.add(buyBtn_4483);

        // priceNum_4483
        const priceNum_4483 = this.add.text(411, 737, "", {});
        priceNum_4483.setOrigin(0.5, 0.5);
        priceNum_4483.text = "350";
        priceNum_4483.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_4483);

        // sec_4484
        const sec_4484 = this.add.container(0, 0);
        sec_4484.visible = false;
        page11.add(sec_4484);

        // block_snowysky
        const block_snowysky = this.add.rectangle(760, 480, 1520, 960);
        block_snowysky.isFilled = true;
        block_snowysky.fillColor = 0;
        block_snowysky.fillAlpha = 0.2;
        sec_4484.add(block_snowysky);

        // secretholder_snowysky
        const secretholder_snowysky = this.add.image(769, 431, "winter-sports", "secretholder");
        secretholder_snowysky.scaleX = 0.8503262048913669;
        secretholder_snowysky.scaleY = 0.8503262048913669;
        sec_4484.add(secretholder_snowysky);

        // secretwrap_snowysky
        const secretwrap_snowysky = this.add.image(768, 436, "winter-sports", "secretwrap");
        sec_4484.add(secretwrap_snowysky);

        // secrettext_snowysky
        const secrettext_snowysky = this.add.image(654, 232, "winter-sports", "secrettext");
        secrettext_snowysky.scaleX = 0.42972712117801115;
        secrettext_snowysky.scaleY = 0.42972712117801115;
        sec_4484.add(secrettext_snowysky);

        // exit_snowysky
        const exit_snowysky = this.add.image(1024, 192, "winter-sports", "exit");
        sec_4484.add(exit_snowysky);

        // sec_snowysky
        const sec_snowysky = this.add.image(760, 378, "winter-sports", "sec_snowy.webp");
        sec_snowysky.scaleX = 0.888967608646235;
        sec_snowysky.scaleY = 0.888967608646235;
        sec_4484.add(sec_snowysky);

        // buyBtn_4484
        const buyBtn_4484 = this.add.sprite(757, 544, "winter-sports", "tag");
        sec_4484.add(buyBtn_4484);

        // priceNum_4484
        const priceNum_4484 = this.add.text(762, 544, "", {});
        priceNum_4484.setOrigin(0.5, 0.5);
        priceNum_4484.text = "350";
        priceNum_4484.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_4484.add(priceNum_4484);

        // nameTag_4484
        const nameTag_4484 = this.add.text(768, 507, "", {});
        nameTag_4484.setOrigin(0.5, 0.5);
        nameTag_4484.text = "Snowy Sky Dress";
        nameTag_4484.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_4484.add(nameTag_4484);

        // sec_snowsky
        const sec_snowsky = this.add.ellipse(1175, 239, 128, 128);
        sec_snowsky.scaleX = 0.6258735394714823;
        sec_snowsky.scaleY = 0.6258735394714823;
        page11.add(sec_snowsky);

        // nextpage11
        const nextpage11 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page11.add(nextpage11);

        // backpage11
        const backpage11 = this.add.image(138, 737, "winter-sports", "backpage");
        page11.add(backpage11);

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // page12body
        const page12body = this.add.image(760, 480, "winter-sports", "page12body");
        page12.add(page12body);

        // buyBtn_6011
        const buyBtn_6011 = this.add.sprite(241, 476, "winter-sports", "tag");
        page12.add(buyBtn_6011);

        // priceNum_6011
        const priceNum_6011 = this.add.text(246, 476, "", {});
        priceNum_6011.setOrigin(0.5, 0.5);
        priceNum_6011.text = "450";
        priceNum_6011.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_6011);

        // buyBtn_4482
        const buyBtn_4482 = this.add.sprite(517, 728, "winter-sports", "tag");
        page12.add(buyBtn_4482);

        // priceNum_4482
        const priceNum_4482 = this.add.text(522, 728, "", {});
        priceNum_4482.setOrigin(0.5, 0.5);
        priceNum_4482.text = "450";
        priceNum_4482.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_4482);

        // buyBtn_1336
        const buyBtn_1336 = this.add.sprite(523, 318, "winter-sports", "tag");
        page12.add(buyBtn_1336);

        // priceNum_1336
        const priceNum_1336 = this.add.text(528, 318, "", {});
        priceNum_1336.setOrigin(0.5, 0.5);
        priceNum_1336.text = "450";
        priceNum_1336.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_1336);

        // sec_1338
        const sec_1338 = this.add.container(0, 0);
        sec_1338.visible = false;
        page12.add(sec_1338);

        // block_free
        const block_free = this.add.rectangle(760, 480, 1520, 960);
        block_free.isFilled = true;
        block_free.fillColor = 0;
        block_free.fillAlpha = 0.2;
        sec_1338.add(block_free);

        // secretholder_free
        const secretholder_free = this.add.image(769, 431, "winter-sports", "secretholder");
        secretholder_free.scaleX = 0.8503262048913669;
        secretholder_free.scaleY = 0.8503262048913669;
        sec_1338.add(secretholder_free);

        // secretwrap_free
        const secretwrap_free = this.add.image(768, 436, "winter-sports", "secretwrap");
        sec_1338.add(secretwrap_free);

        // secrettext_free
        const secrettext_free = this.add.image(654, 232, "winter-sports", "secrettext");
        secrettext_free.scaleX = 0.42972712117801115;
        secrettext_free.scaleY = 0.42972712117801115;
        sec_1338.add(secrettext_free);

        // exit_free
        const exit_free = this.add.image(1024, 192, "winter-sports", "exit");
        sec_1338.add(exit_free);

        // sec_free
        const sec_free = this.add.image(767, 406, "winter-sports", "sec_free.webp");
        sec_free.scaleX = 0.5886100600492181;
        sec_free.scaleY = 0.5886100600492181;
        sec_1338.add(sec_free);

        // buyBtn_1338
        const buyBtn_1338 = this.add.sprite(759, 537, "winter-sports", "tag");
        sec_1338.add(buyBtn_1338);

        // priceNum_1338
        const priceNum_1338 = this.add.text(765, 538, "", {});
        priceNum_1338.setOrigin(0.5, 0.5);
        priceNum_1338.text = "350";
        priceNum_1338.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_1338.add(priceNum_1338);

        // nameTag_1338
        const nameTag_1338 = this.add.text(768, 500, "", {});
        nameTag_1338.setOrigin(0.5, 0.5);
        nameTag_1338.text = "The Free Skate";
        nameTag_1338.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_1338.add(nameTag_1338);

        // sec_frees
        const sec_frees = this.add.ellipse(524, 198, 128, 128);
        sec_frees.scaleX = 0.6258735394714823;
        sec_frees.scaleY = 0.6258735394714823;
        page12.add(sec_frees);

        // nextpage12
        const nextpage12 = this.add.image(1378, 737, "winter-sports", "nextpage");
        page12.add(nextpage12);

        // backpage12
        const backpage12 = this.add.image(138, 737, "winter-sports", "backpage");
        page12.add(backpage12);

        // page13
        const page13 = this.add.container(0, 0);
        page13.visible = false;

        // page13body
        const page13body = this.add.image(760, 480, "winter-sports", "page13body");
        page13.add(page13body);

        // backpage13
        const backpage13 = this.add.image(524, 741, "winter-sports", "backpage");
        page13.add(backpage13);

        // exit_2
        const exit_2 = this.add.image(1143, 79, "winter-sports", "exit");
        page13.add(exit_2);

        // buttons
        const buttons = this.add.container(204, 59);
        buttons.visible = false;

        // coinholder
        const coinholder = this.add.image(662, 833, "winter-sports", "coinholder");
        buttons.add(coinholder);

        // coins
        const coins = this.add.text(587, 803, "", {});
        coins.angle = -7;
        coins.text = "Your Coins:\n100000";
        coins.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold italic" });
        buttons.add(coins);

        // exit
        const exit = this.add.image(1231, -8, "winter-sports", "exit");
        buttons.add(exit);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13];

        // block (components)
        new Interactive(block);

        // nextpage (components)
        const nextpageButton = new Button(nextpage);
        nextpageButton.spriteName = "nextpage";
        nextpageButton.callback = () => this.nextPage();

        // exit_1 (components)
        const exit_1SimpleButton = new SimpleButton(exit_1);
        exit_1SimpleButton.callback = () => this.scene.stop();

        // buyBtn_5472 (components)
        const buyBtn_5472Button = new Button(buyBtn_5472);
        buyBtn_5472Button.spriteName = "tag";
        buyBtn_5472Button.callback = () => this.buy(5472);

        // priceNum_5472 (components)
        const priceNum_5472Pricetag = new Pricetag(priceNum_5472);
        priceNum_5472Pricetag.id = 5472;

        // buyBtn_5473 (components)
        const buyBtn_5473Button = new Button(buyBtn_5473);
        buyBtn_5473Button.spriteName = "tag";
        buyBtn_5473Button.callback = () => this.buy(5473);

        // priceNum_5473 (components)
        const priceNum_5473Pricetag = new Pricetag(priceNum_5473);
        priceNum_5473Pricetag.id = 5473;

        // buyBtn_1906 (components)
        const buyBtn_1906Button = new Button(buyBtn_1906);
        buyBtn_1906Button.spriteName = "tag";
        buyBtn_1906Button.callback = () => this.buy(1906);

        // priceNum_1906 (components)
        const priceNum_1906Pricetag = new Pricetag(priceNum_1906);
        priceNum_1906Pricetag.id = 1906;

        // buyBtn_1907 (components)
        const buyBtn_1907Button = new Button(buyBtn_1907);
        buyBtn_1907Button.spriteName = "tag";
        buyBtn_1907Button.callback = () => this.buy(1907);

        // priceNum_1907 (components)
        const priceNum_1907Pricetag = new Pricetag(priceNum_1907);
        priceNum_1907Pricetag.id = 1907;

        // buyBtn_5471 (components)
        const buyBtn_5471Button = new Button(buyBtn_5471);
        buyBtn_5471Button.spriteName = "tag";
        buyBtn_5471Button.callback = () => this.buy(5471);

        // priceNum_5471 (components)
        const priceNum_5471Pricetag = new Pricetag(priceNum_5471);
        priceNum_5471Pricetag.id = 5471;

        // buyBtn_5474 (components)
        const buyBtn_5474Button = new Button(buyBtn_5474);
        buyBtn_5474Button.spriteName = "tag";
        buyBtn_5474Button.callback = () => this.buy(5474);

        // priceNum_5474 (components)
        const priceNum_5474Pricetag = new Pricetag(priceNum_5474);
        priceNum_5474Pricetag.id = 5474;

        // nextpage2 (components)
        const nextpage2Button = new Button(nextpage2);
        nextpage2Button.spriteName = "nextpage";
        nextpage2Button.callback = () => this.nextPage();

        // backpage2 (components)
        const backpage2Button = new Button(backpage2);
        backpage2Button.spriteName = "backpage";
        backpage2Button.callback = () => this.prevPage();

        // buyBtn_24191 (components)
        const buyBtn_24191Button = new Button(buyBtn_24191);
        buyBtn_24191Button.spriteName = "tag";
        buyBtn_24191Button.callback = () => this.buy(24191);

        // priceNum_24191 (components)
        const priceNum_24191Pricetag = new Pricetag(priceNum_24191);
        priceNum_24191Pricetag.id = 24191;

        // buyBtn_24204 (components)
        const buyBtn_24204Button = new Button(buyBtn_24204);
        buyBtn_24204Button.spriteName = "tag";
        buyBtn_24204Button.callback = () => this.buy(24204);

        // priceNum_24204 (components)
        const priceNum_24204Pricetag = new Pricetag(priceNum_24204);
        priceNum_24204Pricetag.id = 24204;

        // nextpage3 (components)
        const nextpage3Button = new Button(nextpage3);
        nextpage3Button.spriteName = "nextpage";
        nextpage3Button.callback = () => this.nextPage();

        // backpage3 (components)
        const backpage3Button = new Button(backpage3);
        backpage3Button.spriteName = "backpage";
        backpage3Button.callback = () => this.prevPage();

        // buyBtn_1509 (components)
        const buyBtn_1509Button = new Button(buyBtn_1509);
        buyBtn_1509Button.spriteName = "tag";
        buyBtn_1509Button.callback = () => this.buy(1509);

        // priceNum_1509 (components)
        const priceNum_1509Pricetag = new Pricetag(priceNum_1509);
        priceNum_1509Pricetag.id = 1509;

        // buyBtn_5189 (components)
        const buyBtn_5189Button = new Button(buyBtn_5189);
        buyBtn_5189Button.spriteName = "tag";
        buyBtn_5189Button.callback = () => this.buy(5189);

        // priceNum_5580 (components)
        const priceNum_5580Pricetag = new Pricetag(priceNum_5580);
        priceNum_5580Pricetag.id = 5580;

        // buyBtn_4758 (components)
        const buyBtn_4758Button = new Button(buyBtn_4758);
        buyBtn_4758Button.spriteName = "tag";
        buyBtn_4758Button.callback = () => this.buy(4758);

        // priceNum_4758 (components)
        const priceNum_4758Pricetag = new Pricetag(priceNum_4758);
        priceNum_4758Pricetag.id = 4758;

        // buyBtn_6143 (components)
        const buyBtn_6143Button = new Button(buyBtn_6143);
        buyBtn_6143Button.spriteName = "tag";
        buyBtn_6143Button.callback = () => this.buy(6143);

        // priceNum_6143 (components)
        const priceNum_6143Pricetag = new Pricetag(priceNum_6143);
        priceNum_6143Pricetag.id = 6143;

        // nextpage4 (components)
        const nextpage4Button = new Button(nextpage4);
        nextpage4Button.spriteName = "nextpage";
        nextpage4Button.callback = () => this.nextPage();

        // backpage4 (components)
        const backpage4Button = new Button(backpage4);
        backpage4Button.spriteName = "backpage";
        backpage4Button.callback = () => this.prevPage();

        // buyBtn_1508 (components)
        const buyBtn_1508Button = new Button(buyBtn_1508);
        buyBtn_1508Button.spriteName = "tag";
        buyBtn_1508Button.callback = () => this.buy(1508);

        // priceNum_1508 (components)
        const priceNum_1508Pricetag = new Pricetag(priceNum_1508);
        priceNum_1508Pricetag.id = 1508;

        // buyBtn_5188 (components)
        const buyBtn_5188Button = new Button(buyBtn_5188);
        buyBtn_5188Button.spriteName = "tag";
        buyBtn_5188Button.callback = () => this.buy(5188);

        // priceNum_5188 (components)
        const priceNum_5188Pricetag = new Pricetag(priceNum_5188);
        priceNum_5188Pricetag.id = 5188;

        // buyBtn_6142 (components)
        const buyBtn_6142Button = new Button(buyBtn_6142);
        buyBtn_6142Button.spriteName = "tag";
        buyBtn_6142Button.callback = () => this.buy(6142);

        // priceNum_6142 (components)
        const priceNum_6142Pricetag = new Pricetag(priceNum_6142);
        priceNum_6142Pricetag.id = 6142;

        // buyBtn_4757 (components)
        const buyBtn_4757Button = new Button(buyBtn_4757);
        buyBtn_4757Button.spriteName = "tag";
        buyBtn_4757Button.callback = () => this.buy(4757);

        // priceNum_4757 (components)
        const priceNum_4757Pricetag = new Pricetag(priceNum_4757);
        priceNum_4757Pricetag.id = 4757;

        // nextpage5 (components)
        const nextpage5Button = new Button(nextpage5);
        nextpage5Button.spriteName = "nextpage";
        nextpage5Button.callback = () => this.nextPage();

        // backpage5 (components)
        const backpage5Button = new Button(backpage5);
        backpage5Button.spriteName = "backpage";
        backpage5Button.callback = () => this.prevPage();

        // buyBtn_1510 (components)
        const buyBtn_1510Button = new Button(buyBtn_1510);
        buyBtn_1510Button.spriteName = "tag";
        buyBtn_1510Button.callback = () => this.buy(1510);

        // priceNum_1510 (components)
        const priceNum_1510Pricetag = new Pricetag(priceNum_1510);
        priceNum_1510Pricetag.id = 1510;

        // buyBtn_4759 (components)
        const buyBtn_4759Button = new Button(buyBtn_4759);
        buyBtn_4759Button.spriteName = "tag";
        buyBtn_4759Button.callback = () => this.buy(4759);

        // priceNum_4759 (components)
        const priceNum_4759Pricetag = new Pricetag(priceNum_4759);
        priceNum_4759Pricetag.id = 4759;

        // nextpage6 (components)
        const nextpage6Button = new Button(nextpage6);
        nextpage6Button.spriteName = "nextpage";
        nextpage6Button.callback = () => this.nextPage();

        // backpage6 (components)
        const backpage6Button = new Button(backpage6);
        backpage6Button.spriteName = "backpage";
        backpage6Button.callback = () => this.prevPage();

        // buyBtn_1511 (components)
        const buyBtn_1511Button = new Button(buyBtn_1511);
        buyBtn_1511Button.spriteName = "tag";
        buyBtn_1511Button.callback = () => this.buy(1511);

        // priceNum_1511 (components)
        const priceNum_1511Pricetag = new Pricetag(priceNum_1511);
        priceNum_1511Pricetag.id = 1511;

        // buyBtn_4760 (components)
        const buyBtn_4760Button = new Button(buyBtn_4760);
        buyBtn_4760Button.spriteName = "tag";
        buyBtn_4760Button.callback = () => this.buy(4760);

        // priceNum_4760 (components)
        const priceNum_4760Pricetag = new Pricetag(priceNum_4760);
        priceNum_4760Pricetag.id = 4760;

        // nextpage7 (components)
        const nextpage7Button = new Button(nextpage7);
        nextpage7Button.spriteName = "nextpage";
        nextpage7Button.callback = () => this.nextPage();

        // backpage7 (components)
        const backpage7Button = new Button(backpage7);
        backpage7Button.spriteName = "backpage";
        backpage7Button.callback = () => this.prevPage();

        // buyBtn_4474 (components)
        const buyBtn_4474Button = new Button(buyBtn_4474);
        buyBtn_4474Button.spriteName = "tag";
        buyBtn_4474Button.callback = () => this.buy(4474);

        // priceNum_4474 (components)
        const priceNum_4474Pricetag = new Pricetag(priceNum_4474);
        priceNum_4474Pricetag.id = 4474;

        // buyBtn_4476 (components)
        const buyBtn_4476Button = new Button(buyBtn_4476);
        buyBtn_4476Button.spriteName = "tag";
        buyBtn_4476Button.callback = () => this.buy(4476);

        // priceNum_4476 (components)
        const priceNum_4476Pricetag = new Pricetag(priceNum_4476);
        priceNum_4476Pricetag.id = 4476;

        // buyBtn_4480 (components)
        const buyBtn_4480Button = new Button(buyBtn_4480);
        buyBtn_4480Button.spriteName = "tag";
        buyBtn_4480Button.callback = () => this.buy(4480);

        // priceNum_4480 (components)
        const priceNum_4480Pricetag = new Pricetag(priceNum_4480);
        priceNum_4480Pricetag.id = 4480;

        // buyBtn_4478 (components)
        const buyBtn_4478Button = new Button(buyBtn_4478);
        buyBtn_4478Button.spriteName = "tag";
        buyBtn_4478Button.callback = () => this.buy(4478);

        // priceNum_4478 (components)
        const priceNum_4478Pricetag = new Pricetag(priceNum_4478);
        priceNum_4478Pricetag.id = 4478;

        // buyBtn_277 (components)
        const buyBtn_277Button = new Button(buyBtn_277);
        buyBtn_277Button.spriteName = "tag";
        buyBtn_277Button.callback = () => this.buy(277);

        // priceNum_277 (components)
        const priceNum_277Pricetag = new Pricetag(priceNum_277);
        priceNum_277Pricetag.id = 277;

        // buyBtn_278 (components)
        const buyBtn_278Button = new Button(buyBtn_278);
        buyBtn_278Button.spriteName = "tag";
        buyBtn_278Button.callback = () => this.buy(278);

        // priceNum_278 (components)
        const priceNum_278Pricetag = new Pricetag(priceNum_278);
        priceNum_278Pricetag.id = 278;

        // buyBtn_4143 (components)
        const buyBtn_4143Button = new Button(buyBtn_4143);
        buyBtn_4143Button.spriteName = "tag";
        buyBtn_4143Button.callback = () => this.buy(4143);

        // priceNum_4143 (components)
        const priceNum_4143Pricetag = new Pricetag(priceNum_4143);
        priceNum_4143Pricetag.id = 4143;

        // buyBtn_4204 (components)
        const buyBtn_4204Button = new Button(buyBtn_4204);
        buyBtn_4204Button.spriteName = "tag";
        buyBtn_4204Button.callback = () => this.buy(4204);

        // priceNum_4204 (components)
        const priceNum_4204Pricetag = new Pricetag(priceNum_4204);
        priceNum_4204Pricetag.id = 4204;

        // nextpage8 (components)
        const nextpage8Button = new Button(nextpage8);
        nextpage8Button.spriteName = "nextpage";
        nextpage8Button.callback = () => this.nextPage();

        // backpage8 (components)
        const backpage8Button = new Button(backpage8);
        backpage8Button.spriteName = "backpage";
        backpage8Button.callback = () => this.prevPage();

        // buyBtn_4144 (components)
        const buyBtn_4144Button = new Button(buyBtn_4144);
        buyBtn_4144Button.spriteName = "tag";
        buyBtn_4144Button.callback = () => this.buy(4144);

        // priceNum_4144 (components)
        const priceNum_4144Pricetag = new Pricetag(priceNum_4144);
        priceNum_4144Pricetag.id = 4144;

        // buyBtn_4475 (components)
        const buyBtn_4475Button = new Button(buyBtn_4475);
        buyBtn_4475Button.spriteName = "tag";
        buyBtn_4475Button.callback = () => this.buy(4475);

        // priceNum_4475 (components)
        const priceNum_4475Pricetag = new Pricetag(priceNum_4475);
        priceNum_4475Pricetag.id = 4475;

        // buyBtn_4477 (components)
        const buyBtn_4477Button = new Button(buyBtn_4477);
        buyBtn_4477Button.spriteName = "tag";
        buyBtn_4477Button.callback = () => this.buy(4477);

        // priceNum_315 (components)
        const priceNum_315Pricetag = new Pricetag(priceNum_315);
        priceNum_315Pricetag.id = 315;

        // buyBtn_4297 (components)
        const buyBtn_4297Button = new Button(buyBtn_4297);
        buyBtn_4297Button.spriteName = "tag";
        buyBtn_4297Button.callback = () => this.buy(4297);

        // priceNum_4297 (components)
        const priceNum_4297Pricetag = new Pricetag(priceNum_4297);
        priceNum_4297Pricetag.id = 4297;

        // buyBtn_4481 (components)
        const buyBtn_4481Button = new Button(buyBtn_4481);
        buyBtn_4481Button.spriteName = "tag";
        buyBtn_4481Button.callback = () => this.buy(4481);

        // priceNum_4481 (components)
        const priceNum_4481Pricetag = new Pricetag(priceNum_4481);
        priceNum_4481Pricetag.id = 4481;

        // buyBtn_4479 (components)
        const buyBtn_4479Button = new Button(buyBtn_4479);
        buyBtn_4479Button.spriteName = "tag";
        buyBtn_4479Button.callback = () => this.buy(4479);

        // priceNum_4479 (components)
        const priceNum_4479Pricetag = new Pricetag(priceNum_4479);
        priceNum_4479Pricetag.id = 4479;

        // buyBtn_4054 (components)
        const buyBtn_4054Button = new Button(buyBtn_4054);
        buyBtn_4054Button.spriteName = "tag";
        buyBtn_4054Button.callback = () => this.buy(4054);

        // priceNum_4054 (components)
        const priceNum_4054Pricetag = new Pricetag(priceNum_4054);
        priceNum_4054Pricetag.id = 4054;

        // buyBtn_4053 (components)
        const buyBtn_4053Button = new Button(buyBtn_4053);
        buyBtn_4053Button.spriteName = "tag";
        buyBtn_4053Button.callback = () => this.buy(4053);

        // priceNum_4053 (components)
        const priceNum_4053Pricetag = new Pricetag(priceNum_4053);
        priceNum_4053Pricetag.id = 4053;

        // nextpage9 (components)
        const nextpage9Button = new Button(nextpage9);
        nextpage9Button.spriteName = "nextpage";
        nextpage9Button.callback = () => this.nextPage();

        // backpage9 (components)
        const backpage9Button = new Button(backpage9);
        backpage9Button.spriteName = "backpage";
        backpage9Button.callback = () => this.prevPage();

        // buyBtn_4299 (components)
        const buyBtn_4299Button = new Button(buyBtn_4299);
        buyBtn_4299Button.spriteName = "tag";
        buyBtn_4299Button.callback = () => this.buy(4299);

        // priceNum_4299 (components)
        const priceNum_4299Pricetag = new Pricetag(priceNum_4299);
        priceNum_4299Pricetag.id = 4299;

        // buyBtn_461 (components)
        const buyBtn_461Button = new Button(buyBtn_461);
        buyBtn_461Button.spriteName = "tag";
        buyBtn_461Button.callback = () => this.buy(461);

        // priceNum_461 (components)
        const priceNum_461Pricetag = new Pricetag(priceNum_461);
        priceNum_461Pricetag.id = 461;

        // buyBtn_1215 (components)
        const buyBtn_1215Button = new Button(buyBtn_1215);
        buyBtn_1215Button.spriteName = "tag";
        buyBtn_1215Button.callback = () => this.buy(1215);

        // priceNum_1215 (components)
        const priceNum_1215Pricetag = new Pricetag(priceNum_1215);
        priceNum_1215Pricetag.id = 1215;

        // buyBtn_560 (components)
        const buyBtn_560Button = new Button(buyBtn_560);
        buyBtn_560Button.spriteName = "tag";
        buyBtn_560Button.callback = () => this.buy(560);

        // priceNum_560 (components)
        const priceNum_560Pricetag = new Pricetag(priceNum_560);
        priceNum_560Pricetag.id = 560;

        // buyBtn_3002 (components)
        const buyBtn_3002Button = new Button(buyBtn_3002);
        buyBtn_3002Button.spriteName = "tag";
        buyBtn_3002Button.callback = () => this.buy(3002);

        // priceNum_3002 (components)
        const priceNum_3002Pricetag = new Pricetag(priceNum_3002);
        priceNum_3002Pricetag.id = 3002;

        // buyBtn_6013 (components)
        const buyBtn_6013Button = new Button(buyBtn_6013);
        buyBtn_6013Button.spriteName = "tag";
        buyBtn_6013Button.callback = () => this.buy(6013);

        // priceNum_6013 (components)
        const priceNum_6013Pricetag = new Pricetag(priceNum_6013);
        priceNum_6013Pricetag.id = 6013;

        // block_goalhel (components)
        new Interactive(block_goalhel);

        // exit_goalhel (components)
        const exit_goalhelSimpleButton = new SimpleButton(exit_goalhel);
        exit_goalhelSimpleButton.callback = () => this.secretClose(1036);

        // buyBtn_1036 (components)
        const buyBtn_1036Button = new Button(buyBtn_1036);
        buyBtn_1036Button.spriteName = "tag";
        buyBtn_1036Button.callback = () => this.buy(1036);

        // priceNum_1036 (components)
        const priceNum_1036Pricetag = new Pricetag(priceNum_1036);
        priceNum_1036Pricetag.id = 1036;

        // nameTag_1036 (components)
        const nameTag_1036Name = new Name(nameTag_1036);
        nameTag_1036Name.id = 1036;

        // sec_goaliehelmet (components)
        const sec_goaliehelmetSimpleButton = new SimpleButton(sec_goaliehelmet);
        sec_goaliehelmetSimpleButton.callback = () => this.onSecret(1036);

        // block_goalstick (components)
        new Interactive(block_goalstick);

        // exit_goalstick (components)
        const exit_goalstickSimpleButton = new SimpleButton(exit_goalstick);
        exit_goalstickSimpleButton.callback = () => this.secretClose(5018);

        // buyBtn_5018 (components)
        const buyBtn_5018Button = new Button(buyBtn_5018);
        buyBtn_5018Button.spriteName = "tag";
        buyBtn_5018Button.callback = () => this.buy(5018);

        // priceNum_5018 (components)
        const priceNum_5018Pricetag = new Pricetag(priceNum_5018);
        priceNum_5018Pricetag.id = 5018;

        // nameTag_5018 (components)
        const nameTag_5018Name = new Name(nameTag_5018);
        nameTag_5018Name.id = 5018;

        // sec_goaliestick (components)
        const sec_goaliestickSimpleButton = new SimpleButton(sec_goaliestick);
        sec_goaliestickSimpleButton.callback = () => this.onSecret(5018);

        // nextpage10 (components)
        const nextpage10Button = new Button(nextpage10);
        nextpage10Button.spriteName = "nextpage";
        nextpage10Button.callback = () => this.nextPage();

        // backpage10 (components)
        const backpage10Button = new Button(backpage10);
        backpage10Button.spriteName = "backpage";
        backpage10Button.callback = () => this.prevPage();

        // buyBtn_1337 (components)
        const buyBtn_1337Button = new Button(buyBtn_1337);
        buyBtn_1337Button.spriteName = "tag";
        buyBtn_1337Button.callback = () => this.buy(1337);

        // priceNum_1337 (components)
        const priceNum_1337Pricetag = new Pricetag(priceNum_1337);
        priceNum_1337Pricetag.id = 1337;

        // buyBtn_4483 (components)
        const buyBtn_4483Button = new Button(buyBtn_4483);
        buyBtn_4483Button.spriteName = "tag";
        buyBtn_4483Button.callback = () => this.buy(4483);

        // priceNum_4483 (components)
        const priceNum_4483Pricetag = new Pricetag(priceNum_4483);
        priceNum_4483Pricetag.id = 4483;

        // block_snowysky (components)
        new Interactive(block_snowysky);

        // exit_snowysky (components)
        const exit_snowyskySimpleButton = new SimpleButton(exit_snowysky);
        exit_snowyskySimpleButton.callback = () => this.secretClose(4484);

        // buyBtn_4484 (components)
        const buyBtn_4484Button = new Button(buyBtn_4484);
        buyBtn_4484Button.spriteName = "tag";
        buyBtn_4484Button.callback = () => this.buy(4484);

        // priceNum_4484 (components)
        const priceNum_4484Pricetag = new Pricetag(priceNum_4484);
        priceNum_4484Pricetag.id = 4484;

        // nameTag_4484 (components)
        const nameTag_4484Name = new Name(nameTag_4484);
        nameTag_4484Name.id = 4484;

        // sec_snowsky (components)
        const sec_snowskySimpleButton = new SimpleButton(sec_snowsky);
        sec_snowskySimpleButton.callback = () => this.onSecret(4484);

        // nextpage11 (components)
        const nextpage11Button = new Button(nextpage11);
        nextpage11Button.spriteName = "nextpage";
        nextpage11Button.callback = () => this.nextPage();

        // backpage11 (components)
        const backpage11Button = new Button(backpage11);
        backpage11Button.spriteName = "backpage";
        backpage11Button.callback = () => this.prevPage();

        // buyBtn_6011 (components)
        const buyBtn_6011Button = new Button(buyBtn_6011);
        buyBtn_6011Button.spriteName = "tag";
        buyBtn_6011Button.callback = () => this.buy(6011);

        // priceNum_6011 (components)
        const priceNum_6011Pricetag = new Pricetag(priceNum_6011);
        priceNum_6011Pricetag.id = 6011;

        // buyBtn_4482 (components)
        const buyBtn_4482Button = new Button(buyBtn_4482);
        buyBtn_4482Button.spriteName = "tag";
        buyBtn_4482Button.callback = () => this.buy(4482);

        // priceNum_4482 (components)
        const priceNum_4482Pricetag = new Pricetag(priceNum_4482);
        priceNum_4482Pricetag.id = 4482;

        // buyBtn_1336 (components)
        const buyBtn_1336Button = new Button(buyBtn_1336);
        buyBtn_1336Button.spriteName = "tag";
        buyBtn_1336Button.callback = () => this.buy(1336);

        // priceNum_1336 (components)
        const priceNum_1336Pricetag = new Pricetag(priceNum_1336);
        priceNum_1336Pricetag.id = 1336;

        // block_free (components)
        new Interactive(block_free);

        // exit_free (components)
        const exit_freeSimpleButton = new SimpleButton(exit_free);
        exit_freeSimpleButton.callback = () => this.secretClose(1338);

        // buyBtn_1338 (components)
        const buyBtn_1338Button = new Button(buyBtn_1338);
        buyBtn_1338Button.spriteName = "tag";
        buyBtn_1338Button.callback = () => this.buy(1338);

        // priceNum_1338 (components)
        const priceNum_1338Pricetag = new Pricetag(priceNum_1338);
        priceNum_1338Pricetag.id = 1338;

        // nameTag_1338 (components)
        const nameTag_1338Name = new Name(nameTag_1338);
        nameTag_1338Name.id = 1338;

        // sec_frees (components)
        const sec_freesSimpleButton = new SimpleButton(sec_frees);
        sec_freesSimpleButton.callback = () => this.onSecret(1338);

        // nextpage12 (components)
        const nextpage12Button = new Button(nextpage12);
        nextpage12Button.spriteName = "nextpage";
        nextpage12Button.callback = () => this.nextPage();

        // backpage12 (components)
        const backpage12Button = new Button(backpage12);
        backpage12Button.spriteName = "backpage";
        backpage12Button.callback = () => this.prevPage();

        // backpage13 (components)
        const backpage13Button = new Button(backpage13);
        backpage13Button.spriteName = "backpage";
        backpage13Button.callback = () => this.prevPage();

        // exit_2 (components)
        const exit_2SimpleButton = new SimpleButton(exit_2);
        exit_2SimpleButton.callback = () => this.scene.stop();

        // exit (components)
        const exitSimpleButton = new SimpleButton(exit);
        exitSimpleButton.callback = () => this.scene.stop();

        this.buyBtn_5472 = buyBtn_5472;
        this.priceNum_5472 = priceNum_5472;
        this.buyBtn_5473 = buyBtn_5473;
        this.priceNum_5473 = priceNum_5473;
        this.buyBtn_1906 = buyBtn_1906;
        this.priceNum_1906 = priceNum_1906;
        this.buyBtn_1907 = buyBtn_1907;
        this.priceNum_1907 = priceNum_1907;
        this.buyBtn_5471 = buyBtn_5471;
        this.priceNum_5471 = priceNum_5471;
        this.buyBtn_5474 = buyBtn_5474;
        this.priceNum_5474 = priceNum_5474;
        this.buyBtn_24191 = buyBtn_24191;
        this.priceNum_24191 = priceNum_24191;
        this.buyBtn_24204 = buyBtn_24204;
        this.priceNum_24204 = priceNum_24204;
        this.buyBtn_1509 = buyBtn_1509;
        this.priceNum_1509 = priceNum_1509;
        this.buyBtn_5189 = buyBtn_5189;
        this.priceNum_5580 = priceNum_5580;
        this.buyBtn_4758 = buyBtn_4758;
        this.priceNum_4758 = priceNum_4758;
        this.buyBtn_6143 = buyBtn_6143;
        this.priceNum_6143 = priceNum_6143;
        this.buyBtn_1508 = buyBtn_1508;
        this.priceNum_1508 = priceNum_1508;
        this.buyBtn_5188 = buyBtn_5188;
        this.priceNum_5188 = priceNum_5188;
        this.buyBtn_6142 = buyBtn_6142;
        this.priceNum_6142 = priceNum_6142;
        this.buyBtn_4757 = buyBtn_4757;
        this.priceNum_4757 = priceNum_4757;
        this.buyBtn_1510 = buyBtn_1510;
        this.priceNum_1510 = priceNum_1510;
        this.buyBtn_4759 = buyBtn_4759;
        this.priceNum_4759 = priceNum_4759;
        this.buyBtn_1511 = buyBtn_1511;
        this.priceNum_1511 = priceNum_1511;
        this.buyBtn_4760 = buyBtn_4760;
        this.priceNum_4760 = priceNum_4760;
        this.buyBtn_4474 = buyBtn_4474;
        this.priceNum_4474 = priceNum_4474;
        this.buyBtn_4476 = buyBtn_4476;
        this.priceNum_4476 = priceNum_4476;
        this.buyBtn_4480 = buyBtn_4480;
        this.priceNum_4480 = priceNum_4480;
        this.buyBtn_4478 = buyBtn_4478;
        this.priceNum_4478 = priceNum_4478;
        this.buyBtn_277 = buyBtn_277;
        this.priceNum_277 = priceNum_277;
        this.buyBtn_278 = buyBtn_278;
        this.priceNum_278 = priceNum_278;
        this.buyBtn_4143 = buyBtn_4143;
        this.priceNum_4143 = priceNum_4143;
        this.buyBtn_4204 = buyBtn_4204;
        this.priceNum_4204 = priceNum_4204;
        this.buyBtn_4144 = buyBtn_4144;
        this.priceNum_4144 = priceNum_4144;
        this.buyBtn_4475 = buyBtn_4475;
        this.priceNum_4475 = priceNum_4475;
        this.buyBtn_4477 = buyBtn_4477;
        this.priceNum_315 = priceNum_315;
        this.buyBtn_4297 = buyBtn_4297;
        this.priceNum_4297 = priceNum_4297;
        this.buyBtn_4481 = buyBtn_4481;
        this.priceNum_4481 = priceNum_4481;
        this.buyBtn_4479 = buyBtn_4479;
        this.priceNum_4479 = priceNum_4479;
        this.buyBtn_4054 = buyBtn_4054;
        this.priceNum_4054 = priceNum_4054;
        this.buyBtn_4053 = buyBtn_4053;
        this.priceNum_4053 = priceNum_4053;
        this.buyBtn_4299 = buyBtn_4299;
        this.priceNum_4299 = priceNum_4299;
        this.buyBtn_461 = buyBtn_461;
        this.priceNum_461 = priceNum_461;
        this.buyBtn_1215 = buyBtn_1215;
        this.priceNum_1215 = priceNum_1215;
        this.buyBtn_560 = buyBtn_560;
        this.priceNum_560 = priceNum_560;
        this.buyBtn_3002 = buyBtn_3002;
        this.priceNum_3002 = priceNum_3002;
        this.buyBtn_6013 = buyBtn_6013;
        this.priceNum_6013 = priceNum_6013;
        this.sec_1036 = sec_1036;
        this.buyBtn_1036 = buyBtn_1036;
        this.priceNum_1036 = priceNum_1036;
        this.nameTag_1036 = nameTag_1036;
        this.sec_goaliehelmet = sec_goaliehelmet;
        this.sec_5018 = sec_5018;
        this.buyBtn_5018 = buyBtn_5018;
        this.priceNum_5018 = priceNum_5018;
        this.nameTag_5018 = nameTag_5018;
        this.sec_goaliestick = sec_goaliestick;
        this.buyBtn_1337 = buyBtn_1337;
        this.priceNum_1337 = priceNum_1337;
        this.buyBtn_4483 = buyBtn_4483;
        this.priceNum_4483 = priceNum_4483;
        this.sec_4484 = sec_4484;
        this.buyBtn_4484 = buyBtn_4484;
        this.priceNum_4484 = priceNum_4484;
        this.nameTag_4484 = nameTag_4484;
        this.sec_snowsky = sec_snowsky;
        this.buyBtn_6011 = buyBtn_6011;
        this.priceNum_6011 = priceNum_6011;
        this.buyBtn_4482 = buyBtn_4482;
        this.priceNum_4482 = priceNum_4482;
        this.buyBtn_1336 = buyBtn_1336;
        this.priceNum_1336 = priceNum_1336;
        this.sec_1338 = sec_1338;
        this.buyBtn_1338 = buyBtn_1338;
        this.priceNum_1338 = priceNum_1338;
        this.nameTag_1338 = nameTag_1338;
        this.sec_frees = sec_frees;
        this.buttons = buttons;
        this.coins = coins;
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
        this.coins.text = `YOUR COINS:\n${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    nametag(id) {
        if (this.crumbs.items[id]) {
            return this.crumbs.items[id].name
        } else {
            console.log('error with ' + id)
        }
    }

    pricetag(id) {
        if (this.crumbs.items[id]) {
            return this.crumbs.items[id].cost
        } else {
            console.log('error with ' + id)
        }
    }

    onRectangleHover(number) {
        let bgholder = this[`bgholder${number}`]
        bgholder.setFrame('bgholder-hover')
    }

    onRectangleOut(number) {
        let bgholder = this[`bgholder${number}`]
        bgholder.setFrame('bgholder')
    }

    onSecret(number) {
        let sec = this[`sec_${number}`]
        sec.visible = true
        this.shell.musicController.addSfx('musiccat-secret')
    }

    secretClose(number) {
        let sec = this[`sec_${number}`]
        sec.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
