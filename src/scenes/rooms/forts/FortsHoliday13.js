import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class FortsHoliday13 extends RuffleRoom {
    constructor() {
        super('FortsHoliday13')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            town: () => this.triggerRoom(100, 1240, 660),
            rink: () => this.triggerRoom(802, 780, 340),
            plaza: () => this.triggerRoom(300, 340, 660)
        }
        this.music = 1073
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('forts-pack', 'client/media/rooms/forts/forts-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsForts-HolidayParty2013.swf')
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
