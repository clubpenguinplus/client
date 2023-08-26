import Closeup from '@scenes/interface/closeups/Closeup'
import TeleportItem from './TeleportItem'
import MissionItem from './MissionItem'
import GearPenguin from './GearPenguin'
import {Button, LocalisedString, Interactive, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class EPFPhone extends Closeup {
    constructor() {
        super('EPFPhone')

        /** @type {Phaser.GameObjects.Sprite} */
        this.tp_anim
        /** @type {Phaser.GameObjects.Text} */
        this.tp_text
        /** @type {Phaser.GameObjects.Container} */
        this.tpitem_container
        /** @type {Phaser.GameObjects.Image} */
        this.bar
        /** @type {Phaser.GameObjects.Container} */
        this.teleport_page
        /** @type {MissionItem} */
        this.weekly_m2
        /** @type {MissionItem} */
        this.weekly_m1
        /** @type {MissionItem} */
        this.daily_m3
        /** @type {MissionItem} */
        this.daily_m2
        /** @type {MissionItem} */
        this.daily_m1
        /** @type {Phaser.GameObjects.Container} */
        this.missions_page
        /** @type {Phaser.GameObjects.Text} */
        this.your_medals
        /** @type {GearPenguin} */
        this.gearPenguin
        /** @type {Phaser.GameObjects.Image} */
        this.body_item_trace
        /** @type {Phaser.GameObjects.Image} */
        this.face_item_trace
        /** @type {Phaser.GameObjects.Image} */
        this.feet_item_trace
        /** @type {Phaser.GameObjects.Image} */
        this.head_item_trace
        /** @type {Phaser.GameObjects.Image} */
        this.buy_head_item
        /** @type {Phaser.GameObjects.Image} */
        this.buy_body_item
        /** @type {Phaser.GameObjects.Image} */
        this.buy_face_item
        /** @type {Phaser.GameObjects.Image} */
        this.buy_feet_item
        /** @type {Phaser.GameObjects.Text} */
        this.head_item_price
        /** @type {Phaser.GameObjects.Text} */
        this.body_item_price
        /** @type {Phaser.GameObjects.Text} */
        this.face_item_price
        /** @type {Phaser.GameObjects.Text} */
        this.feet_item_price
        /** @type {Phaser.GameObjects.Text} */
        this.refil_timer
        /** @type {Phaser.GameObjects.Image} */
        this.selector
        /** @type {Phaser.GameObjects.Container} */
        this.gear_page
        /** @type {Phaser.GameObjects.Container} */
        this.select_page
        /** @type {Phaser.GameObjects.Container} */
        this.phone_container
        /** @type {MissionItem[]} */
        this.dailyMissionsList
        /** @type {MissionItem[]} */
        this.weeklyMissionsList

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('phone-pack', 'client/media/interface/closeups/phone/phone-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.3

        // phone_container
        const phone_container = this.add.container(760, 460)

        // bg
        const bg = this.add.image(-0.01738439992061558, 3.973195596324274, 'epfphone', 'bg')
        phone_container.add(bg)

        // teleport_page
        const teleport_page = this.add.container(-149, -246)
        teleport_page.visible = false
        phone_container.add(teleport_page)

        // teleport
        const teleport = this.add.image(-174, 246, 'epfphone', 'teleport')
        teleport_page.add(teleport)

        // tp_anim
        const tp_anim = this.add.sprite(140, 256, 'epfphone', 'anim0001')
        tp_anim.visible = false
        teleport_page.add(tp_anim)

        // tp_text
        const tp_text = this.add.text(140, 364, '', {})
        tp_text.setOrigin(0.5, 0)
        tp_text.visible = false
        tp_text.text = 'TELEPORTING TO\nPLACE'
        tp_text.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '30px', fontStyle: 'bold'})
        teleport_page.add(tp_text)

        // tpitem_container
        const tpitem_container = this.add.container(0, 0)
        teleport_page.add(tpitem_container)

        // bar
        const bar = this.add.image(316.5, 126, 'epfphone', 'bar')
        teleport_page.add(bar)

        // tp_header
        const tp_header = this.add.text(147.2984619140625, -12.323165893554688, '', {})
        tp_header.setOrigin(0.5, 0.5)
        tp_header.text = 'TELEPORT'
        tp_header.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '36px', fontStyle: 'bold'})
        teleport_page.add(tp_header)

        // tp_goBack_btn
        const tp_goBack_btn = this.add.rectangle(-7, -12, 50, 50)
        teleport_page.add(tp_goBack_btn)

        // missions_page
        const missions_page = this.add.container(-452, -27)
        missions_page.visible = false
        phone_container.add(missions_page)

        // missions
        const missions = this.add.image(0, 0, 'epfphone', 'missions')
        missions_page.add(missions)

        // weekly_m2
        const weekly_m2 = new MissionItem(this, 272, 260)
        missions_page.add(weekly_m2)

        // weekly_m1
        const weekly_m1 = new MissionItem(this, 272, 170)
        missions_page.add(weekly_m1)

        // missions_weekly
        const missions_weekly = this.add.text(270, 140, '', {})
        missions_weekly.setOrigin(0, 0.5)
        missions_weekly.text = 'WEEKLY'
        missions_weekly.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '36px', fontStyle: 'bold'})
        missions_page.add(missions_weekly)

        // daily_m3
        const daily_m3 = new MissionItem(this, 272, 40)
        missions_page.add(daily_m3)

        // daily_m2
        const daily_m2 = new MissionItem(this, 272, -50)
        missions_page.add(daily_m2)

        // daily_m1
        const daily_m1 = new MissionItem(this, 270, -140)
        missions_page.add(daily_m1)

        // missions_daily
        const missions_daily = this.add.text(270, -165, '', {})
        missions_daily.setOrigin(0, 0.5)
        missions_daily.text = 'DAILY'
        missions_daily.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '36px', fontStyle: 'bold'})
        missions_page.add(missions_daily)

        // missions_header
        const missions_header = this.add.text(440, -235, '', {})
        missions_header.setOrigin(0.5, 0.5)
        missions_header.text = 'MISSIONS'
        missions_header.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '36px', fontStyle: 'bold'})
        missions_page.add(missions_header)

        // m_goBack_btn
        const m_goBack_btn = this.add.rectangle(292, -235, 50, 50)
        missions_page.add(m_goBack_btn)

        // gear_page
        const gear_page = this.add.container(-161, -238)
        phone_container.add(gear_page)

        // shop
        const shop = this.add.image(161, 243, 'epfphone', 'shop')
        gear_page.add(shop)

        // right_button
        const right_button = this.add.image(328, 520, 'epfphone', 'left-arrow')
        gear_page.add(right_button)

        // left_button
        const left_button = this.add.image(4, 520, 'epfphone', 'right-arrow')
        gear_page.add(left_button)

        // gear_title
        const gear_title = this.add.text(185, -18, '', {})
        gear_title.setOrigin(0.5, 0.5)
        gear_title.text = 'EQUIPMENT SHOP'
        gear_title.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '50px', fontStyle: 'bold'})
        gear_page.add(gear_title)

        // your_medals
        const your_medals = this.add.text(155, 68, '', {})
        your_medals.setOrigin(1, 0.5)
        your_medals.text = 'x88888'
        your_medals.setStyle({align: 'right', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '50px', fontStyle: 'bold'})
        gear_page.add(your_medals)

        // your_medals_icon
        const your_medals_icon = this.add.image(0, 68, 'epfphone', 'gear-btn-hover')
        your_medals_icon.scaleX = 0.2706229658470357
        your_medals_icon.scaleY = 0.2706229658470357
        gear_page.add(your_medals_icon)

        // gearPenguin
        const gearPenguin = new GearPenguin(this, 156, 216)
        gear_page.add(gearPenguin)

        // body_item_trace
        const body_item_trace = this.add.image(216, 226, 'epfphone', 'body-item-trace')
        gear_page.add(body_item_trace)

        // face_item_trace
        const face_item_trace = this.add.image(98, 169, 'epfphone', 'face-item-trace')
        gear_page.add(face_item_trace)

        // feet_item_trace
        const feet_item_trace = this.add.image(53, 320, 'epfphone', 'feet-item-trace')
        gear_page.add(feet_item_trace)

        // head_item_trace
        const head_item_trace = this.add.image(232, 119, 'epfphone', 'head-item-trace')
        gear_page.add(head_item_trace)

        // buy_head_item
        const buy_head_item = this.add.image(274, 78, 'epfphone', 'buy-btn')
        gear_page.add(buy_head_item)

        // buy_body_item
        const buy_body_item = this.add.image(262, 161, 'epfphone', 'buy-btn')
        gear_page.add(buy_body_item)

        // buy_face_item
        const buy_face_item = this.add.image(58, 146, 'epfphone', 'buy-btn')
        gear_page.add(buy_face_item)

        // buy_feet_item
        const buy_feet_item = this.add.image(9, 275, 'epfphone', 'buy-btn')
        gear_page.add(buy_feet_item)

        // head_item_price
        const head_item_price = this.add.text(289, 78, '', {})
        head_item_price.setOrigin(0.5, 0.5)
        head_item_price.text = 'x8'
        head_item_price.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '32px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#033a37ff', 'shadow.blur': 3, 'shadow.fill': true})
        gear_page.add(head_item_price)

        // body_item_price
        const body_item_price = this.add.text(277, 161, '', {})
        body_item_price.setOrigin(0.5, 0.5)
        body_item_price.text = 'x8'
        body_item_price.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '32px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#033a37ff', 'shadow.blur': 3, 'shadow.fill': true})
        gear_page.add(body_item_price)

        // face_item_price
        const face_item_price = this.add.text(72, 146, '', {})
        face_item_price.setOrigin(0.5, 0.5)
        face_item_price.text = 'x8'
        face_item_price.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '32px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#033a37ff', 'shadow.blur': 3, 'shadow.fill': true})
        gear_page.add(face_item_price)

        // feet_item_price
        const feet_item_price = this.add.text(26, 275, '', {})
        feet_item_price.setOrigin(0.5, 0.5)
        feet_item_price.text = 'x8'
        feet_item_price.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '32px', fontStyle: 'bold', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#033a37ff', 'shadow.blur': 3, 'shadow.fill': true})
        gear_page.add(feet_item_price)

        // refill_text
        const refill_text = this.add.text(156, 411, '', {})
        refill_text.setOrigin(0.5, 0.5)
        refill_text.text = 'NEW ITEMS IN:'
        refill_text.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '50px', fontStyle: 'bold'})
        gear_page.add(refill_text)

        // refil_timer
        const refil_timer = this.add.text(156, 454, '', {})
        refil_timer.setOrigin(0.5, 0.5)
        refil_timer.text = '24 days'
        refil_timer.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '50px', fontStyle: 'bold'})
        gear_page.add(refil_timer)

        // pages
        const pages = this.add.text(163, 521, '', {})
        pages.setOrigin(0.5, 0.5)
        pages.text = '1   2   3   4   5'
        pages.setStyle({align: 'center', color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '50px', fontStyle: 'bold'})
        gear_page.add(pages)

        // selector
        const selector = this.add.image(55, 522, 'epfphone', 'selector')
        gear_page.add(selector)

        // g_goBack_btn
        const g_goBack_btn = this.add.rectangle(5, -17, 50, 50)
        gear_page.add(g_goBack_btn)

        // select_page
        const select_page = this.add.container(-91.01738439992062, -205.02680440367573)
        select_page.visible = false
        phone_container.add(select_page)

        // gear_txt
        const gear_txt = this.add.text(0, 80, '', {})
        gear_txt.setOrigin(0.5, 0.5)
        gear_txt.text = 'GEAR'
        gear_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(gear_txt)

        // gear_btn
        const gear_btn = this.add.image(0, 0, 'epfphone', 'gear-btn')
        gear_btn.scaleX = 0.7
        gear_btn.scaleY = 0.7
        select_page.add(gear_btn)

        // missions_txt
        const missions_txt = this.add.text(180, 80, '', {})
        missions_txt.setOrigin(0.5, 0.5)
        missions_txt.text = 'MISSIONS'
        missions_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(missions_txt)

        // missions_btn
        const missions_btn = this.add.image(180, 0, 'epfphone', 'missions-btn')
        missions_btn.scaleX = 0.7
        missions_btn.scaleY = 0.7
        select_page.add(missions_btn)

        // teleport_txt
        const teleport_txt = this.add.text(0, 260, '', {})
        teleport_txt.setOrigin(0.5, 0.5)
        teleport_txt.text = 'TELEPORT'
        teleport_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(teleport_txt)

        // teleport_btn
        const teleport_btn = this.add.image(0, 180, 'epfphone', 'teleport-btn')
        teleport_btn.scaleX = 0.7
        teleport_btn.scaleY = 0.7
        select_page.add(teleport_btn)

        // messages_txt
        const messages_txt = this.add.text(180, 260, '', {})
        messages_txt.setOrigin(0.5, 0.5)
        messages_txt.text = 'MESSAGES'
        messages_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(messages_txt)

        // messages_btn
        const messages_btn = this.add.image(180, 180, 'epfphone', 'messages-btn')
        messages_btn.scaleX = 0.7
        messages_btn.scaleY = 0.7
        select_page.add(messages_btn)

        // gadgets_txt
        const gadgets_txt = this.add.text(0, 440, '', {})
        gadgets_txt.setOrigin(0.5, 0.5)
        gadgets_txt.text = 'GADGETS'
        gadgets_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(gadgets_txt)

        // gadgets_button
        const gadgets_button = this.add.image(0, 360, 'epfphone', 'gadgets-button')
        gadgets_button.scaleX = 0.7
        gadgets_button.scaleY = 0.7
        select_page.add(gadgets_button)

        // puffle_txt
        const puffle_txt = this.add.text(180, 440, '', {})
        puffle_txt.setOrigin(0.5, 0.5)
        puffle_txt.visible = false
        puffle_txt.text = 'ELITE PUFFLE'
        puffle_txt.setStyle({color: '#7eecdeff', fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '28px', fontStyle: 'bold'})
        select_page.add(puffle_txt)

        // puffle_btn
        const puffle_btn = this.add.image(180, 360, 'epfphone', 'puffle-btn')
        puffle_btn.scaleX = 0.7
        puffle_btn.scaleY = 0.7
        puffle_btn.visible = false
        select_page.add(puffle_btn)

        // fg
        const fg = this.add.image(-0.03729248046875, 0.1182861328125, 'epfphone', 'fg')
        phone_container.add(fg)

        // home_btn
        const home_btn = this.add.image(0.4826156000793844, 363.9731955963243, 'epfphone', 'home-btn')
        phone_container.add(home_btn)

        // exit
        const exit = this.add.image(238, -387, 'main', 'white-x')
        exit.scaleX = 0.6
        exit.scaleY = 0.6
        phone_container.add(exit)

        // lists
        const dailyMissionsList = [daily_m1, daily_m2, daily_m3]
        const weeklyMissionsList = [weekly_m1, weekly_m2]

        // block (components)
        new Interactive(block)

        // tp_header (components)
        const tp_headerLocalisedString = new LocalisedString(tp_header)
        tp_headerLocalisedString.id = 'epfphone-teleport'

        // tp_goBack_btn (components)
        const tp_goBack_btnSimpleButton = new SimpleButton(tp_goBack_btn)
        tp_goBack_btnSimpleButton.callback = () => this.showSelectPage()

        // weekly_m2 (prefab fields)
        weekly_m2.isGlobal = true

        // weekly_m1 (prefab fields)
        weekly_m1.isGlobal = true

        // missions_weekly (components)
        const missions_weeklyLocalisedString = new LocalisedString(missions_weekly)
        missions_weeklyLocalisedString.id = 'epfphone-missions-weekly'

        // missions_daily (components)
        const missions_dailyLocalisedString = new LocalisedString(missions_daily)
        missions_dailyLocalisedString.id = 'epfphone-missions-daily'

        // missions_header (components)
        const missions_headerLocalisedString = new LocalisedString(missions_header)
        missions_headerLocalisedString.id = 'epfphone-missions'

        // m_goBack_btn (components)
        const m_goBack_btnSimpleButton = new SimpleButton(m_goBack_btn)
        m_goBack_btnSimpleButton.callback = () => this.showSelectPage()

        // right_button (components)
        const right_buttonButton = new Button(right_button)
        right_buttonButton.callback = () => this.nextItemsPage()

        // left_button (components)
        const left_buttonButton = new Button(left_button)
        left_buttonButton.callback = () => this.prevItemsPage()

        // buy_head_item (components)
        const buy_head_itemButton = new Button(buy_head_item)
        buy_head_itemButton.callback = () => this.purchaseCurrentHeadItem()

        // buy_body_item (components)
        const buy_body_itemButton = new Button(buy_body_item)
        buy_body_itemButton.callback = () => this.purchaseCurrentBodyItem()

        // buy_face_item (components)
        const buy_face_itemButton = new Button(buy_face_item)
        buy_face_itemButton.callback = () => this.purchaseCurrentFaceItem()

        // buy_feet_item (components)
        const buy_feet_itemButton = new Button(buy_feet_item)
        buy_feet_itemButton.callback = () => this.purchaseCurrentFeetItem()

        // g_goBack_btn (components)
        const g_goBack_btnSimpleButton = new SimpleButton(g_goBack_btn)
        g_goBack_btnSimpleButton.callback = () => this.showSelectPage()

        // gear_txt (components)
        const gear_txtLocalisedString = new LocalisedString(gear_txt)
        gear_txtLocalisedString.id = 'epfphone-gear'

        // gear_btn (components)
        const gear_btnButton = new Button(gear_btn)
        gear_btnButton.callback = () => this.showGearPage()

        // missions_txt (components)
        const missions_txtLocalisedString = new LocalisedString(missions_txt)
        missions_txtLocalisedString.id = 'epfphone-missions'

        // missions_btn (components)
        const missions_btnButton = new Button(missions_btn)
        missions_btnButton.callback = () => this.showMissionsPage()

        // teleport_txt (components)
        const teleport_txtLocalisedString = new LocalisedString(teleport_txt)
        teleport_txtLocalisedString.id = 'epfphone-teleport'

        // teleport_btn (components)
        const teleport_btnButton = new Button(teleport_btn)
        teleport_btnButton.callback = () => this.showTeleportPage()

        // messages_txt (components)
        const messages_txtLocalisedString = new LocalisedString(messages_txt)
        messages_txtLocalisedString.id = 'epfphone-messages'

        // messages_btn (components)
        const messages_btnButton = new Button(messages_btn)
        messages_btnButton.callback = () => this.showMessagesPage()

        // gadgets_txt (components)
        const gadgets_txtLocalisedString = new LocalisedString(gadgets_txt)
        gadgets_txtLocalisedString.id = 'epfphone-gadgets'

        // gadgets_button (components)
        const gadgets_buttonButton = new Button(gadgets_button)
        gadgets_buttonButton.callback = () => this.showGadgetsPage()

        // puffle_txt (components)
        const puffle_txtLocalisedString = new LocalisedString(puffle_txt)
        puffle_txtLocalisedString.id = 'epfphone-elitepuffle'

        // puffle_btn (components)
        const puffle_btnButton = new Button(puffle_btn)
        puffle_btnButton.callback = () => this.showElitePufflePage()

        // home_btn (components)
        const home_btnButton = new Button(home_btn)
        home_btnButton.callback = () => this.goToHQ()

        // exit (components)
        const exitSimpleButton = new SimpleButton(exit)
        exitSimpleButton.callback = () => this.stop()

        this.tp_anim = tp_anim
        this.tp_text = tp_text
        this.tpitem_container = tpitem_container
        this.bar = bar
        this.teleport_page = teleport_page
        this.weekly_m2 = weekly_m2
        this.weekly_m1 = weekly_m1
        this.daily_m3 = daily_m3
        this.daily_m2 = daily_m2
        this.daily_m1 = daily_m1
        this.missions_page = missions_page
        this.your_medals = your_medals
        this.gearPenguin = gearPenguin
        this.body_item_trace = body_item_trace
        this.face_item_trace = face_item_trace
        this.feet_item_trace = feet_item_trace
        this.head_item_trace = head_item_trace
        this.buy_head_item = buy_head_item
        this.buy_body_item = buy_body_item
        this.buy_face_item = buy_face_item
        this.buy_feet_item = buy_feet_item
        this.head_item_price = head_item_price
        this.body_item_price = body_item_price
        this.face_item_price = face_item_price
        this.feet_item_price = feet_item_price
        this.refil_timer = refil_timer
        this.selector = selector
        this.gear_page = gear_page
        this.select_page = select_page
        this.phone_container = phone_container
        this.dailyMissionsList = dailyMissionsList
        this.weeklyMissionsList = weeklyMissionsList

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    get gearPenguinItems() {
        return [
            {
                head: {id: 1149, cost: 14},
                face: {id: 2021, cost: 10},
                body: {id: 4223, cost: 18},
                feet: {id: 6042, cost: 8}
            },
            {
                head: {id: 1150, cost: 10},
                face: {id: 2022, cost: 10},
                body: {id: 4224, cost: 18},
                feet: {id: 6043, cost: 8}
            },
            {
                head: {id: 0, cost: 0},
                face: {id: 1217, cost: 12},
                body: {id: 4300, cost: 10},
                feet: {id: 0, cost: 0}
            },
            {
                head: {id: 1201, cost: 14},
                face: {id: 0, cost: 0},
                body: {id: 4282, cost: 20},
                feet: {id: 6057, cost: 16}
            },
            {
                head: {id: 0, cost: 0},
                face: {id: 0, cost: 0},
                body: {id: 4258, cost: 20},
                feet: {id: 6049, cost: 20}
            }
        ]
    }

    create() {
        super.create()
        this.interface.main.phone_button.visible = false
        this.phone_container.x = 86
        this.phone_container.y = 758
        this.phone_container.scaleX = 0.13
        this.phone_container.scaleY = 0.12
        this.tweens.add({
            targets: this.phone_container,
            x: 760,
            y: 460,
            scaleX: 1,
            scaleY: 1,
            duration: 500,
            ease: 'Power2'
        })
        this.generateTeleportItems()
        this.createMask()
        this.bar.setInteractive({cursor: 'pointer', draggable: true})
        this.bar.on('drag', (pointer, dragX, dragY) => {
            this.scrollTeleportItems(dragY)
        })
        this.airtower.events.once('epfgc', (args) => this.onGetMissions(args))
        this.airtower.sendXt('epf#gc')
        this.showSelectPage()

        const refillDate = new Date(2023, 10, 1, 8)
        const now = new Date()
        const diff = refillDate - now
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
        const minutes = Math.floor(diff / (1000 * 60)) % 60

        if (days > 0) {
            this.refil_timer.text = `${days} days`
        } else if (hours > 0) {
            this.refil_timer.text = `${hours} hours`
        } else if (minutes > 0) {
            this.refil_timer.text = `${minutes} minutes`
        } else {
            this.refil_timer.text = 'Soon'
        }
    }

    stop() {
        if (this.mouseScrollListener) {
            this.input.off('wheel', this.mouseScrollListener)
            this.mouseScrollListener = null
        }
        this.tweens.add({
            targets: this.phone_container,
            x: 86,
            y: 758,
            scaleX: 0.13,
            scaleY: 0.12,
            duration: 200,
            ease: 'Power2',
            onComplete: () => {
                this.interface.main.phone_button.visible = true
                setTimeout(() => {
                    super.stop()
                }, 50)
            }
        })
    }

    goToHQ() {
        this.interface.main.phone_button.visible = true
        super.stop()
        let id = 323
        let room = this.crumbs.scenes.rooms[id]
        if (this.shell.room.key == room.key) return

        this.shell.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    showSelectPage() {
        for (let page of ['teleport_page', 'select_page', 'gear_page', 'messages_page', 'gadgets_page', 'puffle_page', 'missions_page']) {
            if (this[page]) this[page].visible = false
        }
        this.select_page.visible = true

        if (this.mouseScrollListener) {
            this.input.off('wheel', this.mouseScrollListener)
            this.mouseScrollListener = null
        }
    }

    showGearPage() {
        this.select_page.visible = false
        this.gear_page.visible = true

        this.selector.x = 55
        this.gearPageNum = 1

        this.your_medals.text = `x${this.shell.client.medals}`

        this.showGearPenguin()
    }

    showGearPenguin() {
        let penguinObject = {}

        for (let s of ['head', 'face', 'body', 'feet']) {
            let item = this.gearPenguinItems[this.gearPageNum - 1][s]
            if (item.id > 0) {
                penguinObject[s] = item.id
                this[`${s}_item_price`].text = `x${item.cost}`

                this[`${s}_item_price`].visible = true
                this[`buy_${s}_item`].visible = true
                this[`${s}_item_trace`].visible = true
            } else {
                this[`${s}_item_price`].visible = false
                this[`buy_${s}_item`].visible = false
                this[`${s}_item_trace`].visible = false
            }
        }

        this.gearPenguin.loadDoll(penguinObject)
    }

    showMissionsPage() {
        this.select_page.visible = false
        this.missions_page.visible = true
    }

    showTeleportPage() {
        this.teleport_page.visible = true
        this.select_page.visible = false

        this.scrollTeleportItems(126)

        this.mouseScrollListener = this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
            let y = this.bar.y + deltaY / 10
            this.scrollTeleportItems(y)
        })
    }

    createMask() {
        this.mask = this.add.graphics()
        this.mask.fillStyle(0xffffff, 0)
        this.mask.beginPath()
        this.maskRect = this.mask.fillRect(569, 247, 342, 521)
        this.mask = this.mask.createGeometryMask()
        this.tpitem_container.setMask(this.mask)
    }

    generateTeleportItems() {
        const xPos = -25
        let yPos = 65
        this.tpItems = []
        for (let item of this.crumbs.roomList.sort((a, b) => a.name.localeCompare(b.name))) {
            let room = this.crumbs.scenes.rooms[item.id]
            if (room.preventTeleport) continue
            let teleportItem = new TeleportItem(this, xPos, yPos)
            teleportItem.roomId = item.id
            if (teleportItem.createItem()) {
                this.tpitem_container.add(teleportItem)
                this.tpItems.push(teleportItem)
                yPos += 50
            }
        }
    }

    teleport(roomId) {
        this.tpitem_container.visible = false
        let room = this.crumbs.scenes.rooms[roomId]
        if (!room) return super.stop()
        if (this.shell.room.key == room.key) return super.stop()
        this.tp_text.visible = true
        this.tp_text.text = `${this.crumbs.getString('epfphone-teleportingto')}\n${this.crumbs.getString(room.key).toUpperCase()}`
        this.tp_anim.visible = true
        this.tp_anim.play('epfphone-anim')
        this.tp_anim.on('animationcomplete', () => {
            this.shell.client.sendJoinRoom(roomId, room.key, room.x, room.y, 80)
            this.interface.main.phone_button.visible = true
            this.stop()
        })
    }

    scrollTeleportItems(dragY) {
        const minBarY = 126
        const maxBarY = 472
        const highestItemY = this.tpItems[this.tpItems.length - 1].y
        const highestVisibleY = 521
        const yDiff = highestVisibleY - highestItemY

        if (dragY < minBarY) dragY = minBarY
        if (dragY > maxBarY) dragY = maxBarY

        let percent = (dragY - minBarY) / (maxBarY - minBarY)
        let itemY = yDiff * percent
        this.tpitem_container.y = itemY

        this.tpitem_container.y = itemY
        this.bar.y = dragY
    }

    showMessagesPage() {
        this.interface.prompt.showError(this.shell.crumbs.getError(54))
    }

    showGadgetsPage() {
        this.interface.prompt.showError(this.shell.crumbs.getError(54))
    }

    showElitePufflePage() {
        this.interface.prompt.showError(this.shell.crumbs.getError(54))
    }

    onGetMissions(args) {
        let challenges = args[0].split('|').map((challenge) => {
            let challengeData = challenge.split(':')
            return {
                id: challengeData[0],
                complete: challengeData[1] == '1',
                progress: challengeData[2]
            }
        })
        let globalChallenges = args[1].split('|').map((challenge) => {
            let challengeData = challenge.split(':')
            return {
                id: challengeData[0],
                complete: challengeData[1] == '1',
                progress: challengeData[2]
            }
        })
        for (let c in challenges) {
            let challenge = challenges[c]
            let cPrefab = this.dailyMissionsList[c]
            if (cPrefab && challenge.id) {
                cPrefab.challengeID = challenge.id
                cPrefab.challengeCompletion = challenge.progress
                cPrefab.isComplete = challenge.complete
                cPrefab.createItem()
            }
        }
        for (let c in globalChallenges) {
            let challenge = globalChallenges[c]
            let cPrefab = this.weeklyMissionsList[c]
            if (cPrefab && challenge.id) {
                cPrefab.challengeID = challenge.id
                cPrefab.challengeCompletion = challenge.progress
                cPrefab.isComplete = challenge.complete
                cPrefab.createItem()
            }
        }
    }

    purchaseCurrentBodyItem() {
        this.interface.prompt.showItem(this.gearPenguinItems[this.gearPageNum - 1].body.id, true)
    }

    purchaseCurrentHeadItem() {
        this.interface.prompt.showItem(this.gearPenguinItems[this.gearPageNum - 1].head.id, true)
    }

    purchaseCurrentFaceItem() {
        this.interface.prompt.showItem(this.gearPenguinItems[this.gearPageNum - 1].face.id, true)
    }

    purchaseCurrentFeetItem() {
        this.interface.prompt.showItem(this.gearPenguinItems[this.gearPageNum - 1].feet.id, true)
    }

    nextItemsPage() {
        if (this.gearPageNum == 5) return
        this.gearPageNum++
        this.selector.x += 53.5

        this.showGearPenguin()
    }

    prevItemsPage() {
        if (this.gearPageNum == 1) return
        this.gearPageNum--
        this.selector.x -= 53.5

        this.showGearPenguin()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
