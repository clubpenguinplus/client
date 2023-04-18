export default class PluginManager {
    constructor(airtower) {
        this.events = {}
        this.pluginsCache = {}

        this.loadPlugins(airtower)
    }

    loadPlugins(airtower) {
        this.importPlugins(require.context('./plugins/', true, /\.js$/))

        for (let key in this.pluginsCache) {
            if (this.pluginsCache[key].__esModule) {
                let plugin = new this.pluginsCache[key].default(airtower)

                this.loadEvents(plugin)
            }
        }
    }

    importPlugins(r) {
        r.keys().forEach((key) => (this.pluginsCache[key] = r(key)))
    }

    loadEvents(plugin) {
        for (let event in plugin.events) {
            if (!plugin.events[event]) return console.error(`[PluginManager] Event (${event}) not found`)
            this.events[event] = plugin.events[event].bind(plugin)
        }
    }

    getEvent(event, args) {
        try {
            if (this.events[event]) this.events[event](args)
        } catch (error) {
            error.stack = error.stack.replaceAll('.js?', '.js').replaceAll('/./', '/')
            console.error(`[PluginManager] Event (${event}) not handled: ${error.stack}`)
        }
    }
}
