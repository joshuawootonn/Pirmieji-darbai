import express from "express";
import jwt from "jsonwebtoken";
import { jwt_Secret, MYSQL_CONFIG } from "./config.js";
import mysql from "mysql2/promise";

const router = express.Router();

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, jwt_Secret);
    console.log(user);
    next();
    //next yra naudojamas kai mes turim daugiau midleware
  } catch (err) {
    return res.status(400).send(`Incorrect Token`).end();
  }
};

router.get("/articles", isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(`SELECT * FROM articles`);

    await con.end();
    res.send(data);
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .send({ message: "You are not in our base, please register" })
      .end();
  }
});

export default router;
