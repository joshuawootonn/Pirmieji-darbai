const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const PORT = process.env.serverPort || 5003;
const app = express();
const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

app.use(express.json());
app.use(cors());
