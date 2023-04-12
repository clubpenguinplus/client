import BaseContainer from '@scenes/base/BaseContainer'
import PathEngine from '@engine/world/penguin/pathfinding/PathEngine'

export default class IglooPuffle extends BaseContainer {
    constructor(scene, puffle) {
        super(scene, 0, 0)

        let puffleData = puffle.split('|')
        this.id = puffleData[0]
        this.species = puffleData[1]
        this.name = puffleData[2]
        this.food = puffleData[3]
        this.play = puffleData[4]
        this.rest = puffleData[5]
        this.clean = puffleData[6]

        this.scene = scene

        this.scene.puffles[this.id] = this
        this.scene.add.existing(this)

        this.loadPuffle()
    }

    get room() {
        return this.scene
    }

    get pos() {
        return {x: this.x, y: this.y}
    }

    get x() {
        return this.xPos || this.scene.penguins[this.scene.id].x + 60
    }

    get y() {
        return this.yPos || this.scene.penguins[this.scene.id].y - 20
    }

    set x(x) {
        this.xPos = x
    }

    set y(y) {
        this.yPos = y
    }

    generateRandomPosition() {
        let x = Phaser.Math.Between(0, 1520)
        let y = Phaser.Math.Between(0, 800)

        while (!this.scene.matter.containsPoint(this.scene.pet, x, y)) {
            x = Phaser.Math.Between(0, 1520)
            y = Phaser.Math.Between(0, 800)
        }

        return {x, y}
    }

    loadPuffle() {
        if (this.scene.penguins[this.scene.id] && this.scene.penguins[this.scene.id].walking == this.id) return

        if (!this.shell.textures.exists(`puffles/igloo/${this.species}`)) {
            this.shell.events.once(`textureLoaded:puffles/igloo/${this.species}`, () => {
                this.spawnPuffle()
            })
            this.scene.puffleLoader.loadPuffle('igloo', this.species)
        } else {
            this.spawnPuffle()
        }
    }

    spawnPuffle() {
        if (this.scene.penguins[this.scene.id] && this.scene.penguins[this.scene.id].walking == this.id) return

        Object.assign(this, this.generateRandomPosition())
        this.depth = this.y

        this.sprite = this.scene.add.sprite(0, 0, `puffles/igloo/${this.species}`, '1_1')
        this.sprite.setOrigin(0.5, 0.45)

        this.add(this.sprite)

        if (this.shell.client.id != this.scene.id) return

        this.sprite.setInteractive({pixelPerfect: true, useHandCursor: true})
        this.sprite.isButton = true
        this.sprite.on('pointerdown', () => {
            this.interface.main.puffleCare.showPuffle(this)
        })

        setTimeout(() => {
            this.move()
        }, Phaser.Math.Between(20000, 30000))
    }

    removePuffle() {
        this.sprite.destroy()
        this.sprite = null
        this.xPos = null
        this.yPos = null
    }

    move() {
        if (!this.sprite) return

        if (this.animating)
            return setTimeout(() => {
                this.move()
            }, Phaser.Math.Between(20000, 30000))

        if (this.interface.main.puffleCare.args == this)
            return setTimeout(() => {
                this.move()
            }, Phaser.Math.Between(20000, 30000))

        let pos = this.generateRandomPosition()
        let path = PathEngine.getPath(this, pos)

        if (!path) {
            return this.move()
        }

        if (this.tween) {
            this.removeTween(false)
        }

        let angle = PathEngine.getAngle(this.pos, {x: path.target.x, y: path.target.y})
        let direction = PathEngine.getDirection(angle)
        this.playFrame(direction + 8)

        this.animating = true
        this.tween = this.scene.tweens.add({
            targets: this,
            duration: path.duration,

            x: Math.round(path.target.x),
            y: Math.round(path.target.y),

            onUpdate: () => {
                this.depth = this.y
            },
            onComplete: () => {
                this.playFrame(1)
                this.animating = false
            },
        })

        this.prevX = this.x
        this.prevY = this.y

        setTimeout(() => {
            this.move()
        }, Phaser.Math.Between(20000, 30000))
    }

    removeTween(destroy = true) {
        if (this.tween) {
            this.tween.stop()
            this.tween = null
        }

        if (destroy) {
            this.removePuffle()
        }
    }

    generateAnimation(frame, repeat = -1) {
        let atlasFrames = this.shell.textures.list[`puffles/igloo/${this.species}`].getFrameNames()
        let frames = atlasFrames.filter((f) => f.split('_')[0] == frame).sort((a, b) => a.split('_')[1] - b.split('_')[1])

        if (frames.length == 0) return

        this.sprite.anims.create({
            key: `puffle/igloo/${this.species}/${frame}`,
            frames: frames.map((f) => ({key: `puffles/igloo/${this.species}`, frame: f})),
            frameRate: 24,
            repeat: repeat,
        })
    }

    playFrame(frame, onComplete = () => {}, repeat) {
        if (!this.sprite.anims.exists(`puffle/igloo/${this.species}/${frame}`)) {
            this.generateAnimation(frame, repeat)
        }

        this.sprite.anims.play(`puffle/igloo/${this.species}/${frame}`)
        this.sprite.once('animationcomplete', onComplete)
    }

    playAnimation(frame) {
        // 25: sleep, 26: yawn, 27: run with ball, 28: ball on head, 29: gum, 32: hungry, 33: bored, 35: jump on ball
        this.animating = true
        this.playFrame(
            frame,
            () => {
                this.animating = false
            },
            0
        )
    }
}
