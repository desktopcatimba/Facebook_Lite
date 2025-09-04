const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const conn = require('./db/conn')

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev")); 


app.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

module.exports = app;
