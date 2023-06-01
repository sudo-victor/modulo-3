export class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async findAll() {
    return this.repository.findAll();
  }

  async create(body) {
    const userAlreadyExists = await this.repository.findByEmail(body.email)
    if(userAlreadyExists) {
      return {
        error: true,
        message: 'User already exists'
      }
    }

    return this.repository.create(body)
  }
}