import fs from "fs";
import express from "express";
const app = express();
app.use(express.json());
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));

app.patch("/api/v1/movies/:id", (req, res) => {
  //   console.log(req.params);
  const id = parseInt(req.params.id);
  //   console.log(id);
  const movie = movies.find((movie) => movie.id === id);
  const index = movies.indexOf(movie);

  Object.assign(movie, req.body);
  console.log(index);
  movies[index] = movie;

  if (!movie)
    return res.status(404).json({ status: "Fail", message: "Movie not found" });
  fs.writeFile("./data/movies.json", JSON.stringify(movies, null, 2), (err) => {
    res.json({
      status: "Success",
      data: movie,
    });
  });
});

app.listen("3000", () => {
  console.log("Listening at port 3000");
});
