import { UserModule } from "../users/UserModule";
import { AuthController } from "./controllers/AuthController";
import { AuthService } from "./services/AuthService";

class AuthModule {
  static build() {
    const service = new AuthService(UserModule.build().repository);
    const controller = new AuthController(service);
    return { service, controller }
  }
}

export { AuthModule }