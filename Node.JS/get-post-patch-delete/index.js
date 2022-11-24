const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const PORT = process.env.PORT || 5001;
const app = express();
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const connection = await client.connect();
  const dataOfCustomers = await connection
    .db(DB)
    .collection(dbCollection)
    .find()
    .toArray();

  await connection.close();
  return res.send(dataOfCustomers);
});

app.post("/order", async (req, res) => {
  const { costumerID, lastName, order } = req.body;

  if (!costumerID || !lastName || !order) {
    return res
      .status(400)
      .send({ message: "CostumerID, lastName and order is not provided" })
      .end();
  }

  if (
    typeof costumerID !== "number" ||
    typeof lastName !== "string" ||
    typeof order !== "string"
  ) {
    res
      .status(400)
      .send({
        message: "ID is not a number, lastName and order are not strings",
      })
      .end();
  }

  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db(DB)
      .collection(dbCollection)
      .insertOne(newOrder);
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/orders", async (req, res) => {
  const newOrders = req.body;
  const isArrayObject = Array.isArray(newOrders) && newOrders?.length;

  const isCorrectOrder = (newOrder) => {
    const { costumerID, lastName, order } = newOrder;
  };

  if (!isArrayObject) {
    return res
      .status(400)
      .send({ message: "Array and object is not provided" })
      .end();
  }

  newOrders.forEach(isCorrectOrder);

  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db(DB)
      .collection(dbCollection)
      .insertMany(newOrders);
    await connection.close();

    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.patch("/order/:id", async (req, res) => {
  const id = +req.params.id;
  const { costumerID, lastName, order } = req.body;

  try {
    const con = await client.connect();
    const db = con.db(DB);

    const orderToUpdate = await db
      .collection(dbCollection)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { costumerID, lastName, order } }
      );

    await con.close();

    res.send(orderToUpdate).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/order/:id", async (req, res) => {
  const id = +req.params.id;
  const { orders } = req.body;

  try {
    const con = await client.connect();
    const db = con.db(DB);

    const deleteOrder = await db
      .collection(dbCollection)
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    res.send(deleteOrder).end();
  } catch (error) {
    return res.send({ error }).end();
  }
  if (deleteOrder) {
    orders = orders.filter((curOrder) => curOrder.id !== id);
    return res.send(deleteOrder).end();
  }
  res.status(404).send({ message: "Order does not exist" }).end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
