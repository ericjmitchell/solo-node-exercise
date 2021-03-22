const { getPeopleData, getPlanetsData, getPersonData } = require('../datasources/starwars')
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

  const updatedPlanets = await Promise.all(planets.map(async (p) => {
    p.residents = await Promise.all(p.residents.map(async (r) => {
      const person = await getPersonData(r)

      return person.name
    }))

    return p
  }))

  res.json(updatedPlanets)
}

module.exports = {
  getPeople,
  getPlanets
}
