function makeProduct(product) {
  if(!(product.name && product.price && product.description)) {
    throw new Error("Product missing name, price and description")
  }

  return {
    ...product,
    starRating: 0,
    createdAt: new Date(),
  }
}

module.exports = makeProduct