import Page from './Page'
import {SimpleButton, Name, Pricetag, Button} from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class BasicItemsPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page4Bg
        const page4Bg = scene.add.image(759, 453, 'constant', 'basicItemsPage')
        this.add(page4Bg)

        // rollOverText
        const rollOverText = scene.add.text(929, 637, '', {})
        rollOverText.setOrigin(0.5, 0.5)
        rollOverText.text = 'Roll-over any of the\nimages above to preview'
        rollOverText.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(rollOverText)

        // rollOver
        const rollOver = scene.add.sprite(955, 440, 'jan22clothing', 'rollover10001')
        this.add(rollOver)

        // page4_header
        const page4_header = scene.add.text(204, 82, '', {})
        page4_header.setOrigin(0.5, 0.5)
        page4_header.text = 'Clothing items\nfor everyone'
        page4_header.setStyle({fontFamily: 'Burbank Small', fontSize: '27px', fontStyle: 'bold italic'})
        this.add(page4_header)

        // buyBtn_210
        const buyBtn_210 = scene.add.sprite(999, 235, 'catalogs-master', 'buybtn')
        this.add(buyBtn_210)

        // priceNum_210
        const priceNum_210 = scene.add.text(997, 235, '', {})
        priceNum_210.setOrigin(0.5, 0.5)
        priceNum_210.text = '300'
        priceNum_210.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_210)

        // nameTag_210
        const nameTag_210 = scene.add.text(1008, 198, '', {})
        nameTag_210.setOrigin(0.5, 0.5)
        nameTag_210.text = 'Star T-Shirt'
        nameTag_210.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_210)

        // hover_210
        const hover_210 = scene.add.rectangle(1004, 142, 128, 128)
        hover_210.fillAlpha = 0.5
        this.add(hover_210)

        // buyBtn_405
        const buyBtn_405 = scene.add.sprite(1173, 235, 'catalogs-master', 'buybtn')
        this.add(buyBtn_405)

        // priceNum_405
        const priceNum_405 = scene.add.text(1171, 235, '', {})
        priceNum_405.setOrigin(0.5, 0.5)
        priceNum_405.text = '200'
        priceNum_405.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_405)

        // nameTag_405
        const nameTag_405 = scene.add.text(1179, 198, '', {})
        nameTag_405.setOrigin(0.5, 0.5)
        nameTag_405.text = 'Green Ball Cap'
        nameTag_405.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_405)

        // hover_405
        const hover_405 = scene.add.rectangle(1177, 142, 128, 128)
        hover_405.fillAlpha = 0.5
        this.add(hover_405)

        // buyBtn_717
        const buyBtn_717 = scene.add.sprite(1344, 235, 'catalogs-master', 'buybtn')
        this.add(buyBtn_717)

        // priceNum_717
        const priceNum_717 = scene.add.text(1342, 235, '', {})
        priceNum_717.setOrigin(0.5, 0.5)
        priceNum_717.text = '300'
        priceNum_717.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_717)

        // nameTag_717
        const nameTag_717 = scene.add.text(1351, 198, '', {})
        nameTag_717.setOrigin(0.5, 0.5)
        nameTag_717.text = 'Baseball Glove'
        nameTag_717.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_717)

        // hover_717
        const hover_717 = scene.add.rectangle(1352, 144, 128, 128)
        hover_717.fillAlpha = 0.5
        this.add(hover_717)

        // buyBtn_713
        const buyBtn_713 = scene.add.sprite(1344, 453, 'catalogs-master', 'buybtn')
        this.add(buyBtn_713)

        // priceNum_713
        const priceNum_713 = scene.add.text(1342, 453, '', {})
        priceNum_713.setOrigin(0.5, 0.5)
        priceNum_713.text = '300'
        priceNum_713.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_713)

        // nameTag_713
        const nameTag_713 = scene.add.text(1351, 415, '', {})
        nameTag_713.setOrigin(0.5, 0.5)
        nameTag_713.text = 'Pink Purse'
        nameTag_713.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_713)

        // hover_713
        const hover_713 = scene.add.rectangle(1349, 361, 128, 128)
        hover_713.fillAlpha = 0.5
        this.add(hover_713)

        // buyBtn_192
        const buyBtn_192 = scene.add.sprite(1173, 453, 'catalogs-master', 'buybtn')
        this.add(buyBtn_192)

        // priceNum_192
        const priceNum_192 = scene.add.text(1171, 453, '', {})
        priceNum_192.setOrigin(0.5, 0.5)
        priceNum_192.text = '150'
        priceNum_192.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_192)

        // nameTag_192
        const nameTag_192 = scene.add.text(1180, 415, '', {})
        nameTag_192.setOrigin(0.5, 0.5)
        nameTag_192.text = 'Red Bandana'
        nameTag_192.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_192)

        // hover_192
        const hover_192 = scene.add.rectangle(1174, 359, 128, 128)
        hover_192.fillAlpha = 0.5
        this.add(hover_192)

        // buyBtn_203
        const buyBtn_203 = scene.add.sprite(1337, 679, 'catalogs-master', 'buybtn')
        this.add(buyBtn_203)

        // priceNum_203
        const priceNum_203 = scene.add.text(1336, 679, '', {})
        priceNum_203.setOrigin(0.5, 0.5)
        priceNum_203.text = '200'
        priceNum_203.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_203)

        // nameTag_203
        const nameTag_203 = scene.add.text(1347, 639, '', {})
        nameTag_203.setOrigin(0.5, 0.5)
        nameTag_203.text = 'Butterfly T-Shirt'
        nameTag_203.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_203)

        // hover_203
        const hover_203 = scene.add.rectangle(1349, 582, 128, 128)
        hover_203.fillAlpha = 0.5
        this.add(hover_203)

        // buyBtn_653
        const buyBtn_653 = scene.add.sprite(1173, 679, 'catalogs-master', 'buybtn')
        this.add(buyBtn_653)

        // priceNum_653
        const priceNum_653 = scene.add.text(1171, 679, '', {})
        priceNum_653.setOrigin(0.5, 0.5)
        priceNum_653.text = '500'
        priceNum_653.setStyle({color: '#4b2500ff', fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold'})
        this.add(priceNum_653)

        // nameTag_653
        const nameTag_653 = scene.add.text(1180, 639, '', {})
        nameTag_653.setOrigin(0.5, 0.5)
        nameTag_653.text = 'The Funster'
        nameTag_653.setStyle({fontFamily: 'Burbank Small', fontSize: '20px'})
        this.add(nameTag_653)

        // hover_653
        const hover_653 = scene.add.rectangle(1174, 580, 128, 128)
        hover_653.fillAlpha = 0.5
        this.add(hover_653)

        // prevPage
        const prevPage = scene.add.image(138, 729, 'constant', 'prevPage')
        this.add(prevPage)

        // nextPage
        const nextPage = scene.add.image(1382, 729, 'constant', 'nextPage')
        this.add(nextPage)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // buyBtn_210 (components)
        const buyBtn_210Button = new Button(buyBtn_210)
        buyBtn_210Button.spriteName = 'buybtn'
        buyBtn_210Button.callback = () => this.buy(210)
        buyBtn_210Button.activeFrame = false

        // priceNum_210 (components)
        const priceNum_210Pricetag = new Pricetag(priceNum_210)
        priceNum_210Pricetag.id = 210

        // nameTag_210 (components)
        const nameTag_210Name = new Name(nameTag_210)
        nameTag_210Name.id = 210

        // hover_210 (components)
        const hover_210SimpleButton = new SimpleButton(hover_210)
        hover_210SimpleButton.hoverCallback = () => this.rollover('rollover10006')

        // buyBtn_405 (components)
        const buyBtn_405Button = new Button(buyBtn_405)
        buyBtn_405Button.spriteName = 'buybtn'
        buyBtn_405Button.callback = () => this.buy(405)
        buyBtn_405Button.activeFrame = false

        // priceNum_405 (components)
        const priceNum_405Pricetag = new Pricetag(priceNum_405)
        priceNum_405Pricetag.id = 405

        // nameTag_405 (components)
        const nameTag_405Name = new Name(nameTag_405)
        nameTag_405Name.id = 405

        // hover_405 (components)
        const hover_405SimpleButton = new SimpleButton(hover_405)
        hover_405SimpleButton.hoverCallback = () => this.rollover('rollover10007')

        // buyBtn_717 (components)
        const buyBtn_717Button = new Button(buyBtn_717)
        buyBtn_717Button.spriteName = 'buybtn'
        buyBtn_717Button.callback = () => this.buy(717)
        buyBtn_717Button.activeFrame = false

        // priceNum_717 (components)
        const priceNum_717Pricetag = new Pricetag(priceNum_717)
        priceNum_717Pricetag.id = 717

        // nameTag_717 (components)
        const nameTag_717Name = new Name(nameTag_717)
        nameTag_717Name.id = 717

        // hover_717 (components)
        const hover_717SimpleButton = new SimpleButton(hover_717)
        hover_717SimpleButton.hoverCallback = () => this.rollover('rollover10003')

        // buyBtn_713 (components)
        const buyBtn_713Button = new Button(buyBtn_713)
        buyBtn_713Button.spriteName = 'buybtn'
        buyBtn_713Button.callback = () => this.buy(713)
        buyBtn_713Button.activeFrame = false

        // priceNum_713 (components)
        const priceNum_713Pricetag = new Pricetag(priceNum_713)
        priceNum_713Pricetag.id = 713

        // nameTag_713 (components)
        const nameTag_713Name = new Name(nameTag_713)
        nameTag_713Name.id = 713

        // hover_713 (components)
        const hover_713SimpleButton = new SimpleButton(hover_713)
        hover_713SimpleButton.hoverCallback = () => this.rollover('rollover10004')

        // buyBtn_192 (components)
        const buyBtn_192Button = new Button(buyBtn_192)
        buyBtn_192Button.spriteName = 'buybtn'
        buyBtn_192Button.callback = () => this.buy(192)
        buyBtn_192Button.activeFrame = false

        // priceNum_192 (components)
        const priceNum_192Pricetag = new Pricetag(priceNum_192)
        priceNum_192Pricetag.id = 192

        // nameTag_192 (components)
        const nameTag_192Name = new Name(nameTag_192)
        nameTag_192Name.id = 192

        // hover_192 (components)
        const hover_192SimpleButton = new SimpleButton(hover_192)
        hover_192SimpleButton.hoverCallback = () => this.rollover('rollover10005')

        // buyBtn_203 (components)
        const buyBtn_203Button = new Button(buyBtn_203)
        buyBtn_203Button.spriteName = 'buybtn'
        buyBtn_203Button.callback = () => this.buy(203)
        buyBtn_203Button.activeFrame = false

        // priceNum_203 (components)
        const priceNum_203Pricetag = new Pricetag(priceNum_203)
        priceNum_203Pricetag.id = 203

        // nameTag_203 (components)
        const nameTag_203Name = new Name(nameTag_203)
        nameTag_203Name.id = 203

        // hover_203 (components)
        const hover_203SimpleButton = new SimpleButton(hover_203)
        hover_203SimpleButton.hoverCallback = () => this.rollover('rollover10001')

        // buyBtn_653 (components)
        const buyBtn_653Button = new Button(buyBtn_653)
        buyBtn_653Button.spriteName = 'buybtn'
        buyBtn_653Button.callback = () => this.buy(653)
        buyBtn_653Button.activeFrame = false

        // priceNum_653 (components)
        const priceNum_653Pricetag = new Pricetag(priceNum_653)
        priceNum_653Pricetag.id = 653

        // nameTag_653 (components)
        const nameTag_653Name = new Name(nameTag_653)
        nameTag_653Name.id = 653

        // hover_653 (components)
        const hover_653SimpleButton = new SimpleButton(hover_653)
        hover_653SimpleButton.hoverCallback = () => this.rollover('rollover10002')

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.spriteName = 'prevPage'
        prevPageButton.callback = () => this.prevPage()

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.spriteName = 'nextPage'
        nextPageButton.callback = () => this.nextPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.page4Bg = page4Bg
        this.rollOverText = rollOverText
        this.rollOver = rollOver
        this.page4_header = page4_header
        this.buyBtn_210 = buyBtn_210
        this.priceNum_210 = priceNum_210
        this.nameTag_210 = nameTag_210
        this.hover_210 = hover_210
        this.buyBtn_405 = buyBtn_405
        this.priceNum_405 = priceNum_405
        this.nameTag_405 = nameTag_405
        this.hover_405 = hover_405
        this.buyBtn_717 = buyBtn_717
        this.priceNum_717 = priceNum_717
        this.nameTag_717 = nameTag_717
        this.hover_717 = hover_717
        this.buyBtn_713 = buyBtn_713
        this.priceNum_713 = priceNum_713
        this.nameTag_713 = nameTag_713
        this.hover_713 = hover_713
        this.buyBtn_192 = buyBtn_192
        this.priceNum_192 = priceNum_192
        this.nameTag_192 = nameTag_192
        this.hover_192 = hover_192
        this.buyBtn_203 = buyBtn_203
        this.priceNum_203 = priceNum_203
        this.nameTag_203 = nameTag_203
        this.hover_203 = hover_203
        this.buyBtn_653 = buyBtn_653
        this.priceNum_653 = priceNum_653
        this.nameTag_653 = nameTag_653
        this.hover_653 = hover_653

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page4Bg
    /** @type {Phaser.GameObjects.Text} */
    rollOverText
    /** @type {Phaser.GameObjects.Sprite} */
    rollOver
    /** @type {Phaser.GameObjects.Text} */
    page4_header
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_210
    /** @type {Phaser.GameObjects.Text} */
    priceNum_210
    /** @type {Phaser.GameObjects.Text} */
    nameTag_210
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_210
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_405
    /** @type {Phaser.GameObjects.Text} */
    priceNum_405
    /** @type {Phaser.GameObjects.Text} */
    nameTag_405
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_405
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_717
    /** @type {Phaser.GameObjects.Text} */
    priceNum_717
    /** @type {Phaser.GameObjects.Text} */
    nameTag_717
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_717
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_713
    /** @type {Phaser.GameObjects.Text} */
    priceNum_713
    /** @type {Phaser.GameObjects.Text} */
    nameTag_713
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_713
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_192
    /** @type {Phaser.GameObjects.Text} */
    priceNum_192
    /** @type {Phaser.GameObjects.Text} */
    nameTag_192
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_192
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_203
    /** @type {Phaser.GameObjects.Text} */
    priceNum_203
    /** @type {Phaser.GameObjects.Text} */
    nameTag_203
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_203
    /** @type {Phaser.GameObjects.Sprite} */
    buyBtn_653
    /** @type {Phaser.GameObjects.Text} */
    priceNum_653
    /** @type {Phaser.GameObjects.Text} */
    nameTag_653
    /** @type {Phaser.GameObjects.Rectangle} */
    hover_653

    /* START-USER-CODE */

    rollover(frame) {
        this.rollOver.setFrame(frame)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
