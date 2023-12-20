import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class BeachHoliday16 extends RuffleRoom {
    constructor() {
        super('BeachHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 400, 320),
            village: () => this.triggerRoom(200, 1300, 760),
            light: () => this.triggerRoom(410, 456, 492)
            // migrator: () => this.triggerRoom(420, 900, 600)
        }
        this.music = 1068
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('beach-pack', 'client/media/rooms/beach/beach-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsBeach-HolidayParty2016.swf')
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
