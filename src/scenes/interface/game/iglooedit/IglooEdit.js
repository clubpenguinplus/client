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
        const plus = this.add.image(250, 716, 'iglooedit-new', 'plus')
        chooseIgloo.add(plus)

        // preview_pane_1
        const preview_pane_1 = this.add.image(590, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane_1)

        // plus_1
        const plus_1 = this.add.image(590, 716, 'iglooedit-new', 'plus')
        chooseIgloo.add(plus_1)

        // preview_pane_2
        const preview_pane_2 = this.add.image(930, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane_2)

        // plus_2
        const plus_2 = this.add.image(930, 716, 'iglooedit-new', 'plus')
        chooseIgloo.add(plus_2)

        // preview_pane_3
        const preview_pane_3 = this.add.image(1269, 744, 'iglooedit-new', 'preview-pane')
        chooseIgloo.add(preview_pane_3)

        // plus_3
        const plus_3 = this.add.image(1269, 716, 'iglooedit-new', 'plus')
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

        // lists
        const categories = [all, location, igloos, flooring, room, wall, pets]

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

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.items = []

        this.iglooFactory = new IglooFactory(this.shell)

        this.events.on('sleep', () => this.onSleep())
        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.graphics = this.add.graphics()
        let previewMask = this.add.graphics()
        previewMask.fillStyle(0xffffff, 0)
        previewMask.beginPath()
        previewMask.fillRoundedRect(181, 124, 596, 398, 22)
        this.previewMask = previewMask.createGeometryMask()
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

        this.preview = this.iglooFactory.createIglooPreview(this.shell.room.argsToData())
        this.preview.events.once('create', () => {
            this.preview.cameras.main.setZoom(0.42)
            this.preview.cameras.main.setOrigin(0, 0)
            this.preview.cameras.main.x = 160
            this.preview.cameras.main.y = 122
            this.preview.cameras.main.setMask(this.previewMask)
        })
    }

    closeChooseIgloo() {
        this.interface.showInterface()
        this.chooseIgloo.visible = false

        this.preview.stop()
    }

    onEditClick() {
        this.chooseIgloo.visible = false
        this.preview.stop()
        this.shell.room.hidePenguins()
        this.shell.room.enableFurnitureInput()
        this.showControls()
    }

    onSaveClick() {
        this.saveIgloo()
        this.interface.showInterface()
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
    }

    loadItems(category) {
        let xcoord = 85
        for (let item of this.shell.client.furnitureInventory) {
            let sprite = new IglooItem(this, xcoord, 85)
            this.controls.add(sprite)
            this.items.push(sprite)
            sprite.setItem('furniture', item.id, item.quantity)
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
