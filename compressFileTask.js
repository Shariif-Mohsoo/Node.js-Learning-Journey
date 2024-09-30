//write program to take data from one file and compressed it and store it to send file.
const fs = require("fs");
const zlib = require("zlib");
fs.createReadStream("./Files/input.txt")
  .pipe(zlib.createGzip()) // Compress
  .pipe(fs.createWriteStream("./Files/output.txt.gz")); // Write to new file
