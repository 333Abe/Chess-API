process.env.NODE_ENV = "test";
const app = require("../app.js");
const request = require("supertest");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const testData = require("../db/data/test-data/index.js");

afterAll(() => db.end());

beforeEach(() => seed(testData));

describe("GET /api/games/:game_id", () => {
  it("should return an object containing info a on specific game", () => {
    const expectedGameInfo = {
      game_id: 1,
      board_position: [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
      ],
      turn: "white",
      castling: "KQkq",
      en_passant: null,
    };

    return request(app)
      .get("/api/games/1")
      .expect(200)
      .then(({ body: { gameInfo } }) => {
        expect(gameInfo).toEqual(expectedGameInfo);
      });
  });
});
