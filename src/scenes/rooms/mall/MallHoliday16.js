import RuffleRoom from '@scenes/rooms/RuffleRoom'

/* START OF COMPILED CODE */

export default class MallHoliday16 extends RuffleRoom {
    constructor() {
        super('MallHoliday16')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 924, 504),
            costumes: () => this.interface.loadExternal('CostumeCatalog'),
            upescalator: () => this.escalateUp(),
            downescalator: () => this.escalateDown()
        }
        this.music = 1076
        /* END-USER-CTR-CODE */
    }

    // Write your code here

    _create() {}

    _preload() {
        this.load.pack('mall-pack', 'client/media/rooms/mall/mall-pack.json')
    }

    startRoom() {
        this.shell.RuffleManager.handleLoadRoom('RoomsMall-HolidayParty2016.swf')
        this.events.emit('create')
    }

    create() {
        super.create()
        setTimeout(() => {
            this.startRoom()
        }, 50)
    }

    escalateUp() {
        let penguin = this.shell.client.penguin
        penguin.x = 548
        penguin.y = 684
        penguin.updateNameTag()
        this.shell.client.blockMovement = true
        this.tweens.add({
            targets: penguin,
            x: 604,
            y: 360,
            duration: 11000,
            onComplete: () => {
                this.shell.client.blockMovement = false
            },
            onUpdate: () => {
                penguin.updateNameTag()
                if (Date.now() - this.lastTweenUpdate < 100) return
                this.airtower.sendXt('u#tsp', `${penguin.x}%${penguin.y}`)
                this.lastTweenUpdate = Date.now()
            }
        })
    }

    escalateDown() {
        let penguin = this.shell.client.penguin
        penguin.x = 928
        penguin.y = 364
        penguin.updateNameTag()
        this.shell.client.blockMovement = true
        this.tweens.add({
            targets: penguin,
            x: 992,
            y: 688,
            duration: 11000,
            onComplete: () => {
                this.shell.client.blockMovement = false
            },
            onUpdate: () => {
                penguin.updateNameTag()
                if (Date.now() - this.lastTweenUpdate < 100) return
                this.airtower.sendXt('u#tsp', `${penguin.x}%${penguin.y}`)
                this.lastTweenUpdate = Date.now()
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
