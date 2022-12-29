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

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const joinTables = `SELECT books.id, authors.name, authors.surname, books.title, books.year FROM books INNER JOIN authors ON books.author_id=authors.id`;

    await con.execute(joinTables);

    res.send(`Tables joined`).end();
  } catch (error) {
    res.status(500).send(error).end();
  }
});

app.get("/newTable", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const newTable = `SELECT authors.name,COUNT(DISTINCT books.author_id) countbooks
    FROM books 
    INNER JOIN authors
    ON books.author_id=authors.id
    GROUP BY authors.name, authors.surname`;

    await con.execute(newTable);

    res.send(`New table was created`).end();
  } catch (error) {
    res.status(500).send(console.error({ error })).end();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
