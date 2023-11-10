const MovieService = require('../services/MovieService')

const service = new MovieService()

const movie = service.create(
  "A espera de uma Barbie",
  "HORRIVEL",
  2023,
  "Lucas Yago",
  "TERROR"
)

const movie2 = service.create(
  "A espera de uma Barbie 2",
  "HORRIVEL",
  2024,
  "Lucas Yago",
  "TERROR"
)

console.log(service.findById(movie2.id))