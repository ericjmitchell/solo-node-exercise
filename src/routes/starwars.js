const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler')

const { getPeople, getPlanets } = require('../controllers/starwars')

router.get('/people', asyncHandler(getPeople))

router.get('/planets', asyncHandler(getPlanets))

module.exports = router
