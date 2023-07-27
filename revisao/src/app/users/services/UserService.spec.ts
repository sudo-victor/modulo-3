import { CreatePhotoDTO } from "../../photos/dtos/createPhotoDto"
import { PhotoRepository } from "../../photos/repositories/PhotoRepository"
import { CreateUserServiceDTO } from "../dtos/createUserDto"
import { UserRepository } from "../repositories/UserRepository"
import { UserService } from "./UserService"
import { User } from "../entities/User"

// System under test
const repository = { findByEmail: jest.fn() } as unknown as UserRepository;
const photoRepository = { create: jest.fn() } as unknown as  PhotoRepository;
const sut = new UserService(repository, photoRepository);


describe("UserService", () => {
  describe("#create", () => {
    it("should be able to return a error when user already exists", async () => {
      const paramsMock = { email: 'user@email.com' } as CreateUserServiceDTO
      jest.spyOn(repository, "findByEmail").mockReturnValue({} as any)

      const result = await sut.create(paramsMock)
      const expected =  { error: true, message: 'User already exists', status: 400 }
      
      
      expect(result).toStrictEqual(expected)
    })

    it("should be able to create a user", () => {
      
    })
  })
})