import { Order } from "../domain/Order.js"

function mapperOrderToDomain(orderFromDatabase) {
  return new Order({
    product: { name: orderFromDatabase.productName},
    recipient: { name: recipientName, address: recipientAddress }
  })
}

export default class OrderService {
  // Injecao de Dependencia
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

  async deliverAnOrder(id) {
    const order = await this.repository.findById(id)
    if (!order) {
      return { error: true, message: "Order not found" }
    }
    if (order.isDelivered) {
      return { error: true, message: "Order already delivered" }
    }
    await this.repository.updateOrderStatusToDelivered(id)
    return { ...order, isDelivered: true }
  }

  // Exemplo usando domínio
// async deliverAnOrder(id) {
//   const orderFromDB = await this.repository.findById(id)
//   if (!orderFromDB) {
//     return { error: true, message: "Order not found" }
//   }
//   if (orderFromDB.isDelivered) {
//     return { error: true, message: "Order already delivered" }
//   }
//   const order = mapperOrderToDomain(orderFromDB)
//   order.deliverAnOrder()
//   // await this.repository.updateOrderStatusToDelivered(id)
//   await this.repository.save(order)
//   return { ...order, isDelivered: true }
// }

}