const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(path.join(__dirname, "images", "converted"));
console.log("Converted files count:", files.length);
console.log(files.join(", "));
