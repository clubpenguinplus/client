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

if (localStorage.quality == 'low') {
    window.currentScale = 0.4
} else if (localStorage.quality == 'medium') {
    window.currentScale = 0.7
} else {
    localStorage.quality = 'high'
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

    plugins: {
        global: [NineSlice.Plugin.DefaultCfg],
    },

    scale: {
        parent: 'game',
        mode: Phaser.Scale.NONE,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    loader: {
        baseURL: window.location.hostname == 'localhost' ? '/' : 'https://media.cpplus.pw/',
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
