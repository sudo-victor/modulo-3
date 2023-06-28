import { PhotoModule } from "../photos/PhotoModule"
import { UserController } from "./controllers/UserController"
import { User } from "./entities/User"
import { UserRepository } from "./repositories/UserRepository"
import { UserService } from "./services/UserService"

class UserModule {
  static build() {
    const repository = new UserRepository(User)
    const service = new UserService(repository, PhotoModule.build().repository)
    const controller = new UserController(service)
    return { repository, service, controller }
  }
}

export { UserModule }