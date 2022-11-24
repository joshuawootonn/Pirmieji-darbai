const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const PORT = process.env.PORT || 5003;
const app = express();
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;

app.use(express.json());
app.use(cors());

app.get("/pets", async (req, res) => {
  const connection = await client.connect();
  const dataOfPets = await connection
    .db(DB)
    .collection(dbCollection)
    .find()
    .toArray();
  await connection.close();
  return res.send(dataOfPets);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
