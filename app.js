const express = require("express");
const app = express();
const apiRouter = require("./1-routers/api.router");
const {
  handle404Messages,
  handle400Paths,
} = require("./2-controllers/errors.controller");

app.use("/api", apiRouter);

// app.all("*", handle404Paths)
app.use(handle404Messages);
app.use(handle400Paths);

module.exports = app;
