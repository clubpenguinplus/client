import GameScene from '@scenes/games/GameScene'
import CardAnimLoader from '@engine/loaders/CardAnimLoader'

import {Interactive} from '@components/components'
import {parse} from 'crypto-js/enc-utf8'

/* START OF COMPILED CODE */

export default class Card extends GameScene {
    constructor() {
        super('Card')

        /* START-USER-CTR-CODE */
        this.music = 1
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('card-pack', 'client/media/games/card/card-pack.json')
    }

    /** @returns {void} */
    _create() {
        // background
        this.add.image(760, 480, 'game', 'background')

        // rightPenguinContainer
        const rightPenguinContainer = this.add.container(0, 0)
        rightPenguinContainer.scaleX = 2
        rightPenguinContainer.scaleY = 2

        // leftPenguinContainer
        const leftPenguinContainer = this.add.container(1520, 0)
        leftPenguinContainer.scaleX = -2
        leftPenguinContainer.scaleY = 2

        // dock
        this.add.image(760, 797, 'game', 'dock')

        // fg
        this.add.image(760, 480, 'game', 'fg')

        // timer0001
        this.add.image(760, 656, 'game', 'timer0001')

        // help
        this.add.image(760, -204, 'game', 'help')

        // lists
        const sort = []

        this.rightPenguinContainer = rightPenguinContainer
        this.leftPenguinContainer = leftPenguinContainer
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Container} */
    rightPenguinContainer
    /** @type {Phaser.GameObjects.Container} */
    leftPenguinContainer
    /** @type {Array<any>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
        this.cardAnimLoader = new CardAnimLoader(this)
        this.loadAnimation('ambient', false)
    }

    loadAnimation(anim, isBattle = true) {
        if (isBattle) {
            return this.loadBattleAnimation(anim)
        }

        if (!this.textures.exists(`battles/${anim}`)) {
            this.shell.events.once(`textureLoaded:battles/${anim}`, () => {
                this.generateAnimation(anim)
                this.addAnims(anim, false)
            })
            this.cardAnimLoader.loadAnimation(anim)
        } else {
            this.generateAnimation(anim)
            this.addAnims(anim, false)
        }
    }

    loadBattleAnimation(anim) {
        let attackLoaded = this.textures.exists(`battles/${anim}_attack`)
        let reactLoaded = this.textures.exists(`battles/${anim}_react`)
        if (attackLoaded && reactLoaded) {
            this.addAnims(anim, true)
            return
        }

        if (!attackLoaded) {
            this.shell.events.once(`textureLoaded:battles/${anim}_attack`, () => {
                attackLoaded = true
                this.generateAnimation(`${anim}_attack`)
                if (reactLoaded) this.addAnims(anim, true)
            })
            this.cardAnimLoader.loadAnimation(`${anim}_attack`)
        }

        if (!reactLoaded) {
            this.shell.events.once(`textureLoaded:battles/${anim}_react`, () => {
                reactLoaded = true
                this.generateAnimation(`${anim}_react`)
                if (attackLoaded) this.addAnims(anim, true)
            })
            this.cardAnimLoader.loadAnimation(`${anim}_react`)
        }
    }

    generateAnimation(anim) {
        const data = this.cache.json.get(`battles/${anim}_data`)
        const frameData = this.textures.get(`battles/${anim}`).frames
        let overallLastFrame = 1
        for (let key in data) {
            let lastFrame = 1
            for (let frame in frameData) {
                if (frame.startsWith(`${key}_`)) {
                    let fS = frame.split('_')
                    if (parseInt(fS[fS.length - 1]) > lastFrame) {
                        lastFrame = parseInt(fS[fS.length - 1])
                    }
                }
            }
            if (lastFrame > overallLastFrame) {
                console.log(lastFrame)
                overallLastFrame = lastFrame
            }
            let frames = Phaser.Utils.Array.NumberArray(1, lastFrame)
            frames = frames.map((frame) => {
                let frameString = frame.toString()
                while (frameString.length < 4) {
                    frameString = '0' + frameString
                }
                return {
                    key: `battles/${anim}`,
                    frame: `${key}_${frameString}`,
                }
            })
            this.anims.create({
                key: `${anim}_${key}`,
                frames: frames,
                frameRate: 24,
                repeat: anim == 'ambient' ? -1 : 0,
            })
        }
    }

    addAnims(anim, isBattle = true, penguinAttacking = 'left') {
        if (this.leftPenguin) {
            this.leftPenguin.forEach((anim) => {
                anim.destroy()
            })
        }
        this.leftPenguin = []

        if (this.rightPenguin) {
            this.rightPenguin.forEach((anim) => {
                anim.destroy()
            })
        }
        this.rightPenguin = []

        if (isBattle) {
            const attackData = this.cache.json.get(`battles/${anim}_attack_data`)
            const reactData = this.cache.json.get(`battles/${anim}_react_data`)
            if (penguinAttacking == 'left') {
                for (let key in attackData) {
                    let sprite = this.add.sprite(attackData[key].x, attackData[key].y, `battles/${anim}_attack`, `${key}_0001`)
                    this.leftPenguinContainer.add(sprite)
                    sprite.play(`${anim}_attack_${key}`)
                    this.leftPenguin.push(sprite)
                }
                for (let key in reactData) {
                    let sprite = this.add.sprite(reactData[key].x, reactData[key].y, `battles/${anim}_react`, `${key}_0001`)
                    this.rightPenguinContainer.add(sprite)
                    sprite.play(`${anim}_react_${key}`)
                    this.rightPenguin.push(sprite)
                }
            } else {
                for (let key in attackData) {
                    let sprite = this.add.sprite(attackData[key].x, attackData[key].y, `battles/${anim}_attack`, `${key}_0001`)
                    this.rightPenguinContainer.add(sprite)
                    sprite.play(`${anim}_attack_${key}`)
                    this.rightPenguin.push(sprite)
                }
                for (let key in reactData) {
                    let sprite = this.add.sprite(reactData[key].x, reactData[key].y, `battles/${anim}_react`, `${key}_0001`)
                    this.leftPenguinContainer.add(sprite)
                    sprite.play(`${anim}_react_${key}`)
                    this.leftPenguin.push(sprite)
                }
            }
        } else {
            const data = this.cache.json.get(`battles/${anim}_data`)
            for (let key in data) {
                let leftSprite = this.add.sprite(data[key].x, data[key].y, `battles/${anim}`, `${key}_0001`)
                this.leftPenguinContainer.add(leftSprite)
                leftSprite.play(`${anim}_${key}`)
                this.leftPenguin.push(leftSprite)

                let rightSprite = this.add.sprite(data[key].x, data[key].y, `battles/${anim}`, `${key}_0001`)
                this.rightPenguinContainer.add(rightSprite)
                rightSprite.play(`${anim}_${key}`)
                this.rightPenguin.push(rightSprite)
            }
        }

        this.leftPenguin.reverse()
        for (let i = 0; i < this.leftPenguin.length; i++) {
            this.leftPenguinContainer.bringToTop(this.leftPenguin[i])
        }

        this.rightPenguin.reverse()
        for (let i = 0; i < this.rightPenguin.length; i++) {
            this.rightPenguinContainer.bringToTop(this.rightPenguin[i])
        }

        this.leftPenguin[0].on('animationcomplete', () => {
            this.addAnims('ambient', false)
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
