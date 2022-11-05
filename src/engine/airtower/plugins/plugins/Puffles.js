import Plugin from '../Plugin'

export default class Puffles extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            get_puffles: this.getPuffles,
            get_wellbeing: this.getWellbeing,
            get_puffle_color: this.getPuffleColor,
            stop_walking: this.stopWalking,
            walk_puffle: this.walkPuffle,
            get_puffle_count: this.getPuffleCount,
            adopt_puffle: this.adoptPuffle,
            send_puffle_anim: this.sendPuffleAnim,
        }
    }

    getPuffles(args) {
        if (!this.shell.room.isIgloo) return

        let pufflesArray = args.puffles

        this.shell.room.spawnPuffles(pufflesArray)
    }

    getWellbeing(args) {
        if (!this.shell.room.isIgloo) return

        if (args.puffleId == this.shell.client.penguin.puffle) {
            this.interface.main.puffleCare.showPuffle(args, true)
            this.interface.main.puffleCare.x = this.shell.client.penguin.x + 60
            this.interface.main.puffleCare.y = this.shell.client.penguin.y
        } else {
            this.interface.main.puffleCare.showPuffle(args)
            this.interface.main.puffleCare.x = this.shell.room.puffles[args.puffleId].x
            this.interface.main.puffleCare.y = this.shell.room.puffles[args.puffleId].y
        }
    }

    getPuffleColor(args) {
        if (!this.shell.room) return

        let penguin = this.shell.room.penguins[args.penguinId]
        let playercard = this.shell.interface.main.playerCard
        penguin.penguinLoader.addPuffle(penguin, args.color)
        if (playercard.visible && playercard.id === args.penguinId) {
            playercard.paperDoll.paperDollPuffleLoader.loadPuffle(this.shell.crumbs.puffles[args.color].name)
        }

        if (args.penguinId == this.shell.client.penguin.id) {
            this.interface.showPuffle(this.shell.crumbs.puffles[args.color].name)
        }
    }

    stopWalking(args) {
        if (!this.shell.room) return

        let penguin = this.shell.room.penguins[args.user]
        let puffle = this.shell.room.penguins[args.user].pufflesprite
        const prevPuffle = penguin.puffle
        if (puffle) {
            puffle.destroy()
            penguin.hasPuffle = false
        }
        let playercard = this.shell.interface.main.playerCard
        if (playercard.visible && playercard.id === args.user) {
            playercard.paperDoll.puffle.destroy()
        }
        if (penguin.puffle !== 0) {
            penguin.puffle = 0
        }
        if (args.user == this.shell.client.penguin.id) {
            this.interface.showPuffle(0)
        }
        if (this.shell.room.id == args.user) {
            this.shell.room.spawnPuffle(prevPuffle)
        }
    }

    walkPuffle(args) {
        if (!this.shell.room) return

        let penguin = this.shell.room.penguins[args.user]
        let puffle = this.shell.room.penguins[args.user].pufflesprite
        if (puffle) {
            puffle.destroy()
            penguin.hasPuffle = false
        }
        let playercard = this.shell.interface.main.playerCard
        if (playercard.visible && playercard.id === args.user) {
            playercard.paperDoll.puffle.destroy()
        }

        if (this.shell.room.isIgloo) {
            puffle = this.shell.room.puffles[args.puffle]

            if (puffle) {
                puffle.destroy()
            }
        }

        penguin.puffle = args.puffle
        this.airtower.sendXt('p#pgc', args.puffle + '%' + args.user)
    }

    getPuffleCount(args) {
        this.shell.client.pufflecount = args.count
    }

    adoptPuffle(args) {
        args.user = this.shell.client.penguin.id
        this.walkPuffle(args)
        this.shell.client.coins = args.coins
    }

    sendPuffleAnim(args) {
        if (!this.shell.room) return
        let penguin = this.shell.room.penguins[args.user]
        let puffle = this.shell.room.penguins[args.user].pufflesprite
        if (puffle) {
            penguin.playPuffleAnim(args.anim)
        }
    }
}
