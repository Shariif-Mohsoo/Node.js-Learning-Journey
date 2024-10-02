//event loop in practice.
console.log("Program start");
//will store  in the first phase (expire timers ) callback queue of event loop .
setTimeout(() => {
  console.log("Timer's callback executed");
}, 0);
//will store in the third phase(setImmediate call) callback queue of event loop.
setImmediate(() => console.log("Set Immediate callback executed"));
console.log("Program end");
