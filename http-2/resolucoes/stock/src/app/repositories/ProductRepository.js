export class ProductRepository {
  constructor(model) {
    this.model = model
  }

  async create(product) {
    return this.model.create(product)
  }

  async getById(id) {
    return this.model.findById(id)
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
  }
}
