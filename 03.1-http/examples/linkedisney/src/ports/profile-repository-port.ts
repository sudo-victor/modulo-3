import { IProfile } from "../profiles/profile-domain";
import { CreateProfileDTO } from "../profiles/profile-dto";

export interface IProfileRepositoryPort {
  create(profile: CreateProfileDTO): Promise<IProfile>;
  findById(id: string): Promise<IProfile | undefined>;
  pushJob(userId: string, jobId: string): Promise<IProfile>
  findAll(): Promise<IProfile[]>
}