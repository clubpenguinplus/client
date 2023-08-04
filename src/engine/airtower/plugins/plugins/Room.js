import Plugin from '../Plugin'

export default class Postcard extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            mc: this.mining
        }
    }

    mining(args) {
        this.shell.client.coins = args[1]
        this.shell.room.playCoin(args[0])
    }
}
