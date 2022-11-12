import BaseContainer from '@scenes/base/BaseContainer'

import ItemLoader from './loader/ItemLoader'
import PathEngine from './pathfinding/PathEngine'
import PenguinItems from './PenguinItems'

import adjustRedemptionItem from './frames/adjustRedemptionItem'

export default class Penguin extends BaseContainer {
    constructor(user, room, penguinLoader) {
        super(room, user.x, user.y)

        // Assign user attributes
        Object.assign(this, user)
        this.room = room

        this.items = new PenguinItems(this)
        this.itemLoader = new ItemLoader(this)

        this.bodySprite
        this.penguinSprite

        PathEngine.setStartPos(this)
        this.depth = this.y
        this.tween
        this.direction

        this.nameTag = penguinLoader.addName(this)

        // Active balloon
        this.balloon

        this.balloonTimer
        this.textBalloon
        this.emoteBalloon

        this.on('destroy', () => this.onDestroy())
        this.isButton = true

        // Function that is called after move completes, used to set a frame after move etc
        this.afterMove

        this.load()
    }

    get isTweening() {
        return this.tween ? true : false
    }

    get pos() {
        return {x: this.x, y: this.y}
    }

    get playerCard() {
        return this.interface.main.playerCard
    }

    get equippedSprites() {
        return this.list.filter((child) => {
            return child.type == 'Sprite' && child != this.bodySprite && child != this.penguinSprite
        })
    }

    get penguinLoader() {
        return this.shell.penguinFactory.penguinLoader
    }

    get paperDollLoader() {
        return this.playerCard.paperDoll.paperDollLoader
    }

    get textures() {
        return this.room.textures
    }

    get anims() {
        return this.room.anims
    }

    get secretFramesCache() {
        return this.shell.secretFramesCache
    }

    /**
     * this.body is a Phaser property and will result in an error on destruction,
     * so it must be deleted manually first.
     */
    onDestroy() {
        delete this.body
    }

    load() {
        this.penguinLoader.loadPenguin(this)
        this.itemLoader.loadItems()

        this.room.add.existing(this)
    }

    update(item, slot) {
        this.items.setItem(item, slot)

        if (slot == 'color' && this.bodySprite) {
            this.bodySprite.tint = this.shell.getColor(item)
        }

        // Load item sprite
        if (slot in this.items.equipped) {
            this.itemLoader.loadItem(item, slot)
            this.itemLoader.load.start()
        }

        // Load item paper, only if card is active
        if (this.playerCard.visible && this.playerCard.id == this.id) {
            this.paperDollLoader.loadItem(item, slot)
            this.paperDollLoader.start()
        }
    }

    move(x, y) {
        let path = PathEngine.getPath(this, {x: x, y: y})
        if (path) this.addMoveTween(path)
    }

    setPos(x, y) {
        this.x = x
        this.y = y
    }

    /*========== Animations ==========*/

    playFrame(_frame, set = true) {
        // Moving penguin can only update when frames are movement frames (9-16)
        if (this.isTweening && (_frame < 9 || _frame > 16)) {
            return
        }

        // Get correct frame id
        let frame = [25, 26].includes(_frame) ? this.getSecretFrame(_frame) : _frame

        this.createAnims(frame, frame != _frame)

        this.playAnims(frame)

        // Frames that aren't set get set to 1
        this.frame = set ? _frame : 1
    }

    createAnims(frame, isSecretFrame) {
        let penguinTexture = isSecretFrame ? `secret_frames/${frame}` : 'penguin'

        this.createAnim(`penguin_body_${frame}`, penguinTexture, frame, 'body/')
        this.createAnim(`penguin_${frame}`, penguinTexture, frame, 'penguin/')

        for (let sprite of this.equippedSprites) {
            this.createAnim(`${sprite.texture.key}_${frame}`, sprite.texture.key, frame, '', true)
        }
    }

    createAnim(key, textureKey, frame, prefix = '', checkItem = false) {
        if (this.anims.exists(key)) {
            return
        }

        if (!this.textures.exists(textureKey)) {
            return
        }

        let animation = this.crumbs.penguin[frame]

        if (!animation) {
            return console.error(`Animation ${frame} does not exist`)
        }

        if (checkItem && animation.items) {
            animation = this.checkAnimItems(animation, textureKey)
        }

        let frames = this.generateFrames(textureKey, frame, prefix, animation)

        let anim = this.anims.create({
            key: key,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0,
        })

        if (animation.chain) {
            anim.chainKeys = this.createChains(key, textureKey, frame, prefix, animation.chain)
        }
    }

    checkAnimItems(animation, textureKey) {
        let check = adjustRedemptionItem(textureKey.split('/').pop())

        for (let item in animation.items) {
            let secretCheck = adjustRedemptionItem(item)

            if (check == secretCheck) {
                return animation.items[item]
            }
        }

        return animation
    }

    generateFrames(textureKey, frame, prefix, animation) {
        let frames = Phaser.Utils.Array.NumberArray(animation.start || 1, animation.end)

        let config = {
            prefix: `${prefix}${frame}_`,
            frames: frames,
        }

        let textureFrames = this.textures.get(textureKey).getFrameNames(false)

        // Filter out null frames
        config.frames = config.frames.filter((i) => {
            return textureFrames.includes(`${prefix}${frame}_${i}`)
        })

        return this.anims.generateFrameNames(textureKey, config)
    }

    createChains(key, textureKey, frame, prefix, config) {
        let chainKeys = []

        for (let i = 0; i < config.length; i++) {
            let chain = config[i]

            let chainKey = `${key}/chain_${i + 1}`

            frames = this.generateFrames(textureKey, frame, prefix, chain)

            this.anims.create({
                key: chainKey,
                frames: frames,
                frameRate: 24,
                repeat: chain.repeat || 0,
            })

            chainKeys.push(chainKey)
        }

        return chainKeys
    }

    playAnims(frame) {
        this.playAnim(this.bodySprite, `penguin_body_${frame}`)
        this.playAnim(this.penguinSprite, `penguin_${frame}`)

        for (let sprite of this.equippedSprites) {
            let key = `${sprite.texture.key}_${frame}`

            this.playAnim(sprite, key)
        }
    }

    playAnim(sprite, key) {
        if (!this.checkAnim(key)) {
            return (sprite.visible = false)
        }

        sprite.visible = true
        sprite.anims.play(key)

        // Reset current chain queue
        sprite.chain()

        let anim = this.anims.get(key)

        if (anim.chainKeys) {
            this.playChain(sprite, anim)
        }
    }

    playChain(sprite, anim) {
        let keys = anim.chainKeys

        for (let key of keys) {
            if (this.checkAnim(key)) {
                sprite.chain(key)
            }
        }
    }

    checkAnim(key) {
        let animation = this.anims.get(key)
        return animation && animation.frames.length > 0
    }

    getSecretFrame(frame) {
        let equipped = this.items.flat
        let frameString = this.getSecretFrameString(frame, equipped)

        if (this.secretFramesCache[frameString]) {
            return this.secretFramesCache[frameString]
        }

        for (let secret of this.crumbs.secretFrames[frame]) {
            if (this.checkSecretFrames(equipped, secret)) {
                this.secretFramesCache[frameString] = secret.secret_frame

                return secret.secret_frame
            }
        }

        return frame
    }

    checkSecretFrames(equipped, secret) {
        for (let item in equipped) {
            let check = adjustRedemptionItem(equipped[item])
            let secretCheck = adjustRedemptionItem(secret[item])

            if (check != secretCheck) {
                return false
            }
        }

        return secret.secret_frame in this.crumbs.penguin && this.checkSecretFrameTextures(secret.secret_frame)
    }

    checkSecretFrameTextures(frame) {
        return this.textures.exists(`secret_frames/${frame}`)
    }

    getSecretFrameString(frame, equipped) {
        delete equipped['color']
        delete equipped['flag']
        delete equipped['photo']

        let slots = this.items.slots.filter((slot) => slot in equipped)

        let items = slots.map((slot) => adjustRedemptionItem(equipped[slot]))

        return `${frame},${items.toString()}`
    }

    /*========== Tweening ==========*/

    addMoveTween(path) {
        if (this.tween) {
            this.removeTween(false)
        }

        this.playFrame(this.direction + 8) // + 8 for walking frame id

        this.tween = this.room.tweens.add({
            targets: this,
            duration: path.duration,

            x: Math.round(path.target.x),
            y: Math.round(path.target.y),

            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete(),
        })

        this.prevX = this.x
        this.prevY = this.y
    }

    onMoveUpdate() {
        this.depth = this.y

        if (this.nameTag) {
            this.updateNameTag()
        }

        if (this.balloon) {
            this.updateBalloon()
        }

        let xoffset = this.x - this.prevX
        let yoffset = this.y - this.prevY

        if (this.pufflesprite && this.pufflesprite.animating) {
            this.pufflesprite.x -= xoffset
            this.pufflesprite.y -= yoffset
        }

        this.prevX = this.x
        this.prevY = this.y
    }

    onMoveComplete() {
        this.removeTween()

        if (this.afterMove) {
            this.afterMove()
            this.afterMove = null
        }
    }

    updateNameTag() {
        this.nameTag.x = this.x
        this.nameTag.y = this.y + 40
        this.nameTag.depth = this.depth + 2000
    }

    updateBalloon() {
        this.balloon.x = this.x
        this.balloon.y = this.y - 95
    }

    removeTween(playFrame = true) {
        if (!this.tween) {
            return
        }

        this.tween.remove()
        this.tween = null

        if (playFrame) {
            this.playFrame(this.direction)
        }
    }

    playPuffleAnim(anim) {
        if (!this.pufflesprite) return
        let x
        let y
        switch (anim) {
            case 'adopt':
                x = 0
                y = -60
                break
            case 'dive':
                x = 150
                y = 50
                break
            case 'eat':
                x = 60
                y = -80
                break
            case 'hydrant':
                x = 100
                y = 10
                break
            case 'maxed':
                x = 75
                y = -50
                break
            case 'jumpspin':
                x = 60
                y = -20
                break
            case 'jumpforward':
                x = 80
                y = -5
                break
            case 'roll':
                x = 110
                y = 0
                break
            case 'standonhead':
                x = 75
                y = -15
                break
            default:
                x = 60
                y = 0
        }
        this.pufflesprite.x = x
        this.pufflesprite.y = y
        this.pufflesprite.play(`puffle_${this.pufflesprite.color}_${anim}`)
        this.pufflesprite.animating = true
        this.pufflesprite.once('animationcomplete', () => {
            this.pufflesprite.animating = false
            this.pufflesprite.setTexture('puffle_' + this.pufflesprite.color, this.direction + '_1')
            this.pufflesprite.x = 60
            this.pufflesprite.y = 0
        })
    }
}
