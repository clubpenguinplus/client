import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class RinkHoliday16 extends RuffleRoom {
    constructor() {
        super('RinkHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forts: () => this.triggerRoom(801, 560, 400),
            school: () => this.triggerRoom(122, 220, 760)
        }
        this.music = 592
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('rink-pack', 'client/media/rooms/rink/rink-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsRink-HolidayParty2016.swf')
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
