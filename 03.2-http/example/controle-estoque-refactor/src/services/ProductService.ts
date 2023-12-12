import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

// Data transfer object
interface CreateProductDTO { name: string; amount: number }

export class ProductService {
  constructor(private repository: ProductRepository) {}

  async list() {
    return this.repository.findAll()
  }

  async create(data: CreateProductDTO) {
    const code = this.generateCodeByProductName(data.name)

    const result = this.repository.create({
      ...data,
      code
    })
  
    return result
  }

  generateCodeByProductName(productName: string) {
    const initial = productName.slice(0, 3).toLocaleUpperCase()
    const currentDate = new Date().getTime()
    return `#${initial}${currentDate}`
  }
}
