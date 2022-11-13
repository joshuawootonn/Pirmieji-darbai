const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

const cars = ["Tesla", "Toyota", "Audi"];

app.get("/", (req, res) => {
  res.send(cars);
});

app.post("/", (req, res) => {
  const car = req.body?.car;
  const newCar = [...cars, car];

  res.send(newCar);
});

app.listen(PORT, () => console.log(`Server is working on ${PORT}`));
