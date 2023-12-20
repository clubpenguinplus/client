import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class SchoolHoliday16 extends RuffleRoom {
    constructor() {
        super('SchoolHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            shack: () => this.triggerRoom(807, 620, 560),
            rink: () => this.triggerRoom(802, 1220, 290),
            locker1: null,
            locker2: null,
            locker3: null,
            locker4: null,
            locker5: null,
            locker6: null,
            locker7: null,
            locker8: null,
            locker9: null,
            locker10: null,
            cafe: null
        }
        this.music = 1085
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('school-pack', 'client/media/rooms/school/school-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsSchool-HolidayParty2016.swf')
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
