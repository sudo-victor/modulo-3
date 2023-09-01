import { User } from "../domain/User.js"
import { UserRepository } from "../app/repositories/UserRepository.js"
import { AuthService } from "../app/services/AuthService.js"
import { AuthController } from "../app/controllers/AuthController.js"

class MakeAuth {
  static getInstance() {
    const repository = new UserRepository(User)
    const service = new AuthService(repository)
    const controller = new AuthController(service)
    return controller
  }
}

export { MakeAuth }