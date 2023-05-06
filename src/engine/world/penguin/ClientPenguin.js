import Penguin from './Penguin'

import PathEngine from './pathfinding/PathEngine'

export default class ClientPenguin extends Penguin {
    constructor(user, room, penguinLoader, puffleLoader) {
        super(user, room, penguinLoader, puffleLoader)

        this.shell.client.userInfo = user

        this.isClient = true

        this.savedPenguins = this.airtower.savedPenguins
        this.save = this.savedPenguins[this.username.toLowerCase()]

        penguinLoader.addRing(this)

        this.shell.client.penguin = this
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

    async move(x, y, frame = null) {
        if (this.lastX && this.lastX == x && this.lastY && this.lastY == y) return
        this.lastX = x
        this.lastY = y

        if (frame) {
            this.afterMove = () => this.shell.client.sendFrame(frame)
        }

        let path = PathEngine.getPath(this, {x, y})

        if (path) {
            this.addMoveTween(path)
            this.airtower.sendXt('u#sp', `${x}%${y}`)
        }

        return {x, y}
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
                if (trigger.callback) {
                    trigger.callback()
                    trigger.isOn = true
                }
            } else if (trigger.isOn) {
                if (trigger.offCallback) trigger.offCallback()
                trigger.isOn = false
            }
        }
    }
}
