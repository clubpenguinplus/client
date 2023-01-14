import ClientPenguin from './ClientPenguin'
import Penguin from './Penguin'
import PenguinLoader from './loader/PenguinLoader'

export default class PenguinFactory {
    constructor(shell) {
        this.shell = shell

        this.penguinLoader = new PenguinLoader(shell)
    }

    createPenguin(user, room) {
        let client = this.shell.client

        if (this.shell.room && this.shell.room.penguins && this.shell.room.penguins[user.id]) return this.shell.room.penguins[user.id]

        for (var x in this.shell.mascots) {
            if (this.shell.mascots[x].id == user.id) user.username = this.shell.mascots[x].name
        }

        if (user.stealthMode == 1) user.username = user.username + ' (Hidden)'

        if (user.puffle && user.puffle !== 0) {
            this.shell.airtower.sendXt('p#pgc', `${user.puffle}%${user.id}`)
        }

        if (user.id == client.id) {
            client.penguin = new ClientPenguin(user, room, this.penguinLoader)
            return client.penguin
        } else if (user.stealthMode == 1 && client.rank < 3) {
            return
        } else {
            return new Penguin(user, room, this.penguinLoader)
        }
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            if (!(user.id in penguins)) {
                penguins[user.id] = this.createPenguin(user, room)
            }
        }

        return penguins
    }
}
