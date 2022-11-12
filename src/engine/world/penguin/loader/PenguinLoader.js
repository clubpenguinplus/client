import PenguinSpriteFactory from '@engine/loaders/PenguinSpriteFactory'

export default class PenguinLoader {
    constructor(shell) {
        this.shell = shell

        this.nameStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: 250,
        }
    }

    loadPenguin(penguin) {
        this.addPenguin(penguin)
        this.addShadow(penguin)
        this.addInput(penguin)

        penguin.playFrame(penguin.frame)
    }

    addPenguin(penguin) {
        penguin.bodySprite = PenguinSpriteFactory.create(penguin, 'body', 1)
        penguin.penguinSprite = PenguinSpriteFactory.create(penguin, 'penguin', 2)
    }

    addShadow(penguin) {
        let shadow = penguin.room.add.image(0, 0, 'penguin_base', 'shadow')

        penguin.addAt(shadow, 0)
    }

    addRing(penguin) {
        let ring = penguin.room.add.image(0, 0, 'penguin_base', 'ring')

        penguin.addAt(ring, 0)
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40
        let nameTag = penguin.room.add.text(x, y, penguin.username, this.nameStyle)

        nameTag.setOrigin(0.5)
        nameTag.depth = penguin.depth + 2000 // Keep nametag above everything else

        return nameTag
    }

    addInput(penguin) {
        let hitArea = new Phaser.Geom.Ellipse(0, -20, 70, 90)

        penguin.setInteractive({
            cursor: 'pointer',
            hitArea: hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains,
        })

        penguin.on('pointerup', () => this.onPenguinClick(penguin.id))
    }

    onPenguinClick(id) {
        this.shell.interface.showCard(id)
    }

    addPuffle(penguin, puffle) {
        let color = this.shell.crumbs.puffles[puffle].name

        this.ploader.loadPuffle(color)
    }

    loadPuffle(penguin, color) {
        if (!penguin.puffle || !penguin.active || penguin.hasPuffle) return

        penguin.pufflesprite = penguin.room.add.sprite(60, 0, `puffle_${color}`, '1_1')
        penguin.pufflesprite.depth = 3

        penguin.add(penguin.pufflesprite)
        penguin.pufflesprite.color = color
        penguin.hasPuffle = true

        if (this.shell.client.penguin.id == this.shell.room.id) {
            this.addPuffleInput(penguin)
        }
    }

    addPuffleInput(penguin) {
        // creates the hitbox to open the puffle care menu
        penguin.pufflesprite.hitArea = new Phaser.Geom.Ellipse(25, 25, 50, 50)
        penguin.pufflesprite.setInteractive({
            cursor: 'pointer',
            hitArea: penguin.pufflesprite.hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains,
        })
        penguin.pufflesprite.on('pointerup', () => this.onPuffleClick(penguin.puffle))
        penguin.pufflesprite.isButton = true
    }

    onPuffleClick(puffle) {
        // sends a packet to the server which requests the wellbeing information for the care menu to use
        this.shell.airtower.sendXt('p#phg', puffle)
    }
}
