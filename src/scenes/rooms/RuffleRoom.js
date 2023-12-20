import RoomScene from '@scenes/rooms/RoomScene'

export default class RuffleRoom extends RoomScene {
    constructor(key) {
        super(key)
        this.isEmu = true
    }

    create() {
        super.create()

        this.shell.room = this

        let rect = new Phaser.GameObjects.Rectangle(this, 0, 0, 1520, 960, 0x000000, 0)
        rect.setOrigin(0, 0)
        this.add.existing(rect)
        rect.setInteractive()
        rect.on('pointerdown', this.onPointerDown, this)
        rect.on('pointerup', this.onPointerUp, this)
        rect.on('pointermove', this.onPointerMove, this)
    }

    hideLoading() {
        this.interface.hideLoading()
        this.interface.showInterface()
    }

    onPointerDown(pointer) {
        let ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        let mouseEvent = new PointerEvent('pointerdown', pointer.event)
        ruffleplayer.dispatchEvent(mouseEvent)
    }

    onPointerUp(pointer) {
        let ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        let mouseEvent = new PointerEvent('pointerup', pointer.event)
        ruffleplayer.dispatchEvent(mouseEvent)
    }

    onPointerMove(pointer) {
        let ruffleplayer = document.getElementsByTagName('ruffle-player')[0]
        let mouseEvent = new MouseEvent('mousemove', pointer.event)
        ruffleplayer.dispatchEvent(mouseEvent)
    }
}
