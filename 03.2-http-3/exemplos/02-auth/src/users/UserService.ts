import { UserRepository } from "./UserRepository"
import bcrypt from "bcrypt"

export class UserService {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async create(user: any) {
    const userAlreadyExists = await this.repository.findByEmail(user.email)
    if(userAlreadyExists) {
      return { error: true, message: 'User already exists', status: 400 }
    }

    const payload = {
      ...user,
      password: bcrypt.hashSync(user.password, 8)
    }
    const result = await this.repository.create(payload)
  
    return {
      error: false,
      user: result
    }
  }

  async findAll() {
    return this.repository.findAll()
  }
}