import Plugin from '../Plugin'

export default class Postcard extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            upo: this.updatePostcards,
            send_postcard: this.sendPostcard
        }
    }

    updatePostcards(args) {
        args[0] = args[0].split(',')
        let postcards = []
        for (let i = 0; i < args[0].length; i++) {
            postcards.push({
                id: args[i][0],
                sender: args[i][1],
                details: args[i][2]
            })
        }

        this.shell.client.postcards = args.postcards
    }

    sendPostcard(args) {
        this.shell.client.coins = args[0]
    }
}
