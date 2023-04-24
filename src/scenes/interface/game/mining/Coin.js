// You can write more code here

/* START OF COMPILED CODE */

export default class Coin extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x ?? 29, y ?? 52)

        // frame1
        const frame1 = scene.add.container(-18, 8)
        frame1.visible = false
        this.add(frame1)

        // coin_0001
        const coin_0001 = scene.add.image(18, -5, 'main', 'coin_0001')
        frame1.add(coin_0001)

        // text
        const text = scene.add.text(12, 17, '', {})
        text.scaleX = 0.6166445600432048
        text.setOrigin(0.5, 0.5)
        text.text = '100'
        text.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame1.add(text)

        // frame2
        const frame2 = scene.add.container(-18, 7)
        frame2.visible = false
        this.add(frame2)

        // coin_0002
        const coin_0002 = scene.add.image(18, -5, 'main', 'coin_0002')
        frame2.add(coin_0002)

        // text_1
        const text_1 = scene.add.text(12, 17, '', {})
        text_1.scaleX = 0.6166445600432048
        text_1.setOrigin(0.5, 0.5)
        text_1.text = '100'
        text_1.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame2.add(text_1)

        // frame3
        const frame3 = scene.add.container(-13, 6)
        frame3.visible = false
        this.add(frame3)

        // coin_0003
        const coin_0003 = scene.add.image(13, -5, 'main', 'coin_0003')
        frame3.add(coin_0003)

        // text_2
        const text_2 = scene.add.text(5.5, 14, '', {})
        text_2.scaleX = 0.30957740295663727
        text_2.setOrigin(0.5, 0.5)
        text_2.text = '100'
        text_2.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame3.add(text_2)

        // frame4
        const frame4 = scene.add.container(-13, 7)
        frame4.visible = false
        this.add(frame4)

        // coin_0004
        const coin_0004 = scene.add.image(13, -5, 'main', 'coin_0004')
        frame4.add(coin_0004)

        // text_3
        const text_3 = scene.add.text(5.5, 12, '', {})
        text_3.scaleX = 0.30957740295663727
        text_3.setOrigin(0.5, 0.5)
        text_3.text = '100'
        text_3.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame4.add(text_3)

        // frame5
        const frame5 = scene.add.image(0, 7, 'main', 'coin_0005')
        frame5.visible = false
        this.add(frame5)

        // frame6
        const frame6 = scene.add.image(0, 6, 'main', 'coin_0006')
        frame6.visible = false
        this.add(frame6)

        // frame7
        const frame7 = scene.add.container(-5, 1)
        frame7.visible = false
        this.add(frame7)

        // coin_0007
        const coin_0007 = scene.add.image(5, 0, 'main', 'coin_0007')
        frame7.add(coin_0007)

        // text_4
        const text_4 = scene.add.text(6.5, 5, '', {})
        text_4.scaleX = 0.2892037833316321
        text_4.setOrigin(0.5, 0.5)
        text_4.text = '100'
        text_4.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame7.add(text_4)

        // frame8
        const frame8 = scene.add.container(-5, -4)
        frame8.visible = false
        this.add(frame8)

        // coin_0008
        const coin_0008 = scene.add.image(5, 5, 'main', 'coin_0008')
        frame8.add(coin_0008)

        // text_28
        const text_28 = scene.add.text(6.5, 6, '', {})
        text_28.scaleX = 0.2892037833316321
        text_28.setOrigin(0.5, 0.5)
        text_28.text = '100'
        text_28.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame8.add(text_28)

        // frame9
        const frame9 = scene.add.container(-8, -5)
        frame9.visible = false
        this.add(frame9)

        // coin_0009
        const coin_0009 = scene.add.image(8, 8, 'main', 'coin_0009')
        frame9.add(coin_0009)

        // text_6
        const text_6 = scene.add.text(11, 4, '', {})
        text_6.scaleX = 0.5513511811365961
        text_6.setOrigin(0.5, 0.5)
        text_6.text = '100'
        text_6.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame9.add(text_6)

        // frame10
        const frame10 = scene.add.container(-8, -11)
        frame10.visible = false
        this.add(frame10)

        // coin_0010
        const coin_0010 = scene.add.image(8, 12, 'main', 'coin_0010')
        frame10.add(coin_0010)

        // text_7
        const text_7 = scene.add.text(11, 5, '', {})
        text_7.scaleX = 0.5513511811365961
        text_7.setOrigin(0.5, 0.5)
        text_7.text = '100'
        text_7.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame10.add(text_7)

        // frame11
        const frame11 = scene.add.container(-13, -14)
        frame11.visible = false
        this.add(frame11)

        // coin_0011
        const coin_0011 = scene.add.image(13, 16, 'main', 'coin_0011')
        frame11.add(coin_0011)

        // text_8
        const text_8 = scene.add.text(15, 6, '', {})
        text_8.scaleX = 0.7019936124483478
        text_8.setOrigin(0.5, 0.5)
        text_8.text = '100'
        text_8.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame11.add(text_8)

        // frame12
        const frame12 = scene.add.container(-13, -19)
        frame12.visible = false
        this.add(frame12)

        // coin_0012
        const coin_0012 = scene.add.image(13, 21, 'main', 'coin_0012')
        frame12.add(coin_0012)

        // text_9
        const text_9 = scene.add.text(15, 7, '', {})
        text_9.scaleX = 0.7019936124483478
        text_9.setOrigin(0.5, 0.5)
        text_9.text = '100'
        text_9.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame12.add(text_9)

        // frame13
        const frame13 = scene.add.container(-21, -22)
        frame13.visible = false
        this.add(frame13)

        // coin_0013
        const coin_0013 = scene.add.image(21, 24, 'main', 'coin_0013')
        frame13.add(coin_0013)

        // text_10
        const text_10 = scene.add.text(20, 6, '', {})
        text_10.setOrigin(0.5, 0.5)
        text_10.text = '100'
        text_10.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame13.add(text_10)

        // frame14
        const frame14 = scene.add.container(-21, -24)
        frame14.visible = false
        this.add(frame14)

        // coin_0014
        const coin_0014 = scene.add.image(21, 26, 'main', 'coin_0014')
        frame14.add(coin_0014)

        // text_27
        const text_27 = scene.add.text(20, 6, '', {})
        text_27.setOrigin(0.5, 0.5)
        text_27.text = '100'
        text_27.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame14.add(text_27)

        // frame15
        const frame15 = scene.add.container(-21, -24)
        frame15.visible = false
        this.add(frame15)

        // coin_0015
        const coin_0015 = scene.add.image(21, 26, 'main', 'coin_0015')
        frame15.add(coin_0015)

        // text_26
        const text_26 = scene.add.text(20, 5, '', {})
        text_26.setOrigin(0.5, 0.5)
        text_26.text = '100'
        text_26.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame15.add(text_26)

        // frame16
        const frame16 = scene.add.container(-21, -22)
        frame16.visible = false
        this.add(frame16)

        // coin_0016
        const coin_0016 = scene.add.image(21, 26, 'main', 'coin_0016')
        frame16.add(coin_0016)

        // text_25
        const text_25 = scene.add.text(20, 5, '', {})
        text_25.setOrigin(0.5, 0.5)
        text_25.text = '100'
        text_25.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame16.add(text_25)

        // frame17
        const frame17 = scene.add.container(-21, -25)
        frame17.visible = false
        this.add(frame17)

        // coin_0017
        const coin_0017 = scene.add.image(21, 26, 'main', 'coin_0017')
        frame17.add(coin_0017)

        // text_24
        const text_24 = scene.add.text(20, 5, '', {})
        text_24.setOrigin(0.5, 0.5)
        text_24.text = '100'
        text_24.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame17.add(text_24)

        // frame18
        const frame18 = scene.add.container(-21, -25)
        frame18.visible = false
        this.add(frame18)

        // coin_0018
        const coin_0018 = scene.add.image(21, 26, 'main', 'coin_0018')
        frame18.add(coin_0018)

        // text_23
        const text_23 = scene.add.text(20, 5, '', {})
        text_23.setOrigin(0.5, 0.5)
        text_23.text = '100'
        text_23.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame18.add(text_23)

        // frame19
        const frame19 = scene.add.container(-21, -24)
        frame19.visible = false
        this.add(frame19)

        // coin_0019
        const coin_0019 = scene.add.image(21, 26, 'main', 'coin_0019')
        frame19.add(coin_0019)

        // text_22
        const text_22 = scene.add.text(20, 5, '', {})
        text_22.setOrigin(0.5, 0.5)
        text_22.text = '100'
        text_22.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame19.add(text_22)

        // frame20
        const frame20 = scene.add.container(-21, -24)
        frame20.visible = false
        this.add(frame20)

        // coin_0020
        const coin_0020 = scene.add.image(21, 26, 'main', 'coin_0020')
        frame20.add(coin_0020)

        // text_21
        const text_21 = scene.add.text(20, 5, '', {})
        text_21.setOrigin(0.5, 0.5)
        text_21.text = '100'
        text_21.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame20.add(text_21)

        // frame21
        const frame21 = scene.add.container(-21, -24)
        frame21.visible = false
        this.add(frame21)

        // coin_0021
        const coin_0021 = scene.add.image(21, 26, 'main', 'coin_0021')
        frame21.add(coin_0021)

        // text_20
        const text_20 = scene.add.text(20, 5, '', {})
        text_20.setOrigin(0.5, 0.5)
        text_20.text = '100'
        text_20.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame21.add(text_20)

        // frame22
        const frame22 = scene.add.container(-21, -24)
        frame22.visible = false
        this.add(frame22)

        // coin_0022
        const coin_0022 = scene.add.image(21, 26, 'main', 'coin_0022')
        frame22.add(coin_0022)

        // text_19
        const text_19 = scene.add.text(20, 5, '', {})
        text_19.setOrigin(0.5, 0.5)
        text_19.text = '100'
        text_19.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame22.add(text_19)

        // frame23
        const frame23 = scene.add.container(-21, -24)
        frame23.visible = false
        this.add(frame23)

        // coin_0023
        const coin_0023 = scene.add.image(21, 26, 'main', 'coin_0023')
        frame23.add(coin_0023)

        // text_18
        const text_18 = scene.add.text(20, 5, '', {})
        text_18.setOrigin(0.5, 0.5)
        text_18.text = '100'
        text_18.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame23.add(text_18)

        // frame24
        const frame24 = scene.add.container(-21, -22)
        frame24.visible = false
        this.add(frame24)

        // coin_0024
        const coin_0024 = scene.add.image(21, 27, 'main', 'coin_0024')
        frame24.add(coin_0024)

        // text_17
        const text_17 = scene.add.text(20, 5, '', {})
        text_17.setOrigin(0.5, 0.5)
        text_17.text = '100'
        text_17.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame24.add(text_17)

        // frame25
        const frame25 = scene.add.container(-21, -24)
        frame25.visible = false
        this.add(frame25)

        // coin_0025
        const coin_0025 = scene.add.image(21, 27, 'main', 'coin_0025')
        frame25.add(coin_0025)

        // text_16
        const text_16 = scene.add.text(20, 5, '', {})
        text_16.setOrigin(0.5, 0.5)
        text_16.text = '100'
        text_16.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame25.add(text_16)

        // frame26
        const frame26 = scene.add.container(-21, -23)
        frame26.visible = false
        this.add(frame26)

        // coin_0026
        const coin_0026 = scene.add.image(21, 27, 'main', 'coin_0026')
        frame26.add(coin_0026)

        // text_15
        const text_15 = scene.add.text(20, 5, '', {})
        text_15.setOrigin(0.5, 0.5)
        text_15.text = '100'
        text_15.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame26.add(text_15)

        // frame27
        const frame27 = scene.add.container(-21, -22)
        frame27.visible = false
        this.add(frame27)

        // coin_0027
        const coin_0027 = scene.add.image(21, 27, 'main', 'coin_0027')
        frame27.add(coin_0027)

        // text_14
        const text_14 = scene.add.text(20, 5, '', {})
        text_14.setOrigin(0.5, 0.5)
        text_14.text = '100'
        text_14.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame27.add(text_14)

        // frame28
        const frame28 = scene.add.container(-21, -22)
        frame28.visible = false
        this.add(frame28)

        // coin_0028
        const coin_0028 = scene.add.image(21, 27, 'main', 'coin_0028')
        frame28.add(coin_0028)

        // text_13
        const text_13 = scene.add.text(20, 5, '', {})
        text_13.setOrigin(0.5, 0.5)
        text_13.text = '100'
        text_13.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame28.add(text_13)

        // frame29
        const frame29 = scene.add.container(-21, -20)
        frame29.visible = false
        this.add(frame29)

        // coin_0029
        const coin_0029 = scene.add.image(21, 27, 'main', 'coin_0029')
        frame29.add(coin_0029)

        // text_12
        const text_12 = scene.add.text(20, 5, '', {})
        text_12.setOrigin(0.5, 0.5)
        text_12.alpha = 0.7
        text_12.alphaTopLeft = 0.7
        text_12.alphaTopRight = 0.7
        text_12.alphaBottomLeft = 0.7
        text_12.alphaBottomRight = 0.7
        text_12.text = '100'
        text_12.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame29.add(text_12)

        // frame30
        const frame30 = scene.add.container(-21, -25)
        frame30.visible = false
        this.add(frame30)

        // coin_0030
        const coin_0030 = scene.add.image(21, 27, 'main', 'coin_0030')
        frame30.add(coin_0030)

        // text_11
        const text_11 = scene.add.text(20, 5, '', {})
        text_11.setOrigin(0.5, 0.5)
        text_11.alpha = 0.5
        text_11.alphaTopLeft = 0.5
        text_11.alphaTopRight = 0.5
        text_11.alphaBottomLeft = 0.5
        text_11.alphaBottomRight = 0.5
        text_11.text = '100'
        text_11.setStyle({align: 'center', fixedWidth: 50, fontFamily: 'cpBurbankSmall', fontStyle: 'italic', stroke: '#9c6f2fff', strokeThickness: 4})
        frame30.add(text_11)

        // lists
        const texts = [text_11, text_12, text_13, text_14, text_15, text_17, text_16, text_18, text_19, text_20, text_21, text_22, text_23, text_24, text_25, text_26, text_27, text_10, text_9, text_8, text_7, text_6, text_4, text_3, text_2, text_1, text]

        this.frame1 = frame1
        this.frame2 = frame2
        this.frame3 = frame3
        this.frame4 = frame4
        this.frame5 = frame5
        this.frame6 = frame6
        this.frame7 = frame7
        this.frame8 = frame8
        this.frame9 = frame9
        this.frame10 = frame10
        this.frame11 = frame11
        this.frame12 = frame12
        this.frame13 = frame13
        this.frame14 = frame14
        this.frame15 = frame15
        this.frame16 = frame16
        this.frame17 = frame17
        this.frame18 = frame18
        this.frame19 = frame19
        this.frame20 = frame20
        this.frame21 = frame21
        this.frame22 = frame22
        this.frame23 = frame23
        this.frame24 = frame24
        this.frame25 = frame25
        this.frame26 = frame26
        this.frame27 = frame27
        this.frame28 = frame28
        this.frame29 = frame29
        this.frame30 = frame30
        this.texts = texts

        /* START-USER-CTR-CODE */
        this.depth = 2000
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Container} */
    frame1
    /** @type {Phaser.GameObjects.Container} */
    frame2
    /** @type {Phaser.GameObjects.Container} */
    frame3
    /** @type {Phaser.GameObjects.Container} */
    frame4
    /** @type {Phaser.GameObjects.Image} */
    frame5
    /** @type {Phaser.GameObjects.Image} */
    frame6
    /** @type {Phaser.GameObjects.Container} */
    frame7
    /** @type {Phaser.GameObjects.Container} */
    frame8
    /** @type {Phaser.GameObjects.Container} */
    frame9
    /** @type {Phaser.GameObjects.Container} */
    frame10
    /** @type {Phaser.GameObjects.Container} */
    frame11
    /** @type {Phaser.GameObjects.Container} */
    frame12
    /** @type {Phaser.GameObjects.Container} */
    frame13
    /** @type {Phaser.GameObjects.Container} */
    frame14
    /** @type {Phaser.GameObjects.Container} */
    frame15
    /** @type {Phaser.GameObjects.Container} */
    frame16
    /** @type {Phaser.GameObjects.Container} */
    frame17
    /** @type {Phaser.GameObjects.Container} */
    frame18
    /** @type {Phaser.GameObjects.Container} */
    frame19
    /** @type {Phaser.GameObjects.Container} */
    frame20
    /** @type {Phaser.GameObjects.Container} */
    frame21
    /** @type {Phaser.GameObjects.Container} */
    frame22
    /** @type {Phaser.GameObjects.Container} */
    frame23
    /** @type {Phaser.GameObjects.Container} */
    frame24
    /** @type {Phaser.GameObjects.Container} */
    frame25
    /** @type {Phaser.GameObjects.Container} */
    frame26
    /** @type {Phaser.GameObjects.Container} */
    frame27
    /** @type {Phaser.GameObjects.Container} */
    frame28
    /** @type {Phaser.GameObjects.Container} */
    frame29
    /** @type {Phaser.GameObjects.Container} */
    frame30
    /** @type {Phaser.GameObjects.Text[]} */
    texts

    /* START-USER-CODE */

    play(coins) {
        for (let i = 0; i < this.texts.length; i++) {
            this.texts[i].text = coins

            if (coins.toString().length == 1) {
                this.texts[i].setFontSize(24)
            } else if (coins.toString().length == 2) {
                this.texts[i].setFontSize(20)
            } else if (coins.toString().length == 3) {
                this.texts[i].setFontSize(16)
            }
        }
        this.frame = 1
        this.visible = true
        this.runFrame()
    }

    runFrame() {
        if (this.frame < 31) {
            if (this.frame == 1) {
                this['frame' + this.frame].visible = true
            } else {
                this['frame' + (this.frame - 1)].visible = false
                this['frame' + this.frame].visible = true
            }
            this.frame++
            setTimeout(() => this.runFrame(), 40)
        } else {
            this.frame30.visible = false
            this.visible = false
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
