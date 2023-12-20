import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, SimpleButton} from '@components/components'

import FindFourPlayer from './FindFourPlayer'

export const preload = {
    key: 'four-pack',
    url: 'client/media/games/four/four-pack.json',
    loadString: 'four'
}

/* START OF COMPILED CODE */

export default class FindFour extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 730, y ?? 340)

        /** @type {Phaser.GameObjects.Image} */
        this.window
        /** @type {Phaser.GameObjects.Image} */
        this.shadow
        /** @type {FindFourPlayer} */
        this.player2
        /** @type {FindFourPlayer} */
        this.player1
        /** @type {Phaser.GameObjects.Image} */
        this.hover
        /** @type {Phaser.GameObjects.Image} */
        this.x_button
        /** @type {Phaser.GameObjects.Image[]} */
        this.placers

        // window
        const window = scene.add.image(0, 0, 'four', 'window')
        this.add(window)

        // shadow
        const shadow = scene.add.image(0, -44, 'four', 'shadow')
        this.add(shadow)

        // placer6
        const placer6 = scene.add.image(-146, 77, 'four', 'counter_1')
        placer6.visible = false
        this.add(placer6)

        // placer5
        const placer5 = scene.add.image(-146, 29, 'four', 'counter_1')
        placer5.visible = false
        this.add(placer5)

        // placer4
        const placer4 = scene.add.image(-146, -20, 'four', 'counter_1')
        placer4.visible = false
        this.add(placer4)

        // placer3
        const placer3 = scene.add.image(-146, -68, 'four', 'counter_1')
        placer3.visible = false
        this.add(placer3)

        // placer2
        const placer2 = scene.add.image(-146, -117, 'four', 'counter_1')
        placer2.visible = false
        this.add(placer2)

        // placer1
        const placer1 = scene.add.image(-146, -165, 'four', 'counter_1')
        placer1.visible = false
        this.add(placer1)

        // placer0
        const placer0 = scene.add.image(-146, -205, 'four', 'counter_1')
        placer0.visible = false
        this.add(placer0)

        // board
        const board = scene.add.image(0, -44, 'four', 'board')
        this.add(board)

        // player2
        const player2 = new FindFourPlayer(scene, -126, 232)
        this.add(player2)

        // player1
        const player1 = new FindFourPlayer(scene, -126, 172)
        this.add(player1)

        // hover
        const hover = scene.add.image(-145, -194, 'four', 'button/counter_1')
        hover.setOrigin(0.5, 0.7)
        hover.visible = false
        this.add(hover)

        // x_button
        const x_button = scene.add.image(181, -243, 'main', 'blue-button')
        this.add(x_button)

        // blue_x
        const blue_x = scene.add.image(181, -245, 'main', 'blue-x')
        this.add(blue_x)

        // lists
        const placers = [placer0, placer1, placer2, placer3, placer4, placer5, placer6]

        this.window = window
        this.shadow = shadow
        this.player2 = player2
        this.player1 = player1
        this.hover = hover
        this.x_button = x_button
        this.placers = placers

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.counters = []
        this.buttons = []
        this.createButtons()

        this.boundGetGame = this.handleGetGame.bind(this)
        this.boundJoinGame = this.handleJoinGame.bind(this)
        this.boundUpdateGame = this.handleUpdateGame.bind(this)
        this.boundStartGame = this.handleStartGame.bind(this)
        this.boundSendMove = this.handleSendMove.bind(this)
        this.boundCloseGame = this.handleCloseGame.bind(this)
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get isMyTurn() {
        return this.currentTurn === this.myTurn
    }

    addListeners() {
        this.airtower.events.on('get_game', this.boundGetGame, this)
        this.airtower.events.on('join_game', this.boundJoinGame, this)
        this.airtower.events.on('update_game', this.boundUpdateGame, this)
        this.airtower.events.on('start_game', this.boundStartGame, this)
        this.airtower.events.on('send_move', this.boundSendMove, this)
        this.airtower.events.on('close_game', this.boundCloseGame, this)
    }

    removeListeners() {
        this.airtower.events.off('get_game', this.boundGetGame, this)
        this.airtower.events.off('join_game', this.boundJoinGame, this)
        this.airtower.events.off('update_game', this.boundUpdateGame, this)
        this.airtower.events.off('start_game', this.boundStartGame, this)
        this.airtower.events.off('send_move', this.boundSendMove, this)
        this.airtower.events.off('close_game', this.boundCloseGame, this)
    }

    show() {
        this.map = null
        this.myTurn = null
        this.currentTurn = 1
        this.started = false

        this.visible = true

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this)
        thisDraggableContainer.handle = this.window
        thisDraggableContainer.start()

        // x_button (components)
        const x_buttonButton = new Button(this.x_button)
        x_buttonButton.callback = () => this.close()
        x_buttonButton.start()

        this.updateButtons()
        this.updateHover()

        this.addListeners()
        this.airtower.sendXt('get_game')

        this.shell.interface.main.blocker.visible = true

        this.shell.four = this
    }

    close() {
        if (!this.started) {
            this.shell.interface.main.blocker.visible = false
            return this.sendLeaveTable()
        }

        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveTable()

            this.interface.prompt.window.visible = false
        })
    }

    handleGetGame(args) {
        args = JSON.parse(args)
        this.map = args.map
        this.setupMap()

        for (let user of args.users) {
            this.setPlayer(user, args.users.indexOf(user) + 1)
        }

        this.airtower.sendXt('join_game')
    }

    handleJoinGame(args) {
        args = JSON.parse(args)
        this.myTurn = args.turn
    }

    handleUpdateGame(args) {
        args = JSON.parse(args)
        this.setPlayer(args.username, args.turn)
    }

    handleStartGame() {
        this.started = true

        this.updateButtons()

        this.player1.setActive()
        this.player2.setActive()
    }

    handleSendMove(args) {
        args = JSON.parse(args)
        this.currentTurn = args.turn

        this.addCounter(args.turn, args.x, args.y)
    }

    handleCloseGame(args) {
        args = JSON.parse(args)
        if (args.username) {
            let text = this.getFormatString('player_quit_prompt', args.username)
            this.interface.prompt.showWindow(text, 'single')
        }

        this.leaveTable()
    }

    createButtons() {
        let x = -146

        for (let column = 0; column < 7; column++) {
            let button = this.scene.add.image(x, -194, 'four', 'button/button')

            button.setOrigin(0.5, 0.078125)
            this.add(button)
            this.buttons.push(button)

            let component = new SimpleButton(button)

            component.callback = () => this.onButtonClick(column)
            component.hoverCallback = () => this.onButtonOver(button)
            component.hoverOutCallback = () => this.onButtonOut()

            component.start()

            x += 48.6
        }
    }

    onButtonClick(column) {
        if (!this.isMyTurn) {
            return
        }

        if (this.map[column][0]) {
            return this.shell.musicController.addSfx('four-error', false, 'mp3', 0.5)
        }

        this.airtower.sendXt('send_move', JSON.stringify({column: column}))
    }

    onButtonOver(button) {
        if (!this.isMyTurn) {
            return
        }

        this.hover.visible = true

        this.hover.x = button.x
        this.hover.y = button.y
    }

    onButtonOut() {
        if (!this.isMyTurn) {
            return
        }

        this.hover.visible = false
    }

    setupMap() {
        for (let [x, col] of this.map.entries()) {
            for (let [y, row] of col.entries()) {
                if (row == 0) {
                    continue
                }

                this.addCounter(this.map[x][y], x, y, false)
            }
        }
    }

    setPlayer(username, turn) {
        let player = this[`player${turn}`]
        player.set(username, turn)
    }

    addCounter(turn, x, y, drop = true) {
        this.map[x][y] = turn

        y++

        // Get x from column button position
        let counterX = this.buttons[x].x
        // Get y from placer position
        let counterY = this.placers[0].y

        let counter = this.scene.add.image(counterX, counterY, 'four', `counter_${turn}`)
        this.counters.push(counter)

        if (!drop) {
            counter.y = this.placers[y].y
        } else {
            this.playDrop(turn, counter, y)
        }

        this.addAt(counter, this.getIndex(this.shadow) + 1)
    }

    playDrop(turn, counter, y) {
        let i = 0

        let timer = this.scene.time.addEvent({
            delay: 38,
            callback: () => {
                counter.y = this.placers[i].y

                if (i === y) {
                    this.shell.musicController.addSfx('four-drop', false, 'mp3', 0.5)
                    this.scene.time.removeEvent(timer)
                    this.updateTurn(turn)
                }

                i++
            },
            repeat: y
        })
    }

    updateTurn(turn) {
        this.currentTurn = turn === 1 ? 2 : 1

        this.updateButtons()
        this.updateHover()

        this.player1.setActive()
        this.player2.setActive()
    }

    updateButtons() {
        if (this.started && this.isMyTurn) {
            this.buttons.map((b) => b.setInteractive())
        } else {
            this.buttons.map((b) => b.disableInteractive())
            this.scene.input.setDefaultCursor('default')
        }
    }

    updateHover() {
        this.hover.visible = false
        this.hover.setFrame(`button/counter_${this.currentTurn}`)
    }

    sendLeaveTable() {
        this.airtower.sendXt('leave_table')
        this.leaveTable()
    }

    leaveTable() {
        this.removeListeners()
        this.resetGame()

        this.visible = false

        this.shell.interface.main.blocker.visible = false
        this.shell.client.sendLeaveSeat()
    }

    resetGame() {
        for (let counter of this.counters) {
            counter.destroy()
        }

        this.player1.reset()
        this.player2.reset()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
