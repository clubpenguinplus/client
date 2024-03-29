import BaseScene from '@scenes/base/BaseScene'
import {Button, SimpleButton, NineSlice, LocalisedString, LocalisedSprite} from '@scenes/components/components'

import Server from './server/Server'

/* START OF COMPILED CODE */

export default class Servers extends BaseScene {
    constructor() {
        super('Servers')

        /** @type {Phaser.GameObjects.Container} */
        this.server_container
        /** @type {Phaser.GameObjects.Image} */
        this.mod
        /** @type {Phaser.GameObjects.Container} */
        this.more_servers
        /** @type {Phaser.GameObjects.Container} */
        this.more_server_container

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'main', 'backgroun')
        bg.setOrigin(0, 0)

        // text_2
        const text_2 = this.add.text(1095, 908, '', {})
        text_2.setOrigin(0, 0.5)
        text_2.text = 'Ultimate safe chat'
        text_2.setStyle({fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '28px'})

        // safe_small
        const safe_small = this.add.image(1070, 908, 'servers', 'safe_small')
        safe_small.setOrigin(0.5, 0.5161290322580645)

        // text_1
        const text_1 = this.add.text(645, 908, '', {})
        text_1.setOrigin(0, 0.5)
        text_1.text = 'Amount of penguins online'
        text_1.setStyle({fixedWidth: 400, fontFamily: 'cpBurbankSmall', fontSize: '28px'})

        // bar_full_small
        this.add.image(620, 908, 'servers', 'bar_full_small')

        // text
        const text = this.add.text(277, 908, '', {})
        text.setOrigin(0, 0.5)
        text.text = 'Friends online'
        text.setStyle({fixedWidth: 300, fontFamily: 'cpBurbankSmall', fontSize: '28px'})

        // online_small
        this.add.image(252, 908, 'main', 'buddies-icon')

        // more
        const more = this.add.image(1300, 630, 'servers', 'more')
        more.setOrigin(0.5, 0.5027322404371585)

        // suggested
        const suggested = this.add.text(760, 85, '', {})
        suggested.setOrigin(0.5, 0.5)
        suggested.text = 'YOUR SUGGESTED SERVERS'
        suggested.setStyle({align: 'center', fixedWidth: 1200, fontFamily: 'cpCCComicrazy', fontSize: '40px', fontStyle: 'italic', stroke: '#003366', strokeThickness: 10, 'shadow.color': '#000000ff'})

        // server_container
        const server_container = this.add.container(0, 0)

        // mod
        const mod = this.add.image(1428, 89, 'main', 'mod')
        mod.visible = false

        // more_servers
        const more_servers = this.add.container(760, 92)
        more_servers.visible = false

        // more_bg
        const more_bg = this.add.rectangle(0, 388, 1400, 920)
        more_bg.isFilled = true
        more_servers.add(more_bg)

        // more_text
        const more_text = this.add.text(0, -3, '', {})
        more_text.setOrigin(0.5, 0.5)
        more_text.text = 'PLEASE SELECT A SERVER'
        more_text.setStyle({align: 'center', fixedWidth: 1200, fontFamily: 'cpCCComicrazy', fontSize: '40px', fontStyle: 'italic', stroke: '#003366', strokeThickness: 10, 'shadow.color': '#000000ff'})
        more_servers.add(more_text)

        // image
        const image = this.add.image(628, 1, 'main', 'blue-button')
        more_servers.add(image)

        // image_1
        const image_1 = this.add.image(628, -1, 'main', 'blue-x')
        more_servers.add(image_1)

        // rectangle
        const rectangle = this.add.rectangle(549, 438, 50, 680)
        rectangle.isFilled = true
        rectangle.fillColor = 935281
        more_servers.add(rectangle)

        // image_2
        const image_2 = this.add.image(549, 89, 'main', 'blue-button')
        more_servers.add(image_2)

        // image_1_1
        const image_1_1 = this.add.image(549, 87, 'main', 'blue-arrow')
        more_servers.add(image_1_1)

        // image_2_1
        const image_2_1 = this.add.image(549, 771, 'main', 'blue-button')
        more_servers.add(image_2_1)

        // image_1_1_1
        const image_1_1_1 = this.add.image(549, 769, 'main', 'blue-arrow')
        image_1_1_1.angle = -180
        more_servers.add(image_1_1_1)

        // more_server_container
        const more_server_container = this.add.container(-760, -92)
        more_servers.add(more_server_container)

        // icon_en
        const icon_en = this.add.image(144, 122, 'servers-unlock', 'icon_en')
        icon_en.scaleX = 0.3
        icon_en.scaleY = 0.3

        // text_2 (components)
        const text_2LocalisedString = new LocalisedString(text_2)
        text_2LocalisedString.id = 'safe'

        // text_1 (components)
        const text_1LocalisedString = new LocalisedString(text_1)
        text_1LocalisedString.id = 'population'

        // text (components)
        const textLocalisedString = new LocalisedString(text)
        textLocalisedString.id = 'friendsOn'

        // more (components)
        const moreSimpleButton = new SimpleButton(more)
        moreSimpleButton.callback = () => (this.more_servers.visible = true)

        // suggested (components)
        const suggestedLocalisedString = new LocalisedString(suggested)
        suggestedLocalisedString.id = 'suggestedServers'

        // mod (components)
        const modSimpleButton = new SimpleButton(mod)
        modSimpleButton.callback = () => this.onModClick()

        // more_bg (components)
        const more_bgNineSlice = new NineSlice(more_bg)
        more_bgNineSlice.corner = 50

        // more_text (components)
        const more_textLocalisedString = new LocalisedString(more_text)
        more_textLocalisedString.id = 'selectServer'

        // image (components)
        const imageButton = new Button(image)
        imageButton.callback = () => {
            this.more_servers.visible = false
        }

        // image_2 (components)
        const image_2Button = new Button(image_2)
        image_2Button.callback = () => this.prevPage()

        // image_2_1 (components)
        const image_2_1Button = new Button(image_2_1)
        image_2_1Button.callback = () => this.nextPage()

        // icon_en (components)
        const icon_enSimpleButton = new SimpleButton(icon_en)
        icon_enSimpleButton.callback = () => {
            this.onUnlockClick()
        }
        new LocalisedSprite(icon_en)

        this.server_container = server_container
        this.mod = mod
        this.more_servers = more_servers
        this.more_server_container = more_server_container

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create(data) {
        this.data = data

        if (this.airtower.saveUsername) {
            this.airtower.savePlayer(data)
        } else {
            this.airtower.unsavePlayer(data)
        }

        this.worlds = {}

        let environment
        switch (true) {
            case window.location.hostname.includes('beta') || localStorage.joinProd == 'true':
                environment = 'dev'
                break
            case window.location.hostname.includes('play'):
                environment = 'live'
                break
            default:
                environment = 'local'
        }

        let worlds = this.crumbs.worlds[environment]
        for (let world in worlds) {
            if (world == 'sandbox') continue
            if (worlds[world].login) continue
            this.worlds[world] = worlds[world]

            if (worlds[world].unlock) {
                this.unlockworld = world
            }
        }

        this._create()
        this.createServers()

        if (this.data[2] == '1') return (this.mod.visible = true)
    }

    createServers() {
        let y = 122
        let worlds = Object.entries(this.worlds).slice(0, 5)

        for (let [world, config] of worlds) {
            if (world == 'sandbox') continue
            y += 102

            let server = new Server(this, 760, y)

            server.name.text = world
            server.safe.visible = config.safe

            let populations = this.data[4].split(',')
            let population = populations.find((p) => p.startsWith(world))
            if (population) {
                population = population.split(':')[1]
            }

            server.setPopulation(population)

            server.button.callback = () => this.onServerClick(world, this.data[1], this.data[3], population >= 6)

            this.server_container.add(server)
        }

        this.moreServers = []
        this.showMoreServers(1)
    }

    showMoreServers(page) {
        if (!Object.keys(this.worlds)[(page - 1) * 20]) return
        this.page = page

        for (let server of this.moreServers) {
            server.destroy()
        }

        let y = 175
        let serversOnY = 0
        let x = 1000
        let worlds = Object.entries(this.worlds).slice((page - 1) * 20, page * 20)

        for (let [world, config] of worlds) {
            if (world == 'sandbox') continue
            if (serversOnY == 2) {
                y += 75
                serversOnY = 1
            } else {
                serversOnY++
            }
            x = x == 1000 ? 450 : 1000

            let server = new Server(this, x, y)
            server.scaleX = 0.65
            server.scaleY = 0.65

            server.name.text = world
            server.safe.visible = config.safe

            let populations = this.data[3].split(',')
            let population = populations.find((p) => p.startsWith(world))
            if (population) {
                population = population.split(':')[1]
            }

            server.setPopulation(population)

            server.button.callback = () => this.onServerClick(world, this.data[1], this.data[3], population >= 6)

            this.more_server_container.add(server)
            this.moreServers.push(server)
        }
    }

    nextPage() {
        let page = this.page + 1
        this.showMoreServers(page)
    }

    prevPage() {
        let page = this.page - 1
        this.showMoreServers(page)
    }

    onServerClick(world, username, key, isFull) {
        if (isFull) {
            return this.interface.prompt.showError(this.crumbs.getError('63'))
        }

        this.interface.showLoading(`${this.getString('joining')} ${world}`, true, true)
        this.scene.stop()
        this.airtower.connectGame(world, username, key)
    }

    onModClick() {
        this.airtower.connectGame(this.unlockworld, this.data[1], this.data[3], 'mod')
    }

    onUnlockClick() {
        this.airtower.connectGame(this.unlockworld, this.data[1], this.data[3], 'unlock')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
