import Plugin from '../Plugin'

export default class Join extends Plugin {
    constructor(airtower) {
        super(airtower)

        this.events = {
            lp: this.loadPlayer,
            jr: this.joinRoom,
            jg: this.joinGame,
            ji: this.joinIgloo,
            ap: this.addPlayer,
            rp: this.removePlayer,
        }
    }

    loadPlayer(args) {
        if (this.airtower.saveUsername) {
            this.savePlayer(args)
        } else {
            this.unsavePlayer(args)
        }

        this.scene.start('Shell')
        this.shell.setClient(args)

        this.airtower.sendXt('j#js')
    }

    joinRoom(args) {
        if (this.airtower.allowSwitchRooms == 'no') {
            this.airtower.allowSwitchRooms = 'yes'
            return this.airtower.sendXt('j#jr', this.shell.room.id)
        }

        let users = args[1].split(',').map((user) => {
            let data = user.split('|')
            return {
                id: data[0],
                username: data[1],
                color: data[2],
                head: data[3],
                face: data[4],
                neck: data[5],
                body: data[6],
                hand: data[7],
                feet: data[8],
                flag: data[9],
                photo: data[10],
                coins: data[11],
                x: data[12],
                y: data[13],
                frame: data[14],
                rank: data[15],
                stealthMode: data[16],
                username_approved: data[17],
                walking: data[18],
            }
        })

        this.shell.joinRoom(args[0], users)
    }

    joinGame(args) {
        this.shell.joinRoom(args[0])
    }

    joinIgloo(args) {
        this.shell.joinIgloo(args)
    }

    addPlayer(args) {
        this.shell.addPenguin(args[0])
    }

    removePlayer(args) {
        this.shell.removePenguin(args[0])
    }

    // Saves a player to local storage
    savePlayer(args) {
        let savedPenguins = this.airtower.savedPenguins

        if (Object.keys(savedPenguins).length > 6 && !(args[0].split('|')[1] in savedPenguins)) return

        let penguin = {}
        let arr = args[0].split('|')

        penguin.username = arr[1]
        penguin.color = arr[2]
        penguin.head = arr[3]
        penguin.face = arr[4]
        penguin.neck = arr[5]
        penguin.body = arr[6]
        penguin.hand = arr[7]
        penguin.feet = arr[8]

        // Set auth token
        if (this.airtower.token) {
            penguin.token = this.airtower.token
        }

        savedPenguins[penguin.username.toLowerCase()] = penguin
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
    }

    // Deletes a player from local storage
    unsavePlayer(args) {
        let savedPenguins = this.airtower.savedPenguins

        if (args[0].split('|')[1].toLowerCase() in savedPenguins) {
            delete savedPenguins[args[0].split('|')[1].toLowerCase()]
            localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
        }
    }
}