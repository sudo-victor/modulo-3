import { UserModule } from "../users/UserModule";
import { UserRepository } from "../users/repositories/UserRepository";
import { AuthController } from "./controllers/AuthController";
import { AuthService } from "./services/AuthService";

class AuthModule {
  static getInstances() {
    const { repository } = UserModule.getInstances()
    const service = new AuthService(repository)
    const controller = new AuthController(service)
    return { service, controller }
  }
}

export { AuthModule }