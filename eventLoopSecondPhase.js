//event loop in practice.
const fs = require("fs");
console.log("Program start");
//will store  in the first phase (expire timers ) callback queue of event loop .
setTimeout(() => {
  console.log("Timer's callback executed");
}, 0);
//WILL STORE IN THE SECOND PHASE (I/O TASKS) call back queue of event loop;
fs.readFile("./Files/input.txt", () => console.log("File read successfully"));

//will store in the third phase(setImmediate call) callback queue of event loop.
setImmediate(() => console.log("Set Immediate callback executed"));
console.log("Program end");
