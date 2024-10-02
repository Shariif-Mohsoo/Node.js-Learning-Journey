const process = require("process");
const fs = require("fs");
//event loop in practice.
console.log("Program start");
//will store in the second phase (i/p tasks) callback queue of event loop.
fs.readFile("./Files/input.txt", () => {
  console.log("File read successfully");

  //will store  in the first phase (expire timers ) callback queue of event loop .
  setTimeout(() => {
    console.log("Timer's callback executed");
  }, 0);

  //will store in the third phase(setImmediate call) callback queue of event loop.
  setImmediate(() => console.log("Set Immediate callback executed"));

  //will store in the nextTick phase callback queue of event loop.
  //as it take precedence on other callbacks here it will invoke first.
  process.nextTick(() => console.log("Process nextTick callback executed"));
});

console.log("Program end");
