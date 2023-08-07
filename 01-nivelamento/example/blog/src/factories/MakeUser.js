import { UserRepository } from "../repositories/UserRepository.js"
import { UserService } from "../services/UserService.js"
import { User } from "../entities/User.js"
import { Post } from "../entities/Post.js"

class MakeUser {
  static getInstance() {
    const repository = new UserRepository([], User, Post)
    const service = new UserService(repository)
    return service
  }
}

export { MakeUser }
