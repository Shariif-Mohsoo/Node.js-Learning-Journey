import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
app.post("/api/v1/movies", (req, res) => {
  const newId = movies[movies.length - 1].id + 1;
  console.log(newId);
  const newMovie = Object.assign(req.body, { id: newId });
  //writing back data
  fs.writeFile("./data/movies.json", JSON.stringify(movies, null, 2), (err) => {
    return res.status(201).send({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  });
  //   res.json("Record Created");
});
app.listen(3000, () => console.log("Listening at port 3000"));
