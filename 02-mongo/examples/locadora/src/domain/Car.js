class Car {
  constructor(data) {
    this.model = data.model
    this.releasedAt = data.releasedAt
    this.brand = data.brand
    this.price = data.price
    this.status = data.status ?? "available"
    this.createdAt = new Date()
    this.updateAt = new Date()
  }
}

export { Car }
