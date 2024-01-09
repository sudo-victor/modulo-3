import { randomUUID } from "node:crypto"
import { IProfileRepositoryPort } from "../ports/profile-repository-port";
import { CreateProfileDTO } from "./profile-dto";
import { IProfile } from "./profile-domain";

export class ProfileRepositoryInMemory implements IProfileRepositoryPort {
  items: IProfile[] = []

  async create(profile: CreateProfileDTO): Promise<IProfile> {
    const newProfile = {
      id: randomUUID(),
      ...profile
    } as IProfile
    
    this.items.push(newProfile)

    return newProfile
  }

  async findById(id: string): Promise<IProfile | undefined> {
    return this.items.find((item) => item.id === id)
  }

  async pushJob(userId: string, jobId: string): Promise<IProfile> {
    const currentProfile = this.items.find((item) => item.id === userId)
    currentProfile?.job.push(jobId)
    return currentProfile as IProfile
  }

  async findAll(): Promise<IProfile[]> {
    return this.items
  }
}