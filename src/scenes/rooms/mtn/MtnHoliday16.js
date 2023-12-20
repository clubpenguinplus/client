import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class MtnHoliday16 extends RuffleRoom {
    constructor() {
        super('MtnHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            village: () => this.triggerRoom(200, 480, 560),
            waddle100: () => this.triggerWaddle(100),
            waddle101: () => this.triggerWaddle(101),
            waddle102: () => this.triggerWaddle(102),
            waddle103: () => this.triggerWaddle(103)
        }
        this.music = 1089
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('mtn-pack', 'client/media/rooms/mtn/mtn-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsMtn-HolidayParty2016.swf')
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
