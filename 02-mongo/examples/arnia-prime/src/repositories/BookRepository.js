class BookRepository {
  database = []

  create(book) {
    this.database.push(book)
  }

  findAll() {
    return this.database
  }
}

module.exports = BookRepository