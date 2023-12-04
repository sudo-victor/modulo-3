import { CreateProfileDTO } from "./profile-dto";
import { ProfileRepository } from "./profile-repository";

export class ProfileService {
  constructor(private repository: ProfileRepository) {}

  async create(data: CreateProfileDTO) {
    if (!this.doesStatusIsValid(data.status)) {
      return {
        error: true,
        message: "Invalid status",
        status: 400
      }
    }

    return await this.repository.create(data)
  }

  private doesStatusIsValid(status: string) {
    if (!status) return true

    const validStatus = ["open to work", "closed", "hiring"]
    return validStatus.includes(status)
  }
}