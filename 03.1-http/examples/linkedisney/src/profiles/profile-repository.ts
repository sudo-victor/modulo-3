import { IProfileRepositoryPort } from "../ports/profile-repository-port";
import { Profile } from "./profile-domain";
import { CreateProfileDTO } from "./profile-dto";

export class ProfileRepositoryMongo implements IProfileRepositoryPort {
  constructor(private model: typeof Profile) {}

  async create(profile: CreateProfileDTO) {
    return await this.model.create(profile)
  }

  async findById(id: string) {
    return await this.model.findById(id)
  }

  async pushJob(userId: string, jobId: string) {
    return await this.model.findByIdAndUpdate(userId, {
      $push: { job: jobId }
    }, { new: true })
  }

  async findAll() {
    return await this.model.find().populate("job")
  }
}