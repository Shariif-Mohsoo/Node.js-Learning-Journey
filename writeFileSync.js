//Here we will see how to write the data in file synchronously.
const fs = require("fs");
const filePath = `${process.cwd()}/Files/input.txt`;
// console.log(filePath);
const contentBuffer = fs.readFileSync(filePath);
// console.log(contentBuffer);
const fileData = contentBuffer.toString("utf-8");
// console.log(fileData);
const content = `Reading data from the file ${filePath}:  \n ${fileData}. \n Date created: ${new Date()}`;
const newFilePath = `${process.cwd()}/Files/output.txt`;
fs.writeFileSync(newFilePath, content);
