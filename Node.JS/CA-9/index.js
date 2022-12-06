const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

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
  return res.send(data);
});

app.get("/products", async (req, res) => {
  const connection = await client.connect();
  const data = await connection.db(DB).collection("products").find().toArray();
  await connection.close();
  return res.send(data);
});

app.get("/category-value", async (req, res) => {
  try {
    const connection = await client.connect();
    const categories = await connection
      .db(DB)
      .collection("categories")
      .find()
      .toArray();

    const products = await connection
      .db(DB)
      .collection("products")
      .find()
      .toArray();

    const productsWithCategory = products.map((product) => {
      const { title } = categories.find(
        (category) => category._id.toString() === product.categoryId
      );
      return { ...product, category: title };
    });

    await connection.close();

    res.send({ productsWithCategory }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
