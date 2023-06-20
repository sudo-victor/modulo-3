import { User } from "../entities/User"

class UserRepository {
  constructor(private model: typeof User) {}

  async findByEmail(email: string) {
    return this.model.findOne({ email })
  }

  async create(user: any) {
    return this.model.create(user)
  }
}

export { UserRepository }