import RoomScene from '@scenes/rooms/RoomScene'

export default class SoloRoom extends RoomScene {
    constructor(key) {
        super(key)
    }

    create() {
        super.create()

        this.interface.hideLoading()
        this.interface.showInterface()
        this.shell.room = this
        this.airtower.sendXt('j#jsr')

        this.addPenguins()
    }

    addPenguins() {
        this.addPenguin()
    }

    addPenguin() {
        if (this.penguins && this.penguins.length > 0) return

        this.penguins = {}
        this.penguins[this.id] = this.shell.penguinFactory.createPenguin(this.shell.client.userInfo, this)
        this.add.existing(this.penguins[this.id])
    }
}
