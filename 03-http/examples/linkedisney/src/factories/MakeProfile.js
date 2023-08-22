import { ProfileController } from "../app/controllers/ProfileController.js";
import { ProfileService } from "../app/services/ProfileService.js"
import { ProfileRepository } from "../app/repositories/ProfileRepository.js";
import { Profile } from "../domains/ProfileMongoose.js";

class MakeProfile {
  static getInstance(collection) {
    const repository = new ProfileRepository(collection, Profile)
    const service = new ProfileService(repository)
    const controller = new ProfileController(service)

    return controller
  }
}

export { MakeProfile }
