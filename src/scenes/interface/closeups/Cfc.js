import Closeup from './Closeup'
import {Button, SimpleButton, LocalisedSprite, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class Cfc extends Closeup {
    constructor() {
        super('Cfc')

        /** @type {Phaser.GameObjects.Sprite} */
        this.coinsanim
        /** @type {Phaser.GameObjects.Text} */
        this.p100c
        /** @type {Phaser.GameObjects.Text} */
        this.p100c_1
        /** @type {Phaser.GameObjects.Text} */
        this.p100c_2
        /** @type {Phaser.GameObjects.Text} */
        this.headerText
        /** @type {Phaser.GameObjects.Text} */
        this.p100c_3
        /** @type {Phaser.GameObjects.Text} */
        this.contributionsCoins
        /** @type {Phaser.GameObjects.Text} */
        this.headerText_2
        /** @type {Phaser.GameObjects.Text} */
        this.headerText_3
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.displays

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cfc-pack', 'client/media/interface/closeups/cfc/cfc-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.image(760, 480, 'cfc', 'bg')

        // coinsbg
        this.add.image(301, 406, 'cfc', 'coinsbg')

        // coinsanim
        const coinsanim = this.add.sprite(300, 439, 'cfc', 'coins0001')

        // coinsfg
        this.add.image(301, 409, 'cfc', 'coinsfg')

        // button
        const button = this.add.image(757, 792, 'cfc', 'button')

        // button_1
        const button_1 = this.add.image(1016, 792, 'cfc', 'button')

        // button_2
        const button_2 = this.add.image(1275, 792, 'cfc', 'button')

        // display_1
        const display_1 = this.add.sprite(750, 620, 'cfc', 'display0001')

        // display_2
        const display_2 = this.add.sprite(810, 620, 'cfc', 'display0001')

        // display_3
        const display_3 = this.add.sprite(870, 620, 'cfc', 'display0001')

        // display_4
        const display_4 = this.add.sprite(930, 620, 'cfc', 'display0001')

        // display_5
        const display_5 = this.add.sprite(990, 620, 'cfc', 'display0001')

        // display_6
        const display_6 = this.add.sprite(1050, 620, 'cfc', 'display0001')

        // display_7
        const display_7 = this.add.sprite(1110, 620, 'cfc', 'display0001')

        // display_8
        const display_8 = this.add.sprite(1170, 620, 'cfc', 'display0001')

        // display_9
        const display_9 = this.add.sprite(1230, 620, 'cfc', 'display0001')

        // display_10
        const display_10 = this.add.sprite(1290, 620, 'cfc', 'display0001')

        // fISH
        this.add.image(760, 480, 'cfc', 'FISH')

        // p100c
        const p100c = this.add.text(748, 794, '', {})
        p100c.setOrigin(0.5, 0.5)
        p100c.text = '100'
        p100c.setStyle({align: 'center', color: '#4b2500ff', fixedWidth: 150, fontFamily: 'cpBurbankSmall', fontSize: '34px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        p100c.setLineSpacing(5)
        p100c.setWordWrapWidth(100)

        // p100c_1
        const p100c_1 = this.add.text(1007, 794, '', {})
        p100c_1.setOrigin(0.5, 0.5)
        p100c_1.text = '1000'
        p100c_1.setStyle({align: 'center', color: '#4b2500ff', fixedWidth: 150, fontFamily: 'cpBurbankSmall', fontSize: '34px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        p100c_1.setLineSpacing(5)
        p100c_1.setWordWrapWidth(100)

        // p100c_2
        const p100c_2 = this.add.text(1268, 794, '', {})
        p100c_2.setOrigin(0.5, 0.5)
        p100c_2.text = '10000'
        p100c_2.setStyle({align: 'center', color: '#4b2500ff', fixedWidth: 150, fontFamily: 'cpBurbankSmall', fontSize: '34px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        p100c_2.setLineSpacing(5)
        p100c_2.setWordWrapWidth(100)

        // headerText
        const headerText = this.add.text(1019, 554, '', {})
        headerText.setOrigin(0.5, 0.5)
        headerText.text = 'Our Grand Total:'
        headerText.setStyle({align: 'center', color: '#3d2615ff', fixedWidth: 800, fontFamily: 'cpCatseye', fontSize: '36px', 'shadow.offsetX': -1, 'shadow.offsetY': 1, 'shadow.color': '#ffde80ff', 'shadow.fill': true})

        // p100c_3
        const p100c_3 = this.add.text(1019, 718, '', {})
        p100c_3.setOrigin(0.5, 0.5)
        p100c_3.text = 'Click the buttons below to donate:'
        p100c_3.setStyle({align: 'center', color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '34px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.color': '#ffffffff', 'shadow.fill': true})
        p100c_3.setLineSpacing(5)

        // contributionsCoins
        const contributionsCoins = this.add.text(1019, 678, '', {})
        contributionsCoins.setOrigin(0.5, 0.5)
        contributionsCoins.text = 'Your Contributions: 99999                     Your Coins: 99999'
        contributionsCoins.setStyle({align: 'center', color: '#3d2615ff', fixedWidth: 800, fontFamily: 'cpCatseye', fontSize: '24px', 'shadow.offsetX': -1, 'shadow.offsetY': 1, 'shadow.color': '#ffde80ff', 'shadow.fill': true})

        // headerText_2
        const headerText_2 = this.add.text(1019, 417, '', {})
        headerText_2.setOrigin(0.5, 0.5)
        headerText_2.text = 'Donate to Coins for Change to support real charities around the world. Donate coins here to earn rewards, or spend money in catalogs.'
        headerText_2.setStyle({align: 'center', color: '#f1f2f0ff', fixedWidth: 800, fontFamily: 'cpCatseye', fontSize: '36px', 'shadow.offsetX': 3, 'shadow.offsetY': 2, 'shadow.color': '#1b241cff', 'shadow.blur': 4, 'shadow.fill': true})
        headerText_2.setWordWrapWidth(800)

        // headerText_3
        const headerText_3 = this.add.text(1462, 32, '', {})
        headerText_3.setOrigin(0.5, 0.5)
        headerText_3.text = 'O'
        headerText_3.setStyle({align: 'center', color: '#f1f2f0ff', fixedWidth: 50, fontFamily: 'Arial', fontSize: '59px', 'shadow.offsetX': 3, 'shadow.offsetY': 2, 'shadow.color': '#000000ff', 'shadow.blur': 5, 'shadow.fill': true})

        // exit
        const exit = this.add.image(1462, 30, 'main', 'white-x')
        exit.scaleX = 0.7
        exit.scaleY = 0.7

        // lists
        const displays = [display_1, display_2, display_3, display_4, display_5, display_6, display_7, display_8, display_9, display_10]

        // block (components)
        new Interactive(block)

        // button (components)
        const buttonButton = new Button(button)
        buttonButton.callback = () => this.donateCoins(100)

        // button_1 (components)
        const button_1Button = new Button(button_1)
        button_1Button.callback = () => this.donateCoins(1000)

        // button_2 (components)
        const button_2Button = new Button(button_2)
        button_2Button.callback = () => this.donateCoins(10000)

        // exit (components)
        const exitButton = new Button(exit)
        exitButton.callback = () => this.stop()

        this.coinsanim = coinsanim
        this.p100c = p100c
        this.p100c_1 = p100c_1
        this.p100c_2 = p100c_2
        this.headerText = headerText
        this.p100c_3 = p100c_3
        this.contributionsCoins = contributionsCoins
        this.headerText_2 = headerText_2
        this.headerText_3 = headerText_3
        this.displays = displays

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.airtower.events.on('cfc', (data) => {
            this.setContributions(data)
        })
        this.airtower.events.on('cfct', (data) => {
            this.showTotal(data)
        })
        this.airtower.sendXt('p#cfc')
    }

    setContributions(contributions) {
        this.contributionsCoins.text = `Your Contributions: ${contributions}                     Your Coins: ${this.shell.client.coins}`
        if (parseInt(contributions) > 0) {
            this.shell.client.stampEarned(191)
            if (parseInt(contributions) >= 5000) {
                this.shell.client.stampEarned(294)
                if (parseInt(contributions) >= 10000) {
                    this.shell.client.stampEarned(296)
                }
            }
        }
    }

    showTotal(total) {
        total = parseInt(total)
        if (total > 9999999999) total = 9999999999
        let percent = total / 9999999
        percent = percent * 100
        percent = Math.round(percent) + 2
        if (percent > 100) percent = 100
        console.log(`Got ${total} coins, ${percent}% of the way to 9999999999`)
        this.coinsanim.play('cfc-coins')
        this.coinsanim.on('animationupdate', () => {
            if (this.coinsanim.frame.name === `coins${percent.toString().padStart(4, '0')}`) {
                this.coinsanim.stop()
                this.coinsanim.off('animationupdate')
            }
        })

        total = total.toString().padStart(10, '0')
        for (let i = 0; i < total.length; i++) {
            this[`play${total[i]}`](this.displays[i])
        }
    }

    play1(sprite) {
        sprite.play('cfc-display1')
    }

    play2(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
        })
    }

    play3(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
            })
        })
    }

    play4(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                })
            })
        })
    }

    play5(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('cfc-display5')
                    })
                })
            })
        })
    }

    play6(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('cfc-display5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('cfc-display6')
                        })
                    })
                })
            })
        })
    }

    play7(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('cfc-display5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('cfc-display6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('cfc-display7')
                            })
                        })
                    })
                })
            })
        })
    }

    play8(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('cfc-display5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('cfc-display6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('cfc-display7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('cfc-display8')
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    play9(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('cfc-display5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('cfc-display6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('cfc-display7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('cfc-display8')
                                    sprite.once('animationcomplete', () => {
                                        sprite.play('cfc-display9')
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    play0(sprite) {
        sprite.play('cfc-display1')
        sprite.once('animationcomplete', () => {
            sprite.play('cfc-display2')
            sprite.once('animationcomplete', () => {
                sprite.play('cfc-display3')
                sprite.once('animationcomplete', () => {
                    sprite.play('cfc-display4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('cfc-display5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('cfc-display6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('cfc-display7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('cfc-display8')
                                    sprite.once('animationcomplete', () => {
                                        sprite.play('cfc-display9')
                                        sprite.once('animationcomplete', () => {
                                            sprite.play('cfc-display0')
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    donateCoins(coins) {
        this.airtower.sendXt('p#donate', coins)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
