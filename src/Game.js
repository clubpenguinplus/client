import Boot from '@engine/boot/Boot'
import Airtower from '@engine/airtower/Airtower'
import registerNinePatchContainerFactory from '@engine/utils/ninepatch/registerNinePatchContainerFactory'
import Phaser from 'phaser'
import CacheBustedLoader from '@engine/utils/cachebuster/phaser-cachebuster.min.js'
import clubpenguinplus from './data/game'

import devtools from 'devtools-detect'

export default class Game extends Phaser.Game {
    constructor(config) {
        super(config)

        this.crumbs = config.crumbs
        this.airtower = new Airtower(this)

        document.onkeydown = (event) => {
            if (this.airtower.interface.isInputActive) {
                event.preventDefault()
                this.airtower.interface.input.keyboard.emit('keydown', event)
            }
        }

        document.onkeyup = (event) => {
            if (this.airtower.interface.isInputActive) {
                event.preventDefault()
                this.airtower.interface.input.keyboard.emit('keyup', event)
            }
        }

        registerNinePatchContainerFactory()

        this.scene.add('Boot', Boot, true)
    }
}

window.onload = () => {
    if (!correctDomain()) return window.open('https://play.clubpenguin.plus', '_self')

    // if (window.location.hostname != 'localhost') {
    //     window.addEventListener('devtoolschange', (event) => {
    //         alert('Close devtools to play.')
    //         document.location.reload()
    //     })

    //     if (devtools.isOpen) {
    //         alert('Close devtools to play.')
    //         document.location.reload()
    //     }
    // }

    function correctDomain() {
        let correctDomain = false

        let allowedDomains = ['beta.cpplus.pw', 'play.cpplus.pw', 'localhost', '192.168.0.20']

        for (let i = 0; i < allowedDomains.length; i++) {
            if (window.location.hostname == allowedDomains[i]) {
                correctDomain = true
            }
        }

        return correctDomain
    }

    new Game(clubpenguinplus)
}
