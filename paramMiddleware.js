import fs from "fs";

const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
let requireMovie;
export default function (req, res, next, value) {
  console.log(value, "middleware");
  const id = parseInt(value);
  const movie = movies.find((el) => el.id === id);
  if (!movie)
    return res.status(404).json({ status: "fail", error: "movie not found" });
  requireMovie = movie;
  next();
}
export { movies, requireMovie };
