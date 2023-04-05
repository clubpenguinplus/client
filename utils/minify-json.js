const fs = require('fs')

function searchFolder(path) {
    let files = fs.readdirSync(path)
    for (let file of files) {
        if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            searchFolder(`${path}/${file}`)
            continue
        }

        if (file.endsWith('.json')) {
            var jsonFile = fs.readFileSync(`${path}/${file}`, 'utf8')
            var jsonData = JSON.parse(jsonFile)
            fs.writeFileSync(`${path}/${file}`, JSON.stringify(jsonData))
        }
    }
}

searchFolder('./client/media')