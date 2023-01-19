import express from "express";
import dotenv from "dotenv";
import { ordersController } from "./src/controller/ordersController.js";

dotenv.config();

const PORT = +process.env.PORT;
const app = express();
app.use(express.json());
app.use("/oders", ordersController());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
