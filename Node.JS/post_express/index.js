const express = require("express");

require("dotenv").config(); //config() paima is bibliotekos info, kuria ten turim, nes expressas paprastai nemato(nemato TIK .env failu)

const app = express();
const PORT = +process.env.PORT || 5000;

app.use(express.json()); // app yra express instancija

app.post("/", (req, res) => {
  //"/" - signalas i URL
  res.send({ message: "Sveiki atvykę į projektą" });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
