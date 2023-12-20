import RoomScene from '@scenes/rooms/RoomScene'
import {SimpleButton, MoveTo, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class FortsHoliday13 extends RoomScene {
    constructor() {
        super('FortsHoliday13')

        /** @type {Phaser.GameObjects.Sprite} */
        this.cfcanim
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.displays

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            town: () => this.triggerRoom(100, 1240, 660),
            rink: () => this.triggerRoom(802, 780, 340),
            plaza: () => this.triggerRoom(300, 340, 660),
            party1: () => this.triggerRoom(851, 760, 800),
            cfc: () => this.interface.loadExternal('Cfc')
        }
        this.music = 1073
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('fortsholiday13-pack', 'client/media/rooms/forts/holiday13/fortsholiday13-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'fortsholiday13', 'bg')

        // cane
        const cane = this.add.image(1467.392782808992, 490.58443066547125, 'fortsholiday13', 'cane')
        cane.setOrigin(0.9653899886901264, 0.5110254486098659)

        // cane2
        const cane2 = this.add.image(1393.3018251957822, 594.6646748025745, 'fortsholiday13', 'cane2')
        cane2.setOrigin(0.9166459000991406, 0.6194423599402133)

        // door
        const door = this.add.image(808.0633180592614, 494.9612648258651, 'fortsholiday13', 'door')
        door.setOrigin(0.48553358649882467, 0.8142472152494891)

        // cfcfront
        const cfcfront = this.add.image(807.6299379946204, 427.077846672644, 'fortsholiday13', 'cfcfront')
        cfcfront.setOrigin(0.5313354855227765, 0.44487275695067086)

        // cfcanim
        const cfcanim = this.add.sprite(599.2180734751174, 564.1787885393422, 'fortsholiday13', 'cfcanim0001')
        cfcanim.setOrigin(0.4727918955044419, 0.5958316223499649)

        // clockback
        const clockback = this.add.image(1246.9686667498609, 441.1461170146388, 'fortsholiday13', 'clockback')
        clockback.setOrigin(0.8203741228617506, 0.45952720522358204)

        // clockfront
        const clockfront = this.add.image(1317.4466817148166, 575.2598759892408, 'fortsholiday13', 'clockfront')
        clockfront.setOrigin(0.866741237970274, 0.5992290374887924)

        // clocktop
        const clocktop = this.add.image(1307.8396974188815, 601.7421547486329, 'fortsholiday13', 'clocktop')
        clocktop.setOrigin(0.8604208882194694, 0.6268147569661096)

        // fg
        const fg = this.add.image(760, 968.0945366163713, 'fortsholiday13', 'fg')
        fg.setOrigin(0.5, 1.0084318089753868)

        // light1
        const light1 = this.add.image(456.93971271418235, 630.2350142100635, 'fortsholiday13', 'light1')
        light1.setOrigin(0.30061823204880417, 0.6564948064688161)

        // light2
        const light2 = this.add.image(620.1260212526995, 669.0888971954247, 'fortsholiday13', 'light2')
        light2.setOrigin(0.40797764556098653, 0.696967601245234)

        // light3
        const light3 = this.add.image(758.7048705671547, 608.2178138516921, 'fortsholiday13', 'light3')
        light3.setOrigin(0.49914794116260175, 0.6335602227621793)

        // light4
        const light4 = this.add.image(949.0888971954247, 560.2980248364132, 'fortsholiday13', 'light4')
        light4.setOrigin(0.6244005902601478, 0.5836437758712638)

        // light5
        const light5 = this.add.image(1087.6677465098796, 529.2149184481242, 'fortsholiday13', 'light5')
        light5.setOrigin(0.7155708858617629, 0.5512655400501294)

        // sign
        const sign = this.add.image(453.05432441564625, 538.2808244780418, 'fortsholiday13', 'sign')
        sign.setOrigin(0.29806205553660936, 0.5607091921646269)

        // sign2
        const sign2 = this.add.image(1331.15207988481, 601.7421666874652, 'fortsholiday13', 'sign2')
        sign2.setOrigin(0.8757579472926382, 0.6268147569661096)

        // thirdleg
        const thirdleg = this.add.image(592.8388476001916, 606.316345931077, 'fortsholiday13', 'thirdleg')
        thirdleg.setOrigin(0.390025557631705, 0.6315795270115385)

        // sign3
        const sign3 = this.add.image(58.03984739780708, 596.5616489560837, 'fortsholiday13', 'sign3')
        sign3.setOrigin(0.038184110130136235, 0.6214183843292538)

        // container_1
        const container_1 = this.add.container(290.8264729611086, 411.33709678816933)

        // cfcthingy
        const cfcthingy = this.add.image(9.402561462719518, -5.159453965903708, 'fortsholiday13', 'cfcthingy')
        cfcthingy.setOrigin(0.1975191127236132, 0.4231016899248059)
        container_1.add(cfcthingy)

        // digit0001
        const digit0001 = this.add.sprite(105.1735270388914, -75.33709678816933, 'fortsholiday13', 'digit0001')
        digit0001.angle = 3.0000000000000004
        container_1.add(digit0001)

        // digit
        const digit = this.add.sprite(81.1735270388914, -71.33709678816933, 'fortsholiday13', 'digit0001')
        digit.angle = 3.0000000000000004
        container_1.add(digit)

        // digit_1
        const digit_1 = this.add.sprite(57.17352703889139, -67.33709678816933, 'fortsholiday13', 'digit0001')
        digit_1.angle = 3.0000000000000004
        container_1.add(digit_1)

        // digit_2
        const digit_2 = this.add.sprite(33.17352703889139, -64.33709678816933, 'fortsholiday13', 'digit0001')
        digit_2.angle = 3.0000000000000004
        container_1.add(digit_2)

        // digit_3
        const digit_3 = this.add.sprite(9.173527038891393, -60.33709678816933, 'fortsholiday13', 'digit0001')
        digit_3.angle = 3.0000000000000004
        container_1.add(digit_3)

        // digit_4
        const digit_4 = this.add.sprite(-14.826472961108607, -56.33709678816933, 'fortsholiday13', 'digit0001')
        digit_4.angle = 3.0000000000000004
        container_1.add(digit_4)

        // digit_5
        const digit_5 = this.add.sprite(-38.82647296110861, -53.33709678816933, 'fortsholiday13', 'digit0001')
        digit_5.angle = 3.0000000000000004
        container_1.add(digit_5)

        // digit_6
        const digit_6 = this.add.sprite(-62.82647296110861, -49.33709678816933, 'fortsholiday13', 'digit0001')
        digit_6.angle = 3.0000000000000004
        container_1.add(digit_6)

        // digit_7
        const digit_7 = this.add.sprite(-86.8264729611086, -46.33709678816933, 'fortsholiday13', 'digit0001')
        digit_7.angle = 3.0000000000000004
        container_1.add(digit_7)

        // digit_8
        const digit_8 = this.add.sprite(-110.8264729611086, -42.33709678816933, 'fortsholiday13', 'digit0001')
        digit_8.angle = 3.0000000000000004
        container_1.add(digit_8)

        // lists
        const sort = [sign3, thirdleg, sign2, sign, light5, light4, light3, light2, light1, fg, clocktop, clockfront, clockback, cfcanim, cfcfront, cane2, cane, container_1]
        const displays = [digit0001, digit_8, digit_7, digit_6, digit_5, digit_4, digit_3, digit_2, digit_1, digit]

        // door (components)
        new MoveTo(door)
        new Button(door)

        // cfcanim (components)
        const cfcanimSimpleButton = new SimpleButton(cfcanim)
        cfcanimSimpleButton.hoverCallback = () => this.onCfcOver()
        cfcanimSimpleButton.hoverOutCallback = () => this.onCfcOut()
        const cfcanimMoveTo = new MoveTo(cfcanim)
        cfcanimMoveTo.x = 600
        cfcanimMoveTo.y = 600

        this.cfcanim = cfcanim
        this.sort = sort
        this.displays = displays

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.airtower.events.once('cfct', (data) => {
            this.showTotal(data)
        })
        this.airtower.sendXt('p#cfc')
    }

    showTotal(total) {
        total = parseInt(total)
        if (total > 9999999999) total = 9999999999

        total = total.toString().padStart(10, '0')
        for (let i = 0; i < total.length; i++) {
            this[`play${total[i]}`](this.displays[i])
        }
    }

    play1(sprite) {
        sprite.play('fortsholiday13-digit1')
    }

    play2(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
        })
    }

    play3(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
            })
        })
    }

    play4(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                })
            })
        })
    }

    play5(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('fortsholiday13-digit5')
                    })
                })
            })
        })
    }

    play6(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('fortsholiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('fortsholiday13-digit6')
                        })
                    })
                })
            })
        })
    }

    play7(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('fortsholiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('fortsholiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('fortsholiday13-digit7')
                            })
                        })
                    })
                })
            })
        })
    }

    play8(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('fortsholiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('fortsholiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('fortsholiday13-digit7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('fortsholiday13-digit8')
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    play9(sprite) {
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('fortsholiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('fortsholiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('fortsholiday13-digit7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('fortsholiday13-digit8')
                                    sprite.once('animationcomplete', () => {
                                        sprite.play('fortsholiday13-digit9')
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
        sprite.play('fortsholiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('fortsholiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('fortsholiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('fortsholiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('fortsholiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('fortsholiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('fortsholiday13-digit7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('fortsholiday13-digit8')
                                    sprite.once('animationcomplete', () => {
                                        sprite.play('fortsholiday13-digit9')
                                        sprite.once('animationcomplete', () => {
                                            sprite.play('fortsholiday13-digit0')
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

    onCfcOver() {
        this.cfcanim.play('fortsholiday13-cfcanim')
    }

    onCfcOut() {
        this.cfcanim.anims.stop()
        this.cfcanim.setFrame('cfcanim0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
