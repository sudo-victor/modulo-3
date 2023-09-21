import { describe, it, vi, expect } from "vitest"
import bcrypt from "bcrypt"

import { UserService } from "./UserService"
import { UserRepository } from "../repositories/UserRepository"
import { IUser } from "../entities/User"
import { Document } from "mongoose"

// System under test
const repositoryMock = {
  findByEmail: vi.fn(),
  findAll: vi.fn(),
  findById: vi.fn(),
  pushBooking: vi.fn(),
  create: vi.fn()
} as any as UserRepository
const sut = new UserService(repositoryMock)

describe("UserService", () => {
  it("should be able to return an error if user already exists", async () => {
    const paramsMock = { name: "Fulano", email: "fulano@email.com", password: "1234" }
    vi.spyOn(repositoryMock, "findByEmail")
      .mockResolvedValue({
        id: "123456",
        name: "Ciclano",
        email: "fulano@email.com",
        password: "1234",
        createdAt: "",
        updatedAt: "",
      } as any
    )

    const result = await sut.create(paramsMock)

    expect(result).toStrictEqual({
      error: true,
      message: "User already exists",
      status: 400
    })
  })

  it("should be able to create a user", async () => {
    const paramsMock = { name: "Fulano", email: "fulano@email.com", password: "1234" }
    const expected = {
      id: 1,
      name: "Fulano",
      email: "fulano@email.com",
      password: "blablabla",
      createdAt: "",
      updatedAt: "",
    } as any

    vi.spyOn(repositoryMock, "findByEmail").mockResolvedValue(null)
    vi.spyOn(repositoryMock, "create").mockResolvedValue(expected)
    vi.spyOn(bcrypt, "hashSync").mockReturnValue("blablabla")

    const result = await sut.create(paramsMock)

    expect(result).toStrictEqual(expected)
  })
})