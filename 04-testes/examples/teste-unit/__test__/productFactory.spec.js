const makeProduct = require('../src/productFactory')

test("#makeProduct deve ser capaz de criar um objeto produto", () => {
  // preparaçao
  const mock = { name: 'Macbook', price: 6000, description: 'lorem' }

  // execuçao
  const result = makeProduct(mock)

  // oq esperamos
  expect(result.name).toBe('Macbook')
  expect(result.price).toBe(6000)
  expect(result.description).toBe('lorem')
  expect(result.starRating).toBe(0)
  expect(result.createdAt).toBeTruthy()
})

test("#makeProduct deve retornar error caso receba um objeto errado", () => {
  const mock = {}

  // try {
  //   makeProduct(mock)
  // } catch(err) {
  //   expect(err.message).toBe("Product missing name, price and description")
  // }

  const result = () => makeProduct(mock)

  expect(result).toThrow("Product missing name, price and description")
})
