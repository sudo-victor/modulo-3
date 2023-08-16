class Order {
  constructor(data) {
    this.productName = data.productName
    this.payerAddress = data.payerAddress
    this.payerName = data.payerName
    this.isDelivered = false
    this.createdAt = new Date()
  }
}

export { Order }
