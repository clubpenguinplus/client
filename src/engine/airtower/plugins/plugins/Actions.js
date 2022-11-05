import Plugin from '../Plugin'

export default class Actions extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            sp: this.sendPosition,
            sf: this.sendFrame,
            sb: this.snowball,
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
                frame: 1,
            })
        }

        if (this.room.penguins[args[0]]) this.room.penguins[args[0]].move(args[1], args[2])
    }

    sendFrame(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args[0], {
                frame: args[2] ? args[1] : 1,
            })
        }

        let penguin = this.room.penguins[args[0]]
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
        let callback = () => this.interface.main.snowballFactory.throwBall(args[0], args[1], args[2])

        if (penguin.isTweening) {
            return (penguin.afterMove = callback)
        }

        callback()
    }
}
