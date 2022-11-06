import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InputText extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject
        /** @type {boolean} */
        this.multiline = 0
        /** @type {boolean} */
        this.ispassword = false
        /** @type {number} */
        this.charlimit = 0
        /** @type {regex} */
        this.inputfilter
        /** @type {any} */
        this.entercallback = () => {}

        this.gameObject = gameObject
        gameObject['__InputText'] = this

        /* START-USER-CTR-CODE */
        this.gameObject.textContent = ''
        this.input = this.gameObject.scene.input
        this.shift = this.input.keyboard.addKey('SHIFT')
        this.ctrl = this.input.keyboard.addKey('CTRL')
        /* END-USER-CTR-CODE */
    }

    /** @returns {InputText} */
    static getComponent(gameObject) {
        return gameObject['__InputText']
    }

    /* START-USER-CODE */

    start() {
        this.lineWidth = this.gameObject.style.fixedWidth

        this.clickZone = this.gameObject.scene.add.rectangle(this.gameObject.x, this.gameObject.y, this.lineWidth, this.gameObject.height, 0x00ff00, localStorage.debugMode == 'true' ? 0.5 : 0)
        this.clickZone.setOrigin(this.gameObject.originX, this.gameObject.originY)

        // Set not clickable if invisible
        let visible = this.gameObject.visible
        let curObject = this.gameObject
        let insideCustomContainer = false
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer
            visible = visible && curObject.visible
            if (curObject.isCustomContainer) {
                insideCustomContainer = true
            }
        }

        this.clickZone.visible = visible

        this.clickZone.setInteractive({
            cursor: 'text',
            pixelPerfect: false,
        })
        this.clickZone.on('pointerup', (pointer) => this.onUp(pointer))
        this.clickZone.on('pointerover', () => this.onOver())
        this.clickZone.on('pointerout', () => this.onOut())
        this.input.keyboard.on('keydown', (event) => this.onKeyDown(event))

        this.indicator = this.gameObject.scene.add.rectangle(this.gameObject.x, this.gameObject.y, 1, this.gameObject.height, `0x${this.gameObject.style.color.substring(1, 7)}`, 1)
        this.indicator.setOrigin(this.gameObject.originX, this.gameObject.originY)
        this.indicator.visible = false
        if (this.gameObject.scene.inputTextContainer && !insideCustomContainer) {
            this.gameObject.scene.inputTextContainer.add(this.indicator)
            this.gameObject.scene.inputTextContainer.add(this.clickZone)
        } else if (this.gameObject.parentContainer) {
            this.gameObject.parentContainer.add(this.indicator)
            this.gameObject.parentContainer.add(this.clickZone)
        } else {
            this.gameObject.scene.add.existing(this.indicator)
            this.gameObject.scene.add.existing(this.clickZone)
        }
    }

    onUp(pointer) {
        // If there are multiple input fields, these listeners would be removed straight away by the other one, so we add them with a 0.1 second delay
        setTimeout(() => {
            if (pointer.button != 0 || this.isSelected) {
                return
            }

            if (!this.userClicked) {
                this.userClicked = true
                this.gameObject.text = ''
                this.gameObject.textContent = ''
                this.indicator.x = this.gameObject.x
            }

            let offset = 0
            let curObject = this.gameObject
            while (curObject.parentContainer) {
                curObject = curObject.parentContainer
                offset += curObject.x
            }
            let x = pointer.x - offset

            let charPoint = 0
            let charWidth = 0
            let prevWidth = 0
            let text = this.gameObject.text
            if (this.gameObject.style.fixedWidth != 0) {
                prevWidth = this.gameObject.style.fixedWidth
                this.gameObject.setStyle({fixedWidth: 0})
            }
            while (charPoint <= text.length && charWidth < x) {
                this.gameObject.text = text.substring(0, charPoint)
                charWidth = this.gameObject.width
                charPoint++
            }

            this.beforeCursor = this.gameObject.textContent
            this.afterCursor = text.substring(charPoint - 1, text.length)
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent

            if (this.gameObject.style.align == 'right') {
                this.indicator.x = this.gameObject.x - charWidth
            } else if (this.gameObject.style.align == 'center') {
                this.indicator.x = this.gameObject.x + charWidth / 2
            } else {
                this.indicator.x = this.gameObject.x + charWidth
            }

            this.gameObject.setStyle({fixedWidth: prevWidth})

            this.input.once('pointerup', (pointer) => this.onClick(pointer))
            this.isSelected = true
            this.gameObject.scene.shell.isInputActive = true
            this.flashIndicator()
        }, 100)
    }

    onClick(pointer) {
        if (!this.isOver) {
            this.isSelected = false
            this.gameObject.scene.shell.isInputActive = false
            this.indicator.visible = false
        } else {
            this.input.once('pointerup', (pointer) => this.onClick(pointer))

            let offset = 0
            let curObject = this.gameObject
            while (curObject.parentContainer) {
                curObject = curObject.parentContainer
                offset += curObject.x
            }
            let x = pointer.x - offset

            let charPoint = 0
            let charWidth = 0
            let prevWidth = 0
            let text = this.gameObject.textContent
            if (this.gameObject.style.fixedWidth != 0) {
                prevWidth = this.gameObject.style.fixedWidth
                this.gameObject.setStyle({fixedWidth: 0})
            }
            while (charPoint <= text.length && charWidth < x) {
                this.gameObject.textContent = text.substring(0, charPoint)
                charWidth = this.gameObject.width
                charPoint++
            }

            this.beforeCursor = this.gameObject.textContent
            this.afterCursor = text.substring(charPoint - 1, text.length)
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent

            if (this.gameObject.style.align == 'right') {
                this.indicator.x = this.gameObject.x - charWidth
            } else if (this.gameObject.style.align == 'center') {
                this.indicator.x = this.gameObject.x + charWidth / 2
            } else {
                this.indicator.x = this.gameObject.x + charWidth
            }

            this.gameObject.setStyle({fixedWidth: prevWidth})
        }
    }

    getCharWidth(char) {
        if (this.ispassword) char = char.replace(/./g, '*')

        let prevWidth = this.gameObject.style.fixedWidth
        let prevText = this.gameObject.text
        this.gameObject.setStyle({fixedWidth: 0})
        this.gameObject.text = char
        let width = this.gameObject.width
        this.gameObject.text = prevText
        this.gameObject.setStyle({fixedWidth: prevWidth})
        return width
    }

    onOver() {
        this.isOver = true
    }

    onOut() {
        this.isOver = false
    }

    async onKeyDown(event) {
        if (!this.isSelected) return
        if (event.key == 'Backspace') {
            if (this.ctrl.isDown) {
                let lastSpace = this.beforeCursor.lastIndexOf(' ')
                if (lastSpace == -1) {
                    this.beforeCursor = ''
                } else {
                    this.beforeCursor = this.beforeCursor.substring(0, lastSpace)
                }
            } else {
                this.beforeCursor = this.beforeCursor.slice(0, -1)
            }
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
        } else if (event.key == 'Delete') {
            if (this.ctrl.isDown) {
                let firstSpace = this.afterCursor.indexOf(' ')
                if (firstSpace == -1) {
                    this.afterCursor = ''
                } else {
                    this.afterCursor = this.afterCursor.substring(firstSpace + 1, this.afterCursor.length)
                }
            } else {
                this.afterCursor = this.afterCursor.slice(1)
            }
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
        } else if (event.key == 'Enter') {
            if (this.shift.isDown && this.multiline) {
                this.text += '\n'
                return
            }
            if (this.entercallback) {
                this.entercallback()
                this.isSelected = false
                this.gameObject.scene.shell.isInputActive = false
                this.indicator.visible = false
                return
            }
        } else if (event.key == 'ArrowLeft') {
            if (this.beforeCursor.length > 0) {
                if (this.ctrl.isDown) {
                    let lastSpace = this.beforeCursor.substring(0, this.beforeCursor.length - 1).lastIndexOf(' ')
                    if (lastSpace == -1) {
                        this.afterCursor = this.beforeCursor + this.afterCursor
                        this.beforeCursor = ''
                    } else {
                        this.afterCursor = this.beforeCursor.substring(lastSpace + 1, this.beforeCursor.length) + this.afterCursor
                        this.beforeCursor = this.beforeCursor.substring(0, lastSpace + 1)
                    }
                } else {
                    this.afterCursor = this.beforeCursor.slice(-1) + this.afterCursor
                    this.beforeCursor = this.beforeCursor.slice(0, -1)
                }
            }
        } else if (event.key == 'ArrowRight') {
            if (this.afterCursor.length > 0) {
                if (this.ctrl.isDown) {
                    let firstSpace = this.afterCursor.substring(0, this.afterCursor.length).indexOf(' ') + 1
                    if (firstSpace == 0) {
                        this.beforeCursor += this.afterCursor
                        this.afterCursor = ''
                    } else {
                        this.beforeCursor += this.afterCursor.substring(0, firstSpace)
                        this.afterCursor = this.afterCursor.substring(firstSpace, this.afterCursor.length)
                    }
                } else {
                    this.beforeCursor += this.afterCursor.slice(0, 1)
                    this.afterCursor = this.afterCursor.slice(1)
                }
            }
        } else if (this.ctrl.isDown) {
            if (event.key == 'v') {
                let text = await navigator.clipboard.readText()
                if (text) {
                    if (this.inputfilter && !this.inputfilter.test(text)) {
                        let textArray = []
                        for (let i = 0; i < text.length; i++) {
                            if (this.inputfilter.test(text[i])) {
                                textArray.push(text[i])
                            }
                        }
                        text = textArray.join('')
                    }
                    if (text.length > this.maxlength) text = text.substring(0, this.maxlength)
                    this.beforeCursor = text
                    this.afterCursor = ''
                    this.gameObject.textContent = this.beforeCursor + this.afterCursor
                    this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, '*') : this.gameObject.textContent
                }
            } else if (event.key == 'c') {
                navigator.clipboard.writeText(this.gameObject.textContent)
            }
        } else if (event.key.length != 1) {
            return
        } else if (this.charlimit > 0 && (this.gameObject.text + event.key).length > this.charlimit) {
            return
        } else {
            let key = event.key
            if (this.shift.isDown || event.getModifierState('CapsLock')) {
                key = key.toUpperCase()
            }
            if (this.inputfilter && !this.inputfilter.test(key)) {
                return
            }
            this.beforeCursor += key
            this.gameObject.textContent = this.beforeCursor + this.afterCursor
            if (this.ispassword) {
                this.gameObject.text += '*'
            } else {
                this.gameObject.text = this.beforeCursor + this.afterCursor
            }

            if (this.gameObject.width > this.lineWidth) {
                if (!this.multiline) {
                    this.gameObject.textContent = this.gameObject.textContent.slice(0, -1)
                    this.gameObject.text = this.gameObject.text.slice(0, -1)
                } else {
                    this.gameObject.textContent = this.gameObject.textContent.slice(0, -1) + '\n' + key
                    // there shouldn't be a password on a multiline input but just in case
                    if (this.ispassword) {
                        this.gameObject.text = this.gameObject.text.slice(0, -1) + '\n*'
                    } else {
                        this.gameObject.text = this.gameObject.text.slice(0, -1) + '\n' + key
                    }
                }
            }
        }

        if (this.gameObject.style.align == 'right') {
            this.indicator.x = this.gameObject.x - this.getCharWidth(this.beforeCursor)
        } else if (this.gameObject.style.align == 'center') {
            this.indicator.x = this.gameObject.x + this.getCharWidth(this.beforeCursor) / 2 - this.getCharWidth(this.afterCursor) / 2
        } else {
            this.indicator.x = this.gameObject.x + this.getCharWidth(this.beforeCursor)
        }
    }

    flashIndicator() {
        if (this.isSelected) {
            this.indicator.visible = true
            setTimeout(() => {
                this.indicator.visible = false
                setTimeout(() => this.flashIndicator(), 500)
            }, 500)
        }
    }

    clearText() {
        this.userClicked = true
        this.gameObject.text = ''
        this.gameObject.textContent = ''
        this.indicator.x = this.gameObject.x
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here