import Plugin from '../Plugin'
export default class Igloo extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            aig: this.addIgloo,
            af: this.addFurniture,
            afl: this.addFlooring,
            uf: this.updateFlooring,
            gi: this.getIgloos,
            gid: this.getIglooData,
            gio: this.getIglooOpen,
            gl: this.getIglooLikes,
            uif: this.updateIglooFurniture,
            al: this.addLocation,
        }
    }

    get client() {
        return this.shell.client
    }

    addIgloo(args) {
        let inventory = this.client.iglooInventory

        this.client.coins = args[1]

        let existsInInventory = false
        for (let i of inventory) {
            if (i.id == args[0]) {
                existsInInventory = true
                break
            }
        }

        if (!existsInInventory) {
            inventory.push({id: args[0], type: 'igloo'})
        }

        this.interface.refreshPlayerCard()

        this.interface.updateCatalogCoins(args[1])

        let text = `${this.crumbs.igloos[args[0]].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addFurniture(args) {
        let inventory = this.client.furnitureInventory
        this.client.coins = args[1]

        let existsInInventory = false
        for (let i of inventory) {
            if (i.id == args[0]) {
                i.quantity++
                existsInInventory = true
                break
            }
        }

        if (!existsInInventory) {
            inventory.push({id: args[0], quantity: 1, type: 'furniture'})
        }

        this.interface.refreshPlayerCard()

        this.interface.updateCatalogCoins(args[1])
        let text = `${this.crumbs.furniture[args[0]].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addFlooring(args) {
        let inventory = this.client.flooringInventory
        this.client.coins = args[1]

        let existsInInventory = false
        for (let i of inventory) {
            if (i.id == args[0]) {
                existsInInventory = true
                break
            }
        }

        if (!existsInInventory) {
            inventory.push({id: args[0], type: 'flooring'})
        }

        this.interface.refreshPlayerCard()

        this.interface.updateCatalogCoins(args[1])
        let text = `${this.crumbs.flooring[args[0]].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addLocation(args) {
        let inventory = this.client.locationInventory
        this.client.coins = args[1]

        let existsInInventory = false
        for (let i of inventory) {
            if (i.id == args[0]) {
                existsInInventory = true
                break
            }
        }

        if (!existsInInventory) {
            inventory.push({id: args[0], type: 'location'})
        }
    }

    updateFlooring(args) {
        if (!this.shell.room.isIgloo) return
        this.shell.room.updateFlooring(args[1])
        this.client.coins = args[0]
        this.interface.refreshPlayerCard()
    }

    getIgloos(args) {
        this.interface.main.map.iglooMap.setIgloos(args)
    }

    getIglooOpen(args) {
        if (args[0]) {
            this.interface.main.playerCard.buttons.enableButton('igloo')
        }
    }

    getIglooData(args) {
        this.interface.iglooEdit.createPreview(args)
    }

    getIglooLikes(args) {
        if (args[0] == this.shell.room.id) {
            this.shell.room.likesWidget.show(args[2])
        }
    }

    updateIglooFurniture(args) {
        if (!this.shell.room.isIgloo) return
        this.shell.room.updateFurniture(args[0])
    }
}
