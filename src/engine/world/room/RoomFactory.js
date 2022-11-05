export default class RoomFactory {
    constructor(shell) {
        this.shell = shell

        this.scene = shell.scene
        this.rooms = shell.crumbs.scenes.rooms
    }

    createRoom(id) {
        this.unloadPrevious()
        let config = this.rooms[id]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key)

            return this.scene.get(config.key)
        } else {
            return this.scene.add(config.key, config.scene, true, {id: id})
        }
    }

    // This unloads previous room assets
    unloadPrevious() {
        if (!this.shell.room) return

        for (let item of this.shell.itemsLoaded) {
            if (Object.keys(this.shell.room.textures.list).includes(item.id)) this.shell.room.textures.remove(item.id)

            if (Object.keys(this.shell.cache.json.entries.entries).includes(item.id)) this.shell.room.cache.json.remove(item.id)

            if (Object.keys(this.shell.cache.audio.entries.entries).includes(item.id)) this.shell.room.cache.audio.remove(item.id)

            for (let anim in this.shell.room.anims.anims.entries) {
                if (this.shell.room.anims.anims.entries[anim].key.includes(item.id.split('-')[0])) {
                    delete this.shell.room.anims.anims.entries[anim]
                }
            }
        }

        this.shell.itemsLoaded = []
    }
}
