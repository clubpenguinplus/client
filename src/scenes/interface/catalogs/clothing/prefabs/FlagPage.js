import Page from './Page'
import {Button, SimpleButton, Name} from '@components/components'

/* START OF COMPILED CODE */

export default class FlagPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // page20_bg
        const page20_bg = scene.add.image(760, 453, 'constant', 'flagPage')
        this.add(page20_bg)

        // page20_header
        const page20_header = scene.add.text(184, 82, '', {})
        page20_header.setOrigin(0.5, 0.5)
        page20_header.text = 'Player card flags\nfor everyone'
        page20_header.setStyle({fontFamily: 'Burbank Small', fontSize: '23px', fontStyle: 'bold italic'})
        this.add(page20_header)

        // flag_name_7186
        const flag_name_7186 = scene.add.text(325, 163, '', {})
        flag_name_7186.setOrigin(0.5, 0.5)
        flag_name_7186.text = 'Latvia'
        flag_name_7186.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7186.setWordWrapWidth(125)
        this.add(flag_name_7186)

        // flag_name_7187
        const flag_name_7187 = scene.add.text(430, 164, '', {})
        flag_name_7187.setOrigin(0.5, 0.5)
        flag_name_7187.text = 'Slovenia'
        flag_name_7187.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7187.setWordWrapWidth(125)
        this.add(flag_name_7187)

        // flag_name_7188
        const flag_name_7188 = scene.add.text(545, 165, '', {})
        flag_name_7188.setOrigin(0.5, 0.5)
        flag_name_7188.text = 'Gibraltar'
        flag_name_7188.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7188.setWordWrapWidth(125)
        this.add(flag_name_7188)

        // flag_name_7189
        const flag_name_7189 = scene.add.text(659, 164, '', {})
        flag_name_7189.setOrigin(0.5, 0.5)
        flag_name_7189.text = 'Malta'
        flag_name_7189.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7189.setWordWrapWidth(125)
        this.add(flag_name_7189)

        // flag_name_7185
        const flag_name_7185 = scene.add.text(203, 284, '', {})
        flag_name_7185.setOrigin(0.5, 0.5)
        flag_name_7185.text = 'Pakistan'
        flag_name_7185.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7185.setWordWrapWidth(125)
        this.add(flag_name_7185)

        // flag_name_7184
        const flag_name_7184 = scene.add.text(318, 292, '', {})
        flag_name_7184.setOrigin(0.5, 0.5)
        flag_name_7184.text = 'Czech Republic'
        flag_name_7184.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7184.setWordWrapWidth(125)
        this.add(flag_name_7184)

        // flag_name_7183
        const flag_name_7183 = scene.add.text(432, 284, '', {})
        flag_name_7183.setOrigin(0.5, 0.5)
        flag_name_7183.text = 'Croatia'
        flag_name_7183.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7183.setWordWrapWidth(125)
        this.add(flag_name_7183)

        // flag_name_7182
        const flag_name_7182 = scene.add.text(538, 284, '', {})
        flag_name_7182.setOrigin(0.5, 0.5)
        flag_name_7182.text = 'Greece'
        flag_name_7182.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7182.setWordWrapWidth(125)
        this.add(flag_name_7182)

        // flag_name_7148
        const flag_name_7148 = scene.add.text(652, 284, '', {})
        flag_name_7148.setOrigin(0.5, 0.5)
        flag_name_7148.text = 'Romania'
        flag_name_7148.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7148.setWordWrapWidth(125)
        this.add(flag_name_7148)

        // flag_name_504
        const flag_name_504 = scene.add.text(652, 406, '', {})
        flag_name_504.setOrigin(0.5, 0.5)
        flag_name_504.text = 'Belgium'
        flag_name_504.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_504.setWordWrapWidth(125)
        this.add(flag_name_504)

        // flag_name_7096
        const flag_name_7096 = scene.add.text(538, 406, '', {})
        flag_name_7096.setOrigin(0.5, 0.5)
        flag_name_7096.text = 'Austria'
        flag_name_7096.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7096.setWordWrapWidth(125)
        this.add(flag_name_7096)

        // flag_name_502
        const flag_name_502 = scene.add.text(430, 406, '', {})
        flag_name_502.setOrigin(0.5, 0.5)
        flag_name_502.text = 'Australia'
        flag_name_502.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_502.setWordWrapWidth(125)
        this.add(flag_name_502)

        // flag_name_533
        const flag_name_533 = scene.add.text(318, 406, '', {})
        flag_name_533.setOrigin(0.5, 0.5)
        flag_name_533.text = 'Argentina'
        flag_name_533.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_533.setWordWrapWidth(125)
        this.add(flag_name_533)

        // flag_name_514
        const flag_name_514 = scene.add.text(203, 406, '', {})
        flag_name_514.setOrigin(0.5, 0.5)
        flag_name_514.text = 'Netherlands'
        flag_name_514.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_514.setWordWrapWidth(125)
        this.add(flag_name_514)

        // flag_name_535
        const flag_name_535 = scene.add.text(653, 532, '', {})
        flag_name_535.setOrigin(0.5, 0.5)
        flag_name_535.text = 'Chile'
        flag_name_535.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_535.setWordWrapWidth(125)
        this.add(flag_name_535)

        // flag_name_500
        const flag_name_500 = scene.add.text(539, 532, '', {})
        flag_name_500.setOrigin(0.5, 0.5)
        flag_name_500.text = 'Canada'
        flag_name_500.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_500.setWordWrapWidth(125)
        this.add(flag_name_500)

        // flag_name_505
        const flag_name_505 = scene.add.text(429, 532, '', {})
        flag_name_505.setOrigin(0.5, 0.5)
        flag_name_505.text = 'Brazil'
        flag_name_505.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_505.setWordWrapWidth(125)
        this.add(flag_name_505)

        // flag_name_529
        const flag_name_529 = scene.add.text(314, 532, '', {})
        flag_name_529.setOrigin(0.5, 0.5)
        flag_name_529.text = 'Belize'
        flag_name_529.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_529.setWordWrapWidth(125)
        this.add(flag_name_529)

        // flag_name_538
        const flag_name_538 = scene.add.text(204, 532, '', {})
        flag_name_538.setOrigin(0.5, 0.5)
        flag_name_538.text = 'Peru'
        flag_name_538.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_538.setWordWrapWidth(125)
        this.add(flag_name_538)

        // flag_name_507
        const flag_name_507 = scene.add.text(651, 659, '', {})
        flag_name_507.setOrigin(0.5, 0.5)
        flag_name_507.text = 'Denmark'
        flag_name_507.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_507.setWordWrapWidth(125)
        this.add(flag_name_507)

        // flag_name_540
        const flag_name_540 = scene.add.text(537, 659, '', {})
        flag_name_540.setOrigin(0.5, 0.5)
        flag_name_540.text = 'Costa Rica'
        flag_name_540.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_540.setWordWrapWidth(125)
        this.add(flag_name_540)

        // flag_name_536
        const flag_name_536 = scene.add.text(431, 659, '', {})
        flag_name_536.setOrigin(0.5, 0.5)
        flag_name_536.text = 'Columbia'
        flag_name_536.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_536.setWordWrapWidth(125)
        this.add(flag_name_536)

        // flag_name_506
        const flag_name_506 = scene.add.text(317, 659, '', {})
        flag_name_506.setOrigin(0.5, 0.5)
        flag_name_506.text = 'China'
        flag_name_506.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_506.setWordWrapWidth(125)
        this.add(flag_name_506)

        // flag_name_525
        const flag_name_525 = scene.add.text(202, 659, '', {})
        flag_name_525.setOrigin(0.5, 0.5)
        flag_name_525.text = 'Portugal'
        flag_name_525.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_525.setWordWrapWidth(125)
        this.add(flag_name_525)

        // flag_name_508
        const flag_name_508 = scene.add.text(651, 790, '', {})
        flag_name_508.setOrigin(0.5, 0.5)
        flag_name_508.text = 'Finland'
        flag_name_508.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_508.setWordWrapWidth(125)
        this.add(flag_name_508)

        // flag_name_530
        const flag_name_530 = scene.add.text(537, 790, '', {})
        flag_name_530.setOrigin(0.5, 0.5)
        flag_name_530.text = 'Egypt'
        flag_name_530.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_530.setWordWrapWidth(125)
        this.add(flag_name_530)

        // flag_name_548
        const flag_name_548 = scene.add.text(431, 790, '', {})
        flag_name_548.setOrigin(0.5, 0.5)
        flag_name_548.text = 'Ecuador'
        flag_name_548.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_548.setWordWrapWidth(125)
        this.add(flag_name_548)

        // flag_name_546
        const flag_name_546 = scene.add.text(317, 792, '', {})
        flag_name_546.setOrigin(0.5, 0.5)
        flag_name_546.text = 'Dominican Republic'
        flag_name_546.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_546.setWordWrapWidth(125)
        this.add(flag_name_546)

        // flag_name_542
        const flag_name_542 = scene.add.text(205, 792, '', {})
        flag_name_542.setOrigin(0.5, 0.5)
        flag_name_542.text = 'Singapore'
        flag_name_542.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_542.setWordWrapWidth(125)
        this.add(flag_name_542)

        // flag_name_537
        const flag_name_537 = scene.add.text(874, 790, '', {})
        flag_name_537.setOrigin(0.5, 0.5)
        flag_name_537.text = 'Puerto Rico'
        flag_name_537.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_537.setWordWrapWidth(125)
        this.add(flag_name_537)

        // flag_name_517
        const flag_name_517 = scene.add.text(989, 790, '', {})
        flag_name_517.setOrigin(0.5, 0.5)
        flag_name_517.text = 'Russia'
        flag_name_517.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_517.setWordWrapWidth(125)
        this.add(flag_name_517)

        // flag_name_526
        const flag_name_526 = scene.add.text(1100, 790, '', {})
        flag_name_526.setOrigin(0.5, 0.5)
        flag_name_526.text = 'South Africa'
        flag_name_526.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_526.setWordWrapWidth(125)
        this.add(flag_name_526)

        // flag_name_518
        const flag_name_518 = scene.add.text(1208, 791, '', {})
        flag_name_518.setOrigin(0.5, 0.5)
        flag_name_518.text = 'Spain'
        flag_name_518.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_518.setWordWrapWidth(125)
        this.add(flag_name_518)

        // flag_name_539
        const flag_name_539 = scene.add.text(1315, 790, '', {})
        flag_name_539.setOrigin(0.5, 0.5)
        flag_name_539.text = 'Venezuela'
        flag_name_539.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_539.setWordWrapWidth(125)
        this.add(flag_name_539)

        // flag_name_513
        const flag_name_513 = scene.add.text(879, 659, '', {})
        flag_name_513.setOrigin(0.5, 0.5)
        flag_name_513.text = 'South Korea'
        flag_name_513.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_513.setWordWrapWidth(125)
        this.add(flag_name_513)

        // flag_name_7095
        const flag_name_7095 = scene.add.text(993, 659, '', {})
        flag_name_7095.setOrigin(0.5, 0.5)
        flag_name_7095.text = 'Liechtenstein'
        flag_name_7095.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_7095.setWordWrapWidth(125)
        this.add(flag_name_7095)

        // flag_name_543
        const flag_name_543 = scene.add.text(1103, 659, '', {})
        flag_name_543.setOrigin(0.5, 0.5)
        flag_name_543.text = 'Malaysia'
        flag_name_543.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_543.setWordWrapWidth(125)
        this.add(flag_name_543)

        // flag_name_522
        const flag_name_522 = scene.add.text(1207, 659, '', {})
        flag_name_522.setOrigin(0.5, 0.5)
        flag_name_522.text = 'Mexico'
        flag_name_522.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_522.setWordWrapWidth(125)
        this.add(flag_name_522)

        // flag_name_547
        const flag_name_547 = scene.add.text(1316, 659, '', {})
        flag_name_547.setOrigin(0.5, 0.5)
        flag_name_547.text = 'Uruguay'
        flag_name_547.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_547.setWordWrapWidth(125)
        this.add(flag_name_547)

        // flag_name_511
        const flag_name_511 = scene.add.text(884, 536, '', {})
        flag_name_511.setOrigin(0.5, 0.5)
        flag_name_511.text = 'Israel'
        flag_name_511.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_511.setWordWrapWidth(125)
        this.add(flag_name_511)

        // flag_name_528
        const flag_name_528 = scene.add.text(991, 533, '', {})
        flag_name_528.setOrigin(0.5, 0.5)
        flag_name_528.text = 'Italy'
        flag_name_528.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_528.setWordWrapWidth(125)
        this.add(flag_name_528)

        // flag_name_534
        const flag_name_534 = scene.add.text(1102, 533, '', {})
        flag_name_534.setOrigin(0.5, 0.5)
        flag_name_534.text = 'Jamaica'
        flag_name_534.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_534.setWordWrapWidth(125)
        this.add(flag_name_534)

        // flag_name_512
        const flag_name_512 = scene.add.text(1207, 533, '', {})
        flag_name_512.setOrigin(0.5, 0.5)
        flag_name_512.text = 'Japan'
        flag_name_512.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_512.setWordWrapWidth(125)
        this.add(flag_name_512)

        // flag_name_520
        const flag_name_520 = scene.add.text(1319, 533, '', {})
        flag_name_520.setOrigin(0.5, 0.5)
        flag_name_520.text = 'Switzerland'
        flag_name_520.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_520.setWordWrapWidth(125)
        this.add(flag_name_520)

        // flag_name_545
        const flag_name_545 = scene.add.text(885, 407, '', {})
        flag_name_545.setOrigin(0.5, 0.5)
        flag_name_545.text = 'Haiti'
        flag_name_545.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_545.setWordWrapWidth(125)
        this.add(flag_name_545)

        // flag_name_531
        const flag_name_531 = scene.add.text(990, 407, '', {})
        flag_name_531.setOrigin(0.5, 0.5)
        flag_name_531.text = 'Hungary'
        flag_name_531.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_531.setWordWrapWidth(125)
        this.add(flag_name_531)

        // flag_name_527
        const flag_name_527 = scene.add.text(1102, 407, '', {})
        flag_name_527.setOrigin(0.5, 0.5)
        flag_name_527.text = 'India'
        flag_name_527.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_527.setWordWrapWidth(125)
        this.add(flag_name_527)

        // flag_name_524
        const flag_name_524 = scene.add.text(1204, 407, '', {})
        flag_name_524.setOrigin(0.5, 0.5)
        flag_name_524.text = 'Ireland'
        flag_name_524.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_524.setWordWrapWidth(125)
        this.add(flag_name_524)

        // flag_name_501
        const flag_name_501 = scene.add.text(1317, 407, '', {})
        flag_name_501.setOrigin(0.5, 0.5)
        flag_name_501.text = 'United States'
        flag_name_501.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_501.setWordWrapWidth(125)
        this.add(flag_name_501)

        // flag_name_519
        const flag_name_519 = scene.add.text(1317, 285, '', {})
        flag_name_519.setOrigin(0.5, 0.5)
        flag_name_519.text = 'Sweden'
        flag_name_519.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_519.setWordWrapWidth(125)
        this.add(flag_name_519)

        // flag_name_541
        const flag_name_541 = scene.add.text(1213, 285, '', {})
        flag_name_541.setOrigin(0.5, 0.5)
        flag_name_541.text = 'Guatemala'
        flag_name_541.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_541.setWordWrapWidth(125)
        this.add(flag_name_541)

        // flag_name_503
        const flag_name_503 = scene.add.text(1098, 285, '', {})
        flag_name_503.setOrigin(0.5, 0.5)
        flag_name_503.text = 'United Kingdom'
        flag_name_503.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_503.setWordWrapWidth(125)
        this.add(flag_name_503)

        // flag_name_510
        const flag_name_510 = scene.add.text(988, 285, '', {})
        flag_name_510.setOrigin(0.5, 0.5)
        flag_name_510.text = 'Germany'
        flag_name_510.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_510.setWordWrapWidth(125)
        this.add(flag_name_510)

        // flag_name_509
        const flag_name_509 = scene.add.text(884, 285, '', {})
        flag_name_509.setOrigin(0.5, 0.5)
        flag_name_509.text = 'France'
        flag_name_509.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_509.setWordWrapWidth(125)
        this.add(flag_name_509)

        // flag_name_521
        const flag_name_521 = scene.add.text(1315, 161, '', {})
        flag_name_521.setOrigin(0.5, 0.5)
        flag_name_521.text = 'Turkey'
        flag_name_521.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_521.setWordWrapWidth(125)
        this.add(flag_name_521)

        // flag_name_516
        const flag_name_516 = scene.add.text(1207, 161, '', {})
        flag_name_516.setOrigin(0.5, 0.5)
        flag_name_516.text = 'Poland'
        flag_name_516.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_516.setWordWrapWidth(125)
        this.add(flag_name_516)

        // flag_name_544
        const flag_name_544 = scene.add.text(1097, 161, '', {})
        flag_name_544.setOrigin(0.5, 0.5)
        flag_name_544.text = 'Philippines'
        flag_name_544.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_544.setWordWrapWidth(125)
        this.add(flag_name_544)

        // flag_name_515
        const flag_name_515 = scene.add.text(992, 158, '', {})
        flag_name_515.setOrigin(0.5, 0.5)
        flag_name_515.text = 'Norway'
        flag_name_515.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_515.setWordWrapWidth(125)
        this.add(flag_name_515)

        // flag_name_523
        const flag_name_523 = scene.add.text(883, 157, '', {})
        flag_name_523.setOrigin(0.5, 0.5)
        flag_name_523.text = 'New Zealand'
        flag_name_523.setStyle({align: 'center', fontFamily: 'Burbank Small', fontSize: '18px'})
        flag_name_523.setWordWrapWidth(125)
        this.add(flag_name_523)

        // flag_button_7186
        const flag_button_7186 = scene.add.ellipse(325, 113, 75, 75)
        flag_button_7186.fillColor = 50917
        flag_button_7186.fillAlpha = 0.5
        this.add(flag_button_7186)

        // flag_button_7187
        const flag_button_7187 = scene.add.ellipse(430, 113, 75, 75)
        flag_button_7187.fillColor = 50917
        flag_button_7187.fillAlpha = 0.5
        this.add(flag_button_7187)

        // flag_button_7188
        const flag_button_7188 = scene.add.ellipse(544, 114, 75, 75)
        flag_button_7188.fillColor = 50917
        flag_button_7188.fillAlpha = 0.5
        this.add(flag_button_7188)

        // flag_button_7189
        const flag_button_7189 = scene.add.ellipse(656, 113, 75, 75)
        flag_button_7189.fillColor = 50917
        flag_button_7189.fillAlpha = 0.5
        this.add(flag_button_7189)

        // flag_button_7148
        const flag_button_7148 = scene.add.ellipse(653, 235, 75, 75)
        flag_button_7148.fillColor = 50917
        flag_button_7148.fillAlpha = 0.5
        this.add(flag_button_7148)

        // flag_button_7182
        const flag_button_7182 = scene.add.ellipse(538, 235, 75, 75)
        flag_button_7182.fillColor = 50917
        flag_button_7182.fillAlpha = 0.5
        this.add(flag_button_7182)

        // flag_button_7183
        const flag_button_7183 = scene.add.ellipse(430, 235, 75, 75)
        flag_button_7183.fillColor = 50917
        flag_button_7183.fillAlpha = 0.5
        this.add(flag_button_7183)

        // flag_button_7184
        const flag_button_7184 = scene.add.ellipse(318, 235, 75, 75)
        flag_button_7184.fillColor = 50917
        flag_button_7184.fillAlpha = 0.5
        this.add(flag_button_7184)

        // flag_button_7185
        const flag_button_7185 = scene.add.ellipse(201, 234, 75, 75)
        flag_button_7185.fillColor = 50917
        flag_button_7185.fillAlpha = 0.5
        this.add(flag_button_7185)

        // flag_button_514
        const flag_button_514 = scene.add.ellipse(201, 356, 75, 75)
        flag_button_514.fillColor = 50917
        flag_button_514.fillAlpha = 0.5
        this.add(flag_button_514)

        // flag_button_533
        const flag_button_533 = scene.add.ellipse(314, 357, 75, 75)
        flag_button_533.fillColor = 50917
        flag_button_533.fillAlpha = 0.5
        this.add(flag_button_533)

        // flag_button_502
        const flag_button_502 = scene.add.ellipse(427, 355, 75, 75)
        flag_button_502.fillColor = 50917
        flag_button_502.fillAlpha = 0.5
        this.add(flag_button_502)

        // flag_button_7096
        const flag_button_7096 = scene.add.ellipse(538, 356, 75, 75)
        flag_button_7096.fillColor = 50917
        flag_button_7096.fillAlpha = 0.5
        this.add(flag_button_7096)

        // flag_button_504
        const flag_button_504 = scene.add.ellipse(653, 356, 75, 75)
        flag_button_504.fillColor = 50917
        flag_button_504.fillAlpha = 0.5
        this.add(flag_button_504)

        // flag_button_500
        const flag_button_500 = scene.add.ellipse(539, 480, 75, 75)
        flag_button_500.fillColor = 50917
        flag_button_500.fillAlpha = 0.5
        this.add(flag_button_500)

        // flag_button_535
        const flag_button_535 = scene.add.ellipse(652, 481, 75, 75)
        flag_button_535.fillColor = 50917
        flag_button_535.fillAlpha = 0.5
        this.add(flag_button_535)

        // flag_button_505
        const flag_button_505 = scene.add.ellipse(429, 480, 75, 75)
        flag_button_505.fillColor = 50917
        flag_button_505.fillAlpha = 0.5
        this.add(flag_button_505)

        // flag_button_529
        const flag_button_529 = scene.add.ellipse(315, 480, 75, 75)
        flag_button_529.fillColor = 50917
        flag_button_529.fillAlpha = 0.5
        this.add(flag_button_529)

        // flag_button_538
        const flag_button_538 = scene.add.ellipse(203, 480, 75, 75)
        flag_button_538.fillColor = 50917
        flag_button_538.fillAlpha = 0.5
        this.add(flag_button_538)

        // flag_button_507
        const flag_button_507 = scene.add.ellipse(653, 607, 75, 75)
        flag_button_507.fillColor = 50917
        flag_button_507.fillAlpha = 0.5
        this.add(flag_button_507)

        // flag_button_536
        const flag_button_536 = scene.add.ellipse(428, 607, 75, 75)
        flag_button_536.fillColor = 50917
        flag_button_536.fillAlpha = 0.5
        this.add(flag_button_536)

        // flag_button_506
        const flag_button_506 = scene.add.ellipse(316, 607, 75, 75)
        flag_button_506.fillColor = 50917
        flag_button_506.fillAlpha = 0.5
        this.add(flag_button_506)

        // flag_button_525
        const flag_button_525 = scene.add.ellipse(200, 607, 75, 75)
        flag_button_525.fillColor = 50917
        flag_button_525.fillAlpha = 0.5
        this.add(flag_button_525)

        // flag_button_530
        const flag_button_530 = scene.add.ellipse(539, 738, 75, 75)
        flag_button_530.fillColor = 50917
        flag_button_530.fillAlpha = 0.5
        this.add(flag_button_530)

        // flag_button_508
        const flag_button_508 = scene.add.ellipse(654, 738, 75, 75)
        flag_button_508.fillColor = 50917
        flag_button_508.fillAlpha = 0.5
        this.add(flag_button_508)

        // flag_button_548
        const flag_button_548 = scene.add.ellipse(429, 738, 75, 75)
        flag_button_548.fillColor = 50917
        flag_button_548.fillAlpha = 0.5
        this.add(flag_button_548)

        // flag_button_546
        const flag_button_546 = scene.add.ellipse(317, 738, 75, 75)
        flag_button_546.fillColor = 50917
        flag_button_546.fillAlpha = 0.5
        this.add(flag_button_546)

        // flag_button_542
        const flag_button_542 = scene.add.ellipse(201, 738, 75, 75)
        flag_button_542.fillColor = 50917
        flag_button_542.fillAlpha = 0.5
        this.add(flag_button_542)

        // flag_button_537
        const flag_button_537 = scene.add.ellipse(881, 734, 75, 75)
        flag_button_537.fillColor = 50917
        flag_button_537.fillAlpha = 0.5
        this.add(flag_button_537)

        // flag_button_517
        const flag_button_517 = scene.add.ellipse(990, 734, 75, 75)
        flag_button_517.fillColor = 50917
        flag_button_517.fillAlpha = 0.5
        this.add(flag_button_517)

        // flag_button_526
        const flag_button_526 = scene.add.ellipse(1100, 734, 75, 75)
        flag_button_526.fillColor = 50917
        flag_button_526.fillAlpha = 0.5
        this.add(flag_button_526)

        // flag_button_539
        const flag_button_539 = scene.add.ellipse(1312, 734, 75, 75)
        flag_button_539.fillColor = 50917
        flag_button_539.fillAlpha = 0.5
        this.add(flag_button_539)

        // flag_button_518
        const flag_button_518 = scene.add.ellipse(1204, 734, 75, 75)
        flag_button_518.fillColor = 50917
        flag_button_518.fillAlpha = 0.5
        this.add(flag_button_518)

        // flag_button_513
        const flag_button_513 = scene.add.ellipse(883, 604, 75, 75)
        flag_button_513.fillColor = 50917
        flag_button_513.fillAlpha = 0.5
        this.add(flag_button_513)

        // flag_button_7095
        const flag_button_7095 = scene.add.ellipse(986, 606, 75, 75)
        flag_button_7095.fillColor = 50917
        flag_button_7095.fillAlpha = 0.5
        this.add(flag_button_7095)

        // flag_button_543
        const flag_button_543 = scene.add.ellipse(1099, 606, 75, 75)
        flag_button_543.fillColor = 50917
        flag_button_543.fillAlpha = 0.5
        this.add(flag_button_543)

        // flag_button_547
        const flag_button_547 = scene.add.ellipse(1315, 606, 75, 75)
        flag_button_547.fillColor = 50917
        flag_button_547.fillAlpha = 0.5
        this.add(flag_button_547)

        // flag_button_522
        const flag_button_522 = scene.add.ellipse(1204, 606, 75, 75)
        flag_button_522.fillColor = 50917
        flag_button_522.fillAlpha = 0.5
        this.add(flag_button_522)

        // flag_button_511
        const flag_button_511 = scene.add.ellipse(885, 476, 75, 75)
        flag_button_511.fillColor = 50917
        flag_button_511.fillAlpha = 0.5
        this.add(flag_button_511)

        // flag_button_528
        const flag_button_528 = scene.add.ellipse(990, 476, 75, 75)
        flag_button_528.fillColor = 50917
        flag_button_528.fillAlpha = 0.5
        this.add(flag_button_528)

        // flag_button_534
        const flag_button_534 = scene.add.ellipse(1100, 476, 75, 75)
        flag_button_534.fillColor = 50917
        flag_button_534.fillAlpha = 0.5
        this.add(flag_button_534)

        // flag_button_520
        const flag_button_520 = scene.add.ellipse(1314, 476, 75, 75)
        flag_button_520.fillColor = 50917
        flag_button_520.fillAlpha = 0.5
        this.add(flag_button_520)

        // flag_button_512
        const flag_button_512 = scene.add.ellipse(1204, 477, 75, 75)
        flag_button_512.fillColor = 50917
        flag_button_512.fillAlpha = 0.5
        this.add(flag_button_512)

        // flag_button_501
        const flag_button_501 = scene.add.ellipse(1313, 350, 75, 75)
        flag_button_501.fillColor = 50917
        flag_button_501.fillAlpha = 0.5
        this.add(flag_button_501)

        // flag_button_524
        const flag_button_524 = scene.add.ellipse(1205, 350, 75, 75)
        flag_button_524.fillColor = 50917
        flag_button_524.fillAlpha = 0.5
        this.add(flag_button_524)

        // flag_button_527
        const flag_button_527 = scene.add.ellipse(1099, 350, 75, 75)
        flag_button_527.fillColor = 50917
        flag_button_527.fillAlpha = 0.5
        this.add(flag_button_527)

        // flag_button_531
        const flag_button_531 = scene.add.ellipse(991, 350, 75, 75)
        flag_button_531.fillColor = 50917
        flag_button_531.fillAlpha = 0.5
        this.add(flag_button_531)

        // flag_button_545
        const flag_button_545 = scene.add.ellipse(883, 351, 75, 75)
        flag_button_545.fillColor = 50917
        flag_button_545.fillAlpha = 0.5
        this.add(flag_button_545)

        // flag_button_509
        const flag_button_509 = scene.add.ellipse(883, 227, 75, 75)
        flag_button_509.fillColor = 50917
        flag_button_509.fillAlpha = 0.5
        this.add(flag_button_509)

        // flag_button_510
        const flag_button_510 = scene.add.ellipse(990, 228, 75, 75)
        flag_button_510.fillColor = 50917
        flag_button_510.fillAlpha = 0.5
        this.add(flag_button_510)

        // flag_button_503
        const flag_button_503 = scene.add.ellipse(1098, 228, 75, 75)
        flag_button_503.fillColor = 50917
        flag_button_503.fillAlpha = 0.5
        this.add(flag_button_503)

        // flag_button_541
        const flag_button_541 = scene.add.ellipse(1202, 228, 75, 75)
        flag_button_541.fillColor = 50917
        flag_button_541.fillAlpha = 0.5
        this.add(flag_button_541)

        // flag_button_519
        const flag_button_519 = scene.add.ellipse(1315, 227, 75, 75)
        flag_button_519.fillColor = 50917
        flag_button_519.fillAlpha = 0.5
        this.add(flag_button_519)

        // flag_button_521
        const flag_button_521 = scene.add.ellipse(1314, 105, 75, 75)
        flag_button_521.fillColor = 50917
        flag_button_521.fillAlpha = 0.5
        this.add(flag_button_521)

        // flag_button_516
        const flag_button_516 = scene.add.ellipse(1205, 106, 75, 75)
        flag_button_516.fillColor = 50917
        flag_button_516.fillAlpha = 0.5
        this.add(flag_button_516)

        // flag_button_544
        const flag_button_544 = scene.add.ellipse(1095, 105, 75, 75)
        flag_button_544.fillColor = 50917
        flag_button_544.fillAlpha = 0.5
        this.add(flag_button_544)

        // flag_button_515
        const flag_button_515 = scene.add.ellipse(990, 107, 75, 75)
        flag_button_515.fillColor = 50917
        flag_button_515.fillAlpha = 0.5
        this.add(flag_button_515)

        // flag_button_523
        const flag_button_523 = scene.add.ellipse(883, 105, 75, 75)
        flag_button_523.fillColor = 50917
        flag_button_523.fillAlpha = 0.5
        this.add(flag_button_523)

        // flag_button_540
        const flag_button_540 = scene.add.ellipse(539, 607, 75, 75)
        flag_button_540.fillColor = 50917
        flag_button_540.fillAlpha = 0.5
        this.add(flag_button_540)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // flag_name_7186 (components)
        const flag_name_7186Name = new Name(flag_name_7186)
        flag_name_7186Name.id = 7186

        // flag_name_7187 (components)
        const flag_name_7187Name = new Name(flag_name_7187)
        flag_name_7187Name.id = 7187

        // flag_name_7188 (components)
        const flag_name_7188Name = new Name(flag_name_7188)
        flag_name_7188Name.id = 7188

        // flag_name_7189 (components)
        const flag_name_7189Name = new Name(flag_name_7189)
        flag_name_7189Name.id = 7189

        // flag_name_7185 (components)
        const flag_name_7185Name = new Name(flag_name_7185)
        flag_name_7185Name.id = 7185

        // flag_name_7184 (components)
        const flag_name_7184Name = new Name(flag_name_7184)
        flag_name_7184Name.id = 7184

        // flag_name_7183 (components)
        const flag_name_7183Name = new Name(flag_name_7183)
        flag_name_7183Name.id = 7183

        // flag_name_7182 (components)
        const flag_name_7182Name = new Name(flag_name_7182)
        flag_name_7182Name.id = 7182

        // flag_name_7148 (components)
        const flag_name_7148Name = new Name(flag_name_7148)
        flag_name_7148Name.id = 7148

        // flag_name_504 (components)
        const flag_name_504Name = new Name(flag_name_504)
        flag_name_504Name.id = 504

        // flag_name_7096 (components)
        const flag_name_7096Name = new Name(flag_name_7096)
        flag_name_7096Name.id = 7096

        // flag_name_502 (components)
        const flag_name_502Name = new Name(flag_name_502)
        flag_name_502Name.id = 502

        // flag_name_533 (components)
        const flag_name_533Name = new Name(flag_name_533)
        flag_name_533Name.id = 533

        // flag_name_514 (components)
        const flag_name_514Name = new Name(flag_name_514)
        flag_name_514Name.id = 514

        // flag_name_535 (components)
        const flag_name_535Name = new Name(flag_name_535)
        flag_name_535Name.id = 535

        // flag_name_500 (components)
        const flag_name_500Name = new Name(flag_name_500)
        flag_name_500Name.id = 500

        // flag_name_505 (components)
        const flag_name_505Name = new Name(flag_name_505)
        flag_name_505Name.id = 505

        // flag_name_529 (components)
        const flag_name_529Name = new Name(flag_name_529)
        flag_name_529Name.id = 529

        // flag_name_538 (components)
        const flag_name_538Name = new Name(flag_name_538)
        flag_name_538Name.id = 538

        // flag_name_507 (components)
        const flag_name_507Name = new Name(flag_name_507)
        flag_name_507Name.id = 507

        // flag_name_540 (components)
        const flag_name_540Name = new Name(flag_name_540)
        flag_name_540Name.id = 540

        // flag_name_536 (components)
        const flag_name_536Name = new Name(flag_name_536)
        flag_name_536Name.id = 536

        // flag_name_506 (components)
        const flag_name_506Name = new Name(flag_name_506)
        flag_name_506Name.id = 506

        // flag_name_525 (components)
        const flag_name_525Name = new Name(flag_name_525)
        flag_name_525Name.id = 525

        // flag_name_508 (components)
        const flag_name_508Name = new Name(flag_name_508)
        flag_name_508Name.id = 508

        // flag_name_530 (components)
        const flag_name_530Name = new Name(flag_name_530)
        flag_name_530Name.id = 530

        // flag_name_548 (components)
        const flag_name_548Name = new Name(flag_name_548)
        flag_name_548Name.id = 548

        // flag_name_546 (components)
        const flag_name_546Name = new Name(flag_name_546)
        flag_name_546Name.id = 546

        // flag_name_542 (components)
        const flag_name_542Name = new Name(flag_name_542)
        flag_name_542Name.id = 542

        // flag_name_537 (components)
        const flag_name_537Name = new Name(flag_name_537)
        flag_name_537Name.id = 537

        // flag_name_517 (components)
        const flag_name_517Name = new Name(flag_name_517)
        flag_name_517Name.id = 517

        // flag_name_526 (components)
        const flag_name_526Name = new Name(flag_name_526)
        flag_name_526Name.id = 526

        // flag_name_518 (components)
        const flag_name_518Name = new Name(flag_name_518)
        flag_name_518Name.id = 518

        // flag_name_539 (components)
        const flag_name_539Name = new Name(flag_name_539)
        flag_name_539Name.id = 539

        // flag_name_513 (components)
        const flag_name_513Name = new Name(flag_name_513)
        flag_name_513Name.id = 513

        // flag_name_7095 (components)
        const flag_name_7095Name = new Name(flag_name_7095)
        flag_name_7095Name.id = 7095

        // flag_name_543 (components)
        const flag_name_543Name = new Name(flag_name_543)
        flag_name_543Name.id = 543

        // flag_name_522 (components)
        const flag_name_522Name = new Name(flag_name_522)
        flag_name_522Name.id = 522

        // flag_name_547 (components)
        const flag_name_547Name = new Name(flag_name_547)
        flag_name_547Name.id = 547

        // flag_name_511 (components)
        const flag_name_511Name = new Name(flag_name_511)
        flag_name_511Name.id = 511

        // flag_name_528 (components)
        const flag_name_528Name = new Name(flag_name_528)
        flag_name_528Name.id = 528

        // flag_name_534 (components)
        const flag_name_534Name = new Name(flag_name_534)
        flag_name_534Name.id = 534

        // flag_name_512 (components)
        const flag_name_512Name = new Name(flag_name_512)
        flag_name_512Name.id = 512

        // flag_name_520 (components)
        const flag_name_520Name = new Name(flag_name_520)
        flag_name_520Name.id = 520

        // flag_name_545 (components)
        const flag_name_545Name = new Name(flag_name_545)
        flag_name_545Name.id = 545

        // flag_name_531 (components)
        const flag_name_531Name = new Name(flag_name_531)
        flag_name_531Name.id = 531

        // flag_name_527 (components)
        const flag_name_527Name = new Name(flag_name_527)
        flag_name_527Name.id = 527

        // flag_name_524 (components)
        const flag_name_524Name = new Name(flag_name_524)
        flag_name_524Name.id = 524

        // flag_name_501 (components)
        const flag_name_501Name = new Name(flag_name_501)
        flag_name_501Name.id = 501

        // flag_name_519 (components)
        const flag_name_519Name = new Name(flag_name_519)
        flag_name_519Name.id = 519

        // flag_name_541 (components)
        const flag_name_541Name = new Name(flag_name_541)
        flag_name_541Name.id = 541

        // flag_name_503 (components)
        const flag_name_503Name = new Name(flag_name_503)
        flag_name_503Name.id = 503

        // flag_name_510 (components)
        const flag_name_510Name = new Name(flag_name_510)
        flag_name_510Name.id = 510

        // flag_name_509 (components)
        const flag_name_509Name = new Name(flag_name_509)
        flag_name_509Name.id = 509

        // flag_name_521 (components)
        const flag_name_521Name = new Name(flag_name_521)
        flag_name_521Name.id = 521

        // flag_name_516 (components)
        const flag_name_516Name = new Name(flag_name_516)
        flag_name_516Name.id = 516

        // flag_name_544 (components)
        const flag_name_544Name = new Name(flag_name_544)
        flag_name_544Name.id = 544

        // flag_name_515 (components)
        const flag_name_515Name = new Name(flag_name_515)
        flag_name_515Name.id = 515

        // flag_name_523 (components)
        const flag_name_523Name = new Name(flag_name_523)
        flag_name_523Name.id = 523

        // flag_button_7186 (components)
        const flag_button_7186SimpleButton = new SimpleButton(flag_button_7186)
        flag_button_7186SimpleButton.callback = () => this.buy(7186)

        // flag_button_7187 (components)
        const flag_button_7187SimpleButton = new SimpleButton(flag_button_7187)
        flag_button_7187SimpleButton.callback = () => this.buy(7187)

        // flag_button_7188 (components)
        const flag_button_7188SimpleButton = new SimpleButton(flag_button_7188)
        flag_button_7188SimpleButton.callback = () => this.buy(7188)

        // flag_button_7189 (components)
        const flag_button_7189SimpleButton = new SimpleButton(flag_button_7189)
        flag_button_7189SimpleButton.callback = () => this.buy(7189)

        // flag_button_7148 (components)
        const flag_button_7148SimpleButton = new SimpleButton(flag_button_7148)
        flag_button_7148SimpleButton.callback = () => this.buy(7148)

        // flag_button_7182 (components)
        const flag_button_7182SimpleButton = new SimpleButton(flag_button_7182)
        flag_button_7182SimpleButton.callback = () => this.buy(7182)

        // flag_button_7183 (components)
        const flag_button_7183SimpleButton = new SimpleButton(flag_button_7183)
        flag_button_7183SimpleButton.callback = () => this.buy(7183)

        // flag_button_7184 (components)
        const flag_button_7184SimpleButton = new SimpleButton(flag_button_7184)
        flag_button_7184SimpleButton.callback = () => this.buy(7184)

        // flag_button_7185 (components)
        const flag_button_7185SimpleButton = new SimpleButton(flag_button_7185)
        flag_button_7185SimpleButton.callback = () => this.buy(7185)

        // flag_button_514 (components)
        const flag_button_514SimpleButton = new SimpleButton(flag_button_514)
        flag_button_514SimpleButton.callback = () => this.buy(514)

        // flag_button_533 (components)
        const flag_button_533SimpleButton = new SimpleButton(flag_button_533)
        flag_button_533SimpleButton.callback = () => this.buy(533)

        // flag_button_502 (components)
        const flag_button_502SimpleButton = new SimpleButton(flag_button_502)
        flag_button_502SimpleButton.callback = () => this.buy(502)

        // flag_button_7096 (components)
        const flag_button_7096SimpleButton = new SimpleButton(flag_button_7096)
        flag_button_7096SimpleButton.callback = () => this.buy(7096)

        // flag_button_504 (components)
        const flag_button_504SimpleButton = new SimpleButton(flag_button_504)
        flag_button_504SimpleButton.callback = () => this.buy(504)

        // flag_button_500 (components)
        const flag_button_500SimpleButton = new SimpleButton(flag_button_500)
        flag_button_500SimpleButton.callback = () => this.buy(500)

        // flag_button_535 (components)
        const flag_button_535SimpleButton = new SimpleButton(flag_button_535)
        flag_button_535SimpleButton.callback = () => this.buy(535)

        // flag_button_505 (components)
        const flag_button_505SimpleButton = new SimpleButton(flag_button_505)
        flag_button_505SimpleButton.callback = () => this.buy(505)

        // flag_button_529 (components)
        const flag_button_529SimpleButton = new SimpleButton(flag_button_529)
        flag_button_529SimpleButton.callback = () => this.buy(529)

        // flag_button_538 (components)
        const flag_button_538SimpleButton = new SimpleButton(flag_button_538)
        flag_button_538SimpleButton.callback = () => this.buy(538)

        // flag_button_507 (components)
        const flag_button_507SimpleButton = new SimpleButton(flag_button_507)
        flag_button_507SimpleButton.callback = () => this.buy(507)

        // flag_button_536 (components)
        const flag_button_536SimpleButton = new SimpleButton(flag_button_536)
        flag_button_536SimpleButton.callback = () => this.buy(536)

        // flag_button_506 (components)
        const flag_button_506SimpleButton = new SimpleButton(flag_button_506)
        flag_button_506SimpleButton.callback = () => this.buy(506)

        // flag_button_525 (components)
        const flag_button_525SimpleButton = new SimpleButton(flag_button_525)
        flag_button_525SimpleButton.callback = () => this.buy(525)

        // flag_button_530 (components)
        const flag_button_530SimpleButton = new SimpleButton(flag_button_530)
        flag_button_530SimpleButton.callback = () => this.buy(530)

        // flag_button_508 (components)
        const flag_button_508SimpleButton = new SimpleButton(flag_button_508)
        flag_button_508SimpleButton.callback = () => this.buy(508)

        // flag_button_548 (components)
        const flag_button_548SimpleButton = new SimpleButton(flag_button_548)
        flag_button_548SimpleButton.callback = () => this.buy(548)

        // flag_button_546 (components)
        const flag_button_546SimpleButton = new SimpleButton(flag_button_546)
        flag_button_546SimpleButton.callback = () => this.buy(546)

        // flag_button_542 (components)
        const flag_button_542SimpleButton = new SimpleButton(flag_button_542)
        flag_button_542SimpleButton.callback = () => this.buy(542)

        // flag_button_537 (components)
        const flag_button_537SimpleButton = new SimpleButton(flag_button_537)
        flag_button_537SimpleButton.callback = () => this.buy(537)

        // flag_button_517 (components)
        const flag_button_517SimpleButton = new SimpleButton(flag_button_517)
        flag_button_517SimpleButton.callback = () => this.buy(517)

        // flag_button_526 (components)
        const flag_button_526SimpleButton = new SimpleButton(flag_button_526)
        flag_button_526SimpleButton.callback = () => this.buy(526)

        // flag_button_539 (components)
        const flag_button_539SimpleButton = new SimpleButton(flag_button_539)
        flag_button_539SimpleButton.callback = () => this.buy(539)

        // flag_button_518 (components)
        const flag_button_518SimpleButton = new SimpleButton(flag_button_518)
        flag_button_518SimpleButton.callback = () => this.buy(518)

        // flag_button_513 (components)
        const flag_button_513SimpleButton = new SimpleButton(flag_button_513)
        flag_button_513SimpleButton.callback = () => this.buy(513)

        // flag_button_7095 (components)
        const flag_button_7095SimpleButton = new SimpleButton(flag_button_7095)
        flag_button_7095SimpleButton.callback = () => this.buy(7095)

        // flag_button_543 (components)
        const flag_button_543SimpleButton = new SimpleButton(flag_button_543)
        flag_button_543SimpleButton.callback = () => this.buy(543)

        // flag_button_547 (components)
        const flag_button_547SimpleButton = new SimpleButton(flag_button_547)
        flag_button_547SimpleButton.callback = () => this.buy(547)

        // flag_button_522 (components)
        const flag_button_522SimpleButton = new SimpleButton(flag_button_522)
        flag_button_522SimpleButton.callback = () => this.buy(522)

        // flag_button_511 (components)
        const flag_button_511SimpleButton = new SimpleButton(flag_button_511)
        flag_button_511SimpleButton.callback = () => this.buy(511)

        // flag_button_528 (components)
        const flag_button_528SimpleButton = new SimpleButton(flag_button_528)
        flag_button_528SimpleButton.callback = () => this.buy(528)

        // flag_button_534 (components)
        const flag_button_534SimpleButton = new SimpleButton(flag_button_534)
        flag_button_534SimpleButton.callback = () => this.buy(534)

        // flag_button_520 (components)
        const flag_button_520SimpleButton = new SimpleButton(flag_button_520)
        flag_button_520SimpleButton.callback = () => this.buy(520)

        // flag_button_512 (components)
        const flag_button_512SimpleButton = new SimpleButton(flag_button_512)
        flag_button_512SimpleButton.callback = () => this.buy(512)

        // flag_button_501 (components)
        const flag_button_501SimpleButton = new SimpleButton(flag_button_501)
        flag_button_501SimpleButton.callback = () => this.buy(501)

        // flag_button_524 (components)
        const flag_button_524SimpleButton = new SimpleButton(flag_button_524)
        flag_button_524SimpleButton.callback = () => this.buy(524)

        // flag_button_527 (components)
        const flag_button_527SimpleButton = new SimpleButton(flag_button_527)
        flag_button_527SimpleButton.callback = () => this.buy(527)

        // flag_button_531 (components)
        const flag_button_531SimpleButton = new SimpleButton(flag_button_531)
        flag_button_531SimpleButton.callback = () => this.buy(531)

        // flag_button_545 (components)
        const flag_button_545SimpleButton = new SimpleButton(flag_button_545)
        flag_button_545SimpleButton.callback = () => this.buy(545)

        // flag_button_509 (components)
        const flag_button_509SimpleButton = new SimpleButton(flag_button_509)
        flag_button_509SimpleButton.callback = () => this.buy(509)

        // flag_button_510 (components)
        const flag_button_510SimpleButton = new SimpleButton(flag_button_510)
        flag_button_510SimpleButton.callback = () => this.buy(510)

        // flag_button_503 (components)
        const flag_button_503SimpleButton = new SimpleButton(flag_button_503)
        flag_button_503SimpleButton.callback = () => this.buy(503)

        // flag_button_541 (components)
        const flag_button_541SimpleButton = new SimpleButton(flag_button_541)
        flag_button_541SimpleButton.callback = () => this.buy(541)

        // flag_button_519 (components)
        const flag_button_519SimpleButton = new SimpleButton(flag_button_519)
        flag_button_519SimpleButton.callback = () => this.buy(519)

        // flag_button_521 (components)
        const flag_button_521SimpleButton = new SimpleButton(flag_button_521)
        flag_button_521SimpleButton.callback = () => this.buy(521)

        // flag_button_516 (components)
        const flag_button_516SimpleButton = new SimpleButton(flag_button_516)
        flag_button_516SimpleButton.callback = () => this.buy(516)

        // flag_button_544 (components)
        const flag_button_544SimpleButton = new SimpleButton(flag_button_544)
        flag_button_544SimpleButton.callback = () => this.buy(544)

        // flag_button_515 (components)
        const flag_button_515SimpleButton = new SimpleButton(flag_button_515)
        flag_button_515SimpleButton.callback = () => this.buy(515)

        // flag_button_523 (components)
        const flag_button_523SimpleButton = new SimpleButton(flag_button_523)
        flag_button_523SimpleButton.callback = () => this.buy(523)

        // flag_button_540 (components)
        const flag_button_540SimpleButton = new SimpleButton(flag_button_540)
        flag_button_540SimpleButton.callback = () => this.buy(540)

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.page20_bg = page20_bg
        this.page20_header = page20_header
        this.flag_name_7186 = flag_name_7186
        this.flag_name_7187 = flag_name_7187
        this.flag_name_7188 = flag_name_7188
        this.flag_name_7189 = flag_name_7189
        this.flag_name_7185 = flag_name_7185
        this.flag_name_7184 = flag_name_7184
        this.flag_name_7183 = flag_name_7183
        this.flag_name_7182 = flag_name_7182
        this.flag_name_7148 = flag_name_7148
        this.flag_name_504 = flag_name_504
        this.flag_name_7096 = flag_name_7096
        this.flag_name_502 = flag_name_502
        this.flag_name_533 = flag_name_533
        this.flag_name_514 = flag_name_514
        this.flag_name_535 = flag_name_535
        this.flag_name_500 = flag_name_500
        this.flag_name_505 = flag_name_505
        this.flag_name_529 = flag_name_529
        this.flag_name_538 = flag_name_538
        this.flag_name_507 = flag_name_507
        this.flag_name_540 = flag_name_540
        this.flag_name_536 = flag_name_536
        this.flag_name_506 = flag_name_506
        this.flag_name_525 = flag_name_525
        this.flag_name_508 = flag_name_508
        this.flag_name_530 = flag_name_530
        this.flag_name_548 = flag_name_548
        this.flag_name_546 = flag_name_546
        this.flag_name_542 = flag_name_542
        this.flag_name_537 = flag_name_537
        this.flag_name_517 = flag_name_517
        this.flag_name_526 = flag_name_526
        this.flag_name_518 = flag_name_518
        this.flag_name_539 = flag_name_539
        this.flag_name_513 = flag_name_513
        this.flag_name_7095 = flag_name_7095
        this.flag_name_543 = flag_name_543
        this.flag_name_522 = flag_name_522
        this.flag_name_547 = flag_name_547
        this.flag_name_511 = flag_name_511
        this.flag_name_528 = flag_name_528
        this.flag_name_534 = flag_name_534
        this.flag_name_512 = flag_name_512
        this.flag_name_520 = flag_name_520
        this.flag_name_545 = flag_name_545
        this.flag_name_531 = flag_name_531
        this.flag_name_527 = flag_name_527
        this.flag_name_524 = flag_name_524
        this.flag_name_501 = flag_name_501
        this.flag_name_519 = flag_name_519
        this.flag_name_541 = flag_name_541
        this.flag_name_503 = flag_name_503
        this.flag_name_510 = flag_name_510
        this.flag_name_509 = flag_name_509
        this.flag_name_521 = flag_name_521
        this.flag_name_516 = flag_name_516
        this.flag_name_544 = flag_name_544
        this.flag_name_515 = flag_name_515
        this.flag_name_523 = flag_name_523

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    page20_bg
    /** @type {Phaser.GameObjects.Text} */
    page20_header
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7186
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7187
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7188
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7189
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7185
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7184
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7183
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7182
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7148
    /** @type {Phaser.GameObjects.Text} */
    flag_name_504
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7096
    /** @type {Phaser.GameObjects.Text} */
    flag_name_502
    /** @type {Phaser.GameObjects.Text} */
    flag_name_533
    /** @type {Phaser.GameObjects.Text} */
    flag_name_514
    /** @type {Phaser.GameObjects.Text} */
    flag_name_535
    /** @type {Phaser.GameObjects.Text} */
    flag_name_500
    /** @type {Phaser.GameObjects.Text} */
    flag_name_505
    /** @type {Phaser.GameObjects.Text} */
    flag_name_529
    /** @type {Phaser.GameObjects.Text} */
    flag_name_538
    /** @type {Phaser.GameObjects.Text} */
    flag_name_507
    /** @type {Phaser.GameObjects.Text} */
    flag_name_540
    /** @type {Phaser.GameObjects.Text} */
    flag_name_536
    /** @type {Phaser.GameObjects.Text} */
    flag_name_506
    /** @type {Phaser.GameObjects.Text} */
    flag_name_525
    /** @type {Phaser.GameObjects.Text} */
    flag_name_508
    /** @type {Phaser.GameObjects.Text} */
    flag_name_530
    /** @type {Phaser.GameObjects.Text} */
    flag_name_548
    /** @type {Phaser.GameObjects.Text} */
    flag_name_546
    /** @type {Phaser.GameObjects.Text} */
    flag_name_542
    /** @type {Phaser.GameObjects.Text} */
    flag_name_537
    /** @type {Phaser.GameObjects.Text} */
    flag_name_517
    /** @type {Phaser.GameObjects.Text} */
    flag_name_526
    /** @type {Phaser.GameObjects.Text} */
    flag_name_518
    /** @type {Phaser.GameObjects.Text} */
    flag_name_539
    /** @type {Phaser.GameObjects.Text} */
    flag_name_513
    /** @type {Phaser.GameObjects.Text} */
    flag_name_7095
    /** @type {Phaser.GameObjects.Text} */
    flag_name_543
    /** @type {Phaser.GameObjects.Text} */
    flag_name_522
    /** @type {Phaser.GameObjects.Text} */
    flag_name_547
    /** @type {Phaser.GameObjects.Text} */
    flag_name_511
    /** @type {Phaser.GameObjects.Text} */
    flag_name_528
    /** @type {Phaser.GameObjects.Text} */
    flag_name_534
    /** @type {Phaser.GameObjects.Text} */
    flag_name_512
    /** @type {Phaser.GameObjects.Text} */
    flag_name_520
    /** @type {Phaser.GameObjects.Text} */
    flag_name_545
    /** @type {Phaser.GameObjects.Text} */
    flag_name_531
    /** @type {Phaser.GameObjects.Text} */
    flag_name_527
    /** @type {Phaser.GameObjects.Text} */
    flag_name_524
    /** @type {Phaser.GameObjects.Text} */
    flag_name_501
    /** @type {Phaser.GameObjects.Text} */
    flag_name_519
    /** @type {Phaser.GameObjects.Text} */
    flag_name_541
    /** @type {Phaser.GameObjects.Text} */
    flag_name_503
    /** @type {Phaser.GameObjects.Text} */
    flag_name_510
    /** @type {Phaser.GameObjects.Text} */
    flag_name_509
    /** @type {Phaser.GameObjects.Text} */
    flag_name_521
    /** @type {Phaser.GameObjects.Text} */
    flag_name_516
    /** @type {Phaser.GameObjects.Text} */
    flag_name_544
    /** @type {Phaser.GameObjects.Text} */
    flag_name_515
    /** @type {Phaser.GameObjects.Text} */
    flag_name_523

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
