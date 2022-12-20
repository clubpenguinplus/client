import {Button, Interactive, SimpleButton} from '@components/components'
import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class Sled extends Book {
    constructor() {
        super('Sled')

        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('upmtn-pack', 'client/media/interface/catalogs/upgrades/mtn/upmtn-pack.json')
    }

    /** @returns {void} */
    _create() {
        // block
        const block = this.add.rectangle(760, 480, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.1

        // page1
        const page1 = this.add.container(0, 0)

        // pamphlet
        const pamphlet = this.add.image(760, 480, 'upmtn', 'pamphlet')
        page1.add(pamphlet)

        // tag
        const tag = this.add.image(717, 460, 'upmtn', 'tag')
        tag.scaleX = 0.25
        tag.scaleY = 0.25
        tag.angle = 28
        page1.add(tag)

        // hook
        const hook = this.add.image(679, 435, 'upmtn', 'hook')
        hook.scaleX = 0.33
        hook.scaleY = 0.33
        hook.angle = 12
        page1.add(hook)

        // toboggan
        const toboggan = this.add.image(598, 418, 'upmtn', 'toboggan')
        toboggan.scaleX = 0.6
        toboggan.scaleY = 0.6
        page1.add(toboggan)

        // frontsnow
        const frontsnow = this.add.image(672, 556, 'upmtn', 'frontsnow')
        page1.add(frontsnow)

        // pinksled
        const pinksled = this.add.image(872, 572, 'upmtn', 'pinksled')
        pinksled.scaleX = 0.45
        pinksled.scaleY = 0.45
        page1.add(pinksled)

        // greensled
        const greensled = this.add.image(701, 710, 'upmtn', 'greensled')
        greensled.scaleX = 0.45
        greensled.scaleY = 0.45
        page1.add(greensled)

        // upgrades
        const upgrades = this.add.image(760, 175, 'upmtn', 'upgrades')
        page1.add(upgrades)

        // threehundredone
        const threehundredone = this.add.image(716, 471, 'upmtn', '300_one')
        threehundredone.scaleX = 0.842126397361006
        threehundredone.scaleY = 0.842126397361006
        threehundredone.angle = 66
        page1.add(threehundredone)

        // coin
        const coin = this.add.image(743, 475, 'upmtn', 'coin')
        coin.scaleX = 0.5
        coin.scaleY = 0.5
        coin.angle = 28
        page1.add(coin)

        // tag_1
        const tag_1 = this.add.image(936, 602, 'upmtn', 'tag')
        tag_1.scaleX = 0.25
        tag_1.scaleY = 0.25
        tag_1.angle = 28
        page1.add(tag_1)

        // hook_1
        const hook_1 = this.add.image(898, 577, 'upmtn', 'hook')
        hook_1.scaleX = 0.33
        hook_1.scaleY = 0.33
        hook_1.angle = 12
        page1.add(hook_1)

        // coin_1
        const coin_1 = this.add.image(962, 617, 'upmtn', 'coin')
        coin_1.scaleX = 0.5
        coin_1.scaleY = 0.5
        coin_1.angle = 28
        page1.add(coin_1)

        // threehundredone_1
        const threehundredone_1 = this.add.image(935, 613, 'upmtn', '300_one')
        threehundredone_1.scaleX = 0.842126397361006
        threehundredone_1.scaleY = 0.842126397361006
        threehundredone_1.angle = 66
        page1.add(threehundredone_1)

        // tag_2
        const tag_2 = this.add.image(569, 737, 'upmtn', 'tag')
        tag_2.scaleX = 0.25
        tag_2.scaleY = 0.25
        tag_2.angle = -33
        tag_2.flipX = true
        page1.add(tag_2)

        // coin_2
        const coin_2 = this.add.image(579, 731, 'upmtn', 'coin')
        coin_2.scaleX = 0.5
        coin_2.scaleY = 0.5
        coin_2.angle = -33
        coin_2.flipX = true
        page1.add(coin_2)

        // hook_2
        const hook_2 = this.add.image(609, 716, 'upmtn', 'hook')
        hook_2.scaleX = 0.33
        hook_2.scaleY = 0.33
        hook_2.angle = 12
        hook_2.flipX = true
        page1.add(hook_2)

        // threehundredone_2
        const threehundredone_2 = this.add.image(563, 750, 'upmtn', '300_one')
        threehundredone_2.scaleX = 0.842126397361006
        threehundredone_2.scaleY = 0.842126397361006
        threehundredone_2.angle = 2
        page1.add(threehundredone_2)

        // exit
        const exit = this.add.image(1033, 105, 'upmtn', 'exit')

        // text
        const text = this.add.text(637, 900, '', {})
        text.text = 'Your Coins: 1000000'
        text.setStyle({color: '#000000ff', fontFamily: 'Burbank Small', fontSize: '32px'})

        // lists
        const pages = [page1]

        // block (components)
        new Interactive(block)

        // tag (components)
        const tagButton = new Button(tag)
        tagButton.spriteName = 'tag'
        tagButton.callback = () => this.interface.prompt.showItem(5021)

        // tag_1 (components)
        const tag_1Button = new Button(tag_1)
        tag_1Button.spriteName = 'tag'
        tag_1Button.callback = () => this.interface.prompt.showItem(5047)

        // tag_2 (components)
        const tag_2Button = new Button(tag_2)
        tag_2Button.spriteName = 'tag'
        tag_2Button.callback = () => this.interface.prompt.showItem(5046)

        // exit (components)
        const exitButton = new Button(exit)
        exitButton.spriteName = 'exit'
        exitButton.callback = () => this.scene.stop()

        this.text = text
        this.pages = pages

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.setCoins(this.shell.client.coins)
    }

    setCoins(coins) {
        this.text.text = `YOUR COINS: ${coins}`
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
