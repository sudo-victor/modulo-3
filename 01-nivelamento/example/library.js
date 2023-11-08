
class Entity {
  constructor() {
    this.initialize()
  }

  initialize() {
    this.id = new Date().getTime()
    this.createdAt = new Date() 
    this.updatedAt = new Date()
    this.deleteAt = null
  }

  delete() {
    this.deleteAt = new Date()
  }

}

class Book extends Entity {
  constructor(title, description, releasedAt, author, category) {
    super()
    this.title = title
    this.description = description
    this.releasedAt = releasedAt
    this.author = author
    this.category = category
  }

  touch() {
    this.updatedAt = new Date()
  }
}

class BookRepository {
  database = []

  create(title, description, releasedAt, author, category) {
    const book = new Book(title, description, releasedAt, author, category)
    this.database.push(book)
    return book
  }

  findAll() {
    return this.database
  }
}

const repository = new BookRepository()

repository.create("HP", "asdasd", 2023, "asd", "acao")
console.log(repository.findAll())
