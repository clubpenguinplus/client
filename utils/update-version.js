const fs = require("fs");
const path = require("path");

let package = path.join(__dirname, "../package.json");
let prevVersion = path.join(__dirname, "../prev.version");

try {
    let pjson = JSON.parse(fs.readFileSync(package));
    let prev = fs.readFileSync(prevVersion, "utf8");
    if (prev == pjson.version) {
        let version = pjson.version;

        let parts = version.split(".");
        let major = parseInt(parts[0]);
        let minor = parseInt(parts[1]);
        let patch = parseInt(parts[2]);

        patch++;
        pjson.version = `${major}.${minor}.${patch}`;

        fs.writeFileSync(package, JSON.stringify(pjson, null, 2));
    

        console.log(`Version ${pjson.version} written to static file`);
    } else {
        console.log(`Version manually updated to ${pjson.version}`);
    }

    fs.writeFileSync(prevVersion, pjson.version);
} catch (e) {
    console.error(e);
}