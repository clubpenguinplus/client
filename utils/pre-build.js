const fs = require("fs");
const path = require("path");
const pjson = require("../package.json");

let file = path.join(__dirname, "../client/current.version");

try {
    fs.writeFileSync(file, pjson.version);
    console.log(`Version ${pjson.version} written to static file`);
} catch (e) {
    console.error(e);
}