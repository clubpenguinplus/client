import RoomScene from '../rooms/RoomScene'

import FurnitureLoader from '@engine/loaders/FurnitureLoader'
import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'
import PhysicsMaskGraphics from '@engine/utils/mask/PhysicsMaskGraphics'
import RoomCrate from './crates/RoomCrate'
import WallCrate from './crates/WallCrate'

import Puffle from '@engine/world/room/puffle/Puffle'

export default class IglooScene extends RoomScene {
    constructor(key) {
        super(key)

        this.isIgloo = true
        this.roomCrate
        this.wallCrate

        // Igloo physics areas
        this.pet
        this.room
        this.trash
        this.wall

        // Selected furniture sprite
        this.selected

        // List of puffles
        this.puffles = []
    }

    init(data) {
        this.args = this.dataToArgs(data)

        this.id = this.args.igloo
        this.music = this.args.music

        this.loader = new FurnitureLoader(this)

        // Active furniture quantities
        this.quantities = {}

        this.events.once('shutdown', () => this.onShutdown())
    }

    dataToArgs(data) {
        let users = data.args[1].split(',').map((u) => {
            return this.shell.arrayToObject(u)
        })

        let furniture = data.args[6].split(',').map((f) => {
            let [id, furnitureId, x, y, frame, rotation] = f.split('|')
            return {id, furnitureId, x, y, frame, rotation}
        })

        return {
            igloo: data.args[0],
            users: users,
            type: data.args[2],
            flooring: data.args[3],
            music: data.args[4],
            location: data.args[5],
            furniture: furniture,
        }
    }

    argsToData() {
        let furniture = this.args.furniture.map((f) => `${f.id}|${f.furnitureId}|${f.x}|${f.y}|${f.frame}|${f.rotation}`).join(',')

        return [this.args.igloo, '', this.args.type, this.args.flooring, this.args.music, this.args.location, furniture]
    }

    preload() {
        super.preload()

        this.load.baseURL = window.location.hostname == 'localhost' ? `${window.location.origin}/` : 'https://media.cpplus.pw/'

        this.load.image(`locations/${this.args.location}`, `/client/media/igloos/locations/sprites/${this.args.location}.webp`)

        if (this.args.flooring && parseInt(this.args.flooring) > 1) this.loadFlooring(this.args.flooring)
    }

    get editing() {
        if (this.interface.iglooEdit.controls) {
            return this.interface.iglooEdit.controls.visible
        }
    }

    get furnitureSprites() {
        return this.children.list.filter((f) => f instanceof FurnitureSprite)
    }

    getQuantity(item) {
        let inventoryQuantity = this.shell.client.furniture[item]
        let activeQuantity = this.quantities[item] ? this.quantities[item] : 0

        return Math.max(inventoryQuantity - activeQuantity, 0)
    }

    onShutdown() {
        if (this.isPreview) return
        this.interface.hideIglooEdit()
    }

    create() {
        if (this.id == this.shell.client.id) {
            this.addCrates()
            this.interface.showIglooEdit()
        }

        super.create()
        this.floor.depth = -2

        if (this.args.flooring) this.addFlooring(this.args.flooring)
        this.addLocation()
        this.loadAllFurniture()

        this.created = true

        if (this.isPreview) return this.scene.bringToTop(this)

        //this.shell.airtower.sendXt('p#pg', this.id)
        this.showLikesWidget()

        if (!this.penguins) return

        if (this.id == this.shell.client.id && Object.keys(this.penguins).length >= 10) {
            this.shell.client.stampEarned(17)
        }

        if (this.id == this.shell.client.id && Object.keys(this.penguins).length >= 30) {
            this.shell.client.stampEarned(28)
        }
    }

    showLikesWidget() {
        this.shell.interface.loadExternal('IglooLikesWidget')
        this.airtower.sendXt('g#il', this.id)

        this.interface.bringToTop('Main')
        setTimeout(() => {
            this.interface.main.safetyquiz.visible = false
            this.interface.main.moderatoricon.visible = false
        }, 100)

        this.likesWidget = this.scene.get('IglooLikesWidget')
    }

    addCrates() {
        this.roomCrate = new RoomCrate(this, this.floorSpawn[0], this.floorSpawn[1])
        this.roomCrate.depth = this.roomCrate.y

        this.wallCrate = new WallCrate(this, this.wallSpawn[0], this.wallSpawn[1])
        this.wallCrate.depth = this.wallCrate.y

        this.add.existing(this.roomCrate)
        this.add.existing(this.wallCrate)
    }

    addFlooring(flooring) {
        if (this.flooring) this.flooring.destroy()

        this.flooring = this.add.image(0, 0, `flooring/${flooring}`, `${this.floorFrame}_1`)
        this.flooring.depth = -1

        if (this.isPreview) return

        if (this.roomPhysics.mask) {
            let mask = this.createMask()

            this.flooring.setMask(mask)
        }
    }

    addLocation() {
        let location = this.add.image(760, 480, `locations/${this.args.location}`)
        location.depth = -4
    }

    hidePenguins() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = false
            penguin.nameTag.visible = false

            if (penguin.balloon) penguin.balloon.visible = false
        }
    }

    showPenguins() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = true
            penguin.nameTag.visible = true
        }
    }

    loadFlooring(flooring) {
        if (this.textures.exists(`flooring/${flooring}`)) return
        let path = '/client/media/igloos/flooring/sprites'

        this.load.multiatlas({
            key: `flooring/${flooring}`,
            atlasURL: `${path}/${flooring}.json`,
            path: path,
        })
    }

    updateFlooring(flooring) {
        this.args.flooring = flooring

        if (flooring == 0 && this.flooring) return this.flooring.destroy()

        if (this.textures.exists(`flooring/${flooring}`)) {
            return this.addFlooring(flooring)
        }

        this.loadFlooring(flooring)
        this.load.start()
        this.load.once(`filecomplete-json-flooring/${flooring}`, () => {
            this.addFlooring(flooring)
        })
    }

    updateMusic(music) {
        this.stopMusic()

        this.music = music

        if (!music) {
            return
        }

        if (this.cache.audio.exists(music)) {
            return this.addMusic()
        }

        this.load.audio(music, `client/media/music/${music}.mp3`)
        this.load.start()

        this.load.once(`filecomplete-audio-${music}`, () => {
            this.addMusic()
        })
    }

    loadAllFurniture() {
        for (let f of this.args.furniture) {
            this.updateQuantity(f.furnitureId)
            this.loader.loadFurniture(f.furnitureId, null, f.x, f.y, f.rotation, f.frame, this)
        }
        this.loader.start()
    }

    setSprite(sprite) {
        // Empty method to prevent errors
    }

    loadFurniture(item) {
        let crate = this.crumbs.furniture[item].type == 2 ? this.wallCrate : this.roomCrate

        this.updateQuantity(item)
        this.loader.loadFurniture(item, crate, crate.defaultX, crate.defaultY)
        this.loader.start()
    }

    updateIgloo(type) {
        if (this.id != this.shell.client.id || this.args.type == type || !(type in this.crumbs.scenes.igloos)) {
            return
        }

        let text = 'Are you sure you want to change your igloo? \nYour flooring will be lost. \nIgloo items will be saved in your inventory.'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.interface.showLoading(this.getString('joining', 'igloo'))
            this.airtower.sendXt('g#au', type)

            this.interface.prompt.window.visible = false
        })
    }

    updateLocation(location) {
        if (this.id != this.shell.client.id || this.args.location == location) {
            return
        }

        this.airtower.sendXt('g#al', location)
    }

    updateQuantity(item) {
        this.quantities[item] = this.quantities[item] ? this.quantities[item] + 1 : 1
    }

    /*======= Physics =======*/

    addPhysics() {
        super.addPhysics()

        this.pet = this.addBody('pet')
        this.room = this.addBody('room')
        this.trash = this.addBody('trash')
        this.wall = this.addBody('wall')
    }

    createMask() {
        let fixtures = this.roomPhysics.mask.fixtures
        let graphics = new PhysicsMaskGraphics(this, fixtures)

        return graphics.createGeometryMask()
    }

    /*======= Furniture input =======*/

    enableFurnitureInput() {
        for (let f of this.furnitureSprites) {
            f.setInteractive()
        }
    }

    disableFurnitureInput() {
        for (let f of this.furnitureSprites) {
            f.disableInteractive()
        }
    }

    addInput() {
        super.addInput()

        // Only add editor input in client igloo
        if (this.id != this.shell.client.id) return

        this.input.dragDistanceThreshold = 1

        this.input.on('pointerdown', (pointer, target) => this.onPointerDown(pointer, target))
        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.input.keyboard.on('keydown-UP', () => this.updateFrame(1, 1))
        this.input.keyboard.on('keydown-LEFT', () => this.updateFrame(0, 1))
        this.input.keyboard.on('keydown-DOWN', () => this.updateFrame(1, -1))
        this.input.keyboard.on('keydown-RIGHT', () => this.updateFrame(0, -1))
    }

    onPointerMove(pointer) {
        if (this.editing && this.selected) {
            this.selected.drag(pointer)
            if (this.selected.y < 186) {
                this.interface.iglooEdit.showMirror(this.selected.id, this.selected.x, this.selected.y)
            } else {
                this.interface.iglooEdit.hideMirror()
            }
        }
    }

    onPointerDown(pointer, target) {
        if (pointer.button != 0 || !this.editing) {
            return
        }

        if (!this.selected && target[0] && target[0] instanceof FurnitureSprite) {
            target[0].hover(pointer)
        } else if (this.selected) {
            this.selected.drop()
        }
    }

    updateFrame(index, value) {
        if (this.editing && this.selected) {
            this.selected.updateFrame(index, value)
        }
    }

    setSelected(furniture = null) {
        this.selected = furniture
        if (this.selected && this.selected.y < 186) this.interface.iglooEdit.showMirror(this.selected.id, this.selected.x, this.selected.y)
    }

    spawnPuffles(puffleArray) {
        this.puffleArray = puffleArray
        for (var x in this.puffleArray) {
            new Puffle(this.puffleArray[x], this)
        }
    }

    spawnPuffle(puffle) {
        for (var x in this.puffleArray) {
            if (this.puffleArray[x].id == puffle) {
                new Puffle(this.puffleArray[x], this)
            }
        }
    }

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)

        if (this.id == this.shell.client.id && Object.keys(this.penguins).length >= 10) {
            this.shell.client.stampEarned(17)
        }

        if (this.id == this.shell.client.id && Object.keys(this.penguins).length >= 30) {
            this.shell.client.stampEarned(28)
        }
    }

    stop() {
        this.created = false
        for (let p in this.puffles) {
            if (this.puffles[p]) this.puffles[p].destroy()
        }
        if (this.likesWidget) this.likesWidget.scene.stop()
        this.shell.interface.main.showTR()
        super.stop()
    }
}
