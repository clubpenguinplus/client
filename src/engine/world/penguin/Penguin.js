import BaseContainer from '@scenes/base/BaseContainer'

import ItemLoader from './loader/ItemLoader'
import PathEngine from './pathfinding/PathEngine'
import PenguinItems from './PenguinItems'
import SecretFramesLoader from '@engine/loaders/SecretFramesLoader'

import adjustRedemptionItem from './frames/adjustRedemptionItem'

export default class Penguin extends BaseContainer {
    constructor(user, room, penguinLoader, puffleLoader) {
        if (!user.x || user.x == NaN) user.x = 0
        if (!user.y || user.y == NaN) user.y = 0
        super(room, user.x, user.y)

        this.userInfo = user

        // Assign user attributes
        Object.assign(this, user)
        this.room = room

        this.puffleLoader = puffleLoader

        if (this.walking) this.getPuffleSpecies()
        if (this.puffle) this.loadPuffle()

        this.items = new PenguinItems(this)
        this.itemLoader = new ItemLoader(this)
        this.secretFramesLoader = new SecretFramesLoader(this.room)

        this.bodySprite
        this.penguinSprite

        PathEngine.setStartPos(this)
        this.depth = this.y
        this.tween
        this.direction = 1

        this.nameTag = penguinLoader.addName(this)
        this.nameTag.visible = !this.shell.settings.hn

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

        this.visible = !this.shell.settings.ho || this.id == this.shell.client.id
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
        return this.room.anims || {}
    }

    get secretFramesCache() {
        return this.shell.secretFramesCache
    }

    get scene() {
        return this.room
    }

    /**
     * this.body is a Phaser property and will result in an error on destruction,
     * so it must be deleted manually first.
     */
    onDestroy() {
        delete this.body
        this.puffleSprite = null
    }

    load() {
        this.penguinLoader.loadPenguin(this)
        this.itemLoader.loadItems()

        this.room.add.existing(this)
    }

    update(item, slot) {
        if (item == 0) {
            this.itemLoader.removeItem(slot)
            if (this.playerCard.visible && this.playerCard.id == this.id) this.paperDollLoader.removeItem(slot)
            this.items.setItem(item, slot)
            let frame = [25, 26].includes(this.frame) ? this.getSecretFrame(this.frame) : this.frame
            if (frame != this.specificFrame) this.playFrame(this.frame)
            return
        }

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

        let frame = [25, 26].includes(this.frame) ? this.getSecretFrame(this.frame) : this.frame
        if (frame != this.frame) this.playFrame(this.frame)
    }

    move(x, y) {
        let path = PathEngine.getPath(this, {x: x, y: y})
        if (path) this.addMoveTween(path)
    }

    setPos(x, y) {
        this.x = x
        this.y = y
    }

    getPuffleSpecies() {
        if (this.walking) this.airtower.sendXt('p#pgs', `${this.walking}%${this.id}`)
    }

    loadPuffle() {
        if (!this.puffle) return

        // Pet shop floor
        let parent = this.crumbs.puffles[this.puffle].parent
        let color = this.crumbs.puffles[parent].name.toLowerCase()
        if (this.room.floorpuffle) {
            this.room.floorpuffle.setFrame(`floorpuffle_${color}`)
        }
        this.interface.main.setPuffleColor(color)

        if (this.shell.textures.exists(`puffles/walk/${this.puffle}`)) return this.addPuffleSprite()

        this.shell.events.addListener(`textureLoaded:puffles/walk/${this.puffle}`, () => this.addPuffleSprite())
        this.puffleLoader.loadPuffle('walk', this.puffle)
    }

    addPuffleSprite() {
        if (this.puffleSprite) {
            this.puffleSprite.setTexture(`puffles/walk/${this.puffle}`, this.bodySprite.frame.name.split('/')[1])
        } else {
            this.puffleSprite = this.room.add.sprite(0, 0, `puffles/walk/${this.puffle}`, this.bodySprite.frame.name.split('/')[1])
            this.add(this.puffleSprite)
        }

        if (this.room.isIgloo) {
            this.puffleSprite.setInteractive({useHandCursor: true, pixelPerfect: true})
            this.puffleSprite.on('pointerdown', () => this.interface.main.puffleCare.showPuffle(this.room.puffles[this.walking]))
            this.puffleSprite.isButton = true
        }
    }

    removePuffle() {
        this.puffle = 0
        if (this.puffleSprite) this.remove(this.puffleSprite, true)
        this.puffleSprite = null
    }

    /*========== Animations ==========*/

    playFrame(_frame, set = true) {
        _frame = parseInt(_frame)
        // Moving penguin can only update when frames are movement frames (9-16)
        if (this.isTweening && (_frame < 9 || _frame > 16)) {
            return
        }

        // Get correct frame id
        let frame = [25, 26].includes(_frame) ? this.getSecretFrame(_frame) : _frame

        if (frame != _frame && !this.checkSecretFrameTextures(frame)) {
            this.shell.events.on(`textureLoaded:secret_frames/${frame}`, () => this.playFrame(_frame, set))
            this.secretFramesLoader.loadFrame(frame)
            frame = _frame
        }

        if (this.room.miningZone && this.isClient && frame == 36) {
            this.room.isMiningSpot(this.x, this.y)
        } else {
            this.room.cancelMining()
        }

        this.createAnims(frame, frame != _frame)

        this.playAnims(frame)

        this.room.triggerAction(frame)

        // Frames that aren't set get set to 1
        this.frame = set ? _frame : 1
        this.specificFrame = frame
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
            return console.error(`[Penguin] Animation ${frame} does not exist`)
        }

        if (checkItem && animation.items) {
            animation = this.checkAnimItems(animation, textureKey)
        }

        let frames = this.generateFrames(textureKey, frame, prefix, animation)

        let anim = this.anims.create({
            key: key,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0
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
            frames: frames
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
                repeat: chain.repeat || 0
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

        if (sprite != this.puffleSprite) sprite.visible = true
        if (!sprite.anims) return
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

        for (let secret of this.crumbs.secret_frames[frame]) {
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

        return secret.secret_frame in this.crumbs.penguin
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

    playPuffleAnim(animation) {
        if (!this.anims.exists(`puffle_${animation}_${this.puffle}`)) this.generatePuffleAnim(animation)

        let pAnimSprite = this.room.add.sprite(this.x, this.y, `puffles/${animation}/${this.puffle}`)
        pAnimSprite.depth = 9999
        pAnimSprite.setOrigin(this.crumbs.puffles[this.puffle].anims[animation].originX, this.crumbs.puffles[this.puffle].anims[animation].originY)
        this.puffleSprite.visible = false
        pAnimSprite.play(`puffle_${animation}_${this.puffle}`)
        this.playFrame(8)
        this.airtower.sendXt('u#sf', `${false}%8`)
        this.puffleIsAnimating = true
        pAnimSprite.on('animationcomplete', () => {
            pAnimSprite.destroy()
            this.puffleSprite.visible = true
            this.puffleIsAnimating = false
            this.playFrame(this.direction)
        })
    }

    generatePuffleAnim(animation) {
        let frameTotal = this.shell.textures.list[`puffles/${animation}/${this.puffle}`].frameTotal - 1
        let frameArray = Phaser.Utils.Array.NumberArray(1, frameTotal).map((frame) => {
            frame = frame.toString()
            while (frame.length < 4) frame = '0' + frame
            return frame
        })
        this.anims.create({
            key: `puffle_${animation}_${this.puffle}`,
            frames: this.anims.generateFrameNames(`puffles/${animation}/${this.puffle}`, {frames: frameArray}),
            frameRate: 24,
            repeat: 0
        })
    }

    animatePuffle(animation) {
        if (!this.puffleSprite) return

        if (this.shell.textures.exists(`puffles/${animation}/${this.puffle}`)) return this.playPuffleAnim(animation)

        this.shell.events.addListener(`textureLoaded:puffles/${animation}/${this.puffle}`, () => this.playPuffleAnim(animation))
        this.puffleLoader.loadPuffle(animation, this.puffle)
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
            onComplete: () => this.onMoveComplete()
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

        this.scene.tweens.remove(this.tween)
        this.tween = null

        if (playFrame) {
            this.playFrame(this.direction)
        }
    }

    wearingItem(item) {
        let items = this.items.flat
        for (var x in items) {
            if (items[x] == item) {
                return true
            }
        }
        return false
    }

    remove(child, destroy) {
        super.remove(child, destroy)
    }
}
