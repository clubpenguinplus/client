import Plugin from '../Plugin'

export default class Join extends Plugin {
    constructor(airtower) {
        super(airtower)

        this.events = {
            lp: this.loadPlayer,
            jr: this.joinRoom,
            jg: this.joinGame,
            ji: this.joinIgloo,
            ap: this.addPlayer,
            rp: this.removePlayer
        }
    }

    loadPlayer(args) {
        this.scene.start('Shell')
        this.shell.setClient(args)

        this.airtower.sendXt('j#js')
    }

    joinRoom(args) {
        if (this.airtower.allowSwitchRooms == 'no') {
            this.airtower.allowSwitchRooms = 'yes'
            return this.airtower.sendXt('j#jr', this.shell.room.id)
        }

        let users = args[1].split(',').map((user) => {
            return this.shell.arrayToObject(user)
        })

        this.shell.joinRoom(args[0], users)
    }

    joinGame(args) {
        this.shell.joinRoom(args[0])
    }

    joinIgloo(args) {
        this.shell.joinIgloo(args)
    }

    addPlayer(args) {
        this.shell.addPenguin(args[0])
    }

    removePlayer(args) {
        this.shell.removePenguin(args[0])
    }
}
