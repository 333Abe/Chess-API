const db = require("../db/connection");

exports.selectGameInfo = (game_id) => {
  return db
    .query(`SELECT * FROM games WHERE game_id = $1;`, [game_id])
    .then(({ rows }) => {
      return {gameInfo: rows[0]};
    });
};
