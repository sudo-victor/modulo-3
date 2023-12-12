import { UserModule } from "../users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export class AuthModule {
  static getInstance() {
    const { repository } = UserModule.getInstance()
    const service = new AuthService(repository)
    const controller = new AuthController(service)
    return { service, controller }
  }
}