import BaseScene from '@scenes/base/BaseScene'

export default class Closeup extends BaseScene {
    constructor(scene) {
        super(scene)
    }

    preload() {
        this.itemsLoaded = []
        this.load.on('filecomplete', (key, type, data) => {
            this.itemsLoaded.push({id: key, type: type})
        })
        if (this._preload) this._preload()
    }

    stop(unload = true) {
        this.scene.stop()

        if (!unload) return

        for (let item of this.itemsLoaded) {
            if (Object.keys(this.textures.list).includes(item.id)) this.textures.remove(item.id)

            if (Object.keys(this.cache.json.entries.entries).includes(item.id)) this.cache.json.remove(item.id)

            if (Object.keys(this.cache.audio.entries.entries).includes(item.id)) this.cache.audio.remove(item.id)

            if (Object.keys(this.cache.video.entries.entries).includes(item.id)) this.cache.video.remove(item.id)

            for (let anim in this.anims.anims.entries) {
                if (this.anims.anims.entries[anim].key.split('-')[0] == item.id.split('-')[0]) {
                    delete this.anims.anims.entries[anim]
                }
            }
        }
    }
}
