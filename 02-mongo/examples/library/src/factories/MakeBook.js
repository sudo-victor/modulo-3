import { Book } from "../entities/Book.js"
import { BookRepository } from "../repositories/BookRepository.js"
import { BookService } from "../services/BookService.js"

class MakeBook {
  static getInstance(collection) {
    const repository = new BookRepository(collection, Book)
    const service = new BookService(repository)
    return service
  }
}

export { MakeBook }