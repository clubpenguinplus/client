import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class BergHoliday16 extends RuffleRoom {
    constructor() {
        super('BergHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {}
        this.music = 1069
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('berg-pack', 'client/media/rooms/berg/berg-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsBerg-HolidayParty2016.swf')
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
