import { Job } from "./job-domain";
import { JobRepository } from "./job-repository";

export const jobRepository = new JobRepository(Job)