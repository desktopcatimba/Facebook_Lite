const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')
const conn = require('./db/conn')
const userRouter = require('../src/routers/UserRouters')
const chatsRouters = require('./routers/chatsRouters')
const app = express();


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev")); 
app.use('/', userRouter)
app.use('/chats', chatsRouters)
app.use('/public', express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

module.exports = app;
