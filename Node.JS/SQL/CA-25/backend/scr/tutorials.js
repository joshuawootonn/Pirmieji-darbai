import router from "./auth.js";
import express from "express";
import { MYSQL_CONFIG } from "./config.js";
import mysql from "mysql2/promise";

const app = express();

router.get("/users-tutorial/:id", async (req, res) => {
  const userId = req.body;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    let result = await con.execute(
      `SELECT * FROM users WHERE id = ${mysql.escape(userId.id)}`
    );

    await con.end();
    res.send(result).end();
  } catch (error) {
    res
      .status(400)
      .send({
        message: `Your ID is not in the base, so you can't get acces to the tutorials`,
      })
      .end();
  }
});

export default router;
