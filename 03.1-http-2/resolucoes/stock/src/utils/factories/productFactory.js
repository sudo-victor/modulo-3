import { ProductController } from "./../../app/controllers/ProductController.js"
import {ProductService} from "./../../app/services/ProductService.js"
import {ProductRepository} from "./../../app/repositories/ProductRepository.js"
import {Product} from "./../../app/entities/Product.js"

export const makeProduct = (data) => {
  const code = data.name.slice(0, 3) + Date.now()

  return {
    name: data.name,
    amount: data.amount,
    code
  }
}

export const makeProductDomain = () => {
  const repository = new ProductRepository(Product)
  const service = new ProductService(repository)
  return new ProductController(service)
}
