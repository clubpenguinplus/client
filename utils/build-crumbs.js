// Merges all crumb files into one

const fs = require('fs')
const path = require('path')
const langs = ['en', 'pt', 'es']

for (let lang of langs) {
    let assets = path.resolve(__dirname, `../client/media/crumbs/${lang}`)

    let crumbs = {
        colors: require(`${assets}/colors.json`),
        flooring: require(`${assets}/flooring.json`),
        furniture: require(`${assets}/furniture.json`),
        igloos: require(`${assets}/igloos.json`),
        items: require(`${assets}/items.json`),
        penguin: require(`${assets}/penguin.json`),
        quick_keys: require(`${assets}/quick_keys.json`),
        safe_messages: require(`${assets}/safe_messages.json`),
        secret_frames: require(`${assets}/secret_frames.json`),
        strings: require(`${assets}/strings.json`),
        worlds: require(`${assets}/worlds.json`),
        stamps: require(`${assets}/stamps.json`),
        puffles: require(`${assets}/puffles.json`)
    }

    try {
        fs.writeFileSync(`${assets}/../${lang}.json`, JSON.stringify(crumbs))
        console.log('Done')
    } catch (error) {
        console.log(error)
    }
}