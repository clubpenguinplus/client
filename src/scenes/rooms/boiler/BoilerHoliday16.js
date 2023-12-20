import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class BoilerHoliday16 extends RuffleRoom {
    constructor() {
        super('BoilerHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {}
        this.music = 667
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('boiler-pack', 'client/media/rooms/boiler/boiler-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsBoiler-HolidayParty2016.swf')
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
