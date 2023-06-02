import { UserRepository } from "./UserRepository.js"
import { UserController } from "./UserController.js"
import { UserService } from "./UserService.js"
import { User } from "./User.js"

export class UserModule {
  static build() {
    const repository = new UserRepository(User)
    const service = new UserService(repository)
    const controller = new UserController(service)
    return { controller, repository }
  }
}
