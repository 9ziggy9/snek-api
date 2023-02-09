const express = require("express");
require("dotenv").config();
const {Score, Player} = require("./db/models");

// INITIAILIZE EXPRESS
const app = express();

// Get all scores
app.get("/scores/:id", async (req,res) => {
  const {id} = req.params;
  const scores = await Player.findByPk(id, {
    include: [{
      model: Score
    }],
    attribute: ["name"],
  });
  res.json(scores);
});

app.get("/scores", async (req,res) => {
  const scores = await Player.findAll({
    include: [{
      model: Score
    }],
    attribute: ["name"],
  });
  res.json(scores);
});

// MIDDLEWARE
app.use(express.json());
const {PORT} = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


