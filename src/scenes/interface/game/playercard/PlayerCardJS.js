import BaseContainer from '@scenes/base/BaseContainer'

/* START OF COMPILED CODE */

export default class PlayerCardJS extends BaseContainer {
    /* START-USER-CODE */

    /**
     * Shows a player card by id, if the user is found in the current room the penguin object can
     * be taken from there. Otherwise the penguin object must be fetched from the server.
     *
     * @param {number} id - Penguin ID
     * @param {boolean} refresh - Whether or not a card should pass the already open check
     */
    showCard(id, refresh = false) {
        // Don't open player's card if it's already open
        if (id == this.id && this.visible && !refresh) {
            this.interface.main.showWidget(this)
            return
        }

        if (id in this.shell.room.penguins) {
            let penguin = this.shell.room.penguins[id]
            this._showCard(penguin, penguin.items.flat)
        } else {
            // Fetch penguin object from server
            this.airtower.sendXt('u#gp', id)
        }
    }

    /**
     * Primary showCard function, which accepts a penguin object, and optionally an items object to
     * fill the player card with the correct data. The items object is not required if the penguin is fetched
     * from the server due to all necessary data being available from the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} items - Penguin items object
     */
    _showCard(penguin, items = penguin) {
        // Text
        this.username.text = penguin.username

        for (var x in this.shell.mascots) {
            if (this.shell.mascots[x].id == penguin.id) this.username.text = this.shell.mascots[x].name
        }

        if (penguin.puffle && !items.puffle) {
            items.puffle = penguin.puffle
        }
        if (penguin.id && !items.id) {
            items.id = penguin.id
        }

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        if (penguin.isClient) {
            this.coins.text = `Your Coins: ${this.shell.client.coins}`
            this.stats.visible = true
            this.buttons.visible = false
            this.inventory.visible = true
            this.inventory.showPage()
            this.stamps.text = `Your Stamps: ${this.getTotalStamps()[1]}/${this.getTotalStamps()[0]}`
        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
        }

        if (this.shell.client.rank >= 3) this.edit_player_button.visible = true

        this.inventorySort.closeMenu()

        this.id = penguin.id

        this.updateButtons()

        this.interface.main.showWidget(this)
    }

    updateButtons() {
        if (this.buttons.visible) {
            let relationship = this.shell.getRelationship(this.id)
            this.buttons.updateButtons(relationship)
        }
    }

    editPlayer() {
        this.airtower.sendXt('o#gp', this.id)
        this.visible = false
    }

    getCategoryStamps(category) {
        let categoryStamps = []
        let ownedCategoryStamps = []
        for (var stamp in this.crumbs.stamps) {
            if (this.crumbs.stamps[stamp].groupid == category && !this.crumbs.stamps[stamp].disabled) {
                categoryStamps.push(this.crumbs.stamps[stamp])
                for (let ownedStamp of this.shell.client.stamps) {
                    if (ownedStamp == stamp) {
                        ownedCategoryStamps.push(this.crumbs.stamps[stamp])
                        break
                    }
                }
            }
        }
        return [categoryStamps.length, ownedCategoryStamps.length]
    }

    getTotalStamps() {
        let groups = []
        let totalStamps = 0
        let ownedStamps = 0
        for (let page of this.crumbs.stampbook.enabledPages) {
            if (this.crumbs.stampbook[page].group) groups.push(this.crumbs.stampbook[page].group)
        }
        for (let group of groups) {
            let cgs = this.getCategoryStamps(group)
            totalStamps += cgs[0]
            ownedStamps += cgs[1]
        }
        return [totalStamps, ownedStamps]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
