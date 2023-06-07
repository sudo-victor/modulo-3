Em desenvolvimento de software, "mock", "stub" e "spy" são termos comumente usados em testes de unidade e têm como objetivo auxiliar na simulação e verificação de comportamentos em testes automatizados. Vou explicar cada um deles e fornecer exemplos usando Node.js e Jest, uma popular estrutura de teste para JavaScript.

# Mock
Um mock é um objeto simulado que substitui uma dependência real do sistema durante os testes. Ele permite controlar o comportamento do objeto simulado para verificar como o sistema reage a determinadas condições. Os mocks geralmente são usados para simular interações com componentes externos, como bancos de dados, APIs ou serviços.

mock = OBJETO FAKE

```javascript

function makeProduct(product) {
  if(!(product.name && product.price)) {
    throw new Error("Missing parameters for makeProduct")
  }

  return {
    ...product,
    starRating: 0,
    createdAt: new Date(),
  }
}

test('deve retornar um objeto produto válido', () => {
  const mock = { name: 'Macbook M1', price: 6000 }

  const result = makeProduct(mock)

  expect(result.name).toBe(mock.name)
  expect(result.price).toBe(mock.price)
  expect(result.starRating).toBe(0)
  expect(result.createdAts).toBeTruthy()
})

test('deve retornar uma excessao passando um objeto produto invalido', () => {
  const mock = { price: 6000 }
  const result = () => makeProduct(mock)
  expect(result).toThrow('Missing parameters for makeProduc')
})

```