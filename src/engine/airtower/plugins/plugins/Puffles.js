import Plugin from '../Plugin'

export default class Puffles extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            pgs: this.getPuffleSpecies,
            psw: this.stopWalking,
            ppw: this.walkPuffle,
            pgp: this.getPuffles,
            tby: this.toggleBackyard,
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

        if (this.shell.room.isIgloo && this.shell.room.id == args[0]) {
            if (!this.shell.room.puffles[args[1]]) return
            this.shell.room.puffles[args[1]].loadPuffle()
        }
    }

    walkPuffle(args) {
        if (!this.shell.room || !this.shell.room.penguins[args[0]]) return

        let penguin = this.shell.room.penguins[args[0]]
        const prevWalking = penguin.walking
        if (prevWalking) penguin.removePuffle()
        penguin.walking = args[1]
        penguin.getPuffleSpecies()

        if (this.shell.room.isIgloo && this.shell.room.id == args[0]) {
            if (this.shell.room.puffles[args[1]]) this.shell.room.puffles[args[1]].removePuffle()
            if (this.shell.room.puffles[prevWalking]) this.shell.room.puffles[prevWalking].loadPuffle()
        }
    }

    getPuffles(args) {
        if (!this.shell.room || !(this.shell.room.isIgloo || this.shell.room.isBackyard)) return

        args.forEach((puffle) => {
            this.shell.room.addPuffle(puffle)
        })
    }

    toggleBackyard(args) {
        if (!this.shell.room || !(this.shell.room.isIgloo || this.shell.room.isBackyard)) return

        if (args[1] == '0') {
            if (this.shell.room.isIgloo) {
                this.shell.room.addPuffle(args[2])
            } else {
                this.shell.room.puffles[args[0]].removePuffle()
            }
        } else {
            if (this.shell.room.isBackyard) {
                this.shell.room.addPuffle(args[2])
            } else {
                this.shell.room.puffles[args[0]].removePuffle()
            }
        }
    }
}
