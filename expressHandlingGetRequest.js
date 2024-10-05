import express from "express";
import fs from "fs";
const app = express();
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
app.get("/api/v1/movies", (req, res) => {
  res.json({
    status: 200,
    count: movies.length,
    data: {
      movies,
    },
  });
});
app.listen(3000, () => console.log("Listening at port 3000"));
