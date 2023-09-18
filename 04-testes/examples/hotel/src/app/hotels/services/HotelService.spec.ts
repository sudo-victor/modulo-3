import { describe, test, vi, expect } from "vitest";
import { HotelService } from "./HotelService";
import { STATUS_CODE } from "../../../utils/statusCode";
import { CreateHotelDto } from "../dtos/createHotelDto";

const repositoryMock = { create: vi.fn(), findByName: vi.fn() }
// System under test - Quem eu to testando
const sut = new HotelService(repositoryMock)

describe("HotelService", () => {
  test("should be able to return an error if hotel already exists", async () => {
    const paramsMock = {
      "name": "Ibis Nova Iguaçu",
      "address": "rua tasdasd",
      "roomsAvailables": 100
    } as CreateHotelDto
    vi.spyOn(repositoryMock, "findByName").mockResolvedValue({})

    const result = await sut.create(paramsMock)

    const expected = {
      error: true,
      message: "Hotel already exists",
      status: STATUS_CODE.BAD_REQUEST
    }

    expect(result).toStrictEqual(expected)
  })

  test("should be able to handle a throw new error in findByName", async () => {
    const paramsMock = {
      "name": "Ibis Nova Iguaçu",
      "address": "rua tasdasd",
      "roomsAvailables": 100
    } as CreateHotelDto
    vi.spyOn(repositoryMock, "findByName").mockRejectedValue(new Error("Deu ruim"))

    const result = await sut.create(paramsMock)

    const expected = {
      error: true,
      message: "Deu ruim",
      status: STATUS_CODE.INTERNAL_SERVER_ERROR
    }
    
    expect(result).toStrictEqual(expected)
  })

  test("should be able to create a hotel", async () => {
    const paramsMock = {
      "name": "Ibis Nova Iguaçu",
      "address": "rua tasdasd",
      "roomsAvailables": 100
    }

    const expected = {
      "name": "Ibis Nova Iguaçu",
      "address": "rua tasdasd",
      "roomsAvailables": 100,
      "_id": "6504d40853fdf8c2d6ca3322",
      "createdAt": "2023-09-15T22:00:40.936Z",
      "updatedAt": "2023-09-15T22:00:40.936Z",
      "__v": 0
    }
    
    vi.spyOn(repositoryMock, "findByName").mockResolvedValue(null)
    vi.spyOn(repositoryMock, "create").mockResolvedValue(expected)

    const result = await sut.create(paramsMock)

    expect(result).toStrictEqual(expected)
  })

  test("should be able to handle a throw new error when try to create a user", async() => {
    const paramsMock = {
      "name": "Ibis Nova Iguaçu",
      "address": "rua tasdasd",
      "roomsAvailables": 100
    }
    vi.spyOn(repositoryMock, "findByName").mockResolvedValue(null)
    vi.spyOn(repositoryMock, "create").mockRejectedValue(new Error("Deu ruim no create")) // throw new Error("Deu ruim no create")
  
    const result = await sut.create(paramsMock)

    const expected = {
      error: true,
      message: "Deu ruim no create",
      status: STATUS_CODE.INTERNAL_SERVER_ERROR
    }
  
    expect(result).toStrictEqual(expected)
  })
})