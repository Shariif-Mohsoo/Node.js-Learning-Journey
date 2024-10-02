//event loop in practice.
console.log("Program start");
//will store  in the first phase (expire timers ) of event loop .
setTimeout(() => {
  console.log("Timer's callback executed");
}, 0);
console.log("Program end");
