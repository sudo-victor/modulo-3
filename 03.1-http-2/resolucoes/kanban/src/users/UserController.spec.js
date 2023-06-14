import { mockRequest, mockResponse } from "jest-mock-req-res"
import { UserController } from "./UserController"
import { jest } from "@jest/globals"

const service = { create: (body) => {} }
// System under test
const sut = new UserController(service)

describe("UserController.create", () => {
  it("deve ser capaz de retornar o usuário criado para o cliente", async () => {
    // preparar o teste
    const userCreatedMock = {
      _id: 123123,
      name: 'Victor',
      email: 'victor@example.com',
      createdAt: '2023-06-09T22:12:13.803Z'
    }
    jest.spyOn(service, "create").mockReturnValue(userCreatedMock)
    const req = mockRequest()
    const res = mockResponse()
    req.body = { name: 'Victor', email: 'victor@example.com' }

    // executar
    await sut.create(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(userCreatedMock)
  })

  it('deve ser capaz de retornar um erro caso passe um body errado', async () => {
    const req = mockRequest()
    const res = mockResponse()

    await sut.create(req, res)

    const jsonExpected = {
      "error": true,
      "errorsMessage": [
        "email is a required field",
      ]
    }

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith(jsonExpected)
  })

  it('deve ser capaz de lançar um erro se o serviço retornar um objeto com propiedade "error"', async () => {
    const createReturnMock = {
      error: true,
      status: 400,
      message: "User already exists"
    }
    jest.spyOn(service, "create").mockReturnValue(createReturnMock)
    const req = mockRequest()
    const res = mockResponse()
    req.body = { name: 'Victor', email: 'victor@example.com' }

    await sut.create(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith(createReturnMock)
  })
})