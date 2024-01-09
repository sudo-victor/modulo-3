import { IProfileRepositoryPort } from "../ports/profile-repository-port";
import { CreateProfileDTO } from "./profile-dto";

export class ProfileRepositoryMysql implements IProfileRepositoryPort {
  create(profile: CreateProfileDTO): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  pushJob(userId: string, jobId: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}