const db = require("../connection");
const format = require("pg-format");

const seed = async (data) => {
  const { games } = data;
  await db.query(`DROP TABLE IF EXISTS games;`);

  await db.query(`CREATE TABLE games (
        game_id SERIAL PRIMARY KEY,
        board_position TEXT[][] DEFAULT 
        '{
          {"r", "n", "b", "q", "k", "b", "n", "r"},
          {"p", "p", "p", "p", "p", "p", "p", "p"},
          {NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL},
          {NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL},
          {NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL},
          {NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL},
          {"P", "P", "P", "P", "P", "P", "P", "P"},
          {"R", "N", "B", "Q", "K", "B", "N", "R"}
        }'::TEXT[][],
        turn VARCHAR(5) CHECK (turn = 'black' OR turn = 'white') NOT NULL DEFAULT 'white',
        castling VARCHAR(4) CHECK (castling ~* '^[KQkq]{0,4}$') DEFAULT 'KQkq',
        en_passant VARCHAR(2)
      );`);

  const insertGamesQueryStr = format(
    "INSERT INTO games (board_position, turn, castling, en_passant) VALUES %L RETURNING *;",
    games.map(({ board_position, turn, castling, en_passant }) => [
      board_position,
      turn,
      castling,
      en_passant,
    ])
  );

  return db.query(insertGamesQueryStr).then((result) => {
    return result.rows;
  });
};

module.exports = seed;
