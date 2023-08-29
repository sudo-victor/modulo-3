import { hashSync } from "bcrypt"

class UserService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const newUser = {
      ...data,
      password: hashSync(data.password, 8)
    }

    const result = await this.repository.create(newUser)
    return result
  }

  async index() {
    const result = await this.repository.findAll()
    return result
  }
}

export { UserService }
