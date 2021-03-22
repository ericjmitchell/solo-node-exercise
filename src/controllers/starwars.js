const { getPeopleData, getPlanetsData, getPersonData } = require('../datasources/starwars')
const sorters = require('../helpers/sorters')

const getPeople = async (req, res) => {
  const { sortBy } = req.query

  // Validate sortBy parameter
  if (sortBy && !Object.keys(sorters).includes(sortBy)) {
    res.status(400)
    res.json({
      success: false,
      message: `sortBy parameter must be in [${Object.keys(sorters)}]`
    })
    return
  }

  let people = await getPeopleData()

  if (sortBy) {
    people = people.sort(sorters[sortBy])
  }

  res.json({
    success: true,
    results: people
  })
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

  res.json({
    success: true,
    results: updatedPlanets
  })
}

module.exports = {
  getPeople,
  getPlanets
}
