import RoomScene from '../rooms/RoomScene'

import FurnitureLoader from '@engine/loaders/FurnitureLoader'
import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'
import PhysicsMaskGraphics from '@engine/utils/mask/PhysicsMaskGraphics'
import RoomCrate from './crates/RoomCrate'
import WallCrate from './crates/WallCrate'
import IglooPuffle from './IglooPuffle'
import PuffleLoader from '@engine/loaders/PuffleLoader'
import Backyard from './Backyard'

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

        this.puffles = {}
    }

    init(data) {
        this.args = this.dataToArgs(data)

        this.id = this.args.igloo
        this.music = this.args.music
        if (!this.isPreview) this.updateMusic(this.music)

        this.loader = new FurnitureLoader(this)

        // Active furniture quantities
        this.quantities = {}

        this.events.once('shutdown', () => this.onShutdown())
    }

    dataToArgs(data) {
        let users = data.args[1].split(',').map((u) => {
            return this.shell.arrayToObject(u)
        })

        let furniture = (data.args[6] || '').split(',').map((f) => {
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
            furniture: furniture
        }
    }

    argsToData() {
        let furniture = this.furnitureSprites.map((f) => `${f.id}|${f.id}|${f.x}|${f.y}|${f.currentFrame[1]}|${f.currentFrame[0]}`).join(',')

        return [this.args.igloo, '', this.args.type, this.args.flooring, this.args.music, this.args.location, furniture]
    }

    preload() {
        super.preload()
        this.load.baseURL = this.shell.baseURL + '/'
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
            this.interface.showIglooEdit()
        }

        super.create()
        if (this.floor) this.floor.depth = -2

        if (this.args.flooring) this.updateFlooring(this.args.flooring)
        this.addLocation()
        this.loadAllFurniture()

        this.created = true

        if (this.isPreview) return this.scene.bringToTop(this)

        this.puffleLoader = new PuffleLoader(this)

        this.shell.airtower.sendXt('p#pg', this.id)
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
        if (this.shell.room != this) return
        this.shell.interface.loadExternal('IglooLikesWidget')

        this.interface.showInterface()
        if (this.interface.main.safetyquiz) this.interface.main.safetyquiz.visible = false
        if (this.interface.main.moderatoricon) this.interface.main.moderatoricon.visible = false

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
        if (!this.roomPhysics.mask) return

        if (!this.textures.list[`flooring/${flooring}`].frames[`${this.floorFrame}_1`]) this.floorFrame = 1
        this.flooring = this.add.image(0, 0, `flooring/${flooring}`, `${this.floorFrame}_1`)
        this.flooring.depth = -1

        let mask = this.createMask()
        this.flooring.setMask(mask)
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
            path: path
        })
    }

    updateFlooring(flooring) {
        if (this.args.flooring != flooring && this.id == this.shell.client.id) this.airtower.sendXt('g#ag', flooring)
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
        this.shell.musicController.addMusic(music)
    }

    loadAllFurniture() {
        for (let f of this.args.furniture) {
            this.updateQuantity(f.furnitureId)
            this.loader.loadFurniture(f.furnitureId, null, f.x, f.y, f.rotation, f.frame, this)
        }
        this.loader.start()
    }

    updateFurniture(furniture) {
        this.furnitureSprites.forEach((sprite) => {
            sprite.destroy()
        })

        this.args.furniture = furniture.split(',').map((f) => {
            let [id, furnitureId, x, y, frame, rotation] = f.split('|')
            return {id, furnitureId, x, y, frame, rotation}
        })

        if (this.args.furniture.length >= 99) {
            this.shell.client.stampEarned(23)
        }

        this.loadAllFurniture()
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

        let text = this.crumbs.getString('confirm-igloo-change')

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

    addPuffle(puffle) {
        new IglooPuffle(this, puffle)
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
            if (this.selected.y < 200) {
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

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)

        if (this.id == this.shell.client.id && Object.keys(this.penguins).length >= 10) {
            this.shell.client.stampEarned(17)
        }

        if (this.id == this.shell.client.id && Object.keys(this.penguins).length >= 30) {
            this.shell.client.stampEarned(28)
        }
    }

    joinBackyard() {
        if (!('Backyard' in this.scene.manager.keys)) {
            // Create scene
            this.scene.add('Backyard', Backyard, true)
        }

        if (!this.scene.isVisible('Backyard')) {
            // Scene stopped
            this.scene.launch('Backyard')
        }

        this.interface.bringToTop('Backyard')
        this.interface.showLoading()
        this.stop()
    }

    stop() {
        this.created = false
        if (this.likesWidget) this.likesWidget.scene.stop()
        for (let p in this.puffles) {
            this.puffles[p].removePuffle()
        }
        super.stop()
    }
}
