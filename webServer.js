//HERE WE WILL SEE HOW TO CREATE THE WEB SERVER.
const http = require("http");
// console.log(http);
//STEP 1: creating the server.
const server = http.createServer((req, res) => {
  res.end("You are welcome");
});

//STEP 2:Start the server.
// server.listen(3000, () => {
//   console.log("Listening to the port: ", 3000);
// });
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port: ", 8000);
});
