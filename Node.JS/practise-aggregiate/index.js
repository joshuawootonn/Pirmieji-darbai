//NEBAIGTAS

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

app.get("/users", async (req, res) => {
  const connection = await client.connect();
  const dataOfUsers = await connection
    .db(DB)
    .collection(dbCollection)
    .find()
    .toArray();
  await connection.close();
  return res.send(dataOfUsers);
});

app.get("/", async (_, res) => {
  const pipeline = [
    {
      $match: {},
    },
    {
      $group: {
        _id: "$firstName",
        totalAmount: { $sum: "$ordersAmount" },
      },
    },
    // {
    //   $sort: {
    //     totalPrice: -1,
    //   },
    // },
  ];

  try {
    const docs = [];
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(dbCollection);

    // const usersCount = await collection.count({
    //   firstName: "Gabriele",
    // });

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }

    await con.close();

    // res.send({ usersCount }).end();
    res.send(docs).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
