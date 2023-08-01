// You can write more code here

/* START OF COMPILED CODE */

export default class CarePopup extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // cntr
        const cntr = scene.add.container(61, -41)
        cntr.scaleX = 0.6
        cntr.scaleY = 0.6
        this.add(cntr)

        // dummy
        const dummy = scene.add.rectangle(13, 0, 128, 128)
        cntr.add(dummy)

        // bg
        const bg = scene.add.image(0, 0, 'main', 'puffle_care/bar_back')
        bg.visible = false
        cntr.add(bg)

        // bar
        const bar = scene.add.image(13, 0, 'main', 'puffle_care/bar')
        bar.visible = false
        cntr.add(bar)

        // icon
        const icon = scene.add.image(22, 0, 'main', 'puffle_care/food_icon')
        icon.scaleX = 1.66666666667
        icon.scaleY = 1.66666666667
        cntr.add(icon)

        // plus
        const plus = scene.add.text(-24, 0, '', {})
        plus.setOrigin(0.5, 0.5)
        plus.text = '+'
        plus.setStyle({color: '#B3E37A', fontFamily: 'cpBurbankSmall', fontSize: '45px', fontStyle: 'bold', stroke: '#3D531F', strokeThickness: 8})
        cntr.add(plus)

        this.dummy = dummy
        this.bg = bg
        this.bar = bar
        this.icon = icon
        this.plus = plus
        this.cntr = cntr

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    dummy
    /** @type {Phaser.GameObjects.Image} */
    bg
    /** @type {Phaser.GameObjects.Image} */
    bar
    /** @type {Phaser.GameObjects.Image} */
    icon
    /** @type {Phaser.GameObjects.Text} */
    plus
    /** @type {Phaser.GameObjects.Container} */
    cntr

    /* START-USER-CODE */

    showPopup(type = 'food', oldValue = 90, newValue = 100) {
        this.visible = true

        this.bar.visible = false
        this.bg.visible = false

        this.icon.setFrame(`puffle_care/${type}_icon`)
        this.icon.scale = 1.66666666667
        this.icon.x = 22
        this.plus.visible = true
        this.plus.alpha = 1
        this.plus.x = -24

        this.scene.tweens.add({
            targets: [this.icon, this.plus],
            y: -40,
            duration: 300,
            ease: 'Bounce',
            onComplete: () => {
                this.scene.tweens.add({
                    targets: this.icon,
                    scaleX: 1,
                    scaleY: 1,
                    x: -45,
                    y: 0,
                    duration: 500,
                    delay: 300,
                    ease: 'Linear',
                    onComplete: () => {
                        this.animateIncrease(type, oldValue, newValue)
                    }
                })

                this.scene.tweens.add({
                    targets: this.plus,
                    x: -60,
                    y: -16,
                    alpha: 0,
                    duration: 350,
                    delay: 300,
                    ease: 'Linear'
                })
            }
        })
    }

    animateIncrease(type, oldValue, newValue) {
        this.bar.visible = true
        this.bg.visible = true
        let oldPos = 13 + Math.floor((100 - oldValue) * -0.67)
        this.dummy.x = oldPos
        let newPos = 13 + Math.floor((100 - newValue) * -0.67)
        this.onTweenUpdate()
        this.scene.tweens.add({
            targets: this.dummy,
            x: newPos,
            duration: 300,
            ease: 'Linear',
            delay: 500,
            onUpdate: () => {
                this.onTweenUpdate()
            },
            onComplete: () => {
                this.onTweenComplete()
            }
        })
    }

    onTweenUpdate() {
        let pos = this.dummy.x
        if (pos < -45) {
            this.bar.setFrame('puffle_care/bar_shorter')
            pos = pos + 27
        } else if (pos < -18) {
            this.bar.setFrame('puffle_care/bar_short')
            pos = pos + 14
        } else {
            this.bar.setFrame('puffle_care/bar')
        }
        this.bar.x = pos
    }

    onTweenComplete() {
        this.onTweenUpdate()
        setTimeout(() => {
            this.fadeAway()
        }, 500)
    }

    fadeAway() {
        this.scene.tweens.add({
            targets: this,
            alpha: 0,
            duration: 200,
            delay: 500,
            ease: 'Linear',
            onComplete: () => {
                this.visible = false
                this.alpha = 1
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
