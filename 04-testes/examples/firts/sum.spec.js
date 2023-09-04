const sum = require("./index.js")

describe("Sum Function", () => {
  it("deve ser capaz de somar 2 mais 3 e retornar 5", () => {
    // preparaçao
    const x = 2
    const y = 3
    const expected = 5

    // execuçao
    const result = sum(x, y)

    // experado
    expect(result).toEqual(expected)
  })

  it("", () => {

  })
})
 
