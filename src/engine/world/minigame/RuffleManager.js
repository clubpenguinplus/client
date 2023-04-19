export default class RuffleManager {
    constructor(shell, RuffleHolder, crumbs) {
        this.shell = shell
        this.RuffleHolder = RuffleHolder
        this.crumbs = crumbs
        this.prefix = window.location.hostname == 'localhost' ? `${window.location.origin}/` : 'https://media.cpplus.pw/'
        if (window.getMyPlayerHex) return // Check if already loaded

        window.RufflePlayer.config = {
            publicPath: `${this.prefix}client/scripts/lib/ruffle`,
        }

        this.ruffle = window.RufflePlayer.newest()
        this.rufflePlayer = this.ruffle.createPlayer()
        this.rufflePlayer.style.width = document.getElementById('game_canvas').style.width
        this.rufflePlayer.style.height = document.getElementById('game_canvas').style.height
        this.rufflePlayer.style.pointerEvents = 'auto'

        this.RuffleHolder.add.dom(760, 480, this.rufflePlayer)

        var ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        ruffleplayer.style.visibility = 'hidden'

        window.getMyPlayerHex = this.getMyPlayerHex.bind(this)
        window.killMinigame = this.killMinigame.bind(this)
        window.killAS3Minigame = this.killAS3Minigame.bind(this)
        window.killSwf = this.killSwf.bind(this)
        window.onLoaderInit = this.onLoaderInit.bind(this)
        window.setCannonData = this.setCannonData.bind(this)
        window.getCannonData = this.getCannonData.bind(this)
        window.getStampInfo = this.getStampInfo.bind(this)
        window.checkIfPlayerHasStamp = this.checkIfPlayerHasStamp.bind(this)
        window.playerWearingItem = this.playerWearingItem.bind(this)
        window.getLocalizedString = this.getLocalizedString.bind(this)
        window.getMyPlayerTotalCoins = this.getMyPlayerTotalCoins.bind(this)
        window.getMyPlayerUsername = this.getMyPlayerUsername.bind(this)
        window.startMusicById = this.startMusicById.bind(this)
        window.stampEarned = this.stampEarned.bind(this)
    }

    get io() {
        return this.shell.airtower.client.io
    }

    handleLoadAS3Minigame(minigame, authcode) {
        for (let i of ['marginLeft', 'marginTop', 'borderRadius', 'width', 'height']) {
            window.waflashPlayer.style[i] = document.getElementById('game_canvas').style[i]
        }

        document.getElementById('waflashContainer').style.display = 'block'
        window.waflashPlayer.style.position = 'absolute'

        window.waflashPlayer.width = parseInt(document.getElementById('game_canvas').style.width.slice(0, -2))
        window.waflashPlayer.height = parseInt(document.getElementById('game_canvas').style.height.slice(0, -2))

        let is_mobile = /Mobi/i.test(window.navigator.userAgent)
        if (is_mobile) {
            function scrollToSubject() {
                try {
                    window.scrollTo({
                        top: 100,
                        left: 0,
                        behavior: 'smooth',
                    })
                } catch (e) {}
            }
            scrollToSubject()
            window.addEventListener('orientationchange', function () {
                setTimeout(scrollToSubject, 100)
            })
        } else {
            window.waflashPlayer.focus()
        }
        window.waflashPlayer.addEventListener('keydown', function (ev) {
            ev.preventDefault()
            ev.stopPropagation()
        })
        window.waflashPlayer.addEventListener('click', function () {
            window.waflashPlayer.focus()
        })
        document.addEventListener(
            'mousedown',
            (function () {
                const canvasElement = window.waflashPlayer
                let focused = false
                return function (ev) {
                    if (ev.target == canvasElement) {
                        if (!focused) {
                            canvasElement.focus()
                            focused = true
                        }
                    } else {
                        if (focused) {
                            focused = false
                        }
                    }
                    return true
                }
            })()
        )

        let userdata = `id=${this.shell.client.id}&color=${parseInt(this.crumbs.colors[this.shell.client.penguin.color], 16)}&muted=${this.shell.musicController.musicMuted ? 1 : 0}`
        // ExternalInterface is not supported by WAFlash, so we have to use a workaround

        let dataurl = `${this.io.uri.includes('https') ? 'https://' : 'http://'}${this.io.engine.hostname}:${this.io.engine.port}${this.io.engine.opts.path.replace('socket/', '')}`

        let url = `${this.prefix}client/media/games/swf/${minigame}/HostEmulator.swf?${userdata}&time=${Date.now()}&auth=${authcode}&dataurl=${dataurl}`

        window.createWaflash(url, {enableFilters: true})

        this.swf = {minigame: minigame}
        this.shell.client.inMinigame = true
    }

    handleLoadMinigame(minigame) {
        this.swfInstance = this.rufflePlayer.load({
            url: `${this.prefix}client/media/swf/loader.swf`,
            allowScriptAccess: true,
            quality: 'low',
            logLevel: localStorage.getItem('debugMode') == 'true' ? 'Trace' : 'Error',
        })
        this.swf = {minigame: minigame}

        this.shell.client.inMinigame = true
    }

    handleLoadOtherSwf(path, params) {
        this.swfInstance = this.rufflePlayer.load({
            url: `${this.prefix}client/media/swf/loader.swf`,
            allowScriptAccess: true,
            quality: 'low',
            logLevel: localStorage.getItem('debugMode') == 'true' ? 'Trace' : 'Error',
        })
        this.swf = {path: path, params: params}

        this.shell.client.inMinigame = true
    }

    onLoaderInit() {
        var ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        ruffleplayer.setMediaPath(`${this.prefix}client/media/games/swf/`, `${this.prefix}client/media/swf/`)
        ruffleplayer.style.visibility = 'visible'

        ruffleplayer.shadowRoot.querySelector('canvas').style.borderRadius = '10px'

        this.rufflePlayer.style.width = document.getElementById('game_canvas').width
        this.rufflePlayer.style.height = document.getElementById('game_canvas').height

        if (this.swf.minigame) {
            ruffleplayer.loadMinigame(`${this.swf.minigame}/bootstrap.swf`)
        } else if (this.swf.path) {
            ruffleplayer.loadOtherSwf(this.swf.path, this.swf.params)
        }

        if (this.volumeInterval) clearInterval(this.volumeInterval)
        this.volumeInterval = setInterval(() => {
            let volume = this.shell.muteAll ? 0 : parseFloat(localStorage.musicVolume || 0.5)
            if (ruffleplayer.volume == volume) return clearInterval(this.volumeInterval)
            ruffleplayer.volume = volume
        }, 200)

        this.swf = {}
    }

    getMyPlayerHex() {
        return this.shell.getColor(this.shell.client.penguin.color)
    }

    killMinigame(game, roomid, coins) {
        var ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        this.rufflePlayer.pause()
        ruffleplayer.style.visibility = 'hidden'
        let room = this.crumbs.scenes.rooms[roomid]
        this.shell.client.sendJoinRoom(roomid, room.key)

        this.shell.client.inMinigame = false

        let category = this.getCategory(game.toLowerCase())
        let categoryStamps = this.getCategoryStamps(category)

        if (categoryStamps[0].length > 1 && categoryStamps[1] == categoryStamps[0].length) {
            coins = coins * 2
        }

        this.shell.airtower.sendXt('mi#eg', `${coins}%${game}`)

        if (this.volumeInterval) clearInterval(this.volumeInterval)
        this.volumeInterval = setInterval(() => {
            if (ruffleplayer.volume == 0) return clearInterval(this.volumeInterval)
            ruffleplayer.volume = 0
        }, 200)
    }

    getCategory(game) {
        let category

        switch (game) {
            case 'aquagrabber':
                category = 13
                break
            case 'astrobarrier':
                category = 14
                break
            case 'card':
                category = 38
                break
            case 'cjfire':
                category = 32
                break
            case 'cjsnow':
                category = 60
                break
            case 'cjwater':
                category = 34
                break
            case 'cartsurfer':
                category = 28
                break
            case 'catchinwaves':
                category = 15
                break
            case 'icefishing':
                category = 52
                break
            case 'jetpackadventure':
                category = 11
                break
            case 'pizzatron':
                category = 54
                break
            case 'pufflelaunch':
                category = 48
                break
            case 'pufflescape':
                category = 57
                break
            case 'pufflerescue':
                category = 19
                break
            case 'smoothie':
                category = 58
                break
            case 'sysdef':
                category = 46
                break
            case 'thinice':
                category = 16
                break
            case 'treasurehunt':
                category = 56
                break
            default:
                category = 0
        }
        return category
    }

    getCategoryStamps(category) {
        let categoryStamps = []
        let ownedCategoryStamps = []
        for (var stamp in this.crumbs.stamps) {
            if (this.crumbs.stamps[stamp].groupid == category && !this.crumbs.stamps[stamp].disabled) {
                categoryStamps.push(stamp)
                for (var i = 0; i < this.shell.client.stamps.length; i++) {
                    if (this.shell.client.stamps[i] == parseInt(stamp)) {
                        ownedCategoryStamps.push(stamp)
                        break
                    }
                }
            }
        }
        return [categoryStamps, ownedCategoryStamps.length]
    }

    killAS3Minigame(roomid) {
        window.waflash.pauseMainLoop()
        document.getElementById('waflashContainer').style.display = 'none'
        let room = this.crumbs.scenes.rooms[roomid]
        this.shell.client.sendJoinRoom(roomid, room.key)

        this.shell.client.inMinigame = false
    }

    killSwf() {
        var ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        this.rufflePlayer.pause()
        ruffleplayer.style.visibility = 'hidden'
    }

    setCannonData(data) {
        let compressed = this.compressCannonData(data)
        this.shell.client.cannonData = compressed
        this.shell.airtower.sendXt('mi#spl', compressed)
    }

    getCannonData() {
        let uncompressed = this.uncompressCannonData(this.shell.client.cannonData)
        return uncompressed
    }

    getStampInfo(stamp) {
        let stampInfo = this.crumbs.stamps[stamp]
        return [stampInfo.name, stampInfo.groupid, stampInfo.difficulty, stampInfo.description]
    }

    checkIfPlayerHasStamp(stamp) {
        let hasStamp = this.shell.client.stamps.includes(parseInt(stamp))
        return hasStamp
    }

    playerWearingItem(item) {
        let items = this.shell.client.penguin.items.equippedFlat
        for (var x in items) {
            if (items[x] == item) {
                return true
            }
        }
    }

    compressCannonData(data) {
        let compressed = []
        for (var x of data) {
            if (x[1] == true) {
                compressed.push(1)
            } else if (x[1] == false) {
                compressed.push(0)
            } else if (x[1] == 600) {
                compressed.push('A')
            } else {
                compressed.push(x[1])
            }
        }
        return compressed.join('#')
    }

    uncompressCannonData(data) {
        let uncompressed = []
        let dataArray = data.split('#')
        for (var x in dataArray) {
            if (x < 36) {
                uncompressed.push(['level' + (parseInt(x) + 1) + 'playerPuffleOs', dataArray[x]])
            } else if (x < 72) {
                if (dataArray[x] == 'A') {
                    uncompressed.push(['level' + (parseInt(x) - 35) + 'bestTime', 600])
                } else {
                    uncompressed.push(['level' + (parseInt(x) - 35) + 'bestTime', dataArray[x]])
                }
            } else if (x < 108) {
                if (dataArray[x] == 0) {
                    uncompressed.push(['level' + (parseInt(x) - 71) + 'turboDone', false])
                } else if (dataArray[x] == 1) {
                    uncompressed.push(['level' + (parseInt(x) - 71) + 'turboDone', true])
                }
            } else {
                console.error('[RuffleManager] Too much compressed cannon data, some has been omitted!')
            }
        }
        return uncompressed
    }

    getLocalizedString(key) {
        return this.shell.getString(key)
    }

    getMyPlayerTotalCoins() {
        return this.shell.client.coins
    }

    getMyPlayerUsername() {
        return this.shell.client.penguin.username
    }

    startMusicById(id) {
        if (this.shell.muteMusic) return

        this.shell.musicController.addMusic(id)
    }

    stampEarned(id) {
        if (this.shell.client.stamps.includes(id)) return

        this.shell.client.stamps.push(id)
        this.shell.airtower.sendXt('st#sse', id)
    }
}
