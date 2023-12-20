import RoomScene from '../RoomScene'

/* START OF COMPILED CODE */

export default class Party1Holiday13 extends RoomScene {
    constructor() {
        super('Party1Holiday13')

        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.sort
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.displays

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forts: () => this.triggerRoom(801, 800, 550),
            train: () => this.triggerRoom(850, 760, 480)
        }
        this.music = 315
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('party1holiday13-pack', 'client/media/rooms/party1/holiday13/party1holiday13-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'party1holiday13', 'bg')

        // wallpresenets
        const wallpresenets = this.add.image(1435.7581577304609, 320.34285284390216, 'party1holiday13', 'wallpresenets')
        wallpresenets.setOrigin(0.9445777353489874, 0.3336904717123981)

        // divider
        const divider = this.add.image(455.53753333023195, 795.6013374015888, 'party1holiday13', 'divider')
        divider.setOrigin(0.2996957456119947, 0.828751393126655)

        // divider2
        const divider2 = this.add.image(1066.3189451250714, 851.2956910606927, 'party1holiday13', 'divider2')
        divider2.setOrigin(0.7015256217928102, 0.8867663448548881)

        // platform
        const platform = this.add.image(761.8564784553035, 413.16677560907533, 'party1holiday13', 'platform')
        platform.setOrigin(0.5012213674048049, 0.4303820579261201)

        // present1
        const present1 = this.add.image(420.2644426794662, 454.0093016257515, 'party1holiday13', 'present1')
        present1.setOrigin(0.27648976492070143, 0.4729263558601578)

        // present2
        const present2 = this.add.image(468.53288251735614, 513.4166121954623, 'party1holiday13', 'present2')
        present2.setOrigin(0.30824531744562905, 0.5348089710369399)

        // present3
        const present3 = this.add.image(425.83387804537654, 539.4073105697108, 'party1holiday13', 'present3')
        present3.setOrigin(0.28015386713511614, 0.5618826151767821)

        // present4
        const present4 = this.add.image(1506.3043390319922, 775.1800743932507, 'party1holiday13', 'present4')
        present4.setOrigin(0.9909896967315738, 0.8074792441596361)

        // rear
        const rear = this.add.image(1006.9116345553607, 699.0644577258087, 'party1holiday13', 'rear')
        rear.setOrigin(0.6624418648390531, 0.728192143464384)

        // sidepresents
        const sidepresents = this.add.image(19.265096333917995, 593.2451857735113, 'party1holiday13', 'sidepresents')
        sidepresents.setOrigin(0.012674405482840786, 0.6179637351807409)

        // suitcase
        const suitcase = this.add.image(1107.1614711417476, 500.42126300833803, 'party1holiday13', 'suitcase')
        suitcase.setOrigin(0.7283957046985181, 0.5212721489670188)

        // thing
        const thing = this.add.image(492.66710243630126, 429.8750817068065, 'party1holiday13', 'thing')
        thing.setOrigin(0.32412309370809295, 0.4477865434445901)

        // thing2
        const thing2 = this.add.image(1045.8976821167334, 426.1621247961996, 'party1holiday13', 'thing2')
        thing2.setOrigin(0.6880905803399562, 0.44391887999604124)

        // thingy
        const thingy = this.add.image(1217.9554534126971, 498.71474840818246, 'party1holiday13', 'thingy')
        thingy.setOrigin(0.8012865023790244, 0.519494546343424)

        // ticketoffice
        const ticketoffice = this.add.image(329.29699836959645, 585.8192719522974, 'party1holiday13', 'ticketoffice')
        ticketoffice.setOrigin(0.21664276208526081, 0.6102284082836431)

        // ticketoffice2
        const ticketoffice2 = this.add.image(178.92224349001594, 626.6617979689736, 'party1holiday13', 'ticketoffice2')
        ticketoffice2.setOrigin(0.11771200229606311, 0.6527727062176808)

        // desk
        const desk = this.add.image(1242.6843983789006, 615.5229272371528, 'party1holiday13', 'desk')
        desk.setOrigin(0.8175555252492767, 0.6411697158720341)

        // conveyor
        const conveyor = this.add.image(1415.3368947221227, 557.9720951227455, 'party1holiday13', 'conveyor')
        conveyor.setOrigin(0.9311426938961334, 0.5812209324195265)

        // barrier
        const barrier = this.add.image(722.8704308939307, 760.3282467508229, 'party1holiday13', 'barrier')
        barrier.setOrigin(0.47557265190390174, 0.7920085903654406)

        // barrieroffice
        const barrieroffice = this.add.image(1019.906983742485, 832.7309065076581, 'party1holiday13', 'barrieroffice')
        barrieroffice.setOrigin(0.6709914366726875, 0.8674280276121439)

        // barrierr
        const barrierr = this.add.image(938.2219317091325, 758.4717682955195, 'party1holiday13', 'barrierr')
        barrierr.setOrigin(0.6172512708612714, 0.7900747586411662)

        // cane
        const cane = this.add.image(990.2033284576295, 472.57408617878616, 'party1holiday13', 'cane')
        cane.setOrigin(0.6514495581958089, 0.49226467310290223)

        // cane2
        const cane2 = this.add.image(533.5096284529775, 463.29169390226883, 'party1holiday13', 'cane2')
        cane2.setOrigin(0.350993176613801, 0.48259551448153004)

        // cane4
        const cane4 = this.add.image(1493.308989844868, 706.4903715470225, 'party1holiday13', 'cane4')
        cane4.setOrigin(0.9824401248979394, 0.7359274703614818)

        // starry
        const starry = this.add.image(58.25114389529074, 656.3654532538291, 'party1holiday13', 'starry')
        starry.setOrigin(0.03832312098374391, 0.6837140138060719)

        // cane3
        const cane3 = this.add.image(61.964100805897715, 751.0458544743057, 'party1holiday13', 'cane3')
        cane3.setOrigin(0.04076585579335376, 0.7823394317440684)

        // container_1
        const container_1 = this.add.container(247, 460)

        // cointotal
        const cointotal = this.add.image(513, 19, 'party1holiday13', 'cointotal')
        container_1.add(cointotal)

        // digit0001
        const digit0001 = this.add.sprite(107, -78, 'party1holiday13', 'digit0001')
        container_1.add(digit0001)

        // digit
        const digit = this.add.sprite(80, -73, 'party1holiday13', 'digit0001')
        container_1.add(digit)

        // digit_1
        const digit_1 = this.add.sprite(53, -69, 'party1holiday13', 'digit0001')
        container_1.add(digit_1)

        // digit_2
        const digit_2 = this.add.sprite(26, -65, 'party1holiday13', 'digit0001')
        container_1.add(digit_2)

        // digit_3
        const digit_3 = this.add.sprite(-1, -60, 'party1holiday13', 'digit0001')
        container_1.add(digit_3)

        // digit_4
        const digit_4 = this.add.sprite(-28, -55, 'party1holiday13', 'digit0001')
        container_1.add(digit_4)

        // digit_5
        const digit_5 = this.add.sprite(-55, -51, 'party1holiday13', 'digit0001')
        container_1.add(digit_5)

        // digit_6
        const digit_6 = this.add.sprite(-82, -46, 'party1holiday13', 'digit0001')
        container_1.add(digit_6)

        // digit_7
        const digit_7 = this.add.sprite(-109, -41, 'party1holiday13', 'digit0001')
        container_1.add(digit_7)

        // digit_8
        const digit_8 = this.add.sprite(-136, -36, 'party1holiday13', 'digit0001')
        container_1.add(digit_8)

        // fg
        const fg = this.add.image(760, 963.5026701585379, 'party1holiday13', 'fg')
        fg.setOrigin(0.5, 1.0036486147484769)

        // lists
        const sort = [container_1, starry, cane4, cane3, cane2, cane, barrierr, barrieroffice, barrier, conveyor, desk, ticketoffice2, ticketoffice, thingy, thing2, thing, suitcase, sidepresents, rear, present4, present3, present2, present1, platform, divider2, divider, wallpresenets, fg]
        const displays = [digit0001, digit_8, digit_7, digit_6, digit_5, digit_4, digit_3, digit_2, digit_1, digit]

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
        sprite.play('party1holiday13-digit1')
    }

    play2(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
        })
    }

    play3(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
            })
        })
    }

    play4(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                })
            })
        })
    }

    play5(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('party1holiday13-digit5')
                    })
                })
            })
        })
    }

    play6(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('party1holiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('party1holiday13-digit6')
                        })
                    })
                })
            })
        })
    }

    play7(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('party1holiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('party1holiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('party1holiday13-digit7')
                            })
                        })
                    })
                })
            })
        })
    }

    play8(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('party1holiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('party1holiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('party1holiday13-digit7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('party1holiday13-digit8')
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    play9(sprite) {
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('party1holiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('party1holiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('party1holiday13-digit7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('party1holiday13-digit8')
                                    sprite.once('animationcomplete', () => {
                                        sprite.play('party1holiday13-digit9')
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
        sprite.play('party1holiday13-digit1')
        sprite.once('animationcomplete', () => {
            sprite.play('party1holiday13-digit2')
            sprite.once('animationcomplete', () => {
                sprite.play('party1holiday13-digit3')
                sprite.once('animationcomplete', () => {
                    sprite.play('party1holiday13-digit4')
                    sprite.once('animationcomplete', () => {
                        sprite.play('party1holiday13-digit5')
                        sprite.once('animationcomplete', () => {
                            sprite.play('party1holiday13-digit6')
                            sprite.once('animationcomplete', () => {
                                sprite.play('party1holiday13-digit7')
                                sprite.once('animationcomplete', () => {
                                    sprite.play('party1holiday13-digit8')
                                    sprite.once('animationcomplete', () => {
                                        sprite.play('party1holiday13-digit9')
                                        sprite.once('animationcomplete', () => {
                                            sprite.play('party1holiday13-digit0')
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
