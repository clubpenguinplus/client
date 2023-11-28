import Page from './Page'
import {Button, SimpleButton, LocalisedString} from '@components/components'

import FurnitureItem from './FurnitureItem'

/* START OF COMPILED CODE */

export default class FurniturePage extends Page {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // pages
        const pages = scene.add.image(760, 480, 'furniturecatalog', 'pages')
        this.add(pages)

        // background
        const background = scene.add.image(760, 480, '2')
        this.add(background)

        // furnitureItemContainer
        const furnitureItemContainer = scene.add.container(0, 0)
        this.add(furnitureItemContainer)

        // middle
        const middle = scene.add.image(755, 474, 'furniturecatalog', 'middle')
        this.add(middle)

        // nextPage
        const nextPage = scene.add.image(1425, 809, 'furniturecatalog', 'nextPage-btn')
        this.add(nextPage)

        // coins
        const coins = scene.add.text(967, 937, '', {})
        coins.setOrigin(0.5, 0.5)
        coins.text = 'Your Coins: 99999999'
        coins.setStyle({color: '#4b2500ff', fontFamily: 'cpBurbankSmall', fontSize: '28px', fontStyle: 'bold italic', 'shadow.offsetX': 1, 'shadow.offsetY': 1, 'shadow.color': '#f1f2b5ff', 'shadow.fill': true})
        this.add(coins)

        // prevPage
        const prevPage = scene.add.image(86, 809, 'furniturecatalog', 'prevPage-btn')
        this.add(prevPage)

        // closebtn
        const closebtn = scene.add.image(1489, 25, 'main', 'white-x')
        closebtn.scaleX = 0.666667
        closebtn.scaleY = 0.666667
        this.add(closebtn)

        // nextPage (components)
        const nextPageButton = new Button(nextPage)
        nextPageButton.callback = () => this.nextPage()

        // prevPage (components)
        const prevPageButton = new Button(prevPage)
        prevPageButton.callback = () => this.prevPage()

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn)
        closebtnSimpleButton.callback = () => this.close()

        this.pages = pages
        this.background = background
        this.furnitureItemContainer = furnitureItemContainer
        this.middle = middle
        this.coins = coins

        /* START-USER-CTR-CODE */
        this.background.setMask(this.scene.mask)
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    pages
    /** @type {Phaser.GameObjects.Image} */
    background
    /** @type {Phaser.GameObjects.Container} */
    furnitureItemContainer
    /** @type {Phaser.GameObjects.Image} */
    middle
    /** @type {Phaser.GameObjects.Text} */
    coins

    /* START-USER-CODE */
    loadPage(background, leftFurnitureList, rightFurnitureList) {
        this.bgId = background
        this.shell.events.once(`textureLoaded:catalog/backgrounds/${background}`, () => this.showBackground())
        this.scene.iglooCatalogBackgroundLoader.loadBackground(background)

        this.leftFurnitureList = []
        this.rightFurnitureList = []

        this.nextLCoords = {
            quarter: [240, 292.5],
            half: [397.5, 292.5],
            twothirds: [397.5, 335],
            third: [397.5, 265]
        }

        leftFurnitureList.forEach((furniture, index) => {
            let furn = new FurnitureItem(this.scene, this.nextLCoords[furniture.size][0], this.nextLCoords[furniture.size][1])
            furn.init(furniture)
            this.furnitureItemContainer.add(furn)

            switch (furniture.size) {
                case 'quarter':
                    if (this.nextLCoords['quarter'][0] == 240) {
                        this.nextLCoords['quarter'][0] = 565
                    } else {
                        this.nextLCoords['quarter'][0] = 240
                        this.nextLCoords['quarter'][1] = 672.5
                    }

                    this.nextLCoords['half'][1] = 672.5
                    break

                case 'half':
                    this.nextLCoords['half'][1] = 672.5
                    this.nextLCoords['quarter'][0] = 240
                    this.nextLCoords['quarter'][1] = 672.5
                    break

                case 'third':
                    this.nextLCoords['twothirds'][1] = 665
                    break

                case 'twothirds':
                    this.nextLCoords['third'][1] = 715
            }
        })

        this.nextRCoords = {
            quarter: [965, 292.5],
            half: [1127.5, 292.5],
            twothirds: [1127.5, 335],
            third: [1127.5, 265]
        }

        rightFurnitureList.forEach((furniture, index) => {
            let furn = new FurnitureItem(this.scene, this.nextRCoords[furniture.size][0], this.nextRCoords[furniture.size][1])
            this.furnitureItemContainer.add(furn)
            furn.init(furniture)

            switch (furniture.size) {
                case 'quarter':
                    if (this.nextRCoords['quarter'][0] == 965) {
                        this.nextRCoords['quarter'][0] = 1290
                    } else {
                        this.nextRCoords['quarter'][0] = 965
                        this.nextRCoords['quarter'][1] = 672.5
                    }

                    this.nextRCoords['half'][1] = 672.5
                    break

                case 'half':
                    this.nextRCoords['half'][1] = 672.5
                    this.nextRCoords['quarter'][0] = 965
                    this.nextRCoords['quarter'][1] = 672.5
                    break

                case 'third':
                    this.nextRCoords['twothirds'][1] = 665
                    break

                case 'twothirds':
                    this.nextRCoords['third'][1] = 715
            }
        })
    }

    showBackground() {
        this.background.setTexture(`catalog/backgrounds/${this.bgId}`)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
