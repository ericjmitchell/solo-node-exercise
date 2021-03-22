const request = require("supertest");
const app = require("../src/app");

describe("Test the planets path", () => {
  test("It should get an array of starwars planets", async () => {
    const response = await request(app).get("/planets");
    expect(response.statusCode).toBe(200);
    expect(response.body.planets.length).toBeGreaterThan(10)

    expect(resonse.boyd.planets[0].residents[0]).toBe('Leia Organa')
  });
});