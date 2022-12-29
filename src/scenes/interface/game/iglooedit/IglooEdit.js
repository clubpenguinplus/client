import BaseScene from '@scenes/base/BaseScene'

import {Button, Interactive, ShowHint, SimpleButton, LocalisedString} from '@components/components'

import IglooFactory from '@engine/world/room/IglooFactory'

import IglooMusic from './igloomusic/IglooMusic'
import IglooItem from './IglooItem'

/* START OF COMPILED CODE */

export default class IglooEdit extends BaseScene {
    constructor() {
        super('IglooEdit')

        /** @type {Phaser.GameObjects.Container} */
        this.defaultControls
        /** @type {Phaser.GameObjects.Image} */
        this.button_backyard
        /** @type {Phaser.GameObjects.Container} */
        this.controls
        /** @type {Phaser.GameObjects.Image} */
        this.button_box
        /** @type {Phaser.GameObjects.Text} */
        this.music
        /** @type {Phaser.GameObjects.Text} */
        this.hide
        /** @type {Phaser.GameObjects.Container} */
        this.chooseIgloo
        /** @type {Phaser.GameObjects.Image[]} */
        this.categories
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.spinners

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
        const controls = this.add.container(0.0014140540733933449, -0.0016985858862005642)
        controls.visible = false

        // button_furniture_catalog
        const button_furniture_catalog = this.add.image(1396.9985859979595, 739.0016987305266, 'iglooedit-new', 'catalog')
        controls.add(button_furniture_catalog)

        // button_box
        const button_box = this.add.image(1424.9985859979595, 883.0016987305266, 'iglooedit-new', 'cardboardbox')
        button_box.setOrigin(0.5, 0.584)
        controls.add(button_box)

        // music_panel
        const music_panel = this.add.image(56.99858599795955, 25.001698730526513, 'iglooedit-new', 'music-panel')
        controls.add(music_panel)

        // all
        const all = this.add.image(659.9985859979596, 215.00169873052653, 'iglooedit-new', 'all-selected')
        controls.add(all)

        // location
        const location = this.add.image(774.9985859979596, 216.00169873052653, 'iglooedit-new', 'location')
        controls.add(location)

        // igloos
        const igloos = this.add.image(889.9985859979596, 216.00169873052653, 'iglooedit-new', 'igloos')
        controls.add(igloos)

        // flooring
        const flooring = this.add.image(1004.9985859979596, 216.00169873052653, 'iglooedit-new', 'flooring')
        controls.add(flooring)

        // room
        const room = this.add.image(1119.9985859979595, 216.00169873052653, 'iglooedit-new', 'room')
        controls.add(room)

        // wall
        const wall = this.add.image(1234.9985859979595, 216.00169873052653, 'iglooedit-new', 'wall')
        controls.add(wall)

        // pets
        const pets = this.add.image(1349.9985859979595, 216.00169873052653, 'iglooedit-new', 'pets')
        controls.add(pets)

        // top_bar
        const top_bar = this.add.image(777.9985859979596, 72.00169873052651, 'iglooedit-new', 'top-bar')
        controls.add(top_bar)

        // close_btn
        const close_btn = this.add.image(1466.9985859979595, 48.00169873052651, 'iglooedit-new', 'close-btn')
        controls.add(close_btn)

        // x
        const x = this.add.image(1466.9985859979595, 47.00169873052651, 'iglooedit-new', 'x')
        controls.add(x)

        // big_button
        const big_button = this.add.ninePatchContainer(91.99858599795955, 271.0016987305264, 80, 65, 'iglooedit-new', 'big-button')
        controls.add(big_button)

        // music_icon
        const music_icon = this.add.image(90.99858599795955, 271.0016987305264, 'iglooedit-new', 'music-icon')
        controls.add(music_icon)

        // arrow
        const arrow = this.add.image(163.99858599795957, 272.0016987305264, 'iglooedit-new', 'arrow')
        controls.add(arrow)

        // small_btn
        const small_btn = this.add.ninePatchContainer(106.99858599795955, 353.0016987305264, 150, 42, 'iglooedit-new', 'small-btn')
        small_btn.marginLeft = 30
        small_btn.marginRight = 30
        controls.add(small_btn)

        // music
        const music = this.add.text(91.99858599795955, 225.00169873052653, '', {})
        music.setOrigin(0.5, 0.5)
        music.text = 'Music'
        music.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 150, fontFamily: 'Burbank Small', fontSize: '22px', fontStyle: 'bold'})
        controls.add(music)

        // hide
        const hide = this.add.text(106.99858599795955, 353.0016987305264, '', {})
        hide.setOrigin(0.5, 0.5)
        hide.text = 'Hide'
        hide.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 150, fontFamily: 'Burbank Small', fontSize: '22px', fontStyle: 'bold'})
        controls.add(hide)

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

        // title_3
        const title_3 = this.add.text(870, 151, '', {})
        title_3.setOrigin(0, 0.5)
        title_3.text = '0'
        title_3.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})
        chooseIgloo.add(title_3)

        // title_4
        const title_4 = this.add.text(870, 114, '', {})
        title_4.setOrigin(0, 0.5)
        title_4.text = 'Grand Total Likes:'
        title_4.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '28px'})
        chooseIgloo.add(title_4)

        // title_5
        const title_5 = this.add.text(891, 263, '', {})
        title_5.setOrigin(0, 0.5)
        title_5.text = 'Your current igloo'
        title_5.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '28px', fontStyle: 'bold'})
        chooseIgloo.add(title_5)

        // title_6
        const title_6 = this.add.text(1060, 349, '', {})
        title_6.setOrigin(0.5, 0.5)
        title_6.text = 'Friends'
        title_6.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_6)

        // title_7
        const title_7 = this.add.text(1300, 349, '', {})
        title_7.setOrigin(0.5, 0.5)
        title_7.text = 'Everyone'
        title_7.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_7)

        // title_8
        const title_8 = this.add.text(944, 429, '', {})
        title_8.setOrigin(0.5, 0.5)
        title_8.text = 'Edit'
        title_8.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_8)

        // title_9
        const title_9 = this.add.text(1180, 429, '', {})
        title_9.setOrigin(0.5, 0.5)
        title_9.text = 'Igloo Visitors'
        title_9.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 250, fontFamily: 'Burbank Small', fontSize: '18px', fontStyle: 'bold'})
        chooseIgloo.add(title_9)

        // title_10
        const title_10 = this.add.text(892, 507, '', {})
        title_10.setOrigin(0, 0.5)
        title_10.text = '0'
        title_10.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '32px', fontStyle: 'bold'})
        chooseIgloo.add(title_10)

        // title_11
        const title_11 = this.add.text(892, 472, '', {})
        title_11.setOrigin(0, 0.5)
        title_11.text = 'Likes'
        title_11.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '26px'})
        chooseIgloo.add(title_11)

        // plus_4
        const plus_4 = this.add.sprite(480, 318, 'iglooedit-new', 'spinner0001')
        chooseIgloo.add(plus_4)

        // title_12
        const title_12 = this.add.text(108, 828, '', {})
        title_12.setOrigin(0, 0.5)
        title_12.text = 'Likes'
        title_12.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '20px'})
        chooseIgloo.add(title_12)

        // title_13
        const title_13 = this.add.text(108, 853, '', {})
        title_13.setOrigin(0, 0.5)
        title_13.text = '0'
        title_13.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_13)

        // title_14
        const title_14 = this.add.text(448, 853, '', {})
        title_14.setOrigin(0, 0.5)
        title_14.text = '0'
        title_14.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_14)

        // title_15
        const title_15 = this.add.text(448, 828, '', {})
        title_15.setOrigin(0, 0.5)
        title_15.text = 'Likes'
        title_15.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '20px'})
        chooseIgloo.add(title_15)

        // title_16
        const title_16 = this.add.text(788, 853, '', {})
        title_16.setOrigin(0, 0.5)
        title_16.text = '0'
        title_16.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_16)

        // title_17
        const title_17 = this.add.text(788, 828, '', {})
        title_17.setOrigin(0, 0.5)
        title_17.text = 'Likes'
        title_17.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '20px'})
        chooseIgloo.add(title_17)

        // title_18
        const title_18 = this.add.text(1127, 853, '', {})
        title_18.setOrigin(0, 0.5)
        title_18.text = '0'
        title_18.setStyle({color: '#3e83c5ff', fixedWidth: 100, fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})
        chooseIgloo.add(title_18)

        // title_19
        const title_19 = this.add.text(1127, 828, '', {})
        title_19.setOrigin(0, 0.5)
        title_19.text = 'Likes'
        title_19.setStyle({color: '#3e83c5ff', fixedWidth: 500, fontFamily: 'Burbank Small', fontSize: '20px'})
        chooseIgloo.add(title_19)

        // lists
        const categories = [all, location, igloos, flooring, room, wall, pets]
        const spinners = [plus, plus_1, plus_2, plus_3, plus_4]

        // button_edit (components)
        const button_editButton = new Button(button_edit)
        button_editButton.spriteName = 'edit-btn'
        button_editButton.callback = () => this.chooseIglooButton()
        const button_editShowHint = new ShowHint(button_edit)
        button_editShowHint.text = 'editIgloo'

        // button_backyard (components)
        const button_backyardButton = new Button(button_backyard)
        button_backyardButton.spriteName = 'backyard'
        const button_backyardShowHint = new ShowHint(button_backyard)
        button_backyardShowHint.text = 'backyard'

        // button_furniture_catalog (components)
        const button_furniture_catalogButton = new Button(button_furniture_catalog)
        button_furniture_catalogButton.spriteName = 'catalog'
        button_furniture_catalogButton.callback = () => this.interface.loadExternal('FurnitureCatalog')
        button_furniture_catalogButton.activeFrame = false

        // music_panel (components)
        new Interactive(music_panel)

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

        // close_btn (components)
        const close_btnButton = new Button(close_btn)
        close_btnButton.spriteName = 'close-btn'
        close_btnButton.callback = () => this.onSaveClick()

        // music (components)
        const musicLocalisedString = new LocalisedString(music)
        musicLocalisedString.id = 'music'

        // hide (components)
        const hideLocalisedString = new LocalisedString(hide)
        hideLocalisedString.id = 'hide'

        // bg (components)
        new Interactive(bg)

        // choose_igloo (components)
        const choose_iglooButton = new Button(choose_igloo)
        choose_iglooButton.spriteName = 'choose-igloo'
        choose_iglooButton.callback = () => this.onEditClick()

        // close_btn_1 (components)
        const close_btn_1Button = new Button(close_btn_1)
        close_btn_1Button.spriteName = 'close-btn'
        close_btn_1Button.callback = () => this.closeChooseIgloo()

        this.defaultControls = defaultControls
        this.button_backyard = button_backyard
        this.controls = controls
        this.button_box = button_box
        this.music = music
        this.hide = hide
        this.chooseIgloo = chooseIgloo
        this.categories = categories
        this.spinners = spinners

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

        let text = 'Would you like to open your igloo?\nThis will add your igloo to the map.'

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

        this.previews.push(preview)
    }

    scalePreview(preview, position) {
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
    }

    onEditClick() {
        this.chooseIgloo.visible = false
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
                    if (this.crumbs.furniture[item.id].type == 1) {
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
                    if (this.crumbs.furniture[item.id].type == 3) {
                        items.push(item)
                    }
                })
                break
            case 7:
                this.shell.client.furnitureInventory.forEach((item) => {
                    if (this.crumbs.furniture[item.id].type == 4) {
                        items.push(item)
                    }
                })
                break
        }

        for (let item of items) {
            let sprite = new IglooItem(this, xcoord, 85)
            this.controls.add(sprite)
            this.items.push(sprite)
            sprite.setItem(item.type, item.id, item.quantity)
            xcoord += 120
        }
    }

    showMirror(id, x, y) {
        if (!this.mirrorItem) {
            this.mirrorItem = this.add.image(`furniture/icon/furniture/${id}`, x, y)
        } else if (this.mirrorItem.id != id) {
            this.mirrorItem.setTexture(`furniture/icon/furniture/${id}`)
        }
        this.mirrorItem.x = x
        this.mirrorItem.y = y
        this.mirrorItem.visible = true
    }

    hideMirror() {
        if (this.mirrorItem) this.mirrorItem.visible = false
    }

    onPointerMove(pointer) {
        if (!this.mirrorItem || !this.mirrorItem.visible) return
        this.shell.room.onPointerMove(pointer)
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
