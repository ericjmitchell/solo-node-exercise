const axios = require('axios').default

const BASE_URL = 'https://swapi.dev/api'

const retrieveArray = async (endpoint) => {
  let items = []
  let next = null

  do {
    const url = next || `${BASE_URL}/${endpoint}`
    const resp = await axios.get(url)
    next = resp.data.next
    items = items.concat(resp.data.results)
  } while (next)

  return items
}

const getPeopleData = async () => {
  return retrieveArray('people')
}

const getPlanetsData = async () => {
  return retrieveArray('planets')
}

const getPersonData = async (url) => {
  const resp = await axios.get(url)

  return resp.data
}

module.exports = {
  getPeopleData,
  getPlanetsData,
  getPersonData
}
