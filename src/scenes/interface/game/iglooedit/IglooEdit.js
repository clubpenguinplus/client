import BaseScene from '@scenes/base/BaseScene'

import {Button, Interactive, ShowHint, SimpleButton, LocalisedString} from '@components/components'

import IglooFactory from '@engine/world/room/IglooFactory'

import IglooMusic from './igloomusic/IglooMusic'
import IglooItem from './IglooItem'

/* START OF COMPILED CODE */

export default class IglooEdit extends BaseScene {
    constructor() {
        super('IglooEdit')

        /** @type {Phaser.GameObjects.Image} */
        this.button_backyard
        /** @type {Phaser.GameObjects.Container} */
        this.defaultControls
        /** @type {Phaser.GameObjects.Image} */
        this.button_box
        /** @type {Phaser.GameObjects.Text} */
        this.music
        /** @type {Phaser.GameObjects.Text} */
        this.hide
        /** @type {Phaser.GameObjects.Container} */
        this.lower
        /** @type {Phaser.GameObjects.Container} */
        this.itemContainer
        /** @type {NinePatchContainer} */
        this.scrollbar
        /** @type {Phaser.GameObjects.Container} */
        this.scroller
        /** @type {Phaser.GameObjects.Container} */
        this.scrollBarContainer
        /** @type {Phaser.GameObjects.Container} */
        this.upper
        /** @type {IglooMusic} */
        this.iglooMusic
        /** @type {Phaser.GameObjects.Container} */
        this.controls
        /** @type {Phaser.GameObjects.Image} */
        this.toggler
        /** @type {Phaser.GameObjects.Text} */
        this.grandTotalLikes
        /** @type {Phaser.GameObjects.Text} */
        this.currentIglooLikes
        /** @type {Phaser.GameObjects.Container} */
        this.chooseIgloo
        /** @type {Phaser.GameObjects.Image[]} */
        this.categories
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.spinners
        /** @type {Phaser.GameObjects.Text[]} */
        this.likesText

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // defaultControls
        const defaultControls = this.add.container(1426, 758)

        // button_edit
        const button_edit = this.add.image(0, 126, 'iglooedit-new', 'edit-btn')
        defaultControls.add(button_edit)

        // button_backyard
        const button_backyard = this.add.image(0, 0, 'iglooedit-new', 'backyard')
        defaultControls.add(button_backyard)

        // controls
        const controls = this.add.container(0, 0)
        controls.visible = false

        // button_furniture_catalog
        const button_furniture_catalog = this.add.image(1396.9985859979595, 739.0016987305266, 'iglooedit-new', 'catalog')
        controls.add(button_furniture_catalog)

        // button_box
        const button_box = this.add.image(1424.9985859979595, 883.0016987305266, 'iglooedit-new', 'cardboardbox')
        button_box.setOrigin(0.5, 0.584)
        controls.add(button_box)

        // lower
        const lower = this.add.container(56.99858594592661, 25.001698585925624)
        controls.add(lower)

        // music_panel
        const music_panel = this.add.image(0, 0, 'iglooedit-new', 'music-panel')
        lower.add(music_panel)

        // big_button
        const big_button = this.add.ninePatchContainer(35, 246, 80, 65, 'iglooedit-new', 'big-button')
        lower.add(big_button)

        // music_icon
        const music_icon = this.add.image(34, 246, 'iglooedit-new', 'music-icon')
        lower.add(music_icon)

        // arrow
        const arrow = this.add.image(107, 247, 'iglooedit-new', 'arrow')
        lower.add(arrow)

        // small_btn
        const small_btn = this.add.ninePatchContainer(50, 328, 150, 42, 'iglooedit-new', 'small-btn')
        small_btn.marginLeft = 30
        small_btn.marginRight = 30
        lower.add(small_btn)

        // music
        const music = this.add.text(35, 200, '', {})
        music.setOrigin(0.5, 0.5)
        music.text = 'Music'
        music.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 150, fontFamily: 'cpBurbankSmall', fontSize: '22px', fontStyle: 'bold'})
        lower.add(music)

        // hide
        const hide = this.add.text(50, 328, '', {})
        hide.setOrigin(0.5, 0.5)
        hide.text = 'Hide'
        hide.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 150, fontFamily: 'cpBurbankSmall', fontSize: '22px', fontStyle: 'bold'})
        lower.add(hide)

        // upper
        const upper = this.add.container(0, 0)
        controls.add(upper)

        // all
        const all = this.add.image(659.9985859459266, 215.00169858592562, 'iglooedit-new', 'all-selected')
        upper.add(all)

        // location
        const location = this.add.image(774.9985859459266, 216.00169858592562, 'iglooedit-new', 'location')
        upper.add(location)

        // igloos
        const igloos = this.add.image(889.9985859459266, 216.00169858592562, 'iglooedit-new', 'igloos')
        upper.add(igloos)

        // flooring
        const flooring = this.add.image(1004.9985859459266, 216.00169858592562, 'iglooedit-new', 'flooring')
        upper.add(flooring)

        // room
        const room = this.add.image(1119.9985859459266, 216.00169858592562, 'iglooedit-new', 'room')
        upper.add(room)

        // wall
        const wall = this.add.image(1234.9985859459266, 216.00169858592562, 'iglooedit-new', 'wall')
        upper.add(wall)

        // pets
        const pets = this.add.image(1349.9985859459266, 216.00169858592562, 'iglooedit-new', 'pets')
        upper.add(pets)

        // top_bar
        const top_bar = this.add.image(777.9985859459266, 72.00169858592562, 'iglooedit-new', 'top-bar')
        upper.add(top_bar)

        // itemContainer
        const itemContainer = this.add.container(0, 0)
        upper.add(itemContainer)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1462.0000507896766, 91.99999723094516, 115.5, 170)
        upper.add(rectangle_1)

        // close_btn
        const close_btn = this.add.image(1466.9985859459266, 48.001698585925624, 'iglooedit-new', 'close-btn')
        upper.add(close_btn)

        // x
        const x = this.add.image(1466.9985859459266, 47.001698585925624, 'iglooedit-new', 'x')
        upper.add(x)

        // scrollBarContainer
        const scrollBarContainer = this.add.container(-0.00001392595368088223, 0.0015205401127835472)
        upper.add(scrollBarContainer)

        // rounded_rect
        const rounded_rect = this.add.ninePatchContainer(722.0000122493237, 154.99848689180524, 1300, 32, 'iglooedit-new', 'rounded_rect')
        rounded_rect.marginLeft = 16
        rounded_rect.marginTop = 16
        rounded_rect.marginRight = 16
        rounded_rect.marginBottom = 16
        scrollBarContainer.add(rounded_rect)

        // rounded_rect_1
        const rounded_rect_1 = this.add.ninePatchContainer(722.0000122493237, 154.99848689180524, 1300, 32, 'iglooedit-new', 'rounded_rect')
        rounded_rect_1.alpha = 0.5
        rounded_rect_1.marginLeft = 16
        rounded_rect_1.marginTop = 16
        rounded_rect_1.marginRight = 16
        rounded_rect_1.marginBottom = 16
        rounded_rect_1.ninePatchContainerTintFill = true
        scrollBarContainer.add(rounded_rect_1)

        // circle
        const circle = this.add.image(87.00001224932373, 154.99848689180524, 'iglooedit-new', 'circle')
        scrollBarContainer.add(circle)

        // arrow_1
        const arrow_1 = this.add.image(85.00001224932373, 154.99848689180524, 'iglooedit-new', 'arrow')
        arrow_1.scaleX = -1
        scrollBarContainer.add(arrow_1)

        // circle_1
        const circle_1 = this.add.image(1356.0000122493238, 154.99848689180524, 'iglooedit-new', 'circle')
        scrollBarContainer.add(circle_1)

        // arrow_2
        const arrow_2 = this.add.image(1358.0000122493238, 154.99848689180524, 'iglooedit-new', 'arrow')
        scrollBarContainer.add(arrow_2)

        // scroller
        const scroller = this.add.container(168.0000122493237, 154.99848689180524)
        scrollBarContainer.add(scroller)

        // scrollbar
        const scrollbar = this.add.ninePatchContainer(9, 0, 150, 32, 'iglooedit-new', 'rounded_rect')
        scrollbar.marginLeft = 16
        scrollbar.marginTop = 16
        scrollbar.marginRight = 16
        scrollbar.marginBottom = 16
        scroller.add(scrollbar)

        // rounded_rect_thin
        const rounded_rect_thin = this.add.image(0, 0, 'iglooedit-new', 'rounded_rect_thin')
        rounded_rect_thin.scaleY = 0.6
        scroller.add(rounded_rect_thin)

        // rounded_rect_thin_1
        const rounded_rect_thin_1 = this.add.image(6, 0, 'iglooedit-new', 'rounded_rect_thin')
        rounded_rect_thin_1.scaleY = 0.6
        scroller.add(rounded_rect_thin_1)

        // rounded_rect_thin_2
        const rounded_rect_thin_2 = this.add.image(18, 0, 'iglooedit-new', 'rounded_rect_thin')
        rounded_rect_thin_2.scaleY = 0.6
        scroller.add(rounded_rect_thin_2)

        // rounded_rect_thin_3
        const rounded_rect_thin_3 = this.add.image(12, 0, 'iglooedit-new', 'rounded_rect_thin')
        rounded_rect_thin_3.scaleY = 0.6
        scroller.add(rounded_rect_thin_3)

        // iglooMusic
        const iglooMusic = new IglooMusic(this, 759.9985859979596, 480.0016987305264)
        iglooMusic.visible = false
        controls.add(iglooMusic)

        // chooseIgloo
        const chooseIgloo = this.add.container(0, 0)
        chooseIgloo.visible = false

        // bg
        const bg = this.add.image(760, 480, 'iglooedit-new', 'bg')
        chooseIgloo.add(bg)

        // choose_igloo
        const choose_igloo = this.add.image(944, 349, 'iglooedit-new', 'choose-igloo')
        chooseIgloo.add(choose_igloo)

        // toggle_panel
        const toggle_panel = this.add.image(1180, 349, 'iglooedit-new', 'toggle-panel')
        chooseIgloo.add(toggle_panel)

        // toggler
        const toggler = this.add.image(1151, 352, 'iglooedit-new', 'toggler')
        chooseIgloo.add(toggler)

        // preview_pane
        const preview_pane = this.add.image(250, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane)

        // plus
        const plus = this.add.sprite(250, 716, 'iglooedit-new', 'spinner0001')
        plus.scaleX = 0.7
        plus.scaleY = 0.7
        chooseIgloo.add(plus)

        // preview_pane_1
        const preview_pane_1 = this.add.image(590, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane_1)

        // plus_1
        const plus_1 = this.add.sprite(590, 716, 'iglooedit-new', 'spinner0001')
        plus_1.scaleX = 0.7
        plus_1.scaleY = 0.7
        chooseIgloo.add(plus_1)

        // preview_pane_2
        const preview_pane_2 = this.add.image(930, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane_2)

        // plus_2
        const plus_2 = this.add.sprite(930, 716, 'iglooedit-new', 'spinner0001')
        plus_2.scaleX = 0.7
        plus_2.scaleY = 0.7
        chooseIgloo.add(plus_2)

        // preview_pane_3
        const preview_pane_3 = this.add.image(1269, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane_3)

        // plus_3
        const plus_3 = this.add.sprite(1269, 716, 'iglooedit-new', 'spinner0001')
        plus_3.scaleX = 0.7
        plus_3.scaleY = 0.7
        chooseIgloo.add(plus_3)

        // close_btn_1
        const close_btn_1 = this.add.image(1475, 45, 'iglooedit-new', 'close-btn')
        chooseIgloo.add(close_btn_1)

        // x_1
        const x_1 = this.add.image(1475, 44, 'iglooedit-new', 'x')
        chooseIgloo.add(x_1)

        // grandTotalLikes
        const grandTotalLikes = this.add.text(870, 151, '', {})
        grandTotalLikes.setOrigin(0, 0.5)
        grandTotalLikes.text = '0'
        grandTotalLikes.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '35px', fontStyle: 'bold'})
        chooseIgloo.add(grandTotalLikes)

        // title_4
        const title_4 = this.add.text(870, 114, '', {})
        title_4.setOrigin(0, 0.5)
        title_4.text = 'Grand Total Likes:'
        title_4.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '28px'})
        chooseIgloo.add(title_4)

        // title_5
        const title_5 = this.add.text(891, 263, '', {})
        title_5.setOrigin(0, 0.5)
        title_5.text = 'Your current igloo'
        title_5.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold'})
        chooseIgloo.add(title_5)

        // title_6
        const title_6 = this.add.text(1060, 349, '', {})
        title_6.setOrigin(0.5, 0.5)
        title_6.text = 'Friends'
        title_6.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_6)

        // title_7
        const title_7 = this.add.text(1300, 349, '', {})
        title_7.setOrigin(0.5, 0.5)
        title_7.text = 'Everyone'
        title_7.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_7)

        // title_8
        const title_8 = this.add.text(944, 429, '', {})
        title_8.setOrigin(0.5, 0.5)
        title_8.text = 'Edit'
        title_8.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_8)

        // title_9
        const title_9 = this.add.text(1180, 429, '', {})
        title_9.setOrigin(0.5, 0.5)
        title_9.text = 'Igloo Visitors'
        title_9.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 250, fontFamily: 'cpBurbankSmall', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_9)

        // currentIglooLikes
        const currentIglooLikes = this.add.text(892, 507, '', {})
        currentIglooLikes.setOrigin(0, 0.5)
        currentIglooLikes.text = '0'
        currentIglooLikes.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        chooseIgloo.add(currentIglooLikes)

        // title_11
        const title_11 = this.add.text(892, 472, '', {})
        title_11.setOrigin(0, 0.5)
        title_11.text = 'Likes'
        title_11.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '26px'})
        chooseIgloo.add(title_11)

        // plus_4
        const plus_4 = this.add.sprite(480, 318, 'iglooedit-new', 'spinner0001')
        chooseIgloo.add(plus_4)

        // title_12
        const title_12 = this.add.text(108, 828, '', {})
        title_12.setOrigin(0, 0.5)
        title_12.text = 'Likes'
        title_12.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        chooseIgloo.add(title_12)

        // title_13
        const title_13 = this.add.text(108, 853, '', {})
        title_13.setOrigin(0, 0.5)
        title_13.text = '0'
        title_13.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_13)

        // title_14
        const title_14 = this.add.text(448, 853, '', {})
        title_14.setOrigin(0, 0.5)
        title_14.text = '0'
        title_14.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_14)

        // title_15
        const title_15 = this.add.text(448, 828, '', {})
        title_15.setOrigin(0, 0.5)
        title_15.text = 'Likes'
        title_15.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        chooseIgloo.add(title_15)

        // title_16
        const title_16 = this.add.text(788, 853, '', {})
        title_16.setOrigin(0, 0.5)
        title_16.text = '0'
        title_16.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_16)

        // title_17
        const title_17 = this.add.text(788, 828, '', {})
        title_17.setOrigin(0, 0.5)
        title_17.text = 'Likes'
        title_17.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        chooseIgloo.add(title_17)

        // title_18
        const title_18 = this.add.text(1127, 853, '', {})
        title_18.setOrigin(0, 0.5)
        title_18.text = '0'
        title_18.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'cpBurbankSmall', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_18)

        // title_19
        const title_19 = this.add.text(1127, 828, '', {})
        title_19.setOrigin(0, 0.5)
        title_19.text = 'Likes'
        title_19.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'cpBurbankSmall', fontSize: '20px'})
        chooseIgloo.add(title_19)

        // lists
        const categories = [all, location, igloos, flooring, room, wall, pets]
        const spinners = [plus, plus_1, plus_2, plus_3, plus_4]
        const likesText = [title_13, title_14, title_16, title_18]

        // button_edit (components)
        const button_editButton = new Button(button_edit)
        button_editButton.callback = () => this.chooseIglooButton()
        const button_editShowHint = new ShowHint(button_edit)
        button_editShowHint.text = 'editIgloo'

        // button_backyard (components)
        const button_backyardButton = new Button(button_backyard)
        button_backyardButton.callback = () => this.shell.room.joinBackyard()
        const button_backyardShowHint = new ShowHint(button_backyard)
        button_backyardShowHint.text = 'backyard'

        // button_furniture_catalog (components)
        const button_furniture_catalogButton = new Button(button_furniture_catalog)
        button_furniture_catalogButton.callback = () => this.showFurnitureCat()

        // music_panel (components)
        new Interactive(music_panel)

        // big_button (components)
        const big_buttonButton = new Button(big_button)
        big_buttonButton.callback = () => (this.iglooMusic.visible = true)

        // small_btn (components)
        const small_btnButton = new Button(small_btn)
        small_btnButton.callback = () => this.tweenControls()

        // music (components)
        const musicLocalisedString = new LocalisedString(music)
        musicLocalisedString.id = 'music'

        // hide (components)
        const hideLocalisedString = new LocalisedString(hide)
        hideLocalisedString.id = 'hide'

        // all (components)
        const allSimpleButton = new SimpleButton(all)
        allSimpleButton.callback = () => this.selectCategory(0)

        // location (components)
        const locationSimpleButton = new SimpleButton(location)
        locationSimpleButton.callback = () => this.selectCategory(1)

        // igloos (components)
        const igloosSimpleButton = new SimpleButton(igloos)
        igloosSimpleButton.callback = () => this.selectCategory(2)

        // flooring (components)
        const flooringSimpleButton = new SimpleButton(flooring)
        flooringSimpleButton.callback = () => this.selectCategory(3)

        // room (components)
        const roomSimpleButton = new SimpleButton(room)
        roomSimpleButton.callback = () => this.selectCategory(4)

        // wall (components)
        const wallSimpleButton = new SimpleButton(wall)
        wallSimpleButton.callback = () => this.selectCategory(5)

        // pets (components)
        const petsSimpleButton = new SimpleButton(pets)
        petsSimpleButton.callback = () => this.selectCategory(6)

        // top_bar (components)
        new Interactive(top_bar)

        // rectangle_1 (components)
        new Interactive(rectangle_1)

        // close_btn (components)
        const close_btnButton = new Button(close_btn)
        close_btnButton.callback = () => this.onSaveClick()

        // bg (components)
        new Interactive(bg)

        // choose_igloo (components)
        const choose_iglooButton = new Button(choose_igloo)
        choose_iglooButton.callback = () => this.onEditClick()

        // toggler (components)
        const togglerSimpleButton = new SimpleButton(toggler)
        togglerSimpleButton.callback = () => this.toggleOpen()

        // close_btn_1 (components)
        const close_btn_1Button = new Button(close_btn_1)
        close_btn_1Button.callback = () => this.closeChooseIgloo()

        this.button_backyard = button_backyard
        this.defaultControls = defaultControls
        this.button_box = button_box
        this.music = music
        this.hide = hide
        this.lower = lower
        this.itemContainer = itemContainer
        this.scrollbar = scrollbar
        this.scroller = scroller
        this.scrollBarContainer = scrollBarContainer
        this.upper = upper
        this.iglooMusic = iglooMusic
        this.controls = controls
        this.toggler = toggler
        this.grandTotalLikes = grandTotalLikes
        this.currentIglooLikes = currentIglooLikes
        this.chooseIgloo = chooseIgloo
        this.categories = categories
        this.spinners = spinners
        this.likesText = likesText

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()
        for (let s of this.spinners) {
            s.anims.play('blue-spinner')
        }

        this.items = []
        this.previews = []

        this.iglooFactory = new IglooFactory(this.shell)

        this.events.on('sleep', () => this.onSleep())
        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))
        this.input.on('pointerdown', (pointer) => this.onPointerDown(pointer))
        this.input.on('pointerup', (pointer) => this.onPointerDown(pointer))

        this.createMasks()

        this.controls.state = 'maximised'

        this.minX = 168
        this.maxX = 1257

        this.scrollbar.setInteractive()
        this.scrollbar.on('pointerdown', (pointer) => this.onScrollerDown(pointer))

        this.loadItems(0)
    }

    createMasks() {
        let previewMask0 = this.add.graphics()
        previewMask0.fillStyle(0xffffff, 0)
        previewMask0.beginPath()
        previewMask0.fillRoundedRect(181 * window.currentScale, 124 * window.currentScale, 596 * window.currentScale, 398 * window.currentScale, 22 * window.currentScale)
        this.previewMask0 = previewMask0.createGeometryMask()

        let previewMask1 = this.add.graphics()
        previewMask1.fillStyle(0xffffff, 0)
        previewMask1.beginPath()
        previewMask1.fillRoundedRect(101 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask1 = previewMask1.createGeometryMask()

        let previewMask2 = this.add.graphics()
        previewMask2.fillStyle(0xffffff, 0)
        previewMask2.beginPath()
        previewMask2.fillRoundedRect(441 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask2 = previewMask2.createGeometryMask()

        let previewMask3 = this.add.graphics()
        previewMask3.fillStyle(0xffffff, 0)
        previewMask3.beginPath()
        previewMask3.fillRoundedRect(781 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask3 = previewMask3.createGeometryMask()

        let previewMask4 = this.add.graphics()
        previewMask4.fillStyle(0xffffff, 0)
        previewMask4.beginPath()
        previewMask4.fillRoundedRect(1120 * window.currentScale, 627 * window.currentScale, 297 * window.currentScale, 187 * window.currentScale, 17 * window.currentScale)
        this.previewMask4 = previewMask4.createGeometryMask()

        let itemsMask = this.add.graphics()
        itemsMask.fillStyle(0xffffff, 0)
        itemsMask.beginPath()
        itemsMask.fillRect(0, 0, 1404.5 * window.currentScale, 182.5 * window.currentScale)
        this.itemsMask = itemsMask.createGeometryMask()
        this.itemContainer.setMask(this.itemsMask)
    }

    onSleep() {
        this.hideControls()
    }

    onLockClick() {
        if (this.shell.client.iglooOpen) {
            this.shell.client.iglooOpen = false
            this.button_lock.__ShowHint.text = 'Open Igloo'

            this.airtower.sendXt('g#cr')

            return
        }

        let text = this.crumbs.getString('igloo-open-confirm')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.shell.client.iglooOpen = true
            this.button_lock.__ShowHint.text = 'Close Igloo'

            this.airtower.sendXt('g#or')

            this.interface.prompt.window.visible = false
        })
    }

    onLockOut() {
        if (this.shell.client.iglooOpen) {
            this.button_lock.setFrame('button/lock-hover')
        }
    }

    chooseIglooButton() {
        this.interface.hideInterface(false)
        this.chooseIgloo.visible = true

        this.createPreviews()
    }

    createPreviews() {
        this.previews = []

        let main = this.iglooFactory.createIglooPreview(this.shell.room.argsToData(), 0)

        if (main.created) {
            this.scalePreview(main, 0)
        } else {
            main.events.once('create', () => {
                this.scalePreview(main, 0)
            })
        }

        this.currentIglooLikes.text = this.shell.room.likesWidget.likeNum.text

        for (let i = 0; i < 4; i++) {
            this.airtower.sendXt('g#gi', i)
        }

        this.previews.push(main)
    }

    createPreview(data) {
        const id = parseInt(data[0])
        data[0] = this.shell.client.id + 2000

        let preview = this.iglooFactory.createIglooPreview(data, id + 1)
        if (preview.created) {
            this.scalePreview(preview, id + 1)
        } else {
            preview.events.once('create', () => {
                this.scalePreview(preview, id + 1)
            })
        }

        preview.input.on('pointerdown', () => this.switchIgloo(id))

        this.likesText[id].text = data[7]
        let gtl = 0
        this.likesText.forEach((l) => {
            gtl += parseInt(l.text)
        })
        this.grandTotalLikes.text = gtl
        this.previews.push(preview)
    }

    scalePreview(preview, position) {
        if (this.lastScale != window.currentScale) {
            this.createMasks()
        }
        this.lastScale = window.currentScale
        this.shell.events.on('updateScaling', () => this.scalePreview(preview, position))
        let scale, x, y, mask

        switch (position) {
            case 0:
                scale = 0.42
                x = 160
                y = 122
                mask = this.previewMask0
                break
            case 1:
                scale = 0.21
                x = 87
                y = 626
                mask = this.previewMask1
                break
            case 2:
                scale = 0.21
                x = 428
                y = 626
                mask = this.previewMask2
                break
            case 3:
                scale = 0.21
                x = 768
                y = 626
                mask = this.previewMask3
                break
            case 4:
                scale = 0.21
                x = 1108
                y = 626
                mask = this.previewMask4
                break
        }

        preview.cameras.main.setZoom(scale * window.currentScale)
        preview.cameras.main.trueScale = scale
        preview.cameras.main.setOrigin(0, 0)
        preview.cameras.main.x = x * window.currentScale
        preview.cameras.main.y = y * window.currentScale
        preview.cameras.main.setMask(mask)
    }

    closeChooseIgloo() {
        this.shell.room.showLikesWidget()
        this.chooseIgloo.visible = false

        this.previews.forEach((preview) => preview.stop())
        this.shell.events.off('updateScaling')
    }

    onEditClick() {
        this.chooseIgloo.visible = false
        this.shell.events.off('updateScaling')
        this.previews.forEach((preview) => preview.stop())
        this.shell.room.hidePenguins()
        this.shell.room.enableFurnitureInput()
        this.showControls()
    }

    onSaveClick() {
        this.saveIgloo()
        this.shell.room.showLikesWidget()
        this.shell.room.showPenguins()
        this.shell.room.disableFurnitureInput()
        this.hideControls()
    }

    showControls() {
        this.loadItems(0)
        this.defaultControls.visible = false
        this.controls.visible = true
    }

    hideControls() {
        this.defaultControls.visible = true
        this.controls.visible = false
    }

    saveIgloo() {
        if (this.shell.room.selected) {
            this.shell.room.selected.drop()
        }

        let furniture = this.shell.room.furnitureSprites.map((f) => {
            return `${f.id}|${f.x}|${f.y}|${parseInt(f.currentFrame[0])}|${parseInt(f.currentFrame[1])}`
        })

        this.airtower.sendXt('g#ur', furniture.join(','))
    }

    selectCategory(id) {
        for (let c of this.categories) {
            let n = c.frame.name
            if (n.substring(n.length - 9) == '-selected') {
                c.setFrame(n.substring(0, n.length - 9))
            }
        }

        this.categories[id].setFrame(this.categories[id].frame.name + '-selected')
        this.loadItems(id)

        if (this.controls.state == 'minimised') {
            this.tweenControls()
        }
    }

    loadItems(category) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].destroy()
        }
        this.items = []

        let xcoord = 85
        let items = []
        switch (category) {
            case 0:
                items = this.shell.client.furnitureInventory.concat(this.shell.client.locationInventory, this.shell.client.iglooInventory, this.shell.client.floorInventory)
                break
            case 1:
                items = this.shell.client.locationInventory
                break
            case 2:
                items = this.shell.client.iglooInventory
                break
            case 3:
                items = this.shell.client.floorInventory
                break
            case 4:
                this.shell.client.furnitureInventory.forEach((item) => {
                    if (this.crumbs.furniture[item.id].type == 1 || this.crumbs.furniture[item.id].type == 3) {
                        items.push(item)
                    }
                })
                break
            case 5:
                this.shell.client.furnitureInventory.forEach((item) => {
                    if (this.crumbs.furniture[item.id].type == 2) {
                        items.push(item)
                    }
                })
                break
            case 6:
                this.shell.client.furnitureInventory.forEach((item) => {
                    if (this.crumbs.furniture[item.id].type == 4) {
                        items.push(item)
                    }
                })
                break
        }

        this.loadIglooItems(items, xcoord)

        this.itemContainer.x = 0
        this.scroller.x = this.minX

        if (this.items.length * 120 > this.maxX - this.minX + 100) {
            this.scrollBarContainer.visible = true
        } else {
            this.scrollBarContainer.visible = false
        }
        this.category = category
    }

    loadIglooItems(list, xcoord) {
        let first50 = list.slice(0, 50)

        for (let item of first50) {
            let sprite = new IglooItem(this, xcoord, 85)
            this.itemContainer.add(sprite)
            this.items.push(sprite)
            sprite.setItem(item.type, item.id, item.quantity)
            xcoord += 120
        }
        if (list.length > 50) {
            this.nextIglooItems = () => {
                this.loadIglooItems(list.slice(50), xcoord)
            }
        } else {
            this.nextIglooItems = null
        }
    }

    updateQuantities() {
        for (let item of this.items) {
            item.updateQuantity()
        }
    }

    showMirror(id, x, y) {
        if (this.controls.state == 'minimised') return
        if (!this.mirrorItem) {
            this.mirrorItem = this.add.image(`furniture/icon/furniture/${id}`, x, y)
        } else if (this.mirrorItem.id != id) {
            this.mirrorItem.setTexture(`furniture/icon/furniture/${id}`)
        }
        this.mirrorItem.x = x
        this.mirrorItem.y = y
        this.mirrorItem.visible = true
        this.mirrorItem.moved = false
    }

    hideMirror() {
        if (this.mirrorItem) this.mirrorItem.visible = false
    }

    onPointerMove(pointer) {
        if (!this.mirrorItem || !this.mirrorItem.visible) return
        this.shell.room.onPointerMove(pointer)
        this.mirrorItem.moved = true
    }

    onPointerDown(pointer) {
        if (!this.mirrorItem || !this.mirrorItem.visible || !this.mirrorItem.moved) return
        this.shell.room.onPointerDown(pointer)
        this.hideMirror()
    }

    switchIgloo(id) {
        let x, y
        switch (id) {
            case 0:
                x = 101
                y = 627
                break
            case 1:
                x = 441
                y = 627
                break
            case 2:
                x = 781
                y = 627
                break
            case 3:
                x = 1121
                y = 627
                break
        }
        if (this.input.activePointer.x < x || this.input.activePointer.x > x + 297 || this.input.activePointer.y < y || this.input.activePointer.y > y + 187) return
        this.airtower.sendXt('g#ci', id)
    }

    tweenControls() {
        if (this.controls.state == 'minimised') {
            this.maximiseControls()
        } else if (this.controls.state == 'maximised') {
            this.minimiseControls()
        }
    }

    minimiseControls() {
        this.controls.state = 'tweening'
        this.hide.text = this.crumbs.getString('show')
        this.tweens.add({
            targets: this.upper,
            y: -187,
            duration: 500,
            ease: 'Power2',
            onComplete: () => {
                this.controls.state = 'minimised'
            }
        })
        this.tweens.add({
            targets: this.lower,
            y: -279,
            duration: 500,
            ease: 'Power2'
        })
    }

    maximiseControls() {
        this.controls.state = 'tweening'
        this.hide.text = this.crumbs.getString('hide')
        this.tweens.add({
            targets: this.upper,
            y: 0,
            duration: 500,
            ease: 'Power2',
            onComplete: () => {
                this.controls.state = 'maximised'
            }
        })
        this.tweens.add({
            targets: this.lower,
            y: 25,
            duration: 500,
            ease: 'Power2'
        })
    }

    toggleOpen() {
        if (this.shell.client.iglooOpenState == 'open') {
            this.shell.client.iglooOpenState = 'closed'
            this.tweens.add({
                targets: this.toggler,
                x: 1151,
                duration: 200,
                ease: 'Power2'
            })
            this.airtower.sendXt('g#cr')
            return
        }

        this.shell.client.iglooOpenState = 'open'
        this.tweens.add({
            targets: this.toggler,
            x: 1217,
            duration: 200,
            ease: 'Power2'
        })
        this.airtower.sendXt('g#or')
    }

    onScrollerDown(pointer) {
        let x = pointer.x
        if (x < this.minX) x = this.minX
        if (x > this.maxX) x = this.maxX
        this.scroller.x = x
        this.input.on('pointermove', this.onScrollerMove, this)
        this.input.on('pointerup', this.onScrollerUp, this)
    }

    onScrollerMove(pointer) {
        let x = pointer.x
        if (x < this.minX) x = this.minX
        if (x > this.maxX) x = this.maxX
        this.scroller.x = x

        let distance = Phaser.Math.Difference(this.minX, x)
        let width = this.items.length * 120 > this.maxX - this.minX + 100 ? this.items.length * 120 - (this.maxX - this.minX + 300) : 0
        let xoffset = width / (this.maxX - this.minX)
        this.itemContainer.x = -(distance * xoffset)

        const prevLength = this.items.length

        if (distance > 700 && this.nextIglooItems) {
            this.nextIglooItems()
            let diffPerc = (this.items.length - prevLength) / this.items.length
            distance = distance * (1 - diffPerc)
            this.scroller.x = this.minX + distance
            width = this.items.length * 120 > this.maxX - this.minX + 100 ? this.items.length * 120 - (this.maxX - this.minX + 300) : 0
            xoffset = width / (this.maxX - this.minX)
            this.itemContainer.x = -(distance * xoffset)
        }
    }

    onScrollerUp(pointer) {
        this.input.removeListener('pointermove', this.onScrollerMove)
        this.input.removeListener('pointerup', this.onScrollerUp)
        this.scrollerDown = false
    }

    showFurnitureCat() {
        //this.interface.prompt.showError('Use !af {ID} in the chat bar to obtain furniture. EG: !af 100 You can also use !afl {ID} to add flooring, !al {id} to add locations and !aig {ID} to add igloos, but beware many igloos have not yet been implemented.')
        this.interface.loadExternal('FurnitureCatalog')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
