import { ProductController } from "../controllers/ProductController"
import { Product } from "../entities/Product"
import { ProductRepository } from "../repositories/ProductRepository"
import { ProductService } from "../services/ProductService"

export function makeProduct() {
  const productRepository = new ProductRepository(Product)
  const productService = new ProductService(productRepository)
  const productController = new ProductController(productService)
  return productController
}