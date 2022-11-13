const express = require("express");
require("dotenv").config();

const PORT = +process.env.PORT || 5000; //fallback'as
const user = [];

const app = express();

app.use(express.json()); //kad skaitytu objektus

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params; //rasom params, nes nurodem parametra /user/:userId
  const user = user.find((curUser) => curUser.userId === userId);
});

app.post("/create-user", (req, res) => {
  const { age, firstName, userId } = req.body;

  const getIsNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof userId !== "string" ||
    !getIsNumber(age)
  ) {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const user = { age, firstName, userId };

  users.push(user);

  res.end("Hello"); //result.end - is backendo nieko nebedarau, au baigem ir siusk atsakyma
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
