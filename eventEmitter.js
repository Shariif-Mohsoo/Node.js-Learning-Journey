/**
 * Node JS is created on bases of event driven architecture.
 * first emit an event ==> then listen the event and then handle the event.
 * Here we will see how to emit and handle the custom events.
 * For this we need a class EventEmitter which is in events node core modules.
 ALERT:
  THOSE EVENTS THAT WE NEED MOSTLY ARE BY DEFAULT ADDED IN EVENTEMITTER CLASS,
  FOR CUSTOM EVENTS WE NEED THIS.
 */
const events = require("events");
// console.log(events);
const myEmitter = new events.EventEmitter();
// console.log(myEmitter);
//listening and handling an event.
myEmitter.once("userCreated", () => {
  console.log("Wha User Created");
});
//listening and handling an event.
myEmitter.on("userCreated", (userId, userName) => {
  console.log(`User created with id: ${userId} and userName: ${userName}`);
});
//emitting an event
myEmitter.emit("userCreated", Math.random().toLocaleString(), "Mohsoo");
