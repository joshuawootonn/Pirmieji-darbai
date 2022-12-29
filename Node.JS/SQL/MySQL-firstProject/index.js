const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const PORT = process.env.serverPort || 5003;
const app = express();
const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  // ssl: process.env.sslmode,
  port: process.env.port,
};

app.use(express.json());
app.use(cors());

app.post("/table", async (req, res) => {
  //to do: used request body
  const name = req.body?.name.trim();

  if (!name) {
    res.status(500).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );
  } catch (error) {
    res.status(500).send({ error });
    return console.error(error);
  }

  res.send("Table was created").end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
