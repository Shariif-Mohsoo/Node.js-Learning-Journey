const http = require("http");
const layout = require("./Templates/template");
const { navigation, about, detail, test } = require("./Templates/routesData");

const server = http.createServer((req, res) => {
  const path = req.url.toLocaleLowerCase();

  if (path === "/" || path === "/home") {
    // Correcting the Content-Type and removing the unnecessary argument
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(layout(navigation));
  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(layout(about));
  } else if (path === "/detail") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(layout(detail));
  } else if (path === "/test") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(layout(test));
  } else {
    // For 404 errors
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page not found</h1>");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Listening at port number: ", 3000);
});
