const fs = require("fs");
// getting the path
const filePath = `${process.cwd()}/Files/input.json`;
// creating the new content
const content = {
  name: "Jawad",
};

// getting the file data and then writing the new content
fs.promises
  .readFile(filePath, { encoding: "utf8" })
  .then((res) => {
    console.log(res);
    // Parse the existing data
    let array = JSON.parse(res); // Assuming input.json contains a valid JSON array
    // Pushing the new content into the array
    array.push(content);
    // Writing the updated array back to the file
    return fs.promises.writeFile(filePath, JSON.stringify(array, null, 2));
  })
  .then(() => {
    console.log("Done with writing the file");
  })
  .catch((err) => {
    console.log(err.message);
  });
