/*
    HERE WE WILL SEE HOW TO READ THE DATA FROM TERMINAL.
*/
console.log("Reading the data from the terminal");
const readLine = require("readline");
// console.log(readLine.Interface());
const rl = readLine.Interface({
  input: process.stdin,
  output: process.stdout,
});
// console.log(rl);
rl.question("Enter your name: ", (name) => {
  console.log("You entered: ", name);
  rl.close();
});
//OPTIONAL
rl.on("close", () => {
  console.log("Dear You Are Done");
  process.exit(0);
});
// console.log("YEP");
