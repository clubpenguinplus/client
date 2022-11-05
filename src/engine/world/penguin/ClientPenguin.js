import Penguin from './Penguin'

import PathEngine from './pathfinding/PathEngine'

export default class ClientPenguin extends Penguin {
    constructor(user, room, penguinLoader) {
        super(user, room, penguinLoader)

        this.isClient = true

        this.savedPenguins = this.airtower.savedPenguins
        this.save = this.savedPenguins[this.username.toLowerCase()]

        penguinLoader.addRing(this)
    }

    update(item, slot) {
        super.update(item, slot)

        // Update item in save
        if (this.save && slot in this.save) {
            this.save[slot] = item
            localStorage.setItem('saved_penguins', JSON.stringify(this.savedPenguins))
        }
    }

    rotate(x, y) {
        let angle = PathEngine.getAngle(this.pos, {x: x, y: y + 80})
        let direction = PathEngine.getDirection(angle)
        this.direction = direction

        this.playFrame(direction)
    }

    sit(x, y) {
        let angle = PathEngine.getAngle(this.pos, {x: x, y: y + 80})
        let direction = PathEngine.getDirection(angle)
        let frame = direction + 16 // + 16 for sitting frame id

        this.playFrame(frame)
        this.airtower.sendXt('u#sf', `${true}%${frame}`)
    }

    move(x, y, frame = null) {
        if (this.lastMoveTime && Date.now() - this.lastMoveTime < 100) return
        this.lastMoveTime = Date.now()
        if (frame) {
            this.afterMove = () => this.shell.client.sendFrame(frame)
        }

        let path = PathEngine.getPath(this, {x, y})

        if (path) {
            this.addMoveTween(path)
            this.airtower.sendXt('u#sp', `${x}%${y}`)
        }
    }

    onMoveComplete() {
        this.shell.client.lockRotation = false

        super.onMoveComplete()
        this.isTrigger()
    }

    isTrigger() {
        if (!this.room.triggers) return

        for (let trigger of this.room.triggers) {
            if (this.room.matter.containsPoint(trigger, this.x, this.y)) {
                if (trigger.callback) return trigger.callback()
            }
        }
    }

    wearingItem(item) {
        let items = this.items.flat
        for (var x in items) {
            if (items[x] === item) {
                return true
            }
            return false
        }
    }
}
