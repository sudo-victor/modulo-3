import { User } from "./user";
import { CreateUserDTO } from "./user.dto";

export class UserRepository {
  constructor(private model: typeof User) {}

  async findByEmail(email: string) {
    return await this.model.findOne({ email })
  }

  async findById(id: string) {
    return await this.model.findById(id)
  }


  async create(data: CreateUserDTO) {
    return await this.model.create(data)
  }

}
// Service -> Repository -> model