//HERE WE WILL SEE HOW TO READ THE DATA FROM FILE ASYNCHRONOUSLY.
const fs = require("fs");
const filePath = `${process.cwd()}/Files/input.json`;
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err.message);
  }
  //   console.log(data);
  console.log(JSON.parse(data));
});
