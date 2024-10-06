import express from "express";
import fs from "fs";
const app = express();
// creating the custom middleware.
const getDate = (req, res, next) => {
  //   console.log("Middle Ware");
  req.requestedAt = new Date().toLocaleString();
  next();
};
app.use(getDate);
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
app.get("/api/v1/movies", (req, res) => {
  res.json({
    status: 200,
    requestedAt: req.requestedAt,
    count: movies.length,
    data: {
      movies,
    },
  });
});
app.listen(3000, () => console.log("Listening at port 3000"));
