const express = require("express");
const cors = require("cors");

const PORT = 5002;
const app = express();

const cars = ["BMW", "VW", "Porsche"];

app.use(express.json());
app.use(cors());

app.get("/cars", (_, res) => {
  res.send(cars);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("OK");
// });

// app.post("/", (req, res) => {
//   const car = req.body?.car;
//   const newCar = [...cars, car];

//   res.send(newCar);
// });
