const {Sequelize} = require("sequelize");

// import and configure dotenv in one line
require("dotenv").config();
const {DB_PATH} = process.env;

const sequelize = new Sequelize({
  dialect: "sqlite",
  dialect: `${DB_PATH}`
});
