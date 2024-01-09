import { randomUUID } from "node:crypto"
import { describe, it, beforeEach, expect, vi } from "vitest"
import { ProfileService } from "../../src/profiles/profile-service"
import { CreateProfileDTO } from "../../src/profiles/profile-dto"

import { JobRepository } from "../../src/jobs/job-repository"
import { ProfileRepositoryMongo } from "../../src/profiles/profile-repository"
import { IProfileRepositoryPort } from "../../src/ports/profile-repository-port"
// it/test -> test case -> caso de teste
// describe -> Separar os test cases em contexto
// expect -> Asserçao -> Assert -> Valida se o resultado é como esperado
// spyOn -> Observa todo o comportamento de uma funcao em um test case

const profileRepositoryFake = {
  create: async (profile: CreateProfileDTO) => {
    return { ...profile, id: randomUUID() }
  },
  findById: (id: string) => {
    return {
      id: "id-fake",
      fullname: "Tazio Arruda",
      bio: "",
      currentOccupation: "Garoto de progama JS",
      education: "Arnia",
      status: "open_to_work",
      job: [],
    }
  },
  pushJob(userId: string, jobId: string) {
    return {
      id: "id-fake",
      fullname: "Tazio Arruda",
      bio: "",
      currentOccupation: "Garoto de progama JS",
      education: "Arnia",
      status: "open_to_work",
      job: [jobId],
    }
  },
  findAll: () => {
    return [
      {
        id: "id-fake",
        fullname: "Tazio Arruda",
        bio: "",
        currentOccupation: "Garoto de progama JS",
        education: "Arnia",
        status: "open_to_work",
        job: [],
      }
    ]
  }
} as unknown as IProfileRepositoryPort
const jobRepositoryFake = {
  create: (job: any) => {
    return {
      id: randomUUID(),
      company: job.company,
      startedAt: job.startedAt,
      endedAt: job.endedAt,
      occupation: job.occupation
    }
  }
} as unknown as JobRepository
let sut: ProfileService;

describe("Profile Service", () => {
  beforeEach(() => {
    sut = new ProfileService(profileRepositoryFake, jobRepositoryFake)
  })

  describe("Create Profile", () => {
    it("should be able to create a profile", async () => {
      // Arrange -> Preparar o nosso teste
      const paramsDummy = {
        fullname: "Wafiter",
        bio: "",
        currentOccupation: "Dev",
        education: "Arnia",
        certifications: "Arnia",
        status: "open to work"
      } as CreateProfileDTO

      // Act -> Executar o teste
      const result = (await sut.create(paramsDummy)) as any

      // Assert -> Validar se o que estamos testando funcionou como esperado
      expect(result.id).toBeDefined()
    })

    it("should not be able to create a profile with invalid status", async () => {
      // Arrange -> Preparar o nosso teste
      const paramsDummy = {
        fullname: "Wafiter",
        bio: "",
        currentOccupation: "Dev",
        education: "Arnia",
        certifications: "Arnia",
        status: "invalid status"
      } as CreateProfileDTO

      // Act -> Executar o teste
      const result = (await sut.create(paramsDummy)) as any

      // Assert -> Validar se o que estamos testando funcionou como esperado
      expect(result.message).toBe("Invalid status")
      expect(result.error).toBeTruthy()
      expect(result.status).toEqual(400)
    })
  })

  describe("Push Experience", () => {
    it("should be able to add a new experience job", async () => {
      // Arrange -> Preparar o necessário para executar o teste
      const userIdDummy = "user-id"
      const jobDummy = {
        company: "iFood",
        startedAt: new Date("2023-01-01"),
        endedAt: new Date(),
        occupation: "Dev"
      }
      vi.spyOn(profileRepositoryFake, "findById").mockResolvedValue({
        id: "id-fake",
        fullname: "Tazio Arruda",
        bio: "",
        currentOccupation: "Garoto de progama JS",
        education: "Arnia",
        status: "open to work",
        job: [],
      } as any)

      // Act -> Execucao
      const result = await sut.pushExperience(userIdDummy, jobDummy) as any

      // Assert -> Esperado
      expect(result.id).toBeDefined()
      expect(result.job).toHaveLength(1)
    })

    it("should not be able to add a new experience if user not found", async() => {
        // Arrange -> Preparar o necessário para executar o teste
        const userIdDummy = "user-id"
        const jobDummy = {
          company: "iFood",
          startedAt: new Date("2023-01-01"),
          endedAt: new Date(),
          occupation: "Dev"
        }
        vi.spyOn(profileRepositoryFake, "findById").mockResolvedValue(null as any)
  
        // Act -> Execucao
        const result = await sut.pushExperience(userIdDummy, jobDummy) as any

        // Assert -> Esperado
        const expected = {
          error: true,
          message: "User not found",
          status: 404
        }
        expect(result).toEqual(expected)
    })
  })

  describe("List Profile", () => {
    it("should be able to list the profiles", async () => {
      // Arrange
      const findAllSpy = vi.spyOn(profileRepositoryFake, "findAll")
      // Act
      const result = await sut.list()
      // Assert
      expect(result).toHaveLength(1)
      expect(findAllSpy).toHaveBeenCalledOnce()
    })
  })
})
