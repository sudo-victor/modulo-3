const Product = require("../domain/Product");

class ProductService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const productAlreadyExists = await this.repository.findByName(data.name)
    if (productAlreadyExists) {
      return "Product already exists"
    }

    const product = new Product(data)

    await this.repository.create(product)
  }

  async searchByName(name) {
    return this.repository.findProductsThatContains(name)
  }

  async searchByPriceRange(startPrice, endPrice) {
    if (startPrice > endPrice) {
      return "Start value cannot be greater than end value"
    }

    return this.repository.findProductsByPriceRange(startPrice, endPrice)
  }

  async remove(id) {
    const productInDb = await this.repository.findById(id)
    if (!productInDb) {
      return "Product not found"
    }

    const product = new Product(productInDb, productInDb._id)

    product.remove()

    await this.repository.save(product)
  }
}

module.exports = ProductService

