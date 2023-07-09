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
            on: this.getOnline,
            gii: this.getItemInfo,
            gic: this.getCost
        }
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(this.shell.arrayToObject(args[0]))
    }

    getUnverifedUsers(args) {
        const users = args[0].split(',').map((player) => {
            if (!player) return
            return {
                id: player.split('|')[0],
                username: player.split('|')[1]
            }
        })
        this.interface.ModPanel.moderator.showUsers(users)
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

        this.interface.main.friend.showFriend(fr)
        this.interface.main.friendSmall.showFriend(fr)
    }

    getStampbook(args) {
        if (!this.interface.stampbook) return

        this.interface.stampbook.initStampbook(args, false)
    }

    getMascots(args) {
        this.shell.mascots = []
        for (let i = 0; i < args.length; i++) {
            this.shell.mascots.push(args[i])
        }
    }

    getOnline(args) {
        this.interface.main.playerCard.buttons.isOnline(args[0])
    }

    getItemInfo(args) {
        let item = this.crumbs[args[0]][args[1]]
        item.cost = args[3]
        item.available = args[4]
        item.releases = JSON.parse(args[5])
    }

    getCost(args) {
        for (let item of args[1].split('|')) {
            let itemInfo = item.split(':')

            if (!this.crumbs[args[0]][itemInfo[0]]) {
                continue
            }

            this.crumbs[args[0]][itemInfo[0]].cost = itemInfo[1]
        }
    }
}
