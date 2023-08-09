class Product {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.price = data.price
    this.amount = data.amount
    this.category = data.category
    this.createdAt = new Date()
  }
}

export { Product }