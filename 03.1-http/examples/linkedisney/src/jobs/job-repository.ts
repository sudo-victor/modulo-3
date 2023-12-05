import { Job } from "./job-domain";

interface CreateJobDTO {
  company: string;
  startedAt: Date;
  endedAt: Date;
  occupation: string;
}

export class JobRepository {
  constructor(private model: typeof Job) {}

  async create(job: CreateJobDTO) {
    return await this.model.create(job)
  }
}