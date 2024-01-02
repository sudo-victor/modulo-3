import { it, expect } from "vitest"
import { randomUUID } from "node:crypto"
import { ProfileService } from "../src/profiles/profile-service"
import { CreateProfileDTO } from "../src/profiles/profile-dto"
import { ProfileRepository } from "../src/profiles/profile-repository"
import { JobRepository } from "../src/jobs/job-repository"

// TDD -> 
const profileRepositoryFake = {
  create: (profile: CreateProfileDTO) => {
    return { id: randomUUID(),...profile}
  },
  findById: (id: string) => {
    return {}
  },
  pushJob: (userId: string, jobId: string) => {
    return {}
  },
  findAll: async () => {
    return []
  }
} as unknown as ProfileRepository
const jobRepositoryFake = {
  create: async (job: any) => {}
} as any as JobRepository

it("should be able to create a profile", async () => {
  const profileService = new ProfileService(profileRepositoryFake, jobRepositoryFake)
  const params = {
    fullname: "Tazio Arruda",
    bio: "",
    currentOccupation: "Dev",
    education: "Arnia",
    certifications: "",
    status: "open to work"
  }

  const result = await profileService.create(params) as any

  expect(result.id).toBeDefined()
  expect(result.fullname).toBe("Tazio Arruda")
})

it("should not be able to create a profile if status is invalid", async () => {
  const profileService = new ProfileService(profileRepositoryFake, jobRepositoryFake)
  const params = {
    fullname: "Tazio Arruda",
    bio: "",
    currentOccupation: "Dev",
    education: "Arnia",
    certifications: "",
    status: "invalid_status_error"
  }

  const result = await profileService.create(params) as any

  expect(result.error).toBeTruthy()
  expect(result.message).toBe("Invalid status")
  expect(result.status).toBe(400)
})