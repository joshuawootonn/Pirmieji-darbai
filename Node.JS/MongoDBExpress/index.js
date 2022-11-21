const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const PORT = process.env.PORT || 5003;
const app = express();
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbConnection = process.env.dbConnection;

app.use(express.json());
app.use(cors());

app.get("/users", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection(dbConnection)
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).send({ message: "No first name and last name" }).end();
    return;
  }
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res
      .status(400)
      .send({ message: "First name and last name are not a string" })
      .end();
    return;
  }
  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db(DB)
      .collection(dbConnection)
      .insertOne({ name: "Petras", surname: "Slekys" });
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", (_, res) => {
  res.send({ message: "Sveiki!" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
