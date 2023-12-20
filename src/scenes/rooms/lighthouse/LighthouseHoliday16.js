import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class LighthouseHoliday16 extends RuffleRoom {
    constructor() {
        super('LighthouseHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            beach: () => this.triggerRoom(400, 510, 450),
            beacon: () => this.triggerRoom(411, 273, 717),
            drums: null
        }
        this.music = 1154
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('lighthouse-pack', 'client/media/rooms/lighthouse/lighthouse-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsLight-HolidayParty2016.swf')
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
