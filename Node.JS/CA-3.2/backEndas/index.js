const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();

const users = [
  { name: "Gabrielė", surname: "Barsukova" },
  { name: "Danielė", surname: "Vorobjovaitė" },
];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(users).end();
});

app.post("/", (req, res) => {
  const { name, surname } = req.body;

  // name = users.find((name) => users.name === name);
  // surname = users.find((surname) => users.surname === surname);

  users.push(name, surname);
  res.send(users).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
