import { jobRepository } from "../jobs";
import { ProfileController } from "./profile-controller";
import { Profile } from "./profile-domain";
import { ProfileRepositoryMongo } from "./profile-repository";
import { ProfileService } from "./profile-service";

export class ProfileModule {
  static make() {
    const repository = new ProfileRepositoryMongo(Profile)
    const service = new ProfileService(repository, jobRepository)
    const controller = new ProfileController(service)
    return { controller }
  }
}

