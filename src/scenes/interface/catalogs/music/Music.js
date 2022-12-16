import {Button, Interactive, SimpleButton} from '@components/components'
import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class Music extends Book {
    constructor() {
        super('Music')

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('music-pack', 'client/media/interface/catalogs/music/music-pack.json')
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
        page1.visible = false

        // page
        const page = this.add.image(760, 480, 'music', 'page1')
        page1.add(page)

        // nextpage
        const nextpage = this.add.image(1062, 768, 'music', 'nextpage')
        page1.add(nextpage)

        // exit_1
        const exit_1 = this.add.image(1126, 86, 'music', 'exit')
        page1.add(exit_1)

        // page2
        const page2 = this.add.container(0, 0)
        page2.visible = false

        // page2body
        const page2body = this.add.image(760, 480, 'music', 'page2')
        page2.add(page2body)

        // nextpage1
        const nextpage1 = this.add.image(1381, 767, 'music', 'nextpage')
        page2.add(nextpage1)

        // backpage
        const backpage = this.add.image(139, 767, 'music', 'backpage')
        page2.add(backpage)

        // button
        const button = this.add.image(262, 218, 'music', 'button')
        page2.add(button)

        // button_1
        const button_1 = this.add.image(262, 480, 'music', 'button')
        page2.add(button_1)

        // button_2
        const button_2 = this.add.image(433, 716, 'music', 'button')
        page2.add(button_2)

        // exit
        const exit = this.add.image(1445, 82, 'music', 'exit')
        page2.add(exit)

        // mic
        const mic = this.add.container(0, 0)
        mic.visible = false
        page2.add(mic)

        // secretholder2
        const secretholder2 = this.add.image(776, 485, 'music', 'secretholder')
        secretholder2.scaleX = 0.8503262048913669
        secretholder2.scaleY = 0.8503262048913669
        mic.add(secretholder2)

        // secretwrap2
        const secretwrap2 = this.add.image(775, 490, 'music', 'secretwrap')
        mic.add(secretwrap2)

        // exit_4
        const exit_4 = this.add.image(1031, 246, 'music', 'exit')
        mic.add(exit_4)

        // secrettext2
        const secrettext2 = this.add.image(661, 286, 'music', 'secrettext')
        secrettext2.scaleX = 0.42972712117801115
        secrettext2.scaleY = 0.42972712117801115
        mic.add(secrettext2)

        // mic_1
        const mic_1 = this.add.image(780, 468, 'music', 'mic')
        mic_1.flipX = true
        mic.add(mic_1)

        // button_10
        const button_10 = this.add.image(763, 610, 'music', 'button')
        mic.add(button_10)

        // page3
        const page3 = this.add.container(0, 0)
        page3.visible = false

        // page3body
        const page3body = this.add.image(760, 480, 'music', 'page3')
        page3.add(page3body)

        // nextpage3
        const nextpage3 = this.add.image(1381, 767, 'music', 'nextpage')
        page3.add(nextpage3)

        // backpage3
        const backpage3 = this.add.image(139, 767, 'music', 'backpage')
        page3.add(backpage3)

        // button2
        const button2 = this.add.image(312, 255, 'music', 'button')
        page3.add(button2)

        // button_3
        const button_3 = this.add.image(853, 217, 'music', 'button')
        page3.add(button_3)

        // button_4
        const button_4 = this.add.image(475, 803, 'music', 'button')
        page3.add(button_4)

        // exit3
        const exit3 = this.add.image(1445, 82, 'music', 'exit')
        page3.add(exit3)

        // button_5
        const button_5 = this.add.image(1071, 796, 'music', 'button')
        page3.add(button_5)

        // button_6
        const button_6 = this.add.image(1138, 448, 'music', 'button')
        page3.add(button_6)

        // button_7
        const button_7 = this.add.image(1051, 249, 'music', 'button')
        page3.add(button_7)

        // button_8
        const button_8 = this.add.image(1256, 183, 'music', 'button')
        page3.add(button_8)

        // violin
        const violin = this.add.container(0, 0)
        violin.visible = false
        page3.add(violin)

        // secretholder
        const secretholder = this.add.image(776, 485, 'music', 'secretholder')
        secretholder.scaleX = 0.8503262048913669
        secretholder.scaleY = 0.8503262048913669
        violin.add(secretholder)

        // secretwrap
        const secretwrap = this.add.image(775, 490, 'music', 'secretwrap')
        violin.add(secretwrap)

        // exit_2
        const exit_2 = this.add.image(1031, 246, 'music', 'exit')
        violin.add(exit_2)

        // secrettext
        const secrettext = this.add.image(661, 286, 'music', 'secrettext')
        secrettext.scaleX = 0.42972712117801115
        secrettext.scaleY = 0.42972712117801115
        violin.add(secrettext)

        // violin_1
        const violin_1 = this.add.image(780, 468, 'music', 'violin')
        violin_1.angle = 32
        violin.add(violin_1)

        // button_9
        const button_9 = this.add.image(763, 610, 'music', 'button')
        violin.add(button_9)

        // page4
        const page4 = this.add.container(0, 0)
        page4.visible = false

        // page4body
        const page4body = this.add.image(760, 480, 'music', 'page4')
        page4.add(page4body)

        // exit_5
        const exit_5 = this.add.image(1150, 92, 'music', 'exit')
        page4.add(exit_5)

        // backpage_1
        const backpage_1 = this.add.image(528, 770, 'music', 'backpage')
        page4.add(backpage_1)

        // lists
        const pages = [page1, page2, page3, page4]

        // block (components)
        new Interactive(block)

        // nextpage (components)
        const nextpageButton = new Button(nextpage)
        nextpageButton.spriteName = 'nextpage'
        nextpageButton.callback = () => this.nextPage()

        // exit_1 (components)
        const exit_1SimpleButton = new SimpleButton(exit_1)
        exit_1SimpleButton.callback = () => this.scene.stop()

        // nextpage1 (components)
        const nextpage1Button = new Button(nextpage1)
        nextpage1Button.spriteName = 'nextpage'
        nextpage1Button.callback = () => this.nextPage()

        // backpage (components)
        const backpageButton = new Button(backpage)
        backpageButton.spriteName = 'backpage'
        backpageButton.callback = () => this.prevPage()

        // button (components)
        const buttonButton = new Button(button)
        buttonButton.spriteName = 'button'
        buttonButton.callback = () => this.interface.prompt.showItem(293)

        // button_1 (components)
        const button_1Button = new Button(button_1)
        button_1Button.spriteName = 'button'
        button_1Button.callback = () => this.interface.prompt.showItem(233)

        // button_2 (components)
        const button_2Button = new Button(button_2)
        button_2Button.spriteName = 'button'
        button_2Button.callback = () => this.interface.prompt.showItem(5063)

        // exit (components)
        const exitSimpleButton = new SimpleButton(exit)
        exitSimpleButton.callback = () => this.scene.stop()

        // exit_4 (components)
        const exit_4SimpleButton = new SimpleButton(exit_4)
        exit_4SimpleButton.callback = () => (this.mic.visible = false)

        // button_10 (components)
        const button_10Button = new Button(button_10)
        button_10Button.spriteName = 'button'
        button_10Button.callback = () => this.interface.prompt.showItem(732)

        // nextpage3 (components)
        const nextpage3Button = new Button(nextpage3)
        nextpage3Button.spriteName = 'nextpage'
        nextpage3Button.callback = () => this.nextPage()

        // backpage3 (components)
        const backpage3Button = new Button(backpage3)
        backpage3Button.spriteName = 'backpage'
        backpage3Button.callback = () => this.prevPage()

        // button2 (components)
        const button2Button = new Button(button2)
        button2Button.spriteName = 'button'
        button2Button.callback = () => this.interface.prompt.showItem(729)

        // button_3 (components)
        const button_3Button = new Button(button_3)
        button_3Button.spriteName = 'button'
        button_3Button.callback = () => this.interface.prompt.showItem(5066)

        // button_4 (components)
        const button_4Button = new Button(button_4)
        button_4Button.spriteName = 'button'
        button_4Button.callback = () => this.interface.prompt.showItem(5064)

        // exit3 (components)
        const exit3SimpleButton = new SimpleButton(exit3)
        exit3SimpleButton.callback = () => this.scene.stop()

        // button_5 (components)
        const button_5Button = new Button(button_5)
        button_5Button.spriteName = 'button'
        button_5Button.callback = () => this.interface.prompt.showItem(234)

        // button_6 (components)
        const button_6Button = new Button(button_6)
        button_6Button.spriteName = 'button'
        button_6Button.callback = () => this.interface.prompt.showItem(5014)

        // button_7 (components)
        const button_7Button = new Button(button_7)
        button_7Button.spriteName = 'button'
        button_7Button.callback = () => this.interface.prompt.showItem(340)

        // button_8 (components)
        const button_8Button = new Button(button_8)
        button_8Button.spriteName = 'button'
        button_8Button.callback = () => this.interface.prompt.showItem(180)

        // exit_2 (components)
        const exit_2SimpleButton = new SimpleButton(exit_2)
        exit_2SimpleButton.callback = () => (this.violin.visible = false)

        // button_9 (components)
        const button_9Button = new Button(button_9)
        button_9Button.spriteName = 'button'
        button_9Button.callback = () => this.interface.prompt.showItem(343)

        // exit_5 (components)
        const exit_5SimpleButton = new SimpleButton(exit_5)
        exit_5SimpleButton.callback = () => this.scene.stop()

        // backpage_1 (components)
        const backpage_1Button = new Button(backpage_1)
        backpage_1Button.spriteName = 'backpage'
        backpage_1Button.callback = () => this.prevPage()

        this.pages = pages

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
