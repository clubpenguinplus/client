import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class PizzaHoliday16 extends RuffleRoom {
    constructor() {
        super('PizzaHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1200, 500),
            pizzatron: () => this.triggerGame('pizzatron', 910, 'ruffle')
        }
        this.music = 1081
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('pizza-pack', 'client/media/rooms/pizza/pizza-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsPizza-HolidayParty2016.swf')
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
