import {SimpleButton, Button, Interactive, Pricetag, Name} from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {
    constructor() {
        super('FurnitureCatalog')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('catalogs-master-pack', 'client/media/interface/catalogs/catalogs-master-pack.json')
        this.load.pack('furniturecatalog-pack', 'client/media/interface/catalogs/furniture/furniturecatalog-pack.json')
    }

    /** @returns {void} */
    _create() {
        // blocker
        const blocker = this.add.rectangle(760, 480, 1520, 960)
        blocker.isFilled = true
        blocker.fillColor = 0
        blocker.fillAlpha = 0.3

        // container
        const container = this.add.container(0, 0)

        // coinsContainerShowThis
        const coinsContainerShowThis = this.add.container(1143, 924)
        coinsContainerShowThis.visible = false
        container.add(coinsContainerShowThis)

        // coinTotal_1
        const coinTotal_1 = this.add.tileSprite(110, 3, 378, 68, 'furniturecatalog', 'coinTotal')
        coinsContainerShowThis.add(coinTotal_1)

        // coinsTxt
        const coinsTxt = this.add.text(0, 0, '', {})
        coinsTxt.text = 'Your Coins: 100000'
        coinsTxt.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold italic'})
        coinsContainerShowThis.add(coinsTxt)

        // page25
        const page25 = this.add.container(0, 0)
        page25.visible = false
        container.add(page25)

        // p25
        const p25 = this.add.image(760, 463, 'furniturecatalog', 'p25')
        page25.add(p25)

        // prvPage_1
        const prvPage_1 = this.add.image(505, 799, 'furniturecatalog', 'prevPage')
        page25.add(prvPage_1)

        // page23
        const page23 = this.add.container(0, 0)
        page23.visible = false
        container.add(page23)

        // p23
        const p23 = this.add.image(760, 463, 'furniturecatalog', 'p23')
        page23.add(p23)

        // buyButton_75
        const buyButton_75 = this.add.image(528, 349, 'furniturecatalog', 'buyButton')
        page23.add(buyButton_75)

        // buyButton_76
        const buyButton_76 = this.add.image(257, 667, 'furniturecatalog', 'buyButton')
        page23.add(buyButton_76)

        // buyButton_77
        const buyButton_77 = this.add.image(1228, 269, 'furniturecatalog', 'buyButton')
        page23.add(buyButton_77)

        // buyButton_78
        const buyButton_78 = this.add.image(1230, 477, 'furniturecatalog', 'buyButton')
        page23.add(buyButton_78)

        // buyButton_79
        const buyButton_79 = this.add.image(1235, 692, 'furniturecatalog', 'buyButton')
        page23.add(buyButton_79)

        // coins_67
        const coins_67 = this.add.text(523, 334, '', {})
        coins_67.text = '275'
        coins_67.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page23.add(coins_67)

        // coins_68
        const coins_68 = this.add.text(250, 652, '', {})
        coins_68.text = '450'
        coins_68.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page23.add(coins_68)

        // coins_69
        const coins_69 = this.add.text(1222, 254, '', {})
        coins_69.text = '425'
        coins_69.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page23.add(coins_69)

        // coins_70
        const coins_70 = this.add.text(1223, 463, '', {})
        coins_70.text = '350'
        coins_70.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page23.add(coins_70)

        // coins_71
        const coins_71 = this.add.text(1226, 677, '', {})
        coins_71.text = '250'
        coins_71.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page23.add(coins_71)

        // page22
        const page22 = this.add.container(0, 0)
        page22.visible = false
        container.add(page22)

        // p22
        const p22 = this.add.image(760, 463, 'furniturecatalog', 'p22')
        page22.add(p22)

        // buyButton_69
        const buyButton_69 = this.add.image(230, 392, 'furniturecatalog', 'buyButton')
        page22.add(buyButton_69)

        // buyButton_70
        const buyButton_70 = this.add.image(536, 400, 'furniturecatalog', 'buyButton')
        page22.add(buyButton_70)

        // buyButton_71
        const buyButton_71 = this.add.image(239, 748, 'furniturecatalog', 'buyButton')
        page22.add(buyButton_71)

        // buyButton_72
        const buyButton_72 = this.add.image(528, 748, 'furniturecatalog', 'buyButton')
        page22.add(buyButton_72)

        // buyButton_73
        const buyButton_73 = this.add.image(1229, 287, 'furniturecatalog', 'buyButton')
        page22.add(buyButton_73)

        // buyButton_74
        const buyButton_74 = this.add.image(1247, 659, 'furniturecatalog', 'buyButton')
        page22.add(buyButton_74)

        // coins_61
        const coins_61 = this.add.text(228, 377, '', {})
        coins_61.text = '30'
        coins_61.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page22.add(coins_61)

        // coins_62
        const coins_62 = this.add.text(530, 385, '', {})
        coins_62.text = '175'
        coins_62.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page22.add(coins_62)

        // coins_63
        const coins_63 = this.add.text(226, 733, '', {})
        coins_63.text = '1000'
        coins_63.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page22.add(coins_63)

        // coins_64
        const coins_64 = this.add.text(521, 733, '', {})
        coins_64.text = '245'
        coins_64.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page22.add(coins_64)

        // coins_65
        const coins_65 = this.add.text(1221, 273, '', {})
        coins_65.text = '580'
        coins_65.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page22.add(coins_65)

        // coins_66
        const coins_66 = this.add.text(1240, 644, '', {})
        coins_66.text = '550'
        coins_66.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page22.add(coins_66)

        // page21
        const page21 = this.add.container(0, 0)
        page21.visible = false
        container.add(page21)

        // p21
        const p21 = this.add.image(760, 463, 'furniturecatalog', 'p21')
        page21.add(p21)

        // buyButton_65
        const buyButton_65 = this.add.image(246, 684, 'furniturecatalog', 'buyButton')
        page21.add(buyButton_65)

        // buyButton_66
        const buyButton_66 = this.add.image(538, 658, 'furniturecatalog', 'buyButton')
        page21.add(buyButton_66)

        // buyButton_67
        const buyButton_67 = this.add.image(969, 643, 'furniturecatalog', 'buyButton')
        page21.add(buyButton_67)

        // buyButton_68
        const buyButton_68 = this.add.image(1255, 674, 'furniturecatalog', 'buyButton')
        page21.add(buyButton_68)

        // coins_57
        const coins_57 = this.add.text(242, 669, '', {})
        coins_57.text = '200'
        coins_57.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page21.add(coins_57)

        // coins_58
        const coins_58 = this.add.text(532, 643, '', {})
        coins_58.text = '100'
        coins_58.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page21.add(coins_58)

        // coins_59
        const coins_59 = this.add.text(960, 628, '', {})
        coins_59.text = '200'
        coins_59.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page21.add(coins_59)

        // coins_60
        const coins_60 = this.add.text(1250, 659, '', {})
        coins_60.text = '100'
        coins_60.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page21.add(coins_60)

        // page20
        const page20 = this.add.container(0, 0)
        page20.visible = false
        container.add(page20)

        // p20
        const p20 = this.add.image(760, 463, 'furniturecatalog', 'p20')
        page20.add(p20)

        // buyButton_61
        const buyButton_61 = this.add.image(541, 360, 'furniturecatalog', 'buyButton')
        page20.add(buyButton_61)

        // buyButton_62
        const buyButton_62 = this.add.image(266, 675, 'furniturecatalog', 'buyButton')
        page20.add(buyButton_62)

        // buyButton_63
        const buyButton_63 = this.add.image(1216, 276, 'furniturecatalog', 'buyButton')
        page20.add(buyButton_63)

        // buyButton_64
        const buyButton_64 = this.add.image(1261, 717, 'furniturecatalog', 'buyButton')
        page20.add(buyButton_64)

        // coins_53
        const coins_53 = this.add.text(532, 345, '', {})
        coins_53.text = '200'
        coins_53.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page20.add(coins_53)

        // coins_54
        const coins_54 = this.add.text(260, 660, '', {})
        coins_54.text = '100'
        coins_54.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page20.add(coins_54)

        // coins_55
        const coins_55 = this.add.text(1210, 261, '', {})
        coins_55.text = '125'
        coins_55.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page20.add(coins_55)

        // coins_56
        const coins_56 = this.add.text(1254, 703, '', {})
        coins_56.text = '550'
        coins_56.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page20.add(coins_56)

        // page19
        const page19 = this.add.container(0, -1)
        page19.visible = false
        container.add(page19)

        // p19
        const p19 = this.add.image(760, 463, 'furniturecatalog', 'p19')
        page19.add(p19)

        // buyButton_59
        const buyButton_59 = this.add.image(574, 724, 'furniturecatalog', 'buyButton')
        page19.add(buyButton_59)

        // buyButton_60
        const buyButton_60 = this.add.image(1280, 727, 'furniturecatalog', 'buyButton')
        page19.add(buyButton_60)

        // page18
        const page18 = this.add.container(0, -1)
        page18.visible = false
        container.add(page18)

        // p18
        const p18 = this.add.image(760, 463, 'furniturecatalog', 'p18')
        page18.add(p18)

        // buyButton_58
        const buyButton_58 = this.add.image(1271, 741, 'furniturecatalog', 'buyButton')
        page18.add(buyButton_58)

        // coins_78
        const coins_78 = this.add.text(1255, 727, '', {})
        coins_78.text = '3030'
        coins_78.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page18.add(coins_78)

        // page17
        const page17 = this.add.container(0, -1)
        page17.visible = false
        container.add(page17)

        // p17
        const p17 = this.add.image(760, 463, 'furniturecatalog', 'p17')
        page17.add(p17)

        // buyButton_56
        const buyButton_56 = this.add.image(562, 741, 'furniturecatalog', 'buyButton')
        page17.add(buyButton_56)

        // buyButton_57
        const buyButton_57 = this.add.image(1283, 743, 'furniturecatalog', 'buyButton')
        page17.add(buyButton_57)

        // coins_76
        const coins_76 = this.add.text(546, 726, '', {})
        coins_76.text = '1000'
        coins_76.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page17.add(coins_76)

        // coins_77
        const coins_77 = this.add.text(1273, 729, '', {})
        coins_77.text = '900'
        coins_77.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page17.add(coins_77)

        // page16
        const page16 = this.add.container(0, -1)
        page16.visible = false
        container.add(page16)

        // p16
        const p16 = this.add.image(760, 463, 'furniturecatalog', 'p16')
        page16.add(p16)

        // buyButton_55
        const buyButton_55 = this.add.image(360, 751, 'furniturecatalog', 'buyButton')
        page16.add(buyButton_55)

        // coins_52
        const coins_52 = this.add.text(347, 736, '', {})
        coins_52.text = '2700'
        coins_52.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page16.add(coins_52)

        // page15
        const page15 = this.add.container(0, -1)
        page15.visible = false
        container.add(page15)

        // p15
        const p15 = this.add.image(760, 463, 'furniturecatalog', 'p15')
        page15.add(p15)

        // buyButton_54
        const buyButton_54 = this.add.image(359, 755, 'furniturecatalog', 'buyButton')
        page15.add(buyButton_54)

        // coins_51
        const coins_51 = this.add.text(344, 741, '', {})
        coins_51.text = '2800'
        coins_51.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page15.add(coins_51)

        // page14
        const page14 = this.add.container(0, -1)
        page14.visible = false
        container.add(page14)

        // p14
        const p14 = this.add.image(760, 463, 'furniturecatalog', 'p14')
        page14.add(p14)

        // buyButton_53
        const buyButton_53 = this.add.image(360, 757, 'furniturecatalog', 'buyButton')
        page14.add(buyButton_53)

        // coins_50
        const coins_50 = this.add.text(347, 743, '', {})
        coins_50.text = '2800'
        coins_50.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page14.add(coins_50)

        // page13
        const page13 = this.add.container(0, -1)
        page13.visible = false
        container.add(page13)

        // p13
        const p13 = this.add.image(760, 463, 'furniturecatalog', 'p13')
        page13.add(p13)

        // buyButton_45
        const buyButton_45 = this.add.image(225, 395, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_45)

        // buyButton_46
        const buyButton_46 = this.add.image(546, 395, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_46)

        // buyButton_47
        const buyButton_47 = this.add.image(954, 375, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_47)

        // buyButton_48
        const buyButton_48 = this.add.image(1273, 375, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_48)

        // buyButton_49
        const buyButton_49 = this.add.image(225, 795, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_49)

        // buyButton_50
        const buyButton_50 = this.add.image(546, 795, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_50)

        // buyButton_51
        const buyButton_51 = this.add.image(954, 795, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_51)

        // buyButton_52
        const buyButton_52 = this.add.image(1273, 795, 'furniturecatalog', 'buyButton')
        page13.add(buyButton_52)

        // coins_42
        const coins_42 = this.add.text(217, 380, '', {})
        coins_42.text = '530'
        coins_42.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_42)

        // coins_43
        const coins_43 = this.add.text(536, 380, '', {})
        coins_43.text = '400'
        coins_43.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_43)

        // coins_44
        const coins_44 = this.add.text(219, 780, '', {})
        coins_44.text = '530'
        coins_44.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_44)

        // coins_45
        const coins_45 = this.add.text(539, 780, '', {})
        coins_45.text = '700'
        coins_45.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_45)

        // coins_46
        const coins_46 = this.add.text(948, 360, '', {})
        coins_46.text = '530'
        coins_46.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_46)

        // coins_47
        const coins_47 = this.add.text(1264, 361, '', {})
        coins_47.text = '530'
        coins_47.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_47)

        // coins_48
        const coins_48 = this.add.text(947, 780, '', {})
        coins_48.text = '530'
        coins_48.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_48)

        // coins_49
        const coins_49 = this.add.text(1258, 780, '', {})
        coins_49.text = '1000'
        coins_49.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page13.add(coins_49)

        // page12
        const page12 = this.add.container(0, -1)
        page12.visible = false
        container.add(page12)

        // p12
        const p12 = this.add.image(760, 463, 'furniturecatalog', 'p12')
        page12.add(p12)

        // buyButton_38
        const buyButton_38 = this.add.image(512, 382, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_38)

        // buyButton_39
        const buyButton_39 = this.add.image(976, 382, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_39)

        // buyButton_40
        const buyButton_40 = this.add.image(1290, 382, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_40)

        // buyButton_41
        const buyButton_41 = this.add.image(221, 748, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_41)

        // buyButton_42
        const buyButton_42 = this.add.image(535, 748, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_42)

        // buyButton_43
        const buyButton_43 = this.add.image(976, 748, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_43)

        // buyButton_44
        const buyButton_44 = this.add.image(1290, 748, 'furniturecatalog', 'buyButton')
        page12.add(buyButton_44)

        // coins_35
        const coins_35 = this.add.text(505, 366, '', {})
        coins_35.text = '150'
        coins_35.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_35)

        // coins_36
        const coins_36 = this.add.text(219, 733, '', {})
        coins_36.text = '75'
        coins_36.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_36)

        // coins_37
        const coins_37 = this.add.text(532, 732, '', {})
        coins_37.text = '75'
        coins_37.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_37)

        // coins_38
        const coins_38 = this.add.text(974, 368, '', {})
        coins_38.text = '50'
        coins_38.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_38)

        // coins_39
        const coins_39 = this.add.text(975, 735, '', {})
        coins_39.text = '75'
        coins_39.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_39)

        // coins_40
        const coins_40 = this.add.text(1282, 367, '', {})
        coins_40.text = '100'
        coins_40.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_40)

        // coins_41
        const coins_41 = this.add.text(1284, 733, '', {})
        coins_41.text = '100'
        coins_41.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page12.add(coins_41)

        // page11
        const page11 = this.add.container(0, -1)
        page11.visible = false
        container.add(page11)

        // p11
        const p11 = this.add.image(760, 463, 'furniturecatalog', 'p11')
        page11.add(p11)

        // buyButton_30
        const buyButton_30 = this.add.image(222, 383, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_30)

        // buyButton_31
        const buyButton_31 = this.add.image(222, 735, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_31)

        // buyButton_32
        const buyButton_32 = this.add.image(535, 383, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_32)

        // buyButton_33
        const buyButton_33 = this.add.image(535, 735, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_33)

        // buyButton_34
        const buyButton_34 = this.add.image(974, 383, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_34)

        // buyButton_35
        const buyButton_35 = this.add.image(974, 735, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_35)

        // buyButton_36
        const buyButton_36 = this.add.image(1280, 383, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_36)

        // buyButton_37
        const buyButton_37 = this.add.image(1280, 735, 'furniturecatalog', 'buyButton')
        page11.add(buyButton_37)

        // coins_27
        const coins_27 = this.add.text(213, 368, '', {})
        coins_27.text = '200'
        coins_27.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_27)

        // coins_28
        const coins_28 = this.add.text(530, 366, '', {})
        coins_28.text = '100'
        coins_28.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_28)

        // coins_29
        const coins_29 = this.add.text(214, 721, '', {})
        coins_29.text = '150'
        coins_29.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_29)

        // coins_30
        const coins_30 = this.add.text(533, 720, '', {})
        coins_30.text = '50'
        coins_30.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_30)

        // coins_31
        const coins_31 = this.add.text(971, 368, '', {})
        coins_31.text = '75'
        coins_31.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_31)

        // coins_32
        const coins_32 = this.add.text(971, 720, '', {})
        coins_32.text = '75'
        coins_32.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_32)

        // coins_33
        const coins_33 = this.add.text(1275, 720, '', {})
        coins_33.text = '50'
        coins_33.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_33)

        // coins_34
        const coins_34 = this.add.text(1280, 367, '', {})
        coins_34.text = '75'
        coins_34.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page11.add(coins_34)

        // page10
        const page10 = this.add.container(0, -1)
        page10.visible = false
        container.add(page10)

        // p10
        const p10 = this.add.image(760, 463, 'furniturecatalog', 'p10')
        page10.add(p10)

        // buyButton_28
        const buyButton_28 = this.add.image(522, 680, 'furniturecatalog', 'buyButton')
        page10.add(buyButton_28)

        // buyButton_29
        const buyButton_29 = this.add.image(1289, 673, 'furniturecatalog', 'buyButton')
        page10.add(buyButton_29)

        // coins_74
        const coins_74 = this.add.text(508, 666, '', {})
        coins_74.text = '3500'
        coins_74.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page10.add(coins_74)

        // coins_75
        const coins_75 = this.add.text(1274, 659, '', {})
        coins_75.text = '3000'
        coins_75.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page10.add(coins_75)

        // page9
        const page9 = this.add.container(0, -1)
        page9.visible = false
        container.add(page9)

        // p9
        const p9 = this.add.image(760, 463, 'furniturecatalog', 'p9')
        page9.add(p9)

        // buyButton_22
        const buyButton_22 = this.add.image(231, 371, 'furniturecatalog', 'buyButton')
        page9.add(buyButton_22)

        // buyButton_23
        const buyButton_23 = this.add.image(530, 370, 'furniturecatalog', 'buyButton')
        page9.add(buyButton_23)

        // buyButton_24
        const buyButton_24 = this.add.image(233, 767, 'furniturecatalog', 'buyButton')
        page9.add(buyButton_24)

        // buyButton_25
        const buyButton_25 = this.add.image(535, 768, 'furniturecatalog', 'buyButton')
        page9.add(buyButton_25)

        // buyButton_26
        const buyButton_26 = this.add.image(1245, 215, 'furniturecatalog', 'buyButton')
        page9.add(buyButton_26)

        // buyButton_27
        const buyButton_27 = this.add.image(1258, 716, 'furniturecatalog', 'buyButton')
        page9.add(buyButton_27)

        // coins_21
        const coins_21 = this.add.text(220, 356, '', {})
        coins_21.text = '200'
        coins_21.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page9.add(coins_21)

        // coins_22
        const coins_22 = this.add.text(524, 357, '', {})
        coins_22.text = '300'
        coins_22.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page9.add(coins_22)

        // coins_23
        const coins_23 = this.add.text(223, 751, '', {})
        coins_23.text = '200'
        coins_23.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page9.add(coins_23)

        // coins_24
        const coins_24 = this.add.text(529, 753, '', {})
        coins_24.text = '300'
        coins_24.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page9.add(coins_24)

        // coins_25
        const coins_25 = this.add.text(1235, 200, '', {})
        coins_25.text = '900'
        coins_25.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page9.add(coins_25)

        // coins_26
        const coins_26 = this.add.text(1253, 701, '', {})
        coins_26.text = '600'
        coins_26.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page9.add(coins_26)

        // page8
        const page8 = this.add.container(0, -1)
        page8.visible = false
        container.add(page8)

        // p8
        const p8 = this.add.image(760, 463, 'furniturecatalog', 'p8')
        page8.add(p8)

        // buyButton_18
        const buyButton_18 = this.add.image(384, 493, 'furniturecatalog', 'buyButton')
        page8.add(buyButton_18)

        // buyButton_19
        const buyButton_19 = this.add.image(1226, 321, 'furniturecatalog', 'buyButton')
        page8.add(buyButton_19)

        // buyButton_20
        const buyButton_20 = this.add.image(510, 753, 'furniturecatalog', 'buyButton')
        page8.add(buyButton_20)

        // buyButton_21
        const buyButton_21 = this.add.image(1023, 704, 'furniturecatalog', 'buyButton')
        page8.add(buyButton_21)

        // coins_16
        const coins_16 = this.add.text(378, 477, '', {})
        coins_16.text = '300'
        coins_16.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page8.add(coins_16)

        // coins_17
        const coins_17 = this.add.text(104, 30, '', {})
        coins_17.text = 'New Furniture'
        coins_17.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '34px', fontStyle: 'bold italic', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f7e978ff', 'shadow.fill': true})
        page8.add(coins_17)

        // coins_18
        const coins_18 = this.add.text(500, 739, '', {})
        coins_18.text = '150'
        coins_18.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page8.add(coins_18)

        // coins_19
        const coins_19 = this.add.text(1015, 690, '', {})
        coins_19.text = '200'
        coins_19.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page8.add(coins_19)

        // coins_20
        const coins_20 = this.add.text(1220, 306, '', {})
        coins_20.text = '200'
        coins_20.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page8.add(coins_20)

        // page7
        const page7 = this.add.container(0, 0)
        page7.visible = false
        container.add(page7)

        // p7
        const p7 = this.add.image(760, 463, 'furniturecatalog', 'p7')
        page7.add(p7)

        // buyButton_14
        const buyButton_14 = this.add.image(240, 324, 'furniturecatalog', 'buyButton')
        page7.add(buyButton_14)

        // buyButton_15
        const buyButton_15 = this.add.image(984, 326, 'furniturecatalog', 'buyButton')
        page7.add(buyButton_15)

        // buyButton_16
        const buyButton_16 = this.add.image(510, 730, 'furniturecatalog', 'buyButton')
        page7.add(buyButton_16)

        // buyButton_17
        const buyButton_17 = this.add.image(1240, 732, 'furniturecatalog', 'buyButton')
        page7.add(buyButton_17)

        // coins_12
        const coins_12 = this.add.text(232, 309, '', {})
        coins_12.text = '200'
        coins_12.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page7.add(coins_12)

        // coins_13
        const coins_13 = this.add.text(508, 715, '', {})
        coins_13.text = '50'
        coins_13.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page7.add(coins_13)

        // coins_14
        const coins_14 = this.add.text(977, 312, '', {})
        coins_14.text = '150'
        coins_14.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page7.add(coins_14)

        // coins_15
        const coins_15 = this.add.text(1234, 717, '', {})
        coins_15.text = '200'
        coins_15.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page7.add(coins_15)

        // page6
        const page6 = this.add.container(0, 0)
        page6.visible = false
        container.add(page6)

        // p6
        const p6 = this.add.image(760, 463, 'furniturecatalog', 'p6')
        page6.add(p6)

        // buyButton_10
        const buyButton_10 = this.add.image(385, 481, 'furniturecatalog', 'buyButton')
        page6.add(buyButton_10)

        // buyButton_11
        const buyButton_11 = this.add.image(524, 730, 'furniturecatalog', 'buyButton')
        page6.add(buyButton_11)

        // buyButton_12
        const buyButton_12 = this.add.image(1246, 712, 'furniturecatalog', 'buyButton')
        page6.add(buyButton_12)

        // buyButton_13
        const buyButton_13 = this.add.image(995, 288, 'furniturecatalog', 'buyButton')
        page6.add(buyButton_13)

        // coins_8
        const coins_8 = this.add.text(374, 466, '', {})
        coins_8.text = '300'
        coins_8.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page6.add(coins_8)

        // coins_9
        const coins_9 = this.add.text(516, 715, '', {})
        coins_9.text = '100'
        coins_9.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page6.add(coins_9)

        // coins_10
        const coins_10 = this.add.text(1245, 696, '', {})
        coins_10.text = '50'
        coins_10.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page6.add(coins_10)

        // coins_11
        const coins_11 = this.add.text(995, 273, '', {})
        coins_11.text = '50'
        coins_11.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page6.add(coins_11)

        // page5
        const page5 = this.add.container(0, 0)
        page5.visible = false
        container.add(page5)

        // p5
        const p5 = this.add.image(760, 463, 'furniturecatalog', 'p5')
        page5.add(p5)

        // buyButton_3
        const buyButton_3 = this.add.image(246, 449, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_3)

        // buyButton_4
        const buyButton_4 = this.add.image(543, 449, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_4)

        // buyButton_5
        const buyButton_5 = this.add.image(246, 796, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_5)

        // buyButton_6
        const buyButton_6 = this.add.image(538, 796, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_6)

        // buyButton_7
        const buyButton_7 = this.add.image(1103, 449, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_7)

        // buyButton_8
        const buyButton_8 = this.add.image(966, 796, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_8)

        // buyButton_9
        const buyButton_9 = this.add.image(1265, 796, 'furniturecatalog', 'buyButton')
        page5.add(buyButton_9)

        // coins
        const coins = this.add.text(239, 435, '', {})
        coins.text = '125'
        coins.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins)

        // coins_2
        const coins_2 = this.add.text(536, 436, '', {})
        coins_2.text = '100'
        coins_2.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins_2)

        // coins_3
        const coins_3 = this.add.text(242, 781, '', {})
        coins_3.text = '75'
        coins_3.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins_3)

        // coins_4
        const coins_4 = this.add.text(535, 782, '', {})
        coins_4.text = '50'
        coins_4.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins_4)

        // coins_5
        const coins_5 = this.add.text(1094, 434, '', {})
        coins_5.text = '300'
        coins_5.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins_5)

        // coins_6
        const coins_6 = this.add.text(958, 781, '', {})
        coins_6.text = '100'
        coins_6.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins_6)

        // coins_7
        const coins_7 = this.add.text(1259, 781, '', {})
        coins_7.text = '75'
        coins_7.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page5.add(coins_7)

        // page4
        const page4 = this.add.container(0, 0)
        page4.visible = false
        container.add(page4)

        // p4
        const p4 = this.add.image(760, 463, 'furniturecatalog', 'p4')
        page4.add(p4)

        // buyButton_1
        const buyButton_1 = this.add.image(563, 734, 'furniturecatalog', 'buyButton')
        page4.add(buyButton_1)

        // buyButton_2
        const buyButton_2 = this.add.image(1279, 740, 'furniturecatalog', 'buyButton')
        page4.add(buyButton_2)

        // coins_72
        const coins_72 = this.add.text(547, 720, '', {})
        coins_72.text = '4200'
        coins_72.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page4.add(coins_72)

        // coins_73
        const coins_73 = this.add.text(1264, 726, '', {})
        coins_73.text = '5000'
        coins_73.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page4.add(coins_73)

        // page3
        const page3 = this.add.container(760, 463)
        page3.visible = false
        container.add(page3)

        // p3
        const p3 = this.add.image(0, 0, 'furniturecatalog', 'p3')
        page3.add(p3)

        // buyButton
        const buyButton = this.add.image(511, 285, 'furniturecatalog', 'buyButton')
        page3.add(buyButton)

        // coins_1
        const coins_1 = this.add.text(500, 270, '', {})
        coins_1.text = '1500'
        coins_1.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        page3.add(coins_1)

        // page2
        const page2 = this.add.container(0, 0)
        page2.visible = false
        container.add(page2)

        // p2
        const p2 = this.add.image(760, 463, 'furniturecatalog', 'p2')
        page2.add(p2)

        // page1
        const page1 = this.add.container(760, 468)
        page1.visible = false
        container.add(page1)

        // coinTotal
        const coinTotal = this.add.image(168, 459, 'furniturecatalog', 'coinTotal')
        page1.add(coinTotal)

        // p1
        const p1 = this.add.image(0, 0, 'furniturecatalog', 'p1')
        page1.add(p1)

        // nxtPage
        const nxtPage = this.add.image(350, 349, 'furniturecatalog', 'nextPage')
        page1.add(nxtPage)

        // coinsTxt_1
        const coinsTxt_1 = this.add.text(55, 458, '', {})
        coinsTxt_1.text = 'Your Coins: 100000'
        coinsTxt_1.setStyle({align: 'center', color: '#462f04ff', fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold italic'})
        page1.add(coinsTxt_1)

        // buttons
        const buttons = this.add.container(999, 798)
        buttons.visible = false
        container.add(buttons)

        // prvPage
        const prvPage = this.add.image(-921, 14, 'furniturecatalog', 'prevPage')
        buttons.add(prvPage)

        // nxtPage_1
        const nxtPage_1 = this.add.image(442, 14, 'furniturecatalog', 'nextPage')
        buttons.add(nxtPage_1)

        // white_x
        const white_x = this.add.image(1496, 24, 'main', 'white-x')
        white_x.scaleX = 0.7
        white_x.scaleY = 0.7
        container.add(white_x)

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page25]

        // blocker (components)
        new Interactive(blocker)

        // prvPage_1 (components)
        const prvPage_1Button = new Button(prvPage_1)
        prvPage_1Button.callback = () => this.prevPage()

        // buyButton_75 (components)
        const buyButton_75Button = new Button(buyButton_75)
        buyButton_75Button.callback = () => this.buyFurniture(746)

        // buyButton_76 (components)
        const buyButton_76Button = new Button(buyButton_76)
        buyButton_76Button.callback = () => this.buyFurniture(813)

        // buyButton_77 (components)
        const buyButton_77Button = new Button(buyButton_77)
        buyButton_77Button.callback = () => this.buyFurniture(812)

        // buyButton_78 (components)
        const buyButton_78Button = new Button(buyButton_78)
        buyButton_78Button.callback = () => this.buyFurniture(811)

        // buyButton_79 (components)
        const buyButton_79Button = new Button(buyButton_79)
        buyButton_79Button.callback = () => this.buyFurniture(810)

        // buyButton_69 (components)
        const buyButton_69Button = new Button(buyButton_69)
        buyButton_69Button.callback = () => this.buyFurniture(751)

        // buyButton_70 (components)
        const buyButton_70Button = new Button(buyButton_70)
        buyButton_70Button.callback = () => this.buyFurniture(748)

        // buyButton_71 (components)
        const buyButton_71Button = new Button(buyButton_71)
        buyButton_71Button.callback = () => this.buyFurniture(440)

        // buyButton_72 (components)
        const buyButton_72Button = new Button(buyButton_72)
        buyButton_72Button.callback = () => this.buyFurniture(755)

        // buyButton_73 (components)
        const buyButton_73Button = new Button(buyButton_73)
        buyButton_73Button.callback = () => this.buyFurniture(441)

        // buyButton_74 (components)
        const buyButton_74Button = new Button(buyButton_74)
        buyButton_74Button.callback = () => this.buyFurniture(638)

        // buyButton_65 (components)
        const buyButton_65Button = new Button(buyButton_65)
        buyButton_65Button.callback = () => this.buyFurniture(2200)

        // buyButton_66 (components)
        const buyButton_66Button = new Button(buyButton_66)
        buyButton_66Button.callback = () => this.buyFurniture(2198)

        // buyButton_67 (components)
        const buyButton_67Button = new Button(buyButton_67)
        buyButton_67Button.callback = () => this.buyFurniture(2201)

        // buyButton_68 (components)
        const buyButton_68Button = new Button(buyButton_68)
        buyButton_68Button.callback = () => this.buyFurniture(2199)

        // buyButton_61 (components)
        const buyButton_61Button = new Button(buyButton_61)
        buyButton_61Button.callback = () => this.buyFurniture(2189)

        // buyButton_62 (components)
        const buyButton_62Button = new Button(buyButton_62)
        buyButton_62Button.callback = () => this.buyFurniture(2190)

        // buyButton_63 (components)
        const buyButton_63Button = new Button(buyButton_63)
        buyButton_63Button.callback = () => this.buyFurniture(749)

        // buyButton_64 (components)
        const buyButton_64Button = new Button(buyButton_64)
        buyButton_64Button.callback = () => this.buyFurniture(757)

        // buyButton_59 (components)
        const buyButton_59Button = new Button(buyButton_59)
        buyButton_59Button.callback = () => this.buyIgloo(73)

        // buyButton_60 (components)
        const buyButton_60Button = new Button(buyButton_60)
        buyButton_60Button.callback = () => this.buyIgloo(51)

        // buyButton_58 (components)
        const buyButton_58Button = new Button(buyButton_58)
        buyButton_58Button.callback = () => this.buyIgloo(40)

        // buyButton_56 (components)
        const buyButton_56Button = new Button(buyButton_56)
        buyButton_56Button.callback = () => this.buyIgloo(69)

        // buyButton_57 (components)
        const buyButton_57Button = new Button(buyButton_57)
        buyButton_57Button.callback = () => this.buyIgloo(49)

        // buyButton_55 (components)
        const buyButton_55Button = new Button(buyButton_55)
        buyButton_55Button.callback = () => this.buyLocation(3)

        // buyButton_54 (components)
        const buyButton_54Button = new Button(buyButton_54)
        buyButton_54Button.callback = () => this.buyLocation(2)

        // buyButton_53 (components)
        const buyButton_53Button = new Button(buyButton_53)
        buyButton_53Button.callback = () => this.buyLocation(4)

        // buyButton_45 (components)
        const buyButton_45Button = new Button(buyButton_45)
        buyButton_45Button.callback = () => this.buyFlooring(17)

        // buyButton_46 (components)
        const buyButton_46Button = new Button(buyButton_46)
        buyButton_46Button.callback = () => this.buyFlooring(21)

        // buyButton_47 (components)
        const buyButton_47Button = new Button(buyButton_47)
        buyButton_47Button.callback = () => this.buyFlooring(15)

        // buyButton_48 (components)
        const buyButton_48Button = new Button(buyButton_48)
        buyButton_48Button.callback = () => this.buyFlooring(11)

        // buyButton_49 (components)
        const buyButton_49Button = new Button(buyButton_49)
        buyButton_49Button.callback = () => this.buyFlooring(22)

        // buyButton_50 (components)
        const buyButton_50Button = new Button(buyButton_50)
        buyButton_50Button.callback = () => this.buyFlooring(14)

        // buyButton_51 (components)
        const buyButton_51Button = new Button(buyButton_51)
        buyButton_51Button.callback = () => this.buyFlooring(19)

        // buyButton_52 (components)
        const buyButton_52Button = new Button(buyButton_52)
        buyButton_52Button.callback = () => this.buyFlooring(7)

        // buyButton_38 (components)
        const buyButton_38Button = new Button(buyButton_38)
        buyButton_38Button.callback = () => this.buyFurniture(2256)

        // buyButton_39 (components)
        const buyButton_39Button = new Button(buyButton_39)
        buyButton_39Button.callback = () => this.buyFurniture(2252)

        // buyButton_40 (components)
        const buyButton_40Button = new Button(buyButton_40)
        buyButton_40Button.callback = () => this.buyFurniture(2253)

        // buyButton_41 (components)
        const buyButton_41Button = new Button(buyButton_41)
        buyButton_41Button.callback = () => this.buyFurniture(2254)

        // buyButton_42 (components)
        const buyButton_42Button = new Button(buyButton_42)
        buyButton_42Button.callback = () => this.buyFurniture(2259)

        // buyButton_43 (components)
        const buyButton_43Button = new Button(buyButton_43)
        buyButton_43Button.callback = () => this.buyFurniture(2251)

        // buyButton_44 (components)
        const buyButton_44Button = new Button(buyButton_44)
        buyButton_44Button.callback = () => this.buyFurniture(2250)

        // buyButton_30 (components)
        const buyButton_30Button = new Button(buyButton_30)
        buyButton_30Button.callback = () => this.buyFurniture(2255)

        // buyButton_31 (components)
        const buyButton_31Button = new Button(buyButton_31)
        buyButton_31Button.callback = () => this.buyFurniture(2258)

        // buyButton_32 (components)
        const buyButton_32Button = new Button(buyButton_32)
        buyButton_32Button.callback = () => this.buyFurniture(2257)

        // buyButton_33 (components)
        const buyButton_33Button = new Button(buyButton_33)
        buyButton_33Button.callback = () => this.buyFurniture(2260)

        // buyButton_34 (components)
        const buyButton_34Button = new Button(buyButton_34)
        buyButton_34Button.callback = () => this.buyFurniture(2262)

        // buyButton_35 (components)
        const buyButton_35Button = new Button(buyButton_35)
        buyButton_35Button.callback = () => this.buyFurniture(2261)

        // buyButton_36 (components)
        const buyButton_36Button = new Button(buyButton_36)
        buyButton_36Button.callback = () => this.buyFurniture(2248)

        // buyButton_37 (components)
        const buyButton_37Button = new Button(buyButton_37)
        buyButton_37Button.callback = () => this.buyFurniture(2249)

        // buyButton_28 (components)
        const buyButton_28Button = new Button(buyButton_28)
        buyButton_28Button.callback = () => this.buyIgloo(30)

        // buyButton_29 (components)
        const buyButton_29Button = new Button(buyButton_29)
        buyButton_29Button.callback = () => this.buyIgloo(9)

        // buyButton_22 (components)
        const buyButton_22Button = new Button(buyButton_22)
        buyButton_22Button.callback = () => this.buyFurniture(915)

        // buyButton_23 (components)
        const buyButton_23Button = new Button(buyButton_23)
        buyButton_23Button.callback = () => this.buyFurniture(916)

        // buyButton_24 (components)
        const buyButton_24Button = new Button(buyButton_24)
        buyButton_24Button.callback = () => this.buyFurniture(945)

        // buyButton_25 (components)
        const buyButton_25Button = new Button(buyButton_25)
        buyButton_25Button.callback = () => this.buyFurniture(944)

        // buyButton_26 (components)
        const buyButton_26Button = new Button(buyButton_26)
        buyButton_26Button.callback = () => this.buyFurniture(922)

        // buyButton_27 (components)
        const buyButton_27Button = new Button(buyButton_27)
        buyButton_27Button.callback = () => this.buyFurniture(917)

        // buyButton_18 (components)
        const buyButton_18Button = new Button(buyButton_18)
        buyButton_18Button.callback = () => this.buyFurniture(2141)

        // buyButton_19 (components)
        const buyButton_19Button = new Button(buyButton_19)
        buyButton_19Button.callback = () => this.buyFurniture(2137)

        // buyButton_20 (components)
        const buyButton_20Button = new Button(buyButton_20)
        buyButton_20Button.callback = () => this.buyFurniture(2139)

        // buyButton_21 (components)
        const buyButton_21Button = new Button(buyButton_21)
        buyButton_21Button.callback = () => this.buyFurniture(920)

        // buyButton_14 (components)
        const buyButton_14Button = new Button(buyButton_14)
        buyButton_14Button.callback = () => this.buyFurniture(2052)

        // buyButton_15 (components)
        const buyButton_15Button = new Button(buyButton_15)
        buyButton_15Button.callback = () => this.buyFurniture(2064)

        // buyButton_16 (components)
        const buyButton_16Button = new Button(buyButton_16)
        buyButton_16Button.callback = () => this.buyFurniture(2062)

        // buyButton_17 (components)
        const buyButton_17Button = new Button(buyButton_17)
        buyButton_17Button.callback = () => this.buyFurniture(2063)

        // buyButton_10 (components)
        const buyButton_10Button = new Button(buyButton_10)
        buyButton_10Button.callback = () => this.buyFurniture(2046)

        // buyButton_11 (components)
        const buyButton_11Button = new Button(buyButton_11)
        buyButton_11Button.callback = () => this.buyFurniture(2058)

        // buyButton_12 (components)
        const buyButton_12Button = new Button(buyButton_12)
        buyButton_12Button.callback = () => this.buyFurniture(2059)

        // buyButton_13 (components)
        const buyButton_13Button = new Button(buyButton_13)
        buyButton_13Button.callback = () => this.buyFurniture(2054)

        // buyButton_3 (components)
        const buyButton_3Button = new Button(buyButton_3)
        buyButton_3Button.callback = () => this.buyFurniture(2361)

        // buyButton_4 (components)
        const buyButton_4Button = new Button(buyButton_4)
        buyButton_4Button.callback = () => this.buyFurniture(2360)

        // buyButton_5 (components)
        const buyButton_5Button = new Button(buyButton_5)
        buyButton_5Button.callback = () => this.buyFurniture(2359)

        // buyButton_6 (components)
        const buyButton_6Button = new Button(buyButton_6)
        buyButton_6Button.callback = () => this.buyFurniture(2208)

        // buyButton_7 (components)
        const buyButton_7Button = new Button(buyButton_7)
        buyButton_7Button.callback = () => this.buyFurniture(2210)

        // buyButton_8 (components)
        const buyButton_8Button = new Button(buyButton_8)
        buyButton_8Button.callback = () => this.buyFurniture(2209)

        // buyButton_9 (components)
        const buyButton_9Button = new Button(buyButton_9)
        buyButton_9Button.callback = () => this.buyFurniture(2211)

        // buyButton_1 (components)
        const buyButton_1Button = new Button(buyButton_1)
        buyButton_1Button.callback = () => this.buyIgloo(21)

        // buyButton_2 (components)
        const buyButton_2Button = new Button(buyButton_2)
        buyButton_2Button.callback = () => this.buyIgloo(8)

        // buyButton (components)
        const buyButtonButton = new Button(buyButton)
        buyButtonButton.callback = () => this.buyIgloo(98)

        // nxtPage (components)
        const nxtPageButton = new Button(nxtPage)
        nxtPageButton.callback = () => this.nextPage()

        // prvPage (components)
        const prvPageButton = new Button(prvPage)
        prvPageButton.callback = () => this.prevPage()

        // nxtPage_1 (components)
        const nxtPage_1Button = new Button(nxtPage_1)
        nxtPage_1Button.callback = () => this.nextPage()

        // white_x (components)
        const white_xSimpleButton = new SimpleButton(white_x)
        white_xSimpleButton.callback = () => this.close()

        this.blocker = blocker
        this.coinsTxt = coinsTxt
        this.coinsContainerShowThis = coinsContainerShowThis
        this.coins_67 = coins_67
        this.coins_68 = coins_68
        this.coins_69 = coins_69
        this.coins_70 = coins_70
        this.coins_71 = coins_71
        this.coins_61 = coins_61
        this.coins_62 = coins_62
        this.coins_63 = coins_63
        this.coins_64 = coins_64
        this.coins_65 = coins_65
        this.coins_66 = coins_66
        this.coins_57 = coins_57
        this.coins_58 = coins_58
        this.coins_59 = coins_59
        this.coins_60 = coins_60
        this.coins_53 = coins_53
        this.coins_54 = coins_54
        this.coins_55 = coins_55
        this.coins_56 = coins_56
        this.coins_78 = coins_78
        this.coins_76 = coins_76
        this.coins_77 = coins_77
        this.coins_52 = coins_52
        this.coins_51 = coins_51
        this.coins_50 = coins_50
        this.coins_42 = coins_42
        this.coins_43 = coins_43
        this.coins_44 = coins_44
        this.coins_45 = coins_45
        this.coins_46 = coins_46
        this.coins_47 = coins_47
        this.coins_48 = coins_48
        this.coins_49 = coins_49
        this.coins_35 = coins_35
        this.coins_36 = coins_36
        this.coins_37 = coins_37
        this.coins_38 = coins_38
        this.coins_39 = coins_39
        this.coins_40 = coins_40
        this.coins_41 = coins_41
        this.coins_27 = coins_27
        this.coins_28 = coins_28
        this.coins_29 = coins_29
        this.coins_30 = coins_30
        this.coins_31 = coins_31
        this.coins_32 = coins_32
        this.coins_33 = coins_33
        this.coins_34 = coins_34
        this.coins_74 = coins_74
        this.coins_75 = coins_75
        this.coins_21 = coins_21
        this.coins_22 = coins_22
        this.coins_23 = coins_23
        this.coins_24 = coins_24
        this.coins_25 = coins_25
        this.coins_26 = coins_26
        this.coins_16 = coins_16
        this.coins_17 = coins_17
        this.coins_18 = coins_18
        this.coins_19 = coins_19
        this.coins_20 = coins_20
        this.coins_12 = coins_12
        this.coins_13 = coins_13
        this.coins_14 = coins_14
        this.coins_15 = coins_15
        this.coins_8 = coins_8
        this.coins_9 = coins_9
        this.coins_10 = coins_10
        this.coins_11 = coins_11
        this.coins = coins
        this.coins_2 = coins_2
        this.coins_3 = coins_3
        this.coins_4 = coins_4
        this.coins_5 = coins_5
        this.coins_6 = coins_6
        this.coins_7 = coins_7
        this.coins_72 = coins_72
        this.coins_73 = coins_73
        this.coins_1 = coins_1
        this.coinsTxt_1 = coinsTxt_1
        this.buttons = buttons
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {Phaser.GameObjects.Text} */
    coinsTxt
    /** @type {Phaser.GameObjects.Container} */
    coinsContainerShowThis
    /** @type {Phaser.GameObjects.Text} */
    coins_67
    /** @type {Phaser.GameObjects.Text} */
    coins_68
    /** @type {Phaser.GameObjects.Text} */
    coins_69
    /** @type {Phaser.GameObjects.Text} */
    coins_70
    /** @type {Phaser.GameObjects.Text} */
    coins_71
    /** @type {Phaser.GameObjects.Text} */
    coins_61
    /** @type {Phaser.GameObjects.Text} */
    coins_62
    /** @type {Phaser.GameObjects.Text} */
    coins_63
    /** @type {Phaser.GameObjects.Text} */
    coins_64
    /** @type {Phaser.GameObjects.Text} */
    coins_65
    /** @type {Phaser.GameObjects.Text} */
    coins_66
    /** @type {Phaser.GameObjects.Text} */
    coins_57
    /** @type {Phaser.GameObjects.Text} */
    coins_58
    /** @type {Phaser.GameObjects.Text} */
    coins_59
    /** @type {Phaser.GameObjects.Text} */
    coins_60
    /** @type {Phaser.GameObjects.Text} */
    coins_53
    /** @type {Phaser.GameObjects.Text} */
    coins_54
    /** @type {Phaser.GameObjects.Text} */
    coins_55
    /** @type {Phaser.GameObjects.Text} */
    coins_56
    /** @type {Phaser.GameObjects.Text} */
    coins_78
    /** @type {Phaser.GameObjects.Text} */
    coins_76
    /** @type {Phaser.GameObjects.Text} */
    coins_77
    /** @type {Phaser.GameObjects.Text} */
    coins_52
    /** @type {Phaser.GameObjects.Text} */
    coins_51
    /** @type {Phaser.GameObjects.Text} */
    coins_50
    /** @type {Phaser.GameObjects.Text} */
    coins_42
    /** @type {Phaser.GameObjects.Text} */
    coins_43
    /** @type {Phaser.GameObjects.Text} */
    coins_44
    /** @type {Phaser.GameObjects.Text} */
    coins_45
    /** @type {Phaser.GameObjects.Text} */
    coins_46
    /** @type {Phaser.GameObjects.Text} */
    coins_47
    /** @type {Phaser.GameObjects.Text} */
    coins_48
    /** @type {Phaser.GameObjects.Text} */
    coins_49
    /** @type {Phaser.GameObjects.Text} */
    coins_35
    /** @type {Phaser.GameObjects.Text} */
    coins_36
    /** @type {Phaser.GameObjects.Text} */
    coins_37
    /** @type {Phaser.GameObjects.Text} */
    coins_38
    /** @type {Phaser.GameObjects.Text} */
    coins_39
    /** @type {Phaser.GameObjects.Text} */
    coins_40
    /** @type {Phaser.GameObjects.Text} */
    coins_41
    /** @type {Phaser.GameObjects.Text} */
    coins_27
    /** @type {Phaser.GameObjects.Text} */
    coins_28
    /** @type {Phaser.GameObjects.Text} */
    coins_29
    /** @type {Phaser.GameObjects.Text} */
    coins_30
    /** @type {Phaser.GameObjects.Text} */
    coins_31
    /** @type {Phaser.GameObjects.Text} */
    coins_32
    /** @type {Phaser.GameObjects.Text} */
    coins_33
    /** @type {Phaser.GameObjects.Text} */
    coins_34
    /** @type {Phaser.GameObjects.Text} */
    coins_74
    /** @type {Phaser.GameObjects.Text} */
    coins_75
    /** @type {Phaser.GameObjects.Text} */
    coins_21
    /** @type {Phaser.GameObjects.Text} */
    coins_22
    /** @type {Phaser.GameObjects.Text} */
    coins_23
    /** @type {Phaser.GameObjects.Text} */
    coins_24
    /** @type {Phaser.GameObjects.Text} */
    coins_25
    /** @type {Phaser.GameObjects.Text} */
    coins_26
    /** @type {Phaser.GameObjects.Text} */
    coins_16
    /** @type {Phaser.GameObjects.Text} */
    coins_17
    /** @type {Phaser.GameObjects.Text} */
    coins_18
    /** @type {Phaser.GameObjects.Text} */
    coins_19
    /** @type {Phaser.GameObjects.Text} */
    coins_20
    /** @type {Phaser.GameObjects.Text} */
    coins_12
    /** @type {Phaser.GameObjects.Text} */
    coins_13
    /** @type {Phaser.GameObjects.Text} */
    coins_14
    /** @type {Phaser.GameObjects.Text} */
    coins_15
    /** @type {Phaser.GameObjects.Text} */
    coins_8
    /** @type {Phaser.GameObjects.Text} */
    coins_9
    /** @type {Phaser.GameObjects.Text} */
    coins_10
    /** @type {Phaser.GameObjects.Text} */
    coins_11
    /** @type {Phaser.GameObjects.Text} */
    coins
    /** @type {Phaser.GameObjects.Text} */
    coins_2
    /** @type {Phaser.GameObjects.Text} */
    coins_3
    /** @type {Phaser.GameObjects.Text} */
    coins_4
    /** @type {Phaser.GameObjects.Text} */
    coins_5
    /** @type {Phaser.GameObjects.Text} */
    coins_6
    /** @type {Phaser.GameObjects.Text} */
    coins_7
    /** @type {Phaser.GameObjects.Text} */
    coins_72
    /** @type {Phaser.GameObjects.Text} */
    coins_73
    /** @type {Phaser.GameObjects.Text} */
    coins_1
    /** @type {Phaser.GameObjects.Text} */
    coinsTxt_1
    /** @type {Phaser.GameObjects.Container} */
    buttons
    /** @type {Phaser.GameObjects.Container[]} */
    pages

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.setCoins(this.shell.client.coins)
    }

    setCoins(coins) {
        this.coinsTxt.text = `YOUR COINS: ${coins}`
        this.coinsTxt_1.text = `YOUR COINS: ${coins}`
    }

    buyIgloo(id) {
        this.interface.prompt.showIgloo(id)
    }

    buyLocation(id) {
        this.interface.prompt.showLocation(id)
    }

    buyFlooring(id) {
        this.interface.prompt.showFlooring(id)
    }

    buyFurniture(id) {
        this.interface.prompt.showFurniture(id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
