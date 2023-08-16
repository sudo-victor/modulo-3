import { OrderService } from "../services/OrderService.js"
import { OrderRepository } from "../repositories/OrderRepository.js"

class MakeOrder {
  static getInstance(collection) {
    const repository = new OrderRepository(collection)
    const service = new OrderService(repository)
    return service
  }
}

export { MakeOrder }
