export default class PartyController {
    constructor(shell) {
        this.shell = shell
        this.party = null
        this.partyCompletion = {}

        this.candiesFound = []
    }

    getPartyCompletion() {
        if (this.party) this.shell.airtower.sendXt('e#pc', this.party)
    }

    setPartyCompletion(partyCompletion) {
        if (partyCompletion) this.partyCompletion = partyCompletion
    }

    findCandy(candy) {
        if (this.candiesFound.includes(candy)) return
        this.candiesFound.push(candy)

        this.shell.room[candy].depth = 1000
        this.shell.room.tweens.add({
            targets: this.shell.room[candy],
            y: this.shell.room[candy].y - 200,
            scale: 0.5,
            alpha: 0,
            duration: 1000,
            ease: 'Linear'
        })

        if (this.candiesFound.length === 9) {
            this.shell.interface.prompt.showItem(9233)
        }
    }
}
