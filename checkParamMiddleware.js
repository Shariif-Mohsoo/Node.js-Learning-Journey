import express from "express";
import { movies, requireMovie } from "./paramMiddleware.js";
import paramMiddleware from "./paramMiddleware.js";
const app = express();
const router = express.Router();

app.use(router);
router.param("id", paramMiddleware);
router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: movies,
  });
});
router.get("/:id", (req, res) => {
  console.log(requireMovie);
  res.status(200).json({ status: "success", data: requireMovie });
});

app.listen(3000, () => {
  console.log("Listening at port ", 3000);
});

// TODO: WE CAN ALSO DEFINE THE MIDDLEWARE FOR EACH PARAM.
// FIXME: EXAMPLE CODE HERE.
// Middleware for first param
// app.param('param1', (req, res, next, value) => {
//     console.log(`param1: ${value}`);
//     next();
// });

// // Middleware for second param
// app.param('param2', (req, res, next, value) => {
//     console.log(`param2: ${value}`);
//     next();
// });

// // Middleware for third param (optional)
// app.param('param3', (req, res, next, value) => {
//     if (value) {
//         console.log(`param3: ${value}`);
//     }
//     next();
// });

// // Route with optional param3
// app.get('/route/:param1/:param2/:param3?', (req, res) => {
//     res.send('Route with params handled');
// });
