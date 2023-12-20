import BaseScene from '@scenes/base/BaseScene'
import Coin from '@scenes/interface/game/mining/Coin'
import CarePopup from '@scenes/interface/game/pufflecare/CarePopup'

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

        this.waddles
        this.tables
    }

    get client() {
        return this.shell.client
    }

    get goingPlaces() {
        if (!this.client.goingPlaces) this.client.goingPlaces = []
        return this.client.goingPlaces
    }

    init(data) {
        this.id = data.id
    }

    create() {
        super.create()
        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()

        if (this.isPreview) return

        if (this.roomAnims) this.addAnims()
        this.addInput()

        this.sound.pauseOnBlur = false
        if (!this.music) this.music = 0
        this.addMusic()

        if (this.tables) this.sendGetTables()
        if (this.waddles) this.sendGetWaddles()

        this.interface.showInterface()
        if (this.isIgloo) {
            if (this.interface.main.coinforchange) this.interface.main.coinforchange.visible = false
            if (this.interface.main.safetyquiz) this.interface.main.safetyquiz.visible = false
            if (this.interface.main.moderatoricon) this.interface.main.moderatoricon.visible = false
        } else {
            if (this.interface.main.coinforchange) this.interface.main.coinforchange.visible = true
            if (this.interface.main.moderatoricon) this.interface.main.showTR()
        }

        if (this.crumbs.pin.id && this.crumbs.pin.room == this.id) this.interface.addPin()

        if (this.mining_zone) {
            this.miningZone = new Phaser.Geom.Ellipse(this.mining_zone.x, this.mining_zone.y, this.mining_zone.width, this.mining_zone.height)
            this.coin = new Coin(this, 551.9600819184787, -49.143491473676306)
            this.add.existing(this.coin)
        }

        this.carePopup = new CarePopup(this, 0, 0)
        this.add.existing(this.carePopup)
        this.carePopup.setDepth(99999999)

        if (this.waterZones) {
            for (let zone in this.waterZones) {
                this.waterZones[zone] = new Phaser.Geom.Ellipse(this.waterZones[zone].x, this.waterZones[zone].y, this.waterZones[zone].width, this.waterZones[zone].height)
            }
        }

        this.worldStampInterval = setInterval(() => this.checkForWorldStamps(), 2000)

        window.updateScaling()
        if (this.isEmu) return
        this.interface.hideLoading()
    }

    preload() {
        this.load.on('filecomplete', (key, type, data) => {
            this.shell.itemsLoaded.push({id: key, type: type})
        })

        if (this.crumbs.pin.id && this.crumbs.pin.room == this.id) {
            this.load.image('pin', `assets/media/clothing/icon/${this.crumbs.pin.id}.webp`)
        }

        if (this.loadSfx) {
            this.loadSfx.forEach((sfx) => {
                this.load.audio(`sfx/${sfx}`, `/client/media/sounds/${sfx}.mp3`)
            })
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
        if (this.isEmu) this.shell.RuffleManager.removePenguin(penguin.id)
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

    setWaddles(waddles) {
        this.waddles = {}
        waddles = waddles.map((waddle) => {
            waddle = waddle.split('|')
            let seatsArray = waddle[1].split(',').filter((seat) => seat != '')
            let seats = {}
            for (let index in seatsArray) {
                seats[index] = seatsArray[index]
            }
            return {
                id: waddle[0],
                seats: seats,
                seatCount: waddle[1].split(',').length
            }
        })
        waddles.forEach((waddle) => {
            this.waddles[waddle.id] = waddle
        })

        for (let w in this.waddles) {
            let waddle = this.waddles[w]
            this.setSeats(waddle.id, waddle.seats)
        }
    }

    setSeats(id, seats) {
        for (let s in seats) {
            let seat = seats[s]
            if (seat) {
                this.shell.room[`seats${id}`][s].visible = true
            }
        }
    }

    onSnowballComplete(user, x, y) {
        // To be overridden in derived class
    }

    triggerAction(frame) {
        if (frame == 37 && this.isInWater(this.client.penguin.x, this.client.penguin.y)) {
            this.shell.client.stampEarned(12)
        }
    }

    triggerEmote(emote) {
        // To be overridden in derived class
    }

    stop() {
        this.interface.main.snowballFactory.clearBalls()
        clearInterval(this.worldStampInterval)
        if (this.miningTimeout) clearTimeout(this.miningTimeout)
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
        let key = this.isPreview ? this.key.toLowerCase().split('-').slice(0, -2).join('-') : this.key.toLowerCase()
        if (this.cache.json.get(`${key}-physics`)) {
            return this.cache.json.get(`${key}-physics`)
        } else {
            let splitter
            for (let i = 1; i < this.key.length; i++) {
                if (this.key[i] == this.key[i].toUpperCase()) {
                    splitter = this.key[i]
                    break
                }
            }
            let split = this.key.split(splitter)
            return this.cache.json.get(`${split[0].toLowerCase()}-physics`)
        }
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
                console.error(`[RoomScene] Trigger ${t} not found in physics`)
                continue
            }

            if (!this.roomTriggers[t]) {
                triggers.push(trigger)
                continue
            }

            if (!this.roomTriggers[t].callback) {
                trigger.callback = this.roomTriggers[t]
                triggers.push(trigger)
                continue
            }

            trigger.callback = this.roomTriggers[t].callback
            trigger.offCallback = this.roomTriggers[t].offCallback

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
        if (!this.goingPlaces.includes(id)) {
            this.goingPlaces.push(id)
            if (this.goingPlaces.length == 30) this.shell.client.stampEarned(15)
        }

        let room = this.crumbs.scenes.rooms[id]
        if (!room) return console.error(`[RoomScene] Room ${id} not found`)
        this.shell.RuffleManager.rufflePlayer.destroy()
        this.shell.client.sendJoinRoom(id, room.key, x, y)
    }

    triggerGame(minigame, id, emu) {
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        let text = this.crumbs.getString(`game-confirmation,${this.crumbs.getString(minigame)}`)
        prompt.showWindow(text, 'dual', () => this.joinGame(minigame, id, emu))
    }

    isInWater(x, y) {
        if (!this.waterZones) return false
        for (let zone of this.waterZones) {
            if (zone.contains(x, y)) return true
        }
        return false
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

    joinGame(minigame, id, emu) {
        if (emu == 'ruffle') {
            this.shell.loadMinigame(minigame)
        } else if (emu == 'waflash') {
            this.shell.loadAS3Minigame(minigame)
        }
        let room = this.crumbs.scenes.rooms[id]
        this.shell.client.sendJoinRoom(id, room.key)
    }

    triggerWaddle(id) {
        // To be overridden in derived class
    }

    checkForWorldStamps() {
        if (!this.shell.client.stamps.includes(25)) {
            var conditions = {
                775: 0,
                778: 0,
                4088: 0,
                4091: 0,
                4346: 0,
                4347: 0,
                4348: 0,
                4349: 0,
                4350: 0
            }

            for (let u in this.penguins) {
                let user = this.penguins[u]
                if (user.wearingItem(775) || user.wearingItem(10775)) conditions[775]++
                if (user.wearingItem(778) || user.wearingItem(10778)) conditions[778]++
                if (user.wearingItem(4088)) conditions[4088]++
                if (user.wearingItem(4091)) conditions[4091]++
                if (user.wearingItem(4346)) conditions[4346]++
                if (user.wearingItem(4347)) conditions[4347]++
                if (user.wearingItem(4348)) conditions[4348]++
                if (user.wearingItem(4349)) conditions[4349]++
                if (user.wearingItem(4350)) conditions[4350]++
            }

            for (let item in conditions) {
                if (conditions[item] >= 5 && (this.shell.client.penguin.wearingItem(item) || this.shell.client.penguin.wearingItem(item + 10000))) this.shell.client.stampEarned(25)
            }
        }

        if (!this.shell.client.stamps.includes(29)) {
            var conditions = {
                277: 0,
                278: 0,
                4143: 0,
                4204: 0,
                4474: 0,
                4475: 0,
                4476: 0,
                4477: 0,
                4478: 0,
                4479: 0,
                4480: 0,
                4481: 0
            }

            for (let u in this.penguins) {
                let user = this.penguins[u]
                if (user.wearingItem(277) || user.wearingItem(10277)) conditions[277]++
                if (user.wearingItem(278)) conditions[278]++
                if (user.wearingItem(4143) || user.wearingItem(14143)) conditions[4143]++
                if (user.wearingItem(4204) || user.wearingItem(14204)) conditions[4204]++
                if (user.wearingItem(4474)) conditions[4474]++
                if (user.wearingItem(4475)) conditions[4475]++
                if (user.wearingItem(4476)) conditions[4476]++
                if (user.wearingItem(4477)) conditions[4477]++
                if (user.wearingItem(4478)) conditions[4478]++
                if (user.wearingItem(4479)) conditions[4479]++
                if (user.wearingItem(4480)) conditions[4480]++
                if (user.wearingItem(4481)) conditions[4481]++
            }

            for (let item in conditions) {
                if (conditions[item] >= 5 && (this.shell.client.penguin.wearingItem(item) || this.shell.client.penguin.wearingItem(item + 10000))) this.shell.client.stampEarned(29)
            }
        }

        if (!this.shell.client.stamps.includes(364)) {
            let p = this.shell.client.penguin
            if (!p.wearingItem(4174) && !p.wearingItem(14174) && !p.wearingItem(24238)) return

            let trees = 0
            for (let u in this.penguins) {
                let user = this.penguins[u]
                if (user.wearingItem(4174) || user.wearingItem(14174) || user.wearingItem(24238)) trees++
            }
            if (trees >= 10) this.shell.client.stampEarned(364)
        }
    }

    getPenguinByUsername(username) {
        return Object.values(this.penguins).find((penguin) => penguin.username === username)
    }

    updateWaddle(waddle, seat, username) {
        this.interface.main.waddle.updateWaddle(waddle, seat, username)
    }

    sendGetTables() {
        this.airtower.sendXt('get_tables')
    }

    sendGetWaddles() {
        this.airtower.sendXt('a#gt')
    }

    getTable(id) {
        return this[`table${id}`]
    }

    getWaddle(id) {
        return this[`waddle${id}`]
    }

    setTables(tables) {
        this.tables = tables

        for (let [table, seats] of Object.entries(tables)) {
            this.updateTable(table, seats.length)
        }
    }

    updateTable(table, seat) {
        table = this.shell.room.getTable(table)
        if (!table) {
            return
        }

        let button = table.game.__Button
        let name = button.spriteName

        if (seat > 1) {
            table.game.setFrame(`${name}-hover`)
            button.lockFrame = true
        } else {
            table.game.setFrame(name)
            button.lockFrame = false
        }
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
        prompt.showError(this.crumbs.getError('54'))
    }
}
