import { User } from "./User";
import { UserController } from "./UserController";
import { UserRepository } from "./UserRepository";
import { UserService } from "./UserService";

export class UserModule {
  static build() {
    const repository = new UserRepository(User)
    const service = new UserService(repository)
    const controller = new UserController(service)
    return { controller, repository }
  }
}
