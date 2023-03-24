import {SimpleButton, Button, Interactive, LocalisedString} from '@components/components'
import BookStamp from './BookStamp'
import PinLoader from '@engine/loaders/PinLoader'
import BaseScene from '@scenes/base/BaseScene'

/* START OF COMPILED CODE */

export default class Stampbook extends BaseScene {
    constructor() {
        super('Stampbook')

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('stampbook-pack', 'client/media/interface/game/stampbook/stampbook-pack.json')
    }

    /** @returns {void} */
    _create() {
        // blocker
        const blocker = this.add.rectangle(760, 480, 1520, 960)
        blocker.isFilled = true
        blocker.fillColor = 0
        blocker.fillAlpha = 0.2

        // editor_background
        const editor_background = this.add.sprite(760, 480, 'stampbook', 'editor_background')
        editor_background.visible = false

        // bgcontainer
        const bgcontainer = this.add.container(95, 152)
        bgcontainer.visible = false

        // bg
        const bg = this.add.image(620, 328, 'stampbook', 'bg')
        bgcontainer.add(bg)

        // close
        const close = this.add.image(1297, 0, 'stampbook', 'close')
        bgcontainer.add(close)

        // page_back
        const page_back = this.add.image(0, 605, 'stampbook', 'page_back')
        bgcontainer.add(page_back)

        // page_forward
        const page_forward = this.add.image(1298, 608, 'stampbook', 'page_forward')
        bgcontainer.add(page_forward)

        // sidebutton
        const sidebutton = this.add.image(1384, 470, 'stampbook', 'sidebutton')
        bgcontainer.add(sidebutton)

        // sidebutton_1
        const sidebutton_1 = this.add.image(1384, 290, 'stampbook', 'sidebutton')
        bgcontainer.add(sidebutton_1)

        // sidebutton_2
        const sidebutton_2 = this.add.image(1384, 380, 'stampbook', 'sidebutton')
        bgcontainer.add(sidebutton_2)

        // sidebutton_3
        const sidebutton_3 = this.add.image(1384, 200, 'stampbook', 'sidebutton')
        bgcontainer.add(sidebutton_3)

        // categories_9001
        const categories_9001 = this.add.image(1382, 470, 'stampbook', 'categories/9001')
        categories_9001.scaleX = 0.5
        categories_9001.scaleY = 0.5
        bgcontainer.add(categories_9001)

        // categories_7
        const categories_7 = this.add.image(1382, 290, 'stampbook', 'categories/7')
        categories_7.scaleX = 0.5
        categories_7.scaleY = 0.5
        bgcontainer.add(categories_7)

        // categories_8
        const categories_8 = this.add.image(1382, 380, 'stampbook', 'categories/8')
        categories_8.scaleX = 0.5
        categories_8.scaleY = 0.5
        bgcontainer.add(categories_8)

        // categories_5
        const categories_5 = this.add.image(1382, 200, 'stampbook', 'categories/5')
        categories_5.scaleX = 0.5
        categories_5.scaleY = 0.5
        bgcontainer.add(categories_5)

        // page
        const page = this.add.container(0, 0)
        page.visible = false

        // pagebg
        const pagebg = this.add.image(744, 862, 'stampbook', 'pagebgs/games')
        pagebg.setOrigin(0.5, 1)
        page.add(pagebg)

        // aquaText
        const aquaText = this.add.text(275, 231, '', {})
        aquaText.setOrigin(0, 0.5)
        aquaText.visible = false
        aquaText.text = 'Aqua Grabber'
        aquaText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        aquaText.setWordWrapWidth(140)
        page.add(aquaText)

        // aquaIcon
        const aquaIcon = this.add.image(231, 231, 'stampbook', 'categories/13')
        aquaIcon.scaleX = 0.7
        aquaIcon.scaleY = 0.7
        aquaIcon.visible = false
        page.add(aquaIcon)

        // aquaButton
        const aquaButton = this.add.rectangle(314, 231, 240, 70)
        aquaButton.visible = false
        aquaButton.fillColor = 3729407
        aquaButton.fillAlpha = 0.5
        page.add(aquaButton)

        // astroText
        const astroText = this.add.text(514, 231, '', {})
        astroText.setOrigin(0, 0.5)
        astroText.visible = false
        astroText.text = 'Astro Barrier'
        astroText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        astroText.setWordWrapWidth(140)
        page.add(astroText)

        // astroIcon
        const astroIcon = this.add.image(471, 231, 'stampbook', 'categories/14')
        astroIcon.scaleX = 0.7
        astroIcon.scaleY = 0.7
        astroIcon.visible = false
        page.add(astroIcon)

        // astroButton
        const astroButton = this.add.rectangle(554, 231, 240, 70)
        astroButton.visible = false
        astroButton.fillColor = 3729407
        astroButton.fillAlpha = 0.5
        page.add(astroButton)

        // jitsuText
        const jitsuText = this.add.text(754, 231, '', {})
        jitsuText.setOrigin(0, 0.5)
        jitsuText.visible = false
        jitsuText.text = 'Card-Jitsu'
        jitsuText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        jitsuText.setWordWrapWidth(140)
        page.add(jitsuText)

        // jitsuIcon
        const jitsuIcon = this.add.image(712, 231, 'stampbook', 'categories/38')
        jitsuIcon.scaleX = 0.7
        jitsuIcon.scaleY = 0.7
        jitsuIcon.visible = false
        page.add(jitsuIcon)

        // jitsuButton
        const jitsuButton = this.add.rectangle(794, 231, 240, 70)
        jitsuButton.visible = false
        jitsuButton.fillColor = 3729407
        jitsuButton.fillAlpha = 0.5
        page.add(jitsuButton)

        // fireJitsuText
        const fireJitsuText = this.add.text(994, 231, '', {})
        fireJitsuText.setOrigin(0, 0.5)
        fireJitsuText.visible = false
        fireJitsuText.text = 'Card-Jitsu Fire'
        fireJitsuText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        fireJitsuText.setWordWrapWidth(140)
        page.add(fireJitsuText)

        // fireJitsuIcon
        const fireJitsuIcon = this.add.image(953, 231, 'stampbook', 'categories/32')
        fireJitsuIcon.scaleX = 0.7
        fireJitsuIcon.scaleY = 0.7
        fireJitsuIcon.visible = false
        page.add(fireJitsuIcon)

        // fireJitsuButton
        const fireJitsuButton = this.add.rectangle(1034, 231, 240, 70)
        fireJitsuButton.visible = false
        fireJitsuButton.fillColor = 3729407
        fireJitsuButton.fillAlpha = 0.5
        page.add(fireJitsuButton)

        // snowJitsuText
        const snowJitsuText = this.add.text(1230, 231, '', {})
        snowJitsuText.setOrigin(0, 0.5)
        snowJitsuText.visible = false
        snowJitsuText.text = 'Card-Jitsu Snow'
        snowJitsuText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        snowJitsuText.setWordWrapWidth(160)
        page.add(snowJitsuText)

        // snowJitsuIcon
        const snowJitsuIcon = this.add.image(1191, 231, 'stampbook', 'categories/60')
        snowJitsuIcon.scaleX = 0.7
        snowJitsuIcon.scaleY = 0.7
        snowJitsuIcon.visible = false
        page.add(snowJitsuIcon)

        // snowJitsuButton
        const snowJitsuButton = this.add.rectangle(1274, 231, 240, 70)
        snowJitsuButton.visible = false
        snowJitsuButton.fillColor = 3729407
        snowJitsuButton.fillAlpha = 0.5
        page.add(snowJitsuButton)

        // waterJitsuText
        const waterJitsuText = this.add.text(275, 306, '', {})
        waterJitsuText.setOrigin(0, 0.5)
        waterJitsuText.visible = false
        waterJitsuText.text = 'Card-Jitsu Water'
        waterJitsuText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        waterJitsuText.setWordWrapWidth(140)
        page.add(waterJitsuText)

        // waterJistuIcon
        const waterJistuIcon = this.add.image(231, 306, 'stampbook', 'categories/34')
        waterJistuIcon.scaleX = 0.7
        waterJistuIcon.scaleY = 0.7
        waterJistuIcon.visible = false
        page.add(waterJistuIcon)

        // waterJitsuButton
        const waterJitsuButton = this.add.rectangle(314, 306, 240, 70)
        waterJitsuButton.visible = false
        waterJitsuButton.fillColor = 3729407
        waterJitsuButton.fillAlpha = 0.5
        page.add(waterJitsuButton)

        // cartSurferText
        const cartSurferText = this.add.text(514, 306, '', {})
        cartSurferText.setOrigin(0, 0.5)
        cartSurferText.visible = false
        cartSurferText.text = 'Cart Surfer'
        cartSurferText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        cartSurferText.setWordWrapWidth(140)
        page.add(cartSurferText)

        // cartSurferIcon
        const cartSurferIcon = this.add.image(471, 306, 'stampbook', 'categories/28')
        cartSurferIcon.scaleX = 0.7
        cartSurferIcon.scaleY = 0.7
        cartSurferIcon.visible = false
        page.add(cartSurferIcon)

        // cartSurferButton
        const cartSurferButton = this.add.rectangle(554, 306, 240, 70)
        cartSurferButton.visible = false
        cartSurferButton.fillColor = 3729407
        cartSurferButton.fillAlpha = 0.5
        page.add(cartSurferButton)

        // wavesText
        const wavesText = this.add.text(754, 306, '', {})
        wavesText.setOrigin(0, 0.5)
        wavesText.visible = false
        wavesText.text = 'Catchin Waves'
        wavesText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        wavesText.setWordWrapWidth(140)
        page.add(wavesText)

        // wavesIcon
        const wavesIcon = this.add.image(712, 306, 'stampbook', 'categories/15')
        wavesIcon.scaleX = 0.7
        wavesIcon.scaleY = 0.7
        wavesIcon.visible = false
        page.add(wavesIcon)

        // wavesButton
        const wavesButton = this.add.rectangle(794, 306, 240, 70)
        wavesButton.visible = false
        wavesButton.fillColor = 3729407
        wavesButton.fillAlpha = 0.5
        page.add(wavesButton)

        // fishingText
        const fishingText = this.add.text(994, 306, '', {})
        fishingText.setOrigin(0, 0.5)
        fishingText.visible = false
        fishingText.text = 'Ice Fishing'
        fishingText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        fishingText.setWordWrapWidth(140)
        page.add(fishingText)

        // fishingIcon
        const fishingIcon = this.add.image(953, 306, 'stampbook', 'categories/52')
        fishingIcon.scaleX = 0.7
        fishingIcon.scaleY = 0.7
        fishingIcon.visible = false
        page.add(fishingIcon)

        // fishingButton
        const fishingButton = this.add.rectangle(1034, 306, 240, 70)
        fishingButton.visible = false
        fishingButton.fillColor = 3729407
        fishingButton.fillAlpha = 0.5
        page.add(fishingButton)

        // jPAText
        const jPAText = this.add.text(1230, 306, '', {})
        jPAText.setOrigin(0, 0.5)
        jPAText.visible = false
        jPAText.text = 'Jet Pack Adventure'
        jPAText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        jPAText.setWordWrapWidth(160)
        page.add(jPAText)

        // jPAIcon
        const jPAIcon = this.add.image(1191, 306, 'stampbook', 'categories/11')
        jPAIcon.scaleX = 0.7
        jPAIcon.scaleY = 0.7
        jPAIcon.visible = false
        page.add(jPAIcon)

        // jPAButton
        const jPAButton = this.add.rectangle(1274, 306, 240, 70)
        jPAButton.visible = false
        jPAButton.fillColor = 3729407
        jPAButton.fillAlpha = 0.5
        page.add(jPAButton)

        // missionsText
        const missionsText = this.add.text(275, 382, '', {})
        missionsText.setOrigin(0, 0.5)
        missionsText.visible = false
        missionsText.text = 'Missions'
        missionsText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        missionsText.setWordWrapWidth(140)
        page.add(missionsText)

        // missionsIcon
        const missionsIcon = this.add.image(231, 382, 'stampbook', 'categories/22')
        missionsIcon.scaleX = 0.7
        missionsIcon.scaleY = 0.7
        missionsIcon.visible = false
        page.add(missionsIcon)

        // missionsButton
        const missionsButton = this.add.rectangle(314, 382, 240, 70)
        missionsButton.visible = false
        missionsButton.fillColor = 3729407
        missionsButton.fillAlpha = 0.5
        page.add(missionsButton)

        // pizzatronText
        const pizzatronText = this.add.text(514, 382, '', {})
        pizzatronText.setOrigin(0, 0.5)
        pizzatronText.visible = false
        pizzatronText.text = 'Pizzatron 3000'
        pizzatronText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        pizzatronText.setWordWrapWidth(140)
        page.add(pizzatronText)

        // pizzatronIcon
        const pizzatronIcon = this.add.image(471, 382, 'stampbook', 'categories/54')
        pizzatronIcon.scaleX = 0.7
        pizzatronIcon.scaleY = 0.7
        pizzatronIcon.visible = false
        page.add(pizzatronIcon)

        // pizzatronButton
        const pizzatronButton = this.add.rectangle(554, 382, 240, 70)
        pizzatronButton.visible = false
        pizzatronButton.fillColor = 3729407
        pizzatronButton.fillAlpha = 0.5
        page.add(pizzatronButton)

        // launchText
        const launchText = this.add.text(754, 382, '', {})
        launchText.setOrigin(0, 0.5)
        launchText.visible = false
        launchText.text = 'Puffle Launch'
        launchText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        launchText.setWordWrapWidth(140)
        page.add(launchText)

        // launchIcon
        const launchIcon = this.add.image(712, 382, 'stampbook', 'categories/48')
        launchIcon.scaleX = 0.7
        launchIcon.scaleY = 0.7
        launchIcon.visible = false
        page.add(launchIcon)

        // launchButton
        const launchButton = this.add.rectangle(794, 382, 240, 70)
        launchButton.visible = false
        launchButton.fillColor = 3729407
        launchButton.fillAlpha = 0.5
        page.add(launchButton)

        // rescueText
        const rescueText = this.add.text(994, 382, '', {})
        rescueText.setOrigin(0, 0.5)
        rescueText.visible = false
        rescueText.text = 'Puffle Rescue'
        rescueText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        rescueText.setWordWrapWidth(140)
        page.add(rescueText)

        // rescueIcon
        const rescueIcon = this.add.image(953, 382, 'stampbook', 'categories/19')
        rescueIcon.scaleX = 0.7
        rescueIcon.scaleY = 0.7
        rescueIcon.visible = false
        page.add(rescueIcon)

        // rescueButton
        const rescueButton = this.add.rectangle(1034, 382, 240, 70)
        rescueButton.visible = false
        rescueButton.fillColor = 3729407
        rescueButton.fillAlpha = 0.5
        page.add(rescueButton)

        // pufflescapeText
        const pufflescapeText = this.add.text(1230, 382, '', {})
        pufflescapeText.setOrigin(0, 0.5)
        pufflescapeText.visible = false
        pufflescapeText.text = 'Pufflescape'
        pufflescapeText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        pufflescapeText.setWordWrapWidth(160)
        page.add(pufflescapeText)

        // pufflescapeIcon
        const pufflescapeIcon = this.add.image(1191, 382, 'stampbook', 'categories/57')
        pufflescapeIcon.scaleX = 0.7
        pufflescapeIcon.scaleY = 0.7
        pufflescapeIcon.visible = false
        page.add(pufflescapeIcon)

        // pufflescapeButton
        const pufflescapeButton = this.add.rectangle(1274, 382, 240, 70)
        pufflescapeButton.visible = false
        pufflescapeButton.fillColor = 3729407
        pufflescapeButton.fillAlpha = 0.5
        page.add(pufflescapeButton)

        // smoothieText
        const smoothieText = this.add.text(275, 457, '', {})
        smoothieText.setOrigin(0, 0.5)
        smoothieText.visible = false
        smoothieText.text = 'Smoothie Smash'
        smoothieText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        smoothieText.setWordWrapWidth(140)
        page.add(smoothieText)

        // smoothieIcon
        const smoothieIcon = this.add.image(231, 457, 'stampbook', 'categories/58')
        smoothieIcon.scaleX = 0.7
        smoothieIcon.scaleY = 0.7
        smoothieIcon.visible = false
        page.add(smoothieIcon)

        // smoothieButton
        const smoothieButton = this.add.rectangle(314, 457, 240, 70)
        smoothieButton.visible = false
        smoothieButton.fillColor = 3729407
        smoothieButton.fillAlpha = 0.5
        page.add(smoothieButton)

        // sysDefText
        const sysDefText = this.add.text(514, 457, '', {})
        sysDefText.setOrigin(0, 0.5)
        sysDefText.visible = false
        sysDefText.text = 'System Defender'
        sysDefText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        sysDefText.setWordWrapWidth(140)
        page.add(sysDefText)

        // sysDefIcon
        const sysDefIcon = this.add.image(471, 457, 'stampbook', 'categories/46')
        sysDefIcon.scaleX = 0.7
        sysDefIcon.scaleY = 0.7
        sysDefIcon.visible = false
        page.add(sysDefIcon)

        // sysDefButton
        const sysDefButton = this.add.rectangle(554, 457, 240, 70)
        sysDefButton.visible = false
        sysDefButton.fillColor = 3729407
        sysDefButton.fillAlpha = 0.5
        page.add(sysDefButton)

        // thinIceText
        const thinIceText = this.add.text(754, 457, '', {})
        thinIceText.setOrigin(0, 0.5)
        thinIceText.visible = false
        thinIceText.text = 'Thin Ice'
        thinIceText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        thinIceText.setWordWrapWidth(140)
        page.add(thinIceText)

        // thinIceIcon
        const thinIceIcon = this.add.image(712, 457, 'stampbook', 'categories/16')
        thinIceIcon.scaleX = 0.7
        thinIceIcon.scaleY = 0.7
        thinIceIcon.visible = false
        page.add(thinIceIcon)

        // thinIceButton
        const thinIceButton = this.add.rectangle(794, 457, 240, 70)
        thinIceButton.visible = false
        thinIceButton.fillColor = 3729407
        thinIceButton.fillAlpha = 0.5
        page.add(thinIceButton)

        // huntText
        const huntText = this.add.text(994, 457, '', {})
        huntText.setOrigin(0, 0.5)
        huntText.visible = false
        huntText.text = 'Treasure Hunt'
        huntText.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        huntText.setWordWrapWidth(140)
        page.add(huntText)

        // huntIcon
        const huntIcon = this.add.image(953, 457, 'stampbook', 'categories/56')
        huntIcon.scaleX = 0.7
        huntIcon.scaleY = 0.7
        huntIcon.visible = false
        page.add(huntIcon)

        // huntButton
        const huntButton = this.add.rectangle(1034, 457, 240, 70)
        huntButton.visible = false
        huntButton.fillColor = 3729407
        huntButton.fillAlpha = 0.5
        page.add(huntButton)

        // huntText_1
        const huntText_1 = this.add.text(1234, 457, '', {})
        huntText_1.setOrigin(0, 0.5)
        huntText_1.visible = false
        huntText_1.text = 'Treasure Hunt'
        huntText_1.setStyle({color: '#5b5b5bff', fontFamily: 'Burbank Small', fontSize: '20px', fontStyle: 'bold'})
        huntText_1.setWordWrapWidth(140)
        page.add(huntText_1)

        // huntIcon_1
        const huntIcon_1 = this.add.image(1193, 457, 'stampbook', 'categories/56')
        huntIcon_1.scaleX = 0.7
        huntIcon_1.scaleY = 0.7
        huntIcon_1.visible = false
        page.add(huntIcon_1)

        // huntButton_1
        const huntButton_1 = this.add.rectangle(1274, 457, 240, 70)
        huntButton_1.visible = false
        huntButton_1.fillColor = 3729407
        huntButton_1.fillAlpha = 0.5
        page.add(huntButton_1)

        // pagenum
        const pagenum = this.add.text(1225, 95, '', {})
        pagenum.text = 'Page\n6 of 29'
        pagenum.setStyle({color: '#585858ff', fixedWidth: 150, fontFamily: 'Burbank Small', fontSize: '25px'})
        page.add(pagenum)

        // stampnum
        const stampnum = this.add.text(880, 120, '', {})
        stampnum.text = '100/100'
        stampnum.setStyle({align: 'right', color: '#585858ff', fixedWidth: 300, fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})
        page.add(stampnum)

        // stampcategory
        const stampcategory = this.add.text(1183, 101, '', {})
        stampcategory.setOrigin(1, 0.5)
        stampcategory.text = 'Game Stamps:'
        stampcategory.setStyle({align: 'right', color: '#585858ff', fontFamily: 'Burbank Small', fontSize: '30px', fontStyle: 'bold'})
        page.add(stampcategory)

        // pagename
        const pagename = this.add.text(329, 117, '', {})
        pagename.setOrigin(0, 0.5)
        pagename.text = 'Games'
        pagename.setStyle({color: '#585858ff', fontFamily: 'Burbank Small', fontSize: '70px', fontStyle: 'bold'})
        page.add(pagename)

        // pageicon
        const pageicon = this.add.image(255, 120, 'stampbook', 'categories/8')
        page.add(pageicon)

        // down_btn
        const down_btn = this.add.image(882, 732, 'main', 'grey-button')
        down_btn.visible = false
        page.add(down_btn)

        // down_arrow
        const down_arrow = this.add.image(882, 731, 'main', 'grey-arrow')
        down_arrow.angle = -180
        down_arrow.visible = false
        page.add(down_arrow)

        // up_btn
        const up_btn = this.add.image(882, 249, 'main', 'grey-button')
        up_btn.visible = false
        page.add(up_btn)

        // up_arrow
        const up_arrow = this.add.image(882, 248, 'main', 'grey-arrow')
        up_arrow.visible = false
        page.add(up_arrow)

        // dividers
        const dividers = this.add.image(783, 136, 'stampbook', 'dividers')
        page.add(dividers)

        // front
        const front = this.add.container(0, 0)

        // cover
        const cover = this.add.sprite(743, 480, 'stampbook', 'colour/1')
        front.add(cover)

        // wordmark
        const wordmark = this.add.image(1194, 707, 'stampbook', 'wordmark')
        wordmark.tintFill = true
        wordmark.tintTopLeft = 14972498
        wordmark.tintTopRight = 14972498
        wordmark.tintBottomLeft = 14972498
        wordmark.tintBottomRight = 14972498
        front.add(wordmark)

        // wordmark_overlay
        const wordmark_overlay = this.add.image(1194, 707, 'stampbook', 'wordmark')
        wordmark_overlay.tintTopLeft = 14972498
        wordmark_overlay.tintTopRight = 14972498
        wordmark_overlay.tintBottomLeft = 14972498
        wordmark_overlay.tintBottomRight = 14972498
        front.add(wordmark_overlay)

        // pattern
        const pattern = this.add.sprite(740, 480, 'stampbook', 'pattern/1')
        pattern.alpha = 0.15
        pattern.alphaTopLeft = 0.15
        pattern.alphaTopRight = 0.15
        pattern.alphaBottomLeft = 0.15
        pattern.alphaBottomRight = 0.15
        front.add(pattern)

        // clasp_bg
        const clasp_bg = this.add.sprite(1358, 480, 'stampbook', 'clasp')
        front.add(clasp_bg)

        // clasp
        const clasp = this.add.sprite(1338, 472, 'stampbook', 'clasp/1')
        front.add(clasp)

        // total
        const total = this.add.text(257, 754, '', {})
        total.setStyle({color: '#F4B851', fontFamily: 'Burbank Small', fontSize: '40px', fontStyle: 'bold', 'shadow.offsetX': 3, 'shadow.offsetY': 3, 'shadow.fill': true})
        front.add(total)

        // username
        const username = this.add.text(253, 639, '', {})
        username.text = 'Loading Stampbook...'
        username.setStyle({color: '#F4B851', fontFamily: 'Burbank Small', fontSize: '100px', fontStyle: 'bold', 'shadow.offsetX': 3, 'shadow.offsetY': 3, 'shadow.fill': true})
        front.add(username)

        // edit
        const edit = this.add.sprite(1465, 897, 'stampbook', 'edit')
        front.add(edit)

        // grey_button
        const grey_button = this.add.image(1346, 169, 'main', 'grey-button')
        front.add(grey_button)

        // grey_x
        const grey_x = this.add.image(1346, 167, 'main', 'grey-x')
        front.add(grey_x)

        // editor
        const editor = this.add.container(0, 0)
        editor.visible = false

        // editor_top
        const editor_top = this.add.sprite(787, 37, 'stampbook', 'editor_top')
        editor.add(editor_top)

        // editor_side
        const editor_side = this.add.sprite(56, 243, 'stampbook', 'editor_side')
        editor.add(editor_side)

        // claspthumb
        const claspthumb = this.add.sprite(76, 445, 'stampbook', 'thumbs/clasp/1')
        editor.add(claspthumb)

        // claspselect
        const claspselect = this.add.container(205, 375)
        claspselect.visible = false
        editor.add(claspselect)

        // claspselect_bg
        const claspselect_bg = this.add.image(51, 73, 'stampbook', 'editor_options')
        claspselect.add(claspselect_bg)

        // thumbs_clasp_1
        const thumbs_clasp_1 = this.add.image(0, 0, 'stampbook', 'thumbs/clasp/1')
        thumbs_clasp_1.scaleX = 0.7
        thumbs_clasp_1.scaleY = 0.7
        claspselect.add(thumbs_clasp_1)

        // thumbs_clasp_2
        const thumbs_clasp_2 = this.add.image(103, 0, 'stampbook', 'thumbs/clasp/2')
        thumbs_clasp_2.scaleX = 0.7
        thumbs_clasp_2.scaleY = 0.7
        claspselect.add(thumbs_clasp_2)

        // thumbs_clasp_3
        const thumbs_clasp_3 = this.add.image(0, 72, 'stampbook', 'thumbs/clasp/3')
        thumbs_clasp_3.scaleX = 0.7
        thumbs_clasp_3.scaleY = 0.7
        claspselect.add(thumbs_clasp_3)

        // thumbs_clasp_4
        const thumbs_clasp_4 = this.add.image(103, 72, 'stampbook', 'thumbs/clasp/4')
        thumbs_clasp_4.scaleX = 0.7
        thumbs_clasp_4.scaleY = 0.7
        claspselect.add(thumbs_clasp_4)

        // thumbs_clasp_5
        const thumbs_clasp_5 = this.add.image(0, 145, 'stampbook', 'thumbs/clasp/5')
        thumbs_clasp_5.scaleX = 0.7
        thumbs_clasp_5.scaleY = 0.7
        claspselect.add(thumbs_clasp_5)

        // thumbs_clasp_6
        const thumbs_clasp_6 = this.add.image(103, 144, 'stampbook', 'thumbs/clasp/6')
        thumbs_clasp_6.scaleX = 0.7
        thumbs_clasp_6.scaleY = 0.7
        claspselect.add(thumbs_clasp_6)

        // patternthumb
        const patternthumb = this.add.sprite(76, 328, 'stampbook', 'thumbs/color/1')
        editor.add(patternthumb)

        // patternselect
        const patternselect = this.add.container(205, 261)
        patternselect.visible = false
        editor.add(patternselect)

        // patternselect_bg
        const patternselect_bg = this.add.image(51, 73, 'stampbook', 'editor_options')
        patternselect.add(patternselect_bg)

        // thumbs_pattern_1
        const thumbs_pattern_1 = this.add.image(0, 0, 'stampbook', 'thumbs/pattern/1')
        thumbs_pattern_1.scaleX = 0.7
        thumbs_pattern_1.scaleY = 0.7
        patternselect.add(thumbs_pattern_1)

        // thumbs_pattern_2
        const thumbs_pattern_2 = this.add.image(103, 0, 'stampbook', 'thumbs/pattern/2')
        thumbs_pattern_2.scaleX = 0.7
        thumbs_pattern_2.scaleY = 0.7
        patternselect.add(thumbs_pattern_2)

        // thumbs_pattern_3
        const thumbs_pattern_3 = this.add.image(0, 72, 'stampbook', 'thumbs/pattern/3')
        thumbs_pattern_3.scaleX = 0.7
        thumbs_pattern_3.scaleY = 0.7
        patternselect.add(thumbs_pattern_3)

        // thumbs_pattern_4
        const thumbs_pattern_4 = this.add.image(103, 72, 'stampbook', 'thumbs/pattern/4')
        thumbs_pattern_4.scaleX = 0.7
        thumbs_pattern_4.scaleY = 0.7
        patternselect.add(thumbs_pattern_4)

        // thumbs_pattern_5
        const thumbs_pattern_5 = this.add.image(0, 145, 'stampbook', 'thumbs/pattern/5')
        thumbs_pattern_5.scaleX = 0.7
        thumbs_pattern_5.scaleY = 0.7
        patternselect.add(thumbs_pattern_5)

        // thumbs_pattern_6
        const thumbs_pattern_6 = this.add.image(103, 144, 'stampbook', 'thumbs/pattern/6')
        thumbs_pattern_6.scaleX = 0.7
        thumbs_pattern_6.scaleY = 0.7
        patternselect.add(thumbs_pattern_6)

        // colorthumb
        const colorthumb = this.add.sprite(76, 215, 'stampbook', 'thumbs/color/1')
        editor.add(colorthumb)

        // colorselect
        const colorselect = this.add.container(205, 145)
        colorselect.visible = false
        editor.add(colorselect)

        // colorselect_bg
        const colorselect_bg = this.add.image(51, 73, 'stampbook', 'editor_options')
        colorselect.add(colorselect_bg)

        // thumbs_color_1
        const thumbs_color_1 = this.add.image(0, 0, 'stampbook', 'thumbs/color/1')
        thumbs_color_1.scaleX = 0.7
        thumbs_color_1.scaleY = 0.7
        colorselect.add(thumbs_color_1)

        // thumbs_color_2
        const thumbs_color_2 = this.add.image(103, 0, 'stampbook', 'thumbs/color/2')
        thumbs_color_2.scaleX = 0.7
        thumbs_color_2.scaleY = 0.7
        colorselect.add(thumbs_color_2)

        // thumbs_color_3
        const thumbs_color_3 = this.add.image(0, 72, 'stampbook', 'thumbs/color/3')
        thumbs_color_3.scaleX = 0.7
        thumbs_color_3.scaleY = 0.7
        colorselect.add(thumbs_color_3)

        // thumbs_color_4
        const thumbs_color_4 = this.add.image(103, 72, 'stampbook', 'thumbs/color/4')
        thumbs_color_4.scaleX = 0.7
        thumbs_color_4.scaleY = 0.7
        colorselect.add(thumbs_color_4)

        // thumbs_color_5
        const thumbs_color_5 = this.add.image(0, 145, 'stampbook', 'thumbs/color/5')
        thumbs_color_5.scaleX = 0.7
        thumbs_color_5.scaleY = 0.7
        colorselect.add(thumbs_color_5)

        // thumbs_color_6
        const thumbs_color_6 = this.add.image(103, 144, 'stampbook', 'thumbs/color/6')
        thumbs_color_6.scaleX = 0.7
        thumbs_color_6.scaleY = 0.7
        colorselect.add(thumbs_color_6)

        // save
        const save = this.add.image(1463, 899, 'stampbook', 'save')
        editor.add(save)

        // stampLayer
        const stampLayer = this.add.container(0, 0)

        // stampInfo
        const stampInfo = this.add.container(-190, 259)

        // stampInfoBg
        const stampInfoBg = this.add.ninePatchContainer(7, -112, 300, 170, 'stampbook', 'hover')
        stampInfoBg.marginLeft = 15
        stampInfoBg.marginTop = 10
        stampInfoBg.marginRight = 15
        stampInfoBg.marginBottom = 25
        stampInfo.add(stampInfoBg)

        // stampInfoTitle
        const stampInfoTitle = this.add.text(-143, -182, '', {})
        stampInfoTitle.text = 'Aunt Arctic'
        stampInfoTitle.setStyle({color: '#000000ff', fixedWidth: 300, fontFamily: 'Burbank Small', fontSize: '26px', fontStyle: 'bold'})
        stampInfoTitle.setPadding({left: 15, right: 15})
        stampInfo.add(stampInfoTitle)

        // stampInfoBody
        const stampInfoBody = this.add.text(-143, -147, '', {})
        stampInfoBody.text = 'Be in the same room as Aunt Arctic'
        stampInfoBody.setStyle({color: '#606060ff', fixedWidth: 300, fontFamily: 'Burbank Small', fontSize: '20px'})
        stampInfoBody.setPadding({left: 15, right: 15})
        stampInfoBody.setWordWrapWidth(270)
        stampInfo.add(stampInfoBody)

        // stampHovers
        const stampHovers = this.add.container(260, 270)
        stampHovers.visible = false

        // stampHover1
        const stampHover1 = this.add.rectangle(0, 0, 170, 150)
        stampHover1.fillColor = 47562
        stampHover1.fillAlpha = 0.5
        stampHovers.add(stampHover1)

        // stampHover2
        const stampHover2 = this.add.rectangle(170, 0, 170, 150)
        stampHover2.fillColor = 47562
        stampHover2.fillAlpha = 0.5
        stampHovers.add(stampHover2)

        // stampHover3
        const stampHover3 = this.add.rectangle(340, 0, 170, 150)
        stampHover3.fillColor = 47562
        stampHover3.fillAlpha = 0.5
        stampHovers.add(stampHover3)

        // stampHover4
        const stampHover4 = this.add.rectangle(510, 0, 170, 150)
        stampHover4.fillColor = 47562
        stampHover4.fillAlpha = 0.5
        stampHovers.add(stampHover4)

        // stampHover5
        const stampHover5 = this.add.rectangle(0, 150, 170, 150)
        stampHover5.fillColor = 47562
        stampHover5.fillAlpha = 0.5
        stampHovers.add(stampHover5)

        // stampHover6
        const stampHover6 = this.add.rectangle(170, 150, 170, 150)
        stampHover6.fillColor = 47562
        stampHover6.fillAlpha = 0.5
        stampHovers.add(stampHover6)

        // stampHover7
        const stampHover7 = this.add.rectangle(340, 150, 170, 150)
        stampHover7.fillColor = 47562
        stampHover7.fillAlpha = 0.5
        stampHovers.add(stampHover7)

        // stampHover8
        const stampHover8 = this.add.rectangle(510, 150, 170, 150)
        stampHover8.fillColor = 47562
        stampHover8.fillAlpha = 0.5
        stampHovers.add(stampHover8)

        // stampHover9
        const stampHover9 = this.add.rectangle(0, 300, 170, 150)
        stampHover9.fillColor = 47562
        stampHover9.fillAlpha = 0.5
        stampHovers.add(stampHover9)

        // stampHover10
        const stampHover10 = this.add.rectangle(170, 300, 170, 150)
        stampHover10.fillColor = 47562
        stampHover10.fillAlpha = 0.5
        stampHovers.add(stampHover10)

        // stampHover11
        const stampHover11 = this.add.rectangle(340, 300, 170, 150)
        stampHover11.fillColor = 47562
        stampHover11.fillAlpha = 0.5
        stampHovers.add(stampHover11)

        // stampHover12
        const stampHover12 = this.add.rectangle(510, 300, 170, 150)
        stampHover12.fillColor = 47562
        stampHover12.fillAlpha = 0.5
        stampHovers.add(stampHover12)

        // stampHover13
        const stampHover13 = this.add.rectangle(0, 450, 170, 150)
        stampHover13.fillColor = 47562
        stampHover13.fillAlpha = 0.5
        stampHovers.add(stampHover13)

        // stampHover14
        const stampHover14 = this.add.rectangle(170, 450, 170, 150)
        stampHover14.fillColor = 47562
        stampHover14.fillAlpha = 0.5
        stampHovers.add(stampHover14)

        // stampHover15
        const stampHover15 = this.add.rectangle(340, 450, 170, 150)
        stampHover15.fillColor = 47562
        stampHover15.fillAlpha = 0.5
        stampHovers.add(stampHover15)

        // stampHover16
        const stampHover16 = this.add.rectangle(510, 450, 170, 150)
        stampHover16.fillColor = 47562
        stampHover16.fillAlpha = 0.5
        stampHovers.add(stampHover16)

        // instructionsContainer
        const instructionsContainer = this.add.container(1005, 286)
        instructionsContainer.visible = false

        // contents_instruct
        const contents_instruct = this.add.image(161, 164, 'stampbook', 'contents-instruct')
        instructionsContainer.add(contents_instruct)

        // stampbookGuide
        const stampbookGuide = this.add.text(0, 0, '', {})
        stampbookGuide.setOrigin(0, 0.5)
        stampbookGuide.text = 'Stamp Book Guide'
        stampbookGuide.setStyle({color: '#585858ff', fixedWidth: 330, fixedHeight: 50, fontFamily: 'Burbank Small', fontSize: '38px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide)

        // stampbookGuide_1
        const stampbookGuide_1 = this.add.text(45, 88, '', {})
        stampbookGuide_1.setOrigin(0, 0.5)
        stampbookGuide_1.text = 'Easy'
        stampbookGuide_1.setStyle({color: '#585858ff', fixedWidth: 200, fixedHeight: 30, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide_1)

        // stampbookGuide_2
        const stampbookGuide_2 = this.add.text(45, 135, '', {})
        stampbookGuide_2.setOrigin(0, 0.5)
        stampbookGuide_2.text = 'Medium'
        stampbookGuide_2.setStyle({color: '#585858ff', fixedWidth: 200, fixedHeight: 30, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide_2)

        // stampbookGuide_3
        const stampbookGuide_3 = this.add.text(45, 182, '', {})
        stampbookGuide_3.setOrigin(0, 0.5)
        stampbookGuide_3.text = 'Hard'
        stampbookGuide_3.setStyle({color: '#585858ff', fixedWidth: 200, fixedHeight: 30, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide_3)

        // stampbookGuide_4
        const stampbookGuide_4 = this.add.text(45, 230, '', {})
        stampbookGuide_4.setOrigin(0, 0.5)
        stampbookGuide_4.text = 'Extreme'
        stampbookGuide_4.setStyle({color: '#585858ff', fixedWidth: 200, fixedHeight: 30, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide_4)

        // stampbookGuide_5
        const stampbookGuide_5 = this.add.text(45, 279, '', {})
        stampbookGuide_5.setOrigin(0, 0.5)
        stampbookGuide_5.text = 'Edit Stamp Book'
        stampbookGuide_5.setStyle({color: '#585858ff', fixedWidth: 200, fixedHeight: 30, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide_5)

        // stampbookGuide_6
        const stampbookGuide_6 = this.add.text(45, 328, '', {})
        stampbookGuide_6.setOrigin(0, 0.5)
        stampbookGuide_6.text = 'Save Stamp Book'
        stampbookGuide_6.setStyle({color: '#585858ff', fixedWidth: 200, fixedHeight: 30, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        instructionsContainer.add(stampbookGuide_6)

        // lists
        const pages = [front, page]
        const indexButtons = [aquaButton, astroButton, jitsuButton, fireJitsuButton, snowJitsuButton, waterJitsuButton, cartSurferButton, wavesButton, fishingButton, jPAButton, missionsButton, pizzatronButton, launchButton, rescueButton, pufflescapeButton, smoothieButton, sysDefButton, thinIceButton, huntButton, huntButton_1]
        const indexIcons = [aquaIcon, astroIcon, jitsuIcon, fireJitsuIcon, snowJitsuIcon, waterJistuIcon, cartSurferIcon, wavesIcon, fishingIcon, jPAIcon, missionsIcon, pizzatronIcon, launchIcon, rescueIcon, pufflescapeIcon, smoothieIcon, sysDefIcon, thinIceIcon, huntIcon, huntIcon_1]
        const indexText = [aquaText, astroText, jitsuText, fireJitsuText, snowJitsuText, waterJitsuText, cartSurferText, wavesText, fishingText, jPAText, missionsText, pizzatronText, launchText, rescueText, pufflescapeText, smoothieText, sysDefText, thinIceText, huntText, huntText_1]

        // blocker (components)
        new Interactive(blocker)

        // close (components)
        const closeButton = new Button(close)
        closeButton.spriteName = 'close'
        closeButton.callback = () => this.scene.stop()

        // page_back (components)
        const page_backSimpleButton = new SimpleButton(page_back)
        page_backSimpleButton.callback = () => this.prevPage()

        // page_forward (components)
        const page_forwardSimpleButton = new SimpleButton(page_forward)
        page_forwardSimpleButton.callback = () => this.nextPage()

        // sidebutton (components)
        const sidebuttonButton = new Button(sidebutton)
        sidebuttonButton.spriteName = 'sidebutton'
        sidebuttonButton.callback = () => this.goToPage(this.crumbs.stampbook['pins'])

        // sidebutton_1 (components)
        const sidebutton_1Button = new Button(sidebutton_1)
        sidebutton_1Button.spriteName = 'sidebutton'
        sidebutton_1Button.callback = () => this.goToPage(this.crumbs.stampbook['activities'])

        // sidebutton_2 (components)
        const sidebutton_2Button = new Button(sidebutton_2)
        sidebutton_2Button.spriteName = 'sidebutton'
        sidebutton_2Button.callback = () => this.goToPage(this.crumbs.stampbook['games'])

        // sidebutton_3 (components)
        const sidebutton_3Button = new Button(sidebutton_3)
        sidebutton_3Button.spriteName = 'sidebutton'
        sidebutton_3Button.callback = () => this.goToPage(this.crumbs.stampbook['events'])

        // down_btn (components)
        const down_btnButton = new Button(down_btn)
        down_btnButton.spriteName = 'grey-button'
        down_btnButton.callback = () => this.nextStampPage()

        // up_btn (components)
        const up_btnButton = new Button(up_btn)
        up_btnButton.spriteName = 'grey-button'
        up_btnButton.callback = () => this.prevStampPage()

        // clasp_bg (components)
        const clasp_bgSimpleButton = new SimpleButton(clasp_bg)
        clasp_bgSimpleButton.callback = () => this.nextPage()

        // edit (components)
        const editButton = new Button(edit)
        editButton.spriteName = 'edit'
        editButton.callback = () => this.editStampbook()
        editButton.activeFrame = false

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button)
        grey_buttonButton.spriteName = 'grey-button'
        grey_buttonButton.callback = () => this.scene.stop('Stampbook')

        // claspthumb (components)
        const claspthumbSimpleButton = new SimpleButton(claspthumb)
        claspthumbSimpleButton.callback = () => this.openClasp()

        // thumbs_clasp_1 (components)
        const thumbs_clasp_1SimpleButton = new SimpleButton(thumbs_clasp_1)
        thumbs_clasp_1SimpleButton.callback = () => this.changeClasp(1)

        // thumbs_clasp_2 (components)
        const thumbs_clasp_2SimpleButton = new SimpleButton(thumbs_clasp_2)
        thumbs_clasp_2SimpleButton.callback = () => this.changeClasp(2)

        // thumbs_clasp_3 (components)
        const thumbs_clasp_3SimpleButton = new SimpleButton(thumbs_clasp_3)
        thumbs_clasp_3SimpleButton.callback = () => this.changeClasp(3)

        // thumbs_clasp_4 (components)
        const thumbs_clasp_4SimpleButton = new SimpleButton(thumbs_clasp_4)
        thumbs_clasp_4SimpleButton.callback = () => this.changeClasp(4)

        // thumbs_clasp_5 (components)
        const thumbs_clasp_5SimpleButton = new SimpleButton(thumbs_clasp_5)
        thumbs_clasp_5SimpleButton.callback = () => this.changeClasp(5)

        // thumbs_clasp_6 (components)
        const thumbs_clasp_6SimpleButton = new SimpleButton(thumbs_clasp_6)
        thumbs_clasp_6SimpleButton.callback = () => this.changeClasp(6)

        // patternthumb (components)
        const patternthumbSimpleButton = new SimpleButton(patternthumb)
        patternthumbSimpleButton.callback = () => this.openPattern()

        // thumbs_pattern_1 (components)
        const thumbs_pattern_1SimpleButton = new SimpleButton(thumbs_pattern_1)
        thumbs_pattern_1SimpleButton.callback = () => this.changePattern(1)

        // thumbs_pattern_2 (components)
        const thumbs_pattern_2SimpleButton = new SimpleButton(thumbs_pattern_2)
        thumbs_pattern_2SimpleButton.callback = () => this.changePattern(2)

        // thumbs_pattern_3 (components)
        const thumbs_pattern_3SimpleButton = new SimpleButton(thumbs_pattern_3)
        thumbs_pattern_3SimpleButton.callback = () => this.changePattern(3)

        // thumbs_pattern_4 (components)
        const thumbs_pattern_4SimpleButton = new SimpleButton(thumbs_pattern_4)
        thumbs_pattern_4SimpleButton.callback = () => this.changePattern(4)

        // thumbs_pattern_5 (components)
        const thumbs_pattern_5SimpleButton = new SimpleButton(thumbs_pattern_5)
        thumbs_pattern_5SimpleButton.callback = () => this.changePattern(5)

        // thumbs_pattern_6 (components)
        const thumbs_pattern_6SimpleButton = new SimpleButton(thumbs_pattern_6)
        thumbs_pattern_6SimpleButton.callback = () => this.changePattern(6)

        // colorthumb (components)
        const colorthumbSimpleButton = new SimpleButton(colorthumb)
        colorthumbSimpleButton.callback = () => this.openColour()

        // thumbs_color_1 (components)
        const thumbs_color_1SimpleButton = new SimpleButton(thumbs_color_1)
        thumbs_color_1SimpleButton.callback = () => this.changeColor(1)

        // thumbs_color_2 (components)
        const thumbs_color_2SimpleButton = new SimpleButton(thumbs_color_2)
        thumbs_color_2SimpleButton.callback = () => this.changeColor(2)

        // thumbs_color_3 (components)
        const thumbs_color_3SimpleButton = new SimpleButton(thumbs_color_3)
        thumbs_color_3SimpleButton.callback = () => this.changeColor(3)

        // thumbs_color_4 (components)
        const thumbs_color_4SimpleButton = new SimpleButton(thumbs_color_4)
        thumbs_color_4SimpleButton.callback = () => this.changeColor(4)

        // thumbs_color_5 (components)
        const thumbs_color_5SimpleButton = new SimpleButton(thumbs_color_5)
        thumbs_color_5SimpleButton.callback = () => this.changeColor(5)

        // thumbs_color_6 (components)
        const thumbs_color_6SimpleButton = new SimpleButton(thumbs_color_6)
        thumbs_color_6SimpleButton.callback = () => this.changeColor(6)

        // save (components)
        const saveSimpleButton = new SimpleButton(save)
        saveSimpleButton.callback = () => this.saveStampbook()

        // stampHover1 (components)
        const stampHover1SimpleButton = new SimpleButton(stampHover1)
        stampHover1SimpleButton.hoverCallback = () => this.onStampOver(0)
        stampHover1SimpleButton.hoverOutCallback = () => this.onStampOut(0)

        // stampHover2 (components)
        const stampHover2SimpleButton = new SimpleButton(stampHover2)
        stampHover2SimpleButton.hoverCallback = () => this.onStampOver(1)
        stampHover2SimpleButton.hoverOutCallback = () => this.onStampOut(1)

        // stampHover3 (components)
        const stampHover3SimpleButton = new SimpleButton(stampHover3)
        stampHover3SimpleButton.hoverCallback = () => this.onStampOver(2)
        stampHover3SimpleButton.hoverOutCallback = () => this.onStampOut(2)

        // stampHover4 (components)
        const stampHover4SimpleButton = new SimpleButton(stampHover4)
        stampHover4SimpleButton.hoverCallback = () => this.onStampOver(3)
        stampHover4SimpleButton.hoverOutCallback = () => this.onStampOut(3)

        // stampHover5 (components)
        const stampHover5SimpleButton = new SimpleButton(stampHover5)
        stampHover5SimpleButton.hoverCallback = () => this.onStampOver(4)
        stampHover5SimpleButton.hoverOutCallback = () => this.onStampOut(4)

        // stampHover6 (components)
        const stampHover6SimpleButton = new SimpleButton(stampHover6)
        stampHover6SimpleButton.hoverCallback = () => this.onStampOver(5)
        stampHover6SimpleButton.hoverOutCallback = () => this.onStampOut(5)

        // stampHover7 (components)
        const stampHover7SimpleButton = new SimpleButton(stampHover7)
        stampHover7SimpleButton.hoverCallback = () => this.onStampOver(6)
        stampHover7SimpleButton.hoverOutCallback = () => this.onStampOut(6)

        // stampHover8 (components)
        const stampHover8SimpleButton = new SimpleButton(stampHover8)
        stampHover8SimpleButton.hoverCallback = () => this.onStampOver(7)
        stampHover8SimpleButton.hoverOutCallback = () => this.onStampOut(7)

        // stampHover9 (components)
        const stampHover9SimpleButton = new SimpleButton(stampHover9)
        stampHover9SimpleButton.hoverCallback = () => this.onStampOver(8)
        stampHover9SimpleButton.hoverOutCallback = () => this.onStampOut(8)

        // stampHover10 (components)
        const stampHover10SimpleButton = new SimpleButton(stampHover10)
        stampHover10SimpleButton.hoverCallback = () => this.onStampOver(9)
        stampHover10SimpleButton.hoverOutCallback = () => this.onStampOut(9)

        // stampHover11 (components)
        const stampHover11SimpleButton = new SimpleButton(stampHover11)
        stampHover11SimpleButton.hoverCallback = () => this.onStampOver(10)
        stampHover11SimpleButton.hoverOutCallback = () => this.onStampOut(10)

        // stampHover12 (components)
        const stampHover12SimpleButton = new SimpleButton(stampHover12)
        stampHover12SimpleButton.hoverCallback = () => this.onStampOver(11)
        stampHover12SimpleButton.hoverOutCallback = () => this.onStampOut(11)

        // stampHover13 (components)
        const stampHover13SimpleButton = new SimpleButton(stampHover13)
        stampHover13SimpleButton.hoverCallback = () => this.onStampOver(12)
        stampHover13SimpleButton.hoverOutCallback = () => this.onStampOut(12)

        // stampHover14 (components)
        const stampHover14SimpleButton = new SimpleButton(stampHover14)
        stampHover14SimpleButton.hoverCallback = () => this.onStampOver(13)
        stampHover14SimpleButton.hoverOutCallback = () => this.onStampOut(13)

        // stampHover15 (components)
        const stampHover15SimpleButton = new SimpleButton(stampHover15)
        stampHover15SimpleButton.hoverCallback = () => this.onStampOver(14)
        stampHover15SimpleButton.hoverOutCallback = () => this.onStampOut(14)

        // stampHover16 (components)
        const stampHover16SimpleButton = new SimpleButton(stampHover16)
        stampHover16SimpleButton.hoverCallback = () => this.onStampOver(15)
        stampHover16SimpleButton.hoverOutCallback = () => this.onStampOut(15)

        // stampbookGuide (components)
        const stampbookGuideLocalisedString = new LocalisedString(stampbookGuide)
        stampbookGuideLocalisedString.id = 'stampbookguide'

        // stampbookGuide_1 (components)
        const stampbookGuide_1LocalisedString = new LocalisedString(stampbookGuide_1)
        stampbookGuide_1LocalisedString.id = 'easy'

        // stampbookGuide_2 (components)
        const stampbookGuide_2LocalisedString = new LocalisedString(stampbookGuide_2)
        stampbookGuide_2LocalisedString.id = 'medium'

        // stampbookGuide_3 (components)
        const stampbookGuide_3LocalisedString = new LocalisedString(stampbookGuide_3)
        stampbookGuide_3LocalisedString.id = 'hard'

        // stampbookGuide_4 (components)
        const stampbookGuide_4LocalisedString = new LocalisedString(stampbookGuide_4)
        stampbookGuide_4LocalisedString.id = 'extreme'

        // stampbookGuide_5 (components)
        const stampbookGuide_5LocalisedString = new LocalisedString(stampbookGuide_5)
        stampbookGuide_5LocalisedString.id = 'editstampbook'

        // stampbookGuide_6 (components)
        const stampbookGuide_6LocalisedString = new LocalisedString(stampbookGuide_6)
        stampbookGuide_6LocalisedString.id = 'savestampbook'

        this.blocker = blocker
        this.editor_background = editor_background
        this.bgcontainer = bgcontainer
        this.bg = bg
        this.close = close
        this.page_back = page_back
        this.page_forward = page_forward
        this.page = page
        this.pagebg = pagebg
        this.aquaText = aquaText
        this.aquaIcon = aquaIcon
        this.astroText = astroText
        this.astroIcon = astroIcon
        this.jitsuText = jitsuText
        this.jitsuIcon = jitsuIcon
        this.fireJitsuText = fireJitsuText
        this.fireJitsuIcon = fireJitsuIcon
        this.snowJitsuText = snowJitsuText
        this.snowJitsuIcon = snowJitsuIcon
        this.waterJitsuText = waterJitsuText
        this.waterJistuIcon = waterJistuIcon
        this.cartSurferText = cartSurferText
        this.cartSurferIcon = cartSurferIcon
        this.wavesText = wavesText
        this.wavesIcon = wavesIcon
        this.fishingText = fishingText
        this.fishingIcon = fishingIcon
        this.jPAText = jPAText
        this.jPAIcon = jPAIcon
        this.missionsText = missionsText
        this.missionsIcon = missionsIcon
        this.pizzatronText = pizzatronText
        this.pizzatronIcon = pizzatronIcon
        this.launchText = launchText
        this.launchIcon = launchIcon
        this.rescueText = rescueText
        this.rescueIcon = rescueIcon
        this.pufflescapeText = pufflescapeText
        this.pufflescapeIcon = pufflescapeIcon
        this.smoothieText = smoothieText
        this.smoothieIcon = smoothieIcon
        this.sysDefText = sysDefText
        this.sysDefIcon = sysDefIcon
        this.thinIceText = thinIceText
        this.thinIceIcon = thinIceIcon
        this.huntText = huntText
        this.huntIcon = huntIcon
        this.huntText_1 = huntText_1
        this.huntIcon_1 = huntIcon_1
        this.pagenum = pagenum
        this.stampnum = stampnum
        this.stampcategory = stampcategory
        this.pagename = pagename
        this.pageicon = pageicon
        this.down_btn = down_btn
        this.down_arrow = down_arrow
        this.up_btn = up_btn
        this.up_arrow = up_arrow
        this.dividers = dividers
        this.front = front
        this.cover = cover
        this.wordmark = wordmark
        this.wordmark_overlay = wordmark_overlay
        this.pattern = pattern
        this.clasp_bg = clasp_bg
        this.clasp = clasp
        this.total = total
        this.username = username
        this.edit = edit
        this.editor = editor
        this.editor_top = editor_top
        this.editor_side = editor_side
        this.claspthumb = claspthumb
        this.claspselect = claspselect
        this.claspselect_bg = claspselect_bg
        this.thumbs_clasp_1 = thumbs_clasp_1
        this.thumbs_clasp_2 = thumbs_clasp_2
        this.thumbs_clasp_3 = thumbs_clasp_3
        this.thumbs_clasp_4 = thumbs_clasp_4
        this.thumbs_clasp_5 = thumbs_clasp_5
        this.thumbs_clasp_6 = thumbs_clasp_6
        this.patternthumb = patternthumb
        this.patternselect = patternselect
        this.patternselect_bg = patternselect_bg
        this.thumbs_pattern_1 = thumbs_pattern_1
        this.thumbs_pattern_2 = thumbs_pattern_2
        this.thumbs_pattern_3 = thumbs_pattern_3
        this.thumbs_pattern_4 = thumbs_pattern_4
        this.thumbs_pattern_5 = thumbs_pattern_5
        this.thumbs_pattern_6 = thumbs_pattern_6
        this.colorthumb = colorthumb
        this.colorselect = colorselect
        this.colorselect_bg = colorselect_bg
        this.thumbs_color_1 = thumbs_color_1
        this.thumbs_color_2 = thumbs_color_2
        this.thumbs_color_3 = thumbs_color_3
        this.thumbs_color_4 = thumbs_color_4
        this.thumbs_color_5 = thumbs_color_5
        this.thumbs_color_6 = thumbs_color_6
        this.save = save
        this.stampLayer = stampLayer
        this.stampInfo = stampInfo
        this.stampInfoBg = stampInfoBg
        this.stampInfoTitle = stampInfoTitle
        this.stampInfoBody = stampInfoBody
        this.stampHovers = stampHovers
        this.instructionsContainer = instructionsContainer
        this.stampbookGuide = stampbookGuide
        this.stampbookGuide_1 = stampbookGuide_1
        this.stampbookGuide_2 = stampbookGuide_2
        this.stampbookGuide_3 = stampbookGuide_3
        this.stampbookGuide_4 = stampbookGuide_4
        this.stampbookGuide_5 = stampbookGuide_5
        this.stampbookGuide_6 = stampbookGuide_6
        this.pages = pages
        this.indexButtons = indexButtons
        this.indexIcons = indexIcons
        this.indexText = indexText

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    blocker
    /** @type {Phaser.GameObjects.Sprite} */
    editor_background
    /** @type {Phaser.GameObjects.Container} */
    bgcontainer
    /** @type {Phaser.GameObjects.Image} */
    bg
    /** @type {Phaser.GameObjects.Image} */
    close
    /** @type {Phaser.GameObjects.Image} */
    page_back
    /** @type {Phaser.GameObjects.Image} */
    page_forward
    /** @type {Phaser.GameObjects.Container} */
    page
    /** @type {Phaser.GameObjects.Image} */
    pagebg
    /** @type {Phaser.GameObjects.Text} */
    aquaText
    /** @type {Phaser.GameObjects.Image} */
    aquaIcon
    /** @type {Phaser.GameObjects.Text} */
    astroText
    /** @type {Phaser.GameObjects.Image} */
    astroIcon
    /** @type {Phaser.GameObjects.Text} */
    jitsuText
    /** @type {Phaser.GameObjects.Image} */
    jitsuIcon
    /** @type {Phaser.GameObjects.Text} */
    fireJitsuText
    /** @type {Phaser.GameObjects.Image} */
    fireJitsuIcon
    /** @type {Phaser.GameObjects.Text} */
    snowJitsuText
    /** @type {Phaser.GameObjects.Image} */
    snowJitsuIcon
    /** @type {Phaser.GameObjects.Text} */
    waterJitsuText
    /** @type {Phaser.GameObjects.Image} */
    waterJistuIcon
    /** @type {Phaser.GameObjects.Text} */
    cartSurferText
    /** @type {Phaser.GameObjects.Image} */
    cartSurferIcon
    /** @type {Phaser.GameObjects.Text} */
    wavesText
    /** @type {Phaser.GameObjects.Image} */
    wavesIcon
    /** @type {Phaser.GameObjects.Text} */
    fishingText
    /** @type {Phaser.GameObjects.Image} */
    fishingIcon
    /** @type {Phaser.GameObjects.Text} */
    jPAText
    /** @type {Phaser.GameObjects.Image} */
    jPAIcon
    /** @type {Phaser.GameObjects.Text} */
    missionsText
    /** @type {Phaser.GameObjects.Image} */
    missionsIcon
    /** @type {Phaser.GameObjects.Text} */
    pizzatronText
    /** @type {Phaser.GameObjects.Image} */
    pizzatronIcon
    /** @type {Phaser.GameObjects.Text} */
    launchText
    /** @type {Phaser.GameObjects.Image} */
    launchIcon
    /** @type {Phaser.GameObjects.Text} */
    rescueText
    /** @type {Phaser.GameObjects.Image} */
    rescueIcon
    /** @type {Phaser.GameObjects.Text} */
    pufflescapeText
    /** @type {Phaser.GameObjects.Image} */
    pufflescapeIcon
    /** @type {Phaser.GameObjects.Text} */
    smoothieText
    /** @type {Phaser.GameObjects.Image} */
    smoothieIcon
    /** @type {Phaser.GameObjects.Text} */
    sysDefText
    /** @type {Phaser.GameObjects.Image} */
    sysDefIcon
    /** @type {Phaser.GameObjects.Text} */
    thinIceText
    /** @type {Phaser.GameObjects.Image} */
    thinIceIcon
    /** @type {Phaser.GameObjects.Text} */
    huntText
    /** @type {Phaser.GameObjects.Image} */
    huntIcon
    /** @type {Phaser.GameObjects.Text} */
    huntText_1
    /** @type {Phaser.GameObjects.Image} */
    huntIcon_1
    /** @type {Phaser.GameObjects.Text} */
    pagenum
    /** @type {Phaser.GameObjects.Text} */
    stampnum
    /** @type {Phaser.GameObjects.Text} */
    stampcategory
    /** @type {Phaser.GameObjects.Text} */
    pagename
    /** @type {Phaser.GameObjects.Image} */
    pageicon
    /** @type {Phaser.GameObjects.Image} */
    down_btn
    /** @type {Phaser.GameObjects.Image} */
    down_arrow
    /** @type {Phaser.GameObjects.Image} */
    up_btn
    /** @type {Phaser.GameObjects.Image} */
    up_arrow
    /** @type {Phaser.GameObjects.Image} */
    dividers
    /** @type {Phaser.GameObjects.Container} */
    front
    /** @type {Phaser.GameObjects.Sprite} */
    cover
    /** @type {Phaser.GameObjects.Image} */
    wordmark
    /** @type {Phaser.GameObjects.Image} */
    wordmark_overlay
    /** @type {Phaser.GameObjects.Sprite} */
    pattern
    /** @type {Phaser.GameObjects.Sprite} */
    clasp_bg
    /** @type {Phaser.GameObjects.Sprite} */
    clasp
    /** @type {Phaser.GameObjects.Text} */
    total
    /** @type {Phaser.GameObjects.Text} */
    username
    /** @type {Phaser.GameObjects.Sprite} */
    edit
    /** @type {Phaser.GameObjects.Container} */
    editor
    /** @type {Phaser.GameObjects.Sprite} */
    editor_top
    /** @type {Phaser.GameObjects.Sprite} */
    editor_side
    /** @type {Phaser.GameObjects.Sprite} */
    claspthumb
    /** @type {Phaser.GameObjects.Container} */
    claspselect
    /** @type {Phaser.GameObjects.Image} */
    claspselect_bg
    /** @type {Phaser.GameObjects.Image} */
    thumbs_clasp_1
    /** @type {Phaser.GameObjects.Image} */
    thumbs_clasp_2
    /** @type {Phaser.GameObjects.Image} */
    thumbs_clasp_3
    /** @type {Phaser.GameObjects.Image} */
    thumbs_clasp_4
    /** @type {Phaser.GameObjects.Image} */
    thumbs_clasp_5
    /** @type {Phaser.GameObjects.Image} */
    thumbs_clasp_6
    /** @type {Phaser.GameObjects.Sprite} */
    patternthumb
    /** @type {Phaser.GameObjects.Container} */
    patternselect
    /** @type {Phaser.GameObjects.Image} */
    patternselect_bg
    /** @type {Phaser.GameObjects.Image} */
    thumbs_pattern_1
    /** @type {Phaser.GameObjects.Image} */
    thumbs_pattern_2
    /** @type {Phaser.GameObjects.Image} */
    thumbs_pattern_3
    /** @type {Phaser.GameObjects.Image} */
    thumbs_pattern_4
    /** @type {Phaser.GameObjects.Image} */
    thumbs_pattern_5
    /** @type {Phaser.GameObjects.Image} */
    thumbs_pattern_6
    /** @type {Phaser.GameObjects.Sprite} */
    colorthumb
    /** @type {Phaser.GameObjects.Container} */
    colorselect
    /** @type {Phaser.GameObjects.Image} */
    colorselect_bg
    /** @type {Phaser.GameObjects.Image} */
    thumbs_color_1
    /** @type {Phaser.GameObjects.Image} */
    thumbs_color_2
    /** @type {Phaser.GameObjects.Image} */
    thumbs_color_3
    /** @type {Phaser.GameObjects.Image} */
    thumbs_color_4
    /** @type {Phaser.GameObjects.Image} */
    thumbs_color_5
    /** @type {Phaser.GameObjects.Image} */
    thumbs_color_6
    /** @type {Phaser.GameObjects.Image} */
    save
    /** @type {Phaser.GameObjects.Container} */
    stampLayer
    /** @type {Phaser.GameObjects.Container} */
    stampInfo
    /** @type {NinePatchContainer} */
    stampInfoBg
    /** @type {Phaser.GameObjects.Text} */
    stampInfoTitle
    /** @type {Phaser.GameObjects.Text} */
    stampInfoBody
    /** @type {Phaser.GameObjects.Container} */
    stampHovers
    /** @type {Phaser.GameObjects.Container} */
    instructionsContainer
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide_1
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide_2
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide_3
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide_4
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide_5
    /** @type {Phaser.GameObjects.Text} */
    stampbookGuide_6
    /** @type {Phaser.GameObjects.Container[]} */
    pages
    /** @type {Phaser.GameObjects.Rectangle[]} */
    indexButtons
    /** @type {Phaser.GameObjects.Image[]} */
    indexIcons
    /** @type {Phaser.GameObjects.Text[]} */
    indexText

    /* START-USER-CODE */

    // Write your code here

    get highlightColors() {
        return {
            1: '#F4B851',
            2: '#A8DA6E',
            3: '#FFAB46',
            4: '#00BCD2',
            5: '#FF60D0',
            6: '#939496',
        }
    }

    get tintColors() {
        return {
            1: 0xe47652,
            2: 0x888be8,
            3: 0xeddbad,
            4: 0xd0e9ef,
            5: 0xe2bfe3,
            6: 0xffffff,
        }
    }

    create() {
        this.interface.stampbook = this
        this.pinLoader = new PinLoader(this)
        this.key = 'Stampbook'
        this.id = this.interface.stampbookId
        this._create()

        if (this.id == this.shell.client.id) {
            this.initStampbook({}, true)
        } else {
            this.airtower.sendXt('s#gb', this.id)
            this.edit.visible = false
        }

        this.stamps = []

        this.pinLoader = new PinLoader(this)

        this.pins = {}

        this.pageIndex = 0
    }

    initStampbook(args, isPlayer) {
        this.colorId = isPlayer ? this.shell.client.stampbookColor : args.color
        this.claspId = isPlayer ? this.shell.client.stampbookClasp : args.clasp
        this.patternId = isPlayer ? this.shell.client.stampbookPattern : args.pattern

        this.changeClasp(this.claspId)
        this.changePattern(this.patternId)
        this.changeColor(this.colorId)

        this.stampsEarned = isPlayer ? this.shell.client.stamps : args.stamps
        for (let s in this.stampsEarned) {
            this.stampsEarned[s] = parseInt(this.stampsEarned[s])
        }
        this.username.text = isPlayer ? this.shell.client.penguin.username : args.username

        this.total.text = `Total Stamps ${this.getTotalStamps()[1]}/${this.getTotalStamps()[0]}`
    }

    changeClasp(id) {
        this.claspId = id
        this.clasp.setFrame('clasp/' + id)
        this.claspthumb.setFrame('thumbs/clasp/' + id)
        this.claspselect.visible = false
    }

    changePattern(id) {
        if (id == 0 || id == this.patternId) {
            this.patternId = 0
            this.pattern.visible = false
            this.patternthumb.setFrame('thumbs/color/1')
        } else {
            this.patternId = id
            this.pattern.setFrame('pattern/' + id)
            this.pattern.visible = true
            this.patternthumb.setFrame('thumbs/pattern/' + id)
        }
        this.patternselect.visible = false
    }

    changeColor(id) {
        this.username.setStyle({fill: this.highlightColors[id]})
        this.total.setStyle({fill: this.highlightColors[id]})
        this.wordmark.tint = this.tintColors[id]
        this.wordmark.tintFill = true
        this.wordmark_overlay.tint = this.tintColors[id]
        this.pattern.tint = this.tintColors[id]
        this.colorId = id
        this.cover.setFrame('colour/' + id)
        this.colorthumb.setFrame('thumbs/color/' + id)
        this.colorselect.visible = false
    }

    openClasp() {
        this.hideAll()
        this.claspselect.visible = true
    }

    openColour() {
        this.hideAll()
        this.colorselect.visible = true
    }

    openPattern() {
        this.hideAll()
        this.patternselect.visible = true
    }

    hideAll() {
        this.claspselect.visible = false
        this.colorselect.visible = false
        this.patternselect.visible = false
    }

    editStampbook() {
        this.editor_background.visible = true
        this.editor.visible = true
        this.edit.visible = false
    }

    saveStampbook() {
        this.airtower.sendXt('st#sv', `${this.colorId}%${this.patternId}%${this.claspId}`)
        this.shell.client.stampbookColor = this.colorId
        this.shell.client.stampbookPattern = this.patternId
        this.shell.client.stampbookClasp = this.claspId
        this.editor_background.visible = false
        this.editor.visible = false
        this.edit.visible = true
    }

    addPageStamps() {
        this.stampPage = 0

        if (this.pageIndex == this.crumbs.stampbook.enabledPages.length - 1) {
        }

        this.stamps = []

        let page = this.crumbs.stampbook[this.crumbs.stampbook.enabledPages[this.pageIndex]]
        let stamps = this.getPageStamps(page)

        if (!stamps || stamps.length == 0) {
            this.stampHovers.visible = false
        } else {
            this.stampHovers.visible = true
        }

        for (var i = 0; i < stamps.length; i++) {
            let posIndex = i % 16
            let stampVisibility = i < 16
            let id = stamps[i]
            let x = 260 + (posIndex % 4) * 170
            let y = 270 + Math.floor(posIndex / 4) * 150
            let stamp = new BookStamp(this, x, y, id)
            this.stampLayer.add(stamp)
            this.stamps.push(stamp)
            stamp.visible = stampVisibility
        }

        if (this.stamps.length > 16) {
            this.down_arrow.visible = true
            this.down_btn.visible = true
        }
    }

    getPageStamps(page) {
        let stamps = []
        if (!page.group) {
            return stamps
        }
        for (let stamp in this.crumbs.stamps) {
            if (this.crumbs.stamps[stamp].groupid == page.group && !this.crumbs.stamps[stamp].disabled) {
                stamps.push(parseInt(stamp))
            }
        }
        return stamps
    }

    addPin(pin, xpos, ypos, visible) {
        this.pins[pin] = this.add.image(xpos, ypos, 'clothing/icon/' + pin)
        this.airtower.sendXt('i#gi', `items%${pin}`)
        this.pins[pin].setInteractive({
            cursor: 'pointer',
        })
        this.pins[pin].on('pointerover', () => {
            this.stampInfo.visible = true
            this.stampInfo.x = xpos
            this.stampInfo.y = ypos

            this.stampInfoTitle.text = this.crumbs.items[pin].name
            let releaseDate = 'Never'
            if (this.crumbs.items[pin].releases && this.crumbs.items[pin].releases.length > 0) {
                let rDate = new Date(parseInt(this.crumbs.items[pin].releases[0].from))
                let month = this.crumbs.getString(`month${rDate.getMonth()}`)
                releaseDate = `${month} ${rDate.getDate()}/${rDate.getFullYear()}`
            }
            this.stampInfoBody.text = `Released: ${releaseDate}.`
        })
        this.pins[pin].on('pointerout', () => {
            this.stampInfo.visible = false
        })
        this.pins[pin].visible = visible
        this.stampLayer.add(this.pins[pin])
    }

    getCategoryStamps(category) {
        let categoryStamps = []
        let ownedCategoryStamps = []
        for (var stamp in this.crumbs.stamps) {
            if (this.crumbs.stamps[stamp].groupid == category && !this.crumbs.stamps[stamp].disabled) {
                categoryStamps.push(this.crumbs.stamps[stamp])
                if (this.stampsEarned.includes(parseInt(stamp))) {
                    ownedCategoryStamps.push(this.crumbs.stamps[stamp])
                }
            }
        }
        return [categoryStamps.length, ownedCategoryStamps.length]
    }

    getTotalStamps() {
        let groups = []
        let totalStamps = 0
        let ownedStamps = 0
        for (let page of this.crumbs.stampbook.enabledPages) {
            if (this.crumbs.stampbook[page].group) groups.push(this.crumbs.stampbook[page].group)
        }
        for (let group of groups) {
            let cgs = this.getCategoryStamps(group)
            totalStamps += cgs[0]
            ownedStamps += cgs[1]
        }
        return [totalStamps, ownedStamps]
    }

    btnOver(btntext) {
        btntext.setStyle({color: '#3c3c3cff'})
    }

    btnOut(btntext) {
        btntext.setStyle({color: '#5b5b5bff'})
    }

    onStampOver(pos) {
        let index = pos + this.stampPage * 16
        if (!this.stamps[index]) return

        this.stampInfo.visible = true
        this.stampInfo.x = 260 + (pos % 4) * 170
        this.stampInfo.y = 270 + Math.floor(pos / 4) * 150

        this.stampInfoTitle.text = this.crumbs.stamps[this.stamps[index].id].name
        this.stampInfoBody.text = this.crumbs.stamps[this.stamps[index].id].description
    }

    onStampOut() {
        this.stampInfo.visible = false
    }

    nextPage() {
        if (this.crumbs.stampbook.enabledPages[this.pageIndex + 1]) {
            this.pageIndex++
        } else {
            return
        }
        this.showPage()
    }

    prevPage() {
        if (this.crumbs.stampbook.enabledPages[this.pageIndex - 1]) {
            this.pageIndex--
        } else {
            return
        }
        this.showPage()
    }

    showPage() {
        for (var x in this.stamps) {
            this.stamps[x].destroy()
        }

        for (var txt of this.indexText) {
            txt.visible = false
        }
        for (var btn of this.indexButtons) {
            btn.visible = false
        }
        for (var icon of this.indexIcons) {
            icon.visible = false
        }

        this.stampHovers.visible = false

        this.stampInfo.visible = false

        this.up_arrow.visible = false
        this.down_arrow.visible = false
        this.up_btn.visible = false
        this.down_btn.visible = false

        this.front.visible = this.pageIndex == 0 ? true : false
        this.page.visible = this.pageIndex == 0 ? false : true
        this.bgcontainer.visible = this.pageIndex == 0 ? false : true

        let page = this.crumbs.stampbook[this.crumbs.stampbook.enabledPages[this.pageIndex]]

        for (var x in this.pins) {
            this.pins[x].visible = false
        }

        if (!page) return console.error('[Stampbook] Page not found')

        if (page.id == 'contents') {
            this.instructionsContainer.visible = true
        } else {
            this.instructionsContainer.visible = false
        }

        if (page.icon) {
            this.pageicon.visible = true
            this.pageicon.setFrame(page.icon.frame)
            this.pageicon.x = page.icon.x
            this.pageicon.y = page.icon.y
        } else {
            this.pageicon.visible = false
        }

        if (page.title) {
            this.pagename.text = page.title.text
            this.pagename.x = page.title.x
            this.pagename.y = page.title.y
        }

        if (page.background) {
            this.pagebg.visible = true
            this.pagebg.x = page.background.x
            this.pagebg.y = page.background.y
            this.pagebg.setFrame(page.background.frame)
            if (page.background.scaleX) {
                this.pagebg.scaleX = page.background.scaleX
            } else {
                this.pagebg.scaleX = 1
            }
            if (page.background.scaleY) {
                this.pagebg.scaleY = page.background.scaleY
            } else {
                this.pagebg.scaleY = 1
            }
        } else {
            this.pagebg.visible = false
        }

        if (this.pageIndex !== this.crumbs.stampbook.enabledPages.length - 1) {
            this.down_arrow.x = 882
            this.down_btn.x = 882
            this.up_arrow.x = 882
            this.up_btn.x = 882

            let text = this.getSingular(page.title.text)
            this.stampcategory.text = text + ' Stamps:'
            if (page.group) {
                this.stampnum.text = `${this.getCategoryStamps(page.group)[1].toString()}/${this.getCategoryStamps(page.group)[0].toString()}`
                this.addPageStamps()
            } else if (page.id == 'contents') {
                this.stampcategory.text = 'Total Stamps:'
                this.stampnum.text = `${this.getTotalStamps()[1].toString()}/${this.getTotalStamps()[0].toString()}`

                let counter = 0
                let indexes = [0, 1, 5, 6, 2, 7, 10, 11, 12, 15, 16, 17]
                this.goToPageIndex = []
                for (let pg in page.index) {
                    let current = indexes[counter]
                    let pageId = this.crumbs.stampbook[page.index[pg].id]

                    if (!this.crumbs.stampbook.enabledPages.includes(pageId.id)) continue

                    let cur = current

                    this.goToPageIndex.push(pg)

                    this.indexIcons[current].visible = true
                    this.indexIcons[current].setFrame(page.index[pg].icon)

                    this.indexButtons[current].setInteractive({
                        cursor: 'pointer',
                    })
                    this.indexButtons[current].on('pointerover', () => {
                        this.indexText[cur].setStyle({color: '#3c3c3cff'})
                    })
                    this.indexButtons[current].on('pointerout', () => {
                        this.indexText[cur].setStyle({color: '#5b5b5bff'})
                    })
                    this.indexButtons[current].on('pointerdown', () => {
                        this.goToPage(pageId)
                    })
                    this.indexButtons[current].visible = true

                    this.indexText[current].text = page.index[pg].name
                    this.indexText[current].visible = true

                    counter++
                }
            } else if (page.index) {
                let cgs = 0
                let ownedcgs = 0
                this.goToPageIndex = []
                let current = 0
                for (let pg in page.index) {
                    let pageId = this.crumbs.stampbook[page.index[pg].id]

                    if (!this.crumbs.stampbook.enabledPages.includes(pageId.id)) continue

                    let cur = current

                    this.goToPageIndex.push(pg)

                    this.indexIcons[current].visible = true
                    this.indexIcons[current].setFrame(page.index[pg].icon)

                    this.indexButtons[current].setInteractive({
                        cursor: 'pointer',
                    })
                    this.indexButtons[current].on('pointerover', () => {
                        this.indexText[cur].setStyle({color: '#3c3c3cff'})
                    })
                    this.indexButtons[current].on('pointerout', () => {
                        this.indexText[cur].setStyle({color: '#5b5b5bff'})
                    })
                    this.indexButtons[current].on('pointerdown', () => {
                        this.goToPage(pageId)
                    })
                    this.indexButtons[current].visible = true

                    this.indexText[current].text = page.index[pg].name
                    this.indexText[current].visible = true

                    current++

                    if (!pageId.group) continue
                    cgs += this.getCategoryStamps(pageId.group)[0]
                    ownedcgs += this.getCategoryStamps(pageId.group)[1]
                }
                this.stampnum.text = `${ownedcgs.toString()}/${cgs.toString()}`
            }
        } else {
            this.showPins()

            this.down_arrow.x = 1200
            this.down_btn.x = 1200
            this.up_arrow.x = 1200
            this.up_btn.x = 1200
        }

        this.pagename.setStyle({fontSize: '70px'})
        while (this.pagename.width > 500) {
            let fontSize = this.pagename.style.fontSize.replace('px', '')
            this.pagename.setStyle({fontSize: `${parseInt(fontSize) - 1}px`})
        }
        this.stampcategory.setStyle({fontSize: '30px'})
        while (this.stampcategory.width > 300) {
            let fontSize = this.stampcategory.style.fontSize.replace('px', '')
            this.stampcategory.setStyle({fontSize: `${parseInt(fontSize) - 1}px`})
        }

        this.pagenum.text = `Page\n${this.pageIndex} of ${this.crumbs.stampbook.enabledPages.length - 1}`
    }

    nextStampPage() {
        let page = this.crumbs.stampbook[this.crumbs.stampbook.enabledPages[this.pageIndex]]
        if (page.id == 'pins') {
            return this.nextPinPage()
        }

        if (this.stamps.length > (this.stampPage + 1) * 16) {
            this.stampPage++
            for (let stamp in this.stamps) {
                if (stamp > this.stampPage * 16 - 1 && stamp < this.stampPage * 16 + 16) {
                    this.stamps[stamp].visible = true
                } else {
                    this.stamps[stamp].visible = false
                }
            }
        }
        if (this.stamps.length <= (this.stampPage + 1) * 16) {
            this.down_arrow.visible = false
            this.down_btn.visible = false
        }
        this.up_arrow.visible = true
        this.up_btn.visible = true
    }

    prevStampPage() {
        let page = this.crumbs.stampbook[this.crumbs.stampbook.enabledPages[this.pageIndex]]
        if (page.id == 'pins') {
            return this.prevPinPage()
        }

        if (this.stampPage > 0) {
            this.stampPage--
            for (let stamp in this.stamps) {
                if (stamp > this.stampPage * 16 - 1 && stamp < this.stampPage * 16 + 16) {
                    this.stamps[stamp].visible = true
                } else {
                    this.stamps[stamp].visible = false
                }
            }
        }

        if (this.stampPage == 0) {
            this.up_arrow.visible = false
            this.up_btn.visible = false
        }

        this.down_arrow.visible = true
        this.down_btn.visible = true
    }

    goToPage(pageIndex) {
        this.pageIndex = this.crumbs.stampbook.enabledPages.indexOf(pageIndex.id)
        this.showPage()
    }

    showPins() {
        const pins = this.shell.client.inventory['flag']
        const numPins = pins.length

        this.stampcategory.text = 'Pins Collected:'
        this.stampnum.text = numPins

        if (this.pins.length > 0) {
            for (let pin in this.pins) {
                this.pins[pin].visible = true
            }
            return
        }

        const pinsPerPage = 32
        const marginX = 120
        const marginY = 140
        const startX = 260
        const startY = 270

        var createPin = (pinId, x, y, visible) => {
            const pin = this.add.image(x, y, 'clothing/icon/' + pinId)
            this.airtower.sendXt('i#gi', pinId)
            pin.setInteractive({
                cursor: 'pointer',
            })
            pin.on('pointerout', () => {
                this.stampInfo.visible = false
            })
            pin.on('pointerover', () => {
                this.stampInfo.visible = true
                this.stampInfo.x = pin.x
                this.stampInfo.y = pin.y

                this.stampInfoTitle.text = this.crumbs.items[pinId].name
                let releaseDate = 'Never'
                if (this.crumbs.items[pinId].releases && this.crumbs.items[pinId].releases.length > 0) {
                    let rDate = new Date(parseInt(this.crumbs.items[pinId].releases[0].from))
                    let month = this.crumbs.getString(`month${rDate.getMonth()}`)
                    releaseDate = `${month} ${rDate.getDate()}/${rDate.getFullYear()}`
                }
                this.stampInfoBody.text = `Released: ${releaseDate}.`
            })

            pin.visible = visible

            return pin
        }

        var showPage = (page) => {
            const visible = page == 0

            for (let i = 0; i < 32; i++) {
                const pinId = pins[i + page * pinsPerPage]
                const col = i % 8
                const row = Math.floor(i / 8)
                const x = startX + col * marginX
                const y = startY + row * marginY

                if (this.textures.exists(`clothing/icon/${pinId}`)) {
                    let pin = createPin(pinId, x, y, visible)
                    this.stampLayer.add(pin)
                    this.pins[pinId] = pin
                } else {
                    this.pinLoader.loadPin(pinId, x, y, visible)
                }
            }
        }

        const numPages = Math.ceil(numPins / pinsPerPage)
        for (let i = 0; i < numPages; i++) {
            showPage(i)
        }

        if (numPages > 1) {
            this.down_arrow.visible = true
            this.down_btn.visible = true
            this.pinPage = 0
        }
    }

    nextPinPage() {
        this.pinPage++

        for (let pin in this.pins) {
            this.pins[pin].visible = false
        }

        let pins = Object.entries(this.pins)
        for (let i = this.pinPage * 32; i < Math.min(this.pinPage * 32 + 32, pins.length); i++) {
            pins[i][1].visible = true
        }

        if (this.pinPage == Math.ceil(this.shell.client.inventory['flag'].length / 32) - 1) {
            this.down_arrow.visible = false
            this.down_btn.visible = false
        }

        this.up_arrow.visible = true
        this.up_btn.visible = true
    }

    prevPinPage() {
        this.pinPage--

        for (let pin in this.pins) {
            this.pins[pin].visible = false
        }

        let pins = Object.entries(this.pins)
        for (let i = this.pinPage * 32; i < Math.min(this.pinPage * 32 + 32, pins.length); i++) {
            pins[i][1].visible = true
        }

        if (this.pinPage == 0) {
            this.up_arrow.visible = false
            this.up_btn.visible = false
        }

        this.down_arrow.visible = true
        this.down_btn.visible = true
    }

    getSingular(text) {
        // This is terrible as it will only work for English
        if (text.endsWith('ies')) {
            return text.slice(0, -3) + 'y'
        }
        if (text.endsWith('s')) {
            return text.slice(0, -1)
        }
        return text
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
