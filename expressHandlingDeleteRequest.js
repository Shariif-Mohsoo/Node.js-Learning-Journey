import fs from "fs";
import express from "express";
const app = express();
app.use(express.json());
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));

app.delete("/api/v1/movies/:id", (req, res) => {
  //   console.log(req.params);
  const id = parseInt(req.params.id);
  //   console.log(id);
  let flag = false;
  const upDatedMovies = movies.filter((movie) => {
    if (movie.id === id) flag = true;
    else return movie;
  });
  if (flag === false)
    return res.status(404).json({ status: "Fail", message: "Movie not found" });
  fs.writeFile(
    "./data/movies.json",
    JSON.stringify(upDatedMovies, null, 2),
    (err) => {
      res.status(204).json({
        status: "Success",
        data: [],
      });
    }
  );
});

app.listen("3000", () => {
  console.log("Listening at port 3000");
});
