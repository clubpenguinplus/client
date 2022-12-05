import BaseScene from '@scenes/base/BaseScene'

import {Button, Interactive, ShowHint, SimpleButton, LocalisedString} from '@components/components'

import IglooMusic from './igloomusic/IglooMusic'

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
        this.button_furniture
        /** @type {Phaser.GameObjects.Text} */
        this.music
        /** @type {Phaser.GameObjects.Text} */
        this.hide

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
        const controls = this.add.container(162, 359)
        controls.visible = false

        // button_furniture_catalog
        const button_furniture_catalog = this.add.image(1235, 380, 'iglooedit-new', 'catalog')
        controls.add(button_furniture_catalog)

        // button_furniture
        const button_furniture = this.add.image(1263, 524, 'iglooedit-new', 'cardboardbox')
        button_furniture.setOrigin(0.5, 0.584)
        controls.add(button_furniture)

        // music_panel
        const music_panel = this.add.image(-105, -307, 'iglooedit-new', 'music-panel')
        controls.add(music_panel)

        // all
        const all = this.add.image(498, -117, 'iglooedit-new', 'all-selected')
        controls.add(all)

        // location
        const location = this.add.image(613, -116, 'iglooedit-new', 'location')
        controls.add(location)

        // igloos
        const igloos = this.add.image(728, -116, 'iglooedit-new', 'igloos')
        controls.add(igloos)

        // flooring
        const flooring = this.add.image(843, -116, 'iglooedit-new', 'flooring')
        controls.add(flooring)

        // room
        const room = this.add.image(958, -116, 'iglooedit-new', 'room')
        controls.add(room)

        // wall
        const wall = this.add.image(1073, -116, 'iglooedit-new', 'wall')
        controls.add(wall)

        // pets
        const pets = this.add.image(1188, -116, 'iglooedit-new', 'pets')
        controls.add(pets)

        // top_bar
        const top_bar = this.add.image(616, -260, 'iglooedit-new', 'top-bar')
        controls.add(top_bar)

        // close_btn
        const close_btn = this.add.image(1307, -316, 'iglooedit-new', 'close-btn')
        controls.add(close_btn)

        // x
        const x = this.add.image(1307, -317, 'iglooedit-new', 'x')
        controls.add(x)

        // big_button
        const big_button = this.add.ninePatchContainer(-70, -61, 80, 65, 'iglooedit-new', 'big-button')
        controls.add(big_button)

        // music_icon
        const music_icon = this.add.image(-71, -61, 'iglooedit-new', 'music-icon')
        controls.add(music_icon)

        // arrow
        const arrow = this.add.image(2, -60, 'iglooedit-new', 'arrow')
        controls.add(arrow)

        // small_btn
        const small_btn = this.add.ninePatchContainer(-55, 21, 150, 42, 'iglooedit-new', 'small-btn')
        small_btn.marginLeft = 30
        small_btn.marginRight = 30
        controls.add(small_btn)

        // music
        const music = this.add.text(-70, -107, '', {})
        music.setOrigin(0.5, 0.5)
        music.text = 'Music'
        music.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 150, fontFamily: 'Burbank Small', fontSize: '22px', fontStyle: 'bold'})
        controls.add(music)

        // hide
        const hide = this.add.text(-55, 21, '', {})
        hide.setOrigin(0.5, 0.5)
        hide.text = 'Hide'
        hide.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 150, fontFamily: 'Burbank Small', fontSize: '22px', fontStyle: 'bold'})
        controls.add(hide)

        // text_1
        const text_1 = this.add.text(705, 228, '', {})
        text_1.text = 'Sahmyool'
        text_1.setStyle({fontFamily: 'Burbank Small', fontSize: '24px', stroke: '#3a3a3aff', strokeThickness: 10})

        // button_edit (components)
        const button_editButton = new Button(button_edit)
        button_editButton.spriteName = 'edit-btn'
        button_editButton.callback = () => this.onEditClick()
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

        // button_furniture (components)
        const button_furnitureButton = new Button(button_furniture)
        button_furnitureButton.spriteName = 'cardboardbox'
        button_furnitureButton.callback = () => this.onFurnitureClick()
        button_furnitureButton.activeFrame = false

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

        this.defaultControls = defaultControls
        this.button_backyard = button_backyard
        this.controls = controls
        this.button_furniture = button_furniture
        this.music = music
        this.hide = hide

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.events.on('sleep', () => this.onSleep())
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

    onEditClick() {
        this.interface.hideInterface(false)
        this.shell.room.showEditBg()
        this.shell.room.hidePenguins()
        this.shell.room.enableFurnitureInput()
        this.showControls()
    }

    onSaveClick() {
        this.saveIgloo()
        this.interface.showInterface()
        this.shell.room.hideEditBg()
        this.shell.room.showPenguins()
        this.shell.room.disableFurnitureInput()
        this.hideControls()
    }

    showControls() {
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
