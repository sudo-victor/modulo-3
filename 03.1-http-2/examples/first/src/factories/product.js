export const makeProduct = () => {
  const repository = new ProductRepository(Product)
  return repository
}