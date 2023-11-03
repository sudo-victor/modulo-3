// Exercício 1: Adicionar um novo produto
// Crie uma função chamada addProductToCatalog que recebe um objeto representando um produto (com campos como nome, preço, categoria, etc.) e adiciona esse produto ao catálogo.

const catalog = []

function addProductToCatalog(product) {
  catalog.push(product)
  return product["name"]
}

// Exercício 2: Atualizar um produto existente
// Crie uma função chamada updateProductInCatalog que recebe o nome de um produto e um objeto com os novos dados para o produto.
// A função deve procurar o produto pelo nome no catálogo e atualizar seus dados com base no objeto fornecido.

function updateProductInCatalog(productName, newProduct) {
  const currentProduct = catalog.find(
    (item) => item.name === productName
  )

  if (!currentProduct) {
    return "Product not found"
  }

  Object.assign(currentProduct, newProduct)
}

// Exercício 3: Pesquisar produtos por categoria
// Crie uma função chamada findProductsByCategory que recebe o nome de uma categoria e retorna todos os produtos no catálogo que pertencem a essa categoria, no formato de uma lista.

// Exercício 4: Pesquisar produtos por preço
// Crie uma função chamada findProductsByPriceRange que recebe um valor mínimo e um valor máximo e retorna todos os produtos no catálogo que estão dentro desse intervalo de preço, no formato de uma lista.

// Exercício 5: Remover um produto do catálogo
// Crie uma função chamada removeProductFromCatalog que recebe o nome de um produto e remove esse produto do catálogo.
