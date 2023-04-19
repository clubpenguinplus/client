import ClientPenguin from './ClientPenguin'
import Penguin from './Penguin'
import PenguinLoader from './loader/PenguinLoader'
import PuffleLoader from '@engine/loaders/PuffleLoader'

export default class PenguinFactory {
    constructor(shell) {
        this.shell = shell

        this.penguinLoader = new PenguinLoader(shell)
        this.puffleLoader = new PuffleLoader(shell)
    }

    createPenguin(user, room) {
        let client = this.shell.client

        if (room.penguins && room.penguins[user.id] && room.penguins[user.id].visible) return room.penguins[user.id]

        for (var x in this.shell.mascots) {
            if (this.shell.mascots[x].id == user.id) user.username = this.shell.mascots[x].name
        }

        if (user.stealthMode == 1) user.username = user.username + ' (Hidden)'

        if (user.id == client.id) {
            client.penguin = new ClientPenguin(user, room, this.penguinLoader, this.puffleLoader)
            return client.penguin
        } else if (user.stealthMode == 1 && client.rank < 3) {
            return
        } else {
            return new Penguin(user, room, this.penguinLoader, this.puffleLoader)
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
