class OrderService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const result = await this.repository.create(data)
    return result
  }

  async update(id, data) {
    const orderExists = await this.repository.getById(id)
    if (!orderExists) {
      return "Order not found"
    }

    return this.repository.update(id, data)
  }
}

export { OrderService }