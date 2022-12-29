const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const { query } = require("express");

require("dotenv").config();

const PORT = process.env.serverPort || 5003;
const app = express();
const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

// const MYSQL_CONFIG = {
//   host: "127.0.0.1",
//   port: 3306,
//   user: "items_user",
//   password: "itemsuser",
//   database: "ca-14",
// };

app.use(express.json());
app.use(cors());

app.get("/items", async (req, res) => {
  const limit = req.query.limit;
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    let command = `SELECT * FROM items`;

    if (limit) {
      command = `SELECT * FROM items limit ${limit}`;
    }

    const result = await con.execute(command);

    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(error).end();
  }
});

app.post("/items", async (req, res) => {
  const newItem = req.body;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const result = await con.execute(
      `INSERT INTO items (title) VALUES (${mysql.escape(newItem.title)})`
    );

    const newID = result[0].insertId;
    const newResult = await con.execute(
      `SELECT * FROM items WHERE id = ${newID}`
    );

    res.send(newResult[0][0]).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error).end();
  }
});

app.delete("/items/:id", async (req, res) => {
  const itemForDelete = req.body.id;

  if (!itemForDelete || NaN) {
    return res
      .status(400)
      .send(`Item was not deleted. Provide a proper id`)
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const result = await con.execute(
      `DELETE FROM items WHERE id = ${mysql.escape(itemForDelete)}`
    );

    res.send(`Item succesfully deleted`).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error).end();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
