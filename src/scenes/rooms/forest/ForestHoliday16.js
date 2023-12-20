import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class ForestHoliday16 extends RuffleRoom {
    constructor() {
        super('ForestHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1240, 660),
            shack: () => this.triggerRoom(807, 500, 800),
            cove: () => this.triggerRoom(810, 520, 416),
            lake: () => this.triggerRoom(814, 480, 300)
        }
        this.music = 1088
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('forest-pack', 'client/media/rooms/forest/forest-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsForest-HolidayParty2016.swf')
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
