import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class CoffeeHoliday16 extends RuffleRoom {
    constructor() {
        super('CoffeeHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            town: () => this.triggerRoom(100, 510, 475),
            book: () => this.triggerRoom(111, 1000, 500),
            beans: () => this.triggerGame('beancounters', 908, 'ruffle'),
            smoothie: () => this.triggerGame('smoothie', 959, 'waflash')
        }
        this.music = 1070
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('coffee-pack', 'client/media/rooms/coffee/coffee-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsCoffee-HolidayParty2016.swf')
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
