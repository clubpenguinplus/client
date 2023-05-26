import fonts from './fonts'
import igloos from './igloos'
import interfaces from './interfaces'
import rooms from './rooms'
import pin from './pin'

if (!localStorage.getItem('webgl')) {
    localStorage.setItem('webgl', 'true')
}
if (!localStorage.getItem('debugMode')) {
    localStorage.setItem('debugMode', 'false')
}

let settings = JSON.parse(localStorage.getItem('settings'))
if (settings) {
    window.currentScale = settings.vq == 1 ? 0.4 : settings.vq == 2 ? 0.7 : 1
} else {
    window.currentScale = 1
}

const clubpenguinplus = {
    type: localStorage.getItem('webgl') == 'true' ? Phaser.WEBGL : Phaser.CANVAS,

    width: window.currentScale * 1520,
    height: window.currentScale * 960,
    transparent: true,
    roundPixels: true,

    dom: {
        createContainer: true,
    },

    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: localStorage.getItem('debugMode') == 'true' ? true : false,
                renderLine: localStorage.getItem('debugMode') == 'true' ? true : false,
                showInternalEdges: true,
            },
            gravity: false,
        },
    },

    scale: {
        parent: 'game',
        mode: Phaser.Scale.NONE,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    loader: {
        baseURL: window.location.hostname == 'play.cpplus.pw' ? `https://media.cpplus.pw/` : `${window.location.origin}/`,
        crossOrigin: 'anonymous',
    },

    crumbs: {
        fonts: fonts,
        pin: pin,
        scenes: {
            igloos: igloos,
            interfaces: interfaces,
            rooms: rooms,
        },
        iglooIdOffset: 2000,
    },
}

export default clubpenguinplus
