import express from "express";
import cors from "cors";
import { PORT } from "./scr/config.js";
import auth from "./scr/auth.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import tutorials from "./scr/tutorials.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(auth);
app.use(tutorials);

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" }).end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
