class CarService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const result = await this.repository.create(data)
    return result
  }

  async findCarsByModel(model) {
    const result = await this.repository.findCarsByModel(model)
    return result
  }

  async findCarsByReleasedAt(releasedAt) {
    const result = await this.repository.findCarsByReleasedAt(releasedAt)
    return result
  }
}

export { CarService }
