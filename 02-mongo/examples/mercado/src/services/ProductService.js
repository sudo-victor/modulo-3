class ProductService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const result = await this.repository.create(data)
    return result
  }

  async findByName(name) {
    const result = await this.repository.findByName(name)
    return result
  }

  async findByCategory(category) {
    const result = await this.repository.findByCategory(category)
    return result
  }

  async delete(id) {
    const result = await this.repository.delete(id)
    return result
  }

  async update(id, data) {
    const product = await this.repository.findById(id)
    if (!product) {
      return "Product not found"
    }

    return this.repository.update(id, data)
  }
}

export { ProductService }