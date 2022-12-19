import {Button, Interactive, SimpleButton} from '@components/components'
import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class Hydro extends Book {
    constructor() {
        super('Hydro')

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
        this.load.pack('dockupgrade-pack', 'client/media/interface/catalogs/upgrades/dock/dockupgrade-pack.json')
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

        // bg
        const bg = this.add.image(760, 478, 'dockupgrade', 'bg')
        page1.add(bg)

        // tag
        const tag = this.add.image(770, 481, 'dockupgrade', 'tag')
        tag.scaleX = 0.28
        tag.scaleY = 0.28
        tag.angle = 28
        page1.add(tag)

        // hook
        const hook = this.add.image(726, 456, 'dockupgrade', 'hook')
        hook.scaleX = 0.33
        hook.scaleY = 0.33
        page1.add(hook)

        // threehundredone
        const threehundredone = this.add.image(776, 486, 'dockupgrade', '300_two')
        page1.add(threehundredone)

        // coin
        const coin = this.add.image(798, 498, 'dockupgrade', 'coin')
        coin.scaleX = 0.7
        coin.scaleY = 0.7
        coin.angle = 28
        page1.add(coin)

        // tag_1
        const tag_1 = this.add.image(494, 409, 'dockupgrade', 'tag')
        tag_1.scaleX = 0.28
        tag_1.scaleY = 0.28
        tag_1.angle = -39.99999999999994
        tag_1.flipX = true
        page1.add(tag_1)

        // coin_1
        const coin_1 = this.add.image(506, 400, 'dockupgrade', 'coin')
        coin_1.scaleX = 0.7
        coin_1.scaleY = 0.7
        coin_1.angle = -39.99999999999994
        coin_1.flipX = true
        page1.add(coin_1)

        // threehundredtwo
        const threehundredtwo = this.add.image(489, 424, 'dockupgrade', '300_one')
        page1.add(threehundredtwo)

        // hook_1
        const hook_1 = this.add.image(521, 372, 'dockupgrade', 'hook')
        hook_1.scaleX = 0.33
        hook_1.scaleY = 0.33
        hook_1.angle = -49.99999999999994
        hook_1.flipX = true
        page1.add(hook_1)

        // exit
        const exit = this.add.image(1036, 96, 'dockupgrade', 'exit')

        // text
        const text = this.add.text(637, 900, '', {})
        text.text = 'Your Coins: 1000000'
        text.setStyle({color: '#000000ff', fontFamily: 'Burbank', fontSize: '32px'})

        // lists
        const pages = [page1]

        // block (components)
        new Interactive(block)

        // tag (components)
        const tagButton = new Button(tag)
        tagButton.spriteName = 'tag'
        tagButton.callback = () => this.interface.prompt.showItem(712)

        // tag_1 (components)
        const tag_1Button = new Button(tag_1)
        tag_1Button.spriteName = 'tag'
        tag_1Button.callback = () => this.interface.prompt.showItem(711)

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
