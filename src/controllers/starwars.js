const { getPeopleData, getPlanetsData } = require('../datasources/starwars')
const sorters = require('../helpers/sorters')

const getPeople = async (req, res) => {
  const { sortBy } = req.query

  // Validate sortBy parameter
  if (sortBy && !Object.keys(sorters).includes(sortBy)) {
    res.status(400)
    res.send(`sortBy parameter must be in [${Object.keys(sorters)}]`)
    return
  }

  let people = await getPeopleData()

  if (sortBy) {
    people = people.sort(sorters[sortBy])
  }

  res.json(people)
}

const getPlanets = async (req, res) => {
  const planets = await getPlanetsData()

  res.json(planets)
}

module.exports = {
  getPeople,
  getPlanets
}
