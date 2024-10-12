import express from "express";
const app = express();
import template from "./public/templates/index.js";
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send(template());
});
app.listen(3000, () => {
  console.log("Listening at 3000");
});
