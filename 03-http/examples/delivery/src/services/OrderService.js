import { Order } from "../domain/Order.js"

export default class OrderService {
  constructor(repository) {
    this.repository = repository
  }

  /**
   * @param data
   * data.product.name -> String
   * data.recipient.name -> String
   * data.recipient.address -> String
   * { product: { name: '' }, recipient: { name: '', address: '' }}
   */
  async create(data) {
    const order = new Order(data)
    await this.repository.create(order)
  }

  findAllPending() {
    return this.repository.findAllPending()
  }

  async changeStatusToDelivered(id) {
    const order = await this.repository.findById(id)
    if (!order) {
      return "Order not found"
    }

    await this.repository.updateStatusToDelivered(id)

    return true
  }
}