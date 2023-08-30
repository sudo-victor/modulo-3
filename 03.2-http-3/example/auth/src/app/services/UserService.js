import { Crypt } from "../../utils/Crypt.js"

class UserService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if (userAlreadyExists) {
      return {
        error: true,
        message: "User already exists",
        status: 400
      }
    }

    const user = {
      ...data,
      password: Crypt.encrypt(data.password)
    }

    return this.repository.create(user)
  }

}

export { UserService }