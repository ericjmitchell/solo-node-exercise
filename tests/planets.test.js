const request = require('supertest')
const app = require('../src/app')

describe('Test the planets path', () => {
  test('It should get an array of starwars planets', async () => {
    const response = await request(app).get('/planets')
    expect(response.statusCode).toBe(200)
    expect(response.body.success).toBe(true)
    expect(response.body.results.length).toBeGreaterThan(10)

    expect(response.body.results[0].residents[0]).toBe('Luke Skywalker')
  })
})
