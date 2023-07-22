const express = require("express");
const { getGameInfo } = require("../2-controllers/games.controller");

const gamesRouter = express.Router();

gamesRouter.use("/:game_id", getGameInfo);

module.exports = gamesRouter;
