// Injecao de Dependencias

class MovieRepository {
  constructor(database) {
    this.database = database
  }

  create(movie) {
    this.database.push(movie)
  }

  findByTitle(title) {
    return this.database.find((item) => item.title === title)
  }

  findAll() {
    return this.database
  }

  findById(id) {
    return this.database.find((item) => item.id === id)
  }

}


module.exports = MovieRepository