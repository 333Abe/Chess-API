const { selectGameInfo } = require("../3-models/games.model");

exports.getGameInfo = (req, res) => {
  game_id = req.params.game_id;
  selectGameInfo(game_id).then((gameInfo) => {
    res.status(200).send(gameInfo);
  });
};
