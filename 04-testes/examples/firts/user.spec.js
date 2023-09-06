import createUser from "./index.js"

describe("User", () => {
  it("deve ser capaz de criar um usuário dado as infos corretas", () => {
    // preparaçao
    const paramMock = { name: "Victor", email: "a@b.com" }
    const expected = [{ id: 123123, name: "Victor", email: "a@b.com" }]
    const databaseMock = []
    jest.spyOn(Date, "now").mockReturnValue(123123)

    // execuçao
    const result = createUser(paramMock, databaseMock)

    // validaçao
    expect(result).toStrictEqual(expected)
  })

  it("deve ser capaz de retornar erro caso exista um user com o mesmo email", () => {
    // preparacao
    const paramMock = { name: "Victor", email: "a@b.com" }
    const databaseMock = []
    const expected = "Error"
    jest.spyOn(databaseMock, "find").mockReturnValue(true)

    // execucao
    const result = createUser(paramMock, databaseMock)

    // validacao
    expect(result).toStrictEqual(expected)
  })
})

// Mock -> Valores Fakes
// Stub -> Colocar retornos fakes