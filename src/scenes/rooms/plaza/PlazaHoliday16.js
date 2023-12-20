import RoomScene from '@scenes/rooms/RoomScene'
import {Button, MoveTo, SimpleButton} from '@components/components'
import Coin from '@scenes/interface/game/mining/Coin'
/* START OF COMPILED CODE */

export default class PlazaHoliday16 extends RoomScene {
    constructor() {
        super('PlazaHoliday16')

        /** @type {Phaser.GameObjects.Sprite} */
        this.bell1
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell2
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell3
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell4
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell5
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell6
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell7
        /** @type {Phaser.GameObjects.Sprite} */
        this.bell8
        /** @type {Phaser.GameObjects.Sprite} */
        this.cfcanim
        /** @type {Phaser.GameObjects.Sprite} */
        this.cover
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            pizza: () => this.triggerRoom(330, 760, 330),
            mall: () => this.triggerRoom(340, 250, 700),
            pet: () => this.triggerRoom(310, 828, 520),
            cave: () => {
                this.shell.client.stampEarned(10)
                this.triggerRoom(806, 1242, 685)
            },
            forts: () => this.triggerRoom(801, 1320, 460),
            forest: () => this.triggerRoom(809, 150, 320),
            hotel: () => this.triggerRoom(430, 800, 350),
            park: () => this.interface.prompt.showError(this.shell.crumbs.getError(54)),
            cfc: () => this.interface.loadExternal('Cfc')
        }
        this.music = 1089
        this.loadSfx = ['plaza-HoleOpen', 'plaza-HoleClose', 'plaza-StageOpen', 'plaza-StageClose', 'plaza-PizzaOpen', 'plaza-PizzaClose', 'plaza-HotelOpen', 'plaza-HotelClose', 'plaza-PetOpen', 'plaza-PetClose', 'plaza-bell1', 'plaza-bell2', 'plaza-bell3', 'plaza-bell4', 'plaza-bell5', 'plaza-bell6', 'plaza-bell7', 'plaza-bell8']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('plazaholiday16-pack', 'client/media/rooms/plaza/holiday16/plazaholiday16-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'plazaholiday16', 'bg')

        // bell1
        const bell1 = this.add.sprite(174, 187, 'plazaholiday16', 'bell10001')

        // bell2
        const bell2 = this.add.sprite(394, 113, 'plazaholiday16', 'bell20001')

        // bell3
        const bell3 = this.add.sprite(399, 241, 'plazaholiday16', 'bell30001')

        // bell4
        const bell4 = this.add.sprite(557, 227, 'plazaholiday16', 'bell40001')

        // bell5
        const bell5 = this.add.sprite(770, 122, 'plazaholiday16', 'bell50001')

        // bell6
        const bell6 = this.add.sprite(982, 100, 'plazaholiday16', 'bell60001')

        // bell7
        const bell7 = this.add.sprite(1081, 266, 'plazaholiday16', 'bell70001')

        // bell8
        const bell8 = this.add.sprite(1318, 316, 'plazaholiday16', 'bell80001')

        // buildings
        this.add.image(760, 480, 'plazaholiday16', 'buildings')

        // bauble
        const bauble = this.add.image(670.9840791930233, 558.0841410587515, 'plazaholiday16', 'bauble')
        bauble.setOrigin(0.44143689420593635, 0.5813376469361995)

        // cfcanim
        const cfcanim = this.add.sprite(1114.3149515364748, 697.7401938541003, 'plazaholiday16', 'cfcanim0001')
        cfcanim.setOrigin(0.4662946153703226, 0.5847972572583725)

        // cfcsign
        this.add.image(760, 480, 'plazaholiday16', 'cfcsign')

        // foreground
        const foreground = this.add.image(760, 962.2696149648463, 'plazaholiday16', 'foreground')
        foreground.setOrigin(0.5, 1.0023641600110254)

        // hoteldoor
        const hoteldoor = this.add.image(582.7652315826928, 481.7979289745221, 'plazaholiday16', 'hoteldoor')
        hoteldoor.setOrigin(0.573913225419138, 0.8096142887001637)

        // light4
        const light4 = this.add.image(1301.9039389477352, 606.4963085151774, 'plazaholiday16', 'light4')
        light4.setOrigin(0.8565157493077206, 0.6317669880366431)

        // light5
        const light5 = this.add.image(625.6952773789475, 748.609445242105, 'plazaholiday16', 'light5')
        light5.setOrigin(0.4116416298545707, 0.7798015054605261)

        // light1
        const light1 = this.add.image(872.4411631246022, 704.8823262492042, 'plazaholiday16', 'light1')
        light1.setOrigin(0.5739744494240804, 0.7342524231762544)

        // malldoor
        const malldoor = this.add.image(867.1173842086537, 485.53493161827345, 'plazaholiday16', 'malldoor')
        malldoor.setOrigin(0.484248001140184, 0.8363051756570747)

        // light2
        const light2 = this.add.image(368.0176118850676, 651.7851103292533, 'plazaholiday16', 'light2')
        light2.setOrigin(0.24211684992438656, 0.6789428232596388)

        // light3
        const light3 = this.add.image(1056.7197360232556, 570.5776036281517, 'plazaholiday16', 'light3')
        light3.setOrigin(0.6952103526468787, 0.5943516704459914)

        // cover
        const cover = this.add.sprite(503.12336564235005, 672.9317797482252, 'plazaholiday16', 'manhole0001')
        cover.setOrigin(0.5297463394509528, 0.5709855827806828)

        // petdoor
        const petdoor = this.add.image(416.8826157913464, 518.4740052875026, 'plazaholiday16', 'petdoor')
        petdoor.setOrigin(0.5488578947685827, 0.8258609155435006)

        // thirdleg
        const thirdleg = this.add.image(1106.734656297429, 753.5468541950122, 'plazaholiday16', 'thirdleg')
        thirdleg.setOrigin(0.7281149402460213, 0.7849446365105598)

        // signs
        this.add.image(760, 480, 'plazaholiday16', 'signs')

        // pizzadoor
        const pizzadoor = this.add.image(1183.1173842086537, 512.7979289745222, 'plazaholiday16', 'pizzadoor')
        pizzadoor.setOrigin(0.46526968926088763, 0.8698931767656829)

        // lists
        const sort = [foreground, light2, cover, light5, bauble, light1, light3, cfcanim, light4, thirdleg]

        // cfcanim (components)
        const cfcanimMoveTo = new MoveTo(cfcanim)
        cfcanimMoveTo.x = 1115
        cfcanimMoveTo.y = 740
        const cfcanimSimpleButton = new SimpleButton(cfcanim)
        cfcanimSimpleButton.hoverCallback = () => this.onCfcOver()
        cfcanimSimpleButton.hoverOutCallback = () => this.onCfcOut()

        // hoteldoor (components)
        const hoteldoorButton = new Button(hoteldoor)
        hoteldoorButton.hoverCallback = () => this.onHotelOver()
        hoteldoorButton.hoverOutCallback = () => this.onHotelOut()
        new MoveTo(hoteldoor)

        // malldoor (components)
        const malldoorButton = new Button(malldoor)
        malldoorButton.hoverCallback = () => this.onMallOver()
        malldoorButton.hoverOutCallback = () => this.onMallOut()
        new MoveTo(malldoor)

        // cover (components)
        const coverSimpleButton = new SimpleButton(cover)
        coverSimpleButton.hoverCallback = () => this.onHoleOver()
        coverSimpleButton.hoverOutCallback = () => this.onHoleOut()
        const coverMoveTo = new MoveTo(cover)
        coverMoveTo.x = 500
        coverMoveTo.y = 700

        // petdoor (components)
        const petdoorButton = new Button(petdoor)
        petdoorButton.hoverCallback = () => this.onPetOver()
        petdoorButton.hoverOutCallback = () => this.onPetOut()
        new MoveTo(petdoor)

        // pizzadoor (components)
        const pizzadoorButton = new Button(pizzadoor)
        pizzadoorButton.hoverCallback = () => this.onMallOver()
        pizzadoorButton.hoverOutCallback = () => this.onMallOut()
        new MoveTo(pizzadoor)

        this.bell1 = bell1
        this.bell2 = bell2
        this.bell3 = bell3
        this.bell4 = bell4
        this.bell5 = bell5
        this.bell6 = bell6
        this.bell7 = bell7
        this.bell8 = bell8
        this.cfcanim = cfcanim
        this.cover = cover
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        for (let i = 1; i < 9; i++) {
            this['bell' + i + 'bounds'] = this['bell' + i].getBounds()
        }

        this.coin = new Coin(this, 551.9600819184787, -49.143491473676306)
        this.add.existing(this.coin)
    }

    onHoleOver() {
        this.shell.musicController.addSfx('plaza-HoleOpen')
        this.cover.play('plazaholiday16-manholeopen')
    }

    onHoleOut() {
        this.shell.musicController.addSfx('plaza-HoleClose')
        this.cover.play('plazaholiday16-manholeclose')
    }

    onMallOver() {
        this.shell.musicController.addSfx('plaza-StageOpen')
    }

    onMallOut() {
        this.shell.musicController.addSfx('plaza-StageClose')
    }

    onPizzaOver() {
        this.shell.musicController.addSfx('plaza-PizzaOpen')
    }

    onPizzaOut() {
        this.shell.musicController.addSfx('plaza-PizzaClose')
    }

    onHotelOver() {
        this.shell.musicController.addSfx('plaza-HotelOpen')
    }

    onHotelOut() {
        this.shell.musicController.addSfx('plaza-HotelClose')
    }

    onPetOver() {
        this.shell.musicController.addSfx('plaza-PetOpen')
    }

    onPetOut() {
        this.shell.musicController.addSfx('plaza-PetClose')
    }

    onCfcOver() {
        this.cfcanim.play('plazaholiday16-cfcanim')
    }

    onCfcOut() {
        this.cfcanim.anims.stop()
        this.cfcanim.setFrame('cfcanim0001')
    }

    onSnowballComplete(user, x, y) {
        for (let i = 1; i < 9; i++) {
            if (this['bell' + i].anims.isPlaying) continue
            if (this['bell' + i + 'bounds'].contains(x, y)) {
                this['bell' + i].play('plazaholiday16-bell' + i)
                this.shell.musicController.addSfx('plaza-bell' + i)
                if (user == this.shell.client.id) {
                    let rnd = Math.ceil(Math.random() * 3)
                    this.airtower.sendXt('u#mc', rnd)
                }
                break
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
