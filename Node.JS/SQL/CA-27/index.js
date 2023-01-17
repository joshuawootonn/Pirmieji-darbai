import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};
const PORT = 5_003;

const app = express();
dotenv.config();

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    let names = `SELECT * FROM names`;
    const result = await con.execute(names);

    await con.end();
    res.send(result).end();
  } catch (error) {
    res.status(400).send({ error }).end();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
