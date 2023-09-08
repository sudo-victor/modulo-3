import { jest } from "@jest/globals"
import { UserService } from "./UserService.js"
import { Crypt } from "../../utils/Crypt.js"

const userRepositoryMock = {
  findByEmail: (email) => Promise.resolve({}),
  findAll: () => Promise.resolve([]),
  create: (data) => Promise.resolve({})
}

const photoRepositoryMock = {
  create: (data) => Promise.resolve({})
}

// System under test
const sut = new UserService(userRepositoryMock, photoRepositoryMock)

describe("UserService", () => {
  it("deve ser capaz de retornar erro caso exista um usuário com o mesmo email no db", async () => {
    // preparaçao
    // mock do parametro
    const paramsMock = {
      email: "a@b.com",
      fullname: "Victor",
      nickname: "vitin_do_minecraft",
      password: "1234",
      photo: {
        filename: "imagem.png",
        mimetype: "image/png"
      }
    }
    // stub do repository func findByEmail
    // 1 - param é o obj em observacao
    // 2 - param
    jest.spyOn(userRepositoryMock, "findByEmail")
      .mockResolvedValue(true)

    const result = await sut.create(paramsMock)

    const expected = {
      error: true,
      message: "User already exists",
      status: 400
    }

    expect(userRepositoryMock.findByEmail).toHaveBeenCalledTimes(1)
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(paramsMock.email)
    expect(result).toStrictEqual(expected)
  })

  it("deve ser capaz de criar um usuário", async () => {
    // Arrange - Given - Configuracao
    /**
     * 1 - Param
     * 2 - findByEmail precisa ser false/null/undefined
     * 3 - Stub photoRepository.create
     * 4 - Crypt.encrypt
     * 5 - repository.create
     */
    const paramsMock = {
      email: "a@b.com",
      fullname: "Victor",
      nickname: "vitin_do_minecraft",
      password: "1234",
      photo: {
        filename: "imagem.png",
        mimetype: "image/png"
      }
    }

    const expected = {...paramsMock, _id: 1 }

    jest.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(null)
    jest.spyOn(photoRepositoryMock, "create").mockResolvedValue({ _id: 1 })
    jest.spyOn(Crypt, "encrypt").mockReturnValue("1234")
    jest.spyOn(userRepositoryMock, "create").mockResolvedValue(expected)

    // Act - When - Execucao

    const result = await sut.create(paramsMock)

    // Assert - Then - Validacao
    expect(result).toStrictEqual(expected)
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledTimes(1)
    expect(userRepositoryMock.create).toHaveBeenCalledTimes(1)
  })

  it("deve ser capaz de retornar todos os usarios", async () => {
    const usersMock = [
      {
        _id: 1,
        email: "a@b.com",
        fullname: "Victor",
        nickname: "vitin_do_minecraft",
        password: "1234",
        photo: {
          filename: "imagem.png",
          mimetype: "image/png"
        }
      },
      {
        _id: 2,
        email: "a@b.com",
        fullname: "Victor",
        nickname: "vitin_do_minecraft",
        password: "1234",
        photo: {
          filename: "imagem.png",
          mimetype: "image/png"
        }
      }
    ] 
    jest.spyOn(userRepositoryMock, "findAll").mockResolvedValue(usersMock)

    const result = await sut.findAll()

    // == ===
    expect(result.length).toStrictEqual(2)
    expect(result).toStrictEqual(usersMock)
  })
})
