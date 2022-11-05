export default class PartyController {
    constructor(shell) {
        this.shell = shell
        this.party = null
        this.partyCompletion = {}
    }

    getPartyCompletion() {
        if (this.party) this.shell.airtower.sendXt('e#pc', this.party)
    }

    setPartyCompletion(partyCompletion) {
        if (partyCompletion) this.partyCompletion = partyCompletion
    }
}
