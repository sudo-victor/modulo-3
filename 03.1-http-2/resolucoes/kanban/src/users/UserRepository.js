export class UserRepository {
  constructor(model) {
    this.model = model;
  }

  async create(user) {
    return this.model.create(user);
  }

  async findByEmail(email) {
    return this.model.findOne({ email });
  }
}