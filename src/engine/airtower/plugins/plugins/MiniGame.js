import Plugin from '../Plugin'

export default class MiniGame extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            sg: this.startGame,
            ssm: this.sendMove,
            eg: this.endMinigame,
            iff: this.initFour,
            pc: this.placeCounter,
            ct: this.changeTurn,
            eff: this.fourOver,
            as3: this.joinAS3,
            sse: this.stampEarned,
            endas3: this.endAS3,
        }
    }

    get client() {
        return this.shell.client
    }

    startGame(args) {
        this.shell.room.handleStartGame(args)
    }

    sendMove(args) {
        this.shell.room.handleSendMove(args)
    }

    gameOver(args) {
        // Temporary
        this.shell.client.sendJoinRoom(230, 'Ski Hill', 0, 0)
    }

    endMinigame(args) {
        if (args[0] == 'NaN') args[0] = 0
        this.client.coins = args[0]
        let prompt = this.shell.game.scene.getScene('InterfaceController').prompt
        if (args[2] == 'NaN') {
            args[2] = 0
        }
        prompt.showCoins(args[1], args[2])
    }

    initFour(args) {
        this.interface.main.findFour.init(args[0], args[1])
    }

    placeCounter(args) {
        let colour
        if (args[2] == this.shell.client.id) {
            colour = this.interface.main.findFour.seat + 1
        } else if (this.interface.main.findFour.seat == 0) {
            colour = 2
        } else {
            colour = 1
        }

        this.interface.main.findFour.placeCounter(args[1], args[0], colour)
    }

    changeTurn(args) {
        this.interface.main.findFour.changeTurn(args[0])
    }

    fourOver(args) {
        this.interface.main.findFour.reset()
    }

    joinAS3(args) {
        this.shell.RuffleManager.handleLoadAS3Minigame(args[0], args[1])
    }

    stampEarned(args) {
        this.shell.client.stampEarned(args[0], true)
    }

    endAS3(args) {
        this.shell.RuffleManager.killAS3Minigame(args[0])
    }
}
