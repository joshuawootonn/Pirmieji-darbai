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

app.get("/v1/:pets", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const pets = `SELECT * FROM pets`;

    const result = await con.execute(pets);

    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(console.error({ error })).end();
  }
});

app.post("/v1/:pets", async (req, res) => {
  const { name, dob, client_email, isArchived } = req.body;

  if (
    typeof name !== "string" ||
    !name ||
    typeof dob !== "number" ||
    !dob ||
    typeof client_email !== "string" ||
    !client_email ||
    typeof isArchived !== "string" ||
    !isArchived
  ) {
    return res
      .status(400)
      .send(
        `Incorrect name provided: ${name} or ${dob} or ${client_email} or ${isArchived}`
      )
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(
      `SELECT * FROM pets WHERE name='${name}', dob = ${dob}, client_email= '${client_email}', isArchived = '${isArchived}'`
    );

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

// app.post("/v1/:pets", async (req, res) => {
//   const newPet = req.body;
//   try {
//     const con = await mysql.createConnection(MYSQL_CONFIG);
//     const postPets = `INSERT INTO pets (name) VALUES (${mysql.escape(
//       newPet.name
//     )})`;

//     const newName = postPets[0].insertId;
//     const newPostPet = await con.execute(
//       `SELECT * FROM pets WHERE id = ${newName}`
//     );

//     res.send(newPostPet[0][0]).end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error).end();
//   }
// });

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
