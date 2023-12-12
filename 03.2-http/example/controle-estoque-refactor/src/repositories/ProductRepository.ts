import { Product } from "../entities/Product";

interface CreateProductDTO {
  name: string;
  amount: number;
  code: string;
}

export class ProductRepository {
  constructor(private model: typeof Product) {}

  async create(product: CreateProductDTO) {
    return await this.model.create(product)
  }

  async findAll() {
    return await this.model.find()
  }

}