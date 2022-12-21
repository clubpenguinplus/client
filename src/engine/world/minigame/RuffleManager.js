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
        window.getMyPuffleCount = this.getMyPuffleCount.bind(this)
        window.getMyPlayerTotalCoins = this.getMyPlayerTotalCoins.bind(this)
        window.getMyPlayerUsername = this.getMyPlayerUsername.bind(this)
        window.adoptPuffle = this.adoptPuffle.bind(this)
        window.getPostcards = this.getPostcards.bind(this)
        window.deletePostcard = this.deletePostcard.bind(this)
        window.sendPostcard = this.sendPostcard.bind(this)
        window.getCurrentPostcards = this.getCurrentPostcards.bind(this)
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
        ruffleplayer.volume = 0.05

        ruffleplayer.shadowRoot.querySelector('canvas').style.borderRadius = '10px'

        this.rufflePlayer.style.width = document.getElementById('game_canvas').width
        this.rufflePlayer.style.height = document.getElementById('game_canvas').height

        if (this.swf.minigame) {
            ruffleplayer.loadMinigame(`${this.swf.minigame}/bootstrap.swf`)
        } else if (this.swf.path) {
            ruffleplayer.loadOtherSwf(this.swf.path, this.swf.params)
        }

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

        this.shell.airtower.sendXt('mi#eg', `${coins}%${game}`)
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
                console.error('too much compressed cannon data, some has been ommitted!')
            }
        }
        return uncompressed
    }

    getLocalizedString(key) {
        return this.shell.getString(key)
    }

    getMyPuffleCount() {
        return this.shell.client.pufflecount
    }

    getMyPlayerTotalCoins() {
        return this.shell.client.coins
    }

    getMyPlayerUsername() {
        return this.shell.client.penguin.username
    }

    adoptPuffle(type, name) {
        this.shell.airtower.sendXt('p#pn', type + '%' + name)
    }

    getPostcards() {
        return this.shell.client.postcards
    }

    deletePostcard(index) {
        this.shell.client.postcards.splice(index, 1)
        clearTimeout(this.postcardTimeout)
        this.postcardTimeout = setTimeout(() => this.shell.airtower.sendXt('l#md', this.shell.client.postcards), 1000)
    }

    sendPostcard(postcard, username) {
        this.shell.airtower.sendXt('send_postcard', `${postcard}%${username}`)
    }

    getCurrentPostcards() {
        // this should probably be in crumbs in future. each page is one item in the array, there can be up to infinite pages of postcards
        return [
            {
                title: 'Featured Postcards',
                id1: 217,
                name1: "Let's Explore",
                id2: 43,
                name2: 'Happy Puffles',
                id3: 36,
                name3: "You're Funny",
                id4: 62,
                name4: "Let's Hang Out",
                id5: 48,
                name5: 'Follow Me',
                id6: 12,
                name6: 'Welcome to Club Penguin',
            },
            {
                title: 'Friendship',
                id1: 32,
                name1: 'Terrific Friend',
                id2: 57,
                name2: 'Be My Friend',
                id3: 35,
                name3: 'Long Time No See',
                id4: 200,
                name4: 'Campfire Story',
                id5: 201,
                name5: 'Thank You',
                id6: 64,
                name6: 'Stopping By',
            },
            {
                title: 'Friendship',
                id1: 56,
                name1: 'Hey There',
                id2: 24,
                name2: 'Cool Name',
                id3: 25,
                name3: 'Awesome Outfit',
                id4: 26,
                name4: 'I Like Your Outfit',
                id5: 88,
                name5: 'My Tour',
                id6: 219,
                name6: 'Best Friends for Life!',
            },
            {
                title: 'Puffles',
                id1: 222,
                name1: 'Bring your puffles!',
                id2: 231,
                name2: 'Cool Puffles!',
                id3: 224,
                name3: 'Green Puffle',
                id4: 225,
                name4: 'Orange Puffle',
                id5: 220,
                name5: 'Black Puffle',
                id6: 221,
                name6: 'Blue Puffle',
            },
            {
                title: 'Igloo',
                id1: 1,
                name1: 'Re-decorated Igloo',
                id2: 202,
                name2: 'Check out my igloo',
                id3: 27,
                name3: 'Party at my iggy!',
                id4: 61,
                name4: 'Igloo Party',
                id5: 17,
                name5: 'Cool Igloo',
                id6: 237,
                name6: 'Thanks for my gift!',
            },
            {
                title: 'Games',
                id1: 10,
                name1: 'Mancala',
                id2: 19,
                name2: 'Great Game',
                id3: 52,
                name3: 'Ski Hill',
                id4: 218,
                name4: 'My Stamp Book',
                id5: 59,
                name5: 'Find Four',
                id6: 206,
                name6: 'Stamp Book',
            },
            {
                title: 'Rooms',
                id1: 20,
                name1: 'Snow Forts',
                id2: 21,
                name2: 'Pool',
                id3: 55,
                name3: 'Dojo',
                id4: 29,
                name4: 'Tip The Berg',
                id5: 30,
                name5: 'Hidden Lake',
                id6: 16,
                name6: 'Ice Rink',
            },
        ]
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
