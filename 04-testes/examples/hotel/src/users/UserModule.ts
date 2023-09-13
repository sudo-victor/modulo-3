import { UserController } from "./controllers/UserController";
import { User } from "./entities/User";
import { UserRepository } from "./repositories/UserRepository";
import { UserService } from "./services/UserService";

class UserModule {
  static getInstances() {
    const repository = new UserRepository(User)
    const service = new UserService(repository)
    const controller = new UserController(service)

    return { repository, service, controller }
  }
}

const userController = UserModule.getInstances().controller

export { UserModule }