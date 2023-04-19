import BaseScene from '@scenes/base/BaseScene'

import {Button, Interactive, SimpleButton, ShowHint, InputText} from '@components/components'

import BalloonFactory from '@engine/interface/balloons/BalloonFactory'
import Hint from '@engine/interface/hint/Hint'
import SnowballFactory from '@engine/interface/snowball/SnowballFactory'

import FindFour from '@scenes/games/four/FindFour'
import Mancala from '@scenes/games/mancala/Mancala'

import ActionsMenu from '../floating/actions/ActionsMenu'
import Friend from '../friend/Friend'
import FriendSmall from '../friend/FriendSmall'
import ChatLog from '../chatlog/ChatLog'
import EmotesMenu from '../floating/emotes/EmotesMenu'
import Waddle from '../waddle/Waddle'
import Map from '../map/Map'
import PlayerCard from '../playercard/PlayerCard'
import PuffleCare from '../pufflecare/PuffleCare'
import Safe from '../floating/safe/Safe'
import Settings from '../settings/Settings'
import MainRequestItem from '../friend/friend_item/MainRequestItem'
import OnlineItem from '../friend/friend_item/OnlineItem'
import Ignore from '../ignore/Ignore'

/* START OF COMPILED CODE */

export default class Main extends BaseScene {
    constructor() {
        super('Main')

        /** @type {Phaser.GameObjects.Container} */
        this.pinContainer
        /** @type {Phaser.GameObjects.Image} */
        this.dock
        /** @type {Phaser.GameObjects.Image} */
        this.chat_box
        /** @type {Phaser.GameObjects.Container} */
        this.inputTextContainer
        /** @type {Phaser.GameObjects.Text} */
        this.chatInput
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_button_disabled
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle_button
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_icon
        /** @type {Phaser.GameObjects.Image} */
        this.emote_button
        /** @type {Phaser.GameObjects.Image} */
        this.action_button
        /** @type {Phaser.GameObjects.Image} */
        this.action_icon
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_button
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_icon
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_button
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_icon
        /** @type {Phaser.GameObjects.Image} */
        this.player_button
        /** @type {Phaser.GameObjects.Image} */
        this.badge_member
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_button
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_icon
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_icon
        /** @type {Phaser.GameObjects.Image} */
        this.help_button
        /** @type {Phaser.GameObjects.Image} */
        this.help_icon
        /** @type {Phaser.GameObjects.Image} */
        this.chat_button
        /** @type {Phaser.GameObjects.Image} */
        this.chat_icon
        /** @type {Phaser.GameObjects.Container} */
        this.mobileUi
        /** @type {Phaser.GameObjects.Image} */
        this.dock_1
        /** @type {Phaser.GameObjects.Image} */
        this.chat_box_1
        /** @type {Phaser.GameObjects.Image} */
        this.help_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.help_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.player_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.badge_member_1
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.action_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.action_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.emote_button_1
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_button_disabled_1
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_icon_1
        /** @type {Phaser.GameObjects.Image} */
        this.chat_button_1
        /** @type {Phaser.GameObjects.Image} */
        this.chat_icon_1
        /** @type {Phaser.GameObjects.Container} */
        this.inputTextContainer_mobile
        /** @type {Phaser.GameObjects.Text} */
        this.chatInput_mobile
        /** @type {MainRequestItem} */
        this.mainRequestItem
        /** @type {OnlineItem} */
        this.onlineItem
        /** @type {ChatLog} */
        this.chatLog
        /** @type {Phaser.GameObjects.Image} */
        this.crosshair
        /** @type {Phaser.GameObjects.Sprite} */
        this.map_button
        /** @type {Phaser.GameObjects.Image} */
        this.phone_button
        /** @type {Phaser.GameObjects.Sprite} */
        this.mail_btn
        /** @type {Phaser.GameObjects.Image} */
        this.news_button
        /** @type {Phaser.GameObjects.Image} */
        this.safetyquiz
        /** @type {Phaser.GameObjects.Image} */
        this.moderatoricon
        /** @type {Phaser.GameObjects.Image} */
        this.beta
        /** @type {Phaser.GameObjects.Layer} */
        this.widgetLayer
        /** @type {Friend} */
        this.friend
        /** @type {PlayerCard} */
        this.playerCard
        /** @type {FriendSmall} */
        this.friendSmall
        /** @type {Ignore} */
        this.ignore
        /** @type {Settings} */
        this.settings
        /** @type {ActionsMenu} */
        this.actionsMenu
        /** @type {EmotesMenu} */
        this.emotesMenu
        /** @type {Safe} */
        this.safe
        /** @type {Waddle} */
        this.waddle
        /** @type {FindFour} */
        this.findFour
        /** @type {Mancala} */
        this.mancala
        /** @type {Phaser.GameObjects.Container} */
        this.stampEarned
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedBg
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedImage
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedHeader
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedBody
        /** @type {PuffleCare} */
        this.puffleCare
        /** @type {Map} */
        this.map
        /** @type {Array<PlayerCard|Friend>} */
        this.hideOnSleep
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|ChatLog>} */
        this.interfaceList

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // pinContainer
        const pinContainer = this.add.container(0, 0)

        // dock
        const dock = this.add.image(760, 924, 'main', 'dock')

        // chat_box
        const chat_box = this.add.image(748, 929, 'main', 'chat-box')

        // inputTextContainer
        const inputTextContainer = this.add.container(518, 929)

        // chatInput
        const chatInput = this.add.text(0, 0, '', {})
        chatInput.setOrigin(0, 0.5)
        chatInput.setStyle({color: '#ffffffff', fixedWidth: 476, fontFamily: 'Burbank Small', fontSize: '24px'})
        chatInput.setPadding({top: 6})
        chatInput.setLineSpacing(25)
        inputTextContainer.add(chatInput)

        // puffle_button_disabled
        const puffle_button_disabled = this.add.image(246, 930, 'main', 'blue-button-disabled')

        // puffle_button
        const puffle_button = this.add.sprite(246, 930, 'main', 'blue-button')
        puffle_button.visible = false

        // puffle_icon
        const puffle_icon = this.add.image(245, 929, 'main', 'puffle-icon-disabled')

        // emote_button
        const emote_button = this.add.image(306, 930, 'main', 'blue-button')

        // emote_icon
        const emote_icon = this.add.image(306, 928, 'main', 'emote-icon')

        // action_button
        const action_button = this.add.image(366, 930, 'main', 'blue-button')

        // action_icon
        const action_icon = this.add.image(366, 926, 'main', 'action-icon')

        // snowball_button
        const snowball_button = this.add.image(426, 930, 'main', 'blue-button')

        // snowball_icon
        const snowball_icon = this.add.image(426, 929, 'main', 'snowball-icon')

        // chat_send_button
        const chat_send_button = this.add.image(1026, 930, 'main', 'blue-button')

        // chat_send_icon
        const chat_send_icon = this.add.image(1027, 928, 'main', 'chat-send0001')

        // player_button
        const player_button = this.add.image(1086, 930, 'main', 'blue-button')

        // badge_member
        const badge_member = this.add.image(1086, 927, 'main', 'badge-member')

        // buddies_button
        const buddies_button = this.add.image(1146, 930, 'main', 'blue-button')

        // buddies_icon
        const buddies_icon = this.add.image(1146, 928, 'main', 'buddies-icon')

        // igloo_button
        const igloo_button = this.add.image(1206, 930, 'main', 'blue-button')

        // igloo_icon
        const igloo_icon = this.add.image(1206, 928, 'main', 'igloo-icon')

        // help_button
        const help_button = this.add.image(1266, 930, 'main', 'blue-button')

        // help_icon
        const help_icon = this.add.image(1266, 928, 'main', 'help-icon')

        // chat_button
        const chat_button = this.add.image(486, 930, 'main', 'blue-button')

        // chat_icon
        const chat_icon = this.add.image(486, 929, 'main', 'chat-icon')

        // mobileUi
        const mobileUi = this.add.container(47, 893)
        mobileUi.visible = false

        // dock_1
        const dock_1 = this.add.image(713, 0, 'main', 'mobile/dock')
        mobileUi.add(dock_1)

        // chat_box_1
        const chat_box_1 = this.add.image(710, 10, 'main', 'mobile/chat-box0001')
        chat_box_1.scaleX = 0.9
        mobileUi.add(chat_box_1)

        // help_button_1
        const help_button_1 = this.add.image(1426, 10, 'main', 'mobile/blue-button')
        mobileUi.add(help_button_1)

        // help_icon_1
        const help_icon_1 = this.add.image(1426, 7, 'main', 'mobile/help-icon')
        mobileUi.add(help_icon_1)

        // igloo_button_1
        const igloo_button_1 = this.add.image(1340, 10, 'main', 'mobile/blue-button')
        mobileUi.add(igloo_button_1)

        // igloo_icon_1
        const igloo_icon_1 = this.add.image(1340, 10, 'main', 'mobile/igloo-icon')
        mobileUi.add(igloo_icon_1)

        // buddies_button_1
        const buddies_button_1 = this.add.image(1254, 10, 'main', 'mobile/blue-button')
        mobileUi.add(buddies_button_1)

        // buddies_icon_1
        const buddies_icon_1 = this.add.image(1254, 8, 'main', 'mobile/buddies-icon')
        mobileUi.add(buddies_icon_1)

        // player_button_1
        const player_button_1 = this.add.image(1168, 10, 'main', 'mobile/blue-button')
        mobileUi.add(player_button_1)

        // badge_member_1
        const badge_member_1 = this.add.image(1168, 8, 'main', 'mobile/badge-member')
        mobileUi.add(badge_member_1)

        // chat_send_button_1
        const chat_send_button_1 = this.add.image(1079, 10, 'main', 'mobile/blue-button')
        mobileUi.add(chat_send_button_1)

        // chat_send_icon_1
        const chat_send_icon_1 = this.add.image(1082, 7, 'main', 'mobile/chat_send0001')
        mobileUi.add(chat_send_icon_1)

        // snowball_button_1
        const snowball_button_1 = this.add.image(259, 10, 'main', 'mobile/blue-button')
        mobileUi.add(snowball_button_1)

        // snowball_icon_1
        const snowball_icon_1 = this.add.image(259, 8, 'main', 'mobile/snowball-icon')
        mobileUi.add(snowball_icon_1)

        // action_button_1
        const action_button_1 = this.add.image(173, 10, 'main', 'mobile/blue-button')
        mobileUi.add(action_button_1)

        // action_icon_1
        const action_icon_1 = this.add.image(173, 5, 'main', 'mobile/action-icon')
        mobileUi.add(action_icon_1)

        // emote_button_1
        const emote_button_1 = this.add.image(87, 10, 'main', 'mobile/blue-button')
        mobileUi.add(emote_button_1)

        // emote_icon_1
        const emote_icon_1 = this.add.image(87, 7, 'main', 'mobile/emote-icon')
        mobileUi.add(emote_icon_1)

        // puffle_button_1
        const puffle_button_1 = this.add.sprite(199, 36, 'main', 'mobile/blue-button')
        puffle_button_1.visible = false
        mobileUi.add(puffle_button_1)

        // puffle_button_disabled_1
        const puffle_button_disabled_1 = this.add.image(1, 10, 'main', 'mobile/blue-button-disabled')
        mobileUi.add(puffle_button_disabled_1)

        // puffle_icon_1
        const puffle_icon_1 = this.add.image(0, 10, 'main', 'mobile/puffle0001')
        mobileUi.add(puffle_icon_1)

        // chat_button_1
        const chat_button_1 = this.add.image(349, 10, 'main', 'mobile/blue-button')
        mobileUi.add(chat_button_1)

        // chat_icon_1
        const chat_icon_1 = this.add.image(350, 10, 'main', 'mobile/chat-icon')
        mobileUi.add(chat_icon_1)

        // inputTextContainer_mobile
        const inputTextContainer_mobile = this.add.container(387, 10)
        mobileUi.add(inputTextContainer_mobile)

        // chatInput_mobile
        const chatInput_mobile = this.add.text(2, 1, '', {})
        chatInput_mobile.setOrigin(0, 0.5)
        chatInput_mobile.setStyle({color: '#ffffffff', fixedWidth: 650, fontFamily: 'Burbank Small', fontSize: '36px'})
        chatInput_mobile.setPadding({top: 6})
        chatInput_mobile.setLineSpacing(25)
        inputTextContainer_mobile.add(chatInput_mobile)

        // mainRequestItem
        const mainRequestItem = new MainRequestItem(this, 1152, 840)
        this.add.existing(mainRequestItem)
        mainRequestItem.visible = false

        // onlineItem
        const onlineItem = new OnlineItem(this, 1178, 840)
        this.add.existing(onlineItem)
        onlineItem.visible = false

        // chatLog
        const chatLog = new ChatLog(this, 760, 2)
        this.add.existing(chatLog)

        // crosshair
        const crosshair = this.add.image(0, 1100, 'main', 'crosshair')
        crosshair.visible = false

        // map_button
        const map_button = this.add.sprite(90, 888, 'main', 'map-button')

        // phone_button
        const phone_button = this.add.image(85, 758, 'main', 'phone-button')

        // mail_btn
        const mail_btn = this.add.sprite(170, 52, 'main', 'mail-button')

        // news_button
        const news_button = this.add.image(70, 65, 'main', 'discord')

        // safetyquiz
        const safetyquiz = this.add.image(1461, 65, 'main', 'safetyquiz')
        safetyquiz.setOrigin(0.5, 0.5047169811320755)

        // moderatoricon
        const moderatoricon = this.add.image(1454, 70, 'main', 'mod')
        moderatoricon.setOrigin(0.5, 0.5047169811320755)
        moderatoricon.visible = false

        // beta
        const beta = this.add.image(1354, 68, 'main', 'beta')

        // widgetLayer
        const widgetLayer = this.add.layer()

        // friend
        const friend = new Friend(this, 1140, 436)
        friend.visible = false
        widgetLayer.add(friend)

        // playerCard
        const playerCard = new PlayerCard(this, 446, 436)
        playerCard.visible = false
        widgetLayer.add(playerCard)

        // friendSmall
        const friendSmall = new FriendSmall(this, 1235, 475)
        friendSmall.visible = false
        widgetLayer.add(friendSmall)

        // ignore
        const ignore = new Ignore(this, 1140, 436)
        ignore.visible = false
        widgetLayer.add(ignore)

        // settings
        const settings = new Settings(this, 760, 480)
        this.add.existing(settings)
        settings.visible = false

        // actionsMenu
        const actionsMenu = new ActionsMenu(this, 366, 872)
        this.add.existing(actionsMenu)
        actionsMenu.visible = false

        // emotesMenu
        const emotesMenu = new EmotesMenu(this, 306, 902)
        this.add.existing(emotesMenu)
        emotesMenu.visible = false

        // safe
        const safe = new Safe(this, 244, 933)
        this.add.existing(safe)
        safe.visible = false

        // waddle
        const waddle = new Waddle(this, 733, 422)
        this.add.existing(waddle)
        waddle.visible = false

        // findFour
        const findFour = new FindFour(this, 736, 472)
        this.add.existing(findFour)
        findFour.visible = false

        // mancala
        const mancala = new Mancala(this, 529, 365)
        this.add.existing(mancala)
        mancala.visible = false

        // stampEarned
        const stampEarned = this.add.container(933, -150)

        // stampEarnedBg
        const stampEarnedBg = this.add.image(196, 0, 'main', 'stamps/bg')
        stampEarnedBg.alpha = 0.7
        stampEarnedBg.alphaTopLeft = 0.7
        stampEarnedBg.alphaTopRight = 0.7
        stampEarnedBg.alphaBottomLeft = 0.7
        stampEarnedBg.alphaBottomRight = 0.7
        stampEarned.add(stampEarnedBg)

        // stampEarnedImage
        const stampEarnedImage = this.add.image(0, 70, 'main', 'stamps/activities0001')
        stampEarned.add(stampEarnedImage)

        // stampEarnedHeader
        const stampEarnedHeader = this.add.text(88, 25, '', {})
        stampEarnedHeader.text = 'STAMP EARNED!'
        stampEarnedHeader.setStyle({fixedWidth: 380, fontFamily: 'Burbank Small', fontSize: '40px', fontStyle: 'bold italic'})
        stampEarned.add(stampEarnedHeader)

        // stampEarnedBody
        const stampEarnedBody = this.add.text(90, 80, '', {})
        stampEarnedBody.text = 'Stamp Name'
        stampEarnedBody.setStyle({fixedWidth: 380, fontFamily: 'Burbank Small', fontSize: '35px'})
        stampEarned.add(stampEarnedBody)

        // puffleCare
        const puffleCare = new PuffleCare(this, 500, 583)
        this.add.existing(puffleCare)
        puffleCare.visible = false

        // map
        const map = new Map(this, 760, 480)
        this.add.existing(map)
        map.visible = false

        // lists
        const hideOnSleep = [playerCard, friend]
        const interfaceList = [dock, help_icon, help_button, igloo_icon, igloo_button, buddies_icon, buddies_button, player_button, chat_send_icon, chat_send_button, snowball_icon, snowball_button, action_icon, action_button, emote_button, puffle_icon, puffle_button_disabled, chat_box, map_button, news_button, chatLog, badge_member, emote_icon]

        // dock (components)
        new Interactive(dock)

        // chat_box (components)
        new Interactive(chat_box)

        // chatInput (components)
        const chatInputInputText = new InputText(chatInput)
        chatInputInputText.charlimit = 80
        chatInputInputText.inputfilter = /^[A-Z !?.,:;0-9]*$/i
        chatInputInputText.entercallback = () => this.onChatSend()

        // puffle_button (components)
        const puffle_buttonButton = new Button(puffle_button)
        puffle_buttonButton.spriteName = 'blue-button'
        puffle_buttonButton.callback = () => this.onPuffleClick()

        // emote_button (components)
        const emote_buttonButton = new Button(emote_button)
        emote_buttonButton.spriteName = 'blue-button'
        emote_buttonButton.callback = () => (this.emotesMenu.visible = true)
        const emote_buttonShowHint = new ShowHint(emote_button)
        emote_buttonShowHint.text = 'emotes'

        // action_button (components)
        const action_buttonButton = new Button(action_button)
        action_buttonButton.spriteName = 'blue-button'
        action_buttonButton.callback = () => (this.actionsMenu.visible = true)
        const action_buttonShowHint = new ShowHint(action_button)
        action_buttonShowHint.text = 'actions'

        // snowball_button (components)
        const snowball_buttonButton = new Button(snowball_button)
        snowball_buttonButton.spriteName = 'blue-button'
        snowball_buttonButton.callback = () => this.onSnowballClick()
        const snowball_buttonShowHint = new ShowHint(snowball_button)
        snowball_buttonShowHint.text = 'snowball'

        // chat_send_button (components)
        const chat_send_buttonButton = new Button(chat_send_button)
        chat_send_buttonButton.spriteName = 'blue-button'
        chat_send_buttonButton.callback = () => this.onChatSend()
        const chat_send_buttonShowHint = new ShowHint(chat_send_button)
        chat_send_buttonShowHint.text = 'send'

        // player_button (components)
        const player_buttonButton = new Button(player_button)
        player_buttonButton.spriteName = 'blue-button'
        player_buttonButton.callback = () => this.onPlayerClick()
        const player_buttonShowHint = new ShowHint(player_button)
        player_buttonShowHint.text = 'editPlayer'

        // buddies_button (components)
        const buddies_buttonButton = new Button(buddies_button)
        buddies_buttonButton.spriteName = 'blue-button'
        buddies_buttonButton.callback = () => this.onFriendClick()
        const buddies_buttonShowHint = new ShowHint(buddies_button)
        buddies_buttonShowHint.text = 'showFriendList'

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button)
        igloo_buttonButton.spriteName = 'blue-button'
        igloo_buttonButton.callback = () => this.onIglooClick()
        const igloo_buttonShowHint = new ShowHint(igloo_button)
        igloo_buttonShowHint.text = 'yourIgloo'

        // help_button (components)
        const help_buttonButton = new Button(help_button)
        help_buttonButton.spriteName = 'blue-button'
        help_buttonButton.callback = () => {
            this.settings.visible = true
        }
        const help_buttonShowHint = new ShowHint(help_button)
        help_buttonShowHint.text = 'settings'

        // chat_button (components)
        const chat_buttonButton = new Button(chat_button)
        chat_buttonButton.spriteName = 'blue-button'
        chat_buttonButton.callback = () => (this.safe.visible = true)
        const chat_buttonShowHint = new ShowHint(chat_button)
        chat_buttonShowHint.text = 'messages'

        // dock_1 (components)
        new Interactive(dock_1)

        // chat_box_1 (components)
        new Interactive(chat_box_1)

        // help_button_1 (components)
        const help_button_1Button = new Button(help_button_1)
        help_button_1Button.spriteName = 'mobile/blue-button'
        help_button_1Button.callback = () => {
            this.settings.visible = true
        }
        const help_button_1ShowHint = new ShowHint(help_button_1)
        help_button_1ShowHint.text = 'settings'

        // igloo_button_1 (components)
        const igloo_button_1Button = new Button(igloo_button_1)
        igloo_button_1Button.spriteName = 'mobile/blue-button'
        igloo_button_1Button.callback = () => this.onIglooClick()
        const igloo_button_1ShowHint = new ShowHint(igloo_button_1)
        igloo_button_1ShowHint.text = 'yourIgloo'

        // buddies_button_1 (components)
        const buddies_button_1Button = new Button(buddies_button_1)
        buddies_button_1Button.spriteName = 'mobile/blue-button'
        buddies_button_1Button.callback = () => this.onFriendClick()
        const buddies_button_1ShowHint = new ShowHint(buddies_button_1)
        buddies_button_1ShowHint.text = 'showFriendList'

        // player_button_1 (components)
        const player_button_1Button = new Button(player_button_1)
        player_button_1Button.spriteName = 'mobile/blue-button'
        player_button_1Button.callback = () => this.onPlayerClick()
        const player_button_1ShowHint = new ShowHint(player_button_1)
        player_button_1ShowHint.text = 'editPlayer'

        // chat_send_button_1 (components)
        const chat_send_button_1Button = new Button(chat_send_button_1)
        chat_send_button_1Button.spriteName = 'mobile/blue-button'
        chat_send_button_1Button.callback = () => this.onChatSend()
        const chat_send_button_1ShowHint = new ShowHint(chat_send_button_1)
        chat_send_button_1ShowHint.text = 'send'

        // snowball_button_1 (components)
        const snowball_button_1Button = new Button(snowball_button_1)
        snowball_button_1Button.spriteName = 'mobile/blue-button'
        snowball_button_1Button.callback = () => this.onSnowballClick()
        const snowball_button_1ShowHint = new ShowHint(snowball_button_1)
        snowball_button_1ShowHint.text = 'snowball'

        // action_button_1 (components)
        const action_button_1Button = new Button(action_button_1)
        action_button_1Button.spriteName = 'mobile/blue-button'
        action_button_1Button.callback = () => (this.actionsMenu.visible = true)
        const action_button_1ShowHint = new ShowHint(action_button_1)
        action_button_1ShowHint.text = 'actions'

        // emote_button_1 (components)
        const emote_button_1Button = new Button(emote_button_1)
        emote_button_1Button.spriteName = 'mobile/blue-button'
        emote_button_1Button.callback = () => (this.emotesMenu.visible = true)
        const emote_button_1ShowHint = new ShowHint(emote_button_1)
        emote_button_1ShowHint.text = 'emotes'

        // puffle_button_1 (components)
        const puffle_button_1Button = new Button(puffle_button_1)
        puffle_button_1Button.spriteName = 'blue-button'
        puffle_button_1Button.callback = () => this.onPuffleClick()

        // chat_button_1 (components)
        const chat_button_1Button = new Button(chat_button_1)
        chat_button_1Button.spriteName = 'mobile/blue-button'
        chat_button_1Button.callback = () => (this.safe.visible = true)
        const chat_button_1ShowHint = new ShowHint(chat_button_1)
        chat_button_1ShowHint.text = 'messages'

        // chatInput_mobile (components)
        const chatInput_mobileInputText = new InputText(chatInput_mobile)
        chatInput_mobileInputText.charlimit = 30
        chatInput_mobileInputText.inputfilter = /^[A-Z ]*$/i
        chatInput_mobileInputText.entercallback = () => this.onChatSend()

        // crosshair (components)
        const crosshairSimpleButton = new SimpleButton(crosshair)
        crosshairSimpleButton.callback = () => this.onCrosshairClick()

        // map_button (components)
        const map_buttonButton = new Button(map_button)
        map_buttonButton.spriteName = 'map-button'
        map_buttonButton.callback = () => this.onMapClick()
        map_buttonButton.activeFrame = false

        // phone_button (components)
        const phone_buttonButton = new Button(phone_button)
        phone_buttonButton.spriteName = 'phone-button'
        phone_buttonButton.callback = () => this.onPhoneClick()

        // mail_btn (components)
        const mail_btnButton = new Button(mail_btn)
        mail_btnButton.spriteName = 'mail-button'
        mail_btnButton.callback = () => {
            /*this.shell.RuffleManager.handleLoadOtherSwf("mail.swf")*/
        }
        mail_btnButton.activeFrame = false

        // news_button (components)
        const news_buttonButton = new Button(news_button)
        news_buttonButton.spriteName = 'discord'
        news_buttonButton.callback = () => window.open('https://discord.gg/x3QuKfezb4', '_blank').focus()
        news_buttonButton.activeFrame = false

        // safetyquiz (components)
        const safetyquizButton = new Button(safetyquiz)
        safetyquizButton.spriteName = 'safetyquiz'
        safetyquizButton.callback = () => this.onModClick()
        safetyquizButton.activeFrame = false

        // moderatoricon (components)
        const moderatoriconButton = new Button(moderatoricon)
        moderatoriconButton.spriteName = 'mod'
        moderatoriconButton.callback = () => this.onModClick()
        moderatoriconButton.activeFrame = false

        // beta (components)
        const betaButton = new Button(beta)
        betaButton.spriteName = 'beta'
        betaButton.callback = () => this.onBetaClick()
        betaButton.activeFrame = false

        this.pinContainer = pinContainer
        this.dock = dock
        this.chat_box = chat_box
        this.inputTextContainer = inputTextContainer
        this.chatInput = chatInput
        this.puffle_button_disabled = puffle_button_disabled
        this.puffle_button = puffle_button
        this.puffle_icon = puffle_icon
        this.emote_button = emote_button
        this.action_button = action_button
        this.action_icon = action_icon
        this.snowball_button = snowball_button
        this.snowball_icon = snowball_icon
        this.chat_send_button = chat_send_button
        this.chat_send_icon = chat_send_icon
        this.player_button = player_button
        this.badge_member = badge_member
        this.buddies_button = buddies_button
        this.buddies_icon = buddies_icon
        this.igloo_button = igloo_button
        this.igloo_icon = igloo_icon
        this.help_button = help_button
        this.help_icon = help_icon
        this.chat_button = chat_button
        this.chat_icon = chat_icon
        this.mobileUi = mobileUi
        this.dock_1 = dock_1
        this.chat_box_1 = chat_box_1
        this.help_button_1 = help_button_1
        this.help_icon_1 = help_icon_1
        this.igloo_button_1 = igloo_button_1
        this.igloo_icon_1 = igloo_icon_1
        this.buddies_button_1 = buddies_button_1
        this.buddies_icon_1 = buddies_icon_1
        this.player_button_1 = player_button_1
        this.badge_member_1 = badge_member_1
        this.chat_send_button_1 = chat_send_button_1
        this.chat_send_icon_1 = chat_send_icon_1
        this.snowball_button_1 = snowball_button_1
        this.snowball_icon_1 = snowball_icon_1
        this.action_button_1 = action_button_1
        this.action_icon_1 = action_icon_1
        this.emote_button_1 = emote_button_1
        this.puffle_button_1 = puffle_button_1
        this.puffle_button_disabled_1 = puffle_button_disabled_1
        this.puffle_icon_1 = puffle_icon_1
        this.chat_button_1 = chat_button_1
        this.chat_icon_1 = chat_icon_1
        this.inputTextContainer_mobile = inputTextContainer_mobile
        this.chatInput_mobile = chatInput_mobile
        this.mainRequestItem = mainRequestItem
        this.onlineItem = onlineItem
        this.chatLog = chatLog
        this.crosshair = crosshair
        this.map_button = map_button
        this.phone_button = phone_button
        this.mail_btn = mail_btn
        this.news_button = news_button
        this.safetyquiz = safetyquiz
        this.moderatoricon = moderatoricon
        this.beta = beta
        this.widgetLayer = widgetLayer
        this.friend = friend
        this.playerCard = playerCard
        this.friendSmall = friendSmall
        this.ignore = ignore
        this.settings = settings
        this.actionsMenu = actionsMenu
        this.emotesMenu = emotesMenu
        this.safe = safe
        this.waddle = waddle
        this.findFour = findFour
        this.mancala = mancala
        this.stampEarned = stampEarned
        this.stampEarnedBg = stampEarnedBg
        this.stampEarnedImage = stampEarnedImage
        this.stampEarnedHeader = stampEarnedHeader
        this.stampEarnedBody = stampEarnedBody
        this.puffleCare = puffleCare
        this.map = map
        this.hideOnSleep = hideOnSleep
        this.interfaceList = interfaceList

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.events.on('sleep', this.onSleep, this)

        this.setupWidgets()

        // Factories

        this.balloonFactory = new BalloonFactory(this)
        this.snowballFactory = new SnowballFactory(this.shell)

        // Hints

        this.hint = new Hint(this, 0, 0)
        this.add.existing(this.hint)
        this.hideOnSleep.push(this.hint)
        this.hint.visible = false

        // Friend requests

        this.requests = []

        // Window functions

        window.hide = this.hide
        window.hide = hide.bind(this)

        window.show = this.show
        window.show = show.bind(this)

        // init partycontroller

        this.shell.party.getPartyCompletion()

        // safety quiz or mod icon

        this.showTR()

        this.phone_button.visible = this.shell.client.isEPF

        // Test mobile
        this.isMobile()
    }

    showTR() {
        if (this.shell.client.hasItem(24042)) {
            this.safetyquiz.visible = false
            this.moderatoricon.visible = true
        } else {
            this.safetyquiz.visible = true
            this.moderatoricon.visible = false
        }
    }

    onSleep(sys, data) {
        if (data.clearChat) {
            this.chatInput.__InputText.clearText()
            this.chatLog.clearMessages()
        }

        if (this.chatLog.open) {
            this.chatLog.onTabClick()
        }

        this.stopCrosshair()

        this.waddle.activeSeat = null

        for (let item of this.hideOnSleep) {
            item.visible = false
        }
        this.map.iglooMap.visible = false
    }

    onWake() {
        if (!this.moderatoricon) return
        this.showTR()
        if (!this.beta) return
        this.beta.visible = true
    }

    setupWidgets() {
        for (let widget of this.widgetLayer.list) {
            if (widget.__DraggableContainer) {
                widget.__DraggableContainer.widgetLayer = this.widgetLayer
            }
        }
    }

    showWidget(widget) {
        this.widgetLayer.bringToTop(widget)
        if (widget.open) return widget.open()
        widget.visible = true
    }

    onSnowballClick() {
        this.crosshair.visible = true
        this.crosshair.x = this.input.x / window.currentScale
        this.crosshair.y = this.input.y / window.currentScale
    }

    onCrosshairMove(pointer) {
        this.crosshair.x = Math.round(pointer.x / window.currentScale)
        this.crosshair.y = Math.round(pointer.y / window.currentScale)
    }

    onCrosshairClick() {
        this.stopCrosshair()
        this.shell.client.sendSnowball(this.crosshair.x, this.crosshair.y)
    }

    stopCrosshair() {
        this.crosshair.visible = false
    }

    onChatSend() {
        let text = this.chatInput.textContent

        this.chatInput.__InputText.clearText()

        this.airtower.sendXt('m#sm', text)
    }

    onPlayerClick() {
        this.playerCard.showCard(this.shell.client.id)
    }

    onFriendClick() {
        if (this.shell.client.friends.length > 6) {
            this.showWidget(this.friend)
            this.friend.showPage()
        } else {
            this.showWidget(this.friendSmall)
            this.friendSmall.showPage()
        }
    }

    onIglooClick() {
        this.shell.client.sendJoinIgloo(this.shell.client.id)
    }

    showAccept(request) {
        let text = `${request.username} is now your friend!`

        this.interface.prompt.showWindow(text, 'single')
    }

    addRequest(request) {
        // Prevent duplicate requests
        if (this.requests.some((item) => item.id == request.id && !item.requester)) return

        this.requests.push(request)

        this.mainRequestItem.setItem(request)
        this.mainRequestItem.visible = true
        this.bounce(this.mainRequestItem)

        this.time.addEvent({
            delay: 10000,
            callback: () => (this.mainRequestItem.visible = false),
        })
    }

    showOnlinePopup(friend) {
        this.onlineItem.setItem(friend)

        this.onlineItem.visible = true
        this.bounce(this.onlineItem, 20)

        // Hide popup after 10 seconds
        this.time.addEvent({
            delay: 10000,
            callback: () => (this.onlineItem.visible = false),
        })
    }

    bounce(gameObject, from = -100) {
        if (!gameObject.startY) gameObject.startY = gameObject.y

        this.tweens.add({
            targets: gameObject,
            y: {
                from: gameObject.startY + from,
                to: gameObject.startY,
            },
            ease: 'Bounce',
            duration: 200,
        })
    }

    onModClick() {
        if (this.shell.client.hasItem(24042)) {
            this.interface.loadExternal('Moderator')
        } else {
            this.interface.loadExternal('SafetyQuiz')
        }
    }

    unimplementedPrompt() {
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('This feature is not yet implemented!\nClub Penguin Plus is in development, and is being\nactively updated. Check back soon!')
    }

    hide() {
        for (let item of this.interfaceList) {
            item.visible = false
        }

        this.input.keyboard.on('keydown-TAB', (event) => null)
        this.input.keyboard.on('keydown-ENTER', (event) => null)

        this.shell.client.blockKeys()

        try {
            for (let penguin of Object.values(this.shell.room.penguins)) {
                penguin.visible = false
                penguin.nameTag.visible = false
            }
        } catch (err) {
            console.error(`[Interface:Main] ${err}`)
        }
    }

    show() {
        for (let item of this.interfaceList) {
            item.visible = true
        }
        this.beta.visible = true
        this.showTR()

        this.shell.client.initKeys()

        try {
            for (let penguin of Object.values(this.shell.room.penguins)) {
                penguin.visible = true
                penguin.nameTag.visible = true
            }
        } catch (err) {
            console.error(`[Interface:Main] ${err}`)
        }
    }

    stampTween() {
        let tween = this.tweens.add({
            targets: this.stampEarned,
            y: 0,
            delay: 1000,
            duration: 300,
            onComplete: () => this.onStampTweenComplete(),
        })
    }

    onStampTweenComplete() {
        let tween = this.tweens.add({
            targets: this.stampEarned,
            y: -150,
            delay: 1500,
            duration: 300,
        })
    }

    onPIntOver() {
        this.party_interface.scaleX = 0.5
        this.party_interface.scaleY = 0.5
    }

    onPIntOut() {
        this.party_interface.scaleX = 0.4
        this.party_interface.scaleY = 0.4
    }

    onPuffleClick() {}

    isMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.mobileUi.visible = true
            this.map_button.x = 72
            this.map_button.y = 170

            this.inputTextContainer = this.inputTextContainer_mobile
            this.chatInput = this.chatInput_mobile
        }
    }

    onMapClick() {
        this.map.scaleX = 0.8
        this.map.scaleY = 0.8
        this.tweens.add({
            targets: this.map,
            scaleX: 1,
            scaleY: 1,
            duration: 150,
            ease: 'Power2',
        })
        this.map.visible = true
    }

    onBetaClick() {
        this.interface.loadExternal('Report')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
