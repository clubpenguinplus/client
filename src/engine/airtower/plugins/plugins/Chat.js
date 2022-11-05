import Plugin from '../Plugin'

export default class Chat extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            sm: this.sendMessage,
            ss: this.sendSafe,
            se: this.sendEmote,
            fm: this.filteredMessage,
            owt: this.wiretapChat,
            owf: this.wiretapFiltered,
        }
    }

    sendMessage(args) {
        if (this.shell.room.isReady) {
            this.interface.showTextBalloon(args[0], args[1])
        }
    }

    filteredMessage(args) {
        if (this.shell.room.isReady && (this.shell.client.penguin.rank > 3 || args.id == this.shell.client.id)) {
            this.interface.showTextBalloon(args[0], args[1], true)
        }
    }

    sendSafe(args) {
        if (this.shell.room.isReady) {
            let message = this.interface.main.safe.safeMessagesMap[args[1]]

            this.interface.showTextBalloon(args[0], message)
        }
    }

    sendEmote(args) {
        if (this.shell.room.isReady) {
            this.interface.showEmoteBalloon(args[0], args[1])
        }
    }

    wiretapChat(args) {
        this.interface.ModPanel.wiretap.addMessage(args)
    }

    wiretapFiltered(args) {
        this.interface.ModPanel.wiretap.addFilteredMessage(args)
    }
}
