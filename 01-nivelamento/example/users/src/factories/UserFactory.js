import { User } from "../entities/User.js"
import { UserRepository } from "../repositories/UserRepository.js"
import { UserService } from "../services/UserService.js"

function makeUser(database) {
  const repository = new UserRepository(database, User)
  const service = new UserService(repository)
  return service
}

export { makeUser }