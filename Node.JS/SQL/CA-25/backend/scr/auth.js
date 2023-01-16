import express from "express";
import Joi from "joi";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { MYSQL_CONFIG } from "./config.js";
import jwt from "jsonwebtoken";
import { jwt_Secret } from "./config.js";

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.get("/users", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    let result = await con.execute(`SELECT COUNT (*) FROM users`);

    await con.end();
    console.log(result);
    res.send(result).end();
  } catch (error) {
    res.status(500).send({ error: "Can not get users" }).end();
  }
});

router.post("/register", async (req, res) => {
  let userData = req.body;
  console.log(userData);
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err: `Incorrect data sent` }).end();
  }
  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(`INSERT INTO users (email, password) 
      VALUES (${mysql.escape(userData.email)}, "${hashedPassword}")`);

    await con.end();

    return res.send(data);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ err: `Unexpected error: Please try again` })
      .end();
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Incorrect data send" }).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [data] = await con.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );

    await con.end();

    if (!data.length) {
      return res
        .status(400)
        .send({ message: "Please provide a valid email or password" })
        .end();
    }
    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        {
          id: data[0].id,
          email: data[0].email,
        },
        jwt_Secret
      );
      return res.send({ msg: `Succesfully logged in ${token}` }).end();
    }
    return res.status(403).send({ error: "Invalid credentials" }).end();
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: "There was error with your login information" })
      .end();
  }
});

export default router;
