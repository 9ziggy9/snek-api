const express = require("express");
require("dotenv").config();
const {Score} = require("./db/models");
const {PORT} = process.env;

// Initialization of Express
const app = express();

// Apply JSON middleware
app.use(express.json());

// Get all scores
app.get("/scores/:id", async (req,res) => {
  const {id} = req.params;
  const score = await Score.findByPk(id);
  res.json(score);
});

app.get("/scores", async (req,res) => {
  const scores = await Score.findAll();
  res.json(scores);
});

// Listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
