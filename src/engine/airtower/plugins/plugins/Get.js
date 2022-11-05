import Plugin from '../Plugin'

export default class Get extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            gp: this.getPlayer,
            gvu: this.getUnverifedUsers,
            edp: this.editPlayer,
            pin: this.getPin,
            gb: this.getFriend,
            gsb: this.getStampbook,
            gm: this.getMascots,
        }
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(this.shell.arrayToObject(args[0]))
    }

    getUnverifedUsers(args) {
        this.interface.ModPanel.moderator.showUsers(this.shell.arrayToObject(args[0]))
    }

    editPlayer(args) {
        this.interface.ModPanel.modActions._showCard(this.shell.arrayToObject(args[0]), args[1], args[2])
    }

    getPin(args) {
        this.crumbs.pin.id = args[0]
        this.crumbs.pin.room = args[1]
        this.crumbs.pin.x = args[2]
        this.crumbs.pin.y = args[3]
    }

    getFriend(args) {
        let fr = this.shell.arrayToObject(args[0])

        if (this.interface.main.onlineItem.id == fr.id) {
            this.interface.main.onlineItem.setItem(fr)
        } else if (this.interface.main.mainRequestItem.id == fr.id) {
            this.interface.main.mainRequestItem.setPaperDoll(fr)
        }

        if (this.interface.main.friend.visible) {
            this.interface.main.friend.showFriend(fr)
        } else if (this.interface.main.friendSmall.visible) {
            this.interface.main.friendSmall.showFriend(fr)
        }
    }

    getStampbook(args) {
        if (!this.interface.book) return

        this.interface.book.initStampbook(args, false)
    }

    getMascots(args) {
        this.shell.mascots = []
        for (let i = 0; i < args.length; i++) {
            this.shell.mascots.push(args[i])
        }
    }
}
