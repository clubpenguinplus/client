import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class WildHoliday16 extends RuffleRoom {
    constructor() {
        super('WildHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            village: () => this.triggerRoom(200, 700, 514)
        }
        this.music = 897
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('wild-pack', 'client/media/rooms/wild/wild-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsPufflewild-HolidayParty2016.swf')
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
