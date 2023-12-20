import RuffleRoom from '@scenes/rooms/RuffleRoom'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class ShopHoliday16 extends RuffleRoom {
    constructor() {
        super('ShopHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            town: () => this.triggerRoom(100, 932, 560)
        }
        this.music = 1086
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {
        const catalog_en = this.add.sprite(1340, 1055, 'shop', 'catalog-en')
        catalog_en.setOrigin(0, 2)
        this.add.existing(catalog_en)

        const catalog_enButton = new Button(catalog_en)
        catalog_enButton.hoverCallback = () => this.shell.musicController.addSfx('book-bookopen')
        catalog_enButton.hoverOutCallback = () => this.shell.musicController.addSfx('book-bookclose')
        catalog_enButton.callback = () => this.showClothingCat()
        catalog_enButton.pixelPerfect = true
        catalog_enButton.isLocalised = true

        this.sort = [catalog_en]
    }

    _preload() {
        this.load.pack('shop-pack', 'client/media/rooms/shop/shop-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsShop-HolidayParty2016.swf')
        this.events.emit('create')
    }

    create() {
        super.create()
        setTimeout(() => {
            this.startRoom()
        }, 50)
    }

    showClothingCat() {
        this.interface.loadExternal('ClothingCatalog')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
