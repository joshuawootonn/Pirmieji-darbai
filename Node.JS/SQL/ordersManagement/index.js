import express from "express";
import dotenv from "dotenv";
import { Product } from "./src/models/Product.js";
import { createProduct, getProducts } from "./src/service/productService.js";

dotenv.config();

const PORT = +process.env.PORT;
const app = express();
app.use(express.json());

getProducts();

createProduct({
  name: "book",
  price: 12,
  isAvailable: true,
  imageURL:
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
});

getProducts();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
