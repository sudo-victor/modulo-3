import { JobRepository } from "../jobs/job-repository";
import { CreateProfileDTO, PushExperienceDTO } from "./profile-dto";
import { ProfileRepository } from "./profile-repository";

export class ProfileService {
  constructor(
    private repository: ProfileRepository,
    private jobRepository: JobRepository
  ) {}

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

  async pushExperience(userId: string, job: PushExperienceDTO) {
    const user = await this.repository.findById(userId)
    if (!user) {
      return {
        error: true,
        message: "User not found",
        status: 404
      }
    }

    const jobCreated = await this.jobRepository.create(job)

    const userUpdated = await this.repository.pushJob(userId, jobCreated.id)

    return userUpdated
  }

  async list() {
    return await this.repository.findAll()
  }

  private doesStatusIsValid(status: string) {
    if (!status) return true

    const validStatus = ["open to work", "closed", "hiring"]
    return validStatus.includes(status)
  }
}