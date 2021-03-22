const request = require("supertest");
const app = require("../src/app");

describe("Test the people path", () => {
  test("It should get an array of starwars people", async () => {
    const response = await request(app).get("/people");
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(10)
    expect(response.body[0].name).toBe('Luke Skywalker')
  });
  
  test("It should sort by name", async () => {
    const response = await request(app).get("/people?sortBy=name");
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(10)
    expect(response.body[0].name).toBe('Ackbar')
  });
  
  test("It should sort by height", async () => {
    const response = await request(app).get("/people?sortBy=height");
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(10)
    expect(response.body[0].name).toBe('Yarael Poof')
  });
  
  test("It should sort by mass", async () => {
    const response = await request(app).get("/people?sortBy=mass");
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(10)
    expect(response.body[0].name).toBe('Grievous')
  });
});