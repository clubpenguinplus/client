import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class ShackHoliday16 extends RuffleRoom {
    constructor() {
        super('ShackHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forest: () => this.triggerRoom(809, 1200, 400),
            skate: () => this.triggerRoom(435, 277, 344),
            mine: () => this.triggerRoom(808, 760, 480),
            school: () => this.triggerRoom(122, 1320, 760),
            dojo: () => this.triggerRoom(321, 760, 700),
            volleyone: null,
            volleytwo: null
        }
        this.music = 1090
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('shack-pack', 'client/media/rooms/shack/shack-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsShack-HolidayParty2016.swf')
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
