import {Button, Interactive, SimpleButton, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class SportsCatalog extends Book {
    constructor() {
        super('SummerSports')

        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_722
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_722
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_3002
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_3002
        /** @type {Phaser.GameObjects.Image} */
        this.bgholder1
        /** @type {Phaser.GameObjects.Image} */
        this.bgholder2
        /** @type {Phaser.GameObjects.Image} */
        this.bgholder3
        /** @type {Phaser.GameObjects.Image} */
        this.bgholder4
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle1
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle2
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle3
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5472
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5472
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5473
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5473
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1906
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1906
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1907
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1907
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5471
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5471
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5474
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5474
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_24191
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_24191
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_24204
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_24204
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4347
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4347
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4349
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4349
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4350
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4350
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4348
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4348
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_727
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_727
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4091
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4091
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_329
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_329
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_255
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_255
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4116
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4116
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5048
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5048
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_658
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_658
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_671
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_671
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5136
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5136
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_254
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_254
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1079
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1079
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_462
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_462
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_1078
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_1078
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_721
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_721
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4115
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4115
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_463
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_463
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_726
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_726
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_720
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_720
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5091
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5091
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5092
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5092
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5093
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5093
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_5094
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_5094
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4089
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4089
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_4090
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_4090
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_313
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_313
        /** @type {Phaser.GameObjects.Sprite} */
        this.buyBtn_372
        /** @type {Phaser.GameObjects.Text} */
        this.priceNum_372
        /** @type {Phaser.GameObjects.Text} */
        this.coins
        /** @type {Phaser.GameObjects.Container} */
        this.buttons
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('summersports-pack', 'client/media/interface/catalogs/sports/summersports-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2

        // page1
        const page1 = this.add.container(0, 0)
        page1.visible = false

        // page1body
        const page1body = this.add.image(760, 480, 'summer-sports', 'page1body')
        page1.add(page1body)

        // nextpage
        const nextpage = this.add.image(1096, 810, 'summer-sports', 'nextpage')
        page1.add(nextpage)

        // exit_1
        const exit_1 = this.add.image(1156, 31, 'summer-sports', 'exit')
        page1.add(exit_1)

        // page2
        const page2 = this.add.container(0, 0)
        page2.visible = false

        // page2body
        const page2body = this.add.image(760, 480, 'summer-sports', 'page2body')
        page2.add(page2body)

        // buyBtn_722
        const buyBtn_722 = this.add.sprite(901, 230, 'summer-sports', 'tag')
        page2.add(buyBtn_722)

        // priceNum_722
        const priceNum_722 = this.add.text(906, 230, '', {})
        priceNum_722.setOrigin(0.5, 0.5)
        priceNum_722.text = '250'
        priceNum_722.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page2.add(priceNum_722)

        // buyBtn_3002
        const buyBtn_3002 = this.add.sprite(902, 516, 'summer-sports', 'tag')
        page2.add(buyBtn_3002)

        // priceNum_3002
        const priceNum_3002 = this.add.text(907, 516, '', {})
        priceNum_3002.setOrigin(0.5, 0.5)
        priceNum_3002.text = '250'
        priceNum_3002.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page2.add(priceNum_3002)

        // bgholder1
        const bgholder1 = this.add.image(248, 343, 'summer-sports', 'bgholder')
        bgholder1.scaleX = 1.209898226385165
        bgholder1.scaleY = 1.1943822494576013
        page2.add(bgholder1)

        // bgholder2
        const bgholder2 = this.add.image(496, 343, 'summer-sports', 'bgholder')
        bgholder2.scaleX = 1.209898226385165
        bgholder2.scaleY = 1.1943822494576013
        page2.add(bgholder2)

        // bgholder3
        const bgholder3 = this.add.image(248, 596, 'summer-sports', 'bgholder')
        bgholder3.scaleX = 1.209898226385165
        bgholder3.scaleY = 1.1943822494576013
        page2.add(bgholder3)

        // bgholder4
        const bgholder4 = this.add.image(496, 596, 'summer-sports', 'bgholder')
        bgholder4.scaleX = 1.209898226385165
        bgholder4.scaleY = 1.1943822494576013
        page2.add(bgholder4)

        // backgrounds
        const backgrounds = this.add.image(384, 457, 'summer-sports', 'backgrounds')
        page2.add(backgrounds)

        // rectangle
        const rectangle = this.add.rectangle(251, 341, 128, 128)
        rectangle.scaleX = 1.735454784016281
        rectangle.scaleY = 1.752622125489499
        page2.add(rectangle)

        // rectangle1
        const rectangle1 = this.add.rectangle(494, 341, 128, 128)
        rectangle1.scaleX = 1.7103580987135203
        rectangle1.scaleY = 1.7103580987135203
        page2.add(rectangle1)

        // rectangle2
        const rectangle2 = this.add.rectangle(250, 592, 128, 128)
        rectangle2.scaleX = 1.6912229001921724
        rectangle2.scaleY = 1.8134863061337667
        page2.add(rectangle2)

        // rectangle3
        const rectangle3 = this.add.rectangle(496, 594, 128, 128)
        rectangle3.scaleX = 1.754356294356533
        rectangle3.scaleY = 1.754356294356533
        page2.add(rectangle3)

        // page3
        const page3 = this.add.container(0, 0)
        page3.visible = false

        // page3body
        const page3body = this.add.image(760, 480, 'summer-sports', 'page3body')
        page3.add(page3body)

        // buyBtn_5472
        const buyBtn_5472 = this.add.sprite(989, 814, 'summer-sports', 'tag')
        page3.add(buyBtn_5472)

        // priceNum_5472
        const priceNum_5472 = this.add.text(994, 814, '', {})
        priceNum_5472.setOrigin(0.5, 0.5)
        priceNum_5472.text = '145'
        priceNum_5472.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page3.add(priceNum_5472)

        // buyBtn_5473
        const buyBtn_5473 = this.add.sprite(989, 421, 'summer-sports', 'tag')
        page3.add(buyBtn_5473)

        // priceNum_5473
        const priceNum_5473 = this.add.text(994, 421, '', {})
        priceNum_5473.setOrigin(0.5, 0.5)
        priceNum_5473.text = '250'
        priceNum_5473.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page3.add(priceNum_5473)

        // buyBtn_1906
        const buyBtn_1906 = this.add.sprite(523, 753, 'summer-sports', 'tag')
        page3.add(buyBtn_1906)

        // priceNum_1906
        const priceNum_1906 = this.add.text(528, 753, '', {})
        priceNum_1906.setOrigin(0.5, 0.5)
        priceNum_1906.text = '250'
        priceNum_1906.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page3.add(priceNum_1906)

        // buyBtn_1907
        const buyBtn_1907 = this.add.sprite(258, 754, 'summer-sports', 'tag')
        page3.add(buyBtn_1907)

        // priceNum_1907
        const priceNum_1907 = this.add.text(263, 754, '', {})
        priceNum_1907.setOrigin(0.5, 0.5)
        priceNum_1907.text = '145'
        priceNum_1907.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page3.add(priceNum_1907)

        // buyBtn_5471
        const buyBtn_5471 = this.add.sprite(1289, 815, 'summer-sports', 'tag')
        page3.add(buyBtn_5471)

        // priceNum_5471
        const priceNum_5471 = this.add.text(1294, 815, '', {})
        priceNum_5471.setOrigin(0.5, 0.5)
        priceNum_5471.text = '145'
        priceNum_5471.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page3.add(priceNum_5471)

        // buyBtn_5474
        const buyBtn_5474 = this.add.sprite(1283, 421, 'summer-sports', 'tag')
        page3.add(buyBtn_5474)

        // priceNum_5474
        const priceNum_5474 = this.add.text(1288, 421, '', {})
        priceNum_5474.setOrigin(0.5, 0.5)
        priceNum_5474.text = '250'
        priceNum_5474.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page3.add(priceNum_5474)

        // page4
        const page4 = this.add.container(0, 0)
        page4.visible = false

        // page4body
        const page4body = this.add.image(760, 480, 'summer-sports', 'page4body')
        page4.add(page4body)

        // buyBtn_24191
        const buyBtn_24191 = this.add.sprite(303, 423, 'summer-sports', 'tag')
        page4.add(buyBtn_24191)

        // priceNum_24191
        const priceNum_24191 = this.add.text(308, 423, '', {})
        priceNum_24191.setOrigin(0.5, 0.5)
        priceNum_24191.text = '250'
        priceNum_24191.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page4.add(priceNum_24191)

        // buyBtn_24204
        const buyBtn_24204 = this.add.sprite(302, 708, 'summer-sports', 'tag')
        page4.add(buyBtn_24204)

        // priceNum_24204
        const priceNum_24204 = this.add.text(307, 708, '', {})
        priceNum_24204.setOrigin(0.5, 0.5)
        priceNum_24204.text = '145'
        priceNum_24204.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page4.add(priceNum_24204)

        // page5
        const page5 = this.add.container(0, 0)
        page5.visible = false

        // page5body
        const page5body = this.add.image(760, 480, 'summer-sports', 'page5body')
        page5.add(page5body)

        // buyBtn_4347
        const buyBtn_4347 = this.add.sprite(979, 381, 'summer-sports', 'tag')
        page5.add(buyBtn_4347)

        // priceNum_4347
        const priceNum_4347 = this.add.text(984, 381, '', {})
        priceNum_4347.setOrigin(0.5, 0.5)
        priceNum_4347.text = '450'
        priceNum_4347.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page5.add(priceNum_4347)

        // buyBtn_4349
        const buyBtn_4349 = this.add.sprite(990, 742, 'summer-sports', 'tag')
        page5.add(buyBtn_4349)

        // priceNum_4349
        const priceNum_4349 = this.add.text(995, 742, '', {})
        priceNum_4349.setOrigin(0.5, 0.5)
        priceNum_4349.text = '350'
        priceNum_4349.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page5.add(priceNum_4349)

        // buyBtn_4350
        const buyBtn_4350 = this.add.sprite(1261, 744, 'summer-sports', 'tag')
        page5.add(buyBtn_4350)

        // priceNum_4350
        const priceNum_4350 = this.add.text(1266, 744, '', {})
        priceNum_4350.setOrigin(0.5, 0.5)
        priceNum_4350.text = '350'
        priceNum_4350.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page5.add(priceNum_4350)

        // buyBtn_4348
        const buyBtn_4348 = this.add.sprite(1265, 381, 'summer-sports', 'tag')
        page5.add(buyBtn_4348)

        // priceNum_4348
        const priceNum_4348 = this.add.text(1270, 381, '', {})
        priceNum_4348.setOrigin(0.5, 0.5)
        priceNum_4348.text = '350'
        priceNum_4348.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page5.add(priceNum_4348)

        // page6
        const page6 = this.add.container(0, 0)
        page6.visible = false

        // page6body
        const page6body = this.add.image(760, 480, 'summer-sports', 'page6body')
        page6.add(page6body)

        // buyBtn_727
        const buyBtn_727 = this.add.sprite(375, 354, 'summer-sports', 'tag')
        page6.add(buyBtn_727)

        // priceNum_727
        const priceNum_727 = this.add.text(380, 354, '', {})
        priceNum_727.setOrigin(0.5, 0.5)
        priceNum_727.text = '450'
        priceNum_727.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page6.add(priceNum_727)

        // buyBtn_4091
        const buyBtn_4091 = this.add.sprite(377, 683, 'summer-sports', 'tag')
        page6.add(buyBtn_4091)

        // priceNum_4091
        const priceNum_4091 = this.add.text(382, 683, '', {})
        priceNum_4091.setOrigin(0.5, 0.5)
        priceNum_4091.text = '350'
        priceNum_4091.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page6.add(priceNum_4091)

        // page7
        const page7 = this.add.container(0, 0)
        page7.visible = false

        // page7body
        const page7body = this.add.image(760, 480, 'summer-sports', 'page7body')
        page7.add(page7body)

        // page8
        const page8 = this.add.container(0, 0)
        page8.visible = false

        // page8body
        const page8body = this.add.image(760, 480, 'summer-sports', 'page8body')
        page8.add(page8body)

        // buyBtn_329
        const buyBtn_329 = this.add.sprite(1232, 271, 'summer-sports', 'tag')
        page8.add(buyBtn_329)

        // priceNum_329
        const priceNum_329 = this.add.text(1237, 271, '', {})
        priceNum_329.setOrigin(0.5, 0.5)
        priceNum_329.text = '450'
        priceNum_329.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_329)

        // buyBtn_255
        const buyBtn_255 = this.add.sprite(986, 271, 'summer-sports', 'tag')
        page8.add(buyBtn_255)

        // priceNum_255
        const priceNum_255 = this.add.text(991, 271, '', {})
        priceNum_255.setOrigin(0.5, 0.5)
        priceNum_255.text = '350'
        priceNum_255.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_255)

        // buyBtn_4116
        const buyBtn_4116 = this.add.sprite(983, 542, 'summer-sports', 'tag')
        page8.add(buyBtn_4116)

        // priceNum_4116
        const priceNum_4116 = this.add.text(988, 542, '', {})
        priceNum_4116.setOrigin(0.5, 0.5)
        priceNum_4116.text = '350'
        priceNum_4116.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_4116)

        // buyBtn_5048
        const buyBtn_5048 = this.add.sprite(1235, 542, 'summer-sports', 'tag')
        page8.add(buyBtn_5048)

        // priceNum_5048
        const priceNum_5048 = this.add.text(1240, 542, '', {})
        priceNum_5048.setOrigin(0.5, 0.5)
        priceNum_5048.text = '450'
        priceNum_5048.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_5048)

        // buyBtn_658
        const buyBtn_658 = this.add.sprite(263, 407, 'summer-sports', 'tag')
        page8.add(buyBtn_658)

        // priceNum_658
        const priceNum_658 = this.add.text(268, 407, '', {})
        priceNum_658.setOrigin(0.5, 0.5)
        priceNum_658.text = '450'
        priceNum_658.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_658)

        // buyBtn_671
        const buyBtn_671 = this.add.sprite(532, 408, 'summer-sports', 'tag')
        page8.add(buyBtn_671)

        // priceNum_671
        const priceNum_671 = this.add.text(537, 408, '', {})
        priceNum_671.setOrigin(0.5, 0.5)
        priceNum_671.text = '450'
        priceNum_671.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_671)

        // buyBtn_5136
        const buyBtn_5136 = this.add.sprite(1250, 785, 'summer-sports', 'tag')
        page8.add(buyBtn_5136)

        // priceNum_5136
        const priceNum_5136 = this.add.text(1255, 785, '', {})
        priceNum_5136.setOrigin(0.5, 0.5)
        priceNum_5136.text = '350'
        priceNum_5136.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_5136)

        // buyBtn_254
        const buyBtn_254 = this.add.sprite(988, 781, 'summer-sports', 'tag')
        page8.add(buyBtn_254)

        // priceNum_254
        const priceNum_254 = this.add.text(993, 781, '', {})
        priceNum_254.setOrigin(0.5, 0.5)
        priceNum_254.text = '350'
        priceNum_254.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_254)

        // buyBtn_1079
        const buyBtn_1079 = this.add.sprite(388, 707, 'summer-sports', 'tag')
        page8.add(buyBtn_1079)

        // priceNum_1079
        const priceNum_1079 = this.add.text(393, 707, '', {})
        priceNum_1079.setOrigin(0.5, 0.5)
        priceNum_1079.text = '450'
        priceNum_1079.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page8.add(priceNum_1079)

        // page9
        const page9 = this.add.container(0, 0)
        page9.visible = false

        // page9body
        const page9body = this.add.image(760, 480, 'summer-sports', 'page9body')
        page9.add(page9body)

        // buyBtn_462
        const buyBtn_462 = this.add.sprite(985, 390, 'summer-sports', 'tag')
        page9.add(buyBtn_462)

        // priceNum_462
        const priceNum_462 = this.add.text(990, 390, '', {})
        priceNum_462.setOrigin(0.5, 0.5)
        priceNum_462.text = '350'
        priceNum_462.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page9.add(priceNum_462)

        // buyBtn_1078
        const buyBtn_1078 = this.add.sprite(1250, 388, 'summer-sports', 'tag')
        page9.add(buyBtn_1078)

        // priceNum_1078
        const priceNum_1078 = this.add.text(1255, 388, '', {})
        priceNum_1078.setOrigin(0.5, 0.5)
        priceNum_1078.text = '350'
        priceNum_1078.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page9.add(priceNum_1078)

        // buyBtn_721
        const buyBtn_721 = this.add.sprite(987, 748, 'summer-sports', 'tag')
        page9.add(buyBtn_721)

        // priceNum_721
        const priceNum_721 = this.add.text(992, 748, '', {})
        priceNum_721.setOrigin(0.5, 0.5)
        priceNum_721.text = '450'
        priceNum_721.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page9.add(priceNum_721)

        // buyBtn_4115
        const buyBtn_4115 = this.add.sprite(1266, 748, 'summer-sports', 'tag')
        page9.add(buyBtn_4115)

        // priceNum_4115
        const priceNum_4115 = this.add.text(1271, 748, '', {})
        priceNum_4115.setOrigin(0.5, 0.5)
        priceNum_4115.text = '450'
        priceNum_4115.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page9.add(priceNum_4115)

        // page10
        const page10 = this.add.container(0, 0)
        page10.visible = false

        // page10body
        const page10body = this.add.image(760, 480, 'summer-sports', 'page10body')
        page10.add(page10body)

        // buyBtn_463
        const buyBtn_463 = this.add.sprite(273, 332, 'summer-sports', 'tag')
        page10.add(buyBtn_463)

        // priceNum_463
        const priceNum_463 = this.add.text(278, 332, '', {})
        priceNum_463.setOrigin(0.5, 0.5)
        priceNum_463.text = '350'
        priceNum_463.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page10.add(priceNum_463)

        // buyBtn_726
        const buyBtn_726 = this.add.sprite(574, 336, 'summer-sports', 'tag')
        page10.add(buyBtn_726)

        // priceNum_726
        const priceNum_726 = this.add.text(579, 336, '', {})
        priceNum_726.setOrigin(0.5, 0.5)
        priceNum_726.text = '350'
        priceNum_726.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page10.add(priceNum_726)

        // buyBtn_720
        const buyBtn_720 = this.add.sprite(408, 720, 'summer-sports', 'tag')
        page10.add(buyBtn_720)

        // priceNum_720
        const priceNum_720 = this.add.text(413, 720, '', {})
        priceNum_720.setOrigin(0.5, 0.5)
        priceNum_720.text = '450'
        priceNum_720.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page10.add(priceNum_720)

        // page11
        const page11 = this.add.container(0, 0)
        page11.visible = false

        // page11body
        const page11body = this.add.image(760, 480, 'summer-sports', 'page11body')
        page11.add(page11body)

        // buyBtn_5091
        const buyBtn_5091 = this.add.sprite(264, 367, 'summer-sports', 'tag')
        page11.add(buyBtn_5091)

        // priceNum_5091
        const priceNum_5091 = this.add.text(269, 367, '', {})
        priceNum_5091.setOrigin(0.5, 0.5)
        priceNum_5091.text = '450'
        priceNum_5091.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page11.add(priceNum_5091)

        // buyBtn_5092
        const buyBtn_5092 = this.add.sprite(507, 367, 'summer-sports', 'tag')
        page11.add(buyBtn_5092)

        // priceNum_5092
        const priceNum_5092 = this.add.text(512, 367, '', {})
        priceNum_5092.setOrigin(0.5, 0.5)
        priceNum_5092.text = '350'
        priceNum_5092.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page11.add(priceNum_5092)

        // buyBtn_5093
        const buyBtn_5093 = this.add.sprite(267, 703, 'summer-sports', 'tag')
        page11.add(buyBtn_5093)

        // priceNum_5093
        const priceNum_5093 = this.add.text(272, 703, '', {})
        priceNum_5093.setOrigin(0.5, 0.5)
        priceNum_5093.text = '450'
        priceNum_5093.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page11.add(priceNum_5093)

        // buyBtn_5094
        const buyBtn_5094 = this.add.sprite(510, 703, 'summer-sports', 'tag')
        page11.add(buyBtn_5094)

        // priceNum_5094
        const priceNum_5094 = this.add.text(515, 703, '', {})
        priceNum_5094.setOrigin(0.5, 0.5)
        priceNum_5094.text = '350'
        priceNum_5094.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page11.add(priceNum_5094)

        // page12
        const page12 = this.add.container(0, 0)
        page12.visible = false

        // page12body
        const page12body = this.add.image(760, 480, 'summer-sports', 'page12body')
        page12.add(page12body)

        // buyBtn_4089
        const buyBtn_4089 = this.add.sprite(1243, 388, 'summer-sports', 'tag')
        page12.add(buyBtn_4089)

        // priceNum_4089
        const priceNum_4089 = this.add.text(1248, 388, '', {})
        priceNum_4089.setOrigin(0.5, 0.5)
        priceNum_4089.text = '450'
        priceNum_4089.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page12.add(priceNum_4089)

        // buyBtn_4090
        const buyBtn_4090 = this.add.sprite(1012, 388, 'summer-sports', 'tag')
        page12.add(buyBtn_4090)

        // priceNum_4090
        const priceNum_4090 = this.add.text(1017, 388, '', {})
        priceNum_4090.setOrigin(0.5, 0.5)
        priceNum_4090.text = '450'
        priceNum_4090.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page12.add(priceNum_4090)

        // buyBtn_313
        const buyBtn_313 = this.add.sprite(1020, 739, 'summer-sports', 'tag')
        page12.add(buyBtn_313)

        // priceNum_313
        const priceNum_313 = this.add.text(1025, 739, '', {})
        priceNum_313.setOrigin(0.5, 0.5)
        priceNum_313.text = '450'
        priceNum_313.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page12.add(priceNum_313)

        // buyBtn_372
        const buyBtn_372 = this.add.sprite(1261, 739, 'summer-sports', 'tag')
        page12.add(buyBtn_372)

        // priceNum_372
        const priceNum_372 = this.add.text(1266, 739, '', {})
        priceNum_372.setOrigin(0.5, 0.5)
        priceNum_372.text = '450'
        priceNum_372.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        page12.add(priceNum_372)

        // page13
        const page13 = this.add.container(0, 0)
        page13.visible = false

        // page13body
        const page13body = this.add.image(760, 480, 'summer-sports', 'page13body')
        page13.add(page13body)

        // backpage13
        const backpage13 = this.add.image(499, 810, 'summer-sports', 'backpage')
        page13.add(backpage13)

        // exit_2
        const exit_2 = this.add.image(1162, 42, 'summer-sports', 'exit')
        page13.add(exit_2)

        // buttons
        const buttons = this.add.container(204, 59)
        buttons.visible = false

        // exit
        const exit = this.add.image(1281, -26, 'summer-sports', 'exit')
        buttons.add(exit)

        // nextpage_1
        const nextpage_1 = this.add.image(1226, 750, 'summer-sports', 'nextpage')
        buttons.add(nextpage_1)

        // backpage
        const backpage = this.add.image(-121, 752, 'summer-sports', 'backpage')
        buttons.add(backpage)

        // coinholder
        const coinholder = this.add.image(712, 878, 'summer-sports', 'coinholder')
        coinholder.scaleX = 0.5199561211472358
        coinholder.scaleY = 0.5199561211472358
        buttons.add(coinholder)

        // coins
        const coins = this.add.text(596, 864, '', {})
        coins.text = 'Your Coins: 100000'
        coins.setStyle({align: 'center', color: '#000000ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold italic'})
        buttons.add(coins)

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13]

        // block (components)
        new Interactive(block)

        // nextpage (components)
        const nextpageButton = new Button(nextpage)
        nextpageButton.callback = () => this.nextPage()

        // exit_1 (components)
        const exit_1SimpleButton = new SimpleButton(exit_1)
        exit_1SimpleButton.callback = () => this.scene.stop()

        // buyBtn_722 (components)
        const buyBtn_722Button = new Button(buyBtn_722)
        buyBtn_722Button.callback = () => this.buy(722)

        // priceNum_722 (components)
        const priceNum_722Pricetag = new Pricetag(priceNum_722)
        priceNum_722Pricetag.id = 722

        // buyBtn_3002 (components)
        const buyBtn_3002Button = new Button(buyBtn_3002)
        buyBtn_3002Button.callback = () => this.buy(3002)

        // priceNum_3002 (components)
        const priceNum_3002Pricetag = new Pricetag(priceNum_3002)
        priceNum_3002Pricetag.id = 3002

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle)
        rectangleSimpleButton.hoverCallback = () => this.onRectangleHover(1)
        rectangleSimpleButton.hoverOutCallback = () => this.onRectangleOut(1)
        rectangleSimpleButton.callback = () => this.buy(958)

        // rectangle1 (components)
        const rectangle1SimpleButton = new SimpleButton(rectangle1)
        rectangle1SimpleButton.hoverCallback = () => this.onRectangleHover(2)
        rectangle1SimpleButton.hoverOutCallback = () => this.onRectangleOut(2)
        rectangle1SimpleButton.callback = () => this.buy(993)

        // rectangle2 (components)
        const rectangle2SimpleButton = new SimpleButton(rectangle2)
        rectangle2SimpleButton.hoverCallback = () => this.onRectangleHover(3)
        rectangle2SimpleButton.hoverOutCallback = () => this.onRectangleOut(3)
        rectangle2SimpleButton.callback = () => this.buy(918)

        // rectangle3 (components)
        const rectangle3SimpleButton = new SimpleButton(rectangle3)
        rectangle3SimpleButton.hoverCallback = () => this.onRectangleHover(4)
        rectangle3SimpleButton.hoverOutCallback = () => this.onRectangleOut(4)
        rectangle3SimpleButton.callback = () => this.buy(920)

        // buyBtn_5472 (components)
        const buyBtn_5472Button = new Button(buyBtn_5472)
        buyBtn_5472Button.callback = () => this.buy(5472)

        // priceNum_5472 (components)
        const priceNum_5472Pricetag = new Pricetag(priceNum_5472)
        priceNum_5472Pricetag.id = 5472

        // buyBtn_5473 (components)
        const buyBtn_5473Button = new Button(buyBtn_5473)
        buyBtn_5473Button.callback = () => this.buy(5473)

        // priceNum_5473 (components)
        const priceNum_5473Pricetag = new Pricetag(priceNum_5473)
        priceNum_5473Pricetag.id = 5473

        // buyBtn_1906 (components)
        const buyBtn_1906Button = new Button(buyBtn_1906)
        buyBtn_1906Button.callback = () => this.buy(1906)

        // priceNum_1906 (components)
        const priceNum_1906Pricetag = new Pricetag(priceNum_1906)
        priceNum_1906Pricetag.id = 1906

        // buyBtn_1907 (components)
        const buyBtn_1907Button = new Button(buyBtn_1907)
        buyBtn_1907Button.callback = () => this.buy(1907)

        // priceNum_1907 (components)
        const priceNum_1907Pricetag = new Pricetag(priceNum_1907)
        priceNum_1907Pricetag.id = 1907

        // buyBtn_5471 (components)
        const buyBtn_5471Button = new Button(buyBtn_5471)
        buyBtn_5471Button.callback = () => this.buy(5471)

        // priceNum_5471 (components)
        const priceNum_5471Pricetag = new Pricetag(priceNum_5471)
        priceNum_5471Pricetag.id = 5471

        // buyBtn_5474 (components)
        const buyBtn_5474Button = new Button(buyBtn_5474)
        buyBtn_5474Button.callback = () => this.buy(5474)

        // priceNum_5474 (components)
        const priceNum_5474Pricetag = new Pricetag(priceNum_5474)
        priceNum_5474Pricetag.id = 5474

        // buyBtn_24191 (components)
        const buyBtn_24191Button = new Button(buyBtn_24191)
        buyBtn_24191Button.callback = () => this.buy(24191)

        // priceNum_24191 (components)
        const priceNum_24191Pricetag = new Pricetag(priceNum_24191)
        priceNum_24191Pricetag.id = 24191

        // buyBtn_24204 (components)
        const buyBtn_24204Button = new Button(buyBtn_24204)
        buyBtn_24204Button.callback = () => this.buy(24204)

        // priceNum_24204 (components)
        const priceNum_24204Pricetag = new Pricetag(priceNum_24204)
        priceNum_24204Pricetag.id = 24204

        // buyBtn_4347 (components)
        const buyBtn_4347Button = new Button(buyBtn_4347)
        buyBtn_4347Button.callback = () => this.buy(4347)

        // priceNum_4347 (components)
        const priceNum_4347Pricetag = new Pricetag(priceNum_4347)
        priceNum_4347Pricetag.id = 4347

        // buyBtn_4349 (components)
        const buyBtn_4349Button = new Button(buyBtn_4349)
        buyBtn_4349Button.callback = () => this.buy(4349)

        // priceNum_4349 (components)
        const priceNum_4349Pricetag = new Pricetag(priceNum_4349)
        priceNum_4349Pricetag.id = 4349

        // buyBtn_4350 (components)
        const buyBtn_4350Button = new Button(buyBtn_4350)
        buyBtn_4350Button.callback = () => this.buy(4350)

        // priceNum_4350 (components)
        const priceNum_4350Pricetag = new Pricetag(priceNum_4350)
        priceNum_4350Pricetag.id = 4350

        // buyBtn_4348 (components)
        const buyBtn_4348Button = new Button(buyBtn_4348)
        buyBtn_4348Button.callback = () => this.buy(4348)

        // priceNum_4348 (components)
        const priceNum_4348Pricetag = new Pricetag(priceNum_4348)
        priceNum_4348Pricetag.id = 4348

        // buyBtn_727 (components)
        const buyBtn_727Button = new Button(buyBtn_727)
        buyBtn_727Button.callback = () => this.buy(727)

        // priceNum_727 (components)
        const priceNum_727Pricetag = new Pricetag(priceNum_727)
        priceNum_727Pricetag.id = 727

        // buyBtn_4091 (components)
        const buyBtn_4091Button = new Button(buyBtn_4091)
        buyBtn_4091Button.callback = () => this.buy(4091)

        // priceNum_4091 (components)
        const priceNum_4091Pricetag = new Pricetag(priceNum_4091)
        priceNum_4091Pricetag.id = 4091

        // buyBtn_329 (components)
        const buyBtn_329Button = new Button(buyBtn_329)
        buyBtn_329Button.callback = () => this.buy(329)

        // priceNum_329 (components)
        const priceNum_329Pricetag = new Pricetag(priceNum_329)
        priceNum_329Pricetag.id = 329

        // buyBtn_255 (components)
        const buyBtn_255Button = new Button(buyBtn_255)
        buyBtn_255Button.callback = () => this.buy(255)

        // priceNum_255 (components)
        const priceNum_255Pricetag = new Pricetag(priceNum_255)
        priceNum_255Pricetag.id = 255

        // buyBtn_4116 (components)
        const buyBtn_4116Button = new Button(buyBtn_4116)
        buyBtn_4116Button.callback = () => this.buy(4116)

        // priceNum_4116 (components)
        const priceNum_4116Pricetag = new Pricetag(priceNum_4116)
        priceNum_4116Pricetag.id = 4116

        // buyBtn_5048 (components)
        const buyBtn_5048Button = new Button(buyBtn_5048)
        buyBtn_5048Button.callback = () => this.buy(5048)

        // priceNum_5048 (components)
        const priceNum_5048Pricetag = new Pricetag(priceNum_5048)
        priceNum_5048Pricetag.id = 5048

        // buyBtn_658 (components)
        const buyBtn_658Button = new Button(buyBtn_658)
        buyBtn_658Button.callback = () => this.buy(658)

        // priceNum_658 (components)
        const priceNum_658Pricetag = new Pricetag(priceNum_658)
        priceNum_658Pricetag.id = 658

        // buyBtn_671 (components)
        const buyBtn_671Button = new Button(buyBtn_671)
        buyBtn_671Button.callback = () => this.buy(671)

        // priceNum_671 (components)
        const priceNum_671Pricetag = new Pricetag(priceNum_671)
        priceNum_671Pricetag.id = 671

        // buyBtn_5136 (components)
        const buyBtn_5136Button = new Button(buyBtn_5136)
        buyBtn_5136Button.callback = () => this.buy(5136)

        // priceNum_5136 (components)
        const priceNum_5136Pricetag = new Pricetag(priceNum_5136)
        priceNum_5136Pricetag.id = 5136

        // buyBtn_254 (components)
        const buyBtn_254Button = new Button(buyBtn_254)
        buyBtn_254Button.callback = () => this.buy(254)

        // priceNum_254 (components)
        const priceNum_254Pricetag = new Pricetag(priceNum_254)
        priceNum_254Pricetag.id = 254

        // buyBtn_1079 (components)
        const buyBtn_1079Button = new Button(buyBtn_1079)
        buyBtn_1079Button.callback = () => this.buy(1079)

        // priceNum_1079 (components)
        const priceNum_1079Pricetag = new Pricetag(priceNum_1079)
        priceNum_1079Pricetag.id = 1079

        // buyBtn_462 (components)
        const buyBtn_462Button = new Button(buyBtn_462)
        buyBtn_462Button.callback = () => this.buy(462)

        // priceNum_462 (components)
        const priceNum_462Pricetag = new Pricetag(priceNum_462)
        priceNum_462Pricetag.id = 462

        // buyBtn_1078 (components)
        const buyBtn_1078Button = new Button(buyBtn_1078)
        buyBtn_1078Button.callback = () => this.buy(1078)

        // priceNum_1078 (components)
        const priceNum_1078Pricetag = new Pricetag(priceNum_1078)
        priceNum_1078Pricetag.id = 1078

        // buyBtn_721 (components)
        const buyBtn_721Button = new Button(buyBtn_721)
        buyBtn_721Button.callback = () => this.buy(721)

        // priceNum_721 (components)
        const priceNum_721Pricetag = new Pricetag(priceNum_721)
        priceNum_721Pricetag.id = 721

        // buyBtn_4115 (components)
        const buyBtn_4115Button = new Button(buyBtn_4115)
        buyBtn_4115Button.callback = () => this.buy(4115)

        // priceNum_4115 (components)
        const priceNum_4115Pricetag = new Pricetag(priceNum_4115)
        priceNum_4115Pricetag.id = 4115

        // buyBtn_463 (components)
        const buyBtn_463Button = new Button(buyBtn_463)
        buyBtn_463Button.callback = () => this.buy(463)

        // priceNum_463 (components)
        const priceNum_463Pricetag = new Pricetag(priceNum_463)
        priceNum_463Pricetag.id = 463

        // buyBtn_726 (components)
        const buyBtn_726Button = new Button(buyBtn_726)
        buyBtn_726Button.callback = () => this.buy(726)

        // priceNum_726 (components)
        const priceNum_726Pricetag = new Pricetag(priceNum_726)
        priceNum_726Pricetag.id = 726

        // buyBtn_720 (components)
        const buyBtn_720Button = new Button(buyBtn_720)
        buyBtn_720Button.callback = () => this.buy(720)

        // priceNum_720 (components)
        const priceNum_720Pricetag = new Pricetag(priceNum_720)
        priceNum_720Pricetag.id = 720

        // buyBtn_5091 (components)
        const buyBtn_5091Button = new Button(buyBtn_5091)
        buyBtn_5091Button.callback = () => this.buy(5091)

        // priceNum_5091 (components)
        const priceNum_5091Pricetag = new Pricetag(priceNum_5091)
        priceNum_5091Pricetag.id = 5091

        // buyBtn_5092 (components)
        const buyBtn_5092Button = new Button(buyBtn_5092)
        buyBtn_5092Button.callback = () => this.buy(5092)

        // priceNum_5092 (components)
        const priceNum_5092Pricetag = new Pricetag(priceNum_5092)
        priceNum_5092Pricetag.id = 5092

        // buyBtn_5093 (components)
        const buyBtn_5093Button = new Button(buyBtn_5093)
        buyBtn_5093Button.callback = () => this.buy(5093)

        // priceNum_5093 (components)
        const priceNum_5093Pricetag = new Pricetag(priceNum_5093)
        priceNum_5093Pricetag.id = 5093

        // buyBtn_5094 (components)
        const buyBtn_5094Button = new Button(buyBtn_5094)
        buyBtn_5094Button.callback = () => this.buy(5094)

        // priceNum_5094 (components)
        const priceNum_5094Pricetag = new Pricetag(priceNum_5094)
        priceNum_5094Pricetag.id = 5094

        // buyBtn_4089 (components)
        const buyBtn_4089Button = new Button(buyBtn_4089)
        buyBtn_4089Button.callback = () => this.buy(4089)

        // priceNum_4089 (components)
        const priceNum_4089Pricetag = new Pricetag(priceNum_4089)
        priceNum_4089Pricetag.id = 4089

        // buyBtn_4090 (components)
        const buyBtn_4090Button = new Button(buyBtn_4090)
        buyBtn_4090Button.callback = () => this.buy(4090)

        // priceNum_4090 (components)
        const priceNum_4090Pricetag = new Pricetag(priceNum_4090)
        priceNum_4090Pricetag.id = 4090

        // buyBtn_313 (components)
        const buyBtn_313Button = new Button(buyBtn_313)
        buyBtn_313Button.callback = () => this.buy(313)

        // priceNum_313 (components)
        const priceNum_313Pricetag = new Pricetag(priceNum_313)
        priceNum_313Pricetag.id = 313

        // buyBtn_372 (components)
        const buyBtn_372Button = new Button(buyBtn_372)
        buyBtn_372Button.callback = () => this.buy(372)

        // priceNum_372 (components)
        const priceNum_372Pricetag = new Pricetag(priceNum_372)
        priceNum_372Pricetag.id = 372

        // backpage13 (components)
        const backpage13Button = new Button(backpage13)
        backpage13Button.callback = () => this.prevPage()

        // exit_2 (components)
        const exit_2SimpleButton = new SimpleButton(exit_2)
        exit_2SimpleButton.callback = () => this.scene.stop()

        // exit (components)
        const exitSimpleButton = new SimpleButton(exit)
        exitSimpleButton.callback = () => this.scene.stop()

        // nextpage_1 (components)
        const nextpage_1Button = new Button(nextpage_1)
        nextpage_1Button.callback = () => this.nextPage()

        // backpage (components)
        const backpageButton = new Button(backpage)
        backpageButton.callback = () => this.prevPage()

        this.buyBtn_722 = buyBtn_722
        this.priceNum_722 = priceNum_722
        this.buyBtn_3002 = buyBtn_3002
        this.priceNum_3002 = priceNum_3002
        this.bgholder1 = bgholder1
        this.bgholder2 = bgholder2
        this.bgholder3 = bgholder3
        this.bgholder4 = bgholder4
        this.rectangle = rectangle
        this.rectangle1 = rectangle1
        this.rectangle2 = rectangle2
        this.rectangle3 = rectangle3
        this.buyBtn_5472 = buyBtn_5472
        this.priceNum_5472 = priceNum_5472
        this.buyBtn_5473 = buyBtn_5473
        this.priceNum_5473 = priceNum_5473
        this.buyBtn_1906 = buyBtn_1906
        this.priceNum_1906 = priceNum_1906
        this.buyBtn_1907 = buyBtn_1907
        this.priceNum_1907 = priceNum_1907
        this.buyBtn_5471 = buyBtn_5471
        this.priceNum_5471 = priceNum_5471
        this.buyBtn_5474 = buyBtn_5474
        this.priceNum_5474 = priceNum_5474
        this.buyBtn_24191 = buyBtn_24191
        this.priceNum_24191 = priceNum_24191
        this.buyBtn_24204 = buyBtn_24204
        this.priceNum_24204 = priceNum_24204
        this.buyBtn_4347 = buyBtn_4347
        this.priceNum_4347 = priceNum_4347
        this.buyBtn_4349 = buyBtn_4349
        this.priceNum_4349 = priceNum_4349
        this.buyBtn_4350 = buyBtn_4350
        this.priceNum_4350 = priceNum_4350
        this.buyBtn_4348 = buyBtn_4348
        this.priceNum_4348 = priceNum_4348
        this.buyBtn_727 = buyBtn_727
        this.priceNum_727 = priceNum_727
        this.buyBtn_4091 = buyBtn_4091
        this.priceNum_4091 = priceNum_4091
        this.buyBtn_329 = buyBtn_329
        this.priceNum_329 = priceNum_329
        this.buyBtn_255 = buyBtn_255
        this.priceNum_255 = priceNum_255
        this.buyBtn_4116 = buyBtn_4116
        this.priceNum_4116 = priceNum_4116
        this.buyBtn_5048 = buyBtn_5048
        this.priceNum_5048 = priceNum_5048
        this.buyBtn_658 = buyBtn_658
        this.priceNum_658 = priceNum_658
        this.buyBtn_671 = buyBtn_671
        this.priceNum_671 = priceNum_671
        this.buyBtn_5136 = buyBtn_5136
        this.priceNum_5136 = priceNum_5136
        this.buyBtn_254 = buyBtn_254
        this.priceNum_254 = priceNum_254
        this.buyBtn_1079 = buyBtn_1079
        this.priceNum_1079 = priceNum_1079
        this.buyBtn_462 = buyBtn_462
        this.priceNum_462 = priceNum_462
        this.buyBtn_1078 = buyBtn_1078
        this.priceNum_1078 = priceNum_1078
        this.buyBtn_721 = buyBtn_721
        this.priceNum_721 = priceNum_721
        this.buyBtn_4115 = buyBtn_4115
        this.priceNum_4115 = priceNum_4115
        this.buyBtn_463 = buyBtn_463
        this.priceNum_463 = priceNum_463
        this.buyBtn_726 = buyBtn_726
        this.priceNum_726 = priceNum_726
        this.buyBtn_720 = buyBtn_720
        this.priceNum_720 = priceNum_720
        this.buyBtn_5091 = buyBtn_5091
        this.priceNum_5091 = priceNum_5091
        this.buyBtn_5092 = buyBtn_5092
        this.priceNum_5092 = priceNum_5092
        this.buyBtn_5093 = buyBtn_5093
        this.priceNum_5093 = priceNum_5093
        this.buyBtn_5094 = buyBtn_5094
        this.priceNum_5094 = priceNum_5094
        this.buyBtn_4089 = buyBtn_4089
        this.priceNum_4089 = priceNum_4089
        this.buyBtn_4090 = buyBtn_4090
        this.priceNum_4090 = priceNum_4090
        this.buyBtn_313 = buyBtn_313
        this.priceNum_313 = priceNum_313
        this.buyBtn_372 = buyBtn_372
        this.priceNum_372 = priceNum_372
        this.coins = coins
        this.buttons = buttons
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.setCoins(this.shell.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
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
