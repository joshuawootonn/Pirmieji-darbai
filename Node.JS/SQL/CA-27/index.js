import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import axios from "axios";

dotenv.config();

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};
const PORT = 5_003;

const app = express();

app.get("/users", async (req, res) => {
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

app.get("/", async (req, res) => {
  axios.get("https://randomuser.me/api/").then((usersResponse) => {
    console.log(usersResponse.data);
    return res.send(usersResponse.data).end();
  });
  const name = req.body;
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    let newName = `INSERT INTO names (name) VALUES (${mysql.escape(
      usersResponse.name
    )})`;

    await con.end();
    return res.send({ message: `Succesfully added ${newName}` });
  } catch (error) {
    res.status(500).send({ error: `Can not get data` }).end();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
