const MovieRepository = require('../data/repositories/MovieRepository')
const Movie = require("../data/entities/Movie")

const database = []

const repository = new MovieRepository(database)

class MovieService {
  create(title, description, releasedAt, director, category) {
    // validar se já foi cadastrado
    const movieAlreadyExists = repository.findByTitle(title)

    if (movieAlreadyExists) {
      return "Ja existe, irmao"
    }

    // criar o obj movie
    const movie = new Movie(title, description, releasedAt, director, category)

    // salvar no banco de dados
    repository.create(movie)

    return movie
  }

  findById(id) {
    return repository.findById(id)
  }

  findAll() {
    return repository.findAll()
  }
}

module.exports = MovieService