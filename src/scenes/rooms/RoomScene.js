import BaseScene from '@scenes/base/BaseScene'
import Coin from '@scenes/interface/game/mining/Coin'

export default class RoomScene extends BaseScene {
    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null

        // Block collision body
        this.block = null
        // Trigger collision bodies
        this.triggers = null

        // If room is fully loaded
        this.isReady = false
        // Array of users to be added once ready
        this.waiting = []
        this.mar_check = [800, 200, 100, 400, 801, 300, 809, 810]
        this.swim_check = [806]
        this.berg_check = [805]
        this.medal_check = [800, 200, 100, 400, 801, 300, 809, 810, 805, 806]
    }

    get client() {
        return this.shell.client
    }

    init(data) {
        this.id = data.id
    }

    create() {
        this._create()
        this.sortChildren()

        if (this.isPreview) return

        if (this.roomPhysics) this.addPhysics()
        if (this.roomAnims) this.addAnims()
        this.addInput()

        this.sound.pauseOnBlur = false
        if (!this.music) this.music = 0
        this.addMusic()

        if (this.waddles) this.getWaddles()

        this.interface.showInterface()

        if (this.crumbs.pin.id && this.crumbs.pin.room == this.id) this.interface.addPin()

        if (!this.shell.client.roomsWaddled.includes(this.id)) {
            this.shell.client.roomsWaddled.push(this.id)
        }
        if (this.shell.client.roomsWaddled.length >= 20) {
            this.shell.client.stampEarned(15)
        }

        if (this.mining_zone) {
            this.miningZone = new Phaser.Geom.Ellipse(this.mining_zone.x, this.mining_zone.y, this.mining_zone.width, this.mining_zone.height)
            this.coin = new Coin(this, 551.9600819184787, -49.143491473676306)
            this.add.existing(this.coin)
        }

        window.updateScaling()
    }

    preload() {
        this.load.on('filecomplete', (key, type, data) => {
            this.shell.itemsLoaded.push({id: key, type: type})
        })

        if (this.crumbs.pin.id && this.crumbs.pin.room == this.id) {
            this.load.image('pin', `assets/media/clothing/icon/${this.crumbs.pin.id}.webp`)
        }

        if (this._preload) this._preload()
    }

    sortChildren() {
        if (!this.sort) return

        for (let child of this.sort) {
            child.depth = child.y
        }
    }

    addPenguin(id, penguin) {
        if (penguin.stealthMode && this.shell.client.rank < 3) return

        this.penguins[id] = penguin

        this.interface.main.friend.showPage()

        this.checkMascot(id)
    }

    checkMascot(id) {
        for (var x in this.shell.mascots) {
            if (this.shell.mascots[x].id == id) this.shell.client.stampEarned(this.shell.mascots[x].stamp)
        }
    }

    removePenguin(id) {
        let penguin = this.penguins[id]

        if (!penguin) return

        if (penguin.isTweening) penguin.removeTween()

        if (penguin.balloon) penguin.balloon.destroy()
        penguin.nameTag.destroy()
        penguin.destroy()

        delete this.penguins[id]

        this.interface.main.friend.showPage()
    }

    addInput() {
        // Movement
        this.input.on('pointerup', (pointer, target) => this.client.onPointerUp(pointer, target))
    }

    addMusic() {
        if (!this.shell.muteMusic) {
            this.shell.musicController.addMusic(this.music)
        }
    }

    getWaddles() {
        this.airtower.sendXt('a#gt')
    }

    setWaddles(waddles) {
        this.waddles = waddles

        for (let [id, seats] of Object.entries(waddles)) {
            this.setSeats(id, seats)
        }
    }

    setSeats(id, seats) {
        for (let [index, seat] of seats.entries()) {
            if (seat) {
                this.shell.room[`seats${id}`][index].visible = true
            }
        }
    }

    onSnowballComplete(x, y) {
        // To be overridden in derived class
    }

    stop() {
        this.interface.main.snowballFactory.clearBalls()
        //this.sound.stopAll()
        this.scene.stop()
    }

    getWaiting(id) {
        return this.waiting.find((user) => user.id == id)
    }

    updateWaiting(id, attributes) {
        let user = this.getWaiting(id)

        if (user) {
            user = Object.assign(user, attributes)
        }
    }

    removeWaiting(id) {
        this.waiting = this.waiting.filter((user) => user.id != id)
    }

    /*======= Physics =======*/

    get roomPhysics() {
        let key = this.key.toLowerCase()

        return this.cache.json.get(`${key}-physics`)
    }

    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)
        this.block = this.addBody('block', 0x111111)
        this.triggers = this.addTriggers()
    }

    addBody(key, color = null) {
        if (!this.roomPhysics[key]) return null

        let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) // Centers body in room

        // Debug color
        color = color ? color : body.render.fillColor

        body.render.lineColor = color
        body.render.fillColor = color
        body.render.fillOpacity = 0.5

        return body
    }

    addTriggers() {
        if (!this.roomTriggers) return null

        let triggers = []

        for (let t in this.roomTriggers) {
            let trigger = this.addBody(t, 0x00ff00)
            if (!trigger) {
                console.error(`Trigger ${t} not found in physics`)
                continue
            }

            trigger.callback = this.roomTriggers[t]
            triggers.push(trigger)
        }
        return triggers
    }
    addZones() {
        if (!this.roomZones) return null

        for (let t in this.roomZones) {
            let trigger = this.matter.add.gameObject(this.roomZones[t].key).setStatic(true)

            trigger.callback = this.roomZones[t].callback
            this.triggers.push(trigger)
        }
    }

    triggerRoom(id, x, y) {
        let room = this.crumbs.scenes.rooms[id]
        if (!room) return console.error(`Room ${id} not found`)
        this.shell.client.sendJoinRoom(id, room.key, x, y)
    }

    triggerGame(minigame, id, emu) {
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showWindow('Do you want to play ' + this.getString(minigame) + '?', 'dual', () => this.joinGame(minigame, id, emu))
    }

    isMiningSpot(x, y) {
        if (!this.miningZone) return false
        if (this.miningZone.contains(x, y)) {
            // Checks if the player has moved, or is just staying in the same spot
            if (!this.lastX || !this.lastY || this.lastX + 50 < x || this.lastX - 50 > x || this.lastY + 50 < y || this.lastY - 50 > y) {
                this.lastX = x
                this.lastY = y

                // Choooses a random point in the next 10-40 seconds to make the player find coins
                this.goes = 0
                this.miningTimeout = setTimeout(() => this.mineForCoins(), (10 + Math.round(Math.random() * 30)) * 1000)
            }
        }
    }

    mineForCoins() {
        if (this.miningTimeout) clearTimeout(this.miningTimeout)
        if (this.goes < 2) {
            // Awards the player with 1-100 coins if they've tried to mine 1 or 2 times in the same spot
            let coins = 1 + Math.round(Math.random() * 99)
            this.airtower.sendXt('u#mc', coins)

            this.miningTimeout = setTimeout(() => this.mineForCoins(), (10 + Math.round(Math.random() * 30)) * 1000)
        } else if (this.goes < 4) {
            // Awards the player with 1-10 coins if they've tried to mine 3 or 4 times in the same spot
            let coins = 1 + Math.round(Math.random() * 9)
            this.airtower.sendXt('u#mc', coins)

            this.miningTimeout = setTimeout(() => this.mineForCoins(), (10 + Math.round(Math.random() * 30)) * 1000)
        } else {
            // Stops the player from mining if they've tried to mine 5 times in the same spot
        }

        this.goes++
    }

    playCoin(coins) {
        this.coin.x = this.client.penguin.x
        this.coin.y = this.client.penguin.y - 130
        this.coin.play(coins)
    }

    cancelMining() {
        if (this.miningTimeout) clearTimeout(this.miningTimeout)
    }

    joinGame(minigame, id, emu = 'as2') {
        if (emu == 'as2') {
            this.shell.loadMinigame(minigame)
        } else if (emu == 'as3') {
            this.shell.loadAS3Minigame(minigame)
        }
        let room = this.crumbs.scenes.rooms[id]
        this.shell.client.sendJoinRoom(id, room.key)
    }

    triggerWaddle(id) {
        // To be overridden in derived class
    }

    /*======= Animations =======*/

    /**
     * Loads complex animations from JSON room anims file,
     * simpler animations should use the Animation component instead.
     * To trigger this add a roomAnims get property to the room, and
     * set it to return true.
     */
    addAnims() {
        return // Disabled for now
        let key = this.key.toLowerCase()
        let anims = this.cache.json.get(`${key}-anims`)

        this.anims.fromJSON(anims)
    }

    /*===== Prompts ======*/

    unimplementedPrompt() {
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('This feature is not yet implemented!\nClub Penguin Plus is in development, and is being\nactively updated. Check back soon!')
    }
}
