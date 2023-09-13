import bcrypt from "bcrypt"
import { UserRepository } from "../repositories/UserRepository"

class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: any) {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if (userAlreadyExists) {
      return {
        error: true,
        message: "User already exists",
        status: 400
      }
    }

    const userToPersist = {
      ...data,
      password: bcrypt.hashSync(data.password, 8)
    }

    return this.repository.create(userToPersist)
  }
}

export { UserService }
