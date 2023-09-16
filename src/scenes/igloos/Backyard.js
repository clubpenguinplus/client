import SoloRoom from '@scenes/rooms/SoloRoom'
import IglooPuffle from './IglooPuffle'
import PuffleLoader from '@engine/loaders/PuffleLoader'

export default class Backyard extends SoloRoom {
    constructor() {
        super('Backyard')
        this.isBackyard = true
        this.roomTriggers = {
            igloo: () => this.joinIgloo()
        }
        this.puffles = {}
    }

    get sort() {
        return [this.gate]
    }

    set id(id) {
        // Prevents a crash
    }

    get id() {
        return this.shell.client.id
    }

    get location() {
        return this.shell.room.args.location
    }

    get roomPhysics() {
        return this.cache.json.get(`backyard/${this.location}-physics`)
    }

    _preload() {
        this.shell.roomFactory.unloadPrevious()
        this.load.multiatlas(`backyard/${this.location}`, `client/media/igloos/locations/backyard/${this.location}.json`, `client/media/igloos/locations/backyard/`)
        this.load.json(`backyard/${this.location}-physics`, `client/media/igloos/locations/backyard/${this.location}-physics.json`)
    }

    _create() {
        this.bg = this.add.sprite(760, 480, `backyard/${this.location}`, 'bg')
        this.bg.setInteractive()
        this.gate = this.add.sprite(760, 960, `backyard/${this.location}`, 'gate')
        this.gate.setOrigin(0.5, 1)
        this.gateBtn = this.add.rectangle(300, 750, 500, 200)
        this.gateBtn.rotation = 0.436332
        this.gateBtn.setInteractive({cursor: 'pointer'})
        this.gateBtn.on('pointerover', () => {
            this.gate.setFrame('gate-hover', false, false)
        })
        this.gateBtn.on('pointerout', () => {
            this.gate.setFrame('gate', false, false)
        })
        this.gateBtn.on('pointerdown', () => {
            this.shell.client.penguin.move(230, 820)
        })
        this.gateBtn.isButton = true
        this.puffleLoader = new PuffleLoader(this)
        this.shell.airtower.sendXt('p#pg', `${this.id}%1`)
    }

    joinIgloo() {
        this.client.sendJoinIgloo(this.id)
    }

    addPuffle(puffle) {
        new IglooPuffle(this, puffle)
    }

    addPhysics() {
        super.addPhysics()

        this.pet = this.addBody('pet')
    }

    stop() {
        for (let p in this.puffles) {
            this.puffles[p].removePuffle()
        }
        super.stop()
    }
}
