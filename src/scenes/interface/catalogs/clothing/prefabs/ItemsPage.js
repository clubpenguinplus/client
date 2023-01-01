import Page from './Page'
import Item from './Item'
import {SimpleButton, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class ItemsPage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // background
        const background = scene.add.image(760, 455.5, 'constant', 'clothingPage0001')
        this.add(background)

        // header
        const header = scene.add.text(227, 79, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'Clothing items for everyone'
        header.setStyle({fixedWidth: 270, fontFamily: 'Burbank Small', fontSize: '25px', fontStyle: 'bold italic'})
        header.setWordWrapWidth(270)
        this.add(header)

        // closebtn
        const closebtn = scene.add.image(1441, 37, 'constant', 'closebtn')
        this.add(closebtn)

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.background = background
        this.header = header

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Text} */
    header

    /* START-USER-CODE */

    loadFromJSON(json, pageType) {
        this.background.setFrame(`clothingPage${this.fourDigits(json.background)}`)

        const leftPostitions = this.calculateLeftPositions(json.leftItems.length)
        json.leftItems.forEach((item, index) => {
            const itemObject = new Item(this.scene, 0, 0, item)
            itemObject.x = leftPostitions[index].x
            itemObject.y = leftPostitions[index].y
            this.add(itemObject)
        })

        const rightPostitions = this.calculateRightPositions(json.rightItems.length)
        json.rightItems.forEach((item, index) => {
            const itemObject = new Item(this.scene, 0, 0, item)
            itemObject.x = rightPostitions[index].x
            itemObject.y = rightPostitions[index].y
            this.add(itemObject)
        })

        this.bringToTop(this.prevPageBtn)
        this.bringToTop(this.nextPageBtn)

        this.header.text = this.scene.crumbs.getString(`clothing-${pageType}-header`)
    }

    fourDigits(number) {
        number = number.toString()
        while (number.length < 4) {
            number = '0' + number
        }
        return number
    }

    calculateLeftPositions(itemsCount) {
        const minHeight = 124
        const maxHeight = 824
        const minWidth = 84
        const maxWidth = 752

        return this.calculatePosition(itemsCount, minHeight, maxHeight, minWidth, maxWidth)
    }

    calculateRightPositions(itemsCount) {
        const minHeight = 35
        const maxHeight = 824
        const minWidth = 774
        const maxWidth = 1438

        return this.calculatePosition(itemsCount, minHeight, maxHeight, minWidth, maxWidth)
    }

    calculatePosition(itemsCount, minHeight, maxHeight, minWidth, maxWidth) {
        let maxColumns, maxRows

        if (itemsCount <= 3) {
            maxColumns = 1
            maxRows = 3
        } else if (itemsCount <= 6) {
            maxColumns = 2
            maxRows = 3
        } else if (itemsCount <= 9) {
            maxColumns = 3
            maxRows = 3
        }

        const scolumns = Math.min(itemsCount, maxColumns)
        let columns = scolumns
        let rows = Math.min(Math.ceil(itemsCount / columns), maxRows)

        let positions = []

        while (itemsCount > 0) {
            const row = Math.floor(positions.length / scolumns) + 1
            const column = (positions.length % columns) + 1

            if (column + itemsCount - 1 < columns) {
                columns = column + itemsCount - 1
            }

            let x = ((maxWidth - minWidth) / (columns + 1)) * column + minWidth

            let y = ((maxHeight - minHeight) / (rows + 1)) * row + minHeight

            switch (rows) {
                case 2:
                    y += 60 * row - 90
                    break
                case 3:
                    y += 45 * row - 90
                    break
            }

            switch (columns) {
                case 2:
                    x += 35 * column - 52.5
                    break
                case 3:
                    x += 35 * column - 70
                    break
            }

            positions.push({x, y})
            itemsCount--
        }

        return positions
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
