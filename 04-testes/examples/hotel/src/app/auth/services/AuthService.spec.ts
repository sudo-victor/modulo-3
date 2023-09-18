import { describe, test, it, vi, expect, beforeEach } from "vitest";
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

import { AuthService } from "./AuthService";
import { UserRepository } from "../../users/repositories/UserRepository";
import { makeError } from "../../../utils/makeError";

const userRepositoryMock = { findByEmail: vi.fn() } as any as UserRepository
const sut = new AuthService(userRepositoryMock)

describe("AuthService", () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should be able to return an error if email not found", async () => {
    // Preparando o teste
    // mockResolvedValue -> Promise sucesso
    // mockRejectedValue -> Promise erro
    // mockReturnValue -> retorno
    const paramsMock = { email: 'a@b.com', password: '1234' }
    vi.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(null)

    // executar
    const result = await sut.login(paramsMock)

    const expected = {
      error: true,
      message: "E-mail/password is invalid",
      status: 400
    }

    expect(result).toStrictEqual(expected)
  })

  it("should be able to return an error if the password was invalid", async () => {
    /**
     * Preparaçao
     * 1 - paramsMock
     * 2 - findByEmail retornar true
     * 3 - compareSync false
     */
    const paramsMock = { email: "a@b.com", password: "1234" }
    const userMock = { name: "Victor", _id: 1, password: "asdjhaldjkasd" } as any
    vi.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(userMock)
    vi.spyOn(bcrypt, "compareSync").mockReturnValueOnce(false)

    const result = await sut.login(paramsMock)

    const expected = {
      error: true,
      message: "E-mail/password is invalid",
      status: 400
    }

    expect(result).toStrictEqual(expected)
  })

  it("should be able to return a token and user", async () => {
    /**
     * Preparaçao
     * 1 - param
     * 2 - findByEmail true
     * 3 - compareSync
     * 4 - sign
     */
    const paramsMock = { email: "a@b.com", password: "1234" }
    const userMock = { name: "Victor", _id: 1, password: "asdjhaldjkasd", email: "a@b.com", } as any
    vi.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(userMock)
    vi.spyOn(bcrypt, 'compareSync').mockReturnValue(true)
    vi.spyOn(JWT, 'sign').mockReturnValue("sdfkljsdlkfjsdf" as any)

    const result = await sut.login(paramsMock)

    const expected = {
      tokinho: "sdfkljsdlkfjsdf",
      user: { id: 1, name: "Victor",  email: "a@b.com", }
    }

    expect(result).toStrictEqual(expected)

  })
})