//here we will see the pipe method which is third and best approach for large stream of data.
const http = require("http");
const fs = require("fs");
const server = http.createServer();
//THIRD METHOD FOR HANDLING LARGE STREAM OF DATA.
server.on("request", (req, res) => {
  const rd = fs.createReadStream("./Files/stream.txt");
  //pipe method it is only available for reading streams.
  rd.pipe(res);
  rd.on("end", () => {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end();
  });
  rd.on("error", (err) => {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end(err.message);
  });
});
server.listen(3000, () => {
  console.log("Listening at port ", 3000);
});
