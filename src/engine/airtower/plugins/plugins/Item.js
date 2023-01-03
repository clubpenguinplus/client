import Plugin from '../Plugin'

export default class Item extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            up: this.updatePlayer,
            ai: this.addItem,
            aci: this.addCodeItem,
        }
    }

    get client() {
        return this.shell.client
    }

    updatePlayer(args) {
        if (!this.shell.room.isReady) {
            return this.shell.room.updateWaiting(args[0], {[args[2]]: args[1]})
        }

        this.shell.room.penguins[args[0]].update(args[1], args[2])
    }

    addItem(args) {
        // If item already in inventory
        if (this.client.inventory[args[2]].includes(args[0])) return

        // Update player data
        this.client.coins = args[3]
        this.client.inventory[args[2]].push(args[0])
        this.client.inventory[args[2]].sort((a, b) => a - b)

        // Update player card
        this.interface.refreshPlayerCard()

        // Update catalog coins
        this.interface.updateCatalogCoins(args[3])

        // Show prompt
        let text = `${this.crumbs.items[args[0]].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addCodeItem(args) {
        // If item already in inventory
        if (this.client.inventory[args[2]].includes(args[0])) return

        // Update player data
        this.client.inventory[args[2]].push(args[0])
        this.client.inventory[args[2]].sort((a, b) => a - b)
    }
}
