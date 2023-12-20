import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class BeaconHoliday16 extends RuffleRoom {
    constructor() {
        super('BeaconHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            light: () => this.triggerRoom(410, 454, 185, 5),
            jetpack: () => this.triggerGame('jetpackadventure', 906, 'ruffle')
        }
        this.music = 583
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('lightroof-pack', 'client/media/rooms/beacon/lightroof-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsBeacon-HolidayParty2016.swf')
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
