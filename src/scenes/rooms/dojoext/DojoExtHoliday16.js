import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class DojoExtHoliday16 extends RuffleRoom {
    constructor() {
        super('DojoExtHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            shack: () => this.triggerRoom(807, 750, 400),
            dojo: () => this.triggerRoom(320, 760, 800)
        }
        this.music = 404
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('dojoext-pack', 'client/media/rooms/dojoext/dojoext-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsDojoext-HolidayParty2016.swf')
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
