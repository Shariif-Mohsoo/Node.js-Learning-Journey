//HERE WE WILL SEE HOW TO HANDLE THE ROUTES.
const http = require("http");
const layout = require("./Templates/template");
const { navigation, about, detail, test } = require("./Templates/routesData");
//creating the server
const server = http.createServer((req, res) => {
  const path = req.url.toLocaleLowerCase();
  if (path === "/" || path == "/home") {
    res.end(layout(navigation));
  } else if (path === "/about") {
    res.end(layout(about));
  } else if (path === "/detail") {
    res.end(layout(detail));
  } else if (path === "/test") {
    res.end(layout(test));
  } else {
    res.end("404 Page not found");
  }
});
//starting the server
server.listen(3000, () => {
  console.log("Listening at port number: ", 3000);
});
