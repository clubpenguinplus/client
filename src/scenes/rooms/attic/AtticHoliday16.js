import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class AtticHoliday16 extends RuffleRoom {
    constructor() {
        super('AtticHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {}
        this.music = 884
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('attic-pack', 'client/media/rooms/attic/attic-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsPlaza-HolidayParty2016.swf')
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
