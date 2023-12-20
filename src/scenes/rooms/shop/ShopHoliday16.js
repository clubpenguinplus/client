import RuffleRoom from '@scenes/rooms/RuffleRoom'

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

    _create() {}

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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
