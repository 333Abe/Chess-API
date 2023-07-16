process.env.NODE_ENV = "test";
const app = require("../app.js");
const request = require("supertest");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const testData = require("../db/data/test-data/index.js");

afterAll(() => db.end());

beforeEach(() => seed(testData));

describe("hello world test", () => {
  it("should return Hello World!", () => {
    return request(app)
      .get("/")
      .expect(200)
      .then((res) => {
        console.log(Object.keys(res), "<<<<<<<<<<<<<< response");
        expect(res.text).toBe("Hello World!");
      });
  });
});
