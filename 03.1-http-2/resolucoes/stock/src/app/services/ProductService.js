import { makeProduct } from "../../utils/factories/productFactory.js";

export class ProductService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(body) {
    const product = makeProduct(body);

    const result = await this.repository.create(product)

    return result
  }

  async incrementAmount(id) {
    const currentProduct = await this.repository.getById(id);

    const data = { amount: currentProduct.amount + 1 }

    return this.repository.update(id, data)
  }
}