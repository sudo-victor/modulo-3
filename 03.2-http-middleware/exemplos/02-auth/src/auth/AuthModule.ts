import { UserModule } from "../users/UserModule";
import { UserRepository } from "../users/UserRepository";
import { AuthController } from "./AuthController";
import { AuthService } from "./AuthService";

export class AuthModule {
  static build() {
    const userRepository = UserModule.build().repository
    const service = new AuthService(userRepository);
    const controller = new AuthController(service);
    return { controller }
  }
}
