import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class CoveHoliday16 extends RuffleRoom {
    constructor() {
        super('CoveHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            forest: () => this.triggerRoom(809, 1152, 720),
            waves: () => this.triggerGame('catchinwaves', 912, 'ruffle')
        }
        this.music = 1071
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('cove-pack', 'client/media/rooms/cove/cove-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsCove-HolidayParty2016.swf')
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
