const data = require("./data.js");

const express = require("express");
const cors = require("cors");

const PORT = 5003;
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

app.get("/email", (_, res) => {
  const userEmails = data.map((user) => user.email);

  res.send(userEmails);
});

app.get("/userId/:idUser", (req, res) => {
  const userIdFind = +req.params.idUser;

  const user = data.find((curUser) => curUser.id === userIdFind);

  res.send(user).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
