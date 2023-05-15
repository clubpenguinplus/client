import PathEngine from './pathfinding/PathEngine'

export default class ClientController {
    constructor(shell, args) {
        this.shell = shell

        this.interface = shell.interface
        this.airtower = shell.airtower
        this.crumbs = shell.crumbs
        this.getString = shell.getString

        // Assign user attributes

        this.string = this.shell.arrayToObject(args[0], true)

        this.room = args[1]
        this.joinTime = args[2]
        this.stampbookClasp = args[3]
        this.stampbookColor = args[4]
        this.stampbookPattern = args[5]
        this.customStamps = args[6]
        this.cannonData = args[7]

        this.friends = typeof args[8] == 'string' ? args[8].split(',').filter((e) => e != '') : args[8]
        for (let friend in this.friends) {
            let temp = this.friends[friend].split('|')
            this.friends[friend] = {
                id: parseInt(temp[0]),
                username: temp[1],
                online: temp[2] == '1' ? true : false,
                isBff: temp[3] == '1' ? 1 : 0,
            }
        }

        this.ignores = typeof args[9] == 'string' ? args[9].split(',').filter((e) => e != '') : args[9]
        for (let ignore in this.ignores) {
            let temp = this.ignores[ignore].split('|')
            this.ignores[ignore] = {
                id: parseInt(temp[0]),
                username: temp[1],
            }
        }
        this.inventory = typeof args[10] == 'string' ? args[10].split(',').filter((e) => e != '') : []

        this.iglooInventory = typeof args[11] == 'string' ? args[11].split(',').filter((e) => e != '') : []
        for (let item in this.iglooInventory) {
            this.iglooInventory[item] = {
                id: parseInt(this.iglooInventory[item]),
                quantity: 1,
                type: 'igloo',
            }
        }

        this.furnitureInventory = typeof args[12] == 'string' ? args[12].split(',').filter((e) => e != '') : []
        for (let item in this.furnitureInventory) {
            let temp = this.furnitureInventory[item].split(':')
            this.furnitureInventory[item] = {
                id: parseInt(temp[0]),
                quantity: parseInt(temp[1]),
                type: 'furniture',
            }
        }

        this.stamps = typeof args[13] == 'string' ? args[13].split(',').filter((e) => e != '') : []
        this.stamps = this.stamps.map((stamp) => parseInt(stamp))

        this.postcards = typeof args[14] == 'string' ? args[14].split(',').filter((e) => e != '') : []
        this.pending = typeof args[15] == 'string' ? args[15].split(',').filter((e) => e != '') : []

        this.floorInventory = typeof args[16] == 'string' ? args[16].split(',').filter((e) => e != '') : []
        for (let item in this.floorInventory) {
            this.floorInventory[item] = {
                id: parseInt(this.floorInventory[item]),
                quantity: 1,
                type: 'flooring',
            }
        }

        this.locationInventory = typeof args[17] == 'string' ? args[17].split(',').filter((e) => e != '') : []
        for (let item in this.locationInventory) {
            this.locationInventory[item] = {
                id: parseInt(this.locationInventory[item]),
                quantity: 1,
                type: 'location',
            }
        }

        this.sessionId = args[18]

        this.coins = this.string.coins
        this.rank = this.string.rank
        this.id = this.string.id

        this.iglooOpen = false

        // Item inventory
        this.slots = ['color', 'head', 'face', 'neck', 'body', 'hand', 'feet', 'flag', 'photo', 'award']
        this.inventory = this.initInventory()

        // Reference to ClientPenguin object
        this.penguin

        // If expecting emote key combo
        this.emoteKeyPressed = false

        this.lastBalloon = Date.now()
        this.throttleDelay = 100

        // Input
        this.keys = this.crumbs.quick_keys.keys
        this.emotes = this.crumbs.quick_keys.emotes

        this.keyActions = {
            send_frame: (id) => this.sendFrame(id),
            send_wave: () => this.sendFrame(25, false),
            send_sit: () => this.sendSit(this.input.mousePointer),

            show_crosshair: () => this.showCrosshair(),

            emote_key: () => (this.emoteKeyPressed = true),
            send_emote: (id) => this.sendEmote(id),
            send_safe: (id) => this.sendSafe(id),
        }

        this.lockRotation = false

        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.input.keyboard.on('keydown', (event) => this.onKeyDown(event))

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        if (daysDiff >= 365) {
            setTimeout(() => this.stampEarned(20), 30000)
        }
        if (daysDiff >= 183) {
            setTimeout(() => this.stampEarned(14), 30000)
        }
    }

    get isTweening() {
        if (this.penguin) return this.penguin.isTweening
        return false
    }

    get visible() {
        if (this.penguin) return this.penguin.visible
        return false
    }

    get activeSeat() {
        return this.interface.main.waddle.activeSeat
    }

    get input() {
        return this.interface.main.input
    }

    get isBalloonThrottled() {
        let time = Date.now()

        if (time - this.lastBalloon < this.throttleDelay) {
            return true
        }

        this.lastBalloon = time

        return false
    }

    get isModerator() {
        return this.rank >= 3
    }

    get isEPF() {
        return this.penguin.epfStatus == 1
    }

    initInventory() {
        // Generates object from slots in format: { color: [], head: [], ... }
        let inventory = Object.fromEntries(this.slots.map((slot) => [slot, []]))

        // Assigns inventory list to slots
        for (let item of this.inventory) {
            if (!this.crumbs.items[item]) continue

            let type = this.crumbs.items[item].type
            let slot = this.slots[type - 1]

            inventory[slot].push(parseInt(item))
        }

        return inventory
    }

    onPointerMove(pointer) {
        if (this.interface.main.crosshair.visible) {
            this.interface.main.onCrosshairMove(pointer)
        }

        if (!this.visible || this.isTweening || this.lockRotation) {
            return
        }

        this.penguin.rotate(pointer.x / window.currentScale, pointer.y / window.currentScale)
    }

    onPointerUp(pointer, target) {
        if (pointer.button != 0 || !this.visible || this.activeSeat) {
            return
        }

        // Block movement when clicking a button
        if (target[0] && (target[0].isButton || target[0].isInteractive)) {
            return
        }

        this.penguin.move(pointer.x / window.currentScale, pointer.y / window.currentScale)
    }

    onKeyDown(event) {
        if (this.inMinigame || this.interface.isInputActive) return

        let key = event.key.toLowerCase()

        if (key == '-') {
            window.lowerQuality()
        } else if (key == '=') {
            window.raiseQuality()
        } else if (key == 'escape') {
            if (this.shell.settings.hi) {
                this.shell.settings.hi = false
                this.interface.main.show()
            }
        }

        if (this.emoteKeyPressed) {
            this.processEmote(key)
        } else {
            this.processKey(key)
        }
    }

    processEmote(key) {
        this.emoteKeyPressed = false

        if (key in this.emotes) {
            this.sendEmote(this.emotes[key])
        }
    }

    processKey(key) {
        if (key in this.keys) {
            let k = this.keys[key]

            this.keyActions[k.action](k.value || null)
        }
    }

    sendFrame(frame, set = true) {
        if (!this.visible || this.isTweening) {
            return
        }

        this.lockRotation = true

        this.penguin.playFrame(frame, set)
        this.airtower.sendXt('u#sf', `${set}%${frame}`)
    }

    sendSit(pointer) {
        if (!this.visible || this.isTweening) {
            return
        }

        this.lockRotation = true

        this.penguin.sit(pointer.x / window.currentScale, pointer.y / window.currentScale)
    }

    sendSnowball(x, y) {
        if (!this.visible || this.isTweening) {
            return
        }

        this.lockRotation = true

        this.interface.main.snowballFactory.throwBall(this.id, x, y)
        this.airtower.sendXt('u#sb', `${x}%${y}`)
    }

    sendEmote(emote) {
        if (!this.visible || this.isBalloonThrottled) {
            return
        }

        this.interface.showEmoteBalloon(this.id, emote)
        this.airtower.sendXt('u#se', emote)
    }

    sendSafe(safe) {
        if (!this.visible || this.isBalloonThrottled) {
            return
        }

        let message = this.interface.main.safe.safeMessagesMap[safe]

        this.interface.showTextBalloon(this.id, message)
        this.airtower.sendXt('u#ss', safe)
    }

    showCrosshair() {
        if (!this.visible || !this.interface.main) {
            return
        }

        this.interface.main.onSnowballClick()
    }

    sendJoinRoom(id, name, x, y, randomRange = 40) {
        if (!x || !y) {
            x = this.crumbs.scenes.rooms[id].x
            y = this.crumbs.scenes.rooms[id].y
        }

        this.interface.destroyPin()
        this.shell.musicController.stopLoopingSfx()

        if (this.activeSeat) {
            return this.interface.prompt.showError(this.crumbs.getError('61'))
        }

        this.newRoom = [id, name, x, y, randomRange]

        this.interface.showLoading(this.getString('joining', name))
        this.interface.main.waddle.visible = false

        this.lockRotation = false

        let random = PathEngine.getRandomPos(parseInt(x), parseInt(y), parseInt(randomRange))
        this.airtower.sendXt('j#jr', `${id}%${random.x}%${random.y}`)
    }

    sendJoinIgloo(id) {
        this.interface.destroyPin()

        if (this.shell.room.isIgloo && this.shell.room.id == id) {
            return
        }

        if (this.activeSeat) {
            return this.interface.prompt.showError(this.crumbs.getError('61'))
        }

        this.interface.showLoading(this.getString('joining', 'igloo'))

        this.lockRotation = false

        this.airtower.sendXt('j#jp', id)
    }

    stampEarned(stamp, isServerSide = false) {
        for (var x in this.stamps) {
            if (this.stamps[x] == stamp) return
        }

        this.stamps.push(stamp)
        if (!isServerSide) this.airtower.sendXt('st#sse', stamp)
        this.interface.main.stampEarnedBody.text = this.crumbs.stamps[stamp].name
        if (this.crumbs.stamps[stamp].groupid == 7) {
            this.interface.main.stampEarnedImage.setFrame(`stamps/activities000${this.crumbs.stamps[stamp].difficulty.toString()}`)
        } else {
            this.interface.main.stampEarnedImage.setFrame(`stamps/events000${this.crumbs.stamps[stamp].difficulty.toString()}`)
        }
        this.interface.main.stampTween()
    }

    hasItem(item) {
        let items = this.inventory
        for (var x in items) {
            if (items[x].includes(item)) {
                return true
            }
        }
        return false
    }
}
