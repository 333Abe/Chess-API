process.env.NODE_ENV = "test";
const app = require("../app.js");
const request = require("supertest");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const testData = require("../db/data/test-data/index.js");

afterAll(() => db.end());

beforeEach(() => seed(testData));

describe("GET /", () => {
  it("should return a list of available API features", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(({ body }) => {
        expect(body).toEqual(expect.objectContaining({endpoints: expect.any(Object)}))
      });
  });
});

describe("GET /api/games/:game_id", () => {
  it("should return an object containing info a on specific game", () => {
    const expectedGameInfo = {
      game_id: 1,
      board_position: [
        ["R", "P", null, null, null, null, "p", "r"],
        ["N", "P", null, null, null, null, "p", "n"],
        ["B", "P", null, null, null, null, "p", "b"],
        ["Q", "P", null, null, null, null, "p", "q"],
        ["K", "P", null, null, null, null, "p", "k"],
        ["B", "P", null, null, null, null, "p", "b"],
        ["N", "P", null, null, null, null, "p", "n"],
        ["R", "P", null, null, null, null, "p", "r"]
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
  it("404: when supplied game_id is valid but doesnt exist", () => {
    return request(app)
      .get("/api/games/99999")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not found");
      });
  });
  it("400: when supplied game_id is invalid", () => {
    return request(app)
      .get("/api/games/invalid")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad request");
      });
  });
});
