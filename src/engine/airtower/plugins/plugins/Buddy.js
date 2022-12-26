import Plugin from '../Plugin'

export default class Friend extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            ia: this.friendAdd,
            rq: this.friendRequest,
            arq: this.friendAccept,
            rf: this.friendRemove,
            bf: this.friendFind,
            fo: this.friendOnline,
            of: this.friendOffline,
            fs: this.friendSearch,
            fse: this.searchError,
        }
    }

    friendAdd(args) {
        this.shell.client.friends.push(args[1])
        if (this.interface.main.scene.isActive()) {
            this.interface.updateFriends()
        }
    }

    friendRequest(args) {
        args = {id: args[0], user: args[1]}
        this.interface.main.addRequest(args)
        this.shell.client.pending.push(`${args.id}|${args.user}`)
    }

    friendAccept(args) {
        args = {id: args[0], username: args[1], requester: args[2], online: args[3]}

        let {requester, ...friend} = args

        this.shell.client.friends.push(friend)
        this.shell.client.pending = this.shell.client.pending.filter((obj) => {
            return obj.split('|')[0] != args.id
        })
        this.interface.updateFriends()
        this.airtower.sendXt('b#gfo', args.id)
    }

    friendRemove(args) {
        // Filter friend out of list
        this.shell.client.friends = this.shell.client.friends.filter((obj) => parseInt(obj.id) != parseInt(args[0]))
        this.interface.updateFriends()
    }

    friendFind(args) {
        let username = this.interface.main.playerCard.username.text
        let id = this.interface.main.playerCard.id

        let name = this.getRoomName(args, id)

        this.interface.prompt.showWindow(`${username} ${this.getString(`${name}_find`)}`, 'single')
    }

    friendOnline(args) {
        let f = this.shell.arrayToObject(args[0])
        let friend = this.shell.client.friends.find((obj) => obj.id == f.id)
        if (!friend) return

        friend.online = true

        if (this.interface.main.scene.isActive()) {
            this.interface.updateFriends()
            this.interface.main.showOnlinePopup(f)
        }
    }

    friendOffline(args) {
        let friend = this.shell.client.friends.find((obj) => obj.id == args[0])

        if (friend) {
            friend.online = false
            this.interface.updateFriends()
        }
    }

    getRoomName(args, userId) {
        if (args[0] != 'igloo' && args[0] != 'game') {
            return this.crumbs.scenes.rooms[args[0]].key
        }

        if (args[0] == 'game') {
            return 'game'
        }

        return 'igloo'
    }

    friendSearch(args) {
        if (this.interface.main.friend.visible) {
            this.interface.main.friend.searchItem.visible = true
            this.interface.main.friend.searchError.visible = false
            this.interface.main.friend.searchItem.setItem(args[0])
        } else if (this.interface.main.friendSmall.visible) {
            this.interface.main.friendSmall.searchItem.visible = true
            this.interface.main.friendSmall.searchError.visible = false
            this.interface.main.friendSmall.searchItem.setItem(args[0])
        }
    }

    searchError(args) {
        let errorText = this.shell.crumbs.getError(args[0])
        if (this.interface.main.friend.visible) {
            this.interface.main.friend.searchItem.visible = false
            this.interface.main.friend.searchError.visible = true
            this.interface.main.friend.searchError.text = errorText
        } else if (this.interface.main.friendSmall.visible) {
            this.interface.main.friendSmall.searchItem.visible = false
            this.interface.main.friendSmall.searchError.visible = true
            this.interface.main.friendSmall.searchError.text = errorText
        }
    }
}
