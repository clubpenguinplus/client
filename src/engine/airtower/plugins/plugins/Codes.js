import Plugin from '../Plugin'

export default class Item extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            gca: this.getCodeAttrs,
            gci: this.getCodeItems
        }
    }

    get client() {
        return this.shell.client
    }

    getCodeAttrs(args) {
        let code = args
        this.shell.codes = []
        this.shell.codes.push(code)
    }

    getCodeItems(args) {
        let items = args
        this.shell.code_items = []
        this.shell.code_items.push(items)
    }

    reedeemCode(code) {
        let coins = this.shell.codes[0].coins
        let items = this.shell.code_items
        let length = items.length + 1
        if (length == 1) {
            this.interface.unlock.oneItem.visible = true
            this.interface.unlock.oneItem.item.icon = this.interface.unlock.itemLoader(items[0])
            this.interface.unlock.oneItem.coins.coinstext.text = `${coins}`
        } else if (length == 2) {
            this.interface.unlock.twoItem.visible = true
            this.interface.unlock.twoItem.itemOne.icon = this.interface.unlock.itemLoader(items[0])
            this.interface.unlock.twoItem.itemTwo.icon = this.interface.unlock.itemLoader(items[1])
            this.interface.unlock.twoItem.coins.coinstext.text = `${coins}`
        } else if (length == 3) {
            this.interface.unlock.threeItem.visible = true
            this.interface.unlock.threeItem.itemOne.icon = this.interface.unlock.itemLoader(items[0])
            this.interface.unlock.threeItem.itemTwo.icon = this.interface.unlock.itemLoader(items[1])
            this.interface.unlock.threeItem.itemThree.icon = this.interface.unlock.itemLoader(items[2])
            this.interface.unlock.threeItem.coins.coinstext.text = `${coins}`
        }
    }
}
