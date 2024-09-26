//Hear we will see How to read the data Synchronously through Node Js.
const fs = require("fs");
const filePath = `${process.cwd()}/Files/input.txt`;
// console.log(filePath);
const contentBuffer = fs.readFileSync(filePath);
// console.log(contentBuffer);
const content = contentBuffer.toString("utf-8");
console.log(content);
