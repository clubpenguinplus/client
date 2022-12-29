const path = require("path");

let package = path.join(__dirname, "../package.json");
let prevVersion = path.join(__dirname, "../currentversion/package.json");

if (package.version == prevVersion.version) {
  throw 'Version number must be updated before pushing to production';
  process.exit(1);
}