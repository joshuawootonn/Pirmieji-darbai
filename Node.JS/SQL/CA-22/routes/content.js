import express from "express";
import { isLoggedIn } from "../src/midleware.js";

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  console.log(req.headers);
  res.send("Getting data...");
});

export default router;
