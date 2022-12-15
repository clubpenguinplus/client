import BaseContainer from '@scenes/base/BaseContainer'

import Button from '@scenes/components/Button'
import DraggableContainer from '@scenes/components/DraggableContainer'
import Interactive from '@scenes/components/Interactive'
import SimpleButton from '@scenes/components/SimpleButton'

import MancalaPlayer from './MancalaPlayer'

/* START OF COMPILED CODE */

export default class Mancala extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.lower_wait;
        /** @type {Phaser.GameObjects.Image} */
        this.upper_wait;
        /** @type {Phaser.GameObjects.Image} */
        this.board;
        /** @type {Phaser.GameObjects.Container} */
        this.counterContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.currentArrow;
        /** @type {Phaser.GameObjects.Text} */
        this.currentArrowText;
        /** @type {Phaser.GameObjects.Image[]} */
        this.placers;
        /** @type {MancalaPlayer[]} */
        this.items;


        // window
        const window = scene.add.image(0, 0, "mancala", "container");
        this.add(window);

        // lower_wait
        const lower_wait = scene.add.image(0, 116, "mancala", "lower_wait");
        this.add(lower_wait);

        // upper_wait
        const upper_wait = scene.add.image(0, -80, "mancala", "upper_wait");
        this.add(upper_wait);

        // board
        const board = scene.add.image(0, 16, "mancala", "board");
        this.add(board);

        // player2
        const player2 = new MancalaPlayer(scene, -220, -125);
        this.add(player2);

        // player1
        const player1 = new MancalaPlayer(scene, -217, 163);
        this.add(player1);

        // x_button
        const x_button = scene.add.image(247, -151, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(247, -153, "main", "blue-x");
        this.add(blue_x);

        // counterContainer
        const counterContainer = scene.add.container(0, 0);
        this.add(counterContainer);

        // end_hitbox0004
        const end_hitbox0004 = scene.add.image(-199, 11, "mancala", "end-hitbox0004");
        end_hitbox0004.alpha = 0.5;
        end_hitbox0004.alphaTopLeft = 0.5;
        end_hitbox0004.alphaTopRight = 0.5;
        end_hitbox0004.alphaBottomLeft = 0.5;
        end_hitbox0004.alphaBottomRight = 0.5;
        this.add(end_hitbox0004);

        // cup_hitbox0004
        const cup_hitbox0004 = scene.add.image(-142, -20, "mancala", "cup_hitbox0004");
        cup_hitbox0004.alpha = 0.5;
        cup_hitbox0004.alphaTopLeft = 0.5;
        cup_hitbox0004.alphaTopRight = 0.5;
        cup_hitbox0004.alphaBottomLeft = 0.5;
        cup_hitbox0004.alphaBottomRight = 0.5;
        this.add(cup_hitbox0004);

        // cup_hitbox
        const cup_hitbox = scene.add.image(-85, -20, "mancala", "cup_hitbox0004");
        cup_hitbox.alpha = 0.5;
        cup_hitbox.alphaTopLeft = 0.5;
        cup_hitbox.alphaTopRight = 0.5;
        cup_hitbox.alphaBottomLeft = 0.5;
        cup_hitbox.alphaBottomRight = 0.5;
        this.add(cup_hitbox);

        // cup_hitbox_1
        const cup_hitbox_1 = scene.add.image(29, -20, "mancala", "cup_hitbox0004");
        cup_hitbox_1.alpha = 0.5;
        cup_hitbox_1.alphaTopLeft = 0.5;
        cup_hitbox_1.alphaTopRight = 0.5;
        cup_hitbox_1.alphaBottomLeft = 0.5;
        cup_hitbox_1.alphaBottomRight = 0.5;
        this.add(cup_hitbox_1);

        // cup_hitbox_2
        const cup_hitbox_2 = scene.add.image(-28, -20, "mancala", "cup_hitbox0004");
        cup_hitbox_2.alpha = 0.5;
        cup_hitbox_2.alphaTopLeft = 0.5;
        cup_hitbox_2.alphaTopRight = 0.5;
        cup_hitbox_2.alphaBottomLeft = 0.5;
        cup_hitbox_2.alphaBottomRight = 0.5;
        this.add(cup_hitbox_2);

        // cup_hitbox_3
        const cup_hitbox_3 = scene.add.image(143, -20, "mancala", "cup_hitbox0004");
        cup_hitbox_3.alpha = 0.5;
        cup_hitbox_3.alphaTopLeft = 0.5;
        cup_hitbox_3.alphaTopRight = 0.5;
        cup_hitbox_3.alphaBottomLeft = 0.5;
        cup_hitbox_3.alphaBottomRight = 0.5;
        this.add(cup_hitbox_3);

        // cup_hitbox_4
        const cup_hitbox_4 = scene.add.image(86, -20, "mancala", "cup_hitbox0004");
        cup_hitbox_4.alpha = 0.5;
        cup_hitbox_4.alphaTopLeft = 0.5;
        cup_hitbox_4.alphaTopRight = 0.5;
        cup_hitbox_4.alphaBottomLeft = 0.5;
        cup_hitbox_4.alphaBottomRight = 0.5;
        this.add(cup_hitbox_4);

        // cup_hitbox_5
        const cup_hitbox_5 = scene.add.image(-142, 39, "mancala", "cup_hitbox0004");
        cup_hitbox_5.alpha = 0.5;
        cup_hitbox_5.alphaTopLeft = 0.5;
        cup_hitbox_5.alphaTopRight = 0.5;
        cup_hitbox_5.alphaBottomLeft = 0.5;
        cup_hitbox_5.alphaBottomRight = 0.5;
        this.add(cup_hitbox_5);

        // cup_hitbox_6
        const cup_hitbox_6 = scene.add.image(86, 39, "mancala", "cup_hitbox0004");
        cup_hitbox_6.alpha = 0.5;
        cup_hitbox_6.alphaTopLeft = 0.5;
        cup_hitbox_6.alphaTopRight = 0.5;
        cup_hitbox_6.alphaBottomLeft = 0.5;
        cup_hitbox_6.alphaBottomRight = 0.5;
        this.add(cup_hitbox_6);

        // cup_hitbox_7
        const cup_hitbox_7 = scene.add.image(143, 39, "mancala", "cup_hitbox0004");
        cup_hitbox_7.alpha = 0.5;
        cup_hitbox_7.alphaTopLeft = 0.5;
        cup_hitbox_7.alphaTopRight = 0.5;
        cup_hitbox_7.alphaBottomLeft = 0.5;
        cup_hitbox_7.alphaBottomRight = 0.5;
        this.add(cup_hitbox_7);

        // cup_hitbox_8
        const cup_hitbox_8 = scene.add.image(-28, 39, "mancala", "cup_hitbox0004");
        cup_hitbox_8.alpha = 0.5;
        cup_hitbox_8.alphaTopLeft = 0.5;
        cup_hitbox_8.alphaTopRight = 0.5;
        cup_hitbox_8.alphaBottomLeft = 0.5;
        cup_hitbox_8.alphaBottomRight = 0.5;
        this.add(cup_hitbox_8);

        // cup_hitbox_9
        const cup_hitbox_9 = scene.add.image(29, 39, "mancala", "cup_hitbox0004");
        cup_hitbox_9.alpha = 0.5;
        cup_hitbox_9.alphaTopLeft = 0.5;
        cup_hitbox_9.alphaTopRight = 0.5;
        cup_hitbox_9.alphaBottomLeft = 0.5;
        cup_hitbox_9.alphaBottomRight = 0.5;
        this.add(cup_hitbox_9);

        // cup_hitbox_10
        const cup_hitbox_10 = scene.add.image(-85, 39, "mancala", "cup_hitbox0004");
        cup_hitbox_10.alpha = 0.5;
        cup_hitbox_10.alphaTopLeft = 0.5;
        cup_hitbox_10.alphaTopRight = 0.5;
        cup_hitbox_10.alphaBottomLeft = 0.5;
        cup_hitbox_10.alphaBottomRight = 0.5;
        this.add(cup_hitbox_10);

        // end_hitbox
        const end_hitbox = scene.add.image(200, 11, "mancala", "end-hitbox0004");
        end_hitbox.alpha = 0.5;
        end_hitbox.alphaTopLeft = 0.5;
        end_hitbox.alphaTopRight = 0.5;
        end_hitbox.alphaBottomLeft = 0.5;
        end_hitbox.alphaBottomRight = 0.5;
        this.add(end_hitbox);

        // currentArrow
        const currentArrow = scene.add.image(-141, -91, "mancala", "current_arrow0001");
        currentArrow.visible = false;
        this.add(currentArrow);

        // currentArrowText
        const currentArrowText = scene.add.text(-143, -84, "", {});
        currentArrowText.setOrigin(0.5, 0.5);
        currentArrowText.visible = false;
        currentArrowText.text = "4";
        currentArrowText.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000000ff", "shadow.blur":5});
        this.add(currentArrowText);

        // lists
        const placers = [end_hitbox0004, cup_hitbox0004, cup_hitbox, cup_hitbox_2, cup_hitbox_1, cup_hitbox_4, cup_hitbox_3, end_hitbox, cup_hitbox_5, cup_hitbox_10, cup_hitbox_8, cup_hitbox_9, cup_hitbox_6, cup_hitbox_7];
        const items = [player1, player2];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.onClose();

        // end_hitbox0004 (components)
        const end_hitbox0004SimpleButton = new SimpleButton(end_hitbox0004);
        end_hitbox0004SimpleButton.hoverCallback = () => this.onHitboxOver(7);
        end_hitbox0004SimpleButton.hoverOutCallback = () => this.onHitboxOut(7);
        end_hitbox0004SimpleButton.callback = () => null;

        // cup_hitbox0004 (components)
        const cup_hitbox0004SimpleButton = new SimpleButton(cup_hitbox0004);
        cup_hitbox0004SimpleButton.hoverCallback = () => this.onHitboxOver(6);
        cup_hitbox0004SimpleButton.hoverOutCallback = () => this.onHitboxOut(6);
        cup_hitbox0004SimpleButton.callback = () => this.moveStones(1, 6);

        // cup_hitbox (components)
        const cup_hitboxSimpleButton = new SimpleButton(cup_hitbox);
        cup_hitboxSimpleButton.hoverCallback = () => this.onHitboxOver(5);
        cup_hitboxSimpleButton.hoverOutCallback = () => this.onHitboxOut(5);
        cup_hitboxSimpleButton.callback = () => this.moveStones(1, 5);

        // cup_hitbox_1 (components)
        const cup_hitbox_1SimpleButton = new SimpleButton(cup_hitbox_1);
        cup_hitbox_1SimpleButton.hoverCallback = () => this.onHitboxOver(3);
        cup_hitbox_1SimpleButton.hoverOutCallback = () => this.onHitboxOut(3);
        cup_hitbox_1SimpleButton.callback = () => this.moveStones(1, 3);

        // cup_hitbox_2 (components)
        const cup_hitbox_2SimpleButton = new SimpleButton(cup_hitbox_2);
        cup_hitbox_2SimpleButton.hoverCallback = () => this.onHitboxOver(4);
        cup_hitbox_2SimpleButton.hoverOutCallback = () => this.onHitboxOut(4);
        cup_hitbox_2SimpleButton.callback = () => this.moveStones(1, 4);

        // cup_hitbox_3 (components)
        const cup_hitbox_3SimpleButton = new SimpleButton(cup_hitbox_3);
        cup_hitbox_3SimpleButton.hoverCallback = () => this.onHitboxOver(1);
        cup_hitbox_3SimpleButton.hoverOutCallback = () => this.onHitboxOut(1);
        cup_hitbox_3SimpleButton.callback = () => this.moveStones(1, 1);

        // cup_hitbox_4 (components)
        const cup_hitbox_4SimpleButton = new SimpleButton(cup_hitbox_4);
        cup_hitbox_4SimpleButton.hoverCallback = () => this.onHitboxOver(2);
        cup_hitbox_4SimpleButton.hoverOutCallback = () => this.onHitboxOut(2);
        cup_hitbox_4SimpleButton.callback = () => this.moveStones(1, 2);

        // cup_hitbox_5 (components)
        const cup_hitbox_5SimpleButton = new SimpleButton(cup_hitbox_5);
        cup_hitbox_5SimpleButton.hoverCallback = () => this.onHitboxOver(8);
        cup_hitbox_5SimpleButton.hoverOutCallback = () => this.onHitboxOut(8);
        cup_hitbox_5SimpleButton.callback = () => this.moveStones(0, 8);

        // cup_hitbox_6 (components)
        const cup_hitbox_6SimpleButton = new SimpleButton(cup_hitbox_6);
        cup_hitbox_6SimpleButton.hoverCallback = () => this.onHitboxOver(12);
        cup_hitbox_6SimpleButton.hoverOutCallback = () => this.onHitboxOut(12);
        cup_hitbox_6SimpleButton.callback = () => this.moveStones(0, 12);

        // cup_hitbox_7 (components)
        const cup_hitbox_7SimpleButton = new SimpleButton(cup_hitbox_7);
        cup_hitbox_7SimpleButton.hoverCallback = () => this.onHitboxOver(13);
        cup_hitbox_7SimpleButton.hoverOutCallback = () => this.onHitboxOut(13);
        cup_hitbox_7SimpleButton.callback = () => this.moveStones(0, 13);

        // cup_hitbox_8 (components)
        const cup_hitbox_8SimpleButton = new SimpleButton(cup_hitbox_8);
        cup_hitbox_8SimpleButton.hoverCallback = () => this.onHitboxOver(10);
        cup_hitbox_8SimpleButton.hoverOutCallback = () => this.onHitboxOut(10);
        cup_hitbox_8SimpleButton.callback = () => this.moveStones(0, 10);

        // cup_hitbox_9 (components)
        const cup_hitbox_9SimpleButton = new SimpleButton(cup_hitbox_9);
        cup_hitbox_9SimpleButton.hoverCallback = () => this.onHitboxOver(11);
        cup_hitbox_9SimpleButton.hoverOutCallback = () => this.onHitboxOut(11);
        cup_hitbox_9SimpleButton.callback = () => this.moveStones(0, 11);

        // cup_hitbox_10 (components)
        const cup_hitbox_10SimpleButton = new SimpleButton(cup_hitbox_10);
        cup_hitbox_10SimpleButton.hoverCallback = () => this.onHitboxOver(9);
        cup_hitbox_10SimpleButton.hoverOutCallback = () => this.onHitboxOut(9);
        cup_hitbox_10SimpleButton.callback = () => this.moveStones(0, 9);

        // end_hitbox (components)
        const end_hitboxSimpleButton = new SimpleButton(end_hitbox);
        end_hitboxSimpleButton.hoverCallback = () => this.onHitboxOver(0);
        end_hitboxSimpleButton.hoverOutCallback = () => this.onHitboxOut(0);
        end_hitboxSimpleButton.callback = () => null;

        this.lower_wait = lower_wait;
        this.upper_wait = upper_wait;
        this.board = board;
        this.counterContainer = counterContainer;
        this.currentArrow = currentArrow;
        this.currentArrowText = currentArrowText;
        this.placers = placers;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.activeWaddleId
        this.activeSeat

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get activeWaddle() {
        return this.shell.room.waddles[this.activeWaddleId]
    }

    getSeat(waddle, seat) {
        return this.shell.room[`seats${waddle}`][seat]
    }

    onClose() {
        this.airtower.sendXt('a#lt')

        this.leaveSeat()

        this.activeWaddleId = null
        this.visible = false
    }

    showWaddle(waddle, seat) {
        this.activeWaddleId = waddle

        this.seat = seat

        this.enterSeat(waddle, seat)

        this.items.map((item) => item.hideItem())

        for (let [index, username] of this.activeWaddle.entries()) {
            this.items[index].setItem(username, this.seat)
        }

        this.visible = true
    }

    updateWaddle(waddle, seat, username) {
        let sprite = this.getSeat(waddle, seat)
        sprite.visible = username != null

        this.shell.room.waddles[waddle][seat] = username

        if (waddle == this.activeWaddleId) {
            this.items[seat].setItem(username)
        }
    }

    init(users, turn) {
        this.currentPlayer = turn;
        for (var x in users) {
            let username = this.shell.room.penguins[users[x]].username
            this.items[x].setItem(username, x)
        }
        this.map = []
        for (let i = 0; i < 14; i++) {
            let mapObject = {}
            let x = -199 + (i < 7 ? i * 57 : (i - 7) * 57)
            let y = i < 7 ? 20 : -40

            if (i == 0 || i == 7) {
                mapObject.isMancala = true
                mapObject.stones = 0
            } else {
                mapObject.isMancala = false
                mapObject.stones = 4
            }

            if (i >= 1 && i <= 7) {
                mapObject.player = 0
            } else {
                mapObject.player = 1
            }

            for (let j = 0; j < mapObject.stones; j++) {
                let color
                let rand = Math.floor(Math.random() * 5)
                switch (rand) {
                    case 0:
                        color = 'red'
                        break
                    case 1:
                        color = 'blue'
                        break
                    case 2:
                        color = 'darkblue'
                        break
                    case 3:
                        color = 'green'
                        break
                    case 4:
                        color = 'purple'
                        break
                }
                let yoffset = Math.floor(Math.random() * 20) - 10
                let xoffset = Math.floor(Math.random() * 20) - 10
                let stone = this.scene.add.image(x + xoffset, y + yoffset, 'mancala', `${color}_stone0001`)
                this.counterContainer.add(stone)
                mapObject[`stone${j}`] = stone
            }

            this.map.push(mapObject)
        }
    }

    onHitboxOver(hitbox) {
        this.currentArrow.visible = true
        this.currentArrow.x = this.placers[hitbox].x
        this.currentArrow.y = this.placers[hitbox].y - 60

        this.currentArrowText.visible = true
        this.currentArrowText.text = this.map[hitbox].stones
        this.currentArrowText.x = this.placers[hitbox].x
        this.currentArrowText.y = this.placers[hitbox].y - 60
    }

    onHitboxOut(hitbox) {
        this.currentArrow.visible = false
        this.currentArrowText.visible = false
    }

    moveStones(currentPlayer, startingHole) {
        let numStones = this.map[startingHole].stones

        this.map[startingHole].stones = 0

        let currentIndex = startingHole

        if (currentPlayer !== this.currentPlayer) {
            return;
        }

        for (let i = 0; i < numStones; i++) {
            // Move to the next hole
            currentIndex = (currentIndex + 1) % 14

            // Skip the opponent's mancala
            if (currentIndex === 7 && currentPlayer === 0) {
                currentIndex++
            } else if (currentIndex === 0 && currentPlayer === 1) {
                currentIndex++
            }

            this.map[currentIndex].stones++

            // If the last stone was placed in the player's own mancala, go again
            if (i === numStones - 1 && currentIndex === currentPlayer) {
                return true
            }

            // If the last stone was placed in an empty hole on the player's own side, capture the stones
            if (i === numStones - 1 && this.map[currentIndex].stones === 1 && this.map[currentIndex].player === currentPlayer) {
                let oppositeHole = 14 - currentIndex
                this.map[currentPlayer].stones += this.map[oppositeHole].stones + 1
                this.map[oppositeHole].stones = 0
            }
        }

        // Return false if the player's turn is over
        return false, this.changeTurn()
    }

    changeTurn() {
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
