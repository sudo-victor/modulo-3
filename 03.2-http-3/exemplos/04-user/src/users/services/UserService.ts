import { Crypt } from "../../utils/crypt"
import { UserRepository } from "../repositories/UserRepository"

class UserService {
  constructor(private repository: UserRepository) {}

  async create(body: any) {
    const userAlreadyExists = await this.repository.findByEmail(body.email)

    if (userAlreadyExists) {
      return {
        error: true,
        message: 'User already exists',
        status: 400
      }
    }

    const userToPersist = {
      ...body,
      password: Crypt.encrypt(body.password)
    }

    return this.repository.create(userToPersist)
  }

}

export { UserService }