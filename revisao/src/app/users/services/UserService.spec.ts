import { CreatePhotoDTO } from "../../photos/dtos/createPhotoDto"
import { PhotoRepository } from "../../photos/repositories/PhotoRepository"
import { CreateUserServiceDTO } from "../dtos/createUserDto"
import { UserRepository } from "../repositories/UserRepository"
import { UserService } from "./UserService"
import { User } from "../entities/User"
import bcrypt from "bcrypt"

// System under test
const repository = { findByEmail: jest.fn(), create: jest.fn() } as unknown as UserRepository;
const photoRepository = { create: jest.fn() } as unknown as  PhotoRepository;
const sut = new UserService(repository, photoRepository);

describe("UserService", () => {
  describe("#create", () => {
    it('should be able to return a error if user already exists in database', async () => {
      jest.spyOn(repository, "findByEmail").mockResolvedValue({} as any)

      const paramsMock: CreateUserServiceDTO = { 
        email: "",
        name: "",
        nickname: "",
        password: "",
        photo: {} as CreatePhotoDTO
      }

      const result = await sut.create(paramsMock)

      const expected =  { error: true, message: 'User already exists', status: 400 }

      expect(result).toStrictEqual(expected)
    })

    it('should be able to create a new user', async () => {
      jest.spyOn(repository, "findByEmail").mockResolvedValue(null)
      jest.spyOn(photoRepository, "create").mockResolvedValue({ id: '' } as any)
      jest.spyOn(bcrypt, "hashSync").mockReturnValue("1234")
      jest.spyOn(repository, "create").mockResolvedValue({ _doc: { name: 'teste', id: '123' } } as any)

      const paramsMock = { email: '', photo: {}, password: '' } as CreateUserServiceDTO

      const result = await sut.create(paramsMock)

      const expected = {  name: 'teste', id: '123', photo: { id: '' } }

      expect(result).toStrictEqual(expected)
    })
  })
})