import BaseScene from '@scenes/base/BaseScene'

import {Animation, Button, SimpleButton, LocalisedString, InputText, LocalisedSprite} from '@components/components'

import UnlockItemsLoader from '@engine/loaders/UnlockItemsLoader'

/* START OF COMPILED CODE */

export default class Unlock extends BaseScene {

    constructor() {
        super("Unlock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.chest;
        /** @type {NinePatchContainer} */
        this.options;
        /** @type {Phaser.GameObjects.Container} */
        this.bubblesContainer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bubbles;
        /** @type {Phaser.GameObjects.Container} */
        this.baseOptions;
        /** @type {Phaser.GameObjects.Container} */
        this.codeButtons;
        /** @type {Phaser.GameObjects.Container} */
        this.codeOption;
        /** @type {Phaser.GameObjects.Container} */
        this.oneItem;
        /** @type {Phaser.GameObjects.Container} */
        this.coins;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coinholder;
        /** @type {Phaser.GameObjects.Text} */
        this.coinstext;
        /** @type {Phaser.GameObjects.Container} */
        this.item;
        /** @type {Phaser.GameObjects.Text} */
        this.codeInput;


        /* START-USER-CTR-CODE */
        let suffix = '/client/media/clothing/icon/'
        this.baseURL = window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw${suffix}` : `${window.location.origin}${suffix}`
        this.keyPrefix = 'clothing/icon/'

        this.attachErrorListener()
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("unlock-pack", "client/media/interface/menus/unlock/unlock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 1, "main", "backgroun");
        bg.setOrigin(0, 0);

        // bgtop
        const bgtop = this.add.image(760, 480, "unlock", "bgtop");
        bgtop.scaleX = 3;
        bgtop.scaleY = 3;
        bgtop.alpha = 0.25;
        bgtop.alphaTopLeft = 0.25;
        bgtop.alphaTopRight = 0.25;
        bgtop.alphaBottomLeft = 0.25;
        bgtop.alphaBottomRight = 0.25;

        // chest
        const chest = this.add.sprite(820, 387, "unlock", "chest0001");
        chest.scaleX = 0.9;
        chest.scaleY = 0.9;

        // backButton
        const backButton = this.add.sprite(760, 876, "login", "small-button");

        // options
        const options = this.add.ninePatchContainer(780, 701, 567, 211, "unlock", "blackbox");
        options.visible = false;

        // bubblesContainer
        const bubblesContainer = this.add.container(0, 0);
        bubblesContainer.visible = false;

        // bubbles
        const bubbles = this.add.sprite(782, 387, "unlock", "bubbles0001");
        bubblesContainer.add(bubbles);

        // icon_en
        const icon_en = this.add.image(121, 109, "unlock", "icon_en");
        icon_en.scaleX = 0.3;
        icon_en.scaleY = 0.3;

        // baseOptions
        const baseOptions = this.add.container(780, 699);
        baseOptions.visible = false;

        // optionText
        const optionText = this.add.text(13.992220199009466, -1.104337977288992, "", {});
        optionText.setOrigin(0.5, 0.5);
        optionText.text = "Unlock your Items. Choose an option.";
        optionText.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        optionText.setLineSpacing(25);
        baseOptions.add(optionText);

        // codeButtons
        const codeButtons = this.add.container(780, 554);
        codeButtons.visible = false;

        // codebutton
        const codebutton = this.add.image(-2.1414595825303877, -4.880653572546635, "unlock", "codebutton");
        codebutton.scaleX = 1.25;
        codebutton.scaleY = 1.25;
        codeButtons.add(codebutton);

        // codeText
        const codeText = this.add.text(17.858540417469612, -4.880653572546635, "", {});
        codeText.setOrigin(0.5, 0.5);
        codeText.text = "I've got a Code";
        codeText.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        codeText.setLineSpacing(25);
        codeButtons.add(codeText);

        // unlocked
        const unlocked = this.add.image(-90.14145958253039, -5.880653572546635, "unlock", "unlocked");
        unlocked.scaleX = 0.5;
        unlocked.scaleY = 0.5;
        codeButtons.add(unlocked);

        // codeOption
        const codeOption = this.add.container(780, 704);
        codeOption.visible = false;

        // optionTextCode
        const optionTextCode = this.add.text(1.4764405812308041, -68.46073228851685, "", {});
        optionTextCode.setOrigin(0.5, 0.5);
        optionTextCode.text = "Enter your code!\nMake sure you enter it exactly as it appears.";
        optionTextCode.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        optionTextCode.setLineSpacing(5);
        codeOption.add(optionTextCode);

        // code
        const code = this.add.image(5.476440581230804, 10.539267711483149, "unlock", "codeinput");
        codeOption.add(code);

        // nextbutton
        const nextbutton = this.add.image(-0.5235594187691959, 74.53926771148315, "unlock", "codebutton");
        nextbutton.scaleX = 0.8;
        nextbutton.scaleY = 0.8;
        codeOption.add(nextbutton);

        // nextText
        const nextText = this.add.text(-3.523559418769196, 75.53926771148315, "", {});
        nextText.setOrigin(0.5, 0.5);
        nextText.text = "Next";
        nextText.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        nextText.setLineSpacing(25);
        codeOption.add(nextText);

        // oneItem
        const oneItem = this.add.container(0, 0);
        oneItem.visible = false;

        // coins
        const coins = this.add.container(692.5873784349523, 589.3988548802498);
        oneItem.add(coins);

        // coinholder
        const coinholder = this.add.sprite(1.4126215650477434, -118.39885488024981, "unlock", "itemholderanim0001");
        coins.add(coinholder);

        // moneybag
        const moneybag = this.add.image(2.4126215650477434, -3.3988548802498144, "unlock", "moneybag");
        moneybag.scaleX = 0.12;
        moneybag.scaleY = 0.12;
        coins.add(moneybag);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(0, 37, 128, 128);
        rectangle_1.scaleX = 0.5448025871080537;
        rectangle_1.scaleY = 0.14778083979657908;
        rectangle_1.isFilled = true;
        rectangle_1.isStroked = true;
        rectangle_1.strokeColor = 0;
        rectangle_1.lineWidth = 2;
        coins.add(rectangle_1);

        // coinstext
        const coinstext = this.add.text(-18, 27, "", {});
        coinstext.text = "1000";
        coinstext.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small" });
        coins.add(coinstext);

        // item
        const item = this.add.container(0, 0);
        oneItem.add(item);

        // itemholder
        const itemholder = this.add.image(877, 471, "unlock", "itemholderanim0001");
        item.add(itemholder);

        // codeInput
        const codeInput = this.add.text(763, 715, "", {});
        codeInput.scaleX = 0.5833011699932232;
        codeInput.scaleY = 1.4730949843893046;
        codeInput.setOrigin(0, 0.5);
        codeInput.alpha = 0.8;
        codeInput.alphaTopLeft = 0.8;
        codeInput.alphaTopRight = 0.8;
        codeInput.alphaBottomLeft = 0.8;
        codeInput.alphaBottomRight = 0.8;
        codeInput.setStyle({ "color": "#000000ff", "fixedWidth":350,"fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold" });
        codeInput.setLineSpacing(25);

        // blue_button
        const blue_button = this.add.image(1460, 48, "main", "blue-button");

        // blue_x
        this.add.image(1461, 46, "main", "blue-x");

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton);
        backButtonSimpleButton.callback = () => this.onBackClick();
        const backButtonAnimation = new Animation(backButton);
        backButtonAnimation.key = "small-button";
        backButtonAnimation.end = 3;
        backButtonAnimation.repeat = 0;
        backButtonAnimation.onHover = true;

        // icon_en (components)
        new LocalisedSprite(icon_en);

        // optionText (components)
        const optionTextLocalisedString = new LocalisedString(optionText);
        optionTextLocalisedString.id = "code-base";

        // codebutton (components)
        const codebuttonButton = new Button(codebutton);
        codebuttonButton.spriteName = "codebutton";
        codebuttonButton.callback = () => {this.onCodeButtonClick()};

        // codeText (components)
        const codeTextLocalisedString = new LocalisedString(codeText);
        codeTextLocalisedString.id = "code";

        // optionTextCode (components)
        const optionTextCodeLocalisedString = new LocalisedString(optionTextCode);
        optionTextCodeLocalisedString.id = "code-options";

        // nextbutton (components)
        const nextbuttonButton = new Button(nextbutton);
        nextbuttonButton.spriteName = "codebutton";
        nextbuttonButton.callback = () => {this.onCodeInput()};

        // nextText (components)
        const nextTextLocalisedString = new LocalisedString(nextText);
        nextTextLocalisedString.id = "code-next";

        // codeInput (components)
        const codeInputInputText = new InputText(codeInput);
        codeInputInputText.charlimit = 12;
        codeInputInputText.entercallback = () => {this.onCodeInput()};

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => {this.onServerClick()};

        this.chest = chest;
        this.options = options;
        this.bubblesContainer = bubblesContainer;
        this.bubbles = bubbles;
        this.baseOptions = baseOptions;
        this.codeButtons = codeButtons;
        this.codeOption = codeOption;
        this.oneItem = oneItem;
        this.coins = coins;
        this.coinholder = coinholder;
        this.coinstext = coinstext;
        this.item = item;
        this.codeInput = codeInput;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        this._create()

        this.chestStart()

        // this.airtower.codes = this

        // // Input
        // this.input.keyboard.on('keydown-ENTER', () => this.onActivateSubmit())

        // this.codeInput.text = window.code
        // this.codeInput.textContent = window.code
    }

    chestStart() {
        this.chest.on('animationcomplete', () => {
            this.baseOptions.visible = true
            this.options.visible = true
            this.codeButtons.visible = true
        })
        this.chest.play('unlock-start')
        this.airtower.sendXt('c#gca', 'TEST')
        this.airtower.sendXt('c#gci', 'TEST')
    }

    onServerClick() {
        this.interface.showLoading()
        this.scene.start('Servers')
    }

    onCodeButtonClick() {
        this.baseOptions.visible = false
        this.codeOption.visible = true
        this.codeInput.visible = true
    }

    onCodeInput() {
        let code = this.codeInput.textContent
        this.airtower.sendXt('c#rc', code)
    }

    loadItem(item) {
        let key = `${this.keyPrefix}${item}`

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.image(key, `${item}.webp`)
    }

    onFileComplete(key, item) {
        this.addIcon(item, key)
    }

    itemLoader(item) {
        this.loader = new ItemPromptLoader(scene, this)
        this.load.loadIcon(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
