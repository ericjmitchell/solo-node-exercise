const request = require("supertest");
const app = require("../src/app");

describe("Test the people path", () => {
  test("It should get an array of starwars people", async () => {
    const response = await request(app).get("/people");
    expect(response.statusCode).toBe(200);
  });
});