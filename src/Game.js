import Boot from '@engine/boot/Boot'
import Airtower from '@engine/airtower/Airtower'
import registerNinePatchContainerFactory from '@engine/utils/ninepatch/registerNinePatchContainerFactory'

import clubpenguinplus from './data/game'

import devtools from 'devtools-detect'

export default class Game extends Phaser.Game {
    constructor(config) {
        super(config)

        this.crumbs = config.crumbs
        this.airtower = new Airtower(this)

        registerNinePatchContainerFactory()

        this.scene.add('Boot', Boot, true)
    }
}

window.onload = () => {
    if (!correctDomain()) return window.open('https://play.clubpenguin.plus', '_self')

    document.onkeydown = function (event) {
        event.preventDefault()
    }

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

        let allowedDomains = ['beta.cpplus.pw', 'play.cpplus.pw', 'localhost']

        for (let i = 0; i < allowedDomains.length; i++) {
            if (window.location.hostname == allowedDomains[i]) {
                correctDomain = true
            }
        }

        return correctDomain
    }

    new Game(clubpenguinplus)
}
