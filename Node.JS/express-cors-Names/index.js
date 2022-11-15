const express = require("express");
const cors = require("cors");

const PORT = 5001;
const app = express();

const users = ["Gabriele", "Asta", "Danielius"];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(users).end();
});

app.post("/", (req, res) => {
  const { user } = req.body;
  const isDuplicateName = users.find((curUser) => curUser === user);

  if (!user || typeof user !== "string") {
    res.status(400).end("Incorrect");
    return;
  }
  if (isDuplicateName) {
    res.status(400).end("This name already exists");
    return;
  }

  users.push(user);
  res.send(users);
  res.end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
