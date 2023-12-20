import Plugin from '../Plugin'

export default class Actions extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            sp: this.sendPosition,
            tsp: this.sendTeleportPosition,
            sf: this.sendFrame,
            sb: this.snowball
        }
    }

    get room() {
        return this.shell.room
    }

    sendPosition(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args[0], {
                x: args[1],
                y: args[2],
                frame: 1
            })
        }

        if (this.room.penguins[args[0]].isClient) return

        if (this.room.penguins[args[0]]) this.room.penguins[args[0]].move(args[1], args[2])
    }

    sendTeleportPosition(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args[0], {
                x: args[1],
                y: args[2],
                frame: 1
            })
        }

        if (this.room.isEmu) {
            this.shell.RuffleManager.setPos(args[0], args[1], args[2])
            this.shell.RuffleManager.playFrame(args[0], 1)
        }

        if (this.room.penguins[args[0]].isClient) return

        if (this.room.penguins[args[0]]) {
            this.room.penguins[args[0]].x = parseFloat(args[1])
            this.room.penguins[args[0]].y = parseFloat(args[2])
            this.room.penguins[args[0]].frame = 1
            this.room.penguins[args[0]].updateNameTag()
        }
    }

    sendFrame(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args[0], {
                frame: args[2] ? args[1] : 1
            })
        }

        let penguin = this.room.penguins[args[0]]

        if (penguin.isClient) return
        let callback = () => penguin.playFrame(args[1], args[2])

        if (penguin.isTweening) {
            return (penguin.afterMove = callback)
        }

        callback()
    }

    snowball(args) {
        if (!this.room.isReady) {
            return
        }

        let penguin = this.room.penguins[args[0]]
        if (penguin.isClient) return

        let callback = () => this.interface.main.snowballFactory.throwBall(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]))

        if (penguin.isTweening) {
            return (penguin.afterMove = callback)
        }

        callback()
    }
}
