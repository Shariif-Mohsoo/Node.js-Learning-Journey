/* Here we will see how to handle the large amount of data. */
const http = require("http");
const fs = require("fs");
// console.log(http);
const server = http.createServer();
// console.log(server);
//TODO: METHOD 1 not recommended.
// server.on("request", (req, res) => {
//   fs.readFile("./Files/stream.txt", (err, data) => {
//     if (err) {
//       return res.end("00P'S something went wrong");
//     }
//     res.end(data);
//   });
//   //   res.end("You are welcome");
// });

//METHOD 2 RECOMMENDED FOR LARGE DATA.
server.on("request", (req, res) => {
  // Set the headers before starting to stream
  res.writeHead(200, { "Content-Type": "text/plain" });

  const rs = fs.createReadStream("./Fies/stream.txt");

  rs.on("data", (chunk) => {
    res.write(chunk); // Write each chunk of data
  });

  rs.on("end", () => {
    res.end(); // End the response after all chunks are sent
  });

  rs.on("error", (err) => {
    // console.error(err);
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end(`Error reading file\n ${err.message}`);
  });
});

//listening
server.listen(3000, () => {
  console.log("Listening at port ", 3000);
});
