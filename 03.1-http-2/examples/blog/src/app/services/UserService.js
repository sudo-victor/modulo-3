class UserService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const result = await this.repository.create(data)
    return result
  }

  async index() {
    const result = await this.repository.findAll()
    return result
  }
}

export { UserService }
