import { User } from "./User"

export class UserRepository {
  model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(user: any) {
    return this.model.create(user);
  }

  async findByEmail(email: string) {
    return this.model.findOne({ email });
  }
  
  async findAll() {
    return this.model.find();
  }
}