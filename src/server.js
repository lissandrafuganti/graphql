import "dotenv/config";
import express from "express";
import cors from "cors";
import models, { sequelize } from './models';

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

