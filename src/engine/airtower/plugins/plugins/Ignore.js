import Plugin from '../Plugin'

export default class Ignore extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            ia: this.ignoreAdd,
            ir: this.ignoreRemove,
        }
    }

    ignoreAdd(args) {
        this.shell.client.ignores.push({id: args[0], username: args[1]})
        this.interface.updateFriends()
    }

    ignoreRemove(args) {
        // Filter ignore out of list
        this.shell.client.ignores = this.shell.client.ignores.filter((obj) => obj.id != args[0])
        this.interface.updateFriends()
    }
}
