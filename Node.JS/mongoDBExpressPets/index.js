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

app.get("/pets", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db("mongo-pets-project")
    .collection("pets")
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/pets", async (req, res) => {
  const { petName, petType, petAge } = req.body;

  if (!petName || !petType || !petAge) {
    res
      .status(400)
      .send({ message: "It is not a pet name, pet type or pet age" })
      .end();
    return;
  }

  if (
    typeof petName !== "string" ||
    typeof petType !== "string" ||
    typeof petAge !== "number"
  ) {
    res
      .status(400)
      .send({
        message: "Name and type are not a string and age is not a number",
      })
      .end();
  }
  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db("mongo-pets-project")
      .collection("pets")
      .insertOne({ name: "Petras", surname: "Slekys" });
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/pets/petType/:petType", async (req, res) => {
  const { petType } = req.params;

  const connection = await client.connect();
  const data = await connection
    .db("mongo-pets-project")
    .collection("pets")
    .find({ petType: "dog" })
    .toArray();
  await connection.close();
  return res.send(data);
});

app.get("/pets/byoldest", async (req, res) => {
  const { petAge } = req.params;
  const connection = await client.connect();

  const data = await connection

    .db("mongo-pets-project")
    .collection("pets")
    .find()
    .sort({ petAge: -1 })
    .toArray();

  await connection.close();
  return res.send(data);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
