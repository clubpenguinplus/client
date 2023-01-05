import Plugin from '../Plugin'

export default class Item extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            aci: this.addCodeItem,
            gca: this.getCodeAttrs,
            gci: this.getCodeItems,
            rc: this.reedemCode,
        }
    }

    get client() {
        return this.shell.client
    }

    getCodeAttrs(args) {
        let code = args
        console.log("client code", code)
        this.shell.codes = []
        this.shell.codes.push(args)
    }

    getCodeItems(args) {
        let items = args
        console.log("client items", items)
        this.code_items = []
        this.code_items.push(args)
    }

    addCodeItem(args) {
        // If item already in inventory
        if (this.client.inventory[args[2]].includes(args[0])) return

        // Update player data
        this.client.inventory[args[2]].push(args[0])
        this.client.inventory[args[2]].sort((a, b) => a - b)
    }
}
