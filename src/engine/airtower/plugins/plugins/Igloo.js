import Plugin from '../Plugin'
export default class Igloo extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            aig: this.addIgloo,
            af: this.addFurniture,
            uf: this.updateFlooring,
            gi: this.getIgloos,
            gid: this.getIglooData,
            gio: this.getIglooOpen,
            gl: this.getIglooLikes,
            uif: this.updateIglooFurniture,
        }
    }

    get client() {
        return this.shell.client
    }
    addIgloo(args) {
        let inventory = this.client.igloos

        this.client.coins = args[1]
        inventory.push(args[0])
        inventory.sort((a, b) => a - b)

        this.interface.refreshPlayerCard()

        if (this.interface.iglooEdit.gridView.visible) {
            this.interface.iglooEdit.showGridView()
        }

        this.interface.updateCatalogCoins(args.coins)

        let text = `${this.crumbs.igloos[args[0]].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }
    addFurniture(args) {
        let inventory = this.client.furniture
        this.client.coins = args[1]
        inventory[args[0]] = inventory[args[0]] + 1 || 1
        this.interface.refreshPlayerCard()
        if (this.interface.iglooEdit.gridView.visible) {
            this.interface.iglooEdit.showGridView()
        }
        this.interface.updateCatalogCoins(args.coins)
        let text = `${this.crumbs.furniture[args[0]].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
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
