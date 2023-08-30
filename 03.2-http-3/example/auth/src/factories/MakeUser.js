import { UserRepository } from "../app/repositories/UserRepository.js"
import { UserService } from "../app/services/UserService.js"
import { UserController } from "../app/controllers/UserController.js"
import { User } from "../domain/User.js"

class MakeUser {
  static getInstance() {
    const repository = new UserRepository(User)
    const service = new UserService(repository)
    const controller = new UserController(service)
    return controller
  }
}

export { MakeUser }