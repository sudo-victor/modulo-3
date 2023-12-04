import { ProfileController } from "./profile-controller";
import { Profile } from "./profile-domain";
import { ProfileRepository } from "./profile-repository";
import { ProfileService } from "./profile-service";

export class ProfileModule {
  static make() {
    const repository = new ProfileRepository(Profile)
    const service = new ProfileService(repository)
    const controller = new ProfileController(service)
    return { controller }
  }
}

