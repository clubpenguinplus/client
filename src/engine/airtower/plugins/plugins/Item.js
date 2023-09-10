import Plugin from '../Plugin'

export default class Item extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            up: this.updatePlayer,
            ai: this.addItem,
            aim: this.addItemWithMedal,
            aci: this.addCodeItem,
            ac: this.addCoins,
            sepfm: this.setMedals
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
        args[0] = parseInt(args[0])
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
        let text = this.crumbs.getString(`new-inventory-item,${this.crumbs.items[args[0]].name}`)
        this.interface.prompt.showWindow(text, 'single')
    }

    addItemWithMedal(args) {
        args[0] = parseInt(args[0])
        // If item already in inventory
        if (this.client.inventory[args[2]].includes(args[0])) return

        // Update player data
        this.client.medals = args[3]
        this.client.inventory[args[2]].push(args[0])
        this.client.inventory[args[2]].sort((a, b) => a - b)

        // Update EPF phone medals
        this.interface.updateEPFMedals(args[3])

        // Show prompt
        let text = this.crumbs.getString(`new-inventory-item,${this.crumbs.items[args[0]].name}`)
        this.interface.prompt.showWindow(text, 'single')
    }

    addCodeItem(args) {
        args[0] = parseInt(args[0])
        // If item already in inventory
        if (this.client.inventory[args[2]].includes(args[0])) return

        // Update player data
        this.client.inventory[args[2]].push(args[0])
        this.client.inventory[args[2]].sort((a, b) => a - b)
    }

    addCoins(args) {
        // Update player data
        this.client.coins = args[0]

        // Update player card
        this.interface.refreshPlayerCard()

        // Update catalog coins
        this.interface.updateCatalogCoins(args[0])
    }

    setMedals(args) {
        this.client.medals = args[0]
    }
}
