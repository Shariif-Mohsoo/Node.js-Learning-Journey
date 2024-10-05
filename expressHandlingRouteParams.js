import fs from "fs";
import express from "express";
const app = express();
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));

app.get("/api/v1/movies/:id", (req, res) => {
  //   console.log(req.params);
  const id = parseInt(req.params.id);
  //   console.log(id);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie)
    return res.status(404).json({ status: "Fail", message: "Movie not found" });
  res.json({
    status: "Success",
    data: movie,
  });
});

app.listen("3000", () => {
  console.log("Listening at port 3000");
});
