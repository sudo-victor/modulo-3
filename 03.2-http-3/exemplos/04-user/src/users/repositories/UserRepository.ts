import { CreateUserDTO } from "../dtos/createUserDto"
import { User } from "../entities/User"

class UserRepository {
  constructor(private model: typeof User) {}

  async findByEmail(email: string) {
    return this.model.findOne({ email })
  }

  async findById(id: string) {
    return this.model.findById(id).populate('photo')
  }

  async create(user: CreateUserDTO) {
    return this.model.create(user)
  }
}

export { UserRepository }