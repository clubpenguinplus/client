import {Button, Interactive, SimpleButton, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class CostumeCatalog extends Book {

    constructor() {
        super("CostumeCatalog");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder6;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder7;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder8;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder9;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder10;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgholder11;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle4;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle5;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle6;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle7;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle8;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle9;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle10;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_489;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_489;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5580;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5580;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_675;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_675;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_834;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_834;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_835;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_835;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_190;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_190;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_126;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_126;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_212;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_212;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_212;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_210;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_skirt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_676;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_676;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_127;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_127;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_128;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_128;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_665;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_665;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_786;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_786;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_787;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_787;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_316;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_316;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_432;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_432;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_327;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_327;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_716;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_716;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_716;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_716;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_crook;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_666;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_666;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_789;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_789;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_788;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_788;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_715;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_715;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_123;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_123;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_302;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_302;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_315;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_315;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_124;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_124;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_765;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_765;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_766;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_766;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_767;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_767;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_195;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_195;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_113;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_113;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4457;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4457;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6096;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6096;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4456;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4456;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4455;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4455;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6095;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6095;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_132;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_132;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4113;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4113;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4114;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4114;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_2003;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_2003;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_364;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_364;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_367;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_367;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_308;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_308;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_768;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_768;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3029;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3029;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5044;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5044;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1077;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1077;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4110;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4110;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1076;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1076;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4111;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4111;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4112;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4112;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1057;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1057;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4085;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4085;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4086;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4086;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1056;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1056;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4015;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4015;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_347;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_347;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_244;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_244;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1010;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1010;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_181;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_181;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4012;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4012;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1009;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1009;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_842;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_842;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5003;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5003;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1012;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1012;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3005;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3005;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4014;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4014;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1011;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1011;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6008;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6008;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4013;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4013;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1025;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1025;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4038;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4038;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4036;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4036;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1023;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1023;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3008;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3008;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_301;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_301;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4039;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4039;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6010;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6010;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4037;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4037;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1024;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1024;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1015;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1015;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4018;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4018;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4426;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4426;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_479;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_479;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_658;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_658;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_254;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_254;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_771;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_771;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_110;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_110;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4004;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4004;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_722;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_722;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3002;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3002;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_772;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_772;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_659;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_659;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_122;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_122;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_276;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_276;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_2004;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_2004;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1016;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1016;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_266;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_266;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4021;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4021;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1199;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1199;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_120;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_120;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_245;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_245;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_458;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_458;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_268;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_268;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4280;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4280;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1116;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1116;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_2016;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_2016;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6033;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6033;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4190;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4190;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1114;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1114;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4192;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4192;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_1272;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1272;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1272;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_1272;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_sun;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1115;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1115;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6034;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6034;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4191;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4191;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_2017;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_2017;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4194;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4194;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3041;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3041;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1117;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1117;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_367_again;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_367_again;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_477;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_477;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_762;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_762;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_763;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_763;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_476;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_476;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_761;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_761;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_760;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_760;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_475;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_475;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_186;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_186;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_186;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_186;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_ruff;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1102;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1102;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3037;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3037;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3036;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3036;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1101;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1101;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4136;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4136;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4137;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4137;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_472;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_472;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4135;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4135;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_227;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_227;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4138;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4138;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_309;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_309;
        /** @type {Phaser.GameObjects.Container} */
        this.sec_6020;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_6020;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_6020;
        /** @type {Phaser.GameObjects.Text} */
        this.nameTag_6020;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_point;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_2043;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_2043;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4467;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4467;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4468;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4468;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4466;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4466;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1106;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1106;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4146;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4146;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5131;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5131;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3038;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3038;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_119;
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_119;
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

        this.load.pack("stagecat-pack", "client/media/interface/catalogs/costume/stagecat-pack.json");
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
        const page1body = this.add.image(760, 480, "stagecat", "page1body");
        page1.add(page1body);

        // nextpage
        const nextpage = this.add.image(1060, 737, "stagecat", "nextpage");
        page1.add(nextpage);

        // exit_1
        const exit_1 = this.add.image(1124, 50, "stagecat", "exit");
        page1.add(exit_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page2body
        const page2body = this.add.image(760, 480, "stagecat", "page2body");
        page2.add(page2body);

        // nextpage2
        const nextpage2 = this.add.image(1378, 737, "stagecat", "nextpage");
        page2.add(nextpage2);

        // backpage2
        const backpage2 = this.add.image(138, 737, "stagecat", "backpage");
        page2.add(backpage2);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1103, 158, 128, 128);
        rectangle_1.scaleX = 3.232628993280528;
        rectangle_1.scaleY = 0.31995684127235025;
        page2.add(rectangle_1);

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1105, 204, 128, 128);
        rectangle_2.scaleX = 2.6342800181137447;
        rectangle_2.scaleY = 0.25879506793126733;
        page2.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = this.add.rectangle(1107, 249, 128, 128);
        rectangle_3.scaleX = 3.1316278511237114;
        rectangle_3.scaleY = 0.27402098341095776;
        page2.add(rectangle_3);

        // rectangle_4
        const rectangle_4 = this.add.rectangle(1107, 293, 128, 128);
        rectangle_4.scaleX = 3.1316278511237114;
        rectangle_4.scaleY = 0.2642105261510312;
        page2.add(rectangle_4);

        // rectangle_5
        const rectangle_5 = this.add.rectangle(1104, 331, 128, 128);
        rectangle_5.scaleX = 2.54674364737219;
        rectangle_5.scaleY = 0.21580989384448662;
        page2.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = this.add.rectangle(1106, 371, 128, 128);
        rectangle_6.scaleX = 2.868837013066959;
        rectangle_6.scaleY = 0.24026532577415263;
        page2.add(rectangle_6);

        // rectangle_7
        const rectangle_7 = this.add.rectangle(1111, 412, 128, 128);
        rectangle_7.scaleX = 1.822179169169912;
        rectangle_7.scaleY = 0.21370333292601693;
        page2.add(rectangle_7);

        // rectangle_8
        const rectangle_8 = this.add.rectangle(1103, 456, 128, 128);
        rectangle_8.scaleX = 1.822179169169912;
        rectangle_8.scaleY = 0.21370333292601693;
        page2.add(rectangle_8);

        // rectangle_9
        const rectangle_9 = this.add.rectangle(1108, 499, 128, 128);
        rectangle_9.scaleX = 2.3799557539597838;
        rectangle_9.scaleY = 0.22951019697576422;
        page2.add(rectangle_9);

        // rectangle_10
        const rectangle_10 = this.add.rectangle(1113, 537, 128, 128);
        rectangle_10.scaleX = 2.3799557539597838;
        rectangle_10.scaleY = 0.22951019697576422;
        page2.add(rectangle_10);

        // rectangle_11
        const rectangle_11 = this.add.rectangle(1104, 581, 128, 128);
        rectangle_11.scaleX = 1.822179169169912;
        rectangle_11.scaleY = 0.21370333292601693;
        page2.add(rectangle_11);

        // rectangle_12
        const rectangle_12 = this.add.rectangle(1105, 622, 128, 128);
        rectangle_12.scaleX = 2.9418748264159835;
        rectangle_12.scaleY = 0.2329251592865349;
        page2.add(rectangle_12);

        // rectangle_13
        const rectangle_13 = this.add.rectangle(1107, 664, 128, 128);
        rectangle_13.scaleX = 1.822179169169912;
        rectangle_13.scaleY = 0.21370333292601693;
        page2.add(rectangle_13);

        // rectangle_14
        const rectangle_14 = this.add.rectangle(1108, 706, 128, 128);
        rectangle_14.scaleX = 3.735334984114498;
        rectangle_14.scaleY = 0.27580424813801735;
        page2.add(rectangle_14);

        // rectangle_15
        const rectangle_15 = this.add.rectangle(1113, 750, 128, 128);
        rectangle_15.scaleX = 1.822179169169912;
        rectangle_15.scaleY = 0.21370333292601693;
        page2.add(rectangle_15);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // page3body
        const page3body = this.add.image(760, 480, "stagecat", "page3body");
        page3.add(page3body);

        // bgholder1
        const bgholder1 = this.add.sprite(303, 281, "stagecat", "bgholder");
        page3.add(bgholder1);

        // bgholder2
        const bgholder2 = this.add.sprite(534, 281, "stagecat", "bgholder");
        page3.add(bgholder2);

        // bgholder3
        const bgholder3 = this.add.sprite(303, 487, "stagecat", "bgholder");
        page3.add(bgholder3);

        // bgholder4
        const bgholder4 = this.add.sprite(534, 487, "stagecat", "bgholder");
        page3.add(bgholder4);

        // bgholder5
        const bgholder5 = this.add.sprite(309, 700, "stagecat", "bgholder");
        page3.add(bgholder5);

        // bgholder6
        const bgholder6 = this.add.sprite(536, 700, "stagecat", "bgholder");
        page3.add(bgholder6);

        // bgholder7
        const bgholder7 = this.add.sprite(988, 699, "stagecat", "bgholder");
        bgholder7.scaleX = 1.0256497552243766;
        bgholder7.scaleY = 1.0256497552243766;
        page3.add(bgholder7);

        // bgholder8
        const bgholder8 = this.add.sprite(1216, 486, "stagecat", "bgholder");
        page3.add(bgholder8);

        // bgholder9
        const bgholder9 = this.add.sprite(992, 486, "stagecat", "bgholder");
        page3.add(bgholder9);

        // bgholder10
        const bgholder10 = this.add.sprite(1216, 275, "stagecat", "bgholder");
        page3.add(bgholder10);

        // bgholder11
        const bgholder11 = this.add.sprite(989, 275, "stagecat", "bgholder");
        page3.add(bgholder11);

        // bgs
        const bgs = this.add.image(760, 490, "stagecat", "bgs");
        page3.add(bgs);

        // rectangle
        const rectangle = this.add.rectangle(305, 278, 128, 128);
        rectangle.scaleX = 1.57;
        rectangle.scaleY = 1.57;
        page3.add(rectangle);

        // rectangle1
        const rectangle1 = this.add.rectangle(533, 278, 128, 128);
        rectangle1.scaleX = 1.57;
        rectangle1.scaleY = 1.57;
        page3.add(rectangle1);

        // rectangle2
        const rectangle2 = this.add.rectangle(304, 488, 128, 128);
        rectangle2.scaleX = 1.57;
        rectangle2.scaleY = 1.57;
        page3.add(rectangle2);

        // rectangle3
        const rectangle3 = this.add.rectangle(532, 487, 128, 128);
        rectangle3.scaleX = 1.57;
        rectangle3.scaleY = 1.57;
        page3.add(rectangle3);

        // rectangle4
        const rectangle4 = this.add.rectangle(311, 700, 128, 128);
        rectangle4.scaleX = 1.57;
        rectangle4.scaleY = 1.57;
        page3.add(rectangle4);

        // rectangle5
        const rectangle5 = this.add.rectangle(539, 700, 128, 128);
        rectangle5.scaleX = 1.57;
        rectangle5.scaleY = 1.57;
        page3.add(rectangle5);

        // rectangle6
        const rectangle6 = this.add.rectangle(990, 697, 128, 128);
        rectangle6.scaleX = 1.57;
        rectangle6.scaleY = 1.57;
        page3.add(rectangle6);

        // rectangle7
        const rectangle7 = this.add.rectangle(1214, 488, 128, 128);
        rectangle7.scaleX = 1.57;
        rectangle7.scaleY = 1.57;
        page3.add(rectangle7);

        // rectangle8
        const rectangle8 = this.add.rectangle(994, 487, 128, 128);
        rectangle8.scaleX = 1.57;
        rectangle8.scaleY = 1.57;
        page3.add(rectangle8);

        // rectangle9
        const rectangle9 = this.add.rectangle(1215, 277, 128, 128);
        rectangle9.scaleX = 1.57;
        rectangle9.scaleY = 1.57;
        page3.add(rectangle9);

        // rectangle10
        const rectangle10 = this.add.rectangle(989, 277, 128, 128);
        rectangle10.scaleX = 1.57;
        rectangle10.scaleY = 1.57;
        page3.add(rectangle10);

        // nextpage3
        const nextpage3 = this.add.image(1378, 737, "stagecat", "nextpage");
        page3.add(nextpage3);

        // backpage3
        const backpage3 = this.add.image(138, 737, "stagecat", "backpage");
        page3.add(backpage3);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page4body
        const page4body = this.add.image(760, 480, "stagecat", "page4body");
        page4.add(page4body);

        // buyBtn_489
        const buyBtn_489 = this.add.sprite(402, 351, "stagecat", "tag");
        page4.add(buyBtn_489);

        // priceNum_489
        const priceNum_489 = this.add.text(407, 351, "", {});
        priceNum_489.setOrigin(0.5, 0.5);
        priceNum_489.text = "250";
        priceNum_489.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page4.add(priceNum_489);

        // buyBtn_5580
        const buyBtn_5580 = this.add.sprite(402, 622, "stagecat", "tag");
        page4.add(buyBtn_5580);

        // priceNum_5580
        const priceNum_5580 = this.add.text(407, 622, "", {});
        priceNum_5580.setOrigin(0.5, 0.5);
        priceNum_5580.text = "145";
        priceNum_5580.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page4.add(priceNum_5580);

        // nextpage4
        const nextpage4 = this.add.image(1378, 737, "stagecat", "nextpage");
        page4.add(nextpage4);

        // backpage4
        const backpage4 = this.add.image(138, 737, "stagecat", "backpage");
        page4.add(backpage4);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page5body
        const page5body = this.add.image(760, 480, "stagecat", "page5body");
        page5.add(page5body);

        // buyBtn_675
        const buyBtn_675 = this.add.sprite(961, 343, "stagecat", "tag");
        page5.add(buyBtn_675);

        // priceNum_675
        const priceNum_675 = this.add.text(966, 343, "", {});
        priceNum_675.setOrigin(0.5, 0.5);
        priceNum_675.text = "450";
        priceNum_675.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_675);

        // buyBtn_834
        const buyBtn_834 = this.add.sprite(961, 628, "stagecat", "tag");
        page5.add(buyBtn_834);

        // priceNum_834
        const priceNum_834 = this.add.text(966, 628, "", {});
        priceNum_834.setOrigin(0.5, 0.5);
        priceNum_834.text = "350";
        priceNum_834.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_834);

        // buyBtn_835
        const buyBtn_835 = this.add.sprite(1226, 714, "stagecat", "tag");
        page5.add(buyBtn_835);

        // priceNum_835
        const priceNum_835 = this.add.text(1231, 714, "", {});
        priceNum_835.setOrigin(0.5, 0.5);
        priceNum_835.text = "350";
        priceNum_835.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_835);

        // buyBtn_190
        const buyBtn_190 = this.add.sprite(1226, 439, "stagecat", "tag");
        page5.add(buyBtn_190);

        // priceNum_190
        const priceNum_190 = this.add.text(1231, 439, "", {});
        priceNum_190.setOrigin(0.5, 0.5);
        priceNum_190.text = "350";
        priceNum_190.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_190);

        // buyBtn_126
        const buyBtn_126 = this.add.sprite(1226, 250, "stagecat", "tag");
        page5.add(buyBtn_126);

        // priceNum_126
        const priceNum_126 = this.add.text(1231, 250, "", {});
        priceNum_126.setOrigin(0.5, 0.5);
        priceNum_126.text = "350";
        priceNum_126.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page5.add(priceNum_126);

        // sec_212
        const sec_212 = this.add.container(0, 0);
        sec_212.visible = false;
        page5.add(sec_212);

        // block_1
        const block_1 = this.add.rectangle(760, 480, 1520, 960);
        block_1.isFilled = true;
        block_1.fillColor = 0;
        block_1.fillAlpha = 0.2;
        sec_212.add(block_1);

        // secretholder_1
        const secretholder_1 = this.add.image(769, 431, "stagecat", "secretholder");
        secretholder_1.scaleX = 0.8503262048913669;
        secretholder_1.scaleY = 0.8503262048913669;
        sec_212.add(secretholder_1);

        // secretwrap_1
        const secretwrap_1 = this.add.image(768, 436, "stagecat", "secretwrap");
        sec_212.add(secretwrap_1);

        // secrettext_1
        const secrettext_1 = this.add.image(654, 232, "stagecat", "secrettext");
        secrettext_1.scaleX = 0.42972712117801115;
        secrettext_1.scaleY = 0.42972712117801115;
        sec_212.add(secrettext_1);

        // exit_3
        const exit_3 = this.add.image(1024, 192, "stagecat", "exit");
        sec_212.add(exit_3);

        // sec_grass
        const sec_grass = this.add.image(690, 461, "stagecat", "sec_grass");
        sec_grass.scaleX = 0.5543387005511051;
        sec_grass.scaleY = 0.5543387005511051;
        sec_212.add(sec_grass);

        // buyBtn_212
        const buyBtn_212 = this.add.sprite(891, 356, "stagecat", "tag");
        sec_212.add(buyBtn_212);

        // priceNum_212
        const priceNum_212 = this.add.text(896, 356, "", {});
        priceNum_212.setOrigin(0.5, 0.5);
        priceNum_212.text = "350";
        priceNum_212.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_212.add(priceNum_212);

        // nameTag_210
        const nameTag_210 = this.add.text(898, 319, "", {});
        nameTag_210.setOrigin(0.5, 0.5);
        nameTag_210.text = "Grass Skirt";
        nameTag_210.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_212.add(nameTag_210);

        // sec_skirt
        const sec_skirt = this.add.ellipse(972, 183, 128, 128);
        sec_skirt.scaleX = 0.6258735394714823;
        sec_skirt.scaleY = 0.6258735394714823;
        page5.add(sec_skirt);

        // nextpage5
        const nextpage5 = this.add.image(1378, 737, "stagecat", "nextpage");
        page5.add(nextpage5);

        // backpage5
        const backpage5 = this.add.image(138, 737, "stagecat", "backpage");
        page5.add(backpage5);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // page6body
        const page6body = this.add.image(760, 480, "stagecat", "page6body");
        page6.add(page6body);

        // buyBtn_676
        const buyBtn_676 = this.add.sprite(898, 256, "stagecat", "tag");
        page6.add(buyBtn_676);

        // priceNum_676
        const priceNum_676 = this.add.text(903, 256, "", {});
        priceNum_676.setOrigin(0.5, 0.5);
        priceNum_676.text = "450";
        priceNum_676.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page6.add(priceNum_676);

        // buyBtn_127
        const buyBtn_127 = this.add.sprite(268, 535, "stagecat", "tag");
        page6.add(buyBtn_127);

        // priceNum_127
        const priceNum_127 = this.add.text(273, 535, "", {});
        priceNum_127.setOrigin(0.5, 0.5);
        priceNum_127.text = "350";
        priceNum_127.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page6.add(priceNum_127);

        // buyBtn_128
        const buyBtn_128 = this.add.sprite(515, 734, "stagecat", "tag");
        page6.add(buyBtn_128);

        // priceNum_128
        const priceNum_128 = this.add.text(520, 734, "", {});
        priceNum_128.setOrigin(0.5, 0.5);
        priceNum_128.text = "350";
        priceNum_128.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page6.add(priceNum_128);

        // nextpage6
        const nextpage6 = this.add.image(1378, 737, "stagecat", "nextpage");
        page6.add(nextpage6);

        // backpage6
        const backpage6 = this.add.image(138, 737, "stagecat", "backpage");
        page6.add(backpage6);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page7body
        const page7body = this.add.image(760, 480, "stagecat", "page7body");
        page7.add(page7body);

        // buyBtn_665
        const buyBtn_665 = this.add.sprite(979, 254, "stagecat", "tag");
        page7.add(buyBtn_665);

        // priceNum_665
        const priceNum_665 = this.add.text(984, 254, "", {});
        priceNum_665.setOrigin(0.5, 0.5);
        priceNum_665.text = "450";
        priceNum_665.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_665);

        // buyBtn_786
        const buyBtn_786 = this.add.sprite(976, 522, "stagecat", "tag");
        page7.add(buyBtn_786);

        // priceNum_786
        const priceNum_786 = this.add.text(981, 522, "", {});
        priceNum_786.setOrigin(0.5, 0.5);
        priceNum_786.text = "350";
        priceNum_786.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_786);

        // buyBtn_787
        const buyBtn_787 = this.add.sprite(1226, 734, "stagecat", "tag");
        page7.add(buyBtn_787);

        // priceNum_787
        const priceNum_787 = this.add.text(1231, 734, "", {});
        priceNum_787.setOrigin(0.5, 0.5);
        priceNum_787.text = "350";
        priceNum_787.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_787);

        // buyBtn_316
        const buyBtn_316 = this.add.sprite(1226, 484, "stagecat", "tag");
        page7.add(buyBtn_316);

        // priceNum_316
        const priceNum_316 = this.add.text(1231, 484, "", {});
        priceNum_316.setOrigin(0.5, 0.5);
        priceNum_316.text = "350";
        priceNum_316.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_316);

        // buyBtn_432
        const buyBtn_432 = this.add.sprite(1226, 224, "stagecat", "tag");
        page7.add(buyBtn_432);

        // priceNum_432
        const priceNum_432 = this.add.text(1231, 224, "", {});
        priceNum_432.setOrigin(0.5, 0.5);
        priceNum_432.text = "350";
        priceNum_432.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_432);

        // buyBtn_327
        const buyBtn_327 = this.add.sprite(975, 715, "stagecat", "tag");
        page7.add(buyBtn_327);

        // priceNum_327
        const priceNum_327 = this.add.text(980, 715, "", {});
        priceNum_327.setOrigin(0.5, 0.5);
        priceNum_327.text = "350";
        priceNum_327.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page7.add(priceNum_327);

        // sec_716
        const sec_716 = this.add.container(0, 0);
        sec_716.visible = false;
        page7.add(sec_716);

        // block_crook
        const block_crook = this.add.rectangle(760, 480, 1520, 960);
        block_crook.isFilled = true;
        block_crook.fillColor = 0;
        block_crook.fillAlpha = 0.2;
        sec_716.add(block_crook);

        // secretholder_crook
        const secretholder_crook = this.add.image(769, 431, "stagecat", "secretholder");
        secretholder_crook.scaleX = 0.8503262048913669;
        secretholder_crook.scaleY = 0.8503262048913669;
        sec_716.add(secretholder_crook);

        // secretwrap_crook
        const secretwrap_crook = this.add.image(768, 436, "stagecat", "secretwrap");
        sec_716.add(secretwrap_crook);

        // secrettext_crook
        const secrettext_crook = this.add.image(654, 232, "stagecat", "secrettext");
        secrettext_crook.scaleX = 0.42972712117801115;
        secrettext_crook.scaleY = 0.42972712117801115;
        sec_716.add(secrettext_crook);

        // exit_crook
        const exit_crook = this.add.image(1024, 192, "stagecat", "exit");
        sec_716.add(exit_crook);

        // sec_crookflail
        const sec_crookflail = this.add.image(760, 411, "stagecat", "sec_crookflail");
        sec_crookflail.scaleX = 0.45;
        sec_crookflail.scaleY = 0.45;
        sec_crookflail.angle = 22;
        sec_716.add(sec_crookflail);

        // buyBtn_716
        const buyBtn_716 = this.add.sprite(763, 620, "stagecat", "tag");
        sec_716.add(buyBtn_716);

        // priceNum_716
        const priceNum_716 = this.add.text(768, 620, "", {});
        priceNum_716.setOrigin(0.5, 0.5);
        priceNum_716.text = "350";
        priceNum_716.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_716.add(priceNum_716);

        // nameTag_716
        const nameTag_716 = this.add.text(770, 583, "", {});
        nameTag_716.setOrigin(0.5, 0.5);
        nameTag_716.text = "Crook and Flail";
        nameTag_716.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_716.add(nameTag_716);

        // sec_crook
        const sec_crook = this.add.ellipse(260, 203, 128, 128);
        sec_crook.scaleX = 0.6258735394714823;
        sec_crook.scaleY = 0.6258735394714823;
        page7.add(sec_crook);

        // nextpage7
        const nextpage7 = this.add.image(1378, 737, "stagecat", "nextpage");
        page7.add(nextpage7);

        // backpage7
        const backpage7 = this.add.image(138, 737, "stagecat", "backpage");
        page7.add(backpage7);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // page8body
        const page8body = this.add.image(760, 480, "stagecat", "page8body");
        page8.add(page8body);

        // buyBtn_666
        const buyBtn_666 = this.add.sprite(1208, 291, "stagecat", "tag");
        page8.add(buyBtn_666);

        // priceNum_666
        const priceNum_666 = this.add.text(1213, 291, "", {});
        priceNum_666.setOrigin(0.5, 0.5);
        priceNum_666.text = "450";
        priceNum_666.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_666);

        // buyBtn_789
        const buyBtn_789 = this.add.sprite(950, 535, "stagecat", "tag");
        page8.add(buyBtn_789);

        // priceNum_789
        const priceNum_789 = this.add.text(955, 535, "", {});
        priceNum_789.setOrigin(0.5, 0.5);
        priceNum_789.text = "350";
        priceNum_789.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_789);

        // buyBtn_788
        const buyBtn_788 = this.add.sprite(1211, 543, "stagecat", "tag");
        page8.add(buyBtn_788);

        // priceNum_788
        const priceNum_788 = this.add.text(1216, 543, "", {});
        priceNum_788.setOrigin(0.5, 0.5);
        priceNum_788.text = "350";
        priceNum_788.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_788);

        // buyBtn_715
        const buyBtn_715 = this.add.sprite(1209, 732, "stagecat", "tag");
        page8.add(buyBtn_715);

        // priceNum_715
        const priceNum_715 = this.add.text(1214, 732, "", {});
        priceNum_715.setOrigin(0.5, 0.5);
        priceNum_715.text = "450";
        priceNum_715.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page8.add(priceNum_715);

        // nextpage8
        const nextpage8 = this.add.image(1378, 737, "stagecat", "nextpage");
        page8.add(nextpage8);

        // backpage8
        const backpage8 = this.add.image(138, 737, "stagecat", "backpage");
        page8.add(backpage8);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // page9body
        const page9body = this.add.image(760, 480, "stagecat", "page9body");
        page9.add(page9body);

        // buyBtn_123
        const buyBtn_123 = this.add.sprite(984, 277, "stagecat", "tag");
        page9.add(buyBtn_123);

        // priceNum_123
        const priceNum_123 = this.add.text(989, 277, "", {});
        priceNum_123.setOrigin(0.5, 0.5);
        priceNum_123.text = "450";
        priceNum_123.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_123);

        // buyBtn_302
        const buyBtn_302 = this.add.sprite(982, 480, "stagecat", "tag");
        page9.add(buyBtn_302);

        // priceNum_302
        const priceNum_302 = this.add.text(987, 480, "", {});
        priceNum_302.setOrigin(0.5, 0.5);
        priceNum_302.text = "350";
        priceNum_302.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_302);

        // buyBtn_315
        const buyBtn_315 = this.add.sprite(1231, 480, "stagecat", "tag");
        page9.add(buyBtn_315);

        // priceNum_315
        const priceNum_315 = this.add.text(1236, 480, "", {});
        priceNum_315.setOrigin(0.5, 0.5);
        priceNum_315.text = "350";
        priceNum_315.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_315);

        // buyBtn_124
        const buyBtn_124 = this.add.sprite(1229, 277, "stagecat", "tag");
        page9.add(buyBtn_124);

        // priceNum_124
        const priceNum_124 = this.add.text(1234, 277, "", {});
        priceNum_124.setOrigin(0.5, 0.5);
        priceNum_124.text = "450";
        priceNum_124.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_124);

        // buyBtn_765
        const buyBtn_765 = this.add.sprite(987, 701, "stagecat", "tag");
        page9.add(buyBtn_765);

        // priceNum_765
        const priceNum_765 = this.add.text(992, 701, "", {});
        priceNum_765.setOrigin(0.5, 0.5);
        priceNum_765.text = "450";
        priceNum_765.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_765);

        // buyBtn_766
        const buyBtn_766 = this.add.sprite(1240, 701, "stagecat", "tag");
        page9.add(buyBtn_766);

        // priceNum_766
        const priceNum_766 = this.add.text(1245, 701, "", {});
        priceNum_766.setOrigin(0.5, 0.5);
        priceNum_766.text = "450";
        priceNum_766.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page9.add(priceNum_766);

        // nextpage9
        const nextpage9 = this.add.image(1378, 737, "stagecat", "nextpage");
        page9.add(nextpage9);

        // backpage9
        const backpage9 = this.add.image(138, 737, "stagecat", "backpage");
        page9.add(backpage9);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // page10body
        const page10body = this.add.image(760, 480, "stagecat", "page10body");
        page10.add(page10body);

        // buyBtn_767
        const buyBtn_767 = this.add.sprite(980, 451, "stagecat", "tag");
        page10.add(buyBtn_767);

        // priceNum_767
        const priceNum_767 = this.add.text(985, 451, "", {});
        priceNum_767.setOrigin(0.5, 0.5);
        priceNum_767.text = "350";
        priceNum_767.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_767);

        // buyBtn_195
        const buyBtn_195 = this.add.sprite(1242, 504, "stagecat", "tag");
        page10.add(buyBtn_195);

        // priceNum_195
        const priceNum_195 = this.add.text(1247, 504, "", {});
        priceNum_195.setOrigin(0.5, 0.5);
        priceNum_195.text = "350";
        priceNum_195.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_195);

        // buyBtn_113
        const buyBtn_113 = this.add.sprite(1246, 258, "stagecat", "tag");
        page10.add(buyBtn_113);

        // priceNum_113
        const priceNum_113 = this.add.text(1251, 258, "", {});
        priceNum_113.setOrigin(0.5, 0.5);
        priceNum_113.text = "450";
        priceNum_113.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page10.add(priceNum_113);

        // nextpage10
        const nextpage10 = this.add.image(1378, 737, "stagecat", "nextpage");
        page10.add(nextpage10);

        // backpage10
        const backpage10 = this.add.image(138, 737, "stagecat", "backpage");
        page10.add(backpage10);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // page11body
        const page11body = this.add.image(760, 480, "stagecat", "page11body");
        page11.add(page11body);

        // buyBtn_4457
        const buyBtn_4457 = this.add.sprite(984, 309, "stagecat", "tag");
        page11.add(buyBtn_4457);

        // priceNum_4457
        const priceNum_4457 = this.add.text(989, 309, "", {});
        priceNum_4457.setOrigin(0.5, 0.5);
        priceNum_4457.text = "450";
        priceNum_4457.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_4457);

        // buyBtn_6096
        const buyBtn_6096 = this.add.sprite(982, 462, "stagecat", "tag");
        page11.add(buyBtn_6096);

        // priceNum_6096
        const priceNum_6096 = this.add.text(987, 462, "", {});
        priceNum_6096.setOrigin(0.5, 0.5);
        priceNum_6096.text = "350";
        priceNum_6096.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_6096);

        // buyBtn_4456
        const buyBtn_4456 = this.add.sprite(1251, 476, "stagecat", "tag");
        page11.add(buyBtn_4456);

        // priceNum_4456
        const priceNum_4456 = this.add.text(1256, 476, "", {});
        priceNum_4456.setOrigin(0.5, 0.5);
        priceNum_4456.text = "350";
        priceNum_4456.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_4456);

        // buyBtn_4455
        const buyBtn_4455 = this.add.sprite(987, 771, "stagecat", "tag");
        page11.add(buyBtn_4455);

        // priceNum_4455
        const priceNum_4455 = this.add.text(992, 771, "", {});
        priceNum_4455.setOrigin(0.5, 0.5);
        priceNum_4455.text = "450";
        priceNum_4455.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_4455);

        // buyBtn_6095
        const buyBtn_6095 = this.add.sprite(1250, 643, "stagecat", "tag");
        page11.add(buyBtn_6095);

        // priceNum_6095
        const priceNum_6095 = this.add.text(1255, 643, "", {});
        priceNum_6095.setOrigin(0.5, 0.5);
        priceNum_6095.text = "450";
        priceNum_6095.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page11.add(priceNum_6095);

        // nextpage11
        const nextpage11 = this.add.image(1378, 737, "stagecat", "nextpage");
        page11.add(nextpage11);

        // backpage11
        const backpage11 = this.add.image(138, 737, "stagecat", "backpage");
        page11.add(backpage11);

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // page12body
        const page12body = this.add.image(760, 480, "stagecat", "page12body");
        page12.add(page12body);

        // buyBtn_132
        const buyBtn_132 = this.add.sprite(972, 259, "stagecat", "tag");
        page12.add(buyBtn_132);

        // priceNum_132
        const priceNum_132 = this.add.text(977, 259, "", {});
        priceNum_132.setOrigin(0.5, 0.5);
        priceNum_132.text = "450";
        priceNum_132.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_132);

        // buyBtn_4113
        const buyBtn_4113 = this.add.sprite(973, 530, "stagecat", "tag");
        page12.add(buyBtn_4113);

        // priceNum_4113
        const priceNum_4113 = this.add.text(978, 530, "", {});
        priceNum_4113.setOrigin(0.5, 0.5);
        priceNum_4113.text = "350";
        priceNum_4113.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_4113);

        // buyBtn_4114
        const buyBtn_4114 = this.add.sprite(1224, 530, "stagecat", "tag");
        page12.add(buyBtn_4114);

        // priceNum_4114
        const priceNum_4114 = this.add.text(1229, 530, "", {});
        priceNum_4114.setOrigin(0.5, 0.5);
        priceNum_4114.text = "350";
        priceNum_4114.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_4114);

        // buyBtn_2003
        const buyBtn_2003 = this.add.sprite(1217, 259, "stagecat", "tag");
        page12.add(buyBtn_2003);

        // priceNum_2003
        const priceNum_2003 = this.add.text(1222, 259, "", {});
        priceNum_2003.setOrigin(0.5, 0.5);
        priceNum_2003.text = "450";
        priceNum_2003.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_2003);

        // buyBtn_364
        const buyBtn_364 = this.add.sprite(971, 731, "stagecat", "tag");
        page12.add(buyBtn_364);

        // priceNum_364
        const priceNum_364 = this.add.text(976, 731, "", {});
        priceNum_364.setOrigin(0.5, 0.5);
        priceNum_364.text = "450";
        priceNum_364.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_364);

        // buyBtn_367
        const buyBtn_367 = this.add.sprite(1224, 731, "stagecat", "tag");
        page12.add(buyBtn_367);

        // priceNum_367
        const priceNum_367 = this.add.text(1229, 731, "", {});
        priceNum_367.setOrigin(0.5, 0.5);
        priceNum_367.text = "450";
        priceNum_367.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_367);

        // buyBtn_308
        const buyBtn_308 = this.add.sprite(585, 253, "stagecat", "tag");
        page12.add(buyBtn_308);

        // priceNum_308
        const priceNum_308 = this.add.text(590, 253, "", {});
        priceNum_308.setOrigin(0.5, 0.5);
        priceNum_308.text = "450";
        priceNum_308.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page12.add(priceNum_308);

        // nextpage12
        const nextpage12 = this.add.image(1378, 737, "stagecat", "nextpage");
        page12.add(nextpage12);

        // backpage12
        const backpage12 = this.add.image(138, 737, "stagecat", "backpage");
        page12.add(backpage12);

        // page13
        const page13 = this.add.container(0, 0);
        page13.visible = false;

        // page13body
        const page13body = this.add.image(760, 480, "stagecat", "page13body");
        page13.add(page13body);

        // buyBtn_768
        const buyBtn_768 = this.add.sprite(201, 612, "stagecat", "tag");
        page13.add(buyBtn_768);

        // priceNum_768
        const priceNum_768 = this.add.text(206, 612, "", {});
        priceNum_768.setOrigin(0.5, 0.5);
        priceNum_768.text = "450";
        priceNum_768.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page13.add(priceNum_768);

        // buyBtn_3029
        const buyBtn_3029 = this.add.sprite(610, 360, "stagecat", "tag");
        page13.add(buyBtn_3029);

        // priceNum_3029
        const priceNum_3029 = this.add.text(615, 360, "", {});
        priceNum_3029.setOrigin(0.5, 0.5);
        priceNum_3029.text = "350";
        priceNum_3029.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page13.add(priceNum_3029);

        // buyBtn_5044
        const buyBtn_5044 = this.add.sprite(612, 538, "stagecat", "tag");
        page13.add(buyBtn_5044);

        // priceNum_5044
        const priceNum_5044 = this.add.text(617, 538, "", {});
        priceNum_5044.setOrigin(0.5, 0.5);
        priceNum_5044.text = "350";
        priceNum_5044.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page13.add(priceNum_5044);

        // buyBtn_1077
        const buyBtn_1077 = this.add.sprite(418, 516, "stagecat", "tag");
        page13.add(buyBtn_1077);

        // priceNum_1077
        const priceNum_1077 = this.add.text(423, 516, "", {});
        priceNum_1077.setOrigin(0.5, 0.5);
        priceNum_1077.text = "450";
        priceNum_1077.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page13.add(priceNum_1077);

        // buyBtn_4110
        const buyBtn_4110 = this.add.sprite(412, 733, "stagecat", "tag");
        page13.add(buyBtn_4110);

        // priceNum_4110
        const priceNum_4110 = this.add.text(417, 733, "", {});
        priceNum_4110.setOrigin(0.5, 0.5);
        priceNum_4110.text = "450";
        priceNum_4110.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page13.add(priceNum_4110);

        // buyBtn_1076
        const buyBtn_1076 = this.add.sprite(202, 371, "stagecat", "tag");
        page13.add(buyBtn_1076);

        // priceNum_1076
        const priceNum_1076 = this.add.text(207, 371, "", {});
        priceNum_1076.setOrigin(0.5, 0.5);
        priceNum_1076.text = "450";
        priceNum_1076.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page13.add(priceNum_1076);

        // nextpage13
        const nextpage13 = this.add.image(1378, 737, "stagecat", "nextpage");
        page13.add(nextpage13);

        // backpage13
        const backpage13 = this.add.image(138, 737, "stagecat", "backpage");
        page13.add(backpage13);

        // page14
        const page14 = this.add.container(0, 0);
        page14.visible = false;

        // page14body
        const page14body = this.add.image(760, 480, "stagecat", "page14body");
        page14.add(page14body);

        // buyBtn_4111
        const buyBtn_4111 = this.add.sprite(534, 548, "stagecat", "tag");
        page14.add(buyBtn_4111);

        // priceNum_4111
        const priceNum_4111 = this.add.text(539, 548, "", {});
        priceNum_4111.setOrigin(0.5, 0.5);
        priceNum_4111.text = "450";
        priceNum_4111.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page14.add(priceNum_4111);

        // buyBtn_4112
        const buyBtn_4112 = this.add.sprite(253, 548, "stagecat", "tag");
        page14.add(buyBtn_4112);

        // priceNum_4112
        const priceNum_4112 = this.add.text(258, 548, "", {});
        priceNum_4112.setOrigin(0.5, 0.5);
        priceNum_4112.text = "450";
        priceNum_4112.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page14.add(priceNum_4112);

        // nextpage14
        const nextpage14 = this.add.image(1378, 737, "stagecat", "nextpage");
        page14.add(nextpage14);

        // backpage14
        const backpage14 = this.add.image(138, 737, "stagecat", "backpage");
        page14.add(backpage14);

        // page15
        const page15 = this.add.container(0, 0);
        page15.visible = false;

        // page15body
        const page15body = this.add.image(760, 480, "stagecat", "page15body");
        page15.add(page15body);

        // buyBtn_1057
        const buyBtn_1057 = this.add.sprite(528, 446, "stagecat", "tag");
        page15.add(buyBtn_1057);

        // priceNum_1057
        const priceNum_1057 = this.add.text(533, 446, "", {});
        priceNum_1057.setOrigin(0.5, 0.5);
        priceNum_1057.text = "350";
        priceNum_1057.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page15.add(priceNum_1057);

        // buyBtn_4085
        const buyBtn_4085 = this.add.sprite(528, 708, "stagecat", "tag");
        page15.add(buyBtn_4085);

        // priceNum_4085
        const priceNum_4085 = this.add.text(533, 708, "", {});
        priceNum_4085.setOrigin(0.5, 0.5);
        priceNum_4085.text = "350";
        priceNum_4085.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page15.add(priceNum_4085);

        // buyBtn_4086
        const buyBtn_4086 = this.add.sprite(288, 708, "stagecat", "tag");
        page15.add(buyBtn_4086);

        // priceNum_4086
        const priceNum_4086 = this.add.text(293, 708, "", {});
        priceNum_4086.setOrigin(0.5, 0.5);
        priceNum_4086.text = "450";
        priceNum_4086.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page15.add(priceNum_4086);

        // buyBtn_1056
        const buyBtn_1056 = this.add.sprite(284, 446, "stagecat", "tag");
        page15.add(buyBtn_1056);

        // priceNum_1056
        const priceNum_1056 = this.add.text(289, 446, "", {});
        priceNum_1056.setOrigin(0.5, 0.5);
        priceNum_1056.text = "450";
        priceNum_1056.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page15.add(priceNum_1056);

        // nextpage15
        const nextpage15 = this.add.image(1378, 737, "stagecat", "nextpage");
        page15.add(nextpage15);

        // backpage15
        const backpage15 = this.add.image(138, 737, "stagecat", "backpage");
        page15.add(backpage15);

        // page16
        const page16 = this.add.container(0, 0);
        page16.visible = false;

        // page16body
        const page16body = this.add.image(760, 480, "stagecat", "page16body");
        page16.add(page16body);

        // buyBtn_4015
        const buyBtn_4015 = this.add.sprite(1103, 440, "stagecat", "tag");
        page16.add(buyBtn_4015);

        // priceNum_4015
        const priceNum_4015 = this.add.text(1108, 440, "", {});
        priceNum_4015.setOrigin(0.5, 0.5);
        priceNum_4015.text = "350";
        priceNum_4015.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page16.add(priceNum_4015);

        // buyBtn_347
        const buyBtn_347 = this.add.sprite(1105, 630, "stagecat", "tag");
        page16.add(buyBtn_347);

        // priceNum_347
        const priceNum_347 = this.add.text(1110, 630, "", {});
        priceNum_347.setOrigin(0.5, 0.5);
        priceNum_347.text = "350";
        priceNum_347.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page16.add(priceNum_347);

        // buyBtn_244
        const buyBtn_244 = this.add.sprite(622, 300, "stagecat", "tag");
        page16.add(buyBtn_244);

        // priceNum_244
        const priceNum_244 = this.add.text(627, 300, "", {});
        priceNum_244.setOrigin(0.5, 0.5);
        priceNum_244.text = "Collect";
        priceNum_244.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page16.add(priceNum_244);

        // nextpage16
        const nextpage16 = this.add.image(1378, 737, "stagecat", "nextpage");
        page16.add(nextpage16);

        // backpage16
        const backpage16 = this.add.image(138, 737, "stagecat", "backpage");
        page16.add(backpage16);

        // page17
        const page17 = this.add.container(0, 0);
        page17.visible = false;

        // page17body
        const page17body = this.add.image(760, 480, "stagecat", "page17body");
        page17.add(page17body);

        // buyBtn_1010
        const buyBtn_1010 = this.add.sprite(951, 263, "stagecat", "tag");
        page17.add(buyBtn_1010);

        // priceNum_1010
        const priceNum_1010 = this.add.text(956, 263, "", {});
        priceNum_1010.setOrigin(0.5, 0.5);
        priceNum_1010.text = "450";
        priceNum_1010.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page17.add(priceNum_1010);

        // buyBtn_181
        const buyBtn_181 = this.add.sprite(952, 473, "stagecat", "tag");
        page17.add(buyBtn_181);

        // priceNum_181
        const priceNum_181 = this.add.text(957, 473, "", {});
        priceNum_181.setOrigin(0.5, 0.5);
        priceNum_181.text = "350";
        priceNum_181.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page17.add(priceNum_181);

        // buyBtn_4012
        const buyBtn_4012 = this.add.sprite(1221, 494, "stagecat", "tag");
        page17.add(buyBtn_4012);

        // priceNum_4012
        const priceNum_4012 = this.add.text(1226, 494, "", {});
        priceNum_4012.setOrigin(0.5, 0.5);
        priceNum_4012.text = "350";
        priceNum_4012.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page17.add(priceNum_4012);

        // buyBtn_1009
        const buyBtn_1009 = this.add.sprite(1224, 260, "stagecat", "tag");
        page17.add(buyBtn_1009);

        // priceNum_1009
        const priceNum_1009 = this.add.text(1229, 260, "", {});
        priceNum_1009.setOrigin(0.5, 0.5);
        priceNum_1009.text = "450";
        priceNum_1009.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page17.add(priceNum_1009);

        // buyBtn_842
        const buyBtn_842 = this.add.sprite(943, 732, "stagecat", "tag");
        page17.add(buyBtn_842);

        // priceNum_842
        const priceNum_842 = this.add.text(948, 732, "", {});
        priceNum_842.setOrigin(0.5, 0.5);
        priceNum_842.text = "450";
        priceNum_842.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page17.add(priceNum_842);

        // buyBtn_5003
        const buyBtn_5003 = this.add.sprite(1224, 731, "stagecat", "tag");
        page17.add(buyBtn_5003);

        // priceNum_5003
        const priceNum_5003 = this.add.text(1229, 731, "", {});
        priceNum_5003.setOrigin(0.5, 0.5);
        priceNum_5003.text = "450";
        priceNum_5003.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page17.add(priceNum_5003);

        // nextpage17
        const nextpage17 = this.add.image(1378, 737, "stagecat", "nextpage");
        page17.add(nextpage17);

        // backpage17
        const backpage17 = this.add.image(138, 737, "stagecat", "backpage");
        page17.add(backpage17);

        // page18
        const page18 = this.add.container(0, 0);
        page18.visible = false;

        // page18body
        const page18body = this.add.image(760, 480, "stagecat", "page18body");
        page18.add(page18body);

        // buyBtn_1012
        const buyBtn_1012 = this.add.sprite(250, 324, "stagecat", "tag");
        page18.add(buyBtn_1012);

        // priceNum_1012
        const priceNum_1012 = this.add.text(255, 324, "", {});
        priceNum_1012.setOrigin(0.5, 0.5);
        priceNum_1012.text = "450";
        priceNum_1012.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page18.add(priceNum_1012);

        // buyBtn_3005
        const buyBtn_3005 = this.add.sprite(546, 502, "stagecat", "tag");
        page18.add(buyBtn_3005);

        // priceNum_3005
        const priceNum_3005 = this.add.text(551, 502, "", {});
        priceNum_3005.setOrigin(0.5, 0.5);
        priceNum_3005.text = "350";
        priceNum_3005.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page18.add(priceNum_3005);

        // buyBtn_4014
        const buyBtn_4014 = this.add.sprite(249, 558, "stagecat", "tag");
        page18.add(buyBtn_4014);

        // priceNum_4014
        const priceNum_4014 = this.add.text(254, 559, "", {});
        priceNum_4014.setOrigin(0.5, 0.5);
        priceNum_4014.text = "350";
        priceNum_4014.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page18.add(priceNum_4014);

        // buyBtn_1011
        const buyBtn_1011 = this.add.sprite(547, 314, "stagecat", "tag");
        page18.add(buyBtn_1011);

        // priceNum_1011
        const priceNum_1011 = this.add.text(552, 314, "", {});
        priceNum_1011.setOrigin(0.5, 0.5);
        priceNum_1011.text = "450";
        priceNum_1011.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page18.add(priceNum_1011);

        // buyBtn_6008
        const buyBtn_6008 = this.add.sprite(246, 739, "stagecat", "tag");
        page18.add(buyBtn_6008);

        // priceNum_6008
        const priceNum_6008 = this.add.text(251, 739, "", {});
        priceNum_6008.setOrigin(0.5, 0.5);
        priceNum_6008.text = "450";
        priceNum_6008.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page18.add(priceNum_6008);

        // buyBtn_4013
        const buyBtn_4013 = this.add.sprite(540, 743, "stagecat", "tag");
        page18.add(buyBtn_4013);

        // priceNum_4013
        const priceNum_4013 = this.add.text(545, 743, "", {});
        priceNum_4013.setOrigin(0.5, 0.5);
        priceNum_4013.text = "450";
        priceNum_4013.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page18.add(priceNum_4013);

        // nextpage18
        const nextpage18 = this.add.image(1378, 737, "stagecat", "nextpage");
        page18.add(nextpage18);

        // backpage18
        const backpage18 = this.add.image(138, 737, "stagecat", "backpage");
        page18.add(backpage18);

        // page19
        const page19 = this.add.container(0, 0);
        page19.visible = false;

        // page19body
        const page19body = this.add.image(760, 480, "stagecat", "page19body");
        page19.add(page19body);

        // buyBtn_1025
        const buyBtn_1025 = this.add.sprite(978, 259, "stagecat", "tag");
        page19.add(buyBtn_1025);

        // priceNum_1025
        const priceNum_1025 = this.add.text(983, 259, "", {});
        priceNum_1025.setOrigin(0.5, 0.5);
        priceNum_1025.text = "450";
        priceNum_1025.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page19.add(priceNum_1025);

        // buyBtn_4038
        const buyBtn_4038 = this.add.sprite(977, 515, "stagecat", "tag");
        page19.add(buyBtn_4038);

        // priceNum_4038
        const priceNum_4038 = this.add.text(982, 515, "", {});
        priceNum_4038.setOrigin(0.5, 0.5);
        priceNum_4038.text = "350";
        priceNum_4038.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page19.add(priceNum_4038);

        // buyBtn_4036
        const buyBtn_4036 = this.add.sprite(1236, 519, "stagecat", "tag");
        page19.add(buyBtn_4036);

        // priceNum_4036
        const priceNum_4036 = this.add.text(1241, 519, "", {});
        priceNum_4036.setOrigin(0.5, 0.5);
        priceNum_4036.text = "350";
        priceNum_4036.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page19.add(priceNum_4036);

        // buyBtn_1023
        const buyBtn_1023 = this.add.sprite(1242, 260, "stagecat", "tag");
        page19.add(buyBtn_1023);

        // priceNum_1023
        const priceNum_1023 = this.add.text(1247, 260, "", {});
        priceNum_1023.setOrigin(0.5, 0.5);
        priceNum_1023.text = "450";
        priceNum_1023.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page19.add(priceNum_1023);

        // buyBtn_3008
        const buyBtn_3008 = this.add.sprite(974, 738, "stagecat", "tag");
        page19.add(buyBtn_3008);

        // priceNum_3008
        const priceNum_3008 = this.add.text(979, 738, "", {});
        priceNum_3008.setOrigin(0.5, 0.5);
        priceNum_3008.text = "450";
        priceNum_3008.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page19.add(priceNum_3008);

        // buyBtn_301
        const buyBtn_301 = this.add.sprite(1236, 740, "stagecat", "tag");
        page19.add(buyBtn_301);

        // priceNum_301
        const priceNum_301 = this.add.text(1241, 740, "", {});
        priceNum_301.setOrigin(0.5, 0.5);
        priceNum_301.text = "450";
        priceNum_301.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page19.add(priceNum_301);

        // nextpage19
        const nextpage19 = this.add.image(1378, 737, "stagecat", "nextpage");
        page19.add(nextpage19);

        // backpage19
        const backpage19 = this.add.image(138, 737, "stagecat", "backpage");
        page19.add(backpage19);

        // page20
        const page20 = this.add.container(0, 0);
        page20.visible = false;

        // page20body
        const page20body = this.add.image(760, 480, "stagecat", "page20body");
        page20.add(page20body);

        // buyBtn_4039
        const buyBtn_4039 = this.add.sprite(942, 458, "stagecat", "tag");
        page20.add(buyBtn_4039);

        // priceNum_4039
        const priceNum_4039 = this.add.text(947, 458, "", {});
        priceNum_4039.setOrigin(0.5, 0.5);
        priceNum_4039.text = "450";
        priceNum_4039.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page20.add(priceNum_4039);

        // buyBtn_6010
        const buyBtn_6010 = this.add.sprite(944, 632, "stagecat", "tag");
        page20.add(buyBtn_6010);

        // priceNum_6010
        const priceNum_6010 = this.add.text(949, 632, "", {});
        priceNum_6010.setOrigin(0.5, 0.5);
        priceNum_6010.text = "350";
        priceNum_6010.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page20.add(priceNum_6010);

        // buyBtn_4037
        const buyBtn_4037 = this.add.sprite(1216, 655, "stagecat", "tag");
        page20.add(buyBtn_4037);

        // priceNum_4037
        const priceNum_4037 = this.add.text(1221, 655, "", {});
        priceNum_4037.setOrigin(0.5, 0.5);
        priceNum_4037.text = "350";
        priceNum_4037.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page20.add(priceNum_4037);

        // buyBtn_1024
        const buyBtn_1024 = this.add.sprite(1213, 312, "stagecat", "tag");
        page20.add(buyBtn_1024);

        // priceNum_1024
        const priceNum_1024 = this.add.text(1218, 312, "", {});
        priceNum_1024.setOrigin(0.5, 0.5);
        priceNum_1024.text = "450";
        priceNum_1024.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page20.add(priceNum_1024);

        // nextpage20
        const nextpage20 = this.add.image(1378, 737, "stagecat", "nextpage");
        page20.add(nextpage20);

        // backpage20
        const backpage20 = this.add.image(138, 737, "stagecat", "backpage");
        page20.add(backpage20);

        // page21
        const page21 = this.add.container(0, 0);
        page21.visible = false;

        // page21body
        const page21body = this.add.image(760, 480, "stagecat", "page21body");
        page21.add(page21body);

        // buyBtn_1015
        const buyBtn_1015 = this.add.sprite(990, 357, "stagecat", "tag");
        page21.add(buyBtn_1015);

        // priceNum_1015
        const priceNum_1015 = this.add.text(995, 357, "", {});
        priceNum_1015.setOrigin(0.5, 0.5);
        priceNum_1015.text = "450";
        priceNum_1015.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page21.add(priceNum_1015);

        // buyBtn_4018
        const buyBtn_4018 = this.add.sprite(985, 599, "stagecat", "tag");
        page21.add(buyBtn_4018);

        // priceNum_4018
        const priceNum_4018 = this.add.text(990, 599, "", {});
        priceNum_4018.setOrigin(0.5, 0.5);
        priceNum_4018.text = "350";
        priceNum_4018.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page21.add(priceNum_4018);

        // buyBtn_4426
        const buyBtn_4426 = this.add.sprite(1220, 504, "stagecat", "tag");
        page21.add(buyBtn_4426);

        // priceNum_4426
        const priceNum_4426 = this.add.text(1225, 504, "", {});
        priceNum_4426.setOrigin(0.5, 0.5);
        priceNum_4426.text = "450";
        priceNum_4426.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page21.add(priceNum_4426);

        // nextpage21
        const nextpage21 = this.add.image(1378, 737, "stagecat", "nextpage");
        page21.add(nextpage21);

        // backpage21
        const backpage21 = this.add.image(138, 737, "stagecat", "backpage");
        page21.add(backpage21);

        // page22
        const page22 = this.add.container(0, 0);
        page22.visible = false;

        // page22body
        const page22body = this.add.image(760, 480, "stagecat", "page22body");
        page22.add(page22body);

        // buyBtn_479
        const buyBtn_479 = this.add.sprite(972, 282, "stagecat", "tag");
        page22.add(buyBtn_479);

        // priceNum_479
        const priceNum_479 = this.add.text(977, 282, "", {});
        priceNum_479.setOrigin(0.5, 0.5);
        priceNum_479.text = "450";
        priceNum_479.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page22.add(priceNum_479);

        // buyBtn_658
        const buyBtn_658 = this.add.sprite(967, 515, "stagecat", "tag");
        page22.add(buyBtn_658);

        // priceNum_658
        const priceNum_658 = this.add.text(972, 515, "", {});
        priceNum_658.setOrigin(0.5, 0.5);
        priceNum_658.text = "350";
        priceNum_658.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page22.add(priceNum_658);

        // buyBtn_254
        const buyBtn_254 = this.add.sprite(1236, 519, "stagecat", "tag");
        page22.add(buyBtn_254);

        // priceNum_254
        const priceNum_254 = this.add.text(1241, 519, "", {});
        priceNum_254.setOrigin(0.5, 0.5);
        priceNum_254.text = "350";
        priceNum_254.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page22.add(priceNum_254);

        // buyBtn_771
        const buyBtn_771 = this.add.sprite(1237, 284, "stagecat", "tag");
        page22.add(buyBtn_771);

        // priceNum_771
        const priceNum_771 = this.add.text(1242, 284, "", {});
        priceNum_771.setOrigin(0.5, 0.5);
        priceNum_771.text = "450";
        priceNum_771.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page22.add(priceNum_771);

        // buyBtn_110
        const buyBtn_110 = this.add.sprite(969, 738, "stagecat", "tag");
        page22.add(buyBtn_110);

        // priceNum_110
        const priceNum_110 = this.add.text(974, 738, "", {});
        priceNum_110.setOrigin(0.5, 0.5);
        priceNum_110.text = "450";
        priceNum_110.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page22.add(priceNum_110);

        // buyBtn_4004
        const buyBtn_4004 = this.add.sprite(1234, 737, "stagecat", "tag");
        page22.add(buyBtn_4004);

        // priceNum_4004
        const priceNum_4004 = this.add.text(1239, 737, "", {});
        priceNum_4004.setOrigin(0.5, 0.5);
        priceNum_4004.text = "450";
        priceNum_4004.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page22.add(priceNum_4004);

        // nextpage22
        const nextpage22 = this.add.image(1378, 737, "stagecat", "nextpage");
        page22.add(nextpage22);

        // backpage22
        const backpage22 = this.add.image(138, 737, "stagecat", "backpage");
        page22.add(backpage22);

        // page23
        const page23 = this.add.container(0, 0);
        page23.visible = false;

        // page23body
        const page23body = this.add.image(760, 480, "stagecat", "page23body");
        page23.add(page23body);

        // buyBtn_722
        const buyBtn_722 = this.add.sprite(267, 364, "stagecat", "tag");
        page23.add(buyBtn_722);

        // priceNum_722
        const priceNum_722 = this.add.text(272, 364, "", {});
        priceNum_722.setOrigin(0.5, 0.5);
        priceNum_722.text = "450";
        priceNum_722.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page23.add(priceNum_722);

        // buyBtn_3002
        const buyBtn_3002 = this.add.sprite(271, 596, "stagecat", "tag");
        page23.add(buyBtn_3002);

        // priceNum_3002
        const priceNum_3002 = this.add.text(276, 596, "", {});
        priceNum_3002.setOrigin(0.5, 0.5);
        priceNum_3002.text = "350";
        priceNum_3002.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page23.add(priceNum_3002);

        // buyBtn_772
        const buyBtn_772 = this.add.sprite(507, 700, "stagecat", "tag");
        page23.add(buyBtn_772);

        // priceNum_772
        const priceNum_772 = this.add.text(512, 700, "", {});
        priceNum_772.setOrigin(0.5, 0.5);
        priceNum_772.text = "350";
        priceNum_772.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page23.add(priceNum_772);

        // buyBtn_659
        const buyBtn_659 = this.add.sprite(512, 416, "stagecat", "tag");
        page23.add(buyBtn_659);

        // priceNum_659
        const priceNum_659 = this.add.text(517, 416, "", {});
        priceNum_659.setOrigin(0.5, 0.5);
        priceNum_659.text = "450";
        priceNum_659.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page23.add(priceNum_659);

        // nextpage23
        const nextpage23 = this.add.image(1378, 737, "stagecat", "nextpage");
        page23.add(nextpage23);

        // backpage23
        const backpage23 = this.add.image(138, 737, "stagecat", "backpage");
        page23.add(backpage23);

        // page24
        const page24 = this.add.container(0, 0);
        page24.visible = false;

        // page24body
        const page24body = this.add.image(760, 480, "stagecat", "page24body");
        page24.add(page24body);

        // nextpage24
        const nextpage24 = this.add.image(1378, 737, "stagecat", "nextpage");
        page24.add(nextpage24);

        // backpage24
        const backpage24 = this.add.image(138, 737, "stagecat", "backpage");
        page24.add(backpage24);

        // page25
        const page25 = this.add.container(0, 0);
        page25.visible = false;

        // page25body
        const page25body = this.add.image(760, 480, "stagecat", "page25body");
        page25.add(page25body);

        // buyBtn_122
        const buyBtn_122 = this.add.sprite(945, 277, "stagecat", "tag");
        page25.add(buyBtn_122);

        // priceNum_122
        const priceNum_122 = this.add.text(950, 277, "", {});
        priceNum_122.setOrigin(0.5, 0.5);
        priceNum_122.text = "450";
        priceNum_122.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_122);

        // buyBtn_276
        const buyBtn_276 = this.add.sprite(943, 501, "stagecat", "tag");
        page25.add(buyBtn_276);

        // priceNum_276
        const priceNum_276 = this.add.text(948, 501, "", {});
        priceNum_276.setOrigin(0.5, 0.5);
        priceNum_276.text = "350";
        priceNum_276.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_276);

        // buyBtn_2004
        const buyBtn_2004 = this.add.sprite(1225, 507, "stagecat", "tag");
        page25.add(buyBtn_2004);

        // priceNum_2004
        const priceNum_2004 = this.add.text(1230, 507, "", {});
        priceNum_2004.setOrigin(0.5, 0.5);
        priceNum_2004.text = "350";
        priceNum_2004.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_2004);

        // buyBtn_1016
        const buyBtn_1016 = this.add.sprite(1225, 292, "stagecat", "tag");
        page25.add(buyBtn_1016);

        // priceNum_1016
        const priceNum_1016 = this.add.text(1230, 292, "", {});
        priceNum_1016.setOrigin(0.5, 0.5);
        priceNum_1016.text = "450";
        priceNum_1016.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_1016);

        // buyBtn_266
        const buyBtn_266 = this.add.sprite(945, 748, "stagecat", "tag");
        page25.add(buyBtn_266);

        // priceNum_266
        const priceNum_266 = this.add.text(950, 748, "", {});
        priceNum_266.setOrigin(0.5, 0.5);
        priceNum_266.text = "450";
        priceNum_266.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_266);

        // buyBtn_4021
        const buyBtn_4021 = this.add.sprite(1224, 745, "stagecat", "tag");
        page25.add(buyBtn_4021);

        // priceNum_4021
        const priceNum_4021 = this.add.text(1229, 745, "", {});
        priceNum_4021.setOrigin(0.5, 0.5);
        priceNum_4021.text = "450";
        priceNum_4021.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_4021);

        // buyBtn_1199
        const buyBtn_1199 = this.add.sprite(255, 321, "stagecat", "tag");
        page25.add(buyBtn_1199);

        // priceNum_1199
        const priceNum_1199 = this.add.text(260, 321, "", {});
        priceNum_1199.setOrigin(0.5, 0.5);
        priceNum_1199.text = "450";
        priceNum_1199.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_1199);

        // buyBtn_120
        const buyBtn_120 = this.add.sprite(534, 746, "stagecat", "tag");
        page25.add(buyBtn_120);

        // priceNum_120
        const priceNum_120 = this.add.text(539, 746, "", {});
        priceNum_120.setOrigin(0.5, 0.5);
        priceNum_120.text = "450";
        priceNum_120.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_120);

        // buyBtn_245
        const buyBtn_245 = this.add.sprite(252, 766, "stagecat", "tag");
        page25.add(buyBtn_245);

        // priceNum_245
        const priceNum_245 = this.add.text(257, 766, "", {});
        priceNum_245.setOrigin(0.5, 0.5);
        priceNum_245.text = "450";
        priceNum_245.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_245);

        // buyBtn_458
        const buyBtn_458 = this.add.sprite(535, 295, "stagecat", "tag");
        page25.add(buyBtn_458);

        // priceNum_458
        const priceNum_458 = this.add.text(540, 295, "", {});
        priceNum_458.setOrigin(0.5, 0.5);
        priceNum_458.text = "450";
        priceNum_458.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_458);

        // buyBtn_268
        const buyBtn_268 = this.add.sprite(535, 526, "stagecat", "tag");
        page25.add(buyBtn_268);

        // priceNum_268
        const priceNum_268 = this.add.text(540, 526, "", {});
        priceNum_268.setOrigin(0.5, 0.5);
        priceNum_268.text = "350";
        priceNum_268.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_268);

        // buyBtn_4280
        const buyBtn_4280 = this.add.sprite(253, 545, "stagecat", "tag");
        page25.add(buyBtn_4280);

        // priceNum_4280
        const priceNum_4280 = this.add.text(258, 545, "", {});
        priceNum_4280.setOrigin(0.5, 0.5);
        priceNum_4280.text = "350";
        priceNum_4280.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page25.add(priceNum_4280);

        // nextpage25
        const nextpage25 = this.add.image(1378, 737, "stagecat", "nextpage");
        page25.add(nextpage25);

        // backpage25
        const backpage25 = this.add.image(138, 737, "stagecat", "backpage");
        page25.add(backpage25);

        // page26
        const page26 = this.add.container(0, 0);
        page26.visible = false;

        // page26body
        const page26body = this.add.image(760, 480, "stagecat", "page26body");
        page26.add(page26body);

        // buyBtn_1116
        const buyBtn_1116 = this.add.sprite(971, 262, "stagecat", "tag");
        page26.add(buyBtn_1116);

        // priceNum_1116
        const priceNum_1116 = this.add.text(976, 262, "", {});
        priceNum_1116.setOrigin(0.5, 0.5);
        priceNum_1116.text = "450";
        priceNum_1116.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page26.add(priceNum_1116);

        // buyBtn_2016
        const buyBtn_2016 = this.add.sprite(968, 481, "stagecat", "tag");
        page26.add(buyBtn_2016);

        // priceNum_2016
        const priceNum_2016 = this.add.text(973, 481, "", {});
        priceNum_2016.setOrigin(0.5, 0.5);
        priceNum_2016.text = "350";
        priceNum_2016.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page26.add(priceNum_2016);

        // buyBtn_6033
        const buyBtn_6033 = this.add.sprite(1231, 738, "stagecat", "tag");
        page26.add(buyBtn_6033);

        // priceNum_6033
        const priceNum_6033 = this.add.text(1236, 738, "", {});
        priceNum_6033.setOrigin(0.5, 0.5);
        priceNum_6033.text = "350";
        priceNum_6033.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page26.add(priceNum_6033);

        // buyBtn_4190
        const buyBtn_4190 = this.add.sprite(1232, 544, "stagecat", "tag");
        page26.add(buyBtn_4190);

        // priceNum_4190
        const priceNum_4190 = this.add.text(1237, 544, "", {});
        priceNum_4190.setOrigin(0.5, 0.5);
        priceNum_4190.text = "350";
        priceNum_4190.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page26.add(priceNum_4190);

        // buyBtn_1114
        const buyBtn_1114 = this.add.sprite(1234, 303, "stagecat", "tag");
        page26.add(buyBtn_1114);

        // priceNum_1114
        const priceNum_1114 = this.add.text(1239, 303, "", {});
        priceNum_1114.setOrigin(0.5, 0.5);
        priceNum_1114.text = "350";
        priceNum_1114.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page26.add(priceNum_1114);

        // buyBtn_4192
        const buyBtn_4192 = this.add.sprite(965, 726, "stagecat", "tag");
        page26.add(buyBtn_4192);

        // priceNum_4192
        const priceNum_4192 = this.add.text(970, 726, "", {});
        priceNum_4192.setOrigin(0.5, 0.5);
        priceNum_4192.text = "350";
        priceNum_4192.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page26.add(priceNum_4192);

        // sec_1272
        const sec_1272 = this.add.container(0, 0);
        sec_1272.visible = false;
        page26.add(sec_1272);

        // block_sun
        const block_sun = this.add.rectangle(760, 480, 1520, 960);
        block_sun.isFilled = true;
        block_sun.fillColor = 0;
        block_sun.fillAlpha = 0.2;
        sec_1272.add(block_sun);

        // secretholder_sun
        const secretholder_sun = this.add.image(769, 431, "stagecat", "secretholder");
        secretholder_sun.scaleX = 0.8503262048913669;
        secretholder_sun.scaleY = 0.8503262048913669;
        sec_1272.add(secretholder_sun);

        // secretwrap_sun
        const secretwrap_sun = this.add.image(768, 436, "stagecat", "secretwrap");
        sec_1272.add(secretwrap_sun);

        // secrettext_sun
        const secrettext_sun = this.add.image(654, 232, "stagecat", "secrettext");
        secrettext_sun.scaleX = 0.42972712117801115;
        secrettext_sun.scaleY = 0.42972712117801115;
        sec_1272.add(secrettext_sun);

        // exit_sun
        const exit_sun = this.add.image(1024, 192, "stagecat", "exit");
        sec_1272.add(exit_sun);

        // sec_sunset
        const sec_sunset = this.add.image(760, 381, "stagecat", "sec_sunset");
        sec_sunset.scaleX = 0.5;
        sec_sunset.scaleY = 0.5;
        sec_1272.add(sec_sunset);

        // buyBtn_1272
        const buyBtn_1272 = this.add.sprite(755, 520, "stagecat", "tag");
        sec_1272.add(buyBtn_1272);

        // priceNum_1272
        const priceNum_1272 = this.add.text(760, 520, "", {});
        priceNum_1272.setOrigin(0.5, 0.5);
        priceNum_1272.text = "350";
        priceNum_1272.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_1272.add(priceNum_1272);

        // nameTag_1272
        const nameTag_1272 = this.add.text(762, 483, "", {});
        nameTag_1272.setOrigin(0.5, 0.5);
        nameTag_1272.text = "Sunset Crown";
        nameTag_1272.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_1272.add(nameTag_1272);

        // sec_sun
        const sec_sun = this.add.ellipse(195, 341, 128, 128);
        sec_sun.scaleX = 0.6258735394714823;
        sec_sun.scaleY = 0.6258735394714823;
        page26.add(sec_sun);

        // nextpage26
        const nextpage26 = this.add.image(1378, 737, "stagecat", "nextpage");
        page26.add(nextpage26);

        // backpage26
        const backpage26 = this.add.image(138, 737, "stagecat", "backpage");
        page26.add(backpage26);

        // page27
        const page27 = this.add.container(0, 0);
        page27.visible = false;

        // page27body
        const page27body = this.add.image(760, 480, "stagecat", "page27body");
        page27.add(page27body);

        // buyBtn_1115
        const buyBtn_1115 = this.add.sprite(251, 321, "stagecat", "tag");
        page27.add(buyBtn_1115);

        // priceNum_1115
        const priceNum_1115 = this.add.text(256, 321, "", {});
        priceNum_1115.setOrigin(0.5, 0.5);
        priceNum_1115.text = "450";
        priceNum_1115.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_1115);

        // buyBtn_6034
        const buyBtn_6034 = this.add.sprite(520, 784, "stagecat", "tag");
        page27.add(buyBtn_6034);

        // priceNum_6034
        const priceNum_6034 = this.add.text(525, 784, "", {});
        priceNum_6034.setOrigin(0.5, 0.5);
        priceNum_6034.text = "450";
        priceNum_6034.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_6034);

        // buyBtn_4191
        const buyBtn_4191 = this.add.sprite(250, 771, "stagecat", "tag");
        page27.add(buyBtn_4191);

        // priceNum_4191
        const priceNum_4191 = this.add.text(255, 771, "", {});
        priceNum_4191.setOrigin(0.5, 0.5);
        priceNum_4191.text = "450";
        priceNum_4191.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_4191);

        // buyBtn_2017
        const buyBtn_2017 = this.add.sprite(518, 389, "stagecat", "tag");
        page27.add(buyBtn_2017);

        // priceNum_2017
        const priceNum_2017 = this.add.text(523, 389, "", {});
        priceNum_2017.setOrigin(0.5, 0.5);
        priceNum_2017.text = "450";
        priceNum_2017.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_2017);

        // buyBtn_4194
        const buyBtn_4194 = this.add.sprite(517, 635, "stagecat", "tag");
        page27.add(buyBtn_4194);

        // priceNum_4194
        const priceNum_4194 = this.add.text(522, 635, "", {});
        priceNum_4194.setOrigin(0.5, 0.5);
        priceNum_4194.text = "350";
        priceNum_4194.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_4194);

        // buyBtn_3041
        const buyBtn_3041 = this.add.sprite(247, 535, "stagecat", "tag");
        page27.add(buyBtn_3041);

        // priceNum_3041
        const priceNum_3041 = this.add.text(252, 535, "", {});
        priceNum_3041.setOrigin(0.5, 0.5);
        priceNum_3041.text = "350";
        priceNum_3041.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_3041);

        // buyBtn_1117
        const buyBtn_1117 = this.add.sprite(524, 210, "stagecat", "tag");
        page27.add(buyBtn_1117);

        // priceNum_1117
        const priceNum_1117 = this.add.text(529, 210, "", {});
        priceNum_1117.setOrigin(0.5, 0.5);
        priceNum_1117.text = "450";
        priceNum_1117.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page27.add(priceNum_1117);

        // nextpage27
        const nextpage27 = this.add.image(1378, 737, "stagecat", "nextpage");
        page27.add(nextpage27);

        // backpage27
        const backpage27 = this.add.image(138, 737, "stagecat", "backpage");
        page27.add(backpage27);

        // page28
        const page28 = this.add.container(0, 0);
        page28.visible = false;

        // page28body
        const page28body = this.add.image(760, 480, "stagecat", "page28body");
        page28.add(page28body);

        // buyBtn_367_again
        const buyBtn_367_again = this.add.sprite(262, 680, "stagecat", "tag");
        page28.add(buyBtn_367_again);

        // priceNum_367_again
        const priceNum_367_again = this.add.text(267, 680, "", {});
        priceNum_367_again.setOrigin(0.5, 0.5);
        priceNum_367_again.text = "450";
        priceNum_367_again.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page28.add(priceNum_367_again);

        // buyBtn_477
        const buyBtn_477 = this.add.sprite(533, 408, "stagecat", "tag");
        page28.add(buyBtn_477);

        // priceNum_477
        const priceNum_477 = this.add.text(538, 408, "", {});
        priceNum_477.setOrigin(0.5, 0.5);
        priceNum_477.text = "450";
        priceNum_477.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page28.add(priceNum_477);

        // buyBtn_762
        const buyBtn_762 = this.add.sprite(532, 680, "stagecat", "tag");
        page28.add(buyBtn_762);

        // priceNum_762
        const priceNum_762 = this.add.text(537, 680, "", {});
        priceNum_762.setOrigin(0.5, 0.5);
        priceNum_762.text = "350";
        priceNum_762.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page28.add(priceNum_762);

        // buyBtn_763
        const buyBtn_763 = this.add.sprite(259, 490, "stagecat", "tag");
        page28.add(buyBtn_763);

        // priceNum_763
        const priceNum_763 = this.add.text(264, 490, "", {});
        priceNum_763.setOrigin(0.5, 0.5);
        priceNum_763.text = "350";
        priceNum_763.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page28.add(priceNum_763);

        // nextpage28
        const nextpage28 = this.add.image(1378, 737, "stagecat", "nextpage");
        page28.add(nextpage28);

        // backpage28
        const backpage28 = this.add.image(138, 737, "stagecat", "backpage");
        page28.add(backpage28);

        // page29
        const page29 = this.add.container(0, 0);
        page29.visible = false;

        // page29body
        const page29body = this.add.image(760, 480, "stagecat", "page29body");
        page29.add(page29body);

        // buyBtn_476
        const buyBtn_476 = this.add.sprite(951, 347, "stagecat", "tag");
        page29.add(buyBtn_476);

        // priceNum_476
        const priceNum_476 = this.add.text(956, 347, "", {});
        priceNum_476.setOrigin(0.5, 0.5);
        priceNum_476.text = "450";
        priceNum_476.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page29.add(priceNum_476);

        // buyBtn_761
        const buyBtn_761 = this.add.sprite(952, 641, "stagecat", "tag");
        page29.add(buyBtn_761);

        // priceNum_761
        const priceNum_761 = this.add.text(957, 641, "", {});
        priceNum_761.setOrigin(0.5, 0.5);
        priceNum_761.text = "350";
        priceNum_761.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page29.add(priceNum_761);

        // buyBtn_760
        const buyBtn_760 = this.add.sprite(1233, 663, "stagecat", "tag");
        page29.add(buyBtn_760);

        // priceNum_760
        const priceNum_760 = this.add.text(1238, 663, "", {});
        priceNum_760.setOrigin(0.5, 0.5);
        priceNum_760.text = "350";
        priceNum_760.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page29.add(priceNum_760);

        // buyBtn_475
        const buyBtn_475 = this.add.sprite(1233, 393, "stagecat", "tag");
        page29.add(buyBtn_475);

        // priceNum_475
        const priceNum_475 = this.add.text(1238, 393, "", {});
        priceNum_475.setOrigin(0.5, 0.5);
        priceNum_475.text = "350";
        priceNum_475.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page29.add(priceNum_475);

        // sec_186
        const sec_186 = this.add.container(0, 0);
        sec_186.visible = false;
        page29.add(sec_186);

        // block_ruff
        const block_ruff = this.add.rectangle(760, 480, 1520, 960);
        block_ruff.isFilled = true;
        block_ruff.fillColor = 0;
        block_ruff.fillAlpha = 0.2;
        sec_186.add(block_ruff);

        // secretholder_ruff
        const secretholder_ruff = this.add.image(769, 431, "stagecat", "secretholder");
        secretholder_ruff.scaleX = 0.8503262048913669;
        secretholder_ruff.scaleY = 0.8503262048913669;
        sec_186.add(secretholder_ruff);

        // secretwrap_ruff
        const secretwrap_ruff = this.add.image(768, 436, "stagecat", "secretwrap");
        sec_186.add(secretwrap_ruff);

        // secrettext_ruff
        const secrettext_ruff = this.add.image(654, 232, "stagecat", "secrettext");
        secrettext_ruff.scaleX = 0.42972712117801115;
        secrettext_ruff.scaleY = 0.42972712117801115;
        sec_186.add(secrettext_ruff);

        // exit_ruff
        const exit_ruff = this.add.image(1024, 192, "stagecat", "exit");
        sec_186.add(exit_ruff);

        // sec_ruffle
        const sec_ruffle = this.add.image(760, 401, "stagecat", "sec_ruffle");
        sec_ruffle.scaleX = 0.6;
        sec_ruffle.scaleY = 0.6;
        sec_186.add(sec_ruffle);

        // buyBtn_186
        const buyBtn_186 = this.add.sprite(755, 550, "stagecat", "tag");
        sec_186.add(buyBtn_186);

        // priceNum_186
        const priceNum_186 = this.add.text(760, 550, "", {});
        priceNum_186.setOrigin(0.5, 0.5);
        priceNum_186.text = "350";
        priceNum_186.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_186.add(priceNum_186);

        // nameTag_186
        const nameTag_186 = this.add.text(762, 513, "", {});
        nameTag_186.setOrigin(0.5, 0.5);
        nameTag_186.text = "Ruffle Collar";
        nameTag_186.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_186.add(nameTag_186);

        // sec_ruff
        const sec_ruff = this.add.ellipse(531, 283, 128, 128);
        sec_ruff.scaleX = 0.6258735394714823;
        sec_ruff.scaleY = 0.6258735394714823;
        page29.add(sec_ruff);

        // nextpage29
        const nextpage29 = this.add.image(1378, 737, "stagecat", "nextpage");
        page29.add(nextpage29);

        // backpage29
        const backpage29 = this.add.image(138, 737, "stagecat", "backpage");
        page29.add(backpage29);

        // page30
        const page30 = this.add.container(0, 0);
        page30.visible = false;

        // page30body
        const page30body = this.add.image(760, 480, "stagecat", "page30body");
        page30.add(page30body);

        // nextpage30
        const nextpage30 = this.add.image(1378, 737, "stagecat", "nextpage");
        page30.add(nextpage30);

        // backpage30
        const backpage30 = this.add.image(138, 737, "stagecat", "backpage");
        page30.add(backpage30);

        // page31
        const page31 = this.add.container(0, 0);
        page31.visible = false;

        // page31body
        const page31body = this.add.image(760, 480, "stagecat", "page31body");
        page31.add(page31body);

        // buyBtn_1102
        const buyBtn_1102 = this.add.sprite(964, 253, "stagecat", "tag");
        page31.add(buyBtn_1102);

        // priceNum_1102
        const priceNum_1102 = this.add.text(969, 253, "", {});
        priceNum_1102.setOrigin(0.5, 0.5);
        priceNum_1102.text = "450";
        priceNum_1102.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_1102);

        // buyBtn_3037
        const buyBtn_3037 = this.add.sprite(959, 499, "stagecat", "tag");
        page31.add(buyBtn_3037);

        // priceNum_3037
        const priceNum_3037 = this.add.text(964, 499, "", {});
        priceNum_3037.setOrigin(0.5, 0.5);
        priceNum_3037.text = "350";
        priceNum_3037.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_3037);

        // buyBtn_3036
        const buyBtn_3036 = this.add.sprite(1226, 556, "stagecat", "tag");
        page31.add(buyBtn_3036);

        // priceNum_3036
        const priceNum_3036 = this.add.text(1231, 556, "", {});
        priceNum_3036.setOrigin(0.5, 0.5);
        priceNum_3036.text = "350";
        priceNum_3036.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_3036);

        // buyBtn_1101
        const buyBtn_1101 = this.add.sprite(1223, 330, "stagecat", "tag");
        page31.add(buyBtn_1101);

        // priceNum_1101
        const priceNum_1101 = this.add.text(1228, 330, "", {});
        priceNum_1101.setOrigin(0.5, 0.5);
        priceNum_1101.text = "450";
        priceNum_1101.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_1101);

        // buyBtn_4136
        const buyBtn_4136 = this.add.sprite(957, 726, "stagecat", "tag");
        page31.add(buyBtn_4136);

        // priceNum_4136
        const priceNum_4136 = this.add.text(962, 726, "", {});
        priceNum_4136.setOrigin(0.5, 0.5);
        priceNum_4136.text = "450";
        priceNum_4136.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_4136);

        // buyBtn_4137
        const buyBtn_4137 = this.add.sprite(1229, 762, "stagecat", "tag");
        page31.add(buyBtn_4137);

        // priceNum_4137
        const priceNum_4137 = this.add.text(1234, 762, "", {});
        priceNum_4137.setOrigin(0.5, 0.5);
        priceNum_4137.text = "450";
        priceNum_4137.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_4137);

        // buyBtn_472
        const buyBtn_472 = this.add.sprite(234, 332, "stagecat", "tag");
        page31.add(buyBtn_472);

        // priceNum_472
        const priceNum_472 = this.add.text(239, 332, "", {});
        priceNum_472.setOrigin(0.5, 0.5);
        priceNum_472.text = "450";
        priceNum_472.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_472);

        // buyBtn_4135
        const buyBtn_4135 = this.add.sprite(537, 773, "stagecat", "tag");
        page31.add(buyBtn_4135);

        // priceNum_4135
        const priceNum_4135 = this.add.text(542, 773, "", {});
        priceNum_4135.setOrigin(0.5, 0.5);
        priceNum_4135.text = "450";
        priceNum_4135.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_4135);

        // buyBtn_227
        const buyBtn_227 = this.add.sprite(235, 772, "stagecat", "tag");
        page31.add(buyBtn_227);

        // priceNum_227
        const priceNum_227 = this.add.text(240, 772, "", {});
        priceNum_227.setOrigin(0.5, 0.5);
        priceNum_227.text = "450";
        priceNum_227.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_227);

        // buyBtn_4138
        const buyBtn_4138 = this.add.sprite(546, 381, "stagecat", "tag");
        page31.add(buyBtn_4138);

        // priceNum_4138
        const priceNum_4138 = this.add.text(551, 381, "", {});
        priceNum_4138.setOrigin(0.5, 0.5);
        priceNum_4138.text = "350";
        priceNum_4138.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_4138);

        // buyBtn_309
        const buyBtn_309 = this.add.sprite(238, 551, "stagecat", "tag");
        page31.add(buyBtn_309);

        // priceNum_309
        const priceNum_309 = this.add.text(243, 551, "", {});
        priceNum_309.setOrigin(0.5, 0.5);
        priceNum_309.text = "350";
        priceNum_309.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page31.add(priceNum_309);

        // sec_6020
        const sec_6020 = this.add.container(0, 0);
        sec_6020.visible = false;
        page31.add(sec_6020);

        // block_point
        const block_point = this.add.rectangle(760, 480, 1520, 960);
        block_point.isFilled = true;
        block_point.fillColor = 0;
        block_point.fillAlpha = 0.2;
        sec_6020.add(block_point);

        // secretholder_point
        const secretholder_point = this.add.image(769, 431, "stagecat", "secretholder");
        secretholder_point.scaleX = 0.8503262048913669;
        secretholder_point.scaleY = 0.8503262048913669;
        sec_6020.add(secretholder_point);

        // secretwrap_point
        const secretwrap_point = this.add.image(768, 436, "stagecat", "secretwrap");
        sec_6020.add(secretwrap_point);

        // secrettext_point
        const secrettext_point = this.add.image(654, 232, "stagecat", "secrettext");
        secrettext_point.scaleX = 0.42972712117801115;
        secrettext_point.scaleY = 0.42972712117801115;
        sec_6020.add(secrettext_point);

        // exit_point
        const exit_point = this.add.image(1024, 192, "stagecat", "exit");
        sec_6020.add(exit_point);

        // sec_pointy
        const sec_pointy = this.add.image(760, 421, "stagecat", "sec_pointy");
        sec_pointy.scaleX = 0.5;
        sec_pointy.scaleY = 0.5;
        sec_6020.add(sec_pointy);

        // buyBtn_6020
        const buyBtn_6020 = this.add.sprite(755, 520, "stagecat", "tag");
        sec_6020.add(buyBtn_6020);

        // priceNum_6020
        const priceNum_6020 = this.add.text(760, 520, "", {});
        priceNum_6020.setOrigin(0.5, 0.5);
        priceNum_6020.text = "350";
        priceNum_6020.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        sec_6020.add(priceNum_6020);

        // nameTag_6020
        const nameTag_6020 = this.add.text(762, 483, "", {});
        nameTag_6020.setOrigin(0.5, 0.5);
        nameTag_6020.text = "Pointy Shoes";
        nameTag_6020.setStyle({ "color": "#221100ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sec_6020.add(nameTag_6020);

        // sec_point
        const sec_point = this.add.ellipse(963, 386, 128, 128);
        sec_point.scaleX = 0.6258735394714823;
        sec_point.scaleY = 0.6258735394714823;
        page31.add(sec_point);

        // nextpage31
        const nextpage31 = this.add.image(1378, 737, "stagecat", "nextpage");
        page31.add(nextpage31);

        // backpage31
        const backpage31 = this.add.image(138, 737, "stagecat", "backpage");
        page31.add(backpage31);

        // page32
        const page32 = this.add.container(0, 0);
        page32.visible = false;

        // page32body
        const page32body = this.add.image(760, 480, "stagecat", "page32body");
        page32.add(page32body);

        // buyBtn_2043
        const buyBtn_2043 = this.add.sprite(944, 358, "stagecat", "tag");
        page32.add(buyBtn_2043);

        // priceNum_2043
        const priceNum_2043 = this.add.text(949, 358, "", {});
        priceNum_2043.setOrigin(0.5, 0.5);
        priceNum_2043.text = "450";
        priceNum_2043.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page32.add(priceNum_2043);

        // buyBtn_4467
        const buyBtn_4467 = this.add.sprite(952, 651, "stagecat", "tag");
        page32.add(buyBtn_4467);

        // priceNum_4467
        const priceNum_4467 = this.add.text(957, 651, "", {});
        priceNum_4467.setOrigin(0.5, 0.5);
        priceNum_4467.text = "350";
        priceNum_4467.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page32.add(priceNum_4467);

        // buyBtn_4468
        const buyBtn_4468 = this.add.sprite(1205, 659, "stagecat", "tag");
        page32.add(buyBtn_4468);

        // priceNum_4468
        const priceNum_4468 = this.add.text(1210, 659, "", {});
        priceNum_4468.setOrigin(0.5, 0.5);
        priceNum_4468.text = "350";
        priceNum_4468.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page32.add(priceNum_4468);

        // buyBtn_4466
        const buyBtn_4466 = this.add.sprite(1203, 362, "stagecat", "tag");
        page32.add(buyBtn_4466);

        // priceNum_4466
        const priceNum_4466 = this.add.text(1208, 362, "", {});
        priceNum_4466.setOrigin(0.5, 0.5);
        priceNum_4466.text = "350";
        priceNum_4466.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page32.add(priceNum_4466);

        // nextpage32
        const nextpage32 = this.add.image(1378, 737, "stagecat", "nextpage");
        page32.add(nextpage32);

        // backpage32
        const backpage32 = this.add.image(138, 737, "stagecat", "backpage");
        page32.add(backpage32);

        // page33
        const page33 = this.add.container(0, 0);
        page33.visible = false;

        // page33body
        const page33body = this.add.image(760, 480, "stagecat", "page33body");
        page33.add(page33body);

        // buyBtn_1106
        const buyBtn_1106 = this.add.sprite(980, 282, "stagecat", "tag");
        page33.add(buyBtn_1106);

        // priceNum_1106
        const priceNum_1106 = this.add.text(985, 282, "", {});
        priceNum_1106.setOrigin(0.5, 0.5);
        priceNum_1106.text = "450";
        priceNum_1106.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page33.add(priceNum_1106);

        // buyBtn_4146
        const buyBtn_4146 = this.add.sprite(981, 750, "stagecat", "tag");
        page33.add(buyBtn_4146);

        // priceNum_4146
        const priceNum_4146 = this.add.text(986, 750, "", {});
        priceNum_4146.setOrigin(0.5, 0.5);
        priceNum_4146.text = "350";
        priceNum_4146.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page33.add(priceNum_4146);

        // buyBtn_5131
        const buyBtn_5131 = this.add.sprite(1212, 612, "stagecat", "tag");
        page33.add(buyBtn_5131);

        // priceNum_5131
        const priceNum_5131 = this.add.text(1217, 612, "", {});
        priceNum_5131.setOrigin(0.5, 0.5);
        priceNum_5131.text = "350";
        priceNum_5131.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page33.add(priceNum_5131);

        // buyBtn_3038
        const buyBtn_3038 = this.add.sprite(1216, 386, "stagecat", "tag");
        page33.add(buyBtn_3038);

        // priceNum_3038
        const priceNum_3038 = this.add.text(1221, 386, "", {});
        priceNum_3038.setOrigin(0.5, 0.5);
        priceNum_3038.text = "350";
        priceNum_3038.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page33.add(priceNum_3038);

        // buyBtn_119
        const buyBtn_119 = this.add.sprite(971, 508, "stagecat", "tag");
        page33.add(buyBtn_119);

        // priceNum_119
        const priceNum_119 = this.add.text(976, 508, "", {});
        priceNum_119.setOrigin(0.5, 0.5);
        priceNum_119.text = "450";
        priceNum_119.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        page33.add(priceNum_119);

        // nextpage33
        const nextpage33 = this.add.image(1378, 737, "stagecat", "nextpage");
        page33.add(nextpage33);

        // backpage33
        const backpage33 = this.add.image(138, 737, "stagecat", "backpage");
        page33.add(backpage33);

        // page34
        const page34 = this.add.container(0, 0);
        page34.visible = false;

        // page34body
        const page34body = this.add.image(760, 480, "stagecat", "page34body");
        page34.add(page34body);

        // exit_34
        const exit_34 = this.add.image(1146, 71, "stagecat", "exit");
        page34.add(exit_34);

        // backpage
        const backpage = this.add.image(523, 740, "stagecat", "backpage");
        page34.add(backpage);

        // buttons
        const buttons = this.add.container(204, 59);
        buttons.visible = false;

        // coinholder
        const coinholder = this.add.image(662, 833, "stagecat", "coinholder");
        buttons.add(coinholder);

        // coins
        const coins = this.add.text(587, 803, "", {});
        coins.angle = -7;
        coins.text = "Your Coins:\n100000";
        coins.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold italic" });
        buttons.add(coins);

        // exit
        const exit = this.add.image(1231, -8, "stagecat", "exit");
        buttons.add(exit);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34];

        // block (components)
        new Interactive(block);

        // nextpage (components)
        const nextpageButton = new Button(nextpage);
        nextpageButton.spriteName = "nextpage";
        nextpageButton.callback = () => this.nextPage();

        // exit_1 (components)
        const exit_1SimpleButton = new SimpleButton(exit_1);
        exit_1SimpleButton.callback = () => this.scene.stop();

        // nextpage2 (components)
        const nextpage2Button = new Button(nextpage2);
        nextpage2Button.spriteName = "nextpage";
        nextpage2Button.callback = () => this.nextPage();

        // backpage2 (components)
        const backpage2Button = new Button(backpage2);
        backpage2Button.spriteName = "backpage";
        backpage2Button.callback = () => this.prevPage();

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.showPage(4);

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.showPage(6);

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => this.showPage(8);

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.showPage(10);

        // rectangle_5 (components)
        const rectangle_5SimpleButton = new SimpleButton(rectangle_5);
        rectangle_5SimpleButton.callback = () => this.showPage(11);

        // rectangle_6 (components)
        const rectangle_6SimpleButton = new SimpleButton(rectangle_6);
        rectangle_6SimpleButton.callback = () => this.showPage(14);

        // rectangle_7 (components)
        const rectangle_7SimpleButton = new SimpleButton(rectangle_7);
        rectangle_7SimpleButton.callback = () => this.showPage(16);

        // rectangle_8 (components)
        const rectangle_8SimpleButton = new SimpleButton(rectangle_8);
        rectangle_8SimpleButton.callback = () => this.showPage(18);

        // rectangle_9 (components)
        const rectangle_9SimpleButton = new SimpleButton(rectangle_9);
        rectangle_9SimpleButton.callback = () => this.showPage(20);

        // rectangle_10 (components)
        const rectangle_10SimpleButton = new SimpleButton(rectangle_10);
        rectangle_10SimpleButton.callback = () => this.showPage(21);

        // rectangle_11 (components)
        const rectangle_11SimpleButton = new SimpleButton(rectangle_11);
        rectangle_11SimpleButton.callback = () => this.showPage(23);

        // rectangle_12 (components)
        const rectangle_12SimpleButton = new SimpleButton(rectangle_12);
        rectangle_12SimpleButton.callback = () => this.showPage(25);

        // rectangle_13 (components)
        const rectangle_13SimpleButton = new SimpleButton(rectangle_13);
        rectangle_13SimpleButton.callback = () => this.showPage(27);

        // rectangle_14 (components)
        const rectangle_14SimpleButton = new SimpleButton(rectangle_14);
        rectangle_14SimpleButton.callback = () => this.showPage(29);

        // rectangle_15 (components)
        const rectangle_15SimpleButton = new SimpleButton(rectangle_15);
        rectangle_15SimpleButton.callback = () => this.showPage(31);

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.onRectangleHover(1);
        rectangleSimpleButton.hoverOutCallback = () => this.onRectangleOut(1);
        rectangleSimpleButton.callback = () => this.buy(992);

        // rectangle1 (components)
        const rectangle1SimpleButton = new SimpleButton(rectangle1);
        rectangle1SimpleButton.hoverCallback = () => this.onRectangleHover(2);
        rectangle1SimpleButton.hoverOutCallback = () => this.onRectangleOut(2);
        rectangle1SimpleButton.callback = () => this.buy(987);

        // rectangle2 (components)
        const rectangle2SimpleButton = new SimpleButton(rectangle2);
        rectangle2SimpleButton.hoverCallback = () => this.onRectangleHover(3);
        rectangle2SimpleButton.hoverOutCallback = () => this.onRectangleOut(3);
        rectangle2SimpleButton.callback = () => this.buy(9039);

        // rectangle3 (components)
        const rectangle3SimpleButton = new SimpleButton(rectangle3);
        rectangle3SimpleButton.hoverCallback = () => this.onRectangleHover(4);
        rectangle3SimpleButton.hoverOutCallback = () => this.onRectangleOut(4);
        rectangle3SimpleButton.callback = () => this.buy(9027);

        // rectangle4 (components)
        const rectangle4SimpleButton = new SimpleButton(rectangle4);
        rectangle4SimpleButton.hoverCallback = () => this.onRectangleHover(5);
        rectangle4SimpleButton.hoverOutCallback = () => this.onRectangleOut(5);
        rectangle4SimpleButton.callback = () => this.buy(9002);

        // rectangle5 (components)
        const rectangle5SimpleButton = new SimpleButton(rectangle5);
        rectangle5SimpleButton.hoverCallback = () => this.onRectangleHover(6);
        rectangle5SimpleButton.hoverOutCallback = () => this.onRectangleOut(6);
        rectangle5SimpleButton.callback = () => this.buy(995);

        // rectangle6 (components)
        const rectangle6SimpleButton = new SimpleButton(rectangle6);
        rectangle6SimpleButton.hoverCallback = () => this.onRectangleHover(7);
        rectangle6SimpleButton.hoverOutCallback = () => this.onRectangleOut(7);
        rectangle6SimpleButton.callback = () => this.buy(9120);

        // rectangle7 (components)
        const rectangle7SimpleButton = new SimpleButton(rectangle7);
        rectangle7SimpleButton.hoverCallback = () => this.onRectangleHover(8);
        rectangle7SimpleButton.hoverOutCallback = () => this.onRectangleOut(8);
        rectangle7SimpleButton.callback = () => this.buy(9047);

        // rectangle8 (components)
        const rectangle8SimpleButton = new SimpleButton(rectangle8);
        rectangle8SimpleButton.hoverCallback = () => this.onRectangleHover(9);
        rectangle8SimpleButton.hoverOutCallback = () => this.onRectangleOut(9);
        rectangle8SimpleButton.callback = () => this.buy(9056);

        // rectangle9 (components)
        const rectangle9SimpleButton = new SimpleButton(rectangle9);
        rectangle9SimpleButton.hoverCallback = () => this.onRectangleHover(10);
        rectangle9SimpleButton.hoverOutCallback = () => this.onRectangleOut(10);
        rectangle9SimpleButton.callback = () => this.buy(9005);

        // rectangle10 (components)
        const rectangle10SimpleButton = new SimpleButton(rectangle10);
        rectangle10SimpleButton.hoverCallback = () => this.onRectangleHover(11);
        rectangle10SimpleButton.hoverOutCallback = () => this.onRectangleOut(11);
        rectangle10SimpleButton.callback = () => this.buy(998);

        // nextpage3 (components)
        const nextpage3Button = new Button(nextpage3);
        nextpage3Button.spriteName = "nextpage";
        nextpage3Button.callback = () => this.nextPage();

        // backpage3 (components)
        const backpage3Button = new Button(backpage3);
        backpage3Button.spriteName = "backpage";
        backpage3Button.callback = () => this.prevPage();

        // buyBtn_489 (components)
        const buyBtn_489Button = new Button(buyBtn_489);
        buyBtn_489Button.spriteName = "tag";
        buyBtn_489Button.callback = () => this.buy(489);

        // priceNum_489 (components)
        const priceNum_489Pricetag = new Pricetag(priceNum_489);
        priceNum_489Pricetag.id = 489;

        // buyBtn_5580 (components)
        const buyBtn_5580Button = new Button(buyBtn_5580);
        buyBtn_5580Button.spriteName = "tag";
        buyBtn_5580Button.callback = () => this.buy(5580);

        // priceNum_5580 (components)
        const priceNum_5580Pricetag = new Pricetag(priceNum_5580);
        priceNum_5580Pricetag.id = 5580;

        // nextpage4 (components)
        const nextpage4Button = new Button(nextpage4);
        nextpage4Button.spriteName = "nextpage";
        nextpage4Button.callback = () => this.nextPage();

        // backpage4 (components)
        const backpage4Button = new Button(backpage4);
        backpage4Button.spriteName = "backpage";
        backpage4Button.callback = () => this.prevPage();

        // buyBtn_675 (components)
        const buyBtn_675Button = new Button(buyBtn_675);
        buyBtn_675Button.spriteName = "tag";
        buyBtn_675Button.callback = () => this.buy(675);

        // priceNum_675 (components)
        const priceNum_675Pricetag = new Pricetag(priceNum_675);
        priceNum_675Pricetag.id = 675;

        // buyBtn_834 (components)
        const buyBtn_834Button = new Button(buyBtn_834);
        buyBtn_834Button.spriteName = "tag";
        buyBtn_834Button.callback = () => this.buy(834);

        // priceNum_834 (components)
        const priceNum_834Pricetag = new Pricetag(priceNum_834);
        priceNum_834Pricetag.id = 834;

        // buyBtn_835 (components)
        const buyBtn_835Button = new Button(buyBtn_835);
        buyBtn_835Button.spriteName = "tag";
        buyBtn_835Button.callback = () => this.buy(835);

        // priceNum_835 (components)
        const priceNum_835Pricetag = new Pricetag(priceNum_835);
        priceNum_835Pricetag.id = 835;

        // buyBtn_190 (components)
        const buyBtn_190Button = new Button(buyBtn_190);
        buyBtn_190Button.spriteName = "tag";
        buyBtn_190Button.callback = () => this.buy(190);

        // priceNum_190 (components)
        const priceNum_190Pricetag = new Pricetag(priceNum_190);
        priceNum_190Pricetag.id = 190;

        // buyBtn_126 (components)
        const buyBtn_126Button = new Button(buyBtn_126);
        buyBtn_126Button.spriteName = "tag";
        buyBtn_126Button.callback = () => this.buy(126);

        // priceNum_126 (components)
        const priceNum_126Pricetag = new Pricetag(priceNum_126);
        priceNum_126Pricetag.id = 126;

        // block_1 (components)
        new Interactive(block_1);

        // exit_3 (components)
        const exit_3SimpleButton = new SimpleButton(exit_3);
        exit_3SimpleButton.callback = () => this.secretClose(212);

        // buyBtn_212 (components)
        const buyBtn_212Button = new Button(buyBtn_212);
        buyBtn_212Button.spriteName = "tag";
        buyBtn_212Button.callback = () => this.buy(212);

        // priceNum_212 (components)
        const priceNum_212Pricetag = new Pricetag(priceNum_212);
        priceNum_212Pricetag.id = 212;

        // nameTag_210 (components)
        const nameTag_210Name = new Name(nameTag_210);
        nameTag_210Name.id = 212;

        // sec_skirt (components)
        const sec_skirtSimpleButton = new SimpleButton(sec_skirt);
        sec_skirtSimpleButton.callback = () => this.onSecret(212);

        // nextpage5 (components)
        const nextpage5Button = new Button(nextpage5);
        nextpage5Button.spriteName = "nextpage";
        nextpage5Button.callback = () => this.nextPage();

        // backpage5 (components)
        const backpage5Button = new Button(backpage5);
        backpage5Button.spriteName = "backpage";
        backpage5Button.callback = () => this.prevPage();

        // buyBtn_676 (components)
        const buyBtn_676Button = new Button(buyBtn_676);
        buyBtn_676Button.spriteName = "tag";
        buyBtn_676Button.callback = () => this.buy(676);

        // priceNum_676 (components)
        const priceNum_676Pricetag = new Pricetag(priceNum_676);
        priceNum_676Pricetag.id = 676;

        // buyBtn_127 (components)
        const buyBtn_127Button = new Button(buyBtn_127);
        buyBtn_127Button.spriteName = "tag";
        buyBtn_127Button.callback = () => this.buy(127);

        // priceNum_127 (components)
        const priceNum_127Pricetag = new Pricetag(priceNum_127);
        priceNum_127Pricetag.id = 127;

        // buyBtn_128 (components)
        const buyBtn_128Button = new Button(buyBtn_128);
        buyBtn_128Button.spriteName = "tag";
        buyBtn_128Button.callback = () => this.buy(128);

        // priceNum_128 (components)
        const priceNum_128Pricetag = new Pricetag(priceNum_128);
        priceNum_128Pricetag.id = 128;

        // nextpage6 (components)
        const nextpage6Button = new Button(nextpage6);
        nextpage6Button.spriteName = "nextpage";
        nextpage6Button.callback = () => this.nextPage();

        // backpage6 (components)
        const backpage6Button = new Button(backpage6);
        backpage6Button.spriteName = "backpage";
        backpage6Button.callback = () => this.prevPage();

        // buyBtn_665 (components)
        const buyBtn_665Button = new Button(buyBtn_665);
        buyBtn_665Button.spriteName = "tag";
        buyBtn_665Button.callback = () => this.buy(665);

        // priceNum_665 (components)
        const priceNum_665Pricetag = new Pricetag(priceNum_665);
        priceNum_665Pricetag.id = 665;

        // buyBtn_786 (components)
        const buyBtn_786Button = new Button(buyBtn_786);
        buyBtn_786Button.spriteName = "tag";
        buyBtn_786Button.callback = () => this.buy(786);

        // priceNum_786 (components)
        const priceNum_786Pricetag = new Pricetag(priceNum_786);
        priceNum_786Pricetag.id = 786;

        // buyBtn_787 (components)
        const buyBtn_787Button = new Button(buyBtn_787);
        buyBtn_787Button.spriteName = "tag";
        buyBtn_787Button.callback = () => this.buy(787);

        // priceNum_787 (components)
        const priceNum_787Pricetag = new Pricetag(priceNum_787);
        priceNum_787Pricetag.id = 787;

        // buyBtn_316 (components)
        const buyBtn_316Button = new Button(buyBtn_316);
        buyBtn_316Button.spriteName = "tag";
        buyBtn_316Button.callback = () => this.buy(316);

        // priceNum_316 (components)
        const priceNum_316Pricetag = new Pricetag(priceNum_316);
        priceNum_316Pricetag.id = 316;

        // buyBtn_432 (components)
        const buyBtn_432Button = new Button(buyBtn_432);
        buyBtn_432Button.spriteName = "tag";
        buyBtn_432Button.callback = () => this.buy(432);

        // priceNum_432 (components)
        const priceNum_432Pricetag = new Pricetag(priceNum_432);
        priceNum_432Pricetag.id = 432;

        // buyBtn_327 (components)
        const buyBtn_327Button = new Button(buyBtn_327);
        buyBtn_327Button.spriteName = "tag";
        buyBtn_327Button.callback = () => this.buy(327);

        // priceNum_327 (components)
        const priceNum_327Pricetag = new Pricetag(priceNum_327);
        priceNum_327Pricetag.id = 327;

        // block_crook (components)
        new Interactive(block_crook);

        // exit_crook (components)
        const exit_crookSimpleButton = new SimpleButton(exit_crook);
        exit_crookSimpleButton.callback = () => this.secretClose(716);

        // buyBtn_716 (components)
        const buyBtn_716Button = new Button(buyBtn_716);
        buyBtn_716Button.spriteName = "tag";
        buyBtn_716Button.callback = () => this.buy(716);

        // priceNum_716 (components)
        const priceNum_716Pricetag = new Pricetag(priceNum_716);
        priceNum_716Pricetag.id = 716;

        // nameTag_716 (components)
        const nameTag_716Name = new Name(nameTag_716);
        nameTag_716Name.id = 716;

        // sec_crook (components)
        const sec_crookSimpleButton = new SimpleButton(sec_crook);
        sec_crookSimpleButton.callback = () => this.onSecret(716);

        // nextpage7 (components)
        const nextpage7Button = new Button(nextpage7);
        nextpage7Button.spriteName = "nextpage";
        nextpage7Button.callback = () => this.nextPage();

        // backpage7 (components)
        const backpage7Button = new Button(backpage7);
        backpage7Button.spriteName = "backpage";
        backpage7Button.callback = () => this.prevPage();

        // buyBtn_666 (components)
        const buyBtn_666Button = new Button(buyBtn_666);
        buyBtn_666Button.spriteName = "tag";
        buyBtn_666Button.callback = () => this.buy(666);

        // priceNum_666 (components)
        const priceNum_666Pricetag = new Pricetag(priceNum_666);
        priceNum_666Pricetag.id = 666;

        // buyBtn_789 (components)
        const buyBtn_789Button = new Button(buyBtn_789);
        buyBtn_789Button.spriteName = "tag";
        buyBtn_789Button.callback = () => this.buy(789);

        // priceNum_789 (components)
        const priceNum_789Pricetag = new Pricetag(priceNum_789);
        priceNum_789Pricetag.id = 789;

        // buyBtn_788 (components)
        const buyBtn_788Button = new Button(buyBtn_788);
        buyBtn_788Button.spriteName = "tag";
        buyBtn_788Button.callback = () => this.buy(788);

        // priceNum_788 (components)
        const priceNum_788Pricetag = new Pricetag(priceNum_788);
        priceNum_788Pricetag.id = 788;

        // buyBtn_715 (components)
        const buyBtn_715Button = new Button(buyBtn_715);
        buyBtn_715Button.spriteName = "tag";
        buyBtn_715Button.callback = () => this.buy(715);

        // priceNum_715 (components)
        const priceNum_715Pricetag = new Pricetag(priceNum_715);
        priceNum_715Pricetag.id = 715;

        // nextpage8 (components)
        const nextpage8Button = new Button(nextpage8);
        nextpage8Button.spriteName = "nextpage";
        nextpage8Button.callback = () => this.nextPage();

        // backpage8 (components)
        const backpage8Button = new Button(backpage8);
        backpage8Button.spriteName = "backpage";
        backpage8Button.callback = () => this.prevPage();

        // buyBtn_123 (components)
        const buyBtn_123Button = new Button(buyBtn_123);
        buyBtn_123Button.spriteName = "tag";
        buyBtn_123Button.callback = () => this.buy(123);

        // priceNum_123 (components)
        const priceNum_123Pricetag = new Pricetag(priceNum_123);
        priceNum_123Pricetag.id = 123;

        // buyBtn_302 (components)
        const buyBtn_302Button = new Button(buyBtn_302);
        buyBtn_302Button.spriteName = "tag";
        buyBtn_302Button.callback = () => this.buy(302);

        // priceNum_302 (components)
        const priceNum_302Pricetag = new Pricetag(priceNum_302);
        priceNum_302Pricetag.id = 302;

        // buyBtn_315 (components)
        const buyBtn_315Button = new Button(buyBtn_315);
        buyBtn_315Button.spriteName = "tag";
        buyBtn_315Button.callback = () => this.buy(315);

        // priceNum_315 (components)
        const priceNum_315Pricetag = new Pricetag(priceNum_315);
        priceNum_315Pricetag.id = 315;

        // buyBtn_124 (components)
        const buyBtn_124Button = new Button(buyBtn_124);
        buyBtn_124Button.spriteName = "tag";
        buyBtn_124Button.callback = () => this.buy(124);

        // priceNum_124 (components)
        const priceNum_124Pricetag = new Pricetag(priceNum_124);
        priceNum_124Pricetag.id = 124;

        // buyBtn_765 (components)
        const buyBtn_765Button = new Button(buyBtn_765);
        buyBtn_765Button.spriteName = "tag";
        buyBtn_765Button.callback = () => this.buy(765);

        // priceNum_765 (components)
        const priceNum_765Pricetag = new Pricetag(priceNum_765);
        priceNum_765Pricetag.id = 765;

        // buyBtn_766 (components)
        const buyBtn_766Button = new Button(buyBtn_766);
        buyBtn_766Button.spriteName = "tag";
        buyBtn_766Button.callback = () => this.buy(766);

        // priceNum_766 (components)
        const priceNum_766Pricetag = new Pricetag(priceNum_766);
        priceNum_766Pricetag.id = 766;

        // nextpage9 (components)
        const nextpage9Button = new Button(nextpage9);
        nextpage9Button.spriteName = "nextpage";
        nextpage9Button.callback = () => this.nextPage();

        // backpage9 (components)
        const backpage9Button = new Button(backpage9);
        backpage9Button.spriteName = "backpage";
        backpage9Button.callback = () => this.prevPage();

        // buyBtn_767 (components)
        const buyBtn_767Button = new Button(buyBtn_767);
        buyBtn_767Button.spriteName = "tag";
        buyBtn_767Button.callback = () => this.buy(767);

        // priceNum_767 (components)
        const priceNum_767Pricetag = new Pricetag(priceNum_767);
        priceNum_767Pricetag.id = 767;

        // buyBtn_195 (components)
        const buyBtn_195Button = new Button(buyBtn_195);
        buyBtn_195Button.spriteName = "tag";
        buyBtn_195Button.callback = () => this.buy(195);

        // priceNum_195 (components)
        const priceNum_195Pricetag = new Pricetag(priceNum_195);
        priceNum_195Pricetag.id = 195;

        // buyBtn_113 (components)
        const buyBtn_113Button = new Button(buyBtn_113);
        buyBtn_113Button.spriteName = "tag";
        buyBtn_113Button.callback = () => this.buy(113);

        // priceNum_113 (components)
        const priceNum_113Pricetag = new Pricetag(priceNum_113);
        priceNum_113Pricetag.id = 113;

        // nextpage10 (components)
        const nextpage10Button = new Button(nextpage10);
        nextpage10Button.spriteName = "nextpage";
        nextpage10Button.callback = () => this.nextPage();

        // backpage10 (components)
        const backpage10Button = new Button(backpage10);
        backpage10Button.spriteName = "backpage";
        backpage10Button.callback = () => this.prevPage();

        // buyBtn_4457 (components)
        const buyBtn_4457Button = new Button(buyBtn_4457);
        buyBtn_4457Button.spriteName = "tag";
        buyBtn_4457Button.callback = () => this.buy(4457);

        // priceNum_4457 (components)
        const priceNum_4457Pricetag = new Pricetag(priceNum_4457);
        priceNum_4457Pricetag.id = 4457;

        // buyBtn_6096 (components)
        const buyBtn_6096Button = new Button(buyBtn_6096);
        buyBtn_6096Button.spriteName = "tag";
        buyBtn_6096Button.callback = () => this.buy(6096);

        // priceNum_6096 (components)
        const priceNum_6096Pricetag = new Pricetag(priceNum_6096);
        priceNum_6096Pricetag.id = 6096;

        // buyBtn_4456 (components)
        const buyBtn_4456Button = new Button(buyBtn_4456);
        buyBtn_4456Button.spriteName = "tag";
        buyBtn_4456Button.callback = () => this.buy(4456);

        // priceNum_4456 (components)
        const priceNum_4456Pricetag = new Pricetag(priceNum_4456);
        priceNum_4456Pricetag.id = 4456;

        // buyBtn_4455 (components)
        const buyBtn_4455Button = new Button(buyBtn_4455);
        buyBtn_4455Button.spriteName = "tag";
        buyBtn_4455Button.callback = () => this.buy(4455);

        // priceNum_4455 (components)
        const priceNum_4455Pricetag = new Pricetag(priceNum_4455);
        priceNum_4455Pricetag.id = 4455;

        // buyBtn_6095 (components)
        const buyBtn_6095Button = new Button(buyBtn_6095);
        buyBtn_6095Button.spriteName = "tag";
        buyBtn_6095Button.callback = () => this.buy(6095);

        // priceNum_6095 (components)
        const priceNum_6095Pricetag = new Pricetag(priceNum_6095);
        priceNum_6095Pricetag.id = 6095;

        // nextpage11 (components)
        const nextpage11Button = new Button(nextpage11);
        nextpage11Button.spriteName = "nextpage";
        nextpage11Button.callback = () => this.nextPage();

        // backpage11 (components)
        const backpage11Button = new Button(backpage11);
        backpage11Button.spriteName = "backpage";
        backpage11Button.callback = () => this.prevPage();

        // buyBtn_132 (components)
        const buyBtn_132Button = new Button(buyBtn_132);
        buyBtn_132Button.spriteName = "tag";
        buyBtn_132Button.callback = () => this.buy(132);

        // priceNum_132 (components)
        const priceNum_132Pricetag = new Pricetag(priceNum_132);
        priceNum_132Pricetag.id = 132;

        // buyBtn_4113 (components)
        const buyBtn_4113Button = new Button(buyBtn_4113);
        buyBtn_4113Button.spriteName = "tag";
        buyBtn_4113Button.callback = () => this.buy(4113);

        // priceNum_4113 (components)
        const priceNum_4113Pricetag = new Pricetag(priceNum_4113);
        priceNum_4113Pricetag.id = 4113;

        // buyBtn_4114 (components)
        const buyBtn_4114Button = new Button(buyBtn_4114);
        buyBtn_4114Button.spriteName = "tag";
        buyBtn_4114Button.callback = () => this.buy(4114);

        // priceNum_4114 (components)
        const priceNum_4114Pricetag = new Pricetag(priceNum_4114);
        priceNum_4114Pricetag.id = 4114;

        // buyBtn_2003 (components)
        const buyBtn_2003Button = new Button(buyBtn_2003);
        buyBtn_2003Button.spriteName = "tag";
        buyBtn_2003Button.callback = () => this.buy(2003);

        // priceNum_2003 (components)
        const priceNum_2003Pricetag = new Pricetag(priceNum_2003);
        priceNum_2003Pricetag.id = 2003;

        // buyBtn_364 (components)
        const buyBtn_364Button = new Button(buyBtn_364);
        buyBtn_364Button.spriteName = "tag";
        buyBtn_364Button.callback = () => this.buy(364);

        // priceNum_364 (components)
        const priceNum_364Pricetag = new Pricetag(priceNum_364);
        priceNum_364Pricetag.id = 364;

        // buyBtn_367 (components)
        const buyBtn_367Button = new Button(buyBtn_367);
        buyBtn_367Button.spriteName = "tag";
        buyBtn_367Button.callback = () => this.buy(367);

        // priceNum_367 (components)
        const priceNum_367Pricetag = new Pricetag(priceNum_367);
        priceNum_367Pricetag.id = 367;

        // buyBtn_308 (components)
        const buyBtn_308Button = new Button(buyBtn_308);
        buyBtn_308Button.spriteName = "tag";
        buyBtn_308Button.callback = () => this.buy(308);

        // priceNum_308 (components)
        const priceNum_308Pricetag = new Pricetag(priceNum_308);
        priceNum_308Pricetag.id = 308;

        // nextpage12 (components)
        const nextpage12Button = new Button(nextpage12);
        nextpage12Button.spriteName = "nextpage";
        nextpage12Button.callback = () => this.nextPage();

        // backpage12 (components)
        const backpage12Button = new Button(backpage12);
        backpage12Button.spriteName = "backpage";
        backpage12Button.callback = () => this.prevPage();

        // buyBtn_768 (components)
        const buyBtn_768Button = new Button(buyBtn_768);
        buyBtn_768Button.spriteName = "tag";
        buyBtn_768Button.callback = () => this.buy(768);

        // priceNum_768 (components)
        const priceNum_768Pricetag = new Pricetag(priceNum_768);
        priceNum_768Pricetag.id = 768;

        // buyBtn_3029 (components)
        const buyBtn_3029Button = new Button(buyBtn_3029);
        buyBtn_3029Button.spriteName = "tag";
        buyBtn_3029Button.callback = () => this.buy(3029);

        // priceNum_3029 (components)
        const priceNum_3029Pricetag = new Pricetag(priceNum_3029);
        priceNum_3029Pricetag.id = 3029;

        // buyBtn_5044 (components)
        const buyBtn_5044Button = new Button(buyBtn_5044);
        buyBtn_5044Button.spriteName = "tag";
        buyBtn_5044Button.callback = () => this.buy(5044);

        // priceNum_5044 (components)
        const priceNum_5044Pricetag = new Pricetag(priceNum_5044);
        priceNum_5044Pricetag.id = 5044;

        // buyBtn_1077 (components)
        const buyBtn_1077Button = new Button(buyBtn_1077);
        buyBtn_1077Button.spriteName = "tag";
        buyBtn_1077Button.callback = () => this.buy(1077);

        // priceNum_1077 (components)
        const priceNum_1077Pricetag = new Pricetag(priceNum_1077);
        priceNum_1077Pricetag.id = 1077;

        // buyBtn_4110 (components)
        const buyBtn_4110Button = new Button(buyBtn_4110);
        buyBtn_4110Button.spriteName = "tag";
        buyBtn_4110Button.callback = () => this.buy(4110);

        // priceNum_4110 (components)
        const priceNum_4110Pricetag = new Pricetag(priceNum_4110);
        priceNum_4110Pricetag.id = 4110;

        // buyBtn_1076 (components)
        const buyBtn_1076Button = new Button(buyBtn_1076);
        buyBtn_1076Button.spriteName = "tag";
        buyBtn_1076Button.callback = () => this.buy(1076);

        // priceNum_1076 (components)
        const priceNum_1076Pricetag = new Pricetag(priceNum_1076);
        priceNum_1076Pricetag.id = 1076;

        // nextpage13 (components)
        const nextpage13Button = new Button(nextpage13);
        nextpage13Button.spriteName = "nextpage";
        nextpage13Button.callback = () => this.nextPage();

        // backpage13 (components)
        const backpage13Button = new Button(backpage13);
        backpage13Button.spriteName = "backpage";
        backpage13Button.callback = () => this.prevPage();

        // buyBtn_4111 (components)
        const buyBtn_4111Button = new Button(buyBtn_4111);
        buyBtn_4111Button.spriteName = "tag";
        buyBtn_4111Button.callback = () => this.buy(4111);

        // priceNum_4111 (components)
        const priceNum_4111Pricetag = new Pricetag(priceNum_4111);
        priceNum_4111Pricetag.id = 4111;

        // buyBtn_4112 (components)
        const buyBtn_4112Button = new Button(buyBtn_4112);
        buyBtn_4112Button.spriteName = "tag";
        buyBtn_4112Button.callback = () => this.buy(4112);

        // priceNum_4112 (components)
        const priceNum_4112Pricetag = new Pricetag(priceNum_4112);
        priceNum_4112Pricetag.id = 4112;

        // nextpage14 (components)
        const nextpage14Button = new Button(nextpage14);
        nextpage14Button.spriteName = "nextpage";
        nextpage14Button.callback = () => this.nextPage();

        // backpage14 (components)
        const backpage14Button = new Button(backpage14);
        backpage14Button.spriteName = "backpage";
        backpage14Button.callback = () => this.prevPage();

        // buyBtn_1057 (components)
        const buyBtn_1057Button = new Button(buyBtn_1057);
        buyBtn_1057Button.spriteName = "tag";
        buyBtn_1057Button.callback = () => this.buy(1057);

        // priceNum_1057 (components)
        const priceNum_1057Pricetag = new Pricetag(priceNum_1057);
        priceNum_1057Pricetag.id = 1057;

        // buyBtn_4085 (components)
        const buyBtn_4085Button = new Button(buyBtn_4085);
        buyBtn_4085Button.spriteName = "tag";
        buyBtn_4085Button.callback = () => this.buy(4085);

        // priceNum_4085 (components)
        const priceNum_4085Pricetag = new Pricetag(priceNum_4085);
        priceNum_4085Pricetag.id = 4085;

        // buyBtn_4086 (components)
        const buyBtn_4086Button = new Button(buyBtn_4086);
        buyBtn_4086Button.spriteName = "tag";
        buyBtn_4086Button.callback = () => this.buy(4086);

        // priceNum_4086 (components)
        const priceNum_4086Pricetag = new Pricetag(priceNum_4086);
        priceNum_4086Pricetag.id = 4086;

        // buyBtn_1056 (components)
        const buyBtn_1056Button = new Button(buyBtn_1056);
        buyBtn_1056Button.spriteName = "tag";
        buyBtn_1056Button.callback = () => this.buy(1056);

        // priceNum_1056 (components)
        const priceNum_1056Pricetag = new Pricetag(priceNum_1056);
        priceNum_1056Pricetag.id = 1056;

        // nextpage15 (components)
        const nextpage15Button = new Button(nextpage15);
        nextpage15Button.spriteName = "nextpage";
        nextpage15Button.callback = () => this.nextPage();

        // backpage15 (components)
        const backpage15Button = new Button(backpage15);
        backpage15Button.spriteName = "backpage";
        backpage15Button.callback = () => this.prevPage();

        // buyBtn_4015 (components)
        const buyBtn_4015Button = new Button(buyBtn_4015);
        buyBtn_4015Button.spriteName = "tag";
        buyBtn_4015Button.callback = () => this.buy(4015);

        // priceNum_4015 (components)
        const priceNum_4015Pricetag = new Pricetag(priceNum_4015);
        priceNum_4015Pricetag.id = 4015;

        // buyBtn_347 (components)
        const buyBtn_347Button = new Button(buyBtn_347);
        buyBtn_347Button.spriteName = "tag";
        buyBtn_347Button.callback = () => this.buy(347);

        // priceNum_347 (components)
        const priceNum_347Pricetag = new Pricetag(priceNum_347);
        priceNum_347Pricetag.id = 347;

        // buyBtn_244 (components)
        const buyBtn_244Button = new Button(buyBtn_244);
        buyBtn_244Button.spriteName = "tag";
        buyBtn_244Button.callback = () => this.buy(244);

        // nextpage16 (components)
        const nextpage16Button = new Button(nextpage16);
        nextpage16Button.spriteName = "nextpage";
        nextpage16Button.callback = () => this.nextPage();

        // backpage16 (components)
        const backpage16Button = new Button(backpage16);
        backpage16Button.spriteName = "backpage";
        backpage16Button.callback = () => this.prevPage();

        // buyBtn_1010 (components)
        const buyBtn_1010Button = new Button(buyBtn_1010);
        buyBtn_1010Button.spriteName = "tag";
        buyBtn_1010Button.callback = () => this.buy(1010);

        // priceNum_1010 (components)
        const priceNum_1010Pricetag = new Pricetag(priceNum_1010);
        priceNum_1010Pricetag.id = 1010;

        // buyBtn_181 (components)
        const buyBtn_181Button = new Button(buyBtn_181);
        buyBtn_181Button.spriteName = "tag";
        buyBtn_181Button.callback = () => this.buy(181);

        // priceNum_181 (components)
        const priceNum_181Pricetag = new Pricetag(priceNum_181);
        priceNum_181Pricetag.id = 181;

        // buyBtn_4012 (components)
        const buyBtn_4012Button = new Button(buyBtn_4012);
        buyBtn_4012Button.spriteName = "tag";
        buyBtn_4012Button.callback = () => this.buy(4012);

        // priceNum_4012 (components)
        const priceNum_4012Pricetag = new Pricetag(priceNum_4012);
        priceNum_4012Pricetag.id = 4012;

        // buyBtn_1009 (components)
        const buyBtn_1009Button = new Button(buyBtn_1009);
        buyBtn_1009Button.spriteName = "tag";
        buyBtn_1009Button.callback = () => this.buy(1009);

        // priceNum_1009 (components)
        const priceNum_1009Pricetag = new Pricetag(priceNum_1009);
        priceNum_1009Pricetag.id = 1009;

        // buyBtn_842 (components)
        const buyBtn_842Button = new Button(buyBtn_842);
        buyBtn_842Button.spriteName = "tag";
        buyBtn_842Button.callback = () => this.buy(842);

        // priceNum_842 (components)
        const priceNum_842Pricetag = new Pricetag(priceNum_842);
        priceNum_842Pricetag.id = 842;

        // buyBtn_5003 (components)
        const buyBtn_5003Button = new Button(buyBtn_5003);
        buyBtn_5003Button.spriteName = "tag";
        buyBtn_5003Button.callback = () => this.buy(5003);

        // priceNum_5003 (components)
        const priceNum_5003Pricetag = new Pricetag(priceNum_5003);
        priceNum_5003Pricetag.id = 5003;

        // nextpage17 (components)
        const nextpage17Button = new Button(nextpage17);
        nextpage17Button.spriteName = "nextpage";
        nextpage17Button.callback = () => this.nextPage();

        // backpage17 (components)
        const backpage17Button = new Button(backpage17);
        backpage17Button.spriteName = "backpage";
        backpage17Button.callback = () => this.prevPage();

        // buyBtn_1012 (components)
        const buyBtn_1012Button = new Button(buyBtn_1012);
        buyBtn_1012Button.spriteName = "tag";
        buyBtn_1012Button.callback = () => this.buy(1012);

        // priceNum_1012 (components)
        const priceNum_1012Pricetag = new Pricetag(priceNum_1012);
        priceNum_1012Pricetag.id = 1012;

        // buyBtn_3005 (components)
        const buyBtn_3005Button = new Button(buyBtn_3005);
        buyBtn_3005Button.spriteName = "tag";
        buyBtn_3005Button.callback = () => this.buy(3005);

        // priceNum_3005 (components)
        const priceNum_3005Pricetag = new Pricetag(priceNum_3005);
        priceNum_3005Pricetag.id = 3005;

        // buyBtn_4014 (components)
        const buyBtn_4014Button = new Button(buyBtn_4014);
        buyBtn_4014Button.spriteName = "tag";
        buyBtn_4014Button.callback = () => this.buy(4014);

        // priceNum_4014 (components)
        const priceNum_4014Pricetag = new Pricetag(priceNum_4014);
        priceNum_4014Pricetag.id = 4014;

        // buyBtn_1011 (components)
        const buyBtn_1011Button = new Button(buyBtn_1011);
        buyBtn_1011Button.spriteName = "tag";
        buyBtn_1011Button.callback = () => this.buy(1011);

        // priceNum_1011 (components)
        const priceNum_1011Pricetag = new Pricetag(priceNum_1011);
        priceNum_1011Pricetag.id = 1011;

        // buyBtn_6008 (components)
        const buyBtn_6008Button = new Button(buyBtn_6008);
        buyBtn_6008Button.spriteName = "tag";
        buyBtn_6008Button.callback = () => this.buy(6008);

        // priceNum_6008 (components)
        const priceNum_6008Pricetag = new Pricetag(priceNum_6008);
        priceNum_6008Pricetag.id = 6008;

        // buyBtn_4013 (components)
        const buyBtn_4013Button = new Button(buyBtn_4013);
        buyBtn_4013Button.spriteName = "tag";
        buyBtn_4013Button.callback = () => this.buy(4013);

        // priceNum_4013 (components)
        const priceNum_4013Pricetag = new Pricetag(priceNum_4013);
        priceNum_4013Pricetag.id = 4013;

        // nextpage18 (components)
        const nextpage18Button = new Button(nextpage18);
        nextpage18Button.spriteName = "nextpage";
        nextpage18Button.callback = () => this.nextPage();

        // backpage18 (components)
        const backpage18Button = new Button(backpage18);
        backpage18Button.spriteName = "backpage";
        backpage18Button.callback = () => this.prevPage();

        // buyBtn_1025 (components)
        const buyBtn_1025Button = new Button(buyBtn_1025);
        buyBtn_1025Button.spriteName = "tag";
        buyBtn_1025Button.callback = () => this.buy(1025);

        // priceNum_1025 (components)
        const priceNum_1025Pricetag = new Pricetag(priceNum_1025);
        priceNum_1025Pricetag.id = 1025;

        // buyBtn_4038 (components)
        const buyBtn_4038Button = new Button(buyBtn_4038);
        buyBtn_4038Button.spriteName = "tag";
        buyBtn_4038Button.callback = () => this.buy(4038);

        // priceNum_4038 (components)
        const priceNum_4038Pricetag = new Pricetag(priceNum_4038);
        priceNum_4038Pricetag.id = 4038;

        // buyBtn_4036 (components)
        const buyBtn_4036Button = new Button(buyBtn_4036);
        buyBtn_4036Button.spriteName = "tag";
        buyBtn_4036Button.callback = () => this.buy(4036);

        // priceNum_4036 (components)
        const priceNum_4036Pricetag = new Pricetag(priceNum_4036);
        priceNum_4036Pricetag.id = 4036;

        // buyBtn_1023 (components)
        const buyBtn_1023Button = new Button(buyBtn_1023);
        buyBtn_1023Button.spriteName = "tag";
        buyBtn_1023Button.callback = () => this.buy(1023);

        // priceNum_1023 (components)
        const priceNum_1023Pricetag = new Pricetag(priceNum_1023);
        priceNum_1023Pricetag.id = 1023;

        // buyBtn_3008 (components)
        const buyBtn_3008Button = new Button(buyBtn_3008);
        buyBtn_3008Button.spriteName = "tag";
        buyBtn_3008Button.callback = () => this.buy(3008);

        // priceNum_3008 (components)
        const priceNum_3008Pricetag = new Pricetag(priceNum_3008);
        priceNum_3008Pricetag.id = 3008;

        // buyBtn_301 (components)
        const buyBtn_301Button = new Button(buyBtn_301);
        buyBtn_301Button.spriteName = "tag";
        buyBtn_301Button.callback = () => this.buy(301);

        // priceNum_301 (components)
        const priceNum_301Pricetag = new Pricetag(priceNum_301);
        priceNum_301Pricetag.id = 301;

        // nextpage19 (components)
        const nextpage19Button = new Button(nextpage19);
        nextpage19Button.spriteName = "nextpage";
        nextpage19Button.callback = () => this.nextPage();

        // backpage19 (components)
        const backpage19Button = new Button(backpage19);
        backpage19Button.spriteName = "backpage";
        backpage19Button.callback = () => this.prevPage();

        // buyBtn_4039 (components)
        const buyBtn_4039Button = new Button(buyBtn_4039);
        buyBtn_4039Button.spriteName = "tag";
        buyBtn_4039Button.callback = () => this.buy(4039);

        // priceNum_4039 (components)
        const priceNum_4039Pricetag = new Pricetag(priceNum_4039);
        priceNum_4039Pricetag.id = 4039;

        // buyBtn_6010 (components)
        const buyBtn_6010Button = new Button(buyBtn_6010);
        buyBtn_6010Button.spriteName = "tag";
        buyBtn_6010Button.callback = () => this.buy(6010);

        // priceNum_6010 (components)
        const priceNum_6010Pricetag = new Pricetag(priceNum_6010);
        priceNum_6010Pricetag.id = 6010;

        // buyBtn_4037 (components)
        const buyBtn_4037Button = new Button(buyBtn_4037);
        buyBtn_4037Button.spriteName = "tag";
        buyBtn_4037Button.callback = () => this.buy(4037);

        // priceNum_4037 (components)
        const priceNum_4037Pricetag = new Pricetag(priceNum_4037);
        priceNum_4037Pricetag.id = 4037;

        // buyBtn_1024 (components)
        const buyBtn_1024Button = new Button(buyBtn_1024);
        buyBtn_1024Button.spriteName = "tag";
        buyBtn_1024Button.callback = () => this.buy(1024);

        // priceNum_1024 (components)
        const priceNum_1024Pricetag = new Pricetag(priceNum_1024);
        priceNum_1024Pricetag.id = 1024;

        // nextpage20 (components)
        const nextpage20Button = new Button(nextpage20);
        nextpage20Button.spriteName = "nextpage";
        nextpage20Button.callback = () => this.nextPage();

        // backpage20 (components)
        const backpage20Button = new Button(backpage20);
        backpage20Button.spriteName = "backpage";
        backpage20Button.callback = () => this.prevPage();

        // buyBtn_1015 (components)
        const buyBtn_1015Button = new Button(buyBtn_1015);
        buyBtn_1015Button.spriteName = "tag";
        buyBtn_1015Button.callback = () => this.buy(1015);

        // priceNum_1015 (components)
        const priceNum_1015Pricetag = new Pricetag(priceNum_1015);
        priceNum_1015Pricetag.id = 1015;

        // buyBtn_4018 (components)
        const buyBtn_4018Button = new Button(buyBtn_4018);
        buyBtn_4018Button.spriteName = "tag";
        buyBtn_4018Button.callback = () => this.buy(4018);

        // priceNum_4018 (components)
        const priceNum_4018Pricetag = new Pricetag(priceNum_4018);
        priceNum_4018Pricetag.id = 4018;

        // buyBtn_4426 (components)
        const buyBtn_4426Button = new Button(buyBtn_4426);
        buyBtn_4426Button.spriteName = "tag";
        buyBtn_4426Button.callback = () => this.buy(4426);

        // priceNum_4426 (components)
        const priceNum_4426Pricetag = new Pricetag(priceNum_4426);
        priceNum_4426Pricetag.id = 4426;

        // nextpage21 (components)
        const nextpage21Button = new Button(nextpage21);
        nextpage21Button.spriteName = "nextpage";
        nextpage21Button.callback = () => this.nextPage();

        // backpage21 (components)
        const backpage21Button = new Button(backpage21);
        backpage21Button.spriteName = "backpage";
        backpage21Button.callback = () => this.prevPage();

        // buyBtn_479 (components)
        const buyBtn_479Button = new Button(buyBtn_479);
        buyBtn_479Button.spriteName = "tag";
        buyBtn_479Button.callback = () => this.buy(479);

        // priceNum_479 (components)
        const priceNum_479Pricetag = new Pricetag(priceNum_479);
        priceNum_479Pricetag.id = 479;

        // buyBtn_658 (components)
        const buyBtn_658Button = new Button(buyBtn_658);
        buyBtn_658Button.spriteName = "tag";
        buyBtn_658Button.callback = () => this.buy(658);

        // priceNum_658 (components)
        const priceNum_658Pricetag = new Pricetag(priceNum_658);
        priceNum_658Pricetag.id = 658;

        // buyBtn_254 (components)
        const buyBtn_254Button = new Button(buyBtn_254);
        buyBtn_254Button.spriteName = "tag";
        buyBtn_254Button.callback = () => this.buy(254);

        // priceNum_254 (components)
        const priceNum_254Pricetag = new Pricetag(priceNum_254);
        priceNum_254Pricetag.id = 254;

        // buyBtn_771 (components)
        const buyBtn_771Button = new Button(buyBtn_771);
        buyBtn_771Button.spriteName = "tag";
        buyBtn_771Button.callback = () => this.buy(771);

        // priceNum_771 (components)
        const priceNum_771Pricetag = new Pricetag(priceNum_771);
        priceNum_771Pricetag.id = 771;

        // buyBtn_110 (components)
        const buyBtn_110Button = new Button(buyBtn_110);
        buyBtn_110Button.spriteName = "tag";
        buyBtn_110Button.callback = () => this.buy(110);

        // priceNum_110 (components)
        const priceNum_110Pricetag = new Pricetag(priceNum_110);
        priceNum_110Pricetag.id = 110;

        // buyBtn_4004 (components)
        const buyBtn_4004Button = new Button(buyBtn_4004);
        buyBtn_4004Button.spriteName = "tag";
        buyBtn_4004Button.callback = () => this.buy(4004);

        // priceNum_4004 (components)
        const priceNum_4004Pricetag = new Pricetag(priceNum_4004);
        priceNum_4004Pricetag.id = 4004;

        // nextpage22 (components)
        const nextpage22Button = new Button(nextpage22);
        nextpage22Button.spriteName = "nextpage";
        nextpage22Button.callback = () => this.nextPage();

        // backpage22 (components)
        const backpage22Button = new Button(backpage22);
        backpage22Button.spriteName = "backpage";
        backpage22Button.callback = () => this.prevPage();

        // buyBtn_722 (components)
        const buyBtn_722Button = new Button(buyBtn_722);
        buyBtn_722Button.spriteName = "tag";
        buyBtn_722Button.callback = () => this.buy(722);

        // priceNum_722 (components)
        const priceNum_722Pricetag = new Pricetag(priceNum_722);
        priceNum_722Pricetag.id = 722;

        // buyBtn_3002 (components)
        const buyBtn_3002Button = new Button(buyBtn_3002);
        buyBtn_3002Button.spriteName = "tag";
        buyBtn_3002Button.callback = () => this.buy(3002);

        // priceNum_3002 (components)
        const priceNum_3002Pricetag = new Pricetag(priceNum_3002);
        priceNum_3002Pricetag.id = 3002;

        // buyBtn_772 (components)
        const buyBtn_772Button = new Button(buyBtn_772);
        buyBtn_772Button.spriteName = "tag";
        buyBtn_772Button.callback = () => this.buy(772);

        // priceNum_772 (components)
        const priceNum_772Pricetag = new Pricetag(priceNum_772);
        priceNum_772Pricetag.id = 772;

        // buyBtn_659 (components)
        const buyBtn_659Button = new Button(buyBtn_659);
        buyBtn_659Button.spriteName = "tag";
        buyBtn_659Button.callback = () => this.buy(659);

        // priceNum_659 (components)
        const priceNum_659Pricetag = new Pricetag(priceNum_659);
        priceNum_659Pricetag.id = 659;

        // nextpage23 (components)
        const nextpage23Button = new Button(nextpage23);
        nextpage23Button.spriteName = "nextpage";
        nextpage23Button.callback = () => this.nextPage();

        // backpage23 (components)
        const backpage23Button = new Button(backpage23);
        backpage23Button.spriteName = "backpage";
        backpage23Button.callback = () => this.prevPage();

        // nextpage24 (components)
        const nextpage24Button = new Button(nextpage24);
        nextpage24Button.spriteName = "nextpage";
        nextpage24Button.callback = () => this.nextPage();

        // backpage24 (components)
        const backpage24Button = new Button(backpage24);
        backpage24Button.spriteName = "backpage";
        backpage24Button.callback = () => this.prevPage();

        // buyBtn_122 (components)
        const buyBtn_122Button = new Button(buyBtn_122);
        buyBtn_122Button.spriteName = "tag";
        buyBtn_122Button.callback = () => this.buy(122);

        // priceNum_122 (components)
        const priceNum_122Pricetag = new Pricetag(priceNum_122);
        priceNum_122Pricetag.id = 122;

        // buyBtn_276 (components)
        const buyBtn_276Button = new Button(buyBtn_276);
        buyBtn_276Button.spriteName = "tag";
        buyBtn_276Button.callback = () => this.buy(276);

        // priceNum_276 (components)
        const priceNum_276Pricetag = new Pricetag(priceNum_276);
        priceNum_276Pricetag.id = 276;

        // buyBtn_2004 (components)
        const buyBtn_2004Button = new Button(buyBtn_2004);
        buyBtn_2004Button.spriteName = "tag";
        buyBtn_2004Button.callback = () => this.buy(2004);

        // priceNum_2004 (components)
        const priceNum_2004Pricetag = new Pricetag(priceNum_2004);
        priceNum_2004Pricetag.id = 2004;

        // buyBtn_1016 (components)
        const buyBtn_1016Button = new Button(buyBtn_1016);
        buyBtn_1016Button.spriteName = "tag";
        buyBtn_1016Button.callback = () => this.buy(1016);

        // priceNum_1016 (components)
        const priceNum_1016Pricetag = new Pricetag(priceNum_1016);
        priceNum_1016Pricetag.id = 1016;

        // buyBtn_266 (components)
        const buyBtn_266Button = new Button(buyBtn_266);
        buyBtn_266Button.spriteName = "tag";
        buyBtn_266Button.callback = () => this.buy(266);

        // priceNum_266 (components)
        const priceNum_266Pricetag = new Pricetag(priceNum_266);
        priceNum_266Pricetag.id = 266;

        // buyBtn_4021 (components)
        const buyBtn_4021Button = new Button(buyBtn_4021);
        buyBtn_4021Button.spriteName = "tag";
        buyBtn_4021Button.callback = () => this.buy(4021);

        // priceNum_4021 (components)
        const priceNum_4021Pricetag = new Pricetag(priceNum_4021);
        priceNum_4021Pricetag.id = 4021;

        // buyBtn_1199 (components)
        const buyBtn_1199Button = new Button(buyBtn_1199);
        buyBtn_1199Button.spriteName = "tag";
        buyBtn_1199Button.callback = () => this.buy(1199);

        // priceNum_1199 (components)
        const priceNum_1199Pricetag = new Pricetag(priceNum_1199);
        priceNum_1199Pricetag.id = 1199;

        // buyBtn_120 (components)
        const buyBtn_120Button = new Button(buyBtn_120);
        buyBtn_120Button.spriteName = "tag";
        buyBtn_120Button.callback = () => this.buy(120);

        // priceNum_120 (components)
        const priceNum_120Pricetag = new Pricetag(priceNum_120);
        priceNum_120Pricetag.id = 120;

        // buyBtn_245 (components)
        const buyBtn_245Button = new Button(buyBtn_245);
        buyBtn_245Button.spriteName = "tag";
        buyBtn_245Button.callback = () => this.buy(245);

        // priceNum_245 (components)
        const priceNum_245Pricetag = new Pricetag(priceNum_245);
        priceNum_245Pricetag.id = 245;

        // buyBtn_458 (components)
        const buyBtn_458Button = new Button(buyBtn_458);
        buyBtn_458Button.spriteName = "tag";
        buyBtn_458Button.callback = () => this.buy(458);

        // priceNum_458 (components)
        const priceNum_458Pricetag = new Pricetag(priceNum_458);
        priceNum_458Pricetag.id = 458;

        // buyBtn_268 (components)
        const buyBtn_268Button = new Button(buyBtn_268);
        buyBtn_268Button.spriteName = "tag";
        buyBtn_268Button.callback = () => this.buy(268);

        // priceNum_268 (components)
        const priceNum_268Pricetag = new Pricetag(priceNum_268);
        priceNum_268Pricetag.id = 268;

        // buyBtn_4280 (components)
        const buyBtn_4280Button = new Button(buyBtn_4280);
        buyBtn_4280Button.spriteName = "tag";
        buyBtn_4280Button.callback = () => this.buy(4280);

        // priceNum_4280 (components)
        const priceNum_4280Pricetag = new Pricetag(priceNum_4280);
        priceNum_4280Pricetag.id = 4280;

        // nextpage25 (components)
        const nextpage25Button = new Button(nextpage25);
        nextpage25Button.spriteName = "nextpage";
        nextpage25Button.callback = () => this.nextPage();

        // backpage25 (components)
        const backpage25Button = new Button(backpage25);
        backpage25Button.spriteName = "backpage";
        backpage25Button.callback = () => this.prevPage();

        // buyBtn_1116 (components)
        const buyBtn_1116Button = new Button(buyBtn_1116);
        buyBtn_1116Button.spriteName = "tag";
        buyBtn_1116Button.callback = () => this.buy(1116);

        // priceNum_1116 (components)
        const priceNum_1116Pricetag = new Pricetag(priceNum_1116);
        priceNum_1116Pricetag.id = 1116;

        // buyBtn_2016 (components)
        const buyBtn_2016Button = new Button(buyBtn_2016);
        buyBtn_2016Button.spriteName = "tag";
        buyBtn_2016Button.callback = () => this.buy(2016);

        // priceNum_2016 (components)
        const priceNum_2016Pricetag = new Pricetag(priceNum_2016);
        priceNum_2016Pricetag.id = 2016;

        // buyBtn_6033 (components)
        const buyBtn_6033Button = new Button(buyBtn_6033);
        buyBtn_6033Button.spriteName = "tag";
        buyBtn_6033Button.callback = () => this.buy(6033);

        // priceNum_6033 (components)
        const priceNum_6033Pricetag = new Pricetag(priceNum_6033);
        priceNum_6033Pricetag.id = 6033;

        // buyBtn_4190 (components)
        const buyBtn_4190Button = new Button(buyBtn_4190);
        buyBtn_4190Button.spriteName = "tag";
        buyBtn_4190Button.callback = () => this.buy(4190);

        // priceNum_4190 (components)
        const priceNum_4190Pricetag = new Pricetag(priceNum_4190);
        priceNum_4190Pricetag.id = 4190;

        // buyBtn_1114 (components)
        const buyBtn_1114Button = new Button(buyBtn_1114);
        buyBtn_1114Button.spriteName = "tag";
        buyBtn_1114Button.callback = () => this.buy(1114);

        // priceNum_1114 (components)
        const priceNum_1114Pricetag = new Pricetag(priceNum_1114);
        priceNum_1114Pricetag.id = 1114;

        // buyBtn_4192 (components)
        const buyBtn_4192Button = new Button(buyBtn_4192);
        buyBtn_4192Button.spriteName = "tag";
        buyBtn_4192Button.callback = () => this.buy(4192);

        // priceNum_4192 (components)
        const priceNum_4192Pricetag = new Pricetag(priceNum_4192);
        priceNum_4192Pricetag.id = 4192;

        // block_sun (components)
        new Interactive(block_sun);

        // exit_sun (components)
        const exit_sunSimpleButton = new SimpleButton(exit_sun);
        exit_sunSimpleButton.callback = () => this.secretClose(1272);

        // buyBtn_1272 (components)
        const buyBtn_1272Button = new Button(buyBtn_1272);
        buyBtn_1272Button.spriteName = "tag";
        buyBtn_1272Button.callback = () => this.buy(1272);

        // priceNum_1272 (components)
        const priceNum_1272Pricetag = new Pricetag(priceNum_1272);
        priceNum_1272Pricetag.id = 1272;

        // nameTag_1272 (components)
        const nameTag_1272Name = new Name(nameTag_1272);
        nameTag_1272Name.id = 1272;

        // sec_sun (components)
        const sec_sunSimpleButton = new SimpleButton(sec_sun);
        sec_sunSimpleButton.callback = () => this.onSecret(1272);

        // nextpage26 (components)
        const nextpage26Button = new Button(nextpage26);
        nextpage26Button.spriteName = "nextpage";
        nextpage26Button.callback = () => this.nextPage();

        // backpage26 (components)
        const backpage26Button = new Button(backpage26);
        backpage26Button.spriteName = "backpage";
        backpage26Button.callback = () => this.prevPage();

        // buyBtn_1115 (components)
        const buyBtn_1115Button = new Button(buyBtn_1115);
        buyBtn_1115Button.spriteName = "tag";
        buyBtn_1115Button.callback = () => this.buy(1115);

        // priceNum_1115 (components)
        const priceNum_1115Pricetag = new Pricetag(priceNum_1115);
        priceNum_1115Pricetag.id = 1115;

        // buyBtn_6034 (components)
        const buyBtn_6034Button = new Button(buyBtn_6034);
        buyBtn_6034Button.spriteName = "tag";
        buyBtn_6034Button.callback = () => this.buy(6034);

        // priceNum_6034 (components)
        const priceNum_6034Pricetag = new Pricetag(priceNum_6034);
        priceNum_6034Pricetag.id = 6034;

        // buyBtn_4191 (components)
        const buyBtn_4191Button = new Button(buyBtn_4191);
        buyBtn_4191Button.spriteName = "tag";
        buyBtn_4191Button.callback = () => this.buy(4191);

        // priceNum_4191 (components)
        const priceNum_4191Pricetag = new Pricetag(priceNum_4191);
        priceNum_4191Pricetag.id = 4191;

        // buyBtn_2017 (components)
        const buyBtn_2017Button = new Button(buyBtn_2017);
        buyBtn_2017Button.spriteName = "tag";
        buyBtn_2017Button.callback = () => this.buy(2017);

        // priceNum_2017 (components)
        const priceNum_2017Pricetag = new Pricetag(priceNum_2017);
        priceNum_2017Pricetag.id = 2017;

        // buyBtn_4194 (components)
        const buyBtn_4194Button = new Button(buyBtn_4194);
        buyBtn_4194Button.spriteName = "tag";
        buyBtn_4194Button.callback = () => this.buy(4194);

        // priceNum_4194 (components)
        const priceNum_4194Pricetag = new Pricetag(priceNum_4194);
        priceNum_4194Pricetag.id = 4194;

        // buyBtn_3041 (components)
        const buyBtn_3041Button = new Button(buyBtn_3041);
        buyBtn_3041Button.spriteName = "tag";
        buyBtn_3041Button.callback = () => this.buy(3041);

        // priceNum_3041 (components)
        const priceNum_3041Pricetag = new Pricetag(priceNum_3041);
        priceNum_3041Pricetag.id = 3041;

        // buyBtn_1117 (components)
        const buyBtn_1117Button = new Button(buyBtn_1117);
        buyBtn_1117Button.spriteName = "tag";
        buyBtn_1117Button.callback = () => this.buy(1117);

        // priceNum_1117 (components)
        const priceNum_1117Pricetag = new Pricetag(priceNum_1117);
        priceNum_1117Pricetag.id = 1117;

        // nextpage27 (components)
        const nextpage27Button = new Button(nextpage27);
        nextpage27Button.spriteName = "nextpage";
        nextpage27Button.callback = () => this.nextPage();

        // backpage27 (components)
        const backpage27Button = new Button(backpage27);
        backpage27Button.spriteName = "backpage";
        backpage27Button.callback = () => this.prevPage();

        // buyBtn_367_again (components)
        const buyBtn_367_againButton = new Button(buyBtn_367_again);
        buyBtn_367_againButton.spriteName = "tag";
        buyBtn_367_againButton.callback = () => this.buy(367);

        // priceNum_367_again (components)
        const priceNum_367_againPricetag = new Pricetag(priceNum_367_again);
        priceNum_367_againPricetag.id = 367;

        // buyBtn_477 (components)
        const buyBtn_477Button = new Button(buyBtn_477);
        buyBtn_477Button.spriteName = "tag";
        buyBtn_477Button.callback = () => this.buy(477);

        // priceNum_477 (components)
        const priceNum_477Pricetag = new Pricetag(priceNum_477);
        priceNum_477Pricetag.id = 477;

        // buyBtn_762 (components)
        const buyBtn_762Button = new Button(buyBtn_762);
        buyBtn_762Button.spriteName = "tag";
        buyBtn_762Button.callback = () => this.buy(762);

        // priceNum_762 (components)
        const priceNum_762Pricetag = new Pricetag(priceNum_762);
        priceNum_762Pricetag.id = 762;

        // buyBtn_763 (components)
        const buyBtn_763Button = new Button(buyBtn_763);
        buyBtn_763Button.spriteName = "tag";
        buyBtn_763Button.callback = () => this.buy(763);

        // priceNum_763 (components)
        const priceNum_763Pricetag = new Pricetag(priceNum_763);
        priceNum_763Pricetag.id = 763;

        // nextpage28 (components)
        const nextpage28Button = new Button(nextpage28);
        nextpage28Button.spriteName = "nextpage";
        nextpage28Button.callback = () => this.nextPage();

        // backpage28 (components)
        const backpage28Button = new Button(backpage28);
        backpage28Button.spriteName = "backpage";
        backpage28Button.callback = () => this.prevPage();

        // buyBtn_476 (components)
        const buyBtn_476Button = new Button(buyBtn_476);
        buyBtn_476Button.spriteName = "tag";
        buyBtn_476Button.callback = () => this.buy(476);

        // priceNum_476 (components)
        const priceNum_476Pricetag = new Pricetag(priceNum_476);
        priceNum_476Pricetag.id = 476;

        // buyBtn_761 (components)
        const buyBtn_761Button = new Button(buyBtn_761);
        buyBtn_761Button.spriteName = "tag";
        buyBtn_761Button.callback = () => this.buy(761);

        // priceNum_761 (components)
        const priceNum_761Pricetag = new Pricetag(priceNum_761);
        priceNum_761Pricetag.id = 761;

        // buyBtn_760 (components)
        const buyBtn_760Button = new Button(buyBtn_760);
        buyBtn_760Button.spriteName = "tag";
        buyBtn_760Button.callback = () => this.buy(760);

        // priceNum_760 (components)
        const priceNum_760Pricetag = new Pricetag(priceNum_760);
        priceNum_760Pricetag.id = 760;

        // buyBtn_475 (components)
        const buyBtn_475Button = new Button(buyBtn_475);
        buyBtn_475Button.spriteName = "tag";
        buyBtn_475Button.callback = () => this.buy(475);

        // priceNum_475 (components)
        const priceNum_475Pricetag = new Pricetag(priceNum_475);
        priceNum_475Pricetag.id = 475;

        // block_ruff (components)
        new Interactive(block_ruff);

        // exit_ruff (components)
        const exit_ruffSimpleButton = new SimpleButton(exit_ruff);
        exit_ruffSimpleButton.callback = () => this.secretClose(186);

        // buyBtn_186 (components)
        const buyBtn_186Button = new Button(buyBtn_186);
        buyBtn_186Button.spriteName = "tag";
        buyBtn_186Button.callback = () => this.buy(186);

        // priceNum_186 (components)
        const priceNum_186Pricetag = new Pricetag(priceNum_186);
        priceNum_186Pricetag.id = 186;

        // nameTag_186 (components)
        const nameTag_186Name = new Name(nameTag_186);
        nameTag_186Name.id = 186;

        // sec_ruff (components)
        const sec_ruffSimpleButton = new SimpleButton(sec_ruff);
        sec_ruffSimpleButton.callback = () => this.onSecret(186);

        // nextpage29 (components)
        const nextpage29Button = new Button(nextpage29);
        nextpage29Button.spriteName = "nextpage";
        nextpage29Button.callback = () => this.nextPage();

        // backpage29 (components)
        const backpage29Button = new Button(backpage29);
        backpage29Button.spriteName = "backpage";
        backpage29Button.callback = () => this.prevPage();

        // nextpage30 (components)
        const nextpage30Button = new Button(nextpage30);
        nextpage30Button.spriteName = "nextpage";
        nextpage30Button.callback = () => this.nextPage();

        // backpage30 (components)
        const backpage30Button = new Button(backpage30);
        backpage30Button.spriteName = "backpage";
        backpage30Button.callback = () => this.prevPage();

        // buyBtn_1102 (components)
        const buyBtn_1102Button = new Button(buyBtn_1102);
        buyBtn_1102Button.spriteName = "tag";
        buyBtn_1102Button.callback = () => this.buy(1102);

        // priceNum_1102 (components)
        const priceNum_1102Pricetag = new Pricetag(priceNum_1102);
        priceNum_1102Pricetag.id = 1102;

        // buyBtn_3037 (components)
        const buyBtn_3037Button = new Button(buyBtn_3037);
        buyBtn_3037Button.spriteName = "tag";
        buyBtn_3037Button.callback = () => this.buy(3037);

        // priceNum_3037 (components)
        const priceNum_3037Pricetag = new Pricetag(priceNum_3037);
        priceNum_3037Pricetag.id = 3037;

        // buyBtn_3036 (components)
        const buyBtn_3036Button = new Button(buyBtn_3036);
        buyBtn_3036Button.spriteName = "tag";
        buyBtn_3036Button.callback = () => this.buy(3036);

        // priceNum_3036 (components)
        const priceNum_3036Pricetag = new Pricetag(priceNum_3036);
        priceNum_3036Pricetag.id = 3036;

        // buyBtn_1101 (components)
        const buyBtn_1101Button = new Button(buyBtn_1101);
        buyBtn_1101Button.spriteName = "tag";
        buyBtn_1101Button.callback = () => this.buy(1101);

        // priceNum_1101 (components)
        const priceNum_1101Pricetag = new Pricetag(priceNum_1101);
        priceNum_1101Pricetag.id = 1101;

        // buyBtn_4136 (components)
        const buyBtn_4136Button = new Button(buyBtn_4136);
        buyBtn_4136Button.spriteName = "tag";
        buyBtn_4136Button.callback = () => this.buy(4136);

        // priceNum_4136 (components)
        const priceNum_4136Pricetag = new Pricetag(priceNum_4136);
        priceNum_4136Pricetag.id = 4136;

        // buyBtn_4137 (components)
        const buyBtn_4137Button = new Button(buyBtn_4137);
        buyBtn_4137Button.spriteName = "tag";
        buyBtn_4137Button.callback = () => this.buy(4137);

        // priceNum_4137 (components)
        const priceNum_4137Pricetag = new Pricetag(priceNum_4137);
        priceNum_4137Pricetag.id = 4137;

        // buyBtn_472 (components)
        const buyBtn_472Button = new Button(buyBtn_472);
        buyBtn_472Button.spriteName = "tag";
        buyBtn_472Button.callback = () => this.buy(472);

        // priceNum_472 (components)
        const priceNum_472Pricetag = new Pricetag(priceNum_472);
        priceNum_472Pricetag.id = 472;

        // buyBtn_4135 (components)
        const buyBtn_4135Button = new Button(buyBtn_4135);
        buyBtn_4135Button.spriteName = "tag";
        buyBtn_4135Button.callback = () => this.buy(4135);

        // priceNum_4135 (components)
        const priceNum_4135Pricetag = new Pricetag(priceNum_4135);
        priceNum_4135Pricetag.id = 4135;

        // buyBtn_227 (components)
        const buyBtn_227Button = new Button(buyBtn_227);
        buyBtn_227Button.spriteName = "tag";
        buyBtn_227Button.callback = () => this.buy(227);

        // priceNum_227 (components)
        const priceNum_227Pricetag = new Pricetag(priceNum_227);
        priceNum_227Pricetag.id = 227;

        // buyBtn_4138 (components)
        const buyBtn_4138Button = new Button(buyBtn_4138);
        buyBtn_4138Button.spriteName = "tag";
        buyBtn_4138Button.callback = () => this.buy(4138);

        // priceNum_4138 (components)
        const priceNum_4138Pricetag = new Pricetag(priceNum_4138);
        priceNum_4138Pricetag.id = 4138;

        // buyBtn_309 (components)
        const buyBtn_309Button = new Button(buyBtn_309);
        buyBtn_309Button.spriteName = "tag";
        buyBtn_309Button.callback = () => this.buy(309);

        // priceNum_309 (components)
        const priceNum_309Pricetag = new Pricetag(priceNum_309);
        priceNum_309Pricetag.id = 309;

        // block_point (components)
        new Interactive(block_point);

        // exit_point (components)
        const exit_pointSimpleButton = new SimpleButton(exit_point);
        exit_pointSimpleButton.callback = () => this.secretClose(6020);

        // buyBtn_6020 (components)
        const buyBtn_6020Button = new Button(buyBtn_6020);
        buyBtn_6020Button.spriteName = "tag";
        buyBtn_6020Button.callback = () => this.buy(6020);

        // priceNum_6020 (components)
        const priceNum_6020Pricetag = new Pricetag(priceNum_6020);
        priceNum_6020Pricetag.id = 6020;

        // nameTag_6020 (components)
        const nameTag_6020Name = new Name(nameTag_6020);
        nameTag_6020Name.id = 6020;

        // sec_point (components)
        const sec_pointSimpleButton = new SimpleButton(sec_point);
        sec_pointSimpleButton.callback = () => this.onSecret(6020);

        // nextpage31 (components)
        const nextpage31Button = new Button(nextpage31);
        nextpage31Button.spriteName = "nextpage";
        nextpage31Button.callback = () => this.nextPage();

        // backpage31 (components)
        const backpage31Button = new Button(backpage31);
        backpage31Button.spriteName = "backpage";
        backpage31Button.callback = () => this.prevPage();

        // buyBtn_2043 (components)
        const buyBtn_2043Button = new Button(buyBtn_2043);
        buyBtn_2043Button.spriteName = "tag";
        buyBtn_2043Button.callback = () => this.buy(2043);

        // priceNum_2043 (components)
        const priceNum_2043Pricetag = new Pricetag(priceNum_2043);
        priceNum_2043Pricetag.id = 2043;

        // buyBtn_4467 (components)
        const buyBtn_4467Button = new Button(buyBtn_4467);
        buyBtn_4467Button.spriteName = "tag";
        buyBtn_4467Button.callback = () => this.buy(4467);

        // priceNum_4467 (components)
        const priceNum_4467Pricetag = new Pricetag(priceNum_4467);
        priceNum_4467Pricetag.id = 4467;

        // buyBtn_4468 (components)
        const buyBtn_4468Button = new Button(buyBtn_4468);
        buyBtn_4468Button.spriteName = "tag";
        buyBtn_4468Button.callback = () => this.buy(4468);

        // priceNum_4468 (components)
        const priceNum_4468Pricetag = new Pricetag(priceNum_4468);
        priceNum_4468Pricetag.id = 4468;

        // buyBtn_4466 (components)
        const buyBtn_4466Button = new Button(buyBtn_4466);
        buyBtn_4466Button.spriteName = "tag";
        buyBtn_4466Button.callback = () => this.buy(4466);

        // priceNum_4466 (components)
        const priceNum_4466Pricetag = new Pricetag(priceNum_4466);
        priceNum_4466Pricetag.id = 4466;

        // nextpage32 (components)
        const nextpage32Button = new Button(nextpage32);
        nextpage32Button.spriteName = "nextpage";
        nextpage32Button.callback = () => this.nextPage();

        // backpage32 (components)
        const backpage32Button = new Button(backpage32);
        backpage32Button.spriteName = "backpage";
        backpage32Button.callback = () => this.prevPage();

        // buyBtn_1106 (components)
        const buyBtn_1106Button = new Button(buyBtn_1106);
        buyBtn_1106Button.spriteName = "tag";
        buyBtn_1106Button.callback = () => this.buy(1106);

        // priceNum_1106 (components)
        const priceNum_1106Pricetag = new Pricetag(priceNum_1106);
        priceNum_1106Pricetag.id = 1106;

        // buyBtn_4146 (components)
        const buyBtn_4146Button = new Button(buyBtn_4146);
        buyBtn_4146Button.spriteName = "tag";
        buyBtn_4146Button.callback = () => this.buy(4146);

        // priceNum_4146 (components)
        const priceNum_4146Pricetag = new Pricetag(priceNum_4146);
        priceNum_4146Pricetag.id = 4146;

        // buyBtn_5131 (components)
        const buyBtn_5131Button = new Button(buyBtn_5131);
        buyBtn_5131Button.spriteName = "tag";
        buyBtn_5131Button.callback = () => this.buy(5131);

        // priceNum_5131 (components)
        const priceNum_5131Pricetag = new Pricetag(priceNum_5131);
        priceNum_5131Pricetag.id = 5131;

        // buyBtn_3038 (components)
        const buyBtn_3038Button = new Button(buyBtn_3038);
        buyBtn_3038Button.spriteName = "tag";
        buyBtn_3038Button.callback = () => this.buy(3038);

        // priceNum_3038 (components)
        const priceNum_3038Pricetag = new Pricetag(priceNum_3038);
        priceNum_3038Pricetag.id = 3038;

        // buyBtn_119 (components)
        const buyBtn_119Button = new Button(buyBtn_119);
        buyBtn_119Button.spriteName = "tag";
        buyBtn_119Button.callback = () => this.buy(119);

        // priceNum_119 (components)
        const priceNum_119Pricetag = new Pricetag(priceNum_119);
        priceNum_119Pricetag.id = 119;

        // nextpage33 (components)
        const nextpage33Button = new Button(nextpage33);
        nextpage33Button.spriteName = "nextpage";
        nextpage33Button.callback = () => this.nextPage();

        // backpage33 (components)
        const backpage33Button = new Button(backpage33);
        backpage33Button.spriteName = "backpage";
        backpage33Button.callback = () => this.prevPage();

        // exit_34 (components)
        const exit_34SimpleButton = new SimpleButton(exit_34);
        exit_34SimpleButton.callback = () => this.scene.stop();

        // backpage (components)
        const backpageButton = new Button(backpage);
        backpageButton.spriteName = "backpage";
        backpageButton.callback = () => this.prevPage();

        // exit (components)
        const exitSimpleButton = new SimpleButton(exit);
        exitSimpleButton.callback = () => this.scene.stop();

        this.bgholder1 = bgholder1;
        this.bgholder2 = bgholder2;
        this.bgholder3 = bgholder3;
        this.bgholder4 = bgholder4;
        this.bgholder5 = bgholder5;
        this.bgholder6 = bgholder6;
        this.bgholder7 = bgholder7;
        this.bgholder8 = bgholder8;
        this.bgholder9 = bgholder9;
        this.bgholder10 = bgholder10;
        this.bgholder11 = bgholder11;
        this.rectangle = rectangle;
        this.rectangle1 = rectangle1;
        this.rectangle2 = rectangle2;
        this.rectangle3 = rectangle3;
        this.rectangle4 = rectangle4;
        this.rectangle5 = rectangle5;
        this.rectangle6 = rectangle6;
        this.rectangle7 = rectangle7;
        this.rectangle8 = rectangle8;
        this.rectangle9 = rectangle9;
        this.rectangle10 = rectangle10;
        this.buyBtn_489 = buyBtn_489;
        this.priceNum_489 = priceNum_489;
        this.buyBtn_5580 = buyBtn_5580;
        this.priceNum_5580 = priceNum_5580;
        this.buyBtn_675 = buyBtn_675;
        this.priceNum_675 = priceNum_675;
        this.buyBtn_834 = buyBtn_834;
        this.priceNum_834 = priceNum_834;
        this.buyBtn_835 = buyBtn_835;
        this.priceNum_835 = priceNum_835;
        this.buyBtn_190 = buyBtn_190;
        this.priceNum_190 = priceNum_190;
        this.buyBtn_126 = buyBtn_126;
        this.priceNum_126 = priceNum_126;
        this.sec_212 = sec_212;
        this.buyBtn_212 = buyBtn_212;
        this.priceNum_212 = priceNum_212;
        this.nameTag_210 = nameTag_210;
        this.sec_skirt = sec_skirt;
        this.buyBtn_676 = buyBtn_676;
        this.priceNum_676 = priceNum_676;
        this.buyBtn_127 = buyBtn_127;
        this.priceNum_127 = priceNum_127;
        this.buyBtn_128 = buyBtn_128;
        this.priceNum_128 = priceNum_128;
        this.buyBtn_665 = buyBtn_665;
        this.priceNum_665 = priceNum_665;
        this.buyBtn_786 = buyBtn_786;
        this.priceNum_786 = priceNum_786;
        this.buyBtn_787 = buyBtn_787;
        this.priceNum_787 = priceNum_787;
        this.buyBtn_316 = buyBtn_316;
        this.priceNum_316 = priceNum_316;
        this.buyBtn_432 = buyBtn_432;
        this.priceNum_432 = priceNum_432;
        this.buyBtn_327 = buyBtn_327;
        this.priceNum_327 = priceNum_327;
        this.sec_716 = sec_716;
        this.buyBtn_716 = buyBtn_716;
        this.priceNum_716 = priceNum_716;
        this.nameTag_716 = nameTag_716;
        this.sec_crook = sec_crook;
        this.buyBtn_666 = buyBtn_666;
        this.priceNum_666 = priceNum_666;
        this.buyBtn_789 = buyBtn_789;
        this.priceNum_789 = priceNum_789;
        this.buyBtn_788 = buyBtn_788;
        this.priceNum_788 = priceNum_788;
        this.buyBtn_715 = buyBtn_715;
        this.priceNum_715 = priceNum_715;
        this.buyBtn_123 = buyBtn_123;
        this.priceNum_123 = priceNum_123;
        this.buyBtn_302 = buyBtn_302;
        this.priceNum_302 = priceNum_302;
        this.buyBtn_315 = buyBtn_315;
        this.priceNum_315 = priceNum_315;
        this.buyBtn_124 = buyBtn_124;
        this.priceNum_124 = priceNum_124;
        this.buyBtn_765 = buyBtn_765;
        this.priceNum_765 = priceNum_765;
        this.buyBtn_766 = buyBtn_766;
        this.priceNum_766 = priceNum_766;
        this.buyBtn_767 = buyBtn_767;
        this.priceNum_767 = priceNum_767;
        this.buyBtn_195 = buyBtn_195;
        this.priceNum_195 = priceNum_195;
        this.buyBtn_113 = buyBtn_113;
        this.priceNum_113 = priceNum_113;
        this.buyBtn_4457 = buyBtn_4457;
        this.priceNum_4457 = priceNum_4457;
        this.buyBtn_6096 = buyBtn_6096;
        this.priceNum_6096 = priceNum_6096;
        this.buyBtn_4456 = buyBtn_4456;
        this.priceNum_4456 = priceNum_4456;
        this.buyBtn_4455 = buyBtn_4455;
        this.priceNum_4455 = priceNum_4455;
        this.buyBtn_6095 = buyBtn_6095;
        this.priceNum_6095 = priceNum_6095;
        this.buyBtn_132 = buyBtn_132;
        this.priceNum_132 = priceNum_132;
        this.buyBtn_4113 = buyBtn_4113;
        this.priceNum_4113 = priceNum_4113;
        this.buyBtn_4114 = buyBtn_4114;
        this.priceNum_4114 = priceNum_4114;
        this.buyBtn_2003 = buyBtn_2003;
        this.priceNum_2003 = priceNum_2003;
        this.buyBtn_364 = buyBtn_364;
        this.priceNum_364 = priceNum_364;
        this.buyBtn_367 = buyBtn_367;
        this.priceNum_367 = priceNum_367;
        this.buyBtn_308 = buyBtn_308;
        this.priceNum_308 = priceNum_308;
        this.buyBtn_768 = buyBtn_768;
        this.priceNum_768 = priceNum_768;
        this.buyBtn_3029 = buyBtn_3029;
        this.priceNum_3029 = priceNum_3029;
        this.buyBtn_5044 = buyBtn_5044;
        this.priceNum_5044 = priceNum_5044;
        this.buyBtn_1077 = buyBtn_1077;
        this.priceNum_1077 = priceNum_1077;
        this.buyBtn_4110 = buyBtn_4110;
        this.priceNum_4110 = priceNum_4110;
        this.buyBtn_1076 = buyBtn_1076;
        this.priceNum_1076 = priceNum_1076;
        this.buyBtn_4111 = buyBtn_4111;
        this.priceNum_4111 = priceNum_4111;
        this.buyBtn_4112 = buyBtn_4112;
        this.priceNum_4112 = priceNum_4112;
        this.buyBtn_1057 = buyBtn_1057;
        this.priceNum_1057 = priceNum_1057;
        this.buyBtn_4085 = buyBtn_4085;
        this.priceNum_4085 = priceNum_4085;
        this.buyBtn_4086 = buyBtn_4086;
        this.priceNum_4086 = priceNum_4086;
        this.buyBtn_1056 = buyBtn_1056;
        this.priceNum_1056 = priceNum_1056;
        this.buyBtn_4015 = buyBtn_4015;
        this.priceNum_4015 = priceNum_4015;
        this.buyBtn_347 = buyBtn_347;
        this.priceNum_347 = priceNum_347;
        this.buyBtn_244 = buyBtn_244;
        this.priceNum_244 = priceNum_244;
        this.buyBtn_1010 = buyBtn_1010;
        this.priceNum_1010 = priceNum_1010;
        this.buyBtn_181 = buyBtn_181;
        this.priceNum_181 = priceNum_181;
        this.buyBtn_4012 = buyBtn_4012;
        this.priceNum_4012 = priceNum_4012;
        this.buyBtn_1009 = buyBtn_1009;
        this.priceNum_1009 = priceNum_1009;
        this.buyBtn_842 = buyBtn_842;
        this.priceNum_842 = priceNum_842;
        this.buyBtn_5003 = buyBtn_5003;
        this.priceNum_5003 = priceNum_5003;
        this.buyBtn_1012 = buyBtn_1012;
        this.priceNum_1012 = priceNum_1012;
        this.buyBtn_3005 = buyBtn_3005;
        this.priceNum_3005 = priceNum_3005;
        this.buyBtn_4014 = buyBtn_4014;
        this.priceNum_4014 = priceNum_4014;
        this.buyBtn_1011 = buyBtn_1011;
        this.priceNum_1011 = priceNum_1011;
        this.buyBtn_6008 = buyBtn_6008;
        this.priceNum_6008 = priceNum_6008;
        this.buyBtn_4013 = buyBtn_4013;
        this.priceNum_4013 = priceNum_4013;
        this.buyBtn_1025 = buyBtn_1025;
        this.priceNum_1025 = priceNum_1025;
        this.buyBtn_4038 = buyBtn_4038;
        this.priceNum_4038 = priceNum_4038;
        this.buyBtn_4036 = buyBtn_4036;
        this.priceNum_4036 = priceNum_4036;
        this.buyBtn_1023 = buyBtn_1023;
        this.priceNum_1023 = priceNum_1023;
        this.buyBtn_3008 = buyBtn_3008;
        this.priceNum_3008 = priceNum_3008;
        this.buyBtn_301 = buyBtn_301;
        this.priceNum_301 = priceNum_301;
        this.buyBtn_4039 = buyBtn_4039;
        this.priceNum_4039 = priceNum_4039;
        this.buyBtn_6010 = buyBtn_6010;
        this.priceNum_6010 = priceNum_6010;
        this.buyBtn_4037 = buyBtn_4037;
        this.priceNum_4037 = priceNum_4037;
        this.buyBtn_1024 = buyBtn_1024;
        this.priceNum_1024 = priceNum_1024;
        this.buyBtn_1015 = buyBtn_1015;
        this.priceNum_1015 = priceNum_1015;
        this.buyBtn_4018 = buyBtn_4018;
        this.priceNum_4018 = priceNum_4018;
        this.buyBtn_4426 = buyBtn_4426;
        this.priceNum_4426 = priceNum_4426;
        this.buyBtn_479 = buyBtn_479;
        this.priceNum_479 = priceNum_479;
        this.buyBtn_658 = buyBtn_658;
        this.priceNum_658 = priceNum_658;
        this.buyBtn_254 = buyBtn_254;
        this.priceNum_254 = priceNum_254;
        this.buyBtn_771 = buyBtn_771;
        this.priceNum_771 = priceNum_771;
        this.buyBtn_110 = buyBtn_110;
        this.priceNum_110 = priceNum_110;
        this.buyBtn_4004 = buyBtn_4004;
        this.priceNum_4004 = priceNum_4004;
        this.buyBtn_722 = buyBtn_722;
        this.priceNum_722 = priceNum_722;
        this.buyBtn_3002 = buyBtn_3002;
        this.priceNum_3002 = priceNum_3002;
        this.buyBtn_772 = buyBtn_772;
        this.priceNum_772 = priceNum_772;
        this.buyBtn_659 = buyBtn_659;
        this.priceNum_659 = priceNum_659;
        this.buyBtn_122 = buyBtn_122;
        this.priceNum_122 = priceNum_122;
        this.buyBtn_276 = buyBtn_276;
        this.priceNum_276 = priceNum_276;
        this.buyBtn_2004 = buyBtn_2004;
        this.priceNum_2004 = priceNum_2004;
        this.buyBtn_1016 = buyBtn_1016;
        this.priceNum_1016 = priceNum_1016;
        this.buyBtn_266 = buyBtn_266;
        this.priceNum_266 = priceNum_266;
        this.buyBtn_4021 = buyBtn_4021;
        this.priceNum_4021 = priceNum_4021;
        this.buyBtn_1199 = buyBtn_1199;
        this.priceNum_1199 = priceNum_1199;
        this.buyBtn_120 = buyBtn_120;
        this.priceNum_120 = priceNum_120;
        this.buyBtn_245 = buyBtn_245;
        this.priceNum_245 = priceNum_245;
        this.buyBtn_458 = buyBtn_458;
        this.priceNum_458 = priceNum_458;
        this.buyBtn_268 = buyBtn_268;
        this.priceNum_268 = priceNum_268;
        this.buyBtn_4280 = buyBtn_4280;
        this.priceNum_4280 = priceNum_4280;
        this.buyBtn_1116 = buyBtn_1116;
        this.priceNum_1116 = priceNum_1116;
        this.buyBtn_2016 = buyBtn_2016;
        this.priceNum_2016 = priceNum_2016;
        this.buyBtn_6033 = buyBtn_6033;
        this.priceNum_6033 = priceNum_6033;
        this.buyBtn_4190 = buyBtn_4190;
        this.priceNum_4190 = priceNum_4190;
        this.buyBtn_1114 = buyBtn_1114;
        this.priceNum_1114 = priceNum_1114;
        this.buyBtn_4192 = buyBtn_4192;
        this.priceNum_4192 = priceNum_4192;
        this.sec_1272 = sec_1272;
        this.buyBtn_1272 = buyBtn_1272;
        this.priceNum_1272 = priceNum_1272;
        this.nameTag_1272 = nameTag_1272;
        this.sec_sun = sec_sun;
        this.buyBtn_1115 = buyBtn_1115;
        this.priceNum_1115 = priceNum_1115;
        this.buyBtn_6034 = buyBtn_6034;
        this.priceNum_6034 = priceNum_6034;
        this.buyBtn_4191 = buyBtn_4191;
        this.priceNum_4191 = priceNum_4191;
        this.buyBtn_2017 = buyBtn_2017;
        this.priceNum_2017 = priceNum_2017;
        this.buyBtn_4194 = buyBtn_4194;
        this.priceNum_4194 = priceNum_4194;
        this.buyBtn_3041 = buyBtn_3041;
        this.priceNum_3041 = priceNum_3041;
        this.buyBtn_1117 = buyBtn_1117;
        this.priceNum_1117 = priceNum_1117;
        this.buyBtn_367_again = buyBtn_367_again;
        this.priceNum_367_again = priceNum_367_again;
        this.buyBtn_477 = buyBtn_477;
        this.priceNum_477 = priceNum_477;
        this.buyBtn_762 = buyBtn_762;
        this.priceNum_762 = priceNum_762;
        this.buyBtn_763 = buyBtn_763;
        this.priceNum_763 = priceNum_763;
        this.buyBtn_476 = buyBtn_476;
        this.priceNum_476 = priceNum_476;
        this.buyBtn_761 = buyBtn_761;
        this.priceNum_761 = priceNum_761;
        this.buyBtn_760 = buyBtn_760;
        this.priceNum_760 = priceNum_760;
        this.buyBtn_475 = buyBtn_475;
        this.priceNum_475 = priceNum_475;
        this.sec_186 = sec_186;
        this.buyBtn_186 = buyBtn_186;
        this.priceNum_186 = priceNum_186;
        this.nameTag_186 = nameTag_186;
        this.sec_ruff = sec_ruff;
        this.buyBtn_1102 = buyBtn_1102;
        this.priceNum_1102 = priceNum_1102;
        this.buyBtn_3037 = buyBtn_3037;
        this.priceNum_3037 = priceNum_3037;
        this.buyBtn_3036 = buyBtn_3036;
        this.priceNum_3036 = priceNum_3036;
        this.buyBtn_1101 = buyBtn_1101;
        this.priceNum_1101 = priceNum_1101;
        this.buyBtn_4136 = buyBtn_4136;
        this.priceNum_4136 = priceNum_4136;
        this.buyBtn_4137 = buyBtn_4137;
        this.priceNum_4137 = priceNum_4137;
        this.buyBtn_472 = buyBtn_472;
        this.priceNum_472 = priceNum_472;
        this.buyBtn_4135 = buyBtn_4135;
        this.priceNum_4135 = priceNum_4135;
        this.buyBtn_227 = buyBtn_227;
        this.priceNum_227 = priceNum_227;
        this.buyBtn_4138 = buyBtn_4138;
        this.priceNum_4138 = priceNum_4138;
        this.buyBtn_309 = buyBtn_309;
        this.priceNum_309 = priceNum_309;
        this.sec_6020 = sec_6020;
        this.buyBtn_6020 = buyBtn_6020;
        this.priceNum_6020 = priceNum_6020;
        this.nameTag_6020 = nameTag_6020;
        this.sec_point = sec_point;
        this.buyBtn_2043 = buyBtn_2043;
        this.priceNum_2043 = priceNum_2043;
        this.buyBtn_4467 = buyBtn_4467;
        this.priceNum_4467 = priceNum_4467;
        this.buyBtn_4468 = buyBtn_4468;
        this.priceNum_4468 = priceNum_4468;
        this.buyBtn_4466 = buyBtn_4466;
        this.priceNum_4466 = priceNum_4466;
        this.buyBtn_1106 = buyBtn_1106;
        this.priceNum_1106 = priceNum_1106;
        this.buyBtn_4146 = buyBtn_4146;
        this.priceNum_4146 = priceNum_4146;
        this.buyBtn_5131 = buyBtn_5131;
        this.priceNum_5131 = priceNum_5131;
        this.buyBtn_3038 = buyBtn_3038;
        this.priceNum_3038 = priceNum_3038;
        this.buyBtn_119 = buyBtn_119;
        this.priceNum_119 = priceNum_119;
        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

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
