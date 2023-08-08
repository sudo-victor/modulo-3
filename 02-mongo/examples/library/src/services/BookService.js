class BookService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const bookAlreadyExists = await this.repository.findByTitle(data.title)
    if (bookAlreadyExists) {
      return "Book already exists"
    }

    const book = await this.repository.create(data)
    return book
  }

  async findByTitle(title) {
    const result = await this.repository.findByTitle(title)
    return result
  }

  async findByAuthor(author) {
    const result = await this.repository.findByAuthor(author)
    return result
  }

  async update(id, data) {
    const book = await this.repository.findById(id)
    if(!book) {
      return "Book not found"
    }

    const result = await this.repository.update(id, data)
    return result
  }

  async delete(id) {
    const book = await this.repository.delete(id)
    return book
  }
}

export { BookService }
