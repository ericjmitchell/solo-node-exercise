const { getPeopleData, getPlanetsData } = require('../datasources/starwars')

const getPeople = async (res, req) => {
    const people = await getPeopleData()

    req.json(people)
}

const getPlanets = async (res, req) => {
    const planets = await getPlanetsData()

    req.json(planets)
}

module.exports = {
    getPeople,
    getPlanets
}