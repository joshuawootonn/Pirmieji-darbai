const data = require("./data.js");

const express = require("express");
const cors = require("cors");

const PORT = 5002;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(data).end();
});

app.get("/car/:car", (req, res) => {
  const car = req.params.car;
  const filterUsersByCar = data.filter(
    (curCar) => curCar.car.toLowerCase() === car.toLowerCase()
  );

  if (!car) {
    return req.status(404).send("Model does not exist").end();
  }
  res.send(filterUsersByCar);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
