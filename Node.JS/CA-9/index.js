const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const PORT = process.env.PORT || 5003;
const app = express();
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;

app.use(express.json());
app.use(cors());

app.get("/categories", async (req, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection("categories")
    .find()
    .toArray();
  await connection.close();
});
