import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import auth from "./auth.js";
import content from "./content.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(auth);
app.use(content);

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" }).end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
