import { ProductRepository } from "../repositories/ProductRepository.js"
import { ProductService } from "../services/ProductService.js"
import { Product } from "../entities/Product.js"

class MakeProduct {
  static getInstance(collection) {
    const repository = new ProductRepository(collection, Product)
    const service = new ProductService(repository)
    return service
  }
}

export { MakeProduct }
