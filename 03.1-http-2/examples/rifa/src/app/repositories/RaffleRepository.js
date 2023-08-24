class RaffleRepository {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    return this.model.create(data)
  }

  async findById(id) {
    return this.model.findById(id)
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
  }
}

export { RaffleRepository }