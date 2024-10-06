import express from "express";
import fs from "fs";
// to get some info about request.
import morgan from "morgan";
const app = express();
// using third party middlewares.
app.use(morgan("dev"));
// app.use(morgan("common"));
// app.use(morgan("combined"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));

const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
app.get("/api/v1/movies", (req, res) => {
  res.json({
    requestedAt: req.requestedAt,
    count: movies.length,
    data: {
      movies,
    },
  });
});
app.listen(3000, () => console.log("Listening at port 3000"));
