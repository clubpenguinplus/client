import Plugin from '../Plugin'

export default class Puffles extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            pgs: this.getPuffleSpecies,
            psw: this.stopWalking,
            ppw: this.walkPuffle,
        }
    }

    getPuffleSpecies(args) {
        if (!this.shell.room || !this.shell.room.penguins[args[0]]) return

        let penguin = this.shell.room.penguins[args[0]]
        penguin.puffle = args[1]
        penguin.loadPuffle()
    }

    stopWalking(args) {
        if (!this.shell.room || !this.shell.room.penguins[args[0]]) return

        let penguin = this.shell.room.penguins[args[0]]
        penguin.walking = null
        penguin.removePuffle()

        if (this.interface.main.playerCard.visible && this.interface.main.playerCard.id == args[0]) {
            this.interface.main.playerCard.paperDoll.removePuffle()
        }
    }

    walkPuffle(args) {
        if (!this.shell.room || !this.shell.room.penguins[args[0]]) return

        let penguin = this.shell.room.penguins[args[0]]
        penguin.walking = args[1]
        penguin.getPuffleSpecies()
    }
}
