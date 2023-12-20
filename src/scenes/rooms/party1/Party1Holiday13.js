import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class Party1Holiday13 extends RuffleRoom {
    constructor() {
        super('Party1Holiday13')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {}
        this.music = 315
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsParty1-HolidayParty2013.swf')
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
