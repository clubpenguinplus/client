import PathEngine from './pathfinding/PathEngine'

export default class ClientController {
    constructor(shell, args) {
        this.shell = shell

        this.interface = shell.interface
        this.airtower = shell.airtower
        this.crumbs = shell.crumbs
        this.getString = shell.getString

        this.roomsWaddled = []

        for (var i = 0; i < args.length; i++) {
            if (args[i] == 'undefined' || args[i] == '') {
                args[i] = []
            }
        }

        // Assign user attributes

        this.string = this.shell.arrayToObject(args[0])

        this.room = args[1]
        this.joinTime = args[2]
        this.stampbookClasp = args[3]
        this.stampbookColor = args[4]
        this.stampbookPattern = args[5]
        this.cannonData = args[6]

        this.friends = typeof args[7] == 'string' ? args[7].split(',') : args[7]
        for (let friend in this.friends) {
            let temp = this.friends[friend].split('|')
            this.friends[friend] = {
                id: temp[0],
                username: temp[1],
                online: temp[2] == '1' ? true : false,
                isBff: temp[3] == '1' ? 1 : 0,
            }
        }

        this.ignores = typeof args[8] == 'string' ? args[8].split(',') : args[8]
        this.inventory = typeof args[9] == 'string' ? args[9].split(',') : []
        this.iglooInventory = typeof args[10] == 'string' ? args[10].split(',') : []
        this.furnitureInventory = typeof args[11] == 'string' ? args[11].split(',') : []
        this.stamps = typeof args[12] == 'string' ? args[12].split(',') : []
        this.postcards = typeof args[13] == 'string' ? args[13].split(',') : []
        this.pending = typeof args[14] == 'string' ? args[14].split(',') : []

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
        this.keys = this.crumbs.quickKeys.keys
        this.emotes = this.crumbs.quickKeys.emotes

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
        // Limit movement to once every 100ms

        if (pointer.button != 0 || !this.visible || this.activeSeat) {
            return
        }

        // Block movement when clicking a button
        if (target[0] && target[0].isButton) {
            return
        }

        this.penguin.move(pointer.x / window.currentScale, pointer.y / window.currentScale)
        this.shell.interface.main.puffleCare.visible = false
    }

    onKeyDown(event) {
        if (this.inMinigame || this.shell.isInputActive) return

        let key = event.key.toLowerCase()

        if (key == '-') {
            window.lowerQuality()
        } else if (key == '=') {
            window.raiseQuality()
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

        if (this.activeSeat) {
            return this.interface.prompt.showError('Please exit your game before leaving the room')
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
            return this.interface.prompt.showError('Please exit your game before leaving the room')
        }

        this.interface.showLoading(this.getString('joining', 'igloo'))

        this.lockRotation = false

        this.airtower.sendXt('j#jp', id)
    }

    stampEarned(stamp) {
        if (!this.stamps.includes(stamp)) {
            this.stamps.push(stamp)
            this.airtower.sendXt('st#sse', stamp)
            this.interface.main.stampEarnedBody.text = this.crumbs.stamps[stamp].name
            if (this.crumbs.stamps[stamp].groupid == 7) {
                this.interface.main.stampEarnedImage.setFrame(`stamps/activities000${this.crumbs.stamps[stamp].difficulty.toString()}`)
            } else {
                this.interface.main.stampEarnedImage.setFrame(`stamps/events000${this.crumbs.stamps[stamp].difficulty.toString()}`)
            }
            this.interface.main.stampTween()
        }
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
