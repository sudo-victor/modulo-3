import { Profile } from "./profile-domain";
import { CreateProfileDTO } from "./profile-dto";

export class ProfileRepository {
  constructor(private model: typeof Profile) {}

  async create(profile: CreateProfileDTO) {
    return await this.model.create(profile)
  }
}