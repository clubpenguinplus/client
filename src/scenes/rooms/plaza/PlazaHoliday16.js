import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class PlazaHoliday16 extends RuffleRoom {
    constructor() {
        super('PlazaHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            pizza: () => this.triggerRoom(330, 760, 330),
            mall: () => this.triggerRoom(340, 250, 700),
            pet: () => this.triggerRoom(310, 828, 520),
            cave: () => {
                this.shell.client.stampEarned(10)
                this.triggerRoom(806, 1242, 685)
            },
            forts: () => this.triggerRoom(801, 1320, 460),
            forest: () => this.triggerRoom(809, 150, 320),
            hotel: () => this.triggerRoom(430, 800, 350),
            park: () => this.interface.prompt.showError(this.shell.crumbs.getError(54))
        }
        this.music = 1089
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('plaza-pack', 'client/media/rooms/plaza/plaza-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsPlaza-HolidayParty2016.swf')
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
