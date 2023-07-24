const db = require("../db/connection");
const format = require("pg-format");

exports.selectGameInfo = (game_id) => {
  const sql = format(`SELECT * FROM games WHERE game_id = %L;`, game_id);
  return db.query(sql).then(({ rows }) => {
    if (rows.length === 0) {
      return Promise.reject({ msg: "Not found"})
    }
    return { gameInfo: rows[0] };
  });
};
