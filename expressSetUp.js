import express from "express";
// creating the server.
const app = express();

console.log(app);
app.get("/", (req, res) => {
  res.send(
    `
        <h1 style='color:blue;background-color:#ffaaff'>Response from express</h1>
        ${JSON.stringify({ name: "Mohsin", age: 21,Gender:"Male" })}
        <p style="color:green;background-color:yellow;text-align:center,font-size:40px">Currently Totally Out Of Bound</p>
        `
  );
});
//TODO: SENDING THE JSON AS RESPONSE.
// app.get("/", (req, res) => {
//   res.json({ name: "anonymous" });
// });
app.listen(3000, () => {
  console.log("Listening at port 3000");
});
