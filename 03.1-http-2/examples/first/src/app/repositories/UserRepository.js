class UserRepository {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    return this.model.create(data)
  }

  async findByEmail(email) {
    return this.model.findOne({ email })
  }
}

export { UserRepository }