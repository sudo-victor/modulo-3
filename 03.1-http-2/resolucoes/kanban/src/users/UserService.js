export class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(body) {
    const userAlreadyExists = await this.repository.findByEmail(body.email)
    if(userAlreadyExists) {
      return {
        error: true,
        message: 'User already exists',
        status: 400
      }
    }

    return this.repository.create(body)
  }
}