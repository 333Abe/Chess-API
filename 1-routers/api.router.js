const express = require("express");
const gamesRouter = require("./games.router.js")

const apiRouter = express.Router();

apiRouter.use("/games", gamesRouter);