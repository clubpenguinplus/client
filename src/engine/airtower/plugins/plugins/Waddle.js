import Plugin from '../Plugin'

export default class Waddle extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            gt: this.getWaddles,
            jt: this.joinWaddle,
            update_waddle: this.updateWaddle,
        }
    }

    getWaddles(args) {
        this.shell.room.setWaddles(args[0])
    }

    joinWaddle(args) {
        if (args[2] == 'four') {
            this.interface.main.findFour.showWaddle(args[0], args[1])
        } else {
            this.interface.main.waddle.showWaddle(args[0], args[1])
        }
    }

    updateWaddle(args) {
        if (this.shell.room.isReady) {
            if (args[3] == 'four') {
                this.interface.main.findFour.updateWaddle(args[0], args[1], args[2])
            } else {
                this.interface.main.waddle.updateWaddle(args[0], args[1], args[2])
            }
        }
    }
}
